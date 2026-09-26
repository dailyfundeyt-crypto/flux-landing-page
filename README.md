# Flux Landing Page

Build a static landing page for "Flux", an open-source agent-first logistics OS for vinyl resellers.




Visual: monochrome, white background, black text, single accent color (Flux orange #FF5A1F). Geist or Inter font. No images except a minimal ASCII diagram of the architecture in the hero.




Sections:

1. Hero: H1 "Your inventory is a markdown vault. Your agents are the dashboard." Subtitle "Flux turns a folder of .md files into a queryable, agent-accessible logistics OS. Built on the Model Context Protocol."

2. Architecture: 6-box ASCII diagram (Vault -> MCP-Server -> Supabase -> Agents). Each box clickable, anchors to GitHub README section.

3. Why: 3 columns - "MD as source of truth", "MCP-native (works with Cursor, Grok, Slack)", "Open source MIT".

4. Quickstart: 5-step Docker compose snippet (assumes user has Supabase project URL + anon key).

5. Roadmap: 8 bullet points from current Milestone.

6. Footer: GitHub link, license badge (MIT), "Built by humans, for agents".




Constraints:

- Pure HTML + CSS + a tiny bit of vanilla JS (no React).

- Total page weight < 50 KB.

- Host on GitHub Pages; output a `landing-page/` directory with `index.html` and `styles.css`.

- No tracking, no analytics, no fonts from Google CDN (self-host Inter or use system stack).

- German + English language toggle via a tiny JS function.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/063ecbcb-4016-4d53-aac4-13e1d1f8d481).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
