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
    question: "What is the primary difference between 'turnover' and 'attrition'?",
    options: [
      "Turnover includes only voluntary departures; attrition includes all departures.",
      "Turnover counts all departures; attrition typically refers to voluntary departures when positions are not backfilled.",
      "Turnover measures the speed of departures, while attrition measures the cost.",
      "There is no difference; the terms are statistically identical."
    ],
    correctAnswer: 1,
    explanation: "Turnover counts all departures (voluntary and involuntary). Attrition typically refers to voluntary departures and is often used when those specific positions aren't immediately replaced."
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
    question: "Which of the following is considered 'Regrettable Turnover'?",
    options: [
      "Firing an employee for poor performance.",
      "A high-performing engineer resigning to join a competitor.",
      "An employee retiring after 30 years of service.",
      "Eliminating a position during a corporate restructuring."
    ],
    correctAnswer: 1,
    explanation: "Regrettable turnover involves the voluntary departure of an employee the organization wanted to keep, usually a high performer or high-potential individual."
  },
  {
    id: 13,
    question: "What is the primary difference between Time-to-Fill and Time-to-Hire?",
    options: [
      "Time-to-fill measures the recruiter's speed; time-to-hire measures the hiring manager's speed.",
      "Time-to-fill starts when a requisition is opened; time-to-hire starts when the candidate enters the pipeline.",
      "Time-to-fill measures internal transfers; time-to-hire measures external candidates.",
      "They are exactly the same metric."
    ],
    correctAnswer: 1,
    explanation: "Time-to-fill is a business metric starting from the day the job opens. Time-to-hire is a recruiter process metric starting from the day the candidate applies or is sourced."
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
  }
];
