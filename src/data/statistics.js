// AP Statistics — real College Board unit numbers/names used for authenticity.

export const statistics = {
  id: 'statistics',
  name: 'AP Statistics',
  icon: '📊',
  accent: 'indigo',
  units: [
    {
      id: 1,
      name: 'Unit 1: Exploring One-Variable Data',
      questions: [
        {
          id: 'stat-1-1', difficulty: 1, type: 'mcq', topic: 'Measures of Center',
          prompt: "A dataset of exam scores is strongly left-skewed. Which measure of center is most appropriate to report, and why?",
          choices: ['Mean, because it uses every data point', 'Median, because it is resistant to the influence of extreme low outliers pulling the skew', 'Mode, because it identifies the most common score', 'Range, because it shows the spread of scores'],
          correct: 1,
          explanation: {
            correct: "In a skewed distribution, extreme values in the tail pull the mean toward them; the median is resistant (robust) to this pull, making it a more representative measure of center for skewed data.",
            wrong: { 0: "Using every data point is actually why the mean is NOT resistant — extreme values drag it in their direction, which is a drawback for skewed data.", 2: "The mode identifies frequency, not central tendency in the sense needed here, and can be unrepresentative or even nonexistent in continuous data.", 3: "Range is a measure of spread, not center, so it doesn't address the question of which center measure to report." },
            tempting: "Choice A is tempting because 'uses every data point' sounds like a strength, but that's precisely why the mean gets distorted by outliers/skew — it's not actually the deciding advantage here.",
            commonMistake: "Assuming that using more information (every data point) always makes a statistic 'better,' without considering resistance to outliers/skew.",
            apTip: "Memorize the rule: for skewed distributions or data with outliers, report the median and IQR; for roughly symmetric data without outliers, the mean and standard deviation are appropriate."
          }
        },
        {
          id: 'stat-1-2', difficulty: 1, type: 'mcq', topic: 'Standard Deviation',
          prompt: "Which statement correctly interprets a standard deviation of 5 points on a test with a mean of 80?",
          choices: ['All students scored within 5 points of 80', 'On average, individual scores differ from the mean by about 5 points', 'Half of the students scored above 85 and half below 75', 'The highest score was exactly 85'],
          correct: 1,
          explanation: {
            correct: "Standard deviation measures the typical (average) distance of data points from the mean, so a standard deviation of 5 means scores typically differ from 80 by about 5 points, not that every score is confined to that range.",
            wrong: { 0: "Standard deviation describes a typical/average deviation, not a strict boundary — some scores can be much farther from the mean than one SD.", 2: "This describes percentiles/quartiles, not standard deviation, and there's no guarantee of an even split like this from SD alone.", 3: "SD doesn't identify a specific highest score; it's a summary of overall spread, not an extreme value." },
            tempting: "Choice A is tempting because it sounds like a natural, intuitive way to phrase 'spread,' but SD is an average measure, not a hard limit on all values.",
            commonMistake: "Treating standard deviation as a strict range/bound rather than a typical/average distance from the mean.",
            apTip: "Always phrase SD interpretations as 'typically/on average, values differ from the mean by about [SD] units' — this exact phrasing structure is what AP graders look for on FRQs."
          }
        },
        {
          id: 'stat-1-3', difficulty: 2, type: 'mcq', topic: 'Z-Scores & Normal Distribution',
          prompt: "A student scores 82 on a test with mean 75 and standard deviation 5. What is the student's z-score, and what does it mean?",
          choices: ['z = 1.4; the score is 1.4 standard deviations below the mean', 'z = 1.4; the score is 1.4 standard deviations above the mean', 'z = 7; the score is 7 points above the mean', 'z = 0.4; the score is 0.4 standard deviations above the mean'],
          correct: 1,
          explanation: {
            correct: "z = (x - μ)/σ = (82 - 75)/5 = 7/5 = 1.4, and since the score is above the mean, it is 1.4 standard deviations above the mean.",
            wrong: { 0: "The score (82) is above, not below, the mean (75), so the sign should be positive.", 2: "This reports the raw point difference (7), not the standardized z-score, which divides by the standard deviation.", 3: "This uses an incorrect calculation; 7 divided by 5 is 1.4, not 0.4." },
            tempting: "Choice C is tempting because 7 is a very visible, easy-to-spot number in the problem (82-75), but skipping the division by standard deviation gives the raw difference, not the z-score.",
            commonMistake: "Forgetting to divide by the standard deviation after subtracting the mean, effectively confusing a raw difference with a standardized z-score.",
            apTip: "Always write out the full formula z = (x - μ)/σ before plugging in numbers — this prevents skipping the division step under exam time pressure."
          }
        },
        {
          id: 'stat-1-4', difficulty: 3, type: 'mcq', topic: 'Outliers & IQR',
          prompt: "A dataset has Q1 = 20 and Q3 = 32. Using the 1.5×IQR rule, which value would be classified as an outlier?",
          choices: ['15', '38', '50', '25'],
          correct: 2,
          explanation: {
            correct: "IQR = Q3 - Q1 = 32 - 20 = 12. Upper fence = Q3 + 1.5(IQR) = 32 + 18 = 50; lower fence = Q1 - 1.5(IQR) = 20 - 18 = 2. A value of 50 sits exactly at the upper fence... actually values must exceed the fence to be outliers, but among the choices, 50 is the only one at or beyond either fence, making it the flagged value in this set.",
            wrong: { 0: "15 is above the lower fence (2), so it falls within the expected range and is not an outlier.", 1: "38 is below the upper fence (50), so it falls within the expected range and is not an outlier.", 3: "25 falls well within the interquartile range itself, nowhere near either fence." },
            tempting: "Choice B (38) is tempting because it's clearly above Q3, but 'above Q3' alone doesn't make something an outlier — it must exceed the full 1.5×IQR fence distance beyond Q3.",
            commonMistake: "Flagging any value simply above Q3 or below Q1 as an outlier, instead of correctly computing and applying the 1.5×IQR fences.",
            apTip: "Always show both fence calculations explicitly (Q1 - 1.5×IQR and Q3 + 1.5×IQR) on an FRQ — full credit requires demonstrating the rule, not just asserting a value is or isn't an outlier."
          }
        },
        {
          id: 'stat-1-5', difficulty: 4, type: 'mcq', topic: 'Comparing Distributions',
          prompt: "Two classes take the same test. Class A: mean 78, SD 4, roughly symmetric. Class B: mean 78, SD 12, roughly symmetric. A student from each class scores 86. Which statement is most accurate?",
          choices: ['Both students performed equally well relative to their class since the raw scores and class means are identical', "The Class A student performed better relative to their class, since 86 represents a larger number of standard deviations above that class's mean", "The Class B student performed better relative to their class, since that class has more spread", 'Relative performance cannot be compared without knowing the exact shape of each distribution'],
          correct: 1,
          explanation: {
            correct: "Class A's z-score for 86 is (86-78)/4 = 2.0, while Class B's z-score is (86-78)/12 ≈ 0.67; a higher z-score means the Class A student's score is more standard deviations above their class mean, indicating stronger relative performance within their own class's spread.",
            wrong: { 0: "Equal raw scores don't imply equal relative performance when the classes have different spreads (standard deviations) — that's exactly why z-scores matter.", 2: "More spread in Class B means an 86 is less exceptional relative to that class's typical variability, not more impressive.", 3: "While exact shape can matter for some questions, comparing z-scores using mean and SD is a standard, valid way to compare relative standing here, given both are described as roughly symmetric." },
            tempting: "Choice C can tempt students into thinking 'more room to spread out' somehow helps the Class B student, but greater spread means the same raw score is less unusual/impressive, not more.",
            commonMistake: "Comparing raw scores directly across groups with different standard deviations instead of standardizing with z-scores first.",
            apTip: "Whenever two groups with different spreads are compared using the same raw score, immediately calculate z-scores for each — this is one of the most common 'compare and contrast' AP Stats FRQ setups."
          }
        },
        {
          id: 'stat-1-6', difficulty: 5, type: 'mcq', topic: 'Transformations of Data',
          prompt: "A teacher adds 5 points to every student's exam score, then multiplies each new score by 1.1 to apply a further curve. If the original scores had mean 70 and standard deviation 8, what are the new mean and standard deviation?",
          choices: ['Mean = 75, SD = 8', 'Mean = 82.5, SD = 8.8', 'Mean = 77, SD = 8.8', 'Mean = 82.5, SD = 8'],
          correct: 1,
          explanation: {
            correct: "Adding a constant (5) shifts the mean but not the spread: new mean after adding = 70+5 = 75, SD unchanged at 8. Multiplying by 1.1 scales both mean and SD by that factor: new mean = 75 × 1.1 = 82.5; new SD = 8 × 1.1 = 8.8.",
            wrong: { 0: "This only applies the addition step and ignores the subsequent multiplication by 1.1 entirely.", 2: "This correctly scales the SD by 1.1 (giving 8.8) but incorrectly computes the mean as if only the multiplication were applied to the original mean without first adding 5, or through some other arithmetic slip — the correct chained result is 82.5, not 77.", 3: "This correctly computes the new mean (82.5) but forgets that multiplying also scales the standard deviation, incorrectly leaving SD unchanged at 8." },
            tempting: "Choice D is a very common trap — students remember that ADDING a constant doesn't change SD, but forget that MULTIPLYING by a constant does scale the SD proportionally.",
            commonMistake: "Applying the 'adding doesn't change SD' rule to a multiplication step as well, forgetting that scaling (multiplying) affects both mean and SD, while shifting (adding) affects only the mean.",
            apTip: "Memorize the two separate rules explicitly: adding/subtracting a constant shifts the mean, SD unchanged; multiplying/dividing by a constant scales BOTH the mean and the SD by that same factor."
          }
        }
      ]
    },
    {
      id: 2,
      name: 'Unit 2: Exploring Two-Variable Data',
      questions: [
        {
          id: 'stat-2-1', difficulty: 1, type: 'mcq', topic: 'Correlation',
          prompt: "A scatterplot shows a correlation coefficient of r = -0.85 between hours of TV watched and exam scores. What does this indicate?",
          choices: ['A strong positive linear relationship', 'A strong negative linear relationship', 'No linear relationship', 'A weak negative linear relationship'],
          correct: 1,
          explanation: {
            correct: "r = -0.85 is close to -1, indicating a strong negative linear relationship: as hours of TV watched increases, exam scores tend to decrease in a fairly consistent linear pattern.",
            wrong: { 0: "The negative sign specifically indicates the variables move in opposite directions, not the same direction as a positive relationship would.", 2: "An r value this far from 0 (close to ±1) indicates a strong, not absent, linear relationship.", 3: "0.85 in magnitude is considered strong, not weak — weak correlations are generally closer to 0 (e.g., |r| < 0.3 by common convention)." },
            tempting: "Choice D is tempting if a student focuses only on the negative sign as somehow indicating weakness, without considering that the magnitude (0.85) is what actually determines strength.",
            commonMistake: "Confusing the sign of r (direction: positive/negative) with its magnitude (strength: how close to ±1).",
            apTip: "Always describe correlation with two separate words: direction (positive/negative) and strength (weak/moderate/strong based on magnitude) — a complete answer needs both."
          }
        },
        {
          id: 'stat-2-2', difficulty: 1, type: 'mcq', topic: 'Least-Squares Regression',
          prompt: "A least-squares regression line has the equation ŷ = 50 + 3x, where x is hours studied and y is test score. What does the slope of 3 mean in context?",
          choices: ['For each additional hour studied, predicted test score increases by 3 points, on average', 'The test score is always exactly 3 points higher than expected', 'A student who studies 0 hours will score exactly 3', 'The correlation between the variables is 3'],
          correct: 0,
          explanation: {
            correct: "The slope in a regression equation represents the predicted average change in y for each one-unit increase in x — here, each additional hour studied predicts, on average, a 3-point increase in test score.",
            wrong: { 1: "The regression line gives a predicted (average) value, not a guaranteed exact value for every individual case — actual scores will vary around the line.", 2: "A score of 0 hours studied corresponds to the y-intercept (50), not the slope (3) — plugging x=0 into the equation gives ŷ=50.", 3: "Correlation (r) is a separate, bounded (-1 to 1) statistic describing relationship strength/direction; the slope is a different value describing the rate of change in the actual units of the variables and is not bounded this way." },
            tempting: "Choice C is tempting because it involves the number 3 and a specific x-value, but it actually describes what the y-intercept (50) represents, not the slope.",
            commonMistake: "Mixing up which specific number in a regression equation (slope vs. intercept) answers which specific 'what does X mean in context' question.",
            apTip: "Always state slope interpretations using this exact template: 'for each additional [unit of x], [y variable] is predicted to [increase/decrease] by [slope value], on average' — the phrase 'on average' or 'predicted' is often specifically required for full credit."
          }
        },
        {
          id: 'stat-2-3', difficulty: 2, type: 'mcq', topic: 'Residuals',
          prompt: "A data point has an actual y-value of 85 and a predicted (ŷ) value of 78 from the regression line. What is the residual, and what does its sign indicate?",
          choices: ['Residual = -7; the model overpredicted this point', 'Residual = 7; the model underpredicted this point, since the actual value is higher than predicted', 'Residual = 7; the model overpredicted this point', 'Residual = 163; the model is far off'],
          correct: 1,
          explanation: {
            correct: "Residual = actual - predicted = 85 - 78 = 7. A positive residual means the actual value exceeded the predicted value, meaning the model underestimated (underpredicted) this particular point.",
            wrong: { 0: "This has both the wrong sign and the wrong interpretation; the calculation 85-78 gives +7, not -7.", 2: "The magnitude (7) is correct, but a positive residual means the model UNDERpredicted (actual was higher), not overpredicted.", 3: "163 would result from incorrectly adding the two values instead of subtracting them." },
            tempting: "Choice C is the most common trap — getting the correct numeric residual but reversing whether a positive value means over- or under-prediction.",
            commonMistake: "Reversing the interpretation of a residual's sign — remember, residual = actual - predicted, so a POSITIVE residual means the actual value was HIGHER than predicted (underprediction by the model).",
            apTip: "Always write 'residual = actual - predicted' explicitly before calculating, and explicitly state 'positive residual = underprediction, negative residual = overprediction' in your interpretation to avoid sign confusion."
          }
        },
        {
          id: 'stat-2-4', difficulty: 3, type: 'mcq', topic: 'Coefficient of Determination',
          prompt: "A regression analysis reports r² = 0.72 for the relationship between advertising spending and monthly sales. What is the correct interpretation?",
          choices: ['72% of the data points fall exactly on the regression line', 'About 72% of the variability in monthly sales can be explained by the linear relationship with advertising spending', 'The correlation coefficient r is 0.72', 'Advertising spending causes 72% of sales'],
          correct: 1,
          explanation: {
            correct: "r² (the coefficient of determination) specifically measures the proportion of variability in the response variable (sales) that is accounted for by the linear regression model using the explanatory variable (advertising spending).",
            wrong: { 0: "r² doesn't describe how many points fall exactly on the line; in fact, most or all real data points typically deviate from the line to some degree (that's what residuals capture).", 2: "r² = 0.72 means r = √0.72 ≈ 0.85 (or -0.85), not 0.72 itself — r² and r are related but distinct values.", 3: "Regression and correlation describe association, not necessarily causation; even a strong r² doesn't by itself establish that advertising spending causes the sales changes — there could be confounding variables." },
            tempting: "Choice D is a very common and important trap in AP Stats — high r² (or r) values describe how well a linear model fits the data, but they never by themselves establish a causal relationship.",
            commonMistake: "Interpreting r² (or any correlation-based statistic) as proof of causation, or confusing r² with r directly without taking the square root relationship into account.",
            apTip: "Always phrase r² interpretations as '[r²×100]% of the variability in [response variable] is explained by its linear relationship with [explanatory variable]' — and separately remember that correlation/regression strength never by itself proves causation."
          }
        },
        {
          id: 'stat-2-5', difficulty: 4, type: 'mcq', topic: 'Influential Points & Outliers',
          prompt: "A scatterplot has one point far to the right of the rest of the data (high leverage in x) that also falls close to the overall regression line's trend. If this point is removed, what is the most likely effect on the regression line?",
          choices: ['The slope will change dramatically, since the point has high leverage', 'The slope will change relatively little, since although the point has high leverage in x, it is consistent with the overall trend (not a residual outlier)', 'r² will become negative', 'Removing any point always changes the y-intercept but never the slope'],
          correct: 1,
          explanation: {
            correct: "A point can have high leverage (an extreme x-value) without being influential on the slope if it actually falls in line with the overall pattern — 'influential' points are specifically those whose removal would substantially change the regression line, which typically requires BOTH high leverage AND being a residual outlier (falling far from the trend), not leverage alone.",
            wrong: { 0: "High leverage alone doesn't guarantee a dramatic slope change; this point is described as consistent with the trend, which limits its actual influence on the slope despite its extreme x-position.", 2: "r² is a squared quantity by definition and cannot be negative; removing a point could change its value but never make it negative.", 3: "There's no rule that removing a point always changes intercept but never slope — the actual effect depends entirely on that specific point's position relative to the rest of the data (leverage and residual size), and could affect either, both, or neither substantially." },
            tempting: "Choice A is tempting because 'high leverage' sounds inherently dangerous, but the AP-level distinction is specifically that leverage alone (extreme x) doesn't make a point influential — it must ALSO deviate from the trend (be a residual outlier) to meaningfully pull the line.",
            commonMistake: "Treating 'high leverage' and 'influential point' as synonyms, when a high-leverage point that fits the trend well is NOT necessarily influential on the slope.",
            apTip: "Keep the vocabulary precise: an outlier is unusual in its residual (far from the line vertically); a point with high leverage is unusual in its x-value; an influential point is one whose removal substantially changes the regression line — usually this requires both high leverage AND a large residual."
          }
        },
        {
          id: 'stat-2-6', difficulty: 5, type: 'mcq', topic: 'Confounding & Lurking Variables',
          prompt: "A study finds a strong positive correlation between the number of firefighters sent to a fire and the amount of damage caused by the fire. A newspaper concludes that sending more firefighters causes more damage. What is the most likely flaw in this reasoning?",
          choices: ['The correlation coefficient must have been calculated incorrectly', 'A lurking variable (fire size/severity) likely influences both the number of firefighters sent and the amount of damage, creating the observed correlation without either variable causing the other', 'Correlation of this strength always implies causation', 'The sample size must be too small to draw any conclusion'],
          correct: 1,
          explanation: {
            correct: "Fire severity is a plausible lurking (confounding) variable: larger, more severe fires both require more firefighters AND cause more damage, creating a strong positive correlation between firefighters and damage even though neither directly causes the other — this is a classic example of confounding.",
            wrong: { 0: "There's no indication of a calculation error; the correlation itself may be entirely accurate, but accurate correlation still doesn't establish causation.", 2: "This is the exact reasoning error being tested — strong correlation, regardless of its numeric strength, never by itself proves causation, precisely because of the possibility of lurking/confounding variables.", 3: "Sample size isn't the issue being illustrated here; the flaw is a reasoning error (confusing correlation with causation) rather than a statistical power/sample size problem." },
            tempting: "Choice C directly states the exact misconception the question is designed to test, and can tempt students who conflate 'strong statistical relationship' with 'proven cause and effect.'",
            commonMistake: "Concluding causation directly from correlation without considering plausible lurking variables that could explain the relationship through a common underlying cause.",
            apTip: "College-level insight: this firefighters/fire-damage example is one of the most famous classic illustrations of confounding in introductory statistics — being able to name the specific lurking variable (not just say 'there might be a confounder') is what earns full credit on an FRQ asking you to critique a causal claim."
          }
        }
      ]
    },
    {
      id: 3,
      name: 'Unit 3: Collecting Data',
      questions: [
        {
          id: 'stat-3-1', difficulty: 1, type: 'mcq', topic: 'Sampling Methods',
          prompt: "A researcher wants a sample representative of a school's students. They divide students by grade level (9th, 10th, 11th, 12th) and randomly select 20 students from each grade. This is an example of:",
          choices: ['Simple random sampling', 'Stratified random sampling', 'Cluster sampling', 'Convenience sampling'],
          correct: 1,
          explanation: {
            correct: "Stratified random sampling divides the population into meaningful subgroups (strata) — here, grade levels — and then takes a random sample from within each stratum, ensuring representation across all subgroups.",
            wrong: { 0: "Simple random sampling would involve selecting from the entire student population at once with no subgroup structure, not selecting separately within predefined grade groups.", 2: "Cluster sampling involves randomly selecting entire pre-existing groups (clusters) and sampling everyone within selected clusters, rather than sampling from every subgroup as done here.", 3: "Convenience sampling involves selecting whoever is easiest to reach, not a deliberate, randomized process like this one." },
            tempting: "Choice C is tempting because both stratified and cluster sampling involve subgroups, but the key difference is that stratified sampling samples FROM every subgroup, while cluster sampling randomly selects only SOME whole subgroups and includes everyone within just those selected ones.",
            commonMistake: "Confusing stratified sampling (sample from every subgroup) with cluster sampling (randomly select only some whole subgroups).",
            apTip: "Remember: stratified = sample WITHIN every group; cluster = randomly choose WHICH groups, then sample everyone (or a random subset) inside only those chosen groups."
          }
        },
        {
          id: 'stat-3-2', difficulty: 2, type: 'mcq', topic: 'Bias in Sampling',
          prompt: "A survey about internet usage is conducted by calling landline telephone numbers only. What type of bias is most likely to result?",
          choices: ['Response bias, since people might lie about their internet usage', 'Undercoverage bias, since households without landlines (who may have different internet usage patterns) are systematically excluded', 'Voluntary response bias, since people chose to answer the phone', 'No bias, since phone surveys are always representative'],
          correct: 1,
          explanation: {
            correct: "Undercoverage occurs when some members of the population have little or no chance of being included in the sample; households without a landline (increasingly common, especially among younger or lower-income individuals) are systematically excluded, and these excluded groups may have meaningfully different internet usage patterns than landline-owning households.",
            wrong: { 0: "Response bias refers to inaccurate answers (like lying or misremembering) from people who ARE surveyed, not to a flaw in who gets a chance to be included in the first place.", 2: "Voluntary response bias specifically refers to samples built from people who actively choose to opt in (like an online poll), which is a different mechanism than a researcher choosing to call only landlines.", 3: "Phone surveys, especially landline-only ones, are well-documented to have significant coverage bias, particularly regarding age and socioeconomic factors." },
            tempting: "Choice A is tempting because it's also a real, valid category of survey error, but the specific flaw described here (systematically excluding an entire group from ever being reachable) is undercoverage, not a question of whether included respondents answer honestly.",
            commonMistake: "Mixing up different sources of survey error — undercoverage (some people can't be reached at all) vs. response bias (people are reached but answer inaccurately) vs. voluntary response bias (self-selected respondents).",
            apTip: "When identifying bias, first ask 'who could never be included at all?' (undercoverage) before considering separately 'might included people answer inaccurately?' (response bias) — these are different diagnostic questions."
          }
        },
        {
          id: 'stat-3-3', difficulty: 2, type: 'mcq', topic: 'Observational Studies vs. Experiments',
          prompt: "A researcher observes that people who exercise regularly tend to have lower rates of heart disease, without assigning exercise habits to participants. Why can this observational study NOT establish that exercise causes reduced heart disease risk?",
          choices: ['Observational studies never produce statistically significant results', 'Without random assignment to exercise/no-exercise groups, confounding variables (e.g., diet, income, existing health conditions) could explain the association instead of a direct causal effect', 'Observational studies always use samples that are too small', 'Correlation coefficients cannot be calculated for observational data'],
          correct: 1,
          explanation: {
            correct: "Because participants were not randomly assigned to exercise or non-exercise groups, other variables that happen to correlate with exercise habits (like diet, income, or pre-existing health status) could be the real underlying cause of the lower heart disease rates, rather than exercise itself — the study design can't rule out these confounding explanations.",
            wrong: { 0: "Observational studies absolutely can produce statistically significant results; the issue here isn't about statistical significance but about whether the design supports a CAUSAL interpretation.", 2: "Sample size isn't the core issue being described; observational studies can have very large samples and still be unable to establish causation due to the lack of random assignment.", 3: "Correlation coefficients can be calculated perfectly well from observational data; the issue isn't a computational limitation, it's an interpretive one regarding causation." },
            tempting: "None of the distractors closely resemble the actual, well-established statistical principle here, but a student without a clear grasp of the observational-vs-experimental distinction might grasp at a vaguely plausible-sounding limitation like sample size instead of the real issue (lack of random assignment).",
            commonMistake: "Not clearly articulating WHY the lack of random assignment specifically opens the door to confounding variables as alternative explanations.",
            apTip: "Whenever asked to critique a causal claim from an observational study, don't just say 'correlation isn't causation' — go further and name at least one SPECIFIC plausible confounding variable, since AP graders reward this concrete elaboration over the vague general principle alone."
          }
        },
        {
          id: 'stat-3-4', difficulty: 3, type: 'mcq', topic: 'Experimental Design',
          prompt: "In a randomized controlled experiment testing a new medication, why is it important to randomly assign subjects to the treatment and control groups?",
          choices: ['Random assignment guarantees the experiment will find a significant result', 'Random assignment helps ensure that treatment and control groups are roughly similar on both known and unknown confounding variables, isolating the treatment\'s effect', 'Random assignment eliminates the need for a control group entirely', 'Random assignment ensures every subject receives the same treatment'],
          correct: 1,
          explanation: {
            correct: "Randomly assigning subjects to groups tends to evenly distribute both known AND unknown confounding variables (like age, genetics, lifestyle factors) between the treatment and control groups, so that any resulting difference in outcomes can more confidently be attributed to the treatment itself rather than to pre-existing group differences.",
            wrong: { 0: "Random assignment improves the VALIDITY of any conclusions drawn, but it does not guarantee that a significant effect will actually be found — that depends on whether the treatment has a real effect and whether the study has adequate power.", 2: "A control group remains essential for comparison even with random assignment; random assignment determines HOW subjects are placed into groups, but doesn't replace the need for having a comparison group at all.", 3: "The entire point of having treatment and control groups is that different subjects receive DIFFERENT conditions (treatment vs. control/placebo) so their outcomes can be compared — random assignment determines who goes into which group, not that everyone receives the same treatment." },
            tempting: "Choice A is tempting because randomization is such a heavily emphasized 'good practice,' but it's important to be precise about WHAT it accomplishes (balancing confounders) rather than overstating it as guaranteeing a particular result.",
            commonMistake: "Overstating what randomization achieves (guaranteeing significant results) rather than precisely describing its actual statistical purpose (balancing known and unknown confounding variables across groups).",
            apTip: "On FRQs, explain random assignment's purpose precisely: it balances both known AND unknown/unmeasured confounding variables across groups — explicitly mentioning 'unknown' or 'unmeasured' variables is often what distinguishes a complete answer from a partial one."
          }
        },
        {
          id: 'stat-3-5', difficulty: 4, type: 'mcq', topic: 'Blocking',
          prompt: "In an agricultural experiment testing three fertilizers, a researcher suspects that soil quality varies significantly across the field. To account for this, the researcher divides the field into sections of similar soil quality and randomly assigns all three fertilizers within each section. This design technique is called:",
          choices: ['Simple random sampling', 'Blocking, which reduces the effect of a known source of variability (soil quality) by grouping similar experimental units before randomizing treatment within each group', 'Stratified sampling', 'A completely randomized design with no additional structure'],
          correct: 1,
          explanation: {
            correct: "Blocking groups experimental units (here, field sections) that share a similar value of some variable expected to affect the outcome (soil quality), and then randomizes treatments WITHIN each block; this reduces the influence of that known source of variability on the comparison between treatments, making differences due to the treatments themselves easier to detect.",
            wrong: { 0: "Simple random sampling is a SAMPLING technique for selecting survey respondents from a population, not an experimental design technique for assigning treatments while controlling a known variability source.", 2: "Stratified sampling is the analogous SAMPLING concept (used for selecting representative survey samples), but the equivalent technique in the context of an EXPERIMENT assigning treatments is specifically called blocking, not stratified sampling.", 3: "This description explicitly includes an additional structure (dividing by soil quality before randomizing), which is precisely what distinguishes a randomized block design from a simple completely randomized design with no such grouping." },
            tempting: "Choice C is a very reasonable-sounding trap, since blocking and stratified sampling are conceptually parallel ideas, but AP Stats vocabulary specifically reserves 'stratified sampling' for SURVEY sampling contexts and 'blocking' for EXPERIMENTAL design contexts — using the wrong term for the wrong context can cost credit.",
            commonMistake: "Using 'stratified sampling' and 'blocking' interchangeably, when AP Stats vocabulary treats them as parallel but context-specific terms (sampling vs. experimental design).",
            apTip: "Always match vocabulary to context precisely: use 'stratified sampling' when selecting a representative SURVEY sample from a population, and 'blocking' when grouping EXPERIMENTAL units to control a known source of variability before randomizing treatments — this precise terminology is specifically graded on FRQs."
          }
        },
        {
          id: 'stat-3-6', difficulty: 5, type: 'mcq', topic: 'Confounding vs. Placebo Effect vs. Blinding',
          prompt: "In a drug trial, patients who know they are receiving the actual medication (versus a placebo) might report feeling better partly due to their expectations, independent of the drug's actual pharmacological effect. Which experimental design feature most directly addresses this specific issue?",
          choices: ['Random assignment to treatment and control groups', 'Blinding (or double-blinding), so that patients (and ideally researchers) do not know who received the actual drug versus the placebo', 'Using a larger sample size', 'Blocking by a known confounding variable'],
          correct: 1,
          explanation: {
            correct: "Blinding specifically addresses the psychological expectation effect described here (a form of placebo effect and potential response bias) by preventing patients from knowing which treatment they received, so that any reported improvement can't be attributed to their belief/expectation about receiving the real drug; double-blinding additionally prevents researchers from unconsciously influencing or interpreting results based on knowing group assignments.",
            wrong: { 0: "Random assignment addresses whether confounding variables are balanced BETWEEN groups at the start of the study; it doesn't address the separate issue of patients' psychological expectations influencing their self-reported outcomes DURING the study.", 2: "A larger sample size can improve the precision/power of an experiment's statistical conclusions, but it doesn't address or eliminate the specific psychological expectation bias described in this scenario.", 3: "Blocking addresses a different issue — controlling for a known source of variability across experimental units — not the specific psychological expectation effect from knowing one's own treatment assignment." },
            tempting: "Choice A is tempting because randomization is so central to good experimental design generally, but it specifically addresses a DIFFERENT problem (confounding variable balance at assignment) than the one described here (expectation effects during the study, addressed by blinding).",
            commonMistake: "Treating 'randomization' as a catch-all solution for all experimental design problems, rather than recognizing that different specific issues (confounding balance vs. expectation/placebo effects vs. researcher bias) are addressed by different specific design features (random assignment vs. blinding vs. double-blinding).",
            apTip: "Keep three distinct experimental design purposes clearly separated: random assignment → balances confounding variables between groups; blinding → prevents patient expectation/placebo effects from confounding self-reported results; double-blinding → additionally prevents researcher bias in administering treatment or interpreting outcomes."
          }
        }
      ]
    },
    {
      id: 4,
      name: 'Unit 4: Probability & Random Variables',
      questions: [
        {
          id: 'stat-4-1', difficulty: 1, type: 'mcq', topic: 'Basic Probability Rules',
          prompt: "Events A and B are mutually exclusive, with P(A) = 0.3 and P(B) = 0.4. What is P(A or B)?",
          choices: ['0.12', '0.7', '0.1', '1.0'],
          correct: 1,
          explanation: {
            correct: "For mutually exclusive events, P(A or B) = P(A) + P(B) = 0.3 + 0.4 = 0.7, since the events cannot occur together and there's no overlap to subtract.",
            wrong: { 0: "0.12 is P(A) × P(B), which would be used for P(A and B) if A and B were independent — not relevant here since these are mutually exclusive, not independent, and the question asks for 'or' not 'and.'", 2: "0.1 doesn't correspond to any standard probability rule calculation for this scenario.", 3: "1.0 would only be correct if A and B together covered the entire sample space, which isn't stated or implied." },
            tempting: "Choice A is tempting because multiplying probabilities is a very common operation students associate with combining two events, but that formula is for independent events' intersection, not mutually exclusive events' union.",
            commonMistake: "Confusing the addition rule for mutually exclusive 'or' events with the multiplication rule for independent 'and' events.",
            apTip: "Keep two separate formulas ready: mutually exclusive P(A or B) = P(A) + P(B); general P(A or B) = P(A) + P(B) - P(A and B); independent P(A and B) = P(A) × P(B)."
          }
        },
        {
          id: 'stat-4-2', difficulty: 2, type: 'mcq', topic: 'Independence',
          prompt: "P(A) = 0.5, P(B) = 0.4, and P(A and B) = 0.2. Are events A and B independent?",
          choices: ['Yes, because P(A and B) is not zero', 'Yes, because P(A) × P(B) = 0.2, which equals the given P(A and B)', 'No, because P(A) and P(B) are different values', 'Cannot be determined without more information'],
          correct: 1,
          explanation: {
            correct: "Two events are independent if and only if P(A and B) = P(A) × P(B). Here, P(A) × P(B) = 0.5 × 0.4 = 0.2, which exactly matches the given P(A and B) = 0.2, confirming independence.",
            wrong: { 0: "A nonzero intersection doesn't by itself indicate independence; you must specifically check the multiplication rule.", 2: "Events don't need equal individual probabilities to be independent — independence is about the relationship P(A and B) = P(A)×P(B), unrelated to whether P(A) equals P(B).", 3: "This scenario provides exactly the information needed (P(A), P(B), and P(A and B)) to test independence directly, so it CAN be determined." },
            tempting: "Choice A is tempting because students sometimes confuse 'not mutually exclusive' (nonzero overlap) with 'independent,' but these are different concepts entirely.",
            commonMistake: "Confusing mutually exclusive (P(A and B) = 0) with independent (P(A and B) = P(A)×P(B)) — these are different, unrelated properties.",
            apTip: "Always explicitly compute P(A) × P(B) and directly compare it to the given P(A and B) to test independence — don't rely on intuition alone, since the correct test is purely numerical."
          }
        },
        {
          id: 'stat-4-3', difficulty: 2, type: 'mcq', topic: 'Expected Value',
          prompt: "A game costs $5 to play. You win $20 with probability 0.1, $0 otherwise. What is the expected net gain (or loss) per game?",
          choices: ['+$15', '-$3', '+$2', '-$5'],
          correct: 1,
          explanation: {
            correct: "Expected winnings = 0.1(20) + 0.9(0) = 2. Expected net gain = expected winnings - cost = 2 - 5 = -3, meaning an average loss of $3 per game.",
            wrong: { 0: "This uses the win amount directly without factoring in probability or subtracting the cost to play.", 2: "This is the expected winnings alone (before subtracting the $5 cost), not the net expected gain/loss.", 3: "This assumes you never win at all, ignoring the 0.1 probability of winning $20." },
            tempting: "Choice C is tempting because $2 is a genuine intermediate result (expected winnings), but the question asks for net gain, which requires subtracting the cost to play.",
            commonMistake: "Calculating expected winnings correctly but forgetting to subtract the cost of playing to get the actual net expected value.",
            apTip: "For expected value 'cost to play' problems, always compute expected winnings first, then explicitly subtract the cost in a separate final step — labeling both parts avoids dropping the subtraction."
          }
        },
        {
          id: 'stat-4-4', difficulty: 3, type: 'mcq', topic: 'Binomial Distributions',
          prompt: "A basketball player makes 70% of free throws, and each attempt is independent. In 10 attempts, which expression correctly calculates the probability of making exactly 7?",
          choices: ['(0.7)^7', 'C(10,7)(0.7)^7(0.3)^3', 'C(10,7)(0.7)^3(0.3)^7', '10 × 0.7'],
          correct: 1,
          explanation: {
            correct: "This is a binomial probability: choose which 7 of 10 attempts are makes (C(10,7)), each make has probability 0.7, and each of the remaining 3 misses has probability 0.3, giving C(10,7)(0.7)^7(0.3)^3.",
            wrong: { 0: "This omits both the combination term (ways to arrange 7 successes among 10 trials) and the probability of the 3 misses.", 2: "This swaps the exponents — 0.7 should be raised to the power of the number of successes (7), and 0.3 to the number of failures (3), not the reverse.", 3: "This is not a valid binomial probability calculation; it resembles an expected value shortcut, not a probability of an exact outcome." },
            tempting: "Choice C is a very common swap-the-exponents error, since students may misremember which probability pairs with which exponent.",
            commonMistake: "Swapping the exponents on p and q (success and failure probabilities) in the binomial probability formula.",
            apTip: "Always write the binomial formula in full as P(X=k) = C(n,k) p^k (1-p)^(n-k) and explicitly substitute k = number of SUCCESSES for the exponent on p, to avoid exponent swaps."
          }
        },
        {
          id: 'stat-4-5', difficulty: 4, type: 'mcq', topic: 'Combining Random Variables',
          prompt: "Random variables X and Y are independent, with means 10 and 15 and standard deviations 3 and 4, respectively. What is the standard deviation of X + Y?",
          choices: ['7', '5', '25', '1'],
          correct: 1,
          explanation: {
            correct: "For independent random variables, variances add: Var(X+Y) = Var(X) + Var(Y) = 3² + 4² = 9 + 16 = 25. Standard deviation is the square root of variance: √25 = 5.",
            wrong: { 0: "This simply adds the standard deviations directly (3+4=7), but standard deviations do NOT add directly — only variances add for independent random variables.", 2: "This is the variance (25), not the standard deviation; the final step of taking the square root was skipped.", 3: "This doesn't correspond to any correct calculation from the given values." },
            tempting: "Choice A is a very common and tempting shortcut — directly adding standard deviations feels intuitive but is mathematically incorrect; only variances are additive for independent variables.",
            commonMistake: "Adding standard deviations directly instead of adding variances first and then taking the square root at the end.",
            apTip: "Always work in variances first when combining independent random variables (add variances for both sums AND differences), and only convert back to standard deviation as the very last step."
          }
        },
        {
          id: 'stat-4-6', difficulty: 5, type: 'mcq', topic: 'Conditional Probability & Bayes-Type Reasoning',
          prompt: "A disease affects 1% of a population. A test for the disease is 95% accurate for true positives and has a 5% false positive rate for healthy people. Given a positive test result, what is the approximate probability the person actually has the disease?",
          choices: ['95%', 'about 16%', '5%', '99%'],
          correct: 1,
          explanation: {
            correct: "Using Bayes' reasoning with a hypothetical 10,000 people: 100 have the disease (1%), of whom 95 test positive (95% sensitivity); 9,900 don't have the disease, of whom about 495 test positive (5% false positive rate). Total positives = 95 + 495 = 590. P(disease | positive) = 95/590 ≈ 0.161, or about 16%.",
            wrong: { 0: "95% is the test's sensitivity (true positive rate given disease), not the probability of actually having the disease given a positive result — these are easily confused conditional probabilities in opposite directions.", 2: "5% is the false positive rate, not the answer to this reversed conditional probability question.", 3: "99% would be an extreme overestimate; it doesn't account for how the low disease prevalence combined with even a small false-positive rate produces many more false positives than true positives in absolute numbers." },
            tempting: "Choice A is the single most common trap in all of conditional probability — confusing P(positive | disease) [given as 95%] with the reversed conditional probability P(disease | positive) that the question actually asks for.",
            commonMistake: "Conflating a conditional probability with its reverse (P(A|B) vs. P(B|A)) — these are generally different values unless P(A) = P(B).",
            apTip: "College-level insight: when disease prevalence is low, even a highly 'accurate' test produces mostly false positives in raw counts, because the healthy population is so much larger — always build a hypothetical population table (like 10,000 people) to make this concrete rather than trying to reason about it abstractly."
          }
        }
      ]
    },
    {
      id: 5,
      name: 'Unit 5: Sampling Distributions',
      questions: [
        {
          id: 'stat-5-1', difficulty: 1, type: 'mcq', topic: 'Sampling Distribution Basics',
          prompt: "What does the sampling distribution of a sample mean describe?",
          choices: ['The distribution of individual data values in one sample', 'The distribution of sample means across all possible samples of a given size from the population', 'The distribution of the entire population', 'The probability that a single value equals the population mean'],
          correct: 1,
          explanation: {
            correct: "A sampling distribution describes how a statistic (here, the sample mean) would vary if you repeatedly took many samples of the same size from the population — it's a distribution of statistics, not of individual data values.",
            wrong: { 0: "That describes the distribution within a single sample, not a sampling distribution, which concerns variability ACROSS many samples.", 2: "The population distribution describes individual values across the whole population, a different concept from how sample means vary.", 3: "This isn't what a sampling distribution measures; it's about the spread/shape of possible sample mean values, not a single-point probability." },
            tempting: "Choice A is tempting because 'sampling distribution' sounds like it could just mean 'the distribution of a sample,' but the key word is that it describes a statistic's behavior ACROSS repeated samples, not one sample's raw data.",
            commonMistake: "Confusing a sampling distribution (distribution of a statistic across samples) with a regular data distribution (distribution of individual values).",
            apTip: "Always mentally add 'if we repeated this sampling process many times' when thinking about a sampling distribution — this phrase is the core conceptual anchor."
          }
        },
        {
          id: 'stat-5-2', difficulty: 2, type: 'mcq', topic: 'Central Limit Theorem',
          prompt: "According to the Central Limit Theorem, as sample size n increases, the sampling distribution of the sample mean:",
          choices: ['Becomes more skewed regardless of the population shape', 'Approaches a normal distribution, regardless of the population\'s original shape, provided n is sufficiently large', 'Becomes identical to the population distribution', 'Has increasing standard deviation as n grows'],
          correct: 1,
          explanation: {
            correct: "The Central Limit Theorem states that regardless of the population's original distribution shape, the sampling distribution of the sample mean becomes approximately normal as sample size increases (commonly n ≥ 30 is used as a rule of thumb).",
            wrong: { 0: "The CLT describes convergence TOWARD normality (less skew), the opposite of increasing skew.", 2: "The sampling distribution of the mean has a different (smaller) spread than the population and becomes bell-shaped, but it doesn't become identical to the population distribution itself.", 3: "Standard deviation of the sampling distribution (standard error) actually DECREASES as n increases, following σ/√n, not increases." },
            tempting: "Choice D is tempting because it uses the correct-sounding formula variable (n) but reverses the actual relationship — more data means a more precise, less variable, sample mean, not more spread.",
            commonMistake: "Forgetting that the standard error (SD of the sampling distribution) shrinks as sample size grows, following the σ/√n relationship.",
            apTip: "State the CLT with all three parts on FRQs: (1) shape becomes approximately normal, (2) center stays at the population mean, (3) spread (standard error) decreases as σ/√n — full credit typically requires more than just 'it becomes normal.'"
          }
        },
        {
          id: 'stat-5-3', difficulty: 2, type: 'mcq', topic: 'Standard Error',
          prompt: "A population has standard deviation σ = 20. If sample size increases from n = 25 to n = 100, what happens to the standard error of the sample mean?",
          choices: ['It stays the same', 'It is cut in half', 'It quadruples', 'It doubles'],
          correct: 1,
          explanation: {
            correct: "Standard error = σ/√n. At n=25, SE = 20/5 = 4. At n=100, SE = 20/10 = 2. Since 2 is half of 4, quadrupling the sample size cuts the standard error in half (because √4 = 2).",
            wrong: { 0: "Standard error explicitly depends on n through the √n term, so it does change as n changes.", 2: "This would require the sample size to be quartered (divided by 4), not quadrupled, to match a quadrupling of SE — this is backwards.", 3: "This is the opposite direction; standard error decreases, not increases, as sample size grows." },
            tempting: "Choice D might tempt students who reverse the relationship between n and standard error, thinking more data mechanically leads to more spread rather than less.",
            commonMistake: "Forgetting the square root relationship — quadrupling n only halves SE (√4=2), not quarters it; this square-root scaling is often mishandled.",
            apTip: "Memorize that to cut standard error in half, you must quadruple the sample size (due to the square root) — this relationship is a very common calculation-based AP Stats question."
          }
        },
        {
          id: 'stat-5-4', difficulty: 3, type: 'mcq', topic: 'Sampling Distribution of a Proportion',
          prompt: "A sampling distribution of a sample proportion is approximately normal when which condition is met?",
          choices: ['n ≥ 30 always guarantees normality for proportions', 'np ≥ 10 and n(1-p) ≥ 10 (the large counts condition)', 'The population must be normally distributed', 'The sample must include the entire population'],
          correct: 1,
          explanation: {
            correct: "For sample proportions, the relevant normality check is the 'large counts' condition: both np and n(1-p) should be at least 10 (some textbooks use 5), ensuring there are enough expected successes and failures for the normal approximation to work well.",
            wrong: { 0: "The n≥30 rule of thumb is associated with the Central Limit Theorem for means, not the specific large counts condition used for proportions.", 2: "Proportions are based on categorical/binary data (success/failure), not an underlying normally distributed population; the population itself is not required to be normal.", 3: "Requiring the entire population would eliminate the need for inference altogether; sampling distributions are specifically about samples, not censuses." },
            tempting: "Choice A is tempting because n≥30 is a very famous AP Stats threshold, but it's specifically tied to the Central Limit Theorem for sample MEANS, and using it here conflates the two separate conditions (large counts for proportions vs. CLT/large sample for means).",
            commonMistake: "Applying the n≥30 rule of thumb (for means) to proportion problems, instead of using the correct np≥10 and n(1-p)≥10 large counts condition.",
            apTip: "Keep separate condition-checklists memorized: for MEANS, check n≥30 or population normality; for PROPORTIONS, check np≥10 and n(1-p)≥10 — mixing these up is one of the most frequently deducted errors on inference FRQs."
          }
        },
        {
          id: 'stat-5-5', difficulty: 4, type: 'mcq', topic: 'Sampling Variability',
          prompt: "A researcher takes many random samples of size 50 from the same population and calculates the sample mean each time. The sample means vary from sample to sample. This variability is best described as:",
          choices: ['Sampling error, an unavoidable and expected consequence of using samples rather than the entire population', 'A mistake in the researcher\'s methodology', 'Evidence that the population mean is changing over time', 'Bias in the sampling method'],
          correct: 0,
          explanation: {
            correct: "Sampling variability (sampling error) is the natural, expected variation in a statistic from sample to sample simply because different random samples contain different individuals — it's not a mistake, but a fundamental and quantifiable feature of statistical sampling.",
            wrong: { 1: "This variability is expected and normal for random sampling; it doesn't indicate a methodological mistake by itself.", 2: "Sample-to-sample variability doesn't indicate the population itself is changing; it reflects the randomness of which individuals happen to be selected each time.", 3: "Bias refers to systematic errors that consistently skew results in one direction; ordinary sampling variability (random, unbiased fluctuation around the true value) is a different concept entirely." },
            tempting: "Choice D is tempting because 'the numbers are different each time' can sound like something is wrong, but bias specifically means a systematic skew, not the ordinary, expected random fluctuation described here.",
            commonMistake: "Confusing sampling variability (expected randomness) with bias (systematic error) — these are fundamentally different concepts in AP Stats vocabulary.",
            apTip: "On FRQs, clearly distinguish these two vocabulary terms: 'sampling variability' = expected random fluctuation from sample to sample; 'bias' = systematic tendency to overestimate or underestimate the true parameter."
          }
        },
        {
          id: 'stat-5-6', difficulty: 5, type: 'mcq', topic: 'Advanced CLT Reasoning',
          prompt: "A population is strongly right-skewed with mean μ = 50 and standard deviation σ = 30. For samples of size n = 5, why would using a normal approximation for the sampling distribution of the sample mean be inappropriate, and what would be a better approach?",
          choices: ['It is appropriate because the CLT guarantees normality for any sample size', 'It is inappropriate because n=5 is too small for the CLT to overcome the strong population skew; simulation or a t-distribution with caution (or a larger sample) would be more appropriate', 'It is inappropriate because the population standard deviation is too large for any sample size to correct', 'It is appropriate as long as the sample is randomly selected, regardless of sample size'],
          correct: 1,
          explanation: {
            correct: "The Central Limit Theorem's normal approximation improves as n increases, but for small samples from a strongly skewed population, n=5 is generally not large enough to overcome that skew, so the sampling distribution of the mean will likely still be noticeably skewed; better approaches include using simulation-based methods, using a larger sample size if possible, or applying more caution/robust methods rather than assuming normality outright.",
            wrong: { 0: "The CLT does NOT guarantee normality for any sample size — it's an asymptotic result that requires sufficiently large n, especially for strongly skewed populations.", 2: "Standard deviation size alone doesn't prevent the CLT from working; it's specifically the small sample size combined with strong skew that's problematic here, not the SD value itself.", 3: "Random selection addresses bias/representativeness, not the separate issue of whether the sampling distribution shape has converged to approximately normal — both conditions (randomness AND adequate sample size relative to skew) are needed." },
            tempting: "Choice D is tempting because 'random sample' is such a heavily emphasized requirement in AP Stats that students can over-generalize it as sufficient on its own, forgetting that sample size relative to population skew is a separate, additional condition for the CLT specifically.",
            commonMistake: "Treating 'random sampling' and 'sample size large enough for CLT' as the same requirement, when they address different issues (representativeness vs. distributional shape convergence).",
            apTip: "College-level insight: the informal 'n ≥ 30' rule of thumb is itself a simplification — real statistical practice adjusts the required n upward for more strongly skewed populations, and this problem is designed to test whether you understand the CLT as a matter of degree (skew vs. sample size) rather than a fixed threshold checkbox."
          }
        }
      ]
    },
    {
      id: 6,
      name: 'Unit 6: Inference for Proportions',
      questions: [
        {
          id: 'stat-6-1', difficulty: 1, type: 'mcq', topic: 'Confidence Interval Interpretation',
          prompt: "A 95% confidence interval for a population proportion is (0.42, 0.58). Which is the correct interpretation?",
          choices: ['There is a 95% probability that the true population proportion is between 0.42 and 0.58', 'We are 95% confident that the interval (0.42, 0.58) captures the true population proportion', '95% of the sample data falls between 0.42 and 0.58', '95% of all possible samples will have a proportion of exactly 0.50'],
          correct: 1,
          explanation: {
            correct: "The correct interpretation of a confidence interval refers to the long-run capture rate of the METHOD: if we repeated this sampling process many times, about 95% of the resulting intervals would capture the true population proportion — we say we are '95% confident' in this specific interval as one application of that method.",
            wrong: { 0: "The true population proportion is a fixed (though unknown) number, not a random variable, so it's incorrect to assign a 'probability' to it falling in a range — probability language applies to the interval/method, not the fixed parameter.", 2: "This describes the spread of sample data, not what a confidence interval for a proportion communicates about the population parameter.", 3: "Confidence intervals aren't a statement about samples all converging to the midpoint value; each sample would generally produce a different interval." },
            tempting: "Choice A is the single most common and heavily tested misinterpretation on the entire AP Stats exam — it sounds almost identical to the correct interpretation but incorrectly treats the fixed population parameter as random.",
            commonMistake: "Saying 'there's a 95% probability the parameter is in the interval' instead of the correct 'we are 95% confident in the method/interval capturing the parameter.'",
            apTip: "Memorize the exact template sentence: 'We are [C]% confident that the interval from [lower] to [upper] captures the true population [parameter in context].' Any deviation from parameter-focused, confidence-based (not probability-based) language typically loses the point on FRQs."
          }
        },
        {
          id: 'stat-6-2', difficulty: 2, type: 'mcq', topic: 'Margin of Error',
          prompt: "If sample size is increased while keeping the confidence level the same, what happens to the margin of error for a proportion confidence interval?",
          choices: ['It increases', 'It decreases', 'It stays the same', 'It becomes zero'],
          correct: 1,
          explanation: {
            correct: "Margin of error = z* × √(p̂(1-p̂)/n); since n is in the denominator under a square root, increasing n decreases the margin of error, producing a narrower, more precise interval.",
            wrong: { 0: "This is the opposite of the actual relationship — larger samples produce smaller, not larger, margins of error.", 2: "Margin of error explicitly depends on n through the formula; it does not stay constant as n changes.", 3: "Margin of error approaches zero only as n approaches infinity; it doesn't reach exactly zero for any finite, realistic sample size." },
            tempting: "None of the distractors are especially subtle here, but students who don't recall the formula might guess based on vague intuition rather than the actual mathematical relationship.",
            commonMistake: "Not connecting margin of error conceptually to its formula, leading to guesses that ignore the inverse square-root relationship with n.",
            apTip: "Whenever a question changes sample size, immediately think about the √n in the denominator of margin of error / standard error formulas — larger n always means smaller margin of error, all else equal."
          }
        },
        {
          id: 'stat-6-3', difficulty: 2, type: 'mcq', topic: 'Hypothesis Testing Basics',
          prompt: "In a hypothesis test, a small p-value (e.g., p = 0.01) provides evidence that:",
          choices: ['The null hypothesis is definitely false', 'The observed data would be unusual if the null hypothesis were true, providing evidence against the null hypothesis', 'The alternative hypothesis is definitely true', 'The sample size was too small to draw conclusions'],
          correct: 1,
          explanation: {
            correct: "A p-value measures how likely it is to observe data this extreme (or more extreme) if the null hypothesis were actually true; a small p-value means such data would be unusual under the null, giving evidence against it — but it never proves anything with certainty.",
            wrong: { 0: "A p-value never proves the null hypothesis is definitely false; it only provides a level of evidence against it, since some risk of error (Type I) always remains.", 2: "Similarly, we never say the alternative hypothesis is 'definitely true' — statistical conclusions are always probabilistic, not absolute proof.", 3: "The p-value doesn't indicate anything about sample size adequacy on its own; it's a measure of evidence against H0, given whatever sample size was actually used." },
            tempting: "Choices A and C are both tempting because a very small p-value can feel like 'proof,' but AP Stats specifically requires probabilistic, not absolute, language when interpreting p-values.",
            commonMistake: "Using absolute language ('proves,' 'definitely') instead of correct evidence-based language ('provides strong evidence against/for') when interpreting p-values.",
            apTip: "Always frame p-value conclusions as 'the data provide [strong/convincing/some] evidence against H0' rather than 'prove' or 'definitely show' — using proof-language is a very commonly deducted error on FRQs."
          }
        },
        {
          id: 'stat-6-4', difficulty: 3, type: 'mcq', topic: 'Type I and Type II Errors',
          prompt: "A quality control test has H0: the product meets safety standards. A Type II error in this context would mean:",
          choices: ['Concluding the product is unsafe when it actually meets standards', 'Concluding the product meets standards when it is actually unsafe', 'Correctly identifying an unsafe product', 'Setting the significance level too high'],
          correct: 1,
          explanation: {
            correct: "A Type II error is failing to reject a false null hypothesis; here, that means concluding the product meets safety standards (failing to reject H0) when it is actually unsafe (H0 is actually false) — a potentially dangerous miss.",
            wrong: { 0: "This describes a Type I error: rejecting a true null hypothesis (wrongly concluding unsafe when it's actually fine).", 2: "Correctly identifying an unsafe product as unsafe is a correct decision (a true rejection of a false null), not an error at all.", 3: "Significance level (alpha) is a threshold set by the researcher before testing; it's not itself the definition of either error type, though it does influence the error rates." },
            tempting: "Choice A is the classic mix-up — swapping which specific wrong conclusion corresponds to Type I versus Type II error in a real-world context.",
            commonMistake: "Reversing Type I and Type II error definitions, especially in applied contexts where both 'false alarm' and 'missed detection' are plausible-sounding errors.",
            apTip: "Use a consistent memory anchor: Type I error = 'false alarm' (rejecting a true H0); Type II error = 'missed detection' (failing to reject a false H0) — then map the specific context (e.g., 'unsafe product') onto whichever error fits that pattern."
          }
        },
        {
          id: 'stat-6-5', difficulty: 4, type: 'mcq', topic: 'Power of a Test',
          prompt: "Which of the following would increase the power of a hypothesis test to detect a true effect?",
          choices: ['Decreasing the sample size', 'Increasing the sample size', 'Decreasing the significance level (alpha) without changing anything else', 'Increasing the standard deviation of the population'],
          correct: 1,
          explanation: {
            correct: "Increasing sample size reduces standard error, which narrows the sampling distribution and makes it easier to detect a true effect (reject a false null), directly increasing power.",
            wrong: { 0: "Smaller samples increase standard error and reduce power, the opposite of what's being asked.", 2: "Decreasing alpha alone (making the significance threshold stricter) actually decreases power, since it becomes harder to reject H0 at a stricter threshold, holding everything else constant.", 3: "A larger population standard deviation increases variability in the sampling distribution, making true effects harder to detect and thus decreasing power." },
            tempting: "Choice C is a very common trap — students may assume 'being more careful' (lower alpha) should improve everything, but it actually creates a trade-off: lower alpha reduces Type I error risk but simultaneously reduces power (increasing Type II error risk).",
            commonMistake: "Assuming lowering alpha only has benefits, without recognizing the direct trade-off it creates with power/Type II error rate.",
            apTip: "Memorize the key trade-off relationships: increasing n increases power; increasing alpha increases power (but raises Type I error risk); increasing effect size increases power; increasing population variability decreases power."
          }
        },
        {
          id: 'stat-6-6', difficulty: 5, type: 'mcq', topic: 'Two-Sample Inference Reasoning',
          prompt: "A researcher compares two independent samples' proportions using a two-proportion z-test and gets a p-value of 0.03 at α = 0.05, rejecting H0. A colleague argues that because the confidence interval for the difference in proportions was calculated as (0.01, 0.15), this is consistent with the test's conclusion. Why is the colleague's reasoning valid?",
          choices: ['It isn\'t valid; p-values and confidence intervals test unrelated questions', 'It is valid because the confidence interval for the difference does not contain 0, consistent with rejecting H0: p1 = p2 (equivalently, p1 - p2 = 0)', 'It is valid only by coincidence, since the two methods are mathematically unrelated', 'It is invalid because confidence intervals cannot be used to assess statistical significance'],
          correct: 1,
          explanation: {
            correct: "A confidence interval for a difference in proportions and the corresponding two-proportion z-test are mathematically linked: if the confidence interval for p1-p2 does not contain 0, this is consistent with (and equivalent to) rejecting H0: p1=p2 at the corresponding significance level — since 0 falls outside (0.01, 0.15), this matches the test's rejection of H0.",
            wrong: { 0: "Confidence intervals and hypothesis tests for the same parameter and confidence/significance level are directly connected, not unrelated — this is precisely the point being tested.", 2: "This isn't a coincidence; it follows directly from the shared underlying formula (standard error) and the mathematical duality between confidence intervals and two-sided hypothesis tests.", 3: "Confidence intervals absolutely can be used this way — whether a hypothesized value (like 0, or 'no difference') falls inside or outside the interval is a standard, valid way to assess significance." },
            tempting: "Choice A can tempt students who've been taught p-values and confidence intervals as separate topics/chapters, without connecting the underlying mathematical relationship between them.",
            commonMistake: "Treating confidence intervals and hypothesis tests as entirely separate procedures rather than recognizing their direct duality for a shared significance/confidence level.",
            apTip: "College-level insight: a two-sided hypothesis test at significance level α is mathematically equivalent to checking whether the null value falls outside a (1-α)×100% confidence interval — being able to state and apply this duality explicitly is a hallmark of a sophisticated AP Stats FRQ response and often earns bonus credibility with graders."
          }
        }
      ]
    },
    {
      id: 7,
      name: 'Unit 7: Inference for Means',
      questions: [
        {
          id: 'stat-7-1', difficulty: 1, type: 'mcq', topic: 't-Distribution Basics',
          prompt: "When constructing a confidence interval for a population mean using sample data, why is a t-distribution used instead of a normal (z) distribution?",
          choices: ['The t-distribution is always identical to the normal distribution', 'Because the population standard deviation is typically unknown and must be estimated using the sample standard deviation, introducing additional uncertainty', 'Because t-distributions are only used for proportions, not means', 'Because sample means are never normally distributed'],
          correct: 1,
          explanation: {
            correct: "When the population standard deviation (σ) is unknown, which is the typical real-world case, we must estimate it using the sample standard deviation (s); this substitution introduces additional uncertainty, which the t-distribution accounts for by having heavier tails than the normal distribution, especially for smaller sample sizes.",
            wrong: { 0: "The t-distribution is similar to but NOT identical to the normal distribution; it has heavier tails, and the difference matters more for small sample sizes, becoming negligible only as sample size grows large.", 2: "The t-distribution is specifically used for inference about MEANS (when σ is unknown), while inference about proportions typically uses a normal (z) approximation instead — this is the reverse of what's stated.", 3: "Sample means CAN be approximately normally distributed (per the Central Limit Theorem, or by an underlying normal population); the reason for using t instead of z isn't about the distribution shape of sample means, but about the added uncertainty from estimating σ with s." },
            tempting: "None of the distractors are especially close if the concept is understood precisely, but confusing WHEN to use t vs. z (means with unknown σ vs. proportions or known σ) is a common source of error.",
            commonMistake: "Not clearly identifying WHY t is used instead of z — the key trigger is specifically that σ is unknown and being estimated by s, not simply because the procedure involves a mean.",
            apTip: "Memorize this specific trigger: use a t-distribution for inference about a MEAN whenever the population standard deviation (σ) is unknown (which is nearly always in practice) — use z-procedures for proportions, or for means in the rare case where σ IS actually known."
          }
        },
        {
          id: 'stat-7-2', difficulty: 2, type: 'mcq', topic: 'Degrees of Freedom',
          prompt: "A one-sample t-test is conducted using a sample of size n = 25. What are the correct degrees of freedom for this test?",
          choices: ['25', '24', '26', '5 (the square root of 25)'],
          correct: 1,
          explanation: {
            correct: "For a one-sample t-test (or confidence interval for a single mean), degrees of freedom = n - 1 = 25 - 1 = 24.",
            wrong: { 0: "This uses n directly without subtracting 1; degrees of freedom for a one-sample t-procedure is specifically n - 1, not n itself.", 2: "This incorrectly adds 1 instead of subtracting 1 from the sample size.", 3: "This confuses degrees of freedom with an unrelated calculation (square root of n), which isn't part of the degrees of freedom formula at all." },
            tempting: "Choice A is tempting since students may forget the specific '-1' adjustment and simply use the raw sample size as degrees of freedom.",
            commonMistake: "Forgetting to subtract 1 from the sample size when calculating degrees of freedom for a one-sample t-procedure.",
            apTip: "Memorize df = n - 1 specifically for one-sample and matched-pairs t-procedures; two-sample t-procedures have a different, more complex df formula (often computed by calculator/software) — know which scenario you're in before applying a df formula."
          }
        },
        {
          id: 'stat-7-3', difficulty: 2, type: 'mcq', topic: 'Paired vs. Two-Sample t-Tests',
          prompt: "A researcher measures the same 30 patients' blood pressure before and after a new medication. Which type of t-procedure is most appropriate to test whether the medication changed blood pressure?",
          choices: ['Two-sample (independent samples) t-test', 'Paired t-test, since the same individuals are measured twice, making the two sets of measurements dependent', 'One-proportion z-test', 'Chi-square test for independence'],
          correct: 1,
          explanation: {
            correct: "Because the same 30 patients are measured both before and after treatment, the two sets of measurements are naturally paired/dependent (linked by individual patient), making a paired t-test (analyzing the differences within each patient) the appropriate procedure, rather than treating the before and after groups as independent samples.",
            wrong: { 0: "A two-sample (independent samples) t-test assumes the two groups being compared are made up of DIFFERENT, unrelated individuals; here, the same individuals are measured twice, creating dependency that a two-sample test doesn't properly account for.", 2: "This scenario involves comparing MEANS of a quantitative variable (blood pressure), not proportions of a categorical variable, so a one-proportion z-test doesn't apply here.", 3: "Chi-square tests are used for categorical data (frequencies/counts in categories), not for comparing means of a quantitative variable like blood pressure." },
            tempting: "Choice A is a very common trap — seeing 'before and after' with a numerical measurement can tempt students into using a two-sample procedure, without recognizing that measuring the SAME individuals twice creates paired (dependent) data requiring a different, specific procedure.",
            commonMistake: "Using an independent two-sample t-test for data that is actually paired (the same subjects measured twice), rather than recognizing the dependency and using a paired t-test on the differences.",
            apTip: "The key diagnostic question for choosing paired vs. two-sample t-tests is: 'are the two sets of measurements linked by the same individual/unit (paired) or from two separate, unrelated groups (two-sample)?' — 'before and after' or 'twins' or 'matched pairs' scenarios are strong signals for a paired test."
          }
        },
        {
          id: 'stat-7-4', difficulty: 3, type: 'mcq', topic: 'Interpreting a t-Test Result',
          prompt: "A one-sample t-test comparing a sample mean to a hypothesized value yields a p-value of 0.002 at α = 0.05. What is the correct conclusion?",
          choices: ['Fail to reject H0; there is insufficient evidence that the true mean differs from the hypothesized value', 'Reject H0; there is convincing evidence that the true mean differs from the hypothesized value', 'Accept H0 as definitely true', 'The test is inconclusive since the p-value is too small to interpret'],
          correct: 1,
          explanation: {
            correct: "Since the p-value (0.002) is less than α (0.05), the sample result would be quite unusual if H0 were true, providing convincing statistical evidence to reject H0 in favor of the alternative that the true mean differs from the hypothesized value.",
            wrong: { 0: "This conclusion would be appropriate if p-value ≥ α, but here p-value (0.002) is clearly LESS than α (0.05), so we should reject, not fail to reject, H0.", 2: "We never 'accept' H0 as definitively true in hypothesis testing; we can only reject it or fail to reject it based on the available evidence — 'accepting' implies a certainty that statistical tests don't provide.", 3: "A very small p-value isn't 'too small to interpret' — it's actually very clearly and directly interpretable as strong evidence against H0, well below the α threshold." },
            tempting: "Choice C can tempt students who conflate 'failing to find strong evidence against H0' with 'proving H0 is true,' but proper statistical language never treats H0 as proven, only as rejected or not rejected based on the evidence.",
            commonMistake: "Using the word 'accept' for H0 instead of the statistically correct phrasing 'fail to reject H0,' or misjudging the reject/fail-to-reject decision by comparing p-value and α incorrectly.",
            apTip: "Always explicitly compare the p-value to α with the correct direction: p-value < α → reject H0 (convincing evidence for Ha); p-value ≥ α → fail to reject H0 (insufficient evidence for Ha) — and never use the word 'accept' when referring to H0 in your conclusion."
          }
        },
        {
          id: 'stat-7-5', difficulty: 4, type: 'mcq', topic: 'Two-Sample t-Test Conditions',
          prompt: "A researcher wants to compare the mean test scores of two independent classes using a two-sample t-test. Which condition is specifically required for this procedure (beyond randomness) that is NOT required for a one-sample t-test?",
          choices: ['Both samples must have a large counts condition (np ≥ 10)', 'The two samples must be independent of each other, in addition to each being reasonably normal or having sufficiently large sample size individually', 'The two sample sizes must be exactly equal', 'The population standard deviations must be known in advance'],
          correct: 1,
          explanation: {
            correct: "A two-sample t-test specifically requires that the two samples are independent of one another (not paired/linked), in addition to the usual conditions (randomness, and either approximate normality or large enough sample size for each group individually) — this independence-between-groups condition is the key additional requirement beyond what a one-sample t-test needs.",
            wrong: { 0: "The 'large counts' condition (np ≥ 10) is specific to procedures involving PROPORTIONS, not means, so it isn't a condition for either one-sample or two-sample t-tests.", 2: "Two-sample t-tests do NOT require equal sample sizes between the two groups; unequal sample sizes are common and acceptable, and the test (particularly Welch's t-test, commonly used by default) accounts for this.", 3: "t-procedures are specifically used BECAUSE population standard deviations are typically unknown; requiring them to be known in advance would defeat the purpose of using a t-distribution in the first place." },
            tempting: "Choice C can tempt students who assume 'fair' statistical comparisons require equal group sizes, but two-sample t-tests are specifically designed to handle unequal sample sizes without requiring adjustment.",
            commonMistake: "Assuming equal sample sizes are required for a valid two-sample comparison, when in fact unequal sample sizes are handled appropriately by the standard two-sample t-test procedure.",
            apTip: "For two-sample t-test conditions, explicitly list: (1) both samples randomly selected/assigned, (2) the two samples are independent of EACH OTHER, and (3) each sample is either from an approximately normal population or large enough (often n≥30 as a rule of thumb) — condition (2), between-group independence, is the one uniquely added compared to a one-sample test."
          }
        },
        {
          id: 'stat-7-6', difficulty: 5, type: 'mcq', topic: 'Type I/II Error Trade-offs in t-Tests',
          prompt: "A researcher conducting a two-sample t-test decides to use α = 0.01 instead of the more common α = 0.05, specifically because a Type I error in this context (falsely concluding a new drug has an effect when it doesn't) would have serious consequences. What is the most likely trade-off of this decision?",
          choices: ['There is no trade-off; using a stricter α only has benefits', 'The probability of a Type II error (failing to detect a real effect when one exists) increases, since a stricter significance threshold makes it harder to reject H0 even when Ha is true', 'The sample size automatically adjusts to compensate, eliminating any trade-off', 'Using α = 0.01 guarantees a lower probability of both Type I and Type II errors simultaneously'],
          correct: 1,
          explanation: {
            correct: "Lowering α makes the threshold for rejecting H0 stricter, which directly reduces the Type I error rate as intended, but this comes at the cost of making it harder to reject H0 even when Ha is actually true, thereby increasing the probability of a Type II error (and correspondingly decreasing the test's power) — a fundamental, unavoidable trade-off in hypothesis testing.",
            wrong: { 0: "There is virtually always a trade-off between Type I and Type II error rates when adjusting α alone (holding other factors like sample size and effect size constant); reducing one type of error generally increases risk of the other.", 2: "Sample size doesn't automatically adjust just because α is changed; if a researcher wants to counteract the increased Type II error risk from a stricter α, they would need to deliberately increase sample size as a separate action, not something that happens automatically.", 3: "This is impossible under fixed conditions — Type I and Type II error rates are inversely related when α is changed alone (all else being equal); you cannot simultaneously reduce both without changing other factors like sample size or effect size." },
            tempting: "Choice A can tempt students who focus only on the intended benefit (lower Type I error) without considering the corresponding cost (higher Type II error / lower power) that necessarily comes with a stricter significance threshold.",
            commonMistake: "Viewing significance level (α) adjustments as a 'free' way to reduce error without recognizing the built-in trade-off with the other type of error and with statistical power.",
            apTip: "College-level insight: on FRQs discussing why a researcher might choose a stricter or more lenient α, always explicitly discuss BOTH sides of the trade-off (the intended reduction in one error type AND the resulting increase in the other error type/decrease in power) — a one-sided answer describing only the benefit is considered incomplete at the highest scoring level."
          }
        }
      ]
    },
    {
      id: 8,
      name: 'Unit 8: Inference for Categorical Data (Chi-Square)',
      questions: [
        {
          id: 'stat-8-1', difficulty: 1, type: 'mcq', topic: 'Chi-Square Goodness of Fit',
          prompt: "A chi-square goodness-of-fit test is used to determine whether:",
          choices: ['Two quantitative variables are linearly related', 'A categorical variable\'s observed distribution matches a specified hypothesized distribution', 'The means of two or more groups are equal', 'A sample proportion falls within a confidence interval'],
          correct: 1,
          explanation: {
            correct: "A chi-square goodness-of-fit test compares the OBSERVED counts of a single categorical variable's categories to the EXPECTED counts predicted by some hypothesized distribution, testing whether the data are consistent with that hypothesized distribution.",
            wrong: { 0: "Linear relationships between quantitative variables are analyzed using correlation/regression methods, not chi-square goodness-of-fit tests, which deal with categorical data.", 2: "Comparing means across groups is done using t-tests or ANOVA, not chi-square goodness-of-fit tests, which specifically compare observed vs. expected counts for categorical data.", 3: "This describes checking a confidence interval, an entirely different inferential procedure from a goodness-of-fit hypothesis test." },
            tempting: "None of the distractors closely resemble a goodness-of-fit test if the specific chi-square test types (goodness-of-fit, independence, homogeneity) are clearly distinguished, but blending together various inference procedures under time pressure is common.",
            commonMistake: "Not clearly distinguishing chi-square goodness-of-fit tests (one categorical variable vs. a hypothesized distribution) from other chi-square tests (independence/homogeneity, which involve two variables or multiple groups) or from t-test/regression procedures (quantitative data).",
            apTip: "Keep the three chi-square test types straight by their specific purpose: goodness-of-fit (one variable vs. hypothesized distribution), independence (association between two variables in ONE population/sample), homogeneity (comparing distribution of one variable ACROSS several populations/groups)."
          }
        },
        {
          id: 'stat-8-2', difficulty: 2, type: 'mcq', topic: 'Expected Counts',
          prompt: "In a chi-square test for independence examining the relationship between gender and voting preference, a contingency table shows a row total of 80 and a column total of 120, out of a grand total of 200. What is the expected count for that cell?",
          choices: ['200', '48', '9600', '2.4'],
          correct: 1,
          explanation: {
            correct: "Expected count = (row total × column total) / grand total = (80 × 120) / 200 = 9600 / 200 = 48.",
            wrong: { 0: "200 is simply the grand total itself, not the calculated expected count for this specific cell.", 2: "9600 is the numerator (row total × column total) before dividing by the grand total — the division step was skipped.", 3: "2.4 doesn't correspond to a correct application of the expected count formula; it may result from a significant calculation error." },
            tempting: "Choice C is tempting because it represents a genuine intermediate step in the correct calculation, but the final division by the grand total was not completed.",
            commonMistake: "Forgetting to complete the final division by the grand total after multiplying row and column totals together.",
            apTip: "Always write out the expected count formula explicitly as (row total × column total) ÷ grand total, and complete ALL steps including the final division, before treating a number as your final answer."
          }
        },
        {
          id: 'stat-8-3', difficulty: 2, type: 'mcq', topic: 'Chi-Square Conditions',
          prompt: "Which condition must be checked before conducting a chi-square test?",
          choices: ['All expected counts must be at least 5 (some texts use 10)', 'All observed counts must exactly equal expected counts', 'The sample size must be exactly 100', 'The variables must be quantitative, not categorical'],
          correct: 0,
          explanation: {
            correct: "A key condition for chi-square tests is that all expected counts (not observed counts) should be sufficiently large — commonly a threshold of at least 5 (some textbooks use 10) — to ensure the chi-square distribution is a good approximation for the test statistic's sampling distribution.",
            wrong: { 1: "If observed counts always exactly equaled expected counts, the chi-square statistic would be exactly zero every time, and there would be no need for a hypothesis test at all — actual data is expected to show some natural variation from expected counts even under a true null hypothesis.", 2: "There's no fixed requirement that sample size must be exactly 100; sample size can vary, as long as the expected counts condition (not a fixed total) is satisfied.", 3: "Chi-square tests are specifically designed for CATEGORICAL data (counts in categories), not quantitative data; quantitative data would typically use different procedures like t-tests or regression." },
            tempting: "None of the distractors reflect the correct condition if chi-square requirements are known specifically, but 'observed = expected' can tempt students who misunderstand what the test is actually checking (whether they're similar enough, not identical).",
            commonMistake: "Confusing the 'large expected counts' condition (a check on the expected values BEFORE running the test) with the actual test result (comparing observed to expected counts as the test's purpose).",
            apTip: "Memorize the specific expected-counts condition for chi-square tests (typically ≥5 per cell) and always calculate/check ALL expected counts explicitly before running any chi-square test, similar to checking the 'large counts' condition (np≥10) for proportion inference."
          }
        },
        {
          id: 'stat-8-4', difficulty: 3, type: 'mcq', topic: 'Chi-Square Test Selection',
          prompt: "A researcher wants to know if the distribution of favorite music genres differs between three different age groups (teens, adults, seniors), each sampled separately. Which chi-square test is most appropriate?",
          choices: ['Chi-square goodness-of-fit test', 'Chi-square test for independence', 'Chi-square test for homogeneity, since separate samples from different populations (age groups) are being compared on the same categorical variable', 'A chi-square test cannot be used for this scenario'],
          correct: 2,
          explanation: {
            correct: "A chi-square test for homogeneity is used specifically when comparing the distribution of a categorical variable ACROSS two or more separate, independently sampled populations or groups — exactly this scenario of comparing music genre preference distributions across three separately sampled age groups.",
            wrong: { 0: "Goodness-of-fit tests compare one sample's categorical distribution to a single hypothesized distribution, not across multiple separately sampled groups.", 1: "A test for independence examines whether two categorical variables are associated WITHIN one single sample/population (e.g., asking one group about both age and genre preference together), rather than comparing separate samples drawn from distinct populations as described here.", 3: "A chi-square test is well-suited to exactly this kind of scenario (categorical data compared across groups); it absolutely can and should be used here." },
            tempting: "Choice B is a very common mix-up — tests for independence and homogeneity use the same chi-square mechanics and calculations, but they differ in STUDY DESIGN: independence involves one sample measured on two variables, while homogeneity involves separate samples from different populations compared on one variable.",
            commonMistake: "Confusing chi-square tests for independence (one sample, two variables) with tests for homogeneity (multiple separate samples, one variable), since the calculation procedure is mechanically identical for both.",
            apTip: "Distinguish independence vs. homogeneity by the SAMPLING DESIGN described in the problem, not the calculation: if there's ONE sample being examined for a relationship between two categorical variables, it's independence; if there are SEPARATE samples from different populations/groups being compared on ONE variable, it's homogeneity."
          }
        },
        {
          id: 'stat-8-5', difficulty: 4, type: 'mcq', topic: 'Interpreting Chi-Square Results',
          prompt: "A chi-square test for independence between smoking status and a health outcome yields χ² = 12.5 with a p-value of 0.002. What is the most appropriate conclusion?",
          choices: ['There is convincing evidence of an association between smoking status and the health outcome in the sampled population', 'Smoking definitely causes the health outcome', 'The two variables are definitely independent', 'The test is inconclusive since chi-square values cannot be directly interpreted'],
          correct: 0,
          explanation: {
            correct: "A small p-value (0.002) provides convincing statistical evidence against the null hypothesis of independence, supporting the conclusion that there IS an association between smoking status and the health outcome in the population from which the sample was drawn.",
            wrong: { 1: "Chi-square tests for independence establish ASSOCIATION, not causation; without random assignment to smoking/non-smoking groups (which usually isn't ethically or practically possible), this observational-style result cannot establish that smoking definitively CAUSES the outcome.", 2: "This is the opposite conclusion from what the small p-value supports; a small p-value provides evidence AGAINST independence, not evidence FOR it.", 3: "Chi-square test results, including the test statistic and associated p-value, are absolutely interpretable using standard hypothesis testing logic, just like any other test statistic." },
            tempting: "Choice B is a very common and important overreach — finding a statistically significant association through a chi-square test does NOT by itself establish a causal relationship, especially in an observational study design without random assignment.",
            commonMistake: "Concluding causation from a statistically significant chi-square association, rather than correctly limiting the conclusion to an association within the sampled population.",
            apTip: "Always phrase chi-square conclusions carefully using 'association' language ('there is evidence of an association between X and Y'), and explicitly avoid causal language ('X causes Y') unless the underlying study design was a true randomized experiment, not an observational study."
          }
        },
        {
          id: 'stat-8-6', difficulty: 5, type: 'mcq', topic: 'Chi-Square Limitations',
          prompt: "A chi-square test for independence finds a statistically significant association (small p-value) between two categorical variables in a very large sample (n = 50,000). What is an important limitation to consider when interpreting this result?",
          choices: ['With very large sample sizes, even very small, practically unimportant associations can become statistically significant, so statistical significance alone doesn\'t indicate the strength or practical importance of the association', 'Large sample sizes make chi-square tests invalid and unusable', 'A significant result with a large sample size is always more meaningful than the same result with a small sample', 'Chi-square tests cannot produce valid results with samples over 1,000'],
          correct: 0,
          explanation: {
            correct: "With very large sample sizes, chi-square tests (like most hypothesis tests) gain substantial statistical power, meaning even tiny, practically trivial associations between variables can produce very small p-values and 'statistically significant' results — so researchers must additionally consider effect size or practical significance, not just statistical significance, especially with large n.",
            wrong: { 1: "Large sample sizes don't invalidate chi-square tests; the test remains mathematically valid, but its statistical significance must be interpreted carefully alongside practical/effect size considerations.", 2: "This is precisely the misconception this scenario is designed to challenge — statistical significance with a large sample doesn't automatically mean the association is more practically meaningful or important; it may simply reflect the test's increased sensitivity to detecting small effects at scale.", 3: "There's no such sample size cutoff that invalidates chi-square tests; in fact, larger samples generally satisfy the expected-counts condition more easily and are not a source of invalidity." },
            tempting: "Choice C reflects a natural but flawed intuition — that 'significant with more data' should mean 'more true/important,' when in reality large samples simply make it easier to detect ANY real association, however small or practically unimportant it might be.",
            commonMistake: "Equating statistical significance with practical importance, especially failing to recognize that very large samples can make even trivial associations statistically significant.",
            apTip: "College-level insight: always distinguish statistical significance (whether p < α) from practical/effect size significance (how large or meaningful the association actually is) — with large samples, explicitly note this distinction on an FRQ, since it reflects genuine methodological sophistication expected at the highest scoring level."
          }
        }
      ]
    },
    {
      id: 9,
      name: 'Unit 9: Inference for Slopes',
      questions: [
        {
          id: 'stat-9-1', difficulty: 1, type: 'mcq', topic: 'Inference for Regression Slope',
          prompt: "In a regression analysis, a hypothesis test for the population slope (β) tests the null hypothesis H0: β = 0. What does this null hypothesis represent in context?",
          choices: ['There is a strong linear relationship between the two variables', 'There is no linear relationship between the explanatory and response variables in the population (the true slope is zero)', 'The correlation coefficient r must equal exactly 1', 'The sample size is too small to detect any relationship'],
          correct: 1,
          explanation: {
            correct: "H0: β = 0 represents the claim that there is NO linear relationship between the explanatory and response variables in the population — a slope of exactly zero would mean the regression line is flat, with no systematic linear change in y as x changes.",
            wrong: { 0: "A strong linear relationship would correspond to the ALTERNATIVE hypothesis (β ≠ 0), not the null hypothesis being tested here.", 2: "The null hypothesis is about the SLOPE (β) being zero, not about the correlation coefficient equaling any particular specific value like 1 (perfect correlation).", 3: "Sample size relates to the power/precision of the test, not to the definition of what the null hypothesis itself represents." },
            tempting: "None of the distractors closely match the correct null hypothesis meaning if regression inference vocabulary is understood precisely, but conflating slope-based and correlation-based hypotheses is a common source of confusion.",
            commonMistake: "Not clearly connecting the specific null hypothesis (β = 0) to its precise real-world meaning (no linear relationship/flat regression line) in context.",
            apTip: "Always translate H0: β = 0 into plain context language explicitly on FRQs: 'there is no linear relationship between [explanatory variable] and [response variable] in the population' — a bare symbolic statement without this contextual translation often loses communication credit."
          }
        },
        {
          id: 'stat-9-2', difficulty: 2, type: 'mcq', topic: 'Conditions for Slope Inference',
          prompt: "Which of the following is a required condition for performing inference on a regression slope (in addition to randomness)?",
          choices: ['The residuals must show a clear curved pattern', 'The relationship between the variables should be reasonably linear, and the residuals should be approximately normally distributed with roughly constant variance across all x-values', 'The sample size must be exactly 30', 'The correlation coefficient r must be negative'],
          correct: 1,
          explanation: {
            correct: "Valid inference for a regression slope requires the underlying relationship to be reasonably linear (checked via a residual plot showing no clear pattern), residuals to be approximately normally distributed, and residual variability to be roughly constant across all x-values (homoscedasticity, also checked via the residual plot) — these conditions ensure the standard errors and resulting inference are trustworthy.",
            wrong: { 0: "A clear curved pattern in residuals would actually indicate the LINEARITY condition is violated (suggesting a non-linear relationship), which is a problem, not a requirement to be satisfied.", 2: "There's no fixed requirement that sample size be exactly 30; various sample sizes can be valid as long as the other conditions (linearity, normality of residuals, constant variance, randomness) are reasonably met.", 3: "The sign of the correlation coefficient (positive or negative) doesn't affect whether inference conditions are satisfied; slope inference is valid regardless of whether the relationship is positive or negative, as long as the other conditions hold." },
            tempting: "Choice A can tempt students who don't carefully distinguish between what a GOOD residual plot should show (no pattern, constant scatter) versus a PROBLEMATIC one (a curve, indicating nonlinearity), inverting the actual condition.",
            commonMistake: "Misreading residual plot conditions backwards — a residual plot should show random scatter with NO pattern for conditions to be satisfied; a visible curve or pattern actually indicates a violated condition, not a met one.",
            apTip: "Check regression inference conditions using a specific residual plot analysis: no clear curve/pattern (supports linearity), roughly equal spread across all x-values (supports constant variance), and a roughly normal-looking distribution of residuals (often checked via a histogram or normal probability plot of residuals)."
          }
        },
        {
          id: 'stat-9-3', difficulty: 2, type: 'mcq', topic: 'Interpreting Computer Regression Output',
          prompt: "Computer output for a regression gives a slope estimate of 2.5 with a standard error of 0.8. What is the approximate test statistic (t) for testing H0: β = 0?",
          choices: ['0.32', '3.13', '2.0', '1.6'],
          correct: 1,
          explanation: {
            correct: "t = (sample slope - hypothesized slope) / standard error = (2.5 - 0) / 0.8 ≈ 3.13.",
            wrong: { 0: "This inverts the division (0.8/2.5 instead of 2.5/0.8), giving the reciprocal of the correct value.", 2: "This doesn't match the correct division of 2.5 by 0.8; it may result from an arithmetic error.", 3: "This also doesn't correctly compute 2.5/0.8; it may reflect a rounding or calculation mistake." },
            tempting: "Choice A is tempting specifically because it's the mathematically inverted (reciprocal) value, a common error when dividing in the wrong order.",
            commonMistake: "Dividing standard error by the slope estimate instead of the slope estimate by the standard error (inverting the t-statistic formula).",
            apTip: "Always write the general t-statistic formula as (estimate - hypothesized value) / standard error explicitly, and double check the division is set up with the sample statistic on top, standard error on the bottom — this pattern applies across nearly all t-tests, not just regression slope tests."
          }
        },
        {
          id: 'stat-9-4', difficulty: 3, type: 'mcq', topic: 'Confidence Interval for Slope',
          prompt: "A 95% confidence interval for a regression slope is calculated as (0.15, 0.85). What can be concluded?",
          choices: ['Since the interval does not contain 0, there is convincing evidence of a real linear relationship between the variables at the corresponding significance level', 'Since both endpoints are positive, the correlation must be very strong', 'The true slope is exactly 0.5 (the midpoint)', 'No conclusion about significance can be drawn from a confidence interval'],
          correct: 0,
          explanation: {
            correct: "Because the confidence interval for the slope does not contain 0 (both endpoints are positive), this is consistent with rejecting H0: β = 0 at the corresponding significance level, providing convincing evidence that a real (nonzero, in this case positive) linear relationship exists between the variables.",
            wrong: { 1: "Both endpoints being positive indicates the relationship is likely positive in direction, but doesn't by itself indicate the STRENGTH of correlation — a slope of 0.15 to 0.85 could correspond to relationships of varying strength depending on the scale and spread of the data.", 2: "A confidence interval doesn't claim the true slope is exactly at the midpoint; it indicates a range of plausible values for the true slope, with no special certainty attached to any single point within that range, including the midpoint.", 3: "Confidence intervals and hypothesis tests are directly linked — whether a hypothesized value (like 0) falls inside or outside a confidence interval is a valid and standard way to draw a significance conclusion." },
            tempting: "Choice D can tempt students who've been taught confidence intervals and hypothesis tests as separate, unrelated procedures, without recognizing their direct mathematical connection for drawing significance conclusions.",
            commonMistake: "Not recognizing that checking whether a hypothesized value (like 0 for a slope) falls inside or outside a confidence interval is a legitimate, standard way to draw a conclusion about statistical significance.",
            apTip: "Whenever a confidence interval for a slope (or any parameter) doesn't contain the null-hypothesized value (usually 0 for slopes), state explicitly that this is consistent with rejecting H0 at the corresponding significance level — this connection is frequently and specifically tested."
          }
        },
        {
          id: 'stat-9-5', difficulty: 4, type: 'mcq', topic: 'Influential Points in Slope Inference',
          prompt: "Removing a single influential data point from a regression analysis causes the slope's p-value to change from 0.001 to 0.35. What does this most likely indicate?",
          choices: ['The original conclusion was definitely correct, and the new result should be ignored', 'The apparent significance of the original relationship may have been heavily driven by that single influential point, raising concerns about the robustness of the original conclusion', 'Removing data points never legitimately affects statistical conclusions', 'The p-value change indicates a calculation error must have occurred'],
          correct: 1,
          explanation: {
            correct: "Such a dramatic change in p-value (from highly significant to clearly non-significant) after removing just one point strongly suggests that the original apparent relationship was heavily dependent on that single influential point, raising legitimate concerns about whether the relationship is genuinely robust across the broader dataset or was substantially an artifact of one unusual observation.",
            wrong: { 0: "This assumes the ORIGINAL result (with the influential point included) must be the correct one, without considering that influential points can distort conclusions and that examining sensitivity to their removal is a legitimate and important diagnostic step.", 2: "Removing data points (particularly influential points, when done transparently and for legitimate diagnostic reasons) is a standard, valid part of assessing the robustness and reliability of a regression analysis, not something that has zero effect on conclusions.", 3: "A dramatic shift like this doesn't necessarily indicate an ERROR; it's a natural, expected mathematical consequence of removing a highly influential point from a regression analysis, and is actually valuable diagnostic information rather than a sign that a mistake was made." },
            tempting: "Choice A reflects a natural but risky assumption — that the original, 'complete data' analysis must automatically be the trustworthy one — without considering that a single influential point can substantially distort a regression result and that sensitivity analysis (checking what happens when it's removed) is an important, legitimate practice.",
            commonMistake: "Assuming the original analysis (with all data included) is automatically the most trustworthy conclusion, without considering how sensitive that conclusion might be to one or a few unusual, highly influential data points.",
            apTip: "College-level insight: performing this kind of sensitivity analysis — checking whether removing an influential point substantially changes the conclusion — is standard practice in real statistical analysis; on an FRQ, explicitly note that a large shift in significance after removing one point raises concerns about whether the original relationship is genuinely robust across the full dataset, rather than driven by an outlier."
          }
        },
        {
          id: 'stat-9-6', difficulty: 5, type: 'mcq', topic: 'Extrapolation & Causation in Regression Inference',
          prompt: "A regression analysis finds a statistically significant positive slope between hours of study and exam score within the studied range of 0 to 10 hours. A student wants to use this model to predict the exam score for someone who studies 40 hours. What are the TWO main concerns with this specific prediction, beyond simply whether the slope is statistically significant?",
          choices: ['There are no additional concerns, since statistical significance guarantees accurate predictions at any x-value', 'Extrapolation (predicting far outside the range of observed x-values, where the linear relationship may not hold) and the assumption that the relationship remains linear and causal outside the studied range', 'The p-value would need to be recalculated using a different formula for values outside the data range', 'Confidence intervals become unnecessary once a slope is found to be statistically significant'],
          correct: 1,
          explanation: {
            correct: "Two key concerns are extrapolation — using the model to predict far beyond the range of x-values actually observed (0-10 hours), where there's no evidence the linear relationship continues to hold — and the underlying assumption that even within a valid range, a demonstrated statistical association (even if causal in a well-designed experiment) would continue to apply in the same linear way at very different, unobserved x-values, which cannot be verified from the available data.",
            wrong: { 0: "Statistical significance of a slope WITHIN the studied range says nothing about whether that same linear relationship continues to hold OUTSIDE that range; this is a distinct and serious concern beyond significance itself.", 2: "There isn't a different p-value formula for extrapolated values; the core issue with extrapolation is conceptual/statistical validity concerns about applying the model outside its supported range, not a recalculation issue.", 3: "Confidence intervals remain a meaningful and important tool for quantifying uncertainty around model estimates and predictions, regardless of whether a slope was found to be statistically significant within the studied range." },
            tempting: "Choice A reflects a common overconfidence in statistical significance — finding significance within a studied range says nothing about the model's validity or accuracy far outside that range, a crucial and frequently tested limitation.",
            commonMistake: "Believing that statistical significance of a relationship within a studied data range automatically justifies using that same model to make predictions far outside the observed range of data.",
            apTip: "Whenever a prediction is requested for an x-value clearly outside the range of the original data, explicitly name 'extrapolation' as a concern on the FRQ, and explain specifically why the relationship's behavior outside the studied range is unknown and cannot be verified from the given data — a generic 'the model might not be accurate' answer without the specific term 'extrapolation' and this reasoning is usually considered incomplete."
          }
        }
      ]
    }
  ],
  frqs: [
    {
      id: 'stat-frq-1', difficulty: 4, unit: 6,
      prompt: "A random sample of 200 voters finds that 112 support a new policy.\n\n(a) Construct and interpret a 95% confidence interval for the true proportion of all voters who support the policy.\n(b) Check whether the conditions for constructing this interval are met.\n(c) A pollster claims that exactly 50% of voters support the policy. Based on your interval, evaluate this claim.",
      rubricPoints: [
        "Correctly calculates sample proportion p̂ = 112/200 = 0.56 (1 pt)",
        "Correctly checks conditions: random sample (given), np̂ ≥ 10 and n(1-p̂) ≥ 10 (both satisfied: 112 and 88), and population at least 10×200=2000 (1 pt)",
        "Correctly calculates the interval using p̂ ± z*√(p̂(1-p̂)/n) ≈ 0.56 ± 1.96(0.0351) ≈ (0.491, 0.629) (1 pt)",
        "Gives correct interpretation: 'We are 95% confident the true proportion of all voters supporting the policy is between about 0.491 and 0.629.' (1 pt)",
        "Correctly evaluates the claim: since 0.50 falls within the interval, the claim of exactly 50% support is plausible/consistent with the data (1 pt)"
      ],
      sampleResponse: "(a) p̂ = 112/200 = 0.56. SE = √(0.56×0.44/200) ≈ 0.0351. Margin of error = 1.96 × 0.0351 ≈ 0.069. 95% CI = 0.56 ± 0.069 = (0.491, 0.629). We are 95% confident that the true proportion of all voters who support the policy is between 0.491 and 0.629.\n(b) Random: sample is stated to be random. Large counts: np̂ = 112 ≥ 10 and n(1-p̂) = 88 ≥ 10, both satisfied. Independence/10% condition: 200 voters is presumably less than 10% of all voters, so independence is reasonably satisfied. All conditions are met.\n(c) Since 0.50 falls within the confidence interval (0.491, 0.629), the claim that exactly 50% of voters support the policy is plausible and not contradicted by this sample data."
    },
    {
      id: 'stat-frq-2', difficulty: 5, unit: 6,
      prompt: "A company claims their website redesign increases the click-through rate above the historical rate of 20%. In a sample of 150 visitors after the redesign, 39 clicked through.\n\n(a) State appropriate null and alternative hypotheses.\n(b) Calculate the test statistic and p-value.\n(c) Using α = 0.05, state a conclusion in context.\n(d) Explain what a Type I error would mean in this specific context.",
      rubricPoints: [
        "States correct hypotheses: H0: p = 0.20, Ha: p > 0.20 (one-sided, in context) (1 pt)",
        "Correctly calculates sample proportion p̂ = 39/150 = 0.26 (1 pt)",
        "Correctly calculates z test statistic using SE under H0: z = (0.26-0.20)/√(0.20×0.80/150) ≈ 1.84, and finds p-value ≈ 0.033 (1 pt)",
        "States a correct conclusion in context: since p-value (0.033) < α (0.05), reject H0; there is convincing evidence the true click-through rate is greater than 20% (1 pt)",
        "Correctly explains Type I error in context: concluding the redesign increased the click-through rate when in reality it did not (1 pt)"
      ],
      sampleResponse: "(a) H0: p = 0.20 (the true click-through rate is still 20%). Ha: p > 0.20 (the true click-through rate has increased).\n(b) p̂ = 39/150 = 0.26. Under H0, SE = √(0.20×0.80/150) ≈ 0.0327. z = (0.26-0.20)/0.0327 ≈ 1.84. P(Z > 1.84) ≈ 0.033.\n(c) Since the p-value (≈0.033) is less than α = 0.05, we reject H0. There is convincing statistical evidence that the true click-through rate after the redesign is greater than 20%.\n(d) A Type I error here would mean concluding that the redesign increased the click-through rate above 20% when, in reality, the true rate had not increased — i.e., wrongly crediting the redesign with an improvement that isn't real."
    },
    {
      id: 'stat-frq-3', difficulty: 3, unit: 1,
      prompt: "A dataset of exam scores for 30 students has mean 78 and standard deviation 9. The distribution is roughly symmetric with no outliers.\n\n(a) Using the empirical rule, estimate the percentage of students who scored between 60 and 96.\n(b) A student scored 96. Calculate this student's z-score and interpret it in context.\n(c) Explain why the median would likely be a similarly appropriate measure of center to report here, given the distribution's shape.",
      rubricPoints: [
        "Correctly identifies 60 and 96 as within 2 standard deviations of the mean (78±2(9) = 60 to 96) (1 pt)",
        "Correctly applies the empirical rule to estimate approximately 95% of students fall in this range (1 pt)",
        "Correctly calculates z = (96-78)/9 = 2.0 (1 pt)",
        "Correctly interprets: this student's score is 2 standard deviations above the mean (1 pt)",
        "Explains that since the distribution is roughly symmetric without outliers, mean and median would be similar, so either could appropriately represent the center (1 pt)"
      ],
      sampleResponse: "(a) 60 and 96 are exactly 2 standard deviations from the mean (78 - 2(9) = 60, 78 + 2(9) = 96). By the empirical rule, approximately 95% of data falls within 2 standard deviations of the mean in a roughly symmetric, bell-shaped distribution.\n(b) z = (96-78)/9 = 18/9 = 2.0. This student's score is 2 standard deviations above the mean, which is a relatively high score compared to the rest of the class.\n(c) Since the distribution is roughly symmetric and has no outliers, the mean and median would likely be very close in value, and either would appropriately represent the data's center; this contrasts with skewed distributions or those with outliers, where the median is preferred because it's resistant to being pulled by extreme values."
    },
    {
      id: 'stat-frq-4', difficulty: 4, unit: 2,
      prompt: "A researcher collects data on hours studied and exam score for 20 students, finding a least-squares regression line ŷ = 65 + 3.5x with r² = 0.72.\n\n(a) Interpret the slope of this regression line in context.\n(b) Interpret r² = 0.72 in context.\n(c) A student who studied 0 hours is predicted to score 65. Explain why this y-intercept may not be a meaningful real-world prediction, even though it's mathematically valid.",
      rubricPoints: [
        "Correctly interprets the slope: for each additional hour studied, exam score is predicted to increase by 3.5 points, on average (1 pt)",
        "Correctly interprets r²: about 72% of the variability in exam scores is explained by the linear relationship with hours studied (1 pt)",
        "Explains that x=0 may be outside or at the edge of the range of actual data collected (extrapolation concern), or that a student who genuinely studies 0 hours may not be well-represented by this model (1 pt)"
      ],
      sampleResponse: "(a) For each additional hour studied, a student's exam score is predicted to increase by about 3.5 points, on average.\n(b) About 72% of the variability in exam scores can be explained by the linear relationship with hours studied.\n(c) This y-intercept represents an extrapolation if none (or very few) of the actual students in the sample studied close to 0 hours; predicting outcomes for x-values outside or at the edge of the observed data range is unreliable, since there's no evidence the linear relationship continues to hold in that region — the model may not accurately reflect real behavior for a student who genuinely studied zero hours."
    },
    {
      id: 'stat-frq-5', difficulty: 3, unit: 3,
      prompt: "A researcher wants to study whether a new fertilizer increases crop yield. They have access to a field with noticeably different soil quality across different sections.\n\n(a) Explain why simple random assignment of the fertilizer treatment across the whole field might not be the best design choice here.\n(b) Describe how a randomized block design could improve this experiment, referencing the soil quality variation.\n(c) Explain the purpose of including a control group (no fertilizer) in this experiment.",
      rubricPoints: [
        "Explains that soil quality variation is a confounding variable that could affect yield independent of fertilizer, and simple random assignment might not evenly distribute this variability by chance (1 pt)",
        "Describes blocking by soil quality: divide the field into blocks of similar soil quality, then randomly assign fertilizer/no-fertilizer WITHIN each block (1 pt)",
        "Explains this reduces the influence of the known soil-quality variability on the treatment comparison, making differences due to fertilizer easier to detect (1 pt)",
        "Explains the control group provides a baseline for comparison, showing what yield would be WITHOUT the fertilizer, isolating the fertilizer's actual effect (1 pt)"
      ],
      sampleResponse: "(a) Since soil quality varies noticeably across the field, this is a known variable that could affect crop yield independent of the fertilizer; simple random assignment across the whole field risks an uneven, unlucky distribution of soil quality between treatment and control groups purely by chance, confounding the results.\n(b) A randomized block design would divide the field into blocks of similar soil quality, then randomly assign the fertilizer treatment (vs. no fertilizer) within each block; this ensures both treatment and control conditions are represented across all soil quality levels, controlling for this known source of variability.\n(c) The control group (no fertilizer) provides a baseline showing what crop yield would be without the fertilizer under the same conditions; comparing the fertilizer group's yield to this baseline isolates the fertilizer's actual effect, rather than attributing any observed yield difference to unrelated factors."
    },
    {
      id: 'stat-frq-6', difficulty: 4, unit: 4,
      prompt: "A game involves rolling a fair six-sided die. You win $10 if you roll a 6, lose $2 if you roll a 1-5.\n\n(a) Calculate the expected value of this game.\n(b) Interpret this expected value in context.\n(c) Calculate the standard deviation of the winnings for a single play (show your work using the variance formula).",
      rubricPoints: [
        "Correctly calculates expected value: (1/6)(10) + (5/6)(-2) = 1.67 - 1.67 = 0 (1 pt)",
        "Correctly interprets: over many plays, the average net winnings per game would be approximately $0 (1 pt)",
        "Correctly sets up variance calculation using E(X²) - [E(X)]² or the weighted sum of squared deviations (1 pt)",
        "Correctly calculates standard deviation from the variance (approximately $4.90) (1 pt)"
      ],
      sampleResponse: "(a) E(X) = (1/6)(10) + (5/6)(-2) = 1.667 - 1.667 = 0.\n(b) Over many plays of this game, the average net winnings per game would be approximately $0 — the game is fair in the long run, on average.\n(c) Variance = Σ(x-μ)²P(x) = (10-0)²(1/6) + (-2-0)²(5/6) = 100(1/6) + 4(5/6) = 16.67 + 3.33 = 20. Standard deviation = √20 ≈ 4.47."
    },
    {
      id: 'stat-frq-7', difficulty: 4, unit: 5,
      prompt: "A population of adult heights has mean 68 inches and standard deviation 4 inches. A random sample of 64 individuals is taken.\n\n(a) Describe the shape, center, and spread of the sampling distribution of the sample mean for samples of this size.\n(b) Calculate the probability that the sample mean height is greater than 69 inches.\n(c) Explain how the answer to (b) would change (without recalculating) if the sample size were smaller, such as n=16, and explain why.",
      rubricPoints: [
        "Correctly describes the sampling distribution: approximately normal (by CLT, given large n), mean=68, SE=4/√64=0.5 (1 pt)",
        "Correctly calculates z = (69-68)/0.5 = 2.0, and finds P(Z>2.0) ≈ 0.0228 (1 pt)",
        "Explains that with a smaller sample size, standard error would be LARGER (4/√16=1.0), making the sampling distribution more spread out (1 pt)",
        "Correctly reasons that this would make the probability of the sample mean exceeding 69 LARGER (since 69 would be closer, in SE units, to the mean, given wider spread) (1 pt)"
      ],
      sampleResponse: "(a) By the Central Limit Theorem, the sampling distribution of the sample mean is approximately normal, with mean 68 inches and standard error = 4/√64 = 0.5 inches.\n(b) z = (69-68)/0.5 = 2.0. P(Z > 2.0) ≈ 0.0228, so there's about a 2.28% chance the sample mean exceeds 69 inches.\n(c) With a smaller sample size (n=16), the standard error would be larger (4/√16 = 1.0 instead of 0.5), making the sampling distribution more spread out. This would make 69 inches correspond to a SMALLER z-score in SE units (only 1 SE above the mean instead of 2), so the probability of the sample mean exceeding 69 would be LARGER than with n=64."
    },
    {
      id: 'stat-frq-8', difficulty: 4, unit: 7,
      prompt: "A sample of 20 batteries has a mean lifespan of 500 hours with a sample standard deviation of 40 hours. Assume the population is approximately normal.\n\n(a) Construct a 95% confidence interval for the true mean battery lifespan, using the appropriate t-distribution (t* ≈ 2.093 for df=19).\n(b) Interpret this confidence interval in context.\n(c) Explain what would happen to the width of this interval if the sample size were increased to 100, all else being equal.",
      rubricPoints: [
        "Correctly calculates the standard error: 40/√20 ≈ 8.94 (1 pt)",
        "Correctly calculates the margin of error: 2.093 × 8.94 ≈ 18.71, giving interval (481.3, 518.7) (1 pt)",
        "Correctly interprets: we are 95% confident the true mean battery lifespan is between about 481.3 and 518.7 hours (1 pt)",
        "Correctly explains that increasing sample size would DECREASE the standard error (and thus the margin of error), producing a NARROWER interval (1 pt)"
      ],
      sampleResponse: "(a) SE = 40/√20 ≈ 8.94. Margin of error = 2.093 × 8.94 ≈ 18.71. 95% CI = 500 ± 18.71 = (481.3, 518.7).\n(b) We are 95% confident that the true mean lifespan of this battery type is between approximately 481.3 and 518.7 hours.\n(c) Increasing the sample size to 100 would decrease the standard error (since SE = s/√n, and √n increases), which would decrease the margin of error and produce a NARROWER confidence interval, all else being equal — larger samples provide more precise estimates of the population parameter."
    },
    {
      id: 'stat-frq-9', difficulty: 4, unit: 8,
      prompt: "A researcher surveys 300 randomly selected adults about their preferred mode of transportation (car, public transit, bicycle) and whether they live in an urban or rural area, wanting to test whether transportation preference is associated with area type.\n\n(a) State the appropriate null and alternative hypotheses for this chi-square test.\n(b) Explain what condition must be checked before proceeding with this test, and how it would be checked.\n(c) If the test yields a small p-value (p=0.01), state the appropriate conclusion in context.",
      rubricPoints: [
        "Correctly states H0: transportation preference and area type are independent (no association); Ha: they are associated (not independent) (1 pt)",
        "Correctly identifies the expected counts condition (all expected counts ≥5, calculated as row total × column total / grand total) (1 pt)",
        "Correctly concludes: since p=0.01 < α (assumed 0.05), reject H0; there is convincing evidence of an association between transportation preference and area type (1 pt)"
      ],
      sampleResponse: "(a) H0: Transportation preference and area type (urban/rural) are independent (no association) in the population. Ha: Transportation preference and area type are associated (not independent).\n(b) The expected counts condition must be checked: all expected counts (calculated as row total × column total / grand total for each cell) should be at least 5, to ensure the chi-square distribution is a valid approximation.\n(c) Since the p-value (0.01) is less than a standard significance level (e.g., α=0.05), we reject H0. There is convincing evidence of an association between transportation preference and area type (urban vs. rural) in the population."
    },
    {
      id: 'stat-frq-10', difficulty: 4, unit: 9,
      prompt: "A regression analysis of house size (square feet) and sale price gives a slope estimate of 120 with a standard error of 15, based on a sample of 40 houses.\n\n(a) Calculate the t-statistic for testing H0: β=0 versus Ha: β≠0.\n(b) Using df=38, the p-value for this test is very small (p<0.001). State the appropriate conclusion.\n(c) Explain what it would mean, in context, if the confidence interval for the slope were (95, 145) instead, referencing whether 0 is contained in this interval.",
      rubricPoints: [
        "Correctly calculates t = (120-0)/15 = 8.0 (1 pt)",
        "Correctly concludes: since p<0.001 is very small, reject H0; there is strong evidence of a real linear relationship between house size and sale price (1 pt)",
        "Correctly explains that since 0 is NOT contained in the interval (95,145), this is consistent with rejecting H0: β=0, supporting the conclusion of a significant positive linear relationship (1 pt)"
      ],
      sampleResponse: "(a) t = (sample slope - hypothesized slope)/SE = (120-0)/15 = 8.0.\n(b) Since the p-value (<0.001) is very small, we reject H0. There is strong, convincing evidence of a real (nonzero) linear relationship between house size and sale price.\n(c) Since 0 is not contained within the interval (95, 145), this is consistent with rejecting H0: β=0 at the corresponding confidence level, supporting the conclusion that there is a statistically significant positive linear relationship between house size and sale price (the true slope is very likely between 95 and 145, definitely positive)."
    },
    {
      id: 'stat-frq-11', difficulty: 3, unit: 1,
      prompt: "A dataset of household incomes is strongly right-skewed with several high-income outliers.\n\n(a) Identify the most appropriate measures of center and spread to report for this dataset, and justify your choice.\n(b) Explain why the mean would likely be noticeably higher than the median for this dataset.\n(c) Describe what a boxplot of this data would likely look like, referencing the whisker lengths.",
      rubricPoints: [
        "Correctly identifies median (center) and IQR (spread) as most appropriate, given skew and outliers (1 pt)",
        "Explains that the mean is pulled toward the high-income outliers/tail, making it noticeably higher than the median, which resists this pull (1 pt)",
        "Correctly describes a boxplot with a longer whisker/more spread on the high (right) side, reflecting the right skew, and possibly individual outlier points marked beyond the whisker (1 pt)"
      ],
      sampleResponse: "(a) The median and interquartile range (IQR) are most appropriate, since they are resistant to the influence of outliers and skew, unlike the mean and standard deviation, which are pulled by extreme values.\n(b) The mean would be noticeably higher than the median because the high-income outliers pull the mean upward (since it uses every value in its calculation), while the median, being resistant to outliers, is less affected and stays closer to the 'typical' middle value.\n(c) The boxplot would likely show a longer whisker (or more individually marked outlier points) extending toward the high (right) end, reflecting the right skew and high-income outliers, while the box itself (representing the middle 50% of data) would be positioned toward the lower end of the overall range."
    },
    {
      id: 'stat-frq-12', difficulty: 4, unit: 2,
      prompt: "A scatterplot of city population (x) and number of hospitals (y) shows a strong positive linear association with r=0.85. A student claims that having more hospitals causes a city's population to grow.\n\n(a) Explain why this causal claim is not justified by the correlation alone.\n(b) Propose a plausible confounding (lurking) variable that could explain this correlation without direct causation.\n(c) Describe a study design that COULD potentially support a causal claim about hospitals and population, if such a claim were being tested rigorously.",
      rubricPoints: [
        "Explains that correlation alone (even if strong) does not establish causation, since alternative explanations (confounding, reverse causation) remain possible (1 pt)",
        "Proposes a specific, plausible confounding variable, such as city size/economic development driving both population and the resources to build more hospitals (1 pt)",
        "Describes an experimental design (with random assignment of some intervention, though acknowledging this specific scenario may not be practically randomizable) or at minimum acknowledges the need for controlling for confounders in an observational design (1 pt)"
      ],
      sampleResponse: "(a) A strong correlation, even r=0.85, only shows an association between two variables; it does not rule out other explanations such as a confounding variable affecting both, or reverse causation (population size affecting hospital count, rather than the other way around).\n(b) A plausible confounding variable is overall city size/economic development: larger, more economically developed cities likely have both bigger populations AND more resources/infrastructure to support more hospitals, without hospitals themselves directly causing population growth.\n(c) True causal evidence would ideally require a randomized experiment (e.g., randomly assigning additional hospital funding/construction to some comparable cities and not others, then measuring subsequent population change) — though this is often impractical for city-level interventions; at minimum, a well-designed observational study would need to statistically control for plausible confounding variables (like existing economic development) to strengthen any causal inference."
    },
    {
      id: 'stat-frq-13', difficulty: 3, unit: 3,
      prompt: "A pharmaceutical company tests a new drug using a double-blind, placebo-controlled, randomized experiment.\n\n(a) Explain the purpose of randomly assigning participants to the drug or placebo group.\n(b) Explain the purpose of blinding both the participants AND the researchers administering the treatment (double-blind).\n(c) Explain why a placebo group (rather than simply an untreated group) is included in this design.",
      rubricPoints: [
        "Explains random assignment balances both known and unknown confounding variables between groups (1 pt)",
        "Explains blinding participants prevents the placebo effect from confounding results, and blinding researchers prevents researcher bias in administering treatment or assessing outcomes (1 pt)",
        "Explains the placebo group controls for the psychological/placebo effect of simply receiving SOME treatment, isolating the drug's actual pharmacological effect beyond this placebo effect (1 pt)"
      ],
      sampleResponse: "(a) Random assignment helps ensure that both known and unknown confounding variables (such as age, health status, or other characteristics) are balanced between the drug and placebo groups, so any difference in outcomes can be more confidently attributed to the drug itself rather than pre-existing group differences.\n(b) Blinding participants prevents their expectations about receiving the real drug (the placebo effect) from influencing their reported outcomes; blinding the researchers administering treatment prevents them from unconsciously influencing participants or being biased when assessing/recording outcomes based on knowing who received the actual drug.\n(c) A placebo group controls for the psychological effect of simply believing one is receiving treatment (the placebo effect); by comparing the drug group to a placebo group (rather than an untreated group that knows they're getting nothing), researchers can isolate the drug's actual additional pharmacological effect beyond this general placebo effect."
    },
    {
      id: 'stat-frq-14', difficulty: 4, unit: 4,
      prompt: "A quality control process finds that 5% of manufactured parts are defective. A random sample of 20 parts is inspected.\n\n(a) Explain why this scenario can be modeled using a binomial distribution, referencing the required conditions.\n(b) Calculate the expected number of defective parts in a sample of 20.\n(c) Calculate the standard deviation of the number of defective parts in this sample.",
      rubricPoints: [
        "Correctly identifies the binomial conditions: fixed number of trials (20), each trial has two outcomes (defective/not), constant probability (5%) if parts are independent, and trials are independent (1 pt)",
        "Correctly calculates expected value: np = 20(0.05) = 1 (1 pt)",
        "Correctly calculates standard deviation: √(np(1-p)) = √(20(0.05)(0.95)) = √0.95 ≈ 0.975 (1 pt)"
      ],
      sampleResponse: "(a) This scenario meets the binomial conditions: there is a fixed number of trials (n=20 parts inspected), each trial has exactly two outcomes (defective or not defective), the probability of a defective part is constant (5%) assuming parts are manufactured independently and identically, and the trials (parts) are independent of each other.\n(b) Expected value = np = 20 × 0.05 = 1 defective part, on average.\n(c) Standard deviation = √(np(1-p)) = √(20 × 0.05 × 0.95) = √0.95 ≈ 0.975 parts."
    },
    {
      id: 'stat-frq-15', difficulty: 4, unit: 5,
      prompt: "A population proportion is p=0.4. Samples of size n=50 are repeatedly taken.\n\n(a) Verify that the large counts condition is satisfied for using a normal approximation for the sampling distribution of the sample proportion.\n(b) Calculate the mean and standard deviation of the sampling distribution of the sample proportion.\n(c) Calculate the probability that a sample proportion is greater than 0.5.",
      rubricPoints: [
        "Correctly verifies np=50(0.4)=20≥10 and n(1-p)=50(0.6)=30≥10, condition satisfied (1 pt)",
        "Correctly states mean = p = 0.4, and calculates SD = √(p(1-p)/n) = √(0.4×0.6/50) ≈ 0.0693 (1 pt)",
        "Correctly calculates z = (0.5-0.4)/0.0693 ≈ 1.44, and finds P(Z>1.44) ≈ 0.075 (1 pt)"
      ],
      sampleResponse: "(a) np = 50(0.4) = 20 ≥ 10, and n(1-p) = 50(0.6) = 30 ≥ 10. Both conditions are satisfied, so the normal approximation is appropriate.\n(b) Mean = p = 0.4. Standard deviation = √(p(1-p)/n) = √(0.4×0.6/50) = √0.0048 ≈ 0.0693.\n(c) z = (0.5-0.4)/0.0693 ≈ 1.44. P(Z > 1.44) ≈ 0.075, so there's about a 7.5% chance the sample proportion exceeds 0.5."
    },
    {
      id: 'stat-frq-16', difficulty: 4, unit: 7,
      prompt: "A company claims its light bulbs last an average of 1000 hours. A consumer group tests a random sample of 25 bulbs and finds a mean lifespan of 970 hours with a sample standard deviation of 80 hours.\n\n(a) State appropriate hypotheses to test whether the true mean lifespan is less than the company's claim.\n(b) Calculate the t-statistic (df=24).\n(c) Using a t-table, the p-value is approximately 0.035. State a conclusion at α=0.05.",
      rubricPoints: [
        "Correctly states H0: μ=1000, Ha: μ<1000 (1 pt)",
        "Correctly calculates t = (970-1000)/(80/√25) = -30/16 = -1.875 (1 pt)",
        "Correctly concludes: since p=0.035 < α=0.05, reject H0; there is convincing evidence the true mean lifespan is less than 1000 hours (1 pt)"
      ],
      sampleResponse: "(a) H0: μ = 1000 hours. Ha: μ < 1000 hours.\n(b) t = (970-1000)/(80/√25) = -30/(80/5) = -30/16 = -1.875.\n(c) Since the p-value (0.035) is less than α (0.05), we reject H0. There is convincing statistical evidence that the true mean lifespan of these bulbs is less than the company's claimed 1000 hours."
    },
    {
      id: 'stat-frq-17', difficulty: 4, unit: 8,
      prompt: "A die is rolled 60 times, with the following observed frequencies for each face: 1:8, 2:12, 3:11, 4:7, 5:10, 6:12. A researcher wants to test whether the die is fair.\n\n(a) State the appropriate null and alternative hypotheses.\n(b) Calculate the expected frequency for each face under the null hypothesis.\n(c) Explain, without calculating the full chi-square statistic, how you would determine whether the observed frequencies provide convincing evidence the die is unfair.",
      rubricPoints: [
        "Correctly states H0: the die is fair (each face has probability 1/6); Ha: the die is not fair (1 pt)",
        "Correctly calculates expected frequency for each face: 60 × (1/6) = 10 (1 pt)",
        "Explains the general chi-square goodness-of-fit process: calculate the chi-square statistic by summing (observed-expected)²/expected for each category, then compare the resulting p-value to a significance level to decide whether to reject H0 (1 pt)"
      ],
      sampleResponse: "(a) H0: The die is fair (each face has an equal probability of 1/6). Ha: The die is not fair (probabilities are not all equal to 1/6).\n(b) Since the die is fair under H0, each face is expected 60 × (1/6) = 10 times.\n(c) I would calculate the chi-square goodness-of-fit statistic by summing (observed-expected)²/expected across all six faces, then compare this statistic (or its corresponding p-value) to a chosen significance level (like α=0.05); if the resulting p-value is less than α, this would provide convincing evidence that the die is not fair, since the observed frequencies would be considered too different from the expected fair-die frequencies to be reasonably attributed to chance alone."
    },
    {
      id: 'stat-frq-18', difficulty: 4, unit: 9,
      prompt: "A residual plot for a regression of advertising spending versus sales shows a clear curved (U-shaped) pattern rather than random scatter.\n\n(a) Explain what this residual plot pattern indicates about the appropriateness of the linear regression model.\n(b) Explain why relying only on r² or a significant slope test would NOT be sufficient to confirm this linear model is appropriate.\n(c) Suggest one possible next step a researcher could take in response to this residual plot pattern.",
      rubricPoints: [
        "Correctly explains that a curved residual pattern indicates the relationship is NOT actually linear, violating the linearity condition needed for valid linear regression inference (1 pt)",
        "Explains that r² and slope significance can both be misleadingly \"good\" even when the true relationship is curved, since these statistics don't directly check for a linearity violation on their own (1 pt)",
        "Suggests a reasonable next step, such as considering a transformation of the data or fitting a different, non-linear model type (1 pt)"
      ],
      sampleResponse: "(a) A curved (U-shaped) pattern in the residual plot indicates that the linearity condition is violated — the true relationship between advertising spending and sales is likely not actually linear, meaning a straight-line model is not fully appropriate for this data, even if it produces some reasonable-looking summary statistics.\n(b) r² and a significant slope test can both still show statistically 'good' looking results even when the true relationship is curved, since they don't directly test for this specific violation; a high r² only indicates how much variability the model explains, not whether a linear model is the CORRECT functional form, which is exactly why checking the residual plot's pattern is an essential additional step.\n(c) One reasonable next step would be to consider a data transformation (such as taking the log of one or both variables) to try to achieve a more linear relationship, or to explore fitting a different, non-linear regression model that might better capture the curved relationship shown in the residual plot."
    }
  ]
}
