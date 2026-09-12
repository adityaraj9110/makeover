import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import OfferSpotlightStrip from "@/components/OfferSpotlightStrip";
import ServicesQuickGrid from "@/components/ServicesQuickGrid";
import SocialProofRow from "@/components/SocialProofRow";
import OutletLocatorMini from "@/components/OutletLocatorMini";
import InstagramFeed from "@/components/InstagramFeed";
import Link from "next/link";

export const metadata: Metadata = {
  title:       "Venus Makeover — Premium Beauty Parlour | 4 Outlets",
  description: "Transform at Venus Makeover — 4 premium beauty outlets. Bridal makeovers, hair spa, skin care, nail art & more. Book your appointment today.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <OfferSpotlightStrip />
      <ServicesQuickGrid />
      <SocialProofRow />
      <OutletLocatorMini />
      <InstagramFeed />

      {/* Final CTA section */}
      <section
        className="section bg-venus-deep text-center"
        id="final-cta"
        aria-label="Book your appointment"
      >
        <div className="section-inner max-w-2xl mx-auto px-6">
          <p className="font-cormorant text-venus-gold text-xl italic mb-4">Your transformation awaits</p>
          <h2 className="font-cormorant text-venus-white text-4xl sm:text-5xl font-normal mb-4">
            Ready for your <em className="text-venus-gold not-italic">glow-up?</em>
          </h2>
          <div className="gold-divider-center my-6" />
          <p className="font-dm text-venus-blush/70 text-lg mb-10">
            Book an appointment at any of our 4 outlets — it&apos;s free and takes 30 seconds.
          </p>
          <Link href="/book" className="btn-primary text-base px-10 py-4" id="final-cta-book">
            Book Now — It&apos;s Free
          </Link>
          <div className="flex flex-wrap justify-center gap-6 mt-10">
            <a
              href="tel:+919876543210"
              className="font-dm text-venus-blush/60 hover:text-venus-gold transition-colors flex items-center gap-2 min-h-[44px]"
              aria-label="Call Venus Makeover main outlet"
            >
              📞 +91 98765 43210
            </a>
            <a
              href="tel:+919876543211"
              className="font-dm text-venus-blush/60 hover:text-venus-gold transition-colors flex items-center gap-2 min-h-[44px]"
              aria-label="Call Venus Makeover city centre outlet"
            >
              📞 +91 98765 43211
            </a>
          </div>
        </div>
      </section>

      {/* JSON-LD LocalBusiness schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BeautySalon",
            "name": "Venus Makeover",
            "description": "Premium women's beauty parlour with 4 outlets across the city",
            "url": "https://venusmakeover.in",
            "priceRange": "₹₹",
            "image": "/hero.jpg",
            "sameAs": [
              "https://instagram.com/venusmakeover",
              "https://facebook.com/venusmakeover"
            ]
          }),
        }}
      />
    </>
  );
}
