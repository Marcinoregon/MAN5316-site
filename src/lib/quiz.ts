export interface QuizQuestion {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "An HR analyst wants to calculate the average of employees' survey responses on a scale of 1–5 (Strongly Disagree to Strongly Agree). What type of data is this, and what should the analyst be cautious about?",
    options: [
      "Ratio data — the mean is perfectly valid because the scale starts at 1.",
      "Nominal data — no mathematical operations are appropriate.",
      "Ordinal data — the mean is commonly used but assumes equal intervals between scale points, which isn't mathematically guaranteed.",
      "Interval data — a score of 4 is exactly twice as meaningful as a score of 2."
    ],
    correctAnswer: 2,
    explanation: "Likert-type survey scales (1–5, 1–7) produce ordinal data. The categories have a meaningful order, but there is no guarantee that the psychological gap between each point is equal. Computing a mean is a widely accepted and defensible practice, but analysts should acknowledge this assumption. Ratio data requires a true zero point (e.g., training hours), which this scale lacks."
  },
  {
    id: 2,
    question: "Which of the following is a leading indicator?",
    options: [
      "First-year turnover rate",
      "Annual healthcare costs per employee",
      "Manager satisfaction scores",
      "Total number of employee grievances filed last year"
    ],
    correctAnswer: 2,
    explanation: "A leading indicator predicts a future outcome. Manager satisfaction scores often predict future voluntary exits, allowing HR to intervene before the turnover happens. The others measure events that have already occurred (lagging indicators)."
  },
  {
    id: 3,
    question: "Under EEOC guidelines, the 'Four-Fifths Rule' is used as a preliminary indicator of:",
    options: [
      "Pay inequity",
      "Regrettable turnover",
      "Adverse impact",
      "Low engagement"
    ],
    correctAnswer: 2,
    explanation: "The Four-Fifths Rule flags possible adverse impact when the selection rate for a protected group is less than 80% (four-fifths) of the rate for the group with the highest selection rate."
  },
  {
    id: 4,
    question: "A predictive analytics model forecasts future outcomes based on historical data. What is its greatest vulnerability?",
    options: [
      "It requires expensive software.",
      "If the historical training data contains biases, the model will learn to replicate those biases.",
      "It cannot be used for populations under 10,000 employees.",
      "It only measures lagging indicators."
    ],
    correctAnswer: 1,
    explanation: "Predictive models learn from the past. If past promotion or hiring decisions were biased against certain groups, the model will codify that bias and make biased predictions moving forward."
  },
  {
    id: 5,
    question: "Why is the 'median' often a better metric than the 'mean' for reporting employee salaries?",
    options: [
      "The median is legally required by the Fair Labor Standards Act.",
      "The median is robust against extreme outliers, such as CEO compensation.",
      "The median is always higher than the mean.",
      "The median calculates the most frequently occurring salary."
    ],
    correctAnswer: 1,
    explanation: "The mean (average) is heavily pulled by extreme outliers. In a 100-person company, one executive making $5 million will heavily skew the mean, but the median will accurately reflect the 'middle' employee's experience."
  },
  {
    id: 6,
    question: "Which level of HR analytics answers the question: 'What should we do about this?'",
    options: [
      "Descriptive Analytics",
      "Predictive Analytics",
      "Prescriptive Analytics",
      "Diagnostic Analytics"
    ],
    correctAnswer: 2,
    explanation: "Prescriptive analytics uses optimization and simulation to recommend actions. Descriptive tells you what happened, and Predictive tells you what might happen."
  },
  {
    id: 7,
    question: "What does an employee's Compa-Ratio measure?",
    options: [
      "Their salary compared to the CEO's salary.",
      "Their actual pay divided by the midpoint of their assigned pay band.",
      "Their performance rating compared to their peers.",
      "The percentage of their compensation that is variable (bonus/stock)."
    ],
    correctAnswer: 1,
    explanation: "Compa-Ratio expresses an employee's pay relative to the midpoint of their pay band. A ratio of 1.00 means they are exactly at midpoint."
  },
  {
    id: 8,
    question: "What does eNPS (Employee Net Promoter Score) measure?",
    options: [
      "How likely an employee is to recommend their organization as a place to work.",
      "The percentage of employees enrolled in a company-sponsored wellness program.",
      "An employee's individual productivity score.",
      "The speed at which a new hire reaches full productivity."
    ],
    correctAnswer: 0,
    explanation: "eNPS is a single-question metric asking employees how likely they are (on a 0-10 scale) to recommend the company. It calculates the percentage of Promoters minus the percentage of Detractors."
  },
  {
    id: 9,
    question: "If an HR dataset exhibits 'Simpson's Paradox,' what is happening?",
    options: [
      "The data shows a trend that reverses or disappears when broken into subgroups.",
      "The sample size is too small to achieve statistical significance.",
      "Employees are deliberately lying on their engagement surveys.",
      "The baseline rate of an event is so low that the model produces mostly false positives."
    ],
    correctAnswer: 0,
    explanation: "Simpson's Paradox occurs when aggregate data points to one conclusion (e.g., 'We hire women at a higher rate overall'), but disaggregated subgroup data shows the exact opposite ('Every individual department prefers to hire men')."
  },
  {
    id: 10,
    question: "Why should HR be cautious of 'Regression to the Mean' when evaluating a new training program?",
    options: [
      "Because the training program is likely too difficult for the average employee.",
      "Because employees with unusually low performance in one quarter are likely to improve naturally in the next, making the training look artificially successful.",
      "Because it means the data was collected illegally.",
      "Because it guarantees the training program will fail."
    ],
    correctAnswer: 1,
    explanation: "Extreme measurements tend to move closer to the average over time. If you only train the lowest performers, they would likely improve somewhat anyway by pure statistical variation. You must use control groups to isolate the training's true effect."
  },
  {
    id: 11,
    question: "How is a Full-Time Equivalent (FTE) calculated for part-time workers?",
    options: [
      "Every employee is counted as 1 FTE, regardless of hours.",
      "Part-time workers are excluded from FTE calculations.",
      "Their scheduled hours are divided by the standard full-time hours (e.g., 20 hours / 40 hours = 0.5 FTE).",
      "It is based on their salary divided by the minimum wage."
    ],
    correctAnswer: 2,
    explanation: "FTE normalizes headcount based on hours worked. Two employees each working 20 hours in a 40-hour work week equal 1.0 FTE."
  },
  {
    id: 12,
    question: "An HR dataset shows that the mean time-to-productivity for new hires is 47 days, but several new hires took over 180 days. What is the most appropriate way to handle these extreme values before reporting?",
    options: [
      "Delete them — extreme values are always data entry errors.",
      "Replace them with the mean to normalize the distribution.",
      "Investigate whether they are legitimate data points; if so, report both the mean and median and note the skew rather than removing them.",
      "Always exclude any value more than 30 days from the mean before analysis."
    ],
    correctAnswer: 2,
    explanation: "Extreme values (outliers) should never be automatically deleted. First, investigate whether they represent real cases (e.g., complex roles with long ramp times) or data errors. If legitimate, they carry important information. Reporting both the mean and median — and flagging the skewed distribution — gives stakeholders a more complete and honest picture than silently removing inconvenient data points."
  },
  {
    id: 13,
    question: "An HR team conducts an engagement survey and achieves a 40% response rate. The results show high satisfaction scores. What data quality concern should they flag before presenting the findings to leadership?",
    options: [
      "A 40% response rate is too low to calculate a mean.",
      "Non-response bias — employees who chose not to respond may have systematically different views, meaning the results could overstate actual satisfaction.",
      "The survey should be discarded entirely because less than 50% responded.",
      "High satisfaction scores always indicate data manipulation."
    ],
    correctAnswer: 1,
    explanation: "Non-response bias (also called sample bias) occurs when those who respond to a survey differ systematically from those who don't. In engagement surveys, disengaged or dissatisfied employees are less likely to respond — meaning a 40% response rate may produce artificially positive results. Analysts should flag this limitation explicitly and, where possible, compare respondent demographics to the full workforce to assess how representative the sample is."
  },
  {
    id: 14,
    question: "If a statistical test yields a p-value of 0.04, what does this generally mean in HR research?",
    options: [
      "There is a 4% chance that the observed result occurred by random chance, assuming no real effect exists.",
      "The effect size of the intervention was exactly 4%.",
      "The intervention improved performance by 4 points.",
      "The result is invalid and must be discarded."
    ],
    correctAnswer: 0,
    explanation: "A p-value measures the probability of seeing the data by chance if the null hypothesis is true. A p-value < 0.05 is typically considered statistically significant, but it does NOT measure the practical size or importance of the effect."
  },
  {
    id: 15,
    question: "In an employee survey, what does a large 'Standard Deviation' in responses indicate?",
    options: [
      "All employees answered exactly the same way.",
      "There is a wide variation in how employees feel; responses are spread far apart from the average.",
      "The survey questions were written poorly.",
      "The data has been corrupted by a software bug."
    ],
    correctAnswer: 1,
    explanation: "Standard deviation measures dispersion. A high standard deviation means that an 'average' score is hiding polarized groups—some employees scored very high, while others scored very low."
  },
  {
    id: 16,
    question: "Which of the following describes 'Sample Bias' in HR Analytics?",
    options: [
      "When a predictive model uses too many variables.",
      "When the group of employees who respond to a survey systematically differs from the total workforce (e.g., only happy employees take the survey).",
      "When a manager reviews only the first three resumes submitted.",
      "When data is stored on a local server instead of the cloud."
    ],
    correctAnswer: 1,
    explanation: "Sample (or Non-Response) bias occurs when the data collected doesn't represent the true population. If disgruntled employees refuse to take the engagement survey, the results will look artificially positive."
  },
  {
    id: 17,
    question: "What does 'Span of Control' measure?",
    options: [
      "The geographical distance between a manager and their team.",
      "The number of direct reports assigned to a single manager.",
      "The size of the department's budget.",
      "The amount of software tools an employee uses daily."
    ],
    correctAnswer: 1,
    explanation: "Span of control refers to the number of direct reports under one manager. Narrow spans (3-5) are for complex work; wider spans (8-12+) are for highly standardized work."
  },
  {
    id: 18,
    question: "Which metric is the best measure of recruiting effectiveness, despite being the hardest to calculate accurately?",
    options: [
      "Cost-Per-Hire",
      "Time-to-Fill",
      "Quality of Hire",
      "Offer Acceptance Rate"
    ],
    correctAnswer: 2,
    explanation: "Quality of Hire measures the actual value a new employee brings (via performance, retention, and ramp time). Cost and speed metrics are easier to calculate but meaningless if the hires are poor quality."
  },
  {
    id: 19,
    question: "What is a 'Base Rate'?",
    options: [
      "An employee's starting salary before bonuses.",
      "The minimum response rate required for a valid survey.",
      "The naturally occurring frequency of an event in a population before any intervention.",
      "The lowest score on a performance evaluation."
    ],
    correctAnswer: 2,
    explanation: "The base rate is how common something is organically. If only 3% of employees steal from the company (a low base rate), a predictive test for theft is likely to flag mostly innocent people (false positives)."
  },
  {
    id: 20,
    question: "What does the R-squared (R²) value tell you about a regression model?",
    options: [
      "The exact number of employees who will leave next month.",
      "The proportion of variance in the outcome that is explained by the predictors in the model.",
      "The error rate of the software system.",
      "The statistical significance of the median."
    ],
    correctAnswer: 1,
    explanation: "R-squared measures how much of the variation in the dependent variable (like performance) can be explained by the independent variables (like tenure and training). An R² of 0.30 means the model explains 30% of the variance."
  },

  // ── Data Basics ──────────────────────────────────────────────────────────
  {
    id: 21,
    question: "An HR report shows a mean salary of $112,000 and a median salary of $74,000 across a 200-person company. What does this gap most likely indicate?",
    options: [
      "The data was collected incorrectly and should be discarded.",
      "A small number of very high earners — such as executives — are pulling the mean upward, making the median a better representation of the typical employee's pay.",
      "Most employees earn close to $112,000.",
      "The median is always higher than the mean in salary data."
    ],
    correctAnswer: 1,
    explanation: "When the mean is significantly higher than the median, the distribution is right-skewed — a small number of very high values (like executive salaries) are pulling the average up. The median is unaffected by those outliers and better represents the 'typical' employee. In skewed salary data, always report the median as the primary measure of central tendency."
  },
  {
    id: 22,
    question: "A survey asks employees to rate their work-life balance on a scale of 1 (Poor) to 5 (Excellent). What type of data is this, and what does that mean for analysis?",
    options: [
      "Ratio data — all arithmetic operations including multiplication are valid.",
      "Nominal data — you can only report the most common response.",
      "Ordinal data — the responses have a meaningful order, but the intervals between scale points may not be equal.",
      "Interval data — a rating of 4 is exactly twice as good as a rating of 2."
    ],
    correctAnswer: 2,
    explanation: "Likert-type scales (1–5, 1–7) produce ordinal data. The categories have a clear rank order, but there is no guarantee the psychological gap between 'Poor' and 'Fair' equals the gap between 'Good' and 'Excellent.' Computing a mean is a common and defensible shortcut, but it rests on the simplifying assumption that the intervals are equal — which is not mathematically guaranteed. Ratio data requires a true zero point, which this scale does not have."
  },
  {
    id: 23,
    question: "In a normally distributed dataset of employee performance scores with a mean of 75 and a standard deviation of 8, approximately what percentage of employees score between 67 and 83?",
    options: [
      "Approximately 99.7%",
      "Approximately 95%",
      "Approximately 68%",
      "Approximately 50%"
    ],
    correctAnswer: 2,
    explanation: "67 and 83 are each exactly one standard deviation from the mean (75 − 8 = 67; 75 + 8 = 83). According to the empirical rule (68–95–99.7), approximately 68% of values in a normal distribution fall within ±1 standard deviation of the mean. This is the 'typical range' — the band that captures roughly two-thirds of the workforce."
  },

  // ── Variables & Relationships ─────────────────────────────────────────────
  {
    id: 24,
    question: "A researcher finds that ice cream sales and employee voluntary turnover both peak in July. The correlation between the two is r = +0.81. What is the most accurate conclusion?",
    options: [
      "Eating ice cream causes employees to quit.",
      "High turnover causes organizations to buy more ice cream.",
      "The strong correlation is likely spurious — a third variable (summer seasonality) independently drives both patterns.",
      "An r of 0.81 is high enough to establish a causal link between the two variables."
    ],
    correctAnswer: 2,
    explanation: "This is a classic spurious correlation. Summer seasonality independently drives both ice cream consumption (warm weather) and turnover spikes (fiscal cycles, summer job market activity). No matter how high the correlation coefficient, correlation alone never establishes causation. A strong r only tells you two variables move together — not why, and not that one produces the other."
  },
  {
    id: 25,
    question: "An analyst studying whether flexible scheduling reduces absenteeism wants to include 'employee tenure' in the model even though tenure is not the main variable of interest. What role does tenure play?",
    options: [
      "Tenure is the dependent variable — the outcome the analyst is trying to predict.",
      "Tenure is a control variable — included because it likely influences absenteeism and could confound the relationship between scheduling flexibility and attendance.",
      "Tenure is a dummy variable that must be coded 0 or 1.",
      "Tenure should be excluded because adding more variables always reduces model accuracy."
    ],
    correctAnswer: 1,
    explanation: "A control variable is included in a model not because it is the focus of the analysis, but because it is known to influence the outcome and could confound results if omitted. Tenure affects absenteeism independently — newer employees may have different attendance patterns than veterans. Controlling for tenure lets the analyst estimate the unique effect of scheduling flexibility among employees at the same tenure level, producing a less biased estimate."
  },
  {
    id: 26,
    question: "An HR analyst reports a correlation of r = −0.42 between the number of manager 1-on-1 meetings per month and employee burnout scores. How should this be interpreted?",
    options: [
      "A strong positive relationship — more meetings mean more burnout.",
      "A moderate negative relationship — employees who have more 1-on-1s tend to report lower burnout, though the association is not perfect and causation is not established.",
      "The result is not statistically meaningful because r is below 0.50.",
      "Manager 1-on-1 meetings cause burnout to decrease by 42%."
    ],
    correctAnswer: 1,
    explanation: "r = −0.42 indicates a moderate negative linear relationship: as the number of 1-on-1 meetings increases, burnout scores tend to decrease. By conventional benchmarks, |r| between 0.30 and 0.50 is considered a moderate and practically meaningful relationship in behavioral data. However, correlation does not establish causation — it could be that less burned-out employees are more likely to accept 1-on-1 invitations (reverse causation), or that a supportive manager culture drives both. Additional research design is needed to claim a causal effect."
  },

  // ── Multivariate Analysis ─────────────────────────────────────────────────
  {
    id: 27,
    question: "A regression model predicting employee performance scores includes 'Department' as a variable with five categories (Sales, HR, Finance, Operations, Legal). How many dummy variables are needed to represent Department correctly?",
    options: [
      "Five — one for each department.",
      "Four — one per department minus one reference category.",
      "One — coded 1 through 5 for each department.",
      "None — categorical variables cannot be used in regression."
    ],
    correctAnswer: 1,
    explanation: "For a categorical variable with k categories, you create k−1 dummy variables. With five departments, you create four dummies and designate the fifth as the reference category. Each dummy's coefficient then represents the difference in performance compared to the reference department, holding other variables constant. Creating five dummies causes the 'dummy variable trap' (perfect multicollinearity), which breaks the regression. Coding departments 1–5 falsely implies a numerical ordering that does not exist."
  },
  {
    id: 28,
    question: "A linear regression model predicts annual engagement scores (0–100). The coefficient for 'Training_Hours' is β = 1.4, with p = 0.01. What does this mean?",
    options: [
      "Training hours explain 1.4% of the variance in engagement.",
      "Each additional training hour is associated with a 1.4-point increase in engagement scores on average, holding all other variables in the model constant, and this effect is statistically significant.",
      "There is a 1% probability that training hours affect engagement.",
      "The model predicts that engagement will reach 1.4 out of 100 without any training."
    ],
    correctAnswer: 1,
    explanation: "A regression coefficient (β) represents the expected change in the outcome for a one-unit increase in the predictor, with all other variables held constant. Here, each additional hour of training is associated with a 1.4-point increase in the engagement score. The p-value of 0.01 is well below the conventional 0.05 threshold, meaning this relationship is statistically significant — it is very unlikely to be due to chance. The coefficient does not represent variance explained (that is R²) or a probability."
  },
  {
    id: 29,
    question: "An HR team uses logistic regression to predict voluntary turnover. The odds ratio for 'received_promotion' is 0.38. What is the correct interpretation?",
    options: [
      "Employees who received a promotion are 38% more likely to leave.",
      "Receiving a promotion is associated with 62% lower odds of voluntary turnover compared to employees who were not promoted.",
      "The model explains 38% of the variance in turnover.",
      "Promoted employees have a 38-point higher engagement score."
    ],
    correctAnswer: 1,
    explanation: "In logistic regression, an odds ratio below 1.0 means the predictor is associated with decreased odds of the outcome. OR = 0.38 means that promoted employees have odds of leaving that are 62% lower than non-promoted employees (1 − 0.38 = 0.62, a 62% reduction). Odds ratios do not represent percentage-point changes in probability, they do not measure variance explained (that is pseudo-R²), and they are not the same as regression coefficients from a linear model."
  },
  {
    id: 30,
    question: "Which of the following HR research questions requires logistic regression rather than linear regression?",
    options: [
      "By how many points does each additional year of tenure increase an employee's performance rating on a 100-point scale?",
      "What is the predicted annual salary for an employee based on their job level and department?",
      "What is the probability that a new hire will voluntarily leave within their first 90 days, given their onboarding satisfaction score and commute time?",
      "How does the number of training hours predict engagement scores on a 0–100 scale?"
    ],
    correctAnswer: 2,
    explanation: "Logistic regression is used when the dependent variable is binary — in this case, whether a new hire leaves within 90 days (yes/no). It models the probability of a binary outcome. The other three questions involve continuous outcomes (performance rating, salary in dollars, engagement score on a scale) — those call for linear regression. Using linear regression on a binary outcome is technically invalid because it can produce predicted probabilities below 0 or above 1, which are mathematically meaningless."
  }
];
