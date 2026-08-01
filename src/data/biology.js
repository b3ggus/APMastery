// AP Biology — real College Board unit numbers/names used for authenticity.
// Each MCQ explanation covers: why the correct answer is right, why each
// wrong choice is wrong, which distractor is most tempting and why, a
// common mistake, and an AP scoring tip.

export const biology = {
  id: 'biology',
  name: 'AP Biology',
  icon: '🧬',
  accent: 'moss',
  units: [
    {
      id: 1,
      name: 'Unit 1: Chemistry of Life',
      questions: [
        {
          id: 'bio-1-1', difficulty: 1, type: 'mcq', topic: 'Water Properties',
          prompt: "Which property of water allows it to moderate temperature changes in living systems?",
          choices: ['High specific heat capacity', 'Lower density as a solid than a liquid', 'Relatively high vapor pressure', 'Low surface tension'],
          correct: 0,
          explanation: {
            correct: "Hydrogen bonds between water molecules require significant energy to break, so water absorbs or releases a lot of heat with only a small temperature change — high specific heat.",
            wrong: { 1: "Ice being less dense than liquid water explains why ice floats and insulates bodies of water, not temperature moderation.", 2: "Water actually has relatively low vapor pressure due to hydrogen bonding, and this isn't the property behind thermal moderation.", 3: "Water has high surface tension, not low, and surface tension relates to cohesion, not heat capacity." },
            tempting: "Choice B is tempting because it's another famous 'unique property of water,' but it explains a different phenomenon (insulation of aquatic habitats), not temperature moderation.",
            commonMistake: "Mixing up which specific property of water (cohesion, adhesion, density anomaly, specific heat, solvent ability) explains which biological consequence.",
            apTip: "Build a mental table pairing each property of water to its consequence — this exact matching shows up almost every year on the exam."
          }
        },
        {
          id: 'bio-1-2', difficulty: 1, type: 'mcq', topic: 'Macromolecules',
          prompt: "Which macromolecule class is primarily responsible for long-term energy storage in animals?",
          choices: ['Carbohydrates', 'Lipids', 'Proteins', 'Nucleic acids'],
          correct: 1,
          explanation: {
            correct: "Triglycerides store roughly twice the energy per gram of carbohydrates because of their many C–H bonds, and they're stored in adipose tissue for long-term use.",
            wrong: { 0: "Glycogen is a real carbohydrate energy store, but it's short-to-medium term, not the primary long-term reserve.", 2: "Proteins are primarily structural and enzymatic; the body only breaks them down for energy as a last resort.", 3: "Nucleic acids store genetic information, not chemical energy." },
            tempting: "Choice A is the classic trap since glycogen genuinely is an energy-storage carbohydrate — the key word students miss is 'long-term.'",
            commonMistake: "Forgetting that glycogen (short-term) and fat (long-term) play different storage roles.",
            apTip: "Know the energy-density hierarchy: fats > carbohydrates > proteins per gram, and be ready to justify it structurally (more C–H bonds = more stored energy)."
          }
        },
        {
          id: 'bio-1-3', difficulty: 2, type: 'mcq', topic: 'Bonding in Biomolecules',
          prompt: "Which type of bond is broken during hydrolysis of a peptide bond between two amino acids?",
          choices: ['Ionic bond', 'Covalent bond', 'Hydrogen bond', 'Van der Waals interaction'],
          correct: 1,
          explanation: {
            correct: "Peptide bonds are covalent bonds formed by dehydration synthesis; hydrolysis reverses this by adding a water molecule to break that covalent C–N linkage.",
            wrong: { 0: "Ionic bonds aren't the primary linkage joining amino acids in a chain.", 2: "Hydrogen bonds stabilize secondary/tertiary protein structure, not the primary sequence linkage.", 3: "Van der Waals forces are weak tertiary-structure interactions, not the bond broken here." },
            tempting: "Choice C is tempting because protein folding is famously stabilized by hydrogen bonds, so students associate 'breaking down a protein' with breaking H-bonds.",
            commonMistake: "Confusing the bonds holding the primary sequence together (covalent peptide bonds) with the bonds holding 3D shape together (H-bonds, ionic, disulfide, van der Waals).",
            apTip: "Memorize the pair: dehydration synthesis builds polymers and releases water; hydrolysis breaks polymers and consumes water."
          }
        },
        {
          id: 'bio-1-4', difficulty: 3, type: 'mcq', topic: 'Enzyme Kinetics',
          prompt: "A researcher increases substrate concentration for a fixed amount of enzyme. Reaction rate rises, then plateaus even as more substrate is added. What best explains the plateau?",
          choices: ['The enzyme has denatured', 'All enzyme active sites are continuously saturated with substrate', 'The reaction has reached chemical equilibrium', 'A competitive inhibitor concentration increased'],
          correct: 1,
          explanation: {
            correct: "At saturation, every active site is occupied essentially all the time, so the rate is capped by how fast the fixed amount of enzyme can turn over substrate — the classic Michaelis–Menten Vmax plateau.",
            wrong: { 0: "Nothing in the scenario suggests denaturation, and denaturation would lower the rate, not plateau it at a maximum.", 2: "This isn't a description of a reversible chemical equilibrium between products and reactants.", 3: "No inhibitor was introduced in this scenario." },
            tempting: "Choice A is tempting because a leveling-off in a graph can look like something 'stopped working,' but a plateau at a maximum is a supply/demand ceiling, not a malfunction.",
            commonMistake: "Assuming any leveling curve implies enzyme damage rather than saturation.",
            apTip: "Rate-vs-[substrate] graphs are a recurring AP Bio figure — practice explaining the plateau in terms of active site availability, not enzyme health."
          }
        },
        {
          id: 'bio-1-5', difficulty: 4, type: 'mcq', topic: 'Enzyme Denaturation',
          prompt: "Catalase activity is measured at 10°C, 37°C, and 70°C using identical H₂O₂ concentrations. Activity is highest at 37°C and near zero at 70°C, and does not recover when the sample is cooled back to 37°C. Which conclusion is best supported?",
          choices: ["Catalase's optimum is 37°C, and 70°C caused reversible inhibition", "Catalase's optimum is 37°C, and 70°C caused irreversible denaturation", "Catalase requires 70°C to reach its active conformation", "Temperature affects reaction kinetics only, not enzyme structure"],
          correct: 1,
          explanation: {
            correct: "Because activity failed to recover after cooling, the structural disruption caused at 70°C was permanent — the hallmark of denaturation rather than simple thermal slowing.",
            wrong: { 0: "'Reversible' directly contradicts the given data, since activity did not return upon cooling.", 2: "The data show near-zero activity at 70°C, contradicting the idea that it's the optimal temperature.", 3: "Temperature clearly altered function permanently here, which only makes sense if structure was disrupted." },
            tempting: "Choice A is the intended trap: students are used to temperature reversibly slowing reactions and may not register the 'does not recover' detail.",
            commonMistake: "Skimming past qualifying phrases like 'does not recover' that distinguish reversible effects from permanent denaturation.",
            apTip: "AP Bio frequently hides the discriminating clue in a single phrase describing the data — always scan for words like 'recovered,' 'returned to,' or 'persisted.'"
          }
        },
        {
          id: 'bio-1-6', difficulty: 5, type: 'mcq', topic: 'Allosteric Regulation',
          prompt: "A mutation at an enzyme's allosteric site increases its binding affinity for its normal allosteric inhibitor 100-fold, with no change at the active site. At physiological concentrations, what is the most likely outcome?",
          choices: ['Vmax increases because more active sites become available', "The enzyme is locked in a low-activity conformation more often, lowering pathway flux", 'The enzyme becomes a target for competitive rather than noncompetitive inhibition', 'The mutation has no functional consequence since the active site is unchanged'],
          correct: 1,
          explanation: {
            correct: "Higher affinity means the allosteric site is occupied by inhibitor more of the time, shifting the population of enzyme molecules toward the low-activity conformation more often — reducing net flux even though any single uninhibited active site still works normally.",
            wrong: { 0: "Vmax reflects the intrinsic per-site catalytic capacity when uninhibited; that doesn't change — what changes is the fraction of molecules held inactive.", 2: "Inhibitor classification depends on binding location (allosteric vs. active site), not binding affinity, so this mutation doesn't change its category.", 3: "Allosteric communication means distant-site mutations can absolutely change function without touching the active site directly." },
            tempting: "Choice D is the trap for exam-trained thinking — 'active site unchanged' can wrongly be read as 'no functional change,' when allostery is precisely about action at a distance.",
            commonMistake: "Assuming only active-site mutations matter functionally.",
            apTip: "College-level insight: this is occupancy-based reasoning (fraction of molecules in active vs. inactive conformation), the same logic used in real allosteric models like MWC — useful for FRQs that ask you to reason beyond a simple lock-and-key picture."
          }
        },
        {
          id: 'bio-1-7', difficulty: 3, type: 'mcq', topic: 'Macromolecule Structure & Function',
          prompt: "A protein loses its three-dimensional shape after being heated, and as a result stops catalyzing its reaction, even though its sequence of amino acids remains completely unchanged. This best illustrates the principle that:",
          choices: ['Primary structure alone determines protein function, regardless of 3D folding', 'A protein\'s function depends critically on its three-dimensional (tertiary/quaternary) structure, not just its underlying amino acid sequence', 'Enzymes function independently of their physical shape', 'Heat only affects nucleic acids, not proteins'],
          correct: 1,
          explanation: {
            correct: "This scenario demonstrates that a protein's function (like enzymatic activity) depends on its specific three-dimensional shape, which is determined by interactions among amino acids (tertiary structure) beyond just the linear sequence; denaturation preserves the sequence (primary structure) but destroys the shape, eliminating function.",
            wrong: { 0: "If primary structure alone determined function regardless of folding, denaturation (which preserves sequence but destroys shape) wouldn't eliminate function — but it does, showing shape matters beyond sequence alone.", 2: "This scenario is direct evidence AGAINST this claim — the enzyme's function was lost specifically because its physical shape changed, showing shape and function are tightly linked.", 3: "Heat denaturation affects proteins directly (disrupting the bonds maintaining 3D structure) as clearly shown in this scenario; it is not limited to nucleic acids." },
            tempting: "Choice A can tempt students who conflate 'the genetic information is unchanged' with 'the protein's capabilities are unchanged,' missing that folding itself is essential to function.",
            commonMistake: "Assuming amino acid sequence alone is sufficient to predict protein function, without accounting for the critical role of 3D folding.",
            apTip: "Always connect denaturation examples explicitly to the structure-function relationship: sequence (primary structure) is necessary but not sufficient — the resulting 3D shape is what actually creates a functional active site or binding surface."
          }
        }
      ]
    },
    {
      id: 2,
      name: 'Unit 2: Cell Structure & Function',
      questions: [
        {
          id: 'bio-2-1', difficulty: 1, type: 'mcq', topic: 'Cell Membrane',
          prompt: "The plasma membrane's selective permeability is primarily due to its structure as a:",
          choices: ['Rigid cellulose wall', 'Phospholipid bilayer with embedded proteins', 'Single layer of hydrophilic molecules', 'Solid protein sheet'],
          correct: 1,
          explanation: {
            correct: "The fluid mosaic model describes a phospholipid bilayer with hydrophobic tails facing inward and hydrophilic heads facing outward, embedded with proteins that control what crosses — giving selective permeability.",
            wrong: { 0: "Cellulose walls are found in plant cells but are freely permeable; they aren't the selectively permeable structure.", 2: "A single layer wouldn't create the hydrophobic core that blocks polar/charged molecules.", 3: "A solid protein sheet has no lipid bilayer and would not have the same selective transport properties." },
            tempting: "Choice A is tempting for students picturing plant cells, but the cell wall is a separate, freely permeable structure outside the membrane.",
            commonMistake: "Conflating the cell wall (support, freely permeable) with the plasma membrane (selective permeability).",
            apTip: "Always specify 'phospholipid bilayer with embedded/peripheral proteins' — full credit on FRQs requires naming both components."
          }
        },
        {
          id: 'bio-2-2', difficulty: 2, type: 'mcq', topic: 'Osmosis & Tonicity',
          prompt: "A plant cell placed in a hypertonic solution will most likely undergo:",
          choices: ['Lysis', 'Plasmolysis', 'Turgor pressure increase', 'No change in water movement'],
          correct: 1,
          explanation: {
            correct: "In a hypertonic solution, water leaves the cell by osmosis, causing the plasma membrane to pull away from the cell wall — plasmolysis.",
            wrong: { 0: "Lysis (bursting) happens in a hypotonic solution when water rushes in, especially in cells lacking a wall.", 2: "Turgor pressure increases in a hypotonic solution as water enters and pushes against the wall, the opposite of this scenario.", 3: "Water will move down its concentration gradient out of the cell, so there is a change." },
            tempting: "Choice C is tempting because plant cells are often discussed alongside turgor pressure, but that applies to the hypotonic case, not hypertonic.",
            commonMistake: "Mixing up which tonicity condition causes plasmolysis versus turgor increase.",
            apTip: "Anchor a single example (plant cell in salt water = plasmolysis) and reason from there instead of memorizing all four cell/tonicity combinations separately."
          }
        },
        {
          id: 'bio-2-3', difficulty: 2, type: 'mcq', topic: 'Organelles',
          prompt: "Which organelle modifies, sorts, and packages proteins for secretion after they leave the rough ER?",
          choices: ['Golgi apparatus', 'Lysosome', 'Peroxisome', 'Smooth ER'],
          correct: 0,
          explanation: {
            correct: "The Golgi apparatus receives vesicles from the rough ER, chemically modifies proteins (e.g., adding sugar groups), sorts them, and packages them into vesicles for secretion or delivery elsewhere.",
            wrong: { 1: "Lysosomes digest macromolecules and worn-out organelles; they don't primarily sort/package secretory proteins.", 2: "Peroxisomes break down fatty acids and detoxify harmful substances using oxidative reactions.", 3: "Smooth ER synthesizes lipids and detoxifies drugs; it isn't the sorting/packaging step for secretory proteins." },
            tempting: "Choice D is tempting because both ER types are part of the same pathway, but 'modify, sort, and package for secretion' is specifically the Golgi's signature job.",
            commonMistake: "Losing track of the correct order: rough ER (synthesis) → Golgi (modify/sort/package) → vesicle → membrane/secretion.",
            apTip: "Draw the endomembrane system pathway from memory before the exam; sequencing questions like this one are common."
          }
        },
        {
          id: 'bio-2-4', difficulty: 3, type: 'mcq', topic: 'Membrane Transport',
          prompt: "A cell actively transports Na+ out and K+ in against their gradients using ATP. If a metabolic poison blocks ATP production, what is the most likely immediate effect on the Na+/K+ gradient?",
          choices: ['The gradient will strengthen without ATP', 'The gradient will gradually dissipate as ions leak down their concentration gradients', 'Ion movement will stop completely and gradients will be frozen in place', 'The cell will begin pumping ions in the opposite direction'],
          correct: 1,
          explanation: {
            correct: "Without ATP, the Na+/K+ pump can't run, but passive leak channels and diffusion continue, so ions will gradually move down their existing gradients until the gradient dissipates.",
            wrong: { 0: "Active transport is what builds/maintains the gradient; removing ATP removes the mechanism that opposes leakage, so the gradient weakens, not strengthens.", 2: "Passive diffusion through leak channels doesn't require ATP, so some ion movement continues even without active transport.", 3: "There's no mechanism described that would reverse pump direction; ATP loss disables the pump rather than reversing it." },
            tempting: "Choice C is tempting because 'no ATP' sounds like 'nothing happens,' but that ignores passive transport processes that don't need energy input.",
            commonMistake: "Forgetting that passive transport (diffusion, facilitated diffusion) continues independently of active transport status.",
            apTip: "On FRQs, explicitly distinguish active transport (requires ATP, moves against gradient) from passive transport (no ATP, moves with gradient) — you often need both to fully explain a scenario."
          }
        },
        {
          id: 'bio-2-5', difficulty: 4, type: 'mcq', topic: 'Cell Communication',
          prompt: "A cell exposed to a signaling ligand shows no response, even though receptor-binding assays confirm the receptor binds the ligand normally. Which step in signal transduction is most likely disrupted?",
          choices: ['Reception', 'A downstream component of the transduction pathway (e.g., a relay protein or second messenger)', 'Ligand synthesis', 'Ligand diffusion through the extracellular space'],
          correct: 1,
          explanation: {
            correct: "Since binding is confirmed normal, reception itself works; the problem must lie further downstream in the transduction cascade (e.g., a broken kinase relay or missing second messenger) that prevents the signal from producing a cellular response.",
            wrong: { 0: "Reception is explicitly confirmed to work via the binding assay, ruling this step out.", 2: "Ligand synthesis is upstream of and external to the responding cell's pathway; the ligand clearly reached and bound the receptor.", 3: "Diffusion also must have occurred successfully, since the ligand was shown to bind the receptor." },
            tempting: "None of the other choices are well supported once you register that the binding assay directly confirms reception — this question rewards careful use of the given evidence over general guessing.",
            commonMistake: "Not using the specific experimental detail (binding assay result) to eliminate reception as the faulty step.",
            apTip: "Cell communication FRQs often give you a piece of evidence like this — always use it to narrow down which of the three main stages (reception, transduction, response) is implicated."
          }
        },
        {
          id: 'bio-2-6', difficulty: 5, type: 'mcq', topic: 'Membrane Fluidity',
          prompt: "Two membrane samples are compared: Sample A has a higher proportion of unsaturated phospholipids and shorter fatty acid tails; Sample B has more saturated phospholipids and longer tails. At the same low temperature, which best predicts relative membrane fluidity, and why?",
          choices: ["Sample B is more fluid because saturated tails pack loosely", "Sample A is more fluid because kinks from unsaturated bonds and shorter tails both reduce tight packing", "Both samples have identical fluidity since phospholipid composition doesn't affect fluidity at low temperature", "Sample B is more fluid because longer tails increase membrane flexibility"],
          correct: 1,
          explanation: {
            correct: "Unsaturated fatty acid tails contain kinks from double bonds that prevent tight, orderly packing, and shorter tails have less surface area for van der Waals interactions between adjacent phospholipids — both effects independently increase fluidity, especially at low temperatures where membranes risk becoming too rigid.",
            wrong: { 0: "Saturated tails pack tightly (no kinks), which decreases fluidity, the opposite of this claim.", 2: "Phospholipid composition is precisely what organisms regulate (e.g., cold-adapted organisms increase unsaturated fat content) to maintain fluidity at low temperatures.", 3: "Longer tails increase van der Waals interactions between neighboring lipids, which decreases, not increases, fluidity." },
            tempting: "Choice A is tempting only if you associate 'saturated = solid at room temperature, like butter' loosely without connecting the molecular packing reasoning.",
            commonMistake: "Knowing the vocabulary (saturated/unsaturated) without being able to explain the packing mechanism behind fluidity changes.",
            apTip: "College-level insight: this is exactly how organisms like cold-water fish and winter plants regulate homeoviscous adaptation — being able to explain fluidity mechanistically (not just recall 'unsaturated = more fluid') is what separates a 4/5 response from a 5/5 on membrane FRQs."
          }
        }
      ]
    },
    {
      id: 3,
      name: 'Unit 3: Cellular Energetics',
      questions: [
        {
          id: 'bio-3-1', difficulty: 1, type: 'mcq', topic: 'Photosynthesis Overview',
          prompt: "In photosynthesis, the light-dependent reactions primarily produce which two products used by the Calvin cycle?",
          choices: ['CO2 and H2O', 'ATP and NADPH', 'Glucose and O2', 'Pyruvate and NADH'],
          correct: 1,
          explanation: {
            correct: "The light-dependent reactions use light energy to generate ATP (via chemiosmosis) and NADPH (via electron transport), both of which power carbon fixation in the Calvin cycle.",
            wrong: { 0: "CO2 is a Calvin cycle input from the atmosphere, and water is a light-reaction input (split for electrons), not an output used downstream.", 2: "Glucose is the eventual product of the Calvin cycle, not an input to it, and O2 is a byproduct released to the atmosphere, not used by the Calvin cycle.", 3: "Pyruvate and NADH are products of glycolysis in cellular respiration, unrelated to photosynthesis." },
            tempting: "Choice C is tempting since glucose and O2 are the famous overall products of photosynthesis, but the question specifically asks what feeds the Calvin cycle, not the net outputs of the whole process.",
            commonMistake: "Answering with the overall photosynthesis equation instead of the specific inputs to the Calvin cycle.",
            apTip: "Keep the two stages mentally separate: light reactions make ATP + NADPH (and release O2); Calvin cycle uses ATP + NADPH + CO2 to build sugar."
          }
        },
        {
          id: 'bio-3-2', difficulty: 2, type: 'mcq', topic: 'Cellular Respiration',
          prompt: "Which process in cellular respiration produces the most ATP per glucose molecule?",
          choices: ['Glycolysis', 'Pyruvate oxidation', 'Krebs (citric acid) cycle', 'Oxidative phosphorylation (electron transport chain + chemiosmosis)'],
          correct: 3,
          explanation: {
            correct: "Oxidative phosphorylation generates the vast majority of ATP (roughly 26–28 of ~30–32 total) because the electron transport chain uses the many NADH and FADH2 electron carriers produced earlier to build a large proton gradient that drives ATP synthase.",
            wrong: { 0: "Glycolysis nets only 2 ATP via substrate-level phosphorylation.", 1: "Pyruvate oxidation produces no ATP directly — it generates NADH and releases CO2.", 2: "The Krebs cycle nets only 2 ATP (as GTP/ATP) via substrate-level phosphorylation, though it does generate many electron carriers." },
            tempting: "Choice C is somewhat tempting since the Krebs cycle sounds central and produces multiple electron carriers, but the ATP total there is still small compared to what those carriers later enable in the ETC.",
            commonMistake: "Crediting the Krebs cycle or glycolysis directly for the bulk of ATP production instead of recognizing they mainly supply electron carriers to the ETC.",
            apTip: "Remember the ATP accounting: glycolysis (2) + Krebs (2) are substrate-level phosphorylation; oxidative phosphorylation is where NADH/FADH2 cash in for the majority of ATP."
          }
        },
        {
          id: 'bio-3-3', difficulty: 2, type: 'mcq', topic: 'Photosynthesis Pigments',
          prompt: "A pigment absorbs primarily blue and red wavelengths and reflects green light. This pigment is most likely:",
          choices: ['Carotenoid', 'Chlorophyll a', 'Anthocyanin', 'Phycoerythrin'],
          correct: 1,
          explanation: {
            correct: "Chlorophyll a strongly absorbs blue and red wavelengths and reflects/transmits green light, which is why most photosynthetic leaves appear green.",
            wrong: { 0: "Carotenoids absorb blue-green light and reflect yellow/orange wavelengths.", 2: "Anthocyanins are non-photosynthetic pigments that reflect red/purple wavelengths, common in flowers and fall leaves.", 3: "Phycoerythrin absorbs green light and reflects red, common in red algae — the opposite pattern described here." },
            tempting: "Choice A is tempting since carotenoids are also common photosynthetic pigments, but their absorption/reflection pattern doesn't match 'reflects green.'",
            commonMistake: "Assuming any pigment involved in photosynthesis must match the described absorption spectrum.",
            apTip: "Be ready to read an absorption spectrum graph and match the described peaks/troughs to a specific pigment — a frequent AP Bio figure-based question."
          }
        },
        {
          id: 'bio-3-4', difficulty: 3, type: 'mcq', topic: 'Chemiosmosis',
          prompt: "A researcher adds a chemical that makes mitochondrial membranes freely permeable to protons. What is the most likely effect on ATP production?",
          choices: ['ATP production increases because more protons can reach ATP synthase', 'ATP production decreases because the proton gradient needed to drive ATP synthase is dissipated', 'ATP production is unaffected since ATP synthase works independently of proton gradients', 'Electron transport chain activity stops entirely'],
          correct: 1,
          explanation: {
            correct: "ATP synthase relies on a proton gradient (higher H+ concentration in the intermembrane space) to drive protons through itself, powering ATP synthesis; making the membrane freely permeable lets protons leak anywhere, collapsing the gradient so ATP synthase has no driving force.",
            wrong: { 0: "More random leakage means less controlled flow specifically through ATP synthase, not more.", 2: "ATP synthase's entire mechanism depends on the proton gradient across the membrane — it's a chemiosmotic pump, not gradient-independent.", 3: "The electron transport chain can often continue pumping protons (in fact, sometimes even faster, since the gradient never builds up to inhibit it), it just fails to translate into ATP." },
            tempting: "Choice D is tempting because students sometimes assume disrupting ATP synthesis must stop the whole chain, but uncoupling agents like this can actually let the ETC run unchecked while ATP output collapses — this is literally how natural 'uncoupling proteins' work in brown fat for heat generation.",
            commonMistake: "Assuming electron transport and ATP synthesis are so tightly linked that stopping one always stops the other.",
            apTip: "College-level insight: this scenario describes real 'uncoupling agents' (e.g., DNP, or physiological uncoupling proteins in brown adipose tissue) — a great real-world example to cite on an FRQ about chemiosmosis."
          }
        },
        {
          id: 'bio-3-5', difficulty: 4, type: 'mcq', topic: 'Photorespiration',
          prompt: "On a hot, dry day, a C3 plant closes its stomata to conserve water. Which of the following is the most likely metabolic consequence?",
          choices: ['CO2 levels rise inside the leaf, increasing Calvin cycle efficiency', 'O2 builds up relative to CO2 inside the leaf, increasing photorespiration and lowering photosynthetic efficiency', 'The light reactions stop due to lack of gas exchange', 'The plant switches permanently to C4 metabolism'],
          correct: 1,
          explanation: {
            correct: "Closing stomata reduces gas exchange, so CO2 (consumed by the Calvin cycle) drops while O2 (produced by the light reactions) accumulates; RuBisCO then increasingly binds O2 instead of CO2, triggering wasteful photorespiration and reducing net photosynthesis.",
            wrong: { 0: "Closing stomata reduces CO2 entry from the atmosphere, so CO2 available for the Calvin cycle actually falls rather than rising.", 2: "The light reactions don't require external gas exchange to function in the short term (they use water split internally and can still produce O2, which then builds up).", 3: "A single C3 plant cannot metabolically 'switch' to C4 anatomy/biochemistry; C4 pathways depend on specialized leaf anatomy (Kranz anatomy) that a C3 plant doesn't have." },
            tempting: "Choice A is tempting if you only think 'closed stomata traps gas' without considering which specific gas is being consumed versus produced inside the leaf.",
            commonMistake: "Not tracking that CO2 is consumed and O2 is produced by two different processes happening in the same closed leaf space.",
            apTip: "This exact water-conservation vs. photorespiration trade-off is a favorite AP Bio FRQ scenario — practice explaining it with the RuBisCO oxygenase/carboxylase competition explicitly."
          }
        },
        {
          id: 'bio-3-6', difficulty: 5, type: 'mcq', topic: 'Metabolic Regulation',
          prompt: "In a cell with abundant ATP and low ADP, which regulatory effect on cellular respiration is most consistent with feedback inhibition principles?",
          choices: ['Glycolysis and the Krebs cycle speed up to use the excess ATP', 'Key regulatory enzymes (e.g., phosphofructokinase) are inhibited by high ATP, slowing respiration', 'Respiration rate is unaffected by ATP/ADP levels since it only depends on glucose availability', 'The electron transport chain reverses direction to consume ATP'],
          correct: 1,
          explanation: {
            correct: "Phosphofructokinase (PFK), a key glycolysis control point, is allosterically inhibited by high ATP (and citrate) and activated by high ADP/AMP — classic feedback inhibition that slows respiration when the cell already has plenty of energy.",
            wrong: { 0: "This is backwards: high ATP signals the cell has enough energy already, so pathways slow down rather than speed up.", 2: "Respiration is tightly regulated by the cell's energy charge (ATP/ADP/AMP ratios), not solely by substrate availability — this is a core homeostatic control mechanism.", 3: "There's no biological mechanism by which the ETC 'reverses' under high ATP in this way; regulation instead acts upstream at enzymes like PFK to reduce the supply of electron carriers." },
            tempting: "Choice A can tempt students who reason 'more ATP available means the cell can afford to make more,' inverting the actual feedback logic where high ATP is the stop signal, not a green light.",
            commonMistake: "Assuming metabolic pathways run at a constant rate regardless of the cell's current energy status, ignoring allosteric feedback control.",
            apTip: "College-level insight: PFK regulation by ATP/citrate (inhibition) and ADP/AMP (activation) is a textbook example of allosteric feedback inhibition — a strong, specific example to use on any FRQ about metabolic homeostasis."
          }
        }
      ]
    },
    {
      id: 4,
      name: 'Unit 4: Cell Communication & Cell Cycle',
      questions: [
        {
          id: 'bio-4-1', difficulty: 1, type: 'mcq', topic: 'Cell Cycle Phases',
          prompt: "During which phase of the cell cycle does DNA replication occur?",
          choices: ['G1 phase', 'S phase', 'G2 phase', 'M phase'],
          correct: 1,
          explanation: {
            correct: "S phase (synthesis phase) is specifically when the cell replicates its entire genome, doubling its DNA content in preparation for division.",
            wrong: { 0: "G1 is a growth phase where the cell increases in size and synthesizes proteins/organelles, before DNA replication begins.", 2: "G2 is a second growth phase after DNA replication, where the cell prepares for mitosis (e.g., synthesizing proteins needed for division).", 3: "M phase (mitosis) is when the already-replicated chromosomes are separated into two daughter nuclei, not when replication occurs." },
            tempting: "Choice D is tempting because 'M phase' sounds like the most eventful, active phase of the cycle, but the actual DNA copying happens earlier, during interphase's S phase.",
            commonMistake: "Assuming all major cellular events happen during the visibly dramatic M phase, rather than knowing the interphase subdivisions (G1, S, G2) where most of the cell cycle's duration and key events actually occur.",
            apTip: "Memorize the interphase order and purpose cold: G1 (grow), S (replicate DNA), G2 (grow/prepare) — together these make up interphase, which precedes M phase (mitosis)."
          }
        },
        {
          id: 'bio-4-2', difficulty: 2, type: 'mcq', topic: 'Cell Cycle Checkpoints',
          prompt: "A cell with damaged DNA is halted at the G1/S checkpoint. What is the biological significance of this checkpoint arrest?",
          choices: ['It allows the damaged DNA to be replicated before repair', 'It prevents replication of damaged DNA until repairs are made or the cell undergoes apoptosis', 'It signals the cell to skip S phase entirely and proceed to mitosis', 'It has no functional significance and occurs randomly'],
          correct: 1,
          explanation: {
            correct: "Checkpoints act as quality-control surveillance points; halting at G1/S when DNA damage is detected prevents the cell from copying and propagating that damaged DNA, giving repair machinery time to fix it, or triggering apoptosis if damage is irreparable.",
            wrong: { 0: "This is the opposite of the checkpoint's purpose — it exists specifically to PREVENT replication of damaged DNA, not allow it.", 2: "Skipping S phase entirely without replicating DNA would produce daughter cells with half the normal DNA content, which is not what checkpoint arrest does; it pauses the cycle rather than skipping essential steps.", 3: "Checkpoints are a critical, actively regulated (not random) part of cell cycle control, involving specific proteins like p53 that monitor DNA integrity." },
            tempting: "Choice C might tempt students who know checkpoints 'stop' the cycle but don't have a clear picture of what happens next, guessing at a plausible-sounding but incorrect alternative pathway.",
            commonMistake: "Understanding that checkpoints 'stop' the cycle without understanding the specific biological reason (protecting genomic integrity) behind the stop.",
            apTip: "For any cell cycle FRQ mentioning checkpoints, explicitly name the checkpoint (G1/S, G2/M, or the spindle assembly checkpoint) and state what specifically is being monitored there — generic answers about 'quality control' without specifics lose points."
          }
        },
        {
          id: 'bio-4-3', difficulty: 2, type: 'mcq', topic: 'Signal Transduction',
          prompt: "A hydrophilic (water-soluble) signaling molecule such as insulin cannot cross the plasma membrane directly. How does it typically trigger a response inside the target cell?",
          choices: ['It diffuses through the phospholipid bilayer directly', 'It binds a cell-surface receptor, triggering an intracellular signal transduction cascade', 'It is actively transported into the cell by a channel protein', 'It converts to a lipid-soluble form before entering the cell'],
          correct: 1,
          explanation: {
            correct: "Hydrophilic signals like insulin bind to specific receptor proteins embedded in the plasma membrane; this binding triggers a conformational change in the receptor that starts a chain of intracellular events (transduction) without the signal molecule itself needing to enter the cell.",
            wrong: { 0: "Hydrophilic molecules cannot pass through the hydrophobic core of the phospholipid bilayer directly — that pathway is reserved for small nonpolar/lipid-soluble signals like steroid hormones.", 2: "Signaling molecules like insulin don't typically enter the cell via transport channels; they act at the membrane surface through receptor binding instead.", 3: "Insulin doesn't undergo a chemical conversion to become lipid-soluble; its water-soluble nature is precisely why it must use a surface receptor mechanism instead." },
            tempting: "Choice A can tempt students who don't yet distinguish which types of signaling molecules (lipid-soluble like steroids vs. water-soluble like insulin/peptide hormones) use which specific mechanism (direct diffusion + intracellular receptor vs. surface receptor + transduction cascade).",
            commonMistake: "Applying the steroid-hormone mechanism (direct membrane diffusion, intracellular receptor) to all hormones/signals, rather than recognizing that a molecule's polarity determines which pathway it must use.",
            apTip: "Keep the two contrasting pathways paired in memory: lipid-soluble signals (steroid hormones) diffuse directly through the membrane and bind intracellular receptors; water-soluble signals (peptide hormones like insulin) bind surface receptors and trigger transduction cascades."
          }
        },
        {
          id: 'bio-4-4', difficulty: 3, type: 'mcq', topic: 'Second Messengers',
          prompt: "A G-protein-coupled receptor activates adenylyl cyclase, which converts ATP to cyclic AMP (cAMP). cAMP is best classified as a:",
          choices: ['Primary messenger', 'Second messenger that amplifies and relays the signal inside the cell', 'Receptor protein', 'Structural component of the cell membrane'],
          correct: 1,
          explanation: {
            correct: "cAMP is a classic second messenger — a small intracellular molecule produced in response to a receptor being activated by the original (first/primary) extracellular signal, which then relays and amplifies that signal to downstream targets like protein kinases.",
            wrong: { 0: "The primary (first) messenger is the original extracellular signaling molecule that bound the receptor; cAMP is generated afterward, inside the cell.", 2: "cAMP is a small signaling molecule, not a protein embedded in the membrane that binds ligands.", 3: "cAMP has no structural role in the membrane; it's a freely diffusible intracellular signaling molecule." },
            tempting: "None of the alternatives are especially tempting if the vocabulary is known, but students who haven't cleanly separated 'first messenger' (the original hormone/ligand) from 'second messenger' (the internal relay molecule) may mislabel cAMP as the primary signal itself.",
            commonMistake: "Conflating the extracellular first messenger (e.g., a hormone) with the intracellular second messenger it triggers (e.g., cAMP) — these are two distinct steps in the same pathway.",
            apTip: "On signal transduction FRQs, explicitly trace the full chain: first messenger (extracellular) → receptor → second messenger (intracellular, e.g., cAMP or Ca²⁺) → downstream protein activation → cellular response. Naming each link explicitly earns more credit than a vague description."
          }
        },
        {
          id: 'bio-4-5', difficulty: 4, type: 'mcq', topic: 'Cell Cycle Regulation & Cancer',
          prompt: "A mutation inactivates the p53 tumor suppressor protein, which normally halts the cell cycle in response to DNA damage. What is the most likely consequence for a cell that sustains DNA damage after this mutation?",
          choices: ['The cell will repair DNA more efficiently without p53', 'The cell may continue dividing despite DNA damage, potentially propagating mutations to daughter cells', 'The cell cycle will arrest permanently at G2/M', 'The mutation has no effect since other checkpoints will fully compensate'],
          correct: 1,
          explanation: {
            correct: "p53 normally detects DNA damage and halts the cell cycle (or triggers apoptosis) to prevent damaged DNA from being replicated and passed on; without functional p53, this critical checkpoint control is lost, so a damaged cell can continue through the cycle and divide, potentially propagating mutations — a key step in cancer development.",
            wrong: { 0: "p53 itself doesn't repair DNA directly; it halts the cycle to allow time for OTHER repair mechanisms to act, so losing p53 removes that opportunity rather than improving repair.", 2: "Without functional p53, the checkpoint arrest that WOULD normally occur is lost — the cell is more likely to bypass arrest, not become permanently stuck.", 3: "While other checkpoint proteins exist, p53 is often called the 'guardian of the genome' precisely because its loss significantly increases the risk of uncontrolled division; other mechanisms don't fully compensate for its loss, which is why p53 mutations are found in a majority of human cancers." },
            tempting: "Choice D can tempt students into assuming cellular systems are so redundant that losing one protein 'shouldn't matter much,' but AP Bio (and real oncology) specifically emphasizes p53's outsized importance as a central checkpoint regulator.",
            commonMistake: "Underestimating the significance of a single regulatory protein's loss, without connecting it to real-world consequences like cancer.",
            apTip: "College-level insight: p53 mutations are found in over 50% of human cancers — citing this specific, well-known fact on an FRQ about cell cycle regulation and cancer demonstrates the kind of concrete, real-world connection that distinguishes strong responses."
          }
        },
        {
          id: 'bio-4-6', difficulty: 5, type: 'mcq', topic: 'Apoptosis Signaling',
          prompt: "A cell receives conflicting signals: growth factor signaling (promoting survival) is present, but internal sensors also detect severe, irreparable DNA damage (promoting apoptosis). If the apoptotic pathway's downstream caspase enzymes are experimentally blocked, but the DNA damage sensing and p53 activation still function normally, what is the most likely outcome?",
          choices: ['The cell will undergo apoptosis normally since p53 is unaffected', 'The cell will survive and continue dividing, since executing apoptosis requires the caspase enzymes that were blocked, even though the upstream damage-sensing signal is intact', 'The cell will repair its DNA and function normally', 'Blocking caspases has no effect on cell fate since apoptosis is regulated entirely upstream of caspase activation'],
          correct: 1,
          explanation: {
            correct: "Apoptosis is executed through a signaling cascade ending in caspase enzyme activation, which carries out the actual dismantling of the cell; even if upstream damage sensing and p53 activation proceed normally, blocking the caspases downstream breaks the chain of execution, so the 'kill signal' cannot be carried out — the damaged cell survives and can continue cycling despite the unresolved damage.",
                wrong: { 0: "p53 being 'unaffected' only means the upstream signal is intact; apoptosis as an actual outcome depends on the full downstream pathway, including the caspases that were specifically disabled here.", 2: "Nothing in this scenario restores DNA repair machinery; the damage remains irreparable, so the cell doesn't 'fix itself' — it simply fails to die despite carrying damage.", 3: "This is the opposite of the correct answer — caspases are not just a redundant final step, they are the actual functional executioners of apoptosis, so blocking them has a decisive effect on whether the cell actually dies." },
            tempting: "Choice A is tempting because p53 is so heavily emphasized as 'the' checkpoint regulator that students may assume its normal function guarantees the correct downstream outcome, without considering that execution requires an intact pathway all the way through.",
            commonMistake: "Treating a signaling pathway as a single on/off switch rather than a multi-step cascade where each downstream component (like caspases) is independently necessary for the final outcome.",
            apTip: "College-level insight: this reflects real cancer biology and drug design — some cancers survive precisely because they have intact damage-sensing but defective downstream apoptotic execution machinery (e.g., caspase dysregulation), which is why some therapies specifically target restoring or bypassing broken downstream apoptotic steps rather than only addressing upstream sensors like p53."
          }
        }
      ]
    },
    {
      id: 5,
      name: 'Unit 5: Heredity',
      questions: [
        {
          id: 'bio-5-1', difficulty: 1, type: 'mcq', topic: 'Mendelian Genetics',
          prompt: "In a monohybrid cross between two heterozygous (Aa) individuals, what fraction of offspring is expected to show the recessive phenotype?",
          choices: ['1/4', '1/2', '3/4', '0'],
          correct: 0,
          explanation: {
            correct: "An Aa × Aa cross produces a 1:2:1 genotype ratio (AA:Aa:aa), so 1/4 of offspring are aa and show the recessive phenotype.",
            wrong: { 1: "1/2 would be the fraction that are heterozygous (Aa), not the recessive phenotype fraction.", 2: "3/4 is the fraction showing the dominant phenotype (AA + Aa), not recessive.", 3: "Recessive offspring are still possible from two heterozygous parents, since each carries one recessive allele." },
            tempting: "Choice C is tempting because 3/4 is a very memorable number from Mendelian ratios, but it corresponds to the dominant phenotype fraction, not recessive.",
            commonMistake: "Mixing up the 1/4 recessive vs. 3/4 dominant portions of the classic 3:1 phenotypic ratio.",
            apTip: "Draw the Punnett square every time rather than relying purely on memorized ratios — partial credit on FRQs often requires showing the square itself."
          }
        },
        {
          id: 'bio-5-2', difficulty: 2, type: 'mcq', topic: 'Meiosis',
          prompt: "Crossing over during meiosis I directly contributes to genetic variation by:",
          choices: ['Doubling the chromosome number', 'Exchanging segments between homologous chromosomes, creating new allele combinations', 'Randomly aligning homologous pairs at the metaphase plate', 'Separating sister chromatids during anaphase II'],
          correct: 1,
          explanation: {
            correct: "Crossing over (recombination) physically exchanges segments of DNA between non-sister chromatids of homologous chromosomes during prophase I, producing chromosomes with new combinations of alleles not present in either parent chromosome.",
            wrong: { 0: "Meiosis reduces, not doubles, chromosome number by the end of the process.", 2: "Independent assortment (random alignment of homologous pairs) is a separate source of variation from crossing over, described in choice C's mechanism but mislabeled here as the source of new allele combinations.", 3: "Sister chromatid separation in anaphase II is normal segregation, not itself a source of new allele combinations." },
            tempting: "Choice C is tempting because independent assortment is indeed a major source of variation, but it creates new combinations of whole chromosomes, not new combinations of alleles within a single chromosome the way crossing over does.",
            commonMistake: "Treating crossing over and independent assortment as the same mechanism instead of two distinct sources of genetic variation.",
            apTip: "On FRQs, name both sources of variation (crossing over AND independent assortment) separately and describe each mechanism specifically — graders look for both terms and accurate descriptions."
          }
        },
        {
          id: 'bio-5-3', difficulty: 2, type: 'mcq', topic: 'Non-Mendelian Inheritance',
          prompt: "In snapdragons, crossing a red-flowered plant (RR) with a white-flowered plant (WW) produces all pink-flowered offspring (RW). This pattern is best described as:",
          choices: ['Complete dominance', 'Incomplete dominance', 'Codominance', 'Polygenic inheritance'],
          correct: 1,
          explanation: {
            correct: "Incomplete dominance produces a heterozygous phenotype that blends between the two homozygous phenotypes — pink is intermediate between red and white.",
            wrong: { 0: "Complete dominance would produce all-red (or all-white) offspring, not an intermediate color.", 2: "Codominance would show both parental phenotypes fully and distinctly expressed simultaneously (like spots or patches of both colors), not a blended intermediate.", 3: "Polygenic inheritance involves multiple genes controlling one trait, not a single gene with two alleles as described here." },
            tempting: "Choice C is the classic point of confusion — codominance and incomplete dominance both involve heterozygotes that 'look different' from either homozygote, but codominance shows both traits distinctly, while incomplete dominance blends them.",
            commonMistake: "Using 'codominance' and 'incomplete dominance' interchangeably instead of distinguishing blended vs. simultaneously-distinct expression.",
            apTip: "Use the human example to lock in the distinction: incomplete dominance = pink flowers (blend); codominance = AB blood type or roan cattle hair (both fully expressed, visibly distinct)."
          }
        },
        {
          id: 'bio-5-4', difficulty: 3, type: 'mcq', topic: 'Linked Genes',
          prompt: "Two genes are located close together on the same chromosome. A testcross produces mostly parental-type offspring with a small percentage of recombinant offspring. This pattern is best explained by:",
          choices: ['Independent assortment of the two genes', 'Genetic linkage with occasional crossing over between the loci', 'Codominance between the two genes', 'Nondisjunction during meiosis I'],
          correct: 1,
          explanation: {
            correct: "Genes located close together on the same chromosome tend to be inherited together (linkage), but crossing over between the loci occasionally occurs and creates a smaller proportion of recombinant offspring — the closer the genes, the fewer recombinants.",
            wrong: { 0: "Independent assortment applies to genes on different chromosomes (or very far apart) and would predict roughly equal parental and recombinant frequencies, not mostly-parental.", 2: "Codominance describes how alleles are expressed in a phenotype, not the inheritance pattern of two separate gene loci.", 3: "Nondisjunction produces abnormal chromosome numbers (aneuploidy), not the parental/recombinant ratio pattern described here." },
            tempting: "Choice A is tempting because testcrosses are classically taught with independent assortment, but the described 'mostly parental, some recombinant' pattern is the specific signature of linkage, not independent assortment.",
            commonMistake: "Applying the standard independent-assortment testcross ratio expectations without noticing the skewed parental-vs-recombinant pattern that signals linkage.",
            apTip: "Recombination frequency (% recombinant offspring) is used to map relative gene distances — know that a low recombination frequency implies genes are closer together on the chromosome."
          }
        },
        {
          id: 'bio-5-5', difficulty: 4, type: 'mcq', topic: 'Pedigree Analysis',
          prompt: "A pedigree shows an X-linked recessive trait. An affected father and an unaffected, non-carrier mother have children. What is the expected phenotype pattern in their offspring?",
          choices: ['All children affected', 'All daughters carriers (unaffected), all sons unaffected', 'All sons affected, all daughters carriers', 'Half of all children affected regardless of sex'],
          correct: 1,
          explanation: {
            correct: "An affected father contributes his single X (carrying the recessive allele) to all daughters, making every daughter a carrier (X^A X^a, unaffected since the trait is recessive); he contributes only his Y to sons, who instead get an unaffected X from their non-carrier mother, so all sons are unaffected and non-carriers.",
            wrong: { 0: "Sons can't be affected here since they receive their only X chromosome from the non-carrier mother.", 2: "Sons receive the father's Y chromosome, not his X, so they cannot inherit his X-linked allele at all from him.", 3: "This ignores the specific X/Y inheritance pattern; the actual outcome is fully determined (100% carrier daughters, 100% unaffected sons), not a 50/50 split." },
            tempting: "Choice C is a common mix-up where students assume the father's affected X passes only to sons (as if it worked like Y-linked inheritance), when in fact fathers pass their X exclusively to daughters.",
            commonMistake: "Forgetting the core rule of X-linked inheritance: fathers pass their X chromosome only to daughters and their Y only to sons.",
            apTip: "For any X-linked pedigree question, immediately write out each parent's sex chromosome genotype (e.g., X^A Y and X^A X^A) and trace what each parent can possibly contribute to sons vs. daughters before evaluating the choices."
          }
        },
        {
          id: 'bio-5-6', difficulty: 5, type: 'mcq', topic: 'Epigenetics & Gene-Environment Interaction',
          prompt: "Two genetically identical (monozygotic) twins raised in different environments show different expression levels of a gene involved in stress response, correlating with different childhood stress exposure, despite having identical DNA sequences at that locus. This is best explained by:",
          choices: ['A new mutation must have occurred in one twin', 'Epigenetic modifications (e.g., DNA methylation) altered gene expression without changing the DNA sequence', 'Mendelian segregation caused different alleles to be inherited', 'The twins must not actually be genetically identical'],
          correct: 1,
          explanation: {
            correct: "Epigenetic mechanisms like DNA methylation or histone modification can be induced by environmental factors (such as chronic stress) and change how accessible a gene is to transcription machinery, altering expression levels without any change to the underlying DNA sequence — exactly consistent with identical DNA but different expression.",
            wrong: { 0: "A new mutation would change the DNA sequence itself, but the scenario specifies identical DNA sequences at that locus, ruling this out.", 2: "Mendelian segregation determines which alleles are inherited at fertilization; it doesn't explain differing expression later in life between individuals with identical genotypes.", 3: "The premise states they are monozygotic (genetically identical) twins; nothing in the scenario contradicts that at the DNA sequence level." },
            tempting: "Choice A can tempt students who default to 'different outcome must mean different genotype,' but the question explicitly rules that out by stating identical DNA sequences.",
            commonMistake: "Not recognizing that gene expression differences can arise from mechanisms other than changes to the DNA sequence itself.",
            apTip: "College-level insight: this reflects real behavioral epigenetics research on twin studies and stress — for FRQs, explicitly state that epigenetic changes affect gene expression/regulation, not the genetic code itself, to earn distinguishing credit over an answer that only mentions 'environment affects genes' vaguely."
          }
        }
      ]
    },
    {
      id: 6,
      name: 'Unit 6: Gene Expression & Regulation',
      questions: [
        {
          id: 'bio-6-1', difficulty: 1, type: 'mcq', topic: 'Transcription & Translation',
          prompt: "Which of the following correctly describes the flow of genetic information in the central dogma of molecular biology?",
          choices: ['Protein → RNA → DNA', 'DNA → RNA → Protein', 'RNA → Protein → DNA', 'DNA → Protein → RNA'],
          correct: 1,
          explanation: {
            correct: "The central dogma describes DNA being transcribed into RNA (transcription), which is then translated into protein (translation) — DNA → RNA → Protein.",
            wrong: { 0: "This reverses the entire flow; information doesn't normally flow backward from protein into nucleic acids.", 2: "This places protein before DNA, an incorrect order that doesn't reflect the actual biological process.", 3: "This skips RNA as an intermediate step, but transcription into RNA is a required intermediate before translation into protein." },
            tempting: "None of the alternatives closely resemble the correct order if the term 'central dogma' and its standard direction are known, but it's easy to second-guess the arrow order under time pressure.",
            commonMistake: "Reversing or scrambling the order of the three molecules in the central dogma.",
            apTip: "Say the phrase 'DNA makes RNA makes protein' out loud as a fixed anchor phrase — this exact ordering is foundational and shows up throughout the gene expression unit."
          }
        },
        {
          id: 'bio-6-2', difficulty: 2, type: 'mcq', topic: 'Gene Regulation — Operons',
          prompt: "In the lac operon of E. coli, when lactose is absent, the repressor protein binds to the operator and blocks transcription. When lactose is present, it binds the repressor, changing its shape so it can no longer bind the operator. This is an example of:",
          choices: ['Positive regulation only', "Negative regulation, since the default state is 'off' until an inhibitory repressor is removed", 'A completely constitutive (always-on) gene', 'Regulation that occurs only after translation'],
          correct: 1,
          explanation: {
            correct: "The lac operon is negatively regulated: the repressor's DEFAULT action is to block (inhibit) transcription, and lactose works by removing that inhibition (inactivating the repressor) rather than actively turning transcription on — this pattern, where a regulatory protein's default job is to block expression, defines negative regulation.",
            wrong: { 0: "Positive regulation would involve an activator protein that must bind to help turn ON transcription; the repressor here works by blocking, not directly activating, transcription.", 2: "Constitutive genes are expressed continuously regardless of conditions; the lac operon is precisely NOT this, since its expression clearly depends on lactose's presence or absence.", 3: "This regulation occurs at the transcriptional level (controlling whether RNA polymerase can access the gene), not after translation has already produced protein." },
            tempting: "Choice A can tempt students who see lactose 'activating' gene expression in a loose sense, but the specific mechanism (removing an inhibitory block) technically defines negative, not positive, regulation.",
            commonMistake: "Assuming 'lactose turns the genes on' must mean positive regulation, without examining the specific mechanism (inactivating a repressor vs. directly recruiting transcription machinery).",
            apTip: "Distinguish regulation type by the DEFAULT state and MECHANISM: negative regulation = a repressor's default action blocks expression until removed; positive regulation = an activator's presence is required to switch expression on. The lac operon is the classic negative regulation example — know it by name."
          }
        },
        {
          id: 'bio-6-3', difficulty: 2, type: 'mcq', topic: 'mRNA Processing',
          prompt: "Which of the following is a step in eukaryotic mRNA processing that does NOT occur in prokaryotic mRNA production?",
          choices: ['Transcription by RNA polymerase', "Addition of a 5' cap and poly-A tail, plus splicing out of introns", 'Translation into a polypeptide chain', 'Formation of a phosphodiester backbone'],
          correct: 1,
          explanation: {
            correct: "Eukaryotic pre-mRNA undergoes significant additional processing not seen in prokaryotes: a protective 5' cap and poly-A tail are added, and non-coding introns are spliced out, leaving only exons in the mature mRNA before it leaves the nucleus.",
            wrong: { 0: "Both prokaryotes and eukaryotes use RNA polymerase to transcribe DNA into RNA; this step itself isn't unique to eukaryotes.", 2: "Translation occurs in both prokaryotes and eukaryotes (though at different cellular locations/timing relative to transcription); it isn't a eukaryote-exclusive process.", 3: "The phosphodiester backbone is a basic structural feature of RNA (and DNA) in all organisms, not something unique to eukaryotic processing." },
            tempting: "None of the distractors are particularly deceptive if mRNA processing steps are known distinctly, but it's easy to lose track of exactly which steps are eukaryote-specific versus universal to all organisms.",
            commonMistake: "Not distinguishing which molecular biology steps are universal (transcription, translation, basic RNA structure) from which are specifically added complexity in eukaryotes (capping, tailing, splicing).",
            apTip: "Remember that prokaryotes lack a nucleus, so their mRNA is translated immediately/simultaneously with transcription without extensive processing; eukaryotes have a nucleus that allows time and space for capping, tailing, and splicing before mRNA export — connecting the structural difference (nucleus or not) to the process difference helps this stick."
          }
        },
        {
          id: 'bio-6-4', difficulty: 3, type: 'mcq', topic: 'Mutations',
          prompt: "A single nucleotide is deleted from the middle of a gene's coding sequence. What is the most likely consequence for the resulting protein?",
          choices: ['No effect, since only one nucleotide changed', 'A frameshift mutation, likely altering every codon downstream of the deletion and potentially producing a nonfunctional protein', 'Only the single amino acid at that position will change, with the rest of the protein unaffected', 'The gene will simply not be transcribed at all'],
          correct: 1,
          explanation: {
            correct: "Because the genetic code is read in triplets (codons), deleting a single nucleotide shifts the reading frame for every codon downstream of the deletion point, typically scrambling the entire amino acid sequence from that point onward and often introducing a premature stop codon — this frameshift effect usually has drastic consequences for protein structure and function.",
            wrong: { 0: "A single nucleotide deletion has an outsized effect specifically because it shifts the reading frame for everything downstream, unlike some point substitutions that might affect only one codon.", 2: "This describes the effect of a point substitution (which changes one codon and possibly one amino acid) rather than a deletion, which shifts the frame for all subsequent codons, not just one.", 3: "A mutation within the coding sequence doesn't necessarily prevent transcription from occurring at all; RNA polymerase can still transcribe the altered sequence — the functional problem arises during translation into a scrambled protein." },
            tempting: "Choice C is tempting because it's the correct description for a different mutation type (a point substitution), and mixing up deletion/insertion frameshifts with simple substitutions is a very common error.",
            commonMistake: "Applying the 'one nucleotide change, one amino acid change' logic (correct for substitutions) to insertions/deletions, which instead shift the entire downstream reading frame.",
            apTip: "Sort mutation types into two buckets by consequence: substitutions affect at most one codon/amino acid (missense, nonsense, or silent); insertions/deletions NOT in multiples of three cause frameshifts that scramble everything downstream — this distinction is very frequently tested."
          }
        },
        {
          id: 'bio-6-5', difficulty: 4, type: 'mcq', topic: 'Gene Regulation in Development',
          prompt: "All cells in a multicellular organism contain essentially the same DNA, yet a liver cell and a neuron have dramatically different structures and functions. This is best explained by:",
          choices: ['Liver cells and neurons actually contain different genes', 'Differential gene expression, in which different genes are turned on or off in different cell types despite an identical genome', 'Mutations that occur specifically during cell differentiation', 'Liver cells and neurons undergo different numbers of DNA replication rounds'],
          correct: 1,
          explanation: {
            correct: "Differential gene expression — the selective activation and repression of different genes in different cell types via transcription factors, chromatin structure, and other regulatory mechanisms — allows genetically identical cells to develop dramatically different structures and functions by expressing different subsets of their shared genome.",
            wrong: { 0: "With rare exceptions, virtually all cells in a multicellular organism contain the same complete genome; the difference lies in which genes are expressed, not which genes are present.", 2: "Normal cellular differentiation is not driven by introducing new mutations; it's driven by regulated gene expression using the same, unmutated genome.", 3: "Differences in cell type aren't explained by differing numbers of DNA replication rounds; both cell types arise through normal mitotic division from a common genome, and the key difference is in gene regulation, not DNA copy history." },
            tempting: "Choice A is a natural but incorrect assumption — since the cells look and function so differently, it can seem like they must have different genetic material, when the real explanation is regulatory, not genetic, in nature.",
            commonMistake: "Assuming dramatic functional/structural differences between cell types must reflect differences in genetic content, rather than differences in which shared genes are actively expressed.",
            apTip: "This exact 'same genome, different cell types' scenario is a favorite AP Bio FRQ setup — always answer with 'differential gene expression' by name, and be ready to name a specific regulatory mechanism (transcription factors, chromatin remodeling/epigenetics) that achieves it for full credit."
          }
        },
        {
          id: 'bio-6-6', difficulty: 5, type: 'mcq', topic: 'CRISPR & Biotechnology',
          prompt: "CRISPR-Cas9 gene editing uses a guide RNA to direct the Cas9 enzyme to a specific DNA sequence, where Cas9 creates a double-strand break. Which best explains why the specificity of the guide RNA sequence is critical to the safety of this technology?",
          choices: ['Guide RNA specificity only affects how quickly the edit occurs, not where it occurs', "A guide RNA that partially matches unintended ('off-target') genomic sequences could direct Cas9 to cut at incorrect locations, potentially disrupting other genes", 'Cas9 will only ever cut at the intended site regardless of guide RNA sequence, since the enzyme itself is inherently precise', 'Guide RNA specificity is irrelevant because all double-strand breaks are repaired identically regardless of location'],
          correct: 1,
          explanation: {
            correct: "The guide RNA is what determines WHERE Cas9 cuts, by base-pairing with a complementary target DNA sequence; if the guide RNA sequence isn't sufficiently specific, it may also partially match and bind unintended ('off-target') sequences elsewhere in the genome, directing Cas9 to cut and potentially disrupt genes other than the intended target — a major safety and precision concern in real gene-editing applications.",
            wrong: { 0: "Guide RNA sequence is precisely what determines targeting LOCATION (via complementary base-pairing), not just the speed of the reaction.", 2: "Cas9's cutting location is directed by the guide RNA it's paired with; the enzyme itself doesn't have independent inherent target specificity separate from its guide RNA.", 3: "Where a double-strand break occurs matters enormously — a break in a critical gene can disrupt its function, while a break in a non-coding region may have little effect; repair outcomes and consequences are highly location-dependent, not uniform." },
            tempting: "Choice C could tempt students who think of Cas9 as an inherently 'smart' or self-targeting enzyme, when in reality its targeting specificity comes entirely from the guide RNA it's programmed with, making guide RNA design the critical safety factor.",
            commonMistake: "Attributing CRISPR-Cas9's targeting precision to the Cas9 enzyme itself rather than correctly identifying the guide RNA sequence as the actual source of target specificity.",
            apTip: "College-level insight: 'off-target effects' from imperfect guide RNA specificity are one of the most actively researched safety challenges in real-world CRISPR therapeutics — citing this specific term and mechanism on an FRQ about biotechnology applications and their limitations demonstrates strong, current scientific literacy beyond the basic mechanism description."
          }
        }
      ]
    },
    {
      id: 7,
      name: 'Unit 7: Natural Selection',
      questions: [
        {
          id: 'bio-7-1', difficulty: 1, type: 'mcq', topic: 'Natural Selection Basics',
          prompt: "Which of the following is a required condition for natural selection to occur in a population?",
          choices: ['All individuals must be genetically identical', 'There must be heritable variation in a trait that affects survival or reproduction', 'The environment must remain completely constant', 'Every individual must reproduce equally'],
          correct: 1,
          explanation: {
            correct: "Natural selection requires heritable variation in a trait, and that variation must affect an organism's survival or reproductive success, so that individuals with advantageous variants leave more offspring, gradually shifting the population's trait distribution over generations.",
            wrong: { 0: "Natural selection specifically REQUIRES variation among individuals; if everyone were genetically identical, there would be nothing for selection to act on.", 2: "Environmental change or specific environmental pressures are actually often what drives selection for particular traits; a completely constant environment isn't a required condition (selection can still occur due to existing pressures, but variety in environment is not required to be absent).", 3: "Unequal reproductive success (some individuals reproducing more than others due to their traits) is precisely the mechanism of natural selection, not a condition that must be avoided." },
            tempting: "Choice A can tempt students who think of selection as needing a 'clean' starting point, when in fact genetic variation is the essential raw material that selection acts upon.",
            commonMistake: "Not recognizing that variation and differential reproductive success are the core REQUIRED ingredients for natural selection, rather than optional or excluded conditions.",
            apTip: "Memorize the core requirements as a checklist: (1) variation in a trait, (2) that variation is heritable, (3) the trait affects survival/reproduction, (4) resulting in differential reproductive success — all four are needed together for natural selection to occur."
          }
        },
        {
          id: 'bio-7-2', difficulty: 2, type: 'mcq', topic: 'Types of Selection',
          prompt: "In a population of birds, both very small and very large beak sizes become favored over time, while medium beak sizes become less common, splitting the population into two peaks. This pattern is best described as:",
          choices: ['Directional selection', 'Stabilizing selection', 'Disruptive selection', 'Genetic drift'],
          correct: 2,
          explanation: {
            correct: "Disruptive selection favors both extreme phenotypes over the intermediate phenotype, which can split a population's trait distribution into two peaks and, over time, potentially contribute to speciation.",
            wrong: { 0: "Directional selection favors ONE extreme over the other (shifting the population toward one end), not both extremes simultaneously as described here.", 1: "Stabilizing selection favors the INTERMEDIATE phenotype and selects against both extremes, the opposite pattern from what's described.", 3: "Genetic drift is random change in allele frequencies due to chance, not a description of selection consistently favoring specific phenotypes based on beak size and fitness." },
            tempting: "Choice B is tempting because it's the most commonly discussed 'default' selection pattern, but it describes the OPPOSITE outcome (favoring the middle, not the extremes) from what's described in this scenario.",
            commonMistake: "Confusing disruptive selection (favors both extremes, selects against the middle) with stabilizing selection (favors the middle, selects against both extremes) — these are near-opposite patterns.",
            apTip: "Visualize each selection type as a shift in a bell curve: directional = curve shifts to one side; stabilizing = curve narrows around the center; disruptive = curve splits into two peaks at the edges — sketching this quickly can help distinguish them under exam pressure."
          }
        },
        {
          id: 'bio-7-3', difficulty: 2, type: 'mcq', topic: 'Genetic Drift',
          prompt: "A small population of animals is isolated on an island. Due to random chance, certain alleles become significantly more or less common in just a few generations, unrelated to whether those alleles are advantageous. This is best described as:",
          choices: ['Natural selection', 'Genetic drift, which has a stronger effect in small populations', 'Gene flow', 'Convergent evolution'],
          correct: 1,
          explanation: {
            correct: "Genetic drift is random fluctuation in allele frequencies due to chance events (not differential fitness), and its effects are especially pronounced in SMALL populations, where random sampling of which individuals survive/reproduce can dramatically shift allele frequencies purely by chance.",
            wrong: { 0: "Natural selection specifically involves allele frequency changes driven by differential survival/reproduction based on fitness advantages, not random chance unrelated to advantage.", 2: "Gene flow refers to the movement of alleles between populations (e.g., through migration), not random chance-driven change within an isolated population.", 3: "Convergent evolution refers to unrelated species independently evolving similar traits due to similar environmental pressures, an unrelated concept to random allele frequency change within one population." },
            tempting: "Choice A is tempting because any allele frequency change might be assumed to be 'selection,' but the key defining detail here is that the change is explicitly described as random and unrelated to advantage, which is the signature of drift, not selection.",
            commonMistake: "Assuming any change in allele frequency over generations must be due to natural selection, without checking whether the change is linked to differential fitness (selection) or is instead random (drift).",
            apTip: "Remember that genetic drift's effects are amplified in SMALL populations (a very testable, specific fact) — larger populations tend to average out random chance effects, making drift comparatively less impactful there."
          }
        },
        {
          id: 'bio-7-4', difficulty: 3, type: 'mcq', topic: 'Hardy-Weinberg Equilibrium',
          prompt: "A population is in Hardy-Weinberg equilibrium for a gene with two alleles, where the frequency of the recessive allele (q) is 0.3. What is the expected frequency of heterozygous individuals?",
          choices: ['0.09', '0.42', '0.49', '0.3'],
          correct: 1,
          explanation: {
            correct: "Under Hardy-Weinberg, heterozygote frequency = 2pq. Since q = 0.3, p = 1 - 0.3 = 0.7. So 2pq = 2(0.7)(0.3) = 0.42.",
            wrong: { 0: "0.09 is q² (0.3²), which represents the frequency of homozygous recessive individuals, not heterozygotes.", 2: "0.49 is p² (0.7²), which represents the frequency of homozygous dominant individuals, not heterozygotes.", 3: "0.3 is simply the given allele frequency q itself, not the calculated heterozygote genotype frequency." },
            tempting: "Choices A and C are both tempting because they're genuine, correctly-calculated Hardy-Weinberg quantities — just the WRONG ones (homozygous frequencies) for what the question specifically asks (heterozygote frequency).",
            commonMistake: "Confusing the three genotype frequency terms in the Hardy-Weinberg equation (p², 2pq, q²) and which one corresponds to which genotype (homozygous dominant, heterozygous, homozygous recessive respectively).",
            apTip: "Always write out the full equation p² + 2pq + q² = 1 explicitly and label each term with its genotype (p²=homozygous dominant, 2pq=heterozygous, q²=homozygous recessive) before calculating, to avoid grabbing the wrong term."
          }
        },
        {
          id: 'bio-7-5', difficulty: 4, type: 'mcq', topic: 'Speciation',
          prompt: "Two populations of the same species become geographically separated by a new mountain range. Over thousands of years, they accumulate enough genetic differences that even after the mountain range erodes and they can physically interact again, they can no longer produce fertile offspring. This process illustrates:",
          choices: ['Sympatric speciation, since the populations ended up in the same location', 'Allopatric speciation, since the populations initially diverged due to geographic separation, and reproductive isolation persisted as a consequence', 'Gene flow, since the populations were eventually able to interact again', 'Convergent evolution, since both populations adapted to similar mountain conditions'],
          correct: 1,
          explanation: {
            correct: "Allopatric speciation occurs when populations are geographically separated (here, by a mountain range) and accumulate genetic differences independently over time; the key signature is that the divergence process BEGAN due to geographic isolation, even if the populations happen to reunite later — by that point, enough genetic divergence had already accumulated to produce reproductive isolation.",
            wrong: { 0: "Sympatric speciation refers to speciation occurring WITHOUT geographic separation, while populations remain in the same location throughout the process — this scenario explicitly begins with geographic separation, so it doesn't fit sympatric speciation despite the populations later reuniting geographically.", 2: "Gene flow refers to alleles actually moving between populations (interbreeding); here, the populations specifically CANNOT interbreed successfully anymore (produce fertile offspring), so gene flow is exactly what is NOT occurring at the end of this scenario.", 3: "Convergent evolution refers to unrelated species independently evolving SIMILAR traits due to similar pressures; this scenario instead describes populations of the SAME original species diverging apart from each other, the opposite pattern." },
            tempting: "Choice A can tempt students who focus only on the populations' FINAL geographic state (back in contact) rather than recognizing that speciation classification is based on the conditions present DURING the divergence process, not the current geographic arrangement after the fact.",
            commonMistake: "Classifying speciation type based on the populations' current/final geographic relationship rather than the geographic conditions that were present while genetic divergence was actually accumulating.",
            apTip: "For speciation classification questions, always identify what geographic relationship existed DURING the period of genetic divergence (not necessarily the current or final relationship) — allopatric requires separation during that divergence period specifically."
          }
        },
        {
          id: 'bio-7-6', difficulty: 5, type: 'mcq', topic: 'Coevolution & Selection Pressure',
          prompt: "A species of moth has evolved an increasingly long proboscis (feeding tube) over generations, closely matching the increasingly deep nectar tube of a specific orchid species it pollinates, which has also evolved a deeper tube over the same period. This reciprocal pattern is best explained by:",
          choices: ['Pure coincidence unrelated to any selective pressure', 'Coevolution, in which each species acts as a selective pressure on the other, driving reciprocal adaptive change over time', 'Genetic drift acting identically and independently on both species', 'Convergent evolution, since both species evolved similar traits'],
          correct: 1,
          explanation: {
            correct: "Coevolution describes a reciprocal evolutionary relationship where two interacting species each act as a selective pressure on the other; here, moths with longer proboscises can access nectar from orchids with deeper tubes (favoring longer proboscis moths), while orchids with deeper tubes may get better pollination service from those same longer-proboscis moths (favoring deeper-tube orchids), creating a reinforcing cycle of reciprocal adaptation.",
            wrong: { 0: "The tight, matched, and progressive correspondence between both species' trait changes over the same time period is a strong signature of a systematic selective relationship, not mere coincidence.", 2: "Genetic drift is random and doesn't reliably produce closely MATCHED, progressively co-adapted trait changes between two interacting species over time; this pattern instead reflects a directed selective relationship.", 3: "Convergent evolution refers to unrelated species evolving SIMILAR traits due to similar independent environmental pressures; here the two species have DIFFERENT traits (a feeding tube vs. a nectar tube) that fit together as a functional match, which is the signature of coevolution, not both species converging on the same trait." },
            tempting: "Choice D can tempt students who see 'both species changed in a similar direction (longer)' as convergent evolution, but convergent evolution specifically refers to unrelated species evolving similar STRUCTURES independently for similar functions, not two interacting species evolving complementary, matched structures because of their direct relationship with each other.",
            commonMistake: "Confusing coevolution (reciprocal adaptation between interacting species) with convergent evolution (independent species evolving similar traits due to similar, but not directly interactive, environmental pressures).",
            apTip: "College-level insight: this exact moth-orchid example (based on real Darwin's moth and Madagascar's star orchid) is a classic textbook illustration of coevolution — citing this specific, real example by name on an FRQ about coevolution demonstrates concrete scientific literacy beyond a generic definition."
          }
        }
      ]
    },
    {
      id: 8,
      name: 'Unit 8: Ecology',
      questions: [
        {
          id: 'bio-8-1', difficulty: 1, type: 'mcq', topic: 'Levels of Ecological Organization',
          prompt: "Which of the following correctly orders levels of ecological organization from smallest to largest?",
          choices: ['Ecosystem → Community → Population → Organism', 'Organism → Population → Community → Ecosystem', 'Population → Organism → Ecosystem → Community', 'Community → Ecosystem → Organism → Population'],
          correct: 1,
          explanation: {
            correct: "The standard ecological hierarchy moves from a single organism, to a population (all members of one species in an area), to a community (all different species interacting in an area), to an ecosystem (the community plus its physical/abiotic environment).",
            wrong: { 0: "This lists the levels in reverse order, from largest to smallest instead of smallest to largest.", 2: "This scrambles the order incorrectly, placing organism and ecosystem out of their proper sequence relative to population and community.", 3: "This also scrambles the order, starting with community (a larger level) before smaller levels like organism and population." },
            tempting: "None of the distractors are conceptually difficult if the hierarchy is memorized correctly, but scrambled-order questions like this specifically test whether the sequence is memorized precisely rather than just recognizing the individual terms.",
            commonMistake: "Recognizing all four vocabulary terms but not having the specific nested ORDER memorized precisely.",
            apTip: "Use a simple mnemonic sentence to lock in the order: 'One Person Canエcosystem' → Organism, Population, Community, Ecosystem — or make up your own memorable phrase using the first letters."
          }
        },
        {
          id: 'bio-8-2', difficulty: 2, type: 'mcq', topic: 'Energy Flow & Trophic Levels',
          prompt: "In a food chain, only about 10% of energy is transferred from one trophic level to the next. What happens to the remaining ~90% of energy at each level?",
          choices: ['It is transferred directly to the next trophic level in a delayed manner', 'It is lost primarily as heat through cellular respiration and metabolic processes, not passed on', 'It is stored indefinitely within the organisms at that trophic level', 'It disappears, violating the law of conservation of energy'],
          correct: 1,
          explanation: {
            correct: "The '10% rule' reflects that most energy consumed at a trophic level is used for the organisms' own metabolic processes (cellular respiration, movement, growth, waste) and is ultimately released as heat, rather than being incorporated into biomass that could be consumed by the next trophic level.",
            wrong: { 0: "The lost energy isn't simply delayed in reaching the next level; it's genuinely used up and dissipated as heat through metabolism, not passed along at all.", 2: "Energy isn't stored indefinitely; it's actively used for life processes and ultimately released as heat, following the second law of thermodynamics (energy tends to disperse).", 3: "Energy isn't destroyed (conservation of energy holds); it's converted into heat energy through metabolic processes, which is a real, accounted-for transformation rather than a violation of any physical law." },
            tempting: "None of the distractors are especially close if the concept is understood precisely, but 'stored indefinitely' can tempt students who think of the missing energy as somehow still present in an inaccessible form, rather than genuinely dissipated as heat.",
            commonMistake: "Not identifying metabolic heat loss (via cellular respiration) as the specific fate of the 'missing' 90% of energy at each trophic level.",
            apTip: "Explicitly connect the 10% rule to cellular respiration and thermodynamics on FRQs: energy is used for life processes and released as heat (consistent with the second law of thermodynamics), which is why energy pyramids are always narrower at higher trophic levels."
          }
        },
        {
          id: 'bio-8-3', difficulty: 2, type: 'mcq', topic: 'Population Growth Models',
          prompt: "A population growing according to the logistic growth model will slow its growth rate primarily as it approaches which value?",
          choices: ['Zero', 'Its carrying capacity (K)', 'Its initial population size', 'Twice its carrying capacity'],
          correct: 1,
          explanation: {
            correct: "In the logistic growth model, population growth rate slows as the population size approaches the environment's carrying capacity (K) — the maximum population size the environment can sustainably support given limited resources — eventually leveling off at K.",
            wrong: { 0: "Growth rate is typically highest (not slowing) at low population sizes relative to K, assuming resources are abundant relative to population; growth slows as the population approaches K, not zero.", 2: "The initial population size isn't the relevant limiting value in the logistic model; growth continues past the initial size, slowing specifically as it nears carrying capacity, not the starting point.", 3: "Populations don't typically sustain growth substantially beyond carrying capacity in the logistic model — the model specifically describes growth leveling off AT K, not continuing to double past it." },
            tempting: "None of the distractors are especially deceptive if the model's core equation and behavior are understood precisely, but the term 'carrying capacity' must be specifically and correctly identified as the leveling-off value.",
            commonMistake: "Not connecting the S-shaped (sigmoid) logistic growth curve shape to its underlying cause: growth rate slowing due to increasing resource limitation and competition as population size approaches K.",
            apTip: "Sketch the logistic growth S-curve from memory and label the carrying capacity (K) as a horizontal asymptote line — being able to connect the graph shape to the underlying biological cause (resource limitation) is frequently tested."
          }
        },
        {
          id: 'bio-8-4', difficulty: 3, type: 'mcq', topic: 'Species Interactions',
          prompt: "Clownfish live among sea anemones, gaining protection from predators due to the anemone's stinging tentacles (to which clownfish are immune), while the clownfish may also help remove parasites and debris from the anemone. This relationship is best classified as:",
          choices: ['Parasitism, since one organism benefits at the other\'s expense', 'Mutualism, since both organisms appear to benefit from the interaction', 'Commensalism, since only one organism benefits and the other is unaffected', 'Competition, since both organisms compete for the same resources'],
          correct: 1,
          explanation: {
            correct: "Mutualism describes a relationship where BOTH species benefit; here, the clownfish gains protection from predators, while the anemone gains benefits like parasite removal and debris cleaning from the clownfish, making this a mutually beneficial (mutualistic) relationship.",
            wrong: { 0: "Parasitism involves one organism benefiting at the direct expense/harm of the other; neither species is described as being harmed in this relationship.", 2: "Commensalism involves one organism benefiting while the other is neither helped nor harmed; here, the anemone IS described as gaining a benefit (parasite/debris removal), ruling out commensalism.", 3: "Competition involves organisms competing for the same limited resources, which isn't the dynamic described here — this is a cooperative interaction, not a competitive one." },
            tempting: "Choice C is a common trap, since clownfish-anemone relationships are sometimes oversimplified as one-sided in casual descriptions, but the AP-level description explicitly includes a benefit to the anemone (parasite/debris removal), which specifically makes it mutualism rather than commensalism.",
            commonMistake: "Assuming the classic clownfish-anemone example is automatically commensalism without checking whether the specific scenario described includes a benefit to both species (which would make it mutualism instead).",
            apTip: "Always identify species interaction types based on the SPECIFIC benefits/costs stated in the scenario, not from memorized 'textbook' associations — the same species pair can be classified differently in different problems depending on exactly what benefits are described."
          }
        },
        {
          id: 'bio-8-5', difficulty: 4, type: 'mcq', topic: 'Keystone Species',
          prompt: "Removing a single predator species from an ecosystem causes a disproportionately large cascade of changes throughout the food web, even though that predator was not the most abundant species. This predator is best described as a:",
          choices: ['Invasive species', 'Keystone species, whose impact on the ecosystem is disproportionately large relative to its abundance', 'Pioneer species', 'Indicator species'],
          correct: 1,
          explanation: {
            correct: "A keystone species has a disproportionately large effect on its ecosystem's structure and function relative to its overall abundance or biomass; removing it can trigger a cascade of significant changes throughout the food web, as described in this scenario.",
            wrong: { 0: "An invasive species is a non-native species introduced to a new environment, often causing harm; this scenario doesn't specify the predator is non-native, and the defining feature here is disproportionate ecological impact, not origin.", 2: "A pioneer species is one of the first species to colonize a barren or disturbed environment (relevant to ecological succession), an unrelated concept to a predator's disproportionate food web impact.", 3: "An indicator species is one whose presence/absence/health signals the overall condition of an ecosystem (often used for monitoring pollution or ecosystem health), a different concept from having an outsized causal/structural impact on the food web." },
            tempting: "None of the distractors precisely match 'disproportionate impact relative to abundance' if the vocabulary is known specifically, but these ecology terms (keystone, indicator, pioneer, invasive) are often taught together and can blur without a clear working definition of each.",
            commonMistake: "Blurring together various ecological classification terms (keystone, indicator, pioneer, invasive) that are taught in the same unit without a distinct, specific definition anchored to each one.",
            apTip: "Attach the sea otter/kelp forest example to 'keystone species' as a fixed mental anchor: removing sea otters allows sea urchin populations to explode, which then decimates kelp forests — a real, frequently cited example of disproportionate ecological impact."
          }
        },
        {
          id: 'bio-8-6', difficulty: 5, type: 'mcq', topic: 'Biogeochemical Cycles',
          prompt: "Excess nitrogen and phosphorus runoff from agricultural fertilizer enters a lake, causing a massive algal bloom. As the algae die and decompose, decomposer bacteria consume large amounts of dissolved oxygen, leading to a fish die-off. This overall process is best described as:",
          choices: ['Bioaccumulation, since nitrogen and phosphorus build up in fish tissue over time', 'Eutrophication, in which nutrient enrichment triggers excessive algal growth, and the subsequent decomposition depletes dissolved oxygen, harming aquatic life', 'Biomagnification, since nutrient concentration increases at each trophic level', 'Primary succession, since new organisms are colonizing the lake for the first time'],
          correct: 1,
          explanation: {
            correct: "Eutrophication describes exactly this process: excess nutrients (like nitrogen and phosphorus from fertilizer runoff) fuel excessive algal growth, and when the algae die, decomposer activity consuming that biomass depletes dissolved oxygen in the water, creating hypoxic conditions that can kill fish and other aquatic organisms.",
            wrong: { 0: "Bioaccumulation refers to a substance building up within an individual organism's tissues over its lifetime (often applied to toxins), not the ecosystem-level nutrient enrichment and oxygen depletion process described here.", 2: "Biomagnification refers to a substance's concentration INCREASING at each successive trophic level up a food chain (often applied to toxins like mercury), a different phenomenon from the direct nutrient-driven oxygen depletion process described here.", 3: "Primary succession refers to ecological community development in a completely lifeless area (like new volcanic rock) with no prior soil/ecosystem, which is unrelated to this nutrient pollution scenario occurring in an already-established lake ecosystem." },
            tempting: "Choices A and C are tempting because both involve 'increasing concentration of a substance,' a superficially similar-sounding idea, but they specifically describe substance accumulation WITHIN organisms/food chains over time, not the ecosystem-level nutrient pollution and oxygen depletion cascade that eutrophication specifically describes.",
            commonMistake: "Confusing eutrophication (nutrient pollution → algal bloom → oxygen depletion) with bioaccumulation/biomagnification (toxin buildup within organisms or up a food chain) — all three involve 'substances building up' in some sense, but describe fundamentally different mechanisms and consequences.",
            apTip: "For FRQs about eutrophication, explicitly trace the full causal chain: nutrient input → algal bloom → algae death → decomposer (bacterial) population increase → dissolved oxygen depletion → death of oxygen-dependent aquatic organisms — walking through every link in this chain, not just naming the phenomenon, is what earns full credit."
          }
        }
      ]
    }
  ],
  frqs: [
    {
      id: 'bio-frq-1', difficulty: 4, unit: 3,
      prompt: "A student sets up an experiment measuring the rate of photosynthesis (O2 production) in aquatic plant sprigs at three light intensities (low, medium, high) and two CO2 concentrations (ambient, elevated).\n\n(a) Predict and justify the effect of increasing light intensity on the rate of photosynthesis at ambient CO2, including why the rate eventually plateaus.\n(b) Predict how the rate-vs-light-intensity curve would differ at elevated CO2, and explain the biochemical reason for the difference.\n(c) Describe one experimental design flaw that could confound these results and how to control for it.",
      rubricPoints: [
        "States that rate increases with light intensity because light drives the light-dependent reactions, producing more ATP/NADPH for the Calvin cycle (1 pt)",
        "Explains the plateau as a limitation by another factor (e.g., CO2 availability or enzyme/RuBisCO capacity) once light is no longer limiting (1 pt)",
        "Predicts the elevated-CO2 curve plateaus at a higher rate and/or higher light intensity (1 pt)",
        "Explains that more CO2 allows the Calvin cycle to keep pace with the light reactions' output, shifting the limiting factor (1 pt)",
        "Identifies a valid confound (e.g., temperature not controlled, bubble-counting inaccuracy, plant size/surface area differences) with a specific control (1 pt)"
      ],
      sampleResponse: "(a) As light intensity increases, the light-dependent reactions produce more ATP and NADPH, providing more fuel for the Calvin cycle, so photosynthesis rate increases. Eventually the rate plateaus because CO2 (or the Calvin cycle enzymes, especially RuBisCO) becomes the limiting factor — adding more light no longer helps once the Calvin cycle can't use the ATP/NADPH any faster.\n(b) At elevated CO2, the curve would rise similarly at low light but plateau at a higher rate and at a higher light intensity, because CO2 is no longer the limiting factor — the Calvin cycle can now keep up with more ATP/NADPH before something else (like light itself, or enzyme saturation) becomes limiting.\n(c) One confound is that different plant sprigs may have different surface areas/mass, affecting O2 production independent of treatment; this can be controlled by using sprigs of standardized length/mass or by normalizing O2 production per gram of plant tissue."
    },
    {
      id: 'bio-frq-2', difficulty: 4, unit: 5,
      prompt: "In fruit flies, gene A (alleles A/a) affects wing shape and gene B (alleles B/b) affects eye color. A dihybrid testcross (AaBb × aabb) produces offspring in the following numbers: 440 AaBb, 460 aabb, 45 Aabb, 55 aaBb.\n\n(a) Calculate the recombination frequency between genes A and B, showing your work.\n(b) Explain what this recombination frequency suggests about the physical relationship between the two genes.\n(c) Explain why the AaBb and aabb offspring outnumber the Aabb and aaBb offspring.",
      rubricPoints: [
        "Correctly identifies recombinant offspring as Aabb and aaBb (1 pt)",
        "Calculates recombination frequency as (45+55)/1000 = 10% with correct work shown (1 pt)",
        "States the genes are linked (on the same chromosome) and relatively close together, since recombination frequency is well below 50% (1 pt)",
        "Explains that AaBb/aabb are parental-type combinations, inherited together because the genes are physically linked on the same chromosome, so they're more frequent than the recombinant types produced only by crossing over (1 pt)"
      ],
      sampleResponse: "(a) Recombinant offspring are Aabb and aaBb: 45 + 55 = 100. Total offspring = 440+460+45+55 = 1000. Recombination frequency = 100/1000 = 10%.\n(b) A 10% recombination frequency (well below the 50% expected for independent assortment) indicates genes A and B are linked on the same chromosome and are relatively close together, since crossing over between them is relatively infrequent.\n(c) AaBb and aabb are the parental combinations inherited together on the same chromosomes without crossing over, so they occur whenever the chromosomes segregate normally in meiosis; Aabb and aaBb only arise when crossing over separates the linked alleles, which happens less often, making them less frequent (recombinant) classes."
    },
    {
      id: 'bio-frq-3', difficulty: 3, unit: 1,
      prompt: "A student tests the effect of pH on the activity of an enzyme called catalase using hydrogen peroxide as the substrate, measuring the rate of oxygen bubble production at pH 3, 7, and 11.\n\n(a) Predict which pH will show the highest catalase activity, and justify your prediction in terms of enzyme structure.\n(b) Explain, in terms of molecular structure, why activity is much lower at pH 3 and pH 11.\n(c) If the enzyme exposed to pH 3 is then returned to pH 7, would you expect its activity to fully recover? Justify your answer.",
      rubricPoints: [
        "Predicts pH 7 as optimal (or references that most human enzymes have a near-neutral optimum) (1 pt)",
        "Justifies using the idea that enzyme shape/active site conformation is optimized at a specific pH (1 pt)",
        "Explains that extreme pH disrupts ionic and hydrogen bonds maintaining the enzyme's tertiary structure, altering the active site's shape (1 pt)",
        "States that this can reduce or eliminate substrate binding, lowering reaction rate (1 pt)",
        "Correctly reasons about recovery: if the change was mild/reversible, some activity may return; if pH 3 caused full denaturation, activity will NOT recover, since denaturation is often irreversible (1 pt)"
      ],
      sampleResponse: "(a) pH 7 will likely show the highest activity, since catalase (like most enzymes in the human body) typically has an optimal pH near neutral, where its tertiary structure and active site shape are most stable and functional.\n(b) At pH 3 and pH 11, the excess H+ or OH- ions disrupt the ionic and hydrogen bonds that maintain the enzyme's precise three-dimensional shape, altering or destroying the active site's conformation so the substrate (hydrogen peroxide) can no longer bind effectively, lowering the reaction rate.\n(c) This depends on the severity of the pH 3 exposure: if the structural disruption was mild, returning to pH 7 might allow the enzyme to refold and partially or fully regain activity; however, if pH 3 caused substantial denaturation (breaking enough bonds to permanently alter the shape), the activity would NOT fully recover, since denaturation is frequently irreversible once the tertiary structure is sufficiently disrupted."
    },
    {
      id: 'bio-frq-4', difficulty: 4, unit: 2,
      prompt: "A cell is placed in a hypotonic solution.\n\n(a) Describe the direction of net water movement across the cell membrane, and explain why, referencing solute concentration.\n(b) Explain why an animal cell (lacking a cell wall) is at greater risk of lysis in this scenario than a plant cell.\n(c) Explain the role of the cell wall in preventing plant cell lysis, referencing turgor pressure.",
      rubricPoints: [
        "Correctly states water moves INTO the cell (1 pt)",
        "Justifies using osmosis: water moves toward the region of higher solute concentration (inside the cell, relative to the hypotonic surroundings) (1 pt)",
        "Explains animal cells lack a rigid cell wall to resist the resulting internal pressure, risking lysis (bursting) (1 pt)",
        "Explains that the plant cell wall provides structural resistance against the incoming water/expanding membrane (1 pt)",
        "Correctly connects this resistance to turgor pressure, which stabilizes the cell against lysis once internal pressure balances further net water entry (1 pt)"
      ],
      sampleResponse: "(a) Water moves INTO the cell. In a hypotonic solution, the solute concentration outside the cell is lower than inside, so water moves via osmosis toward the region of higher solute concentration (into the cell) to equalize this difference.\n(b) Animal cells lack a rigid cell wall, so as water continues entering, the cell has no external structural support to resist expansion, and the plasma membrane can stretch until it ruptures (lysis).\n(c) The plant cell wall is rigid and provides structural resistance against the incoming water, preventing the cell from expanding indefinitely; as water enters, pressure builds against the wall (turgor pressure), and once this internal pressure is sufficient, it counteracts further net water entry, stabilizing the cell rather than causing it to burst."
    },
    {
      id: 'bio-frq-5', difficulty: 4, unit: 4,
      prompt: "A researcher treats cancer cells with a drug that specifically inhibits Cdk (cyclin-dependent kinase) activity, a key regulator of progression through the cell cycle checkpoints.\n\n(a) Explain the normal role of cyclin-Cdk complexes in regulating the cell cycle.\n(b) Predict the effect of this Cdk inhibitor on cancer cell proliferation, and justify your answer.\n(c) Explain why this type of drug might have side effects on rapidly-dividing healthy cells (such as those in bone marrow or the gut lining), not just cancer cells.",
      rubricPoints: [
        "Explains cyclin-Cdk complexes as regulators that must reach threshold levels/activity to pass specific cell cycle checkpoints (1 pt)",
        "Predicts reduced/halted cancer cell proliferation, since Cdk activity is required to pass checkpoints and progress through the cycle (1 pt)",
        "Justifies with the idea that inhibiting Cdk blocks checkpoint passage, arresting the cycle (1 pt)",
        "Explains that healthy rapidly-dividing cells also rely on the same cyclin-Cdk mechanism, so they are also vulnerable to this drug's effects (1 pt)"
      ],
      sampleResponse: "(a) Cyclin-Cdk complexes accumulate and activate at specific points in the cell cycle; their activity must reach a threshold for the cell to pass key checkpoints (like G1/S and G2/M) and continue progressing through the cycle.\n(b) Cancer cell proliferation would likely decrease or halt, since inhibiting Cdk activity prevents cells from passing the checkpoints that normally require cyclin-Cdk activity, arresting the cells at those checkpoints rather than allowing continued division.\n(c) Healthy cells that divide rapidly (like bone marrow or gut lining cells) also rely on the same cyclin-Cdk regulatory mechanism to progress through their own cell cycles; since the drug isn't specific to cancer cells alone, it can also arrest these healthy rapidly-dividing cells, which is why such drugs often produce side effects like reduced blood cell counts or gastrointestinal symptoms."
    },
    {
      id: 'bio-frq-6', difficulty: 4, unit: 6,
      prompt: "A mutation occurs in the promoter region of a gene, reducing the affinity of RNA polymerase for that promoter.\n\n(a) Predict the effect of this mutation on the gene's expression level, and justify your answer.\n(b) Explain how this differs from a mutation occurring within the gene's coding (protein-coding) region itself.\n(c) Explain why a promoter mutation might have effects on multiple different aspects of the organism's phenotype, depending on the gene's function.",
      rubricPoints: [
        "Predicts decreased gene expression/transcription (1 pt)",
        "Justifies using the idea that lower RNA polymerase binding affinity means less frequent/efficient transcription initiation (1 pt)",
        "Explains that a promoter mutation affects HOW MUCH/how often the gene is transcribed, while a coding region mutation affects the STRUCTURE/sequence of the protein product itself (1 pt)",
        "Explains that if the gene's protein product is involved in multiple processes/pathways, reduced expression could have wide-ranging phenotypic effects across all those processes (1 pt)"
      ],
      sampleResponse: "(a) Gene expression would likely DECREASE. Since RNA polymerase has reduced affinity for the mutated promoter, it will bind less frequently or less stably, reducing the frequency of transcription initiation and therefore lowering the overall amount of mRNA (and ultimately protein) produced from this gene.\n(b) A promoter mutation affects the REGULATION of how much/how often the gene is transcribed, without necessarily changing the sequence of the protein produced when transcription does occur. A coding region mutation, by contrast, can directly alter the amino acid sequence of the protein itself, potentially changing its structure and function, regardless of how much is produced.\n(c) If the gene's protein product plays a role in multiple different cellular processes or pathways (which many proteins do), then reduced expression of that single gene could have cascading effects across all those different processes, potentially producing a range of different phenotypic effects rather than impacting just one single trait."
    },
    {
      id: 'bio-frq-7', difficulty: 4, unit: 7,
      prompt: "A population of insects shows variation in wing color (light or dark), which is heritable. Researchers observe that after industrial pollution darkens the tree bark in the insects' habitat, the proportion of dark-winged insects in the population increases significantly over several generations.\n\n(a) Explain this observation in terms of natural selection, referencing predation and camouflage.\n(b) Explain what would need to be true about wing color for this to be a case of natural selection, rather than some other evolutionary mechanism.\n(c) Predict what might happen to the population's wing color distribution if the pollution were later cleaned up, restoring the trees' original lighter bark color.",
      rubricPoints: [
        "Explains that dark-winged insects are better camouflaged against darkened bark, reducing predation on them (1 pt)",
        "Explains that light-winged insects become more visible to predators against the darker bark, increasing their predation rate (1 pt)",
        "States this differential survival leads to differential reproduction, increasing the frequency of the dark-wing allele/trait over generations (1 pt)",
        "Notes that wing color must be heritable (genetically based) for this to be natural selection, not just a non-heritable individual response (1 pt)",
        "Predicts that if light bark is restored, light-winged insects would again be better camouflaged, likely reversing the trend and increasing the light-wing proportion over subsequent generations (1 pt)"
      ],
      sampleResponse: "(a) Against the newly darkened bark, dark-winged insects are better camouflaged and less visible to predators, while light-winged insects stand out and are preyed upon more heavily; this differential predation means dark-winged insects survive and reproduce at higher rates, increasing the proportion of dark-winged individuals in the population over successive generations.\n(b) For this to be true natural selection, wing color must be a heritable (genetically determined) trait passed from parents to offspring — if wing color were purely due to environmental factors during development and not passed on genetically, the population's proportions wouldn't shift due to differential reproductive success across generations.\n(c) If light bark were restored, light-winged insects would again be better camouflaged and darker-winged insects more visible to predators, likely reversing the selective pressure and gradually increasing the proportion of light-winged insects again over subsequent generations, assuming sufficient genetic variation for wing color remained in the population."
    },
    {
      id: 'bio-frq-8', difficulty: 4, unit: 8,
      prompt: "A lake ecosystem experiences a significant decline in its top predator fish population due to overfishing.\n\n(a) Predict the effect on the population of the predator's primary prey species (a smaller fish that grazes on algae).\n(b) Predict the resulting effect on algae levels in the lake, and explain the underlying trophic cascade.\n(c) Explain how this scenario illustrates the broader ecological concept of a keystone species, even though the top predator itself may not have been especially abundant.",
      rubricPoints: [
        "Predicts an increase in the prey fish population, since fewer predators means less predation pressure (1 pt)",
        "Predicts a decrease in algae levels, since more prey fish means more algae grazing (1 pt)",
        "Explains the full trophic cascade chain explicitly: fewer predators → more prey fish → more algae grazing → less algae (1 pt)",
        "Connects this to keystone species concept: the predator's ecological impact is disproportionately large relative to its abundance, since its removal triggers cascading effects through multiple trophic levels (1 pt)"
      ],
      sampleResponse: "(a) The prey fish population would likely INCREASE, since fewer predators means reduced predation pressure on them.\n(b) Algae levels would likely DECREASE, since the larger prey fish population would consume more algae through grazing. The full trophic cascade: fewer top predators → prey fish population increases (less predation) → more algal grazing occurs → algae levels decline.\n(c) This illustrates the keystone species concept because the top predator's removal triggered a disproportionately large cascade of effects across multiple trophic levels (prey fish population, then algae levels), even if the predator itself was not the most numerous organism in the lake — a keystone species's ecological importance is defined by the scale of its impact on the ecosystem's structure, not by how abundant it is."
    },
    {
      id: 'bio-frq-9', difficulty: 3, unit: 3,
      prompt: "A cell performs both cellular respiration and fermentation under different oxygen conditions.\n\n(a) Compare the ATP yield of aerobic cellular respiration to that of fermentation, and explain the underlying reason for this difference.\n(b) Explain why fermentation is still adaptively useful for a cell, despite its much lower ATP yield.\n(c) Explain what happens to pyruvate under anaerobic conditions in an animal cell (lactic acid fermentation) versus a yeast cell (alcoholic fermentation).",
      rubricPoints: [
        "States aerobic respiration yields far more ATP (~30-32) than fermentation (~2 ATP from glycolysis alone) (1 pt)",
        "Explains the difference: aerobic respiration fully oxidizes glucose via the Krebs cycle and oxidative phosphorylation (using O2 as final electron acceptor), while fermentation only completes glycolysis (1 pt)",
        "Explains fermentation's adaptive value: it regenerates NAD+ from NADH, allowing glycolysis to continue producing at least some ATP when oxygen is unavailable (1 pt)",
        "Correctly describes lactic acid fermentation (pyruvate → lactate) in animal cells and alcoholic fermentation (pyruvate → ethanol + CO2) in yeast (1 pt)"
      ],
      sampleResponse: "(a) Aerobic cellular respiration yields far more ATP (approximately 30-32 ATP per glucose) than fermentation (only about 2 ATP per glucose, from glycolysis alone). This is because aerobic respiration fully oxidizes glucose through the Krebs cycle and oxidative phosphorylation, using oxygen as the final electron acceptor to generate large amounts of ATP via the electron transport chain, while fermentation only completes glycolysis without this additional energy extraction.\n(b) Fermentation is still adaptively useful because it regenerates NAD+ from NADH, which is required to keep glycolysis running; without this regeneration, glycolysis would stall once available NAD+ ran out, producing zero ATP. Fermentation allows a cell to continue producing at least some ATP via glycolysis when oxygen isn't available for aerobic respiration.\n(c) In animal cells, pyruvate is converted directly into lactate (lactic acid fermentation). In yeast cells, pyruvate is converted into ethanol and CO2 (alcoholic fermentation). Both pathways regenerate NAD+ from NADH, allowing glycolysis to continue."
    },
    {
      id: 'bio-frq-10', difficulty: 5, unit: 5,
      prompt: "In fruit flies, a cross between a red-eyed female and a white-eyed male produces all red-eyed offspring in the F1 generation. When F1 flies are crossed with each other, the F2 generation shows red-eyed and white-eyed flies, but ALL white-eyed F2 flies are male.\n\n(a) Propose an explanation for this inheritance pattern, identifying the type of inheritance involved.\n(b) Using X/Y notation, write the genotypes of the original parental female and male.\n(c) Explain why white-eyed females essentially never appear in the F2 generation of this specific cross.",
      rubricPoints: [
        "Correctly identifies this as X-linked recessive inheritance (1 pt)",
        "Correctly writes parental genotypes: red female = X^R X^R, white male = X^r Y (1 pt)",
        "Correctly explains F1 generation: all offspring are X^R X^r (red females, carriers) and X^R Y (red males), all red-eyed (1 pt)",
        "Correctly explains F2 cross (X^R X^r × X^R Y) produces red and white-eyed males but only red-eyed (carrier or homozygous) females, since females need two copies of the recessive allele, which requires the father to be white-eyed (X^r Y) — not the case in this specific F1 cross (1 pt)"
      ],
      sampleResponse: "(a) This pattern indicates X-linked recessive inheritance, since the trait (eye color) appears to be inherited differently in males and females, with white eyes appearing exclusively in males in the F2 generation.\n(b) The original red-eyed female was X^R X^R (homozygous for the dominant red allele), and the original white-eyed male was X^r Y (having only one X chromosome, carrying the recessive white allele).\n(c) All F1 females are X^R X^r (carriers, red-eyed) and all F1 males are X^R Y (red-eyed, since they got their only X from their red-eyed mother). Crossing F1 X^R X^r females with F1 X^R Y males can produce X^r Y sons (white-eyed, since they only need one recessive allele) but F2 daughters would need to receive an X^r from BOTH parents to be white-eyed — since all F1 males are X^R Y (no X^r to contribute), no F2 daughter can receive an X^r from her father, so white-eyed females cannot appear in this generation."
    },
    {
      id: 'bio-frq-11', difficulty: 3, unit: 1,
      prompt: "A student compares the pH-activity curves of pepsin (a stomach digestive enzyme) and trypsin (a small-intestine digestive enzyme).\n\n(a) Predict the general shape of each enzyme's pH-activity curve, given the differing environments in which each functions.\n(b) Explain why pepsin and trypsin have such different pH optima, referencing where each enzyme normally functions in the digestive system.\n(c) Predict what would happen if trypsin were exposed to the highly acidic environment of the stomach.",
      rubricPoints: [
        "Correctly predicts pepsin's optimum is at a low (acidic) pH, matching the stomach's acidic environment (1 pt)",
        "Correctly predicts trypsin's optimum is at a near-neutral to slightly basic pH, matching the small intestine's environment (1 pt)",
        "Explains that each enzyme's tertiary structure/active site has evolved to be stable and functional specifically in its own normal operating environment (1 pt)",
        "Predicts trypsin's activity would be greatly reduced or the enzyme denatured in stomach acid, since this pH is far outside its optimal range (1 pt)"
      ],
      sampleResponse: "(a) Pepsin's pH-activity curve would peak at a low (acidic) pH, since it functions in the highly acidic stomach. Trypsin's curve would peak at a near-neutral to slightly basic pH, since it functions in the small intestine, which is less acidic (closer to neutral/basic due to bicarbonate secretions).\n(b) Each enzyme's tertiary structure has evolved to be stable and catalytically active specifically within the pH range of its normal operating location — pepsin in the acidic stomach, trypsin in the more neutral/basic small intestine — so their active sites are optimized for very different pH conditions.\n(c) Trypsin exposed to the stomach's highly acidic environment would likely show greatly reduced activity or become denatured, since this pH is far outside its optimal range and would disrupt the ionic/hydrogen bonds maintaining its functional shape."
    },
    {
      id: 'bio-frq-12', difficulty: 3, unit: 2,
      prompt: "A cell biologist observes that a certain protein is synthesized on ribosomes attached to the rough ER, then travels through the Golgi apparatus before being secreted from the cell.\n\n(a) Explain the specific role of the rough ER in this protein's initial processing.\n(b) Explain the specific role of the Golgi apparatus in this pathway.\n(c) Explain how vesicles are used to transport this protein between these organelles and eventually out of the cell.",
      rubricPoints: [
        "Explains rough ER's role: ribosomes attached to it synthesize the protein directly into the ER lumen, where initial folding and modification (e.g., glycosylation) begins (1 pt)",
        "Explains Golgi's role: further modifies, sorts, and packages the protein for its correct destination (1 pt)",
        "Explains vesicle transport: membrane-bound vesicles bud off from one organelle and fuse with the membrane of the next, moving the protein along the pathway without it needing to cross membranes freely (1 pt)",
        "Correctly describes the final step: a secretory vesicle fuses with the plasma membrane, releasing the protein outside the cell (exocytosis) (1 pt)"
      ],
      sampleResponse: "(a) The rough ER's ribosomes synthesize the protein directly into the ER's lumen, where initial folding and modifications (such as the addition of sugar groups) begin.\n(b) The Golgi apparatus receives this protein via vesicles from the ER, further modifies it (such as additional processing of attached sugars), sorts it, and packages it into new vesicles addressed for its correct final destination.\n(c) Vesicles bud off from the rough ER's membrane, carrying the protein to the Golgi; after Golgi processing, a new vesicle buds off from the Golgi and travels to the plasma membrane, where it fuses with the membrane and releases its contents (the protein) outside the cell via exocytosis."
    },
    {
      id: 'bio-frq-13', difficulty: 3, unit: 4,
      prompt: "A cell exposed to high levels of DNA-damaging radiation shows increased activity of p53, a protein that can halt the cell cycle or trigger apoptosis.\n\n(a) Explain the role of p53 in maintaining genomic stability following DNA damage.\n(b) Predict the consequence for a cell with a mutated, non-functional p53 gene that experiences the same DNA damage.\n(c) Explain why p53 is sometimes called a \"tumor suppressor,\" connecting its normal function to cancer prevention.",
      rubricPoints: [
        "Explains p53 detects DNA damage and can halt the cell cycle (allowing repair) or trigger apoptosis if damage is severe (1 pt)",
        "Predicts that a cell with nonfunctional p53 may continue dividing despite DNA damage, since the checkpoint control is lost (1 pt)",
        "Explains this could allow damaged/mutated DNA to be passed to daughter cells, potentially accumulating further mutations (1 pt)",
        "Connects p53's normal function (preventing propagation of damaged DNA) to its designation as a tumor suppressor, since loss of this function increases cancer risk (1 pt)"
      ],
      sampleResponse: "(a) p53 detects DNA damage and can halt the cell cycle at a checkpoint (giving the cell time to repair the damage) or, if the damage is too severe to repair, trigger apoptosis (programmed cell death), preventing damaged DNA from being replicated and passed on.\n(b) A cell with nonfunctional p53 would likely continue through the cell cycle and divide despite the DNA damage, since the checkpoint control normally provided by p53 is lost, potentially passing damaged/mutated DNA to daughter cells.\n(c) p53 is called a tumor suppressor because its normal function (halting division or triggering apoptosis in damaged cells) prevents the accumulation and propagation of mutations that could lead to uncontrolled cell division; when p53 is mutated and loses this function, cells with damaged DNA can survive and divide, increasing the risk of accumulating further mutations that can lead to cancer."
    },
    {
      id: 'bio-frq-14', difficulty: 3, unit: 6,
      prompt: "A bacterial operon controlling lactose metabolism (the lac operon) includes a repressor protein that normally binds the operator and blocks transcription.\n\n(a) Explain what happens to gene expression from this operon when lactose is absent from the environment.\n(b) Explain what happens when lactose is present, referencing the repressor's behavior.\n(c) Predict the effect of a mutation that makes the repressor protein unable to bind lactose at all, even when lactose is present.",
      rubricPoints: [
        "Explains that with no lactose, the repressor binds the operator, blocking RNA polymerase and preventing transcription (genes OFF) (1 pt)",
        "Explains that with lactose present, lactose binds the repressor, changing its shape so it can no longer bind the operator, allowing transcription (genes ON) (1 pt)",
        "Predicts that a repressor unable to bind lactose would remain bound to the operator permanently, keeping the genes OFF even when lactose is present (1 pt)",
        "Notes the consequence: the cell would be unable to metabolize available lactose, since the genes for doing so remain switched off (1 pt)"
      ],
      sampleResponse: "(a) With no lactose present, the repressor protein binds to the operator region, physically blocking RNA polymerase from transcribing the operon's genes, so the lactose-metabolizing genes remain OFF (not expressed).\n(b) When lactose is present, some lactose molecules bind to the repressor protein, changing its shape so it can no longer bind the operator; this releases the operator, allowing RNA polymerase to transcribe the genes, so the lactose-metabolizing genes are turned ON.\n(c) If the repressor cannot bind lactose at all, it would remain in its DNA-binding shape permanently, continuing to block the operator even when lactose is present. The genes would stay OFF regardless of lactose availability, and the cell would be unable to express the enzymes needed to metabolize any available lactose."
    },
    {
      id: 'bio-frq-15', difficulty: 3, unit: 7,
      prompt: "Two isolated island populations of the same original bird species have been separated for thousands of years, evolving independently in different environments.\n\n(a) Explain how genetic drift could cause allele frequencies to differ between the two populations even without any difference in selective pressures.\n(b) Explain how natural selection could ALSO cause allele frequency differences, if the two islands have different environmental conditions.\n(c) Explain what type of evidence a researcher could gather to determine whether the two populations have diverged enough to be considered separate species.",
      rubricPoints: [
        "Explains genetic drift as random changes in allele frequency, which can occur independently in each isolated population purely by chance, especially in smaller populations (1 pt)",
        "Explains natural selection: if environmental conditions differ between islands, different traits may be favored on each, driving divergence in allele frequencies related to those traits (1 pt)",
        "Identifies a reasonable test for speciation, most commonly whether individuals from the two populations can still successfully interbreed and produce fertile offspring (reproductive isolation) (1 pt)"
      ],
      sampleResponse: "(a) Genetic drift refers to random, chance-based changes in allele frequency from generation to generation, unrelated to any selective advantage; since the two island populations are isolated from each other, drift can push their allele frequencies in different random directions purely by chance, especially if either population is relatively small.\n(b) If the two islands have different environmental conditions (different food sources, predators, or climate), natural selection could favor different traits (and their underlying alleles) on each island, causing the populations' allele frequencies to diverge as each population adapts to its own specific local environment.\n(c) A researcher could test whether individuals from the two populations, if brought together, can successfully interbreed and produce viable, fertile offspring; if they cannot (due to reproductive isolation mechanisms that have evolved during their separation), this would provide strong evidence that the two populations have diverged enough to be considered separate species under the biological species concept."
    },
    {
      id: 'bio-frq-16', difficulty: 3, unit: 8,
      prompt: "A wetland ecosystem receives runoff containing excess nitrogen and phosphorus from nearby farms.\n\n(a) Explain the immediate effect of this nutrient influx on primary producers (algae and aquatic plants) in the wetland.\n(b) Explain the subsequent effect on dissolved oxygen levels as this excess plant/algal growth eventually dies and decomposes.\n(c) Explain the resulting consequence for fish and other oxygen-dependent organisms in the wetland.",
      rubricPoints: [
        "Explains that excess nitrogen/phosphorus act as fertilizers, causing a bloom in algae/aquatic plant growth (1 pt)",
        "Explains that when this excess plant/algal matter dies, decomposer bacteria break it down, consuming dissolved oxygen in the process (1 pt)",
        "Connects this to declining dissolved oxygen levels (hypoxia) in the water (1 pt)",
        "Explains the consequence: fish and other oxygen-dependent organisms may die off or be forced to leave the area due to insufficient dissolved oxygen (1 pt)"
      ],
      sampleResponse: "(a) The excess nitrogen and phosphorus act as fertilizers, causing rapid, excessive growth (a bloom) of algae and aquatic plants in the wetland.\n(b) When this excess algal/plant biomass eventually dies, decomposer bacteria break down the dead organic matter, consuming large amounts of dissolved oxygen from the water in the process, causing dissolved oxygen levels to drop significantly.\n(c) With dissolved oxygen levels depleted, fish and other oxygen-dependent organisms may experience die-offs or be forced to leave the area in search of adequately oxygenated water, since they cannot survive in the resulting low-oxygen (hypoxic) conditions."
    }
  ]
}
