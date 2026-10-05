import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
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
import { useState } from "react";

import fullArtwork from "@/assets/cat-o-lantern-full.png.asset.json";
import graffitiArtwork from "@/assets/cato-graffiti.jpg.asset.json";
import merchCapAsset from "@/assets/merch-cap.png.asset.json";
import merchHoodieAsset from "@/assets/merch-hoodie.png.asset.json";
import merchTeeAsset from "@/assets/merch-tee.png.asset.json";
import brandArtwork from "@/assets/cat-o-lantern-hero.png.asset.json";
import { Button } from "@/components/ui/button";

const CONTRACT = "GeNwBZWJcWQAkLDdty7geii9xSjtCuga1qE9DDzLpump";
const BUY_URL = `https://pump.fun/coin/${CONTRACT}`;

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
  { name: "Midnight Hoodie", image: merchHoodieAsset, alt: "Black CAT O’LANTERN hoodie with green drip logo and embroidered pumpkin" },
  { name: "CATO Tee", image: merchTeeAsset, alt: "Black CAT O’LANTERN t-shirt with dripping green logo" },
  { name: "Embroidered Cap", image: merchCapAsset, alt: "Black CAT O’LANTERN cap with embroidered glowing pumpkin" },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CAT O’LANTERN ($CATO) — The Real King of Halloween" },
      { name: "description", content: "Meet CAT O’LANTERN, the community-driven Halloween token prowling the Solana blockchain." },
      { property: "og:title", content: "CAT O’LANTERN ($CATO)" },
      { property: "og:description", content: "The real king of Halloween is prowling Solana." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function BrandMark() {
  return (
    <a href="#top" className="brand-mark" aria-label="CAT O’LANTERN home">
      <span className="brand-cat" aria-hidden="true">◢</span>
      <span>CAT O’LANTERN</span>
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
            <a href="https://x.com/catolanternsol?s=11" target="_blank" rel="noreferrer">X / Twitter</a>
            <a href="https://t.me/CatOLantern" target="_blank" rel="noreferrer">Telegram</a>
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
          <div className="hero-content page-width">
            <p className="eyebrow hero-kicker"><span aria-hidden="true" /> Live on Solana · Halloween royalty</p>
            <h1 id="hero-title">THE REAL <span>KING</span><br />OF HALLOWEEN</h1>
            <p className="hero-copy">Every year they carve pumpkins and pretend that’s the holiday. Wrong. The real king has always been the black cat.</p>
            <div className="hero-actions">
              <ExternalButton href={BUY_URL}>Buy $CATO <ArrowUpRight /></ExternalButton>
              <ExternalButton href="https://t.me/CatOLantern" variant="outline"><Send /> Join Telegram</ExternalButton>
            </div>
            <div className="contract-row">
              <div>
                <span>Contract address</span>
                <code>{CONTRACT}</code>
              </div>
              <Button type="button" variant="ghost" size="icon" onClick={copyContract} aria-label="Copy contract address" title="Copy contract address">
                {copied ? <Check /> : <Copy />}
              </Button>
              <strong aria-live="polite">{copied ? "Copied" : "Solana SPL"}</strong>
            </div>
            <a href="#about" className="scroll-cue">Enter the story <ChevronRight aria-hidden="true" /></a>
          </div>
          <div className="hero-stats page-width" aria-label="Community statistics">
            <div><small>01</small><strong>75</strong><span>Community members</span></div>
            <div><small>02</small><strong>95</strong><span>Token holders</span></div>
            <div><small>03</small><strong>$CATO</strong><span>Forever prowling</span></div>
          </div>
        </section>

        <section id="about" className="section page-width">
          <div className="section-heading">
            <div><p className="eyebrow">Enter the lore</p><h2>Born in the shadows.</h2></div>
            <p>Not another pumpkin in the patch. CAT O’LANTERN is a community-powered Halloween icon built for the speed of Solana.</p>
          </div>
          <div className="lore-layout">
            <div className="image-panel">
              <img src={graffitiArtwork.url} alt="Graffiti art of a black cat with an orange jack-o'-lantern grin on a black brick wall" loading="lazy" width={784} height={1168} />
              <div className="image-caption"><span>01 / THE ORIGIN</span><strong>The night belongs to those who see in the dark.</strong></div>
            </div>
            <div className="about-grid">
              {aboutItems.map(({ icon: Icon, title, copy }, index) => (
                <article className="lore-card" key={title}>
                  <div className="lore-number">0{index + 1}</div><Icon aria-hidden="true" />
                  <h3>{title}</h3><p>{copy}</p>
                </article>
              ))}
            </div>
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
              <img src={brandArtwork.url} alt="CAT O’LANTERN artwork: a grinning black cat beside the $CATO on Solana crest" loading="lazy" width={1842} height={1058} style={{ objectPosition: "72% center" }} />
              <div className="token-seal"><span>Built on</span><strong>SOLANA</strong></div>
            </div>
          </div>
        </section>

        <section id="features" className="section page-width">
          <div className="section-heading compact">
            <div><p className="eyebrow">Why $CATO</p><h2>Five lives. One mission.</h2></div>
          </div>
          <div className="feature-list">
            {featureItems.map(([number, label, title, copy]) => (
              <article className="feature-row" key={number}>
                <span>{number}</span><small>{label}</small><h3>{title}</h3><p>{copy}</p><ChevronRight aria-hidden="true" />
              </article>
            ))}
          </div>
        </section>

        <section id="merch" className="section page-width">
          <div className="section-heading compact">
            <div><p className="eyebrow">Wear the night</p><h2>The first drop is coming.</h2></div>
            <p>Three pieces. All black. Marked for those who know who really rules Halloween.</p>
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

        <section className="final-cta">
          <div className="page-width final-inner">
            <p className="eyebrow">The moon is rising</p>
            <h2>JOIN THE COVEN.</h2>
            <p>Claim your place before the black cat crosses the chain.</p>
            <div className="hero-actions">
              <ExternalButton href={BUY_URL}>Buy on Pump.fun <ArrowUpRight /></ExternalButton>
              <ExternalButton href="https://x.com/catolanternsol?s=11" variant="outline">Follow on X</ExternalButton>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="page-width footer-inner">
          <BrandMark />
          <p>$CATO is a community token. Crypto assets are volatile; do your own research.</p>
          <span>© 2026 CAT O’LANTERN</span>
        </div>
      </footer>
    </div>
  );
}