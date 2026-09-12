const outlets = [
  {
    id:        "outlet-1",
    name:      "Venus Makeover — Main Branch",
    address:   "12, Rose Garden Complex, MG Road, Your City — 400001",
    phone:     "+91 98765 43210",
    whatsapp:  "919876543210",
    hours:     { open: 9, close: 21 },
    mapsUrl:   "https://maps.google.com/?q=Venus+Makeover+MG+Road",
    mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0!2d77.5!3d12.9!",
  },
  {
    id:        "outlet-2",
    name:      "Venus Makeover — City Centre",
    address:   "45, Orchid Mall, FC Road, Your City — 411016",
    phone:     "+91 98765 43211",
    whatsapp:  "919876543211",
    hours:     { open: 10, close: 20 },
    mapsUrl:   "https://maps.google.com/?q=Venus+Makeover+FC+Road",
    mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.5!2d73.8!3d18.5!",
  },
  {
    id:        "outlet-3",
    name:      "Venus Makeover — South City",
    address:   "8, Lotus Tower, Koregaon Park, Your City — 411001",
    phone:     "+91 98765 43212",
    whatsapp:  "919876543212",
    hours:     { open: 9, close: 21 },
    mapsUrl:   "https://maps.google.com/?q=Venus+Makeover+Koregaon+Park",
    mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887!2d73.89!3d18.53!",
  },
  {
    id:        "outlet-4",
    name:      "Venus Makeover — North Square",
    address:   "22, Pearl Arcade, Baner Road, Your City — 411045",
    phone:     "+91 98765 43213",
    whatsapp:  "919876543213",
    hours:     { open: 10, close: 21 },
    mapsUrl:   "https://maps.google.com/?q=Venus+Makeover+Baner",
    mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887!2d73.78!3d18.56!",
  },
];

function getOpenStatus(hours: { open: number; close: number }) {
  const now  = new Date();
  const h    = now.getHours();
  const open = h >= hours.open && h < hours.close;
  return {
    open,
    label: open
      ? `Open · closes at ${hours.close > 12 ? hours.close - 12 : hours.close}${hours.close >= 12 ? "pm" : "am"}`
      : `Closed · opens at ${hours.open}${hours.open >= 12 ? "pm" : "am"}`,
  };
}

export default function OutletLocatorMini() {
  return (
    <section className="section bg-venus-blush" id="outlets-mini" aria-label="Find a Venus Makeover outlet">
      <div className="section-inner">
        <div className="text-center mb-10">
          <p className="font-dm text-xs text-venus-gold tracking-[0.16em] uppercase mb-2">Find Us</p>
          <h2 className="font-cormorant text-venus-ink">
            4 Outlets Across <em className="text-venus-gold not-italic">Your City</em>
          </h2>
          <div className="gold-divider-center mt-4" />
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {outlets.map((outlet) => {
            const status = getOpenStatus(outlet.hours);
            return (
              <article key={outlet.id} className="card-venus p-6 flex flex-col gap-4" id={outlet.id}>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-dm font-medium text-venus-ink text-base leading-snug">
                      {outlet.name}
                    </h3>
                    <p className="font-dm text-sm text-venus-ink/60 mt-1">{outlet.address}</p>
                  </div>
                  <span className={status.open ? "badge-open flex-shrink-0" : "badge-closed flex-shrink-0"}>
                    {status.open ? "● " : "○ "}
                    {status.label}
                  </span>
                </div>

                <div className="flex flex-wrap gap-3">
                  {/* Tap to call */}
                  <a
                    href={`tel:${outlet.phone.replace(/\s/g, "")}`}
                    className="font-dm text-sm text-venus-deep hover:text-venus-rose transition-colors flex items-center gap-1 min-h-[44px] px-3 bg-venus-blush rounded"
                    aria-label={`Call ${outlet.name}`}
                  >
                    📞 {outlet.phone}
                  </a>

                  {/* WhatsApp */}
                  <a
                    href={`https://wa.me/${outlet.whatsapp}?text=Hi+Venus+Makeover!+I'd+like+to+book+an+appointment.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-dm text-sm text-[#25d366] hover:opacity-80 transition-opacity flex items-center gap-1 min-h-[44px] px-3 bg-[#25d366]/10 rounded"
                    aria-label={`WhatsApp ${outlet.name}`}
                  >
                    💬 WhatsApp
                  </a>

                  {/* Directions */}
                  <a
                    href={outlet.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-dm text-sm text-venus-deep hover:text-venus-gold transition-colors flex items-center gap-1 min-h-[44px] px-3 bg-venus-blush rounded"
                    aria-label={`Get directions to ${outlet.name}`}
                  >
                    📍 Get Directions
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        <div className="text-center mt-8">
          <a href="/outlets" className="btn-ghost" id="outlets-mini-view-all">
            View All Outlet Details
          </a>
        </div>
      </div>
    </section>
  );
}

export { outlets };
