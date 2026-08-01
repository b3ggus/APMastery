// AP Chemistry — real College Board unit numbers/names used for authenticity.

export const chemistry = {
  id: 'chemistry',
  name: 'AP Chemistry',
  icon: '⚗️',
  accent: 'ember',
  units: [
    {
      id: 1,
      name: 'Unit 1: Atomic Structure & Properties',
      questions: [
        {
          id: 'chem-1-1', difficulty: 1, type: 'mcq', topic: 'Periodic Trends',
          prompt: "Which trend correctly describes atomic radius as you move left to right across a period?",
          choices: ['Atomic radius increases due to more electron shells', 'Atomic radius decreases due to increasing nuclear charge pulling electrons inward', 'Atomic radius stays constant across a period', 'Atomic radius increases due to increased electron shielding'],
          correct: 1,
          explanation: {
            correct: "Across a period, electrons are added to the same shell while protons (nuclear charge) increase, so the increasing effective nuclear charge pulls the electron cloud in tighter, shrinking atomic radius.",
            wrong: { 0: "No new shell is added moving across a period — that only happens moving down a group.", 2: "Radius changes measurably and predictably across a period; it isn't constant.", 3: "Shielding from inner electrons stays roughly constant across a period since no new inner shells are added; it's the rising nuclear charge that dominates." },
            tempting: "Choice D is tempting because shielding is a real factor in radius trends generally, but shielding is what explains the trend going down a group, not across a period.",
            commonMistake: "Confusing the reasoning for the down-a-group trend (shielding increases, radius increases) with the across-a-period trend (nuclear charge increases, radius decreases).",
            apTip: "Keep two separate one-line justifications ready: across a period → increasing effective nuclear charge; down a group → increasing number of shells/shielding."
          }
        },
        {
          id: 'chem-1-2', difficulty: 1, type: 'mcq', topic: 'Electron Configuration',
          prompt: "What is the correct electron configuration for a neutral chlorine atom (atomic number 17)?",
          choices: ['1s² 2s² 2p⁶ 3s² 3p⁵', '1s² 2s² 2p⁶ 3s² 3p⁶', '1s² 2s² 2p⁵ 3s² 3p⁶', '1s² 2s² 2p⁶ 3s² 3p⁴'],
          correct: 0,
          explanation: {
            correct: "Chlorine has 17 electrons; filling in order (2 + 2 + 6 + 2 + 5 = 17) gives 1s² 2s² 2p⁶ 3s² 3p⁵.",
            wrong: { 1: "This configuration totals 18 electrons, matching argon (a noble gas), not neutral chlorine.", 2: "This places 5 electrons in 2p before filling 3s, violating the Aufbau filling order, and also totals only 16.", 3: "This totals 16 electrons, one short of chlorine's 17." },
            tempting: "Choice B is tempting since it's 'one 3p electron away' and matches a very memorable noble gas configuration, but that's argon, not chlorine.",
            commonMistake: "Off-by-one electron counting errors when filling the 3p subshell.",
            apTip: "After writing any configuration, always re-add the superscripts to confirm the total equals the atomic number before moving on."
          }
        },
        {
          id: 'chem-1-3', difficulty: 2, type: 'mcq', topic: "Coulomb's Law & Ionization Energy",
          prompt: "Why does the first ionization energy of magnesium exceed that of sodium?",
          choices: ['Magnesium has a larger atomic radius, making removal easier', 'Magnesium has a greater effective nuclear charge and smaller radius, holding its outer electron more tightly', 'Sodium has more protons than magnesium', "Magnesium's electron is in a higher energy shell than sodium's"],
          correct: 1,
          explanation: {
            correct: "Magnesium has one more proton than sodium (12 vs. 11) with the outer electron in the same shell, giving it a greater effective nuclear charge and smaller atomic radius — both increase the energy needed to remove an outer electron.",
            wrong: { 0: "Magnesium actually has a smaller atomic radius than sodium, which increases (not decreases) ionization energy.", 2: "Sodium has fewer protons (11) than magnesium (12), the opposite of this claim.", 3: "Both sodium's and magnesium's valence electrons occupy the same shell (n=3); the difference is nuclear charge, not shell number." },
            tempting: "Choice A sounds plausible if you only remember 'ionization energy relates to radius' without recalling the actual direction of the radius trend across a period.",
            commonMistake: "Reversing the relationship between atomic radius and ionization energy, or misremembering which element in a period pair has the larger radius.",
            apTip: "Ionization energy trends mirror nuclear charge trends and inversely mirror radius trends across a period — link all three trends together in one mental model rather than memorizing them separately."
          }
        },
        {
          id: 'chem-1-4', difficulty: 3, type: 'mcq', topic: 'Photoelectron Spectroscopy',
          prompt: "A photoelectron spectroscopy (PES) spectrum for an unknown element shows peaks (relative binding energy, relative # electrons) at approximately: 1s (very high, 2 e⁻), 2s (high, 2 e⁻), 2p (medium-high, 6 e⁻), 3s (medium, 2 e⁻), 3p (low, 3 e⁻). What element is this?",
          choices: ['Silicon (Si)', 'Aluminum (Al)', 'Phosphorus (P)', 'Sulfur (S)'],
          correct: 2,
          explanation: {
            correct: "Adding the electrons in each peak (2+2+6+2+3 = 15) matches phosphorus's atomic number and its configuration 1s² 2s² 2p⁶ 3s² 3p³.",
            wrong: { 0: "Silicon has atomic number 14 (3p² for its outer subshell), one electron fewer than described.", 1: "Aluminum has atomic number 13 (3p¹), several electrons fewer than described.", 3: "Sulfur has atomic number 16 (3p⁴), one electron more than described." },
            tempting: "Choice A (silicon) is tempting since it's numerically adjacent, so a small counting slip could lead there instead of phosphorus.",
            commonMistake: "Losing count of electrons per peak, especially in the 3p subshell where AP PES questions often test close neighbors on the periodic table.",
            apTip: "Total the electrons per peak methodically left to right and match the sum directly to the atomic number — don't try to 'recognize' the pattern by shape alone."
          }
        },
        {
          id: 'chem-1-5', difficulty: 4, type: 'mcq', topic: 'Coulombic Interactions',
          prompt: "Which of the following correctly ranks the ionic radii from smallest to largest: Mg²⁺, Na⁺, F⁻, O²⁻ (all isoelectronic with neon, 10 electrons)?",
          choices: ['F⁻ < O²⁻ < Na⁺ < Mg²⁺', 'Mg²⁺ < Na⁺ < F⁻ < O²⁻', 'O²⁻ < F⁻ < Na⁺ < Mg²⁺', 'Na⁺ < Mg²⁺ < F⁻ < O²⁻'],
          correct: 1,
          explanation: {
            correct: "All four ions share the same 10 electrons (isoelectronic), so radius is determined entirely by nuclear charge: more protons pull the same electron cloud in tighter. Ranking by proton count from most to fewest gives Mg²⁺ (12, smallest) < Na⁺ (11) < F⁻ (9) < O²⁻ (8, largest), matching choice B exactly.",
            wrong: { 0: "This reverses the correct order — F⁻ (9 protons) is actually smaller than O²⁻ (8 protons), not larger.", 2: "This is the exact reverse of the correct ranking.", 3: "This incorrectly places Mg²⁺ as larger than Na⁺, when Mg²⁺'s higher proton count makes it the smallest of the four." },
            tempting: "Choice A is tempting because it's easy to mix up whether more protons means bigger or smaller when the electron count is fixed.",
            commonMistake: "Forgetting that for isoelectronic species, MORE protons means a SMALLER ion (tighter pull on the same number of electrons), which feels counterintuitive compared to normal periodic trends.",
            apTip: "For isoelectronic series questions, ignore normal periodic position and just rank by proton count directly — more protons, smaller radius, every time."
          }
        },
        {
          id: 'chem-1-6', difficulty: 5, type: 'mcq', topic: 'Quantum Mechanical Model',
          prompt: "An excited electron in a hydrogen atom drops from n=4 to n=2, emitting a photon. A separate transition from n=3 to n=2 emits a lower-energy (longer wavelength) photon than the n=4 to n=2 transition. What does this reveal about hydrogen's energy level spacing?",
          choices: ['Energy levels are evenly spaced, so all transitions to n=2 release equal energy', 'Energy level spacing decreases as n increases, so the total energy gap from n=4 down to n=2 exceeds the gap from n=3 down to n=2', 'Energy level spacing increases as n increases, making the n=4→n=2 gap smaller', 'The result is inconsistent with the quantum mechanical model and suggests measurement error'],
          correct: 1,
          explanation: {
            correct: "Hydrogen's energy levels follow E_n = -13.6 eV/n², so spacing between levels shrinks as n increases, but the n=4→n=2 transition still spans a larger total energy gap than n=3→n=2 because it crosses more of the widely-spaced lower-n structure, consistent with its higher-energy (shorter wavelength) photon.",
            wrong: { 0: "If levels were evenly spaced, all transitions to n=2 would release the same energy, contradicting the observed energy difference between these two transitions.", 2: "This is backwards — spacing decreases, not increases, as n increases in the actual 1/n² energy model.", 3: "This result is fully consistent with, and in fact predicted by, the quantum mechanical/Bohr energy model — no error is implied." },
            tempting: "Choice C might tempt students who vaguely recall 'higher n means more energy' without connecting it to the specific mathematical relationship (1/n²) that governs how spacing changes between successive levels.",
            commonMistake: "Not applying the E = -13.6/n² relationship quantitatively, leading to a qualitative guess that gets the spacing trend backwards.",
            apTip: "College-level insight: memorize that hydrogen's energy levels converge (get closer together) as n increases — this explains both denser line spectra at higher n and why ionization (n→∞) requires a finite, calculable total amount of energy starting from n=1."
          }
        }
      ]
    },
    {
      id: 2,
      name: 'Unit 2: Molecular & Ionic Compound Structure',
      questions: [
        {
          id: 'chem-2-1', difficulty: 1, type: 'mcq', topic: 'Lewis Structures',
          prompt: "In a correctly drawn Lewis structure for CO2, how many bonding pairs of electrons surround the central carbon atom?",
          choices: ['One single bond to each oxygen (2 total bonding pairs)', 'Two double bonds to oxygen (4 total bonding electron pairs)', 'Three bonds distributed among the atoms', 'No bonding pairs, only lone pairs'],
          correct: 1,
          explanation: {
            correct: "CO2 has the structure O=C=O, with carbon forming a double bond to each oxygen; each double bond consists of 2 shared electron pairs, so there are 4 total bonding electron pairs (2 double bonds) around carbon, satisfying the octet rule for all three atoms.",
            wrong: { 0: "Single bonds only (one pair each) would leave carbon and oxygen without complete octets; CO2 specifically requires double bonds to satisfy each atom's octet.", 2: "This vague description doesn't correctly capture the actual symmetric double-bond structure of CO2.", 3: "Carbon must have bonding pairs to satisfy its octet and hold the molecule together; having none contradicts CO2's known structure entirely." },
            tempting: "Choice A is tempting since single bonds are the 'default' assumption for many structures, but CO2 specifically needs double bonds on both sides to give carbon and both oxygens complete octets with the available electrons.",
            commonMistake: "Defaulting to single bonds when drawing Lewis structures, without checking whether all atoms actually achieve a complete octet, which often requires double or triple bonds instead.",
            apTip: "After drawing any Lewis structure, count each atom's total surrounding electrons (bonding + lone pairs) and verify it equals 8 (or 2 for hydrogen) — CO2 needing double bonds is a very standard example of this verification catching an under-bonded first draft."
          }
        },
        {
          id: 'chem-2-2', difficulty: 1, type: 'mcq', topic: 'VSEPR & Molecular Geometry',
          prompt: "A central atom has 4 bonding electron domains and 0 lone pairs. According to VSEPR theory, what molecular geometry results?",
          choices: ['Linear', 'Trigonal planar', 'Tetrahedral', 'Bent'],
          correct: 2,
          explanation: {
            correct: "With 4 bonding domains and no lone pairs, the four electron groups arrange themselves as far apart as possible in three dimensions, producing a tetrahedral geometry with bond angles of about 109.5°.",
            wrong: { 0: "Linear geometry results from 2 electron domains (e.g., CO2), not 4.", 1: "Trigonal planar geometry results from 3 electron domains with no lone pairs (e.g., BF3), not 4.", 3: "Bent geometry typically results from a central atom with electron domains that include one or more lone pairs (like 2 bonding + 1 or 2 lone pairs), not 4 bonding domains with zero lone pairs." },
            tempting: "None of the alternatives correctly match 4 bonding domains with 0 lone pairs if the VSEPR domain-counting rule is applied carefully, but mixing up the domain count (bonding vs. lone pairs) for different geometries is a common source of error.",
            commonMistake: "Not systematically counting total electron domains (bonding + lone pairs) before matching to the correct geometry name.",
            apTip: "Build a domain-count-to-geometry reference table and memorize it directly: 2 domains → linear; 3 domains (0 lone pairs) → trigonal planar; 3 domains (1 lone pair) → bent; 4 domains (0 lone pairs) → tetrahedral; 4 domains (1 lone pair) → trigonal pyramidal; 4 domains (2 lone pairs) → bent."
          }
        },
        {
          id: 'chem-2-3', difficulty: 2, type: 'mcq', topic: 'Molecular Polarity',
          prompt: "CO2 has polar C=O bonds, yet the overall molecule is nonpolar. What explains this?",
          choices: ['Double bonds are never polar, regardless of the atoms involved', 'The molecule\'s linear, symmetric geometry causes the two bond dipoles to point in exactly opposite directions and cancel out', 'Carbon and oxygen have identical electronegativities', 'Nonpolar molecules cannot contain any polar bonds by definition'],
          correct: 1,
          explanation: {
            correct: "CO2 is linear and symmetric (O=C=O), so the two individual C=O bond dipoles are equal in magnitude and point in exactly opposite directions; these two dipole vectors cancel each other out, resulting in a net molecular dipole moment of zero, even though each individual bond is polar.",
            wrong: { 0: "Bond polarity comes from an electronegativity difference between the bonded atoms, not from whether the bond is single, double, or triple; C=O bonds are indeed polar due to oxygen's higher electronegativity.", 2: "Carbon and oxygen have notably different electronegativities (oxygen is more electronegative), which is exactly why each individual C=O bond is polar in the first place.", 3: "This is incorrect — molecules like CO2 demonstrate that a molecule CAN be nonpolar overall even while containing individually polar bonds, specifically due to symmetric geometry causing bond dipoles to cancel." },
            tempting: "Choice D reflects a common oversimplification — assuming molecular polarity is just about whether ANY polar bonds are present, rather than about the VECTOR SUM of all bond dipoles, which depends critically on molecular geometry/symmetry.",
            commonMistake: "Judging overall molecular polarity based only on whether individual bonds are polar, without considering molecular geometry and whether those individual bond dipoles cancel or reinforce each other.",
            apTip: "Always evaluate molecular polarity in two explicit steps: (1) are the individual bonds polar (check electronegativity difference), and (2) does the molecular geometry cause those bond dipoles to cancel (symmetric arrangement) or not cancel (asymmetric arrangement) — both steps are needed for full credit."
          }
        },
        {
          id: 'chem-2-4', difficulty: 3, type: 'mcq', topic: 'Formal Charge',
          prompt: "Two possible Lewis structures are proposed for a molecule; in Structure 1, all formal charges are zero, while in Structure 2, one atom has a formal charge of +1 and another has -1. Which structure is generally the more stable, preferred representation, and why?",
          choices: ['Structure 2, because having formal charges always indicates a more accurate structure', 'Structure 1, because Lewis structures with formal charges of zero (or as close to zero as possible) on all atoms are generally more stable and more representative of the actual molecule', 'Both structures are equally valid and equally likely, since formal charge doesn\'t affect stability', 'Structure 2, because opposite formal charges always cancel out to make the molecule more stable overall'],
          correct: 1,
          explanation: {
            correct: "As a general rule, the Lewis structure with formal charges closest to zero on all atoms (and with any necessary negative formal charge, if unavoidable, placed on the more electronegative atom) is considered the more stable and representative structure, since large charge separations within a molecule tend to be energetically unfavorable.",
            wrong: { 0: "This is backwards — having LOW or zero formal charges (not having them at all) is generally the preferred, more stable pattern; formal charges themselves don't automatically indicate accuracy.", 2: "Formal charge distribution IS a meaningful factor used to evaluate and compare the relative stability/plausibility of alternative Lewis structures, so the two structures are not simply equally valid by default.", 3: "Having opposite formal charges present doesn't automatically make a structure MORE stable than one with no formal charges at all; the general preference is still for structures with minimal (ideally zero) formal charge separation." },
            tempting: "Choice D can tempt students who reason that '+1 and -1 charges attract each other, so they must stabilize the molecule,' but the more fundamental principle is that minimizing formal charge separation altogether (as in Structure 1) is generally preferred over introducing charge separation in the first place.",
            commonMistake: "Assuming that the presence of nonzero formal charges (especially if they're opposite and could 'attract') makes a structure more accurate, rather than recognizing that minimal charge separation overall is the generally preferred criterion.",
            apTip: "When comparing candidate Lewis structures, calculate formal charge for every atom in each structure explicitly, then prefer the structure with formal charges closest to zero overall, defaulting any necessary negative charge onto the most electronegative atom if charges can't all be exactly zero."
          }
        },
        {
          id: 'chem-2-5', difficulty: 4, type: 'mcq', topic: 'Resonance Structures',
          prompt: "The nitrate ion (NO3⁻) is best represented by multiple resonance structures rather than a single Lewis structure. What does this indicate about the actual bonding in NO3⁻?",
          choices: ['The ion rapidly flips back and forth between the different resonance structures over time', 'The actual bonding is an average (hybrid) of all resonance structures, with bond lengths/orders intermediate between single and double bonds, not matching any single resonance structure exactly', 'Only one of the resonance structures is actually correct, and the others are simply invalid alternatives', 'Resonance structures indicate the molecule is unstable and prone to decomposition'],
          correct: 1,
          explanation: {
            correct: "Resonance structures are not different molecules interconverting; rather, they represent that the true electronic structure is a single, stable hybrid that blends contributions from all valid resonance forms, resulting in intermediate, equal (in the symmetric case of nitrate) bond lengths/orders across all three N-O bonds, rather than the molecule having some bonds be clearly single and others clearly double as any one individual resonance structure alone would suggest.",
            wrong: { 0: "This is a common misconception; the actual bonding does not oscillate or flip between the drawn structures over time — it exists as one single, stable, blended (hybrid) structure at all times.", 2: "None of the individual resonance structures alone is 'the' correct structure; each is a valid but incomplete contributing representation, and the true structure is the blended hybrid of all of them together.", 3: "Resonance actually tends to STABILIZE a molecule or ion (delocalization of electron density generally lowers energy), rather than indicating instability or a tendency to decompose." },
            tempting: "Choice A is an extremely common misconception — many students initially picture resonance as the molecule literally switching between structures rapidly, rather than understanding that it represents one single, unchanging, blended electronic reality.",
            commonMistake: "Picturing resonance as rapid interconversion between distinct structures over time, rather than as multiple contributing representations of one single, stable, delocalized electronic structure.",
            apTip: "Use precise language on FRQs: describe the true structure as a 'resonance hybrid' with bond properties INTERMEDIATE between the contributing structures (e.g., 'all three N-O bonds in nitrate are equivalent, with bond order 1.33'), rather than saying the molecule 'switches between' structures."
          }
        },
        {
          id: 'chem-2-6', difficulty: 5, type: 'mcq', topic: 'Band Theory & Bonding Continuum',
          prompt: "Comparing an ionic solid (like NaCl), a metallic solid (like copper), and a covalent network solid (like diamond), all three can be described using a unified bonding framework where electron sharing/transfer exists on a continuum. Which best describes where each falls on this continuum, in terms of electron localization?",
          choices: ['All three have identical electron behavior since they are all solids', 'NaCl has electrons essentially localized to individual ions (transferred), diamond has electrons localized in shared covalent bonds between specific atom pairs, and copper has electrons delocalized across the entire metallic lattice', 'Diamond has the most delocalized electrons of the three, more so than metals', 'Ionic solids have the most delocalized electrons since ions are charged and mobile'],
          correct: 1,
          explanation: {
            correct: "These three bonding types represent different points on a bonding continuum based on electron localization: ionic bonding (NaCl) involves essentially complete electron transfer, with electrons localized onto specific ions; covalent network bonding (diamond) involves electrons shared and localized within specific, directional bonds between particular atom pairs; and metallic bonding (copper) involves electrons delocalized across the ENTIRE lattice structure (the 'sea of electrons' model), allowing conductivity and malleability that the other two bonding types generally lack.",
            wrong: { 0: "These three solids have fundamentally different bonding characters and very different physical properties (conductivity, hardness, melting behavior), so their electron behavior is clearly not identical.", 2: "Diamond's electrons are localized within specific, fixed covalent bonds between particular carbon atom pairs (which is exactly why diamond doesn't conduct electricity); this is the opposite of the delocalized behavior seen in metals.", 3: "Ionic solids have electrons that are essentially localized onto specific ions (largely transferred, not shared or freely mobile) within a fixed lattice; this is why ionic solids don't conduct electricity as solids — the IONS themselves aren't mobile in the solid state, only in the molten or dissolved state." },
            tempting: "Choice D can tempt students who associate 'ions are charged' with 'electrons must be mobile,' but in the solid ionic lattice, both ions and their electrons are actually held in fixed lattice positions, and it's specifically the free movement of delocalized ELECTRONS (not just the presence of charge) that defines metallic conductivity.",
            commonMistake: "Conflating the presence of charged particles (ions) with electron mobility/delocalization, rather than recognizing that metallic bonding is specifically defined by delocalized electrons free to move throughout the whole structure.",
            apTip: "College-level insight: this framing (a bonding continuum from ionic to covalent to metallic, based on electron localization vs. delocalization) reflects how bonding is actually taught in more advanced chemistry courses beyond simple categorical labels — explicitly using the language of 'electron localization/delocalization' rather than just naming the bond type demonstrates a more sophisticated, unified understanding on an FRQ."
          }
        }
      ]
    },
    {
      id: 3,
      name: 'Unit 3: Intermolecular Forces & Properties',
      questions: [
        {
          id: 'chem-3-1', difficulty: 1, type: 'mcq', topic: 'IMF Identification',
          prompt: "Which type of intermolecular force is present in ALL molecular substances, regardless of polarity?",
          choices: ['Hydrogen bonding', 'Dipole-dipole forces', 'London dispersion forces', 'Ionic bonding'],
          correct: 2,
          explanation: {
            correct: "London dispersion forces arise from temporary, shifting electron distributions that create instantaneous dipoles, and every molecule (polar or nonpolar) has electrons that can do this, so LDFs are universal.",
            wrong: { 0: "Hydrogen bonding requires H bonded directly to N, O, or F — not present in all molecules.", 1: "Dipole-dipole forces require permanent polarity, absent in nonpolar molecules like CO2 or CH4.", 3: "Ionic bonding is a bond within an ionic compound, not an intermolecular force between molecules at all." },
            tempting: "Choice B is tempting because dipole-dipole forces are common and often taught right alongside dispersion forces, but they don't apply to nonpolar substances.",
            commonMistake: "Forgetting that nonpolar molecules like O2 or CO2 still experience intermolecular attraction (via LDFs) — assuming 'nonpolar' means 'no intermolecular forces at all.'",
            apTip: "Always list forces cumulatively: every substance has LDFs; polar substances additionally have dipole-dipole; molecules with H bonded to N/O/F additionally have hydrogen bonding on top of both."
          }
        },
        {
          id: 'chem-3-2', difficulty: 2, type: 'mcq', topic: 'Boiling Point Trends',
          prompt: "Which best explains why H2O has a significantly higher boiling point than H2S, despite S being larger (and thus having stronger dispersion forces) than O?",
          choices: ['H2O has stronger ionic bonds than H2S', 'H2O molecules form hydrogen bonds due to O–H bonds, an especially strong dipole-dipole interaction absent in H2S', 'H2O has a larger molar mass than H2S', 'H2S has more polar bonds than H2O'],
          correct: 1,
          explanation: {
            correct: "Oxygen is small and highly electronegative, so O–H bonds allow strong hydrogen bonding between water molecules; sulfur is larger and less electronegative, so S–H bonds don't create hydrogen bonding, leaving H2S with only weaker dipole-dipole and dispersion forces despite its larger size.",
            wrong: { 0: "Both are covalent molecular compounds; neither contains ionic bonds.", 2: "H2O (18 g/mol) actually has a smaller molar mass than H2S (34 g/mol), so molar mass alone would predict the opposite trend.", 3: "H2S bonds are indeed polar, but polarity alone doesn't create hydrogen bonding — hydrogen bonding specifically requires H bonded to N, O, or F." },
            tempting: "Choice C might tempt students who over-rely on 'bigger molecule = higher boiling point' without checking actual molar masses, which here point the wrong way.",
            commonMistake: "Assuming size/molar mass is the deciding factor without checking whether hydrogen bonding is possible, which can dominate over dispersion force trends.",
            apTip: "This exact H2O vs. H2S (or NH3 vs. PH3) comparison is a classic AP Chem way to test whether you understand hydrogen bonding can override the 'bigger = stronger dispersion forces' trend."
          }
        },
        {
          id: 'chem-3-3', difficulty: 2, type: 'mcq', topic: 'Solid Types',
          prompt: "A solid has a very high melting point, does not conduct electricity as a solid, but does conduct as a liquid or in aqueous solution, and shatters when struck. This solid is most likely:",
          choices: ['Metallic solid', 'Molecular (covalent) solid', 'Ionic solid', 'Covalent network solid'],
          correct: 2,
          explanation: {
            correct: "High melting point plus brittleness plus conductivity only when ions are mobile (melted or dissolved) is the classic signature of an ionic solid, where a rigid lattice of ions is held by strong electrostatic attraction that only conducts once ions can move freely.",
            wrong: { 0: "Metallic solids conduct electricity in the solid state due to delocalized electrons, unlike the substance described.", 1: "Molecular solids (like ice or dry ice) generally have low melting points due to weak intermolecular forces, not high ones.", 3: "Covalent network solids (like diamond or quartz) have extremely high melting points and generally do NOT conduct even when melted, since there are no mobile ions or delocalized electrons." },
            tempting: "Choice D is tempting because covalent network solids also have very high melting points and are hard, but they typically don't conduct even as a liquid, which rules them out here.",
            commonMistake: "Not distinguishing 'doesn't conduct as solid, but does as liquid/solution' (ionic) from 'doesn't conduct in any state' (covalent network).",
            apTip: "Build a 2x2 mental table of the four solid types (ionic, metallic, molecular, covalent network) against melting point, conductivity (solid/liquid), and hardness/brittleness — this is a very testable comparison."
          }
        },
        {
          id: 'chem-3-4', difficulty: 3, type: 'mcq', topic: 'Vapor Pressure & IMFs',
          prompt: "Two liquids, X and Y, are placed in identical open containers at the same temperature. Liquid X evaporates much faster than liquid Y. What can be concluded about their relative intermolecular forces?",
          choices: ['Liquid X has stronger intermolecular forces than liquid Y', 'Liquid X has weaker intermolecular forces than liquid Y', 'Both liquids have identical intermolecular forces since temperature is the same', 'Evaporation rate is unrelated to intermolecular forces'],
          correct: 1,
          explanation: {
            correct: "Faster evaporation means molecules escape the liquid phase more easily, which happens when the attractive forces holding them together are weaker — so liquid X has weaker intermolecular forces (and correspondingly higher vapor pressure) than liquid Y.",
            wrong: { 0: "Stronger IMFs would hold molecules in the liquid more tightly, causing slower evaporation, the opposite of what's observed for X.", 2: "Same temperature doesn't imply identical IMFs — different substances can have very different IMFs at the same temperature, which is exactly why evaporation rates differ here.", 3: "Evaporation rate is directly tied to how easily molecules overcome intermolecular attractions, so IMFs are central to this comparison." },
            tempting: "Choice A can tempt students who associate 'more activity/movement' with 'more forces,' inverting the actual cause and effect.",
            commonMistake: "Reasoning that faster evaporation implies stronger forces are 'pushing' molecules out, rather than recognizing weaker forces simply fail to hold molecules in.",
            apTip: "Tie together vapor pressure, boiling point, and evaporation rate as one connected concept: weaker IMFs → higher vapor pressure → faster evaporation → lower boiling point, all pointing the same direction."
          }
        },
        {
          id: 'chem-3-5', difficulty: 4, type: 'mcq', topic: 'Solutions & IMFs',
          prompt: "Which pair of substances would be expected to form a solution with the strongest solute-solvent interactions (and thus the most negative/exothermic enthalpy of solution)?",
          choices: ['NaCl (ionic) dissolved in hexane (nonpolar)', 'I2 (nonpolar) dissolved in water (polar, hydrogen-bonding)', 'NaCl (ionic) dissolved in water (polar, hydrogen-bonding)', 'CH4 (nonpolar) dissolved in hexane (nonpolar)'],
          correct: 2,
          explanation: {
            correct: "Water's polar molecules can surround and stabilize Na+ and Cl- ions through strong ion-dipole interactions, releasing significant energy (hydration) — the strongest interaction among the options given the mismatches in the others.",
            wrong: { 0: "'Like dissolves like' fails here — nonpolar hexane cannot effectively solvate an ionic lattice via ion-induced dipole interactions, which are far weaker than ion-dipole interactions.", 1: "A nonpolar solute in a polar solvent is also a mismatch (though less extreme than choice A), producing generally weak, unfavorable interactions, which is why I2 has low solubility in water.", 3: "CH4 in hexane involves only weak London dispersion forces on both sides; while this is a compatible ('like dissolves like') pairing, the interactions themselves are weak in absolute terms compared to ion-dipole forces." },
            tempting: "Choice D is tempting because it correctly follows 'like dissolves like,' but the question asks for the STRONGEST interaction in absolute terms, and weak-weak (dispersion-only) pairings are inherently weaker than strong ion-dipole pairings, even though both are 'compatible' pairings.",
            commonMistake: "Treating 'like dissolves like' as answering both 'will it dissolve' and 'how strong is the interaction,' when a compatible nonpolar-nonpolar pairing can still involve much weaker absolute forces than a compatible ionic-polar pairing.",
            apTip: "When ranking interaction strength (not just solubility yes/no), ion-dipole > hydrogen bonding > dipole-dipole > dispersion — use this hierarchy directly rather than only checking polarity compatibility."
          }
        },
        {
          id: 'chem-3-6', difficulty: 5, type: 'mcq', topic: 'Advanced IMF Reasoning',
          prompt: "Two structural isomers of C5H12 are compared: n-pentane (a long, unbranched chain) and neopentane (a highly branched, compact structure). Which correctly predicts and explains their relative boiling points?",
          choices: ['Neopentane boils higher because it has more total electrons in a compact space, increasing dispersion forces', "n-Pentane boils higher because its elongated shape allows greater surface area contact between molecules, increasing London dispersion forces despite identical molecular formula", 'Both isomers have identical boiling points since they share the same molecular formula and thus the same total electron count', 'Neopentane boils higher because branching increases dipole-dipole interactions'],
          correct: 1,
          explanation: {
            correct: "Even though both isomers have the same molecular formula (and thus the same number of electrons), n-pentane's elongated, flexible shape allows more surface-area contact between neighboring molecules, strengthening London dispersion forces overall; neopentane's compact, spherical shape minimizes contact area, weakening dispersion forces and lowering its boiling point relative to n-pentane.",
            wrong: { 0: "Total electron count is identical between the isomers (same formula), so 'more electrons' cannot be the explanation — the real factor is molecular shape/surface area, not electron count.", 2: "Same formula does mean the same electron count, but boiling point isn't determined by electron count alone — molecular shape strongly affects how much surface contact (and thus dispersion force strength) is possible between molecules.", 3: "Both isomers are nonpolar hydrocarbons; branching doesn't introduce dipole-dipole forces, since it doesn't change the overall symmetry/polarity in a way that creates permanent dipoles here." },
            tempting: "Choice A is a strong trap because 'more electrons = more dispersion force' is true when comparing genuinely different molecules, but here the molecules are isomers with identical electron counts, so the deciding factor must be shape, not electron count.",
            commonMistake: "Defaulting to 'bigger/more electrons wins' without checking whether the comparison is between isomers (same formula, different shape) rather than different-sized molecules.",
            apTip: "College-level insight: this shape-vs-electron-count distinction (surface area available for contact) is a favorite way AP Chem (and general chemistry courses) test whether students actually understand dispersion forces mechanistically rather than just pattern-matching 'bigger molecule, higher boiling point.'"
          }
        }
      ]
    },
    {
      id: 4,
      name: 'Unit 4: Chemical Reactions',
      questions: [
        {
          id: 'chem-4-1', difficulty: 1, type: 'mcq', topic: 'Balancing Equations',
          prompt: "When balanced, what is the coefficient of O2 in the combustion of propane: C3H8 + O2 → CO2 + H2O?",
          choices: ['3', '4', '5', '7'],
          correct: 2,
          explanation: {
            correct: "Balancing C3H8 + 5O2 → 3CO2 + 4H2O: carbon balances (3=3), hydrogen balances (8=8), and oxygen balances (5×2=10 on the left equals 3×2 + 4×1 = 10 on the right), so the coefficient of O2 is 5.",
            wrong: { 0: "A coefficient of 3 for O2 would only provide 6 oxygen atoms, insufficient to balance the 10 oxygen atoms needed on the product side.", 1: "A coefficient of 4 provides 8 oxygen atoms, still short of the 10 needed.", 3: "A coefficient of 7 overshoots, providing 14 oxygen atoms when only 10 are needed once carbon and hydrogen are properly balanced." },
            tempting: "Choice D might tempt students who balance oxygen before fully balancing carbon and hydrogen first, leading to a miscounted final oxygen total.",
            commonMistake: "Trying to balance oxygen before locking in the carbon and hydrogen coefficients, causing errors that cascade into the wrong final oxygen coefficient.",
            apTip: "Always balance combustion equations in this order: carbon first, hydrogen second, oxygen last (since oxygen appears in the most places and is easiest to balance once the others are fixed)."
          }
        },
        {
          id: 'chem-4-2', difficulty: 2, type: 'mcq', topic: 'Limiting Reactants',
          prompt: "In the reaction N2 + 3H2 → 2NH3, 2 mol N2 and 3 mol H2 are combined. Which reactant is limiting?",
          choices: ['N2, because there are fewer moles of it', 'H2, because the stoichiometric ratio requires 3 mol H2 for every 1 mol N2, and only 3 mol H2 is available', 'Neither is limiting; both are fully consumed', 'NH3, because it is the product'],
          correct: 1,
          explanation: {
            correct: "The reaction requires a 1:3 ratio of N2:H2. With 2 mol N2, you'd need 6 mol H2 to fully react, but only 3 mol H2 is available — so H2 runs out first (after reacting with only 1 mol N2), making H2 the limiting reactant.",
            wrong: { 0: "Having fewer total moles doesn't automatically make a reactant limiting; the mole ratio required by the balanced equation must be checked, not just raw amounts.", 2: "One reactant will always run out first unless the reactants are supplied in the exact stoichiometric ratio (here, that would require 2 mol N2 : 6 mol H2, which isn't the case).", 3: "NH3 is the product being formed, not a reactant being consumed, so it cannot be a 'limiting reactant.'" },
            tempting: "Choice A is a very common trap — students often assume the reactant with the smaller raw mole count must be limiting, without checking it against the required stoichiometric ratio.",
            commonMistake: "Comparing raw mole amounts directly instead of dividing by stoichiometric coefficients to find which reactant would run out first.",
            apTip: "To find the limiting reactant, divide each reactant's available moles by its coefficient in the balanced equation; whichever gives the smallest result is limiting — do this calculation explicitly rather than eyeballing the mole amounts."
          }
        },
        {
          id: 'chem-4-3', difficulty: 2, type: 'mcq', topic: 'Types of Reactions',
          prompt: "The reaction AgNO3(aq) + NaCl(aq) → AgCl(s) + NaNO3(aq) is best classified as a:",
          choices: ['Combustion reaction', 'Precipitation (double replacement) reaction', 'Single replacement reaction', 'Acid-base neutralization reaction'],
          correct: 1,
          explanation: {
            correct: "Two aqueous ionic compounds exchange partners (Ag with NO3 swaps for Ag with Cl, and Na with Cl swaps for Na with NO3), forming an insoluble solid (AgCl precipitate) — the defining pattern of a precipitation/double replacement reaction.",
            wrong: { 0: "Combustion reactions involve a fuel reacting with O2 to produce CO2 and H2O (typically); no oxygen or hydrocarbon fuel is involved here.", 2: "Single replacement involves one element displacing another in a compound (e.g., a metal displacing another metal ion); here, two compounds are swapping ionic partners, not a single element displacing anything.", 3: "Acid-base neutralization specifically involves an acid and a base reacting to form water and a salt; neither reactant here is acting as a classic Brønsted-Lowry acid or base." },
            tempting: "Choice C can tempt students who see 'silver' and think of a metal displacement reaction, but both reactants here are already full ionic compounds swapping partners, not an element reacting with a compound.",
            commonMistake: "Misclassifying double replacement reactions as single replacement when a metal ion happens to be involved, without checking whether an element or a compound is doing the displacing.",
            apTip: "To identify a double replacement/precipitation reaction, check for two aqueous ionic compounds as reactants and confirm that at least one product is insoluble (a precipitate) using solubility rules."
          }
        },
        {
          id: 'chem-4-4', difficulty: 3, type: 'mcq', topic: 'Stoichiometry & Percent Yield',
          prompt: "A reaction's theoretical yield is 12.0 g of product, but only 9.6 g is actually obtained. What is the percent yield?",
          choices: ['60%', '72%', '80%', '96%'],
          correct: 2,
          explanation: {
            correct: "Percent yield = (actual yield / theoretical yield) × 100 = (9.6/12.0) × 100 = 80%.",
            wrong: { 0: "60% would result from a different (incorrect) ratio, such as mistakenly dividing 7.2 by 12.0 rather than the actual given values.", 1: "72% doesn't match the correct division of 9.6/12.0; it may result from a calculation error.", 3: "96% would only be correct if 11.52 g were obtained, not the 9.6 g actually stated in the problem." },
            tempting: "None of the distractors are conceptually tricky here — this question mainly tests careful arithmetic and correctly identifying which number is theoretical vs. actual yield.",
            commonMistake: "Accidentally dividing theoretical yield by actual yield (inverting the fraction) instead of actual divided by theoretical.",
            apTip: "Always write the percent yield formula explicitly as (actual/theoretical) × 100 before plugging in numbers, to avoid inverting the fraction under time pressure."
          }
        },
        {
          id: 'chem-4-5', difficulty: 4, type: 'mcq', topic: 'Net Ionic Equations',
          prompt: "Which is the correct net ionic equation for the reaction between aqueous HCl and aqueous NaOH?",
          choices: ['HCl(aq) + NaOH(aq) → NaCl(aq) + H2O(l)', 'H+(aq) + OH-(aq) → H2O(l)', 'Na+(aq) + Cl-(aq) → NaCl(aq)', 'H+(aq) + Cl-(aq) + Na+(aq) + OH-(aq) → Na+(aq) + Cl-(aq) + H2O(l)'],
          correct: 1,
          explanation: {
            correct: "The net ionic equation removes spectator ions (Na+ and Cl-, which appear unchanged on both sides) and shows only the species that actually undergo change: H+ and OH- combining to form water.",
            wrong: { 0: "This is the molecular (full) equation, not the net ionic equation — it hasn't been broken into ions or had spectators removed.", 2: "Na+ and Cl- are spectator ions that don't actually react with each other in this reaction; they remain dissolved and unchanged, so this doesn't represent the actual chemical change occurring.", 3: "This is the complete ionic equation (all species shown as ions, including spectators) — it's a valid intermediate step, but not the final net ionic equation, which requires removing the unchanged spectator ions." },
            tempting: "Choice D is tempting because it's technically correct as an intermediate 'complete ionic equation,' but the question specifically asks for the NET ionic equation, which requires the additional step of canceling spectator ions.",
            commonMistake: "Stopping at the complete ionic equation (all ions shown) without completing the final step of identifying and removing spectator ions.",
            apTip: "Always work through three explicit stages: (1) molecular equation, (2) complete ionic equation (all strong electrolytes split into ions), (3) net ionic equation (cancel spectators) — showing this progression on an FRQ demonstrates full understanding."
          }
        },
        {
          id: 'chem-4-6', difficulty: 5, type: 'mcq', topic: 'Thermochemistry of Reactions',
          prompt: "A reaction has ΔH = -180 kJ/mol and is found to still proceed extremely slowly at room temperature despite being highly exothermic. Which statement best explains this apparent contradiction?",
          choices: ['Exothermic reactions must always be fast, so this data must be an experimental error', 'Thermodynamic favorability (negative ΔH) and kinetic feasibility (reaction rate) are governed by different factors — this reaction likely has a high activation energy despite being exothermic overall', 'The reaction must actually be endothermic if it proceeds slowly', 'A negative ΔH guarantees a fast reaction rate at any temperature'],
          correct: 1,
          explanation: {
            correct: "Thermodynamics (ΔH, whether a reaction is favorable overall) and kinetics (how fast a reaction proceeds, governed by activation energy) are independent considerations; a reaction can be highly exothermic (thermodynamically favorable) yet still proceed slowly if it has a large activation energy barrier to overcome — diamond's slow conversion to graphite is a classic real example of this exact phenomenon.",
            wrong: { 0: "There's no inherent rule that all exothermic reactions must be fast; this assumption itself is the misconception the question is testing.", 2: "The sign of ΔH is a direct thermodynamic measurement independent of reaction rate; a slow rate doesn't change or contradict a measured negative ΔH value.", 3: "This is the same flawed assumption restated — ΔH's sign says nothing about the size of the activation energy barrier, which is what actually controls reaction rate." },
            tempting: "Choices A and D both stem from the same common misconception — that thermodynamic favorability (energy released) and kinetic speed (rate) must always move together, when in reality they are governed by entirely separate physical factors (energy difference vs. energy barrier height).",
            commonMistake: "Assuming a reaction that releases a lot of energy overall must also proceed quickly, without distinguishing 'how much energy is released' (thermodynamics) from 'how easily the reaction gets started' (kinetics/activation energy).",
            apTip: "College-level insight: the classic real-world example is diamond → graphite, which is exothermic and thermodynamically favorable, yet proceeds so slowly at room temperature it's practically unobservable due to an extremely high activation energy — citing this example explicitly demonstrates strong conceptual command on an FRQ about thermodynamics vs. kinetics."
          }
        }
      ]
    },
    {
      id: 5,
      name: 'Unit 5: Kinetics',
      questions: [
        {
          id: 'chem-5-1', difficulty: 1, type: 'mcq', topic: 'Rate Laws',
          prompt: "For the reaction 2NO + O2 → 2NO2, the rate law is determined experimentally to be Rate = k[NO]²[O2]. What is the overall order of the reaction?",
          choices: ['2nd order', '3rd order', '1st order', '4th order'],
          correct: 1,
          explanation: {
            correct: "Overall order is the sum of the exponents in the rate law: 2 (from [NO]²) + 1 (from [O2]¹) = 3rd order overall.",
            wrong: { 0: "2nd order would only account for the [NO]² term, ignoring the additional order contributed by [O2].", 2: "1st order doesn't match either individual exponent shown or their sum.", 3: "4th order overshoots the actual sum of the exponents (2+1=3, not 4)." },
            tempting: "Choice A is tempting if a student only looks at the exponent on NO and forgets to add the exponent on O2.",
            commonMistake: "Forgetting that overall reaction order is the SUM of all exponents in the rate law, not just the largest one or the one for the first reactant listed.",
            apTip: "Always underline every exponent in a rate law and explicitly add them together before answering an overall-order question — a simple habit that prevents this common error."
          }
        },
        {
          id: 'chem-5-2', difficulty: 2, type: 'mcq', topic: 'Reaction Mechanisms',
          prompt: "A proposed two-step mechanism has a slow first step and a fast second step. Which statement about the rate law is correct?",
          choices: ["The rate law is determined by summing both steps' rate expressions", "The rate law is determined by the slow (rate-determining) step's reactants", 'The rate law can only be determined by the fast step', "The rate law is always equal to the overall balanced equation's stoichiometric coefficients"],
          correct: 1,
          explanation: {
            correct: "In a multi-step mechanism, the slow step is the 'bottleneck' (rate-determining step), so the experimental rate law reflects the reactants (and their coefficients) involved in that slow step, sometimes after substituting in for any intermediates.",
            wrong: { 0: "Rate laws for multi-step mechanisms come from the slow step (with intermediate substitution if needed), not from summing all steps' expressions.", 2: "The fast step doesn't limit the overall rate, so it's the slow step, not the fast one, that determines the rate law.", 3: "Rate laws for overall multi-step reactions must be determined experimentally or from the mechanism — they are NOT simply read from the overall balanced equation's coefficients (that shortcut only works for true elementary, single-step reactions)." },
            tempting: "Choice D is a very common and tempting shortcut, but it's actually a rule that applies ONLY to single-step elementary reactions — most real reactions are multi-step, so their rate laws must come from the mechanism (specifically the slow step), not the overall equation.",
            commonMistake: "Applying the 'rate law = coefficients of overall equation' shortcut to reactions that are actually multi-step mechanisms.",
            apTip: "Always check whether a reaction is described as a single elementary step or a multi-step mechanism before deciding how to find the rate law — this distinction is tested directly and often."
          }
        },
        {
          id: 'chem-5-3', difficulty: 2, type: 'mcq', topic: 'Arrhenius Equation Concepts',
          prompt: "Increasing the temperature of a reaction increases the rate primarily because:",
          choices: ['The activation energy decreases at higher temperatures', 'A greater fraction of molecular collisions have sufficient energy to exceed the activation energy', 'The concentration of reactants increases with temperature', 'Molecules become larger and collide more often'],
          correct: 1,
          explanation: {
            correct: "Raising temperature increases the average kinetic energy of molecules, shifting the Maxwell-Boltzmann distribution so a larger fraction of collisions have energy equal to or greater than the activation energy, increasing the frequency of successful, rate-producing collisions.",
            wrong: { 0: "Activation energy is a property of the reaction pathway itself and does not change with temperature.", 2: "Temperature changes don't directly change molar concentration of reactants (assuming constant volume/moles).", 3: "Temperature doesn't change molecular size; it increases molecular speed/kinetic energy, which increases collision frequency and, more importantly, collision energy." },
            tempting: "Choice A is tempting because both temperature and activation energy affect rate, but they're independent factors — activation energy is fixed by the reaction's mechanism/pathway, not altered by temperature itself.",
            commonMistake: "Confusing 'temperature affects the fraction of molecules that can overcome Ea' with 'temperature changes Ea itself.'",
            apTip: "On FRQs, explicitly reference the Maxwell-Boltzmann distribution shifting and 'fraction of molecules with E ≥ Ea' — full credit almost always requires this specific mechanistic language rather than just 'molecules move faster.'"
          }
        },
        {
          id: 'chem-5-4', difficulty: 3, type: 'mcq', topic: 'Integrated Rate Laws',
          prompt: "A plot of ln[A] versus time for a reaction produces a straight line. What does this indicate about the reaction order with respect to A?",
          choices: ['Zero order', 'First order', 'Second order', 'The reaction order cannot be determined from this graph'],
          correct: 1,
          explanation: {
            correct: "The integrated rate law for a first-order reaction is ln[A] = -kt + ln[A]₀, which is exactly the equation of a straight line (y = mx + b) when plotting ln[A] vs. time — a straight line here is the defining signature of first order.",
            wrong: { 0: "A zero-order reaction gives a straight line when plotting [A] directly (not ln[A]) versus time.", 2: "A second-order reaction gives a straight line when plotting 1/[A] versus time, not ln[A].", 3: "This graph pattern is precisely how reaction order is determined graphically — a straight ln[A] vs. time plot specifically identifies first order." },
            tempting: "Choice A is tempting since students often blur together which specific transformation of concentration ([A], ln[A], or 1/[A]) corresponds to which order.",
            commonMistake: "Mixing up the three standard linear plots: [A] vs t → zero order; ln[A] vs t → first order; 1/[A] vs t → second order.",
            apTip: "Memorize this graphing table cold — AP Chem frequently gives you a graph and asks you to identify order directly from which transformed variable produces a straight line."
          }
        },
        {
          id: 'chem-5-5', difficulty: 4, type: 'mcq', topic: 'Catalysis',
          prompt: "Adding a catalyst to a reaction increases the rate constant k. Which of the following best explains this at the molecular level, consistent with the Arrhenius equation k = Ae^(-Ea/RT)?",
          choices: ['The catalyst increases the temperature of the system', 'The catalyst provides an alternative pathway with a lower activation energy, increasing the fraction of molecules with sufficient energy to react', 'The catalyst increases the frequency factor A by increasing reactant concentration', 'The catalyst shifts the equilibrium position to favor products'],
          correct: 1,
          explanation: {
            correct: "A catalyst offers a different reaction mechanism/pathway with a lower activation energy (Ea); since k depends exponentially on -Ea/RT, even a modest decrease in Ea significantly increases k by allowing far more collisions to have sufficient energy to react.",
            wrong: { 0: "Catalysts don't change the reaction temperature; they provide an alternate pathway that works at the same temperature.", 2: "Catalysts don't change reactant concentration; concentration affects rate, not the rate constant k itself, and isn't what the frequency factor A represents here.", 3: "Catalysts speed up both forward and reverse reactions equally, so they help a reaction reach equilibrium faster, but they do NOT shift the equilibrium position (Keq is unchanged)." },
            tempting: "Choice D is a very common misconception — students often think catalysts 'help' a reaction succeed by favoring products, but catalysts affect rate/kinetics only, never the thermodynamic equilibrium position.",
            commonMistake: "Confusing kinetics (rate, catalysts, activation energy) with thermodynamics/equilibrium (Keq, product favorability) — these are governed by different principles.",
            apTip: "Always be ready to state explicitly on an FRQ: 'a catalyst lowers Ea and increases rate, but does not affect Keq or the equilibrium position' — this exact sentence pattern is what full-credit responses include."
          }
        },
        {
          id: 'chem-5-6', difficulty: 5, type: 'mcq', topic: 'Steady-State/Mechanism Reasoning',
          prompt: "A mechanism is proposed: Step 1 (fast, reversible): A + B ⇌ C; Step 2 (slow): C + D → products. The experimentally observed rate law is Rate = k[A][B][D]/[E], where E is a species not in the mechanism as written. What does this most likely indicate?",
          choices: ['The mechanism is correct and complete as written', 'A reverse reaction involving E must consume C, requiring the mechanism to be revised to include E explicitly', 'The rate law is impossible and must be an experimental error', "E must be a catalyst that doesn't affect the rate law"],
          correct: 1,
          explanation: {
            correct: "Since the observed rate law includes [E] in the denominator (an inverse dependence), E must participate in a step that affects the intermediate C's formation or consumption — meaning the mechanism as written is incomplete and needs revision to explicitly include E's role.",
            wrong: { 0: "A complete, correct mechanism must produce a rate law consistent with all observed dependencies; since E appears in the experimental rate law but not in the proposed mechanism, the mechanism as written is incomplete.", 2: "Rate laws with species in the denominator are legitimate and well-documented in real chemistry (e.g., certain enzyme-catalyzed and inhibited mechanisms) — this isn't inherently an error.", 3: "A true catalyst would not typically appear in the overall rate law with an inverse dependence in this way; a catalyst that's fully regenerated doesn't usually create this kind of denominator term unless it's actively involved in a competing equilibrium." },
            tempting: "Choice A can tempt students into assuming any 'given' mechanism must be correct, without checking that the derived rate law actually matches ALL the experimentally observed concentration dependencies, including unexpected ones like an inverse relationship.",
            commonMistake: "Not recognizing that a rate law inconsistent with (or containing terms absent from) a proposed mechanism is direct evidence that the mechanism needs revision.",
            apTip: "College-level insight: inverse concentration dependence in a rate law is a real, recognized signature of a species being consumed in a fast pre-equilibrium step (common in advanced kinetics/biochemistry, e.g., inhibition kinetics) — recognizing this pattern is beyond typical AP scope but reflects real mechanistic reasoning used in college kinetics courses."
          }
        }
      ]
    },
    {
      id: 6,
      name: 'Unit 6: Thermodynamics',
      questions: [
        {
          id: 'chem-6-1', difficulty: 1, type: 'mcq', topic: 'Enthalpy',
          prompt: "A reaction releases heat to its surroundings. Which of the following is true?",
          choices: ['ΔH is positive, and the reaction is endothermic', 'ΔH is negative, and the reaction is exothermic', 'ΔH is negative, and the reaction is endothermic', 'ΔH is zero, since heat and enthalpy are unrelated'],
          correct: 1,
          explanation: {
            correct: "A reaction that releases heat to its surroundings is exothermic, and by convention this corresponds to a negative ΔH (enthalpy of the system decreases as heat leaves it).",
            wrong: { 0: "Positive ΔH corresponds to endothermic reactions, which ABSORB heat from the surroundings — the opposite of what's described.", 2: "Endothermic reactions absorb (not release) heat, so this combination of 'negative ΔH' with 'endothermic' is internally inconsistent with the standard sign convention.", 3: "Heat and enthalpy are directly related at constant pressure (ΔH essentially represents heat flow under these conditions); they are not unrelated." },
            tempting: "Choice A is tempting only if the sign convention is misremembered, associating 'releasing heat' incorrectly with a positive sign.",
            commonMistake: "Reversing the sign convention — remember, negative ΔH means the system's enthalpy decreased, consistent with releasing heat (exothermic); positive ΔH means it increased by absorbing heat (endothermic).",
            apTip: "Anchor the sign convention with a physical picture: exothermic reactions feel warm to the touch (heat leaving the reaction into your hand) and have negative ΔH; endothermic reactions feel cold (heat being pulled from your hand) and have positive ΔH."
          }
        },
        {
          id: 'chem-6-2', difficulty: 2, type: 'mcq', topic: "Hess's Law",
          prompt: "Using Hess's Law, if Reaction 1 has ΔH₁ = -150 kJ and Reaction 2 has ΔH₂ = +80 kJ, and the overall reaction is the sum of Reaction 1 and Reaction 2, what is the overall ΔH?",
          choices: ['-70 kJ', '+70 kJ', '-230 kJ', '+230 kJ'],
          correct: 0,
          explanation: {
            correct: "Hess's Law states that when reactions are added together, their enthalpy changes simply add algebraically: ΔH_overall = ΔH₁ + ΔH₂ = -150 + 80 = -70 kJ.",
            wrong: { 1: "This has the correct magnitude but the wrong sign; carefully adding -150 and +80 gives -70, not +70.", 2: "This results from subtracting instead of adding (-150 - 80 = -230), which isn't how Hess's Law combines the two given reactions when they're being added together.", 3: "This is the same subtraction error as choice C, but with the sign flipped; the two given ΔH values should be added directly, not subtracted." },
            tempting: "Choice C is tempting if a sign error is made when combining a negative and positive value, treating it as though both values should reinforce (subtract) rather than partially cancel (add algebraically).",
            commonMistake: "Making sign errors when algebraically adding a negative and a positive ΔH value together.",
            apTip: "When applying Hess's Law, always keep every ΔH value's sign attached and add them exactly as signed numbers — treat it like ordinary integer addition, being extra careful with a negative plus a positive."
          }
        },
        {
          id: 'chem-6-3', difficulty: 2, type: 'mcq', topic: 'Entropy',
          prompt: "Which of the following processes is associated with an increase in entropy (ΔS > 0)?",
          choices: ['A gas condensing into a liquid', 'A solid dissolving into solution, increasing the number of possible particle arrangements', 'A liquid freezing into a solid', 'Gas molecules combining to form a smaller number of moles of solid product'],
          correct: 1,
          explanation: {
            correct: "Dissolving a solid into solution typically increases entropy because the solid's rigid, ordered particle arrangement is replaced by particles freely dispersed and moving throughout the solvent, dramatically increasing the number of possible microscopic arrangements (positional disorder).",
            wrong: { 0: "Condensing from gas to liquid decreases the freedom of particle movement and arrangement, decreasing entropy, not increasing it.", 2: "Freezing from liquid to solid further restricts particle movement into a fixed lattice, decreasing entropy.", 3: "Combining gas molecules into a smaller number of moles of solid dramatically reduces both the amount of independent particle movement and the physical state's disorder, decreasing entropy." },
            tempting: "None of the other options describe a genuine entropy increase, but a student who only associates entropy loosely with 'change' in general (rather than specifically increasing disorder/possible arrangements) might not correctly evaluate each phase change's direction.",
            commonMistake: "Not connecting entropy conceptually to the number of possible microscopic arrangements (positional/motional freedom), leading to guesses that don't systematically evaluate each option's actual disorder change.",
            apTip: "Use the general ordering solid < liquid < gas for entropy (least to most disorder), and remember dissolving generally increases entropy too — any process moving left-to-right in that ordering (or dissolving) tends to have positive ΔS."
          }
        },
        {
          id: 'chem-6-4', difficulty: 3, type: 'mcq', topic: 'Gibbs Free Energy',
          prompt: "A reaction has ΔH = -40 kJ/mol (exothermic) and ΔS = -100 J/(mol·K) (entropy decreases). Under what temperature conditions will this reaction be spontaneous (ΔG < 0)?",
          choices: ['At all temperatures', 'At no temperature — it is never spontaneous', 'Only at relatively low temperatures', 'Only at relatively high temperatures'],
          correct: 2,
          explanation: {
            correct: "Using ΔG = ΔH - TΔS: since ΔH is negative (favors spontaneity) and ΔS is negative (the -TΔS term becomes positive and grows with increasing T, opposing spontaneity), ΔG will be most negative (spontaneous) at LOW temperatures, where the unfavorable -TΔS term stays small and the favorable negative ΔH term dominates.",
            wrong: { 0: "This reaction is NOT spontaneous at all temperatures, because at sufficiently high T, the -TΔS term (which is positive here, since ΔS is negative) grows large enough to make ΔG positive, making the reaction non-spontaneous.", 1: "The reaction CAN be spontaneous, specifically at low enough temperatures where the favorable ΔH term dominates over the small unfavorable -TΔS term.", 3: "This is backwards — high temperature makes the unfavorable -TΔS term larger in magnitude (since ΔS is negative), pushing ΔG toward positive (non-spontaneous), not favoring spontaneity." },
            tempting: "Choice D can tempt students who default to 'higher temperature always helps a reaction proceed,' without working through the specific sign combination of ΔH and ΔS in the ΔG equation for this particular case.",
            commonMistake: "Not working through all four ΔH/ΔS sign combinations systematically in the ΔG = ΔH - TΔS equation, and instead relying on a vague, incorrect intuition that heat always helps spontaneity.",
            apTip: "Memorize all four ΔH/ΔS sign combinations and their spontaneity conditions: (-,+) always spontaneous; (+,-) never spontaneous; (-,-) spontaneous at LOW T; (+,+) spontaneous at HIGH T — this case (-ΔH, -ΔS) is the 'low T' pattern."
          }
        },
        {
          id: 'chem-6-5', difficulty: 4, type: 'mcq', topic: 'Free Energy & Equilibrium',
          prompt: "A reaction has a large negative ΔG° under standard conditions. What can be concluded about its equilibrium constant K?",
          choices: ['K will be very small (much less than 1), since the reaction is highly favorable', 'K will be very large (much greater than 1), since a large negative ΔG° corresponds to a reaction that strongly favors products at equilibrium', 'K must equal exactly 1, regardless of ΔG°', 'ΔG° provides no information about K'],
          correct: 1,
          explanation: {
            correct: "ΔG° and K are directly related by ΔG° = -RT ln(K); a large negative ΔG° means ln(K) must be a large positive number, which corresponds to a large K value — meaning the equilibrium strongly favors products, consistent with the reaction being thermodynamically very favorable.",
            wrong: { 0: "This is backwards — a small K (favoring reactants) would correspond to a positive or only slightly negative ΔG°, not a large negative one.", 2: "K = 1 specifically corresponds to ΔG° = 0 (since ln(1) = 0), not to a large negative ΔG°.", 3: "ΔG° and K are mathematically linked by a direct, well-defined equation (ΔG° = -RT ln K), so ΔG° absolutely does provide quantitative information about K." },
            tempting: "Choice A can tempt students who intuitively but incorrectly link 'more negative ΔG°' with 'less product formation,' when actually a more negative ΔG° signals a MORE product-favored equilibrium (larger K).",
            commonMistake: "Not internalizing the direct mathematical (and conceptual) relationship between ΔG° and K, leading to guesses that get the direction of the relationship backwards.",
            apTip: "Memorize the equation ΔG° = -RT ln(K) explicitly, and practice reasoning through its direction: very negative ΔG° → large positive ln(K) → large K (products favored); very positive ΔG° → large negative ln(K) → small K (reactants favored)."
          }
        },
        {
          id: 'chem-6-6', difficulty: 5, type: 'mcq', topic: 'Coupled Reactions',
          prompt: "A biological process requires an endergonic reaction with ΔG° = +30 kJ/mol to proceed. Cells commonly accomplish this by coupling it to ATP hydrolysis (ΔG° = -30.5 kJ/mol for ATP → ADP + Pi). What best explains why this coupling allows the overall process to proceed spontaneously?",
          choices: ['ATP hydrolysis physically supplies heat that speeds up the endergonic reaction\'s rate', 'The two reactions are summed so that the combined ΔG° (+30 + (-30.5) = -0.5 kJ/mol) is now slightly negative, making the overall coupled process spontaneous even though the first reaction alone was not', 'ATP hydrolysis changes the equilibrium constant of the endergonic reaction without changing its ΔG°', 'Coupling reactions only affects reaction rate (kinetics), not thermodynamic favorability'],
          correct: 1,
          explanation: {
            correct: "When two reactions are coupled (effectively summed into one overall process, often via a shared enzyme and intermediate), their standard free energy changes add algebraically, just like in Hess's Law for enthalpy; here, the unfavorable +30 kJ/mol endergonic reaction combined with the favorable -30.5 kJ/mol ATP hydrolysis yields a net slightly negative ΔG° (-0.5 kJ/mol), making the OVERALL coupled process thermodynamically spontaneous, even though the biological reaction alone would not be.",
            wrong: { 0: "This isn't primarily about heat transfer speeding up a rate (a kinetic/reaction-rate framing); it's fundamentally a thermodynamic argument about summing free energy changes to shift overall spontaneity.", 2: "Coupling doesn't change the equilibrium constant of the original endergonic reaction in isolation; rather, it creates a new OVERALL reaction (the sum of both processes) with its own combined ΔG° and correspondingly different overall K.", 3: "This is incorrect — coupling directly changes the THERMODYNAMIC favorability (ΔG°) of the overall combined process by summing the two ΔG° values, not just the rate at which it occurs." },
            tempting: "Choice A can tempt students who think of ATP as a generic 'energy source' in a vague, heat-like sense, rather than understanding the precise thermodynamic mechanism of ΔG° values summing algebraically when reactions are coupled.",
            commonMistake: "Treating ATP's role in coupled reactions as a vague 'energy supply' without understanding the specific, quantitative mechanism: free energy changes of coupled reactions add together just like Hess's Law enthalpies.",
            apTip: "College-level insight: this exact ATP-coupling mechanism (summing ΔG° values to drive otherwise unfavorable biological reactions) is the fundamental thermodynamic basis of cellular bioenergetics — explicitly showing the numeric addition of the two ΔG° values on an FRQ (not just asserting 'ATP provides energy') demonstrates the quantitative, mechanistic understanding that separates a top-scoring response."
          }
        }
      ]
    },
    {
      id: 7,
      name: 'Unit 7: Equilibrium',
      questions: [
        {
          id: 'chem-7-1', difficulty: 1, type: 'mcq', topic: 'Equilibrium Basics',
          prompt: "At chemical equilibrium, which of the following is true?",
          choices: ['The concentrations of reactants and products are always equal', 'The forward and reverse reaction rates are equal, so concentrations remain constant', 'The reaction has stopped completely', 'All reactants have been converted to products'],
          correct: 1,
          explanation: {
            correct: "Equilibrium is a dynamic state where the forward and reverse reactions continue to occur but at equal rates, so net concentrations of all species stay constant over time even though the reaction hasn't stopped.",
            wrong: { 0: "Concentrations at equilibrium are constant, but there's no requirement they be equal to each other — Keq can favor either side.", 2: "The reaction continues at the molecular level in both directions; it's the NET change in concentration that becomes zero, not the reaction itself stopping.", 3: "Complete conversion to products would mean no reverse reaction is possible, which contradicts the dynamic, reversible nature of equilibrium." },
            tempting: "Choice A is tempting because 'equilibrium' sounds like 'equal amounts' in everyday language, but chemically it refers to equal RATES, not equal concentrations.",
            commonMistake: "Interpreting 'equilibrium' colloquially (equal amounts) instead of its precise chemical meaning (equal forward/reverse rates).",
            apTip: "Whenever asked to describe equilibrium on an FRQ, use the specific phrase 'the rates of the forward and reverse reactions are equal' — this is the core, gradable definition."
          }
        },
        {
          id: 'chem-7-2', difficulty: 2, type: 'mcq', topic: "Le Chatelier's Principle",
          prompt: "For the exothermic reaction N2(g) + 3H2(g) ⇌ 2NH3(g), what happens to the equilibrium position if temperature is increased?",
          choices: ['Shifts right, favoring more NH3 production', 'Shifts left, favoring reactants, since heat acts like an added product in an exothermic reaction', "No shift occurs since temperature doesn't affect equilibrium position", 'Shifts right because higher temperature always favors products'],
          correct: 1,
          explanation: {
            correct: "Because the forward reaction is exothermic, heat can be treated as a product; adding heat (raising temperature) shifts the equilibrium left, toward reactants, to partially counteract the added heat — consistent with Le Chatelier's principle.",
            wrong: { 0: "This is the opposite of the correct shift for an exothermic reaction under increased temperature.", 2: "Temperature is one of the few stress factors that actually changes the value of Keq itself (not just position via reshuffling), and it definitely affects equilibrium position.", 3: "Whether increased temperature favors products or reactants depends on whether the reaction is endothermic or exothermic — there's no universal rule that higher temperature always favors products." },
            tempting: "Choice D is tempting as an oversimplified 'rule of thumb,' but the direction of the shift always depends on the sign of ΔH for the specific reaction.",
            commonMistake: "Applying a blanket rule ('heat always shifts right/increases products') instead of checking whether the specific reaction is exothermic or endothermic first.",
            apTip: "Treat heat as a reactant (endothermic) or product (exothermic) and apply Le Chatelier's principle exactly like adding/removing a chemical species — this trick works reliably every time."
          }
        },
        {
          id: 'chem-7-3', difficulty: 2, type: 'mcq', topic: 'ICE Tables',
          prompt: "For the reaction A ⇌ B + C with Keq = 4.0, if the initial concentration of A is 1.0 M and initial [B] = [C] = 0 M, which expression correctly represents Keq at equilibrium using an ICE table (let x = change in concentration)?",
          choices: ['Keq = x² / (1.0 + x)', 'Keq = x² / (1.0 - x)', 'Keq = (1.0 - x) / x²', 'Keq = x / (1.0 - x)²'],
          correct: 1,
          explanation: {
            correct: "As A decreases by x, both B and C increase by x, so equilibrium concentrations are [A] = 1.0 - x, [B] = x, [C] = x; Keq = [B][C]/[A] = (x)(x)/(1.0 - x) = x²/(1.0 - x).",
            wrong: { 0: "This incorrectly adds x to the initial A concentration instead of subtracting it, which would only be true if A were a product, not a reactant, in this reaction.", 2: "This inverts the correct Keq expression, effectively representing 1/Keq rather than Keq.", 3: "This mismatches which species is squared; B and C (not A) are the ones that should appear as x·x = x² in the numerator." },
            tempting: "Choice A is tempting from a sign error — forgetting that A is being consumed (so it decreases, using -x) rather than produced.",
            commonMistake: "Sign errors in the ICE table — forgetting whether a species is a reactant (decreasing, use -x) or product (increasing, use +x).",
            apTip: "Before writing the Keq expression, explicitly label each species in your ICE table as reactant or product first, so the sign of each 'change' row is unambiguous."
          }
        },
        {
          id: 'chem-7-4', difficulty: 3, type: 'mcq', topic: 'Reaction Quotient (Q vs K)',
          prompt: "At a given moment, a reaction has Q = 0.5 and Keq = 10. Which direction will the reaction proceed to reach equilibrium?",
          choices: ['Forward (toward products), since Q < K', 'Reverse (toward reactants), since Q < K', 'The reaction is already at equilibrium', 'The reaction cannot be predicted without temperature data'],
          correct: 0,
          explanation: {
            correct: "When Q < K, there aren't yet enough products relative to reactants to satisfy the equilibrium ratio, so the reaction proceeds forward (making more products) until Q rises to equal K.",
            wrong: { 1: "This is the opposite direction; Q < K means the reaction needs to move toward products (forward), not reactants.", 2: "Q = K is the condition for equilibrium; here Q (0.5) ≠ K (10), so the system is not yet at equilibrium.", 3: "Temperature affects the specific value of K, but the Q-vs-K comparison rule for predicting direction applies regardless of what K's value happens to be — no additional temperature data is needed to answer this specific question." },
            tempting: "Choice B is tempting for students who mix up the direction rule (some misremember it as 'Q < K means reverse').",
            commonMistake: "Reversing the Q-vs-K direction rule — remember, the reaction shifts toward whichever side has 'too little' relative to the equilibrium ratio.",
            apTip: "Memorize the rule as a mnemonic: 'Q < K, go make more (product)' — forward reaction increases Q until Q = K."
          }
        },
        {
          id: 'chem-7-5', difficulty: 4, type: 'mcq', topic: 'Common Ion Effect / Solubility Equilibria',
          prompt: "The solubility of PbCl2 (Ksp = 1.7 × 10⁻⁵) in pure water is compared to its solubility in 0.10 M NaCl solution. What is the expected effect, and why?",
          choices: ['Solubility increases in NaCl solution because Cl⁻ ions help stabilize Pb²⁺ ions', 'Solubility decreases in NaCl solution due to the common ion effect, as added Cl⁻ shifts the dissolution equilibrium toward the solid', 'Solubility is unaffected since NaCl is a spectator compound', 'Solubility increases because NaCl increases the overall ionic strength, which always increases solubility of all salts'],
          correct: 1,
          explanation: {
            correct: "PbCl2 ⇌ Pb²⁺ + 2Cl⁻; adding NaCl introduces extra Cl⁻ (a common ion already in the equilibrium), which by Le Chatelier's principle shifts the equilibrium back toward the solid PbCl2, decreasing its measured solubility compared to pure water.",
            wrong: { 0: "This describes a stabilizing/complexing interaction that isn't occurring here; instead, added Cl⁻ pushes the equilibrium toward the solid, reducing dissolved Pb²⁺, not increasing it.", 2: "NaCl directly participates by contributing Cl⁻, one of the exact ions in the PbCl2 dissolution equilibrium — it is not a spectator with respect to this specific equilibrium.", 3: "While ionic strength effects on activity coefficients are real in advanced treatments, the dominant, AP-level effect here is the common ion effect, which decreases (not increases) solubility for this specific case." },
            tempting: "Choice D can tempt students who've heard 'ionic strength affects solubility' in a general sense, without recognizing that the common ion effect (a much larger, more directly testable effect at this level) points the opposite direction here.",
            commonMistake: "Overlooking that the added ion (Cl⁻) is literally part of the dissolution equilibrium itself, and instead treating NaCl as a neutral, non-interacting additive.",
            apTip: "Whenever a problem adds a salt that shares an ion with the equilibrium in question, immediately think 'common ion effect → solubility decreases,' and write the shared-ion species explicitly in your equilibrium expression to justify it."
          }
        },
        {
          id: 'chem-7-6', difficulty: 5, type: 'mcq', topic: 'Multiple Equilibria',
          prompt: "A solution contains a weak acid HA (Ka = 1.0 × 10⁻⁵), and its conjugate base A⁻ also binds a metal ion M²⁺ to form complex MA⁺ (Kf = 1.0 × 10⁸). If a strong acid is added to this system, what is the most likely combined effect on both equilibria?",
          choices: ['Both equilibria are unaffected since strong acid only reacts with water', 'Added H⁺ shifts the HA/A⁻ equilibrium toward HA, which decreases free A⁻ and shifts the MA⁺ complex equilibrium toward dissociation, releasing free M²⁺', "Added H⁺ has no effect on the complexation equilibrium since it doesn't directly react with MA⁺", 'Added H⁺ increases A⁻ concentration, strengthening the MA⁺ complex further'],
          correct: 1,
          explanation: {
            correct: "Added H⁺ reacts with A⁻ (the conjugate base) to form more HA, decreasing free [A⁻]; since A⁻ is also tied up in the separate MA⁺ complexation equilibrium, removing A⁻ from that system pulls the complexation equilibrium toward dissociation, releasing more free M²⁺ and decreasing [MA⁺] — this is how the two equilibria are coupled through the shared species A⁻.",
            wrong: { 0: "Strong acid directly reacts with the weak base A⁻ present in solution, not just with water, and this has cascading effects on the linked complexation equilibrium.", 2: "Although H⁺ doesn't react with MA⁺ directly, its effect on the shared species A⁻ indirectly but definitely affects the complexation equilibrium — coupled equilibria transmit stress through shared species.", 3: "This is backwards — added H⁺ consumes (decreases), not increases, free A⁻ by protonating it to HA." },
            tempting: "Choice A and C both underestimate how equilibria can be coupled through a shared species — a very natural but incorrect intuition is that a stress must act 'directly' on an equilibrium to affect it.",
            commonMistake: "Treating each equilibrium in isolation instead of recognizing that two equilibria sharing a common species (here, A⁻) are chemically coupled, so a stress on one propagates to the other.",
            apTip: "College-level insight: this reflects real biochemical and analytical chemistry systems (e.g., metal-ligand buffers, EDTA titrations) where pH changes indirectly control metal ion speciation through linked acid-base and complexation equilibria — recognizing shared-species coupling is a hallmark of advanced equilibrium reasoning beyond a single ICE table."
          }
        }
      ]
    },
    {
      id: 8,
      name: 'Unit 8: Acids & Bases',
      questions: [
        {
          id: 'chem-8-1', difficulty: 1, type: 'mcq', topic: 'pH Scale',
          prompt: "A solution has a pH of 3. What is true about this solution?",
          choices: ['It is basic, with [H+] greater than [OH-]', 'It is acidic, with [H+] greater than [OH-]', 'It is neutral', 'It has no hydrogen ions present at all'],
          correct: 1,
          explanation: {
            correct: "A pH of 3 is well below 7 (neutral), indicating an acidic solution where the concentration of H+ ions exceeds the concentration of OH- ions.",
            wrong: { 0: "A basic solution would have a pH above 7, not below it; pH 3 specifically indicates acidity, not basicity.", 2: "Neutral solutions have a pH of 7 (at 25°C), not 3.", 3: "All aqueous solutions contain some concentration of H+ ions (governed by Kw = [H+][OH-]); a low pH indicates a HIGH H+ concentration, not an absence of H+." },
            tempting: "None of the distractors are especially subtle if the pH scale is understood correctly, but confusing which direction (high or low pH) corresponds to acidic vs. basic is a common early error.",
            commonMistake: "Reversing the pH scale direction — remember, LOWER pH values (below 7) are MORE acidic, and HIGHER pH values (above 7) are MORE basic.",
            apTip: "Anchor the scale with the neutral point: pH 7 = neutral (pure water at 25°C); pH < 7 = acidic; pH > 7 = basic — and remember pH is a LOG scale, so each whole number step is a 10-fold change in [H+]."
          }
        },
        {
          id: 'chem-8-2', difficulty: 2, type: 'mcq', topic: 'Strong vs. Weak Acids',
          prompt: "A 0.1 M solution of HCl (a strong acid) and a 0.1 M solution of acetic acid (a weak acid) are compared. Which correctly describes their relative pH values?",
          choices: ['Both solutions will have the same pH, since they have the same molar concentration', 'The HCl solution will have a lower pH, since it fully dissociates, producing a higher [H+] than the partially-dissociating acetic acid', 'The acetic acid solution will have a lower pH, since weak acids are always more concentrated in H+', 'pH cannot be compared without knowing the exact volume of each solution'],
          correct: 1,
          explanation: {
            correct: "HCl, a strong acid, dissociates essentially completely in water, so a 0.1 M HCl solution produces close to 0.1 M H+; acetic acid, a weak acid, only partially dissociates, producing a much smaller [H+] than its total concentration — so despite equal starting concentrations, HCl produces more H+ and thus a lower (more acidic) pH.",
            wrong: { 0: "Equal molar concentration doesn't guarantee equal pH, since strong and weak acids dissociate to very different extents — this is precisely the distinguishing feature between strong and weak acids.", 2: "This is backwards — weak acids produce LESS H+ than their total concentration would suggest (due to partial dissociation), resulting in a HIGHER pH (less acidic) than an equally concentrated strong acid, not a lower one.", 3: "Since both concentrations are given as molarities (moles per liter), volume already effectively cancels out for this pH comparison — pH depends on [H+] concentration, not on the total volume/amount alone." },
            tempting: "Choice A is tempting because 'same concentration' can feel like it should mean 'same pH,' but the crucial distinguishing factor between strong and weak acids is precisely their different degrees of dissociation at the same starting concentration.",
            commonMistake: "Assuming equal molar concentrations of different acids must produce equal pH, without accounting for differences in dissociation extent between strong and weak acids.",
            apTip: "Always explicitly state the degree of dissociation when comparing strong vs. weak acids/bases at equal concentration — 'strong acids fully dissociate, weak acids only partially dissociate' is the key sentence that explains virtually every pH-comparison question in this topic."
          }
        },
        {
          id: 'chem-8-3', difficulty: 2, type: 'mcq', topic: 'Conjugate Acid-Base Pairs',
          prompt: "In the reaction NH3 + H2O ⇌ NH4+ + OH-, which species is the conjugate acid of NH3?",
          choices: ['H2O', 'NH4+', 'OH-', 'NH3 has no conjugate acid'],
          correct: 1,
          explanation: {
            correct: "NH4+ is formed when NH3 gains a proton (H+); a conjugate acid is defined as the species formed when a base gains a proton, so NH4+ is the conjugate acid of the base NH3.",
            wrong: { 0: "H2O acts as an acid in this reaction (donating a proton to become OH-), making it a distinct species from NH3's conjugate acid pairing.", 2: "OH- is the conjugate BASE of the acid H2O (formed when H2O loses a proton), not the conjugate acid of NH3.", 3: "Every base has a corresponding conjugate acid, formed by gaining a proton; NH3 gaining a proton to form NH4+ is exactly this conjugate acid relationship." },
            tempting: "Choice C is tempting because OH- is clearly a product in the same reaction, but it's paired with H2O (as its conjugate base), not with NH3.",
            commonMistake: "Mismatching conjugate acid-base pairs across the wrong side of the reaction, rather than tracing exactly which specific proton transfer connects each pair.",
            apTip: "To identify conjugate pairs, find the species that differ by exactly ONE proton (H+): NH3/NH4+ is one pair (differing by one H+), and H2O/OH- is the other pair — always match pairs by this single-proton difference, not just by which side of the equation they're on."
          }
        },
        {
          id: 'chem-8-4', difficulty: 3, type: 'mcq', topic: 'pH of Salt Solutions',
          prompt: "A solution of sodium acetate (CH3COONa) is dissolved in water. Is the resulting solution acidic, basic, or neutral, and why?",
          choices: ['Neutral, since all salts produce neutral solutions', 'Acidic, since sodium is a metal cation', 'Basic, since the acetate ion (CH3COO-) is the conjugate base of a weak acid and will react with water to produce OH-', 'Acidic, since acetate ions release H+ directly into solution'],
          correct: 2,
          explanation: {
            correct: "Acetate (CH3COO-) is the conjugate base of acetic acid, a WEAK acid; conjugate bases of weak acids are themselves weak bases and will react with water (hydrolysis) to produce a small amount of OH-, making the solution basic; sodium (Na+), being the conjugate acid of a strong base (NaOH), doesn't meaningfully react with water and has no acidic/basic effect of its own.",
            wrong: { 0: "Not all salts produce neutral solutions — many salts (especially those derived from a weak acid or weak base) produce acidic or basic solutions, as this scenario demonstrates.", 1: "Na+ is the conjugate acid of a STRONG base (NaOH), and such conjugate acids don't meaningfully hydrolyze or affect solution pH; it doesn't make the solution acidic simply for being a metal cation.", 3: "Acetate ions don't release H+ into solution; instead, they act as a weak base and can accept a proton from water, releasing OH-, not H+." },
            tempting: "Choice B is tempting because 'metal cation' can sound vaguely acidic to some students, but simple alkali metal cations like Na+ (from strong base conjugates) don't hydrolyze and have no significant effect on pH.",
            commonMistake: "Assuming all salts are neutral, or assuming a salt's acidity/basicity based on superficial features (like containing a metal) rather than tracing whether its ions are conjugates of strong or weak acids/bases.",
            apTip: "For any salt hydrolysis question, check BOTH ions: a conjugate base of a WEAK acid makes the solution basic; a conjugate acid of a WEAK base makes the solution acidic; conjugates of STRONG acids/bases (like Cl- or Na+) don't hydrolyze and don't affect pH — apply this to each ion separately before concluding overall pH behavior."
          }
        },
        {
          id: 'chem-8-5', difficulty: 4, type: 'mcq', topic: 'Titration Curves',
          prompt: "A titration curve for a weak acid being titrated with a strong base shows a gradual, gently sloping region before the equivalence point, followed by a steep rise near the equivalence point. What does the gently sloping region represent?",
          choices: ['The point where the reaction has already finished', 'The buffer region, where the solution resists large pH changes due to the presence of significant amounts of both the weak acid and its conjugate base', 'A region where no acid-base reaction is occurring at all', 'The equivalence point itself'],
          correct: 1,
          explanation: {
            correct: "Before reaching the equivalence point, as strong base is added, some of the weak acid is converted to its conjugate base, creating a mixture containing significant amounts of BOTH the weak acid and its conjugate base — this is exactly the composition of a buffer, which resists large pH swings, producing the gently sloping (relatively flat) region seen on the titration curve.",
            wrong: { 0: "The reaction is actively continuing throughout this region as base is gradually added and neutralizes acid; it isn't already finished.", 2: "A reaction IS occurring throughout this region (acid being neutralized by added base); the gentle slope reflects buffering resistance to pH change, not an absence of reaction.", 3: "The equivalence point is specifically the steep, rapidly-rising portion of the curve where moles of acid and base become exactly equal, not the gently sloping region that precedes it." },
            tempting: "None of the distractors are especially close if buffer behavior on titration curves is understood specifically, but conflating the gently-sloping buffer region with the steep equivalence point itself is a common graph-reading error.",
            commonMistake: "Confusing the buffer region (gentle slope, before equivalence) with the equivalence point itself (steep rise, where moles of acid and base are exactly equal).",
            apTip: "On any weak acid/strong base titration curve, identify three key features explicitly: the initial pH (before any base added), the buffer region (gentle slope, roughly centered around the half-equivalence point where pH = pKa), and the equivalence point (steep rise, where pH is above 7 for this type of titration) — labeling all three earns more credit than describing the curve vaguely."
          }
        },
        {
          id: 'chem-8-6', difficulty: 5, type: 'mcq', topic: 'Polyprotic Acids',
          prompt: "A polyprotic acid H2A has Ka1 = 1.0 × 10⁻³ and Ka2 = 1.0 × 10⁻⁸. Why is Ka2 so much smaller than Ka1?",
          choices: ['Ka2 refers to a completely different, unrelated chemical species', 'It is harder to remove a proton (H+) from an already negatively charged ion (HA-) than from the neutral H2A molecule, due to increased electrostatic attraction between the remaining proton and the negative charge', 'The second proton is chemically identical to the first, so Ka2 should equal Ka1, and this data must be an error', 'Ka values always decrease arbitrarily with each subsequent ionization step for unrelated reasons'],
          correct: 1,
          explanation: {
            correct: "After the first proton is removed, the resulting species (HA-) carries a negative charge; removing a second proton (H+) from this already negatively charged species requires overcoming a stronger electrostatic attraction between the negative charge and the remaining proton, making the second ionization considerably less favorable (smaller Ka2) than the first ionization from the neutral H2A.",
            wrong: { 0: "Ka1 and Ka2 both describe sequential ionization steps of the SAME original polyprotic acid molecule, not unrelated species.", 2: "The chemical environment is NOT identical for the two ionization steps — removing a proton from a negatively charged species (HA-) is electrostatically much less favorable than removing one from a neutral species (H2A), which is precisely why Ka values differ so substantially and predictably between steps.", 3: "This pattern isn't arbitrary; it has a specific, well-understood electrostatic explanation (increasing difficulty of removing a proton from an increasingly negative species) rather than being a random or unexplained trend." },
            tempting: "Choice C can tempt students who assume that since both protons come from the 'same' original molecule, they should ionize equally easily, without considering that the chemical environment (charge state) changes significantly after the first ionization.",
            commonMistake: "Not recognizing that successive ionization constants (Ka1, Ka2, Ka3...) decrease predictably because each subsequent proton must be removed from an increasingly negatively charged (and thus increasingly proton-attracting) species.",
            apTip: "College-level insight: memorize the general rule that for any polyprotic acid, Ka1 > Ka2 > Ka3 (typically by several orders of magnitude each step), and be ready to explain WHY using the electrostatic argument (removing a proton from a more negative species is less favorable) — this specific reasoning, not just the numeric pattern, is what full-credit FRQ responses include."
          }
        }
      ]
    },
    {
      id: 9,
      name: 'Unit 9: Applications of Thermodynamics',
      questions: [
        {
          id: 'chem-9-1', difficulty: 1, type: 'mcq', topic: 'Calorimetry',
          prompt: "In a coffee-cup calorimetry experiment, 50.0 g of water increases in temperature by 10.0°C after a reaction. Using q = mcΔT with c = 4.18 J/(g·°C), what is the heat absorbed by the water?",
          choices: ['209 J', '2090 J', '20.9 J', '418 J'],
          correct: 1,
          explanation: {
            correct: "q = mcΔT = (50.0 g)(4.18 J/(g·°C))(10.0°C) = 2090 J.",
            wrong: { 0: "This is off by a factor of 10, likely from a decimal placement error in the multiplication.", 2: "This is off by a factor of 100, suggesting a significant calculation error.", 3: "This equals mc alone (50.0 × 4.18 ≈ 209, doubled or miscalculated to 418), without correctly incorporating the ΔT = 10.0°C factor." },
            tempting: "Choice A is a very common trap resulting from a simple decimal-place arithmetic slip when multiplying three numbers together.",
            commonMistake: "Arithmetic errors (especially decimal placement) when multiplying the three quantities (mass, specific heat, and temperature change) in the q = mcΔT formula.",
            apTip: "Always plug numbers into q = mcΔT with units explicitly shown, and do the multiplication in two clean steps (first mc, then × ΔT) to reduce arithmetic slip-ups under time pressure."
          }
        },
        {
          id: 'chem-9-2', difficulty: 2, type: 'mcq', topic: 'Heat Transfer Between Substances',
          prompt: "A hot metal block is placed into cool water in an insulated container. Assuming no heat is lost to the surroundings, how does the heat lost by the metal relate to the heat gained by the water?",
          choices: ['Heat lost by the metal is greater than heat gained by the water', 'Heat lost by the metal equals heat gained by the water, by conservation of energy', 'Heat lost by the metal is less than heat gained by the water', 'There is no relationship between the two, since they are different substances'],
          correct: 1,
          explanation: {
            correct: "In an insulated (isolated) system with no heat loss to the surroundings, energy conservation requires that all heat lost by the hotter object (metal) is gained by the cooler object (water) — q_lost(metal) = q_gained(water) in magnitude, though opposite in sign convention.",
            wrong: { 0: "In an ideal insulated system, heat lost cannot exceed heat gained; any 'extra' heat would have to go somewhere, but the insulation prevents loss to the surroundings, so the amounts must be equal.", 2: "Similarly, heat gained by the water cannot exceed heat lost by the metal in an insulated system — energy must be conserved between the two objects with no external gain or loss.", 3: "Even though the substances are different (with different specific heat capacities), the energy conservation principle (heat lost by one object equals heat gained by the other, in an insulated system) still applies regardless of what materials are involved." },
            tempting: "None of the distractors reflect proper energy conservation, but a student unsure of calorimetry's foundational assumption (no heat lost to surroundings in an ideal insulated system) might not confidently apply the equal-and-opposite heat relationship.",
            commonMistake: "Not recognizing that calorimetry problems fundamentally rely on the assumption of an isolated system, where heat lost by one component precisely equals heat gained by the other.",
            apTip: "Set up two-substance calorimetry problems by explicitly writing q_metal = -q_water (heat lost by one is negative of heat gained by the other) and solving for the unknown — this equal-and-opposite relationship is the core assumption behind essentially all calorimetry calculations."
          }
        },
        {
          id: 'chem-9-3', difficulty: 2, type: 'mcq', topic: 'Bond Enthalpies',
          prompt: "Using bond enthalpies, ΔH for a reaction can be estimated as:",
          choices: ['ΔH = (bonds formed) − (bonds broken)', 'ΔH = (energy to break bonds in reactants) − (energy released forming bonds in products)', 'ΔH = (energy released forming bonds in products) + (energy to break bonds in reactants)', 'ΔH is unrelated to bond enthalpies'],
          correct: 1,
          explanation: {
            correct: "Using bond enthalpies, ΔH ≈ (sum of bond energies broken in reactants) − (sum of bond energies formed in products), since breaking bonds requires energy input (endothermic) and forming bonds releases energy (exothermic); the balance between these determines whether the overall reaction is exothermic or endothermic.",
            wrong: { 0: "This describes the correct concept but in the wrong order/sign convention as literally written (bonds formed should be subtracted FROM bonds broken energy, i.e., broken minus formed, not formed minus broken).", 2: "Adding these two quantities together doesn't correctly represent the net energy change; breaking bonds (energy IN) and forming bonds (energy OUT) must be treated as opposing contributions and subtracted, not added.", 3: "Bond enthalpies are directly and quantitatively used to estimate ΔH for reactions where bonds are broken and reformed; there is a well-established relationship, not an absence of one." },
            tempting: "Choice A can tempt students who remember the two key terms (bonds broken, bonds formed) but reverse their order or miscalculate the correct sign convention.",
            commonMistake: "Reversing the order of subtraction (bonds broken minus bonds formed, versus the incorrect bonds formed minus bonds broken) or adding instead of subtracting the two energy quantities.",
            apTip: "Memorize the phrase precisely: 'energy to BREAK bonds in reactants MINUS energy released FORMING bonds in products' — breaking bonds always costs energy (positive contribution), forming bonds always releases energy (negative contribution to ΔH)."
          }
        },
        {
          id: 'chem-9-4', difficulty: 3, type: 'mcq', topic: 'Thermodynamics & Electrochemistry',
          prompt: "A galvanic (voltaic) cell has a standard cell potential E°cell = +1.10 V. What does this indicate about the reaction's ΔG° and spontaneity?",
          choices: ['ΔG° is positive, and the reaction is non-spontaneous', 'ΔG° is negative, and the reaction is spontaneous under standard conditions', 'ΔG° is zero, and the reaction is at equilibrium', 'E°cell provides no information about ΔG°'],
          correct: 1,
          explanation: {
            correct: "The relationship ΔG° = -nFE°cell shows that a POSITIVE E°cell (as given, +1.10 V) corresponds to a NEGATIVE ΔG°, since the negative sign in the equation flips the sign relationship — a negative ΔG° indicates the reaction is thermodynamically spontaneous under standard conditions, consistent with a galvanic cell spontaneously generating electrical current.",
            wrong: { 0: "This is backwards — a positive E°cell corresponds to a NEGATIVE ΔG° (spontaneous), not a positive ΔG° (non-spontaneous).", 2: "ΔG° = 0 would correspond to E°cell = 0, not a substantial positive value like +1.10 V; this cell is clearly spontaneous, not at equilibrium under standard conditions.", 3: "E°cell and ΔG° are directly and quantitatively related through the equation ΔG° = -nFE°cell, so E°cell absolutely does provide information about ΔG°." },
            tempting: "Choice A is tempting if the negative sign in ΔG° = -nFE°cell is forgotten or misapplied, leading to an incorrectly matched sign relationship between E°cell and ΔG°.",
            commonMistake: "Forgetting the negative sign in the ΔG° = -nFE°cell relationship, leading to incorrectly pairing a positive E°cell with a positive (rather than negative) ΔG°.",
            apTip: "Memorize the equation ΔG° = -nFE°cell with its negative sign explicitly, and remember the intuitive check: a galvanic cell that spontaneously produces current (positive E°cell, useful battery) must have a spontaneous, negative ΔG° reaction driving it — the two concepts (spontaneity and positive voltage) should always agree for a working galvanic cell."
          }
        },
        {
          id: 'chem-9-5', difficulty: 4, type: 'mcq', topic: 'Coupled Reactions & Real-World Thermodynamics',
          prompt: "Extracting a pure metal like iron from its oxide ore (Fe2O3) via reduction with carbon is thermodynamically unfavorable for the iron oxide reduction alone, but becomes favorable when coupled with carbon's oxidation to CO2. What thermodynamic principle explains why this coupling makes the overall process favorable?",
          choices: ['Coupling reactions changes the individual ΔG° of the iron reduction reaction to become negative on its own', 'The overall process\'s ΔG° is the sum of the ΔG° values of both individual reactions; even though iron oxide reduction alone may be unfavorable (positive ΔG°), carbon oxidation is highly favorable (very negative ΔG°), and the sum can be net negative', 'Only ΔH values matter in industrial processes, and ΔG° is irrelevant at high temperatures', 'Carbon acts as a catalyst, lowering the activation energy of iron oxide reduction without affecting overall thermodynamics'],
          correct: 1,
          explanation: {
            correct: "When two reactions are coupled into one overall process, their standard free energy changes add algebraically (just as in Hess's Law for enthalpy); even if the iron oxide reduction step alone has an unfavorable (positive) ΔG°, carbon's oxidation to CO2 is highly exergonic (very negative ΔG°), and when these ΔG° values are summed for the overall coupled process, the total can become net negative, making the OVERALL industrial process thermodynamically favorable even though one of its component steps is not favorable in isolation.",
            wrong: { 0: "Coupling doesn't change the intrinsic ΔG° of the iron reduction reaction itself in isolation; rather, it creates a new OVERALL reaction whose combined ΔG° (sum of both steps) can be favorable even while the iron reduction step's own individual ΔG° remains unfavorable on its own.", 2: "ΔG° (not just ΔH°) remains the fundamental criterion for spontaneity at any given temperature (via ΔG° = ΔH° - TΔS°); this claim incorrectly dismisses ΔG°'s role entirely.", 3: "A catalyst affects the RATE (kinetics) of a reaction by lowering activation energy, but doesn't change a reaction's fundamental thermodynamic favorability (ΔG°); this scenario describes coupling of separate REACTIONS (not catalysis) to achieve overall thermodynamic favorability." },
            tempting: "Choice D can tempt students who know carbon plays a crucial role in this process and default to labeling it a 'catalyst,' but carbon is actually a REACTANT being consumed and oxidized (into CO2) in this process, not a catalyst that remains unchanged — its role here is providing a thermodynamically favorable coupled reaction, not speeding up a reaction's rate.",
                    commonMistake: "Confusing a reactant that drives a coupled reaction thermodynamically favorable (by being consumed and having its own strongly favorable ΔG°) with a catalyst that merely speeds up reaction rate without being consumed or affecting thermodynamics.",
            apTip: "College-level insight: this exact reasoning (summing ΔG° values of coupled reactions to make an overall unfavorable process favorable) is the same principle underlying ATP-coupled biological reactions and is a favorite way AP Chem connects thermodynamics to real industrial applications like metallurgy — explicitly stating that ΔG° values ADD for coupled reactions is the key quantitative insight expected in a full-credit FRQ response."
          }
        },
        {
          id: 'chem-9-6', difficulty: 5, type: 'mcq', topic: 'Temperature Dependence of Spontaneity',
          prompt: "The Haber process (N2 + 3H2 ⇌ 2NH3) is exothermic (ΔH < 0) and has ΔS < 0 (fewer moles of gas in products). Industrially, this reaction is run at high temperature (~450°C) despite this seemingly working against spontaneity based on the ΔG° = ΔH − TΔS relationship. What best reconciles this apparent contradiction?",
          choices: ['At high temperature, the reaction actually becomes thermodynamically MORE favorable, contradicting the ΔG° equation', 'The high temperature is chosen primarily for kinetic reasons (faster reaction rate), even though it makes the reaction thermodynamically less favorable (smaller equilibrium yield); this represents a deliberate trade-off between rate and equilibrium yield', 'ΔS is actually positive for this reaction, making high temperature thermodynamically favorable', 'Temperature has no real effect on this particular reaction\'s spontaneity or rate'],
          correct: 1,
          explanation: {
            correct: "For this exothermic reaction with ΔS < 0, increasing temperature actually makes ΔG° LESS negative (or even positive) — thermodynamically less favorable, corresponding to a SMALLER equilibrium constant and lower theoretical product yield — but industrially, high temperature is still used because it dramatically increases the reaction RATE (kinetics), and industrial processes often accept a lower equilibrium yield in exchange for a practically usable reaction rate, a deliberate engineering trade-off (often combined with a catalyst and high pressure to help compensate for the equilibrium yield loss).",
            wrong: { 0: "This is factually backwards — for a reaction with ΔH < 0 and ΔS < 0, the ΔG° = ΔH - TΔS relationship shows that increasing T actually makes the -TΔS term more positive (since ΔS is negative), pushing ΔG° in the LESS favorable direction, not more favorable.", 2: "The problem explicitly states ΔS < 0 (fewer gas moles in products, 4 moles of gas becoming 2), which is a correctly negative value for this specific reaction, not actually positive.", 3: "Temperature significantly affects both the equilibrium position (via the ΔG° = ΔH - TΔS relationship, shifting equilibrium toward reactants at higher T for this reaction) AND the reaction rate (increasing rate substantially) — it has real, well-documented, and actually opposing effects on these two different aspects of the reaction." },
            tempting: "Choice A can tempt students who reason 'industry uses high temperature, so it must be thermodynamically better,' without separating the DIFFERENT effects of temperature on thermodynamic favorability (equilibrium position, made worse here) versus kinetics (reaction rate, made much better) — these are two independent considerations that can point in opposite directions.",
            commonMistake: "Assuming that because a reaction condition (like high temperature) is used industrially, it must be thermodynamically optimal, rather than recognizing that real industrial decisions often deliberately trade off equilibrium yield for practical reaction rate.",
            apTip: "College-level insight: the real Haber process is the single best worked example in general chemistry for explicitly separating thermodynamic (equilibrium yield) considerations from kinetic (rate) considerations — a genuinely complete FRQ response should explicitly state that high T here SACRIFICES equilibrium yield in exchange for a practical reaction RATE, and that catalysts and pressure are used alongside this trade-off to help compensate for the yield loss."
          }
        }
      ]
    }
  ],
  frqs: [
    {
      id: 'chem-frq-1', difficulty: 4, unit: 5,
      prompt: "A student studies the reaction 2NO(g) + Cl2(g) → 2NOCl(g) and collects the following initial rate data:\n\nTrial 1: [NO]=0.10 M, [Cl2]=0.10 M, Rate=0.18 M/s\nTrial 2: [NO]=0.20 M, [Cl2]=0.10 M, Rate=0.72 M/s\nTrial 3: [NO]=0.10 M, [Cl2]=0.20 M, Rate=0.36 M/s\n\n(a) Determine the order of the reaction with respect to NO and to Cl2, showing your reasoning.\n(b) Write the complete rate law and calculate the rate constant k, including units.\n(c) Predict the rate if [NO] = 0.30 M and [Cl2] = 0.30 M.",
      rubricPoints: [
        "Correctly determines order with respect to NO as 2 by comparing trials 1 and 2 (doubling [NO] quadruples rate) (1 pt)",
        "Correctly determines order with respect to Cl2 as 1 by comparing trials 1 and 3 (doubling [Cl2] doubles rate) (1 pt)",
        "Writes correct rate law: Rate = k[NO]²[Cl2] (1 pt)",
        "Calculates k correctly using any trial (k = 180 M⁻²s⁻¹, from 0.18 = k(0.10)²(0.10)) with correct units (1 pt)",
        "Correctly calculates predicted rate at new concentrations using the rate law (1 pt)"
      ],
      sampleResponse: "(a) Comparing trials 1 and 2: [NO] doubles (0.10→0.20) while [Cl2] stays constant, and rate quadruples (0.18→0.72), so order with respect to NO = 2 (since 2² = 4). Comparing trials 1 and 3: [Cl2] doubles while [NO] stays constant, and rate doubles, so order with respect to Cl2 = 1.\n(b) Rate = k[NO]²[Cl2]. Using trial 1: 0.18 = k(0.10)²(0.10) = k(0.001), so k = 180 M⁻²s⁻¹.\n(c) Rate = 180 × (0.30)² × (0.30) = 180 × 0.09 × 0.30 = 4.86 M/s."
    },
    {
      id: 'chem-frq-2', difficulty: 5, unit: 7,
      prompt: "A 1.00 L buffer solution contains 0.20 M acetic acid (CH3COOH, Ka = 1.8 × 10⁻⁵) and 0.20 M sodium acetate (CH3COONa).\n\n(a) Calculate the pH of this buffer solution.\n(b) 0.010 mol of NaOH is added to the buffer with no volume change. Calculate the new pH.\n(c) Explain, in terms of equilibrium, why the buffer resists large pH changes upon addition of a small amount of strong base.",
      rubricPoints: [
        "Correctly applies Henderson-Hasselbalch or ICE table to find initial pH ≈ 4.74 (1 pt)",
        "Correctly adjusts moles of acid/conjugate base after NaOH addition (acid decreases by 0.010 mol, conjugate base increases by 0.010 mol) (1 pt)",
        "Calculates new pH ≈ 4.78 using adjusted concentrations (1 pt)",
        "Explains buffer action: added OH⁻ is consumed by reaction with the weak acid (CH3COOH + OH⁻ → CH3COO⁻ + H2O), preventing a large free [OH⁻]/[H⁺] change (1 pt)",
        "Notes that because both a reasonable reservoir of weak acid and conjugate base remain, the [A⁻]/[HA] ratio changes only modestly, keeping pH relatively stable (1 pt)"
      ],
      sampleResponse: "(a) pH = pKa + log([A⁻]/[HA]) = -log(1.8×10⁻⁵) + log(0.20/0.20) = 4.74 + 0 = 4.74.\n(b) NaOH reacts with acetic acid: CH3COOH + OH⁻ → CH3COO⁻ + H2O. Moles CH3COOH = 0.20 - 0.010 = 0.19 mol; moles CH3COO⁻ = 0.20 + 0.010 = 0.21 mol. New pH = 4.74 + log(0.21/0.19) = 4.74 + 0.04 = 4.78.\n(c) The buffer contains a reservoir of weak acid (CH3COOH) that reacts with and consumes added OH⁻, converting it to conjugate base (CH3COO⁻) and water rather than allowing free OH⁻ to accumulate and raise pH sharply. Because the amount of added base is small relative to the buffer's acid/conjugate base reservoir, the ratio [A⁻]/[HA] shifts only slightly, so by Henderson-Hasselbalch the pH changes only slightly rather than dramatically."
    },
    {
      id: 'chem-frq-3', difficulty: 3, unit: 1,
      prompt: "An unknown element's photoelectron spectroscopy (PES) spectrum shows peaks at relative binding energies corresponding to electron counts of 2, 2, and 3 (in order of increasing binding energy from lowest to highest... note: listed here from outermost/lowest energy to innermost/highest for a 3-peak spectrum).\n\n(a) Determine the electron configuration and identify the element.\n(b) Explain how the number of peaks relates to the number of occupied subshells.\n(c) Predict how the spectrum would change for the element's +1 cation.",
      rubricPoints: [
        "Correctly totals the electrons (2+2+3=7) and identifies the configuration 1s²2s²2p³ (1 pt)",
        "Correctly identifies the element as nitrogen (atomic number 7) (1 pt)",
        "Explains that each peak corresponds to one distinct occupied subshell/energy sublevel (1 pt)",
        "Correctly predicts the cation would show one fewer electron total (6 electrons), with the highest-energy 2p peak reduced from 3 to 2 electrons, since electrons are removed from the outermost subshell first (1 pt)"
      ],
      sampleResponse: "(a) Total electrons = 2+2+3 = 7, giving electron configuration 1s²2s²2p³.\n(b) The element is nitrogen (atomic number 7).\n(c) Each distinct peak in a PES spectrum corresponds to a distinct occupied subshell, since electrons in different subshells experience different effective nuclear charge/shielding and thus require different amounts of energy to remove.\n(d) For the N+ cation, one electron is removed from the outermost (highest energy, lowest binding energy) subshell, which is 2p; the new configuration would be 1s²2s²2p², so the spectrum would show peaks corresponding to 2, 2, and 2 electrons (total 6), with the 2p peak reduced from 3 to 2 electrons."
    },
    {
      id: 'chem-frq-4', difficulty: 4, unit: 2,
      prompt: "Two compounds, NaCl and CCl4, are compared.\n\n(a) Draw or describe the Lewis structure of CCl4 and predict its molecular geometry.\n(b) Explain why CCl4, despite having polar C-Cl bonds, is a nonpolar molecule overall.\n(c) Explain why NaCl has a much higher melting point than CCl4, referencing the type of bonding/forces in each.",
      rubricPoints: [
        "Correctly describes CCl4 as tetrahedral geometry with carbon centrally bonded to 4 chlorine atoms (1 pt)",
        "Explains that the symmetric tetrahedral arrangement causes the four individual C-Cl bond dipoles to cancel out, giving a nonpolar molecule overall (1 pt)",
        "Identifies NaCl as ionic (strong electrostatic forces between ions) versus CCl4 as molecular (only weaker London dispersion forces between molecules) (1 pt)",
        "Connects the much stronger ionic bonding in NaCl to its much higher melting point compared to CCl4's weaker intermolecular forces (1 pt)"
      ],
      sampleResponse: "(a) CCl4 has a central carbon atom singly bonded to four chlorine atoms, with a tetrahedral molecular geometry (bond angles of about 109.5°).\n(b) Although each C-Cl bond is individually polar (chlorine is more electronegative than carbon), the four bond dipoles are arranged symmetrically around the central carbon in the tetrahedral geometry, so they cancel each other out vectorially, giving CCl4 a net dipole moment of zero (nonpolar overall).\n(c) NaCl is an ionic compound, held together by strong electrostatic attraction between Na+ and Cl- ions throughout a rigid crystal lattice, requiring a large amount of energy to break apart (high melting point). CCl4 is a molecular compound, held together only by weaker London dispersion forces between separate molecules, requiring much less energy to separate, resulting in a much lower melting point."
    },
    {
      id: 'chem-frq-5', difficulty: 3, unit: 3,
      prompt: "A student compares the boiling points of CH4 (methane) and NH3 (ammonia), noting that NH3 has a significantly higher boiling point despite having a similar molar mass.\n\n(a) Identify the strongest intermolecular force present in NH3 that is absent in CH4.\n(b) Explain, in terms of molecular structure, why this force is present in NH3 but not in CH4.\n(c) Predict how the boiling point of PH3 (phosphine, in the same group as nitrogen) would compare to NH3, and explain why.",
      rubricPoints: [
        "Correctly identifies hydrogen bonding as present in NH3 but not CH4 (1 pt)",
        "Explains that NH3 has N-H bonds (N is small and highly electronegative) enabling hydrogen bonding, while CH4's C-H bonds don't qualify (carbon isn't electronegative enough) (1 pt)",
        "Predicts PH3 has a LOWER boiling point than NH3 (1 pt)",
        "Explains that phosphorus, despite being in the same group as nitrogen, is larger and less electronegative, so P-H bonds don't create hydrogen bonding, leaving PH3 with only weaker dipole-dipole/dispersion forces (1 pt)"
      ],
      sampleResponse: "(a) Hydrogen bonding is present in NH3 but absent in CH4.\n(b) Hydrogen bonding requires hydrogen bonded directly to a small, highly electronegative atom (N, O, or F). Nitrogen in NH3 qualifies, creating strong hydrogen bonds between NH3 molecules. Carbon in CH4 is not electronegative enough, and C-H bonds don't create hydrogen bonding, so CH4 only has weaker London dispersion forces.\n(c) PH3 would have a LOWER boiling point than NH3. Although phosphorus is in the same group as nitrogen, it is larger and less electronegative, so P-H bonds do not create hydrogen bonding. PH3 therefore only has weaker dipole-dipole and dispersion forces, giving it a lower boiling point than NH3's hydrogen-bonded network."
    },
    {
      id: 'chem-frq-6', difficulty: 4, unit: 4,
      prompt: "A student combines 50.0 mL of 0.20 M AgNO3 with 50.0 mL of 0.30 M NaCl, producing a precipitate of AgCl.\n\n(a) Write the net ionic equation for this reaction.\n(b) Determine the limiting reactant, showing your work.\n(c) Calculate the mass of AgCl precipitate formed (molar mass AgCl = 143.4 g/mol).",
      rubricPoints: [
        "Correctly writes the net ionic equation: Ag+(aq) + Cl-(aq) → AgCl(s) (1 pt)",
        "Correctly calculates moles of each reactant (Ag+: 0.010 mol; Cl-: 0.015 mol) (1 pt)",
        "Correctly identifies Ag+ (AgNO3) as the limiting reactant, since the 1:1 ratio means less Ag+ is available (1 pt)",
        "Correctly calculates mass of AgCl produced: 0.010 mol × 143.4 g/mol = 1.434 g (1 pt)"
      ],
      sampleResponse: "(a) Ag+(aq) + Cl-(aq) → AgCl(s).\n(b) Moles Ag+ = (0.0500 L)(0.20 M) = 0.010 mol. Moles Cl- = (0.0500 L)(0.30 M) = 0.015 mol. Since the reaction ratio is 1:1, and there is less Ag+ (0.010 mol) than Cl- (0.015 mol), Ag+ (from AgNO3) is the limiting reactant.\n(c) Moles AgCl produced = moles of limiting reactant = 0.010 mol. Mass = 0.010 mol × 143.4 g/mol = 1.434 g."
    },
    {
      id: 'chem-frq-7', difficulty: 4, unit: 5,
      prompt: "The decomposition of N2O5 follows first-order kinetics: 2N2O5 → 4NO2 + O2, with rate constant k = 5.0 × 10⁻⁴ s⁻¹ at a given temperature.\n\n(a) Write the integrated rate law for this first-order reaction.\n(b) If the initial concentration of N2O5 is 0.100 M, calculate the concentration remaining after 1000 seconds.\n(c) Calculate the half-life of this reaction, and explain what \"half-life\" means in this context.",
      rubricPoints: [
        "Correctly writes the first-order integrated rate law: ln[A] = -kt + ln[A]₀ (1 pt)",
        "Correctly substitutes values and solves for [A] at t=1000s (1 pt)",
        "Correctly calculates half-life using t½ = ln(2)/k (1 pt)",
        "Correctly explains half-life as the time required for the concentration to decrease to half its previous value, constant regardless of starting concentration for first-order reactions (1 pt)"
      ],
      sampleResponse: "(a) ln[N2O5] = -kt + ln[N2O5]₀.\n(b) ln[A] = -(5.0×10⁻⁴)(1000) + ln(0.100) = -0.5 + (-2.303) = -2.803. [A] = e^(-2.803) ≈ 0.0607 M.\n(c) t½ = ln(2)/k = 0.693/(5.0×10⁻⁴) = 1386 s. Half-life is the time required for the concentration of a reactant to decrease to half its value; for a first-order reaction, this time is constant and doesn't depend on the starting concentration."
    },
    {
      id: 'chem-frq-8', difficulty: 4, unit: 6,
      prompt: "A reaction has ΔH° = -92 kJ/mol and ΔS° = -199 J/(mol·K) for the synthesis of ammonia: N2(g) + 3H2(g) ⇌ 2NH3(g).\n\n(a) Calculate ΔG° at 298 K, and determine whether the reaction is spontaneous under standard conditions at this temperature.\n(b) Calculate the temperature at which this reaction changes from spontaneous to non-spontaneous (or vice versa).\n(c) Explain why industrial ammonia production (the Haber process) is nonetheless carried out at high temperature (~450°C) despite this thermodynamic trade-off.",
      rubricPoints: [
        "Correctly calculates ΔG° = ΔH° - TΔS° = -92000 - (298)(-199) = -92000 + 59302 = -32698 J ≈ -32.7 kJ/mol, spontaneous at 298K (1 pt)",
        "Correctly sets ΔG°=0 and solves for T = ΔH°/ΔS° = -92000/-199 ≈ 462 K (1 pt)",
        "Correctly notes that above this temperature, the reaction becomes non-spontaneous (since ΔS°<0 makes -TΔS° increasingly positive as T increases) (1 pt)",
        "Explains the real trade-off: high temperature sacrifices equilibrium yield (favors reactants) but dramatically increases reaction rate, and this kinetic benefit is why industry still uses high T along with catalysts/pressure (1 pt)"
      ],
      sampleResponse: "(a) ΔG° = ΔH° - TΔS° = -92,000 J - (298 K)(-199 J/K) = -92,000 + 59,302 = -32,698 J ≈ -32.7 kJ/mol. Since ΔG° is negative, the reaction is spontaneous at 298 K.\n(b) Setting ΔG°=0: 0 = ΔH° - TΔS°, so T = ΔH°/ΔS° = -92,000/-199 ≈ 462 K. Above this temperature, ΔG° becomes positive (non-spontaneous), since the -TΔS° term (positive, since ΔS°<0) grows large enough to overcome the negative ΔH°.\n(c) At ~450°C (723K), well above 462K, the reaction is thermodynamically less favorable (smaller equilibrium constant, lower yield) than at lower temperature. However, high temperature dramatically increases the reaction RATE, making the process practically feasible; industry accepts this reduced equilibrium yield in exchange for a usable reaction rate, often combined with a catalyst and high pressure to help compensate for the yield loss."
    },
    {
      id: 'chem-frq-9', difficulty: 4, unit: 7,
      prompt: "For the reaction 2SO2(g) + O2(g) ⇌ 2SO3(g), Kc = 280 at a given temperature. At equilibrium, [SO2] = 0.150 M and [O2] = 0.100 M.\n\n(a) Calculate [SO3] at equilibrium.\n(b) If additional O2 is added to the system at equilibrium, predict and explain the shift in equilibrium position.\n(c) Predict the effect on Kc itself if the temperature is held constant but the system's volume is decreased.",
      rubricPoints: [
        "Correctly sets up Kc expression: Kc = [SO3]²/([SO2]²[O2]) (1 pt)",
        "Correctly solves for [SO3]: 280 = [SO3]²/((0.150)²(0.100)), giving [SO3]² = 280×0.00225=0.63, [SO3]=√0.63≈0.794 M (1 pt)",
        "Correctly predicts the equilibrium shifts toward products (right) when O2 is added, by Le Chatelier's principle (1 pt)",
        "Correctly states Kc remains UNCHANGED when volume changes at constant temperature, since Kc depends only on temperature (1 pt)"
      ],
      sampleResponse: "(a) Kc = [SO3]²/([SO2]²[O2]). 280 = [SO3]²/((0.150)²(0.100)) = [SO3]²/(0.00225). [SO3]² = 280 × 0.00225 = 0.63. [SO3] = √0.63 ≈ 0.794 M.\n(b) Adding O2 increases the concentration of a reactant, so by Le Chatelier's principle, the equilibrium shifts toward the products (right) to partially consume the added O2 and restore equilibrium.\n(c) Kc remains UNCHANGED, since Kc depends only on temperature, not on volume, pressure, or concentration changes; changing volume shifts the equilibrium POSITION (concentrations adjust) but does not change the value of Kc itself as long as temperature is constant."
    },
    {
      id: 'chem-frq-10', difficulty: 4, unit: 8,
      prompt: "A solution is prepared by mixing a weak base NH3 (Kb = 1.8 × 10⁻⁵) with its conjugate acid NH4Cl, both at 0.10 M concentration.\n\n(a) Calculate the pOH and pH of this buffer solution.\n(b) Explain, using Le Chatelier's principle, why adding a small amount of strong acid (like HCl) causes only a small pH change in this buffer.\n(c) Predict what would happen to the buffer's capacity to resist pH change if much smaller amounts of NH3 and NH4Cl were used (same ratio, but more dilute).",
      rubricPoints: [
        "Correctly calculates pOH = pKb + log([NH4+]/[NH3]) = -log(1.8×10⁻⁵) + log(1) = 4.74 (1 pt)",
        "Correctly calculates pH = 14 - 4.74 = 9.26 (1 pt)",
        "Explains that added H+ reacts with NH3 (the base component), converting it to NH4+, consuming the added acid rather than allowing free H+ to accumulate and sharply lower pH (1 pt)",
        "Correctly predicts that more dilute buffer (same ratio, less total moles) would have a SMALLER buffer capacity, since there is less of the acid/base reservoir available to neutralize added acid or base before being depleted (1 pt)"
      ],
      sampleResponse: "(a) pOH = pKb + log([NH4+]/[NH3]) = -log(1.8×10⁻⁵) + log(0.10/0.10) = 4.74 + 0 = 4.74. pH = 14 - 4.74 = 9.26.\n(b) Added H+ reacts with the base component (NH3): NH3 + H+ → NH4+, consuming the added acid and converting it into more conjugate acid (NH4+), rather than allowing free H+ to accumulate and sharply lower the pH; since the ratio [NH4+]/[NH3] only shifts slightly (given the reservoir of NH3 available), the pH changes only slightly.\n(c) A more dilute buffer (same ratio, smaller total moles) would have a SMALLER buffer capacity — it could neutralize less added acid or base before the buffer's reservoir of NH3 or NH4+ is used up and the pH begins to change more dramatically, since there's simply less of the buffering components present to absorb the change."
    },
    {
      id: 'chem-frq-11', difficulty: 4, unit: 9,
      prompt: "A galvanic cell is constructed using a Zn/Zn²⁺ half-cell (E° = -0.76 V) and a Cu/Cu²⁺ half-cell (E° = +0.34 V).\n\n(a) Identify which half-reaction occurs at the anode and which at the cathode, and calculate E°cell.\n(b) Calculate ΔG° for this reaction (F = 96,485 C/mol, n=2 for this reaction).\n(c) Explain how you know, using both E°cell and ΔG°, that this reaction is spontaneous as written.",
      rubricPoints: [
        "Correctly identifies Zn as the anode (oxidation, less positive/more negative E°) and Cu as the cathode (reduction, more positive E°) (1 pt)",
        "Correctly calculates E°cell = E°cathode - E°anode = 0.34 - (-0.76) = 1.10 V (1 pt)",
        "Correctly calculates ΔG° = -nFE°cell = -(2)(96485)(1.10) ≈ -212,267 J ≈ -212 kJ/mol (1 pt)",
        "Correctly explains that a positive E°cell and negative ΔG° are consistent with each other and both independently indicate spontaneity (1 pt)"
      ],
      sampleResponse: "(a) Zinc (less positive/more negative E°) is oxidized at the anode; copper (more positive E°) is reduced at the cathode. E°cell = E°cathode - E°anode = 0.34 - (-0.76) = 1.10 V.\n(b) ΔG° = -nFE°cell = -(2)(96,485 C/mol)(1.10 V) = -212,267 J/mol ≈ -212 kJ/mol.\n(c) A positive E°cell (1.10 V) indicates a spontaneous reaction as written (galvanic cells generate current spontaneously). This is fully consistent with the negative ΔG° (-212 kJ/mol) calculated from it via ΔG°=-nFE°cell — the negative sign in this equation means a positive E°cell always corresponds to a negative (spontaneous) ΔG°, so both values agree that this reaction is spontaneous."
    },
    {
      id: 'chem-frq-12', difficulty: 3, unit: 1,
      prompt: "The first four ionization energies (in kJ/mol) of an element are: 738, 1450, 7730, 10540.\n\n(a) Identify which group of the periodic table this element most likely belongs to, based on the pattern of ionization energies.\n(b) Explain the reasoning behind your identification, referencing the large jump between the 2nd and 3rd ionization energies.\n(c) Predict whether this element is more likely to form a +1, +2, or +3 ion in typical compounds, and justify.",
      rubricPoints: [
        "Correctly identifies the element as likely in Group 2 (based on the large jump after removing 2 electrons) (1 pt)",
        "Explains the jump indicates the 3rd electron is being removed from a full, stable inner shell, requiring much more energy (1 pt)",
        "Correctly predicts the element forms a +2 ion typically (1 pt)",
        "Justifies using the idea that losing 2 electrons achieves a stable noble-gas-like electron configuration, while losing a 3rd would require breaking into a much more stable, lower inner shell (1 pt)"
      ],
      sampleResponse: "(a) This element is most likely in Group 2 (the alkaline earth metals).\n(b) The large jump between the 2nd (1450) and 3rd (7730) ionization energies indicates that after 2 electrons are removed, the 3rd electron must be removed from a full, stable inner electron shell (a much lower energy level), which requires dramatically more energy than removing valence electrons.\n(c) This element most likely forms a +2 ion, since losing its 2 valence electrons achieves a stable, noble-gas-like electron configuration; losing a 3rd electron would require breaking into the very stable, lower inner shell, which is energetically very unfavorable, as shown by the huge ionization energy jump."
    },
    {
      id: 'chem-frq-13', difficulty: 3, unit: 2,
      prompt: "Ammonia, NH3, has a trigonal pyramidal molecular geometry rather than the trigonal planar geometry that might be expected from 3 bonding groups alone.\n\n(a) Explain, using VSEPR theory, why NH3 adopts trigonal pyramidal geometry instead of trigonal planar.\n(b) Predict and explain whether NH3 is polar or nonpolar overall.\n(c) Compare NH3's bond angle (about 107°) to the ideal tetrahedral angle (109.5°), and explain the reason for this difference.",
      rubricPoints: [
        "Explains that nitrogen has 4 total electron domains (3 bonding + 1 lone pair), not just 3, requiring consideration of the lone pair's spatial effect (1 pt)",
        "Correctly identifies the electron domain geometry as tetrahedral, but the molecular (atom-only) geometry as trigonal pyramidal due to the lone pair (1 pt)",
        "Correctly predicts NH3 is polar, since the lone pair and the N-H bond dipoles don't cancel out symmetrically (1 pt)",
        "Explains the compressed bond angle (107° vs 109.5°) as resulting from greater lone pair-bonding pair repulsion compared to bonding pair-bonding pair repulsion, pushing the N-H bonds slightly closer together (1 pt)"
      ],
      sampleResponse: "(a) Nitrogen in NH3 has 4 total electron domains around it: 3 bonding pairs (to each H) and 1 lone pair. Although only 3 atoms are bonded, VSEPR theory considers ALL electron domains (including the lone pair) when determining geometry, giving an underlying tetrahedral electron domain arrangement; since the lone pair isn't a visible atom, the resulting molecular (atom-only) shape is trigonal pyramidal.\n(b) NH3 is polar. The lone pair occupies one position of the tetrahedral arrangement, and the resulting asymmetric distribution of bonding pairs and the lone pair means the individual N-H bond dipoles don't cancel out; there's a net dipole moment pointing toward the lone pair side of the nitrogen.\n(c) The bond angle in NH3 (~107°) is slightly less than the ideal tetrahedral angle (109.5°) because the lone pair exerts greater repulsion on the bonding pairs than bonding pairs exert on each other; this extra repulsion compresses the H-N-H bond angles slightly below the ideal tetrahedral value."
    },
    {
      id: 'chem-frq-14', difficulty: 3, unit: 3,
      prompt: "A student compares the boiling points of two nonpolar hydrocarbons: pentane (C5H12, boiling point 36°C) and octane (C8H18, boiling point 126°C).\n\n(a) Identify the type of intermolecular force present in both compounds.\n(b) Explain why octane has a significantly higher boiling point than pentane, given that both are nonpolar.\n(c) Predict how the boiling points would compare between octane and a branched isomer of octane with the same molecular formula, and explain why.",
      rubricPoints: [
        "Correctly identifies London dispersion forces as present in both nonpolar hydrocarbons (1 pt)",
        "Explains that octane's larger size/more electrons creates stronger dispersion forces and more surface area for molecular contact, requiring more energy to separate molecules (1 pt)",
        "Correctly predicts the branched isomer would have a LOWER boiling point than the straight-chain octane (1 pt)",
        "Explains that branching reduces the surface area available for intermolecular contact between neighboring molecules, weakening dispersion forces despite identical molecular formula/electron count (1 pt)"
      ],
      sampleResponse: "(a) Both compounds experience only London dispersion forces, since they are both nonpolar hydrocarbons.\n(b) Octane has more carbon atoms and more electrons than pentane, giving it stronger London dispersion forces overall and more surface area for contact between neighboring molecules, both of which require more energy to overcome, resulting in a higher boiling point.\n(c) The branched isomer would have a LOWER boiling point than straight-chain octane, despite having the identical molecular formula (and thus identical electron count). Branching creates a more compact, spherical shape that reduces the surface area available for contact between neighboring molecules, weakening the net dispersion forces compared to the more elongated straight-chain structure, which allows greater surface contact."
    },
    {
      id: 'chem-frq-15', difficulty: 3, unit: 4,
      prompt: "A 25.0 mL sample of HCl solution is titrated with 0.150 M NaOH, requiring 32.0 mL to reach the equivalence point.\n\n(a) Write the balanced neutralization equation.\n(b) Calculate the original concentration of the HCl solution.\n(c) Explain how you would know, from the titration data alone, when the equivalence point had been reached during the experiment.",
      rubricPoints: [
        "Correctly writes HCl + NaOH → NaCl + H2O (1 pt)",
        "Correctly calculates moles NaOH used = (0.0320 L)(0.150 M) = 0.00480 mol (1 pt)",
        "Correctly uses 1:1 mole ratio to find moles HCl = 0.00480 mol, then concentration = 0.00480/0.0250 = 0.192 M (1 pt)",
        "Correctly explains recognizing the equivalence point via an indicator color change (or a sharp pH change on a titration curve/pH meter) (1 pt)"
      ],
      sampleResponse: "(a) HCl(aq) + NaOH(aq) → NaCl(aq) + H2O(l).\n(b) Moles NaOH = (0.0320 L)(0.150 mol/L) = 0.00480 mol. Since the reaction ratio is 1:1, moles HCl = 0.00480 mol. Concentration of HCl = 0.00480 mol / 0.0250 L = 0.192 M.\n(c) The equivalence point would be recognized by a sudden color change of an added acid-base indicator (such as phenolphthalein turning from colorless to pink), or by a sharp, rapid change in pH as measured with a pH meter, corresponding to the point where moles of acid and base become exactly equal."
    },
    {
      id: 'chem-frq-16', difficulty: 3, unit: 6,
      prompt: "For the reaction CaCO3(s) → CaO(s) + CO2(g), ΔH° = +178 kJ/mol and ΔS° = +161 J/(mol·K).\n\n(a) Explain, without calculating, why this reaction is expected to be more spontaneous at HIGH temperature.\n(b) Calculate the temperature at which ΔG° = 0 for this reaction.\n(c) Explain what this temperature represents physically for this reaction (e.g., in the context of limestone decomposition in industry).",
      rubricPoints: [
        "Correctly explains: since ΔH°>0 (unfavorable) and ΔS°>0 (favorable), high temperature favors spontaneity because the -TΔS° term becomes more negative, eventually overcoming the positive ΔH° (1 pt)",
        "Correctly calculates T = ΔH°/ΔS° = 178000/161 ≈ 1106 K (1 pt)",
        "Correctly explains this temperature as the point where the reaction transitions from non-spontaneous to spontaneous (1 pt)",
        "Connects this to the practical need for high-temperature kilns in industrial limestone decomposition to produce quicklime (CaO) (1 pt)"
      ],
      sampleResponse: "(a) Since ΔH°>0 (endothermic, unfavorable) and ΔS°>0 (favorable, entropy increases as a solid produces a gas), the ΔG°=ΔH°-TΔS° equation shows that increasing T makes the -TΔS° term increasingly negative, eventually overcoming the positive ΔH° term and making ΔG° negative (spontaneous) at sufficiently high temperature.\n(b) Setting ΔG°=0: T = ΔH°/ΔS° = 178,000 J / 161 J/K ≈ 1106 K.\n(c) This temperature (~1106 K, or about 833°C) represents the threshold above which the reaction becomes thermodynamically spontaneous; below this temperature, decomposition is non-spontaneous. This explains why industrial limestone decomposition (to produce quicklime/CaO for cement production) requires high-temperature kilns operating above this threshold temperature."
    },
    {
      id: 'chem-frq-17', difficulty: 3, unit: 8,
      prompt: "A 0.050 M solution of a weak acid HA has a measured pH of 3.00.\n\n(a) Calculate the [H+] concentration from the given pH.\n(b) Calculate the Ka of this weak acid, showing your ICE table reasoning.\n(c) Explain why this acid's Ka value indicates it is a WEAK acid rather than a strong acid.",
      rubricPoints: [
        "Correctly calculates [H+] = 10^(-3.00) = 1.0 × 10⁻³ M (1 pt)",
        "Correctly sets up ICE table and calculates Ka = (1.0×10⁻³)²/(0.050-0.001) ≈ 2.04×10⁻⁵ (1 pt)",
        "Explains that this small Ka value (much less than 1) indicates the acid only partially dissociates in water (1 pt)",
        "Contrasts with strong acids, which have very large Ka values (essentially complete dissociation) (1 pt)"
      ],
      sampleResponse: "(a) [H+] = 10^(-pH) = 10^(-3.00) = 1.0 × 10⁻³ M.\n(b) ICE table: initial [HA]=0.050, change -x, equilibrium 0.050-x; [H+] and [A-] both start at 0, change +x. Since [H+]=1.0×10⁻³ M at equilibrium, x=1.0×10⁻³. Ka = [H+][A-]/[HA] = (1.0×10⁻³)(1.0×10⁻³)/(0.050-0.001) = (1.0×10⁻⁶)/(0.049) ≈ 2.04×10⁻⁵.\n(c) This small Ka value (much less than 1) indicates the acid only partially dissociates in water at equilibrium — most of the HA remains undissociated. Strong acids, by contrast, have very large Ka values (often not even meaningfully measured, since dissociation is essentially complete/100%), reflecting their complete ionization in water."
    },
    {
      id: 'chem-frq-18', difficulty: 3, unit: 9,
      prompt: "A student calculates that a certain reaction has ΔH° = -50 kJ/mol using Hess's Law by combining two other reactions with known ΔH values.\n\n(a) State Hess's Law and explain the general principle behind combining reaction enthalpies.\n(b) Explain why bond enthalpies can only provide an ESTIMATE of ΔH for a reaction, rather than an exact value.\n(c) Explain the relationship between a reaction's enthalpy change and whether it is classified as exothermic or endothermic.",
      rubricPoints: [
        "Correctly states Hess's Law: the total enthalpy change for a reaction is the same regardless of the path/number of steps taken, so enthalpies of individual steps can be added (1 pt)",
        "Explains that bond enthalpies used in calculations are typically average values (averaged across many different molecules/compounds), not exact values for the specific bonds in a specific molecule, introducing some estimation error (1 pt)",
        "Correctly explains that a negative ΔH indicates an exothermic reaction (releases heat) and positive ΔH indicates endothermic (absorbs heat) (1 pt)"
      ],
      sampleResponse: "(a) Hess's Law states that the total enthalpy change for a reaction is the same regardless of the pathway or number of intermediate steps taken to get from reactants to products, since enthalpy is a state function; this allows the enthalpy changes of known reactions to be algebraically combined (added or subtracted, with appropriate sign/coefficient adjustments) to determine the enthalpy change of a different, related reaction.\n(b) Bond enthalpies used in calculations are typically AVERAGE values calculated across many different molecules containing that type of bond, not the exact bond energy for that specific bond in that specific molecule's unique chemical environment; this averaging introduces some estimation error compared to a directly measured ΔH value for the specific reaction.\n(c) A negative ΔH indicates an exothermic reaction, meaning the reaction releases heat to the surroundings (products have lower enthalpy than reactants); a positive ΔH indicates an endothermic reaction, meaning the reaction absorbs heat from the surroundings (products have higher enthalpy than reactants)."
    }
  ]
}
