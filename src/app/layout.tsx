import type { Metadata } from "next";
import { Geist_Mono, Outfit } from "next/font/google";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { InlineScript } from "@/components/layout/inline-script";
import { StartupShell } from "@/components/layout/startup-shell";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { SmoothScroll } from "@/components/motion/smooth-scroll";
import { site } from "@/lib/site-data";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "FilmPermit.ae | UAE Filming Permits & Production Support",
    template: "%s | FilmPermit.ae",
  },
  description:
    "UAE filming permits, photography permits, production logistics, crew hire, equipment rental, customs clearance, and on-ground production support.",
  openGraph: {
    title: "FilmPermit.ae | UAE Filming Permits & Production Support",
    description:
      "Trusted UAE production support partner for permits, crew, equipment, logistics, and filming operations.",
    images: ["/images/hero-dubai-film-production.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <InlineScript html="try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}" />
      </head>
      <body className="min-h-full flex flex-col">
        <StartupShell>
          <SmoothScroll>
            <Header />
            <div className="flex-1">{children}</div>
            <Footer />
            <WhatsAppButton />
          </SmoothScroll>
        </StartupShell>
      </body>
    </html>
  );
}
