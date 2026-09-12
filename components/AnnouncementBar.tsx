"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

const offers = [
  { id: 1, text: "🌟 Diwali Glow Package — Flat 40% off", discount: "", validTill: "2 Nov" },
  { id: 2, text: "💄 Bridal Package — Complete Makeover", discount: "30% OFF", validTill: "31 Dec" },
  { id: 3, text: "✨ Hair Spa + Head Massage", discount: "₹799 only", validTill: "30 Nov" },
  { id: 4, text: "🌸 Skin Glow Facial", discount: "₹499 only", validTill: "15 Nov" },
];

export default function AnnouncementBar() {
  const pathname = usePathname();
  const trackRef = useRef<HTMLDivElement>(null);

  // Never show on /book page
  if (pathname === "/book") return null;

  const content = offers.map((o) => (
    <span key={o.id} className="announcement-item">
      {o.text}
      {o.discount && <strong> — {o.discount}</strong>}
      {o.validTill && <span className="announcement-valid"> · Valid till {o.validTill}</span>}
      <span className="announcement-sep" aria-hidden="true">&nbsp;&nbsp;✦&nbsp;&nbsp;</span>
    </span>
  ));

  return (
    <Link
      href="/offers"
      className="announcement-bar"
      role="banner"
      aria-label="Current offers — click to see all"
      id="announcement-bar"
    >
      <div className="marquee-outer announcement-inner">
        <div ref={trackRef} className="marquee-track">
          {content}
          {/* Duplicate for seamless loop */}
          {content}
        </div>
      </div>

      <style jsx>{`
        .announcement-bar {
          display: block;
          background-color: #C9A84C;
          color: #1C0F2E;
          text-decoration: none;
          cursor: pointer;
          overflow: hidden;
          line-height: 1;
        }
        .announcement-inner {
          padding: 10px 0;
        }
        .announcement-item {
          display: inline-flex;
          align-items: center;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 500;
          white-space: nowrap;
          padding: 0 8px;
        }
        .announcement-item strong {
          font-weight: 700;
          margin-left: 4px;
        }
        .announcement-valid {
          opacity: 0.75;
          margin-left: 4px;
          font-size: 13px;
        }
        .announcement-sep {
          opacity: 0.5;
          margin: 0 4px;
        }
      `}</style>
    </Link>
  );
}
