import type { Metadata } from "next";
import { outlets } from "@/components/OutletLocatorMini";
import Link from "next/link";

export const metadata: Metadata = {
  title:       "Our Outlets",
  description: "Find Venus Makeover near you — 4 premium beauty outlets across the city. Get directions, call, or WhatsApp to book.",
};

function getOpenStatus(hours: { open: number; close: number }) {
  const now  = new Date();
  const h    = now.getHours();
  const open = h >= hours.open && h < hours.close;
  return {
    open,
    label: open
      ? `Open now · closes at ${hours.close > 12 ? hours.close - 12 : hours.close}${hours.close >= 12 ? "pm" : "am"}`
      : `Closed · opens at ${hours.open}${hours.open >= 12 ? "pm" : "am"}`,
  };
}

const outletServices = [
  ["Bridal Makeover", "Hair Spa", "Skin Care", "Nail Art", "Waxing", "Mehndi"],
  ["Bridal Makeover", "Hair Care", "Skin Facial", "Nail Art", "Waxing"],
  ["Bridal Makeover", "Hair Spa", "Advanced Skin Care", "Waxing", "Mehndi"],
  ["Hair Care", "Skin Care", "Nail Art", "Waxing", "Threading"],
];

export default function OutletsPage() {
  return (
    <div className="min-h-screen bg-venus-blush">
      {/* Header */}
      <div className="bg-venus-deep py-16 px-6 text-center">
        <p className="font-dm text-xs text-venus-gold tracking-[0.16em] uppercase mb-3">Find Us</p>
        <h1 className="font-cormorant text-venus-white text-hero font-normal">
          Our <em className="text-venus-gold not-italic">Outlets</em>
        </h1>
        <p className="font-dm text-venus-blush/70 mt-4">
          4 premium locations — find the one nearest to you.
        </p>
      </div>

      <div className="section">
        <div className="section-inner space-y-10">
          {outlets.map((outlet, i) => {
            const status = getOpenStatus(outlet.hours);
            return (
              <article
                key={outlet.id}
                id={outlet.id}
                className="card-venus overflow-hidden grid md:grid-cols-2"
                aria-labelledby={`${outlet.id}-name`}
              >
                {/* Info side */}
                <div className="p-8 flex flex-col gap-5">
                  <div className="flex items-start justify-between gap-3 flex-wrap">
                    <div>
                      <h2 id={`${outlet.id}-name`} className="font-cormorant text-venus-ink text-2xl">
                        {outlet.name}
                      </h2>
                      <p className="font-dm text-sm text-venus-ink/60 mt-1">{outlet.address}</p>
                    </div>
                    <span className={status.open ? "badge-open flex-shrink-0 self-start" : "badge-closed flex-shrink-0 self-start"}>
                      {status.open ? "● " : "○ "}{status.label}
                    </span>
                  </div>

                  <div className="gold-divider" />

                  {/* Hours */}
                  <div>
                    <p className="font-dm text-xs text-venus-ink/40 uppercase tracking-wider mb-2">Hours</p>
                    <p className="font-dm text-sm text-venus-ink">
                      Mon – Sun · {outlet.hours.open}:00 am – {outlet.hours.close > 12 ? outlet.hours.close - 12 : outlet.hours.close}:00 {outlet.hours.close >= 12 ? "pm" : "am"}
                    </p>
                  </div>

                  {/* Services available */}
                  <div>
                    <p className="font-dm text-xs text-venus-ink/40 uppercase tracking-wider mb-2">Services Available</p>
                    <div className="flex flex-wrap gap-2">
                      {outletServices[i].map((svc) => (
                        <span key={svc} className="font-dm text-xs px-3 py-1 bg-venus-blush text-venus-ink rounded-full">
                          {svc}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action links */}
                  <div className="flex flex-wrap gap-3 mt-auto">
                    <a
                      href={`tel:${outlet.phone.replace(/\s/g, "")}`}
                      className="btn-primary flex-1 min-w-[120px] justify-center text-sm"
                      id={`outlet-call-${outlet.id}`}
                      aria-label={`Call ${outlet.name}`}
                    >
                      📞 Call Now
                    </a>
                    <a
                      href={`https://wa.me/${outlet.whatsapp}?text=Hi+Venus+Makeover!+I'd+like+to+book.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost flex-1 min-w-[120px] justify-center text-sm"
                      id={`outlet-wa-${outlet.id}`}
                      aria-label={`WhatsApp ${outlet.name}`}
                    >
                      💬 WhatsApp
                    </a>
                    <a
                      href={outlet.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost flex-1 min-w-[120px] justify-center text-sm"
                      id={`outlet-directions-${outlet.id}`}
                      aria-label={`Get directions to ${outlet.name}`}
                    >
                      📍 Directions
                    </a>
                  </div>
                </div>

                {/* Map side */}
                <div className="bg-venus-blush/50 min-h-[250px] md:min-h-0 flex items-center justify-center relative">
                  {/* Placeholder map — replace iframe src with actual Google Maps embed */}
                  <div className="absolute inset-0 bg-gradient-to-br from-venus-blush to-venus-gold/10 flex flex-col items-center justify-center gap-4 p-8 text-center">
                    <span className="text-5xl">📍</span>
                    <p className="font-dm text-sm text-venus-ink/70">{outlet.address}</p>
                    <a
                      href={outlet.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-deep text-sm"
                      id={`outlet-map-link-${outlet.id}`}
                    >
                      Open in Google Maps
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Schema markup per outlet */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            outlets.map((o, i) => ({
              "@context": "https://schema.org",
              "@type": "BeautySalon",
              "name": o.name,
              "address": { "@type": "PostalAddress", "streetAddress": o.address },
              "telephone": o.phone,
              "openingHours": `Mo-Su ${o.hours.open < 10 ? "0" : ""}${o.hours.open}:00-${o.hours.close < 10 ? "0" : ""}${o.hours.close}:00`,
              "priceRange": "₹₹",
              "hasMap": o.mapsUrl,
            }))
          ),
        }}
      />
    </div>
  );
}
