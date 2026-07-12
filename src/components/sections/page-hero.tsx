import Image from "next/image";

export function PageHero({
  eyebrow,
  title,
  description,
  image = "/images/cinematic-hero.png",
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description: string;
  image?: string;
  align?: "left" | "center";
}) {
  return (
    <section className="relative overflow-hidden px-6 pb-24 pt-40 text-white">
      <Image
        alt={title}
        className="absolute inset-0 object-cover"
        fill
        priority
        sizes="100vw"
        src={image}
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,9,21,0.9),rgba(5,9,21,0.62),rgba(5,9,21,0.28))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(47,109,246,0.28),transparent_24rem)]" />
      <div
        className={[
          "relative mx-auto max-w-7xl",
          align === "center" ? "text-center" : "",
        ].join(" ")}
      >
        <p className="text-sm font-black uppercase tracking-[0.24em] text-[#9fb8ff]">
          {eyebrow}
        </p>
        <h1
          className={[
            "mt-5 text-5xl font-black leading-tight tracking-normal md:text-7xl",
            align === "center" ? "mx-auto max-w-5xl" : "max-w-5xl",
          ].join(" ")}
        >
          {title}
        </h1>
        <p
          className={[
            "mt-6 text-lg leading-8 text-white/72",
            align === "center" ? "mx-auto max-w-3xl" : "max-w-3xl",
          ].join(" ")}
        >
          {description}
        </p>
      </div>
    </section>
  );
}
