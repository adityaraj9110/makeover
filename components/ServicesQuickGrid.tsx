import Link from "next/link";

const services = [
  { name: "Bridal Makeover", emoji: "👰", href: "/services#bridal",   bg: "#1C0F2E", color: "#C9A84C" },
  { name: "Hair Care",       emoji: "💇", href: "/services#hair",     bg: "#2D1447", color: "#F2DFD0" },
  { name: "Skin Care",       emoji: "✨", href: "/services#skin",     bg: "#C97D7D", color: "#FDF8F4" },
  { name: "Nail Art",        emoji: "💅", href: "/services#nails",    bg: "#C9A84C", color: "#1C0F2E" },
  { name: "Waxing",          emoji: "🌸", href: "/services#waxing",   bg: "#F2DFD0", color: "#1C0F2E" },
  { name: "Mehndi",          emoji: "🎨", href: "/services#mehndi",   bg: "#2A1A1A", color: "#C9A84C" },
];

export default function ServicesQuickGrid() {
  return (
    <section className="section bg-venus-white" id="services-grid" aria-label="Our services">
      <div className="section-inner">
        <div className="text-center mb-10">
          <p className="font-dm text-xs text-venus-gold tracking-[0.16em] uppercase mb-2">What We Do</p>
          <h2 className="font-cormorant text-venus-ink">
            Our <em className="text-venus-gold not-italic">Services</em>
          </h2>
          <div className="gold-divider-center mt-4" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {services.map((svc) => (
            <Link
              key={svc.name}
              href={svc.href}
              className="group relative aspect-square flex flex-col items-center justify-center gap-3 rounded-[4px] overflow-hidden transition-transform duration-200 hover:-translate-y-1 hover:shadow-card-hover"
              style={{ backgroundColor: svc.bg }}
              id={`service-${svc.name.toLowerCase().replace(/\s/g, "-")}`}
              aria-label={`View ${svc.name} services`}
            >
              {/* Background shimmer on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-white" />

              <span className="text-4xl sm:text-5xl" role="img" aria-hidden="true">{svc.emoji}</span>
              <span
                className="font-dm font-medium text-sm sm:text-base tracking-wide text-center px-2 leading-tight"
                style={{ color: svc.color }}
              >
                {svc.name}
              </span>

              {/* Arrow hint */}
              <span
                className="absolute bottom-3 right-3 text-xs opacity-0 group-hover:opacity-60 transition-opacity duration-200 font-dm"
                style={{ color: svc.color }}
              >
                →
              </span>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link href="/services" className="btn-ghost" id="services-grid-view-all">
            View All Services &amp; Pricing
          </Link>
        </div>
      </div>
    </section>
  );
}
