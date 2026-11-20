import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  BarChart3,
  Check,
  ChevronRight,
  Copy,
  Flame,
  Menu,
  Send,
  ShieldCheck,
  Sparkles,
  Users,
  X,
  Zap,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

import fullArtwork from "@/assets/cat-o-lantern-full.jpg.asset.json";
import graffitiArtwork from "@/assets/graffiti-wall.png.asset.json";
import merchHoodieAsset from "@/assets/hoodie-mockup.png.asset.json";
import merchCapAsset from "@/assets/merch4.png.asset.json";
import merchTeeAsset from "@/assets/merch3.png.asset.json";
import merch2Asset from "@/assets/merch2.png.asset.json";
import brandArtwork from "@/assets/hero-brand.png.asset.json";
import { Button } from "@/components/ui/button";

const CONTRACT = "GeNwBZWJcWQAkLDdty7geii9xSjtCuga1qE9DDzLpump";
const EMBER = "BAPYF2kjRBfn9UwBiJRuKZehZkZqCtq4Dcx8huUpump";
const LUNA = "coming_soon";
const BUY_URL = `https://pump.fun/coin/${CONTRACT}`;
const DEX_URL = "https://dexscreener.com/solana/8gcu12ppfgqcrjdncjck1j29zd5hhsuueu7puu3plhvc";
const TELEGRAM_URL = "https://t.me/CatOLantern";
const X_URL = "https://x.com/catolanternsol?s=11";

const aboutItems = [
  { icon: Sparkles, title: "Black Cat Energy", copy: "The true symbol of Halloween has watched from the shadows for centuries." },
  { icon: Flame, title: "Pumpkin Power", copy: "Pumpkins are carved and forgotten. The black cat reigns eternal." },
  { icon: Zap, title: "Solana Speed", copy: "Built on Solana for fast, frictionless transactions when the night moves quickly." },
  { icon: Users, title: "Community Driven", copy: "A growing circle of Halloween devotees and crypto believers." },
];

const featureItems = [
  ["01", "Launch", "Born on Solana", "Built on a fast network and already prowling the chain."],
  ["02", "Secure", "Verified in the dark", "Transparent contracts and a community-first approach."],
  ["03", "Growth", "The night is young", "An early Halloween token with a world still to build."],
  ["04", "Supply", "One billion spirits", "A fixed supply designed for a long life after midnight."],
  ["05", "Community", "The coven gathers", "Cat lovers, Halloween devotees, and believers together."],
];

