// AP Calculus AB — real College Board unit numbers/names used for authenticity.
// Started with 2 units; more to be added in follow-up passes.

export const calcAB = {
  id: 'calc-ab',
  name: 'AP Calculus AB',
  icon: '📐',
  accent: 'moss',
  units: [
    {
      id: 1,
      name: 'Unit 1: Limits & Continuity',
      questions: [
        {
          id: 'calc-1-1', difficulty: 1, type: 'mcq', topic: 'Evaluating Limits',
          prompt: "What is lim(x→3) (x² + 2x - 1)?",
          choices: ['8', '14', '5', 'The limit does not exist'],
          correct: 1,
          explanation: {
            correct: "Since x² + 2x - 1 is a polynomial (continuous everywhere), the limit as x→3 can be found by direct substitution: (3)² + 2(3) - 1 = 9 + 6 - 1 = 14.",
            wrong: { 0: "8 doesn't match direct substitution of x=3 into the polynomial; recomputing 9+6-1 gives 14, not 8.", 2: "5 doesn't match the correct substitution either; this may result from an arithmetic slip.", 3: "Polynomials are continuous at every real number, so the limit always exists and equals the function's value at that point — there's no reason for this limit to fail to exist." },
            tempting: "None of the distractors are conceptually tricky if direct substitution is applied carefully, but arithmetic slips when substituting and simplifying are a common source of error.",
            commonMistake: "Arithmetic errors when substituting the value into the polynomial expression, rather than a conceptual misunderstanding of limits.",
            apTip: "For any polynomial (or other continuous function) at a point in its domain, the limit is found simply by direct substitution — save more advanced limit techniques (factoring, L'Hopital's rule) for cases involving indeterminate forms like 0/0."
          }
        },
        {
          id: 'calc-1-2', difficulty: 1, type: 'mcq', topic: 'Definition of Continuity',
          prompt: "For a function f to be continuous at x = c, which condition must NOT necessarily be true?",
          choices: ['f(c) must be defined', 'lim(x→c) f(x) must exist', 'lim(x→c) f(x) must equal f(c)', 'f must be differentiable at x = c'],
          correct: 3,
          explanation: {
            correct: "Continuity at x=c requires three specific conditions: f(c) is defined, lim(x→c) f(x) exists, and that limit equals f(c) — differentiability is a STRONGER condition than continuity (differentiable functions are always continuous, but continuous functions are not always differentiable, such as at a sharp corner like |x| at x=0), so differentiability is not a required condition for continuity itself.",
            wrong: { 0: "This IS one of the three required conditions for continuity at a point — the function must actually be defined there.", 1: "This IS one of the three required conditions for continuity — the two-sided limit must actually exist at that point.", 2: "This IS one of the three required conditions for continuity — the limit's value must match the function's actual value at that point, not just exist independently." },
            tempting: "Choice D is the trap specifically because differentiability and continuity are closely related concepts often taught together, leading students to conflate them; but continuity is the weaker, more basic requirement, while differentiability requires the additional condition of a well-defined derivative (no sharp corners, cusps, or vertical tangents).",
            commonMistake: "Assuming continuity requires differentiability, when in fact the relationship only goes one direction: differentiable implies continuous, but continuous does NOT imply differentiable.",
            apTip: "Memorize the specific one-directional relationship: differentiability ⟹ continuity, but continuity does NOT ⟹ differentiability — the classic counterexample is f(x) = |x| at x = 0, which is continuous but not differentiable (due to the sharp corner)."
          }
        },
        {
          id: 'calc-1-3', difficulty: 2, type: 'mcq', topic: 'Limits Producing Indeterminate Forms',
          prompt: "Evaluate: lim(x→2) (x² - 4)/(x - 2)",
          choices: ['0', '4', 'Undefined/does not exist', '2'],
          correct: 1,
          explanation: {
            correct: "Direct substitution gives 0/0 (an indeterminate form), so factor first: (x²-4)/(x-2) = (x-2)(x+2)/(x-2) = (x+2) for x≠2; taking the limit of the simplified expression as x→2 gives 2+2 = 4.",
            wrong: { 0: "0 would result from stopping at the indeterminate 0/0 form without factoring and simplifying first, incorrectly treating 0/0 as simply 0.", 2: "The limit DOES exist once the removable discontinuity (from the (x-2) factor canceling) is properly handled through factoring — it isn't undefined.", 3: "2 would result from a computational error; correctly evaluating the simplified expression (x+2) at x=2 gives 2+2=4, not 2." },
            tempting: "Choice A is tempting because direct substitution literally produces 0/0, and a student might stop there without recognizing this signals a need to factor and simplify rather than an actual answer.",
            commonMistake: "Treating an indeterminate form (0/0) as if it were a final numerical answer, rather than recognizing it as a signal to try algebraic simplification (factoring, rationalizing) before evaluating the limit.",
            apTip: "Whenever direct substitution produces 0/0, this is a specific SIGNAL (not itself an answer) to try factoring, rationalizing, or other algebraic techniques to simplify the expression before evaluating the limit again."
          }
        },
        {
          id: 'calc-1-4', difficulty: 3, type: 'mcq', topic: 'One-Sided Limits & Piecewise Functions',
          prompt: "A piecewise function is defined as f(x) = x + 1 for x < 2, and f(x) = 3x - 3 for x ≥ 2. Does lim(x→2) f(x) exist, and why?",
          choices: ['Yes, because both pieces give the same value at x=2', 'No, because the left-hand limit (approaching 3) and right-hand limit (approaching 3) must be checked and compared, and this requires evaluating both pieces at x=2 to confirm they match', 'No, because piecewise functions never have limits at the boundary point', 'Yes, automatically, since f(2) is defined by the second piece'],
          correct: 0,
          explanation: {
            correct: "The left-hand limit (using x+1 as x→2⁻) gives 2+1=3, and the right-hand limit (using 3x-3 as x→2⁺) gives 3(2)-3=3; since both one-sided limits equal 3, the two-sided limit lim(x→2) f(x) exists and equals 3.",
            wrong: { 1: "This describes the correct PROCESS (checking both one-sided limits) but reaches the wrong CONCLUSION — since both one-sided limits DO match (both equal 3), the limit DOES exist, not the opposite.", 2: "This is a false generalization; piecewise functions CAN have limits at boundary points, specifically when the left-hand and right-hand limits happen to match, as they do in this particular case.", 3: "While f(2) being defined is a separate, true fact (f(2) = 3(2)-3 = 3), simply having f(2) defined doesn't automatically guarantee the LIMIT exists; the limit's existence specifically depends on whether the left and right-hand limits actually match, which needs to be checked separately (though in this case, they do coincidentally match)." },
            tempting: "Choice D is tempting because it reaches the correct final conclusion (limit exists) but for an incomplete/incorrect reason — having f(2) defined doesn't by itself guarantee the limit exists; the ACTUAL justification requires checking that both one-sided limits match each other.",
            commonMistake: "Confusing 'f(c) is defined' with 'the limit exists at c' — these are related but distinct conditions, and for piecewise functions specifically, checking BOTH one-sided limits is the correct method to determine if the two-sided limit exists.",
            apTip: "For piecewise functions at boundary points, ALWAYS explicitly calculate both the left-hand limit (using the piece valid for x < c) and right-hand limit (using the piece valid for x ≥ c or x > c) separately, then compare them — this explicit two-step process is what AP graders expect to see shown, not just a final answer."
          }
        },
        {
          id: 'calc-1-5', difficulty: 4, type: 'mcq', topic: 'Intermediate Value Theorem',
          prompt: "A continuous function f satisfies f(1) = -3 and f(4) = 5. According to the Intermediate Value Theorem, which conclusion is guaranteed?",
          choices: ['f(x) = 0 for every x between 1 and 4', 'There exists at least one value c in the interval (1, 4) such that f(c) = 0', 'f is increasing throughout the interval [1, 4]', 'f has a maximum value of 5 on the interval [1, 4]'],
          correct: 1,
          explanation: {
            correct: "The Intermediate Value Theorem states that for a continuous function on a closed interval, the function takes on every value between f(a) and f(b) at least once somewhere in that interval; since f(1)=-3 and f(4)=5 have opposite signs, and 0 is between -3 and 5, the IVT guarantees at least one value c in (1,4) where f(c)=0.",
            wrong: { 0: "The IVT guarantees f(c)=0 for AT LEAST ONE value c, not that f(x)=0 for EVERY x in the interval (that would mean f is the zero function throughout, which isn't implied at all by the given information).", 2: "The IVT says nothing about whether the function is monotonically increasing; it only guarantees intermediate VALUES are achieved somewhere, not a specific overall shape or behavior pattern for the function.", 3: "While f(4)=5 is the given value at that specific endpoint, the IVT doesn't guarantee this is the function's MAXIMUM on the interval — the function could rise even higher at some point between 1 and 4 before settling back down, without more information ruling this out." },
            tempting: "Choice A is a common overreach — students correctly identify that IVT guarantees a zero exists, but mistakenly extend this to imply f(x)=0 EVERYWHERE, rather than just at some single point (or possibly a few points).",
            commonMistake: "Overstating the Intermediate Value Theorem's guarantee — remember it promises the existence of AT LEAST ONE point where the function equals the target value, not that the function equals that value throughout the whole interval, and it says nothing about uniqueness (there could be more than one such point) or other function behavior.",
            apTip: "State IVT applications precisely on FRQs: identify the continuous function, the interval, the target value (often 0, to prove a root exists), and explicitly note the sign change or value range that guarantees the target value is achieved — 'there exists at least one c in (a,b) such that f(c) = [target]' is the precise, expected conclusion language."
          }
        },
        {
          id: 'calc-1-6', difficulty: 5, type: 'mcq', topic: 'Limits at Infinity & End Behavior',
          prompt: "Evaluate: lim(x→∞) (3x³ - 2x + 1)/(6x³ + 5x² - 4)",
          choices: ['0', '1/2', '∞', '3/6, which does not simplify to a defined limit'],
          correct: 1,
          explanation: {
            correct: "When the numerator and denominator are polynomials of the SAME highest degree (both degree 3 here), the limit as x→∞ equals the ratio of their leading coefficients: 3/6 = 1/2, since all lower-degree terms become negligible relative to the highest-degree terms as x grows without bound.",
            wrong: { 0: "A limit of 0 would occur if the denominator's degree were HIGHER than the numerator's degree, but here both are degree 3 (equal degrees), so the limit is a finite nonzero ratio, not 0.", 2: "A limit of infinity would occur if the numerator's degree were HIGHER than the denominator's degree; here the degrees are equal, so the limit is a finite value, not infinite.", 3: "3/6 DOES simplify to a defined, meaningful limit value (1/2); this ratio of leading coefficients is exactly the correct and complete method for evaluating this type of limit, not an unsimplified or invalid dead end." },
            tempting: "None of the incorrect options result from a reasonable misapplication of the correct method, but not knowing the specific 'compare polynomial degrees' rule for limits at infinity could lead to confusion about which general behavior (0, finite ratio, or infinity) applies.",
            commonMistake: "Not knowing the specific three-case rule for rational function limits at infinity based on comparing the DEGREES of the numerator and denominator polynomials.",
            apTip: "Memorize the three-case rule for lim(x→∞) of a rational function: if numerator degree < denominator degree, limit = 0; if degrees are EQUAL, limit = ratio of leading coefficients; if numerator degree > denominator degree, limit = ±∞ (sign determined by the leading coefficients' signs) — this rule handles the vast majority of 'limit at infinity' AP Calc questions directly."
          }
        }
      ]
    },
    {
      id: 2,
      name: 'Unit 2: Differentiation: Definition & Basic Rules',
      questions: [
        {
          id: 'calc-2-1', difficulty: 1, type: 'mcq', topic: 'Power Rule',
          prompt: "If f(x) = x⁵, what is f'(x)?",
          choices: ['x⁴', '5x⁴', '5x⁵', 'x⁶/6'],
          correct: 1,
          explanation: {
            correct: "Using the power rule, d/dx[xⁿ] = n·xⁿ⁻¹; for f(x) = x⁵, this gives f'(x) = 5x⁴ (bring down the exponent as a coefficient, then subtract 1 from the exponent).",
            wrong: { 0: "This correctly reduces the exponent by 1 but forgets to multiply by the original exponent (5) as the coefficient.", 2: "This correctly brings down the coefficient (5) but forgets to reduce the exponent by 1, leaving it unchanged at 5 instead of reducing to 4.", 3: "This applies the power rule for INTEGRATION (increasing the exponent and dividing) rather than differentiation (decreasing the exponent and multiplying) — the two rules are opposite operations." },
            tempting: "Choice D is tempting for students who mix up the differentiation and integration power rules, which use opposite operations on the exponent.",
            commonMistake: "Confusing the power rule for differentiation (multiply by exponent, then subtract 1 from exponent) with the power rule for integration (add 1 to exponent, then divide by new exponent) — these are inverse operations easily mixed up.",
            apTip: "State the power rule explicitly every time: d/dx[xⁿ] = n·xⁿ⁻¹ — say it as 'bring the exponent down and multiply, then subtract one from the exponent' to build a reliable habit that prevents mixing up differentiation and integration rules."
          }
        },
        {
          id: 'calc-2-2', difficulty: 1, type: 'mcq', topic: 'Limit Definition of the Derivative',
          prompt: "The derivative of a function f at x = a is formally defined as:",
          choices: ['f(a) / a', 'lim(h→0) [f(a+h) - f(a)] / h', 'f(a+1) - f(a)', 'The value of f at x = a'],
          correct: 1,
          explanation: {
            correct: "The formal (limit) definition of the derivative is f'(a) = lim(h→0) [f(a+h) - f(a)] / h, representing the instantaneous rate of change of f at x=a as the limit of the average rate of change (slope of a secant line) as the interval h shrinks toward 0.",
            wrong: { 0: "This isn't a meaningful mathematical operation related to the derivative's definition at all; it doesn't represent rate of change in any standard sense.", 2: "This describes a simple difference using an interval of exactly 1 (not a limit as the interval shrinks to 0), which approximates but does NOT equal the exact instantaneous rate of change that the derivative formally represents.", 3: "This just describes the function's VALUE at x=a, not its rate of change (derivative) at that point — these are entirely different concepts (a y-value versus a slope)." },
            tempting: "Choice C is tempting because it resembles a valid NUMERICAL APPROXIMATION technique for a derivative (using a small interval), but it isn't the actual formal limit definition, which specifically requires the interval h to shrink to exactly 0 via a limit process.",
            commonMistake: "Confusing an approximation of the derivative (using a small but nonzero interval) with its exact formal definition (requiring a genuine limit as the interval approaches 0).",
            apTip: "Memorize the limit definition of the derivative exactly as written: f'(a) = lim(h→0) [f(a+h) - f(a)]/h — this exact formula is frequently required to be written out explicitly (not just referenced) on free-response questions asking you to find a derivative 'from the definition.'"
          }
        },
        {
          id: 'calc-2-3', difficulty: 2, type: 'mcq', topic: 'Product Rule',
          prompt: "If f(x) = x² · sin(x), what is f'(x)?",
          choices: ['2x · cos(x)', '2x · sin(x) + x² · cos(x)', '2x · sin(x) - x² · cos(x)', 'x² · cos(x)'],
          correct: 1,
          explanation: {
            correct: "Using the product rule, d/dx[u·v] = u'v + uv', with u=x² (u'=2x) and v=sin(x) (v'=cos(x)): f'(x) = 2x·sin(x) + x²·cos(x).",
            wrong: { 0: "This only differentiates one of the two factors (treating x² as if it were a constant) and omits the required second term of the product rule entirely.", 2: "This uses a subtraction instead of the correct addition between the two terms of the product rule; the product rule specifically combines the two terms with a plus sign, not a minus sign.", 3: "This only computes the SECOND term of the correct product rule expansion (uv') and completely omits the first required term (u'v)." },
            tempting: "Choice C is tempting for students who confuse the product rule's addition with the QUOTIENT rule's subtraction pattern, since both rules involve two terms but combine them differently.",
            commonMistake: "Mixing up the product rule (u'v + uv', addition) with the quotient rule (which involves subtraction in its numerator), or forgetting one of the two required terms entirely.",
            apTip: "Say the product rule out loud as a fixed phrase every time: 'derivative of the first times the second, PLUS the first times the derivative of the second' — having this exact verbal pattern memorized prevents both missing a term and mixing up the sign with the quotient rule."
          }
        },
        {
          id: 'calc-2-4', difficulty: 3, type: 'mcq', topic: 'Chain Rule',
          prompt: "If f(x) = (3x² + 1)⁴, what is f'(x)?",
          choices: ['4(3x² + 1)³', '4(3x² + 1)³ · 6x', '(3x² + 1)³ · 6x', '4 · 6x'],
          correct: 1,
          explanation: {
            correct: "Using the chain rule with outer function u⁴ (derivative 4u³) and inner function u = 3x²+1 (derivative 6x): f'(x) = 4(3x²+1)³ · 6x, multiplying the derivative of the outer function (evaluated at the inner function) by the derivative of the inner function.",
            wrong: { 0: "This correctly differentiates the OUTER function (power rule applied to the whole expression) but completely omits multiplying by the derivative of the INNER function (6x), a required step of the chain rule.", 2: "This correctly includes the inner function's derivative (6x) but incorrectly drops the coefficient 4 from differentiating the outer power function; the exponent 4 must be brought down as a coefficient just like in the standard power rule.", 3: "This only differentiates the innermost linear pieces and completely misapplies the chain rule structure, dropping the (3x²+1)³ term entirely." },
            tempting: "Choice A is the most common chain rule error — applying the power rule to the outer function correctly but forgetting the essential final step of multiplying by the inner function's derivative.",
            commonMistake: "Forgetting to multiply by the derivative of the 'inside' function after differentiating the 'outside' function — this is the single most common chain rule error.",
            apTip: "Always verbally narrate chain rule steps: 'derivative of the outside (leaving the inside alone) TIMES derivative of the inside' — and get in the habit of asking yourself 'is there an inside function I need to also take the derivative of?' before finalizing any derivative answer."
          }
        },
        {
          id: 'calc-2-5', difficulty: 4, type: 'mcq', topic: 'Derivatives of Trigonometric & Exponential Functions',
          prompt: "If f(x) = e^(2x) · cos(x), what is f'(x)?",
          choices: ['2e^(2x) · cos(x)', '2e^(2x) · cos(x) - e^(2x) · sin(x)', 'e^(2x) · cos(x) - e^(2x) · sin(x)', '2e^(2x) · cos(x) + e^(2x) · sin(x)'],
          correct: 1,
          explanation: {
            correct: "Using the product rule with u = e^(2x) (u' = 2e^(2x), by the chain rule since the exponent is 2x, not just x) and v = cos(x) (v' = -sin(x)): f'(x) = u'v + uv' = 2e^(2x)·cos(x) + e^(2x)·(-sin(x)) = 2e^(2x)·cos(x) - e^(2x)·sin(x).",
            wrong: { 0: "This only computes the first term of the product rule (u'v) and completely omits the second required term (uv').", 2: "This correctly captures the subtraction pattern from cos(x)'s derivative being -sin(x), but forgets the chain rule multiplier of 2 needed when differentiating e^(2x) (since the exponent is 2x, not simply x).", 3: "This correctly includes the chain rule's factor of 2, but incorrectly uses addition instead of subtraction for the second term; since the derivative of cos(x) is -sin(x) (negative), the second term of the product rule expansion should be subtracted, not added." },
            tempting: "Choice C and D each capture ONE of the two required corrections (either the chain rule multiplier of 2, or the correct negative sign from cos(x)'s derivative) but miss the other, making them very plausible partial-credit-level errors.",
            commonMistake: "Forgetting either the chain rule's multiplier (from differentiating e^(2x), not just eˣ) or the negative sign from the derivative of cos(x) (which is -sin(x), not +sin(x)) — this problem specifically combines both potential errors.",
            apTip: "When multiple derivative rules combine (chain rule INSIDE a product rule, as here), work through each piece separately and label it explicitly before combining: find u and u' (applying chain rule if needed), find v and v' (checking signs on trig derivatives), THEN assemble using u'v + uv' — this step-by-step labeling prevents dropping either the chain rule factor or a sign."
          }
        },
        {
          id: 'calc-2-6', difficulty: 5, type: 'mcq', topic: 'Implicit Differentiation',
          prompt: "Given the equation x² + y² = 25 (a circle), use implicit differentiation to find dy/dx.",
          choices: ['dy/dx = -x/y', 'dy/dx = x/y', 'dy/dx = -2x/2y', 'dy/dx = 2x'],
          correct: 0,
          explanation: {
            correct: "Differentiating both sides with respect to x: 2x + 2y(dy/dx) = 0 (using the chain rule on y², since y is a function of x). Solving for dy/dx: 2y(dy/dx) = -2x, so dy/dx = -2x/2y = -x/y.",
            wrong: { 1: "This has the correct magnitude but the wrong sign; solving 2x + 2y(dy/dx) = 0 for dy/dx specifically requires moving 2x to the other side (becoming negative), giving -x/y, not positive x/y.", 2: "This is mathematically equivalent to and simplifies to exactly -x/y (the correct answer); while not wrong, it's the correct answer just left unsimplified — if presented as a distinct 'different' answer choice, it would actually be equivalent, so in context, this represents an intermediate step rather than a distinct final simplified answer.", 3: "This only differentiates the x² term and completely omits the required chain rule treatment of the y² term (which requires multiplying by dy/dx, since y is implicitly a function of x), and also drops the entire y term and equation structure needed to actually solve for dy/dx." },
            tempting: "Choice B is the most common sign error — mishandling the algebra when isolating dy/dx after differentiating implicitly, dropping the negative sign that comes from moving the 2x term to the other side of the equation.",
            commonMistake: "Forgetting to apply the chain rule (multiplying by dy/dx) when differentiating terms containing y, since y is implicitly a function of x — or making sign errors when algebraically isolating dy/dx afterward.",
            apTip: "For implicit differentiation, explicitly remind yourself before starting: 'every time I differentiate a term with y, I must multiply by dy/dx due to the chain rule (since y depends on x)' — then carefully isolate dy/dx algebraically as the very last step, double-checking the sign."
          }
        }
      ]
    },
    {
      id: 4,
      name: 'Unit 4: Contextual Applications of Differentiation',
      questions: [
        {
          id: 'calc-4-1', difficulty: 1, type: 'mcq', topic: 'Position, Velocity, Acceleration',
          prompt: "If s(t) represents the position of a particle at time t, what does s'(t) represent?",
          choices: ['The particle\'s acceleration', 'The particle\'s velocity, the rate of change of position with respect to time', 'The particle\'s total distance traveled', 'The particle\'s initial position'],
          correct: 1,
          explanation: {
            correct: "The derivative of position with respect to time, s'(t), gives velocity — the instantaneous rate of change of position, describing both speed and direction of motion at a given moment.",
            wrong: { 0: "Acceleration is the derivative of VELOCITY (the second derivative of position, s''(t)), not the first derivative of position.", 2: "Total distance traveled requires additional calculation (often involving the integral of |velocity|, or careful accounting for direction changes), not simply the derivative of position at an instant.", 3: "Initial position would be s(0) (evaluating the original position function at t=0), not a derivative of the position function at all." },
            tempting: "Choice A is tempting because acceleration is also a rate of change related to motion, but it's specifically the rate of change of VELOCITY, requiring a second derivative from position, not a first derivative.",
            commonMistake: "Confusing the specific derivative 'level' (position → velocity → acceleration) — remember velocity is the FIRST derivative of position, and acceleration is the SECOND derivative of position (or the first derivative of velocity).",
            apTip: "Memorize the chain explicitly: position s(t) → [derivative] → velocity v(t) = s'(t) → [derivative] → acceleration a(t) = v'(t) = s''(t) — this exact three-level relationship is tested constantly in AP Calc motion problems."
          }
        },
        {
          id: 'calc-4-2', difficulty: 2, type: 'mcq', topic: 'Related Rates',
          prompt: "A spherical balloon is being inflated so that its radius increases at a rate of 2 cm/sec. Using V = (4/3)πr³, which equation correctly relates dV/dt to dr/dt?",
          choices: ['dV/dt = (4/3)π(dr/dt)³', 'dV/dt = 4πr² · (dr/dt)', 'dV/dt = (4/3)πr³ · (dr/dt)', 'dV/dt = 4πr · (dr/dt)'],
          correct: 1,
          explanation: {
            correct: "Differentiating V = (4/3)πr³ with respect to time t (using the chain rule, since r is a function of t): dV/dt = (4/3)π · 3r² · (dr/dt) = 4πr² · (dr/dt), applying the power rule to r³ (giving 3r²) and then the chain rule multiplier dr/dt.",
            wrong: { 0: "This incorrectly applies the chain rule's derivative to the ENTIRE rate (dr/dt)³ instead of correctly differentiating r³ with respect to r first (getting 3r²) and then separately multiplying by dr/dt.", 2: "This forgets to actually differentiate r³ at all (it should become 3r² after applying the power rule), leaving the original r³ term unchanged instead.", 3: "This drops the exponent's coefficient correctly reduced (should be 3r² from r³, not just r) and misses a factor — the correct power rule application to r³ gives 3r², and combined with the (4/3) coefficient this simplifies specifically to 4πr², not 4πr." },
            tempting: "Choice A is a common related-rates trap — misapplying the chain rule by cubing the ENTIRE rate of change (dr/dt) instead of correctly applying the power rule to r first and only THEN multiplying by the single dr/dt factor.",
            commonMistake: "Misapplying implicit differentiation with respect to time — forgetting to first take the derivative of the geometric formula with respect to the VARIABLE (r), and only then multiplying by that variable's rate of change (dr/dt), rather than combining these steps incorrectly.",
            apTip: "For related rates, always differentiate the given equation with respect to time t using implicit differentiation, remembering EVERY variable that changes with time needs its own chain rule multiplier (like dr/dt) — write out d/dt[...] on both sides of the equation explicitly before simplifying."
          }
        },
        {
          id: 'calc-4-3', difficulty: 2, type: 'mcq', topic: 'Linear Approximation',
          prompt: "Using linear approximation (tangent line approximation) at x = 4 for f(x) = √x, given f(4) = 2 and f'(4) = 1/4, estimate f(4.2).",
          choices: ['2.05', '2.2', '2.25', '1.05'],
          correct: 0,
          explanation: {
            correct: "Linear approximation formula: f(x) ≈ f(a) + f'(a)(x - a). Using a=4, x=4.2: f(4.2) ≈ 2 + (1/4)(4.2 - 4) = 2 + (1/4)(0.2) = 2 + 0.05 = 2.05.",
            wrong: { 1: "2.2 doesn't apply the derivative-based correction correctly; it appears to just add the raw change in x (0.2) directly without scaling by f'(4) = 1/4.", 2: "2.25 doesn't match the correct calculation; this may result from a different arithmetic error in applying the linear approximation formula.", 3: "1.05 incorrectly omits the f(a) = 2 starting value entirely, only using the correction term (0.05) as if it were the entire estimate." },
            tempting: "Choice B is tempting for students who forget to multiply the change in x (0.2) by the derivative (1/4) first, instead just adding the raw x-change directly to f(a).",
            commonMistake: "Forgetting to multiply the change in x by the derivative (the slope) before adding it to f(a), or forgetting to include f(a) as the starting point of the estimate entirely.",
            apTip: "Always write out the full linear approximation formula L(x) = f(a) + f'(a)(x-a) explicitly before substituting numbers — this formula IS the equation of the tangent line at x=a, so a helpful mental check is 'am I using the tangent line's equation to estimate a nearby point?'"
          }
        },
        {
          id: 'calc-4-4', difficulty: 3, type: 'mcq', topic: 'Motion Along a Line: Speeding Up vs. Slowing Down',
          prompt: "A particle's velocity is v(t) = t² - 4t + 3, and its acceleration is a(t) = 2t - 4. At t = 0, is the particle speeding up or slowing down?",
          choices: ['Speeding up, because velocity is positive at t=0', 'Slowing down, because velocity and acceleration have opposite signs at t=0', 'Speeding up, because velocity and acceleration have the same sign at t=0', 'Cannot be determined without knowing position'],
          correct: 1,
          explanation: {
            correct: "At t=0: v(0) = 0 - 0 + 3 = 3 (positive), and a(0) = 2(0) - 4 = -4 (negative). Since velocity and acceleration have opposite signs, the particle is slowing down at t=0 — the acceleration is working against the current direction of motion.",
            wrong: { 0: "Velocity alone doesn't determine speeding up vs. slowing down; you must compare the SIGNS of velocity and acceleration together — a positive velocity with a negative acceleration means the particle is decelerating (slowing down), not speeding up.", 2: "v(0)=3 is positive and a(0)=-4 is negative — these are OPPOSITE signs, not the same sign, so this characterization is factually incorrect for this specific point.", 3: "Speeding up/slowing down is determined by comparing the signs of velocity and acceleration, both of which are fully computable from the given v(t) and a(t) functions — position information isn't needed for this particular determination." },
            tempting: "Choice A is tempting because students sometimes think a positive velocity alone means an object is speeding up, without checking whether the acceleration is pushing in the same direction (speeding up) or the opposite direction (slowing down).",
            commonMistake: "Judging speeding up/slowing down from the sign of velocity alone, without also checking acceleration's sign and comparing the two.",
            apTip: "Memorize the rule as a same-sign/opposite-sign comparison: velocity and acceleration with the SAME sign means speeding up; OPPOSITE signs means slowing down — always calculate and explicitly compare both signs, never judge from velocity alone."
          }
        },
        {
          id: 'calc-4-5', difficulty: 4, type: 'mcq', topic: 'Related Rates: Multi-Variable Problems',
          prompt: "A 10-foot ladder leans against a wall. The bottom slides away from the wall at 1 ft/sec. Using x² + y² = 100 (x = distance from wall to base, y = height on wall), when x = 6 (so y = 8), what is dy/dt?",
          choices: ['-0.75 ft/sec', '0.75 ft/sec', '-1.33 ft/sec', '1 ft/sec'],
          correct: 0,
          explanation: {
            correct: "Differentiating x² + y² = 100 with respect to t: 2x(dx/dt) + 2y(dy/dt) = 0. Substituting x=6, y=8, dx/dt=1: 2(6)(1) + 2(8)(dy/dt) = 0 → 12 + 16(dy/dt) = 0 → dy/dt = -12/16 = -0.75 ft/sec (negative, since the top of the ladder is sliding DOWN as the bottom slides away).",
            wrong: { 1: "This has the correct magnitude but the wrong sign; since the ladder's top is sliding DOWN as the base moves away from the wall, dy/dt must be negative, not positive.", 2: "This doesn't match the correct calculation of -12/16; it may result from a computational or substitution error.", 3: "This simply restates dx/dt (1 ft/sec) without actually solving the related rates equation for dy/dt, which requires the full implicit differentiation and substitution process." },
            tempting: "Choice B is tempting from forgetting that as x increases (ladder sliding away from wall), y must DECREASE (ladder sliding down), meaning dy/dt should be negative even though dx/dt is given as positive.",
            commonMistake: "Forgetting to include the correct sign for dy/dt based on the physical scenario (y is decreasing as x increases, so dy/dt should come out negative) — a sign error here is very common even when the magnitude is calculated correctly.",
            apTip: "For ladder-against-wall (and similar) related rates problems, always double check your final sign makes PHYSICAL sense: as the base slides away (x increasing, dx/dt positive), the top must slide down (y decreasing, dy/dt should be negative) — use this physical intuition check as a final answer verification step."
          }
        },
        {
          id: 'calc-4-6', difficulty: 5, type: 'mcq', topic: "L'Hopital's Rule",
          prompt: "Evaluate: lim(x→0) (x - sin(x)) / x³ using L'Hopital's Rule as needed.",
          choices: ['0', '1/6', '1', 'The limit does not exist'],
          correct: 1,
          explanation: {
            correct: "Direct substitution gives 0/0, so apply L'Hopital's Rule repeatedly: derivative of numerator/denominator gives (1 - cos(x))/(3x²), still 0/0 at x=0; apply again: sin(x)/(6x), still 0/0; apply a third time: cos(x)/6, which at x=0 gives cos(0)/6 = 1/6 — a determinate value, so the limit is 1/6.",
            wrong: { 0: "Stopping after only one or two applications of L'Hopital's Rule (before reaching a determinate, non-0/0 form) can incorrectly suggest a limit of 0; the rule must be reapplied until a determinate form is reached.", 2: "1 doesn't match the correct repeated L'Hopital's Rule calculation; this may result from stopping the differentiation process too early or losing a coefficient along the way.", 3: "This limit does exist and can be found with careful, repeated application of L'Hopital's Rule; it isn't a case of a genuinely non-existent limit." },
            tempting: "This problem is intentionally designed to require MULTIPLE applications of L'Hopital's Rule in sequence, and it's tempting to stop as soon as the expression looks simpler, even if it's still technically an indeterminate 0/0 form.",
            commonMistake: "Stopping L'Hopital's Rule application too early, before the resulting expression is actually determinate (no longer 0/0 or ∞/∞) at the limit point.",
            apTip: "When applying L'Hopital's Rule, after EACH application, explicitly re-check whether direct substitution now gives a determinate result — if still indeterminate, apply the rule again; keep track of each derivative carefully, especially with trig functions where signs and functions cycle (sin → cos → -sin → -cos → sin...)."
          }
        }
      ]
    },
    {
      id: 5,
      name: 'Unit 5: Analytical Applications of Differentiation',
      questions: [
        {
          id: 'calc-5-1', difficulty: 1, type: 'mcq', topic: 'Extreme Value Theorem',
          prompt: "According to the Extreme Value Theorem, a continuous function on a closed interval [a, b] is guaranteed to have:",
          choices: ['An absolute maximum only, but not necessarily an absolute minimum', 'Both an absolute maximum AND an absolute minimum somewhere on the interval', 'Neither an absolute maximum nor minimum unless the function is also differentiable', 'A local maximum at every critical point'],
          correct: 1,
          explanation: {
            correct: "The Extreme Value Theorem guarantees that any function continuous on a closed interval [a,b] must attain BOTH an absolute maximum value and an absolute minimum value somewhere on that interval (possibly at the endpoints, possibly at interior critical points).",
            wrong: { 0: "The theorem guarantees BOTH extremes together, not just a maximum alone — if a continuous function on a closed interval has a guaranteed max, it also has a guaranteed min.", 2: "Continuity alone (on a closed interval) is sufficient for this guarantee; differentiability is NOT required — a continuous function with a sharp corner, for example, still satisfies the Extreme Value Theorem.", 3: "This describes something different (a claim about local behavior at critical points specifically), not the Extreme Value Theorem's actual guarantee about global/absolute extrema existing somewhere on the closed interval." },
            tempting: "None of the distractors accurately state the theorem if it's known precisely, but requiring differentiability (choice C) is a common, incorrect over-strengthening of the actual requirement, which is just continuity on a CLOSED interval.",
            commonMistake: "Adding an unnecessary requirement (like differentiability) to the Extreme Value Theorem's actual, more minimal requirements (continuity AND a closed interval).",
            apTip: "Memorize the Extreme Value Theorem's exact two requirements: the function must be CONTINUOUS, and the interval must be CLOSED [a,b] (not open) — both conditions are necessary; a continuous function on an OPEN interval, or a discontinuous function on a closed interval, is not guaranteed to have these absolute extrema."
          }
        },
        {
          id: 'calc-5-2', difficulty: 2, type: 'mcq', topic: 'Critical Points & Extrema',
          prompt: "For f(x) = x³ - 3x, at which x-value(s) does f have a critical point?",
          choices: ['x = 0 only', 'x = 1 and x = -1', 'x = 3 and x = -3', 'f has no critical points'],
          correct: 1,
          explanation: {
            correct: "f'(x) = 3x² - 3. Setting f'(x) = 0: 3x² - 3 = 0 → x² = 1 → x = 1 or x = -1. Since f'(x) is a polynomial (defined everywhere), these are the only critical points.",
            wrong: { 0: "x=0 gives f'(0) = 3(0)²-3 = -3, which is NOT zero, so x=0 is not a critical point of this function.", 2: "x=±3 don't satisfy f'(x)=0; plugging in x=3 gives f'(3)=3(9)-3=24≠0, so these aren't critical points.", 3: "This function does have critical points, found by correctly solving f'(x)=0; the derivative is not always nonzero." },
            tempting: "Choice A is tempting if a student makes an algebra error while solving 3x²-3=0, or confuses this function with a different one where x=0 might be relevant.",
            commonMistake: "Algebra errors when solving f'(x) = 0, or forgetting to check whether f'(x) might also be undefined anywhere (though for polynomials, this is never an issue).",
            apTip: "Critical points occur where f'(x) = 0 OR f'(x) is undefined; always solve f'(x)=0 carefully with correct algebra, AND separately check for any x-values where f'(x) doesn't exist (relevant for functions involving fractions, roots, or absolute values, though not for simple polynomials)."
          }
        },
        {
          id: 'calc-5-3', difficulty: 2, type: 'mcq', topic: 'Concavity & the Second Derivative',
          prompt: "If f''(x) > 0 on an interval, what does this indicate about the graph of f on that interval?",
          choices: ['f is increasing on that interval', 'f is concave up on that interval', 'f has a local maximum somewhere on that interval', 'f is concave down on that interval'],
          correct: 1,
          explanation: {
            correct: "The sign of the SECOND derivative indicates concavity: f''(x) > 0 means the graph of f is concave up (curving upward, like a cup) on that interval.",
            wrong: { 0: "Whether f is increasing or decreasing is determined by the sign of the FIRST derivative f'(x), not the second derivative f''(x).", 2: "A local maximum specifically requires f' to change from positive to negative at a point, information not directly given just by knowing f''(x) > 0 on an interval (though f''<0 AT a critical point does indicate a local max there, via the second derivative test).", 3: "This is the opposite — f''(x) > 0 indicates concave UP, not concave down; concave down corresponds to f''(x) < 0." },
            tempting: "Choice A is tempting because both f' and f'' relate to the shape of a graph, but f' specifically indicates increasing/decreasing behavior, while f'' specifically indicates concavity — these are different graph properties.",
            commonMistake: "Confusing what the FIRST derivative indicates (increasing/decreasing, via its sign) with what the SECOND derivative indicates (concavity, via its sign) — these are two separate, sequential levels of analysis.",
            apTip: "Keep this hierarchy explicit: sign of f' tells you increasing (+) or decreasing (-); sign of f'' tells you concave up (+) or concave down (-) — and remember f''=0 with a sign change indicates an inflection point (where concavity switches)."
          }
        },
        {
          id: 'calc-5-4', difficulty: 3, type: 'mcq', topic: 'Mean Value Theorem',
          prompt: "A function f is continuous on [1, 5] and differentiable on (1, 5), with f(1) = 3 and f(5) = 15. According to the Mean Value Theorem, there must exist some c in (1, 5) such that f'(c) equals:",
          choices: ['4', '15', '12, the total change in f', '3, the average rate of change, calculated as (15-3)/(5-1)'],
          correct: 3,
          explanation: {
            correct: "The Mean Value Theorem guarantees that for a function continuous on [a,b] and differentiable on (a,b), there exists some c in (a,b) where f'(c) equals the average rate of change over the interval: f'(c) = (f(b)-f(a))/(b-a) = (15-3)/(5-1) = 12/4 = 3.",
            wrong: { 0: "4 is simply the length of the interval (5-1=4), not the average rate of change the Mean Value Theorem actually guarantees f'(c) equals.", 1: "15 is simply f(5), one of the given function VALUES, not the average rate of change (slope) that the Mean Value Theorem guarantees f'(c) equals.", 2: "12 is the total CHANGE in f (f(5)-f(1) = 15-3 = 12), but this hasn't yet been divided by the change in x (5-1=4) to get the average RATE of change; 12 is only the numerator of the correct calculation." },
            tempting: "Choice C is tempting because 12 is a genuine, correct intermediate value (the change in f), but the Mean Value Theorem specifically requires dividing by the change in x as well to get the average RATE of change, not just the total change.",
            commonMistake: "Stopping at the total change in f (the numerator) without completing the division by the change in x, or confusing given function values/interval length with the actual average rate of change the theorem describes.",
            apTip: "Memorize the Mean Value Theorem's conclusion precisely: f'(c) = (f(b)-f(a))/(b-a) — this is exactly the slope of the secant line connecting the endpoints; the theorem guarantees some point where the instantaneous rate of change (tangent slope) matches this average/secant slope."
          }
        },
        {
          id: 'calc-5-5', difficulty: 4, type: 'mcq', topic: 'Optimization',
          prompt: "A farmer wants to enclose a rectangular field using 100 meters of fencing, maximizing the enclosed area. If x represents one side length, which equation correctly represents the area A as a function of x alone?",
          choices: ['A = x²', 'A = x(50 - x), since the perimeter constraint 2x + 2y = 100 gives y = 50 - x, and area = x·y', 'A = x(100 - x)', 'A = 2x + 2(50-x)'],
          correct: 1,
          explanation: {
            correct: "With perimeter 2x + 2y = 100, solving for y gives y = 50 - x. Substituting into the area formula A = xy gives A = x(50-x), expressing area purely in terms of x.",
            wrong: { 0: "This would only be correct if the field were a square with area x² directly, but this doesn't use the given perimeter constraint (100 m of fencing) to relate the two side lengths correctly.", 2: "This incorrectly uses 100 (the full perimeter) instead of correctly solving 2x+2y=100 for y=50-x first; using x(100-x) would correspond to a DIFFERENT (incorrect) perimeter relationship.", 3: "This is simply the perimeter formula rewritten (2x + 2y with y=50-x substituted), not the AREA formula; it doesn't represent what's being asked for (area as a function of x)." },
            tempting: "Choice C is a common trap — using the total perimeter value (100) directly in the area expression instead of first correctly solving the constraint equation for y and substituting that into the area formula.",
            commonMistake: "Substituting the raw perimeter value directly into the area formula, rather than first solving the perimeter CONSTRAINT equation for one variable (y) in terms of the other (x), then substituting correctly.",
            apTip: "For optimization problems, always follow this exact sequence: (1) identify the quantity to optimize (here, area = xy) and the CONSTRAINT (here, perimeter = 100), (2) solve the constraint for one variable in terms of the other, (3) substitute into the optimization formula to get a single-variable function, THEN (4) take the derivative and find critical points."
          }
        },
        {
          id: 'calc-5-6', difficulty: 5, type: 'mcq', topic: 'Second Derivative Test & Inflection Points',
          prompt: "A function f has f'(3) = 0 and f''(3) = -4. What can be concluded about the behavior of f at x = 3?",
          choices: ['f has a local minimum at x=3, since f\'\'(3) is negative', 'f has a local maximum at x=3, since f\'(3)=0 (a critical point) and f\'\'(3)<0 indicates the function is concave down there, consistent with a local max', 'f has an inflection point at x=3', 'No conclusion can be drawn without knowing f(3) itself'],
          correct: 1,
          explanation: {
            correct: "The Second Derivative Test states that if f'(c)=0 (a critical point) AND f''(c) < 0, then f has a LOCAL MAXIMUM at x=c, since negative concavity (concave down) at a point where the slope is zero indicates the function curves downward away from a peak.",
            wrong: { 0: "This reverses the Second Derivative Test's actual conclusion — f''(c) < 0 (concave down) at a critical point indicates a local MAXIMUM, not a minimum (which would require f''(c) > 0, concave up).", 2: "An inflection point specifically requires f'' to CHANGE SIGN at that point (concavity switching from up to down or vice versa), not simply f''(c) being negative at a single point where f'(c)=0 — this describes a local extremum instead.", 3: "The Second Derivative Test specifically allows classifying the critical point (as local max or min) using only f'(c) and f''(c); knowing f(3) itself isn't needed to determine whether it's a max or min (though it would be needed to know the actual y-value/height of that max or min point)." },
            tempting: "Choice A is the classic Second Derivative Test sign reversal — mixing up which sign of f''(c) corresponds to a local max versus a local min.",
            commonMistake: "Reversing the Second Derivative Test's conclusion — remember, f''(c) < 0 (concave down, like a frown) at a critical point means local MAXIMUM; f''(c) > 0 (concave up, like a cup) means local MINIMUM.",
            apTip: "Use a physical memory aid: concave down (f''<0) looks like a frown/hill shape, matching a local MAXIMUM at the critical point; concave up (f''>0) looks like a cup/valley shape, matching a local MINIMUM — visualizing the shape directly from the sign of f'' prevents mixing up the Second Derivative Test's conclusion."
          }
        }
      ]
    },
    {
      id: 6,
      name: 'Unit 6: Integration & Accumulation of Change',
      questions: [
        {
          id: 'calc-6-1', difficulty: 1, type: 'mcq', topic: 'Antiderivatives',
          prompt: "What is the antiderivative (indefinite integral) of f(x) = x⁴?",
          choices: ['4x³ + C', 'x⁵/5 + C', 'x⁵ + C', '5x⁵ + C'],
          correct: 1,
          explanation: {
            correct: "Using the reverse power rule for integration: ∫xⁿ dx = x^(n+1)/(n+1) + C. For n=4: x⁵/5 + C.",
            wrong: { 0: "4x³ is the DERIVATIVE of x⁴, not its antiderivative — this applies the wrong rule (differentiation instead of integration) entirely.", 2: "x⁵ correctly increases the exponent by 1, but forgets to divide by the new exponent (5), which is a required part of the integration power rule.", 3: "5x⁵ incorrectly multiplies by 5 instead of dividing by 5, doing the exact opposite of the correct operation." },
            tempting: "Choice A is tempting for students who apply the DIFFERENTIATION power rule instead of the integration power rule, mixing up the two inverse operations.",
            commonMistake: "Confusing the integration power rule (increase exponent by 1, then divide by the new exponent) with the differentiation power rule (multiply by exponent, then decrease exponent by 1) — these are inverse operations.",
            apTip: "Memorize the integration power rule as the precise reverse of differentiation: ∫xⁿ dx = x^(n+1)/(n+1) + C — always increase the exponent by 1 FIRST, then divide by that new (increased) exponent, and never forget the '+C' for indefinite integrals."
          }
        },
        {
          id: 'calc-6-2', difficulty: 2, type: 'mcq', topic: 'Definite Integrals & Area',
          prompt: "The definite integral ∫ from 0 to 3 of f(x)dx represents:",
          choices: ['The derivative of f at x=3', 'The exact value of f(3)', 'The net signed area between the curve f(x) and the x-axis, from x=0 to x=3', 'The slope of the tangent line to f at x=0'],
          correct: 2,
          explanation: {
            correct: "A definite integral ∫[a to b] f(x)dx represents the net signed area between the function's curve and the x-axis over the interval [a,b] — area above the x-axis counts as positive, area below counts as negative, and these are combined into a single net value.",
            wrong: { 0: "A definite integral doesn't represent a derivative; these are inverse/opposite operations in calculus (integration undoes differentiation, and vice versa, per the Fundamental Theorem of Calculus).", 1: "A definite integral over an interval doesn't give the function's VALUE at a single point (f(3)); it gives the accumulated NET AREA over the entire interval, a fundamentally different quantity.", 3: "Slope of a tangent line is found using a DERIVATIVE at a specific point, not a definite integral over an interval — these are different calculus concepts entirely." },
            tempting: "None of the distractors accurately describe a definite integral's meaning if the concept is understood precisely, but conflating integration with differentiation (its inverse operation) is a common source of confusion for students still solidifying these core concepts.",
            commonMistake: "Confusing what a definite integral represents (net signed area) with derivative-related concepts (instantaneous rate of change, tangent line slope, or a function's value at a point).",
            apTip: "Always describe a definite integral in terms of NET SIGNED AREA between the curve and the x-axis — remember 'signed' specifically means area below the x-axis counts as NEGATIVE, subtracting from the total rather than simply adding to it as unsigned area would."
          }
        },
        {
          id: 'calc-6-3', difficulty: 2, type: 'mcq', topic: 'Fundamental Theorem of Calculus',
          prompt: "According to the Fundamental Theorem of Calculus, if F is an antiderivative of f, then ∫ from a to b of f(x)dx equals:",
          choices: ['F(a) - F(b)', 'F(b) - F(a)', 'F(b) + F(a)', 'f(b) - f(a)'],
          correct: 1,
          explanation: {
            correct: "The Fundamental Theorem of Calculus states that ∫[a to b] f(x)dx = F(b) - F(a), where F is any antiderivative of f — evaluate the antiderivative at the upper bound, then SUBTRACT its value at the lower bound.",
            wrong: { 0: "This reverses the correct order of subtraction (should be upper bound minus lower bound, F(b)-F(a), not F(a)-F(b)) — this sign error would flip the sign of the entire result.", 2: "Adding F(a) and F(b) is not the correct operation; the Fundamental Theorem specifically requires SUBTRACTION (upper minus lower), not addition.", 3: "This uses f (the original function) instead of F (its antiderivative) — the theorem specifically requires evaluating the ANTIDERIVATIVE at the bounds, not the original function." },
            tempting: "Choice A is a very common sign error — reversing the order of subtraction (lower minus upper instead of upper minus lower), which flips the sign of the entire result.",
            commonMistake: "Reversing the subtraction order (F(a)-F(b) instead of the correct F(b)-F(a)), or confusing the original function f with its antiderivative F when evaluating at the bounds.",
            apTip: "Memorize the Fundamental Theorem of Calculus precisely as F(b) - F(a) — always evaluate the ANTIDERIVATIVE (capital F) at the UPPER bound first, then subtract its value at the LOWER bound, and double check you're using the antiderivative, not the original function, at each bound."
          }
        },
        {
          id: 'calc-6-4', difficulty: 3, type: 'mcq', topic: 'Accumulation Functions',
          prompt: "Let g(x) = ∫ from 0 to x of f(t)dt, where f is continuous. According to the Fundamental Theorem of Calculus (Part 1), what is g\'(x)?",
          choices: ['g\'(x) = 0, since g is defined by an integral, not a derivative', 'g\'(x) = f(x), since differentiating an accumulation function with respect to its upper bound simply returns the original integrand function evaluated at that bound', 'g\'(x) = f\'(x)', 'g\'(x) = x·f(x)'],
          correct: 1,
          explanation: {
            correct: "The Fundamental Theorem of Calculus, Part 1, states that if g(x) = ∫[a to x] f(t)dt, then g'(x) = f(x) — differentiating an accumulation function (an integral with a variable upper bound) simply 'undoes' the integration, returning the original integrand evaluated at x.",
            wrong: { 0: "This is incorrect — g is a legitimate, differentiable function of x (since its upper bound is the variable x), and its derivative is NOT automatically zero; the Fundamental Theorem specifically tells us g'(x) = f(x), a nonzero result (unless f itself happens to be zero).", 2: "This confuses g' with f' — the theorem specifically states g'(x) equals f(x) itself (the original integrand function), not the DERIVATIVE of f.", 3: "This introduces an extra, incorrect factor of x that doesn't appear in the actual Fundamental Theorem of Calculus Part 1 result; for this basic form (constant lower bound, x as upper bound), g'(x) = f(x) exactly, with no additional multiplication." },
            tempting: "Choice C is tempting because it involves familiar-looking notation (f' rather than f), but the Fundamental Theorem of Calculus Part 1 specifically gives g'(x) = f(x) (the original function), not its derivative.",
            commonMistake: "Confusing g'(x)=f(x) (the correct Fundamental Theorem of Calculus Part 1 result) with an unrelated expression involving f'(x) or an extra factor of x, especially when the upper bound isn't a simple variable x but a more complex expression requiring the chain rule.",
            apTip: "Memorize the basic FTC Part 1 result — d/dx[∫(a to x) f(t)dt] = f(x) — and note that if the upper bound is a more complex function of x (like x² instead of just x), you must ALSO apply the chain rule, multiplying by the derivative of that upper bound expression."
          }
        },
        {
          id: 'calc-6-5', difficulty: 4, type: 'mcq', topic: 'u-Substitution',
          prompt: "Evaluate ∫ 2x·(x²+1)⁴ dx using u-substitution.",
          choices: ['(x²+1)⁵/5 + C, using u = x²+1, so du = 2x dx, transforming the integral to ∫u⁴du = u⁵/5 + C', '2x²·(x²+1)⁵/5 + C', '(x²+1)⁵ + C', '4x·(x²+1)³ + C'],
          correct: 0,
          explanation: {
            correct: "Let u = x²+1, so du = 2x dx. This exactly matches the '2x dx' portion already present in the original integral, transforming it into ∫u⁴du = u⁵/5 + C. Substituting back u=x²+1 gives (x²+1)⁵/5 + C.",
            wrong: { 1: "This incorrectly retains an extra x² factor that shouldn't remain after the substitution correctly absorbs the 2x dx term entirely into du.", 2: "This forgets to divide by 5 (from correctly integrating u⁴ to get u⁵/5, not just u⁵) after applying the power rule to the u-integral.", 3: "This is the DERIVATIVE of (x²+1)⁴ (obtained via the chain rule), not its antiderivative/integral — this confuses differentiation with the integration this problem actually asks for." },
            tempting: "Choice C is a common trap — correctly identifying u=(x²+1) and its power but forgetting the essential division by the new exponent (5) that the power rule for integration requires.",
            commonMistake: "Forgetting to divide by the new exponent after applying the power rule to integrate u⁴, or confusing this integration problem with a differentiation (chain rule) problem instead.",
            apTip: "For u-substitution, always explicitly identify u, compute du, and verify that du (or a constant multiple of it) actually appears elsewhere in the original integral before proceeding — here, recognizing that 2x dx is EXACTLY du (matching perfectly, with no extra constant needed) is what makes this substitution clean and complete."
          }
        },
        {
          id: 'calc-6-6', difficulty: 5, type: 'mcq', topic: 'Accumulation with Chain Rule (FTC Part 1, complex bounds)',
          prompt: "Let g(x) = ∫ from 0 to x² of √(t+1) dt. What is g\'(x)?",
          choices: ['√(x+1)', '√(x²+1) · 2x, applying the Fundamental Theorem of Calculus combined with the chain rule, since the upper bound is x² (not simply x)', '√(x²+1)', '2x·√(x+1)'],
          correct: 1,
          explanation: {
            correct: "Since the upper bound is x² (a function of x, not simply x itself), the Fundamental Theorem of Calculus must be combined with the chain rule: g'(x) = f(upper bound) × (derivative of upper bound) = √(x²+1) × d/dx[x²] = √(x²+1) × 2x.",
            wrong: { 0: "This uses x instead of x² inside the square root, forgetting that the upper bound itself is x², not x, so the integrand must be evaluated at x² specifically.", 2: "This correctly evaluates the integrand at the upper bound (√(x²+1)) but forgets to multiply by the derivative of that upper bound (2x, from the chain rule), an essential step whenever the upper bound is a function of x more complex than x itself.", 3: "This correctly includes a factor of 2x, but evaluates the integrand at x instead of at the actual upper bound x² — mixing up which expression should be evaluated inside the square root." },
            tempting: "Choice C is the most common error here — correctly applying the basic FTC Part 1 idea (evaluate f at the upper bound) but forgetting the ADDITIONAL chain rule multiplication needed whenever the upper bound is anything other than simply 'x' itself.",
            commonMistake: "Forgetting to apply the chain rule (multiplying by the derivative of the upper bound) when the accumulation function's upper bound is a more complex expression (like x², sin(x), or e^x) rather than simply x.",
            apTip: "Whenever an accumulation function's upper bound is NOT simply x (e.g., it's x², or some other function of x), always apply BOTH steps: (1) evaluate the integrand at that upper bound expression, AND (2) multiply by the derivative of that upper bound expression (chain rule) — skipping step 2 is one of the most common errors on this topic."
          }
        }
      ]
    },
    {
      id: 7,
      name: 'Unit 7: Differential Equations',
      questions: [
        {
          id: 'calc-7-1', difficulty: 1, type: 'mcq', topic: 'Differential Equations Basics',
          prompt: "What does the differential equation dy/dx = 3x describe?",
          choices: ['A specific numerical value of y', 'A relationship describing the rate of change of y with respect to x, as a function of x', 'The exact value of x when y=0', 'An equation with no meaningful mathematical interpretation'],
          correct: 1,
          explanation: {
            correct: "A differential equation like dy/dx = 3x describes a relationship for the RATE OF CHANGE of y with respect to x (here, equal to 3x), rather than giving y directly — solving this differential equation (through integration) would be needed to find the actual function y(x).",
            wrong: { 0: "This equation describes a RATE OF CHANGE (a derivative), not a single specific numerical value of y.", 2: "This equation doesn't directly give information about specific x/y value pairs; it describes the SLOPE relationship, and solving it (via integration, plus using an initial condition) would be needed to find specific values.", 3: "This is a standard, well-defined type of equation (a differential equation) with clear mathematical meaning and established solution methods (like separation of variables), not a meaningless expression." },
            tempting: "None of the distractors accurately describe a differential equation's meaning if the concept is understood specifically, but not recognizing dy/dx notation as representing a rate of change/derivative relationship could lead to confusion about what the equation actually represents.",
            commonMistake: "Not recognizing dy/dx as derivative notation representing a rate of change relationship, rather than a statement about specific numerical values.",
            apTip: "Always read dy/dx = [expression] as 'the rate of change of y with respect to x equals [expression]' — solving a differential equation means finding the actual function y(x) whose derivative matches this given rate-of-change relationship."
          }
        },
        {
          id: 'calc-7-2', difficulty: 2, type: 'mcq', topic: 'Separation of Variables',
          prompt: "Solve the differential equation dy/dx = 2y using separation of variables (general solution, in terms of an arbitrary constant C).",
          choices: ['y = 2x + C', 'y = Ce^(2x), obtained by separating variables (dy/y = 2dx), integrating both sides (ln|y| = 2x + C₁), and exponentiating', 'y = x² + C', 'y = 2Cx'],
          correct: 1,
          explanation: {
            correct: "Separating variables: dy/y = 2dx. Integrating both sides: ln|y| = 2x + C₁. Exponentiating both sides: |y| = e^(2x+C₁) = e^(C₁)·e^(2x), and since e^(C₁) is just another arbitrary constant, this simplifies to y = Ce^(2x).",
            wrong: { 0: "This treats the equation as if dy/dx were a constant (2) rather than correctly recognizing dy/dx = 2y means the rate of change depends on y itself, requiring the separation of variables technique rather than simple direct integration.", 2: "This doesn't correctly solve the given differential equation; it appears to result from a different (incorrect) integration approach that doesn't properly separate and integrate both sides as required.", 3: "This isn't the correct general solution form for this type of exponential growth differential equation; the correct solution involves an exponential function of x, not a linear one like 2Cx." },
            tempting: "Choice A can tempt students who don't recognize that dy/dx=2y is fundamentally different from dy/dx=2 (a constant) — the presence of y on the right side requires separation of variables, not simple direct integration.",
            commonMistake: "Treating dy/dx = 2y like a simple, direct integration problem (as if the right side were just a constant or a function of x alone), rather than recognizing that y appearing on the right side requires the separation of variables technique.",
            apTip: "Recognize dy/dx = ky (rate proportional to the current amount) as the classic exponential growth/decay differential equation, with general solution y = Ce^(kx) — memorize this specific pattern, since it appears extremely frequently in applied contexts (population growth, radioactive decay, compound interest)."
          }
        },
        {
          id: 'calc-7-3', difficulty: 2, type: 'mcq', topic: 'Initial Value Problems',
          prompt: "Given dy/dx = 2y and the initial condition y(0) = 5, find the particular solution.",
          choices: ['y = 5e^(2x), since substituting x=0 into the general solution y=Ce^(2x) gives 5=Ce^0=C, so C=5', 'y = 2e^(5x)', 'y = e^(2x) + 5', 'y = 5 + 2x'],
          correct: 0,
          explanation: {
            correct: "Starting from the general solution y = Ce^(2x) (found via separation of variables), apply the initial condition y(0)=5: 5 = Ce^(2·0) = Ce^0 = C(1) = C, so C=5, giving the particular solution y = 5e^(2x).",
            wrong: { 1: "This incorrectly swaps the roles of the constant and the exponent's coefficient; the correct particular solution has the initial value (5) as the coefficient in front and the original rate constant (2) in the exponent, not swapped.", 2: "This doesn't match the correct exponential form of the general solution to dy/dx=2y at all; it appears to result from a fundamentally different (incorrect) solving approach.", 3: "This is a linear function, not the correct exponential solution form required by the differential equation dy/dx=2y (which requires y=Ce^(2x) as its general solution family)." },
            tempting: "Choice B is tempting because it uses the same two numbers (2 and 5) as the correct answer, but places them in the wrong roles (exponent coefficient vs. multiplicative constant), reflecting a common mix-up when applying the initial condition.",
            commonMistake: "Correctly finding the general solution's FORM but then misapplying the initial condition, or swapping which given number becomes the constant C versus which remains the exponent's coefficient.",
            apTip: "Always substitute the initial condition into the GENERAL solution (with C still unknown) FIRST, solve explicitly for C using that specific initial data point, and only THEN substitute the found value of C back into the general solution to state the final particular solution."
          }
        },
        {
          id: 'calc-7-4', difficulty: 3, type: 'mcq', topic: 'Slope Fields',
          prompt: "A slope field for a differential equation shows short line segments at various points, each representing the slope dy/dx at that specific point. What is the primary purpose of a slope field?",
          choices: ['To give the exact algebraic solution to the differential equation', 'To visually represent the general behavior/shape of solution curves without needing to explicitly solve the differential equation algebraically', 'To calculate definite integrals numerically', 'To find the derivative of a completely unrelated function'],
          correct: 1,
          explanation: {
            correct: "A slope field visually displays the slope (dy/dx) at many sample points across the plane, allowing you to sketch or visualize the general SHAPE/behavior of solution curves to the differential equation, without needing to first find an explicit algebraic solution.",
            wrong: { 0: "A slope field is a visual/graphical tool, not itself an exact algebraic solution; it helps visualize behavior and can guide sketching an approximate solution curve, but doesn't directly provide an exact symbolic formula.", 2: "Slope fields relate to visualizing differential equations (rates of change), not to numerically calculating definite integrals, which is a different mathematical task (though related, since both involve calculus concepts).", 3: "A slope field is specifically constructed FROM the differential equation itself (representing ITS own solutions' behavior), not from some unrelated, separate function." },
            tempting: "None of the distractors accurately describe a slope field's actual purpose if the concept is understood specifically, but confusing this visualization TOOL with an exact algebraic SOLUTION method is a common conceptual gap.",
            commonMistake: "Expecting a slope field to provide an exact algebraic solution, rather than understanding it as a visual/graphical aid for sketching approximate solution curve behavior.",
            apTip: "When working with slope fields, practice matching a given differential equation to its correct corresponding slope field pattern (or vice versa) by checking the slope's sign and value at a few SPECIFIC, easy-to-calculate points, then comparing to the line segments shown in the field."
          }
        },
        {
          id: 'calc-7-5', difficulty: 4, type: 'mcq', topic: 'Exponential Growth/Decay Applications',
          prompt: "A population of bacteria grows according to dP/dt = kP, with an initial population of 100 and a population of 300 after 2 hours. What is the value of k (rounded to 3 decimal places)?",
          choices: ['k = 1.099', 'k ≈ 0.549, since 300 = 100e^(2k) gives e^(2k)=3, so 2k=ln(3), and k=ln(3)/2 ≈ 0.549', 'k = 1.5', 'k = 3'],
          correct: 1,
          explanation: {
            correct: "Using P = P₀e^(kt): 300 = 100e^(k·2). Dividing both sides by 100: 3 = e^(2k). Taking the natural log of both sides: ln(3) = 2k. Solving for k: k = ln(3)/2 ≈ 1.0986/2 ≈ 0.549.",
            wrong: { 0: "1.099 is approximately ln(3) itself, but this hasn't yet been divided by 2 (the given time value) to correctly solve for k.", 2: "1.5 is simply 300/200 or another basic ratio of given numbers, not derived from correctly solving the exponential equation using logarithms.", 3: "3 is the ratio P/P₀ (300/100) itself, not the solved value of k; this skips the necessary logarithm step entirely." },
            tempting: "Choice A is tempting because ln(3)≈1.099 is a genuine, correct intermediate value, but forgetting to divide by the given time (2 hours) leaves an incomplete, incorrect final answer for k.",
            commonMistake: "Stopping the calculation after finding ln(3) without completing the final division by the given time value to correctly isolate k.",
            apTip: "For exponential growth/decay problems, always set up P=P₀e^(kt) explicitly, substitute all given values, isolate the exponential term, take the natural log of both sides, and then complete the FULL algebraic solution for k (including any necessary final division) — don't stop at an intermediate logarithm value."
          }
        },
        {
          id: 'calc-7-6', difficulty: 5, type: 'mcq', topic: 'Logistic Differential Equations',
          prompt: "A population grows according to the logistic differential equation dP/dt = kP(1 - P/L), where L is the carrying capacity. What happens to the growth rate dP/dt as P approaches L?",
          choices: ['The growth rate approaches infinity', 'The growth rate approaches zero, since the factor (1 - P/L) approaches zero as P approaches L, causing the population to level off near the carrying capacity', 'The growth rate remains constant regardless of P\'s value', 'The population immediately becomes negative once P exceeds L slightly'],
          correct: 1,
          explanation: {
            correct: "As P approaches the carrying capacity L, the factor (1 - P/L) approaches (1 - 1) = 0, causing the entire growth rate dP/dt = kP(1-P/L) to approach zero — this reflects the logistic model's key feature that population growth slows and levels off as it approaches the environment's carrying capacity, rather than growing without bound.",
            wrong: { 0: "This is the opposite of the actual behavior — the growth rate approaches ZERO (not infinity) as P approaches L, reflecting resource limitation slowing growth near carrying capacity.", 2: "The growth rate explicitly DEPENDS on P (and how close P is to L) in this equation; it's not constant, but rather changes continuously as P changes, approaching zero specifically as P nears L.", 3: "The logistic model is specifically designed to have growth rate approach zero AS P approaches L (not suddenly become negative right at or slightly past L in this idealized model); the population approaches L asymptotically rather than sharply spiking past it and going negative." },
            tempting: "Choice A can tempt students who default to assuming population growth models always show accelerating (unbounded) growth, without recognizing that the LOGISTIC model specifically incorporates a resource-limiting term that causes growth to slow near capacity, unlike simple exponential growth.",
            commonMistake: "Confusing logistic growth's approaching-zero growth rate near carrying capacity with simple exponential growth's ever-accelerating, unbounded growth rate — these are two different growth models with very different long-term behaviors.",
            apTip: "Memorize the logistic differential equation dP/dt = kP(1-P/L) and its key behavioral feature: growth rate is HIGHEST when P is small (relative to L) and near L/2, and growth rate approaches ZERO as P approaches L — this produces the characteristic S-shaped (sigmoid) logistic growth curve, contrasting with simple exponential growth's unbounded J-shaped curve."
          }
        }
      ]
    },
    {
      id: 8,
      name: 'Unit 8: Applications of Integration',
      questions: [
        {
          id: 'calc-8-1', difficulty: 1, type: 'mcq', topic: 'Area Between Curves',
          prompt: "To find the area between two curves f(x) and g(x) (where f(x) ≥ g(x)) from x=a to x=b, which integral setup is correct?",
          choices: ['∫ from a to b of [f(x) + g(x)] dx', '∫ from a to b of [f(x) - g(x)] dx, integrating the difference between the top function and the bottom function', '∫ from a to b of f(x)dx only, ignoring g(x) entirely', '∫ from a to b of [g(x) - f(x)] dx'],
          correct: 1,
          explanation: {
            correct: "The area between two curves (where f(x) is the TOP curve, ≥ g(x), the bottom curve) is found by integrating their DIFFERENCE, top minus bottom: ∫[a to b] [f(x)-g(x)] dx — this correctly captures only the area actually between the two curves.",
            wrong: { 0: "Adding the two functions doesn't correctly isolate the area between them; this would give a different, incorrect quantity entirely.", 2: "Ignoring g(x) entirely would give the area between f(x) and the x-axis, not the area specifically between the two curves f(x) and g(x).", 3: "This reverses the subtraction order (bottom minus top instead of top minus bottom), which would give a NEGATIVE result for this scenario, since f(x)≥g(x) throughout the given interval." },
            tempting: "Choice D is tempting since it's easy to accidentally subtract in the wrong order, but since f(x) is specified as the TOP function (f≥g), the correct order is top minus bottom (f-g), not bottom minus top.",
            commonMistake: "Subtracting in the wrong order (bottom minus top instead of top minus bottom), which produces a negative value for the area instead of the correct positive area value.",
            apTip: "Always identify which function is on TOP (has the larger y-value) over the relevant interval BEFORE setting up the integral, and subtract bottom FROM top (top - bottom) — sketching a quick graph of both functions helps confirm which one is actually on top before integrating."
          }
        },
        {
          id: 'calc-8-2', difficulty: 2, type: 'mcq', topic: 'Average Value of a Function',
          prompt: "The average value of a function f(x) on the interval [a, b] is given by which formula?",
          choices: ['f(b) - f(a)', '(1/(b-a)) · ∫ from a to b of f(x)dx', '∫ from a to b of f(x)dx, with no additional factor', '(b-a) · ∫ from a to b of f(x)dx'],
          correct: 1,
          explanation: {
            correct: "The average value of a function over [a,b] is defined as (1/(b-a)) times the definite integral of f over that interval: Average Value = (1/(b-a))∫[a to b]f(x)dx — this divides the total accumulated 'area' by the width of the interval, analogous to finding an average.",
            wrong: { 0: "This describes the total CHANGE in f (using the Fundamental Theorem of Calculus's related concept), not the average VALUE of f over the interval — a different, though related, calculus concept.", 2: "This gives the total signed AREA under the curve, but without dividing by the interval width (b-a), it doesn't represent an AVERAGE value — it's simply the accumulated total, not normalized by interval length.", 3: "This multiplies by (b-a) instead of correctly dividing by it, which is the exact opposite (and incorrect) operation for finding an average value." },
            tempting: "Choice C is tempting because the definite integral itself is a key part of the formula, but forgetting the essential division by (b-a) leaves just the total accumulated area, not a properly normalized AVERAGE value.",
            commonMistake: "Forgetting to divide by the interval width (b-a) when calculating average value, leaving just the raw definite integral (total area) instead of the properly normalized average.",
            apTip: "Memorize the average value formula explicitly as (1/(b-a))∫[a to b]f(x)dx, and connect it conceptually to averaging: just as you'd sum values and divide by how many there are for a discrete average, this formula 'sums' (integrates) continuous values and divides by the interval's width."
          }
        },
        {
          id: 'calc-8-3', difficulty: 2, type: 'mcq', topic: 'Volume by Disks/Washers',
          prompt: "To find the volume of a solid formed by rotating the region under f(x) (above the x-axis) around the x-axis, from x=a to x=b, using the disk method, which integral setup is correct?",
          choices: ['∫ from a to b of f(x)dx', '∫ from a to b of π[f(x)]² dx, since each cross-sectional disk has area π(radius)², with radius = f(x)', '∫ from a to b of 2πf(x)dx', 'π · ∫ from a to b of f(x)dx'],
          correct: 1,
          explanation: {
            correct: "The disk method finds volume by integrating the area of circular cross-sectional disks perpendicular to the axis of rotation; each disk has radius f(x) (the distance from the axis to the curve) and area π[f(x)]², so the volume is ∫[a to b] π[f(x)]² dx.",
            wrong: { 0: "This is simply the definite integral of f(x) itself (representing an AREA, not a volume), missing both the squaring of f(x) and the π factor required for the disk method's volume formula.", 2: "This uses 2πf(x) (resembling a formula associated with the shell method, though even that isn't quite right as written here) rather than the correct disk method formula π[f(x)]²; the disk method specifically requires squaring the radius.", 3: "This includes π but forgets to SQUARE f(x) (the radius) before integrating; area of a circular cross-section requires π×radius², not just π×radius." },
            tempting: "Choice D is tempting because it includes the correct π factor, but omits the crucial squaring of f(x) that's required to correctly represent the AREA of each circular cross-sectional disk (πr²).",
            commonMistake: "Forgetting to SQUARE the radius function f(x) before integrating (since circular area is πr², not just πr), a very common error in disk/washer method problems.",
            apTip: "Memorize the disk method volume formula precisely as V = π∫[a to b][f(x)]²dx, always explicitly squaring the radius function BEFORE integrating — for the washer method (with an inner and outer radius), remember to square EACH radius separately and subtract: V = π∫[a to b]([R(x)]² - [r(x)]²)dx."
          }
        },
        {
          id: 'calc-8-4', difficulty: 3, type: 'mcq', topic: 'Volume with Known Cross-Sections',
          prompt: "A solid has a base region in the xy-plane, and cross-sections perpendicular to the x-axis are squares. If s(x) represents the side length of each square cross-section at position x, which integral gives the volume of the solid?",
          choices: ['∫ from a to b of s(x) dx', '∫ from a to b of [s(x)]² dx, since the area of each square cross-section is (side length)², and integrating this area function gives the total volume', '∫ from a to b of 4s(x) dx', '∫ from a to b of πs(x)² dx'],
          correct: 1,
          explanation: {
            correct: "For solids with known cross-sections, volume is found by integrating the cross-sectional AREA function; since each cross-section here is a square with side length s(x), its area is [s(x)]², giving volume = ∫[a to b][s(x)]²dx.",
            wrong: { 0: "This uses s(x) alone (just the side length) instead of correctly squaring it to get the square's AREA, which is what must be integrated to find volume.", 2: "This incorrectly uses the PERIMETER-like factor of 4 (as if finding a square's perimeter, 4×side), rather than correctly squaring the side length to find its AREA, which is what's needed for the volume integral.", 3: "This incorrectly applies the DISK method's circular area formula (πr²) to a cross-section that is explicitly described as a SQUARE, not a circle; different cross-sectional shapes require their own correct area formulas." },
            tempting: "Choice D is a very common trap for students who've just learned the disk method and default to using its circular-area formula (πr²) even when the problem explicitly specifies a different cross-sectional shape (like a square here).",
            commonMistake: "Applying the disk method's circular area formula (πr²) by default, even when a problem explicitly specifies a NON-circular cross-sectional shape (square, triangle, semicircle, etc.), rather than using the correct area formula for that specific shape.",
            apTip: "For known cross-section volume problems, always identify the SPECIFIC shape described (square, equilateral triangle, semicircle, etc.) and use THAT shape's correct area formula (square: side², equilateral triangle: (√3/4)side², semicircle: (1/2)πr²) — never default to the disk method's circular formula unless the cross-sections are explicitly circular."
          }
        },
        {
          id: 'calc-8-5', difficulty: 4, type: 'mcq', topic: 'Motion: Position from Velocity via Integration',
          prompt: "A particle's velocity is given by v(t) = 3t² - 6t. If the particle\'s position at t=0 is s(0)=2, what is the particle\'s position at t=2?",
          choices: ['4', '2, since position doesn\'t change', '-2, using s(t) = t³ - 3t² + C, with C=2 (from s(0)=2), giving s(2) = 8 - 12 + 2 = -2', '10'],
          correct: 2,
          explanation: {
            correct: "Position is the antiderivative of velocity: s(t) = ∫v(t)dt = ∫(3t²-6t)dt = t³-3t²+C. Using s(0)=2: 0-0+C=2, so C=2. Thus s(t)=t³-3t²+2. Evaluating at t=2: s(2) = 8 - 12 + 2 = -2.",
            wrong: { 0: "4 doesn't match the correct calculation of 8-12+2=-2; this may result from a sign error or incomplete calculation.", 1: "Position definitely DOES change over this time interval, since velocity is nonzero for most of this interval (except momentarily at specific points); this choice incorrectly assumes no motion occurs at all.", 3: "10 doesn't match the correct antiderivative calculation; this may result from a significant sign or arithmetic error, such as adding instead of properly combining terms with correct signs." },
            tempting: "None of the distractors are especially close if the antiderivative and initial condition are applied correctly and completely, but sign errors when integrating (especially with the -6t term) are a plausible source of error.",
            commonMistake: "Sign errors when finding the antiderivative of -6t (should become -3t², not +3t² or another incorrect sign/coefficient combination), or forgetting to apply the given initial condition to solve for C.",
            apTip: "For motion problems, always find position by taking the antiderivative of velocity (remembering the '+C'), then use the GIVEN initial position value to solve for that specific C — only after finding the complete particular solution (with C determined) should you evaluate at the requested time value."
          }
        },
        {
          id: 'calc-8-6', difficulty: 5, type: 'mcq', topic: 'Total Distance vs. Displacement via Integration',
          prompt: "A particle\'s velocity is v(t) = t² - 4 for 0 ≤ t ≤ 3. What is the TOTAL DISTANCE traveled by the particle over this interval (not just displacement)?",
          choices: ['∫ from 0 to 3 of (t²-4)dt directly, without considering sign changes', 'The integral must be split at t=2 (where v(t)=0, changing sign), computing ∫|v(t)|dt as the sum of separate absolute-value integrals over [0,2] and [2,3], since distance requires accounting for direction changes', 'Total distance always equals displacement for any velocity function', 'Total distance is always zero if the particle returns to its starting position'],
          correct: 1,
          explanation: {
            correct: "Since v(t)=t²-4=0 at t=2 (within the given interval), the particle changes direction at this point; total distance requires integrating the ABSOLUTE VALUE of velocity, which means splitting the integral at t=2 and taking the absolute value of each piece (since velocity is negative on [0,2] and positive on [2,3]) before summing: Total Distance = |∫[0 to 2]v(t)dt| + |∫[2 to 3]v(t)dt|.",
            wrong: { 0: "Simply integrating v(t) directly over the whole interval WITHOUT accounting for the sign change gives DISPLACEMENT (net position change), not total distance — when velocity changes sign, this direct integral can undercount the actual total distance traveled, since positive and negative contributions partially cancel out.", 2: "Total distance equals displacement ONLY when velocity doesn't change sign (doesn't change direction) over the interval; when velocity DOES change sign (as it does here, at t=2), distance and displacement will generally differ, with distance being greater than or equal to the magnitude of displacement.", 3: "Returning to the starting position means displacement is zero, but total DISTANCE traveled (how much ground was actually covered, regardless of direction) is generally nonzero whenever the particle actually moved at all — these are two different quantities that shouldn't be conflated." },
            tempting: "Choice A is the most common error — treating total distance the same as displacement (a direct, un-split integral) without checking whether velocity changes sign (direction) anywhere within the interval, which specifically requires splitting the integral and taking absolute values.",
            commonMistake: "Not checking whether velocity changes sign within the given interval before computing total distance, leading to computing displacement (direct integral) instead of the required total distance (integral of |v(t)|, split at sign-change points).",
            apTip: "For total distance problems, ALWAYS first find where v(t)=0 within the given interval (these are the potential direction-change points), split the integral at these points, take the ABSOLUTE VALUE of each resulting piece separately (since each piece might be negative before taking absolute value), and then SUM these absolute values — this differs fundamentally from simply integrating v(t) directly over the whole interval, which would give displacement instead."
          }
        }
      ]
    }
  ],
  frqs: [
    {
      id: 'calc-frq-1', difficulty: 4, unit: 2,
      prompt: "Let f(x) = x³ - 6x² + 9x + 1.\n\n(a) Find f'(x).\n(b) Find all critical points of f (values of x where f'(x) = 0 or is undefined).\n(c) Use the first derivative test to classify each critical point as a local maximum, local minimum, or neither.",
      rubricPoints: [
        "Correctly finds f'(x) = 3x² - 12x + 9 using the power rule (1 pt)",
        "Correctly factors/solves f'(x) = 0 to find critical points x = 1 and x = 3 (1 pt)",
        "Correctly evaluates the sign of f'(x) in the intervals around each critical point (e.g., testing x=0, x=2, x=4) (1 pt)",
        "Correctly classifies x=1 as a local maximum (f' changes from + to -) (1 pt)",
        "Correctly classifies x=3 as a local minimum (f' changes from - to +) (1 pt)"
      ],
      sampleResponse: "(a) f'(x) = 3x² - 12x + 9.\n(b) Setting f'(x) = 0: 3x² - 12x + 9 = 0, dividing by 3: x² - 4x + 3 = 0, factoring: (x-1)(x-3) = 0, so x = 1 and x = 3. f'(x) is a polynomial, so it's defined everywhere; these are the only critical points.\n(c) Testing intervals: at x=0, f'(0) = 9 > 0 (positive). At x=2, f'(2) = 3(4)-12(2)+9 = 12-24+9 = -3 < 0 (negative). At x=4, f'(4) = 3(16)-12(4)+9 = 48-48+9 = 9 > 0 (positive). Since f' changes from positive to negative at x=1, f has a local maximum at x=1. Since f' changes from negative to positive at x=3, f has a local minimum at x=3."
    },
    {
      id: 'calc-frq-2', difficulty: 5, unit: 5,
      prompt: "A rectangular box with a square base (side length x) and no top is to be constructed with a volume of 32 cubic meters. Let x be the side length of the square base and h be the height.\n\n(a) Write an equation relating x, h, and the volume constraint.\n(b) Write the surface area S (base plus four sides, no top) as a function of x alone.\n(c) Find the value of x that minimizes the surface area, and find the minimum surface area.",
      rubricPoints: [
        "Correctly writes the volume constraint: x²h = 32 (1 pt)",
        "Correctly solves for h in terms of x: h = 32/x² (1 pt)",
        "Correctly writes surface area S = x² + 4xh, then substitutes to get S(x) = x² + 128/x (1 pt)",
        "Correctly takes the derivative S'(x) = 2x - 128/x², sets it to 0, and solves to find x = 4 (1 pt)",
        "Correctly verifies this is a minimum (e.g., via second derivative test) and calculates the minimum surface area S(4) = 16 + 32 = 48 square meters (1 pt)"
      ],
      sampleResponse: "(a) Volume = x²h = 32.\n(b) Solving for h: h = 32/x². Surface area (square base, no top, four rectangular sides) = x² + 4xh = x² + 4x(32/x²) = x² + 128/x.\n(c) S'(x) = 2x - 128/x². Setting S'(x)=0: 2x = 128/x², so 2x³ = 128, x³ = 64, x = 4. Checking S''(x) = 2 + 256/x³, which at x=4 gives 2 + 256/64 = 2+4 = 6 > 0, confirming a minimum. Minimum surface area: S(4) = 4² + 128/4 = 16 + 32 = 48 square meters."
    },
    {
      id: 'calc-frq-3', difficulty: 3, unit: 1,
      prompt: "Let f(x) = (x² - 9)/(x - 3) for x ≠ 3, and f(3) = 5.\n\n(a) Determine whether f is continuous at x = 3, showing your work.\n(b) If f is not continuous, classify the type of discontinuity present.\n(c) Explain what value f(3) would need to be for the function to be continuous at x=3.",
      rubricPoints: [
        "Correctly simplifies the limit: lim(x→3) (x²-9)/(x-3) = lim(x→3)(x+3) = 6 (1 pt)",
        "Correctly compares this limit (6) to the given f(3)=5, concluding the function is NOT continuous, since they don't match (1 pt)",
        "Correctly classifies this as a removable discontinuity (since the limit exists but doesn't match the function's defined value) (1 pt)",
        "Correctly states that f(3) would need to equal 6 for continuity (1 pt)"
      ],
      sampleResponse: "(a) lim(x→3) (x²-9)/(x-3) = lim(x→3) (x-3)(x+3)/(x-3) = lim(x→3)(x+3) = 6. Since f(3) is defined as 5, but the limit as x→3 is 6, these don't match, so f is NOT continuous at x=3.\n(b) This is a removable discontinuity, since the limit exists (6) but doesn't match the function's actual defined value (5) at that point.\n(c) For f to be continuous at x=3, f(3) would need to equal 6 (matching the limit value)."
    },
    {
      id: 'calc-frq-4', difficulty: 4, unit: 3,
      prompt: "Let f(x) = sin(x²). \n\n(a) Find f'(x) using the chain rule.\n(b) Let g(x) = x² + 1 and h(x) = √x. Find (h∘g)'(x) using the chain rule.\n(c) Explain, in general terms, when the chain rule must be applied when differentiating a function.",
      rubricPoints: [
        "Correctly finds f'(x) = cos(x²) · 2x (1 pt)",
        "Correctly finds (h∘g)(x) = √(x²+1), then correctly differentiates using chain rule: (1/(2√(x²+1))) · 2x = x/√(x²+1) (1 pt)",
        "Correctly explains the chain rule is needed whenever differentiating a composite function (a function within a function) (1 pt)"
      ],
      sampleResponse: "(a) f'(x) = cos(x²) · 2x = 2x·cos(x²).\n(b) (h∘g)(x) = h(g(x)) = √(x²+1). Using the chain rule: (h∘g)'(x) = (1/(2√(x²+1))) · 2x = x/√(x²+1).\n(c) The chain rule must be applied whenever differentiating a composite function — that is, a function nested inside another function — since the derivative of the outer function must be multiplied by the derivative of the inner function to correctly account for how the inner function's rate of change affects the overall composite rate of change."
    },
    {
      id: 'calc-frq-5', difficulty: 4, unit: 4,
      prompt: "Water is draining from a conical tank (point down) at a rate of 3 cubic meters per minute. The tank has a height of 10 m and a radius of 5 m at the top (V = (1/3)πr²h, and r/h = 1/2 for this cone's proportions).\n\n(a) Express r in terms of h, and rewrite V as a function of h alone.\n(b) Find dV/dh, then use related rates to find dh/dt when h = 4 m.\n(c) Explain why dh/dt becomes more negative (water level drops faster) as h decreases, even though the drainage rate dV/dt is constant.",
      rubricPoints: [
        "Correctly finds r = h/2 from the given proportion, and substitutes into V = (1/3)π(h/2)²h = (π/12)h³ (1 pt)",
        "Correctly finds dV/dh = (π/4)h², then uses dV/dt = dV/dh · dh/dt to solve for dh/dt at h=4 (1 pt)",
        "Correctly explains that as h decreases, the cross-sectional area (and thus dV/dh) decreases, so for the same constant dV/dt, dh/dt must become more negative to compensate (1 pt)"
      ],
      sampleResponse: "(a) Since r/h = 1/2, r = h/2. V = (1/3)πr²h = (1/3)π(h/2)²h = (1/3)π(h²/4)h = (π/12)h³.\n(b) dV/dh = (π/12)(3h²) = (π/4)h². Given dV/dt = -3 (draining), and dV/dt = (dV/dh)(dh/dt): -3 = (π/4)(4²)(dh/dt) = 4π(dh/dt). So dh/dt = -3/(4π) ≈ -0.239 m/min at h=4.\n(c) As h decreases, the cross-sectional area of the cone at that height also decreases (since the cone narrows toward the bottom), meaning dV/dh (which depends on h²) becomes smaller; since dV/dt is constant, and dh/dt = (dV/dt)/(dV/dh), a smaller dV/dh means dh/dt must become more negative (larger in magnitude) to still account for the same constant volume outflow rate."
    },
    {
      id: 'calc-frq-6', difficulty: 3, unit: 5,
      prompt: "Let f(x) = x⁴ - 4x² + 2.\n\n(a) Find all critical points of f.\n(b) Use the second derivative test to classify each critical point as a local max, local min, or neither.\n(c) Determine the intervals where f is concave up and concave down.",
      rubricPoints: [
        "Correctly finds f'(x) = 4x³-8x, sets to 0, and solves for critical points x=0, x=√2, x=-√2 (1 pt)",
        "Correctly finds f''(x) = 12x²-8 and applies the second derivative test at each critical point to classify them (1 pt)",
        "Correctly finds inflection points by setting f''(x)=0, and correctly identifies concave up/down intervals (1 pt)"
      ],
      sampleResponse: "(a) f'(x) = 4x³ - 8x = 4x(x²-2). Setting to 0: x=0, x=√2, x=-√2.\n(b) f''(x) = 12x²-8. At x=0: f''(0)=-8<0, local max. At x=√2: f''(√2)=12(2)-8=16>0, local min. At x=-√2: f''(-√2)=16>0, local min.\n(c) Setting f''(x)=0: 12x²=8, x²=2/3, x=±√(2/3). f is concave down on (-√(2/3), √(2/3)) (where f''<0) and concave up on (-∞,-√(2/3)) and (√(2/3),∞) (where f''>0)."
    },
    {
      id: 'calc-frq-7', difficulty: 4, unit: 6,
      prompt: "Let f(x) = 3x² and consider the definite integral ∫ from 1 to 4 of f(x)dx.\n\n(a) Evaluate this definite integral using the Fundamental Theorem of Calculus.\n(b) Interpret this integral's value in terms of area.\n(c) Find the average value of f(x) on the interval [1,4].",
      rubricPoints: [
        "Correctly finds the antiderivative F(x)=x³ and evaluates F(4)-F(1) = 64-1 = 63 (1 pt)",
        "Correctly interprets this as the area under the curve f(x)=3x² between x=1 and x=4 (1 pt)",
        "Correctly calculates average value = (1/(4-1))∫[1 to 4]f(x)dx = 63/3 = 21 (1 pt)"
      ],
      sampleResponse: "(a) Antiderivative: F(x) = x³. ∫[1 to 4] 3x² dx = F(4)-F(1) = 4³-1³ = 64-1 = 63.\n(b) This value (63) represents the area of the region between the curve f(x)=3x² and the x-axis, from x=1 to x=4.\n(c) Average value = (1/(4-1)) × 63 = 63/3 = 21."
    },
    {
      id: 'calc-frq-8', difficulty: 4, unit: 7,
      prompt: "A population grows according to dP/dt = 0.05P, with P(0) = 200.\n\n(a) Solve this differential equation to find P(t).\n(b) Calculate the population at t=10.\n(c) Calculate how long it takes for the population to double, and explain the significance of this value.",
      rubricPoints: [
        "Correctly solves using separation of variables to get P(t) = 200e^(0.05t) (1 pt)",
        "Correctly calculates P(10) = 200e^0.5 ≈ 329.7 (1 pt)",
        "Correctly sets up 400=200e^(0.05t) and solves for t = ln(2)/0.05 ≈ 13.86, identifying this as the doubling time, which is constant regardless of starting population for exponential growth (1 pt)"
      ],
      sampleResponse: "(a) Separating variables: dP/P = 0.05dt. Integrating: ln|P| = 0.05t + C. Exponentiating: P = P₀e^(0.05t). Using P(0)=200: P(t) = 200e^(0.05t).\n(b) P(10) = 200e^(0.05×10) = 200e^0.5 ≈ 200(1.6487) ≈ 329.7.\n(c) Setting 400 = 200e^(0.05t): 2 = e^(0.05t), ln(2) = 0.05t, t = ln(2)/0.05 ≈ 13.86. This is the doubling time — for exponential growth of the form P=P₀e^(kt), the doubling time is constant (ln(2)/k) regardless of the starting population size."
    },
    {
      id: 'calc-frq-9', difficulty: 4, unit: 8,
      prompt: "Find the area of the region enclosed between f(x) = x² and g(x) = 2x, for x between their two intersection points.\n\n(a) Find the x-values where the two curves intersect.\n(b) Determine which function is on top within this interval.\n(c) Set up and evaluate the definite integral for the enclosed area.",
      rubricPoints: [
        "Correctly sets x²=2x, solves to find intersections at x=0 and x=2 (1 pt)",
        "Correctly determines g(x)=2x is on top (greater) within (0,2), e.g., by testing x=1: g(1)=2 > f(1)=1 (1 pt)",
        "Correctly sets up ∫[0 to 2](2x-x²)dx and evaluates to get 4/3 (1 pt)"
      ],
      sampleResponse: "(a) Setting x²=2x: x²-2x=0, x(x-2)=0, so x=0 and x=2.\n(b) Testing x=1: g(1)=2(1)=2, f(1)=1²=1. Since g(1)>f(1), g(x)=2x is on top within (0,2).\n(c) Area = ∫[0 to 2](2x - x²)dx = [x² - x³/3] from 0 to 2 = (4 - 8/3) - (0-0) = 12/3-8/3 = 4/3."
    },
    {
      id: 'calc-frq-10', difficulty: 3, unit: 1,
      prompt: "Evaluate lim(x→2) (x³-8)/(x-2) using algebraic techniques, and explain why direct substitution alone is insufficient.",
      rubricPoints: [
        "Recognizes direct substitution gives the indeterminate form 0/0 (1 pt)",
        "Correctly factors x³-8 as (x-2)(x²+2x+4) (1 pt)",
        "Correctly cancels (x-2) and evaluates the simplified limit at x=2, getting 12 (1 pt)"
      ],
      sampleResponse: "Direct substitution gives (2³-8)/(2-2) = 0/0, an indeterminate form, so it doesn't directly give the answer — it signals that factoring is needed. Factoring: x³-8 = (x-2)(x²+2x+4) (difference of cubes). So (x³-8)/(x-2) = (x-2)(x²+2x+4)/(x-2) = x²+2x+4 for x≠2. Evaluating at x=2: 4+4+4=12. So the limit is 12."
    },
    {
      id: 'calc-frq-11', difficulty: 3, unit: 2,
      prompt: "Let f(x) = 4x³ - 6x + 1. Using the limit definition of the derivative, set up (but do not necessarily fully simplify) the expression for f'(x), then state the result you would expect to get by instead applying the power rule.",
      rubricPoints: [
        "Correctly sets up the limit definition: f'(x) = lim(h→0) [f(x+h)-f(x)]/h (1 pt)",
        "Correctly substitutes f(x+h) and f(x) into this definition using the given function (1 pt)",
        "Correctly states the power-rule-derived result: f'(x) = 12x² - 6 (1 pt)"
      ],
      sampleResponse: "Limit definition: f'(x) = lim(h→0) [f(x+h)-f(x)]/h = lim(h→0) [4(x+h)³-6(x+h)+1 - (4x³-6x+1)]/h. Using the power rule instead (a faster method giving the same result): f'(x) = 12x² - 6."
    },
    {
      id: 'calc-frq-12', difficulty: 4, unit: 3,
      prompt: "Let y = ln(x² + 1). Find dy/dx using the chain rule, and evaluate it at x = 2.",
      rubricPoints: [
        "Correctly identifies the outer function (ln u, derivative 1/u) and inner function (u=x²+1, derivative 2x) (1 pt)",
        "Correctly applies the chain rule: dy/dx = (1/(x²+1)) · 2x = 2x/(x²+1) (1 pt)",
        "Correctly evaluates at x=2: 4/5 (1 pt)"
      ],
      sampleResponse: "dy/dx = (1/(x²+1)) · 2x = 2x/(x²+1). At x=2: dy/dx = 2(2)/(2²+1) = 4/5."
    },
    {
      id: 'calc-frq-13', difficulty: 4, unit: 4,
      prompt: "A particle moves along the x-axis with position s(t) = t³ - 6t² + 9t.\n\n(a) Find the particle's velocity function v(t).\n(b) Find all times when the particle is at rest.\n(c) Determine whether the particle is speeding up or slowing down at t=1.",
      rubricPoints: [
        "Correctly finds v(t) = 3t²-12t+9 (1 pt)",
        "Correctly sets v(t)=0 and solves to find t=1 and t=3 (1 pt)",
        "Correctly evaluates v(1) and a(1) (a(t)=6t-12), determines their signs, and correctly concludes speeding up or slowing down based on whether they match or differ (1 pt)"
      ],
      sampleResponse: "(a) v(t) = s'(t) = 3t² - 12t + 9.\n(b) Setting v(t)=0: 3t²-12t+9=0, dividing by 3: t²-4t+3=0, factoring: (t-1)(t-3)=0, so t=1 and t=3.\n(c) At t=1, the particle is at rest (v(1)=0, from part b), so 'speeding up or slowing down' isn't quite applicable at this exact instant; checking just after, at t=1.1: v(1.1)=3(1.21)-12(1.1)+9=3.63-13.2+9=-0.57 (negative) and a(1.1)=6(1.1)-12=-5.4 (negative) — same sign, so the particle is beginning to speed up (in the negative direction) just after t=1."
    },
    {
      id: 'calc-frq-14', difficulty: 3, unit: 6,
      prompt: "Let g(x) = ∫ from 2 to x of (t² - 1) dt.\n\n(a) Find g'(x) using the Fundamental Theorem of Calculus.\n(b) Find g(2).\n(c) Evaluate g(3) by computing the definite integral directly.",
      rubricPoints: [
        "Correctly applies FTC Part 1: g'(x) = x² - 1 (1 pt)",
        "Correctly evaluates g(2) = 0 (integral from 2 to 2) (1 pt)",
        "Correctly evaluates g(3) = ∫[2 to 3](t²-1)dt = [t³/3 - t] from 2 to 3 = (9-3)-(8/3-2) = 6 - 2/3 = 16/3 (1 pt)"
      ],
      sampleResponse: "(a) By FTC Part 1: g'(x) = x² - 1.\n(b) g(2) = ∫[2 to 2](t²-1)dt = 0, since the integral from a point to itself is always 0.\n(c) g(3) = ∫[2 to 3](t²-1)dt = [t³/3 - t] from 2 to 3 = (27/3-3)-(8/3-2) = (9-3)-(8/3-2) = 6 - (8/3-6/3) = 6 - 2/3 = 16/3."
    },
    {
      id: 'calc-frq-15', difficulty: 4, unit: 7,
      prompt: "A tank contains 100 liters of water with 5 kg of dissolved salt. Pure water flows in and the mixture flows out such that the amount of salt S(t) satisfies dS/dt = -0.02S.\n\n(a) Solve for S(t) given S(0)=5.\n(b) Calculate the amount of salt remaining after 20 minutes.\n(c) Explain what happens to S(t) as t approaches infinity, and why this makes physical sense.",
      rubricPoints: [
        "Correctly solves using separation of variables: S(t)=5e^(-0.02t) (1 pt)",
        "Correctly calculates S(20)=5e^(-0.4)≈3.35 kg (1 pt)",
        "Correctly explains S(t)→0 as t→∞, since salt is continuously being flushed out by incoming pure water with no salt being added (1 pt)"
      ],
      sampleResponse: "(a) Separating variables: dS/S=-0.02dt. Integrating: ln|S|=-0.02t+C. Exponentiating with S(0)=5: S(t)=5e^(-0.02t).\n(b) S(20)=5e^(-0.02×20)=5e^(-0.4)≈5(0.6703)≈3.35 kg.\n(c) As t→∞, S(t)→0, since e^(-0.02t)→0. This makes physical sense because pure water (containing no salt) is continuously flowing in while the salt mixture flows out, so the total salt in the tank should approach zero as this process continues indefinitely."
    },
    {
      id: 'calc-frq-16', difficulty: 4, unit: 8,
      prompt: "The region bounded by y=√x, the x-axis, and x=4 is rotated around the x-axis to form a solid.\n\n(a) Set up the definite integral for the volume using the disk method.\n(b) Evaluate this integral to find the volume.\n(c) Explain why the disk method is appropriate for this specific region (rotated around the x-axis, bounded below by the x-axis).",
      rubricPoints: [
        "Correctly sets up V = π∫[0 to 4](√x)²dx = π∫[0 to 4] x dx (1 pt)",
        "Correctly evaluates: π[x²/2] from 0 to 4 = π(8-0) = 8π (1 pt)",
        "Correctly explains the disk method applies because the region touches the axis of rotation directly (no gap/hole), forming solid circular disks rather than washers (1 pt)"
      ],
      sampleResponse: "(a) V = π∫[0 to 4] (√x)² dx = π∫[0 to 4] x dx.\n(b) V = π[x²/2] from 0 to 4 = π(16/2 - 0) = 8π.\n(c) The disk method is appropriate here because the region is bounded below by the x-axis itself (the axis of rotation), meaning each cross-sectional slice perpendicular to the axis forms a solid, filled-in circular disk (radius = √x) with no inner gap or hole, unlike a washer-method scenario where there would be a hollow center."
    }
  ]
}
