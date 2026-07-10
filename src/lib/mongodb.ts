import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB || "filmpermit";
const mongoTimeoutMs = Number(process.env.MONGODB_TIMEOUT_MS || 3000);

let clientPromise: Promise<MongoClient> | undefined;

export function getMongoConfigError() {
  if (!uri) {
    return "MONGODB_URI is not configured.";
  }

  if (uri.includes("USER:PASSWORD") || uri.includes("CLUSTER.mongodb.net")) {
    return "MONGODB_URI still contains placeholder Atlas values.";
  }

  return "";
}

export async function getMongoDb() {
  const error = getMongoConfigError();

  if (error) {
    throw new Error(error);
  }

  if (!clientPromise) {
    const client = new MongoClient(uri as string, {
      connectTimeoutMS: mongoTimeoutMs,
      serverSelectionTimeoutMS: mongoTimeoutMs,
    });
    clientPromise = client.connect().catch((error) => {
      clientPromise = undefined;
      throw error;
    });
  }

  const client = await clientPromise;

  return client.db(dbName);
}
