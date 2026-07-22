import type { Metadata } from "next";
import { Geist_Mono, Inter, Inter_Tight } from "next/font/google";
import { CookieConsent } from "@/components/layout/cookie-consent";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { InlineScript } from "@/components/layout/inline-script";
import { StartupShell } from "@/components/layout/startup-shell";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { SmoothScroll } from "@/components/motion/smooth-scroll";
import { site } from "@/lib/site-data";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
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
  const startupScript = `
    try {
      var theme = localStorage.getItem('theme');
      if (theme === 'dark' || (!theme && matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
      }
    } catch (e) {}
  `;

  return (
    <html
      lang="en"
      className={`${inter.variable} ${interTight.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <InlineScript html={startupScript} />
      </head>
      <body className="min-h-full flex flex-col">
        <StartupShell>
          <SmoothScroll>
            <Header />
            <div className="flex-1">{children}</div>
            <Footer />
            <WhatsAppButton />
            <CookieConsent />
          </SmoothScroll>
        </StartupShell>
      </body>
    </html>
  );
}
