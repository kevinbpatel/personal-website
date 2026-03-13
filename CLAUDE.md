# Kevin's Portfolio Site

Next.js 15, Tailwind CSS 4, Framer Motion. Run with `bun dev` (localhost:3000).

## Design Iteration Workflow

Goal: make this site feel like [zed.dev](https://zed.dev) — clean, fast, developer-focused. Inspiration, not cloning. It's a personal portfolio.

### Tools: Use Claude in Chrome (not WebFetch)

Use the `mcp__claude-in-chrome__*` browser tools for all visual analysis. They give real rendered output, not raw HTML.

### The Loop

For every design change, follow this cycle:

**1. Screenshot zed.dev**
- `tabs_create_mcp` → navigate to `https://zed.dev`
- `read_page` to get the rendered DOM and styles
- `javascript_tool` to extract specific computed styles (colors, fonts, spacing, border-radius, shadows, etc.):
  ```js
  // Example: extract design tokens from zed.dev
  JSON.stringify({
    bg: getComputedStyle(document.body).backgroundColor,
    text: getComputedStyle(document.body).color,
    font: getComputedStyle(document.body).fontFamily,
    headingFont: getComputedStyle(document.querySelector('h1')).fontFamily,
    // ... target specific elements
  })
  ```
- Take a screenshot with `computer` (screenshot action) for visual reference

**2. Screenshot localhost:3000**
- `tabs_create_mcp` → navigate to `http://localhost:3000`
- Same process: `read_page`, `javascript_tool` for computed styles, screenshot
- Also read the source CSS/component files for context

**3. Compare side-by-side**
- Diff the extracted tokens (colors, fonts, spacing, shadows, border-radius)
- Compare screenshots visually
- Identify the single biggest gap

**4. Fix one thing**
- Make a small, focused code change. No full rewrites.
- Target one category at a time: colors → typography → spacing → shadows → layout → effects

**5. Verify in browser**
- Reload localhost:3000 in Chrome (`navigate` tool)
- Take a new screenshot
- Visually confirm the change looks right
- Ask user to confirm before moving on

**6. Commit**
- Save progress so it's rollback-safe

**7. Repeat**
- Go back to step 1

### Key Rules
- One change at a time. Small diffs, easy rollbacks.
- Always re-screenshot zed.dev at the start of each session — their site evolves.
- Adapt the aesthetic to fit a personal portfolio context (it's not a product landing page).
- Extract real computed styles, don't guess from memory.
- Ask the user to visually confirm after each change before moving on.
- Use `gif_creator` when making multi-step visual changes to show before/after.

## File Map

| File | Controls |
|------|----------|
| `src/app/globals.css` | Colors, design tokens, CSS animations |
| `src/app/layout.tsx` | Root layout, fonts, container width |
| `src/app/resources/config.ts` | Font imports, site metadata |
| `src/components/layout/Header.tsx` | Navigation header |
| `src/components/layout/Footer.tsx` | Footer |
| `src/components/sections/Hero.tsx` | Hero/landing section |
| `src/components/sections/ProjectCard.tsx` | Work project cards |
| `src/components/sections/SectionLabel.tsx` | Section headings |
| `src/components/animations/FadeIn.tsx` | Scroll fade-in animation |
| `src/components/animations/TextScramble.tsx` | Text scramble effect |
| `src/components/mdx/MDXComponents.tsx` | MDX content styling |
