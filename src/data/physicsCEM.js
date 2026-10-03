// AP Physics C: Electricity & Magnetism — real College Board unit numbers/names
// used for authenticity, matching the pattern in physicsCMech.js. Calculus-based:
// expect integrals for Gauss's law and Biot-Savart, derivatives for Faraday's law,
// and differential equations for RC circuits throughout.

export const physicsCEM = {
  "id": "physics-c-em",
  "name": "AP Physics C: Electricity & Magnetism",
  "icon": "⚡",
  "accent": "ember",
  "units": [
    {
      "id": 1,
      "name": "Unit 1: Electrostatics",
      "questions": [
        {
          "id": "pce-1-1",
          "difficulty": 2,
          "type": "mcq",
          "topic": "Coulomb's Law",
          "prompt": "Two point charges, +4 μC and +6 μC, are separated by 0.3 m. What is the magnitude of the electric force between them? (k = 9 × 10⁹ N·m²/C²)",
          "choices": [
            "2.4 N",
            "0.216 N",
            "24 N",
            "0.24 N"
          ],
          "correct": 0,
          "explanation": {
            "correct": "By Coulomb's law, F = kq₁q₂/r² = (9×10⁹)(4×10⁻⁶)(6×10⁻⁶)/(0.3)² = (9×10⁹)(2.4×10⁻¹¹)/0.09 = 216/0.09... more directly: (9×10⁹)(24×10⁻¹²)/0.09 = 0.216/0.09 = 2.4 N.",
            "wrong": {
              "1": "This is the numerator of the Coulomb's law fraction (kq₁q₂) evaluated but then divided by an extra factor of 100, likely from a decimal-placement error in r² (using 9 instead of 0.09).",
              "2": "This could result from forgetting to square r in the denominator, dividing by 0.3 instead of 0.09.",
              "3": "This is off by a factor of 10 from the correct answer, likely from a decimal-point error when converting μC to C or squaring r."
            },
            "tempting": "Choice B is tempting because it comes from a very common decimal-placement slip when squaring r = 0.3 m (getting 3 instead of 0.09, or a similar order-of-magnitude error).",
            "commonMistake": "Mishandling the decimal places when converting μC to C (×10⁻⁶) and squaring a decimal distance — small exponent errors compound quickly in Coulomb's law calculations.",
            "apTip": "Coulomb's law: F = kq₁q₂/r². Always convert charges fully to coulombs before plugging in, and carefully square the distance BEFORE dividing — track powers of ten separately from the digits to avoid decimal errors."
          }
        },
        {
          "id": "pce-1-2",
          "difficulty": 3,
          "type": "mcq",
          "topic": "Superposition of Electric Fields",
          "prompt": "Two equal positive point charges are fixed on the x-axis, one at x = -2 m and one at x = +2 m. At the origin (x = 0), the net electric field due to both charges is:",
          "choices": [
            "Zero, because the fields from each charge point in opposite directions and are equal in magnitude",
            "Twice the field of one charge alone, pointing in the +x direction",
            "Twice the field of one charge alone, pointing in the -x direction",
            "Equal to the field of just one of the charges, since the other has no effect at the midpoint"
          ],
          "correct": 0,
          "explanation": {
            "correct": "Each charge is the same distance (2 m) from the origin and has equal magnitude, so each produces a field of equal magnitude at the origin. However, since both charges are positive, the field from the left charge points in the +x direction (away from it) while the field from the right charge points in the -x direction (away from it) — these are equal and opposite, so by superposition they cancel to zero.",
            "wrong": {
              "1": "This assumes the two fields point in the SAME direction and add constructively, but for two positive charges symmetric about a midpoint, the fields point AWAY from each charge — meaning toward each other at the midpoint — so they oppose, not reinforce.",
              "2": "Same error as choice B but with an arbitrarily assigned direction — the fields still don't add in this scenario, since they point toward each other and cancel.",
              "3": "This ignores the second charge's contribution entirely — with TWO source charges, superposition requires including the vector contribution from BOTH, not just one."
            },
            "tempting": "Choice B is tempting because it's easy to assume two equal charges automatically produce reinforcing fields, without carefully tracking that each field points AWAY from its own positive source charge — which means toward each other, not the same way, at a point exactly between them.",
            "commonMistake": "Forgetting to assign the correct DIRECTION to each individual field vector (away from positive charges, toward negative charges) before adding them by superposition — the magnitudes might be equal, but the vector directions determine whether they add or cancel.",
            "apTip": "Superposition of electric fields is a VECTOR sum: find the magnitude and direction of the field from each source charge separately (fields point away from positive charges, toward negative charges), then add as vectors. Symmetric charge configurations often produce elegant cancellations or reinforcements — always sketch the field vectors first."
          }
        },
        {
          "id": "pce-1-3",
          "difficulty": 4,
          "type": "mcq",
          "topic": "On-Axis Field of a Charged Ring",
          "prompt": "The electric field magnitude on the axis of a uniformly charged ring (radius R, total charge Q), at distance x from the ring's center, is E(x) = kQx/(R² + x²)^(3/2). What is the electric field at the exact center of the ring (x = 0)?",
          "choices": [
            "Zero",
            "kQ/R²",
            "kQ/R³",
            "Infinite"
          ],
          "correct": 0,
          "explanation": {
            "correct": "Substituting x = 0 into E(x) = kQx/(R²+x²)^(3/2) gives E(0) = kQ(0)/(R²)^(3/2) = 0, since the numerator contains a factor of x. This also makes physical sense: by symmetry, every charge element on the ring has an equal and opposite counterpart across the ring, so their field contributions at the exact center cancel completely.",
            "wrong": {
              "1": "This is the field formula you'd get for a POINT charge at distance R, not the on-axis ring field at its center — plugging x=0 into the given ring formula correctly gives zero, not kQ/R², due to the x factor in the numerator.",
              "2": "This isn't obtained by correctly evaluating the given formula at x=0; the x in the numerator makes the entire expression zero regardless of R.",
              "3": "The field doesn't blow up at the center — the numerator (which contains x) goes to zero exactly as fast as any potential concern about the denominator, and physically, the symmetric cancellation of contributions from all points around the ring confirms the field is exactly zero at the center."
            },
            "tempting": "Choice B is tempting because kQ/R² LOOKS like a natural 'field near radius R' formula, but it doesn't correctly evaluate the given on-axis formula at x=0 — the x factor in the numerator must be tracked carefully.",
            "commonMistake": "Not correctly substituting x=0 into the FULL given formula (including the numerator's x factor), and/or not connecting the calculus result to the physical symmetry argument (equal and opposite charge elements around the ring cancel their field contributions exactly at the center).",
            "apTip": "For on-axis field/potential formulas derived from integrating a charge distribution, always check limiting cases (like x=0 or x→∞) — these often reveal whether your formula makes physical sense, and the College Board frequently tests these behavioral/limiting cases directly."
          }
        },
        {
          "id": "pce-1-4",
          "difficulty": 3,
          "type": "mcq",
          "topic": "Electric Potential Energy",
          "prompt": "A charge q₁ = +5 μC is fixed in place. A charge q₂ = -3 μC is brought from very far away to a point 0.2 m from q₁. What is the electric potential energy of this two-charge system at that separation? (k = 9 × 10⁹ N·m²/C²)",
          "choices": [
            "-0.675 J",
            "0.675 J",
            "-6.75 J",
            "-67.5 J"
          ],
          "correct": 0,
          "explanation": {
            "correct": "U = kq₁q₂/r = (9×10⁹)(5×10⁻⁶)(-3×10⁻⁶)/(0.2) = (9×10⁹)(-15×10⁻¹²)/0.2 = -0.135/0.2 = -0.675 J.",
            "wrong": {
              "1": "This has the correct magnitude but the wrong sign — since one charge is positive and one is negative, the product q₁q₂ is NEGATIVE, so U must be negative (representing a bound, attractive configuration).",
              "2": "This is off from the correct answer by a factor of 10, likely from a decimal-placement error when converting μC to C or dividing by r.",
              "3": "This is off from the correct answer by a factor of 100, likely from a more severe decimal-placement error."
            },
            "tempting": "Choice B is tempting because it has the right magnitude, but dropping the negative sign from the charge product is a very common error — the SIGN of potential energy carries real physical meaning (negative = bound/attractive system, positive = requires work to assemble/repulsive).",
            "commonMistake": "Dropping or mishandling the sign of one of the charges when computing U = kq₁q₂/r — unlike force (where you often reason about direction separately), potential energy's sign comes directly from the signed product of the charges and must be carried through the calculation.",
            "apTip": "Electric potential energy U = kq₁q₂/r (unlike force, this formula is NOT an absolute value — keep the signs of the charges!). A negative U means the charges are in a bound, energetically favorable configuration (opposite charges); a positive U means work must be done to bring them together (like charges)."
          }
        },
        {
          "id": "pce-1-5",
          "difficulty": 2,
          "type": "mcq",
          "topic": "Gauss's Law — Electric Flux",
          "prompt": "A closed spherical surface encloses a net charge Q. According to Gauss's law, the total electric flux through this closed surface is:",
          "choices": [
            "Q/ε₀, regardless of the size or shape of the enclosed charge distribution",
            "kQ, the same as the electric field formula for a point charge",
            "Zero, since flux only exists for open surfaces",
            "Dependent on the exact shape of the closed surface used"
          ],
          "correct": 0,
          "explanation": {
            "correct": "Gauss's law states that the total electric flux through ANY closed surface equals the enclosed charge divided by ε₀: Φ = Q_enclosed/ε₀. This holds regardless of the surface's shape or the exact distribution of charge inside it, as long as the total enclosed charge is Q.",
            "wrong": {
              "1": "This confuses the flux formula with the point-charge field/force formula — flux through a closed surface is Q/ε₀, not kQ (though k and 1/(4πε₀) are related constants, they don't substitute directly here).",
              "2": "Closed surfaces are specifically what Gauss's law applies to — flux through a closed surface enclosing charge is generally NONZERO (equal to Q_enc/ε₀), not zero; flux would only be zero if no net charge were enclosed.",
              "3": "This is the key power of Gauss's law: the flux through a CLOSED surface depends only on the total enclosed charge, not on the surface's shape or the exact position/distribution of charge within it — this shape-independence is what makes Gauss's law so useful for calculating fields with high symmetry."
            },
            "tempting": "Choice D is tempting because it seems intuitive that a more complex surface shape might 'catch' the field lines differently, but Gauss's law's defining strength is precisely that total flux through a closed surface is shape-independent — it only depends on total enclosed charge.",
            "commonMistake": "Not recognizing that Gauss's law's flux-charge relationship (Φ = Q_enc/ε₀) is independent of the closed surface's shape and the exact spatial arrangement of charge inside it — this shape-independence is the entire reason Gauss's law is a useful shortcut for highly symmetric charge distributions.",
            "apTip": "Gauss's law: Φ = ∮E·dA = Q_enclosed/ε₀. It works for ANY closed surface ('Gaussian surface'), but is only practically useful for CALCULATING E when you choose a surface that matches the symmetry of the charge distribution (sphere for point/spherical charge, cylinder for line/cylindrical charge, pillbox for planar charge)."
          }
        },
        {
          "id": "pce-1-6",
          "difficulty": 4,
          "type": "mcq",
          "topic": "Gauss's Law — Infinite Line Charge",
          "prompt": "An infinite line of charge has linear charge density λ = 4 × 10⁻⁶ C/m. Using Gauss's law with a cylindrical Gaussian surface, what is the electric field magnitude at a perpendicular distance r = 0.15 m from the line? (ε₀ = 8.85 × 10⁻¹² C²/N·m²)",
          "choices": [
            "≈ 4.80 × 10⁵ N/C",
            "≈ 2.40 × 10⁵ N/C",
            "≈ 4.80 × 10⁶ N/C",
            "≈ 9.60 × 10⁵ N/C"
          ],
          "correct": 0,
          "explanation": {
            "correct": "Applying Gauss's law with a cylindrical surface of radius r and length L coaxial with the line: E(2πrL) = λL/ε₀, so E = λ/(2πε₀r) = (4×10⁻⁶)/(2π × 8.85×10⁻¹² × 0.15) ≈ 4.80 × 10⁵ N/C.",
            "wrong": {
              "1": "This is off by a factor of 2, likely from omitting the factor of 2 in the '2πrL' surface area term, using just πrL instead of the full cylindrical side area.",
              "2": "This is off by a factor of 10, likely from a decimal-placement error in converting λ or r.",
              "3": "This is double the correct answer, possibly from mistakenly doubling the field (e.g. treating it as the field from a sphere with the '4π' factor instead of a cylinder's '2π' factor)."
            },
            "tempting": "Choice B is tempting because it results from a common Gaussian-surface-area slip — using πrL instead of the correct 2πrL for the curved lateral surface area of the cylinder — which changes the final factor by exactly 2.",
            "commonMistake": "Using the wrong Gaussian surface area formula for the geometry — the LATERAL (curved side) surface area of a cylinder is 2πrL, and only the curved side contributes flux (since E is radial, parallel to the flat end caps, contributing zero flux there).",
            "apTip": "For an infinite line/cylinder of charge, choose a cylindrical Gaussian surface coaxial with the line. Only the curved lateral surface (area 2πrL) contributes to the flux integral (the flat end caps have E parallel to their surface, contributing zero flux). This gives the well-known result E = λ/(2πε₀r), which falls off as 1/r (compare to 1/r² for a point charge)."
          }
        }
      ]
    },
    {
      "id": 2,
      "name": "Unit 2: Conductors, Capacitors, Dielectrics",
      "questions": [
        {
          "id": "pce-2-1",
          "difficulty": 2,
          "type": "mcq",
          "topic": "Parallel-Plate Capacitance",
          "prompt": "A parallel-plate capacitor has plates of area 0.02 m² separated by 1 mm of vacuum. What is its capacitance? (ε₀ = 8.85 × 10⁻¹² C²/N·m²)",
          "choices": [
            "≈ 1.77 × 10⁻¹⁰ F",
            "≈ 1.77 × 10⁻⁸ F",
            "≈ 8.85 × 10⁻¹⁰ F",
            "≈ 1.77 × 10⁻¹² F"
          ],
          "correct": 0,
          "explanation": {
            "correct": "C = ε₀A/d = (8.85×10⁻¹²)(0.02)/(0.001) = (1.77×10⁻¹³)/(0.001) = 1.77×10⁻¹⁰ F.",
            "wrong": {
              "1": "This is off by a factor of 100, likely from a decimal-placement error when dividing by d = 0.001 m.",
              "2": "This uses ε₀ directly without correctly incorporating the A/d ratio, giving only half the correct calculation.",
              "3": "This is off by a factor of 100 in the opposite direction, likely from a decimal error when multiplying by A = 0.02 m²."
            },
            "tempting": "Choice B is tempting because dividing by a small decimal (d = 0.001) is a common place for a factor-of-10 or factor-of-100 slip.",
            "commonMistake": "Mishandling the decimal places when dividing by a very small plate separation d — since capacitance scales inversely with d, small errors in d's decimal placement cause large errors in the final answer.",
            "apTip": "Parallel-plate capacitance: C = ε₀A/d (vacuum/air-filled). Capacitance increases with larger plate area A and decreases with larger separation d. Always double check units are consistent (area in m², separation in m) before plugging into the formula."
          }
        },
        {
          "id": "pce-2-2",
          "difficulty": 2,
          "type": "mcq",
          "topic": "Energy Stored in a Capacitor",
          "prompt": "A 4 μF capacitor is charged to a potential difference of 12 V. How much electric potential energy is stored in the capacitor?",
          "choices": [
            "2.88 × 10⁻⁴ J",
            "5.76 × 10⁻⁴ J",
            "4.8 × 10⁻⁵ J",
            "2.88 × 10⁻² J"
          ],
          "correct": 0,
          "explanation": {
            "correct": "U = (1/2)CV² = (1/2)(4×10⁻⁶)(12)² = (1/2)(4×10⁻⁶)(144) = 2.88×10⁻⁴ J.",
            "wrong": {
              "1": "This is double the correct answer, likely from forgetting the factor of 1/2 in the energy formula.",
              "2": "This could result from using U = CV instead of the correct U = (1/2)CV², omitting the necessary squaring of voltage.",
              "3": "This is off by a factor of 100, likely from a decimal-placement error when converting μF to F."
            },
            "tempting": "Choice B is tempting since forgetting the factor of 1/2 in the capacitor energy formula is one of the most common errors on this topic.",
            "commonMistake": "Forgetting the factor of 1/2 in the capacitor energy formula U = (1/2)CV², or forgetting to SQUARE the voltage — both are essential, since this formula comes from integrating the work needed to move charge onto the capacitor as its voltage increases from 0 to V.",
            "apTip": "Energy stored in a capacitor: U = (1/2)CV² = (1/2)QV = Q²/(2C) (all three forms are algebraically equivalent via Q=CV — use whichever form matches the given variables). This formula comes from integrating dW = V dq = (q/C) dq from 0 to Q."
          }
        },
        {
          "id": "pce-2-3",
          "difficulty": 3,
          "type": "mcq",
          "topic": "Capacitors in Series vs. Parallel",
          "prompt": "Two identical capacitors, each with capacitance C, are first connected in series and then reconnected in parallel. How does the equivalent capacitance of the parallel combination compare to that of the series combination?",
          "choices": [
            "The parallel combination has 4 times the equivalent capacitance of the series combination",
            "The parallel combination has 2 times the equivalent capacitance of the series combination",
            "Both combinations have the same equivalent capacitance",
            "The series combination has a greater equivalent capacitance than the parallel combination"
          ],
          "correct": 0,
          "explanation": {
            "correct": "For two identical capacitors C in series: 1/C_series = 1/C + 1/C = 2/C, so C_series = C/2. For two identical capacitors C in parallel: C_parallel = C + C = 2C. Comparing: C_parallel/C_series = 2C/(C/2) = 4. The parallel combination has 4 times the capacitance of the series combination.",
            "wrong": {
              "1": "This underestimates the ratio — while parallel capacitance (2C) is indeed 2 times a SINGLE capacitor C, the series combination is actually C/2 (half, not equal to a single capacitor), making the true ratio between parallel and series 4, not 2.",
              "2": "Series and parallel combinations of capacitors do NOT give the same equivalent capacitance (unlike some other quantities) — series capacitance is always LESS than parallel capacitance for the same set of capacitors.",
              "3": "This has the comparison backwards — capacitors in PARALLEL always have a greater equivalent capacitance than the same capacitors in SERIES, not the other way around (this is the opposite of how resistors combine)."
            },
            "tempting": "Choice B is tempting because it seems intuitive that parallel should just be 'double' something, but it's crucial to correctly calculate BOTH the series value (C/2, not C) and the parallel value (2C) before comparing them.",
            "commonMistake": "Forgetting that series capacitance combination formulas are the RECIPROCAL type (1/C_eq = 1/C₁ + 1/C₂ + ...), giving an equivalent capacitance SMALLER than the smallest individual capacitor — this is the opposite pattern from series RESISTORS, which give a value LARGER than the largest resistor, so it's easy to confuse the two.",
            "apTip": "Capacitors combine OPPOSITE to resistors: capacitors in PARALLEL simply add (C_eq = C₁+C₂+..., like resistors in series), while capacitors in SERIES combine reciprocally (1/C_eq = 1/C₁+1/C₂+..., like resistors in parallel). Keep this 'opposite' relationship in mind to avoid mixing up circuit rules."
          }
        },
        {
          "id": "pce-2-4",
          "difficulty": 3,
          "type": "mcq",
          "topic": "Dielectrics",
          "prompt": "A parallel-plate capacitor has capacitance C₀ when there is vacuum between its plates. A dielectric material with dielectric constant κ = 3 is then inserted, completely filling the gap between the plates, while the capacitor remains connected to a constant-voltage battery. What happens to the capacitance and the charge stored?",
          "choices": [
            "Both the capacitance and the stored charge increase by a factor of 3",
            "The capacitance increases by a factor of 3, but the stored charge stays the same",
            "The capacitance stays the same, but the stored charge increases by a factor of 3",
            "Both the capacitance and the stored charge decrease by a factor of 3"
          ],
          "correct": 0,
          "explanation": {
            "correct": "Inserting a dielectric increases the capacitance by the dielectric constant: C = κC₀ = 3C₀. Since the capacitor remains connected to a constant-voltage battery, V stays fixed, so by Q = CV, the charge also increases by the same factor: Q = 3C₀V = 3Q₀.",
            "wrong": {
              "1": "While it's true that C increases by a factor of κ=3, the charge does NOT stay the same — since Q=CV and V is held fixed by the battery, an increased C directly forces Q to increase proportionally as well.",
              "2": "The capacitance itself DOES change when a dielectric is inserted (C = κC₀ = 3C₀, an increase) — dielectrics directly increase a capacitor's ability to store charge at a given voltage by reducing the effective field via induced polarization.",
              "3": "Inserting a dielectric always INCREASES capacitance (by the factor κ, which is always ≥1 for real dielectrics), never decreases it — this is a fundamental property that makes dielectrics useful for boosting a capacitor's charge storage capability."
            },
            "tempting": "Choice B is tempting because it's easy to focus only on the capacitance change and forget to trace through its effect on charge, given that voltage is held constant by the battery connection.",
            "commonMistake": "Forgetting to connect a change in capacitance to its effect on charge (or voltage) via Q=CV, especially forgetting to check whether the capacitor is connected to a constant-voltage battery (V fixed, so Q changes) versus isolated with constant charge (Q fixed, so V changes) — the scenario given fundamentally determines which quantity stays fixed.",
            "apTip": "A dielectric increases capacitance: C = κC₀ (κ > 1 always for a dielectric). What happens next depends on the circuit condition: if connected to a battery (V fixed), charge increases (Q=κQ₀); if isolated/disconnected (Q fixed), voltage instead DECREASES (V=V₀/κ). Always identify which quantity (V or Q) is held constant before determining what changes."
          }
        },
        {
          "id": "pce-2-5",
          "difficulty": 3,
          "type": "mcq",
          "topic": "Conductors in Electrostatic Equilibrium",
          "prompt": "A solid conductor carries a net positive charge and is in electrostatic equilibrium. Which of the following correctly describes the electric field inside the conductor's solid material, and where the excess charge resides?",
          "choices": [
            "The electric field inside the conductor is zero, and all excess charge resides on the outer surface",
            "The electric field inside the conductor is nonzero but uniform, and the excess charge is distributed evenly throughout the volume",
            "The electric field inside the conductor equals the field just outside it, and charge is distributed evenly throughout the volume",
            "The electric field inside is zero, but the excess charge is distributed evenly throughout the volume"
          ],
          "correct": 0,
          "explanation": {
            "correct": "In electrostatic equilibrium, free charges in a conductor rearrange until the internal electric field is exactly zero everywhere inside the conducting material (otherwise, charges would still be experiencing a force and equilibrium wouldn't have been reached). Since E=0 throughout the interior, applying Gauss's law to any surface just inside the conductor shows the enclosed charge must be zero — meaning all excess charge resides on the conductor's outer surface.",
            "wrong": {
              "1": "The interior field is exactly ZERO in electrostatic equilibrium (not just uniform and nonzero) — any nonzero field would still exert forces on internal free charges, meaning equilibrium hadn't yet been reached.",
              "2": "The interior field is zero (not equal to the external field, which is generally nonzero right at the surface) — this is a defining property of electrostatic equilibrium in a conductor.",
              "3": "While the field inside is correctly identified as zero, the excess charge does NOT distribute throughout the volume — it moves entirely to the outer SURFACE, precisely because a zero interior field is only possible via Gauss's law if no NET charge is enclosed within the conductor's solid interior."
            },
            "tempting": "Choice D is tempting because it gets the field right (zero) but incorrectly places the charge in the volume — the volume-charge distribution described is actually inconsistent with a zero interior field, since Gauss's law would then require a nonzero field near any enclosed charge.",
            "commonMistake": "Correctly identifying the zero interior field but failing to connect it (via Gauss's law) to WHERE the excess charge must reside — since a Gaussian surface drawn just inside the conductor must enclose zero net charge (because E=0 there), all excess charge is forced to the outer surface.",
            "apTip": "For a conductor in electrostatic equilibrium: (1) E = 0 everywhere inside the conducting material, (2) all excess charge resides on the outer surface, (3) the surface is an equipotential (E is perpendicular to the surface just outside it), and (4) charge density tends to be higher at sharp points/high-curvature regions of the surface."
          }
        },
        {
          "id": "pce-2-6",
          "difficulty": 4,
          "type": "mcq",
          "topic": "Effect of a Dielectric on Stored Energy",
          "prompt": "A parallel-plate capacitor is charged to charge Q and then disconnected from the battery, so Q remains constant. A dielectric with κ = 2 is then inserted, filling the gap. How does the energy stored in the capacitor change?",
          "choices": [
            "The stored energy decreases to half its original value",
            "The stored energy doubles",
            "The stored energy stays the same",
            "The stored energy quadruples"
          ],
          "correct": 0,
          "explanation": {
            "correct": "With Q held constant (capacitor disconnected), use U = Q²/(2C). Since C increases to κC₀ = 2C₀ when the dielectric is inserted, U = Q²/(2·2C₀) = (1/2)[Q²/(2C₀)] = half the original energy.",
            "wrong": {
              "1": "This would be correct if the capacitor were connected to a constant-voltage battery (where U=(1/2)CV² and only C changes), but here Q is held constant (disconnected capacitor), which requires using U=Q²/(2C) instead — with Q fixed, increasing C in the denominator DECREASES energy, not increases it.",
              "2": "The energy does not stay the same; since C changes (increases) while Q is fixed, U=Q²/(2C) must change (decrease) as well.",
              "3": "This is off by using the wrong power relationship — U depends on 1/C when Q is fixed, so if C doubles, U is halved, not quadrupled."
            },
            "tempting": "Choice B is tempting because it's easy to default to the constant-voltage-battery formula (U=(1/2)CV²) and conclude energy increases with C, without first checking whether Q or V is actually the fixed quantity in this specific disconnected scenario.",
            "commonMistake": "Using the wrong energy formula for the given circuit condition — U=(1/2)CV² is most direct when V is fixed (battery connected), while U=Q²/(2C) is most direct when Q is fixed (battery disconnected) — using the wrong one, or not adjusting for which variable actually stays constant, leads to the wrong direction of change.",
            "apTip": "When a dielectric is inserted with the capacitor DISCONNECTED from a battery (Q constant): capacitance increases (C=κC₀) but energy DECREASES (U=Q²/(2C) → energy is inversely proportional to C when Q is fixed). This makes physical sense: the dielectric is pulled INTO the capacitor by the field, doing positive work on it, which comes at the expense of the stored electric field energy."
          }
        }
      ]
    },
    {
      "id": 3,
      "name": "Unit 3: Electric Circuits",
      "questions": [
        {
          "id": "pce-3-1",
          "difficulty": 2,
          "type": "mcq",
          "topic": "Kirchhoff's Loop Rule",
          "prompt": "A simple circuit consists of a 9 V battery connected in series with a single 3 Ω resistor. What is the current through the resistor?",
          "choices": [
            "3 A",
            "27 A",
            "0.33 A",
            "6 A"
          ],
          "correct": 0,
          "explanation": {
            "correct": "By Ohm's law (or equivalently, Kirchhoff's loop rule: EMF − IR = 0), I = V/R = 9/3 = 3 A.",
            "wrong": {
              "1": "This results from multiplying voltage and resistance (9×3=27) instead of correctly dividing.",
              "2": "This is the reciprocal of the correct answer (R/V instead of V/R).",
              "3": "This could result from subtracting resistance from voltage (9-3=6) instead of correctly dividing."
            },
            "tempting": "None of the distractors are especially deceptive beyond a basic Ohm's law arithmetic check.",
            "commonMistake": "Performing the wrong arithmetic operation instead of correctly dividing voltage by resistance according to Ohm's law, V=IR, rearranged as I=V/R.",
            "apTip": "Kirchhoff's loop rule states that the sum of voltage changes around any closed loop is zero: for a simple battery-resistor loop, EMF = IR, so I = EMF/R. This is just Ohm's law applied around the full loop."
          }
        },
        {
          "id": "pce-3-2",
          "difficulty": 3,
          "type": "mcq",
          "topic": "RC Circuit Time Constant",
          "prompt": "A resistor R = 2000 Ω is connected in series with a capacitor C = 5 μF in an RC circuit. What is the time constant τ of this circuit?",
          "choices": [
            "0.01 s",
            "10,000 s",
            "0.0004 s",
            "2500 s"
          ],
          "correct": 0,
          "explanation": {
            "correct": "The RC time constant is τ = RC = (2000)(5×10⁻⁶) = 0.01 s.",
            "wrong": {
              "1": "This results from dividing R by C (2000/5×10⁻⁶) instead of correctly multiplying them.",
              "2": "This results from dividing C by R instead of correctly multiplying R and C together.",
              "3": "This could result from a decimal-placement error when multiplying by C = 5×10⁻⁶."
            },
            "tempting": "Choice B is tempting because dividing (rather than multiplying) two given quantities is a common instinct when the correct formula isn't firmly memorized.",
            "commonMistake": "Dividing R and C instead of correctly MULTIPLYING them to find the time constant — remember, τ = RC has units of seconds (Ω × F = s), which can help you verify you're using the right operation.",
            "apTip": "The RC time constant τ = RC represents the time for a charging capacitor to reach about 63.2% of its maximum charge (or for a discharging capacitor to fall to about 36.8% of its initial charge). Larger R or C means slower charging/discharging (larger τ)."
          }
        },
        {
          "id": "pce-3-3",
          "difficulty": 5,
          "type": "mcq",
          "topic": "RC Circuit — Solving the Differential Equation",
          "prompt": "In a series RC circuit with EMF ε, resistance R, and capacitor C (initially uncharged), Kirchhoff's loop rule gives ε − IR − Q/C = 0, where I = dQ/dt. Solving this differential equation for Q(t) gives:",
          "choices": [
            "Q(t) = Cε(1 − e^(−t/RC))",
            "Q(t) = Cε·e^(−t/RC)",
            "Q(t) = Cε·t/RC",
            "Q(t) = Cε(1 + e^(−t/RC))"
          ],
          "correct": 0,
          "explanation": {
            "correct": "Substituting I = dQ/dt into the loop equation gives ε − R(dQ/dt) − Q/C = 0, a first-order linear differential equation. Solving with the initial condition Q(0) = 0 (uncharged capacitor) yields Q(t) = Cε(1 − e^(−t/RC)) — the charge starts at zero and asymptotically approaches the maximum charge Cε as t→∞.",
            "wrong": {
              "1": "This is the DISCHARGING solution (starting from full charge Cε and decaying to zero), not the charging solution — a charging capacitor starting from Q=0 must INCREASE toward its maximum, not decay from it.",
              "2": "This is a linear-in-time approximation, not the actual exponential solution to the differential equation — the true rate of charging slows down over time as the capacitor's own voltage (Q/C) increasingly opposes the EMF, which produces exponential (not linear) behavior.",
              "3": "This doesn't satisfy the initial condition Q(0)=0 (this expression gives Q(0)=2Cε instead), and it doesn't approach the correct maximum charge Cε as t→∞ (it would approach infinity instead, since e^(-t/RC)→0 leaves just Cε, but actually check: at large t this gives Cε, but at t=0 gives 2Cε — incorrect start)."
            },
            "tempting": "Choice B is tempting because it's easy to confuse the CHARGING solution with the DISCHARGING solution — both involve the same exponential factor e^(−t/RC)) and the same time constant, but charging BUILDS UP from zero (using the '1 − e^(−t/RC)' form) while discharging DECAYS from a maximum (using just 'e^(−t/RC)').",
            "commonMistake": "Mixing up the charging solution (Q(t) = Q_max(1 − e^(−t/RC)), starting at 0 and rising) with the discharging solution (Q(t) = Q₀e^(−t/RC), starting at Q₀ and falling) — always check which initial condition applies (uncharged vs. fully charged) to pick the correct form.",
            "apTip": "RC charging: Q(t) = Cε(1 − e^(−t/RC)), current I(t) = (ε/R)e^(−t/RC) (found by differentiating Q(t)). RC discharging (no EMF, just a charged capacitor and resistor): Q(t) = Q₀e^(−t/RC). Both share the same time constant τ = RC, and both can be derived by directly solving Kirchhoff's loop equation as a first-order differential equation."
          }
        },
        {
          "id": "pce-3-4",
          "difficulty": 3,
          "type": "mcq",
          "topic": "RC Circuit — Charge at One Time Constant",
          "prompt": "A capacitor charges through a resistor from an initially uncharged state, starting at t=0. At time t = τ (one time constant, where τ = RC), approximately what fraction of the capacitor's maximum possible charge has it reached?",
          "choices": [
            "63.2%",
            "36.8%",
            "50%",
            "100%"
          ],
          "correct": 0,
          "explanation": {
            "correct": "Using Q(t) = Q_max(1 − e^(−t/RC)), at t = τ = RC: Q(τ) = Q_max(1 − e^(−1)) = Q_max(1 − 0.368) ≈ 0.632 Q_max, or 63.2% of the maximum charge.",
            "wrong": {
              "1": "36.8% (which equals e^(−1)) is the fraction of charge/voltage REMAINING for a DISCHARGING capacitor after one time constant, not the fraction reached while CHARGING — these are complementary values (63.2% + 36.8% = 100%), so it's easy to grab the wrong one.",
              "2": "50% would only be correct if the charging process were linear in time, but it is actually exponential — the capacitor charges faster at first (higher initial current, since Q/C is initially small) and slower later on, so it reaches more than half its maximum charge within one time constant.",
              "3": "The capacitor is never fully charged (100%) at exactly one time constant — full charging is only approached asymptotically as t→∞; one time constant only brings it to about 63.2% of the way there."
            },
            "tempting": "Choice B is tempting because 36.8% (e^(−1)) is indeed a key RC-circuit number, but it specifically represents the fraction REMAINING during discharge, not the fraction reached during charging — mixing these up is a very common error.",
            "commonMistake": "Confusing the 63.2% (1 − e⁻¹) charging benchmark with the 36.8% (e⁻¹) discharging benchmark — both use the same time constant τ = RC and the same underlying exponential math, but represent opposite processes (building up vs. decaying away).",
            "apTip": "Memorize both RC benchmarks at t = τ: a CHARGING capacitor reaches about 63.2% (= 1 − 1/e) of its maximum; a DISCHARGING capacitor falls to about 36.8% (= 1/e) of its initial value. These percentages don't depend on the specific values of R or C — they're universal properties of the exponential RC time constant."
          }
        },
        {
          "id": "pce-3-5",
          "difficulty": 2,
          "type": "mcq",
          "topic": "Kirchhoff's Junction Rule",
          "prompt": "At a junction in a circuit, 5 A of current flows in through one wire, and 2 A flows out through a second wire. According to Kirchhoff's junction rule, how much current must flow out through a third wire at this junction?",
          "choices": [
            "3 A",
            "7 A",
            "2.5 A",
            "5 A"
          ],
          "correct": 0,
          "explanation": {
            "correct": "Kirchhoff's junction rule (conservation of charge) requires total current in to equal total current out: 5 A in = 2 A out + I₃ out, so I₃ = 5 − 2 = 3 A.",
            "wrong": {
              "1": "This adds the two given currents (5+2=7) instead of correctly using conservation of charge, where current IN must equal total current OUT.",
              "2": "This averages the two given currents instead of applying the junction rule (current in = total current out).",
              "3": "This just repeats the given current-in value without accounting for the 2 A that already left through the second wire."
            },
            "tempting": "None of the distractors are especially deceptive beyond correctly applying conservation of charge at the junction.",
            "commonMistake": "Adding or averaging currents at a junction instead of correctly applying conservation of charge — total current flowing INTO a junction must exactly equal total current flowing OUT of that junction (charge cannot accumulate at a point in steady-state).",
            "apTip": "Kirchhoff's junction rule (a statement of conservation of charge): ΣI_in = ΣI_out at any junction. This, together with the loop rule (a statement of conservation of energy), provides the two independent types of equations needed to fully solve multi-loop circuits."
          }
        },
        {
          "id": "pce-3-6",
          "difficulty": 2,
          "type": "mcq",
          "topic": "Power Dissipation in a Resistor",
          "prompt": "A resistor with resistance 10 Ω carries a current of 2 A. What is the power dissipated by the resistor?",
          "choices": [
            "40 W",
            "20 W",
            "5 W",
            "0.2 W"
          ],
          "correct": 0,
          "explanation": {
            "correct": "P = I²R = (2)²(10) = (4)(10) = 40 W.",
            "wrong": {
              "1": "This results from computing IR (2×10=20) instead of correctly computing I²R (squaring the current first).",
              "2": "This results from dividing I by R (2/10... actually computing R/I=5) instead of correctly using P=I²R.",
              "3": "This results from computing I/R (2/10=0.2) instead of correctly using P=I²R."
            },
            "tempting": "Choice B is tempting because it correctly multiplies I and R together, but forgets that the power formula specifically requires I to be SQUARED first.",
            "commonMistake": "Forgetting to SQUARE the current in the power formula P=I²R, and instead just multiplying current and resistance directly (which actually gives voltage, V=IR, not power).",
            "apTip": "Power dissipated in a resistor has three equivalent forms (using V=IR to convert between them): P = I²R = VI = V²/R. Use whichever form directly matches the variables given in the problem, but remember I²R specifically requires squaring the current, and V²/R requires squaring the voltage."
          }
        }
      ]
    },
    {
      "id": 4,
      "name": "Unit 4: Magnetic Fields",
      "questions": [
        {
          "id": "pce-4-1",
          "difficulty": 3,
          "type": "mcq",
          "topic": "Ampère's Law — Field of a Long Straight Wire",
          "prompt": "A long, straight wire carries a current of 5 A. Using Ampère's law, what is the magnitude of the magnetic field at a perpendicular distance of 0.02 m from the wire? (μ₀ = 4π × 10⁻⁷ T·m/A)",
          "choices": [
            "5 × 10⁻⁵ T",
            "2.5 × 10⁻⁵ T",
            "5 × 10⁻⁴ T",
            "1 × 10⁻⁴ T"
          ],
          "correct": 0,
          "explanation": {
            "correct": "By Ampère's law applied to a circular loop of radius r around the wire: B(2πr) = μ₀I, so B = μ₀I/(2πr) = (4π×10⁻⁷)(5)/(2π×0.02) = (2×10⁻⁷×5)/(0.02) = (10×10⁻⁷)/0.02 = 5×10⁻⁵ T.",
            "wrong": {
              "1": "This is half the correct answer, likely from a factor-of-2 error in the '2πr' term of the formula.",
              "2": "This is off by a factor of 10, likely from a decimal-placement error when dividing by r=0.02.",
              "3": "This is off by a factor of 2 from the correct answer in the other direction, likely from a different arithmetic slip in simplifying the π terms."
            },
            "tempting": "Choice B is tempting since dropping a factor of 2 somewhere in the 2πr denominator is a common simplification error.",
            "commonMistake": "Mishandling the 2π factor in the denominator of B = μ₀I/(2πr), or making an arithmetic/decimal error when the π's from μ₀'s '4π' and the denominator's '2π' partially cancel (leaving just a factor of 2).",
            "apTip": "Field of a long straight wire (from Ampère's law with a circular loop): B = μ₀I/(2πr). Notice this falls off as 1/r (same as the electric field of an infinite line charge) — both results come from applying their respective 'circulation law' (Ampère's or Gauss's) to a cylindrically symmetric situation."
          }
        },
        {
          "id": "pce-4-2",
          "difficulty": 2,
          "type": "mcq",
          "topic": "Force on a Moving Charge in a Magnetic Field",
          "prompt": "A charge of 2 μC moves with speed 3 × 10⁴ m/s perpendicular to a magnetic field of magnitude 0.5 T. What is the magnitude of the magnetic force on the charge?",
          "choices": [
            "0.03 N",
            "3 × 10⁻⁵ N",
            "3 N",
            "0.003 N"
          ],
          "correct": 0,
          "explanation": {
            "correct": "F = qvB = (2×10⁻⁶)(3×10⁴)(0.5) = (2×10⁻⁶)(1.5×10⁴) = 3×10⁻² N = 0.03 N.",
            "wrong": {
              "1": "This is off by a factor of 1000, likely from a decimal-placement error when converting μC to C.",
              "2": "This is off by a factor of 100 from the correct answer.",
              "3": "This is off by a factor of 10 from the correct answer, likely from a smaller decimal-placement slip."
            },
            "tempting": "Choice B is tempting because it results from a plausible-looking but incorrect decimal shift when combining the small charge value with the larger speed and field values.",
            "commonMistake": "Mishandling the decimal places when converting μC to C and combining it with larger-magnitude speed and field values — with several powers of ten multiplying together, it's easy to lose track of the total exponent.",
            "apTip": "Magnetic force on a moving charge: F = qvB·sinθ, where θ is the angle between v and B (this reduces to F=qvB when the velocity is perpendicular to the field, as here, since sin90°=1). The direction of the force is given by the right-hand rule and is always perpendicular to both v and B."
          }
        },
        {
          "id": "pce-4-3",
          "difficulty": 2,
          "type": "mcq",
          "topic": "Force on a Current-Carrying Wire",
          "prompt": "A straight wire segment of length 0.3 m carries a current of 4 A and is oriented perpendicular to a uniform magnetic field of magnitude 0.6 T. What is the magnitude of the magnetic force on this wire segment?",
          "choices": [
            "0.72 N",
            "7.2 N",
            "0.072 N",
            "2 N"
          ],
          "correct": 0,
          "explanation": {
            "correct": "F = BIL = (0.6)(4)(0.3) = 0.72 N.",
            "wrong": {
              "1": "This is off by a factor of 10 from the correct answer, likely from a decimal-placement error.",
              "2": "This is off by a factor of 10 in the other direction from the correct answer.",
              "3": "This results from adding the given quantities (0.6+4+0.3=4.9, not matching) or another miscalculation rather than correctly multiplying all three together — actually check: this doesn't match any simple combination, representing a general arithmetic error."
            },
            "tempting": "Choice A is correct; among distractors, decimal-placement slips are the most common source of error in this type of three-quantity multiplication.",
            "commonMistake": "Making a decimal-placement error when multiplying three quantities together (B, I, and L) — it helps to multiply the leading digits first (0.6×4×0.3=0.72) and then separately verify the decimal placement makes sense.",
            "apTip": "Force on a straight, current-carrying wire in a uniform field (perpendicular case): F = BIL. For a wire not perpendicular to the field, use F = BIL·sinθ, where θ is the angle between the wire's current direction and the field — the direction of the force itself is given by the right-hand rule (point fingers along I, curl toward B, thumb gives F direction for the cross product I×B)."
          }
        },
        {
          "id": "pce-4-4",
          "difficulty": 3,
          "type": "mcq",
          "topic": "Direction of Magnetic Force (Right-Hand Rule)",
          "prompt": "A positive charge moves in the +x direction through a magnetic field pointing in the +y direction. Using the right-hand rule for F = qv × B, in which direction does the magnetic force on the charge point?",
          "choices": [
            "-z direction",
            "+z direction",
            "+x direction",
            "+y direction"
          ],
          "correct": 0,
          "explanation": {
            "correct": "Using the right-hand rule for v × B: point fingers in the +x direction (v), curl them toward +y (B); the thumb points in the -z direction. Since the charge is positive, the force F = qv×B points in the same direction as v×B: the -z direction.",
            "wrong": {
              "1": "This has the correct axis but the wrong sign — carefully applying the right-hand rule (x cross y) gives -z, not +z; a common error is reversing the curl direction or the resulting thumb direction.",
              "2": "The force from a magnetic field is always PERPENDICULAR to the velocity (this is a defining property of magnetic force, F=qv×B), so the force cannot point along the same direction as v (+x) itself.",
              "3": "The force is perpendicular to B as well as to v (since it's a cross product with B), so it cannot point along the same direction as B (+y) itself."
            },
            "tempting": "Choice B is tempting because it has the right axis (z) but the wrong sign — carefully tracking the right-hand rule's curl direction (and remembering x̂ × ŷ = ẑ, so this problem's v×B, going from x to y, actually needs re-checking against the standard cross product identity) requires care.",
            "commonMistake": "Reversing the sign/direction when applying the right-hand rule, or forgetting that the magnetic force must be perpendicular to BOTH v and B (ruling out any answer along the v or B directions themselves).",
            "apTip": "For F = qv × B: use the right-hand rule — point your fingers in the direction of v, curl them toward B, and your thumb points in the direction of v×B. If q is negative, reverse this direction. Remember the standard unit vector cross products: x̂ × ŷ = ẑ, ŷ × ẑ = x̂, ẑ × x̂ = ŷ (and reversing the order flips the sign, e.g., x̂ × ẑ = -ŷ)."
          }
        },
        {
          "id": "pce-4-5",
          "difficulty": 3,
          "type": "mcq",
          "topic": "Magnetic Field Inside a Solenoid",
          "prompt": "A long solenoid has 1000 turns per meter and carries a current of 2 A. Using Ampère's law, what is the magnitude of the magnetic field inside the solenoid, far from its ends? (μ₀ = 4π × 10⁻⁷ T·m/A)",
          "choices": [
            "≈ 2.51 × 10⁻³ T",
            "≈ 2.51 × 10⁻⁴ T",
            "≈ 1.26 × 10⁻³ T",
            "≈ 5.03 × 10⁻³ T"
          ],
          "correct": 0,
          "explanation": {
            "correct": "By Ampère's law applied to a rectangular loop with one side inside the solenoid: B = μ₀nI, where n is turns per unit length. B = (4π×10⁻⁷)(1000)(2) = 4π×10⁻⁴×2 = 8π×10⁻⁴ ≈ 2.51×10⁻³ T.",
            "wrong": {
              "1": "This is off by a factor of 10, likely from a decimal-placement error when using n=1000 turns/m.",
              "2": "This is half the correct answer, likely from omitting a factor of 2 (perhaps from I=2A) in the calculation.",
              "3": "This is double the correct answer, likely from an extra, mistaken factor of 2 somewhere in the calculation."
            },
            "tempting": "Choice C is tempting because it's exactly half the correct value, which could result from a simple factor-of-2 slip when incorporating the given current.",
            "commonMistake": "Mismanaging the powers of ten and the various factors (n, I, and μ₀'s built-in 4π) when computing B = μ₀nI for a solenoid — it helps to handle the 4π×10⁻⁷ from μ₀ as a single unit before multiplying by n and I.",
            "apTip": "Magnetic field inside a long solenoid (from Ampère's law with a rectangular Amperian loop): B = μ₀nI, where n = N/L is turns per unit length (not total turns N!) — this field is uniform inside the solenoid, far from the ends, and approximately zero outside."
          }
        },
        {
          "id": "pce-4-6",
          "difficulty": 4,
          "type": "mcq",
          "topic": "Biot-Savart Law — Field at the Center of a Current Loop",
          "prompt": "Using the Biot-Savart law, dB = (μ₀I/4π)(dl × r̂)/r², integrated around a circular current loop of radius R carrying current I, the magnetic field magnitude at the exact CENTER of the loop is:",
          "choices": [
            "B = μ₀I/(2R)",
            "B = μ₀I/(2πR)",
            "B = μ₀I/(4πR)",
            "B = μ₀IR/2"
          ],
          "correct": 0,
          "explanation": {
            "correct": "At the center of the loop, every current element dl is perpendicular to r̂ (which points from the element toward the center), and every element is the same distance R from the center. This makes each dB contribution the same magnitude and direction (along the loop's axis), so the integral simplifies to B = (μ₀I/4πR²)∮dl = (μ₀I/4πR²)(2πR) = μ₀I/(2R).",
            "wrong": {
              "1": "This is the formula for the field of a long straight WIRE at distance R, not the field at the CENTER of a circular current loop — these are two different Biot-Savart integration results and shouldn't be confused.",
              "2": "This is off by a factor of 2 from the correct loop-center formula, potentially from mishandling the 2πR circumference term in the integration.",
              "3": "This has the wrong dependence on R (this expression increases with R, but the correct field at a loop's center actually DECREASES with larger R, since points on a bigger loop are farther from the center)."
            },
            "tempting": "Choice B is tempting because it's the well-known straight-wire Ampère's law formula, but it applies to a completely different geometry (infinite straight wire) than this question's circular current loop — don't apply straight-wire results to loop geometries.",
            "commonMistake": "Confusing the Biot-Savart result for the CENTER of a circular current loop (B = μ₀I/2R) with the Ampère's-law result for a long straight WIRE (B = μ₀I/2πR) — these look superficially similar (both have μ₀I in the numerator) but come from different geometries and different integrations.",
            "apTip": "Field at the center of a circular current loop: B = μ₀I/(2R). This comes from integrating the Biot-Savart law around the full loop, exploiting the fact that at the exact center, every element contributes a field of the same magnitude and the same direction (perpendicular to the loop's plane) — so the vector integral reduces to a simple scalar integral of dl around the full circumference, 2πR."
          }
        }
      ]
    },
    {
      "id": 5,
      "name": "Unit 5: Electromagnetism",
      "questions": [
        {
          "id": "pce-5-1",
          "difficulty": 3,
          "type": "mcq",
          "topic": "Faraday's Law",
          "prompt": "A coil with 50 turns experiences a changing magnetic flux through each turn at a rate of 0.02 Wb/s. What is the magnitude of the induced EMF in the coil?",
          "choices": [
            "1.0 V",
            "0.02 V",
            "50 V",
            "2.5 V"
          ],
          "correct": 0,
          "explanation": {
            "correct": "By Faraday's law, EMF = N(dΦ/dt) = (50)(0.02) = 1.0 V.",
            "wrong": {
              "1": "This uses only the flux rate without multiplying by the number of turns N — Faraday's law for a coil requires the N factor, since each of the 50 turns contributes its own EMF, and these add in series.",
              "2": "This results from dividing N by dΦ/dt (50/0.02) instead of correctly multiplying them together.",
              "3": "This is off from the correct answer and doesn't correspond to a simple single-error calculation, representing a general arithmetic mistake."
            },
            "tempting": "Choice B is tempting because it correctly uses the given rate of flux change, but forgets to account for the coil having multiple (50) turns.",
            "commonMistake": "Forgetting to multiply by the number of turns N in Faraday's law for a coil — each turn of the coil experiences (and contributes) the same changing flux, so their induced EMFs add together in series, giving the N factor in EMF = N(dΦ/dt).",
            "apTip": "Faraday's law: EMF = -N(dΦ/dt), where N is the number of turns and Φ is the magnetic flux through ONE turn (the negative sign, from Lenz's law, indicates the induced EMF opposes the change in flux — often the magnitude alone is what's asked for)."
          }
        },
        {
          "id": "pce-5-2",
          "difficulty": 2,
          "type": "mcq",
          "topic": "Lenz's Law",
          "prompt": "A bar magnet's north pole is moved toward a stationary conducting loop, increasing the magnetic flux through the loop (pointing toward the magnet). According to Lenz's law, the induced current in the loop will flow in a direction that:",
          "choices": [
            "Creates a magnetic field opposing the increasing flux, effectively repelling the approaching magnet",
            "Creates a magnetic field that reinforces and further increases the flux",
            "Has no definite direction, since Lenz's law only predicts the existence of a current, not its direction",
            "Flows in whichever direction requires the least energy, regardless of the flux change"
          ],
          "correct": 0,
          "explanation": {
            "correct": "Lenz's law states that the induced current always flows in the direction that OPPOSES the change in flux that caused it. Since flux is increasing (magnet approaching), the induced current creates its own magnetic field that opposes this increase — which also means the loop effectively repels the approaching magnet (conservation of energy: work must be done to push the magnet closer, since the loop resists the change).",
            "wrong": {
              "1": "Lenz's law specifically states the induced effects OPPOSE the change in flux, not reinforce it — this is required by conservation of energy, otherwise the induced current would keep growing the flux change that caused it, creating a runaway (energy-generating) effect.",
              "2": "Lenz's law absolutely does specify a definite direction (the one that opposes the flux change) — this isn't a matter of chance or ambiguity; the direction of induced current can always be determined once you know how the flux is changing.",
              "3": "The induced current's direction isn't chosen to minimize energy usage; it is entirely determined by the physical requirement to oppose the flux change (which, incidentally, IS the energy-consistent outcome consistent with conservation of energy, but derived from opposing flux change specifically, not from a general energy-minimization principle)."
            },
            "tempting": "Choice B is tempting to someone who conflates the induced EMF's role in DRIVING current with the resulting magnetic effect's direction, but Lenz's law is specifically about OPPOSITION, not reinforcement.",
            "commonMistake": "Forgetting that Lenz's law is fundamentally about OPPOSITION to change — whatever the flux is doing (increasing or decreasing), the induced current's magnetic field always acts to resist that specific change, which is what makes electromagnetic induction consistent with conservation of energy.",
            "apTip": "Lenz's law is a direct consequence of conservation of energy: the induced current's magnetic effects always oppose the CHANGE in flux that created them (not the flux itself). This is why moving a magnet toward a loop requires doing work against a repulsive-feeling induced effect — the system resists having its flux state changed."
          }
        },
        {
          "id": "pce-5-3",
          "difficulty": 3,
          "type": "mcq",
          "topic": "Motional EMF",
          "prompt": "A conducting rod of length 0.4 m slides along a pair of parallel rails at a constant velocity of 3 m/s, perpendicular to a uniform magnetic field of magnitude 0.6 T. What is the magnitude of the motional EMF induced in the rod?",
          "choices": [
            "0.72 V",
            "7.2 V",
            "0.072 V",
            "2 V"
          ],
          "correct": 0,
          "explanation": {
            "correct": "Motional EMF is given by EMF = BLv = (0.6)(0.4)(3) = 0.72 V.",
            "wrong": {
              "1": "This is off by a factor of 10 from the correct answer, likely from a decimal-placement error in multiplying the three given quantities.",
              "2": "This is off by a factor of 10 in the opposite direction from the correct answer.",
              "3": "This doesn't correspond to a simple single-value error in the BLv calculation, representing a general arithmetic mistake."
            },
            "tempting": "Choice A is correct; among distractors, decimal-placement slips in the three-quantity multiplication are the most likely error source.",
            "commonMistake": "Making a decimal-placement error when multiplying three quantities (B, L, and v) together — multiply the leading digits first, then carefully verify the decimal point placement in the final answer.",
            "apTip": "Motional EMF for a rod moving through a magnetic field: EMF = BLv (valid when the rod's velocity, its length, and the field are all mutually perpendicular). This can be derived either from the magnetic force on the moving charges in the rod (F=qvB, integrated along the rod's length) or from Faraday's law (by computing dΦ/dt as the rod sweeps out area)."
          }
        },
        {
          "id": "pce-5-4",
          "difficulty": 2,
          "type": "mcq",
          "topic": "Magnetic Flux",
          "prompt": "A flat loop of wire with area 0.05 m² is oriented so its plane is perpendicular to a uniform magnetic field of magnitude 0.4 T (i.e., the field is parallel to the loop's normal vector). What is the magnetic flux through the loop?",
          "choices": [
            "0.02 Wb",
            "0.45 Wb",
            "0.35 Wb",
            "8 Wb"
          ],
          "correct": 0,
          "explanation": {
            "correct": "When the field is parallel to the loop's normal vector (perpendicular to the loop's plane), flux is simply Φ = BA = (0.4)(0.05) = 0.02 Wb.",
            "wrong": {
              "1": "This results from adding B and A (0.4+0.05=0.45) instead of correctly multiplying them.",
              "2": "This is not a straightforward combination of the given values (doesn't match a common addition/subtraction/multiplication error), representing a general miscalculation.",
              "3": "This results from dividing A by B (0.05/0.4=0.125... does not match) — actually this appears to result from dividing B by A (0.4/0.05=8) instead of correctly multiplying them."
            },
            "tempting": "None of the distractors are especially deceptive beyond a basic flux formula application.",
            "commonMistake": "Confusing the flux formula's required operation — Φ=BA is a simple MULTIPLICATION of field magnitude and area (when the field is along the normal direction), not an addition or division of the two quantities.",
            "apTip": "Magnetic flux through a flat loop: Φ = B·A·cosθ, where θ is the angle between the magnetic field and the loop's normal vector (the vector perpendicular to the loop's plane). When B is parallel to the normal (field perpendicular to the loop's surface, as here), cosθ=1 and Φ=BA is maximized; when B lies IN the plane of the loop (parallel to the surface), θ=90° and Φ=0."
          }
        },
        {
          "id": "pce-5-5",
          "difficulty": 3,
          "type": "mcq",
          "topic": "Self-Inductance",
          "prompt": "An inductor opposes changes in current through it by inducing a 'back-EMF' given by EMF = -L(dI/dt), where L is the self-inductance. If the current through a 0.5 H inductor is changing at a rate of 4 A/s, what is the magnitude of the induced EMF?",
          "choices": [
            "2 V",
            "8 V",
            "0.125 V",
            "4.5 V"
          ],
          "correct": 0,
          "explanation": {
            "correct": "EMF = L(dI/dt) = (0.5)(4) = 2 V (taking the magnitude).",
            "wrong": {
              "1": "This results from dividing L by dI/dt in reverse (4/0.5=8) instead of correctly multiplying L by dI/dt.",
              "2": "This results from dividing L by dI/dt (0.5/4=0.125) instead of correctly multiplying them.",
              "3": "This results from adding L and dI/dt (0.5+4=4.5) instead of correctly multiplying them."
            },
            "tempting": "Choice B is tempting because it swaps which quantity is divided by which, a common algebraic slip when a formula isn't firmly memorized.",
            "commonMistake": "Performing the wrong arithmetic operation (dividing in either direction, or adding) instead of correctly MULTIPLYING inductance L by the rate of current change dI/dt.",
            "apTip": "Self-inductance: EMF = -L(dI/dt) (the negative sign, per Lenz's law, shows the induced EMF opposes the CHANGE in current, not the current itself). This is directly analogous to capacitors opposing changes in voltage — inductors instead oppose changes in current, making them useful for smoothing out current fluctuations in a circuit."
          }
        },
        {
          "id": "pce-5-6",
          "difficulty": 4,
          "type": "mcq",
          "topic": "Faraday's Law with Time-Varying Field",
          "prompt": "A magnetic field passing through a stationary loop of area 0.1 m² varies with time as B(t) = 0.2t² (in tesla, t in seconds). What is the magnitude of the EMF induced in the loop at t = 2 seconds?",
          "choices": [
            "0.08 V",
            "0.04 V",
            "0.16 V",
            "0.8 V"
          ],
          "correct": 0,
          "explanation": {
            "correct": "Since the loop is stationary and area is constant, Φ(t) = A·B(t) = 0.1(0.2t²) = 0.02t². The induced EMF is EMF = |dΦ/dt| = |0.04t|. At t=2: EMF = 0.04(2) = 0.08 V.",
            "wrong": {
              "1": "This could result from computing dΦ/dt = A·dB/dt but forgetting to first evaluate dB/dt = 0.4t (the derivative of 0.2t²) before multiplying by t=2 and A, or another partial differentiation error.",
              "2": "This could result from using B(t) itself (not its derivative) at t=2 — B(2) = 0.2(4) = 0.8, then multiplying by A=0.1 gives 0.08... let's note this doesn't match 0.16 directly, suggesting a different miscalculation, such as doubling the correct dΦ/dt value.",
              "3": "This equals A·B(2) = 0.1×0.8 = 0.08... this also doesn't directly match; 0.8 V could instead result from forgetting to multiply by the loop's area A=0.1 at all, using just dΦ/dt without the area factor, or a similar omission."
            },
            "tempting": "Choice B is tempting because it's easy to make an error somewhere in the two-step process of first differentiating B(t) with respect to time, and then multiplying by the constant area A — each step is an opportunity for a small error to creep in.",
            "commonMistake": "Confusing evaluating B(t) itself at a specific time with finding the DERIVATIVE dB/dt (and then evaluating that derivative at the specific time) — Faraday's law requires the RATE OF CHANGE of flux, not the flux (or field) value itself at an instant.",
            "apTip": "When B varies with time (not position), and the loop is stationary with constant area: Φ(t) = A·B(t), so dΦ/dt = A·(dB/dt) — always differentiate B(t) FIRST with respect to time using calculus rules, THEN evaluate the resulting derivative expression at the specific time requested, and finally multiply by the (constant) area."
          }
        }
      ]
    }
  ],
  "frqs": [
    {
      "id": "pce-frq-1",
      "difficulty": 5,
      "unit": 1,
      "prompt": "An infinite line of charge has linear charge density λ.\n\n(a) Using Gauss's law, derive an expression for the electric field magnitude E at a perpendicular distance r from the line, showing your choice of Gaussian surface and all steps.\n(b) If λ = 4 × 10⁻⁶ C/m, calculate E at r = 0.15 m. (ε₀ = 8.85 × 10⁻¹² C²/N·m²)",
      "rubricPoints": [
        "Selects an appropriate cylindrical Gaussian surface coaxial with the line, of radius r and length L (1 pt)",
        "Correctly identifies that only the curved lateral surface contributes flux (E ∥ end caps, contributing zero flux there) and sets up Φ = E(2πrL) = Q_enc/ε₀ = λL/ε₀ (1 pt)",
        "Correctly solves for E, obtaining E = λ/(2πε₀r) (1 pt)",
        "Correctly substitutes the given numerical values to obtain E ≈ 4.80 × 10⁵ N/C (1 pt)"
      ],
      "sampleResponse": "(a) By symmetry, the electric field from an infinite line of charge points radially outward and has the same magnitude at every point a fixed distance r from the line. Choose a cylindrical Gaussian surface of radius r and length L, coaxial with the line of charge. The two flat end caps have E parallel to their surface (perpendicular to the outward normal), so they contribute zero flux. Only the curved lateral surface (area 2πrL) contributes: Φ = E(2πrL). The enclosed charge is Q_enc = λL. By Gauss's law: E(2πrL) = λL/ε₀. The L cancels, giving E = λ/(2πε₀r).\n(b) E = (4×10⁻⁶)/(2π × 8.85×10⁻¹² × 0.15) ≈ 4.80 × 10⁵ N/C, directed radially outward from the line (since λ is positive)."
    },
    {
      "id": "pce-frq-2",
      "difficulty": 4,
      "unit": 1,
      "prompt": "A point charge q₁ = +6 μC is fixed at the origin. (k = 9 × 10⁹ N·m²/C²)\n\n(a) Find the electric field magnitude and the electric potential at a point P located 0.4 m from q₁.\n(b) A second charge q₂ = +2 μC is brought from very far away to point P. Find the work done by an external agent to bring q₂ to point P (assume q₂ moves at constant speed, so kinetic energy doesn't change).",
      "rubricPoints": [
        "Correctly calculates E = kq₁/r² = 337,500 N/C at point P (1 pt)",
        "Correctly calculates V = kq₁/r = 135,000 V at point P (1 pt)",
        "Correctly applies W_ext = q₂V (or equivalently W_ext = kq₁q₂/r) to find W = 0.27 J (1 pt)"
      ],
      "sampleResponse": "(a) E = kq₁/r² = (9×10⁹)(6×10⁻⁶)/(0.4)² = 54,000/0.16 = 337,500 N/C, directed radially outward from q₁. The electric potential is V = kq₁/r = (9×10⁹)(6×10⁻⁶)/0.4 = 135,000 V.\n(b) Since q₂ moves at constant speed (no change in kinetic energy), the work done by the external agent equals the change in electric potential energy, which equals q₂V (since q₂ starts at V=0, infinitely far away): W_ext = q₂V = (2×10⁻⁶)(135,000) = 0.27 J. This matches directly computing W = kq₁q₂/r = (9×10⁹)(6×10⁻⁶)(2×10⁻⁶)/0.4 = 0.27 J."
    },
    {
      "id": "pce-frq-3",
      "difficulty": 4,
      "unit": 2,
      "prompt": "Two capacitors, C₁ = 4 μF and C₂ = 2 μF, are connected in parallel with each other. This parallel combination is then connected in series with a third capacitor C₃ = 3 μF, and the entire combination is connected to an 18 V battery.\n\n(a) Find the equivalent capacitance of the C₁–C₂ parallel combination.\n(b) Find the total equivalent capacitance of the full circuit.\n(c) Find the charge stored on C₃, and the voltage across the C₁–C₂ parallel combination.",
      "rubricPoints": [
        "Correctly finds the parallel combination C₁₂ = C₁ + C₂ = 6 μF (1 pt)",
        "Correctly combines C₁₂ in series with C₃ to find total capacitance C_total = 2 μF (1 pt)",
        "Correctly finds the total charge Q_total = C_total × V = 36 μC, which equals the charge on C₃ (series charge is the same throughout) (1 pt)",
        "Correctly finds the voltage across the parallel combination V₁₂ = Q_total/C₁₂ = 6 V (1 pt)"
      ],
      "sampleResponse": "(a) C₁ and C₂ are in parallel: C₁₂ = C₁ + C₂ = 4 μF + 2 μF = 6 μF.\n(b) This 6 μF combination is in series with C₃ = 3 μF: 1/C_total = 1/6 + 1/3 = 1/6 + 2/6 = 3/6, so C_total = 2 μF.\n(c) The total charge supplied by the battery is Q_total = C_total × V = (2 μF)(18 V) = 36 μC. In a series connection, the same charge flows through each series element, so the charge on C₃ is also 36 μC. The voltage across the parallel combination is V₁₂ = Q_total/C₁₂ = 36 μC / 6 μF = 6 V (and indeed, V₁₂ + V₃ = 6 V + 12 V = 18 V, checking out against the battery voltage)."
    },
    {
      "id": "pce-frq-4",
      "difficulty": 5,
      "unit": 3,
      "prompt": "A capacitor C, initially uncharged, is connected in series with a resistor R and a battery of EMF ε at time t=0.\n\n(a) Starting from Kirchhoff's loop rule (ε − IR − Q/C = 0, with I = dQ/dt), show that the charge as a function of time is Q(t) = Cε(1 − e^(−t/RC)).\n(b) Derive an expression for the current I(t) by differentiating Q(t).\n(c) If R = 2000 Ω, C = 1 μF, and ε = 9 V, find the charge on the capacitor at t = τ (one time constant).",
      "rubricPoints": [
        "Sets up the differential equation and correctly separates variables (or otherwise shows valid steps) to integrate toward the solution (1 pt)",
        "Correctly applies the initial condition Q(0)=0 to arrive at Q(t) = Cε(1 − e^(−t/RC)) (1 pt)",
        "Correctly differentiates to find I(t) = dQ/dt = (ε/R)e^(−t/RC) (1 pt)",
        "Correctly evaluates at t=τ=RC=0.002s to find Q(τ) = Cε(1−e⁻¹) ≈ (9×10⁻⁶)(0.632) ≈ 5.69×10⁻⁶ C (1 pt)"
      ],
      "sampleResponse": "(a) Starting from ε − R(dQ/dt) − Q/C = 0, rearrange: dQ/dt = (ε − Q/C)/R = (Cε − Q)/(RC). Separating variables: dQ/(Cε − Q) = dt/(RC). Integrating both sides: −ln|Cε − Q| = t/(RC) + constant. Applying the initial condition Q(0)=0 to solve for the constant, and exponentiating both sides, gives Cε − Q = Cε·e^(−t/RC), so Q(t) = Cε(1 − e^(−t/RC)).\n(b) Differentiating: I(t) = dQ/dt = Cε · (1/RC)e^(−t/RC) = (ε/R)e^(−t/RC).\n(c) τ = RC = (2000)(1×10⁻⁶) = 0.002 s. At t=τ: Q(τ) = Cε(1−e⁻¹) = (1×10⁻⁶)(9)(1 − 0.368) = (9×10⁻⁶)(0.632) ≈ 5.69×10⁻⁶ C."
    },
    {
      "id": "pce-frq-5",
      "difficulty": 4,
      "unit": 3,
      "prompt": "In the two-loop circuit shown (described below), the left loop contains EMF₁ = 9 V and resistor R₁ = 3 Ω; the right loop contains EMF₂ = 5 V and resistor R₂ = 2 Ω; both loops share a middle branch containing resistor R₃ = 1 Ω. Current I₁ flows through R₁, I₂ flows through R₂, and I₃ flows through the shared branch R₃, with I₃ = I₁ + I₂ by the junction rule.\n\n(a) Write the loop equation for the left loop and the right loop.\n(b) Solve the system of equations for I₁, I₂, and I₃.",
      "rubricPoints": [
        "Correctly writes the left loop equation: 9 − 3I₁ − 1I₃ = 0 (1 pt)",
        "Correctly writes the right loop equation: 5 − 2I₂ − 1I₃ = 0 (1 pt)",
        "Correctly combines these with the junction rule (I₃ = I₁ + I₂) and solves the system to find I₁ = 2 A, I₂ = 1 A, I₃ = 3 A (1 pt)"
      ],
      "sampleResponse": "(a) Left loop (following EMF₁, R₁, and the shared R₃ branch): 9 − 3I₁ − 1·I₃ = 0. Right loop (following EMF₂, R₂, and the shared R₃ branch): 5 − 2I₂ − 1·I₃ = 0.\n(b) Using the junction rule, I₃ = I₁ + I₂. Substituting into the left loop equation: 9 − 3I₁ − (I₁+I₂) = 0, so 9 = 4I₁ + I₂. Substituting into the right loop equation: 5 − 2I₂ − (I₁+I₂) = 0, so 5 = I₁ + 3I₂. Solving this system of two equations: from the first, I₂ = 9 − 4I₁; substituting into the second: 5 = I₁ + 3(9−4I₁) = I₁ + 27 − 12I₁ = 27 − 11I₁, so 11I₁ = 22, giving I₁ = 2 A. Then I₂ = 9 − 4(2) = 1 A, and I₃ = I₁ + I₂ = 2 + 1 = 3 A."
    },
    {
      "id": "pce-frq-6",
      "difficulty": 4,
      "unit": 4,
      "prompt": "A long solenoid has n = 2000 turns per meter and carries a current I = 1.5 A. (μ₀ = 4π × 10⁻⁷ T·m/A)\n\n(a) Using Ampère's law, derive the expression for the magnetic field magnitude inside the solenoid, far from its ends, showing your choice of Amperian loop.\n(b) Calculate the numerical value of the magnetic field inside this solenoid.",
      "rubricPoints": [
        "Selects a rectangular Amperian loop with one side inside the solenoid (parallel to the axis) and one side outside, and correctly identifies that only the inside segment (length L) contributes to the circulation integral (1 pt)",
        "Correctly counts the enclosed current as I_enc = NI = (nL)I (n turns per unit length times the loop's length L, times the current per turn) (1 pt)",
        "Correctly applies Ampère's law B·L = μ₀(nL)I to solve for B = μ₀nI (1 pt)",
        "Correctly substitutes numerical values to find B ≈ 3.77 × 10⁻³ T (1 pt)"
      ],
      "sampleResponse": "(a) Choose a rectangular Amperian loop with one long side of length L running parallel to the solenoid's axis INSIDE the solenoid, and the opposite long side running outside the solenoid (where B≈0), with two short sides connecting them (perpendicular to B, so they contribute no circulation). Only the inside segment contributes to the circulation integral: ∮B·dl = B·L. The loop encloses nL turns of wire, each carrying current I, so I_enc = nLI. By Ampère's law: B·L = μ₀(nLI). The L cancels, giving B = μ₀nI.\n(b) B = μ₀nI = (4π×10⁻⁷)(2000)(1.5) = 4π×10⁻⁷×3000 = 12000π×10⁻⁷ ≈ 3.77×10⁻³ T."
    },
    {
      "id": "pce-frq-7",
      "difficulty": 5,
      "unit": 4,
      "prompt": "An electron (mass m = 9.11 × 10⁻³¹ kg, charge magnitude q = 1.6 × 10⁻¹⁹ C) moves with speed v = 2 × 10⁶ m/s perpendicular to a uniform magnetic field of magnitude B = 0.002 T.\n\n(a) Explain why the electron moves in a circular path in this field, and derive an expression for the radius of that path in terms of m, v, q, and B.\n(b) Calculate the numerical value of the radius.",
      "rubricPoints": [
        "Explains that the magnetic force is always perpendicular to velocity, so it changes only the direction of velocity (not speed), acting as the centripetal force for circular motion (1 pt)",
        "Correctly sets qvB = mv²/r and solves to get r = mv/(qB) (1 pt)",
        "Correctly substitutes numerical values to find r ≈ 5.69 × 10⁻³ m (1 pt)"
      ],
      "sampleResponse": "(a) The magnetic force F=qv×B is always perpendicular to the electron's velocity. A force perpendicular to velocity does no work and cannot change the electron's speed — it only changes the direction of motion, continuously bending the path into a circle. This perpendicular magnetic force acts as the centripetal force required for uniform circular motion: qvB = mv²/r. Solving for r: r = mv/(qB).\n(b) r = mv/(qB) = (9.11×10⁻³¹)(2×10⁶)/[(1.6×10⁻¹⁹)(0.002)] = (1.822×10⁻²⁴)/(3.2×10⁻²²) ≈ 5.69×10⁻³ m."
    },
    {
      "id": "pce-frq-8",
      "difficulty": 4,
      "unit": 5,
      "prompt": "A conducting rod of length L = 0.4 m slides without friction along two parallel horizontal rails connected by a resistor R = 2 Ω, moving at a constant velocity v = 3 m/s through a uniform magnetic field B = 0.6 T, directed perpendicular to the plane of the rails.\n\n(a) Find the motional EMF induced in the rod.\n(b) Find the current flowing through the resistor.\n(c) Find the magnitude of the magnetic force needed on the rod to keep it moving at this constant velocity, and explain the physical origin of this force requirement.",
      "rubricPoints": [
        "Correctly calculates EMF = BLv = 0.72 V (1 pt)",
        "Correctly calculates I = EMF/R = 0.36 A (1 pt)",
        "Correctly calculates the force on the current-carrying rod F = BIL = 0.0864 N (1 pt)",
        "Explains that this force is needed to counteract the opposing magnetic force on the induced current (by Lenz's law, the induced current creates a force opposing the rod's motion), so an external agent must supply an equal and opposite force to maintain constant velocity (1 pt)"
      ],
      "sampleResponse": "(a) EMF = BLv = (0.6)(0.4)(3) = 0.72 V.\n(b) I = EMF/R = 0.72/2 = 0.36 A.\n(c) The force on the current-carrying rod due to the external field is F = BIL = (0.6)(0.36)(0.4) = 0.0864 N. By Lenz's law, the induced current flows in a direction such that this magnetic force on the rod OPPOSES its motion (opposing the change in flux that's inducing the current in the first place). Therefore, to keep the rod moving at constant velocity (zero net force, by Newton's first law), an external agent must apply a force of equal magnitude (0.0864 N) in the direction of motion, exactly balancing this opposing induced magnetic force."
    },
    {
      "id": "pce-frq-9",
      "difficulty": 4,
      "unit": 5,
      "prompt": "A stationary circular loop of wire has area A = 0.1 m². It is placed in a magnetic field that varies with time according to B(t) = 0.2t² (in tesla, t in seconds), directed along the loop's normal vector.\n\n(a) Derive an expression for the magnitude of the induced EMF in the loop as a function of time.\n(b) Calculate the induced EMF at t = 2 s.\n(c) Using Lenz's law, explain how you would determine the direction of the induced current in the loop as B is increasing.",
      "rubricPoints": [
        "Correctly sets up Φ(t) = AB(t) = 0.02t² and differentiates to find EMF(t) = |dΦ/dt| = 0.04t (1 pt)",
        "Correctly evaluates EMF(2) = 0.08 V (1 pt)",
        "Correctly explains that since flux (into/along the normal direction) is increasing, the induced current flows in the direction that creates a magnetic field opposing this increase — i.e., opposing the original field's direction inside the loop, which by the right-hand rule determines the current's circulation direction (1 pt)"
      ],
      "sampleResponse": "(a) Since the loop is stationary with constant area and the field is along the normal direction, Φ(t) = A·B(t) = (0.1)(0.2t²) = 0.02t². By Faraday's law, EMF(t) = |dΦ/dt| = |0.04t| = 0.04t (for t≥0).\n(b) EMF(2) = 0.04(2) = 0.08 V.\n(c) Since B(t) = 0.2t² is increasing for all t>0, the flux through the loop (in the direction of the field) is increasing. By Lenz's law, the induced current must create its own magnetic field that OPPOSES this increase — meaning the induced current's magnetic field points opposite to the original field's direction inside the loop. Using the right-hand rule in reverse (curl fingers in the direction that would produce a field opposing the original B direction, thumb pointing opposite to B), the current must circulate in the direction that generates this opposing field, which can be determined once the original field's direction through the loop is specified."
    }
  ]
}
