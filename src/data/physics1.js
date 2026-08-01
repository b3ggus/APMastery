// AP Physics 1 — real College Board unit numbers/names used for authenticity.
// Started with 2 units; more to be added in follow-up passes.

export const physics1 = {
  id: 'physics-1',
  name: 'AP Physics 1',
  icon: '🧲',
  accent: 'indigo',
  units: [
    {
      id: 1,
      name: 'Unit 1: Kinematics',
      questions: [
        {
          id: 'phys1-1-1', difficulty: 1, type: 'mcq', topic: 'Displacement vs. Distance',
          prompt: "A runner completes one full lap around a 400-meter circular track, ending at the exact point where they started. What is the runner\'s total displacement?",
          choices: ['400 meters', '0 meters, since displacement measures the straight-line change in position from start to end point', '200 meters', 'It cannot be determined without knowing the runner\'s speed'],
          correct: 1,
          explanation: {
            correct: "Displacement is the straight-line vector distance and direction between the starting and ending positions; since the runner ends exactly where they started, the displacement is 0 meters, even though the total DISTANCE traveled (400m, the path length) is substantial.",
            wrong: { 0: "400 meters is the total DISTANCE traveled (the length of the path), not the displacement (which depends only on start and end position, not path taken).", 2: "200 meters doesn't correctly describe either the distance (400m) or displacement (0m) for this specific scenario.", 3: "Displacement depends only on the start and end positions, not on speed; speed would be needed to calculate something like average velocity or time elapsed, but not displacement itself." },
            tempting: "Choice A is extremely tempting because 400m (the distance) is the more intuitive, commonly discussed number for 'how far did they run,' but the question specifically asks for DISPLACEMENT, a distinct vector quantity.",
            commonMistake: "Confusing distance (total path length traveled, a scalar) with displacement (straight-line change in position from start to end, a vector) — these are frequently different values for any path that isn't a straight line.",
            apTip: "Always ask 'where did they START and where did they END UP' for displacement (ignore the path taken entirely) versus 'how much ground did they cover in total' for distance (the full path length) — a round trip of any kind always has zero displacement but nonzero distance."
          }
        },
        {
          id: 'phys1-1-2', difficulty: 1, type: 'mcq', topic: 'Velocity vs. Acceleration',
          prompt: "A car's speed increases from 20 m/s to 30 m/s over a period of 5 seconds while traveling in a straight line. What is the car\'s average acceleration?",
          choices: ['2 m/s²', '10 m/s²', '6 m/s²', '50 m/s²'],
          correct: 0,
          explanation: {
            correct: "Average acceleration = (change in velocity) / (change in time) = (30 m/s - 20 m/s) / 5 s = 10 m/s / 5 s = 2 m/s².",
            wrong: { 1: "10 m/s² is just the change in velocity (10 m/s) without dividing by the time interval (5 s), giving units of velocity, not acceleration.", 2: "6 m/s² doesn't match the correct division of 10 by 5; this may result from a computational error.", 3: "50 m/s² would result from an incorrect calculation, such as multiplying instead of dividing, or using the wrong numbers from the problem." },
            tempting: "Choice B is a common trap — forgetting to actually divide the velocity change by the time interval, leaving just the raw velocity difference instead of a proper acceleration value.",
            commonMistake: "Forgetting to divide by the time interval when calculating average acceleration, or otherwise mishandling the units in the calculation.",
            apTip: "Always write out the acceleration formula explicitly as a = Δv/Δt = (v_final - v_initial)/(t_final - t_initial) before plugging in numbers, and double check your final answer's units come out to m/s² (velocity divided by time)."
          }
        },
        {
          id: 'phys1-1-3', difficulty: 2, type: 'mcq', topic: 'Kinematic Equations',
          prompt: "An object starts from rest and accelerates uniformly at 4 m/s² for 3 seconds. How far does it travel during this time?",
          choices: ['12 m', '18 m', '24 m', '6 m'],
          correct: 1,
          explanation: {
            correct: "Using the kinematic equation d = v₀t + (1/2)at², with v₀=0 (starts from rest), a=4 m/s², t=3s: d = 0(3) + (1/2)(4)(3)² = 0 + (1/2)(4)(9) = 18 m.",
            wrong: { 0: "12 m would result from using d = at (missing the (1/2) factor and the correct t² relationship, or another incomplete calculation), not the correct kinematic distance formula.", 2: "24 m doesn't match the correct calculation of (1/2)(4)(9) = 18; this may result from forgetting the (1/2) factor (giving 4×9=36, still not 24) or another arithmetic slip.", 3: "6 m significantly undercounts the actual distance; this might result from using only 'at' without squaring the time or without the full correct formula." },
            tempting: "None of the distractors are especially close if the kinematic equation is applied correctly and completely, but forgetting the crucial (1/2) coefficient or the squaring of time are both common errors in this formula.",
            commonMistake: "Forgetting the (1/2) coefficient in the distance kinematic equation, or forgetting to square the time value, both of which are essential parts of the formula d = v₀t + (1/2)at².",
            apTip: "Memorize this kinematic equation precisely: d = v₀t + (1/2)at² — when starting from rest (v₀=0), it simplifies to d = (1/2)at², but always write the FULL formula first before simplifying, to avoid dropping a term."
          }
        },
        {
          id: 'phys1-1-4', difficulty: 3, type: 'mcq', topic: 'Projectile Motion',
          prompt: "A ball is launched horizontally off a cliff with an initial horizontal velocity of 10 m/s. Ignoring air resistance, what happens to the ball\'s horizontal velocity during its flight?",
          choices: ['It gradually decreases to zero due to gravity', 'It remains constant throughout the flight, since gravity only acts vertically and there is no horizontal force (ignoring air resistance)', 'It increases continuously due to gravity\'s acceleration', 'It immediately drops to zero the instant the ball leaves the cliff'],
          correct: 1,
          explanation: {
            correct: "In projectile motion (ignoring air resistance), gravity acts only in the VERTICAL direction; since there's no horizontal force acting on the ball during flight, its horizontal velocity component remains constant throughout the entire flight, while only the vertical velocity component changes due to gravity's acceleration.",
            wrong: { 0: "This assumes gravity affects horizontal motion, but gravity is a purely VERTICAL force (acting straight down) and has no direct effect on horizontal velocity in this idealized (no air resistance) scenario.", 2: "This also assumes gravity affects horizontal velocity; gravity's acceleration acts vertically, causing the VERTICAL velocity to increase (in the downward direction) over time, not the horizontal velocity.", 3: "There's no physical mechanism for horizontal velocity to instantly drop to zero upon leaving the cliff; the ball retains its horizontal velocity as it begins projectile motion." },
            tempting: "Choices A and C both reflect the common misconception that gravity somehow influences horizontal motion, when in projectile motion (ignoring air resistance) horizontal and vertical motions are completely independent of each other.",
            commonMistake: "Assuming gravity affects horizontal velocity in projectile motion, rather than recognizing that horizontal and vertical motion components are independent — gravity affects ONLY the vertical component.",
            apTip: "Always treat projectile motion as two SEPARATE, independent 1-D motion problems happening simultaneously: horizontal motion (constant velocity, no acceleration, ignoring air resistance) and vertical motion (constant acceleration due to gravity, g ≈ 9.8 m/s² downward) — this decomposition is the foundation of solving virtually all projectile motion problems."
          }
        },
        {
          id: 'phys1-1-5', difficulty: 4, type: 'mcq', topic: 'Motion Graphs',
          prompt: "A position-vs-time graph for an object shows a curve that is concave up (curving upward) throughout the time interval shown. What does this indicate about the object\'s motion?",
          choices: ['The object is moving at a constant velocity', 'The object is accelerating (its velocity is increasing), since the slope of the position-time graph (representing velocity) is itself increasing over time', 'The object is at rest throughout this interval', 'The object is decelerating throughout this interval'],
          correct: 1,
          explanation: {
            correct: "On a position-vs-time graph, the SLOPE at any point represents the instantaneous velocity; a concave-up curve means this slope is continuously INCREASING over time, which means velocity is increasing, indicating the object is accelerating (speeding up, assuming it's moving in the positive direction).",
            wrong: { 0: "Constant velocity would appear as a STRAIGHT line on a position-time graph (constant, unchanging slope), not a curve; a curve (concave up or down) indicates changing velocity, meaning acceleration is present.", 2: "An object at rest would show a completely FLAT, horizontal line on a position-time graph (position never changing), not a curve of any kind.", 3: "A concave-up curve specifically indicates INCREASING slope (increasing velocity, i.e., speeding up in the positive direction), not decreasing velocity (which would correspond to a concave-DOWN curve, assuming motion in the positive direction)." },
            tempting: "Choice D can tempt students who don't carefully connect graph CONCAVITY to the SECOND derivative (acceleration) concept, potentially reversing which concavity direction corresponds to speeding up versus slowing down.",
            commonMistake: "Not connecting position-time graph concavity to acceleration correctly — concave up (assuming positive-direction motion) means increasing velocity (speeding up); concave down means decreasing velocity (slowing down), assuming motion is in the positive direction throughout.",
            apTip: "Remember the graph hierarchy: on a position-time graph, the SLOPE at a point gives velocity at that instant; the CONCAVITY (how the slope itself is changing) gives information about acceleration — a straight line means zero acceleration (constant velocity), while curving means nonzero acceleration."
          }
        },
        {
          id: 'phys1-1-6', difficulty: 5, type: 'mcq', topic: 'Relative Motion',
          prompt: "A boat travels directly across a river at 4 m/s relative to the water, while the river\'s current flows at 3 m/s parallel to the riverbank. What is the boat\'s resultant speed relative to an observer standing on the shore?",
          choices: ['7 m/s, by simply adding the two speeds', '1 m/s, by subtracting the two speeds', '5 m/s, found using the Pythagorean theorem, since the boat\'s velocity and the current\'s velocity are perpendicular to each other', '3.5 m/s, the average of the two speeds'],
          correct: 2,
          explanation: {
            correct: "Since the boat's velocity (straight across, 4 m/s) and the current's velocity (parallel to the bank, 3 m/s) are perpendicular to each other, these two velocity vectors must be combined using vector addition (the Pythagorean theorem for perpendicular vectors): resultant speed = √(4² + 3²) = √(16+9) = √25 = 5 m/s.",
            wrong: { 0: "Simply adding the two speeds (4+3=7) would only be correct if the two velocities were in the exact SAME direction (parallel, not perpendicular); since they're perpendicular here, this simple addition doesn't apply.", 1: "Subtracting the speeds would only be appropriate if the two velocities were in exactly OPPOSITE directions (also parallel, just opposing); since they're perpendicular, not opposite, this subtraction doesn't apply either.", 3: "Averaging the two speeds isn't a valid vector combination method for perpendicular vectors; the correct method for combining perpendicular vector components is the Pythagorean theorem." },
            tempting: "Choice A is tempting because simple addition feels like the most intuitive way to 'combine' two speeds, but this only works when vectors point in the exact same direction — perpendicular vectors require proper vector addition (Pythagorean theorem), not simple arithmetic addition.",
            commonMistake: "Adding or subtracting speeds directly without first checking whether the underlying velocity VECTORS are parallel, perpendicular, or at some other angle — the correct combination method depends entirely on the angle between the vectors.",
            apTip: "Always determine the ANGLE between two velocity vectors before combining them: same direction → simple addition; opposite directions → simple subtraction; perpendicular (90°) → Pythagorean theorem; any other angle → full vector component addition (breaking each vector into x and y components first) — river-crossing problems are a classic, frequently tested application of the perpendicular vector case."
          }
        }
      ]
    },
    {
      id: 2,
      name: 'Unit 2: Dynamics (Newton\'s Laws)',
      questions: [
        {
          id: 'phys1-2-1', difficulty: 1, type: 'mcq', topic: 'Newton\'s First Law',
          prompt: "According to Newton\'s First Law of Motion, an object at rest will:",
          choices: ['Always eventually begin moving on its own, even with no forces acting on it', 'Remain at rest unless acted upon by a net external force', 'Immediately accelerate if placed in a vacuum', 'Speed up over time due to inertia'],
          correct: 1,
          explanation: {
            correct: "Newton's First Law (the law of inertia) states that an object at rest remains at rest, and an object in motion remains in motion at constant velocity, UNLESS acted upon by a net external (unbalanced) force.",
            wrong: { 0: "An object with truly no net force acting on it will NOT spontaneously begin moving; it will remain at rest indefinitely, which is precisely what the law of inertia describes.", 2: "A vacuum simply means an absence of air/matter (removing air resistance as a force); it doesn't create a new force causing acceleration — an object in a vacuum with no other forces acting on it would still remain at rest or in constant motion.", 3: "Inertia describes an object's tendency to RESIST changes in its motion (maintaining its current state, whether at rest or already moving), not a tendency to spontaneously speed up over time." },
            tempting: "None of the distractors accurately describe the law of inertia if Newton's First Law is understood precisely, but vague intuitions about 'natural tendencies to move' (perhaps from a pre-Newtonian, Aristotelian-style intuition) could lead to incorrect answers.",
            commonMistake: "Misunderstanding inertia as a force that causes motion, rather than correctly understanding it as an object's tendency to RESIST changes to its current state of motion (whether at rest or moving at constant velocity).",
            apTip: "State Newton's First Law precisely: an object maintains its current state of motion (at rest OR moving at constant velocity in a straight line) unless a net external force acts on it — the key phrase is 'net force,' since balanced forces (net force = zero) still result in no change in motion."
          }
        },
        {
          id: 'phys1-2-2', difficulty: 2, type: 'mcq', topic: 'Newton\'s Second Law',
          prompt: "A net force of 20 N is applied to an object with a mass of 4 kg. What is the object\'s resulting acceleration?",
          choices: ['80 m/s²', '5 m/s²', '16 m/s²', '0.2 m/s²'],
          correct: 1,
          explanation: {
            correct: "Using Newton's Second Law, F = ma, rearranged to solve for acceleration: a = F/m = 20 N / 4 kg = 5 m/s².",
            wrong: { 0: "80 m/s² results from multiplying F and m (20×4=80) instead of correctly dividing F by m.", 2: "16 m/s² doesn't match the correct division of 20 by 4; this may result from a computational error.", 3: "0.2 m/s² incorrectly inverts the division (4/20 instead of 20/4)." },
            tempting: "Choice A is a common trap — multiplying force and mass together instead of correctly dividing force by mass to solve for acceleration.",
            commonMistake: "Multiplying instead of dividing when rearranging F=ma to solve for acceleration (a=F/m), or otherwise mishandling the algebraic rearrangement of this fundamental equation.",
            apTip: "Memorize F=ma in all its rearranged forms (a=F/m, m=F/a) and always double check units: force in Newtons (N) divided by mass in kilograms (kg) should give acceleration in m/s² — if your answer's units don't work out this way, you've likely mixed up the rearrangement."
          }
        },
        {
          id: 'phys1-2-3', difficulty: 2, type: 'mcq', topic: 'Newton\'s Third Law',
          prompt: "A book rests on a table. According to Newton\'s Third Law, the reaction force to the table pushing UP on the book (the normal force) is:",
          choices: ['The book\'s weight, pulled down by gravity', 'The book pushing DOWN on the table with an equal and opposite force', 'The table\'s weight', 'There is no reaction force in this scenario'],
          correct: 1,
          explanation: {
            correct: "Newton's Third Law pairs are equal in magnitude, opposite in direction, and act on DIFFERENT objects, exerted by the same two objects on each other; the reaction to the table pushing UP on the book (normal force from table on book) is the book pushing DOWN on the table with an equal and opposite force (normal force from book on table).",
            wrong: { 0: "The book's weight (gravity pulling the book down) is a completely separate force (from Earth's gravitational attraction), not the Newton's Third Law reaction pair to the table's normal force on the book — weight and normal force happen to be equal in this specific static scenario, but they are NOT a Third Law action-reaction pair (they act on the same object, the book, not on two different objects exchanging force).", 2: "The table's weight is a separate force entirely (gravity acting on the table itself, balanced by the floor/ground supporting the table), unrelated to the specific book-table normal force interaction being asked about.", 3: "Newton's Third Law action-reaction force pairs exist for EVERY force interaction between two objects; there is definitely a reaction force in this scenario (the book pushing back on the table)." },
            tempting: "Choice A is the single most common Newton's Third Law misconception — confusing the book's weight (gravity) and the table's normal force as a 'matched pair' since they happen to be equal in magnitude in this static scenario, when a true Third Law pair must involve the SAME two objects exerting force on each other in opposite directions.",
            commonMistake: "Confusing a coincidentally equal pair of DIFFERENT forces (like weight and normal force on the same object, which happen to balance in a static scenario) with an actual Newton's Third Law action-reaction pair (which must involve the same two objects mutually exerting force on each other).",
            apTip: "To correctly identify a Newton's Third Law pair, check that: (1) the two forces act on DIFFERENT objects, (2) both forces are the SAME TYPE of force (e.g., both normal forces, or both gravitational forces), and (3) they're exerted by the same two objects on each other in opposite directions — weight and normal force fail this test since they're different force types acting on the same single object (the book)."
          }
        },
        {
          id: 'phys1-2-4', difficulty: 3, type: 'mcq', topic: 'Friction',
          prompt: "A 10 kg box sits on a horizontal floor with a coefficient of kinetic friction of 0.3. If a horizontal force of 40 N is applied to the box, what is the magnitude of the kinetic friction force acting on the box (using g = 10 m/s²)?",
          choices: ['40 N', '30 N, since kinetic friction = μ × normal force = 0.3 × (10 kg × 10 m/s²) = 0.3 × 100 N = 30 N', '100 N', '3 N'],
          correct: 1,
          explanation: {
            correct: "Kinetic friction force = μ_k × Normal force. On a horizontal surface, normal force equals weight = mg = 10 kg × 10 m/s² = 100 N. So friction force = 0.3 × 100 N = 30 N.",
            wrong: { 0: "40 N is the APPLIED force given in the problem, not the friction force; these happen to be different values here (friction is less than the applied force, meaning the box would accelerate).", 2: "100 N is the NORMAL force (equal to weight in this horizontal scenario), not the friction force itself — the friction force is calculated by multiplying this normal force by the coefficient of friction.", 3: "3 N results from a decimal placement error, perhaps multiplying 0.3 by 10 (mass alone) instead of by the full normal force (100 N, which requires multiplying mass by g)." },
            tempting: "Choice C is tempting because normal force (100 N) is a necessary intermediate step in the calculation, but it's not itself the final friction force answer — that requires the additional multiplication by the coefficient of friction.",
            commonMistake: "Stopping at an intermediate step (like calculating normal force) without completing the final multiplication by the coefficient of friction, or confusing the applied force with the resulting friction force.",
            apTip: "Always calculate friction force in two explicit steps: (1) find normal force (often equal to weight = mg on a horizontal surface, but not always — check for other vertical forces or inclines), then (2) multiply normal force by the coefficient of friction (μ) to get the friction force — don't skip or conflate these two steps."
          }
        },
        {
          id: 'phys1-2-5', difficulty: 4, type: 'mcq', topic: 'Inclined Planes',
          prompt: "A 5 kg block sits on a frictionless incline angled at 30° from horizontal. What is the magnitude of the component of gravitational force acting PARALLEL to the incline surface (using g = 10 m/s²)?",
          choices: ['50 N', '25 N, calculated as mg·sin(30°) = (5)(10)(0.5) = 25 N', '43.3 N', '0 N, since the incline is frictionless'],
          correct: 1,
          explanation: {
            correct: "On an incline, the gravitational force (mg) is resolved into two components: one parallel to the incline surface (mg·sin θ, which causes the object to slide down the incline) and one perpendicular to the incline surface (mg·cos θ, balanced by the normal force). Here: mg·sin(30°) = (5 kg)(10 m/s²)(0.5) = 25 N.",
            wrong: { 0: "50 N is simply mg (the full weight) without resolving it into components using the incline angle at all; this would only be the parallel component if the incline were vertical (90°), not 30°.", 2: "43.3 N is mg·cos(30°) ≈ (5)(10)(0.866) = 43.3 N, which is actually the PERPENDICULAR component (balanced by normal force), not the parallel component being asked about — sin and cos are swapped here.", 3: "Whether the incline is frictionless has NO effect on the gravitational force component parallel to the incline; friction is a SEPARATE force that would oppose motion along the incline, but it doesn't eliminate or change gravity's own component along that direction." },
            tempting: "Choice C is the classic sin/cos mix-up — using cosine instead of sine (or vice versa) when resolving gravity into components along an incline, since both trigonometric functions are involved but apply to different (perpendicular vs. parallel) components.",
            commonMistake: "Swapping sine and cosine when resolving gravitational force into components on an incline — remember, the PARALLEL (along the slope) component uses sin θ, while the PERPENDICULAR (into the slope) component uses cos θ, measuring θ from the horizontal.",
            apTip: "Draw the incline force diagram explicitly every time: label mg straight down, then draw its two components (parallel to incline = mg sin θ, perpendicular to incline = mg cos θ), with θ measured from the horizontal — physically sketching this prevents the common sin/cos swap error."
          }
        },
        {
          id: 'phys1-2-6', difficulty: 5, type: 'mcq', topic: 'Systems of Connected Objects (Atwood-style)',
          prompt: "Two blocks, mass 3 kg and mass 5 kg, are connected by a massless string over a frictionless, massless pulley (an Atwood machine), hanging vertically. What is the magnitude of the acceleration of the system (using g = 10 m/s²)?",
          choices: ['10 m/s²', '2.5 m/s², found using a = (m2-m1)g/(m1+m2) = (5-3)(10)/(5+3) = 20/8 = 2.5 m/s²', '6.25 m/s²', '1.25 m/s²'],
          correct: 1,
          explanation: {
            correct: "For an Atwood machine, applying Newton's Second Law to the system (treating both masses together, with the heavier mass's weight driving the motion against the lighter mass's weight and both masses' inertia): a = (m2 - m1)g / (m1 + m2) = (5-3)(10)/(5+3) = 20/8 = 2.5 m/s².",
            wrong: { 0: "10 m/s² is simply g itself, ignoring the effect of both masses' inertia and the tension in the string that reduces the net acceleration below free-fall.", 2: "6.25 m/s² doesn't match the correct Atwood machine formula calculation; this may result from an error in setting up or simplifying the equation.", 3: "1.25 m/s² doesn't match the correct calculation either; this might result from a different arithmetic or setup error, such as incorrectly halving the correct answer." },
            tempting: "Choice A is tempting for students who don't account for the fact that BOTH masses' inertia affects the system's acceleration, incorrectly assuming the heavier mass simply free-falls at g.",
            commonMistake: "Not correctly deriving or applying the Atwood machine formula, or forgetting that the STRING TENSION (connecting both masses) means neither mass simply free-falls independently — the system's acceleration is always less than g.",
            apTip: "Derive the Atwood machine formula from first principles rather than just memorizing it: write Newton's Second Law separately for each mass (T - m1g = m1a for the lighter, rising mass; m2g - T = m2a for the heavier, falling mass), then add the two equations together to eliminate tension T, giving (m2-m1)g = (m1+m2)a, and solve for a — being able to derive this shows deeper understanding than memorization alone, and helps on FRQs that modify the classic setup."
          }
        }
      ]
    },
    {
      id: 3,
      name: 'Unit 3: Circular Motion & Gravitation',
      questions: [
        {
          id: 'phys1-3-1', difficulty: 1, type: 'mcq', topic: 'Uniform Circular Motion',
          prompt: "An object moves in a circle at constant speed. What is the direction of its acceleration?",
          choices: ['In the direction of motion (tangent to the circle)', 'Directed toward the center of the circle (centripetal)', 'Directed away from the center of the circle', 'There is no acceleration, since speed is constant'],
          correct: 1,
          explanation: {
            correct: "Even though speed is constant, the object's VELOCITY (a vector) is continuously changing direction as it moves around the circle; this change in velocity direction requires a centripetal (center-pointing) acceleration, directed toward the center of the circular path at all times.",
            wrong: { 0: "Acceleration tangent to the circle (in the direction of motion) would describe a change in SPEED, not the change in direction that's actually occurring here; for uniform (constant-speed) circular motion, there's no tangential acceleration component.", 2: "Acceleration directed away from the center would cause the object to move in an increasingly larger spiral outward, not maintain a constant circular path; centripetal acceleration points TOWARD the center specifically to continuously redirect the object's velocity, keeping it on the circular path.", 3: "While SPEED (the magnitude of velocity) is constant, VELOCITY (which includes direction) is continuously changing in circular motion, and any change in velocity constitutes acceleration — so acceleration is definitely present, even with constant speed." },
            tempting: "Choice D is a very common misconception — since 'speed is constant,' students may assume 'no acceleration,' forgetting that acceleration relates to changes in the VELOCITY VECTOR (which includes direction), not just speed (magnitude) alone.",
            commonMistake: "Confusing constant SPEED with zero acceleration, without recognizing that a continuously changing DIRECTION of motion (even at constant speed) still constitutes acceleration, since velocity is a vector quantity.",
            apTip: "Always remember: acceleration is any change in the velocity VECTOR, which can result from a change in speed, a change in direction, or both — uniform circular motion is the classic example of acceleration from direction change alone, with speed remaining constant throughout."
          }
        },
        {
          id: 'phys1-3-2', difficulty: 2, type: 'mcq', topic: 'Centripetal Force & Acceleration',
          prompt: "A 2 kg ball moves in a circle of radius 0.5 m at a constant speed of 4 m/s. What is the magnitude of the centripetal force required to maintain this motion?",
          choices: ['16 N', '64 N', '8 N', '4 N'],
          correct: 1,
          explanation: {
            correct: "Centripetal force = mv²/r = (2 kg)(4 m/s)² / (0.5 m) = (2)(16)/0.5 = 32/0.5 = 64 N.",
            wrong: { 0: "16 N would result from forgetting to divide by the radius (just calculating mv² = 2×16 = 32, still not matching, or another partial calculation error).", 2: "8 N doesn't match the correct calculation using the centripetal force formula; this may result from a significant computational error.", 3: "4 N significantly undercounts the correct force; this may result from not squaring the velocity or another major calculation error." },
            tempting: "None of the distractors are especially close if the formula is applied correctly and completely, but forgetting to square the velocity or forgetting to divide by the radius are both plausible sources of error in this calculation.",
            commonMistake: "Forgetting to square the velocity term, or forgetting to divide by the radius, when applying the centripetal force formula F = mv²/r.",
            apTip: "Memorize the centripetal force formula precisely as F_c = mv²/r, and always double check that you've SQUARED the velocity (not just used v once) and correctly DIVIDED (not multiplied) by the radius before finalizing your answer."
          }
        },
        {
          id: 'phys1-3-3', difficulty: 2, type: 'mcq', topic: 'Newton\'s Law of Universal Gravitation',
          prompt: "According to Newton\'s Law of Universal Gravitation, if the distance between two objects is doubled (while their masses remain unchanged), what happens to the gravitational force between them?",
          choices: ['It doubles', 'It is cut in half', 'It becomes one-fourth of its original value, since gravitational force is inversely proportional to the SQUARE of the distance', 'It remains unchanged'],
          correct: 2,
          explanation: {
            correct: "Newton's Law of Universal Gravitation states F = Gm₁m₂/r², meaning gravitational force is inversely proportional to the SQUARE of the distance between the objects; doubling the distance (r → 2r) means the force is divided by 2² = 4, becoming one-fourth of its original value.",
            wrong: { 0: "This is the opposite of the actual relationship — increasing distance DECREASES gravitational force (following an inverse-square relationship), not increases it.", 1: "This would be correct if gravitational force were simply inversely proportional to distance (not distance squared); but since it's an inverse-SQUARE relationship, doubling distance actually quarters the force, not just halves it.", 3: "Gravitational force clearly depends on distance according to Newton's formula (F = Gm₁m₂/r²); it does not remain constant when distance changes." },
            tempting: "Choice B is a common trap for students who remember gravity is inversely related to distance but forget the crucial SQUARED relationship, leading to an underestimate of how dramatically force decreases with distance.",
            commonMistake: "Forgetting that gravitational force follows an INVERSE-SQUARE law (not simple inverse proportionality), leading to underestimating how much force changes when distance changes.",
            apTip: "Memorize Newton's Law of Universal Gravitation explicitly as F = Gm₁m₂/r², and always apply the SQUARED relationship when distance changes: doubling r divides force by 4; tripling r divides force by 9; halving r multiplies force by 4 — this inverse-square pattern is frequently tested with 'what happens if distance changes by a factor of X' questions."
          }
        },
        {
          id: 'phys1-3-4', difficulty: 3, type: 'mcq', topic: 'Orbital Motion',
          prompt: "A satellite orbits Earth in a stable circular orbit. What provides the centripetal force necessary to keep the satellite in this orbit?",
          choices: ['The satellite\'s own engines, firing continuously', 'Earth\'s gravitational force on the satellite, which acts as the centripetal force pulling the satellite toward Earth\'s center', 'Air resistance from Earth\'s atmosphere', 'The satellite\'s inertia alone, with no other force needed'],
          correct: 1,
          explanation: {
            correct: "For a satellite in stable circular orbit, Earth's gravitational pull on the satellite provides exactly the centripetal force needed to continuously redirect the satellite's velocity toward Earth's center, keeping it in its circular (or elliptical) orbital path — gravity IS the centripetal force in this scenario, not a separate additional force.",
            wrong: { 0: "Stable orbiting satellites generally do NOT need continuously firing engines to maintain their orbit; gravity alone provides the necessary centripetal force once the satellite has achieved the correct orbital velocity.", 2: "Satellites in stable orbit are typically well above Earth's atmosphere (or in regions with negligible air density) specifically to avoid atmospheric drag, which would cause orbital decay over time rather than helping maintain the orbit.", 3: "Inertia alone (Newton's First Law) would cause the satellite to move in a straight line, NOT a curved orbital path; a net force (gravity, in this case) is specifically required to continuously redirect the satellite's motion into a circular/elliptical path." },
            tempting: "Choice D can tempt students who focus only on inertia's role in 'keeping the satellite moving' without recognizing that inertia alone explains straight-line motion, and an additional force (gravity) is specifically needed to curve that motion into an orbit.",
            commonMistake: "Not recognizing that gravity itself IS the centripetal force in orbital motion, rather than assuming some separate, additional force must be responsible for keeping a satellite in orbit.",
            apTip: "For any circular motion scenario, always identify WHICH real, physical force (gravity, tension, normal force, friction, etc.) is providing the centripetal force — centripetal force is not a separate, distinct type of force itself, but rather describes the net inward force role played by one or more of the fundamental forces already present in the scenario."
          }
        },
        {
          id: 'phys1-3-5', difficulty: 4, type: 'mcq', topic: 'Banked Curves & Combined Forces',
          prompt: "A car travels around a flat (unbanked) circular curve. What provides the centripetal force necessary for the car to maintain this circular path?",
          choices: ['The car\'s engine, providing forward thrust', 'Static friction between the tires and the road, directed toward the center of the curve', 'The normal force from the road, directed straight up', 'Air resistance acting on the car'],
          correct: 1,
          explanation: {
            correct: "On a flat, unbanked curve, static friction between the tires and the road surface provides the centripetal force, acting horizontally toward the center of the curve; if this friction force is insufficient (e.g., on an icy road, or if the car goes too fast), the car will skid outward rather than maintain the circular path.",
            wrong: { 0: "Engine thrust generally provides forward (tangential) force to maintain or change SPEED along the car's path, not the sideways (centripetal) force needed to curve the car's direction around the turn.", 2: "Normal force acts perpendicular to the road surface (straight up, for a flat/horizontal road), balancing the car's weight vertically; it doesn't have a horizontal component on a FLAT curve to provide centripetal force (this changes on a BANKED/angled curve, where normal force does gain a horizontal component).", 3: "Air resistance generally opposes the car's motion (acting backward, against forward movement) and isn't the force responsible for providing centripetal force to curve the car's path on a flat road." },
            tempting: "Choice C can tempt students who know normal force is important in vertical force balance, but on a FLAT (unbanked) curve specifically, normal force remains purely vertical and doesn't contribute to the horizontal centripetal force requirement — this changes only on a banked/angled curve.",
            commonMistake: "Not recognizing that on a FLAT curve, friction (not normal force) provides the centripetal force, and confusing this with banked curve scenarios where normal force does contribute a horizontal centripetal component.",
            apTip: "Distinguish flat vs. banked curve scenarios explicitly: on a FLAT curve, static friction alone provides centripetal force; on a BANKED (angled) curve, the normal force gains a horizontal component that can also contribute to (or, at the right angle and speed, entirely provide) the necessary centripetal force, reducing or eliminating the need for friction."
          }
        },
        {
          id: 'phys1-3-6', difficulty: 5, type: 'mcq', topic: "Kepler's Third Law & Orbital Period",
          prompt: "Two satellites orbit Earth: Satellite A has an orbital radius r, and Satellite B has an orbital radius 4r. According to the relationship derived from Newton\'s Law of Gravitation and circular motion (consistent with Kepler\'s Third Law, T² ∝ r³), how does Satellite B\'s orbital period compare to Satellite A\'s?",
          choices: ['Satellite B\'s period is 4 times longer', 'Satellite B\'s period is 8 times longer, since T² ∝ r³ means T ∝ r^(3/2), and (4)^(3/2) = 8', 'Satellite B\'s period is 16 times longer', 'Satellite B\'s period is the same as Satellite A\'s, since period doesn\'t depend on orbital radius'],
          correct: 1,
          explanation: {
            correct: "Since T² ∝ r³, taking the square root of both sides gives T ∝ r^(3/2). If r increases by a factor of 4, then T increases by a factor of 4^(3/2) = (4^(1/2))³ = (2)³ = 8, so Satellite B's orbital period is 8 times longer than Satellite A's.",
            wrong: { 0: "This would be correct if T were directly proportional to r (T ∝ r¹), but the actual relationship is T ∝ r^(3/2), a steeper relationship, giving a factor of 8, not 4.", 2: "This would result from incorrectly using T ∝ r² (squaring r directly, giving 4²=16) rather than the correct T ∝ r^(3/2) relationship derived from Kepler's Third Law.", 3: "Orbital period DOES depend on orbital radius according to Kepler's Third Law (T² ∝ r³); larger orbits take measurably longer to complete, so period is definitely NOT independent of radius." },
            tempting: "Choice C is a common trap for students who correctly recall that r is involved in some 'squared' relationship but misapply it directly to T instead of correctly working through the T² ∝ r³ relationship to find T ∝ r^(3/2).",
            commonMistake: "Misapplying the T² ∝ r³ proportionality relationship — forgetting to take the square root correctly (getting T ∝ r^(3/2), not r² or r¹) when solving for how T scales with r.",
            apTip: "When working with T² ∝ r³ (Kepler's Third Law), always convert it explicitly to T ∝ r^(3/2) by taking the square root of both sides before calculating how T scales with a given change in r — memorize this specific exponent (3/2) rather than trying to reason through the square root step under time pressure each time."
          }
        }
      ]
    },
    {
      id: 4,
      name: 'Unit 4: Energy',
      questions: [
        {
          id: 'phys1-4-1', difficulty: 1, type: 'mcq', topic: 'Kinetic Energy',
          prompt: "A 2 kg object moves at 5 m/s. What is its kinetic energy?",
          choices: ['10 J', '25 J', '50 J', '5 J'],
          correct: 1,
          explanation: {
            correct: "Kinetic energy = (1/2)mv² = (1/2)(2 kg)(5 m/s)² = (1/2)(2)(25) = 25 J.",
            wrong: { 0: "10 J results from forgetting to square the velocity (using (1/2)(2)(5) instead of (1/2)(2)(5²)).", 2: "50 J results from forgetting the (1/2) coefficient (using (2)(25) instead of (1/2)(2)(25)).", 3: "5 J significantly undercounts the correct value; this may result from a more significant calculation error." },
            tempting: "Choice C is a common trap — correctly squaring the velocity but forgetting the essential (1/2) coefficient in the kinetic energy formula.",
            commonMistake: "Forgetting either the (1/2) coefficient or to square the velocity when applying the kinetic energy formula KE = (1/2)mv².",
            apTip: "Memorize KE = (1/2)mv² precisely, and always perform the calculation in order: square the velocity first, multiply by mass, then multiply by (1/2) — writing out each step separately helps prevent dropping either factor."
          }
        },
        {
          id: 'phys1-4-2', difficulty: 2, type: 'mcq', topic: 'Gravitational Potential Energy',
          prompt: "A 3 kg object is lifted to a height of 4 meters above the ground. Using g = 10 m/s², what is its gravitational potential energy relative to the ground?",
          choices: ['12 J', '120 J', '30 J', '40 J'],
          correct: 1,
          explanation: {
            correct: "Gravitational potential energy = mgh = (3 kg)(10 m/s²)(4 m) = 120 J.",
            wrong: { 0: "12 J results from only multiplying mass by height (3×4=12), forgetting to include g entirely.", 2: "30 J doesn't match the correct three-factor multiplication; this may result from only multiplying two of the three values in a different combination.", 3: "40 J results from only multiplying g by height (10×4=40), forgetting to include mass entirely." },
            tempting: "Choices A and D are both tempting because they correctly multiply two of the three needed factors, but each omits one factor (mass or g) entirely from the calculation.",
            commonMistake: "Forgetting to include all three factors (mass, g, and height) when calculating gravitational potential energy, often omitting one of them entirely.",
            apTip: "Memorize PE_grav = mgh explicitly as a three-factor product, and write out all three values (m, g, h) before multiplying, checking that none has been accidentally left out of the final calculation."
          }
        },
        {
          id: 'phys1-4-3', difficulty: 2, type: 'mcq', topic: 'Conservation of Energy',
          prompt: "A ball is dropped from rest from a height of 5 m (ignore air resistance). Using conservation of energy, what is its speed just before hitting the ground (use g = 10 m/s²)?",
          choices: ['5 m/s', '10 m/s', '50 m/s', '100 m/s'],
          correct: 1,
          explanation: {
            correct: "By conservation of energy, initial PE converts entirely to final KE: mgh = (1/2)mv². The mass cancels: gh = (1/2)v², so v² = 2gh = 2(10)(5) = 100, giving v = √100 = 10 m/s.",
            wrong: { 0: "5 m/s doesn't match the correct calculation of √100 = 10; this may result from a computational error or stopping before taking the square root correctly.", 2: "50 m/s would result from forgetting to take the square root of v² (leaving v²=100 misread as v=50, or a similar error), since v²=100 gives v=10, not 50.", 3: "100 m/s is the value of v² (100), not v itself; forgetting to take the final square root gives this incorrect result." },
            tempting: "Choice D is a common trap — correctly calculating v² = 100 but forgetting to take the square root to find the actual velocity v = 10 m/s.",
            commonMistake: "Forgetting to take the square root as the final step after solving for v² using conservation of energy, leaving the answer as v² instead of v.",
            apTip: "When using conservation of energy to find a final speed, always set up mgh = (1/2)mv² explicitly, cancel mass algebraically, solve for v², and REMEMBER the final step of taking the square root to get v itself — this is a very common place to lose a point even with the setup done correctly."
          }
        },
        {
          id: 'phys1-4-4', difficulty: 3, type: 'mcq', topic: 'Work-Energy Theorem',
          prompt: "A 4 kg object initially at rest is pushed by a net force, causing it to reach a speed of 6 m/s. According to the work-energy theorem, how much net work was done on the object?",
          choices: ['24 J', '72 J, since net work equals the change in kinetic energy: (1/2)(4)(6²) - 0 = 72 J', '36 J', '12 J'],
          correct: 1,
          explanation: {
            correct: "The work-energy theorem states that net work done equals the change in kinetic energy: W_net = ΔKE = KE_final - KE_initial = (1/2)(4 kg)(6 m/s)² - 0 = (1/2)(4)(36) = 72 J.",
            wrong: { 0: "24 J doesn't match the correct calculation of (1/2)(4)(36); this may result from a significant computational error.", 2: "36 J is v² alone (6²=36), without correctly multiplying by (1/2)m; this skips necessary steps in the kinetic energy formula.", 3: "12 J significantly undercounts the correct value; this may result from a more substantial calculation error." },
            tempting: "None of the distractors are especially close if the work-energy theorem is applied completely and correctly, but partial calculations (stopping before multiplying by all necessary factors) are a common source of error.",
            commonMistake: "Not completing the full kinetic energy calculation (forgetting the (1/2) coefficient or the mass factor) when applying the work-energy theorem.",
            apTip: "Memorize the work-energy theorem as W_net = ΔKE = KE_f - KE_i, and since this object starts from rest (KE_i = 0), the net work simply equals the final kinetic energy — calculate KE_final carefully and completely using the full (1/2)mv² formula."
          }
        },
        {
          id: 'phys1-4-5', difficulty: 4, type: 'mcq', topic: 'Energy Conservation with Friction',
          prompt: "A 2 kg block slides down a frictionless incline from a height of 3 m, then slides across a rough horizontal surface (with friction) before coming to rest. Using energy conservation, what is the total work done by friction as the block comes to rest (use g = 10 m/s²)?",
          choices: ['0 J, since energy is always conserved regardless of friction', '-60 J, since all of the initial gravitational potential energy (mgh = (2)(10)(3) = 60 J) is eventually dissipated by friction as the block comes to rest', '60 J (positive), since friction adds energy to the system', '-30 J, using only half the initial potential energy'],
          correct: 1,
          explanation: {
            correct: "The block starts with gravitational PE = mgh = (2)(10)(3) = 60 J and ends at rest (KE=0, and back at the reference height with no more PE), so by conservation of energy, all 60 J of initial energy must have been dissipated by the negative (energy-removing) work done by friction: W_friction = -60 J.",
            wrong: { 0: "TOTAL energy (including heat generated by friction) is conserved, but MECHANICAL energy (PE+KE) is NOT conserved when friction is present — friction converts mechanical energy into heat, doing negative work on the block's mechanical energy.", 2: "Friction always does NEGATIVE work on an object it's decelerating (opposing motion), removing mechanical energy from the system as heat, not adding positive energy to it.", 3: "This doesn't account for ALL the initial potential energy being converted; since the block comes completely to rest with no remaining kinetic or potential energy, ALL 60 J of the initial PE must be accounted for by friction's negative work, not just half." },
            tempting: "Choice A can tempt students who over-apply 'energy is always conserved' without distinguishing between TOTAL energy (always conserved, including heat) and MECHANICAL energy (which decreases whenever friction or other dissipative forces do negative work).",
            commonMistake: "Confusing total energy conservation (always true, including energy lost as heat) with mechanical energy conservation (only true in the ABSENCE of friction or other non-conservative forces) — friction specifically causes mechanical energy to decrease, converted to heat.",
            apTip: "When friction (or another non-conservative force) is present, use the work-energy theorem in its general form: KE_f + PE_f = KE_i + PE_i + W_friction (where W_friction is negative) — since the block starts with PE=60J, KE=0 and ends with PE=0, KE=0, all 60 J must be accounted for by friction's negative work, giving W_friction = -60 J."
          }
        },
        {
          id: 'phys1-4-6', difficulty: 5, type: 'mcq', topic: 'Power',
          prompt: "A motor lifts a 50 kg object at a constant velocity to a height of 10 m in 5 seconds. Using g = 10 m/s², what is the average power output of the motor?",
          choices: ['100 W', '500 W', '1000 W', '5000 W'],
          correct: 2,
          explanation: {
            correct: "Power = Work/time. Work done lifting the object = mgh = (50 kg)(10 m/s²)(10 m) = 5000 J. Power = 5000 J / 5 s = 1000 W.",
            wrong: { 0: "100 W significantly undercounts the correct value; this may result from a substantial calculation error, such as an extra unintended division.", 1: "500 W is half the correct value; this may result from omitting a factor of 2 somewhere, such as using half the correct height or mass.", 3: "5000 W is the total WORK done in Joules (mgh), not correctly divided by the time to convert it into power — this skips the essential final division step." },
            tempting: "Choice D is tempting because 5000 (the work in Joules) is a genuine, correct intermediate value, but forgetting to divide by time (5 seconds) to convert this into power leaves the answer as work, not power.",
            commonMistake: "Stopping at the calculation of total work done (mgh) without completing the final division by time to correctly arrive at power.",
            apTip: "Memorize Power = Work/time = (mgh)/t for lifting scenarios at constant velocity, and always complete BOTH steps explicitly: first calculate total work (mgh), then divide by the given time — double-check your final units come out in Watts (Joules/second)."
          }
        }
      ]
    },
    {
      id: 5,
      name: 'Unit 5: Momentum',
      questions: [
        {
          id: 'phys1-5-1', difficulty: 1, type: 'mcq', topic: 'Momentum Basics',
          prompt: "A 3 kg object moves at 4 m/s. What is its momentum?",
          choices: ['7 kg·m/s', '12 kg·m/s', '0.75 kg·m/s', '1 kg·m/s'],
          correct: 1,
          explanation: {
            correct: "Momentum p = mv = (3 kg)(4 m/s) = 12 kg·m/s.",
            wrong: { 0: "7 kg·m/s results from adding mass and velocity (3+4=7) instead of multiplying them.", 2: "0.75 kg·m/s results from dividing mass by velocity (3/4) instead of multiplying them.", 3: "1 kg·m/s doesn't match a reasonable calculation error pattern here; this is likely just an incorrect guess." },
            tempting: "Choice A is tempting for students who confuse the momentum formula with simple addition rather than multiplication.",
            commonMistake: "Adding or dividing mass and velocity instead of correctly multiplying them to find momentum.",
            apTip: "Memorize p = mv precisely — momentum is always mass MULTIPLIED by velocity, giving units of kg·m/s."
          }
        },
        {
          id: 'phys1-5-2', difficulty: 2, type: 'mcq', topic: 'Impulse-Momentum Theorem',
          prompt: "A net force of 10 N acts on an object for 3 seconds. What is the impulse delivered to the object?",
          choices: ['30 N·s, since impulse = force × time', '3.33 N·s', '13 N·s', '30 N'],
          correct: 0,
          explanation: {
            correct: "Impulse = F × t = (10 N)(3 s) = 30 N·s, representing the total change in momentum the object experiences due to this force acting over this time.",
            wrong: { 1: "3.33 N·s results from dividing force by time instead of multiplying them.", 2: "13 N·s results from adding force and time (10+3=13) instead of multiplying them.", 3: "30 N has the correct numeric value but the wrong units — impulse has units of N·s (or equivalently kg·m/s), not N alone." },
            tempting: "Choice D is tempting because it captures the right magnitude but drops the essential time unit, giving a dimensionally incorrect answer.",
            commonMistake: "Forgetting to include the correct units (N·s) for impulse, or confusing impulse's formula (force × time) with unrelated operations like addition or division.",
            apTip: "Memorize Impulse = FΔt, and always double check your answer's units come out to N·s (equivalent to kg·m/s, matching the units of momentum, since impulse equals the CHANGE in momentum)."
          }
        },
        {
          id: 'phys1-5-3', difficulty: 2, type: 'mcq', topic: 'Conservation of Momentum',
          prompt: "In a closed system with no external forces, two objects collide. According to conservation of momentum, the total momentum of the system:",
          choices: ['Always increases after the collision', 'Remains the same before and after the collision', 'Always decreases after the collision', 'Depends entirely on whether the collision is elastic or inelastic'],
          correct: 1,
          explanation: {
            correct: "Conservation of momentum states that in a closed system with no net external force, the TOTAL momentum of the system remains constant (the same) before and after any interaction, including collisions — regardless of whether the collision is elastic or inelastic.",
            wrong: { 0: "Total system momentum doesn't spontaneously increase in a closed system with no external forces; this would violate conservation of momentum.", 2: "Total system momentum doesn't spontaneously decrease either, for the same reason — momentum is conserved, not lost, within a closed system.", 3: "Momentum conservation holds regardless of whether a collision is elastic or inelastic — what DOES differ between elastic and inelastic collisions is whether KINETIC ENERGY is also conserved (only in elastic collisions), not whether momentum is conserved (momentum is always conserved in a closed system)." },
            tempting: "Choice D is a common and important mix-up — confusing momentum conservation (always holds in a closed system, regardless of collision type) with kinetic energy conservation (only holds for elastic collisions).",
            commonMistake: "Confusing momentum conservation (universal for closed systems, all collision types) with kinetic energy conservation (only holds for elastic collisions) — these are two DIFFERENT conserved/non-conserved quantities with different rules.",
            apTip: "Keep this critical distinction clear: momentum is ALWAYS conserved in a closed system (elastic or inelastic collisions alike); kinetic energy is conserved ONLY in elastic collisions (inelastic collisions lose some kinetic energy, often to heat/sound/deformation) — mixing these up is one of the most common errors in this unit."
          }
        },
        {
          id: 'phys1-5-4', difficulty: 3, type: 'mcq', topic: 'Elastic vs. Inelastic Collisions',
          prompt: "Two objects collide and stick together after the collision, moving as one combined mass. This type of collision is called:",
          choices: ['A perfectly elastic collision', 'A perfectly inelastic collision, since the objects stick together and move with a common final velocity', 'A collision where momentum is not conserved', 'An explosion'],
          correct: 1,
          explanation: {
            correct: "A perfectly inelastic collision is specifically defined as one where the colliding objects stick together after impact, moving with a common final velocity; kinetic energy is NOT conserved in this type of collision (some is converted to heat, sound, or deformation), though momentum still IS conserved.",
            wrong: { 0: "A perfectly elastic collision is one where kinetic energy IS conserved (objects bounce apart without energy loss to heat/deformation), the opposite of objects sticking together.", 2: "Momentum IS still conserved in this scenario (as in all closed-system collisions); what's NOT conserved is kinetic energy, not momentum.", 3: "An explosion describes objects moving APART from an initial combined or contained state (like a firework or a spring-loaded launch), the reverse pattern of objects coming together and sticking, which describes a collision, not an explosion." },
            tempting: "Choice C can tempt students who know energy is 'lost' in this type of collision and mistakenly generalize that momentum must also not be conserved, when momentum conservation is actually independent of energy conservation.",
            commonMistake: "Assuming that because kinetic energy isn't conserved in an inelastic collision, momentum must also not be conserved — these are separate, independently governed quantities.",
            apTip: "Remember the specific definition: perfectly INELASTIC collision = objects stick together, common final velocity, kinetic energy NOT conserved (but momentum still IS); perfectly ELASTIC collision = objects bounce apart, BOTH momentum AND kinetic energy conserved."
          }
        },
        {
          id: 'phys1-5-5', difficulty: 4, type: 'mcq', topic: 'Momentum Conservation Calculations',
          prompt: "A 2 kg cart moving at 6 m/s collides with a stationary 4 kg cart, and they stick together after the collision. What is their common velocity immediately after the collision?",
          choices: ['3 m/s', '2 m/s, using conservation of momentum: (2)(6) + (4)(0) = (2+4)(v), so 12 = 6v, giving v = 2 m/s', '6 m/s', '1 m/s'],
          correct: 1,
          explanation: {
            correct: "Using conservation of momentum: initial total momentum = final total momentum. m₁v₁ + m₂v₂ = (m₁+m₂)v_f. (2)(6) + (4)(0) = (2+4)v_f. 12 + 0 = 6v_f. v_f = 12/6 = 2 m/s.",
            wrong: { 0: "3 m/s doesn't match the correct division of 12 by 6; this may result from a computational error.", 2: "6 m/s is the initial velocity of the first cart alone; it doesn't account for the momentum being redistributed across the combined mass of both carts after they stick together.", 3: "1 m/s doesn't match the correct calculation; this may result from a different arithmetic error, such as dividing by the wrong total mass." },
            tempting: "Choice C is tempting because 6 m/s is a given value in the problem, but it's the INITIAL velocity of just one cart, not the correct final combined velocity after the perfectly inelastic collision.",
            commonMistake: "Using one of the given initial velocities directly as the final answer, rather than correctly applying conservation of momentum to find the new, redistributed common velocity after the collision.",
            apTip: "For perfectly inelastic collisions, always set up the full conservation of momentum equation explicitly: m₁v₁ + m₂v₂ = (m₁+m₂)v_f, plugging in ALL given values (including zero for a stationary object) before solving for the unknown final velocity."
          }
        },
        {
          id: 'phys1-5-6', difficulty: 5, type: 'mcq', topic: 'Momentum in Two Dimensions',
          prompt: "Two identical pucks collide on a frictionless surface. Puck A moves east at 5 m/s and strikes stationary Puck B. After the collision, Puck A moves at some angle north of east, and Puck B moves at some angle south of east. Which principle allows you to solve for both pucks\' final velocities and angles, given enough initial information?",
          choices: ['Only conservation of kinetic energy is needed, since momentum doesn\'t apply in two dimensions', 'Conservation of momentum applied SEPARATELY to both the x-component and y-component of total momentum (each conserved independently), potentially combined with conservation of kinetic energy if the collision is elastic', 'Momentum conservation only applies to one-dimensional collisions, not two-dimensional ones', 'The problem cannot be solved without knowing the exact masses of both pucks'],
          correct: 1,
          explanation: {
            correct: "In two-dimensional collisions, momentum conservation applies independently to EACH perpendicular component (x-direction momentum is conserved separately, and y-direction momentum is conserved separately), since momentum is a vector quantity; if the collision is also elastic, kinetic energy conservation provides an additional equation, together giving enough equations to solve for multiple unknown final velocities and angles.",
            wrong: { 0: "Momentum conservation absolutely DOES apply in two dimensions — it's a fundamental principle that extends naturally to any number of dimensions when applied component-wise (x and y separately).", 2: "Momentum conservation applies to collisions in any number of dimensions, not just one-dimensional collisions; in two dimensions, it's applied to each perpendicular component separately.", 3: "While specific numeric answers would require knowing the masses (or at least their ratio), the GENERAL principle/method for setting up and solving such problems (component-wise momentum conservation, plus kinetic energy conservation if elastic) doesn't require this information to identify; the question asks about the applicable PRINCIPLE, not a specific numeric solution." },
            tempting: "Choices A and C both represent significant misconceptions about momentum conservation's scope, incorrectly suggesting it doesn't apply to multi-dimensional or is somehow replaced by energy conservation, when in fact BOTH principles work together (momentum always, kinetic energy only if elastic) and momentum extends naturally to multiple dimensions via component-wise application.",
            commonMistake: "Assuming momentum conservation is limited to one-dimensional problems, rather than recognizing it extends to multiple dimensions by being applied independently to each perpendicular (x and y) component of the total momentum vector.",
            apTip: "For 2D collision problems, always set up TWO separate momentum conservation equations (one for x-components, one for y-components) using trigonometry to break each velocity into its component parts — and add a kinetic energy conservation equation as a THIRD equation if the collision is specified as elastic, giving enough equations to solve for multiple unknowns."
          }
        }
      ]
    },
    {
      id: 6,
      name: 'Unit 6: Simple Harmonic Motion',
      questions: [
        {
          id: 'phys1-6-1', difficulty: 1, type: 'mcq', topic: 'SHM Basics',
          prompt: "A mass on a spring oscillates back and forth. At the exact moment the mass is at its maximum displacement from equilibrium (the amplitude), what is true about its velocity and acceleration?",
          choices: ['Both velocity and acceleration are zero', 'Velocity is momentarily zero, while acceleration is at its maximum magnitude', 'Velocity is at its maximum, while acceleration is zero', 'Both velocity and acceleration are at their maximum simultaneously'],
          correct: 1,
          explanation: {
            correct: "At maximum displacement (amplitude), the mass momentarily stops moving (velocity = 0) as it changes direction, while the restoring force (and thus acceleration) is at its maximum magnitude at this point, since displacement from equilibrium is greatest here.",
            wrong: { 0: "Acceleration is NOT zero at maximum displacement; it's actually at its MAXIMUM magnitude there, since the restoring force is strongest when displacement from equilibrium is greatest.", 2: "This describes the situation at the EQUILIBRIUM position (zero displacement), not at maximum displacement — velocity is maximum and acceleration is zero at equilibrium, the opposite point in the cycle.", 3: "Velocity and acceleration in SHM are never both at their maximum simultaneously; they reach their respective maximums at OPPOSITE points in the cycle (velocity max at equilibrium, acceleration max at maximum displacement)." },
            tempting: "Choice C describes the exact opposite point in the cycle (equilibrium, not maximum displacement), and mixing up these two key points is a very common SHM error.",
            commonMistake: "Confusing the behavior at maximum displacement (v=0, a=max) with the behavior at equilibrium (v=max, a=0) — these are the two key reference points in SHM and are easy to swap.",
            apTip: "Memorize this pairing explicitly: at maximum displacement (amplitude) → velocity=0, acceleration=maximum; at equilibrium (zero displacement) → velocity=maximum, acceleration=0 — sketching the position, velocity, and acceleration graphs together can help solidify this relationship."
          }
        },
        {
          id: 'phys1-6-2', difficulty: 2, type: 'mcq', topic: 'Period of a Spring-Mass System',
          prompt: "The period of oscillation for a mass-spring system depends on which factors, according to T = 2π√(m/k)?",
          choices: ['Only the amplitude of oscillation', 'The mass (m) and the spring constant (k), but NOT the amplitude of oscillation', 'Only the spring constant, not the mass', 'Only the mass, not the spring constant'],
          correct: 1,
          explanation: {
            correct: "The period formula T = 2π√(m/k) shows that period depends on both mass (m) and spring constant (k); notably, AMPLITUDE does not appear anywhere in this formula, meaning the period of a simple harmonic oscillator is independent of its amplitude (a key, somewhat counterintuitive feature of ideal SHM).",
            wrong: { 0: "Amplitude doesn't appear in the period formula at all; period is actually independent of amplitude for ideal simple harmonic motion, a frequently tested, somewhat surprising fact.", 2: "The formula explicitly includes mass (m) as well as spring constant (k) inside the square root; period depends on BOTH factors, not spring constant alone.", 3: "The formula explicitly includes spring constant (k) as well as mass (m); period depends on BOTH factors, not mass alone." },
            tempting: "Choice A can tempt students who intuitively (but incorrectly) assume a bigger swing (larger amplitude) should take longer to complete, when ideal SHM period is actually independent of amplitude.",
            commonMistake: "Assuming amplitude affects the period of oscillation, when the formula T=2π√(m/k) shows period is actually independent of amplitude for ideal simple harmonic motion.",
            apTip: "Memorize T = 2π√(m/k) exactly, and specifically note what's NOT in the formula (amplitude) as much as what IS (mass and spring constant) — this is a frequently tested conceptual point, since it defies some students' intuition."
          }
        },
        {
          id: 'phys1-6-3', difficulty: 2, type: 'mcq', topic: 'Energy in SHM',
          prompt: "In an ideal (frictionless) spring-mass oscillating system, as the mass moves from maximum displacement toward the equilibrium position, what happens to its kinetic and potential energy?",
          choices: ['Both kinetic and potential energy increase', 'Kinetic energy increases while potential energy (elastic) decreases, with total mechanical energy remaining constant', 'Both kinetic and potential energy decrease', 'Total mechanical energy decreases due to energy loss'],
          correct: 1,
          explanation: {
            correct: "As the mass moves from maximum displacement (where elastic PE is maximum and KE is zero) toward equilibrium (where KE is maximum and elastic PE is zero), potential energy converts into kinetic energy; in an ideal, frictionless system, total mechanical energy (KE + PE) remains constant throughout the motion.",
            wrong: { 0: "These two forms of energy move in OPPOSITE directions during this motion (one increases as the other decreases), not both increasing together.", 2: "Similarly, these two forms of energy don't both decrease together; while total energy is conserved, energy is being CONVERTED from potential to kinetic, not lost from both simultaneously.", 3: "In an IDEAL (frictionless) system, total mechanical energy is conserved (constant), not decreasing; energy loss would only occur with friction or other non-conservative forces, which this ideal scenario excludes." },
            tempting: "Choice D can tempt students who over-apply real-world intuitions about energy loss, without recognizing that this specific scenario is explicitly described as ideal/frictionless, where total mechanical energy IS conserved.",
            commonMistake: "Not recognizing that in ideal SHM, kinetic and potential energy continuously convert into each other while their SUM (total mechanical energy) remains constant throughout the motion.",
            apTip: "For ideal SHM energy questions, always apply conservation of mechanical energy: KE + PE = constant total energy throughout the motion — energy shifts between kinetic and potential forms as the object moves, but the total never changes in a frictionless, ideal system."
          }
        },
        {
          id: 'phys1-6-4', difficulty: 3, type: 'mcq', topic: 'Pendulum Motion',
          prompt: "For a simple pendulum undergoing small-angle oscillations, the period T = 2π√(L/g). If the length of the pendulum is quadrupled, what happens to the period?",
          choices: ['The period is quadrupled', 'The period doubles, since T ∝ √L, and √4 = 2', 'The period is quartered', 'The period remains unchanged'],
          correct: 1,
          explanation: {
            correct: "Since T ∝ √L (period is proportional to the square root of length), if L increases by a factor of 4, T increases by a factor of √4 = 2 — the period doubles.",
            wrong: { 0: "This would be correct if T were directly proportional to L (not √L); but since the relationship involves a square root, quadrupling L only doubles T, not quadruples it.", 2: "This describes an inverse relationship, but T is directly (not inversely) related to √L — increasing L increases T, it doesn't decrease it.", 3: "Period definitely DOES depend on pendulum length according to the formula T=2π√(L/g); it doesn't remain unchanged when L changes." },
            tempting: "Choice A is a common trap — assuming direct proportionality (quadrupling L quadruples T) without accounting for the square root relationship, which produces a smaller change (doubling, not quadrupling).",
            commonMistake: "Ignoring the square root in the period formula and assuming a direct, linear proportionality between length and period, rather than correctly applying the square root relationship.",
            apTip: "For pendulum period problems, always apply the square root explicitly: if L changes by a factor of k, T changes by a factor of √k — memorize this pattern (analogous to the similar T²∝r³ relationship in orbital motion) to avoid the common error of assuming direct proportionality."
          }
        },
        {
          id: 'phys1-6-5', difficulty: 4, type: 'mcq', topic: 'SHM and Circular Motion Analogy',
          prompt: "Simple harmonic motion can be modeled as the projection of uniform circular motion onto one axis (e.g., the x-axis). Using this analogy, what does the ANGULAR velocity (ω) of the reference circular motion correspond to in the SHM system?",
          choices: ['The amplitude of the SHM oscillation', 'The angular frequency of the SHM oscillation, related to the period by ω = 2π/T', 'The maximum displacement of the SHM oscillation', 'The mass of the oscillating object'],
          correct: 1,
          explanation: {
            correct: "In the circular motion analogy for SHM, the angular velocity (ω) of the reference circle corresponds directly to the ANGULAR FREQUENCY of the SHM oscillation, related to the period T by the formula ω = 2π/T (or equivalently ω = 2πf, where f is the ordinary frequency).",
            wrong: { 0: "Amplitude in the SHM system corresponds to the RADIUS of the reference circle in this analogy, not to the angular velocity.", 2: "Maximum displacement is the same concept as amplitude, which corresponds to the circle's radius, not to angular velocity.", 3: "Mass is a property of the oscillating object itself, related to the SYSTEM's specific period formula (like T=2π√(m/k)) but not directly represented by the angular velocity of the reference circle in this particular geometric analogy." },
            tempting: "None of the distractors accurately match angular velocity's specific role in this analogy if the circular motion model of SHM is understood specifically, but blending together various SHM-related quantities (amplitude, period, angular frequency) without a precise mapping to the circular motion analogy is a common source of confusion.",
            commonMistake: "Not knowing the specific mapping between circular motion quantities (radius, angular velocity) and SHM quantities (amplitude, angular frequency) in this analogy model.",
            apTip: "Memorize the SHM-circular motion analogy mapping explicitly: the reference circle's RADIUS corresponds to the SHM's AMPLITUDE; the reference circle's ANGULAR VELOCITY (ω) corresponds to the SHM's ANGULAR FREQUENCY (ω = 2π/T) — this analogy is a powerful tool for deriving and understanding SHM equations."
          }
        },
        {
          id: 'phys1-6-6', difficulty: 5, type: 'mcq', topic: 'Damped Oscillations',
          prompt: "A real-world pendulum, unlike an ideal one, gradually loses amplitude over many oscillations due to air resistance and friction at its pivot. This phenomenon is called damping. What happens to the pendulum\'s period as its amplitude gradually decreases due to light damping (assuming small-angle oscillations throughout)?",
          choices: ['The period increases significantly as amplitude decreases', 'For light damping with small-angle oscillations, the period remains approximately constant (nearly independent of the decreasing amplitude), similar to ideal SHM, even as the oscillation\'s energy and amplitude gradually decrease', 'The period decreases to zero immediately once damping begins', 'Damping has no effect on the pendulum\'s motion whatsoever'],
          correct: 1,
          explanation: {
            correct: "For light (small) damping with oscillations that remain in the small-angle regime, the period stays approximately constant even as the amplitude gradually decreases over time — this reflects the same general SHM property that period is independent of amplitude, which continues to approximately hold even as energy is slowly lost, as long as the damping is light and angles remain small.",
            wrong: { 0: "This contradicts the approximate independence of period from amplitude that holds for lightly damped SHM (in the small-angle regime); period doesn't significantly increase as amplitude decreases under these conditions.", 2: "The period doesn't drop to zero from damping; damping affects primarily the AMPLITUDE (and total energy) over time, causing the oscillations to gradually die out, while the period remains comparatively stable (for light damping) throughout this process.", 3: "Damping clearly DOES have an effect — it causes the amplitude (and energy) of oscillation to gradually decrease over time, eventually bringing the pendulum to rest; the period's near-constancy under light damping doesn't mean damping has no effect at all, just that its main visible effect is on amplitude/energy, not period." },
            tempting: "Choice A can tempt students who assume ANY energy loss must proportionally slow down or otherwise disrupt the periodic timing significantly, without knowing the specific, somewhat counterintuitive result that period remains approximately stable under light damping conditions.",
            commonMistake: "Assuming damping must significantly alter the period of oscillation, rather than recognizing that under light damping (and small-angle conditions), period remains approximately constant while amplitude (and energy) decrease.",
            apTip: "College-level insight: this approximate independence of period from amplitude, even under light damping, is why pendulum clocks can remain reasonably accurate timekeepers despite gradually losing energy to friction/air resistance between windings — connecting this practical, real-world application to the underlying physics concept demonstrates depth on an FRQ about damped oscillations."
          }
        }
      ]
    },
    {
      id: 7,
      name: 'Unit 7: Torque & Rotational Motion',
      questions: [
        {
          id: 'phys1-7-1', difficulty: 1, type: 'mcq', topic: 'Torque Basics',
          prompt: "A force of 20 N is applied perpendicular to a wrench at a distance of 0.3 m from the bolt (the pivot point). What is the resulting torque?",
          choices: ['6.67 N·m', '6 N·m, since torque = force × perpendicular distance = 20 × 0.3', '20.3 N·m', '17 N·m'],
          correct: 1,
          explanation: {
            correct: "Torque = F × r (when force is perpendicular to the lever arm) = (20 N)(0.3 m) = 6 N·m.",
            wrong: { 0: "6.67 N·m results from dividing force by distance (20/0.3) instead of correctly multiplying them.", 2: "20.3 N·m results from adding force and distance (20+0.3) instead of multiplying them.", 3: "17 N·m doesn't match a clear calculation pattern from the given values; this may result from a more significant arithmetic error." },
            tempting: "None of the distractors are especially close if the torque formula is applied correctly, but confusing multiplication with addition or division of the two given values is a plausible source of error.",
            commonMistake: "Adding or dividing force and distance instead of correctly multiplying them to find torque.",
            apTip: "Memorize torque = F × r (for perpendicular force) precisely, giving units of N·m — always multiply the force and the perpendicular distance (lever arm) together."
          }
        },
        {
          id: 'phys1-7-2', difficulty: 2, type: 'mcq', topic: 'Torque at an Angle',
          prompt: "A force of 10 N is applied to a wrench at a distance of 0.5 m from the pivot, but at an angle of 30° from the wrench handle (not perpendicular). Which formula correctly calculates the resulting torque?",
          choices: ['τ = Fr = (10)(0.5) = 5 N·m, ignoring the angle entirely', 'τ = Fr·sin(θ) = (10)(0.5)(sin 30°) = (10)(0.5)(0.5) = 2.5 N·m', 'τ = Fr·cos(θ) = (10)(0.5)(cos 30°) ≈ 4.33 N·m', 'τ = F + r + θ'],
          correct: 1,
          explanation: {
            correct: "The general torque formula is τ = Fr·sin(θ), where θ is the angle between the force vector and the lever arm (the line from pivot to point of force application); this formula correctly accounts for only the PERPENDICULAR component of the force actually contributing to rotation: τ = (10)(0.5)(sin 30°) = (10)(0.5)(0.5) = 2.5 N·m.",
            wrong: { 0: "This ignores the angle entirely, incorrectly assuming the force is fully perpendicular (which would only be exactly correct if θ=90°, not 30° as given here).", 2: "This incorrectly uses cosine instead of sine; the torque formula specifically uses sin(θ) to extract the perpendicular component of the force relative to the lever arm, not cos(θ).", 3: "This isn't a valid physics formula at all; torque is calculated via multiplication (Fr sinθ), not simple addition of these three different quantities with different units." },
            tempting: "Choice C is the classic sin/cos mix-up — using cosine instead of sine when calculating torque at an angle, confusing this with a different application (like resolving forces along/perpendicular to a surface elsewhere in mechanics).",
            commonMistake: "Confusing sine and cosine when applying the general torque formula τ = Fr sinθ, or forgetting to account for the angle at all when the force isn't applied perfectly perpendicular to the lever arm.",
            apTip: "Memorize τ = Fr sinθ as the GENERAL torque formula, where θ is measured between the force vector and the lever arm; when θ=90° (perpendicular force), sin(90°)=1, simplifying to the special case τ=Fr — always check whether a problem gives a perpendicular force (simple case) or an angled force (requiring the full sinθ formula)."
          }
        },
        {
          id: 'phys1-7-3', difficulty: 2, type: 'mcq', topic: 'Rotational Equilibrium',
          prompt: "A seesaw is in rotational equilibrium (not rotating) with two people sitting on opposite sides at different distances from the pivot. What condition must be satisfied for this equilibrium?",
          choices: ['Both people must have exactly the same mass', 'The sum of all torques about the pivot must equal zero (clockwise torques balance counterclockwise torques)', 'Both people must sit at exactly the same distance from the pivot', 'The seesaw must be perfectly horizontal at all times'],
          correct: 1,
          explanation: {
                    correct: "Rotational equilibrium requires that the net torque about the pivot point equals zero, meaning the clockwise torques and counterclockwise torques must exactly balance each other — this can be achieved with different masses at different distances, as long as their torques (force × distance, accounting for direction) balance out.",
            wrong: { 0: "Equal mass isn't required for rotational equilibrium; two different masses at different distances from the pivot can still balance if their torques (mass × g × distance) are equal in magnitude but opposite in rotational direction.", 2: "Equal distance from the pivot isn't required either; what matters is that the TORQUES (force × distance) balance, which can occur with different distances if the masses/forces are adjusted accordingly.", 3: "While a balanced seesaw often appears horizontal, rotational equilibrium is fundamentally about balanced TORQUES, not a specific required orientation; the key physical condition is the sum of torques equaling zero." },
            tempting: "Choice A is tempting because a seesaw with equal masses at equal distances is the most commonly pictured 'balanced' scenario, but rotational equilibrium is more general — it's about balancing TORQUES, which can be achieved with different mass/distance combinations.",
            commonMistake: "Assuming a specific configuration (equal masses, equal distances) is REQUIRED for equilibrium, rather than understanding the more general underlying principle (net torque = zero) that allows for many different balanced configurations.",
            apTip: "Always express rotational equilibrium conditions in terms of the general principle: sum of clockwise torques = sum of counterclockwise torques (or equivalently, net torque = 0) — this allows solving for an unknown mass or distance needed to balance a given system, rather than assuming equal values are required."
          }
        },
        {
          id: 'phys1-7-4', difficulty: 3, type: 'mcq', topic: 'Moment of Inertia',
          prompt: "Two objects have the same mass, but Object A has its mass concentrated close to the axis of rotation, while Object B has its mass distributed farther from the axis. Which object has the greater moment of inertia?",
          choices: ['Object A, since moment of inertia depends only on mass, not distribution', 'Object B, since moment of inertia depends on how mass is distributed relative to the axis, with mass farther from the axis contributing more to a larger moment of inertia', 'Both objects have identical moments of inertia, since they have the same total mass', 'Moment of inertia is unrelated to mass distribution or distance from the axis'],
          correct: 1,
          explanation: {
            correct: "Moment of inertia (I = Σmr², summing each mass element times the square of its distance from the axis) depends significantly on HOW mass is distributed relative to the rotation axis, not just the total mass; mass distributed farther from the axis (like Object B) contributes more to the total moment of inertia (since r² grows with distance) than the same mass concentrated close to the axis (Object A).",
            wrong: { 0: "Moment of inertia depends on both mass AND its distribution/distance from the axis (via the r² term), not mass alone — this is precisely why two objects of equal mass can have different moments of inertia.", 2: "Despite having equal total mass, these two objects have DIFFERENT moments of inertia specifically because their mass is distributed differently relative to the rotation axis, which directly affects the I = Σmr² calculation.", 3: "Moment of inertia is fundamentally DEFINED in terms of mass distribution relative to the axis (I = Σmr²); distance from the axis is a central, defining factor, not an unrelated consideration." },
            tempting: "Choice A and C both reflect the common misconception that moment of inertia depends only on total mass (like ordinary inertia/mass in linear motion), without accounting for the crucial role of mass DISTRIBUTION relative to the rotation axis that's unique to rotational inertia.",
            commonMistake: "Treating moment of inertia like simple mass (a single number independent of geometry), rather than recognizing it specifically depends on how mass is distributed relative to the axis of rotation (via the r² term in I = Σmr²).",
            apTip: "Always remember moment of inertia's key defining feature: I = Σmr² (or ∫r²dm for continuous objects) — mass farther from the axis contributes disproportionately MORE to moment of inertia (due to the SQUARED distance term) than the same mass close to the axis; this is why a hollow cylinder has greater rotational inertia than a solid cylinder of the same mass and outer radius."
          }
        },
        {
          id: 'phys1-7-5', difficulty: 4, type: 'mcq', topic: 'Rotational Analog of Newton\'s Second Law',
          prompt: "The rotational analog of Newton\'s Second Law (F=ma) is τ = Iα, where τ is torque, I is moment of inertia, and α is angular acceleration. If a net torque of 12 N·m is applied to an object with moment of inertia 3 kg·m², what is the resulting angular acceleration?",
          choices: ['36 rad/s²', '4 rad/s², since α = τ/I = 12/3', '15 rad/s²', '0.25 rad/s²'],
          correct: 1,
          explanation: {
            correct: "Using τ = Iα, rearranged to solve for angular acceleration: α = τ/I = 12 N·m / 3 kg·m² = 4 rad/s².",
            wrong: { 0: "36 rad/s² results from multiplying τ and I (12×3=36) instead of correctly dividing.", 2: "15 rad/s² results from adding τ and I (12+3=15) instead of correctly dividing.", 3: "0.25 rad/s² incorrectly inverts the division (3/12 instead of 12/3)." },
            tempting: "Choice A is a common trap — multiplying torque and moment of inertia together instead of correctly dividing torque by moment of inertia to solve for angular acceleration.",
            commonMistake: "Multiplying instead of dividing when rearranging τ=Iα to solve for angular acceleration (α=τ/I), directly mirroring the analogous common error with F=ma.",
            apTip: "Notice the direct structural parallel to Newton's Second Law: τ=Iα is exactly analogous to F=ma (torque plays the role of force, moment of inertia plays the role of mass, angular acceleration plays the role of linear acceleration) — use this analogy to remember how to correctly rearrange and solve the equation."
          }
        },
        {
          id: 'phys1-7-6', difficulty: 5, type: 'mcq', topic: 'Conservation of Angular Momentum',
          prompt: "A figure skater spinning with arms extended pulls her arms in close to her body while spinning on frictionless ice. What happens to her angular velocity and moment of inertia, and why?",
          choices: ['Both angular velocity and moment of inertia increase', 'Moment of inertia decreases (mass moves closer to the rotation axis), and angular velocity increases correspondingly, since angular momentum (L = Iω) is conserved in the absence of external torque', 'Moment of inertia increases while angular velocity decreases', 'Neither angular velocity nor moment of inertia changes, since no external force is acting'],
          correct: 1,
          explanation: {
            correct: "Pulling her arms in moves mass closer to the rotation axis, DECREASING her moment of inertia (since I=Σmr², and r decreases for that mass); with no external torque acting (frictionless ice, ignoring air resistance), angular momentum L=Iω is conserved, meaning if I decreases, ω (angular velocity) must correspondingly INCREASE to keep L constant — this is exactly why figure skaters spin faster when pulling their arms in.",
            wrong: { 0: "This is backwards for moment of inertia — pulling arms in DECREASES moment of inertia (mass moves closer to the axis), not increases it; angular velocity does increase, but for the opposite reason regarding I.", 2: "This is also backwards on both counts — moment of inertia decreases (not increases) as arms pull in, and angular velocity increases (not decreases) as a result, consistent with angular momentum conservation.", 3: "Both quantities DO change — moment of inertia clearly changes as mass distribution changes (arms pulling in), and angular velocity changes correspondingly due to conservation of angular momentum; the absence of external TORQUE doesn't mean I and ω individually stay constant, only that their PRODUCT (angular momentum) stays constant." },
            tempting: "Choice D can tempt students who confuse 'no external torque acts' (meaning angular MOMENTUM is conserved) with 'nothing about the rotational motion changes at all' — but I and ω can each change individually, as long as their product L=Iω remains constant.",
            commonMistake: "Confusing conservation of angular momentum (the PRODUCT Iω staying constant) with the individual quantities I and ω themselves staying constant — only their product is conserved when no external torque acts, not each factor separately.",
            apTip: "College-level insight: this figure skater example is the classic, most frequently cited illustration of angular momentum conservation — explicitly state the relationship L=Iω=constant, and explain that decreasing I necessarily requires increasing ω to compensate (and vice versa) for full credit, rather than just describing the outcome qualitatively without the underlying conservation equation."
          }
        }
      ]
    }
  ],
  frqs: [
    {
      id: 'phys1-frq-1', difficulty: 4, unit: 2,
      prompt: "A 2 kg block is pushed across a horizontal floor with an applied horizontal force of 15 N. The coefficient of kinetic friction between the block and floor is 0.2 (use g = 10 m/s²).\n\n(a) Calculate the normal force acting on the block.\n(b) Calculate the force of kinetic friction acting on the block.\n(c) Calculate the net force and resulting acceleration of the block.\n(d) If the applied force is removed after the block reaches a speed of 4 m/s, how much additional time will it take for the block to come to rest, assuming kinetic friction continues to act?",
      rubricPoints: [
        "Correctly calculates normal force = mg = (2)(10) = 20 N (1 pt)",
        "Correctly calculates friction force = μN = (0.2)(20) = 4 N (1 pt)",
        "Correctly calculates net force = 15 - 4 = 11 N and acceleration = F/m = 11/2 = 5.5 m/s² (1 pt)",
        "Correctly recognizes that once the applied force is removed, only friction (4 N) acts, giving a deceleration of a = F/m = 4/2 = 2 m/s² (1 pt)",
        "Correctly uses v = v0 + at (0 = 4 + (-2)t) to solve for t = 2 seconds (1 pt)"
      ],
      sampleResponse: "(a) Normal force = mg = (2 kg)(10 m/s²) = 20 N.\n(b) Friction force = μ × N = (0.2)(20 N) = 4 N.\n(c) Net force = applied force - friction = 15 N - 4 N = 11 N. Acceleration = F_net/m = 11 N / 2 kg = 5.5 m/s².\n(d) With the applied force removed, only friction (4 N) acts on the block, causing deceleration: a = F/m = 4 N / 2 kg = 2 m/s² (deceleration, so a = -2 m/s² if taking the original motion direction as positive). Using v = v0 + at: 0 = 4 + (-2)t, so t = 4/2 = 2 seconds."
    },
    {
      id: 'phys1-frq-2', difficulty: 4, unit: 4,
      prompt: "A 1.5 kg cart starts from rest at the top of a frictionless track at a height of 2 m above the bottom, then continues onto a rough horizontal section at the bottom (use g = 10 m/s²).\n\n(a) Using conservation of energy, calculate the cart's speed at the bottom of the frictionless track.\n(b) If the cart travels 4 m across the rough horizontal section before coming to rest, calculate the work done by friction over that distance.\n(c) Calculate the coefficient of kinetic friction between the cart and the horizontal section.",
      rubricPoints: [
        "Correctly applies conservation of energy (mgh = (1/2)mv²) to find v = √(2gh) = √(2×10×2) = √40 ≈ 6.32 m/s (1 pt)",
        "Correctly identifies that the cart's kinetic energy at the bottom equals the energy that must be removed by friction to bring it to rest (1 pt)",
        "Correctly calculates work done by friction: W_friction = -KE = -(1/2)(1.5)(40) = -30 J (1 pt)",
        "Correctly relates W_friction = -μmg·d to solve for μ: -30 = -μ(1.5)(10)(4), giving μ = 30/60 = 0.5 (1 pt)"
      ],
      sampleResponse: "(a) By conservation of energy: mgh = (1/2)mv², so v² = 2gh = 2(10)(2) = 40, giving v = √40 ≈ 6.32 m/s.\n(b) The cart's kinetic energy at the bottom is (1/2)mv² = (1/2)(1.5)(40) = 30 J. Since the cart comes to rest, all of this kinetic energy must be removed by friction, so W_friction = -30 J.\n(c) The work done by friction is also W_friction = -μmg·d (friction force times distance, negative since it opposes motion). Setting -30 = -μ(1.5)(10)(4) = -60μ, solving gives μ = 30/60 = 0.5."
    },
    {
      id: 'phys1-frq-3', difficulty: 3, unit: 1,
      prompt: "A ball is thrown horizontally off a 20 m cliff with an initial horizontal velocity of 15 m/s (use g=10 m/s²).\n\n(a) Calculate the time for the ball to reach the ground.\n(b) Calculate the horizontal distance traveled before landing.\n(c) Calculate the ball's vertical velocity component just before landing.",
      rubricPoints: [
        "Correctly uses vertical motion equation h=(1/2)gt² to solve for t: 20=(1/2)(10)t², t²=4, t=2s (1 pt)",
        "Correctly calculates horizontal distance = v_x × t = 15×2 = 30m (1 pt)",
        "Correctly calculates vertical velocity using v=gt = 10×2 = 20 m/s (1 pt)"
      ],
      sampleResponse: "(a) Using h=(1/2)gt²: 20=(1/2)(10)t², so t²=4, t=2 seconds.\n(b) Horizontal distance = v_x × t = 15 m/s × 2 s = 30 m.\n(c) Vertical velocity = gt = (10 m/s²)(2 s) = 20 m/s (downward)."
    },
    {
      id: 'phys1-frq-4', difficulty: 4, unit: 2,
      prompt: "Two blocks (3 kg and 5 kg) are connected by a string over a pulley and hang vertically (Atwood machine), with the 5 kg block initially held at rest then released (use g=10 m/s²).\n\n(a) Derive the equation for the system's acceleration using Newton's Second Law applied to each block separately.\n(b) Calculate the acceleration.\n(c) Calculate the tension in the string.",
      rubricPoints: [
        "Correctly writes Newton's Second Law for each block: T-m1g=m1a (rising block) and m2g-T=m2a (falling block) (1 pt)",
        "Correctly adds the two equations to eliminate T and solve for a = (m2-m1)g/(m1+m2) = 2(10)/8 = 2.5 m/s² (1 pt)",
        "Correctly calculates tension using either original equation: T = m1(g+a) = 3(12.5) = 37.5 N (1 pt)"
      ],
      sampleResponse: "(a) For the 3 kg (rising) block: T - m1g = m1a. For the 5 kg (falling) block: m2g - T = m2a.\n(b) Adding both equations: m2g - m1g = m1a + m2a, so (m2-m1)g = (m1+m2)a, giving a = (5-3)(10)/(5+3) = 20/8 = 2.5 m/s².\n(c) Using T - m1g = m1a: T = m1(g+a) = 3(10+2.5) = 3(12.5) = 37.5 N."
    },
    {
      id: 'phys1-frq-5', difficulty: 4, unit: 3,
      prompt: "A 0.5 kg ball attached to a 1.2 m string swings in a horizontal circle at a constant speed of 3 m/s (use g=10 m/s²).\n\n(a) Calculate the centripetal acceleration of the ball.\n(b) Calculate the centripetal force required to maintain this circular motion.\n(c) Explain what provides this centripetal force in this specific scenario.",
      rubricPoints: [
        "Correctly calculates centripetal acceleration a=v²/r = 9/1.2 = 7.5 m/s² (1 pt)",
        "Correctly calculates centripetal force F=ma = 0.5×7.5 = 3.75 N (1 pt)",
        "Correctly explains that the horizontal component of the string's tension provides the centripetal force (1 pt)"
      ],
      sampleResponse: "(a) Centripetal acceleration = v²/r = (3)²/1.2 = 9/1.2 = 7.5 m/s².\n(b) Centripetal force = ma = (0.5 kg)(7.5 m/s²) = 3.75 N.\n(c) The tension in the string (specifically, its horizontal component, since the ball swings in a horizontal circle) provides the centripetal force, directed toward the center of the circular path."
    },
    {
      id: 'phys1-frq-6', difficulty: 4, unit: 4,
      prompt: "A 4 kg block slides down a frictionless 30° incline from a height of 2 m (use g=10 m/s²).\n\n(a) Using conservation of energy, calculate the block's speed at the bottom of the incline.\n(b) Explain why the angle of the incline doesn't appear directly in your energy calculation.\n(c) If the incline had friction instead, explain qualitatively how this would affect the speed at the bottom.",
      rubricPoints: [
        "Correctly applies mgh=(1/2)mv² to solve v=√(2gh)=√(2×10×2)=√40≈6.32 m/s (1 pt)",
        "Correctly explains that energy conservation depends only on the height dropped (h), not the specific path/angle taken to get there (1 pt)",
        "Correctly explains that friction would do negative work, removing some mechanical energy as heat, resulting in a lower final speed than the frictionless case (1 pt)"
      ],
      sampleResponse: "(a) mgh = (1/2)mv². v² = 2gh = 2(10)(2) = 40. v = √40 ≈ 6.32 m/s.\n(b) The angle doesn't appear directly because conservation of energy depends only on the total height dropped (h), not the specific path or angle used to get there — this is a key feature of gravitational potential energy being path-independent.\n(c) With friction, some mechanical energy would be converted to heat as the block slides down, meaning less kinetic energy (and thus a lower final speed) than the frictionless case, since not all of the gravitational potential energy would convert into kinetic energy."
    },
    {
      id: 'phys1-frq-7', difficulty: 4, unit: 5,
      prompt: "A 2 kg cart moving at 4 m/s collides with a stationary 6 kg cart. After the collision, the two carts move together (perfectly inelastic collision).\n\n(a) Calculate the common velocity after the collision using conservation of momentum.\n(b) Calculate the kinetic energy before and after the collision.\n(c) Explain what happened to the kinetic energy that was lost, referencing the type of collision.",
      rubricPoints: [
        "Correctly applies conservation of momentum: (2)(4)+(6)(0)=(2+6)v, giving v=1 m/s (1 pt)",
        "Correctly calculates KE before = (1/2)(2)(16)=16J and KE after = (1/2)(8)(1)=4J (1 pt)",
        "Correctly explains the lost kinetic energy (12J) was converted to other forms like heat/sound/deformation, characteristic of an inelastic collision where kinetic energy is not conserved (though momentum still is) (1 pt)"
      ],
      sampleResponse: "(a) Conservation of momentum: (2)(4) + (6)(0) = (2+6)v. 8 = 8v. v = 1 m/s.\n(b) KE before = (1/2)(2)(4²) = 16 J. KE after = (1/2)(8)(1²) = 4 J.\n(c) 12 J of kinetic energy was lost, converted into other forms of energy such as heat, sound, and deformation of the colliding carts. This is characteristic of a perfectly inelastic collision, where momentum is always conserved but kinetic energy is NOT conserved, since the objects stick together and some kinetic energy is unavoidably converted to these other forms during the collision."
    },
    {
      id: 'phys1-frq-8', difficulty: 4, unit: 6,
      prompt: "A 0.3 kg mass on a spring (k=48 N/m) is displaced 0.1 m from equilibrium and released, undergoing simple harmonic motion.\n\n(a) Calculate the period of oscillation.\n(b) Calculate the maximum speed of the mass during its oscillation.\n(c) Explain at what point in the motion this maximum speed occurs, and why.",
      rubricPoints: [
        "Correctly calculates T=2π√(m/k)=2π√(0.3/48)=2π√(0.00625)≈0.5 seconds (1 pt)",
        "Correctly uses energy conservation ((1/2)kA²=(1/2)mv_max²) to solve for v_max = A√(k/m) = 0.1√(48/0.3) = 0.1×12.65≈1.265 m/s (1 pt)",
        "Correctly explains maximum speed occurs at the equilibrium position (zero displacement), since all elastic PE has converted to KE there (1 pt)"
      ],
      sampleResponse: "(a) T = 2π√(m/k) = 2π√(0.3/48) = 2π√0.00625 ≈ 2π(0.0791) ≈ 0.497 s.\n(b) Using energy conservation: (1/2)kA² = (1/2)mv_max². v_max = A√(k/m) = 0.1√(48/0.3) = 0.1 × √160 ≈ 0.1 × 12.65 ≈ 1.265 m/s.\n(c) Maximum speed occurs at the equilibrium position (zero displacement from the spring's natural length), since this is where all the elastic potential energy has been converted into kinetic energy — at any other point, some energy remains as elastic PE, meaning less KE (and thus lower speed) is available."
    },
    {
      id: 'phys1-frq-9', difficulty: 4, unit: 7,
      prompt: "A uniform rod of length 2 m and mass 4 kg is pivoted at one end and held horizontally, then released from rest, rotating downward due to gravity (use g=10 m/s², and treat the rod's moment of inertia about the pivot as I=(1/3)ML²).\n\n(a) Calculate the torque due to gravity acting on the rod at the moment of release, treating gravity as acting at the rod's center of mass.\n(b) Calculate the rod's moment of inertia about the pivot.\n(c) Calculate the rod's angular acceleration at the moment of release.",
      rubricPoints: [
        "Correctly calculates torque using the center of mass at L/2, and weight Mg: τ=Mg×(L/2)=4(10)(1)=40 N·m (1 pt)",
        "Correctly calculates I=(1/3)ML²=(1/3)(4)(4)=5.33 kg·m² (1 pt)",
        "Correctly applies τ=Iα to solve α=τ/I=40/5.33≈7.5 rad/s² (1 pt)"
      ],
      sampleResponse: "(a) The weight (Mg = 40 N) acts at the center of mass, located at L/2 = 1 m from the pivot. Torque = Mg × (L/2) = 4(10)(1) = 40 N·m.\n(b) I = (1/3)ML² = (1/3)(4)(2²) = (1/3)(16) = 5.33 kg·m².\n(c) Using τ=Iα: α = τ/I = 40/5.33 ≈ 7.5 rad/s²."
    },
    {
      id: 'phys1-frq-10', difficulty: 3, unit: 1,
      prompt: "A car accelerates uniformly from rest and covers 100 m in 5 seconds.\n\n(a) Calculate the car's acceleration.\n(b) Calculate the car's velocity at t=5s.\n(c) Calculate the distance covered during just the first 2 seconds.",
      rubricPoints: [
        "Correctly uses d=(1/2)at² to solve for a: 100=(1/2)a(25), a=8 m/s² (1 pt)",
        "Correctly calculates v=at=8(5)=40 m/s (1 pt)",
        "Correctly calculates d=(1/2)(8)(2²)=(1/2)(8)(4)=16m for the first 2 seconds (1 pt)"
      ],
      sampleResponse: "(a) d=(1/2)at². 100=(1/2)a(5²)=(1/2)a(25)=12.5a. a=100/12.5=8 m/s².\n(b) v=at=8(5)=40 m/s.\n(c) d=(1/2)at²=(1/2)(8)(2²)=(1/2)(8)(4)=16 m."
    },
    {
      id: 'phys1-frq-11', difficulty: 4, unit: 3,
      prompt: "A satellite orbits Earth at a radius of 7000 km with an orbital period of 5800 seconds.\n\n(a) Calculate the satellite's orbital speed.\n(b) Calculate the satellite's centripetal acceleration.\n(c) Explain what provides this centripetal acceleration.",
      rubricPoints: [
        "Correctly calculates speed using v=2πr/T = 2π(7,000,000)/5800 ≈ 7,586 m/s (1 pt)",
        "Correctly calculates centripetal acceleration a=v²/r ≈ (7586)²/7,000,000 ≈ 8.22 m/s² (1 pt)",
        "Correctly explains Earth's gravitational force on the satellite provides this centripetal acceleration (1 pt)"
      ],
      sampleResponse: "(a) v = 2πr/T = 2π(7,000,000 m)/5800 s ≈ 43,982,297/5800 ≈ 7,586 m/s.\n(b) a = v²/r = (7586)²/7,000,000 ≈ 57,547,396/7,000,000 ≈ 8.22 m/s².\n(c) Earth's gravitational force on the satellite provides this centripetal acceleration, continuously pulling the satellite toward Earth's center and keeping it in its orbital path."
    },
    {
      id: 'phys1-frq-12', difficulty: 4, unit: 5,
      prompt: "A 0.2 kg ball moving at 5 m/s strikes a wall and bounces straight back at 4 m/s. The collision lasts 0.05 seconds.\n\n(a) Calculate the change in momentum of the ball.\n(b) Calculate the average force exerted by the wall on the ball.\n(c) Explain why momentum is not conserved for the ball alone in this scenario, even though momentum conservation is a fundamental principle.",
      rubricPoints: [
        "Correctly calculates Δp using signed velocities (taking initial direction as positive): Δp = m(v_f-v_i) = 0.2(-4-5) = 0.2(-9) = -1.8 kg·m/s (1 pt)",
        "Correctly calculates average force using F=Δp/Δt = -1.8/0.05 = -36 N (1 pt)",
        "Correctly explains that the ball alone is not a closed/isolated system, since the wall exerts an external force on it; momentum IS conserved for the ball+wall+Earth system considered together (1 pt)"
      ],
      sampleResponse: "(a) Taking the initial direction as positive: Δp = m(v_f - v_i) = 0.2(-4 - 5) = 0.2(-9) = -1.8 kg·m/s.\n(b) F = Δp/Δt = -1.8/0.05 = -36 N (the negative sign indicates the force is in the direction opposite to the ball's initial motion).\n(c) Momentum conservation applies to CLOSED (isolated) systems with no net external force. The ball alone is not a closed system, since the wall exerts an external force on it during the collision; momentum IS conserved when considering the ball plus the wall (and ultimately the Earth, which the wall is attached to) as the full system, since any momentum change in the ball is balanced by an equal and opposite change in the wall/Earth."
    },
    {
      id: 'phys1-frq-13', difficulty: 3, unit: 6,
      prompt: "A pendulum has a period of 2 seconds on Earth (g=10 m/s²).\n\n(a) Calculate the length of this pendulum.\n(b) Calculate what the period would be if this same pendulum were taken to the Moon, where g≈1.6 m/s².\n(c) Explain, conceptually, why the period increases in a lower-gravity environment.",
      rubricPoints: [
        "Correctly uses T=2π√(L/g) to solve for L: 2=2π√(L/10), solving gives L≈1.013 m (1 pt)",
        "Correctly recalculates the period on the Moon using the same L with g=1.6: T=2π√(1.013/1.6)≈5.0 seconds (1 pt)",
        "Correctly explains that lower gravity means a weaker restoring force pulling the pendulum back toward equilibrium, causing it to swing more slowly and take longer per cycle (1 pt)"
      ],
      sampleResponse: "(a) T=2π√(L/g). 2=2π√(L/10). Squaring and solving: L = g(T/2π)² = 10(2/2π)² = 10(0.318)² ≈ 1.013 m.\n(b) On the Moon: T=2π√(L/g)=2π√(1.013/1.6)=2π√0.633≈2π(0.795)≈5.0 seconds.\n(c) Lower gravity means a weaker restoring force pulling the pendulum bob back toward its equilibrium position at any given displacement, so the pendulum accelerates more slowly and takes longer to complete each swing, resulting in a longer period."
    },
    {
      id: 'phys1-frq-14', difficulty: 4, unit: 7,
      prompt: "A solid disk (I=(1/2)MR²) and a hoop (I=MR²) of the same mass and radius are released from rest at the top of the same incline and allowed to roll without slipping to the bottom.\n\n(a) Explain why the disk reaches the bottom before the hoop, using the concept of moment of inertia.\n(b) Explain how energy conservation applies to this scenario, referencing both translational and rotational kinetic energy.\n(c) Predict what would happen if both objects instead slid down a frictionless incline without rotating at all.",
      rubricPoints: [
        "Correctly explains that the hoop's larger moment of inertia (I=MR² vs (1/2)MR² for the disk) means more of its gravitational PE converts to rotational KE and less to translational KE, making it slower (1 pt)",
        "Correctly applies energy conservation: mgh = (1/2)mv² + (1/2)Iω², splitting energy between translational and rotational forms (1 pt)",
        "Correctly predicts that without rotation (frictionless, no rolling), both objects would reach the bottom at the same time/speed, since all PE would convert to translational KE alone regardless of shape/mass distribution (1 pt)"
      ],
      sampleResponse: "(a) The hoop has a larger moment of inertia (I=MR²) than the disk (I=(1/2)MR²) for the same mass and radius, meaning more of the hoop's gravitational potential energy must convert into rotational kinetic energy (which requires more energy to achieve the same angular speed) rather than translational kinetic energy, leaving less energy available for forward (translational) motion, so the hoop moves slower and reaches the bottom later than the disk.\n(b) Energy conservation here splits gravitational PE between translational KE and rotational KE: mgh = (1/2)mv² + (1/2)Iω². Since v=ωR for rolling without slipping, the moment of inertia I determines how this energy is divided between the two forms.\n(c) Without rotation (frictionless sliding, no rolling), all gravitational PE would convert purely into translational KE for both objects: mgh=(1/2)mv², which doesn't depend on the shape or moment of inertia at all — both objects would reach the bottom with the same speed and at the same time, regardless of their different shapes."
    }
  ]
}
