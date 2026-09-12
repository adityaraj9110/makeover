"use client";

import { useEffect, useRef, useState } from "react";

export default function ExitIntentPopup() {
  const [visible, setVisible] = useState(false);
  // In-memory flag — resets on every page load, so popup can show again
  // if user navigates away and comes back, but won't spam during a session.
  const showCount = useRef(0);
  const MAX_SHOWS = 3;

  useEffect(() => {
    let lastY = window.scrollY;
    const threshold = window.innerHeight * 0.20; // top 20% of page

    const onScroll = () => {
      if (showCount.current >= MAX_SHOWS) return;
      const currentY = window.scrollY;
      // Scroll up while near the top = exit intent
      if (lastY > currentY && currentY < threshold) {
        showCount.current += 1;
        setVisible(true);
      }
      lastY = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const dismiss = () => {
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 z-[290] backdrop-blur-sm"
        onClick={dismiss}
        aria-hidden="true"
      />

      {/* Popup */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="exit-popup-title"
        className="fixed inset-x-4 bottom-4 sm:inset-auto sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:max-w-sm w-full bg-venus-deep rounded-[4px] z-[300] p-8 shadow-[0_24px_64px_rgba(0,0,0,0.5)] animate-[slideUp_0.4s_ease-out]"
        id="exit-intent-popup"
      >
        {/* Close */}
        <button
          onClick={dismiss}
          className="absolute top-4 right-4 text-venus-blush/50 hover:text-venus-blush transition-colors text-2xl leading-none"
          aria-label="Close offer"
          id="exit-popup-close"
        >
          ×
        </button>

        <div className="text-center">
          <p className="font-cormorant text-venus-gold text-lg italic mb-2">Before you go...</p>
          <h2
            id="exit-popup-title"
            className="font-cormorant text-venus-white text-3xl font-semibold mb-4"
          >
            15% Off Your First Visit
          </h2>
          <div className="gold-divider-center mb-4" />
          <p className="font-dm text-venus-blush/75 text-sm mb-6 leading-relaxed">
            Show this screen at any of our 4 outlets and get 15% off your first service.
          </p>

          {/* Coupon code */}
          <div className="bg-venus-blush/10 border border-venus-gold/30 rounded px-6 py-4 mb-6">
            <p className="font-dm text-xs text-venus-gold/70 uppercase tracking-widest mb-1">Your code</p>
            <p className="font-cormorant text-venus-gold text-4xl tracking-[0.1em]" aria-label="Discount code VENUS15">
              VENUS15
            </p>
          </div>

          <a
            href="/book"
            onClick={dismiss}
            className="btn-primary w-full justify-center"
            id="exit-popup-claim"
          >
            Claim Offer &amp; Book
          </a>
          <button
            onClick={dismiss}
            className="mt-3 font-dm text-xs text-venus-blush/40 hover:text-venus-blush/60 transition-colors w-full"
            id="exit-popup-decline"
          >
            No thanks, I don&apos;t want the discount
          </button>
        </div>
      </div>
    </>
  );
}
