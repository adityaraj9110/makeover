import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:       "Services & Pricing",
  description: "Full services & pricing at Venus Makeover — bridal makeover, hair spa, skin care, nail art, waxing & mehndi. Honest pricing, 4 outlets.",
};

const serviceCategories = [
  {
    id:    "bridal",
    name:  "Bridal Makeover",
    emoji: "👰",
    desc:  "Complete bridal packages from pre-bridal care to the wedding day look.",
    services: [
      { name: "Bridal Makeup — Full (Airbrush)",    price: "₹5,000 – ₹8,000" },
      { name: "Pre-Bridal Package (4 sessions)",    price: "₹4,500" },
      { name: "Engagement Makeup",                  price: "₹2,500 – ₹4,000" },
      { name: "Reception / Sangeet Makeup",         price: "₹2,000 – ₹3,500" },
      { name: "Draping — Saree or Lehenga",         price: "Starting ₹500" },
    ],
  },
  {
    id:    "hair",
    name:  "Hair Care",
    emoji: "💇",
    desc:  "From everyday haircuts to intensive treatments for glossy, healthy hair.",
    services: [
      { name: "Hair Spa (Deep Conditioning)",       price: "Starting ₹799" },
      { name: "Brazilian Blowout",                  price: "₹1,499 – ₹2,500" },
      { name: "Keratin Treatment",                  price: "₹2,500 – ₹4,500" },
      { name: "Head Massage",                       price: "₹299" },
      { name: "Haircut — Ladies",                   price: "₹250 – ₹600" },
      { name: "Hair Colour (Global)",               price: "Starting ₹1,200" },
      { name: "Highlights / Balayage",              price: "Starting ₹2,000" },
    ],
  },
  {
    id:    "skin",
    name:  "Skin Care",
    emoji: "✨",
    desc:  "Facials, clean-ups, and treatments for glowing, healthy skin.",
    services: [
      { name: "Skin Glow Facial",                   price: "Starting ₹499" },
      { name: "Gold / Diamond Facial",              price: "Starting ₹999" },
      { name: "Clean Up",                           price: "₹299 – ₹499" },
      { name: "Bleach — Face",                      price: "₹199 – ₹349" },
      { name: "D-Tan Pack",                         price: "Starting ₹249" },
      { name: "Fruit Facial",                       price: "₹449" },
    ],
  },
  {
    id:    "nails",
    name:  "Nail Art",
    emoji: "💅",
    desc:  "Manicure, pedicure, gel nails, and creative nail art.",
    services: [
      { name: "Manicure (Basic)",                   price: "₹199" },
      { name: "Pedicure (Basic)",                   price: "₹249" },
      { name: "Gel Nail Extension (Full set)",      price: "₹799 – ₹1,500" },
      { name: "Nail Art (per nail)",                price: "₹30 – ₹150" },
      { name: "Gel Polish",                         price: "₹499" },
      { name: "Removal (Gel/Acrylic)",              price: "₹199" },
    ],
  },
  {
    id:    "waxing",
    name:  "Waxing",
    emoji: "🌸",
    desc:  "Full body and face waxing with premium wax, minimal irritation.",
    services: [
      { name: "Full Arms",                          price: "₹149" },
      { name: "Full Legs",                          price: "₹249" },
      { name: "Underarms",                          price: "₹99" },
      { name: "Full Body (excl. face)",             price: "₹799" },
      { name: "Bikini",                             price: "₹349" },
      { name: "Face Wax",                           price: "₹149" },
    ],
  },
  {
    id:    "mehndi",
    name:  "Mehndi",
    emoji: "🎨",
    desc:  "Traditional and modern mehndi designs by skilled artists.",
    services: [
      { name: "Bridal Mehndi — Full Arms + Legs",  price: "₹2,500 – ₹5,000" },
      { name: "Full Arms (Bridal patterns)",        price: "₹1,799" },
      { name: "Simple Hands (both)",                price: "₹299 – ₹499" },
      { name: "Feet Mehndi",                        price: "₹199" },
      { name: "Arabic / Contemporary Design",       price: "₹399" },
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-venus-blush">
      {/* Header */}
      <div className="bg-venus-deep py-16 px-6 text-center">
        <p className="font-dm text-xs text-venus-gold tracking-[0.16em] uppercase mb-3">What We Offer</p>
        <h1 className="font-cormorant text-venus-white text-hero font-normal">
          Services &amp; <em className="text-venus-gold not-italic">Pricing</em>
        </h1>
        <p className="font-dm text-venus-blush/70 mt-4 max-w-xl mx-auto">
          Honest pricing, no hidden charges. Starting prices listed — final quote given after consultation at outlet.
        </p>
      </div>

      {/* Jump nav */}
      <div className="sticky top-[56px] z-50 bg-venus-white border-b border-venus-ink/10 px-6 py-3 overflow-x-auto">
        <div className="section-inner flex gap-4 whitespace-nowrap">
          {serviceCategories.map((cat) => (
            <a
              key={cat.id}
              href={`#${cat.id}`}
              className="font-dm text-sm text-venus-ink/60 hover:text-venus-gold transition-colors flex items-center gap-1.5"
            >
              <span aria-hidden="true">{cat.emoji}</span>
              {cat.name}
            </a>
          ))}
        </div>
      </div>

      {/* Service categories */}
      <div className="section">
        <div className="section-inner space-y-16">
          {serviceCategories.map((cat) => (
            <section key={cat.id} id={cat.id} aria-labelledby={`${cat.id}-heading`}>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl" role="img" aria-hidden="true">{cat.emoji}</span>
                <div>
                  <h2 id={`${cat.id}-heading`} className="font-cormorant text-venus-ink">
                    {cat.name}
                  </h2>
                  <p className="font-dm text-sm text-venus-ink/60 mt-1">{cat.desc}</p>
                </div>
              </div>

              <div className="card-venus overflow-hidden">
                <table className="w-full" role="table" aria-label={`${cat.name} pricing`}>
                  <thead>
                    <tr className="bg-venus-deep">
                      <th scope="col" className="font-dm text-xs text-venus-gold/80 text-left px-6 py-3 font-medium tracking-wider">Service</th>
                      <th scope="col" className="font-dm text-xs text-venus-gold/80 text-right px-6 py-3 font-medium tracking-wider">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cat.services.map((svc, i) => (
                      <tr
                        key={svc.name}
                        className={`border-t border-venus-ink/5 ${i % 2 === 0 ? "bg-venus-white" : "bg-venus-blush/40"}`}
                      >
                        <td className="font-dm text-sm text-venus-ink px-6 py-4">{svc.name}</td>
                        <td className="font-dm text-sm font-medium text-venus-gold text-right px-6 py-4">{svc.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-4">
                <Link
                  href={`/book?service=${cat.id}`}
                  className="btn-ghost"
                  id={`services-book-${cat.id}`}
                >
                  Book {cat.name} →
                </Link>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
