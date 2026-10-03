// AP Physics C: Mechanics — real College Board unit numbers/names used for
// authenticity. Started with the first 3 of 7 units; more to be added in
// follow-up passes. Unlike algebra-based Physics 1 (see physics1.js), this
// subject is calculus-based: expect derivatives, integrals, and non-constant
// forces/accelerations throughout.

export const physicsCMech = {
  id: 'physics-c-mech',
  name: 'AP Physics C: Mechanics',
  icon: '🧲',
  accent: 'moss',
  units: [
    {
      id: 1,
      name: 'Unit 1: Kinematics',
      questions: [
        {
          id: 'pcm-1-1', difficulty: 2, type: 'mcq', topic: 'Position, Velocity, and Acceleration via Calculus',
          prompt: "A particle's position is given by x(t) = 2t³ - 3t² + 4 (in meters, t in seconds). What is the particle's velocity at t = 2 seconds?",
          choices: ['12 m/s', '24 m/s', '6 m/s', '8 m/s'],
          correct: 0,
          explanation: {
            correct: "Velocity is the derivative of position: v(t) = x'(t) = 6t² - 6t. At t=2: v(2) = 6(4) - 6(2) = 24 - 12 = 12 m/s.",
            wrong: { 1: "This results from evaluating only the first term of the derivative (6t² at t=2 = 24) without subtracting the second term (6t).", 2: "This could result from an incomplete or incorrect differentiation, such as differentiating only part of the position function.", 3: "This might come from a calculation error when substituting t=2 into the correctly differentiated velocity function." },
            tempting: "Choice B is tempting because it's the value of the FIRST term of the correctly-differentiated velocity function alone, without subtracting the second term.",
            commonMistake: "Making an arithmetic or differentiation error when finding v(t) = x'(t), such as forgetting to differentiate every term of the position function or subtract correctly once evaluating at the given time.",
            apTip: "In calculus-based kinematics: velocity is the derivative of position (v(t) = x'(t)), and acceleration is the derivative of velocity (a(t) = v'(t) = x''(t)). Always differentiate the ENTIRE position function term-by-term before substituting the specific time value."
          }
        },
        {
          id: 'pcm-1-2', difficulty: 3, type: 'mcq', topic: 'Finding Position from Velocity via Integration',
          prompt: "A particle has velocity v(t) = 6t² - 4t (m/s) and starts at position x(0) = 5 m. What is the particle's position at t = 1 second?",
          choices: ['5 m', '2 m', '7 m', '0 m'],
          correct: 0,
          explanation: {
            correct: "x(t) = ∫v(t)dt = 2t³ - 2t² + C. Using x(0) = 5: C = 5. So x(1) = 2(1) - 2(1) + 5 = 2 - 2 + 5 = 5 m.",
            wrong: { 1: "This omits adding the initial position constant (C = 5) determined from the given initial condition x(0) = 5, instead reporting only the value of the antiderivative's variable terms.", 2: "This could result from an arithmetic slip, such as incorrectly evaluating 2t³-2t² at t=1 or mis-adding the constant.", 3: "This might come from a sign error or a miscalculated antiderivative, dropping one of the polynomial terms entirely." },
            tempting: "Choice B is tempting because forgetting to solve for and add the integration constant C using the given initial condition is one of the most common errors when integrating to find position.",
            commonMistake: "Forgetting to use the given initial condition to solve for the constant of integration (C) after antidifferentiating velocity to get position — without this step, the position function is incomplete and any subsequent evaluation will be off by exactly that missing constant.",
            apTip: "To find position from velocity: x(t) = ∫v(t)dt + C, where C must be solved for using a given initial condition (like x(0) = 5). Never skip solving for C — an indefinite integral of velocity is only a FAMILY of possible position functions until the specific initial condition pins down the correct one."
          }
        },
        {
          id: 'pcm-1-3', difficulty: 3, type: 'mcq', topic: 'Area Under a Velocity-Time Graph',
          prompt: "The area under a velocity-vs-time graph, between two times t₁ and t₂, represents:",
          choices: ['The displacement of the object between t₁ and t₂', 'The acceleration of the object at time t₂', 'The instantaneous velocity at time t₂', 'The average acceleration between t₁ and t₂'],
          correct: 0,
          explanation: {
            correct: "The area under a v-t graph is the integral of velocity with respect to time, which is exactly the definition of displacement: Δx = ∫v dt.",
            wrong: { 1: "Acceleration is represented by the SLOPE of a velocity-time graph, not the area underneath it.", 2: "Instantaneous velocity is read directly as the height/y-value of the graph AT a specific time, not from the area beneath the curve over an interval.", 3: "Average acceleration is also found from the SLOPE (specifically, Δv/Δt), not from the area under the curve." },
            tempting: "Choice D is tempting because both area-under-curve and slope-based quantities involve a 'between t₁ and t₂' framing, but they represent fundamentally different physical quantities (displacement vs. acceleration).",
            commonMistake: "Confusing what slope versus area represent on a velocity-time graph — remember: SLOPE of a v-t graph = acceleration; AREA under a v-t graph = displacement (the integral of velocity with respect to time).",
            apTip: "General calculus-physics graph rule: on any y-vs-t graph, the SLOPE gives the derivative (rate of change) of that quantity, while the AREA under the curve gives the integral (accumulated total change) of that quantity. Applied to a velocity-time graph: slope = acceleration, area = displacement."
          }
        },
        {
          id: 'pcm-1-4', difficulty: 4, type: 'mcq', topic: 'Kinematics with Non-Constant Acceleration',
          prompt: "An object's acceleration is given by a(t) = 6t (m/s²). If the object starts from rest at t=0, what is its velocity at t = 3 seconds?",
          choices: ['27 m/s', '18 m/s', '9 m/s', '54 m/s'],
          correct: 0,
          explanation: {
            correct: "v(t) = ∫a(t)dt = 3t² + C. Since the object starts from rest, v(0) = 0, so C = 0. Then v(3) = 3(3)² = 3(9) = 27 m/s.",
            wrong: { 1: "This could result from incorrectly applying the constant-acceleration formula v=at directly (6×3=18) rather than correctly integrating the non-constant, time-dependent acceleration function.", 2: "This could result from an incomplete integration, such as forgetting to square t after integrating 6t, or another antiderivative error.", 3: "This might come from doubling the correct value or applying an incorrect coefficient during integration." },
            tempting: "Choice B is tempting since it applies the familiar constant-acceleration formula v = at directly, which is INVALID here because the acceleration is NOT constant (it depends on t).",
            commonMistake: "Applying constant-acceleration kinematics formulas (like v = v₀ + at) to a situation where acceleration is explicitly a FUNCTION of time, rather than correctly integrating the given a(t) to find v(t).",
            apTip: "Whenever acceleration is given as a function of time (not a constant number), you MUST integrate to find velocity (v(t) = ∫a(t)dt + C) and integrate again to find position — the simple constant-acceleration kinematics equations only apply when acceleration truly is constant."
          }
        },
        {
          id: 'pcm-1-5', difficulty: 2, type: 'mcq', topic: 'Projectile Motion',
          prompt: "A projectile is launched horizontally from a height h with initial horizontal speed v₀. Which of the following correctly describes its motion, ignoring air resistance?",
          choices: ['Constant horizontal velocity and constant downward acceleration due to gravity', 'Constant horizontal velocity and constant vertical velocity', 'Decreasing horizontal velocity and constant vertical velocity', 'Constant horizontal acceleration and constant vertical acceleration'],
          correct: 0,
          explanation: {
            correct: "With no horizontal force (ignoring air resistance), horizontal velocity stays constant, while gravity provides a constant downward acceleration that continuously changes the vertical velocity.",
            wrong: { 1: "The VERTICAL velocity is not constant — gravity continuously accelerates the projectile downward, causing vertical velocity to increase in magnitude over time.", 2: "Horizontal velocity remains CONSTANT (no horizontal force acts on the projectile, ignoring air resistance) — it is the VERTICAL component that changes due to gravity, not the horizontal one.", 3: "There is no horizontal acceleration at all (ignoring air resistance) — only a constant VERTICAL acceleration due to gravity acts on the projectile." },
            tempting: "Choice C is tempting because it correctly identifies that something stays constant and something changes, but incorrectly assigns which component (horizontal vs. vertical) does which.",
            commonMistake: "Mixing up which component of projectile motion (horizontal vs. vertical) remains constant versus which one changes — horizontal velocity stays CONSTANT (no horizontal force, ignoring air resistance), while vertical velocity continuously changes due to the constant downward acceleration of gravity.",
            apTip: "Projectile motion is the combination of two independent 1-D motions: horizontal (constant velocity, zero acceleration) and vertical (constant downward acceleration g, changing velocity) — analyze each direction completely separately using their own kinematics equations."
          }
        },
        {
          id: 'pcm-1-6', difficulty: 5, type: 'mcq', topic: 'Kinematics with Vector Position Functions',
          prompt: "A particle moves in two dimensions with position vector r(t) = ⟨t², 4t - t²⟩ (in meters). At what time t is the particle's velocity vector horizontal (i.e., its vertical velocity component equals zero)?",
          choices: ['t = 2 s', 't = 4 s', 't = 1 s', 't = 0 s'],
          correct: 0,
          explanation: {
            correct: "Differentiating each component gives v(t) = ⟨2t, 4-2t⟩. Setting the vertical component equal to zero: 4-2t=0, so t=2 s.",
            wrong: { 1: "This uses the coefficient from the original position function's vertical component (4t) directly as the answer, rather than correctly differentiating first and then solving for when that derivative equals zero.", 2: "This could result from an arithmetic slip when solving 4 − 2t = 0, such as dividing incorrectly.", 3: "At t = 0, the vertical velocity component is 4 − 2(0) = 4, which is NOT zero, so this does not satisfy the condition." },
            tempting: "Choice B is tempting because it uses a number (4) directly from the original position function without first correctly differentiating to get the velocity function.",
            commonMistake: "Working directly with the position function's coefficients instead of first differentiating to find the velocity vector, then correctly solving the resulting equation (from the vertical component) for t.",
            apTip: "For vector-valued motion, differentiate EACH component of the position vector separately to get the velocity vector: v(t) = r'(t). To find when velocity is purely horizontal, set the VERTICAL component of v(t) equal to zero and solve for t."
          }
        }
      ]
    },
    {
      id: 2,
      name: 'Unit 2: Force and Translational Dynamics',
      questions: [
        {
          id: 'pcm-2-1', difficulty: 2, type: 'mcq', topic: "Newton's Second Law",
          prompt: "A 4 kg object experiences a net force of 20 N. What is its acceleration?",
          choices: ['5 m/s²', '80 m/s²', '0.2 m/s²', '16 m/s²'],
          correct: 0,
          explanation: {
            correct: "By Newton's second law, a = F_net/m = 20/4 = 5 m/s².",
            wrong: { 1: "This results from multiplying force and mass (20×4=80) instead of dividing force by mass.", 2: "This is the reciprocal of the correct answer (mass/force instead of force/mass).", 3: "This could result from subtracting mass from force (20-4=16) instead of correctly dividing." },
            tempting: "None of the distractors are especially deceptive beyond a standard F=ma arithmetic check.",
            commonMistake: "Performing the wrong arithmetic operation (multiplying, subtracting, or inverting) instead of correctly DIVIDING net force by mass according to Newton's second law, F_net = ma, rearranged as a = F_net/m.",
            apTip: "Newton's second law: F_net = ma. To solve for acceleration, always divide net force by mass (a = F_net/m) — a common error is multiplying instead of dividing, so double-check the algebraic rearrangement."
          }
        },
        {
          id: 'pcm-2-2', difficulty: 4, type: 'mcq', topic: 'Variable Force and Impulse via Integration',
          prompt: "A time-varying force F(t) = 6t² (in Newtons) acts on an object from t=0 to t=3 seconds. What is the impulse delivered to the object over this time interval?",
          choices: ['54 N·s', '18 N·s', '162 N·s', '6 N·s'],
          correct: 0,
          explanation: {
            correct: "Impulse is J = ∫F(t)dt from 0 to 3 = [2t³] from 0 to 3 = 2(27) - 0 = 54 N·s.",
            wrong: { 1: "This could result from evaluating F(t) at only t=3 (6×9=54) and then dividing incorrectly, or another partial calculation rather than correctly integrating over the full interval.", 2: "This could result from treating the force as constant at its final value F(3)=54 N and multiplying by the 3-second duration, rather than correctly integrating the variable force over time.", 3: "This reports just the coefficient of the original force function rather than performing the actual integration and evaluation." },
            tempting: "Choice C is tempting since it results from treating the VARYING force as if it were constant (multiplying the force at the final time, F(3) = 54 N, by the 3-second duration), rather than correctly integrating the changing force over the entire time interval.",
            commonMistake: "Treating a time-VARYING force as if it were constant (multiplying a single force value by the time interval) instead of correctly using the calculus definition of impulse: the definite INTEGRAL of force with respect to time, which properly accounts for the force changing throughout the interval.",
            apTip: "Impulse is defined as J = ∫F(t)dt over the given time interval — this calculus definition is essential whenever force is NOT constant. Only when force is truly constant can you use the simplified formula J = FΔt directly; otherwise, you must integrate."
          }
        },
        {
          id: 'pcm-2-3', difficulty: 3, type: 'mcq', topic: "Newton's Third Law",
          prompt: "A 2 kg block sits on top of a 3 kg block, which rests on a frictionless table. According to Newton's third law, the force the bottom block exerts upward on the top block is:",
          choices: ['Equal in magnitude and opposite in direction to the force the top block exerts downward on the bottom block', 'Equal to the weight of BOTH blocks combined', 'Greater than the force the top block exerts on the bottom block, since the bottom block is heavier', 'Zero, since the table supports all of the weight'],
          correct: 0,
          explanation: {
            correct: "Newton's third law action-reaction pairs act on the two objects in direct contact and are always exactly equal in magnitude and opposite in direction, regardless of mass.",
            wrong: { 1: "Newton's third law describes a specific ACTION-REACTION PAIR between the two blocks in direct contact with each other — it does not require summing the weight of every object in the system, which would confuse this pairwise law with a separate force-balance/equilibrium calculation.", 2: "Newton's third law action-reaction pairs are ALWAYS exactly equal in magnitude, regardless of the relative masses of the two objects involved — the bottom block being heavier does not make its reaction force larger.", 3: "The bottom block DOES exert an upward normal force on the top block (supporting its weight) — this force is not zero, even though the table ultimately supports the combined weight of both blocks through a separate contact force with the bottom block." },
            tempting: "Choice C is tempting because it's intuitive to think a heavier object exerts a 'stronger' force, but Newton's third law pairs are always exactly equal in magnitude by definition, regardless of mass.",
            commonMistake: "Assuming that a heavier or larger object in a Newton's third law action-reaction pair exerts a proportionally larger force than the lighter/smaller object — action-reaction force pairs are ALWAYS exactly equal in magnitude and opposite in direction, regardless of the relative masses involved.",
            apTip: "Newton's third law pairs act on DIFFERENT objects and are always exactly equal in magnitude, opposite in direction: if object A exerts a force on object B, object B exerts an equal and opposite force back on object A — this holds true regardless of the masses, speeds, or any other properties of the two objects."
          }
        },
        {
          id: 'pcm-2-4', difficulty: 4, type: 'mcq', topic: 'Atwood Machine / Systems of Objects',
          prompt: "Two blocks, mass m₁ = 3 kg and m₂ = 5 kg, are connected by a massless string over a frictionless, massless pulley (an Atwood machine). What is the magnitude of the acceleration of the system? (use g = 10 m/s²)",
          choices: ['2.5 m/s²', '10 m/s²', '6.25 m/s²', '1.25 m/s²'],
          correct: 0,
          explanation: {
            correct: "Atwood machine formula: a = (m₂-m₁)g/(m₁+m₂) = (5-3)(10)/(3+5) = 20/8 = 2.5 m/s².",
            wrong: { 1: "This reports the value of g itself, without correctly applying the Atwood machine formula that accounts for both masses.", 2: "This could result from an incorrect formula, such as using only one mass in the denominator instead of the SUM of both masses.", 3: "This could result from a factor-of-2 arithmetic error, such as dividing the correct answer in half." },
            tempting: "None of the distractors are especially deceptive, mostly a formula/arithmetic check.",
            commonMistake: "Misremembering or misapplying the Atwood machine acceleration formula, a = (m₂ − m₁)g / (m₁ + m₂) — particularly forgetting to divide by the SUM of both masses, or misidentifying which mass difference goes in the numerator.",
            apTip: "Atwood machine formula: a = (m₂ − m₁)g / (m₁ + m₂), where m₂ is the heavier mass. This comes from applying Newton's second law to each block individually (T − m₁g = m₁a and m₂g − T = m₂a) and then adding the two equations to eliminate the tension T — know how to derive this from scratch, not just recall the formula."
          }
        },
        {
          id: 'pcm-2-5', difficulty: 3, type: 'mcq', topic: 'Friction and Newton\'s Second Law',
          prompt: "A 10 kg box is pulled horizontally across a floor with a coefficient of kinetic friction μₖ = 0.2, by a horizontal force of 30 N. What is the box's acceleration? (use g = 10 m/s²)",
          choices: ['1 m/s²', '3 m/s²', '0.8 m/s²', '5 m/s²'],
          correct: 0,
          explanation: {
            correct: "Friction force = μₖmg = 0.2(10)(10) = 20 N. Net force = 30 - 20 = 10 N. a = F_net/m = 10/10 = 1 m/s².",
            wrong: { 1: "This results from ignoring the friction force entirely and simply dividing the applied force by mass (30/10=3), rather than first subtracting the opposing friction force to find the net force.", 2: "This could result from a calculation error in finding the friction force itself, such as using an incorrect normal force or coefficient value.", 3: "This could result from dividing by an incorrect mass value or another arithmetic slip." },
            tempting: "Choice B is tempting because it's the answer a student gets if they forget that FRICTION opposes the applied force and must be subtracted before applying Newton's second law.",
            commonMistake: "Forgetting to first calculate and subtract the opposing kinetic friction force (f = μₖN) from the applied force to find the correct NET force, before applying Newton's second law (a = F_net/m).",
            apTip: "Multi-step Newton's second law problems with friction: (1) calculate the friction force using f = μₖN (where N is the normal force, often equal to mg on a flat horizontal surface), (2) find the NET force by combining the applied force and friction (which act in opposite directions), (3) THEN divide by mass to find acceleration — never skip straight to dividing the applied force alone by mass."
          }
        },
        {
          id: 'pcm-2-6', difficulty: 5, type: 'mcq', topic: "Newton's Second Law with Position-Dependent Force",
          prompt: "A 2 kg object experiences a force F(x) = -8x (in Newtons, x in meters — this is a linear restoring force like a spring). Using Newton's second law, what is the object's acceleration when x = 3 m?",
          choices: ['-12 m/s²', '-24 m/s²', '-4 m/s²', '6 m/s²'],
          correct: 0,
          explanation: {
            correct: "F(3) = -8(3) = -24 N. Then a = F/m = -24/2 = -12 m/s².",
            wrong: { 1: "This reports the force itself (F = -24 N) rather than completing the final step of dividing by mass to find acceleration.", 2: "This could result from a division error, such as dividing by an incorrect value instead of the correct mass of 2 kg.", 3: "This omits the negative sign, which is essential since this is a RESTORING force always directed opposite to the displacement (toward equilibrium)." },
            tempting: "Choice B is tempting because F(3)=-24N is a correctly-computed intermediate value, but the question asks for ACCELERATION specifically, which requires the additional step of dividing by mass.",
            commonMistake: "Stopping after correctly calculating the force at the given position, without completing the final step of applying Newton's second law (dividing by mass) to find the requested acceleration.",
            apTip: "For any position-dependent force problem: (1) substitute the given position into F(x) to find the force AT that specific position, (2) THEN divide by mass to find acceleration (a = F/m) — don't stop at the force calculation if the question specifically asks for acceleration."
          }
        }
      ]
    },
    {
      id: 3,
      name: 'Unit 3: Work, Energy, and Power',
      questions: [
        {
          id: 'pcm-3-1', difficulty: 3, type: 'mcq', topic: 'Work Done by a Variable Force',
          prompt: "A force F(x) = 3x² (in Newtons) acts on an object as it moves along the x-axis from x=0 to x=2 meters. How much work is done by this force?",
          choices: ['8 J', '12 J', '6 J', '4 J'],
          correct: 0,
          explanation: {
            correct: "W = ∫F(x)dx from 0 to 2 = [x³] from 0 to 2 = 8 - 0 = 8 J.",
            wrong: { 1: "This could result from evaluating F(2)=3(4)=12 and reporting it directly as the work, rather than correctly integrating the force over the full displacement.", 2: "This could result from an incomplete or incorrect antiderivative, such as an error in increasing the power of x during integration.", 3: "This could result from a calculation error, such as dividing the correct answer incorrectly." },
            tempting: "Choice B is tempting since F(2) = 12 N is a correctly-computed force value AT the final position, but work requires INTEGRATING the force over the entire displacement, not just evaluating the force at one endpoint.",
            commonMistake: "Treating work as simply the force value at the final position multiplied by displacement (as if the force were constant), rather than correctly using the calculus definition of work for a variable force: the definite INTEGRAL of force with respect to position.",
            apTip: "Work done by a variable force: W = ∫F(x)dx over the given displacement interval — this is essential whenever force is NOT constant. Only when force is truly constant can you use the simplified formula W = FΔx directly; otherwise, you must integrate, since work is literally the area under a force-vs-position graph."
          }
        },
        {
          id: 'pcm-3-2', difficulty: 2, type: 'mcq', topic: 'The Work-Energy Theorem',
          prompt: "According to the work-energy theorem, the net work done on an object equals:",
          choices: ["The object's change in kinetic energy", "The object's total kinetic energy", "The object's change in potential energy", "The object's change in momentum"],
          correct: 0,
          explanation: {
            correct: "The work-energy theorem states W_net = ΔKE = KE_final - KE_initial, derived by integrating Newton's second law with respect to position.",
            wrong: { 1: "The work-energy theorem relates net work to the CHANGE in kinetic energy (final KE minus initial KE), not the object's total kinetic energy at a single moment.", 2: "Net work relates specifically to the change in KINETIC energy (energy of motion), not potential energy (which instead relates to work done specifically by a CONSERVATIVE force, with a negative sign convention).", 3: "Change in momentum is related to IMPULSE (the integral of force over time), a distinct but related theorem — not to work (which is the integral of force over distance)." },
            tempting: "Choice D is tempting because impulse-momentum and work-energy are parallel, commonly confused theorems (impulse relates to momentum change, work relates to KE change).",
            commonMistake: "Confusing the work-energy theorem (net work = change in KINETIC energy) with the impulse-momentum theorem (impulse = change in MOMENTUM) — these are parallel but distinct relationships, one built from integrating force over distance, the other from integrating force over time.",
            apTip: "Work-energy theorem: W_net = ΔKE = KE_final − KE_initial. This is a direct consequence of integrating Newton's second law (F=ma) with respect to POSITION rather than time — contrast this with the impulse-momentum theorem (J = Δp), which comes from integrating F=ma with respect to TIME instead."
          }
        },
        {
          id: 'pcm-3-3', difficulty: 3, type: 'mcq', topic: 'Power as the Rate of Work',
          prompt: "A motor does 500 J of work in 4 seconds at a constant rate. What is the average power output of the motor?",
          choices: ['125 W', '2000 W', '504 W', '496 W'],
          correct: 0,
          explanation: {
            correct: "Average power = W/t = 500/4 = 125 W.",
            wrong: { 1: "This results from multiplying work and time (500×4=2000) instead of correctly dividing.", 2: "This results from adding work and time together (500+4=504) instead of correctly dividing.", 3: "This results from subtracting time from work (500-4=496) instead of correctly dividing." },
            tempting: "None of the distractors are especially deceptive, mostly an arithmetic-operation check.",
            commonMistake: "Performing the wrong arithmetic operation (multiplying, adding, or subtracting instead of dividing) when applying the basic power formula, P = W/t.",
            apTip: "Average power = work done ÷ time taken (P = W/t). For power that varies over time, instantaneous power is instead the derivative of work with respect to time (P = dW/dt), or equivalently P = F·v (force times velocity) at that instant."
          }
        },
        {
          id: 'pcm-3-4', difficulty: 4, type: 'mcq', topic: 'Instantaneous Power (P = Fv)',
          prompt: "A car engine exerts a constant force of 2000 N on a car while the car is moving at 15 m/s. What is the instantaneous power output of the engine at this moment?",
          choices: ['30,000 W', '2015 W', '133.3 W', '15,000 W'],
          correct: 0,
          explanation: {
            correct: "Instantaneous power P = Fv = 2000 × 15 = 30,000 W.",
            wrong: { 1: "This results from adding force and velocity together (2000+15=2015) instead of correctly multiplying them.", 2: "This results from dividing force by velocity (2000/15≈133.3) instead of correctly multiplying them.", 3: "This could result from a factor-of-2 arithmetic error, such as dividing the correct answer in half." },
            tempting: "None of the distractors are especially deceptive beyond an arithmetic-operation check.",
            commonMistake: "Performing the wrong arithmetic operation (adding or dividing instead of multiplying) when applying the instantaneous power formula, P = Fv, which comes from differentiating W = Fx with respect to time (since dx/dt = v).",
            apTip: "Instantaneous power: P = Fv (force times velocity), valid at a specific instant, and derived by differentiating work (W = Fx, for a constant force) with respect to time: dW/dt = F(dx/dt) = Fv. This formula lets you find power directly from force and velocity, without needing to separately calculate work and time."
          }
        },
        {
          id: 'pcm-3-5', difficulty: 5, type: 'mcq', topic: 'Conservation of Mechanical Energy',
          prompt: "A 2 kg ball is dropped from rest from a height of 5 m above the ground. Ignoring air resistance, what is its speed just before hitting the ground? (use g = 10 m/s²)",
          choices: ['10 m/s', '50 m/s', '100 m/s', '5 m/s'],
          correct: 0,
          explanation: {
            correct: "By conservation of energy, mgh = (1/2)mv², which simplifies to v = √(2gh) = √(2×10×5) = √100 = 10 m/s.",
            wrong: { 1: "This could result from an algebra slip after correctly computing 2gh=100, such as multiplying by an incorrect additional factor instead of just taking the square root.", 2: "This is the value of 2gh (100) itself, but the question requires the SQUARE ROOT of this value to find speed, not the intermediate v² value directly.", 3: "This could result from an incomplete calculation, such as only using gh instead of correctly doubling it as part of the v=√(2gh) formula." },
            tempting: "Choice C is tempting since 100 m²/s² (v²) is a correctly-computed intermediate value from conservation of energy, but the final step of taking the SQUARE ROOT to find the actual speed v is still required.",
            commonMistake: "Forgetting to take the final square root when solving for speed from the conservation of energy equation mgh = (1/2)mv², after correctly finding v² but before completing the final algebraic step of extracting v itself.",
            apTip: "Conservation of mechanical energy (no friction/air resistance): initial KE + initial PE = final KE + final PE. For an object dropped from rest from height h: mgh = (1/2)mv², which simplifies (mass cancels) to v = √(2gh) — memorize this simplified 'free fall speed' formula, since it comes up frequently."
          }
        },
        {
          id: 'pcm-3-6', difficulty: 5, type: 'mcq', topic: 'Work Done Against a Spring Force',
          prompt: "A spring has a spring constant k = 200 N/m. Using the formula for the work done to compress or stretch a spring, how much work is required to compress the spring from its natural length by 0.3 m?",
          choices: ['9 J', '18 J', '30 J', '60 J'],
          correct: 0,
          explanation: {
            correct: "W = (1/2)kx² = (1/2)(200)(0.3)² = (1/2)(200)(0.09) = 9 J.",
            wrong: { 1: "This results from forgetting the factor of 1/2 in the spring potential energy formula, using kx² directly (200×0.09=18) instead of (1/2)kx².", 2: "This could result from using kx instead of (1/2)kx² — an incorrect (linear rather than quadratic) formula for spring work.", 3: "This could result from a calculation error, such as using x=0.3 without correctly squaring it in combination with the spring constant." },
            tempting: "Choice B is tempting because forgetting the essential factor of 1/2 in the spring energy formula is one of the single most common errors with this topic.",
            commonMistake: "Forgetting the factor of 1/2 in the spring potential energy / spring work formula (W = (1/2)kx²), or forgetting to SQUARE the displacement x — both are essential parts of the formula, which comes from integrating the variable spring force F(x) = kx over the displacement.",
            apTip: "Work done to stretch/compress a spring (spring potential energy): W = (1/2)kx², derived by integrating the spring's variable force F(x) = kx from 0 to x: ∫kx dx = (1/2)kx². This is directly analogous to how you'd calculate work for any variable force — always integrate F(x) over the displacement rather than assuming a constant-force shortcut."
          }
        }
      ]
    }
  ],
  frqs: [
    {
      id: 'pcm-frq-1', difficulty: 4, unit: 1,
      prompt: "A particle moves along the x-axis with position x(t) = t³ - 6t² + 9t (in meters, t in seconds), for t ≥ 0.\n\n(a) Find the particle's velocity function v(t).\n(b) Find all times t ≥ 0 at which the particle is momentarily at rest.\n(c) Find the particle's acceleration at t = 1 second.",
      rubricPoints: [
        "Correctly differentiates to find v(t) = 3t² − 12t + 9 (1 pt)",
        "Correctly solves v(t) = 0 to find t = 1 and t = 3 (1 pt)",
        "Correctly finds a(t) = 6t − 12 and evaluates a(1) = −6 m/s² (1 pt)"
      ],
      sampleResponse: "(a) v(t) = x'(t) = 3t² − 12t + 9.\n(b) The particle is at rest when v(t) = 0: 3t² − 12t + 9 = 0, which simplifies to 3(t² − 4t + 3) = 0, or 3(t − 1)(t − 3) = 0, giving t = 1 second and t = 3 seconds.\n(c) a(t) = v'(t) = 6t − 12. At t = 1: a(1) = 6(1) − 12 = −6 m/s²."
    },
    {
      id: 'pcm-frq-2', difficulty: 4, unit: 1,
      prompt: "A ball is thrown vertically upward from ground level with an initial velocity of 20 m/s. Its acceleration due to gravity is constant at -10 m/s² (taking upward as positive).\n\n(a) Write the velocity function v(t) for the ball.\n(b) Write the position (height) function y(t) for the ball.\n(c) Find the maximum height reached by the ball.",
      rubricPoints: [
        "Correctly writes v(t) = 20 − 10t using the given initial velocity and constant acceleration (1 pt)",
        "Correctly integrates to find y(t) = 20t − 5t², using the initial condition y(0) = 0 (1 pt)",
        "Correctly finds the maximum height by setting v(t) = 0 (at t = 2 s) and evaluating y(2) = 20 m (1 pt)"
      ],
      sampleResponse: "(a) Since acceleration is constant at −10 m/s², v(t) = v₀ + at = 20 − 10t.\n(b) Integrating v(t): y(t) = ∫(20 − 10t)dt = 20t − 5t² + C. Since the ball starts at ground level, y(0) = 0, so C = 0, giving y(t) = 20t − 5t².\n(c) Maximum height occurs when the velocity is momentarily zero (the ball stops rising before falling back down): 20 − 10t = 0, so t = 2 seconds. Substituting into y(t): y(2) = 20(2) − 5(2)² = 40 − 20 = 20 m. The maximum height reached is 20 meters."
    },
    {
      id: 'pcm-frq-3', difficulty: 5, unit: 2,
      prompt: "A 5 kg block on a frictionless horizontal surface is connected by a string over a pulley to a hanging 3 kg mass, forming an Atwood-machine-like system (use g = 10 m/s²).\n\n(a) Describe the forces acting on each mass.\n(b) Write Newton's second law equations for each mass.\n(c) Solve for the acceleration of the system and the tension in the string.",
      rubricPoints: [
        "Correctly identifies the forces on each mass: tension T (horizontal) and normal force/gravity (vertical, canceling) on the 5 kg block; tension T (up) and gravity (down) on the 3 kg hanging mass (1 pt)",
        "Correctly writes Newton's second law for each mass: T = 5a for the block, and 3g − T = 3a for the hanging mass (1 pt)",
        "Correctly solves the system of equations to find a = 3.75 m/s² and T = 18.75 N (1 pt)"
      ],
      sampleResponse: "(a) The 5 kg block on the horizontal surface has gravity pulling down and the normal force pushing up (these cancel, since there's no vertical acceleration), and the string tension T pulling it horizontally toward the pulley. The 3 kg hanging mass has gravity (weight = 3g) pulling down and the string tension T pulling up.\n(b) For the 5 kg block (horizontal direction, only tension acts): T = 5a. For the 3 kg hanging mass (taking downward as positive, since it accelerates downward): 3g − T = 3a, or 30 − T = 3a.\n(c) Substituting T = 5a into the second equation: 30 − 5a = 3a, so 30 = 8a, giving a = 3.75 m/s². Then T = 5(3.75) = 18.75 N."
    },
    {
      id: 'pcm-frq-4', difficulty: 5, unit: 2,
      prompt: "A 4 kg block is pushed up a frictionless 30° incline by a force applied along the incline's surface. At the instant shown, the block has an acceleration of 2 m/s² directed up the incline. (use g = 10 m/s², sin30°=0.5)\n\n(a) Describe the forces acting on the block along the incline.\n(b) Write Newton's second law along the incline, including the component of gravity acting along the incline's surface, and solve for the applied force.\n(c) Explain qualitatively how the required applied force would change if the incline angle were increased, and why.",
      rubricPoints: [
        "Correctly identifies the component of gravity acting down the incline as mg sin(θ) (1 pt)",
        "Correctly sets up and solves Newton's second law along the incline: F_applied − mg sin(θ) = ma, giving F_applied = 28 N (1 pt)",
        "Explains that increasing the incline angle increases sin(θ), increasing the gravity component acting down the incline, meaning a LARGER applied force would be required to maintain the same acceleration up the incline (1 pt)"
      ],
      sampleResponse: "(a) Along the incline's surface, two components act on the block: the applied force directed up the incline, and the component of gravity acting down the incline, equal to mg sin(θ).\n(b) Applying Newton's second law along the incline (taking up the incline as positive): F_applied − mg sin(θ) = ma. With the given values: F_applied − (4)(10)(0.5) = (4)(2), so F_applied − 20 = 8, giving F_applied = 28 N.\n(c) If the incline angle were increased, sin(θ) would increase, which increases the gravity component acting down the incline (mg sin(θ)). Since this component must still be overcome (in addition to providing the same net acceleration), a LARGER applied force would be required to maintain the same 2 m/s² acceleration up the incline at a steeper angle."
    },
    {
      id: 'pcm-frq-5', difficulty: 4, unit: 3,
      prompt: "A force F(x) = 10 - 2x (in Newtons) acts on a 2 kg object as it moves along the x-axis from x=0 to x=4 meters.\n\n(a) Calculate the work done by this force over this interval using integration.\n(b) If the object starts from rest at x=0, use the work-energy theorem to find its speed at x=4 m.",
      rubricPoints: [
        "Correctly sets up and evaluates the integral W = ∫(10−2x)dx from 0 to 4, obtaining W = 24 J (1 pt)",
        "Correctly applies the work-energy theorem, setting W = ΔKE = (1/2)mv² − 0 (1 pt)",
        "Correctly solves for v, obtaining v = √24 = 2√6 ≈ 4.9 m/s (1 pt)"
      ],
      sampleResponse: "(a) W = ∫ from 0 to 4 of (10 − 2x) dx = [10x − x²] from 0 to 4 = (10(4) − 4²) − (10(0) − 0²) = (40 − 16) − 0 = 24 J.\n(b) By the work-energy theorem, the net work done equals the change in kinetic energy: W = ΔKE = (1/2)mv² − (1/2)mv₀². Since the object starts from rest, v₀ = 0, so 24 = (1/2)(2)v², which simplifies to 24 = v², giving v = √24 = 2√6 ≈ 4.9 m/s."
    },
    {
      id: 'pcm-frq-6', difficulty: 4, unit: 3,
      prompt: "A 0.5 kg mass is attached to a horizontal spring with spring constant k = 400 N/m on a frictionless surface. The spring is compressed 0.2 m from its natural length and then released.\n\n(a) Calculate the elastic potential energy stored in the spring at maximum compression.\n(b) Using conservation of energy, find the speed of the mass as it passes through the spring's natural length (equilibrium position).",
      rubricPoints: [
        "Correctly calculates the elastic potential energy PE = (1/2)kx² = (1/2)(400)(0.2)² = 8 J (1 pt)",
        "Applies conservation of energy, setting the spring's initial elastic PE equal to the mass's kinetic energy at the equilibrium position (1 pt)",
        "Correctly solves for the speed, obtaining v = √32 ≈ 5.7 m/s (1 pt)"
      ],
      sampleResponse: "(a) Elastic potential energy stored in the spring at maximum compression: PE = (1/2)kx² = (1/2)(400)(0.2)² = (1/2)(400)(0.04) = 8 J.\n(b) By conservation of energy (frictionless surface, so no energy is lost), all of this elastic potential energy converts into kinetic energy as the mass passes through the spring's natural length: (1/2)mv² = 8 J. Solving: (1/2)(0.5)v² = 8, so 0.25v² = 8, giving v² = 32, and v = √32 ≈ 5.7 m/s."
    }
  ]
}