const merchItems = [
  { name: "Midnight Hoodie", image: merchHoodieAsset, alt: "Black CAT O'LANTERN hoodie with exclusive streetwear design" },
  { name: "Premium Jacket", image: merch2Asset, alt: "Black CAT O'LANTERN premium jacket with Halloween vibes" },
  { name: "CATO Tee", image: merchTeeAsset, alt: "Black CAT O'LANTERN t-shirt with dripping green logo" },
  { name: "Embroidered Cap", image: merchCapAsset, alt: "Black CAT O'LANTERN cap with embroidered glowing pumpkin" },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CAT O'LANTERN ($CATO) — THE CATALYST" },
      { name: "description", content: "Meet CAT O'LANTERN, the community-driven Halloween token prowling the Solana blockchain." },
      { property: "og:title", content: "CAT O'LANTERN ($CATO)" },
      { property: "og:description", content: "THE CATALYST is prowling Solana." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function BrandMark() {
  return (
    <a href="#top" className="brand-mark" aria-label="CAT O'LANTERN home">
      <span className="brand-cat" aria-hidden="true">◢</span>
      <span>CAT O'LANTERN</span>
    </a>
  );
}

function ExternalButton({ href, children, variant = "default" }: { href: string; children: React.ReactNode; variant?: "default" | "outline" }) {
  return (
    <Button asChild variant={variant} size="lg" className="cta-button">
      <a href={href} target="_blank" rel="noreferrer">{children}</a>
    </Button>
  );
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const copyContract = async () => {
    await navigator.clipboard.writeText(CONTRACT);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <div id="top" className="site-shell">
      <header className="site-header">
        <div className="nav-inner">
          <BrandMark />
          <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Main navigation">
            <a href="#about" onClick={closeMenu}>Lore</a>
            <a href="#tokenomics" onClick={closeMenu}>Tokenomics</a>
            <a href="#features" onClick={closeMenu}>Features</a>
            <a href="#merch" onClick={closeMenu}>Merch</a>
            <a href={DEX_URL} target="_blank" rel="noreferrer">DEX Chart</a>
            <a href={X_URL} target="_blank" rel="noreferrer">X / Twitter</a>
            <a href={TELEGRAM_URL} target="_blank" rel="noreferrer">Telegram</a>
          </nav>
          <div className="nav-actions">
            <Button asChild size="sm" className="nav-buy">
              <a href={BUY_URL} target="_blank" rel="noreferrer">Buy $CATO <ArrowUpRight /></a>
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="menu-button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </header>

      <main>
        <section className="hero-section" aria-labelledby="hero-title">
          <img src={fullArtwork.url} alt="A menacing black cat with a glowing jack-o'-lantern grin under a blood moon" width={1868} height={1242} className="hero-image" />
          <div className="hero-shade" />
          <div className="cat-eyes" aria-hidden="true">
            <div className="cat-eye-glow cat-eye-glow-left"></div>
            <div className="cat-eye-glow cat-eye-glow-right"></div>
            <div className="cat-eye cat-eye-left"></div>
            <div className="cat-eye cat-eye-right double-blink"></div>
          </div>
          <div className="hero-content page-width">
            <p className="eyebrow hero-kicker"><span aria-hidden="true" /> Live on Solana · Halloween royalty</p>
            <h1 id="hero-title">THE <span>CATALYST</span></h1>
            <p className="hero-copy">Every year they carve pumpkins and pretend that's the holiday. Wrong. The real king has always been the black cat.</p>
            <div className="hero-actions">
              <ExternalButton href={BUY_URL}>Buy $CATO <ArrowUpRight /></ExternalButton>
              <ExternalButton href={DEX_URL} variant="outline"><BarChart3 /> View on DEX</ExternalButton>
            </div>
            <div className="coins-grid">
              <div className="contract-row">
                <div>
                  <span>$CATO Contract address</span>
                  <code>{CONTRACT}</code>
                </div>
                <Button type="button" variant="ghost" size="icon" onClick={copyContract} aria-label="Copy contract address" title="Copy contract address">
                  {copied ? <Check /> : <Copy />}
                </Button>
                <strong aria-live="polite">{copied ? "Copied" : "Solana SPL"}</strong>
              </div>
              <div className="contract-row">
                <div>
                  <span>$EMBER Contract address</span>
                  <code>{EMBER}</code>
                </div>
                <Button type="button" variant="ghost" size="icon" onClick={() => {
                  navigator.clipboard.writeText(EMBER);
                  setCopied(true);
                  window.setTimeout(() => setCopied(false), 1800);
                }} aria-label="Copy $EMBER contract address" title="Copy $EMBER contract address">
                  {copied ? <Check /> : <Copy />}
                </Button>
                <strong aria-live="polite">{copied ? "Copied" : "Solana SPL"}</strong>
              </div>
              <div className="contract-row">
                <div>
                  <span>$LUNA Contract address</span>
                  <code>Coming soon</code>
                </div>
                <strong className="coming-soon">Coming soon</strong>
              </div>
            </div>
            <a href="#about" className="scroll-cue">Enter the story <ChevronRight aria-hidden="true" /></a>
          </div>
        </section>

        <section id="about" className="section page-width">
          <div className="section-heading">
            <div><p className="eyebrow">The Story</p><h2>One Spark. Nine Lives. Infinite Fire.</h2></div>
            <p>Before the legend, there was a spark. The story of CATO and EMBER is one of creation, connection, and the eternal flame that burns through every season.</p>
          </div>
          
          <div className="narrative-section">
            <div className="narrative-block">
              <h3>THE CATALYSTS</h3>
              <p>Before CATO became the King of the Patch, before the nine lives and nine holidays, there was a single flame burning in the darkness.</p>
              <p>That flame was <strong>EMBER — The Catalysts</strong>.</p>
              <p>Deep within the pumpkin patch, EMBER's fire awakened CATO, bringing life to the legendary black cat with glowing orange eyes and a jack-o'-lantern grin.</p>
              <p><strong>EMBER was the spark that started it all.</strong></p>
            </div>

            <div className="narrative-block">
              <h3>CATO — The Legend</h3>
              <p>CATO is Solana's Holiday Moon Cat — the central character of a universe built around nine lives, nine holidays, and an endlessly recurring seasonal adventure.</p>
              <p>CATO represents the legend, transformation, and the journey through the holidays. As CATO evolves beyond Halloween into legendary characters for every season, EMBER remains by his side, carrying the eternal flame through every celebration.</p>
              <p><strong>CATO IS THE LEGEND.</strong></p>
            </div>

            <div className="narrative-block">
              <h3>EMBER — The Spark</h3>
              <p>EMBER is The Catalysts — the original spark that awakened CATO and the eternal flame connecting every chapter of his journey.</p>
              <p>At Thanksgiving, EMBER becomes the warmth of the harvest. At Christmas, he lights the winter hearth. At New Year's, he ignites the fireworks. Through Valentine's Day, Easter, and every holiday that follows, EMBER's fire continues to burn.</p>
              <p><strong>EMBER REPRESENTS THE BEGINNING, THE ENERGY, AND THE FIRE THAT KEEPS THE LEGEND ALIVE.</strong></p>
            </div>

            <div className="narrative-block">
              <h3>LUNA — Coming Soon</h3>
              <p>The third character in The CATO Collective awaits. LUNA will complete the trinity, bringing the cycle full circle.</p>
              <p>More details coming soon.</p>
            </div>
          </div>

          <div className="collective-grid">
            <div className="collective-card">
              <div className="card-number">01</div>
              <h4>$CATO</h4>
              <p className="card-role">The Legend</p>
              <p>Holiday Moon Cat. Nine lives, nine holidays, one endlessly evolving character.</p>
            </div>
            <div className="collective-card">
              <div className="card-number">02</div>
              <h4>$EMBER</h4>
              <p className="card-role">The Spark</p>
              <p>The Catalysts. Original flame, eternal energy, fire that keeps the legend alive.</p>
            </div>
            <div className="collective-card">
              <div className="card-number">03</div>
              <h4>$LUNA</h4>
              <p className="card-role">Coming Soon</p>
              <p>The third character. The cycle completes. The trinity awakens.</p>
            </div>
          </div>

          <div className="core-message">
            <p className="message-text">CATO may change with every holiday, but EMBER remains the eternal spark behind the legend.</p>
            <p className="message-subtext">The seasons change. The characters evolve. The story continues. But the original flame never dies.</p>
            <p className="message-highlight">The CATO Collective — Solana.</p>
          </div>
        </section>

        <section id="tokenomics" className="section token-band">
          <div className="page-width token-layout">
            <div className="token-copy">
              <p className="eyebrow">The sacred ledger</p>
              <h2>Tokenomics,<br />carved in stone.</h2>
              <p>A clear supply, a fast chain, and rewards designed to keep the community at the heart of the ritual.</p>
              <div className="token-list">
                <div><span>Total supply</span><strong>1,000,000,000</strong><small>$CATO</small></div>
                <div><span>Network</span><strong>Solana</strong><small>SPL token</small></div>
                <div><span>Buy & sell tax</span><strong>1.25%</strong><small>Each way</small></div>
                <div><span>Rewards</span><strong>Staking</strong><small>+ Airdrops</small></div>
              </div>
            </div>
            <div className="token-visual">
              <img src={brandArtwork.url} alt="CAT O'LANTERN artwork: a grinning black cat beside the $CATO on Solana crest" loading="lazy" width={1842} height={1058} style={{ objectPosition: "72% center" }} />
              <div className="token-seal"><span>Built on</span><strong>SOLANA</strong></div>
            </div>
          </div>
        </section>

        <section id="features" className="section page-width">
          <div className="section-heading compact animate-on-scroll">
            <div><p className="eyebrow">Why $CATO</p><h2>Five lives. One mission.</h2></div>
          </div>
          <div className="feature-list">
            {featureItems.map(([number, label, title, copy], index) => (
              <article className="feature-row animate-on-scroll" key={number} style={{ animationDelay: `${index * 0.1}s` }}>
                <span>{number}</span><small>{label}</small><h3>{title}</h3><p>{copy}</p><ChevronRight aria-hidden="true" />
              </article>
            ))}
          </div>
        </section>

        <section id="merch" className="section page-width">
          <div className="section-heading compact animate-on-scroll">
            <div><p className="eyebrow">Wear the night</p><h2>The first drop is coming.</h2></div>
            <p>Four pieces. All black. Marked for those who know who really rules Halloween.</p>
          </div>
          <div className="merch-grid">
            {merchItems.map(({ name, image, alt }, index) => (
              <article className="merch-card" key={name}>
                <img src={image.url} alt={alt} loading="lazy" />
                <div className="merch-card-body">
                  <h3>{name}</h3><span>0{index + 1} · Coming soon</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="gallery" className="section page-width">
          <div className="section-heading compact animate-on-scroll">
            <div><p className="eyebrow">The Collective</p><h2>Community & Creative.</h2></div>
            <p>The art, the designs, the vision. From concept to reality across the CATO universe.</p>
          </div>
          <div className="gallery-grid">
            <article className="gallery-item">
              <img src="/images/photo_2026-11-16 07.00.12.jpeg" alt="CATO Community artwork 1" loading="lazy" />
              <div className="gallery-overlay"><span>Collection 01</span></div>
            </article>
            <article className="gallery-item">
              <img src="/images/photo_2026-11-16 07.00.17.jpeg" alt="CATO Community artwork 2" loading="lazy" />
              <div className="gallery-overlay"><span>Collection 01</span></div>
            </article>
            <article className="gallery-item">
              <img src="/images/photo_2026-11-16 07.00.20.jpeg" alt="CATO Community artwork 3" loading="lazy" />
              <div className="gallery-overlay"><span>Collection 01</span></div>
            </article>
            <article className="gallery-item">
              <img src="/images/photo_2026-11-16 07.00.23.jpeg" alt="CATO Community artwork 4" loading="lazy" />
              <div className="gallery-overlay"><span>Collection 01</span></div>
            </article>
            <article className="gallery-item">
              <img src="/images/photo_2026-11-16 07.00.26.jpeg" alt="CATO Community artwork 5" loading="lazy" />
              <div className="gallery-overlay"><span>Collection 01</span></div>
            </article>
            <article className="gallery-item">
              <img src="/images/photo_2026-11-16 07.00.51.jpeg" alt="CATO Community artwork 6" loading="lazy" />
              <div className="gallery-overlay"><span>Collection 01</span></div>
            </article>
            <article className="gallery-item">
              <img src="/images/photo_2026-11-16 07.00.53.jpeg" alt="CATO Community artwork 7" loading="lazy" />
              <div className="gallery-overlay"><span>Collection 01</span></div>
            </article>
            <article className="gallery-item">
              <img src="/images/photo_2026-11-16 07.00.55.jpeg" alt="CATO Community artwork 8" loading="lazy" />
              <div className="gallery-overlay"><span>Collection 01</span></div>
            </article>
            <article className="gallery-item">
              <img src="/images/photo_2026-11-16 07.00.58.jpeg" alt="CATO Community artwork 9" loading="lazy" />
              <div className="gallery-overlay"><span>Collection 01</span></div>
            </article>
            <article className="gallery-item">
              <img src="/images/photo_2026-11-20 10.49.56.jpeg" alt="CATO Community artwork 10" loading="lazy" />
              <div className="gallery-overlay"><span>Collection 02</span></div>
            </article>
            <article className="gallery-item">
              <img src="/images/photo_2026-11-20 10.50.00.jpeg" alt="CATO Community artwork 11" loading="lazy" />
              <div className="gallery-overlay"><span>Collection 02</span></div>
            </article>
            <article className="gallery-item">
              <img src="/images/photo_2026-11-20 10.50.03.jpeg" alt="CATO Community artwork 12" loading="lazy" />
              <div className="gallery-overlay"><span>Collection 02</span></div>
            </article>
            <article className="gallery-item">
              <img src="/images/photo_2026-11-20 10.50.07.jpeg" alt="CATO Community artwork 13" loading="lazy" />
              <div className="gallery-overlay"><span>Collection 02</span></div>
            </article>
            <article className="gallery-item">
              <img src="/images/photo_2026-11-20 10.50.16.jpeg" alt="CATO Community artwork 14" loading="lazy" />
              <div className="gallery-overlay"><span>Collection 02</span></div>
            </article>
          </div>
        </section>

        <section className="final-cta">
          <div className="page-width final-inner">
            <p className="eyebrow">The moon is rising</p>
            <h2>JOIN THE COVEN.</h2>
            <p>Claim your place before the black cat crosses the chain.</p>
            <div className="hero-actions">
              <ExternalButton href={BUY_URL}>Buy on Pump.fun <ArrowUpRight /></ExternalButton>
              <ExternalButton href={TELEGRAM_URL} variant="outline"><Send /> Join Telegram</ExternalButton>
              <ExternalButton href={X_URL} variant="outline">Follow on X</ExternalButton>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="page-width footer-inner">
          <BrandMark />
          <p>$CATO is a community token. Crypto assets are volatile; do your own research.</p>
          <span>© 2026 CAT O'LANTERN</span>
        </div>
      </footer>
    </div>
  );
}
