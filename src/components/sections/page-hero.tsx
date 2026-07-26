import Image from "next/image";

export function PageHero({
  eyebrow,
  title,
  description,
  image = "/images/cinematic-hero.png",
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description: string;
  image?: string;
  align?: "left" | "center";
}) {
  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-32 text-white md:pt-36">
      <Image
        alt={title}
        className="absolute inset-0 object-cover"
        fill
        priority
        sizes="100vw"
        src={image}
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,9,21,0.9),rgba(5,9,21,0.62),rgba(5,9,21,0.28))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(0,168,107,0.28),transparent_24rem)]" />
      <div
        className={[
          "relative mx-auto max-w-7xl",
          align === "center" ? "text-center" : "",
        ].join(" ")}
      >
        {eyebrow ? (
          <p className="text-sm font-black uppercase tracking-[0.24em] text-[#7de8c5]">
            {eyebrow}
          </p>
        ) : null}
        <h1
          className={[
            eyebrow ? "mt-5" : "",
            "text-4xl font-black leading-tight tracking-normal sm:text-5xl md:text-6xl",
            align === "center" ? "mx-auto max-w-5xl" : "max-w-5xl",
          ].join(" ")}
        >
          {title}
        </h1>
        <p
          className={[
            "mt-5 text-base leading-8 text-white/72",
            align === "center" ? "mx-auto max-w-3xl" : "max-w-3xl",
          ].join(" ")}
        >
          {description}
        </p>
      </div>
    </section>
  );
}
