import type { Metadata } from "next";
import Link from "next/link";
import { OfferCard, sampleOffers } from "@/components/OfferSpotlightStrip";

export const metadata: Metadata = {
  title:       "Beauty Offers & Packages",
  description: "Current beauty offers & packages at Venus Makeover — 4 outlets. Bridal, hair spa, skin glow & more at discounted prices. Book today.",
};

const allOffers = [
  ...sampleOffers,
  {
    id:            "nail-01",
    title:         "Gel Nail Art + Manicure",
    service:       "Nail Art",
    originalPrice: "₹800",
    offerPrice:    "₹549",
    image:         "/hero.jpg",
    imageAlt:      "Professional gel nail art at Venus Makeover",
    validTill:     "2026-12-01T23:59:00",
    outlets:       ["All 4 Outlets"],
    slug:          "nail-art",
  },
  {
    id:            "mehndi-01",
    title:         "Bridal Mehndi — Full Arms",
    service:       "Mehndi",
    originalPrice: "₹2,500",
    offerPrice:    "₹1,799",
    image:         "/bridal-offer.jpg",
    imageAlt:      "Intricate bridal mehndi design at Venus Makeover",
    validTill:     "2026-12-31T23:59:00",
    outlets:       ["Outlet 1", "Outlet 3"],
    slug:          "bridal-mehndi",
  },
];

const categories = ["All", "Bridal", "Hair Care", "Skin Care", "Nail Art", "Mehndi"];
const outletFilters = ["All Outlets", "Outlet 1", "Outlet 2", "Outlet 3", "Outlet 4"];

export default function OffersPage() {
  return (
    <div className="min-h-screen bg-venus-blush">
      {/* Hero band */}
      <div className="bg-venus-deep py-16 px-6 text-center">
        <p className="font-dm text-xs text-venus-gold tracking-[0.16em] uppercase mb-3">Limited Time</p>
        <h1 className="font-cormorant text-venus-white text-hero font-normal">
          Current <em className="text-venus-gold not-italic">Offers</em>
        </h1>
        <p className="font-dm text-venus-blush/70 mt-4">
          All offers are valid at listed outlets. Book to avail.
        </p>
      </div>

      <div className="section">
        <div className="section-inner">
          {/* Filters — visual only, JS filter would be added with state in client component */}
          <div className="mb-8 space-y-4">
            <div className="flex gap-2 flex-wrap">
              <span className="font-dm text-xs text-venus-ink/50 self-center mr-1">Category:</span>
              {categories.map((cat) => (
                <span
                  key={cat}
                  className={`font-dm text-xs px-4 py-2 rounded-full border cursor-pointer transition-colors ${
                    cat === "All"
                      ? "border-venus-gold bg-venus-gold text-venus-deep"
                      : "border-venus-ink/15 text-venus-ink/60 hover:border-venus-gold hover:text-venus-gold"
                  }`}
                >
                  {cat}
                </span>
              ))}
            </div>
            <div className="flex gap-2 flex-wrap">
              <span className="font-dm text-xs text-venus-ink/50 self-center mr-1">Outlet:</span>
              {outletFilters.map((outlet) => (
                <span
                  key={outlet}
                  className={`font-dm text-xs px-4 py-2 rounded-full border cursor-pointer transition-colors ${
                    outlet === "All Outlets"
                      ? "border-venus-deep bg-venus-deep text-venus-white"
                      : "border-venus-ink/15 text-venus-ink/60 hover:border-venus-deep"
                  }`}
                >
                  {outlet}
                </span>
              ))}
            </div>
          </div>

          {/* Offers grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allOffers.map((offer) => (
              <OfferCard key={offer.id} offer={offer} />
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-14 pt-10 border-t border-venus-ink/10">
            <p className="font-cormorant text-venus-ink text-2xl mb-4">
              Don&apos;t see what you&apos;re looking for?
            </p>
            <p className="font-dm text-venus-ink/60 mb-6">
              WhatsApp us and we&apos;ll find the best deal for you.
            </p>
            <a
              href="https://wa.me/919876543210?text=Hi+Venus+Makeover!+I'm+looking+for+a+special+offer."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              id="offers-whatsapp-cta"
            >
              WhatsApp for Custom Deal
            </a>
          </div>
        </div>
      </div>

      {/* Schema markup for offers */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Venus Makeover Current Offers",
            "itemListElement": allOffers.map((o, i) => ({
              "@type": "Offer",
              "position": i + 1,
              "name": o.title,
              "price": o.offerPrice.replace("₹", "").replace(",", ""),
              "priceCurrency": "INR",
              "validThrough": o.validTill,
              "seller": { "@type": "BeautySalon", "name": "Venus Makeover" },
            })),
          }),
        }}
      />
    </div>
  );
}
