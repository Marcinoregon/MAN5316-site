# HR Analytics — MAN 6316 Course Companion

A static companion website for the **HR Analytics** course (MAN 6316) in the MS in Human Resource Management program. Built with Next.js 14, TypeScript, and Tailwind CSS.

---

## Quick Start

```bash
# Install dependencies
npm install

# Run development server (opens at http://localhost:3000)
npm run dev
```

---

## Content Editing Guide

The site uses plain TypeScript/JSX files — no MDX or CMS. Prose lives directly in page files. Here is where each section lives:

| Page | File |
|------|------|
| Home | `src/app/page.tsx` |
| Why It Matters | `src/app/why-it-matters/page.tsx` |
| Cases Index | `src/app/cases/page.tsx` |
| Each Case | `src/app/cases/[slug]/page.tsx` |
| Glossary | `src/app/glossary/page.tsx` |
| Frameworks | `src/app/frameworks/page.tsx` |
| About | `src/app/about/page.tsx` |

### Editing Prose

Open any `page.tsx` file in a text editor. Prose paragraphs look like this:

```tsx
<p className="text-slate-700 leading-relaxed mb-4">
  Your text here.
</p>
```

Edit the text between `<p ...>` and `</p>`. Do not change the `className` attribute.

### Adding a Glossary Term

Open `src/lib/glossary.ts` and add an entry to the `GLOSSARY` array:

```ts
{
  term: 'Your Term Here',
  slug: 'your-term-here',         // lowercase, hyphens only
  definition: 'Two to three sentences defining the term.',
  whyItMatters: 'One to two sentences on practical application.',
  seeAlso: { term: 'Related Term', slug: 'related-term' },  // optional
},
```

Terms sort alphabetically and appear automatically in the glossary.

### Adding a Case Study

**Step 1:** Add the case metadata to `src/lib/cases.ts`:

```ts
{
  slug: 'your-case-slug',
  title: 'Case Title',
  company: 'Company Name',
  companySize: 'Mid-size (X employees)',
  topic: 'Your Topic',
  maturity: 'descriptive',   // or 'predictive' | 'prescriptive'
  type: 'real',              // or 'illustrative'
  summary: 'One paragraph summary for the case card.',
},
```

**Step 2:** Create the page file at `src/app/cases/your-case-slug/page.tsx`. Copy an existing case file as a template. Illustrative cases must include `<IllustrativeBanner />` — this is handled automatically by `CaseLayout` when `type="illustrative"`.

### Updating Citations

Each case page has a `citations` prop passed to `<CaseLayout>`. Add entries to the array:

```ts
{ id: '4', text: 'Author, A. (Year). Title. Journal.', url: 'https://...' }
```

---

## Vercel Deploy Guide

1. Push this repository to GitHub.
2. Go to [vercel.com](https://vercel.com) and click **New Project**.
3. Import your GitHub repository.
4. Vercel auto-detects Next.js — no configuration needed.
5. Click **Deploy**.

For a custom domain, go to **Project Settings → Domains** in the Vercel dashboard.

---

## Architecture Notes

- **No database or backend.** All data is in `src/lib/cases.ts` and `src/lib/glossary.ts`.
- **No analytics tracking.** The site has no tracking scripts by design.
- **TypeScript throughout.** The type definitions in `src/lib/` enforce content consistency.
- **Tailwind CSS** for styling. The design system is in `tailwind.config.ts` and `src/app/globals.css`.
- **Components** in `src/components/` are reusable across pages. Do not modify these unless you understand React.
