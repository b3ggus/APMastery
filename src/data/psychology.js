// AP Psychology — real College Board unit numbers/names used for authenticity.

export const psychology = {
  id: 'psychology',
  name: 'AP Psychology',
  icon: '🧠',
  accent: 'indigo',
  units: [
    {
      id: 1,
      name: 'Unit 1: Scientific Foundations of Psychology',
      questions: [
        {
          id: 'psych-1-1', difficulty: 1, type: 'mcq', topic: 'Research Methods',
          prompt: "A researcher wants to determine whether a new study technique CAUSES improved test scores. Which research method is most appropriate for establishing this causal claim?",
          choices: ['A correlational study', 'A case study', 'A controlled experiment with random assignment to treatment and control groups', 'A naturalistic observation'],
          correct: 2,
          explanation: {
            correct: "Only a controlled experiment with random assignment can support a causal claim, since randomly assigning participants to treatment (using the new technique) versus control (not using it) balances out confounding variables between groups, isolating the technique's effect on test scores.",
            wrong: { 0: "Correlational studies can identify an association between variables but cannot establish causation, since confounding variables aren't controlled through random assignment.", 1: "Case studies provide in-depth information about a single individual or small group but don't involve manipulation of variables or comparison groups needed to establish causation.", 3: "Naturalistic observation involves watching behavior in its natural setting without any manipulation, which can describe behavior but cannot establish a causal relationship." },
            tempting: "Choice A is tempting because correlational studies are common and can reveal a real relationship between technique use and scores, but without random assignment, that relationship alone can't rule out confounding variables as the true cause.",
            commonMistake: "Assuming that any research method finding a relationship between two variables can establish causation, rather than recognizing that only controlled experiments with random assignment support causal conclusions.",
            apTip: "Whenever a question asks about establishing CAUSATION specifically, look for 'controlled experiment' and 'random assignment' as the key required elements — correlational and observational methods, no matter how well-designed, cannot establish cause and effect on their own."
          }
        },
        {
          id: 'psych-1-2', difficulty: 1, type: 'mcq', topic: 'Independent & Dependent Variables',
          prompt: "In an experiment testing whether caffeine intake affects reaction time, what is the independent variable?",
          choices: ['Reaction time', 'Caffeine intake, the variable manipulated by the researcher', 'The participants themselves', 'The measurement device used'],
          correct: 1,
          explanation: {
            correct: "The independent variable is the factor the researcher deliberately manipulates (here, caffeine intake, perhaps by assigning different doses) to observe its effect on another variable.",
            wrong: { 0: "Reaction time is the outcome being MEASURED in response to the manipulation, making it the dependent variable, not the independent variable.", 2: "The participants are the subjects of the study, not a variable being manipulated or measured in this experimental design sense.", 3: "The measurement device is a tool used to record data, not itself a variable being manipulated or tested in the experiment." },
            tempting: "Choice A is the most common mix-up — confusing the independent variable (what's manipulated) with the dependent variable (what's measured as an outcome).",
            commonMistake: "Reversing independent and dependent variables — remember, the independent variable is deliberately changed/manipulated by the researcher, while the dependent variable is measured to see if it responds to that manipulation.",
            apTip: "Use this memory trick: the dependent variable 'DEPENDS ON' the independent variable — reaction time depends on (is measured in response to) caffeine intake, not the other way around."
          }
        },
        {
          id: 'psych-1-3', difficulty: 2, type: 'mcq', topic: 'Research Ethics',
          prompt: "Which of the following is a required element of ethical psychological research involving human participants, according to modern ethical guidelines?",
          choices: ['Participants must never be told the true purpose of the study, even after it concludes', 'Informed consent must be obtained before participation, and participants must be debriefed afterward, especially if deception was used', 'Deception is never permitted under any circumstances', 'Institutional Review Board (IRB) approval is optional if the researcher believes the study is low-risk'],
          correct: 1,
          explanation: {
            correct: "Modern ethical guidelines require informed consent (participants agreeing to participate with adequate information about the study, excluding only specific deceived details when necessary) before the study, and require debriefing afterward — fully explaining the study's true purpose and any deception used, and addressing any resulting concerns.",
            wrong: { 0: "Participants must eventually be informed of the study's true purpose during debriefing, even if some information (such as a deceptive cover story) was withheld during the study itself.", 2: "Deception IS sometimes permitted in psychological research when it's necessary for the study's validity and the risks are justified, but it requires special ethical justification and mandatory debriefing afterward — it isn't universally banned.", 3: "IRB (or equivalent ethics board) approval is a REQUIRED step for research involving human participants, regardless of the researcher's own risk assessment; it isn't optional or left to individual researcher discretion." },
            tempting: "Choice C is tempting because deception can sound categorically unethical, but psychology has established specific conditions under which limited deception is permitted, as long as debriefing and other protections are in place.",
            commonMistake: "Assuming deception is always strictly forbidden, rather than understanding that it's conditionally permitted under specific ethical safeguards (necessity, minimal risk, and mandatory debriefing).",
            apTip: "Remember the key ethical checklist: informed consent (with limited exceptions requiring debriefing), voluntary participation with the right to withdraw, confidentiality, minimizing harm, and mandatory debriefing whenever deception is used — IRB approval oversees all of this before a study can proceed."
          }
        },
        {
          id: 'psych-1-4', difficulty: 3, type: 'mcq', topic: 'Statistical Significance in Psychology',
          prompt: "A psychology study reports a statistically significant result at p < 0.05 for a very small effect size. What is the most appropriate interpretation?",
          choices: ['The result is definitely important and large in real-world terms, since it is statistically significant', 'Statistical significance indicates the result is unlikely due to chance alone, but a small effect size suggests the actual real-world impact/magnitude of the effect may be limited', 'A p-value below 0.05 always corresponds to a large effect size', 'Effect size and statistical significance always measure exactly the same thing'],
          correct: 1,
          explanation: {
            correct: "Statistical significance (p < 0.05) indicates the observed result is unlikely to have occurred purely by chance if the null hypothesis were true, but this is a separate consideration from effect size, which measures the actual MAGNITUDE or practical importance of the effect — a result can be statistically significant while still having a small, practically limited effect size, especially in large samples.",
            wrong: { 0: "Statistical significance alone doesn't guarantee real-world importance; a statistically significant but small effect size suggests the practical impact may be limited despite passing the significance threshold.", 2: "p-values and effect sizes measure different things and aren't directly tied to each other in this way; a very small p-value can occur even with a small effect size, especially in large samples, and vice versa.", 3: "Effect size and statistical significance are related but distinct concepts — significance addresses whether an effect is likely real (not due to chance), while effect size addresses how LARGE or practically meaningful that effect actually is." },
            tempting: "Choice A can tempt students who equate 'statistically significant' with 'important,' without recognizing that with large samples, even trivially small effects can reach statistical significance.",
            commonMistake: "Conflating statistical significance (is the effect likely real, not due to chance) with practical/real-world significance (is the effect large enough to matter), treating them as the same concept.",
            apTip: "Always discuss both statistical significance AND effect size separately when evaluating a study's importance on an FRQ — a complete, sophisticated answer distinguishes 'is this effect likely real' from 'is this effect big enough to matter in practice.'"
          }
        },
        {
          id: 'psych-1-5', difficulty: 4, type: 'mcq', topic: 'Confounding Variables in Psychological Research',
          prompt: "A study finds that students who attend a certain private tutoring program have higher test scores than those who don't. However, students who enroll in the program tend to come from families with higher incomes and more educational resources at home. What is the primary methodological concern here?",
          choices: ['The sample size is definitely too small to draw any conclusion', 'Family income/educational resources represent a confounding variable that could explain the score difference instead of (or in addition to) the tutoring program itself', 'The test used to measure scores must be invalid', 'There is no concern, since a clear correlation was found'],
          correct: 1,
          explanation: {
            correct: "Because students weren't randomly assigned to the tutoring program, family income and educational resources represent a plausible confounding variable — families with more resources might independently produce higher test scores (through other advantages) regardless of tutoring, making it unclear how much of the score difference is actually due to the tutoring program itself versus this confound.",
            wrong: { 0: "Sample size isn't identified as an issue in this scenario; the core problem is a design issue (lack of random assignment leading to a confound), not necessarily an issue of insufficient data.", 2: "There's no information suggesting the test itself is measuring the wrong construct (a validity issue); the concern here is about correctly attributing the CAUSE of the observed score difference, not about what the test measures.", 3: "A correlation being found is exactly what raises this concern — correlation alone, especially with a plausible confound present, is insufficient to conclude the tutoring program itself is responsible for the score difference." },
            tempting: "None of the distractors closely address the actual described issue if confounding variables are understood specifically, but 'correlation was found, so there's no concern' is a very common, tempting oversimplification that ignores the crucial role of confounds in observational comparisons.",
            commonMistake: "Accepting a correlational finding as sufficient evidence for a program's effectiveness without considering plausible confounding variables that could offer an alternative explanation for the observed difference.",
            apTip: "Whenever a description mentions a specific group difference (like family income) that could independently explain both variables in a correlational finding, explicitly name it as a confounding variable and explain the alternative causal pathway it suggests, rather than just saying 'correlation isn't causation' in the abstract."
          }
        },
        {
          id: 'psych-1-6', difficulty: 5, type: 'mcq', topic: 'Replication Crisis',
          prompt: "In recent years, psychology has faced significant attention to a 'replication crisis,' in which many classic findings fail to reproduce the same results when the studies are repeated by independent researchers. Which of the following best describes a major methodological contributor to this issue?",
          choices: ['Replication studies are inherently unreliable and should not be trusted more than original studies', 'Publication bias (a tendency for journals to preferentially publish statistically significant, novel findings) can result in an inflated rate of false positives making it into the published literature, which then fail to replicate', 'The replication crisis only affects fields outside of psychology', 'Original studies are always methodologically superior to replication attempts'],
          correct: 1,
          explanation: {
            correct: "Publication bias — the tendency for academic journals to favor publishing novel, statistically significant ('positive') results over null or non-significant findings — means that some published findings may be false positives (chance results that happened to reach significance), and when independent researchers later attempt to replicate these specific findings, a meaningful proportion fail to reproduce the original result, contributing significantly to the replication crisis.",
            wrong: { 0: "Well-conducted replication studies are a legitimate and important tool for verifying scientific findings; they aren't inherently less trustworthy than original studies, and are actually a core part of the scientific self-correction process.", 2: "The replication crisis has been documented as a notable issue within psychology and behavioral science specifically (alongside some other fields), not something limited to fields entirely outside of psychology.", 3: "There's no inherent reason original studies are methodologically superior to replications; in fact, well-designed, often pre-registered replication studies can sometimes have methodological advantages, such as larger sample sizes or more rigorous pre-specified analysis plans." },
            tempting: "Choice A can tempt students who assume 'the original finding must be right since it was published first,' without recognizing that original studies are just as susceptible to the same methodological issues (like publication bias and false positives) that replication efforts are specifically designed to catch.",
            commonMistake: "Assuming that original, published findings are automatically more trustworthy than replication attempts, rather than recognizing that publication bias and other systemic issues can affect the reliability of ORIGINAL findings specifically.",
            apTip: "College-level insight: naming 'publication bias' specifically (the tendency to publish novel/significant results over null results) as a driver of the replication crisis, and connecting it to how this inflates the rate of false positives making it into the literature, reflects genuine, current understanding of open science and methodology debates within psychology — a strong, specific answer for an FRQ on research methods limitations."
          }
        }
      ]
    },
    {
      id: 2,
      name: 'Unit 2: Biological Bases of Behavior',
      questions: [
        {
          id: 'psych-2-1', difficulty: 1, type: 'mcq', topic: 'Neuron Structure',
          prompt: "Which part of a neuron receives incoming signals from other neurons?",
          choices: ['Axon', 'Dendrites', 'Myelin sheath', 'Axon terminal'],
          correct: 1,
          explanation: {
            correct: "Dendrites are the branch-like extensions of a neuron specialized to receive chemical signals (neurotransmitters) from other neurons and convert them into electrical signals.",
            wrong: { 0: "The axon carries the electrical signal (action potential) away from the cell body toward the axon terminal — it transmits, not receives, in the typical direction of signal flow.", 2: "The myelin sheath is a fatty insulating layer that speeds up signal conduction along the axon; it doesn't receive signals itself.", 3: "The axon terminal is where the neuron sends signals to the next neuron by releasing neurotransmitters into the synapse, the opposite end of the process from receiving." },
            tempting: "Choice A is tempting because 'axon' and 'dendrite' are often confused as a pair, but the axon is specifically the output structure, not the input structure.",
            commonMistake: "Mixing up which structure (axon vs. dendrite) sends versus receives signals.",
            apTip: "Anchor the flow of information with a simple phrase: dendrites receive → cell body integrates → axon transmits → axon terminal releases neurotransmitter to the next neuron."
          }
        },
        {
          id: 'psych-2-2', difficulty: 2, type: 'mcq', topic: 'Neurotransmitters',
          prompt: "A drug blocks the reuptake of serotonin at the synapse. What is the most likely short-term effect on serotonin signaling?",
          choices: ['Serotonin signaling decreases because less serotonin is released', 'Serotonin signaling increases because more serotonin remains in the synapse for longer, continuing to bind receptors', 'Serotonin is destroyed more quickly by enzymes', 'The postsynaptic neuron becomes permanently unable to respond to serotonin'],
          correct: 1,
          explanation: {
            correct: "Reuptake normally clears neurotransmitter out of the synapse by pulling it back into the presynaptic neuron; blocking reuptake leaves more serotonin available in the synaptic gap for a longer time, increasing its ongoing effect on postsynaptic receptors — this is exactly how SSRIs (selective serotonin reuptake inhibitors) work.",
            wrong: { 0: "Blocking reuptake doesn't reduce how much serotonin is released initially; it affects what happens to serotonin AFTER release, extending its presence rather than reducing it.", 2: "Reuptake and enzymatic breakdown are two separate clearance mechanisms; blocking reuptake specifically slows the reuptake pathway, and doesn't speed up a different, separate enzymatic degradation process.", 3: "This describes a permanent, extreme outcome not implied by simply blocking reuptake temporarily; receptors remain functional and responsive to the now more abundant serotonin." },
            tempting: "Choice A can tempt students who assume 'blocking' something must reduce its effect overall, without tracing through the specific mechanism (reuptake clears neurotransmitter FROM the synapse, so blocking clearance increases, not decreases, its presence).",
            commonMistake: "Assuming 'blocking a process' always reduces the related substance's effect, rather than tracing the specific causal chain to see whether blocking that particular step increases or decreases the net signal.",
            apTip: "This exact mechanism (reuptake inhibition) is the basis for SSRIs, a real and frequently tested drug class — being able to explain the mechanism (not just name the drug class) earns fuller credit on FRQs about neurotransmission and drug effects."
          }
        },
        {
          id: 'psych-2-3', difficulty: 2, type: 'mcq', topic: 'Brain Structures',
          prompt: "A patient with damage to their hippocampus has significant trouble forming new long-term memories, though older memories remain largely intact. Which function is the hippocampus primarily associated with?",
          choices: ['Regulating basic survival functions like heart rate and breathing', 'Consolidating new explicit (declarative) memories', 'Controlling voluntary muscle movement', 'Processing basic visual information'],
          correct: 1,
          explanation: {
            correct: "The hippocampus plays a central role in consolidating new explicit memories (facts and events) into long-term storage; damage to it classically produces anterograde amnesia — difficulty forming new memories — while older, already-consolidated memories can remain accessible.",
            wrong: { 0: "Basic survival functions like heart rate and breathing are regulated by the brainstem/medulla, not the hippocampus.", 2: "Voluntary movement is primarily controlled by the motor cortex (frontal lobe) and cerebellum, not the hippocampus.", 3: "Basic visual processing occurs primarily in the occipital lobe's visual cortex, a different brain region entirely." },
            tempting: "None of the distractors closely resemble hippocampal function if the vocabulary is known, but a student who has memorized 'hippocampus = memory' vaguely might still mismatch it with survival or motor functions under time pressure.",
            commonMistake: "Confusing the hippocampus's specific role (forming new explicit memories) with general 'brain function' without pinpointing the precise process it supports.",
            apTip: "Learn brain structures in linked pairs of structure + specific, testable function: hippocampus (new explicit memory formation), amygdala (fear/emotional processing), cerebellum (balance/motor coordination), medulla (autonomic survival functions) — vague associations lose FRQ points."
          }
        },
        {
          id: 'psych-2-4', difficulty: 3, type: 'mcq', topic: 'Endocrine System',
          prompt: "In a stressful situation, the adrenal glands release cortisol into the bloodstream. Compared to neural (synaptic) communication, this hormonal communication is best described as:",
          choices: ['Faster and more short-lived than neural signaling', 'Slower to take effect but longer-lasting in its influence, since hormones travel through the bloodstream to widespread targets', 'Identical in speed and duration to neural signaling', 'Only capable of affecting a single, specific target cell, like a neuron'],
          correct: 1,
          explanation: {
            correct: "Hormones travel through the bloodstream rather than across a synapse, so they take longer to reach their targets, but they can affect many cells/organs throughout the body simultaneously and tend to produce longer-lasting effects than the rapid, brief signals of neural transmission.",
            wrong: { 0: "This reverses the actual comparison — neural signaling is the fast, brief one; hormonal signaling is comparatively slow to start but longer-lasting.", 2: "Hormonal and neural communication differ significantly in both speed and duration; they are not equivalent mechanisms.", 3: "Hormones are actually notable for their broad, widespread reach, affecting many different target cells/organs throughout the body that have the appropriate receptors, unlike the highly specific point-to-point connection of a single synapse." },
            tempting: "Choice A can tempt students who don't carefully compare the two communication systems and default to assuming 'faster is always better/more advanced,' without recalling the actual biological trade-off between the two systems.",
            commonMistake: "Not clearly contrasting the specific trade-offs (speed vs. duration vs. reach) between neural and hormonal communication systems.",
            apTip: "Memorize this contrast as a direct comparison: neural = fast, brief, specific/localized; hormonal (endocrine) = slower onset, longer-lasting, widespread/systemic — FRQs often ask you to compare these two systems explicitly."
          }
        },
        {
          id: 'psych-2-5', difficulty: 4, type: 'mcq', topic: 'Neuroplasticity',
          prompt: "A stroke patient loses function in a brain area controlling hand movement, but over months of therapy, a neighboring brain area gradually takes over some of that function. This phenomenon is best explained by:",
          choices: ['The brain regenerating the exact damaged neurons in their original location', 'Neuroplasticity, in which the brain reorganizes neural connections and can shift functions to intact areas in response to damage', 'The action potential threshold decreasing permanently in all neurons', 'A single neurotransmitter fully compensating for the lost brain tissue'],
          correct: 1,
          explanation: {
            correct: "Neuroplasticity refers to the brain's ability to reorganize itself by forming new neural connections, and in cases of damage, nearby or even distant brain regions can sometimes take over functions previously handled by the damaged area — a well-documented basis for rehabilitation therapy after strokes.",
            wrong: { 0: "Mature neurons in the central nervous system generally do not regenerate in their exact original location after significant damage; recovery instead relies on surrounding tissue reorganizing and adapting.", 2: "This describes a general change in neuron excitability, not the specific mechanism of functional reorganization/reassignment described in this scenario.", 3: "Recovery of function like this involves complex reorganization of neural circuits and connections, not simply one neurotransmitter substituting for an entire lost brain region's function." },
            tempting: "Choice A is tempting because 'the brain healing itself' sounds intuitive, but the specific, correct mechanism is reorganization/reassignment of function (neuroplasticity), not literal regeneration of the exact original neurons.",
            commonMistake: "Conflating general ideas of 'brain healing' with the specific, testable concept of neuroplasticity as reorganization of neural connections and functional reassignment.",
            apTip: "Use the specific vocabulary word 'neuroplasticity' explicitly on FRQs discussing recovery from brain damage, and describe it as the reorganization of neural connections/pathways rather than regeneration or a vague 'healing' process."
          }
        },
        {
          id: 'psych-2-6', difficulty: 5, type: 'mcq', topic: 'Twin Studies & Heritability',
          prompt: "A twin study finds a concordance rate of 70% for a trait in monozygotic (identical) twins and 40% in dizygotic (fraternal) twins. What is the most appropriate conclusion?",
          choices: ['The trait is entirely determined by genetics, since monozygotic twins share 100% of their genes', 'The trait shows evidence of a genetic influence, since monozygotic twins (who share more genetic material) show higher concordance, but the gap also implies environmental factors play a role since concordance isn\'t 100%', 'The trait is entirely caused by environment, since concordance isn\'t 100% even in monozygotic twins', 'Concordance rates cannot provide any information about genetic versus environmental influence'],
          correct: 1,
          explanation: {
            correct: "A higher concordance rate in monozygotic twins (who share virtually all their genes) compared to dizygotic twins (who share about half, like typical siblings) suggests a meaningful genetic contribution to the trait; however, since monozygotic concordance is well below 100%, environmental factors (or gene-environment interactions) must also play a substantial role — twin studies point to both influences working together, not a single determining cause.",
            wrong: { 0: "If genetics fully determined the trait, monozygotic twins (100% shared genes) would be expected to show 100% concordance, not 70% — the shortfall from 100% specifically signals additional non-genetic influence.", 2: "The higher concordance specifically in monozygotic vs. dizygotic twins is itself evidence of a genetic contribution; if environment alone caused the trait, we wouldn't expect this genetic-relatedness-based difference in concordance rates.", 3: "This is incorrect — twin studies are specifically designed and widely used in psychology to estimate the relative contributions of genetic and environmental factors by comparing concordance rates between twin types." },
            tempting: "Choices A and C both represent the classic 'nature vs. nurture' oversimplification trap — treating a trait as caused entirely by one factor, when twin study data of this kind is specifically evidence for a combination (a gene-environment interplay), not a single determining cause.",
            commonMistake: "Interpreting any genetic influence evidence as 'fully genetic' (or, conversely, treating anything less than 100% concordance as 'fully environmental'), rather than recognizing that most complex traits reflect a mix of both influences.",
            apTip: "College-level insight: this comparison logic (MZ vs. DZ concordance difference as evidence of heritability, while incomplete concordance signals environmental/gene-environment interaction) is the actual statistical basis of behavioral genetics research — explicitly walking through both halves of this reasoning on an FRQ (genetic evidence AND environmental evidence) is what distinguishes a complete response from a partial one."
          }
        }
      ]
    },
    {
      id: 3,
      name: 'Unit 3: Sensation & Perception',
      questions: [
        {
          id: 'psych-3-1', difficulty: 1, type: 'mcq', topic: 'Absolute Threshold',
          prompt: "The absolute threshold is best defined as:",
          choices: ['The point at which a stimulus becomes uncomfortably intense', 'The minimum amount of stimulus energy needed for a person to detect a stimulus 50% of the time', 'The exact amount of change needed for a person to always notice a difference between two stimuli', 'The maximum intensity a sensory system can process without damage'],
          correct: 1,
          explanation: {
            correct: "The absolute threshold is defined as the minimum stimulus intensity needed for a person to detect the stimulus's presence at least 50% of the time it's presented, reflecting basic sensory detection sensitivity.",
            wrong: { 0: "This describes something closer to a pain or discomfort threshold, not the absolute threshold for basic detection.", 2: "This describes the difference threshold (or just noticeable difference), which measures the smallest detectable change BETWEEN two stimuli, not the minimum detectable presence of a single stimulus.", 3: "This describes an upper intensity/damage limit, not the minimum detection threshold that 'absolute threshold' specifically refers to." },
            tempting: "Choice C is tempting because it's a similarly-named, related concept (difference threshold), but it addresses detecting CHANGE between two stimuli, not the minimum detectable presence of one stimulus.",
            commonMistake: "Confusing absolute threshold (minimum detectable stimulus) with difference threshold/just noticeable difference (minimum detectable change between two stimuli).",
            apTip: "Keep the two threshold terms clearly separate: absolute threshold = smallest detectable STIMULUS; difference threshold (JND) = smallest detectable CHANGE between two stimuli — and remember absolute threshold is defined at the 50% detection point, not 100%."
          }
        },
        {
          id: 'psych-3-2', difficulty: 2, type: 'mcq', topic: "Weber's Law",
          prompt: "According to Weber's Law, if you can just barely notice the difference between a 10 lb weight and an 11 lb weight, what would you expect regarding a 100 lb weight?",
          choices: ['You would notice a difference with just 1 additional pound added, same as with the 10 lb weight', 'You would need a proportionally larger amount added (not just 1 lb) to notice a difference, since Weber\'s Law states the just-noticeable-difference is a constant proportion of the original stimulus', 'You would never be able to notice any difference no matter how much weight is added', 'The just-noticeable-difference is always exactly 1 lb regardless of the starting weight'],
          correct: 1,
          explanation: {
            correct: "Weber's Law states that the just-noticeable-difference (JND) is a constant PROPORTION (percentage) of the original stimulus, not a constant absolute amount; if a 1 lb change is noticeable at 10 lbs (a 10% change), then at 100 lbs, you would need a proportionally larger change (about 10 lbs, also a 10% change) to notice a difference, not just 1 lb.",
            wrong: { 0: "This assumes the JND is a constant absolute amount, but Weber's Law specifically states it's a constant PROPORTION, meaning the actual amount needed increases as the base stimulus intensity increases.", 2: "Differences CAN still be noticed at higher stimulus intensities; it just requires a proportionally larger absolute change according to Weber's Law, not that detection becomes impossible.", 3: "This directly contradicts Weber's Law, which specifically predicts that the JND is NOT a constant absolute amount but scales proportionally with the magnitude of the original stimulus." },
            tempting: "Choice A is tempting because it feels intuitive that '1 lb should always be noticeable if it was noticeable before,' but Weber's Law specifically demonstrates that detection sensitivity is relative to stimulus magnitude, not an absolute fixed amount.",
            commonMistake: "Assuming the just-noticeable-difference is a fixed, constant absolute amount rather than understanding Weber's Law's core insight that it's a constant PROPORTION/percentage of the original stimulus.",
            apTip: "State Weber's Law explicitly as a ratio/proportion relationship on FRQs: 'the JND is a constant percentage of the original stimulus, not a constant absolute amount' — and be ready to apply this proportionally to a specific numeric example, as this question requires."
          }
        },
        {
          id: 'psych-3-3', difficulty: 2, type: 'mcq', topic: 'Signal Detection Theory',
          prompt: "According to signal detection theory, a person's response to a faint stimulus depends not just on sensory sensitivity but also on:",
          choices: ['The exact wavelength of light involved, regardless of any other factor', 'Their response criteria/bias, such as motivation and expectations, which influence the threshold at which they decide a stimulus is present', 'Only the physical intensity of the stimulus, with no psychological component', 'Whether the stimulus is auditory or visual, which is the only relevant factor'],
          correct: 1,
          explanation: {
            correct: "Signal detection theory proposes that detecting a stimulus depends on both sensory sensitivity (a person's actual detection ability) AND a separate decision-making component — the person's response criteria or bias, influenced by factors like motivation, expectations, and the costs/benefits of different types of errors (false alarms vs. misses).",
            wrong: { 0: "Wavelength is a specific physical property relevant to visual stimuli in particular, but it isn't the general psychological factor (response bias/criteria) that signal detection theory specifically emphasizes as a determinant of detection decisions.", 2: "Signal detection theory specifically argues AGAINST a purely physical/sensory explanation, emphasizing that psychological factors (motivation, expectation, response bias) also play a significant role in detection decisions.", 3: "The sensory modality (auditory vs. visual) isn't the core factor signal detection theory addresses; its key insight applies generally across modalities, focusing on the interplay between sensitivity and response bias." },
            tempting: "Choice C represents the intuitive but incomplete 'purely physical' view of sensation that signal detection theory specifically challenges by adding the psychological, decision-making dimension.",
            commonMistake: "Treating stimulus detection as purely a function of physical stimulus intensity/sensory sensitivity, without accounting for the psychological decision-making bias component that signal detection theory specifically highlights.",
            apTip: "On FRQs about signal detection theory, explicitly name BOTH components: sensory sensitivity (ability to detect) AND response criteria/bias (willingness to report detection, influenced by motivation/expectation/context) — mentioning only one component is an incomplete answer."
          }
        },
        {
          id: 'psych-3-4', difficulty: 3, type: 'mcq', topic: 'Gestalt Principles',
          prompt: "When looking at a dotted outline that forms a recognizable shape (like a circle made of separate dots), people tend to perceive it as a complete, continuous shape rather than a series of disconnected dots. This best illustrates the Gestalt principle of:",
          choices: ['Figure-ground', 'Closure, the tendency to perceive incomplete figures as complete, whole objects', 'Proximity', 'Similarity'],
          correct: 1,
          explanation: {
            correct: "Closure is the Gestalt principle describing the tendency to mentally fill in gaps in an incomplete figure, perceiving it as a whole, continuous shape rather than a collection of disconnected fragments — exactly as described with the dotted circle outline.",
            wrong: { 0: "Figure-ground refers to the tendency to organize a visual scene into a distinct object (figure) that stands out against a background (ground), a different organizational process from filling in gaps in an incomplete shape.", 2: "Proximity refers to perceiving objects that are physically close together as belonging to a group, a different principle from filling in the gaps within a single incomplete shape.", 3: "Similarity refers to perceiving objects that share visual characteristics (like color or shape) as part of the same group, a different Gestalt principle from perceptual completion of a single incomplete figure." },
            tempting: "None of the alternative Gestalt principles closely match 'filling in gaps to perceive completeness' if each principle's specific definition is known precisely, but blending together the various Gestalt principles (all covered in the same unit) is common without distinct anchor examples for each.",
            commonMistake: "Blurring together the various Gestalt principles (closure, proximity, similarity, figure-ground, continuity) without a clear, distinct example anchored to each one.",
            apTip: "Attach one clear, memorable example to each Gestalt principle: closure = mentally completing a dotted/incomplete outline; proximity = dots grouped by closeness perceived as clusters; similarity = same-colored items perceived as a group; figure-ground = a vase/two-faces illusion."
          }
        },
        {
          id: 'psych-3-5', difficulty: 4, type: 'mcq', topic: 'Depth Perception Cues',
          prompt: "A person closes one eye and still perceives that a nearby object appears larger and a distant object appears smaller, using the relative size of familiar objects to judge distance. This is an example of:",
          choices: ['A binocular depth cue, since both eyes are typically needed for depth perception', 'A monocular depth cue, since this specific cue (relative size) can be perceived using only one eye', 'Retinal disparity', 'Convergence'],
          correct: 1,
          explanation: {
            correct: "Relative size is a monocular depth cue — a cue that can be perceived using just one eye — because it relies on comparing the size of an object (often against known/familiar objects) rather than requiring the comparison of two slightly different images from both eyes.",
            wrong: { 0: "This scenario specifically demonstrates that only ONE eye is needed to use the relative size cue, which is the defining feature of a monocular (not binocular) cue.", 2: "Retinal disparity is specifically a BINOCULAR cue, based on the slightly different images received by the two eyes, which requires both eyes functioning together — the opposite of what's described in this one-eyed scenario.", 3: "Convergence is also a BINOCULAR cue, based on the inward turning of both eyes when focusing on a close object; it specifically requires both eyes working together, not applicable to a one-eyed perception scenario." },
            tempting: "Choice A is tempting because depth perception in general is often (correctly) associated with binocular vision, but certain specific depth cues (like relative size, linear perspective, interposition, texture gradient) work perfectly well with just one eye and are specifically classified as monocular.",
            commonMistake: "Assuming ALL depth perception cues require two eyes (binocular vision), rather than recognizing that several specific cues (monocular cues) work with just one eye.",
            apTip: "Memorize specific examples in each category: binocular cues = retinal disparity, convergence (both REQUIRE two eyes); monocular cues = relative size, interposition/overlap, linear perspective, texture gradient (all work with just ONE eye) — matching the SPECIFIC cue named in a question to its correct category is what's actually tested."
          }
        },
        {
          id: 'psych-3-6', difficulty: 5, type: 'mcq', topic: 'Perceptual Set & Top-Down Processing',
          prompt: "Two people are shown the exact same ambiguous image. One, who was just told a story about farm animals, sees a cow; the other, who was just told a story about horses, sees a horse-like figure in the same image. This phenomenon best illustrates:",
          choices: ['Bottom-up processing, since the raw sensory data alone determined their different perceptions', 'A perceptual set, in which prior expectations/context (top-down processing) influence how ambiguous sensory information is interpreted', 'Sensory adaptation, since repeated exposure changed their sensitivity to the image', 'Absolute threshold differences between the two individuals'],
          correct: 1,
          explanation: {
            correct: "A perceptual set is a mental predisposition or expectation, often created by prior context (like hearing a specific story), that influences how ambiguous sensory information is interpreted — this reflects top-down processing, where higher-level expectations/knowledge shape the interpretation of raw sensory input, exactly as seen when the same image is perceived differently based on prior context.",
            wrong: { 0: "Bottom-up processing would mean interpretation is built purely from the raw sensory data itself, without any influence from prior knowledge/expectations; but here, the SAME raw sensory data (identical image) led to DIFFERENT interpretations based on differing prior context, which is the opposite pattern, indicating top-down processing instead.", 2: "Sensory adaptation refers to decreased sensitivity to an UNCHANGING, constant stimulus over time (like no longer smelling a scent you've been in a room with for a while), a different phenomenon from context influencing interpretation of an ambiguous image.", 3: "Absolute threshold refers to the minimum detectable intensity of a stimulus, unrelated to how prior context and expectations shape interpretation of an already-clearly-visible ambiguous image." },
            tempting: "Choice A can tempt students who focus only on the fact that both people saw the 'same image' (same sensory input), without recognizing that their DIFFERENT interpretations of that identical input is exactly the signature of top-down processing (expectation shaping perception) rather than bottom-up processing (raw data alone determining perception).",
            commonMistake: "Not recognizing that identical sensory input producing DIFFERENT perceptions across individuals is specifically evidence of top-down processing/perceptual set, rather than assuming perception is always purely data-driven (bottom-up).",
            apTip: "College-level insight: explicitly use both terms together on an FRQ — 'perceptual set' (the specific expectation/bias created by context) and 'top-down processing' (the general cognitive mechanism by which prior knowledge/expectation shapes interpretation of sensory data) — using just one term without the other is often considered a less complete response."
          }
        }
      ]
    },
    {
      id: 4,
      name: 'Unit 4: Learning',
      questions: [
        {
          id: 'psych-4-1', difficulty: 1, type: 'mcq', topic: 'Classical Conditioning',
          prompt: "In Pavlov's classic experiment, a bell was repeatedly paired with food until dogs salivated at the sound of the bell alone. In this scenario, the bell is best classified as the:",
          choices: ['Unconditioned stimulus', 'Conditioned stimulus', 'Unconditioned response', 'Conditioned response'],
          correct: 1,
          explanation: {
            correct: "The bell starts as a neutral stimulus that, through repeated pairing with food (the unconditioned stimulus), becomes a conditioned stimulus — one that now triggers salivation on its own after learning has occurred.",
            wrong: { 0: "The unconditioned stimulus is the food, which naturally and automatically triggers salivation without any learning required.", 2: "The unconditioned response is the natural, unlearned salivation to food itself, not the bell.", 3: "The conditioned response is the salivation TO THE BELL after learning — that's the response, whereas the bell itself is the stimulus that triggers it." },
            tempting: "Choice A is tempting since 'stimulus' language is shared, but the key distinguishing feature is that the unconditioned stimulus (food) triggers a response naturally, without any learning, while the bell only does so after conditioning.",
            commonMistake: "Confusing the stimulus (what triggers the response) with the response (the reaction itself), or confusing the natural/unlearned pairing with the newly learned one.",
            apTip: "Keep the four terms straight with this pattern: unconditioned stimulus (naturally triggers) → unconditioned response (natural reaction); conditioned stimulus (learned trigger) → conditioned response (learned reaction, usually the same behavior as the UR)."
          }
        },
        {
          id: 'psych-4-2', difficulty: 2, type: 'mcq', topic: 'Operant Conditioning',
          prompt: "A student receives praise from a teacher every time they raise their hand before speaking, and the behavior increases in frequency over time. This is an example of:",
          choices: ['Negative reinforcement', 'Positive reinforcement', 'Positive punishment', 'Negative punishment'],
          correct: 1,
          explanation: {
            correct: "Positive reinforcement involves ADDING a desirable stimulus (praise) after a behavior, which INCREASES the frequency of that behavior — exactly what's described here.",
            wrong: { 0: "Negative reinforcement involves REMOVING an aversive stimulus to increase a behavior (e.g., turning off an annoying alarm when you get up), not adding something pleasant.", 2: "Punishment (positive or negative) is meant to DECREASE behavior, not increase it as seen here.", 3: "Negative punishment involves REMOVING something desirable to decrease behavior — the opposite of both the direction (addition, not removal) and outcome (increase, not decrease) described in this scenario." },
            tempting: "Choice A is the single most common point of confusion in this entire topic — students often think 'negative' means 'bad outcome' rather than its technical meaning of 'removing/taking away' something.",
            commonMistake: "Interpreting 'positive' and 'negative' in operant conditioning as 'good' and 'bad' outcomes, rather than their technical meanings: positive = adding something, negative = removing something.",
            apTip: "Build a 2x2 grid and memorize it explicitly: positive reinforcement (add pleasant, behavior increases), negative reinforcement (remove unpleasant, behavior increases), positive punishment (add unpleasant, behavior decreases), negative punishment (remove pleasant, behavior decreases)."
          }
        },
        {
          id: 'psych-4-3', difficulty: 2, type: 'mcq', topic: 'Schedules of Reinforcement',
          prompt: "A slot machine pays out after an unpredictable number of pulls, sometimes after 3 pulls, sometimes after 15. This reflects which schedule of reinforcement, and why is it particularly resistant to extinction?",
          choices: ['Fixed ratio; because the number of responses needed is always the same', 'Variable ratio; because the unpredictability of reward keeps behavior high and makes it hard to detect when reinforcement has actually stopped', 'Fixed interval; because reinforcement depends on a set amount of time passing', 'Variable interval; because reinforcement depends on an unpredictable amount of time passing'],
          correct: 1,
          explanation: {
            correct: "A variable ratio schedule reinforces behavior after an unpredictable NUMBER of responses (not a fixed count or a time interval); this unpredictability is exactly why it produces high, steady response rates and is especially resistant to extinction — since the organism can't easily tell when reinforcement has genuinely stopped versus just being due for a longer gap, as in slot machines.",
            wrong: { 0: "Fixed ratio schedules require a SET, predictable number of responses (e.g., every 5th pull always pays), which doesn't match the described unpredictability.", 2: "Fixed interval schedules are based on a set amount of TIME passing (not number of responses), which doesn't match a slot machine that pays based on number of pulls.", 3: "Variable interval schedules are based on an unpredictable amount of TIME (not number of responses/pulls), which is a different dimension than what's described (pulls, not time, is what matters for slot machines)." },
            tempting: "Choice D is tempting because it also involves 'variable' unpredictability, but the key distinguishing detail is that slot machines depend on NUMBER of pulls (a ratio schedule), not on elapsed TIME (an interval schedule).",
            commonMistake: "Correctly identifying 'variable' as the unpredictability type, but then misidentifying whether the schedule is based on responses (ratio) or time (interval).",
            apTip: "Always identify BOTH dimensions of a reinforcement schedule question separately: (1) ratio [responses] vs. interval [time], and (2) fixed [predictable] vs. variable [unpredictable] — four total combinations, and mixing up either dimension changes the answer."
          }
        },
        {
          id: 'psych-4-4', difficulty: 3, type: 'mcq', topic: 'Observational Learning',
          prompt: "In Bandura's Bobo doll experiment, children who watched an adult model aggressively hit a doll (and be rewarded, or at least not punished) were more likely to imitate that aggression later. This best demonstrates:",
          choices: ['Classical conditioning through stimulus pairing', 'Observational learning, in which behaviors can be acquired by watching and imitating a model, without direct reinforcement of the observer', 'Operant conditioning through the child\'s own direct reinforcement history', 'Instinctive behavior unrelated to learning'],
          correct: 1,
          explanation: {
            correct: "Bandura's experiment is a foundational demonstration of observational learning (also called modeling): children acquired a new behavior (aggression) simply by watching a model perform it, without needing to be directly reinforced themselves for that behavior beforehand.",
            wrong: { 0: "No neutral stimulus is being paired with an automatic, reflexive response here; this isn't a classical conditioning stimulus-pairing scenario.", 2: "The children themselves were not directly reinforced for aggression in this experiment; the KEY point is that they learned by watching someone else's consequences (or lack of punishment), not through their own direct reinforcement history.", 3: "This behavior was clearly learned through observation rather than being an innate, unlearned instinct — the whole point of the study was to demonstrate a learning mechanism." },
            tempting: "Choice C is tempting because operant conditioning is a very familiar concept involving reinforcement, but the critical distinguishing feature here is that the CHILD wasn't directly reinforced — they learned vicariously by observing someone else's experience.",
            commonMistake: "Not distinguishing between an individual's own direct reinforcement history (operant conditioning) and learning that occurs vicariously through watching a model's behavior and its consequences (observational learning).",
            apTip: "Always name Bandura and the Bobo doll experiment explicitly when discussing observational learning on an FRQ — this specific, well-known study is the go-to concrete example graders expect to see cited for this concept."
          }
        },
        {
          id: 'psych-4-5', difficulty: 4, type: 'mcq', topic: 'Biological Preparedness',
          prompt: "Rats can be conditioned relatively easily to avoid a taste associated with subsequent nausea, even with a long delay between eating and getting sick, but have much more difficulty learning to associate a taste with an electric shock. This phenomenon is best explained by:",
          choices: ['Rats being physically incapable of learning any association involving shock', 'Biological preparedness — species evolve to more readily learn associations that are ecologically relevant to survival, such as taste-illness links, over arbitrary pairings', 'Classical conditioning requiring the two stimuli to always occur simultaneously with no delay', 'Operant conditioning being the only learning mechanism at work here'],
          correct: 1,
          explanation: {
            correct: "Biological preparedness explains that organisms are evolutionarily predisposed to learn certain associations more readily than others because those associations were adaptively relevant to their survival — rats naturally rely heavily on taste to avoid poisonous foods, so taste-illness associations form easily even with a delay, while taste-shock associations (not ecologically relevant to how shocks are naturally experienced) are much harder to learn.",
            wrong: { 0: "Rats CAN learn taste-shock associations under some conditions; the issue is that it is much more DIFFICULT and requires more trials/stronger conditions, not that it is biologically impossible outright.", 2: "This scenario is a classic counterexample to that idea — taste-aversion learning (the Garcia effect) is well known for working even with substantial delays between the taste and the illness, contradicting a strict simultaneity requirement.", 3: "This scenario describes classical conditioning (pairing a taste with an internal illness response or shock), not primarily operant conditioning based on reinforcement of a voluntary behavior." },
            tempting: "Choice C is a very reasonable-sounding general rule about classical conditioning (that pairings typically need close timing to be learned), but taste-aversion learning is specifically famous for being an exception to that general rule, which is exactly why biological preparedness is needed to explain it.",
            commonMistake: "Applying general classical conditioning rules (like the need for close temporal pairing) uniformly to all cases, without accounting for evolved, biologically prepared exceptions like taste-aversion learning.",
            apTip: "College-level insight: this phenomenon is specifically known as the 'Garcia effect' (taste aversion learning) — naming it directly, along with the concept of biological preparedness, demonstrates command of a nuanced exception to general conditioning principles that AP Psych explicitly tests."
          }
        },
        {
          id: 'psych-4-6', difficulty: 5, type: 'mcq', topic: 'Cognitive Maps & Latent Learning',
          prompt: "In a classic experiment, rats explored a maze with no reward for several days, then a food reward was introduced. These rats reached the reward as quickly on the very first rewarded trial as rats that had been reinforced with food throughout all their earlier maze runs. This result is best explained by:",
          choices: ['The rats had learned nothing until the reward was introduced', 'Latent learning — the rats had already formed a cognitive map of the maze during unreinforced exploration, and this learning simply wasn\'t behaviorally expressed until a reward gave them a reason to demonstrate it', 'Classical conditioning between the maze and the food', 'Operant conditioning requiring immediate reinforcement to produce any learning at all'],
          correct: 1,
          explanation: {
            correct: "This is Tolman's classic demonstration of latent learning: the rats were learning the maze's spatial layout (forming a cognitive map) all along during the unreinforced exploration period, even though this learning wasn't outwardly visible in their behavior until a reward gave them motivation to use that knowledge efficiently.",
            wrong: { 0: "The rats' rapid improvement once rewarded (matching rats reinforced the whole time) is strong evidence that learning WAS occurring earlier, even without any visible behavioral change during the unreinforced phase — learning and the performance/expression of that learning are shown here to be separable.", 2: "This scenario centers on spatial/cognitive learning about the maze's layout, not a classical conditioning pairing between two specific stimuli.", 3: "This result is actually a direct challenge to any claim that reinforcement must be immediate (or even present at all) for learning to occur — the whole point of the classic finding is that learning happened without reinforcement, contradicting a strict reinforcement-required view." },
            tempting: "Choice D represents the traditional behaviorist assumption this experiment was specifically designed to challenge — that reinforcement is strictly necessary for any learning to occur — making it a natural, tempting-but-incorrect default answer for students steeped only in classical operant conditioning theory.",
            commonMistake: "Assuming that behavior change is the only valid evidence of learning, rather than recognizing that learning (an internal cognitive change) and performance (its outward behavioral expression) can be dissociated, as this experiment demonstrates.",
            apTip: "College-level insight: name both 'latent learning' and 'cognitive map' explicitly, and attribute the finding to Tolman — this experiment is a foundational piece of evidence for cognitive approaches to learning that go beyond strict behaviorism, and is a favorite AP Psych FRQ topic for testing the learning-vs-performance distinction."
          }
        }
      ]
    },
    {
      id: 5,
      name: 'Unit 5: Cognitive Psychology',
      questions: [
        {
          id: 'psych-5-1', difficulty: 1, type: 'mcq', topic: 'Memory Stages',
          prompt: "According to the classic information-processing model of memory, information first enters which memory store before potentially moving on to short-term memory?",
          choices: ['Long-term memory', 'Sensory memory', 'Working memory', 'Procedural memory'],
          correct: 1,
          explanation: {
            correct: "Sensory memory is the very brief initial storage of incoming sensory information (like a fleeting visual or auditory impression) before it is either lost or attended to and passed along into short-term/working memory.",
            wrong: { 0: "Long-term memory is the final, more permanent storage stage, reached only after information has been processed through short-term/working memory first, not the very first stop.", 2: "Working memory is essentially an active, effortful version of short-term memory, which comes AFTER sensory memory in the classic sequence.", 3: "Procedural memory is a specific TYPE of long-term memory (for skills/habits), not an early processing stage in this model." },
            tempting: "Choice C is tempting since working memory is a commonly discussed early stage, but the classic model places sensory memory as the very first, extremely brief stop before working/short-term memory.",
            commonMistake: "Skipping sensory memory and starting the memory sequence at short-term/working memory instead.",
            apTip: "Memorize the classic three-stage sequence in strict order: sensory memory (extremely brief) → short-term/working memory (limited capacity, ~20-30 seconds without rehearsal) → long-term memory (potentially permanent, large capacity)."
          }
        },
        {
          id: 'psych-5-2', difficulty: 2, type: 'mcq', topic: 'Encoding & Retrieval',
          prompt: "A student studies for an exam in the same room where they will take the test, and performs better than if they had studied elsewhere. This phenomenon is best explained by:",
          choices: ['State-dependent memory', 'Context-dependent memory, in which retrieval is improved when the physical environment during encoding matches the environment during retrieval', 'The misinformation effect', 'Proactive interference'],
          correct: 1,
          explanation: {
            correct: "Context-dependent memory refers to improved recall when the external physical environment (like a specific room) present during encoding matches the environment present during retrieval, since environmental cues become associated with the encoded information and can help trigger recall.",
            wrong: { 0: "State-dependent memory refers to matching INTERNAL states (like mood or being under the influence of a substance) between encoding and retrieval, not the external physical environment described here.", 2: "The misinformation effect refers to memory being distorted by exposure to misleading information after an event, an unrelated phenomenon to environmental matching.", 3: "Proactive interference refers to older memories interfering with the ability to learn or recall newer information, a different memory phenomenon entirely from environmental context matching." },
            tempting: "Choice A is tempting because state-dependent and context-dependent memory are closely related, parallel concepts, but the key distinguishing detail is INTERNAL state (mood, intoxication) versus EXTERNAL physical environment (the room) — this scenario specifically describes the external, physical case.",
            commonMistake: "Confusing state-dependent memory (internal states like mood/arousal) with context-dependent memory (external physical environment).",
            apTip: "Keep the distinction concrete: context-dependent = same ROOM/place helps recall; state-dependent = same MOOD or physiological state (e.g., studying while caffeinated, testing while caffeinated) helps recall."
          }
        },
        {
          id: 'psych-5-3', difficulty: 2, type: 'mcq', topic: 'Problem Solving Heuristics',
          prompt: "A person estimates the likelihood of a plane crash as higher than it statistically is, because news coverage of plane crashes is vivid and memorable. This is an example of:",
          choices: ['The representativeness heuristic', 'The availability heuristic, judging the likelihood of an event based on how easily relevant examples come to mind', 'Confirmation bias', 'Functional fixedness'],
          correct: 1,
          explanation: {
            correct: "The availability heuristic involves judging the probability or frequency of an event based on how readily examples come to mind; vivid, memorable media coverage of plane crashes makes them easier to recall, leading to an overestimate of their actual statistical likelihood.",
            wrong: { 0: "The representativeness heuristic involves judging likelihood based on how similar something is to a typical prototype or category, not based on how easily examples are recalled from memory.", 2: "Confirmation bias involves favoring information that confirms pre-existing beliefs while ignoring contradicting evidence, a different cognitive bias from availability-based probability estimation.", 3: "Functional fixedness refers to difficulty seeing an object's potential uses beyond its traditional function, an unrelated concept to probability estimation biases." },
            tempting: "Choice A is a common mix-up, since both are heuristics covered together, but representativeness is about similarity-based category judgments (e.g., 'does this person seem like a stereotypical librarian'), while availability is specifically about memorability/ease of recall driving probability judgments.",
            commonMistake: "Confusing the representativeness heuristic (similarity to a prototype) with the availability heuristic (ease of recalling examples) since both are probability-judgment shortcuts taught together.",
            apTip: "Anchor each heuristic to its own memorable example: availability = overestimating plane crash risk due to vivid news coverage; representativeness = assuming a quiet, bookish person is 'more likely' to be a librarian than a salesperson, ignoring actual base rates of each profession."
          }
        },
        {
          id: 'psych-5-4', difficulty: 3, type: 'mcq', topic: 'Language Development & Cognition',
          prompt: "The linguistic relativity hypothesis (Sapir-Whorf hypothesis) proposes that:",
          choices: ['Language has no meaningful influence on thought or perception', 'The structure and vocabulary of a person\'s language can influence how they think about and perceive the world', 'All languages share identical grammatical structures at a deep level', 'Thought is entirely independent of and precedes language in all cases'],
          correct: 1,
          explanation: {
            correct: "Linguistic relativity proposes that the specific language a person speaks — its vocabulary, grammar, and categories — can shape or influence their cognitive processes, perception, and thought patterns, rather than language being a neutral, non-influential tool that simply expresses pre-existing thoughts.",
            wrong: { 0: "This directly contradicts the hypothesis, which specifically claims language DOES meaningfully influence thought, not that it has no influence.", 2: "This describes a different, related but distinct linguistic idea (universal grammar, associated with Chomsky) about shared deep structures across languages, not the linguistic relativity hypothesis about language shaping thought.", 3: "This is the opposite of what linguistic relativity proposes; strict versions of the hypothesis suggest language can precede and shape thought, rather than thought being entirely independent of language." },
            tempting: "Choice C is tempting because it's another real, related linguistics concept (universal grammar) covered in similar contexts, but it makes a different claim (shared underlying structure across languages) rather than addressing whether language influences thought.",
            commonMistake: "Confusing linguistic relativity (language shapes thought) with universal grammar (a proposed shared deep structure underlying all languages) — both are real linguistics concepts but make different claims.",
            apTip: "Attach the correct named psychologists/linguists to each theory: linguistic relativity = Sapir-Whorf hypothesis (language shapes thought); a different, contrasting idea is Chomsky's universal grammar (innate shared grammatical structure) — keep them as separate concepts with separate names."
          }
        },
        {
          id: 'psych-5-5', difficulty: 4, type: 'mcq', topic: 'Working Memory Model',
          prompt: "A person is asked to remember a list of digits while simultaneously mentally rotating a visual shape. According to Baddeley's working memory model, why might performing both tasks simultaneously be relatively manageable compared to two verbal tasks at once?",
          choices: ['Working memory has unlimited capacity for any combination of tasks', 'The two tasks draw on separate subsystems (the phonological loop for verbal/digit information and the visuospatial sketchpad for visual/spatial information), so they compete less for shared cognitive resources', 'Only one task can actually be performed at a time, so this scenario is not realistically possible', 'Long-term memory handles both tasks simultaneously, bypassing working memory entirely'],
          correct: 1,
          explanation: {
            correct: "Baddeley's model proposes multiple specialized subsystems within working memory: the phonological loop handles verbal/auditory information (like digit lists), while the visuospatial sketchpad handles visual/spatial information (like mental rotation); because these two tasks draw on different subsystems, they compete less for shared resources than two tasks relying on the SAME subsystem would (e.g., two simultaneous verbal tasks both competing for the phonological loop).",
            wrong: { 0: "Working memory is well-documented to have quite LIMITED capacity overall; the relative ease here comes from using separate subsystems, not from unlimited capacity.", 2: "This scenario (simultaneously holding digits while performing visual rotation) is a real, classic type of dual-task experiment actually used in cognitive psychology research, and is realistically possible, especially compared to two competing verbal tasks.", 3: "This scenario specifically demonstrates working memory processes (temporary, active manipulation of information), not long-term memory storage." },
            tempting: "Choice A can tempt students who notice that performing two tasks at once is 'possible' here and overgeneralize that to mean capacity must be unlimited, rather than recognizing the specific reason (separate subsystems) that makes THIS particular combination more manageable.",
            commonMistake: "Not recognizing that working memory's limitations are subsystem-specific (phonological loop and visuospatial sketchpad have separate limited capacities) rather than working memory having one single unified, generic capacity limit for everything.",
            apTip: "College-level insight: explicitly name Baddeley's model components (phonological loop, visuospatial sketchpad, and the central executive that coordinates them) on FRQs about working memory — this specific, multi-component model is more sophisticated and higher-scoring than treating working memory as one undifferentiated system."
          }
        },
        {
          id: 'psych-5-6', difficulty: 5, type: 'mcq', topic: 'Metacognition & Overconfidence',
          prompt: "Research shows that people who perform poorly on a task often overestimate their own performance and ability more than high performers do, a pattern sometimes called the Dunning-Kruger effect. Which explanation best accounts for this pattern from a metacognitive perspective?",
          choices: ['Poor performers are simply less intelligent overall, which directly and separately causes both low performance and overconfidence', 'The same lack of skill/knowledge that causes poor performance on a task also impairs a person\'s ability to accurately evaluate their own performance on that task, since self-assessment relies on the same competence being assessed', 'High performers are more modest by personality trait, unrelated to any actual assessment accuracy', 'Overconfidence occurs completely randomly, with no relationship to actual skill level'],
          correct: 1,
          explanation: {
            correct: "The metacognitive explanation is that accurately judging one's own performance on a task requires many of the SAME skills/knowledge needed to perform the task well in the first place; someone who lacks that competence is therefore often also poorly equipped to recognize their own mistakes or gaps, leading to a 'double burden' of being both incompetent AND unaware of that incompetence, producing systematic overconfidence specifically in low performers.",
            wrong: { 0: "This oversimplifies the explanation into a single vague trait ('intelligence') rather than the more precise metacognitive mechanism (that self-assessment specifically requires the same domain-specific competence being assessed).", 2: "This attributes the pattern to a personality trait (modesty) rather than the actual proposed cognitive mechanism, and doesn't explain why the effect specifically follows the competence level in a structured way across the whole performance range.", 3: "This directly contradicts the well-documented, non-random, competence-linked pattern that defines the Dunning-Kruger effect." },
            tempting: "Choice A can tempt students because it captures a surface-level intuition ('bad performers just aren't smart'), but it misses the more precise and testable metacognitive mechanism — that the SPECIFIC skill deficit itself also impairs accurate self-evaluation, not a separate, general trait causing both independently.",
            commonMistake: "Explaining the Dunning-Kruger effect with a vague general trait (like 'low intelligence' or 'arrogance') instead of the specific metacognitive mechanism: the same missing skill/knowledge needed for good performance is also needed for accurate self-assessment of that performance.",
            apTip: "College-level insight: use the term 'metacognition' (thinking about one's own thinking/knowledge) explicitly when discussing the Dunning-Kruger effect, and explain the 'dual burden' framing precisely — lacking competence AND lacking the specific metacognitive insight needed to recognize that lack — this precise mechanistic framing is what distinguishes an expert-level answer from a surface-level one."
          }
        }
      ]
    },
    {
      id: 6,
      name: 'Unit 6: Developmental Psychology',
      questions: [
        {
          id: 'psych-6-1', difficulty: 1, type: 'mcq', topic: "Piaget's Stages",
          prompt: "A 4-year-old believes that a tall, narrow glass contains more liquid than a short, wide glass, even after watching the same amount of water poured between them. According to Piaget, this child has not yet developed:",
          choices: ['Object permanence', 'Conservation', 'Abstract reasoning', 'Theory of mind'],
          correct: 1,
          explanation: {
            correct: "Conservation is the understanding that a quantity (like volume) remains the same despite changes in its shape or appearance; failing to recognize this — as in the classic liquid-in-different-containers task — is the hallmark limitation of Piaget's preoperational stage (roughly ages 2-7).",
            wrong: { 0: "Object permanence (understanding that objects continue to exist even when out of sight) develops earlier, during the sensorimotor stage (roughly birth to age 2), and isn't what this specific task tests.", 2: "Abstract reasoning develops much later, during Piaget's formal operational stage (adolescence and beyond), and isn't what this concrete liquid task is testing.", 3: "Theory of mind (understanding that others have their own distinct thoughts/beliefs) is a related but separate developmental milestone, not what the conservation task specifically measures." },
            tempting: "Choice A is tempting because it's another famous Piagetian milestone, but object permanence is about object existence, not quantity understanding, and develops at a much younger age than the scenario describes.",
            commonMistake: "Mixing up Piaget's various named milestones (object permanence, conservation, egocentrism, theory of mind) instead of matching each one to its specific defining task and stage.",
            apTip: "Memorize each Piagetian stage with ONE signature task: sensorimotor → object permanence; preoperational → conservation (and egocentrism); concrete operational → conservation is mastered, logical thinking about concrete objects; formal operational → abstract/hypothetical reasoning."
          }
        },
        {
          id: 'psych-6-2', difficulty: 2, type: 'mcq', topic: 'Attachment Styles',
          prompt: "In the Strange Situation experiment, an infant becomes distressed when the caregiver leaves but is easily comforted and quickly returns to play upon the caregiver's return. This pattern best describes:",
          choices: ['Secure attachment', 'Avoidant (insecure) attachment', 'Resistant/ambivalent (insecure) attachment', 'Disorganized attachment'],
          correct: 0,
          explanation: {
            correct: "Securely attached infants typically show distress when the caregiver leaves (showing the caregiver matters) but are easily soothed and quickly return to normal exploration/play once the caregiver returns, reflecting a healthy, trusting attachment.",
            wrong: { 1: "Avoidant infants typically show little distress when the caregiver leaves and tend to ignore or avoid the caregiver upon return, which doesn't match this description.", 2: "Resistant/ambivalent infants are typically very distressed at separation but are NOT easily comforted upon return, sometimes showing anger or continued clinginess mixed with resistance — the described child's quick comforting doesn't match this pattern.", 3: "Disorganized attachment involves inconsistent, confused, or contradictory behavior (e.g., approaching the caregiver while looking away), not the clear, coherent, easily-soothed pattern described here." },
            tempting: "Choice C is tempting because it also involves distress at separation, but the key distinguishing detail is how easily the child is comforted upon reunion — resistant/ambivalent infants specifically struggle to be soothed, unlike this scenario.",
            commonMistake: "Focusing only on the distress-at-separation part of the description and ignoring the equally important reunion behavior, which is what actually distinguishes secure from resistant/ambivalent attachment.",
            apTip: "For Strange Situation questions, always evaluate BOTH phases explicitly: reaction to separation AND reaction to reunion — the combination of these two behaviors, not just one, determines the specific attachment classification."
          }
        },
        {
          id: 'psych-6-3', difficulty: 2, type: 'mcq', topic: "Erikson's Psychosocial Stages",
          prompt: "According to Erikson, an adolescent who is actively exploring different values, career paths, and identities is primarily working through which psychosocial crisis?",
          choices: ['Trust vs. mistrust', 'Industry vs. inferiority', 'Identity vs. role confusion', 'Generativity vs. stagnation'],
          correct: 2,
          explanation: {
            correct: "Erikson's identity vs. role confusion stage, associated with adolescence, centers on exploring different roles, values, and beliefs in order to establish a coherent sense of personal identity.",
            wrong: { 0: "Trust vs. mistrust is Erikson's first stage, occurring in infancy, centered on whether the infant's basic needs are reliably met.", 1: "Industry vs. inferiority occurs during middle childhood, centered on developing competence through skills and comparison with peers (e.g., school-age achievement), not identity exploration.", 3: "Generativity vs. stagnation occurs in middle adulthood, centered on contributing to society and future generations, a different life stage entirely from adolescence." },
            tempting: "None of the distractors closely resemble adolescent identity exploration if the stages are known precisely, but a student who has only loosely memorized 'Erikson has 8 stages' without matching each to its specific age range and theme might mismatch this scenario to a nearby stage.",
            commonMistake: "Failing to memorize each Erikson stage with both its correct age range AND its specific psychosocial theme, leading to plausible-sounding but incorrect stage matches.",
            apTip: "Create a simple timeline linking Erikson's 8 stages to life periods with a one-word theme each (infancy: trust, toddlerhood: autonomy, early childhood: initiative, school-age: industry, adolescence: identity, young adulthood: intimacy, middle adulthood: generativity, late adulthood: integrity) — this ordered structure is very testable."
          }
        },
        {
          id: 'psych-6-4', difficulty: 3, type: 'mcq', topic: 'Kohlberg\'s Moral Development',
          prompt: "A person decides not to steal medicine to save a dying relative because they reason 'laws exist to maintain social order, and everyone breaking laws whenever convenient would harm society.' According to Kohlberg, this reasoning best reflects:",
          choices: ['Preconventional morality, focused on avoiding punishment', 'Conventional morality, focused on maintaining social order and following rules for the sake of societal function', 'Postconventional morality, focused on abstract universal ethical principles that may override laws', 'A complete absence of moral reasoning'],
          correct: 1,
          explanation: {
            correct: "This reasoning reflects conventional morality's 'law and order' orientation, in which moral decisions are grounded in maintaining social order and respecting laws/rules because of their role in society, rather than reasoning about personal punishment (preconventional) or abstract, potentially law-overriding ethical principles (postconventional).",
            wrong: { 0: "Preconventional reasoning is centered on the individual's direct personal consequences, like avoiding punishment or gaining reward — not on abstract societal order.", 2: "Postconventional reasoning goes beyond existing laws to reason about universal ethical principles (e.g., justice, human rights) that might justify breaking an unjust law — this reasoning specifically upholds and justifies the law's importance instead.", 3: "This is clearly organized, principled moral reasoning, not an absence of moral reasoning altogether." },
            tempting: "Choice C is tempting because the scenario involves a serious ethical dilemma (a dying relative), which can feel like it should involve 'higher-level' reasoning, but the specific justification given (law and order, social stability) is a hallmark of conventional, not postconventional, reasoning.",
            commonMistake: "Assuming any reasoning about a serious moral dilemma must be at a 'high' level, rather than carefully checking what specific justification is being used (fear of punishment vs. social order vs. abstract universal principles).",
            apTip: "For Kohlberg questions, focus on the STATED JUSTIFICATION, not the topic or seriousness of the dilemma — the same dilemma (like the classic 'Heinz steals the drug' scenario) can be reasoned about at any of the three levels depending on exactly how the person justifies their choice."
          }
        },
        {
          id: 'psych-6-5', difficulty: 4, type: 'mcq', topic: 'Nature vs. Nurture in Development',
          prompt: "A longitudinal study finds that children with a genetic predisposition toward high impulsivity are more likely to be placed in harsh, punitive parenting environments, which in turn further increases their impulsive behavior over time. This pattern is best described as an example of:",
          choices: ['Pure genetic determinism, since impulsivity is entirely inherited', 'A gene-environment interaction (evocative effect), in which a child\'s genetically influenced traits evoke specific environmental responses that then further shape development', 'Pure environmental determinism, since parenting style is the only cause of the outcome', 'Random chance unrelated to either genetics or environment'],
          correct: 1,
          explanation: {
            correct: "This describes an evocative gene-environment interaction: the child's genetically influenced temperament (impulsivity) evokes a particular kind of environmental response (harsher parenting) from caregivers, which then further shapes the child's later development — genes and environment are shown here to influence each other dynamically, not act as separate, independent forces.",
            wrong: { 0: "The scenario explicitly shows environment (parenting style) playing a substantial, dynamic role in shaping the outcome, not just genetics acting alone.", 2: "Genetics play a clear initiating role in this scenario (the predisposition toward impulsivity comes first and shapes how parents respond), so this isn't a case of environment acting alone, independent of genetic influence.", 3: "This pattern reflects a well-documented, systematic developmental process (evocative gene-environment correlation), not simple randomness." },
            tempting: "Choices A and C both reflect the oversimplified 'nature OR nurture' framing that this specific research finding is designed to move beyond — recognizing this as an INTERACTION (each factor influencing the other over time) rather than one single dominant cause is the key insight being tested.",
            commonMistake: "Defaulting to a single-cause explanation (all genetic or all environmental) instead of recognizing a dynamic, bidirectional gene-environment interaction where genetically influenced traits actively shape the environment a person experiences.",
            apTip: "College-level insight: this specific pattern (a genetically influenced trait evoking a particular environmental response, which then further influences development) is known as an 'evocative' gene-environment correlation — using this precise term on an FRQ about nature/nurture demonstrates a more sophisticated understanding than a simple 'both genes and environment matter' statement."
          }
        },
        {
          id: 'psych-6-6', difficulty: 5, type: 'mcq', topic: 'Critical/Sensitive Periods',
          prompt: "Children who are not exposed to any language during early childhood (e.g., in rare cases of extreme social isolation) show severe, often permanent, deficits in language acquisition even after intensive later intervention, while adults learning a new second language show much more variability but rarely such severe, fundamental deficits. This contrast is best explained by:",
          choices: ['Language ability is entirely fixed at birth and cannot be influenced by experience at any age', 'The existence of a critical/sensitive period early in development during which the brain is especially primed for language acquisition, after which the same input produces much less complete learning', 'Adults are simply less intelligent than children, explaining their different language outcomes', 'There is no meaningful difference between children\'s and adults\' capacity for language acquisition'],
          correct: 1,
          explanation: {
            correct: "This pattern reflects a critical (or sensitive) period for language acquisition — a developmentally limited window, especially early in life, during which the brain is particularly capable of building the neural architecture for full native language competence; missing this window entirely (as in extreme deprivation cases) produces much more severe and lasting deficits than starting language learning later (as in typical adult second-language learning), even though adult learning still shows real variability and some difficulty.",
            wrong: { 0: "This contradicts the evidence itself — later intervention DOES produce some language learning in deprived children, just severely limited and often incomplete, showing that experience still matters, just not equally at all ages.", 2: "This introduces an unsupported, irrelevant claim about intelligence differences that has nothing to do with the specific developmental-timing mechanism (critical periods) that actually explains this pattern.", 3: "This directly contradicts the described pattern, which specifically shows a meaningful difference in ease and completeness of language acquisition depending on developmental timing." },
            tempting: "Choice A can tempt students who see 'severe, permanent deficits' and conclude that experience/environment must not matter at all, when the actual lesson is more nuanced — experience matters enormously, but ITS TIMING relative to a developmental window changes how effectively it can be used.",
            commonMistake: "Treating evidence of a critical/sensitive period as evidence that development is either 'fixed' or 'not fixed' at all, rather than understanding it as evidence for time-limited windows of heightened plasticity.",
            apTip: "College-level insight: cite the real-world critical period case evidence (such as documented cases of extreme early language deprivation) explicitly, and use the specific vocabulary distinction between a 'critical period' (a hard biological cutoff) and a 'sensitive period' (a window of heightened but not absolute sensitivity) — many modern psychologists prefer 'sensitive period' language, and noting this distinction shows nuanced understanding."
          }
        }
      ]
    },
    {
      id: 7,
      name: 'Unit 7: Motivation, Emotion & Personality',
      questions: [
        {
          id: 'psych-7-1', difficulty: 1, type: 'mcq', topic: "Maslow's Hierarchy of Needs",
          prompt: "According to Maslow's hierarchy of needs, which need must generally be satisfied before a person is strongly motivated to pursue self-esteem needs?",
          choices: ['Self-actualization', 'Belongingness and love needs', 'Aesthetic needs', 'Transcendence needs'],
          correct: 1,
          explanation: {
            correct: "Maslow's hierarchy places belongingness and love needs (social connection, relationships) below esteem needs, meaning that according to the theory, these social needs are generally prioritized and addressed before esteem needs become a strong motivating focus.",
            wrong: { 0: "Self-actualization sits at the TOP of Maslow's hierarchy, above esteem needs, not below them, so it wouldn't need to be satisfied first.", 2: "Aesthetic needs (appreciation of beauty) are not part of Maslow's most commonly cited five-level hierarchy in the way belongingness is, and are not positioned as a prerequisite before esteem needs in the standard model.", 3: "Transcendence was a need Maslow added in some later, less commonly tested extensions of his model, positioned above self-actualization, not as a prerequisite before esteem." },
            tempting: "None of the other options correctly precede esteem needs in the standard five-level hierarchy if the order is memorized specifically, but higher-level needs (like self-actualization) can be mistakenly placed as prerequisites if the hierarchy's order is confused.",
            commonMistake: "Not having the specific order of Maslow's hierarchy memorized precisely (physiological, safety, belongingness/love, esteem, self-actualization), leading to incorrect prerequisite relationships.",
            apTip: "Memorize Maslow's five-level hierarchy in strict order from bottom to top: physiological needs, safety needs, belongingness/love needs, esteem needs, self-actualization — and remember the theory's core claim that lower needs generally take priority before higher ones become strongly motivating."
          }
        },
        {
          id: 'psych-7-2', difficulty: 2, type: 'mcq', topic: 'Theories of Emotion',
          prompt: "According to the James-Lange theory of emotion, which sequence correctly describes the order of events when encountering a frightening stimulus?",
          choices: ['You feel fear first, which then causes your heart to race', 'Your heart races first (physiological arousal), and you interpret that bodily response as fear', 'Fear and physiological arousal occur completely independently, with no causal connection', 'You must first cognitively appraise the situation as dangerous before any physiological response can occur'],
          correct: 1,
          explanation: {
            correct: "The James-Lange theory proposes that physiological arousal (like a racing heart) occurs FIRST in response to a stimulus, and the SUBJECTIVE EMOTION (fear) is our interpretation of that bodily response — essentially, 'we feel fear because our heart is racing,' reversing the commonsense order most people assume.",
            wrong: { 0: "This describes the commonsense, intuitive order (feel fear, then physiological response), which is specifically what James-Lange theory challenges and reverses.", 2: "James-Lange theory specifically proposes a direct causal link (physiological arousal causing the emotional experience), not complete independence between the two.", 3: "This describes a different theory (Cognitive appraisal theories, like Schachter-Singer or Lazarus's approach), which emphasizes cognitive interpretation as central, rather than the James-Lange theory's specific claim that physiological arousal comes first and directly produces the emotional feeling." },
            tempting: "Choice A represents the commonsense, intuitive assumption about emotion that James-Lange theory is specifically famous for challenging and reversing, making it an important, frequently tested contrast.",
            commonMistake: "Assuming the intuitive, commonsense order (emotion causes physical response) applies to James-Lange theory, when the theory's defining, counterintuitive claim is the reverse order.",
            apTip: "Memorize James-Lange with this compressed phrase: 'physiological arousal → emotion' (body first, feeling second) — and contrast it directly with Cannon-Bard (arousal and emotion occur SIMULTANEOUSLY, independently) and Schachter-Singer (arousal PLUS cognitive labeling together produce emotion) to keep all three straight."
          }
        },
        {
          id: 'psych-7-3', difficulty: 2, type: 'mcq', topic: 'Intrinsic vs. Extrinsic Motivation',
          prompt: "A student who initially enjoyed painting purely for fun begins to lose interest in painting after being paid money for each painting completed. This phenomenon, where an external reward undermines a previously enjoyed activity, is best described as:",
          choices: ['The overjustification effect, in which extrinsic rewards can undermine intrinsic motivation for an already-enjoyable activity', 'Intrinsic motivation increasing due to the added incentive', 'Classical conditioning between painting and money', 'An example of a self-fulfilling prophecy'],
          correct: 0,
          explanation: {
            correct: "The overjustification effect describes exactly this pattern: providing an external (extrinsic) reward for an activity that was previously intrinsically motivating (enjoyed for its own sake) can undermine and reduce that original intrinsic motivation, as the activity becomes reframed as being done 'for the reward' rather than for its own inherent enjoyment.",
            wrong: { 1: "This is the opposite of the described outcome — the student's motivation/interest DECREASED, not increased, after the reward was introduced.", 2: "While pairing money with painting does involve an association, this scenario specifically describes a motivational shift (intrinsic to extrinsic framing) rather than a classical conditioning process (an unconditioned/conditioned stimulus and response pairing).", 3: "A self-fulfilling prophecy involves an expectation about a person or situation influencing behavior in a way that makes the expectation come true; this is an unrelated concept to the extrinsic-reward-undermining-intrinsic-motivation pattern described here." },
            tempting: "None of the distractors closely match this specific, well-documented effect if 'overjustification effect' is a memorized, distinct term, but without that specific vocabulary, students might reach for a more general or unrelated motivational concept.",
            commonMistake: "Not having the specific term 'overjustification effect' memorized and available, leading to vaguer or incorrect explanations for this well-documented motivational phenomenon.",
            apTip: "Memorize the term 'overjustification effect' explicitly and its precise mechanism: adding an extrinsic reward to an already intrinsically enjoyable activity can shift a person's perceived reason for doing it from internal enjoyment to external reward, thereby undermining the original intrinsic motivation once the reward is no longer present or emphasized."
          }
        },
        {
          id: 'psych-7-4', difficulty: 3, type: 'mcq', topic: 'The Big Five Personality Traits',
          prompt: "A person who is described as organized, disciplined, and goal-directed would likely score high on which of the Big Five personality traits?",
          choices: ['Openness', 'Conscientiousness', 'Neuroticism', 'Agreeableness'],
          correct: 1,
          explanation: {
            correct: "Conscientiousness specifically describes traits related to organization, self-discipline, dependability, and goal-directed behavior, matching the description given.",
            wrong: { 0: "Openness relates to curiosity, imagination, and openness to new experiences/ideas, not specifically organization or discipline.", 2: "Neuroticism relates to emotional instability and tendency toward negative emotions (anxiety, moodiness), not organization or discipline.", 3: "Agreeableness relates to being compassionate, cooperative, and trusting toward others, not specifically organization or goal-directed behavior." },
            tempting: "None of the other traits closely match 'organized, disciplined, goal-directed' if each Big Five trait's specific definition is known clearly, but blending together the five traits without distinct definitions is a common source of error.",
            commonMistake: "Not having distinct, specific definitions memorized for each of the Big Five traits, leading to guesses based on vague impressions rather than precise trait-description matching.",
            apTip: "Use the mnemonic OCEAN (Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism) and attach ONE precise, distinguishing keyword to each: Openness=curious/imaginative, Conscientiousness=organized/disciplined, Extraversion=outgoing/sociable, Agreeableness=cooperative/compassionate, Neuroticism=anxious/emotionally unstable."
          }
        },
        {
          id: 'psych-7-5', difficulty: 4, type: 'mcq', topic: 'Schachter-Singer Two-Factor Theory',
          prompt: "In a classic experiment, participants were injected with adrenaline (causing physiological arousal) but were not told what the injection would do. Those placed with a confederate acting euphoric reported feeling happy, while those placed with a confederate acting angry reported feeling irritated, despite receiving the identical injection. This result best supports:",
          choices: ['The James-Lange theory, since physiological arousal alone directly determined the specific emotion felt', 'The Cannon-Bard theory, since emotion and arousal occurred completely independently of each other', 'The Schachter-Singer two-factor theory, in which physiological arousal is combined with a cognitive label/interpretation (influenced by situational context) to produce a specific emotional experience', 'Evidence that emotions are entirely determined by genetics, unrelated to any situational context'],
          correct: 2,
          explanation: {
            correct: "This classic study (Schachter and Singer's experiment) demonstrates that the SAME physiological arousal state (from the adrenaline injection) led to DIFFERENT specific emotions (happiness vs. irritation) depending on the situational/social context provided by the confederate's behavior — supporting the two-factor theory's claim that emotion results from combining physiological arousal WITH a cognitive interpretation/label of that arousal, drawn from the surrounding context.",
            wrong: { 0: "James-Lange theory would predict a specific, direct emotion is determined by the specific physiological state alone; but here, the IDENTICAL physiological arousal led to DIFFERENT specific emotions depending on context, contradicting a purely physiology-determines-specific-emotion view.", 1: "Cannon-Bard theory proposes that physiological arousal and emotional experience occur simultaneously but independently (arousal doesn't directly determine which specific emotion is felt, but also doesn't need a cognitive label from context); this experiment specifically shows context/cognitive interpretation actively SHAPING which particular emotion was reported, which goes beyond simple independence.", 3: "This result specifically demonstrates the role of situational/social CONTEXT (the confederate's behavior) in shaping emotional interpretation, directly contradicting an explanation based purely on fixed, genetically determined emotional responses." },
            tempting: "Choice A can tempt students who know arousal was involved and default to James-Lange, without noticing that the SAME arousal state produced DIFFERENT specific emotions depending on context — a pattern James-Lange alone doesn't fully explain, but that Schachter-Singer's two-factor theory specifically accounts for.",
            commonMistake: "Not distinguishing between theories based on whether they predict a FIXED emotion from a given physiological state (James-Lange) versus a context-DEPENDENT interpretation of that same arousal state (Schachter-Singer).",
            apTip: "College-level insight: cite this specific classic study (Schachter and Singer's adrenaline/confederate experiment) by its actual described method when discussing two-factor theory on an FRQ — explicitly explaining that identical arousal produced different emotions based on situational cognitive labeling is the key evidentiary detail that distinguishes a strong answer from a generic one."
          }
        },
        {
          id: 'psych-7-6', difficulty: 5, type: 'mcq', topic: 'Trait vs. Situational Approaches to Personality',
          prompt: "Critics of strict trait theories of personality point to research showing that a person's behavior often varies substantially across different situations (e.g., being very extraverted at a party but quiet in a classroom), challenging the idea of broadly consistent traits. Which concept best reconciles this apparent inconsistency without abandoning the value of trait theory entirely?",
          choices: ['Personality traits don\'t exist at all; behavior is purely situational with no cross-situational consistency whatsoever', 'The person-situation interaction (interactionist) perspective, which holds that both stable personality traits AND specific situational factors jointly influence behavior, rather than either alone fully determining it', 'Trait theory is entirely correct, and any observed situational variability must be due to measurement error', 'Only extraverted people show any situational variability; introverted people are perfectly consistent across all situations'],
          correct: 1,
          explanation: {
            correct: "The interactionist perspective reconciles trait consistency with situational variability by proposing that BOTH stable personal traits AND specific situational factors jointly shape behavior — a person's broad tendency (e.g., general extraversion level) still matters and predicts average behavior across many situations, but specific situational factors (like a formal classroom vs. a casual party) can meaningfully shift behavior around that baseline in predictable ways.",
            wrong: { 0: "This overcorrects entirely away from trait theory, dismissing substantial research evidence that people DO show meaningful average consistency in traits across many situations, even while some situational variability also exists.", 2: "Dismissing all situational variability as pure measurement error ignores substantial genuine evidence that situational context meaningfully influences behavior, which the interactionist perspective specifically incorporates rather than dismisses.", 3: "There's no evidence or theoretical basis supporting a claim that only extraverted people show situational variability while introverted people are perfectly consistent; situational influence on behavior is a general phenomenon studied across personality types, not limited to just one trait level." },
            tempting: "Choice C represents an overly rigid defense of pure trait theory that ignores legitimate situational evidence, while choice A represents an overcorrection that dismisses trait theory's real predictive value — the interactionist perspective specifically threads this needle by integrating both factors together.",
            commonMistake: "Treating the trait-vs-situation debate as an either/or choice, rather than recognizing the interactionist perspective's more nuanced position that both factors jointly and meaningfully contribute to behavior.",
            apTip: "College-level insight: use the specific term 'person-situation interaction' or 'interactionist perspective' explicitly on an FRQ addressing critiques of trait theory — this reflects the actual modern resolution of the classic 'trait vs. situation' debate in personality psychology, rather than siding entirely with one extreme position or the other."
          }
        }
      ]
    },
    {
      id: 8,
      name: 'Unit 8: Clinical Psychology',
      questions: [
        {
          id: 'psych-8-1', difficulty: 1, type: 'mcq', topic: 'Defining Psychological Disorders',
          prompt: "Which of the following is typically considered a key criterion used to determine whether a behavior pattern qualifies as a psychological disorder?",
          choices: ['The behavior must be extremely rare compared to the general population', 'The behavior pattern causes significant distress and/or impairs the person\'s ability to function in daily life', 'The behavior must involve breaking a specific law', 'The person must have a family history of the exact same behavior'],
          correct: 1,
          explanation: {
            correct: "A central criterion widely used in clinical psychology for defining a psychological disorder is that the pattern of thoughts, feelings, or behaviors causes significant personal distress and/or noticeably impairs a person's ability to function in important areas of daily life (work, relationships, self-care).",
            wrong: { 0: "Rarity alone isn't the defining feature — some very rare traits/behaviors aren't disorders (like exceptional talent), while some disorders (like certain anxiety or mood difficulties) are relatively common, so statistical rarity by itself isn't the core clinical criterion.", 2: "Legality is a completely separate societal/legal concept from psychological diagnosis; many disorders involve no illegal behavior at all, and breaking a law doesn't itself indicate a psychological disorder.", 3: "Family history can be a RISK FACTOR relevant to some disorders, but it isn't a REQUIRED diagnostic criterion — many individuals develop disorders without any specific family history of that same condition." },
            tempting: "Choice A is tempting because 'abnormal' colloquially can suggest 'rare,' but clinical psychology's actual defining criteria focus specifically on distress and functional impairment, not statistical frequency.",
            commonMistake: "Conflating everyday, colloquial ideas of 'abnormal' (like rarity or social unacceptability) with the specific clinical criteria (distress and/or impaired functioning) actually used to define psychological disorders.",
            apTip: "Memorize 'distress and/or dysfunction/impairment in daily functioning' as the core, testable definitional criteria for a psychological disorder — this precise phrasing (not vague ideas about rarity or social norms) is what's specifically expected in FRQ responses defining or identifying disorders."
          }
        },
        {
          id: 'psych-8-2', difficulty: 2, type: 'mcq', topic: 'Anxiety Disorders',
          prompt: "A person experiences sudden, intense episodes of overwhelming fear accompanied by a racing heart, shortness of breath, and a feeling of impending doom, occurring unpredictably and without an obvious specific trigger. This pattern is most consistent with:",
          choices: ['Generalized anxiety disorder', 'Panic disorder, characterized by recurrent, unexpected panic attacks', 'A specific phobia', 'Obsessive-compulsive disorder'],
          correct: 1,
          explanation: {
            correct: "Panic disorder is specifically characterized by recurrent, unexpected panic attacks — sudden, intense episodes of fear with physical symptoms like a racing heart and shortness of breath, occurring without a clear, specific, predictable trigger.",
            wrong: { 0: "Generalized anxiety disorder involves persistent, chronic, excessive worry across many areas of life over an extended period, rather than sudden, discrete, intense episodes of fear.", 2: "A specific phobia involves intense fear triggered by a SPECIFIC, identifiable object or situation (like heights or spiders), not unpredictable episodes occurring without an obvious specific trigger.", 3: "Obsessive-compulsive disorder involves persistent, intrusive thoughts (obsessions) and repetitive behaviors performed to reduce anxiety (compulsions), a different symptom pattern from sudden, unpredictable panic episodes." },
            tempting: "Choice A is tempting because both involve anxiety, but generalized anxiety disorder is chronic and diffuse (ongoing worry), while panic disorder involves discrete, sudden, intense episodes — a key distinguishing feature in the description.",
            commonMistake: "Confusing generalized anxiety disorder (chronic, ongoing, diffuse worry) with panic disorder (sudden, discrete, intense panic attacks), since both fall under the broad 'anxiety disorders' category.",
            apTip: "Distinguish anxiety disorders by their SPECIFIC pattern: generalized anxiety = chronic, diffuse worry across many areas; panic disorder = sudden, discrete, intense attacks; specific phobia = fear tied to ONE specific trigger; social anxiety = fear specifically tied to social/evaluative situations."
          }
        },
        {
          id: 'psych-8-3', difficulty: 2, type: 'mcq', topic: 'Treatment Approaches',
          prompt: "A therapist helps a client identify and challenge irrational or distorted thought patterns (like catastrophizing or all-or-nothing thinking) that contribute to the client's depression. This treatment approach is best described as:",
          choices: ['Psychoanalysis, focused on unconscious childhood conflicts', 'Cognitive-behavioral therapy (CBT), which focuses on identifying and changing maladaptive thought patterns and behaviors', 'Humanistic therapy, focused purely on unconditional positive regard with no structured techniques', 'Psychopharmacology, since only medication was used'],
          correct: 1,
          explanation: {
            correct: "Cognitive-behavioral therapy (CBT) specifically involves identifying and actively challenging/restructuring distorted or irrational thought patterns (cognitive distortions like catastrophizing or all-or-nothing thinking) that contribute to psychological distress, often paired with behavioral techniques.",
            wrong: { 0: "Psychoanalysis focuses on uncovering UNCONSCIOUS conflicts, often rooted in early childhood experiences, using techniques like free association — a different focus and method from directly identifying and challenging conscious, identifiable thought patterns.", 2: "Humanistic therapy (like Rogerian client-centered therapy) emphasizes unconditional positive regard and self-actualization in a less structured way, rather than the specific, structured technique of identifying and directly challenging distorted thoughts that defines CBT.", 3: "No medication is mentioned in this scenario; the described technique (identifying and challenging thought patterns) is a talk-therapy technique, not a pharmacological intervention." },
            tempting: "None of the alternatives closely match 'identifying and challenging irrational thoughts' if each therapy approach's defining technique is known specifically, but blending together different therapeutic approaches taught in the same unit is a common source of confusion.",
            commonMistake: "Not distinguishing CBT's specific technique (identifying and directly challenging distorted thoughts) from other therapy approaches' distinct methods (like psychoanalysis's focus on the unconscious or humanistic therapy's focus on unconditional positive regard).",
            apTip: "Attach one precise, defining technique to each major therapy approach: psychoanalysis = uncovering unconscious conflicts (free association, dream analysis); CBT = identifying/challenging distorted thoughts plus behavioral techniques; humanistic = unconditional positive regard, client-centered, focus on self-actualization."
          }
        },
        {
          id: 'psych-8-4', difficulty: 3, type: 'mcq', topic: 'Biological vs. Diathesis-Stress Models',
          prompt: "A researcher proposes that a person develops a psychological disorder only when they have a genetic predisposition (vulnerability) AND experience a significant environmental stressor; neither factor alone is sufficient. This model is best described as:",
          choices: ['The purely biological/medical model, which attributes disorders entirely to genetics and brain chemistry', 'The diathesis-stress model, in which a predisposition (diathesis) combines with an environmental stressor to trigger a disorder', 'The purely behavioral model, which attributes disorders entirely to learned associations', 'The sociocultural model, which attributes disorders entirely to societal and cultural factors'],
          correct: 1,
          explanation: {
            correct: "The diathesis-stress model specifically proposes that a disorder develops through the COMBINATION of an underlying predisposition or vulnerability (diathesis — which can be genetic, biological, or psychological) and a significant environmental stressor, with neither factor alone being sufficient to fully explain the disorder's onset.",
            wrong: { 0: "A purely biological model would attribute disorders to genetics/biology ALONE, without requiring an environmental stressor as a necessary additional component — this doesn't match the described 'both factors required' model.", 2: "A purely behavioral model would attribute disorders entirely to learned conditioning/associations, not to a combination of genetic predisposition and environmental stress as described.", 3: "A purely sociocultural model would attribute disorders entirely to societal/cultural factors, not to a specific combination of individual genetic vulnerability and environmental stress." },
            tempting: "None of the single-factor models (biological, behavioral, sociocultural alone) match the description of TWO factors combining, but confusing the diathesis-stress model with any one of its component parts (just biology, or just stress) alone is a common simplification error.",
            commonMistake: "Reducing the diathesis-stress model to just one of its two components (either just genetics/biology or just environmental stress) rather than recognizing it specifically requires BOTH factors together.",
            apTip: "Explicitly define diathesis-stress with both halves clearly stated on an FRQ: 'diathesis' = an underlying vulnerability/predisposition (often genetic or biological), and 'stress' = an environmental trigger; the model's key claim is that the disorder emerges from their COMBINATION, not either alone."
          }
        },
        {
          id: 'psych-8-5', difficulty: 4, type: 'mcq', topic: 'Cultural Considerations in Diagnosis',
          prompt: "A clinician evaluating a client from a cultural background different from their own must be especially careful to distinguish between behaviors that reflect a genuine psychological disorder and behaviors that are culturally normative expressions of grief, spirituality, or social customs within that client\'s cultural context. This concern illustrates the importance of:",
          choices: ['Ignoring cultural context entirely to ensure diagnostic consistency across all clients', 'Cultural competence in diagnosis, recognizing that behaviors must be evaluated within their appropriate cultural context to avoid misdiagnosing normative cultural expressions as pathology', 'Automatically diagnosing any unfamiliar behavior as abnormal, to be maximally cautious', 'Assuming all psychological disorders present identically across every culture, with no need for cultural consideration'],
          correct: 1,
          explanation: {
            correct: "Cultural competence in clinical assessment requires clinicians to understand and consider a client's cultural background and context, since behaviors that might seem unusual out of context (certain grief expressions, spiritual practices, or social customs) may be entirely normative within that specific cultural framework, and failing to consider this can lead to serious misdiagnosis (over-pathologizing culturally normal behavior).",
            wrong: { 0: "Ignoring cultural context entirely is precisely the mistake that leads to misdiagnosis — cultural context is a necessary consideration, not something to be dismissed for the sake of a superficial diagnostic 'consistency.'", 2: "Automatically treating unfamiliar behavior as abnormal reflects cultural bias and a lack of cultural competence, precisely the problem that careful cultural consideration is meant to avoid.", 3: "Research clearly shows that both the expression and, in some cases, the prevalence of psychological disorders can vary meaningfully across cultures, making cultural consideration an important, not dismissible, factor in accurate diagnosis." },
            tempting: "Choice A can superficially sound like a fair, unbiased approach ('treat everyone the same'), but ignoring relevant cultural context specifically INCREASES the risk of misdiagnosing normative cultural behavior as pathological, rather than ensuring genuine fairness.",
            commonMistake: "Assuming that 'treating everyone the same' by ignoring cultural context promotes fairness, rather than recognizing that ignoring relevant cultural context can itself introduce bias and lead to misdiagnosis.",
            apTip: "On FRQs discussing diagnostic considerations, explicitly name 'cultural competence' or reference how diagnostic manuals (like the DSM) include cultural considerations/context sections precisely to help clinicians avoid misinterpreting culturally normative behavior as a symptom of disorder."
          }
        },
        {
          id: 'psych-8-6', difficulty: 5, type: 'mcq', topic: 'Comorbidity & Diagnostic Overlap',
          prompt: "A client presents with symptoms that overlap significantly between major depressive disorder and generalized anxiety disorder, and is ultimately diagnosed with both conditions simultaneously. This situation of having two or more co-occurring disorders is called:",
          choices: ['Diagnostic error, since a person can only have one psychological disorder at a time', 'Comorbidity, which is common and reflects that many psychological disorders frequently co-occur, sometimes sharing underlying risk factors or symptom overlap', 'Spontaneous remission, since multiple symptoms are present', 'Insanity, a specific and severe legal-psychological classification'],
          correct: 1,
          explanation: {
            correct: "Comorbidity refers to the co-occurrence of two or more disorders in the same individual, which is actually quite common in clinical practice — many disorders (like depression and anxiety) share overlapping symptoms, risk factors, or underlying vulnerabilities, making simultaneous diagnosis appropriate and clinically meaningful rather than indicating an error.",
            wrong: { 0: "This is a significant misconception — individuals frequently DO meet diagnostic criteria for multiple co-occurring disorders simultaneously; this isn't inherently a diagnostic error but a well-documented clinical reality (comorbidity).", 2: "Spontaneous remission refers to a disorder improving or resolving without formal treatment, an entirely different and unrelated concept from having multiple simultaneous diagnoses.", 3: "'Insanity' is a legal term (used in specific legal contexts like criminal responsibility), not a clinical psychological diagnostic term or classification used for describing co-occurring disorders." },
            tempting: "Choice A reflects an intuitive but incorrect assumption that a clean, single diagnosis should always be possible, when in reality significant symptom overlap and shared risk factors make legitimate comorbidity a very common and clinically important phenomenon.",
            commonMistake: "Assuming a 'correct' diagnosis must always be a single, isolated disorder, rather than recognizing that comorbidity (multiple co-occurring disorders) is a common, well-documented, and clinically significant reality.",
            apTip: "College-level insight: use the specific term 'comorbidity' explicitly on FRQs discussing multiple co-occurring diagnoses, and note that high comorbidity rates between certain disorders (like depression and anxiety) are actively studied because they may reflect shared underlying biological or psychological risk factors — this is a genuine, active area of clinical research, not simply a diagnostic inconvenience."
          }
        }
      ]
    },
    {
      id: 9,
      name: 'Unit 9: Social Psychology',
      questions: [
        {
          id: 'psych-9-1', difficulty: 1, type: 'mcq', topic: 'Fundamental Attribution Error',
          prompt: "After a classmate arrives late to class, another student immediately assumes 'they're just lazy and disorganized,' without considering that the classmate's car may have broken down. This is a classic example of:",
          choices: ['The bystander effect', 'The fundamental attribution error', 'Cognitive dissonance', 'Social loafing'],
          correct: 1,
          explanation: {
            correct: "The fundamental attribution error is the tendency to overemphasize personality/dispositional explanations (like being 'lazy') for someone else's behavior while underemphasizing situational factors (like a car breaking down) that might explain it.",
            wrong: { 0: "The bystander effect describes reduced likelihood of helping in an emergency when other people are present, an unrelated phenomenon to explaining someone's lateness.", 2: "Cognitive dissonance is the discomfort felt when holding two conflicting beliefs or when behavior conflicts with beliefs, which isn't what's being illustrated in this attribution scenario.", 3: "Social loafing refers to reduced individual effort when working in a group compared to working alone, unrelated to this attribution judgment about a late classmate." },
            tempting: "None of the distractors are conceptually close if the vocabulary is precisely known, but as a set of commonly co-taught social psychology terms, they can blur together under time pressure without a clear working definition of each.",
            commonMistake: "Blurring together various social psychology vocabulary terms taught in the same unit without a clear, specific definition anchored to each one.",
            apTip: "Attach a short, concrete example to each social psychology term as you learn it (e.g., fundamental attribution error = blaming the late classmate's character instead of their circumstances) rather than memorizing definitions in isolation."
          }
        },
        {
          id: 'psych-9-2', difficulty: 2, type: 'mcq', topic: 'Conformity',
          prompt: "In Asch's conformity experiments, participants often gave an obviously incorrect answer about line length after hearing several confederates give that same incorrect answer first. This demonstrates the power of:",
          choices: ['Obedience to authority', 'Normative social influence, conforming to fit in with the group despite knowing the correct answer', 'Deindividuation', 'The mere exposure effect'],
          correct: 1,
          explanation: {
            correct: "Asch's participants typically knew the correct answer privately but conformed publicly to match the group's incorrect answer, demonstrating normative social influence — conforming to be liked/accepted or avoid standing out, even without genuinely believing the group's answer.",
            wrong: { 0: "This experiment involved peer confederates, not an authority figure giving direct orders, so it isn't primarily about obedience (that's the focus of Milgram's separate, distinct experiments).", 2: "Deindividuation refers to losing individual self-awareness and restraint in a group/crowd (e.g., in anonymous crowd behavior), which isn't what's being tested by simple line-judgment conformity.", 3: "The mere exposure effect describes increased liking for stimuli through repeated exposure, an unrelated phenomenon to this conformity scenario." },
            tempting: "Choice A is a very common mix-up — students frequently confuse Asch's conformity experiments (peer influence) with Milgram's obedience experiments (authority influence), since both are classic, heavily-covered AP Psych studies about social influence.",
            commonMistake: "Confusing Asch's (conformity to peers) and Milgram's (obedience to authority) classic experiments, since both are foundational social influence studies covered in the same unit.",
            apTip: "Keep these paired but distinct: Asch = conformity to PEERS (line judgment task); Milgram = obedience to AUTHORITY (shock generator task) — always double-check which specific study and influence type a question describes."
          }
        },
        {
          id: 'psych-9-3', difficulty: 2, type: 'mcq', topic: 'Cognitive Dissonance',
          prompt: "A person who values environmental protection but drives a gas-guzzling car may feel psychological discomfort. According to cognitive dissonance theory, which response would most likely reduce this discomfort?",
          choices: ['Continuing to hold both beliefs and behaviors with no change and no discomfort reduction', 'Changing an attitude (e.g., minimizing the car\'s environmental impact) or changing the behavior (e.g., driving less) to restore consistency', 'Forgetting that they value environmental protection entirely', 'Seeking out more information proving their car is harmful, which would increase, not decrease, the dissonance'],
          correct: 1,
          explanation: {
            correct: "Cognitive dissonance theory holds that people are motivated to reduce the discomfort of inconsistent beliefs/behaviors, typically by changing their attitude (rationalizing or minimizing the conflict) or changing their behavior to bring the two into better alignment.",
            wrong: { 0: "Dissonance theory specifically predicts people are motivated to REDUCE this discomfort, not simply tolerate it indefinitely without any psychological adjustment.", 2: "Simply 'forgetting' a core value isn't the typical or well-supported mechanism dissonance theory describes for resolving this kind of conflict.", 3: "Seeking out MORE evidence of the conflict would increase dissonance, the opposite of the discomfort-reducing motivation the theory describes." },
            tempting: "Choice D can tempt students who think 'more information is always the rational response,' but dissonance theory specifically predicts people are often motivated to AVOID or reduce dissonance-increasing information, not seek it out.",
            commonMistake: "Assuming people are primarily motivated to seek accurate information above all else, rather than recognizing dissonance theory's specific prediction that people are often motivated to reduce psychological discomfort, sometimes at the expense of full accuracy.",
            apTip: "On FRQs, give a SPECIFIC example of both possible resolution paths (attitude change AND behavior change) rather than only describing the discomfort itself — full credit usually requires showing how the dissonance gets resolved, not just that it exists."
          }
        },
        {
          id: 'psych-9-4', difficulty: 3, type: 'mcq', topic: 'Milgram\'s Obedience Study',
          prompt: "In Milgram's obedience experiments, what factor was shown to significantly DECREASE the rate of obedience to the experimenter's demands to deliver shocks?",
          choices: ['Conducting the experiment in a prestigious university setting', 'Placing the authority figure (experimenter) in the same room as the participant', 'Increasing the physical and psychological distance between the participant and the authority figure giving orders', 'Increasing the physical proximity/visibility of the victim (learner) to the participant'],
          correct: 3,
          explanation: {
            correct: "When the 'learner' (victim) was made more immediate and visible to the participant (e.g., in the same room, or requiring direct physical contact to deliver the shock), obedience rates dropped significantly, as the human cost of the action became harder to psychologically distance from.",
            wrong: { 0: "A prestigious setting (like Yale University, where the original study was conducted) actually tended to INCREASE obedience by lending credibility/legitimacy to the authority figure, not decrease it.", 1: "Having the experimenter physically present in the room tended to INCREASE obedience compared to giving orders remotely (e.g., by phone), the opposite of a decreasing factor.", 2: "Increased distance from the AUTHORITY figure (not the victim) actually tended to decrease obedience in some variations, but this answer describes the wrong party (authority vs. victim) relative to the question's actual finding about victim proximity." },
            tempting: "Choice C sounds plausible as 'distance reduces obedience' in a general sense, but the question specifically asks about a factor that DECREASED obedience, and this describes the wrong party's distance (it's the victim's proximity, not the authority's distance, that this option addresses) — the correct, more precisely matching answer is D, describing victim proximity directly increasing empathy and decreasing obedience.",
            commonMistake: "Mixing up which party's proximity/distance (the authority figure vs. the victim/learner) was manipulated in which specific Milgram variation, and what effect each specific manipulation produced.",
            apTip: "Milgram ran several documented variations — know the DIRECTION of each specific manipulation's effect: authority proximity to participant increases obedience; victim proximity/visibility to participant decreases obedience; prestigious setting increases obedience — these are frequently tested as specific factual details."
          }
        },
        {
          id: 'psych-9-5', difficulty: 4, type: 'mcq', topic: 'Social Identity & Ingroup Bias',
          prompt: "In a study, participants randomly assigned to arbitrary, meaningless groups (e.g., based on a coin flip) still showed favoritism toward their own group's members when distributing rewards, even without any prior history or real conflict between groups. This result is best explained by:",
          choices: ['Realistic conflict theory, since the groups were competing over limited real-world resources', 'Social identity theory, in which simply categorizing people into groups (even arbitrary ones) is sufficient to produce ingroup favoritism as part of maintaining positive self-esteem through group membership', 'The mere exposure effect, since participants had more contact with their own group', 'Pure random chance with no underlying psychological explanation'],
          correct: 1,
          explanation: {
            correct: "This describes minimal group studies supporting social identity theory: merely categorizing people into groups — even using a completely arbitrary, meaningless basis — is enough to trigger ingroup favoritism, because people derive part of their self-concept and self-esteem from their group memberships and are motivated to favor their own group even without any real competition or history.",
            wrong: { 0: "Realistic conflict theory specifically requires actual competition over real, limited resources between groups to explain intergroup hostility/favoritism; this scenario explicitly involves arbitrary, meaningless group assignment with no real resource competition, ruling this out as the primary explanation.", 2: "The mere exposure effect is about increased liking through repeated exposure to a stimulus; the minimal group paradigm specifically avoids any meaningful prior contact/exposure differences between the arbitrary groups, so this doesn't fit as the explanation.", 3: "This result has been replicated extensively and has a well-established theoretical explanation (social identity theory); it is not simply random, unexplained behavior." },
            tempting: "Choice A can tempt students who know that intergroup conflict theories exist, but realistic conflict theory specifically requires genuine competition over real resources — the defining, deliberate feature of THIS particular study design is that the groups were completely arbitrary and had nothing real to compete over, which is exactly why it supports a different theory (social identity) instead.",
            commonMistake: "Applying realistic conflict theory to any intergroup favoritism scenario without checking whether real competition over resources was actually present, versus scenarios (like minimal group studies) specifically designed to rule that out.",
            apTip: "College-level insight: this is the classic 'minimal group paradigm' (associated with Henri Tajfel) — explicitly naming this paradigm and social identity theory together, and explaining that the key finding is favoritism WITHOUT any real conflict or history, is what distinguishes a sophisticated FRQ response from one that vaguely gestures at 'groups like their own kind.'"
          }
        },
        {
          id: 'psych-9-6', difficulty: 5, type: 'mcq', topic: 'Bystander Effect & Diffusion of Responsibility',
          prompt: "In a series of experiments, a person witnessing an emergency was less likely to help when more bystanders were present, compared to when they were alone. Which combination of mechanisms best explains this counterintuitive finding?",
          choices: ['People are inherently less caring when in larger groups due to a fixed personality trait', 'Diffusion of responsibility (each individual feels less personally obligated to act since others could) combined with pluralistic ignorance (looking to others\' calm reactions to judge whether the situation is actually an emergency)', 'Larger groups always process information more slowly, causing a purely cognitive processing delay', 'Social facilitation, since more people present should improve performance on any task, including helping'],
          correct: 1,
          explanation: {
            correct: "The bystander effect is best explained by (at least) two interacting mechanisms: diffusion of responsibility, where each bystander feels less individually responsible to act because the responsibility is shared among everyone present, and pluralistic ignorance, where bystanders look to each other's outwardly calm reactions (everyone hesitating and monitoring everyone else) to judge whether the situation is really an emergency, which can lead the whole group to collectively misjudge and underreact.",
            wrong: { 0: "This attributes the effect to a fixed personality trait rather than the specific, well-documented SITUATIONAL mechanisms (diffusion of responsibility, pluralistic ignorance) that research has shown actually drive this behavior across many different people and contexts.", 2: "There's no strong evidence that this effect is purely about processing speed; it's specifically about motivational and social-perceptual factors influencing the DECISION to help, not a raw information-processing delay.", 3: "Social facilitation refers to improved performance on simple/well-practiced tasks in the presence of others, but the bystander effect specifically shows DECREASED helping behavior with more bystanders present in ambiguous emergency situations, essentially the opposite pattern from generic social facilitation." },
            tempting: "Choice D can tempt students who've learned 'social facilitation = more people, better performance' as a blanket rule, without recognizing that helping in an ambiguous, high-stakes emergency is a very different situation from simple, well-learned tasks where facilitation typically applies.",
            commonMistake: "Explaining the bystander effect with only one mechanism (usually just diffusion of responsibility) without also recognizing the complementary role of pluralistic ignorance in the full explanation.",
            apTip: "College-level insight: for full credit on an FRQ about the bystander effect, name BOTH diffusion of responsibility AND pluralistic ignorance as interacting mechanisms, ideally referencing the classic Kitty Genovese case and Latané and Darley's research — a one-mechanism explanation is generally considered an incomplete answer at the highest scoring level."
          }
        }
      ]
    }
  ],
  frqs: [
    {
      id: 'psych-frq-1', difficulty: 4, unit: 4,
      prompt: "A dog trainer wants to teach a dog to sit on command using operant conditioning principles.\n\n(a) Describe how the trainer could use positive reinforcement to teach this behavior, including a specific example.\n(b) Explain how a variable ratio schedule could be used to maintain the behavior long-term once learned, and why it would be more resistant to extinction than a fixed ratio schedule.\n(c) Explain how classical conditioning might separately play a role if the dog begins to get excited simply at the sight of the training treat bag, even before any command is given.",
      rubricPoints: [
        "Correctly describes positive reinforcement with a specific example (e.g., giving a treat immediately after the dog sits) (1 pt)",
        "Correctly explains that the added stimulus (treat) increases the frequency of the sitting behavior (1 pt)",
        "Correctly explains a variable ratio schedule as reinforcing after an unpredictable number of correct responses (1 pt)",
        "Correctly explains why variable ratio is more resistant to extinction (unpredictability makes it harder to detect when reinforcement has stopped) compared to fixed ratio (1 pt)",
        "Correctly identifies the treat bag becoming a conditioned stimulus through repeated pairing with the treat (unconditioned stimulus), eliciting excitement (conditioned response) (1 pt)"
      ],
      sampleResponse: "(a) The trainer could give the dog a treat immediately every time it sits after hearing the command 'sit.' Since the treat is a desirable stimulus being added after the behavior, and the behavior (sitting) increases in frequency over time, this is positive reinforcement.\n(b) Once the dog reliably sits on command, the trainer could switch to only rewarding sitting after an unpredictable number of successful attempts (sometimes after 1, sometimes after 4, etc.) — a variable ratio schedule. This is more resistant to extinction than a fixed ratio schedule because the dog cannot easily tell when reinforcement has actually stopped, since gaps between rewards were already unpredictable and inconsistent, so the dog continues sitting at a high, steady rate even during a temporary non-reinforcement period.\n(c) If the treat bag consistently appears right before treats are given, the previously neutral treat bag can become a conditioned stimulus through repeated pairing with the treat (the unconditioned stimulus, which naturally produces excitement, the unconditioned response). Over time, the sight of the bag alone can trigger excitement as a conditioned response, independent of the operant sit-training process."
    },
    {
      id: 'psych-frq-2', difficulty: 5, unit: 9,
      prompt: "A researcher studies helping behavior by staging a minor emergency (a person dropping papers and appearing to need help) in two conditions: Condition A, where the bystander is alone, and Condition B, where the bystander is in a group of 4 other people who are actually confederates instructed to ignore the emergency.\n\n(a) Predict and explain the likely difference in helping behavior between Condition A and Condition B, citing at least one specific named psychological mechanism.\n(b) Explain how pluralistic ignorance specifically could contribute to the result in Condition B.\n(c) Propose one specific modification to Condition B that could be expected to increase helping behavior, and explain why, referencing a psychological mechanism.",
      rubricPoints: [
        "Correctly predicts lower helping rates in Condition B compared to Condition A (1 pt)",
        "Names and correctly explains diffusion of responsibility as a mechanism (1 pt)",
        "Correctly explains pluralistic ignorance: the bystander looks to the confederates' calm, non-reactive behavior to judge whether the situation is actually an emergency, and the confederates' inaction leads the bystander to (mis)conclude it isn't urgent (1 pt)",
        "Proposes a specific, plausible modification (e.g., having one confederate acknowledge the emergency, reducing group size, or having the victim directly address one specific bystander) (1 pt)",
        "Correctly ties the proposed modification to a specific mechanism (e.g., directly addressing one person eliminates diffusion of responsibility by assigning clear individual responsibility) (1 pt)"
      ],
      sampleResponse: "(a) Helping behavior is likely to be lower in Condition B than Condition A. This is explained by diffusion of responsibility: when four other people are present, the bystander may feel that responsibility to help is shared among everyone present, reducing their own individual sense of obligation to act, compared to being alone where they are the only person who could possibly help.\n(b) Pluralistic ignorance could contribute because the bystander, uncertain whether the situation is truly an emergency, looks to the confederates' reactions for cues. Since the confederates are instructed to remain calm and ignore the event, the bystander may interpret this collective inaction as a signal that the situation isn't actually serious or urgent, further reducing the likelihood of helping.\n(c) One modification would be having the victim make direct eye contact with and speak directly to one specific bystander (e.g., 'you in the blue shirt, can you help me?') rather than addressing the group generally. This would be expected to increase helping because it removes the ambiguity about who is responsible — by assigning responsibility to one specific individual, it directly counteracts diffusion of responsibility, since that person can no longer assume someone else in the group will act instead."
    },
    {
      id: 'psych-frq-3', difficulty: 3, unit: 2,
      prompt: "A researcher studies identical (monozygotic) twins raised in different households, comparing their similarity on a personality trait to that of fraternal (dizygotic) twins raised together.\n\n(a) Explain what a HIGHER similarity in monozygotic twins raised apart compared to dizygotic twins raised together would suggest about genetic influence on this trait.\n(b) Explain why twin studies of this kind cannot fully separate genetic from environmental influence, even when using twins raised apart.\n(c) Explain the concept of heritability, and clarify what it does NOT mean about any single individual.",
      rubricPoints: [
        "Explains that greater similarity in monozygotic (100% shared genes) twins raised apart, compared to dizygotic twins (50% shared genes) raised together, suggests a genetic contribution to the trait, since shared genes (not shared environment) appears to be driving the similarity (1 pt)",
        "Explains a limitation: twins raised apart may still share some prenatal environment or be placed in similar types of adoptive homes, so environment isn't perfectly controlled (1 pt)",
        "Correctly explains heritability as a population-level statistic describing the proportion of variation in a trait attributable to genetic differences within that specific studied population, NOT a statement about how much of any individual's trait is 'caused by' genetics (1 pt)"
      ],
      sampleResponse: "(a) Higher similarity in monozygotic twins raised apart (who share 100% of their genes but different environments) compared to dizygotic twins raised together (who share only about 50% of their genes but the same environment) suggests that shared genetics, rather than shared environment, is driving the similarity, supporting a genetic contribution to the trait.\n(b) Even twins raised apart may share some prenatal environment (the same womb) and may be placed in adoptive homes with somewhat similar characteristics (agencies often try to match family backgrounds), so the environments aren't perfectly independent or randomized, limiting how cleanly genetic and environmental influences can be separated.\n(c) Heritability is a population-level statistic describing the proportion of variation in a trait within a specific studied population that can be statistically attributed to genetic differences among individuals in that population. It does NOT mean that a given percentage of any single individual's trait is 'caused by' genetics — heritability applies to differences ACROSS a population, not to an individual's own personal mix of genetic and environmental influence."
    },
    {
      id: 'psych-frq-4', difficulty: 3, unit: 1,
      prompt: "A researcher wants to study whether listening to music while studying improves test performance among college students.\n\n(a) Design a basic experiment to test this question, identifying the independent and dependent variables.\n(b) Explain why random assignment (not just random selection of participants) is essential for this experiment's validity.\n(c) Explain one potential confounding variable the researcher should control for, and how they might control for it.",
      rubricPoints: [
        "Correctly identifies independent variable (whether music is played while studying) and dependent variable (test performance/score) (1 pt)",
        "Explains random assignment balances confounding variables between groups, allowing causal conclusions about music's effect (1 pt)",
        "Identifies a specific plausible confound (e.g., type of music, volume, existing study habits, time of day) and a reasonable way to control it (e.g., standardizing music type/volume across all participants in the music condition) (1 pt)"
      ],
      sampleResponse: "(a) Independent variable: whether participants listen to music while studying (music vs. no music condition). Dependent variable: subsequent test performance/score. Participants would be randomly assigned to either study with music or without, then all take the same test under the same conditions.\n(b) Random assignment ensures that both known and unknown participant characteristics (like prior study habits, general academic ability, or personality traits) are balanced between the music and no-music groups, so any difference in test performance can be more confidently attributed to the music manipulation rather than pre-existing group differences.\n(c) One potential confound is the TYPE or volume of music used, since different types (e.g., lyrics vs. instrumental) might have very different effects; the researcher could control this by standardizing the specific music (same instrumental playlist, same volume) used across all participants in the music condition."
    },
    {
      id: 'psych-frq-5', difficulty: 3, unit: 3,
      prompt: "A person with damage to their primary visual cortex (occipital lobe) reports being unable to consciously see objects in part of their visual field, yet can still accurately guess the location or orientation of objects placed there when forced to respond — a phenomenon called \"blindsight.\"\n\n(a) Explain what blindsight suggests about the relationship between visual PROCESSING and conscious visual PERCEPTION/awareness.\n(b) Explain how this phenomenon illustrates that sensation and perception, while related, are not identical processes.\n(c) Propose a plausible explanation for how visual information could still be processed (enough to guess accurately) without reaching conscious awareness.",
      rubricPoints: [
        "Explains that blindsight suggests some visual information processing can occur without producing conscious visual awareness/perception (1 pt)",
        "Explains the sensation/perception distinction: sensation (detecting raw sensory input) can occur to some degree even when perception (the CONSCIOUS interpretation/awareness of that input) is impaired (1 pt)",
        "Proposes a plausible mechanism, such as some visual information being processed via alternative neural pathways that bypass the damaged primary visual cortex, feeding into brain regions that guide behavior without necessarily reaching the specific pathways needed for conscious awareness (1 pt)"
      ],
      sampleResponse: "(a) Blindsight suggests that some visual PROCESSING (detecting and responding to visual information) can occur separately from conscious visual PERCEPTION/awareness — the brain can process and act on visual information without the person consciously experiencing seeing it.\n(b) This illustrates that sensation (the raw detection of sensory information) and perception (the conscious interpretation and awareness of that information) are related but distinct processes; in blindsight, some level of sensory processing appears to occur (allowing accurate guessing) even though conscious perceptual awareness is absent.\n(c) A plausible explanation is that visual information may be processed via alternative neural pathways that bypass the damaged primary visual cortex, reaching other brain regions involved in guiding motor responses or spatial judgments, without passing through the specific pathways/regions responsible for producing conscious visual awareness."
    },
    {
      id: 'psych-frq-6', difficulty: 3, unit: 5,
      prompt: "A student studies a list of vocabulary words by simply re-reading them repeatedly, versus another student who studies by quizzing themselves on the words repeatedly (retrieval practice).\n\n(a) Predict which studying method would likely lead to better long-term retention, based on cognitive psychology research.\n(b) Explain the concept of the \"testing effect\" and how it relates to this scenario.\n(c) Explain why re-reading might create an illusion of learning that doesn't match actual long-term retention.",
      rubricPoints: [
        "Correctly predicts that retrieval practice (self-quizzing) leads to better long-term retention than re-reading (1 pt)",
        "Explains the testing effect: actively retrieving information from memory strengthens memory storage more effectively than passive re-exposure to the material (1 pt)",
        "Explains that re-reading creates FAMILIARITY with the material (which can feel like 'knowing' it), but this familiarity doesn't necessarily translate into the ability to actually RETRIEVE the information later without the material present, creating an illusion of learning (1 pt)"
      ],
      sampleResponse: "(a) Retrieval practice (self-quizzing) would likely lead to better long-term retention than simple re-reading, based on well-documented cognitive psychology research.\n(b) The testing effect refers to the finding that actively retrieving information from memory (as in self-quizzing) strengthens long-term memory storage more effectively than passively re-exposing oneself to the same material through re-reading; the act of retrieval itself is what strengthens the memory trace.\n(c) Re-reading creates a growing sense of FAMILIARITY with the material, which can feel like genuine mastery or 'knowing' the content; however, this familiarity doesn't necessarily reflect the ability to actually retrieve that information later without the material physically present, creating an illusion of learning that doesn't match actual long-term retention as tested by retrieval practice."
    },
    {
      id: 'psych-frq-7', difficulty: 4, unit: 6,
      prompt: "A researcher studies attachment styles in infants using the Strange Situation procedure and later follows up with these same individuals in early adulthood, examining their romantic relationship patterns.\n\n(a) Describe the general hypothesis that early attachment style might predict later relationship patterns, based on attachment theory.\n(b) Explain one methodological challenge in establishing this kind of long-term (longitudinal) causal claim.\n(c) Propose one alternative explanation (other than early attachment style directly causing adult relationship patterns) for a correlation between infant attachment style and adult relationship patterns.",
      rubricPoints: [
        "Describes the attachment theory hypothesis: early attachment patterns (secure, avoidant, resistant/ambivalent) may form internal working models that influence expectations and behavior in later relationships, including romantic ones (1 pt)",
        "Identifies a methodological challenge, such as the long time span allowing many other intervening life experiences to also influence adult relationship patterns, making it hard to isolate infant attachment's specific causal contribution (1 pt)",
        "Proposes a plausible alternative explanation, such as a stable underlying temperament or family environment factor that influences BOTH infant attachment style and later adult relationship patterns, rather than one directly causing the other (1 pt)"
      ],
      sampleResponse: "(a) Attachment theory hypothesizes that early attachment experiences shape internal working models — mental templates for what relationships are like and what to expect from others — which may then influence expectations, behaviors, and patterns in later relationships, including romantic relationships in adulthood.\n(b) A key methodological challenge is that many other life experiences occur between infancy and adulthood (other relationships, family changes, life events) that could also shape adult relationship patterns, making it difficult to isolate how much of any correlation is specifically attributable to early infant attachment style versus these many other intervening factors.\n(c) An alternative explanation is that a stable underlying factor, such as a consistent family environment or a child's inherited temperament, could independently influence BOTH infant attachment style AND later adult relationship patterns, without infant attachment itself directly causing the adult pattern — the correlation could reflect this shared underlying influence rather than direct causation."
    },
    {
      id: 'psych-frq-8', difficulty: 3, unit: 7,
      prompt: "A person who was previously very motivated to complete an art project for personal enjoyment begins to lose interest after being told they will be paid for each finished piece.\n\n(a) Identify the psychological phenomenon this describes.\n(b) Explain the underlying mechanism proposed to cause this shift in motivation.\n(c) Suggest one practical implication of this phenomenon for how workplaces or schools might structure rewards.",
      rubricPoints: [
        "Correctly identifies this as the overjustification effect (1 pt)",
        "Explains that the added extrinsic reward can cause a person to reattribute their motivation for the activity from internal enjoyment to the external reward, undermining the original intrinsic motivation (1 pt)",
        "Suggests a reasonable practical implication, such as being cautious about introducing extrinsic rewards for activities people already find intrinsically enjoyable, since this could reduce their long-term intrinsic engagement once the reward is removed or de-emphasized (1 pt)"
      ],
      sampleResponse: "(a) This describes the overjustification effect.\n(b) The proposed mechanism is that introducing an extrinsic reward causes the person to reattribute their reason for engaging in the activity — shifting from 'I do this because I enjoy it' (intrinsic motivation) to 'I do this for the reward' (extrinsic motivation) — which can undermine the original intrinsic enjoyment, especially once the reward is removed or no longer emphasized.\n(c) A practical implication is that workplaces or schools should be cautious about introducing extrinsic rewards (like grades, prizes, or pay) for activities people already find intrinsically enjoyable or meaningful, since this could unintentionally reduce their long-term intrinsic motivation and engagement with the activity once the external reward is no longer present or salient."
    },
    {
      id: 'psych-frq-9', difficulty: 4, unit: 8,
      prompt: "A patient is diagnosed with both major depressive disorder and generalized anxiety disorder simultaneously (comorbidity).\n\n(a) Explain what comorbidity means in this clinical context.\n(b) Propose one possible explanation for why these two disorders frequently co-occur (share high comorbidity rates).\n(c) Explain why understanding comorbidity is clinically important for treatment planning.",
      rubricPoints: [
        "Correctly explains comorbidity as the co-occurrence of two or more distinct diagnosable disorders in the same individual (1 pt)",
        "Proposes a plausible explanation, such as shared underlying risk factors (genetic vulnerability, chronic stress, or overlapping symptom profiles) contributing to both disorders (1 pt)",
        "Explains the clinical importance: treatment may need to address both conditions simultaneously, since treating only one disorder in isolation might be less effective if the comorbid condition continues to interact with and exacerbate symptoms (1 pt)"
      ],
      sampleResponse: "(a) Comorbidity refers to the co-occurrence of two or more distinct diagnosable disorders within the same individual at the same time — in this case, the patient meets diagnostic criteria for both major depressive disorder and generalized anxiety disorder simultaneously.\n(b) One possible explanation is that these two disorders share underlying risk factors, such as a common genetic vulnerability, chronic stress exposure, or overlapping neurobiological/cognitive risk factors (like a tendency toward negative thinking patterns), which could independently increase risk for both conditions.\n(c) Understanding comorbidity is clinically important because treatment often needs to address both conditions together rather than in isolation; treating only one disorder while ignoring the other comorbid condition might be less effective overall, since the untreated condition could continue to interact with and potentially worsen or maintain symptoms of the treated condition."
    },
    {
      id: 'psych-frq-10', difficulty: 3, unit: 4,
      prompt: "A student experiences a sudden, unexpected fright (nearly getting into a car accident), and notices their heart racing and hands shaking immediately afterward, followed by a subjective feeling of fear.\n\n(a) Explain how the James-Lange theory of emotion would interpret this sequence of events.\n(b) Explain how the Cannon-Bard theory would instead interpret this same sequence.\n(c) Describe what additional information (beyond just this one scenario) could help determine which theory better explains a given case of emotional response.",
      rubricPoints: [
        "Correctly applies James-Lange: physiological response (racing heart, shaking hands) occurs first, and the subjective emotion (fear) is the interpretation of that bodily response (1 pt)",
        "Correctly applies Cannon-Bard: physiological arousal and the subjective emotional experience occur simultaneously and independently, rather than one directly causing the other (1 pt)",
        "Proposes a reasonable way to distinguish the theories, such as examining the precise timing/sequence of physiological versus subjective emotional responses in controlled studies, or studying cases where physiological arousal is blocked/altered to see if emotional experience is also affected accordingly (1 pt)"
      ],
      sampleResponse: "(a) According to James-Lange theory, the physiological response (racing heart, shaking hands) occurs first, and the subjective feeling of fear is essentially the person's interpretation of that bodily arousal — 'I feel afraid because my heart is racing and hands are shaking.'\n(b) According to Cannon-Bard theory, the physiological arousal and the subjective emotional experience of fear would occur simultaneously and independently of each other, both triggered directly by the brain's processing of the frightening event, rather than the emotion being caused by first noticing the bodily arousal.\n(c) Controlled studies examining the precise timing of physiological arousal versus subjective emotional experience, or studies involving patients with conditions that block or alter physiological arousal responses (to see whether their emotional experience is also correspondingly reduced or unaffected), could help distinguish which theory better explains the relationship between bodily arousal and emotional experience."
    },
    {
      id: 'psych-frq-11', difficulty: 3, unit: 1,
      prompt: "A researcher publishes a study finding a surprising, novel effect, but a separate research team later fails to replicate the finding using a larger sample and more rigorous methodology.\n\n(a) Explain what \"publication bias\" is, and how it might have contributed to the original surprising finding being published in the first place.\n(b) Explain why the failed replication with a LARGER sample and more rigorous methodology should generally be weighted more heavily than the original finding.\n(c) Explain why this scenario does not necessarily mean the original researchers acted dishonestly.",
      rubricPoints: [
        "Correctly explains publication bias as the tendency for journals to preferentially publish novel, statistically significant findings over null results (1 pt)",
        "Explains that this bias means some published 'significant' findings may actually be false positives that occurred by chance, especially before being tested by independent replication (1 pt)",
        "Explains that larger samples and more rigorous methods generally produce more reliable, higher-powered results, making a failure to replicate under these improved conditions meaningful evidence against the original finding (1 pt)",
        "Explains that failed replications can occur due to normal, honest statistical variability (the original result being a chance false positive) rather than any dishonesty or misconduct by the original researchers (1 pt)"
      ],
      sampleResponse: "(a) Publication bias refers to the tendency of academic journals to preferentially publish novel, statistically significant ('positive') results over null or non-significant findings; this bias means that a surprising, significant result is more likely to get published in the first place, even if some published significant findings are actually false positives that occurred by chance.\n(b) A larger sample size generally provides more statistical power and a more precise estimate of the true effect, and more rigorous methodology reduces the chances of confounding or bias affecting the results; a well-designed, well-powered failed replication provides strong evidence that the original effect may not be real, or may be much smaller than originally reported.\n(c) Failed replications are a normal, expected part of the scientific process and don't necessarily indicate dishonesty; the original finding could have been an honest false positive (a chance statistical fluke) given the inherent uncertainty in any single study, which is exactly why independent replication is such an important part of building confidence in scientific findings."
    },
    {
      id: 'psych-frq-12', difficulty: 4, unit: 2,
      prompt: "A patient with damage to their amygdala shows a marked reduction in fear responses, even in genuinely dangerous situations, while other cognitive functions remain largely intact.\n\n(a) Explain the amygdala's normal role in emotional processing, based on this observation.\n(b) Explain why this case demonstrates a degree of localization of function in the brain.\n(c) Explain one important limitation of drawing broad conclusions about brain-behavior relationships from a single patient case.",
      rubricPoints: [
        "Explains the amygdala's normal role in processing fear and threat-related emotional responses (1 pt)",
        "Explains that since fear responses are specifically reduced while other functions remain intact, this suggests fear processing is at least partly localized to (or heavily dependent on) the amygdala specifically, rather than diffusely distributed (1 pt)",
        "Identifies a limitation, such as single-case studies not necessarily generalizing to all individuals, since other factors (like the extent of damage, individual differences, or compensatory brain changes) could affect the specific outcome observed (1 pt)"
      ],
      sampleResponse: "(a) This observation suggests the amygdala plays a central role in processing fear and threat-related emotional responses, since its damage specifically and significantly reduces fear responses.\n(b) Because fear processing specifically is impaired while other cognitive functions remain largely intact, this demonstrates localization of function — the idea that specific brain regions are specialized for particular psychological functions, in this case the amygdala for fear processing specifically, rather than fear being a function diffusely distributed with no specific localized basis.\n(c) A key limitation is that conclusions from a single patient case may not generalize to all individuals; the specific extent and location of damage, individual differences in brain organization, and potential compensatory changes in other brain regions could all affect this particular outcome, making it risky to draw broad, universal conclusions about amygdala function from just one case."
    },
    {
      id: 'psych-frq-13', difficulty: 4, unit: 3,
      prompt: "Two people are shown the same ambiguous image; one perceives a duck, the other perceives a rabbit, and each is quite confident in their initial interpretation.\n\n(a) Explain this phenomenon in terms of top-down processing.\n(b) Explain how prior experience or context could lead two people to form different initial interpretations of the identical sensory input.\n(c) Explain what would need to happen for one of these viewers to \"switch\" their perception to see the alternative image.",
      rubricPoints: [
        "Correctly identifies this as evidence of top-down processing, where prior knowledge/expectations shape interpretation of ambiguous sensory data (1 pt)",
        "Explains that differing prior experiences, expectations, or recent context (perceptual set) could predispose each viewer toward a different initial interpretation of the same raw sensory input (1 pt)",
        "Explains that the viewer would need to consciously reorganize/reinterpret the same visual information, often by having certain features pointed out or by shifting attention to different parts of the image, to perceive the alternative interpretation (1 pt)"
      ],
      sampleResponse: "(a) This demonstrates top-down processing, in which prior knowledge, expectations, or context shape how ambiguous sensory information is interpreted, rather than the interpretation being determined purely by the raw sensory data itself (bottom-up processing).\n(b) Differing prior experiences (such as recently seeing images of ducks vs. rabbits, or having a personal association with one animal more than the other) could create a perceptual set — a predisposition to interpret ambiguous information in a particular way — leading each viewer to settle on a different initial interpretation of the identical image.\n(c) For a viewer to switch their perception, they typically need to consciously reorganize how they're interpreting the same visual features — often by having specific ambiguous features pointed out to them, or by deliberately shifting their attention to different parts of the image — allowing the alternative interpretation to become apparent."
    },
    {
      id: 'psych-frq-14', difficulty: 3, unit: 5,
      prompt: "A student uses flashcards with spaced repetition (reviewing cards at increasing intervals over time) to study for an exam, rather than cramming all their studying into one long session the night before.\n\n(a) Predict which method would likely lead to better long-term retention, and name the relevant psychological principle.\n(b) Explain why spacing out study sessions over time tends to produce better retention than massed practice (cramming).\n(c) Explain one practical challenge students might face in actually implementing a spaced practice study schedule.",
      rubricPoints: [
        "Correctly predicts spaced practice leads to better long-term retention, and names the spacing effect (1 pt)",
        "Explains that spaced review requires retrieving information after some forgetting has begun, strengthening memory more than passively cramming while everything is still fresh (1 pt)",
        "Identifies a practical challenge, such as requiring more advance planning/self-discipline compared to the more immediately convenient (though less effective) cramming approach (1 pt)"
      ],
      sampleResponse: "(a) Spaced repetition would likely lead to better long-term retention than cramming; this is known as the spacing effect.\n(b) Spacing out review sessions requires retrieving information after some forgetting has already begun to occur, and this effortful retrieval (compared to passively cramming while information is still fresh and easy to access) more effectively strengthens the memory trace for long-term storage.\n(c) A practical challenge is that spaced practice requires more advance planning and sustained self-discipline over a longer period of time, compared to the more immediately convenient (though less effective for long-term retention) approach of cramming all studying into one session shortly before an exam."
    },
    {
      id: 'psych-frq-15', difficulty: 4, unit: 6,
      prompt: "A 4-year-old child insists that a tall, thin glass of juice has \"more\" juice than an identical amount poured into a short, wide glass, even after watching the juice poured between the two.\n\n(a) Identify the Piagetian developmental stage this child is likely in, and explain the specific cognitive limitation being demonstrated.\n(b) Predict how a 9-year-old child would likely respond to the same task, and explain why.\n(c) Explain the term \"conservation\" as used in this context.",
      rubricPoints: [
        "Correctly identifies the preoperational stage (1 pt)",
        "Explains the child is demonstrating a lack of conservation — focusing on one perceptual dimension (height) rather than understanding that quantity remains constant despite a change in container shape (1 pt)",
        "Predicts a 9-year-old (in the concrete operational stage) would correctly recognize the amounts are equal, having developed conservation abilities (1 pt)",
        "Correctly defines conservation as the understanding that a quantity remains the same despite changes in its shape or appearance (1 pt)"
      ],
      sampleResponse: "(a) This child is likely in Piaget's preoperational stage (roughly ages 2-7). The child is demonstrating a lack of conservation, focusing only on the more visually striking dimension (height of the liquid) rather than understanding that the actual quantity of juice hasn't changed just because it was poured into a different-shaped container.\n(b) A 9-year-old, likely in the concrete operational stage, would probably correctly recognize that both glasses contain the same amount of juice, since children in this stage have typically developed conservation abilities, understanding that quantity remains constant despite changes in appearance.\n(c) Conservation refers to the understanding that a quantity (such as volume, number, or mass) remains the same even when its outward appearance or shape changes, as long as nothing has been added or removed."
    },
    {
      id: 'psych-frq-16', difficulty: 3, unit: 7,
      prompt: "A person scores very high on a personality measure of conscientiousness but reports behaving quite differently (more disorganized, less disciplined) in a specific, unusually stressful and unfamiliar situation compared to their everyday behavior.\n\n(a) Explain how the interactionist (person-situation) perspective on personality would account for this observation.\n(b) Explain why this observation does not necessarily mean trait theories of personality are entirely wrong.\n(c) Propose one way a researcher could test whether this person's behavior is more strongly influenced by their trait (conscientiousness) or by the specific situation.",
      rubricPoints: [
        "Correctly applies the interactionist perspective: both stable personality traits AND specific situational factors jointly influence behavior, so unusual situations can produce behavior that deviates from a person's typical trait-based tendency (1 pt)",
        "Explains that trait theories aren't necessarily wrong, since the person's AVERAGE behavior across many situations may still be well-predicted by their trait level, even if any single unusual situation shows deviation (1 pt)",
        "Proposes a reasonable test, such as observing the person's behavior across MANY different situations (not just this one unusual case) to see whether their average behavior aligns with their trait score, or comparing their behavior in this situation to how OTHER people (with different trait levels) behave in the same situation (1 pt)"
      ],
      sampleResponse: "(a) The interactionist perspective holds that both a person's stable traits AND the specific situation jointly influence behavior; a highly conscientious person can still show atypical (less organized/disciplined) behavior in an unusually stressful, unfamiliar situation, since the situational factors are exerting a strong influence that temporarily overrides their typical trait-based tendency.\n(b) This doesn't necessarily invalidate trait theory, since the person's AVERAGE behavior across MANY different situations may still be well-predicted by their high conscientiousness trait score, even if this one particular unusual situation produced an atypical deviation — traits describe general tendencies across situations, not perfectly rigid behavior in every single instance.\n(c) A researcher could observe this person's behavior across many different situations (not just this one unusual case) to see whether their average behavior aligns with their high conscientiousness score, or compare their behavior in this specific stressful situation to how other people with DIFFERENT trait levels behave in that same situation, to see if trait level still predicts relative differences even under unusual conditions."
    },
    {
      id: 'psych-frq-17', difficulty: 4, unit: 8,
      prompt: "A therapist uses cognitive-behavioral therapy (CBT) to treat a client with generalized anxiety disorder, focusing on identifying and challenging the client's catastrophic thought patterns.\n\n(a) Explain the core assumption of CBT regarding the relationship between thoughts, feelings, and behaviors.\n(b) Describe a specific technique a CBT therapist might use to address a client's catastrophic thinking (e.g., \"I'll definitely fail and everyone will judge me\").\n(c) Explain how CBT differs from a purely psychoanalytic approach in terms of its focus and technique.",
      rubricPoints: [
        "Explains CBT's core assumption: thoughts, feelings, and behaviors are interconnected, and changing distorted/maladaptive thought patterns can improve emotional and behavioral outcomes (1 pt)",
        "Describes a specific, plausible CBT technique, such as cognitive restructuring (identifying the catastrophic thought, examining evidence for/against it, and replacing it with a more realistic, balanced thought) (1 pt)",
        "Explains that CBT focuses on current, conscious thought patterns and behaviors using structured techniques, while psychoanalysis focuses on uncovering unconscious conflicts often rooted in early childhood experiences, using different techniques like free association (1 pt)"
      ],
      sampleResponse: "(a) CBT's core assumption is that thoughts, feelings, and behaviors are interconnected, and that maladaptive or distorted thought patterns can directly contribute to negative emotions and unhelpful behaviors; by identifying and changing these distorted thoughts, a person's emotional and behavioral outcomes can improve.\n(b) A CBT therapist might use cognitive restructuring: helping the client identify the specific catastrophic thought (\"I'll definitely fail and everyone will judge me\"), examine the actual evidence for and against this thought, and work with the client to develop a more realistic, balanced alternative thought (such as \"I might not do perfectly, but one imperfect performance doesn't mean everyone will judge me harshly\").\n(c) CBT focuses on current, conscious thought patterns and behaviors, using structured, present-focused techniques like cognitive restructuring and behavioral exercises; psychoanalysis instead focuses on uncovering UNCONSCIOUS conflicts, often rooted in early childhood experiences, using different techniques like free association and dream analysis to access this unconscious material."
    },
    {
      id: 'psych-frq-18', difficulty: 4, unit: 9,
      prompt: "In a classic experiment, participants were more likely to conform to an obviously incorrect group answer about line length when the group consisted of several confederates, compared to when they answered alone.\n\n(a) Identify the specific type of social influence being demonstrated, and explain the underlying motivation.\n(b) Explain one factor that has been shown to DECREASE conformity in variations of this experiment.\n(c) Explain the difference between this phenomenon and obedience, using Milgram's research as a point of comparison.",
      rubricPoints: [
        "Correctly identifies normative social influence, motivated by a desire to be liked/accepted or avoid standing out from the group (1 pt)",
        "Identifies a factor shown to decrease conformity, such as having at least one dissenting confederate (breaking group unanimity) (1 pt)",
        "Correctly distinguishes conformity (yielding to peer/group social pressure) from obedience (complying with a direct order from an authority figure, as in Milgram's studies) (1 pt)"
      ],
      sampleResponse: "(a) This demonstrates normative social influence — conforming to fit in with the group, be liked, or avoid the discomfort of standing out, even when privately believing the group's answer is incorrect.\n(b) Introducing even one dissenting confederate (breaking the group's unanimous agreement) has been shown to significantly decrease conformity, since the participant no longer feels alone in disagreeing with the majority.\n(c) Conformity involves yielding to social pressure from PEERS (a group of equals), as in this line-judgment task, whereas obedience (as studied by Milgram) involves complying with a direct order from an AUTHORITY figure; both involve social influence, but they differ in the source of that influence (peer group vs. authority) and are often measured using different classic experimental designs (Asch's conformity studies vs. Milgram's obedience studies)."
    }
  ]
}
