# Style Guide — HR Analytics Course Companion

This guide governs future content additions. Follow it to maintain consistency across pages.

---

## Voice & Tone

- **Direct and plainspoken.** Write as you would speak to a smart colleague, not as you would write a dissertation.
- **No jargon without definition.** If a term appears for the first time on a page, define it inline or link it to the glossary using `<TermLink term="..." />`.
- **Acknowledge uncertainty.** When evidence is incomplete or contested, say so. Use phrases like "the evidence suggests" and "this finding has not been independently replicated" rather than presenting contested claims as settled.
- **Respect the reader's experience.** The audience has worked in HR. Do not explain what a performance review is. Do not be condescending about practitioners' prior skepticism.
- **No startup vocabulary.** Avoid "rock star," "ninja," "disruption," "10× thinking," "move fast," and similar phrases.
- **Target Flesch reading level ~12th grade.** Use short paragraphs. Vary sentence length. Prefer active voice.

---

## Structure

### Long-form pages (Why It Matters, case studies)

- Begin with a page header: a `<p>` with category label (e.g., "Foundations"), followed by an `<h1>` title and a one-sentence description.
- Divide content into `<section>` elements with `<h2>` headings.
- Maximum prose width is 70ch (enforced by the `.prose-section` class — do not override).
- Use `<CallOut>` components for insight, caution, and source callouts. Do not use blockquotes for callouts.
- End long pages with `<CitationsList />` if any factual claims are cited.

### Case studies

- Always use `<CaseLayout>` as the wrapper. Pass all required props.
- Illustrative cases: `type="illustrative"` — this automatically renders the `<IllustrativeBanner />`.
- End every illustrative case with a `<CallOut variant="insight">` titled "What this case illustrates."
- Never invent statistics or attribute quotes to real executives in real cases.

### Glossary entries

- Add to `src/lib/glossary.ts`. Do not create separate page files for individual terms.
- `definition`: 2–3 sentences. Plain English.
- `whyItMatters`: 1–2 sentences. Practice-focused. Start with an action or implication.
- `seeAlso`: One cross-reference. Choose the most directly related term.

---

## Typography

| Element | Typeface | Weight | Size |
|---------|----------|--------|------|
| H1 | Crimson Pro (serif) | 600 | 2.25–3rem |
| H2 | Crimson Pro (serif) | 600 | 1.5rem |
| H3 | Crimson Pro (serif) | 600 | 1.25rem |
| Body | Inter (sans) | 400 | 0.875–1rem |
| Labels/tags | Inter (sans) | 500–600 | 0.75rem |

---

## Color Usage

| Role | Token | Use |
|------|-------|-----|
| Primary accent | `teal-700` | Links, active nav, primary buttons, callout borders |
| Hover accent | `teal-900` | Link hover states |
| Surface | `slate-50` | Page background |
| Card surface | `white` | Card backgrounds |
| Body text | `slate-800` | Primary prose |
| Secondary text | `slate-600` | Descriptions, meta |
| Muted text | `slate-400`–`slate-500` | Labels, timestamps |
| Caution | `amber-500`–`amber-800` | Caution callouts, illustrative badges |

**Do not introduce new colors.** Extend the existing palette only by permission.

---

## Component Usage

| Component | When to use |
|-----------|-------------|
| `<CallOut variant="insight">` | Conceptual synthesis, practical implications |
| `<CallOut variant="caution">` | Methodological warnings, common misinterpretations |
| `<CallOut variant="source">` | Attribution notes, limitations of cited evidence |
| `<TermLink term="..." />` | First use of a glossary term on a page |
| `<IllustrativeBanner />` | Automatically included via `CaseLayout type="illustrative"` |
| `<CitationsList />` | End of any page with numbered citations |
| `<MaturityLadder />` | Where the descriptive/predictive/prescriptive continuum is discussed |

---

## Accessibility Requirements

- Every image must have a descriptive `alt` attribute. No decorative images without `alt=""`.
- All interactive elements (`<button>`, `<a>`) must have visible focus styles (already in `globals.css`).
- Color is never the only means of conveying information (e.g., tags use text labels, not color alone).
- Heading hierarchy must be sequential: never skip from H2 to H4.
- External links must include `target="_blank" rel="noopener noreferrer"` and an accessible label for the tab-open behavior.

---

## Citations Format

Use author-date format (APA 7th edition) in the `<CitationsList>` component.

```
Last, F. M. (Year). Title of article. Journal Name, Volume(Issue), pages. https://doi.org/...
```

For HBR and practitioner sources:
```
Author, A. (Year, Month Day). Article title. Publication Name. https://url
```

Do not use footnote numbers in body prose — use `<sup>[n]</sup>` only where a specific statistic is cited from a specific source. General arguments do not require in-line citation markers.

---

*Version 1.0 — Initial release*
