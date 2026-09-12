import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-[90vh] flex items-stretch overflow-hidden bg-venus-deep"
      aria-label="Hero — Venus Makeover"
      id="hero"
    >
      {/* Desktop: 55% photo / 45% text split */}
      <div className="hidden md:flex w-full">
        {/* Photo side */}
        <div className="w-[55%] relative">
          <Image
            src="/hero.jpg"
            alt="Woman receiving professional beauty treatment at Venus Makeover salon — warm lit studio with gold and plum decor"
            fill
            priority
            className="object-cover"
            sizes="55vw"
          />
          {/* Subtle right-to-transparent gradient to blend into text side */}
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-r from-transparent to-venus-deep pointer-events-none" />
        </div>

        {/* Text side */}
        <div className="w-[45%] flex flex-col justify-center px-12 lg:px-16">
          <div className="animate-[fadeIn_0.8s_ease-out_0.2s_both]">
            <p className="font-dm text-venus-gold text-sm tracking-[0.18em] uppercase mb-6">
              4 Outlets · Your City
            </p>
            <h1 className="font-cormorant text-venus-white font-normal leading-[1.05] mb-6">
              Your Glow,
              <br />
              <em className="text-venus-gold not-italic">Your Moment</em>
            </h1>
            <p className="font-dm text-venus-blush/80 text-lg mb-10 leading-relaxed max-w-md">
              Premium beauty services across 4 outlets. Bridal makeovers, hair spa, skin care &amp; more — by appointment or walk-in.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/book" className="btn-primary" id="hero-book-btn">
                Book Now — It&apos;s Free
              </Link>
              <Link href="/offers" className="btn-ghost" id="hero-offers-btn">
                See Today&apos;s Offers
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: full-bleed photo top, text below with overlay */}
      <div className="md:hidden flex flex-col w-full">
        <div className="relative h-[55vw] min-h-[240px] w-full">
          <Image
            src="/hero.jpg"
            alt="Woman receiving professional beauty treatment at Venus Makeover"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-venus-deep/90" />
        </div>
        <div className="flex-1 bg-venus-deep px-6 pt-8 pb-10 flex flex-col">
          <p className="font-dm text-venus-gold text-xs tracking-[0.18em] uppercase mb-4">
            4 Outlets · Your City
          </p>
          <h1 className="font-cormorant text-venus-white font-normal text-[44px] leading-[1.05] mb-4">
            Your Glow,
            <br />
            <em className="text-venus-gold not-italic">Your Moment</em>
          </h1>
          <p className="font-dm text-venus-blush/75 text-base mb-8 leading-relaxed">
            Premium beauty services across 4 outlets. Bridal, hair, skin &amp; more.
          </p>
          <div className="flex flex-col gap-3">
            <Link href="/book" className="btn-primary justify-center" id="hero-book-mobile">
              Book Now — It&apos;s Free
            </Link>
            <Link href="/offers" className="btn-ghost justify-center" id="hero-offers-mobile">
              See Today&apos;s Offers
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 animate-bounce">
        <div className="w-[1px] h-10 bg-venus-gold/40" />
        <span className="font-dm text-venus-gold/60 text-xs tracking-wider">Scroll</span>
      </div>
    </section>
  );
}
