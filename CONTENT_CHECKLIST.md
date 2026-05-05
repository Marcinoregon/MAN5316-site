# Content Checklist — Items Requiring Professor Review

> Before making this site public or sharing with students, please review the items flagged below.
> Items are grouped by priority.

---

## 🔴 High Priority — Review Before Any Student Use

### Illustrative Cases (All Six)

The following cases are clearly labeled as illustrative on the site. Please verify:
- The fictional numbers are plausible for the industry depicted.
- The teaching note accurately reflects your intended learning objective.
- The company names and scenarios do not too closely resemble any real organizations known to your students.

| Case | File | Key numbers to verify |
|------|------|-----------------------|
| Pay Equity Audit (Meridian) | `src/app/cases/pay-equity-audit/page.tsx` | 6.1% adjusted gap, 47 employees corrected, $197K cost |
| DEI Pipeline (ClearPath) | `src/app/cases/dei-pipeline-analysis/page.tsx` | 11% vs. 21% promotion rates, 73% representation gap |
| Training ROI (Vantage) | `src/app/cases/training-roi/page.tsx` | $420K investment, $1.8M revenue, 4.3× ROI |
| Absenteeism (Harborview) | `src/app/cases/absenteeism-modeling/page.tsx` | 6.2% → 5.1% absence rate, $890K overtime savings |
| Engagement Survey (Northbrook) | `src/app/cases/engagement-survey-redesign/page.tsx` | 68% → 81% response rate, 72% → 64% engagement |
| Regrettable Turnover (Ashford) | `src/app/cases/regrettable-turnover/page.tsx` | 22% total / 8% regrettable, 31% → 19% team lead rate |

---

## 🟡 Medium Priority — Verify Before Semester Start

### Real Cases: Dow Chemical

The Dow Chemical case is well-documented in practitioner literature but less richly cited in open-access peer-reviewed journals than the Google cases. The three citations included are:
- Boudreau & Ramstad (2007) textbook — available commercially
- Sullivan (2002) ERE Media article — practitioner source
- SHRM Foundation (2012) workforce planning guide

**{/* TODO(prof) */}** If you have access to more recent or peer-reviewed Dow documentation, please add it to the `citations` array in `src/app/cases/dow-chemical-workforce-planning/page.tsx`.

### IBM Attrition Case: $300M Claim

The IBM case includes an explicit methodological caution about the unverified "$300M savings" figure. This was a deliberate editorial choice — the figure is widely cited but comes from IBM's own reporting, not independent verification. Please confirm this framing is appropriate for your course context.

---

## 🟢 Low Priority — Good to Know

### Glossary Coverage Gaps

The following required terms from the original specification are present but may benefit from richer "why it matters" examples:
- `Simpson's Paradox` — could use a worked HR example (currently text-only)
- `Survival Analysis` — technically accurate but example-light

### Missing Recharts Visualizations

The prompt specified Recharts for data visualization. The current build uses descriptive component layouts rather than live charts. Consider adding a Recharts visualization to:
- The Frameworks page (a maturity distribution chart by industry)
- The Best Buy case (an engagement-vs-revenue scatterplot)

This is not blocking for educational use but would strengthen the visual impact.

---

*Last reviewed: [Add date when reviewing]*
*Reviewer: [Add name]*
