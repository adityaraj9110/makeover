import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-venus-deep text-venus-blush" id="footer" aria-label="Site footer">
      <div className="section-inner px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex flex-col leading-none mb-4" aria-label="Venus Makeover Home">
              <span className="font-cormorant text-venus-gold text-3xl tracking-tight">Venus</span>
              <span className="font-dm text-venus-blush/60 text-xs tracking-[0.18em] uppercase">Makeover</span>
            </Link>
            <p className="font-dm text-sm text-venus-blush/65 leading-relaxed mb-4">
              4 premium beauty outlets. Bridal makeovers, hair care, skin treatments &amp; more — by appointment or walk-in.
            </p>
            {/* Social links */}
            <div className="flex gap-3">
              <a href="https://instagram.com/venusmakeover" target="_blank" rel="noopener noreferrer"
                className="text-venus-blush/50 hover:text-venus-gold transition-colors"
                aria-label="Follow Venus Makeover on Instagram">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://facebook.com/venusmakeover" target="_blank" rel="noopener noreferrer"
                className="text-venus-blush/50 hover:text-venus-gold transition-colors"
                aria-label="Follow Venus Makeover on Facebook">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-dm text-sm font-medium text-venus-gold mb-4 tracking-wide">Quick Links</h3>
            <ul className="flex flex-col gap-2.5">
              {[
                { href: "/",         label: "Home" },
                { href: "/services", label: "Services & Pricing" },
                { href: "/offers",   label: "Current Offers" },
                { href: "/outlets",  label: "Our Outlets" },
                { href: "/gallery",  label: "Gallery" },
                { href: "/book",     label: "Book Appointment" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href}
                    className="font-dm text-sm text-venus-blush/60 hover:text-venus-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-dm text-sm font-medium text-venus-gold mb-4 tracking-wide">Services</h3>
            <ul className="flex flex-col gap-2.5">
              {["Bridal Makeover", "Hair Spa & Care", "Skin Care & Facial", "Nail Art", "Waxing", "Mehndi"].map((s) => (
                <li key={s}>
                  <Link href="/services" className="font-dm text-sm text-venus-blush/60 hover:text-venus-gold transition-colors">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-dm text-sm font-medium text-venus-gold mb-4 tracking-wide">Contact Us</h3>
            <div className="flex flex-col gap-3">
              <a href="tel:+919876543210"
                className="font-dm text-sm text-venus-blush/60 hover:text-venus-gold transition-colors flex items-center gap-2 min-h-[44px]"
                aria-label="Call Venus Makeover Main Branch">
                📞 +91 98765 43210
              </a>
              <a href="https://wa.me/919876543210?text=Hi+Venus+Makeover!"
                target="_blank" rel="noopener noreferrer"
                className="font-dm text-sm text-[#25d366]/70 hover:text-[#25d366] transition-colors flex items-center gap-2 min-h-[44px]"
                aria-label="WhatsApp Venus Makeover">
                💬 WhatsApp Us
              </a>
              <a href="https://instagram.com/venusmakeover"
                target="_blank" rel="noopener noreferrer"
                className="font-dm text-sm text-venus-blush/60 hover:text-venus-gold transition-colors flex items-center gap-2">
                📸 @venusmakeover
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-dm text-xs text-venus-blush/40 text-center sm:text-left">
            © {year} Venus Makeover. All rights reserved.
          </p>
          <p className="font-dm text-xs text-venus-blush/30">
            4 outlets · Premium beauty services
          </p>
        </div>
      </div>
    </footer>
  );
}
