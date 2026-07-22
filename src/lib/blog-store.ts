import seedPosts from "../../data/blog-posts.json";
import { getMongoConfigError, getMongoDb } from "@/lib/mongodb";

export type BlogPost = {
  alt: string;
  category: string;
  content: string;
  date: string;
  excerpt: string;
  image: string;
  published: string;
  readTime: string;
  slug: string;
  title: string;
};

export type BlogPostInput = {
  alt?: string;
  category: string;
  content: string;
  date?: string;
  excerpt: string;
  image?: string;
  readTime?: string;
  title: string;
};

const collectionName = "blogs";
const defaultImage = "/images/hero-dubai-film-production.png";

export async function getBlogPosts(): Promise<BlogPost[]> {
  if (getMongoConfigError()) {
    return getSeedPosts();
  }

  try {
    const collection = await getBlogCollection();
    await seedBlogPostsIfNeeded(collection);
    const posts = await collection
      .find({}, { projection: { _id: 0 } })
      .sort({ createdAt: -1, date: -1 })
      .toArray();

    return posts.map(toBlogPost);
  } catch (error) {
    warnMongoReadFallback("getBlogPosts", error);
    return getSeedPosts();
  }
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  if (getMongoConfigError()) {
    return getSeedPosts().find((post) => post.slug === slug) ?? null;
  }

  try {
    const collection = await getBlogCollection();
    await seedBlogPostsIfNeeded(collection);
    const post = await collection.findOne({ slug }, { projection: { _id: 0 } });

    return post ? toBlogPost(post) : null;
  } catch (error) {
    warnMongoReadFallback("getBlogPost", error);
    return getSeedPosts().find((post) => post.slug === slug) ?? null;
  }
}

export async function createBlogPost(input: BlogPostInput): Promise<BlogPost> {
  const configError = getMongoConfigError();

  if (configError) {
    throw new Error(configError);
  }

  const collection = await getBlogCollection();
  await seedBlogPostsIfNeeded(collection);

  const title = cleanRequired(input.title, "Title");
  const category = cleanRequired(input.category, "Category");
  const excerpt = cleanRequired(input.excerpt, "Excerpt");
  const content = cleanRequired(input.content, "Content");
  const date =
    cleanOptional(input.date) ||
    new Date().toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  const baseSlug = slugify(title);
  const slug = await uniqueSlug(baseSlug);
  const post: BlogPost = {
    alt: cleanOptional(input.alt) || title,
    category,
    content,
    date,
    excerpt,
    image: cleanOptional(input.image) || defaultImage,
    published: String(new Date().getFullYear()),
    readTime: cleanOptional(input.readTime) || "Quick read",
    slug,
    title,
  };

  await collection.insertOne({
    ...post,
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  return post;
}

async function getBlogCollection() {
  const db = await getMongoDb();
  const collection = db.collection(collectionName);
  await collection.createIndex({ slug: 1 }, { unique: true });
  await collection.createIndex({ createdAt: -1 });

  return collection;
}

async function seedBlogPostsIfNeeded(collection: Awaited<ReturnType<typeof getBlogCollection>>) {
  const now = Date.now();
  const operations = (seedPosts as BlogPost[]).map((post, index) => ({
    updateOne: {
      filter: { slug: post.slug },
      update: {
        $setOnInsert: {
          ...post,
          createdAt: new Date(now - index * 1000),
          updatedAt: new Date(),
        },
      },
      upsert: true,
    },
  }));

  await collection.bulkWrite(operations, { ordered: false });
}

async function uniqueSlug(baseSlug: string) {
  const collection = await getBlogCollection();
  let slug = baseSlug;
  let index = 2;

  while (await collection.findOne({ slug })) {
    slug = `${baseSlug}-${index}`;
    index += 1;
  }

  return slug;
}

function cleanRequired(value: string | undefined, label: string) {
  const cleaned = cleanOptional(value);

  if (!cleaned) {
    throw new Error(`${label} is required.`);
  }

  return cleaned;
}

function cleanOptional(value: string | undefined) {
  return value?.replace(/\s+/g, " ").trim() ?? "";
}

function slugify(value: string) {
  const slug = value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  return slug || `post-${Date.now()}`;
}

function toBlogPost(value: Record<string, unknown>): BlogPost {
  return {
    alt: String(value.alt ?? ""),
    category: String(value.category ?? ""),
    content: String(value.content ?? ""),
    date: String(value.date ?? ""),
    excerpt: String(value.excerpt ?? ""),
    image: String(value.image ?? defaultImage),
    published: String(value.published ?? ""),
    readTime: String(value.readTime ?? "Quick read"),
    slug: String(value.slug ?? ""),
    title: String(value.title ?? ""),
  };
}

function getSeedPosts() {
  return [...(seedPosts as BlogPost[])].sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
}

function warnMongoReadFallback(operation: string, error: unknown) {
  if (process.env.NODE_ENV === "production") {
    return;
  }

  const message = error instanceof Error ? error.message : String(error);
  console.warn(`[blog-store] ${operation} failed; using seed blog posts. ${message}`);
}
