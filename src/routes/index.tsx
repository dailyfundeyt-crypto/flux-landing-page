import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowDown, ArrowRight, Check, Copy, Github, Languages, MoveUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Flux — Agent-first logistics for vinyl resellers" },
      { name: "description", content: "Flux turns a folder of markdown files into a queryable, agent-accessible logistics OS. Built on the Model Context Protocol." },
      { property: "og:title", content: "Flux — Agent-first logistics for vinyl resellers" },
      { property: "og:description", content: "Your inventory is a markdown vault. Your agents are the dashboard." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

type Lang = "en" | "de";

const copy = {
  en: {
    nav: ["Architecture", "Why Flux", "Quickstart", "Roadmap"],
    github: "Find on GitHub",
    eyebrow: "OPEN-SOURCE LOGISTICS OS  /  FOR VINYL RESELLERS",
    title: <>Your inventory is a <em>markdown vault.</em><br />Your agents are the dashboard.</>,
    subtitle: "Flux turns a folder of .md files into a queryable, agent-accessible logistics OS. Built on the Model Context Protocol.",
    start: "Get started", explore: "Explore the architecture", scroll: "SCROLL TO EXPLORE",
    architecture: "Architecture", architectureLead: "Plain files in. Useful answers out.",
    architectureText: "A small, legible stack that lets your tools work with the same inventory you do. Each part has a job; nothing is locked away in a proprietary dashboard.",
    diagramHint: "Explore each layer in the README", readmePending: "README links available when the repository is shared",
    why: "Why Flux", whyLead: "Built for the way records actually move.",
    benefits: [
      { number: "01", title: "MD as source of truth", body: "Your collection lives in plain-text files you can read, edit, diff, and own. No opaque database standing between you and your records." },
      { number: "02", title: "MCP-native", body: "Give your agents a shared way into inventory. Designed to work with tools like Cursor, Grok, and Slack through the Model Context Protocol." },
      { number: "03", title: "Open source MIT", body: "Inspect it, adapt it, run it yourself. The system stays yours, from the first record to the last shipment." },
    ],
    quickstart: "Quickstart", quickstartLead: "From folder to working stack.",
    quickstartText: "Bring your Supabase project URL and anon key. The rest starts locally with Docker Compose.",
    steps: ["Clone the Flux repository", "Move into the project", "Create your environment file", "Add your Supabase URL and anon key", "Start the stack"],
    example: "Setup outline · repository URL pending", copied: "Copied", copy: "Copy commands",
    setupNote: "The repository URL and exact setup commands will be linked when the project repository is provided.",
    roadmap: "Roadmap", roadmapLead: "What comes next.",
    roadmapText: "The current Milestone's eight roadmap points will appear here once shared.",
    awaiting: "AWAITING CURRENT MILESTONE", slots: "Roadmap item", footer: "Built by humans, for agents.",
    repoNote: "Repository link coming soon", source: "SOURCE AVAILABLE SOON", altRepo: "Search for Flux on GitHub",
  },
  de: {
    nav: ["Architektur", "Warum Flux", "Schnellstart", "Roadmap"],
    github: "Auf GitHub suchen",
    eyebrow: "OPEN-SOURCE-LOGISTIKSYSTEM  /  FÜR VINYL-HÄNDLER",
    title: <>Dein Inventar ist ein <em>Markdown-Vault.</em><br />Deine Agenten sind das Dashboard.</>,
    subtitle: "Flux macht aus einem Ordner mit .md-Dateien ein durchsuchbares Logistiksystem für Agenten. Basierend auf dem Model Context Protocol.",
    start: "Jetzt starten", explore: "Architektur erkunden", scroll: "MEHR ENTDECKEN",
    architecture: "Architektur", architectureLead: "Klartext rein. Antworten raus.",
    architectureText: "Ein kleiner, nachvollziehbarer Stack, mit dem deine Tools auf dasselbe Inventar zugreifen wie du. Jede Ebene hat eine Aufgabe – nichts verschwindet in einem proprietären Dashboard.",
    diagramHint: "Jede Ebene im README erkunden", readmePending: "README-Links folgen, sobald das Repository geteilt wird",
    why: "Warum Flux", whyLead: "Für echte Warenflüsse gemacht.",
    benefits: [
      { number: "01", title: "MD als Datenquelle", body: "Deine Sammlung lebt in Klartextdateien, die du lesen, bearbeiten, vergleichen und besitzen kannst. Keine undurchsichtige Datenbank zwischen dir und deinen Daten." },
      { number: "02", title: "MCP-nativ", body: "Gib deinen Agenten einen gemeinsamen Zugang zum Inventar. Für Tools wie Cursor, Grok und Slack über das Model Context Protocol konzipiert." },
      { number: "03", title: "Open Source · MIT", body: "Prüfe den Code, passe ihn an und betreibe ihn selbst. Das System bleibt deins – vom ersten Eintrag bis zum letzten Versand." },
    ],
    quickstart: "Schnellstart", quickstartLead: "Vom Ordner zum laufenden Stack.",
    quickstartText: "Du brauchst deine Supabase-Projekt-URL und deinen Anon-Key. Der Rest startet lokal mit Docker Compose.",
    steps: ["Flux-Repository klonen", "Ins Projektverzeichnis wechseln", "Umgebungsdatei anlegen", "Supabase-URL und Anon-Key eintragen", "Stack starten"],
    example: "Setup-Übersicht · Repository-URL ausstehend", copied: "Kopiert", copy: "Befehle kopieren",
    setupNote: "Die Repository-URL und die genauen Setup-Befehle werden ergänzt, sobald das Projekt-Repository vorliegt.",
    roadmap: "Roadmap", roadmapLead: "Was als Nächstes kommt.",
    roadmapText: "Die acht Punkte des aktuellen Meilensteins erscheinen hier, sobald sie vorliegen.",
    awaiting: "AKTUELLER MEILENSTEIN AUSSTEHEND", slots: "Roadmap-Punkt", footer: "Von Menschen gebaut. Für Agenten gedacht.",
    repoNote: "Repository-Link folgt", source: "QUELLCODE FOLGT", altRepo: "Flux auf GitHub suchen",
  },
};

const layers = [
  { label: "VAULT", detail: ".md files", fragment: "vault" },
  { label: "PARSER", detail: "structured data", fragment: "parser" },
  { label: "MCP SERVER", detail: "tools + resources", fragment: "mcp-server" },
  { label: "SUPABASE", detail: "query layer", fragment: "supabase" },
  { label: "AGENTS", detail: "Cursor · Grok · Slack", fragment: "agents" },
  { label: "WORKFLOWS", detail: "inventory → action", fragment: "workflows" },
];

const commands = `git clone <FLUX_REPOSITORY_URL>\ncd flux\ncp .env.example .env\n# Add SUPABASE_URL and SUPABASE_ANON_KEY to .env\ndocker compose up -d`;

function Index() {
  const [lang, setLang] = useState<Lang>("en");
  const [copied, setCopied] = useState(false);
  const t = copy[lang];

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(commands);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch { setCopied(false); }
  }

  return (
    <div className="flux-page">
      <header className="site-header frame">
        <a className="wordmark" href="#top" aria-label="Flux home">flux<span className="wordmark-period">.</span></a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {t.nav.map((label, i) => <a href={`#${["architecture", "why", "quickstart", "roadmap"][i]}`} key={i}>{label}</a>)}
        </nav>
        <div className="header-actions">
          <Button variant="ghost" size="sm" className="language-button" onClick={() => { setLang(lang === "en" ? "de" : "en"); document.documentElement.lang = lang === "en" ? "de" : "en"; }} aria-label={lang === "en" ? "Switch to German" : "Switch to English"} title={lang === "en" ? "Deutsch" : "English"}>
            <Languages size={15} strokeWidth={1.7} /><span>{lang.toUpperCase()}</span><span className="toggle-divider">/</span><span className="inactive-lang">{lang === "en" ? "DE" : "EN"}</span>
          </Button>
          <a className="header-github" href="https://github.com/search?q=Flux+vinyl+logistics+MCP&type=repositories" target="_blank" rel="noreferrer" aria-label={t.altRepo}><Github size={16}/><span>{t.github}</span><MoveUpRight size={14}/></a>
        </div>
      </header>

      <main id="top">
        <section className="hero frame" aria-labelledby="hero-heading">
          <div className="hero-topline"><span className="status-dot"/><span>{t.eyebrow}</span><span className="edition">[ 001 — 2026 ]</span></div>
          <div className="hero-main">
            <div className="hero-copy">
              <h1 id="hero-heading">{t.title}</h1>
              <div className="hero-bottom">
                <p>{t.subtitle}</p>
                <div className="hero-ctas">
                  <a className="primary-link" href="#quickstart">{t.start}<ArrowRight size={18}/></a>
                  <a className="text-link" href="#architecture">{t.explore}<ArrowDown size={16}/></a>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-baseline"><span>MARKDOWN → MACHINE CONTEXT → MOVEMENT</span><span>{t.scroll} <ArrowDown size={13}/></span></div>
        </section>

        <section id="architecture" className="section architecture-section">
          <div className="frame">
            <div className="section-label"><span className="section-marker">01 / 04</span><span>{t.architecture}</span></div>
            <div className="section-intro"><h2>{t.architectureLead}</h2><p>{t.architectureText}</p></div>
            <div className="architecture-panel" aria-label="Flux architecture">
              <div className="diagram-heading"><span>FLUX / SYSTEM MAP</span><span>6 NODES · 1 FLOW</span></div>
              <div className="diagram-flow">
                {layers.map((layer, i) => (
                  <div className="diagram-unit" key={layer.label}>
                    <a className="diagram-box" href={`https://github.com/search?q=Flux+vinyl+logistics+MCP&type=repositories#${layer.fragment}`} target="_blank" rel="noreferrer" title={t.readmePending} aria-label={`${layer.label}: ${t.readmePending}`}>
                      <span className="diagram-index">0{i + 1}</span>
                      <span className="diagram-symbol">{["[ ]", "{ }", "< >", "# #", "* *", "> >"][i]}</span>
                      <strong>{layer.label}</strong>
                      <small>{layer.detail}</small>
                    </a>
                    {i < layers.length - 1 && <span className="diagram-arrow" aria-hidden="true">────→</span>}
                  </div>
                ))}
              </div>
              <div className="diagram-footer"><span>INPUT: PLAIN TEXT</span><span>OUTPUT: AGENT-READY CONTEXT</span></div>
            </div>
            <p className="under-note"><span className="orange-asterisk">*</span> {t.readmePending}</p>
          </div>
        </section>

        <section id="why" className="section why-section frame">
          <div className="section-label"><span className="section-marker">02 / 04</span><span>{t.why}</span></div>
          <div className="section-intro"><h2>{t.whyLead}</h2></div>
          <div className="benefits-grid">
            {t.benefits.map((benefit) => <article className="benefit" key={benefit.number}><span className="benefit-number">/{benefit.number}</span><div className="benefit-icon" aria-hidden="true">{benefit.number === "01" ? "[.md]" : benefit.number === "02" ? "<mcp>" : "{ MIT }"}</div><h3>{benefit.title}</h3><p>{benefit.body}</p></article>)}
          </div>
        </section>

        <section id="quickstart" className="section quickstart-section">
          <div className="frame">
            <div className="section-label"><span className="section-marker">03 / 04</span><span>{t.quickstart}</span></div>
            <div className="section-intro"><h2>{t.quickstartLead}</h2><p>{t.quickstartText}</p></div>
            <div className="quickstart-grid">
              <ol className="steps-list">{t.steps.map((step, i) => <li key={step}><span>0{i + 1}</span><span>{step}</span>{i === 4 && <ArrowRight size={17}/>}</li>)}</ol>
              <div className="terminal">
                <div className="terminal-top"><span><span className="terminal-prompt">●</span> TERMINAL / QUICKSTART</span><Button variant="ghost" size="icon" onClick={handleCopy} aria-label={copied ? t.copied : t.copy} title={copied ? t.copied : t.copy} className="copy-button">{copied ? <Check size={16}/> : <Copy size={16}/>}</Button></div>
                <div className="terminal-body"><div className="code-comment"># {t.example}</div><pre><code>{commands.split("\n").map((line, i) => <span className={line.startsWith("#") ? "comment-line" : ""} key={i}><span className="line-number">{String(i + 1).padStart(2, "0")}</span>{line}{"\n"}</span>)}</code></pre></div>
                <div className="terminal-bottom"><span>DOCKER COMPOSE</span><span>LOCAL FIRST ↗</span></div>
              </div>
            </div>
            <p className="under-note"><span className="orange-asterisk">*</span> {t.setupNote}</p>
          </div>
        </section>

        <section id="roadmap" className="section roadmap-section frame">
          <div className="section-label"><span className="section-marker">04 / 04</span><span>{t.roadmap}</span></div>
          <div className="section-intro"><h2>{t.roadmapLead}</h2><p>{t.roadmapText}</p></div>
          <div className="roadmap-head"><span>{t.awaiting}</span><span>00 / 08</span></div>
          <ol className="roadmap-list">{Array.from({ length: 8 }, (_, i) => <li key={i}><span className="roadmap-index">{String(i + 1).padStart(2, "0")}</span><span className="roadmap-placeholder">{t.slots} {String(i + 1).padStart(2, "0")}</span><span className="roadmap-dash">—</span></li>)}</ol>
        </section>
      </main>

      <footer className="site-footer"><div className="frame footer-main"><div><a href="#top" className="footer-logo">flux<span>.</span></a><p>{t.footer}</p></div><div className="footer-right"><a href="https://github.com/search?q=Flux+vinyl+logistics+MCP&type=repositories" target="_blank" rel="noreferrer" aria-label={t.altRepo}><Github size={16}/>{t.github}<MoveUpRight size={14}/></a><span className="license-badge">MIT LICENSE</span></div></div><div className="frame footer-bottom"><span>© 2026 FLUX</span><span>{t.source}</span><span>BUILT OPEN, BUILT TO MOVE.</span></div></footer>
    </div>
  );
}