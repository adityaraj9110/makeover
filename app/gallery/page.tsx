import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title:       "Gallery — Before & After",
  description: "See real transformations at Venus Makeover — before and after photos, bridal looks, hair transformations & more from our 4 outlets.",
};

// Gallery data — replace with real photos from Cloudinary or public folder
const galleryItems = [
  { id: "g1",  category: "bridal",   src: "/bridal-offer.jpg",  alt: "Complete bridal makeover — bride in traditional look with gold jewellery",              caption: "Bridal Makeover · Outlet 1" },
  { id: "g2",  category: "hair",     src: "/hair-spa.jpg",      alt: "Woman relaxing during professional hair spa treatment at Venus Makeover",               caption: "Hair Spa · Outlet 2" },
  { id: "g3",  category: "bridal",   src: "/hero.jpg",          alt: "Woman receiving professional eye makeup at Venus Makeover salon",                       caption: "Eye Makeup · Outlet 1" },
  { id: "g4",  category: "skin",     src: "/bridal-offer.jpg",  alt: "Radiant skin after glow facial treatment at Venus Makeover",                           caption: "Glow Facial · Outlet 3" },
  { id: "g5",  category: "hair",     src: "/hair-spa.jpg",      alt: "Deep conditioning hair spa at Venus Makeover beauty parlour",                          caption: "Hair Spa · Outlet 4" },
  { id: "g6",  category: "bridal",   src: "/hero.jpg",          alt: "Bride getting ready at Venus Makeover — beautifully lit salon",                       caption: "Bridal Prep · Outlet 2" },
];

const filters = ["All", "Bridal", "Hair", "Skin", "Nails", "Festival"];

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-venus-blush">
      {/* Header */}
      <div className="bg-venus-deep py-16 px-6 text-center">
        <p className="font-dm text-xs text-venus-gold tracking-[0.16em] uppercase mb-3">Real Transformations</p>
        <h1 className="font-cormorant text-venus-white text-hero font-normal">
          Our <em className="text-venus-gold not-italic">Gallery</em>
        </h1>
        <p className="font-dm text-venus-blush/70 mt-4">
          Authentic photos from our outlets. Every look crafted with care.
        </p>
      </div>

      <div className="section">
        <div className="section-inner">
          {/* Filter tabs */}
          <div className="flex gap-2 flex-wrap mb-10">
            {filters.map((f, i) => (
              <span
                key={f}
                className={`font-dm text-sm px-5 py-2 rounded-full border cursor-pointer transition-colors ${
                  i === 0
                    ? "border-venus-deep bg-venus-deep text-venus-white"
                    : "border-venus-ink/15 text-venus-ink/60 hover:border-venus-deep"
                }`}
              >
                {f}
              </span>
            ))}
          </div>

          {/* Before/After highlight */}
          <div className="mb-12">
            <h2 className="font-cormorant text-venus-ink text-section mb-6">
              Before &amp; <em className="text-venus-gold not-italic">After</em>
            </h2>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  label:   "Bridal Transformation",
                  before:  "/hair-spa.jpg",
                  after:   "/bridal-offer.jpg",
                  caption: "Complete bridal makeover · Venus Makeover Outlet 1",
                },
                {
                  label:   "Hair Transformation",
                  before:  "/hero.jpg",
                  after:   "/hair-spa.jpg",
                  caption: "Brazilian Blowout · Venus Makeover Outlet 3",
                },
              ].map((ba) => (
                <div key={ba.label} className="card-venus overflow-hidden">
                  <div className="flex">
                    <div className="flex-1 relative aspect-square">
                      <Image src={ba.before} alt={`Before: ${ba.label}`} fill className="object-cover" sizes="25vw" />
                      <span className="ba-label left-3">Before</span>
                    </div>
                    <div className="w-[1px] bg-venus-gold flex-shrink-0" />
                    <div className="flex-1 relative aspect-square">
                      <Image src={ba.after} alt={`After: ${ba.label}`} fill className="object-cover" sizes="25vw" />
                      <span className="ba-label right-3">After</span>
                    </div>
                  </div>
                  <div className="px-4 py-3">
                    <p className="font-dm text-xs text-venus-ink/50">{ba.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Masonry gallery */}
          <h2 className="font-cormorant text-venus-ink text-section mb-6">
            More <em className="text-venus-gold not-italic">Looks</em>
          </h2>
          <div className="masonry-grid">
            {galleryItems.map((item, i) => (
              <div
                key={item.id}
                className="masonry-item card-venus overflow-hidden group cursor-pointer"
                id={item.id}
              >
                <div className={`relative w-full ${i % 3 === 0 ? "aspect-[3/4]" : i % 3 === 1 ? "aspect-square" : "aspect-[4/3]"}`}>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-venus-deep/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <p className="absolute bottom-3 left-3 right-3 font-dm text-xs text-venus-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-14 pt-10 border-t border-venus-ink/10">
            <h2 className="font-cormorant text-venus-ink text-2xl mb-3">
              Ready for your transformation?
            </h2>
            <p className="font-dm text-venus-ink/60 mb-6 text-sm">
              Follow us on Instagram for daily looks · Book your appointment below
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/book" className="btn-primary" id="gallery-book-cta">
                Book Appointment
              </Link>
              <a
                href="https://instagram.com/venusmakeover"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
                id="gallery-instagram-cta"
              >
                Follow @venusmakeover
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
