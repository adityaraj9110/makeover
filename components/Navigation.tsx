"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/offers",   label: "Offers" },
  { href: "/outlets",  label: "Outlets" },
  { href: "/gallery",  label: "Gallery" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled]   = useState(false);
  const [drawerOpen, setDrawer]   = useState(false);
  const [progress, setProgress]   = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const el  = document.documentElement;
      const pct = (el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100;
      setProgress(Math.min(pct, 100));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when drawer open
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [drawerOpen]);

  return (
    <>
      {/* Scroll progress line */}
      <div
        className="scroll-progress"
        style={{ width: `${progress}%` }}
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Page scroll progress"
      />

      <header
        id="main-nav"
        className={`sticky top-0 z-[100] transition-all duration-300 ${
          scrolled ? "nav-scrolled shadow-nav" : "bg-venus-deep"
        }`}
      >
        <nav className="section-inner flex items-center justify-between px-6 py-4" aria-label="Main navigation">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-none" aria-label="Venus Makeover — Home">
            <span className="font-cormorant text-venus-gold text-2xl tracking-tight">Venus</span>
            <span className="font-dm text-venus-blush text-xs tracking-[0.18em] uppercase opacity-80">Makeover</span>
          </Link>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`font-dm text-sm text-venus-blush hover:text-venus-gold transition-colors relative pb-1 ${
                    pathname === link.href
                      ? "text-venus-gold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-venus-gold after:rounded"
                      : ""
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop Book CTA */}
          <Link href="/book" className="btn-primary hidden md:inline-flex" id="nav-book-btn">
            Book Now
          </Link>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-venus-blush hover:text-venus-gold transition-colors p-2 rounded"
            onClick={() => setDrawer(true)}
            aria-label="Open menu"
            aria-expanded={drawerOpen}
            aria-controls="mobile-drawer"
            id="hamburger-btn"
          >
            <Menu size={24} />
          </button>
        </nav>
      </header>

      {/* Mobile drawer overlay */}
      {drawerOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[350] md:hidden"
          onClick={() => setDrawer(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile drawer */}
      <div
        id="mobile-drawer"
        className={`fixed top-0 right-0 h-full w-[80vw] max-w-[320px] bg-venus-deep z-[400] transform transition-transform duration-300 md:hidden flex flex-col ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <span className="font-cormorant text-venus-gold text-xl">Menu</span>
          <button
            onClick={() => setDrawer(false)}
            className="text-venus-blush hover:text-venus-gold transition-colors p-1"
            aria-label="Close menu"
            id="close-drawer-btn"
          >
            <X size={22} />
          </button>
        </div>

        <nav className="flex-1 p-6 flex flex-col gap-2" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setDrawer(false)}
              className={`font-dm text-lg py-3 px-2 border-b border-white/10 transition-colors ${
                pathname === link.href ? "text-venus-gold" : "text-venus-blush hover:text-venus-gold"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/book"
            onClick={() => setDrawer(false)}
            className="btn-primary mt-6 w-full justify-center"
            id="mobile-book-btn"
          >
            Book Now — It&apos;s Free
          </Link>
        </nav>

        <div className="p-6 border-t border-white/10">
          <p className="font-dm text-xs text-venus-blush/50 text-center">
            4 outlets across the city
          </p>
        </div>
      </div>
    </>
  );
}
