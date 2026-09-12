"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const testimonials = [
  {
    id: 1,
    quote: "Loved my bridal look! The team was so talented and patient throughout.",
    name: "Priya S.",
    service: "Bridal Makeover",
    outlet: "Outlet 1",
    rating: 5,
  },
  {
    id: 2,
    quote: "My hair has never felt this good after the spa treatment. Will definitely return!",
    name: "Meera K.",
    service: "Hair Spa",
    outlet: "Outlet 2",
    rating: 5,
  },
  {
    id: 3,
    quote: "Best skin facial in the city. My face was glowing for a whole week after.",
    name: "Anjali R.",
    service: "Skin Glow Facial",
    outlet: "Outlet 3",
    rating: 5,
  },
  {
    id: 4,
    quote: "Stunning nail art at such an affordable price. Staff is so friendly.",
    name: "Kavya M.",
    service: "Nail Art",
    outlet: "Outlet 4",
    rating: 5,
  },
];

export default function SocialProofRow() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setCurrent((c) => (c + 1) % testimonials.length);
        setAnimating(false);
      }, 300);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const t = testimonials[current];

  return (
    <section
      className="section bg-venus-deep"
      id="social-proof"
      aria-label="Customer testimonials"
    >
      <div className="section-inner text-center">
        <p className="font-dm text-xs text-venus-gold tracking-[0.16em] uppercase mb-2">What Our Clients Say</p>
        <h2 className="font-cormorant text-venus-white mb-10">
          Real Stories, Real <em className="text-venus-gold not-italic">Glow</em>
        </h2>

        {/* Testimonial card */}
        <div
          className={`max-w-2xl mx-auto transition-opacity duration-300 ${animating ? "opacity-0" : "opacity-100"}`}
          aria-live="polite"
          aria-label={`Testimonial ${current + 1} of ${testimonials.length}`}
        >
          {/* Stars */}
          <div className="flex justify-center gap-1 mb-6" aria-label={`${t.rating} out of 5 stars`}>
            {Array.from({ length: t.rating }).map((_, i) => (
              <span key={i} className="text-venus-gold text-xl" aria-hidden="true">⭐</span>
            ))}
          </div>

          <blockquote className="font-cormorant text-venus-white text-2xl sm:text-3xl font-normal italic leading-relaxed mb-6">
            &ldquo;{t.quote}&rdquo;
          </blockquote>

          <p className="font-dm text-venus-blush/70 text-sm">
            — <strong className="text-venus-gold font-medium">{t.name}</strong>
            {" · "}{t.service}{" · "}{t.outlet}
          </p>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8" role="tablist" aria-label="Testimonial navigation">
          {testimonials.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === current}
              aria-label={`Testimonial ${i + 1}`}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === current ? "bg-venus-gold w-6" : "bg-white/20 hover:bg-white/40"
              }`}
              id={`testimonial-dot-${i}`}
            />
          ))}
        </div>

        {/* Google Reviews link */}
        <div className="mt-10">
          <Link
            href="https://g.page/r/venus-makeover-reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="font-dm text-sm text-venus-gold/70 hover:text-venus-gold transition-colors underline underline-offset-4"
            id="google-reviews-link"
          >
            Read all 200+ Google Reviews →
          </Link>
        </div>
      </div>
    </section>
  );
}
