import type { Metadata } from "next";
import "./globals.css";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ExitIntentPopup from "@/components/ExitIntentPopup";

export const metadata: Metadata = {
  title: {
    default:  "Venus Makeover — Premium Beauty Parlour | 4 Outlets",
    template: "%s | Venus Makeover",
  },
  description:
    "Venus Makeover — premium women's beauty parlour with 4 outlets across the city. Bridal makeovers, hair spa, skin care, nail art & more. Book your appointment today.",
  keywords: [
    "beauty parlour",
    "bridal makeup",
    "hair spa",
    "skin care",
    "nail art",
    "mehndi",
    "Venus Makeover",
  ],
  openGraph: {
    type:        "website",
    siteName:    "Venus Makeover",
    title:       "Venus Makeover — Premium Beauty Parlour",
    description: "4 premium beauty outlets. Bridal makeovers, hair spa, skin care & more.",
    images: [{ url: "/hero.jpg", width: 1200, height: 630, alt: "Venus Makeover salon interior" }],
  },
  twitter: {
    card:        "summary_large_image",
    title:       "Venus Makeover",
    description: "Premium beauty parlour with 4 outlets.",
    images:      ["/hero.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[9999] focus:bg-venus-gold focus:text-venus-deep focus:px-4 focus:py-2 focus:rounded font-dm text-sm font-medium">
          Skip to main content
        </a>
        <AnnouncementBar />
        <Navigation />
        <main id="main-content">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
        <ExitIntentPopup />
      </body>
    </html>
  );
}
