import Image from "next/image";
import Link from "next/link";
import CountdownTimer from "./CountdownTimer";

export interface Offer {
  id:          string;
  title:       string;
  service:     string;
  originalPrice: string;
  offerPrice:  string;
  image:       string;
  imageAlt:    string;
  validTill:   string; // ISO date
  outlets:     string[];
  slug:        string;
}

function isEndingSoon(validTill: string, hoursThreshold = 48): boolean {
  return new Date(validTill).getTime() - Date.now() < hoursThreshold * 3600 * 1000;
}

function isWithin7Days(validTill: string): boolean {
  return new Date(validTill).getTime() - Date.now() < 7 * 24 * 3600 * 1000;
}

export function OfferCard({ offer }: { offer: Offer }) {
  const ending = isEndingSoon(offer.validTill);
  const showTimer = isWithin7Days(offer.validTill);

  return (
    <article className="card-venus flex flex-col" id={`offer-card-${offer.id}`}>
      <div className="relative overflow-hidden aspect-[4/3]">
        <Image
          src={offer.image}
          alt={offer.imageAlt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        {ending && (
          <span className="badge-ending absolute top-3 left-3">Ending Soon</span>
        )}
        {/* Outlet tags */}
        <div className="absolute bottom-3 left-3 flex flex-wrap gap-1">
          {offer.outlets.map((o) => (
            <span
              key={o}
              className="bg-venus-deep/80 text-venus-gold text-[10px] font-dm font-medium px-2 py-0.5 rounded-sm"
            >
              {o}
            </span>
          ))}
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1 gap-3">
        <div>
          <p className="font-dm text-xs text-venus-ink/50 uppercase tracking-wider mb-1">{offer.service}</p>
          <h3 className="font-dm text-lg font-medium text-venus-ink leading-snug">{offer.title}</h3>
        </div>

        <div className="flex items-baseline gap-3">
          <span className="price-offer">{offer.offerPrice}</span>
          <span className="price-original">{offer.originalPrice}</span>
        </div>

        {showTimer && (
          <CountdownTimer expiryDate={offer.validTill} />
        )}

        <Link
          href={`/book?offer=${offer.slug}`}
          className="btn-primary mt-auto justify-center w-full"
          id={`offer-book-${offer.id}`}
        >
          Book This Offer
        </Link>
      </div>
    </article>
  );
}

// ── Offer Spotlight Strip (Homepage) ─────────────────────────────────
export const sampleOffers: Offer[] = [
  {
    id:            "bridal-01",
    title:         "Complete Bridal Package",
    service:       "Bridal",
    originalPrice: "₹8,500",
    offerPrice:    "₹5,950",
    image:         "/bridal-offer.jpg",
    imageAlt:      "Indian bride getting bridal makeup done at Venus Makeover",
    validTill:     "2026-12-31T23:59:00",
    outlets:       ["Outlet 1", "Outlet 2"],
    slug:          "bridal-package",
  },
  {
    id:            "hair-01",
    title:         "Hair Spa + Head Massage",
    service:       "Hair Care",
    originalPrice: "₹1,200",
    offerPrice:    "₹799",
    image:         "/hair-spa.jpg",
    imageAlt:      "Woman relaxing during luxury hair spa treatment at Venus Makeover",
    validTill:     "2026-11-30T23:59:00",
    outlets:       ["All 4 Outlets"],
    slug:          "hair-spa",
  },
  {
    id:            "skin-01",
    title:         "Skin Glow Facial",
    service:       "Skin Care",
    originalPrice: "₹900",
    offerPrice:    "₹499",
    image:         "/hero.jpg",
    imageAlt:      "Professional skin care facial treatment at Venus Makeover",
    validTill:     "2026-11-15T23:59:00",
    outlets:       ["Outlet 3", "Outlet 4"],
    slug:          "skin-glow-facial",
  },
];

export default function OfferSpotlightStrip() {
  return (
    <section className="section bg-venus-blush" id="offers-strip" aria-label="Today's deals">
      <div className="section-inner">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="font-dm text-xs text-venus-gold tracking-[0.16em] uppercase mb-2">Limited Time</p>
            <h2 className="font-cormorant text-venus-ink">
              Today&apos;s <em className="text-venus-gold not-italic">Deals</em>
            </h2>
          </div>
          <Link href="/offers" className="btn-ghost hidden sm:inline-flex" id="strip-all-offers-btn">
            All Offers →
          </Link>
        </div>

        {/* Card grid — horizontal scroll on mobile */}
        <div className="flex gap-5 overflow-x-auto pb-2 md:grid md:grid-cols-3 md:overflow-visible snap-x snap-mandatory">
          {sampleOffers.map((offer) => (
            <div key={offer.id} className="min-w-[80vw] sm:min-w-[300px] md:min-w-0 snap-start group flex-shrink-0">
              <OfferCard offer={offer} />
            </div>
          ))}
        </div>

        <div className="mt-6 sm:hidden">
          <Link href="/offers" className="btn-ghost w-full justify-center" id="strip-all-offers-mobile">
            View All Offers →
          </Link>
        </div>
      </div>
    </section>
  );
}
