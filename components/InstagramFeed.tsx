import Link from "next/link";

export default function InstagramFeed() {
  // Placeholder grid — replace with Behold widget embed or Elfsight
  const placeholderPosts = Array.from({ length: 6 }, (_, i) => ({
    id:    i + 1,
    emoji: ["💄", "👰", "💅", "✨", "🌸", "💇"][i],
    label: ["Bridal Look", "Festival Special", "Nail Art", "Glow Facial", "Hair Spa", "Mehndi"][i],
  }));

  return (
    <section className="section bg-venus-white" id="instagram-feed" aria-label="Venus Makeover on Instagram">
      <div className="section-inner">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="font-dm text-xs text-venus-gold tracking-[0.16em] uppercase mb-2">Follow Along</p>
            <h2 className="font-cormorant text-venus-ink">
              We&apos;re on <em className="text-venus-gold not-italic">Instagram</em>
            </h2>
            <p className="font-dm text-sm text-venus-ink/60 mt-2">@venusmakeover · 7K followers</p>
          </div>
          <a
            href="https://instagram.com/venusmakeover"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost hidden sm:inline-flex"
            id="instagram-follow-desktop"
            aria-label="Follow Venus Makeover on Instagram"
          >
            Follow Us →
          </a>
        </div>

        {/* 
          TO INTEGRATE LIVE FEED: Replace the placeholder grid below with:
          
          Option A — Behold widget (free, 1 feed):
          <div id="behold-widget-EyRy2jf2JmqVuKZnkuMG"></div>
          <script src="https://w.behold.so/widget.js" type="module"></script>
          
          Option B — Elfsight widget:
          <script src="https://static.elfsight.com/platform/platform.js" async></script>
          <div class="elfsight-app-YOUR-APP-ID"></div>
        */}
        <div className="flex gap-3 overflow-x-auto pb-2 md:grid md:grid-cols-6 md:overflow-visible snap-x snap-mandatory">
          {placeholderPosts.map((post) => (
            <a
              key={post.id}
              href="https://instagram.com/venusmakeover"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 snap-start min-w-[44vw] sm:min-w-[180px] md:min-w-0 aspect-square bg-venus-blush rounded-[4px] flex flex-col items-center justify-center gap-2 group hover:shadow-card-hover transition-all duration-200 hover:-translate-y-1"
              aria-label={`View ${post.label} on Instagram`}
              id={`instagram-post-${post.id}`}
            >
              <span className="text-4xl" role="img" aria-hidden="true">{post.emoji}</span>
              <span className="font-dm text-xs text-venus-ink/60 group-hover:text-venus-gold transition-colors">
                {post.label}
              </span>
            </a>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="https://instagram.com/venusmakeover"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            id="instagram-follow-cta"
            aria-label="Follow Venus Makeover on Instagram"
          >
            Follow @venusmakeover
          </a>
        </div>
      </div>
    </section>
  );
}
