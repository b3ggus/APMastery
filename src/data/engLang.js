// AP English Language and Composition — 9 units matching the College Board's
// skill-based course structure (rhetorical situation, argumentation, style),
// as opposed to a chronological/content-based structure. All illustrative
// passages and quotes below are original material written for this app, not
// excerpts from real copyrighted texts, in keeping with the course's skill
// (not canon-text) focus and to avoid any copyright concerns.

export const engLang = {
  id: 'eng-lang',
  name: 'AP English Language and Composition',
  icon: '✍️',
  accent: 'ember',
  units: [
    {
      id: 1,
      name: 'Unit 1: Claims, Reasoning, and Evidence',
      questions: [
        {
          id: 'aplang-1-1', difficulty: 1, type: 'mcq', topic: 'The Rhetorical Situation',
          prompt: "The \"rhetorical situation\" of a text refers to:",
          choices: ["The grammatical structure of a text's individual sentences", "The combination of exigence, audience, purpose, context, and speaker/writer that shapes why and how a text was created", "The specific font and visual formatting used in a printed document", "The total word count of a given piece of writing"],
          correct: 1,
          explanation: {
            correct: "The rhetorical situation encompasses the exigence (the issue or problem prompting the writing), the intended audience, the writer's purpose, the surrounding context (time, place, occasion), and the speaker/writer themselves — together, these elements shape why a text was created and how it's constructed to achieve its goals.",
            wrong: { 0: "Sentence-level grammar is a much narrower, mechanical concern — the rhetorical situation is a broader concept encompassing the full context and purpose surrounding a text's creation, not just its grammatical construction.", 2: "Visual formatting (font, layout) may occasionally be relevant to a text's presentation, but it is not what defines the 'rhetorical situation' — this term specifically refers to the exigence/audience/purpose/context framework.", 3: "Word count is a purely quantitative measure unrelated to the rhetorical situation, which concerns the underlying communicative context and purpose driving the text's creation." },
            tempting: "None of the distractors closely match the actual definition, but conflating 'rhetorical' with narrow stylistic/formatting concerns (choice C) is a common early misunderstanding.",
            commonMistake: "Treating 'rhetorical situation' as a vague synonym for 'writing style' rather than recognizing its specific, defined components (exigence, audience, purpose, context, speaker).",
            apTip: "Memorize the key rhetorical situation components: exigence (what prompted the writing), audience (who it's for), purpose (what the writer wants to accomplish), context (surrounding circumstances), and speaker/writer (who is communicating) — MCQs and FRQs alike frequently ask you to identify one or more of these elements in a given passage."
          }
        },
        {
          id: 'aplang-1-2', difficulty: 2, type: 'mcq', topic: 'Exigence',
          prompt: "In rhetorical analysis, \"exigence\" refers to:",
          choices: ["The specific word choice an author uses throughout a text", "The catalyst, problem, or urgent circumstance that prompts a writer to create a particular text at a particular time", "The intended audience of a piece of writing", "The overall length of an argumentative essay"],
          correct: 1,
          explanation: {
            correct: "Exigence is the catalyst or urgent circumstance — a problem, event, or need — that motivates a writer to compose a particular text at a particular moment. Identifying the exigence helps explain WHY a text was written when and how it was.",
            wrong: { 0: "Word choice (diction) is a stylistic element writers use WITHIN a text, not the underlying circumstance that PROMPTED the text's creation in the first place — this describes diction, not exigence.", 2: "Audience is a related but distinct rhetorical situation component (WHO the text is directed toward), separate from exigence (WHAT prompted the writing to occur).", 3: "Length is a structural/formatting characteristic unrelated to exigence, which specifically concerns the motivating circumstance behind a text's creation." },
            tempting: "Choice C is tempting because audience and exigence are both rhetorical situation components often discussed together, but they answer different questions — exigence asks 'why now/what prompted this,' while audience asks 'who is this for.'",
            commonMistake: "Confusing exigence (the prompting circumstance) with audience (the intended readers/listeners) — both are components of the rhetorical situation, but they identify different things.",
            apTip: "When identifying exigence in a passage, look for language signaling urgency or a specific triggering event/problem (\"in light of recent events,\" \"given the crisis,\" etc.) — exigence explains the 'why now' behind a text."
          }
        },
        {
          id: 'aplang-1-3', difficulty: 2, type: 'mcq', topic: 'Claims and Evidence',
          prompt: "In an argumentative essay, a \"claim\" is best defined as:",
          choices: ["A statement or position that requires support or defense through evidence and reasoning", "A direct quotation copied from an outside source", "A grammatically complete sentence, regardless of its content", "A rhetorical question posed to the reader"],
          correct: 0,
          explanation: {
            correct: "A claim is a statement or position the writer puts forward that requires — and is not automatically accepted without — support through evidence and reasoning. Claims form the backbone of an argument, which the writer must then defend.",
            wrong: { 1: "A direct quotation is a specific TYPE of evidence a writer might use TO SUPPORT a claim, not the claim itself — the claim is the writer's own asserted position, not borrowed text.", 2: "Any grammatically complete sentence could simply be a factual statement, description, or transition — a claim specifically requires the DEBATABLE, defensible quality of asserting a position that needs support.", 3: "A rhetorical question is a specific stylistic device used to engage a reader or imply a point indirectly — it is not the same as directly asserting a defensible claim." },
            tempting: "Choice B is tempting since quotations often appear near claims in an argument, but a quotation functions as SUPPORTING EVIDENCE for a claim, not as the claim itself.",
            commonMistake: "Confusing a claim (the writer's own defensible assertion) with evidence used to support it (quotations, statistics, examples) — these serve different structural roles in an argument.",
            apTip: "A strong claim is debatable (someone could reasonably disagree) and specific enough to be defended with concrete evidence — vague or purely factual statements that no one would dispute don't function well as argumentative claims."
          }
        },
        {
          id: 'aplang-1-4', difficulty: 3, type: 'mcq', topic: 'Types of Evidence',
          prompt: "A writer arguing that a new city park would benefit the community cites a statistic showing that neighborhoods with green space report 20% lower stress levels, based on a university study. This type of evidence is best classified as:",
          choices: ["An anecdote", "Statistical/empirical evidence drawn from research", "A rhetorical question", "An appeal to tradition"],
          correct: 1,
          explanation: {
            correct: "A specific numerical statistic drawn from a university study is a clear example of statistical or empirical evidence — data-based support intended to lend objective, research-backed credibility to the writer's claim.",
            wrong: { 0: "An anecdote is a specific personal story or brief narrative example, not a numerical statistic from a formal research study — these are different evidence types with different persuasive functions.", 2: "A rhetorical question is a stylistic device (a question posed for effect, not requiring a literal answer), not a form of evidence at all — it doesn't provide supporting data.", 3: "An appeal to tradition would argue something is good/correct because it has \"always been done this way\" — this doesn't match a specific, current research statistic being cited." },
            tempting: "Choice A is tempting because both anecdotes and statistics are common evidence types in the same argument, but they are DISTINCT categories — one is a specific story, the other is aggregated numerical data.",
            commonMistake: "Not distinguishing between different types of evidence (anecdotal, statistical, expert testimony, historical example) when analyzing how a writer builds support for a claim.",
            apTip: "Know the common evidence types tested on the exam: anecdotal (personal stories), statistical/empirical (data, research findings), expert testimony (citing authorities), and historical/precedent-based examples — identifying WHICH type is used, and evaluating its effectiveness for the specific audience, is a frequently tested skill."
          }
        },
        {
          id: 'aplang-1-5', difficulty: 3, type: 'mcq', topic: 'Reasoning and Logical Connections',
          prompt: "In the sentence \"Because the company invested heavily in employee training last year, and because well-trained employees tend to be more productive, the company's productivity likely increased this year,\" the underlined logical structure connecting the evidence to the claim is best described as:",
          choices: ["A rhetorical question", "A line of reasoning connecting cited evidence (training investment, general link between training and productivity) to a resulting claim (likely productivity increase)", "An anecdote with no logical connection to the claim", "A purely emotional appeal with no logical structure"],
          correct: 1,
          explanation: {
            correct: "This sentence demonstrates a clear line of reasoning: it connects two pieces of evidence/premises (training investment occurred; training generally boosts productivity) through logical inference to arrive at a resulting claim (productivity likely increased) — this is exactly what \"reasoning\" means in argumentative writing: the logical bridge connecting evidence to claims.",
            wrong: { 0: "No question is posed in this sentence at all — it is a declarative statement building a logical argument, not a rhetorical question.", 2: "This is not merely an anecdote (a brief personal story); it's a structured logical argument connecting general premises to a specific conclusion — anecdotes lack this kind of explicit logical chaining.", 3: "This reasoning is explicitly LOGICAL (following an if-then, premise-to-conclusion structure), not emotional — there is no appeal to feelings, values, or emotional response here, just structured inference." },
            tempting: "None of the distractors accurately describe this logical structure, but underestimating how explicit and traceable this line of reasoning is (in favor of calling it a vaguer 'appeal') misses the specific logical chaining at work.",
            commonMistake: "Not recognizing explicit \"because...because...therefore\" logical structures as a clear line of reasoning connecting evidence to claims — this reasoning is the crucial logical bridge that MCQs and FRQs often ask you to identify and evaluate.",
            apTip: "Reasoning is the logical explanation connecting evidence to a claim — it answers the question \"how/why does this evidence support this specific claim?\" Strong argumentative writing makes this reasoning EXPLICIT, rather than simply presenting evidence and a claim side by side and leaving the reader to infer the connection."
          }
        },
        {
          id: 'aplang-1-6', difficulty: 2, type: 'mcq', topic: 'Evaluating Evidence Relevance',
          prompt: "A writer arguing for stricter regulations on a specific industrial chemical cites a study about an entirely different, unrelated chemical's health effects. This evidence would most likely be criticized as:",
          choices: ["Perfectly relevant and strongly supportive of the claim", "Irrelevant or insufficiently connected to the specific claim being made, weakening the argument's overall effectiveness", "An example of a rhetorical question", "A properly cited statistical appeal with no weaknesses"],
          correct: 1,
          explanation: {
            correct: "Evidence about a completely different, unrelated chemical does not directly support a claim about THIS specific chemical's regulation — for evidence to effectively support a claim, it must be clearly and directly relevant to that specific claim, not merely adjacent or superficially related.",
            wrong: { 0: "Evidence about an unrelated chemical is NOT strongly supportive — it fails the basic relevance test needed for evidence to effectively support a specific claim, since the connection between the evidence and the actual claim is weak or absent.", 2: "This scenario doesn't involve any question being posed — it involves citing evidence, which then must be evaluated for its RELEVANCE to the claim being made, not classified as a rhetorical question.", 3: "While the evidence might be a real statistic from a real study, its RELEVANCE to this specific claim (about a different chemical) is the problem — being 'properly cited' doesn't automatically make evidence relevant or persuasive for a specific argument." },
            tempting: "Choice D is tempting because the evidence might be accurately cited and factually true, but citation accuracy doesn't guarantee RELEVANCE — evidence must directly connect to and support the specific claim being argued.",
            commonMistake: "Assuming any factual, well-cited evidence automatically strengthens an argument, without evaluating whether that evidence is actually RELEVANT and directly connected to the specific claim being made.",
            apTip: "When evaluating evidence in rhetorical analysis (or when using evidence in your own argumentative writing), always ask: does this evidence DIRECTLY support THIS specific claim? Evidence that is only tangentially or superficially related — even if factually accurate — weakens rather than strengthens an argument."
          }
        }
      ]
    },
    {
      id: 2,
      name: 'Unit 2: Audience and Thesis Development',
      questions: [
        {
          id: 'aplang-2-1', difficulty: 2, type: 'mcq', topic: 'Analyzing Audience',
          prompt: "A writer drafting an op-ed for a local newspaper about a proposed tax increase should primarily consider which of the following about their audience?",
          choices: ["The audience's existing beliefs, values, and likely level of prior knowledge about the specific local tax issue", "The audience's preferred font size for reading printed text", "The exact number of readers who will see the newspaper on a given day", "The audience's opinions on completely unrelated national political issues"],
          correct: 0,
          explanation: {
            correct: "Effective audience analysis for a persuasive piece requires considering the audience's existing beliefs, values, and level of prior knowledge about the SPECIFIC issue at hand — this understanding shapes what evidence will be persuasive, what needs to be explained versus assumed, and what tone/approach will resonate.",
            wrong: { 1: "Font size is a formatting/publication detail unrelated to the substantive analysis of what the audience believes, values, or knows — it does not shape the argument's content or persuasive strategy.", 2: "The precise readership NUMBER is a circulation statistic, not a substantive audience characteristic relevant to shaping persuasive content or approach.", 3: "Opinions on UNRELATED national issues are not directly relevant to this SPECIFIC local tax argument — audience analysis should focus on beliefs and knowledge relevant to the actual topic being argued." },
            tempting: "None of the distractors represent genuine audience analysis, but focusing on irrelevant background opinions (choice D) could tempt students who overgeneralize 'know your audience' too broadly.",
            commonMistake: "Conflating superficial audience facts (numbers, formatting preferences) with the substantively relevant audience characteristics (existing beliefs, values, prior knowledge on the SPECIFIC topic) that actually shape effective persuasive strategy.",
            apTip: "When analyzing or constructing audience appeals, focus specifically on what this particular audience already believes or values REGARDING THE SPECIFIC TOPIC — this determines what needs justification, what common ground can be assumed, and what tone will be most persuasive."
          }
        },
        {
          id: 'aplang-2-2', difficulty: 2, type: 'mcq', topic: 'Thesis Statements',
          prompt: "A strong thesis statement in an argumentative essay should:",
          choices: ["State an obvious fact that no reasonable reader would dispute", "Present a specific, debatable claim that the rest of the essay will develop and defend with reasoning and evidence", "Simply restate the essay's topic without taking any particular position", "Ask a question that the essay leaves unanswered"],
          correct: 1,
          explanation: {
            correct: "A strong thesis presents a specific, debatable claim — a position a reasonable person COULD disagree with — that the rest of the essay then develops and defends using reasoning and evidence. This specificity and debatability give the essay a clear argumentative purpose to work toward.",
            wrong: { 0: "An obvious, undisputed fact doesn't require argumentative defense — a thesis needs to be DEBATABLE (open to reasonable disagreement) to give the essay something meaningful to argue for.", 2: "Simply restating the topic (e.g., \"This essay is about renewable energy\") doesn't take any actual POSITION — a thesis must assert a specific, defensible claim about that topic, not just announce the topic itself.", 3: "An unanswered question doesn't provide the reader with the writer's actual POSITION or claim — a thesis should assert a clear stance, not merely raise an open question." },
            tempting: "Choice C is tempting because student writers sometimes mistake a topic announcement for an actual thesis, but a genuine thesis must go further and stake out a specific, defensible position on that topic.",
            commonMistake: "Writing a thesis that merely announces a topic or states an obvious, undisputed fact, rather than asserting a specific, debatable position that requires — and can be — defended with evidence and reasoning throughout the essay.",
            apTip: "Test your thesis with this question: could a reasonable, informed person disagree with this statement? If not — if it's simply an obvious fact or a topic announcement — it needs to be sharpened into a specific, debatable claim."
          }
        },
        {
          id: 'aplang-2-3', difficulty: 3, type: 'mcq', topic: 'Selecting Evidence for a Specific Audience',
          prompt: "A writer is crafting two different arguments for the SAME position (that a city should invest in public transit) — one aimed at budget-conscious taxpayers, and one aimed at environmental advocates. This writer should most likely:",
          choices: ["Use the exact same evidence and appeals in both pieces, since the underlying position is identical", "Select and emphasize different evidence for each audience — such as cost-savings data for taxpayers and emissions-reduction data for environmentalists — while maintaining the same underlying position", "Change their actual thesis/position entirely for each different audience", "Avoid using any evidence at all in either piece to prevent audience-specific bias"],
          correct: 1,
          explanation: {
            correct: "Effective rhetoric adapts to its specific audience by selecting and emphasizing the evidence and appeals MOST LIKELY to resonate with that particular audience's values and concerns — while maintaining the SAME underlying position/thesis, a skilled writer would highlight cost-savings for budget-conscious readers and environmental benefits for environmentally-minded readers.",
            wrong: { 0: "Using IDENTICAL evidence for both very different audiences ignores the reality that different audiences respond to different types of appeals — effective rhetoric adapts evidence selection to audience values, even while defending the same position.", 2: "The underlying POSITION/thesis (supporting public transit investment) should remain the SAME — what changes is which SUPPORTING evidence and appeals are emphasized for each audience, not the actual claim itself, which would undermine the writer's consistency and credibility.", 3: "Avoiding evidence entirely would significantly weaken BOTH arguments — the skill being tested is SELECTING and EMPHASIZING audience-appropriate evidence, not eliminating evidence altogether." },
            tempting: "Choice C is tempting because 'adapting to audience' might be mistakenly understood as changing one's actual position, but the SAME thesis can be defended through DIFFERENT audience-appropriate combinations of evidence.",
            commonMistake: "Confusing adapting evidence/emphasis for different audiences (a legitimate, valuable rhetorical skill) with changing one's actual underlying position or thesis for different audiences (which would undermine consistency and could seem manipulative or inconsistent).",
            apTip: "Skilled rhetorical adaptation means selecting and EMPHASIZING different evidence/appeals suited to each specific audience's values and concerns, while the underlying THESIS/position remains consistent — this distinction between adapting SUPPORT versus changing POSITION is frequently tested."
          }
        },
        {
          id: 'aplang-2-4', difficulty: 2, type: 'mcq', topic: 'Ethos, Pathos, and Logos',
          prompt: "A speaker begins a speech by stating their 20 years of professional experience in the field before presenting their argument. This opening move is primarily an example of building:",
          choices: ["Pathos, an emotional appeal", "Ethos, an appeal based on the speaker's credibility and authority", "Logos, a purely logical/statistical appeal", "Kairos, an appeal based on timeliness"],
          correct: 1,
          explanation: {
            correct: "Establishing one's professional experience and expertise is a classic example of building ethos — the rhetorical appeal based on the speaker's credibility, authority, and trustworthiness, which makes an audience more inclined to trust and accept their subsequent argument.",
            wrong: { 0: "Pathos specifically appeals to the audience's EMOTIONS (fear, sympathy, hope, etc.) — stating one's professional credentials is not an emotional appeal, but a credibility-establishing one.", 2: "Logos specifically involves logical reasoning, evidence, and data — stating personal experience/credentials is about establishing TRUSTWORTHINESS, not presenting logical argumentation itself.", 3: "Kairos refers to the appropriateness of TIMING (why this argument matters right NOW) — stating years of experience is about establishing CREDIBILITY, not making a timeliness-based appeal." },
            tempting: "None of the distractors accurately describe this credibility-building move, but confusing the three classical appeals (ethos/pathos/logos) with each other is a common general source of error.",
            commonMistake: "Confusing ethos (credibility/character-based appeal) with pathos (emotion-based appeal) or logos (logic/evidence-based appeal) — these are three DISTINCT classical rhetorical appeals, each doing different persuasive work.",
            apTip: "Memorize the three classical appeals clearly: ETHOS = credibility/character (why should we trust this speaker?), PATHOS = emotion (how does this make the audience feel?), LOGOS = logic/reasoning/evidence (does the argument hold up logically?). Strong arguments typically combine multiple appeals strategically."
          }
        },
        {
          id: 'aplang-2-5', difficulty: 3, type: 'mcq', topic: 'Purpose and Audience Alignment',
          prompt: "A writer's stated PURPOSE is to persuade skeptical readers to support a new policy, but the essay is filled with highly technical jargon that a general skeptical audience would likely not understand. This mismatch represents:",
          choices: ["A perfectly effective alignment between purpose, audience, and rhetorical choices", "A rhetorical weakness, since the stylistic/diction choices (technical jargon) work against the stated purpose of persuading a general, non-expert audience", "An example of strong ethos-building through demonstrated expertise, with no downside", "A neutral stylistic choice with no effect on the argument's persuasiveness"],
          correct: 1,
          explanation: {
            correct: "When a writer's stylistic choices (like dense technical jargon) don't match the needs and background knowledge of the STATED audience, this creates a genuine rhetorical weakness — the writing may alienate or confuse the very general, skeptical readers it's trying to persuade, undermining the stated persuasive purpose.",
            wrong: { 0: "This scenario is specifically NOT well-aligned — using jargon inaccessible to a general audience directly UNDERMINES the goal of persuading that same general, skeptical audience, representing a mismatch, not effective alignment.", 2: "While SOME technical language might build ethos with an EXPERT audience, this scenario specifically describes a GENERAL, skeptical (likely non-expert) audience — for this audience, excessive jargon is more likely to alienate/confuse than to build credibility, representing a real downside.", 3: "Stylistic choices are NOT neutral — they directly affect whether a text successfully reaches and persuades its INTENDED audience; jargon inappropriate for a general audience actively works against the stated persuasive purpose." },
            tempting: "Choice C is tempting because technical language CAN build ethos in the right context (with an expert audience), but this scenario specifically involves a GENERAL, non-expert audience, for whom jargon is more likely to create a barrier than credibility.",
            commonMistake: "Assuming any display of technical expertise (jargon, complex terminology) automatically strengthens an argument via ethos, without considering whether the SPECIFIC intended audience can actually understand and be persuaded by that language.",
            apTip: "Rhetorical effectiveness depends on the ALIGNMENT between a writer's stylistic choices and the specific audience's needs/background — the SAME stylistic choice (technical jargon) can be a strength with one audience (experts) and a genuine weakness with another (general public), so audience-appropriateness is always context-dependent."
          }
        },
        {
          id: 'aplang-2-6', difficulty: 3, type: 'mcq', topic: 'Anticipating Audience Objections',
          prompt: "A writer arguing for a controversial policy proactively addresses and responds to the strongest objections a skeptical reader might raise, before those objections are voiced. This rhetorical strategy is called:",
          choices: ["Begging the question", "Addressing counterarguments (concession and/or refutation), which strengthens the writer's credibility and preempts reader skepticism", "An ad hominem attack", "A straw man argument"],
          correct: 1,
          explanation: {
            correct: "Proactively identifying and responding to an audience's likely objections — whether by conceding a valid point or refuting a flawed one — is the strategy of addressing counterarguments. This demonstrates the writer has seriously considered opposing views, which builds credibility (ethos) and preempts reader skepticism before it fully forms.",
            wrong: { 0: "\"Begging the question\" is a specific logical fallacy where a conclusion is assumed within its own premise — this describes a REASONING ERROR, not the legitimate strategy of proactively addressing real objections.", 2: "An ad hominem attack involves attacking a person's character rather than addressing their actual argument — this describes a DIFFERENT (and fallacious) rhetorical move, not the legitimate strategy of engaging with real counterarguments.", 3: "A straw man argument involves misrepresenting an opponent's position to make it easier to attack — this scenario specifically describes addressing the STRONGEST actual objections, the opposite of the straw man's weakened, distorted version." },
            tempting: "Choice D is tempting because both concepts involve addressing opposing views, but a straw man MISREPRESENTS/weakens the opposing view unfairly, while this scenario specifically describes engaging with the STRONGEST, most legitimate objections.",
            commonMistake: "Confusing legitimate, credibility-building strategies (addressing real, strong counterarguments through concession or refutation) with fallacious or manipulative rhetorical moves (straw man, ad hominem) that involve misrepresenting or attacking rather than genuinely engaging with opposing views.",
            apTip: "Addressing counterarguments through concession (acknowledging a valid point in the opposing view) and/or refutation (explaining why the opposing view is ultimately unpersuasive) is a hallmark of sophisticated argumentative writing — it demonstrates the writer has genuinely engaged with complexity, which builds ethos and preempts reader skepticism."
          }
        }
      ]
    },
    {
      id: 3,
      name: 'Unit 3: Perspectives and How Arguments Relate',
      questions: [
        {
          id: 'aplang-3-1', difficulty: 2, type: 'mcq', topic: 'Identifying Multiple Perspectives',
          prompt: "When analyzing a complex issue with multiple credible perspectives, a sophisticated argumentative writer should typically:",
          choices: ["Ignore all perspectives other than their own to keep the argument simple", "Acknowledge and engage with other credible perspectives, situating their own argument in relation to this broader conversation", "Assume every reader already shares the writer's exact viewpoint", "Avoid taking any position at all on the issue"],
          correct: 1,
          explanation: {
            correct: "Sophisticated argumentative writing acknowledges and engages with other credible perspectives on a complex issue, situating the writer's own argument within this broader conversation — this demonstrates nuanced understanding and can strengthen the writer's own position by showing how it accounts for or responds to alternative views.",
            wrong: { 0: "Ignoring other credible perspectives entirely tends to produce a WEAKER, less sophisticated argument — engaging with complexity (rather than avoiding it) is generally a hallmark of strong argumentative writing.", 2: "Assuming universal agreement with the writer's exact viewpoint ignores the reality of a complex issue having multiple credible perspectives — this assumption would likely alienate readers who hold different views and weakens persuasive effectiveness.", 3: "Avoiding taking ANY position defeats the purpose of argumentative writing altogether — the goal is to take and DEFEND a position, while still acknowledging its relationship to other perspectives, not to avoid a position entirely." },
            tempting: "None of the distractors describe genuinely sophisticated argumentative practice, but oversimplifying by ignoring other views (choice A) is a common weaker-writer tendency the exam specifically tests against.",
            commonMistake: "Believing a strong argument must ignore or dismiss other perspectives to seem confident, when in fact ENGAGING with the complexity of multiple credible perspectives (while still defending a clear position) is what distinguishes sophisticated argumentative writing.",
            apTip: "The AP Lang exam's synthesis essay specifically rewards writers who engage thoughtfully with MULTIPLE perspectives/sources (rather than cherry-picking only supportive ones), demonstrating an understanding of the issue's genuine complexity while still defending a clear, specific position."
          }
        },
        {
          id: 'aplang-3-2', difficulty: 3, type: 'mcq', topic: 'Synthesizing Sources',
          prompt: "In synthesis writing, effectively combining and connecting evidence from MULTIPLE different sources to build a single, cohesive argument is known as:",
          choices: ["Plagiarism", "Synthesis, which requires more than simply summarizing each source separately — it requires drawing meaningful connections between sources to support the writer's own original argument", "Direct quotation with no analysis", "A logical fallacy"],
          correct: 1,
          explanation: {
            correct: "Synthesis specifically involves drawing meaningful connections BETWEEN multiple sources (finding agreement, tension, or complementary points across them) and using these connections to support the writer's OWN original argument — this is different from simply listing or summarizing each source in isolation.",
            wrong: { 0: "Properly cited, appropriately used source material is NOT plagiarism — plagiarism specifically refers to using others' words/ideas WITHOUT proper attribution, a different (and problematic) practice entirely from legitimate synthesis.", 2: "Effective synthesis requires more than DIRECT QUOTATION alone — it requires the writer's own ANALYSIS and connective reasoning showing how the sources relate to each other and to the writer's argument, not just quoting without commentary.", 3: "Synthesis, when done properly, is a legitimate and valued rhetorical/argumentative SKILL, not a logical fallacy (a flaw in reasoning) — it's specifically tested and rewarded on the AP Lang exam's synthesis essay." },
            tempting: "Choice C is tempting because synthesis DOES involve using source material, but simply quoting sources without adding analytical connections and original argument doesn't meet the full definition of synthesis.",
            commonMistake: "Treating synthesis as simply summarizing or quoting multiple sources one after another (a 'source dump'), rather than actively drawing meaningful CONNECTIONS between sources and using them to build the writer's OWN cohesive, original argument.",
            apTip: "True synthesis goes beyond summarizing each source separately — it requires identifying how sources RELATE to each other (agreement, disagreement, different angles on the same issue) and weaving them together to support your own original argumentative point, which is exactly what the AP Lang synthesis essay (FRQ 1) evaluates."
          }
        },
        {
          id: 'aplang-3-3', difficulty: 3, type: 'mcq', topic: 'Concession and Refutation',
          prompt: "A writer states: \"While it is true that the new policy will require significant upfront costs, these costs are outweighed by the long-term savings the policy will generate.\" This sentence demonstrates:",
          choices: ["A straw man argument that unfairly misrepresents the opposing view", "Concession followed by refutation — acknowledging a valid point in the opposing argument before explaining why the writer's overall position still holds", "An entirely unsupported claim with no reasoning provided", "A purely emotional appeal with no logical content"],
          correct: 1,
          explanation: {
            correct: "This sentence first CONCEDES a valid point (\"it is true that the new policy will require significant upfront costs\") before pivoting to REFUTE why this doesn't undermine the writer's overall position (\"these costs are outweighed by the long-term savings\") — this concession-then-refutation structure is a sophisticated way to engage honestly with counterarguments while still defending one's thesis.",
            wrong: { 0: "This is the OPPOSITE of a straw man — the writer explicitly ACKNOWLEDGES a legitimate, accurately stated point (the real upfront costs) rather than misrepresenting or weakening the opposing view unfairly.", 2: "The sentence DOES provide reasoning — it explains WHY the conceded point doesn't undermine the overall argument (because long-term savings outweigh the upfront costs) — this is a reasoned response, not an unsupported claim.", 3: "This sentence makes a LOGICAL comparison (costs versus long-term savings), not an emotional appeal — there's no language here designed to evoke feelings, just a logical weighing of factors." },
            tempting: "None of the distractors accurately describe this concession-refutation structure, but mistaking honest engagement with a real counterpoint for a straw man (choice A) misunderstands what a straw man actually is.",
            commonMistake: "Not recognizing the specific \"while it is true that X... [concession]... nevertheless Y... [refutation]\" sentence structure as a sophisticated rhetorical move that strengthens an argument by honestly engaging with a real counterpoint before explaining why it doesn't overturn the writer's position.",
            apTip: "Concession-then-refutation (\"while it's true that X, Y is nonetheless the case because...\") is one of the most valuable and frequently tested/rewarded argumentative structures — it demonstrates the writer has genuinely grappled with counterarguments rather than ignoring or misrepresenting them, which builds credibility (ethos)."
          }
        },
        {
          id: 'aplang-3-4', difficulty: 2, type: 'mcq', topic: 'Common Ground',
          prompt: "A writer addressing a politically divided audience begins by identifying a value that virtually everyone, regardless of political affiliation, shares (such as wanting safe communities for children) before presenting their specific policy argument. This opening strategy is best described as:",
          choices: ["A logical fallacy designed to manipulate the audience", "Establishing common ground — identifying shared values with a diverse audience before building toward a more specific, potentially divisive argument", "An irrelevant appeal with no persuasive function", "A direct attack on the audience's existing beliefs"],
          correct: 1,
          explanation: {
            correct: "Identifying a broadly shared value before presenting a more specific, potentially contested argument is the strategy of establishing common ground — this creates initial audience buy-in and trust by starting from agreement, which can make readers more receptive to the writer's subsequent, more specific and potentially divisive claims.",
            wrong: { 0: "This is not a LOGICAL FALLACY (a flaw in reasoning) — it's a legitimate and widely used rhetorical STRATEGY for building audience receptiveness, not a manipulative reasoning error.", 2: "This strategy serves a clear and significant persuasive function — establishing initial agreement/trust with a potentially skeptical or divided audience before introducing more specific, possibly contested claims — describing it as irrelevant misses its real rhetorical purpose.", 3: "This strategy specifically works by finding AGREEMENT (shared values) with the audience, the OPPOSITE of directly attacking their existing beliefs — attacking beliefs upfront would likely alienate rather than persuade a divided audience." },
            tempting: "None of the distractors accurately describe this legitimate strategy, but mistaking it for manipulation (choice A) misunderstands the difference between a fallacious rhetorical trick and an honest, effective persuasive technique.",
            commonMistake: "Not recognizing 'common ground' as a specific, legitimate, and named rhetorical strategy (finding genuine shared values before addressing more contested specifics) rather than dismissing any audience-oriented opening move as manipulative.",
            apTip: "Establishing common ground is especially valuable when addressing a DIVIDED or SKEPTICAL audience — starting from genuine shared values builds trust and receptiveness before the writer introduces more specific, potentially contested claims, making the overall argument more persuasive to a wider range of readers."
          }
        },
        {
          id: 'aplang-3-5', difficulty: 3, type: 'mcq', topic: 'Recognizing Bias in Sources',
          prompt: "A writer is evaluating a source that presents statistics about a product's safety, published by the very company that manufactures and profits from selling that product. A critical reader should:",
          choices: ["Accept the statistics without question, since numbers are always objective", "Consider the source's potential bias/conflict of interest, and seek to verify the claims against independent, less potentially biased sources", "Automatically dismiss the statistics as completely false with no further consideration", "Ignore the source's origin entirely, since only the content of the claim matters"],
          correct: 1,
          explanation: {
            correct: "A critical reader should recognize the potential conflict of interest (the company profits from a favorable safety narrative) and factor this into their evaluation — rather than either blindly accepting or automatically dismissing the claim, the reasonable approach is to seek corroboration from independent, less potentially biased sources.",
            wrong: { 0: "Numbers/statistics are NOT automatically objective just because they're quantitative — HOW data is collected, selected, and presented can still reflect bias, especially from a source with a clear financial interest in a particular conclusion.", 2: "Automatically dismissing the claim as COMPLETELY FALSE goes too far in the other direction — the source's bias is a reason for CAUTION and verification, not automatic, complete rejection without any further investigation.", 3: "A source's origin (WHO is making the claim and what their potential interests/biases are) is directly relevant to critically evaluating its reliability — ignoring source origin entirely would mean ignoring an important tool for assessing credibility." },
            tempting: "Choice C is tempting to students eager to demonstrate critical thinking, but SKEPTICISM should lead to VERIFICATION/further scrutiny, not blanket, automatic rejection without any additional investigation.",
            commonMistake: "Responding to a potentially biased source with either uncritical acceptance OR uncritical rejection, rather than the more sophisticated, appropriate response: recognizing the potential bias as a reason for careful scrutiny and independent verification.",
            apTip: "When evaluating any source's credibility, consider its potential biases or conflicts of interest (Who created it? What might they gain from a particular conclusion?) as ONE factor in your evaluation — this should prompt appropriately careful scrutiny and cross-checking, not automatic acceptance OR automatic dismissal."
          }
        },
        {
          id: 'aplang-3-6', difficulty: 4, type: 'mcq', topic: 'Analyzing How Arguments Relate to Each Other',
          prompt: "Two writers both argue for reducing a city's traffic congestion, but one focuses exclusively on expanding highways while the other focuses exclusively on expanding public transit. A sophisticated analysis of these two arguments would recognize that they:",
          choices: ["Are in complete agreement with no meaningful differences worth analyzing", "Share the same overall goal (reducing congestion) but propose different, potentially competing means to achieve it, reflecting different underlying assumptions or values (such as prioritizing individual car travel versus collective transit)", "Have nothing whatsoever in common and cannot be meaningfully compared", "Must be evaluated purely on writing style, with no attention to their differing substantive proposals"],
          correct: 1,
          explanation: {
            correct: "A sophisticated analysis recognizes that these two arguments share the same overarching GOAL (reducing traffic congestion) while proposing different, potentially competing MEANS to achieve it — this difference likely reflects different underlying assumptions, priorities, or values (such as one writer prioritizing individual automobile convenience versus the other prioritizing collective/environmental benefits of public transit).",
            wrong: { 0: "While these arguments share a GOAL, their specific PROPOSED SOLUTIONS differ significantly (highways versus public transit) — describing them as being in complete agreement with no meaningful differences overlooks this substantive difference worth analyzing.", 2: "These arguments DO share meaningful common ground (the shared goal of reducing congestion) even while differing in their specific proposed solutions — describing them as having nothing in common overlooks this shared underlying goal.", 3: "While style CAN be part of a rhetorical analysis, a SOPHISTICATED analysis of how two arguments relate should also attend to their SUBSTANTIVE content — their shared goals, differing proposed means, and the different underlying values/assumptions those different means might reflect." },
            tempting: "None of the distractors capture the full sophisticated analysis, but focusing purely on surface agreement or disagreement (rather than the deeper shared goal/differing means structure) is a common incomplete analysis.",
            commonMistake: "Analyzing two related arguments only in terms of surface agreement or disagreement, rather than recognizing the more sophisticated pattern of a SHARED underlying goal paired with DIFFERENT proposed means — and considering what deeper values or assumptions might explain this difference in proposed solutions.",
            apTip: "When comparing multiple arguments/sources on the same broad issue (a skill emphasized in Unit 3 and directly relevant to the synthesis essay), look beyond simple agreement/disagreement to identify: What GOAL do they share? What different MEANS do they propose? What underlying VALUES or ASSUMPTIONS might explain these different proposed means?"
          }
        }
      ]
    },
    {
      id: 4,
      name: 'Unit 4: Lines of Reasoning',
      questions: [
        {
          id: 'aplang-4-1', difficulty: 2, type: 'mcq', topic: 'Organizing an Argument',
          prompt: "A \"line of reasoning\" in an argumentative essay refers to:",
          choices: ["A single isolated sentence containing evidence", "The logical sequence and structure of connected claims that build toward and support the essay's overall thesis", "The essay's introduction paragraph exclusively", "A grammatical error found within an essay"],
          correct: 1,
          explanation: {
            correct: "A line of reasoning is the logical sequence and structure of connected claims — the overall organizational and argumentative arc — that builds toward and supports the essay's central thesis, showing HOW the various pieces of the argument logically fit together.",
            wrong: { 0: "A single isolated sentence of evidence is just one small SUPPORTING piece — a line of reasoning refers to the BROADER logical structure connecting multiple claims and evidence together across the whole essay.", 2: "The introduction is just ONE section of an essay — the line of reasoning encompasses the LOGICAL STRUCTURE of the entire essay's argument, not merely its opening paragraph.", 3: "A grammatical error is a mechanical/sentence-level issue, unrelated to the LOGICAL, argumentative structure that the term 'line of reasoning' specifically refers to." },
            tempting: "None of the distractors accurately capture this structural concept, but narrowing it to a single element (a sentence or the intro) rather than the whole essay's logical architecture is a common oversimplification.",
            commonMistake: "Narrowing 'line of reasoning' to a single sentence, paragraph, or section, rather than understanding it as the OVERALL logical architecture connecting the essay's claims and evidence together in service of the thesis.",
            apTip: "A strong line of reasoning should be logically clear and easy to follow — each paragraph/section should build on the previous one in a way that a reader can trace back to the thesis, rather than presenting claims and evidence in a disconnected or random order."
          }
        },
        {
          id: 'aplang-4-2', difficulty: 3, type: 'mcq', topic: 'Effective Introductions',
          prompt: "An effective essay introduction typically accomplishes which of the following?",
          choices: ["Provides a comprehensive summary of every point the essay will make, leaving nothing for the body paragraphs to develop", "Establishes context/exigence for the topic and leads the reader toward a clear thesis statement, without giving away the full argument\'s development", "Contains no thesis statement, saving that for the very end of the essay", "Consists entirely of a single unexplained statistic with no other content"],
          correct: 1,
          explanation: {
            correct: "An effective introduction establishes relevant context or exigence for the topic (why this matters, what prompted this discussion) and leads the reader toward a clear thesis — setting up the argument's stakes and direction without fully developing every point, which should instead unfold across the body of the essay.",
            wrong: { 0: "A comprehensive summary of EVERY point in the introduction would leave little for the body paragraphs to actually develop — an introduction should set up the argument's DIRECTION and stakes, not exhaustively cover every subsequent point.", 2: "While some essays (or specific rhetorical strategies) DO delay the explicit thesis, most standard argumentative essays benefit from a CLEAR thesis relatively early — and the AP Lang exam specifically rewards a clear, identifiable thesis, typically established in or near the introduction.", 3: "A single unexplained statistic with no other content would leave the reader without necessary context, exigence, or a clear sense of the essay's direction — an effective introduction needs more structural/contextual work than this." },
            tempting: "Choice A is tempting because introductions DO preview the essay's direction, but PREVIEWING is different from FULLY DEVELOPING every point — that development work belongs in the body paragraphs, not the introduction.",
            commonMistake: "Either over-stuffing an introduction with the essay's full argument (leaving nothing new for body paragraphs) or under-developing it (providing no context/exigence and no clear thesis direction) — an effective introduction strikes a balance, setting up direction without fully resolving the argument.",
            apTip: "A strong introduction typically moves from broader context/exigence toward a specific, clear thesis — this gives the reader a sense of why the topic matters AND what specific position the essay will argue, without exhausting all the argument's development, which unfolds across the body paragraphs."
          }
        },
        {
          id: 'aplang-4-3', difficulty: 3, type: 'mcq', topic: 'Methods of Development',
          prompt: "A writer explaining a complex concept by comparing it point-by-point to a more familiar concept (for example, explaining a computer's memory by comparing it to a filing cabinet) is using which method of development?",
          choices: ["Definition", "Comparison/analogy, which clarifies an unfamiliar concept by drawing structured parallels to something the audience already understands", "Chronological narration", "Cause and effect"],
          correct: 1,
          explanation: {
            correct: "Explaining an unfamiliar concept by systematically comparing it to something more familiar is the method of development known as comparison (or analogy) — this approach leverages the audience's existing understanding of the familiar concept to build understanding of the new, less familiar one.",
            wrong: { 0: "Definition involves directly explaining WHAT a term or concept means (often through explicit defining language), not necessarily through an extended point-by-point comparison to something else familiar.", 2: "Chronological narration organizes information according to a TIME SEQUENCE (what happened first, second, third) — this scenario describes a STRUCTURAL comparison between two different concepts, not a sequence of events over time.", 3: "Cause and effect explains HOW one event or condition LEADS TO another — this scenario describes a comparison between two DIFFERENT concepts (memory and filing cabinets) for clarification purposes, not a causal relationship between them." },
            tempting: "None of the distractors accurately describe this specific method, but confusing it with 'definition' (choice A) is understandable since both aim to clarify meaning, though through different specific techniques.",
            commonMistake: "Confusing different methods of development (definition, comparison/analogy, cause-effect, narration, classification) with each other, rather than recognizing the SPECIFIC technique being used — here, systematic point-by-point comparison to a familiar concept.",
            apTip: "Know the common methods of development tested on the exam: definition, comparison/contrast (including analogy), cause and effect, narration/chronology, classification/division, and exemplification (specific examples) — identifying WHICH method a writer uses, and evaluating its effectiveness, is a frequently tested analytical skill."
          }
        },
        {
          id: 'aplang-4-4', difficulty: 3, type: 'mcq', topic: 'Adjusting an Argument to Address New Evidence',
          prompt: "A writer presents an initial argument, then later in the essay introduces a piece of evidence that seems to complicate or partially contradict their original claim. A sophisticated writer would most effectively handle this by:",
          choices: ["Ignoring the complicating evidence entirely and hoping the reader doesn\'t notice the inconsistency", "Directly and honestly engaging with the complicating evidence, refining or qualifying the original claim as needed to accurately account for this new complexity", "Abandoning the essay\'s entire argument and starting over from scratch mid-essay", "Simply asserting that the complicating evidence is irrelevant, without any explanation"],
          correct: 1,
          explanation: {
            correct: "A sophisticated writer directly and honestly engages with complicating evidence — refining, qualifying, or nuancing the original claim as needed to accurately account for this added complexity — rather than ignoring it or dismissing it without explanation. This demonstrates intellectual honesty and often produces a MORE persuasive, nuanced argument overall.",
            wrong: { 0: "Ignoring genuinely complicating evidence undermines the essay\'s intellectual honesty and credibility — sophisticated readers/graders will likely notice this evasion, weakening rather than strengthening the argument\'s persuasiveness.", 2: "Complicating evidence doesn\'t necessarily require ABANDONING the entire argument — it more often requires REFINING or QUALIFYING the claim to account for added nuance, while still maintaining an overall coherent position.", 3: "Simply ASSERTING irrelevance without actual EXPLANATION or reasoning is not a legitimate way to handle genuinely complicating evidence — this dismissal without justification would likely seem evasive or unconvincing to a critical reader." },
            tempting: "Choice A is tempting as an easier (if intellectually dishonest) shortcut, but ignoring genuine complications tends to weaken an argument\'s credibility once a careful reader notices the omission.",
            commonMistake: "Assuming a strong argument must maintain a completely unqualified, simplistic position throughout, rather than recognizing that skillfully ACKNOWLEDGING and ACCOUNTING FOR genuine complexity (through qualification/refinement) often produces a MORE sophisticated and ultimately more persuasive argument.",
            apTip: "When your own evidence or research surfaces complications to your argument, don't hide from them — directly and honestly engage with the complexity, refining your claim as needed (\"while X is generally true, in cases where Y, the situation is more nuanced because...\") — this kind of qualification is a hallmark of sophisticated argumentative writing."
          }
        },
        {
          id: 'aplang-4-5', difficulty: 2, type: 'mcq', topic: 'Unity in Argumentation',
          prompt: "A body paragraph in an argumentative essay contains several sentences that, while individually interesting, don't clearly connect back to that paragraph's main claim or the essay's overall thesis. This paragraph suffers from a lack of:",
          choices: ["Excessive evidence, since there is simply too much information provided", "Unity/cohesion, since not all the content is clearly working together to support a single, clear point connected to the thesis", "Emotional appeal, since the sentences aren't persuasive enough on their own", "Grammatical correctness, since the sentences aren't properly punctuated"],
          correct: 1,
          explanation: {
            correct: "A paragraph lacks unity/cohesion when its sentences don't all clearly connect to and support a single, focused point that itself connects back to the essay's broader thesis — even individually interesting or well-written sentences weaken a paragraph if they don't work together toward this shared purpose.",
            wrong: { 0: "The problem described isn't about having TOO MUCH information in general — it's specifically about that information not being clearly CONNECTED to a unified point, which is a structural/organizational issue, not simply a matter of quantity.", 2: "The described problem is about a lack of CLEAR CONNECTION and organization, not specifically about insufficient EMOTIONAL appeal — a paragraph can lack unity regardless of whether individual sentences are emotionally engaging or not.", 3: "The problem described is about the CONTENT'S logical connection and organization (unity), not about GRAMMATICAL correctness (punctuation, sentence structure mechanics) — these are different types of writing issues." },
            tempting: "None of the distractors accurately name this specific structural issue, but focusing on a surface-level concern like grammar (choice D) misses the deeper organizational/cohesion problem being described.",
            commonMistake: "Diagnosing a lack of unity/cohesion (sentences not clearly connecting to a shared point) as a different kind of problem entirely (too much content, insufficient emotional appeal, or grammar issues), rather than recognizing it as specifically an ORGANIZATIONAL/cohesion issue.",
            apTip: "Test each paragraph for unity by asking: does every sentence in this paragraph clearly connect to and support ONE central point, and does that point clearly connect back to the essay's overall thesis? If any sentence doesn't pass this test, it likely needs revision or removal for the sake of the paragraph's unity."
          }
        },
        {
          id: 'aplang-4-6', difficulty: 3, type: 'mcq', topic: 'Effective Conclusions',
          prompt: "An effective essay conclusion typically goes beyond simply repeating the thesis word-for-word by:",
          choices: ["Introducing a brand new, previously undiscussed argument that the rest of the essay never addressed", "Synthesizing the essay's key points and suggesting broader significance or implications of the argument, without introducing entirely new, undeveloped claims", "Directly contradicting everything argued in the rest of the essay", "Consisting of a single, isolated sentence with no connection to the rest of the essay"],
          correct: 1,
          explanation: {
            correct: "An effective conclusion synthesizes the essay's key points (showing how they fit together) and often suggests broader significance or implications of the argument (why does this matter beyond just this specific essay?) — all without introducing entirely new, undeveloped claims that the essay hasn't actually supported.",
            wrong: { 0: "Introducing a completely NEW, undeveloped argument in the conclusion is problematic — since this new claim hasn't been supported by the essay's evidence and reasoning, it would come across as unsupported and could weaken the conclusion's effectiveness.", 2: "A conclusion should generally be CONSISTENT with the argument the rest of the essay has built (perhaps adding nuance or broader significance), not directly CONTRADICT everything previously argued, which would undermine the essay's overall coherence.", 3: "An effective conclusion should meaningfully CONNECT to and synthesize the rest of the essay's argument — a single isolated, disconnected sentence would fail to provide this valuable synthesis and sense of closure/significance." },
            tempting: "None of the distractors describe genuinely effective conclusion strategies, but introducing new specific evidence (choice A) is a common weaker-writer instinct the exam specifically tests against.",
            commonMistake: "Treating the conclusion as simply a place to repeat the thesis verbatim, OR mistakenly introducing entirely new, unsupported claims — rather than using the conclusion to SYNTHESIZE what's already been argued and suggest its broader significance.",
            apTip: "A strong conclusion does more than just restate the thesis — it should synthesize the essay's key points into a cohesive whole and often address the 'so what?' question, suggesting why the argument matters in a broader context, without introducing entirely new, undeveloped claims that the essay hasn't actually supported with evidence."
          }
        }
      ]
    },
    {
      id: 5,
      name: 'Unit 5: Organization and Style',
      questions: [
        {
          id: 'aplang-5-1', difficulty: 2, type: 'mcq', topic: 'Commentary vs. Evidence',
          prompt: "In a well-developed body paragraph, \"commentary\" refers to:",
          choices: ["Direct quotations or cited facts taken from an outside source", "The writer's own explanatory analysis connecting the cited evidence back to the paragraph's claim and the essay's overall thesis", "The paragraph's topic sentence exclusively, with no other content", "A list of additional sources for further reading"],
          correct: 1,
          explanation: {
            correct: "Commentary is the writer's OWN explanatory analysis — going beyond simply presenting evidence — that explicitly connects that evidence back to the paragraph's specific claim and, ultimately, to the essay's overall thesis. Commentary answers the question \"so what does this evidence actually show, and why does it matter for my argument?\"",
            wrong: { 0: "Direct quotations/cited facts ARE the evidence itself, not the commentary — commentary is the writer's OWN analytical explanation of what that evidence means and how it supports the argument, distinct from the evidence itself.", 2: "A topic sentence is just ONE sentence introducing the paragraph's main point — commentary refers to the BROADER analytical work (potentially spanning multiple sentences) connecting evidence to claims throughout the paragraph, not just the opening topic sentence.", 3: "A list of further sources is a bibliographic/reference element, not the analytical connective work that commentary specifically refers to within the body of an argument." },
            tempting: "Choice A is tempting because evidence and commentary appear together in effective paragraphs, but they serve DIFFERENT functions — evidence is the cited support itself, while commentary is the writer's OWN explanation of that evidence's significance.",
            commonMistake: "Confusing evidence (the cited facts/quotations themselves) with commentary (the writer's own analytical explanation of what that evidence means and how it supports the argument) — strong paragraphs need BOTH, but they are distinct components serving different roles.",
            apTip: "A common structural pattern for strong body paragraphs: claim → evidence → commentary (explaining HOW/WHY the evidence supports the claim) → connection back to thesis. Simply presenting evidence WITHOUT sufficient commentary is one of the most common weaknesses in less developed argumentative writing — always explain your evidence's significance, don't just present it."
          }
        },
        {
          id: 'aplang-5-2', difficulty: 3, type: 'mcq', topic: 'Maintaining a Consistent Line of Reasoning',
          prompt: "Partway through an essay, a writer includes a paragraph that, while factually accurate and well-written, doesn't clearly connect to or advance the essay's central thesis. This paragraph most likely represents a problem with:",
          choices: ["Grammatical correctness", "Maintaining the essay's line of reasoning/unity, since even accurate, well-written content weakens an argument if it doesn't connect to and advance the central thesis", "Excessive use of transitional words", "The essay's overall length, since it is simply too short"],
          correct: 1,
          explanation: {
            correct: "Even a factually accurate, well-written paragraph can weaken an essay if it doesn't clearly connect to and advance the essay's central thesis — maintaining a consistent line of reasoning means every part of the essay should contribute meaningfully to the overall argument, not just contain individually strong content.",
            wrong: { 0: "The scenario specifically describes the paragraph as \"well-written\" — the problem isn't GRAMMATICAL correctness, but rather a structural/organizational issue of RELEVANCE to the thesis.", 2: "The scenario doesn't describe an issue with TRANSITIONAL WORDS specifically — it describes a paragraph's CONTENT not connecting to the thesis, a different (and more substantive) organizational problem.", 3: "Essay LENGTH isn't the issue being described — the problem is about a paragraph's lack of CONNECTION to the central argument, which is a relevance/unity issue, not a length issue." },
            tempting: "None of the distractors accurately diagnose this issue, but focusing on surface features (grammar, length) rather than the deeper structural relevance problem is a common misdiagnosis.",
            commonMistake: "Assuming that well-written, accurate content is automatically valuable within an essay, without checking whether that specific content actually CONNECTS TO and ADVANCES the essay's central thesis — irrelevant content weakens an argument\'s overall unity and focus, regardless of its individual quality.",
            apTip: "Every paragraph in an argumentative essay should pass this test: does this content clearly connect to and advance my central thesis? Content that is accurate or well-written but doesn't meet this test should be cut or revised to establish a clearer connection, since maintaining a consistent, focused line of reasoning throughout the ENTIRE essay is essential."
          }
        },
        {
          id: 'aplang-5-3', difficulty: 3, type: 'mcq', topic: 'Using Modifiers to Qualify an Argument',
          prompt: "A writer revises the sentence \"This policy will solve the problem\" to instead read \"This policy will likely significantly reduce the problem in most cases.\" This revision primarily demonstrates the use of:",
          choices: ["A logical fallacy introduced through the revision", "Qualifying modifiers (\"likely,\" \"significantly,\" \"in most cases\") that make the claim more precise and defensible by avoiding an unsupportable, absolute assertion", "A complete removal of the writer's actual argument or position", "An emotional appeal with no logical basis"],
          correct: 1,
          explanation: {
            correct: "The revised sentence adds qualifying modifiers (\"likely,\" \"significantly,\" \"in most cases\") that make the claim more precise, nuanced, and DEFENSIBLE — the original absolute claim (\"will solve the problem\") is likely an OVERSTATEMENT that would be difficult to fully support, while the qualified version makes a more reasonable, evidence-appropriate claim.",
            wrong: { 0: "This revision doesn't introduce a LOGICAL FALLACY — if anything, it makes the argument MORE logically sound by avoiding an absolute, likely unsupportable claim in favor of appropriately qualified language.", 2: "The writer's POSITION (that the policy will help address the problem) is still clearly present in the revised sentence — the revision qualifies the CLAIM'S STRENGTH/CERTAINTY, but doesn't remove the underlying argument or position altogether.", 3: "These qualifying words (\"likely,\" \"significantly,\" \"in most cases\") are LOGICAL/precision-based modifications, not emotional appeals — they don't evoke feelings, but rather adjust the claim's logical scope and certainty level." },
            tempting: "Choice C is tempting since the revision does change the claim's absoluteness, but the underlying ARGUMENT/position remains intact — only its CERTAINTY/SCOPE has been appropriately qualified, not eliminated.",
            commonMistake: "Not recognizing how qualifying modifiers (like \"likely,\" \"often,\" \"in many cases,\" \"significantly\") strengthen rather than weaken an argument's credibility, by making claims more precise, defensible, and appropriately scoped rather than vulnerable to easy refutation through a single counterexample.",
            apTip: "Using appropriate qualifying language (\"often,\" \"likely,\" \"in most cases,\" \"tends to\") rather than absolute, unqualified claims (\"always,\" \"will definitely,\" \"proves\") generally STRENGTHENS an argument's credibility by making it more precise and harder to easily disprove with a single counterexample — this is a frequently rewarded stylistic/rhetorical choice on the exam."
          }
        },
        {
          id: 'aplang-5-4', difficulty: 2, type: 'mcq', topic: 'Transitions',
          prompt: "Effective transitional words and phrases (such as \"however,\" \"consequently,\" or \"in contrast\") in an argumentative essay primarily serve to:",
          choices: ["Add unnecessary length to an essay with no functional purpose", "Signal the specific logical relationship between ideas (such as contrast, cause-effect, or addition), helping guide the reader through the essay's line of reasoning", "Replace the need for any actual evidence or reasoning", "Confuse the reader by obscuring the essay's actual logical structure"],
          correct: 1,
          explanation: {
            correct: "Effective transitions signal the SPECIFIC logical relationship between ideas — for example, \"however\" signals contrast, \"consequently\" signals a cause-effect relationship, \"in contrast\" signals a comparison/difference — helping guide the reader clearly through the essay's line of reasoning and making the underlying logical structure explicit and easy to follow.",
            wrong: { 0: "Effective transitions serve a REAL functional purpose (clarifying logical relationships between ideas) — they are not simply unnecessary padding added for length, though POORLY chosen or overused transitions COULD become unnecessary filler.", 2: "Transitions CLARIFY relationships between existing evidence/reasoning — they do not REPLACE the actual need for genuine evidence and reasoning, which remain essential regardless of how well-transitioned the writing is.", 3: "Effective transitions CLARIFY (not confuse) the essay's logical structure — a transition word like \"however\" or \"consequently\" makes the relationship between ideas MORE explicit and easier for the reader to follow, not less." },
            tempting: "None of the distractors accurately describe transitions' actual function, but dismissing them as mere padding (choice A) undervalues their genuine structural and logical signaling role.",
            commonMistake: "Treating transitional words/phrases as optional stylistic decoration rather than recognizing their SPECIFIC functional role in signaling precise logical relationships (contrast, causation, addition, concession, etc.) between ideas, which helps make an essay's line of reasoning explicit and easy to follow.",
            apTip: "Choose transitions PRECISELY based on the actual logical relationship between your ideas — don't default to a generic \"also\" or \"and\" when a more precise transition (\"however\" for contrast, \"therefore\" for cause-effect, \"specifically\" for elaboration) would more accurately signal the relationship and strengthen your essay's clarity."
          }
        },
        {
          id: 'aplang-5-5', difficulty: 4, type: 'mcq', topic: 'Sentence-Level Style and Argument',
          prompt: "A writer uses a series of short, blunt sentences (\"The evidence is clear. The policy failed. Change is needed.\") in the concluding section of an argumentative essay, after using longer, more complex sentences throughout the body paragraphs. This stylistic shift most likely serves to:",
          choices: ["Confuse the reader with an inconsistent, poorly planned writing style", "Create emphasis and a sense of urgency or conviction through the contrast with the essay's earlier, more complex sentence structures", "Indicate that the writer has run out of meaningful things to say", "Have no rhetorical effect whatsoever on the reader"],
          correct: 1,
          explanation: {
            correct: "A deliberate shift to short, blunt sentences — especially following longer, more complex sentence structures — creates emphasis and a sense of urgency or forceful conviction through CONTRAST. This stylistic choice draws the reader's attention and reinforces the writer's confidence in their concluding claims, a common and effective rhetorical technique called syntax variation for emphasis.",
            wrong: { 0: "This isn't necessarily confusing OR poorly planned — a DELIBERATE stylistic shift like this, especially when used strategically at a key moment (the conclusion), is a recognized and often effective rhetorical technique for creating emphasis, not simply confusing inconsistency.", 2: "Short, blunt sentences don't indicate a lack of content — they can be a deliberate STYLISTIC CHOICE for creating emphasis and directness, especially effective in a concluding section meant to leave a strong final impression.", 3: "Sentence-level stylistic choices like this DO have real rhetorical effects on readers — variation in sentence length/structure (syntax) is a recognized tool for creating emphasis, pacing, and tone, not something without functional rhetorical impact." },
            tempting: "None of the distractors accurately describe this deliberate stylistic technique, but dismissing sentence-level style as irrelevant to argument (choice D) misses how syntax choices can meaningfully reinforce a writer's rhetorical goals.",
            commonMistake: "Not recognizing DELIBERATE variation in sentence length/structure (syntax) as a meaningful rhetorical/stylistic tool — a shift to short, direct sentences, especially in contrast to more complex preceding sentences, is a common and effective technique for creating emphasis, urgency, or conviction.",
            apTip: "Syntax (sentence structure/length) is a frequently tested stylistic element — short, simple sentences often create emphasis, directness, or urgency (especially by contrast with surrounding longer sentences), while longer, more complex sentences can convey nuance, sophistication, or the interweaving of multiple related ideas. Consider how a writer's syntax choices serve their broader rhetorical purpose."
          }
        },
        {
          id: 'aplang-5-6', difficulty: 3, type: 'mcq', topic: 'Word Choice and Connotation',
          prompt: "A writer describes a company's cost-cutting decision using the word \"prudent\" rather than the more neutral \"careful\" or the more negative \"stingy.\" This specific word choice most directly demonstrates the rhetorical concept of:",
          choices: ["Syntax, referring to sentence structure", "Connotation, the implied or associated meaning/emotional coloring of a word beyond its literal, dictionary definition", "A logical fallacy", "An organizational structure choice"],
          correct: 1,
          explanation: {
            correct: "\"Prudent\" carries a distinctly POSITIVE connotation (implying wisdom and good judgment) compared to more neutral (\"careful\") or negative (\"stingy\") alternatives that could describe a similar action — this specific word choice demonstrates how connotation (a word's implied, associated meaning and emotional coloring beyond its literal definition) shapes a reader's perception of the same underlying action.",
            wrong: { 0: "Syntax refers to SENTENCE STRUCTURE (word order, sentence length, clause arrangement) — this example is specifically about WORD CHOICE and its implied meaning, which is a diction/connotation issue, not a syntax issue.", 2: "This isn't a flaw in LOGICAL REASONING — it's a deliberate STYLISTIC/rhetorical choice about word connotation, a different (and legitimate) rhetorical concept from a reasoning error.", 3: "This example concerns a single WORD CHOICE and its implied meaning, not the broader ORGANIZATIONAL structure of an essay (like paragraph order or overall argument architecture)." },
            tempting: "None of the distractors accurately describe this word-choice phenomenon, but confusing connotation (diction-level) with syntax (sentence-structure level) is a common general vocabulary confusion in rhetorical analysis.",
            commonMistake: "Confusing connotation (a word's implied/associated meaning and emotional coloring) with denotation (a word's literal, dictionary definition) — or confusing connotation-related diction choices with unrelated rhetorical concepts like syntax (sentence structure) or logical fallacies.",
            apTip: "Connotation is a frequently tested diction-level concept: the SAME basic action or fact can be described using words with very different connotations (\"prudent\" vs. \"careful\" vs. \"stingy\" for the same cost-cutting decision), and skilled writers deliberately choose words with connotations that support their intended perspective/argument — always consider WHY a writer chose one specific word over other, more neutral synonyms."
          }
        }
      ]
    },
    {
      id: 6,
      name: 'Unit 6: Position, Perspective, and Bias',
      questions: [
        {
          id: 'aplang-6-1', difficulty: 2, type: 'mcq', topic: "Identifying a Writer's Position",
          prompt: "When analyzing an argumentative text, identifying the writer's \"position\" primarily means determining:",
          choices: ["The physical location where the writer was living when they wrote the text", "The specific stance or claim the writer is taking on the issue being discussed", "The exact publication date of the text", "The font and formatting choices used in the text"],
          correct: 1,
          explanation: {
            correct: "A writer's \"position\" refers to the specific stance or claim they are taking on the issue at hand — essentially, what side of the argument or debate they've adopted, and what specific claim they're defending throughout the text.",
            wrong: { 0: "Physical/geographic location is generally irrelevant to a writer's argumentative POSITION on an issue (their stance/claim) — these are unrelated concepts, unless location is specifically and directly relevant to the argument's content itself.", 2: "Publication date is a factual/contextual detail about WHEN a text was created, not the writer's actual STANCE or claim on the issue being discussed — these are different types of information about a text.", 3: "Formatting/font choices are visual/presentational details unrelated to the substantive STANCE or claim (position) the writer is taking on the issue being argued." },
            tempting: "None of the distractors reflect the actual meaning of 'position' in this analytical context, but conflating it with unrelated contextual details (date, location) is a common vocabulary confusion.",
            commonMistake: "Confusing a writer's argumentative 'position' (their specific stance/claim on an issue) with unrelated contextual or presentational details about the text (when/where it was written, how it's formatted).",
            apTip: "When asked to identify a writer's 'position' on the exam, look specifically for their THESIS or central claim — the specific stance they're defending — not incidental contextual details about the text's creation or presentation."
          }
        },
        {
          id: 'aplang-6-2', difficulty: 3, type: 'mcq', topic: 'Recognizing Bias',
          prompt: "A news article about a new medication consistently uses positive, favorable language when describing the medication's benefits, while using vague, minimizing language when describing its potential side effects. This pattern most likely indicates:",
          choices: ["A perfectly objective, unbiased presentation of information", "A biased presentation, in which the writer's word choice and emphasis favor one perspective (the medication's benefits) over a fuller, more balanced treatment of both benefits and risks", "A text with no persuasive purpose whatsoever", "A text that should be read identically to a purely neutral encyclopedia entry"],
          correct: 1,
          explanation: {
            correct: "The described pattern — favorable language for benefits paired with vague, minimizing language for risks — reveals a biased presentation that favors one perspective (the medication's positive aspects) over a fuller, more balanced treatment that would give appropriate weight and clear language to BOTH benefits and risks.",
            wrong: { 0: "This pattern specifically demonstrates UNEVEN, favorable treatment of one side (benefits) over the other (risks) — this is the OPPOSITE of objective, balanced presentation, which would treat both benefits and risks with similarly clear, precise language.", 2: "This pattern of favorable versus minimizing language strongly suggests a PERSUASIVE purpose (shaping the reader's perception favorably toward the medication) — describing it as having no persuasive purpose ignores this clear pattern in the language choices.", 3: "A purely neutral encyclopedia entry would typically use consistently precise, balanced language for BOTH benefits and risks — the pattern described here (favorable vs. minimizing language) is inconsistent with this kind of neutral treatment." },
            tempting: "None of the distractors accurately describe this clearly biased pattern, but assuming any factual-sounding article must be neutral (choice A) overlooks how word choice/emphasis alone can introduce significant bias.",
            commonMistake: "Assuming a text must contain outright false statements to be considered 'biased,' rather than recognizing that BIAS can be conveyed through more subtle means — such as uneven emphasis, favorable versus minimizing word choice/connotation, and selective detail — even when individual factual statements are technically accurate.",
            apTip: "Bias can be revealed through subtle linguistic patterns even in ostensibly factual writing: look for UNEVEN treatment between different aspects of an issue (favorable language for one side, minimizing/vague language for the other) as a signal of underlying bias, even when the text doesn't make explicitly false claims."
          }
        },
        {
          id: 'aplang-6-3', difficulty: 3, type: 'mcq', topic: 'Tone',
          prompt: "A writer's \"tone\" in a piece of writing refers to:",
          choices: ["The specific font size used in printed formatting", "The writer's attitude toward their subject matter, conveyed through word choice, syntax, and other stylistic elements", "The total number of paragraphs in the piece", "The writer's physical speaking voice, relevant only to spoken speeches"],
          correct: 1,
          explanation: {
            correct: "Tone refers to the writer's attitude toward their subject matter (and sometimes toward their audience), conveyed through stylistic choices including word choice/connotation, syntax, and other rhetorical elements — tone might be described as, for example, sarcastic, earnest, urgent, dismissive, or celebratory, depending on these cumulative stylistic signals.",
            wrong: { 0: "Font size is a visual FORMATTING detail unrelated to the writer's ATTITUDE toward their subject, which is what 'tone' specifically refers to in rhetorical analysis.", 2: "The number of paragraphs is a STRUCTURAL/organizational detail, not related to the writer's ATTITUDE toward their subject matter, which tone specifically addresses.", 3: "While tone certainly applies to SPOKEN speeches, it applies equally to WRITTEN texts — tone is conveyed through written stylistic choices (diction, syntax) just as much as through actual vocal delivery, so it is not limited to spoken contexts." },
            tempting: "None of the distractors accurately define tone, but limiting it to spoken contexts (choice D) is a common oversimplification, since written texts convey tone extensively through stylistic choices alone.",
            commonMistake: "Confusing tone (the writer's attitude toward the subject, conveyed through style) with unrelated formatting or structural details, or assuming tone is exclusively a feature of spoken communication rather than recognizing how thoroughly written texts convey tone through word choice and syntax.",
            apTip: "When identifying tone in a passage, look at the CUMULATIVE effect of diction (word choice/connotation), syntax (sentence structure), and other stylistic choices — and use PRECISE tone words in your analysis (rather than vague terms like 'positive' or 'negative,' aim for more specific words like 'reverent,' 'scathing,' 'wry,' or 'urgent') to demonstrate sophisticated understanding."
          }
        },
        {
          id: 'aplang-6-4', difficulty: 4, type: 'mcq', topic: 'Shifts in Tone or Perspective',
          prompt: "A writer begins an essay with a measured, analytical tone but shifts to a noticeably more urgent, emotionally charged tone in the essay's final paragraph. A sophisticated rhetorical analysis of this shift would consider:",
          choices: ["The shift is simply a writing error with no rhetorical significance", "What rhetorical purpose this tonal shift might serve — such as building toward a persuasive, memorable call to action after establishing credibility through the initial measured, analytical approach", "Tonal shifts never occur in effective argumentative writing", "The shift should be entirely ignored in any rhetorical analysis"],
          correct: 1,
          explanation: {
            correct: "A sophisticated analysis considers the rhetorical PURPOSE such a deliberate tonal shift might serve — for example, an initial measured, analytical tone might first establish the writer's credibility and careful reasoning (ethos/logos), before shifting to a more urgent, emotionally charged tone (pathos) in the conclusion to leave a memorable, motivating final impression and drive the reader toward action.",
            wrong: { 0: "A DELIBERATE tonal shift, especially one that serves a clear rhetorical purpose (like building toward an emotionally resonant conclusion), is not simply an error — it can be a sophisticated, intentional rhetorical strategy worth analyzing for its purpose and effect.", 2: "Tonal shifts DO occur, and can be highly EFFECTIVE, in skilled argumentative writing — describing them as never occurring in effective writing directly contradicts this common and often powerful rhetorical technique.", 3: "A tonal shift, especially a significant and deliberate one, is exactly the kind of stylistic choice that SHOULD be closely analyzed for its rhetorical purpose and effect — ignoring it would mean missing a potentially significant element of the writer's rhetorical strategy." },
            tempting: "None of the distractors reflect sophisticated rhetorical analysis practice, but dismissing tonal shifts as mere errors (choice A) reflects an unsophisticated, surface-level reading that misses their potential strategic purpose.",
            commonMistake: "Failing to consider WHY a writer might deliberately shift tone at a specific point in a text, rather than recognizing tonal shifts as potentially purposeful rhetorical strategies (such as building from analytical credibility toward emotional urgency) worth analyzing for their specific effect on the reader and the argument's overall persuasive strategy.",
            apTip: "When you notice a tonal shift in a passage, always ask WHY the writer might have made this choice at THIS specific point in the text, and what EFFECT it likely has on the reader — this kind of purposeful analysis (rather than simply noting 'the tone changes') demonstrates the sophisticated thinking rewarded on the AP Lang exam's rhetorical analysis essay."
          }
        },
        {
          id: 'aplang-6-5', difficulty: 3, type: 'mcq', topic: 'Loaded Language',
          prompt: "A writer describes a group of protesters as an \"unruly mob\" rather than as \"demonstrators\" or \"protesters.\" This word choice is an example of:",
          choices: ["Completely neutral, unbiased language with no persuasive effect", "Loaded language — words chosen specifically for their strong emotional connotations, here negatively framing the protesters to influence the reader's perception", "A grammatical error in word selection", "A logical, evidence-based appeal with no connection to word choice"],
          correct: 1,
          explanation: {
            correct: "\"Unruly mob\" is a clear example of loaded language — words chosen specifically for their strong, in this case negative, emotional connotations (suggesting chaos, lawlessness, and danger) rather than more neutral terms like \"demonstrators\" or \"protesters\" — this word choice works to shape the reader's perception and emotional response to the group being described, independent of any actual argument or evidence.",
            wrong: { 0: "This is the OPPOSITE of neutral language — \"unruly mob\" carries strong negative connotations that clearly work to shape the reader's perception in a particular (unfavorable) direction, representing a significant persuasive effect through word choice alone.", 2: "This is not a grammatical ERROR — \"unruly mob\" is grammatically correct; the issue is specifically about the WORD'S CONNOTATION and its persuasive/biasing effect, a stylistic/rhetorical concern, not a grammar mistake.", 3: "This IS directly connected to word choice/diction (a stylistic element) — it's specifically an example of loaded, connotation-driven language, not a logical or evidence-based appeal at all." },
            tempting: "None of the distractors accurately describe loaded language, but dismissing charged word choices as neutral (choice A) overlooks how connotation alone can significantly shape a reader's perception, even without any explicit argument or claim.",
            commonMistake: "Underestimating how significantly a single word choice (like \"mob\" versus \"protesters\") can shape a reader's perception and emotional response, independent of any explicit argument, evidence, or claim — loaded language works through CONNOTATION to influence perception, often without the reader consciously noticing the manipulation.",
            apTip: "Loaded language is a frequently tested rhetorical device — practice identifying word choices with strong emotional connotations (particularly in politically or socially charged writing) and explaining SPECIFICALLY how that word choice shapes reader perception differently than a more neutral alternative would (e.g., 'unruly mob' vs. 'demonstrators' vs. 'protesters' vs. 'activists')."
          }
        },
        {
          id: 'aplang-6-6', difficulty: 2, type: 'mcq', topic: "Author's Perspective vs. Objective Fact",
          prompt: "The statement \"Unemployment increased by 2% last quarter\" is best described as an objective, verifiable fact, while the statement \"This alarming rise in unemployment reveals the government's utter failure to manage the economy\" is best described as:",
          choices: ["Also a purely objective, verifiable fact with no interpretive element", "An interpretation/opinion that goes beyond the objective data, adding the writer's own evaluative judgment and perspective", "Exactly identical in nature to the first, purely factual statement", "A statement with no connection whatsoever to the factual data mentioned"],
          correct: 1,
          explanation: {
            correct: "While the second statement references the same underlying factual data (a rise in unemployment), it goes well beyond objective fact by adding significant interpretive and evaluative language (\"alarming,\" \"utter failure\") that reflects the writer's own judgment and perspective, rather than simply reporting a verifiable, objective figure.",
            wrong: { 0: "This statement includes clearly EVALUATIVE, opinion-based language (\"alarming,\" \"utter failure\") that goes beyond simply reporting objective, verifiable data — this makes it an INTERPRETATION, not a purely objective fact.", 2: "These two statements are NOT identical in nature — the first is a neutral, verifiable data point, while the second adds significant evaluative/interpretive framing and judgment about that data, representing a meaningfully different type of statement.", 3: "The second statement IS connected to and builds upon the same underlying factual data (unemployment rising) — it doesn't lack connection to the facts; rather, it adds INTERPRETIVE framing and judgment ON TOP of those facts." },
            tempting: "Choice A is tempting because the statement DOES reference real underlying data, but the addition of clearly evaluative language (\"alarming,\" \"utter failure\") moves it from objective reporting into interpretive/opinion territory.",
            commonMistake: "Not distinguishing between objective, verifiable facts (data points that can be checked and confirmed) and INTERPRETATIONS or opinions built upon those facts (which add evaluative judgment, causal claims, or emotional framing beyond what the raw data itself establishes).",
            apTip: "Practice distinguishing objective facts (verifiable data/events) from interpretations/opinions (evaluative judgments, causal claims, or emotionally charged framing added ON TOP of factual data) — this distinction is fundamental to critically evaluating any argumentative text and to accurately characterizing a writer's perspective versus the underlying objective reality."
          }
        }
      ]
    },
    {
      id: 7,
      name: 'Unit 7: Successful and Unsuccessful Arguments',
      questions: [
        {
          id: 'aplang-7-1', difficulty: 3, type: 'mcq', topic: 'Logical Fallacies — Hasty Generalization',
          prompt: "A writer argues, \"I met two rude employees at this store, so clearly the entire company has a terrible workplace culture.\" This argument demonstrates the logical fallacy of:",
          choices: ["A false dichotomy, presenting only two options when more exist", "Hasty generalization, drawing a broad conclusion about an entire group based on a very small, insufficient sample size", "An appeal to authority", "A slippery slope"],
          correct: 1,
          explanation: {
            correct: "Drawing a sweeping conclusion about an ENTIRE company's workplace culture based on encountering just two employees is a hasty generalization — the sample size (two individuals) is far too small and potentially unrepresentative to support such a broad conclusion about the whole organization.",
            wrong: { 0: "A false dichotomy presents only TWO options as if they were the only possibilities, when more options actually exist — this argument doesn't present a forced either/or choice; it draws an overly broad conclusion from limited evidence instead.", 2: "An appeal to authority relies on citing a supposed EXPERT or authority figure as evidence — this argument relies on the writer's own limited personal experience/observation, not an appeal to any outside authority.", 3: "A slippery slope argues that one small initial step will inevitably lead to a chain of increasingly extreme consequences — this argument doesn't describe a chain of escalating consequences; it draws a single broad conclusion from insufficient evidence." },
            tempting: "None of the distractors accurately name this specific fallacy, but confusing different named logical fallacies with each other is a common general source of error given how many are tested.",
            commonMistake: "Confusing hasty generalization (drawing broad conclusions from insufficient/unrepresentative evidence) with other distinct logical fallacies (false dichotomy, slippery slope, appeal to authority) that involve different kinds of flawed reasoning.",
            apTip: "Hasty generalization occurs whenever a broad, sweeping conclusion is drawn from a sample that is too small or unrepresentative to actually support that conclusion — watch for absolute language (\"clearly,\" \"obviously,\" \"the entire\") following limited anecdotal evidence as a common signal of this fallacy."
          }
        },
        {
          id: 'aplang-7-2', difficulty: 3, type: 'mcq', topic: 'Logical Fallacies — False Dichotomy',
          prompt: "A writer argues, \"Either we completely eliminate all government regulations on this industry, or the entire industry will collapse.\" This argument demonstrates the logical fallacy of:",
          choices: ["A false dichotomy, presenting only two extreme options while ignoring other more moderate possibilities that likely exist", "A hasty generalization based on insufficient sample size", "An ad hominem attack on a person's character", "A circular argument that assumes its own conclusion"],
          correct: 0,
          explanation: {
            correct: "This argument presents only two extreme options (complete elimination of all regulations, OR total industry collapse) as if these were the ONLY possibilities, while ignoring the much more likely existence of moderate alternatives (partial deregulation, regulatory reform, etc.) — this oversimplified, artificially narrowed set of options is the hallmark of a false dichotomy (also called a false dilemma).",
            wrong: { 1: "Hasty generalization involves drawing a broad conclusion from a small, insufficient SAMPLE of evidence/examples — this argument doesn't reference a sample size at all; it presents an artificially narrow, two-option framing of possible ACTIONS/outcomes instead.", 2: "An ad hominem attack targets a PERSON'S CHARACTER rather than addressing their actual argument — this argument doesn't attack any individual's character; it presents an oversimplified either/or choice about policy outcomes.", 3: "A circular argument assumes the truth of its own CONCLUSION within its premises (essentially restating the claim as if it were evidence for itself) — this argument instead presents an artificially limited set of two extreme options, a different kind of logical flaw." },
            tempting: "None of the distractors accurately name this specific fallacy, but confusing false dichotomy with other named fallacies is a common source of error, especially since several fallacies involve some kind of oversimplification.",
            commonMistake: "Confusing false dichotomy (artificially narrowing options to only two extremes, ignoring moderate alternatives) with other distinct logical fallacies that involve different specific reasoning flaws (hasty generalization's insufficient sample, ad hominem's character attack, circular reasoning's self-referential logic).",
            apTip: "A false dichotomy (false dilemma) presents only two options — often both extreme — as if they were the ONLY possibilities, when in reality a range of more moderate alternatives likely exists. Watch for \"either...or\" framing that seems to artificially eliminate a reasonable middle ground."
          }
        },
        {
          id: 'aplang-7-3', difficulty: 3, type: 'mcq', topic: 'Logical Fallacies — Ad Hominem',
          prompt: "In a debate about a proposed environmental policy, one speaker responds to their opponent's argument by saying, \"You can't trust anything this person says about the environment — they drive an expensive car,\" without addressing the actual substance of the opponent's argument. This response demonstrates:",
          choices: ["A well-reasoned rebuttal using strong logical evidence", "An ad hominem fallacy, attacking the opponent's personal characteristics/choices rather than engaging with the actual substance of their argument", "A valid appeal to the opponent's credibility (ethos)", "An example of a sound cause-and-effect argument"],
          correct: 1,
          explanation: {
            correct: "This response attacks the OPPONENT'S PERSONAL CHOICES (owning an expensive car) rather than engaging with the actual SUBSTANCE of their environmental policy argument — this is a classic ad hominem fallacy, which attempts to discredit an argument by attacking the person making it, rather than addressing the argument's actual merits or evidence.",
            wrong: { 0: "This is NOT a well-reasoned rebuttal — it fails to engage with the actual SUBSTANCE of the opponent's argument at all, instead focusing entirely on an irrelevant personal characteristic, which is a hallmark of weak, fallacious reasoning, not strong logical evidence.", 2: "This is NOT a valid ethos-based appeal — a LEGITIMATE credibility challenge would need to show how the personal characteristic ACTUALLY undermines the specific argument's validity or the person's genuine expertise on the topic, not simply attack an unrelated personal choice/characteristic as an easy dismissal.", 3: "This response doesn't establish any actual CAUSAL relationship between evidence and a conclusion — it simply attacks the opponent's character/choices as a way of avoiding engagement with their argument's actual content." },
            tempting: "Choice C is tempting because attacking credibility CAN sometimes be legitimate (if directly relevant to genuine expertise on the topic), but this example specifically attacks an UNRELATED personal choice (car ownership) rather than making any genuine, relevant credibility case.",
            commonMistake: "Confusing a legitimate credibility-based critique (which would need to show direct relevance to the person's actual expertise or trustworthiness ON THE SPECIFIC TOPIC) with an ad hominem attack (which attacks unrelated personal characteristics/choices simply to discredit the person, while avoiding engagement with their actual argument).",
            apTip: "An ad hominem fallacy specifically attacks the PERSON making an argument (their character, personal choices, or circumstances) INSTEAD OF engaging with the actual substance and evidence of their argument — even if the personal detail is true, it doesn't necessarily invalidate the actual logical merits of their argument, which is what a genuine rebuttal should address."
          }
        },
        {
          id: 'aplang-7-4', difficulty: 4, type: 'mcq', topic: 'Logical Fallacies — Slippery Slope',
          prompt: "A writer argues, \"If we allow students to redo just one failed assignment, soon they'll expect to redo every assignment, then expect automatic passing grades, and eventually the entire education system will collapse.\" This argument demonstrates:",
          choices: ["A well-supported, evidence-based prediction with strong causal logic connecting each step", "A slippery slope fallacy, asserting an inevitable chain of increasingly extreme consequences without adequately establishing that each step actually follows necessarily from the previous one", "A valid statistical appeal based on solid data", "An example of effective, legitimate concession and refutation"],
          correct: 1,
          explanation: {
            correct: "This argument asserts an escalating chain of increasingly extreme consequences (one assignment redo → redoing everything → automatic passing grades → total system collapse) without actually establishing that each step NECESSARILY and INEVITABLY follows from the previous one — this unsupported chain of exaggerated causation is the hallmark of a slippery slope fallacy.",
            wrong: { 0: "This argument LACKS the actual evidence/reasoning needed to establish that each step in the chain necessarily follows from the previous one — the connections are ASSERTED, not actually demonstrated through solid causal logic or evidence, making this a fallacy rather than a well-supported prediction.", 2: "No actual statistics or data are presented in this argument — it relies entirely on an ASSERTED chain of hypothetical consequences, not any statistical evidence.", 3: "This argument doesn't involve CONCEDING any point or REFUTING a counterargument — it simply asserts an escalating, unsupported chain of hypothetical negative consequences, which is a different rhetorical/logical move entirely." },
            tempting: "None of the distractors accurately describe this fallacious reasoning pattern, but mistaking an assertively worded chain of consequences for legitimate evidence-based prediction (choice A) is a common way this fallacy can seem superficially persuasive.",
            commonMistake: "Being persuaded by the RHETORICAL FORCE/confidence of a slippery slope argument's escalating language, without critically examining whether each individual step in the chain is actually logically necessary or adequately supported by evidence — slippery slope arguments often SOUND compelling while lacking real logical support for each connecting step.",
            apTip: "A slippery slope fallacy asserts that one relatively minor initial action will inevitably lead to a chain of increasingly extreme (and usually negative) consequences, WITHOUT adequately demonstrating that each step in the chain actually follows necessarily from the previous one — watch for escalating \"if this, then eventually that\" chains that skip over the actual justification needed to connect each step."
          }
        },
        {
          id: 'aplang-7-5', difficulty: 3, type: 'mcq', topic: 'Evaluating Argument Effectiveness',
          prompt: "An argumentative essay presents a clear, specific thesis, but its supporting evidence consists ENTIRELY of a single anecdote about the writer's own personal experience, with no additional evidence types. This essay's persuasive effectiveness would most likely be strengthened by:",
          choices: ["Removing the thesis statement entirely to make the essay less specific", "Incorporating additional, varied types of evidence (such as statistics, expert testimony, or other examples) to supplement and strengthen the single anecdote", "Making the anecdote even longer, with no other changes to the essay's evidence base", "Removing all evidence from the essay entirely, relying purely on the writer's stated opinion"],
          correct: 1,
          explanation: {
            correct: "Incorporating ADDITIONAL, VARIED types of evidence (such as statistics, expert testimony, or other examples) alongside the personal anecdote would strengthen this essay's persuasive effectiveness — while a single relevant anecdote can be valuable, relying EXCLUSIVELY on one personal example limits the argument's persuasive power and makes it more vulnerable to the (fair) criticism that one experience doesn't necessarily generalize to a broader claim.",
            wrong: { 0: "Removing the THESIS would make the essay LESS focused and less clearly argumentative, not more persuasive — a clear, specific thesis is a STRENGTH the essay should keep, not eliminate.", 2: "Simply making the SAME single anecdote LONGER doesn't address the underlying weakness of relying on only ONE TYPE of evidence — the essay needs VARIED evidence types, not just more length devoted to the same single, limited example.", 3: "Removing evidence ENTIRELY would make the essay significantly LESS persuasive, not more — argumentative writing specifically requires supporting evidence to be credible and convincing; eliminating it entirely would leave only unsupported opinion." },
            tempting: "Choice C is tempting because it does suggest 'improving' the existing evidence somehow, but simply lengthening the SAME single anecdote doesn't address the more fundamental weakness of relying on only ONE evidence type/source.",
            commonMistake: "Assuming that a single, well-told anecdote alone is sufficient for a strong argumentative essay, rather than recognizing that VARIED evidence types (combining anecdotal, statistical, expert testimony, etc.) generally produce a MORE persuasive, well-rounded, and credible argument than relying on just one evidence type alone.",
            apTip: "Strong argumentative essays typically benefit from VARIED types of evidence (not relying on just one type, like a single anecdote) — combining, for example, a relevant personal anecdote WITH supporting statistics or expert testimony creates a more well-rounded, credible, and persuasive case than any single evidence type alone."
          }
        },
        {
          id: 'aplang-7-6', difficulty: 4, type: 'mcq', topic: 'Distinguishing Strong and Weak Reasoning',
          prompt: "Which of the following arguments demonstrates the STRONGEST, most logically sound reasoning connecting evidence to a claim?",
          choices: ["\"Ice cream sales and drowning incidents both increase in summer, so ice cream sales must directly cause drownings.\"", "\"Multiple independent, peer-reviewed studies across different research teams have consistently found a specific link between this chemical exposure and a particular health outcome, so a causal relationship is likely, pending further research.\"", "\"My neighbor got sick after eating at this restaurant once, so this restaurant is obviously always unsafe.\"", "\"This policy must be correct, because the very fact that it exists proves it is the right approach.\""],
          correct: 1,
          explanation: {
            correct: "This option demonstrates strong reasoning: it cites MULTIPLE INDEPENDENT studies (not just one), across DIFFERENT research teams (reducing the chance of shared bias/error), with CONSISTENT findings, and appropriately qualifies the conclusion (\"likely, pending further research\") rather than overstating certainty — this reflects careful, evidence-appropriate reasoning.",
            wrong: { 0: "This describes a classic CORRELATION-CAUSATION fallacy — ice cream sales and drownings both rise in summer due to a COMMON underlying cause (warmer weather, more people swimming and buying ice cream), not because one directly causes the other; this confuses correlation with causation.", 2: "This is a HASTY GENERALIZATION — drawing a sweeping, absolute conclusion (\"always unsafe\") from a SINGLE incident/anecdote is a significant logical overreach not adequately supported by such limited evidence.", 3: "This is a CIRCULAR argument (begging the question) — it essentially claims the policy is correct BECAUSE it exists, without providing any actual independent evidence or reasoning to support its correctness; the conclusion is simply restated as if it were its own justification." },
            tempting: "Each distractor represents a genuinely common and tempting-sounding fallacious reasoning pattern, which is exactly why recognizing the qualifying, multi-source language in the correct answer (\"multiple independent studies,\" \"likely, pending further research\") is an important skill.",
            commonMistake: "Not recognizing the SPECIFIC markers of strong, appropriately qualified reasoning (multiple independent sources, consistent findings, appropriately qualified conclusions) versus the markers of common fallacies (correlation-causation confusion, hasty generalization from single examples, circular self-referential logic).",
            apTip: "Strong, credible reasoning typically features: appropriately qualified claims (not overstated certainty), multiple independent/varied sources of supporting evidence, and explicit logical connections between evidence and conclusions — practice distinguishing this from common fallacy patterns (correlation-causation, hasty generalization, circular reasoning, false dichotomy) that may superficially sound persuasive but lack this rigor."
          }
        }
      ]
    },
    {
      id: 8,
      name: 'Unit 8: Stylistic Choices',
      questions: [
        {
          id: 'aplang-8-1', difficulty: 2, type: 'mcq', topic: 'Comparisons Based on Audience',
          prompt: "A writer explaining a complex financial concept to a general, non-expert audience uses a comparison to a household budget, while a writer explaining the SAME concept to an audience of professional economists uses a comparison to macroeconomic models. This difference primarily illustrates:",
          choices: ["Both writers are using identical, audience-independent comparisons with no meaningful difference", "Writers strategically choose comparisons/analogies based on what will be most accessible and meaningful to their SPECIFIC intended audience's existing knowledge", "Comparisons should never be tailored to a specific audience under any circumstances", "Only the professional economists' comparison could possibly be considered legitimate or effective"],
          correct: 1,
          explanation: {
            correct: "This difference illustrates how skilled writers strategically choose comparisons/analogies based on what will be MOST ACCESSIBLE and MEANINGFUL to their specific audience's existing knowledge and frame of reference — a household budget comparison resonates with general readers' everyday experience, while a macroeconomic model comparison resonates with economists' specialized professional knowledge.",
            wrong: { 0: "These are NOT identical comparisons — they are DIFFERENT, deliberately audience-appropriate comparisons chosen specifically to resonate with each distinct audience's existing knowledge base, representing a meaningful strategic difference.", 2: "This is the OPPOSITE of effective rhetorical practice — TAILORING comparisons/analogies to a specific audience's existing knowledge and frame of reference is a KEY strategy for effective communication, not something to avoid.", 3: "BOTH comparisons can be legitimate and effective for THEIR RESPECTIVE intended audiences — the household budget comparison is well-suited to a general audience, just as the macroeconomic model comparison is well-suited to expert economists; effectiveness depends on audience fit, not one comparison being universally superior." },
            tempting: "None of the distractors reflect sound rhetorical practice, but assuming the more 'technical' comparison must be inherently superior (choice D) ignores how audience-appropriateness, not technical sophistication alone, determines a comparison's actual effectiveness.",
            commonMistake: "Assuming there is one single 'best' way to explain any given concept, rather than recognizing that EFFECTIVE explanatory comparisons must be tailored to the SPECIFIC audience's existing knowledge and frame of reference — the same underlying concept may require different, audience-appropriate analogies for different audiences.",
            apTip: "When crafting or analyzing explanatory comparisons/analogies, always consider whether the SPECIFIC comparison chosen would genuinely resonate with and clarify the concept for the INTENDED audience's existing knowledge — a technically 'sophisticated' comparison isn't automatically more effective if it doesn't connect with what that particular audience already understands."
          }
        },
        {
          id: 'aplang-8-2', difficulty: 3, type: 'mcq', topic: 'Sentence Development and Audience Perception',
          prompt: "A writer uses consistently long, elaborate sentences filled with subordinate clauses throughout an essay intended for a general public audience unfamiliar with the topic. This stylistic choice would most likely:",
          choices: ["Automatically make the argument more persuasive and easier to understand for this specific audience", "Risk making the argument harder to follow for this general audience, potentially undermining clarity and overall persuasive effectiveness", "Have no effect whatsoever on how the audience perceives or understands the essay", "Automatically be considered inappropriate and ineffective in absolutely any context or audience"],
          correct: 1,
          explanation: {
            correct: "Consistently long, elaborate sentences with heavy subordination can make an argument HARDER TO FOLLOW for a general, non-expert audience unfamiliar with the topic — this stylistic choice risks undermining clarity and, consequently, the argument's overall persuasive effectiveness with THIS SPECIFIC audience, even if the same style might work well for a different, more specialized audience.",
            wrong: { 0: "This is generally the OPPOSITE effect for a GENERAL, non-expert audience — overly complex, elaborate sentence structures more often HINDER (not automatically help) clarity and comprehension for readers unfamiliar with a topic.", 2: "Sentence-level style choices DO have real, meaningful effects on how an audience perceives and understands a text — describing 'no effect whatsoever' ignores the well-documented relationship between sentence complexity and reader comprehension/persuasion.", 3: "Long, elaborate sentences AREN'T automatically inappropriate in EVERY context — this same style might work well for a different, more sophisticated or specialized audience already comfortable with complex sentence structures; effectiveness depends on audience fit, not an absolute, context-independent rule." },
            tempting: "Choice D is tempting because it correctly identifies a potential problem with this style choice, but overgeneralizes it into an ABSOLUTE, audience-independent rule, when the actual issue is specifically about audience APPROPRIATENESS.",
            commonMistake: "Treating sentence-level stylistic choices as universally 'good' or 'bad' in isolation, rather than recognizing that their EFFECTIVENESS depends heavily on AUDIENCE APPROPRIATENESS — the same elaborate sentence style could be a genuine strength for one audience and a genuine weakness for a different one.",
            apTip: "When evaluating a writer's sentence-level style choices (like sentence length/complexity), always consider them in relation to the SPECIFIC intended audience — a style well-suited to expert, specialized readers may create genuine comprehension barriers for a general, non-expert audience, and vice versa; there's no universally 'correct' sentence style independent of audience."
          }
        },
        {
          id: 'aplang-8-3', difficulty: 3, type: 'mcq', topic: 'Anaphora',
          prompt: "A speaker repeats the same phrase at the beginning of several consecutive sentences (\"We will rebuild. We will recover. We will rise again.\") This rhetorical device is known as:",
          choices: ["Anaphora, the repetition of a word or phrase at the beginning of successive clauses or sentences for emphasis and rhythmic effect", "A logical fallacy involving circular reasoning", "An example of understatement", "A shift in the essay's overall organizational structure"],
          correct: 0,
          explanation: {
            correct: "Repeating the same phrase (\"We will...\") at the beginning of successive sentences is a specific, named rhetorical device called anaphora — this repetition creates emphasis, builds rhythmic momentum, and reinforces the speaker's central message through deliberate structural repetition.",
            wrong: { 1: "This is a STYLISTIC/rhetorical device involving deliberate repetition for emphasis, not a FLAW in logical reasoning — anaphora doesn't involve any circular or otherwise fallacious argumentative structure.", 2: "Understatement involves deliberately downplaying or minimizing something for effect (the opposite of exaggeration) — this example involves REPETITION for EMPHASIS, not minimization, which is a different stylistic device entirely.", 3: "This describes a specific SENTENCE-LEVEL stylistic/rhetorical device (repeated phrase structure), not a broader shift in the essay's overall ORGANIZATIONAL structure (like paragraph order or argument architecture)." },
            tempting: "None of the distractors accurately name this specific device, but confusing named rhetorical devices with unrelated concepts (logical fallacies, organizational structure) is a common general vocabulary confusion.",
            commonMistake: "Not recognizing named rhetorical/stylistic devices (like anaphora) by their specific technical definitions, or confusing stylistic techniques with unrelated concepts like logical fallacies or broader organizational structure.",
            apTip: "Anaphora (repeated phrase at the START of successive clauses/sentences) is a classic, frequently tested rhetorical device for creating emphasis and rhythmic power — it's commonly used in memorable persuasive speeches specifically because the repetition reinforces the central message and creates a building, escalating rhetorical effect."
          }
        },
        {
          id: 'aplang-8-4', difficulty: 3, type: 'mcq', topic: 'Rhetorical Questions',
          prompt: "A writer asks, \"How much longer can we afford to ignore this crisis?\" without expecting or providing a literal direct answer. This use of a rhetorical question primarily serves to:",
          choices: ["Genuinely request specific factual information from the reader", "Engage the reader and implicitly assert a point (that the crisis has been ignored too long and needs urgent attention) without stating it as a direct, potentially more easily disputed claim", "Indicate that the writer has no clear position on the issue being discussed", "Function identically to a standard declarative statement with absolutely no different rhetorical effect"],
          correct: 1,
          explanation: {
            correct: "This rhetorical question doesn't seek a literal factual answer — instead, it engages the reader directly and implicitly ASSERTS a point (that the crisis has been ignored for too long and demands urgent attention) through the question's phrasing itself, often making the underlying claim feel more like an obvious, shared conclusion rather than a directly stated (and more easily disputed) assertion.",
            wrong: { 0: "The writer isn't genuinely seeking factual INFORMATION from the reader — rhetorical questions are a stylistic device used for PERSUASIVE/engaging effect, not literal information-seeking.", 2: "This use of a rhetorical question actually suggests a CLEAR position (implying the crisis demands urgent attention) — rhetorical questions can be a powerful way to assert a position INDIRECTLY, not an indication of having no position at all.", 3: "Rhetorical questions DO have a DIFFERENT rhetorical effect compared to direct declarative statements — they engage the reader more actively and can make a claim feel more like a natural, shared conclusion (implicitly reached BY the reader) rather than a direct, potentially contestable assertion FROM the writer." },
            tempting: "Choice C is tempting because a question might seem to suggest uncertainty, but rhetorical questions specifically work BY implying a clear, often obvious answer/position, not by expressing genuine uncertainty.",
            commonMistake: "Assuming a question format automatically indicates genuine uncertainty or an information request, rather than recognizing how rhetorical questions can be a powerful, deliberate stylistic device for implicitly asserting a clear position while actively engaging the reader in reaching that conclusion themselves.",
            apTip: "Rhetorical questions are a frequently tested stylistic device — when analyzing one, consider the IMPLIED answer/position the question suggests, and how phrasing a point AS A QUESTION (rather than a direct statement) affects reader engagement and makes the underlying claim feel more like a natural, shared conclusion than a directly asserted, more easily disputed claim."
          }
        },
        {
          id: 'aplang-8-5', difficulty: 4, type: 'mcq', topic: 'Juxtaposition',
          prompt: "A writer places a vivid description of extreme poverty directly next to a description of extravagant wealth within the same paragraph, without additional explicit commentary connecting the two. This technique is best described as:",
          choices: ["An unrelated coincidence with no rhetorical significance whatsoever", "Juxtaposition, placing contrasting elements side by side to highlight their differences and implicitly invite the reader to draw their own connections or conclusions", "A logical fallacy known as false equivalence", "An example of purely objective, neutral reporting with no persuasive intent"],
          correct: 1,
          explanation: {
            correct: "Deliberately placing two vividly contrasting elements (extreme poverty and extravagant wealth) side by side, without necessarily stating an explicit connecting claim, is the technique of juxtaposition — this structural placement itself invites the reader to notice the stark contrast and draw their own implicit conclusions or emotional response, often more powerfully than an explicit statement might.",
            wrong: { 0: "This kind of deliberate, structured placement is NOT coincidental — juxtaposition is a purposeful rhetorical/structural CHOICE specifically intended to highlight a meaningful contrast for the reader.", 2: "False equivalence involves incorrectly treating two things as MORALLY OR LOGICALLY EQUIVALENT when they are not comparable in that way — juxtaposition instead HIGHLIGHTS a DIFFERENCE/contrast between two things, which is a different rhetorical purpose entirely.", 3: "This deliberate placement of vivid, contrasting descriptions serves a clear PERSUASIVE/rhetorical purpose (highlighting inequality through implicit contrast) — it is not neutral, purely objective reporting with no persuasive intent." },
            tempting: "Choice C is tempting because 'false equivalence' also involves comparing two things, but it specifically involves INCORRECTLY treating different things as equivalent — juxtaposition instead deliberately highlights their DIFFERENCE/contrast, a different rhetorical technique.",
            commonMistake: "Confusing juxtaposition (deliberately placing contrasting elements together to highlight difference, without necessarily equating them) with false equivalence (a logical fallacy that incorrectly treats different things as morally/logically equivalent) — these involve different, sometimes opposite, rhetorical/logical relationships between the compared elements.",
            apTip: "Juxtaposition is a powerful STRUCTURAL/placement-based rhetorical device — rather than stating a claim directly, a writer places contrasting elements side by side and lets the CONTRAST itself imply the point, often creating a more vivid, memorable, and emotionally resonant effect than an explicit statement of the same underlying idea."
          }
        },
        {
          id: 'aplang-8-6', difficulty: 3, type: 'mcq', topic: 'How Style Affects an Argument',
          prompt: "Two writers make the exact same underlying claim, but one uses vivid, concrete imagery and varied sentence structure, while the other uses only abstract, generic language and monotonous, repetitive sentence patterns. Which writer's version is more likely to be persuasive to most readers, and why?",
          choices: ["Neither version's stylistic choices have any real effect on persuasiveness, since the underlying claim is identical", "The first writer's version is more likely to be persuasive, since vivid imagery and varied syntax tend to engage readers more effectively and make an argument more memorable and compelling, even when the underlying claim is the same", "The second writer's version is automatically superior, since abstract language is always considered more sophisticated and persuasive", "Style has no meaningful connection to an argument's actual persuasive effectiveness"],
          correct: 1,
          explanation: {
            correct: "Even when the underlying CLAIM is identical, STYLISTIC choices (vivid, concrete imagery versus abstract, generic language; varied versus monotonous sentence structure) can significantly affect an argument's actual persuasive impact — vivid imagery and varied syntax tend to engage readers more effectively, making an argument more memorable, vivid, and ultimately more compelling, even beyond the argument's literal content.",
            wrong: { 0: "This ignores the well-documented, significant effect that STYLE (independent of the underlying claim itself) has on how persuasively and memorably an argument lands with readers — style and substance work together, and style genuinely matters for effectiveness.", 2: "Abstract language is NOT automatically superior or more persuasive — in most contexts, VIVID, CONCRETE imagery tends to engage readers more effectively than vague, abstract language, making the FIRST writer's approach generally more effective, not the second.", 3: "This directly contradicts the well-established, frequently tested principle that STYLE meaningfully affects an argument's persuasive impact — style is not a superficial, inconsequential add-on separate from an argument's actual effectiveness; it's an integral part of it." },
            tempting: "Choice C is tempting to students who associate 'sophisticated'-sounding abstract language with higher quality writing, but VIVID, CONCRETE, engaging style is generally MORE effective at persuading and engaging most readers than vague abstraction.",
            commonMistake: "Assuming an argument's persuasive effectiveness depends ENTIRELY on its underlying logical claim/content, independent of HOW that claim is stylistically expressed — in reality, stylistic choices (imagery, syntax variety, word choice) meaningfully shape how effectively and memorably an argument actually reaches and persuades its audience.",
            apTip: "This unit's central lesson: STYLE and SUBSTANCE work together, not separately — the SAME underlying claim can land very differently with a reader depending on HOW it's stylistically expressed (vivid vs. abstract language, varied vs. monotonous syntax) — this is why the AP Lang exam evaluates not just WHAT you argue, but HOW effectively and stylistically you express that argument."
          }
        }
      ]
    },
    {
      id: 9,
      name: 'Unit 9: Developing a Complex Argument',
      questions: [
        {
          id: 'aplang-9-1', difficulty: 3, type: 'mcq', topic: 'Strategic Concession',
          prompt: "In developing a sophisticated, complex argument, strategically CONCEDING a specific point to an opposing view (before ultimately still defending one's own overall thesis) primarily serves to:",
          choices: ["Completely undermine and invalidate the writer's own argument entirely", "Demonstrate the writer's intellectual honesty and thorough understanding of the issue's genuine complexity, which can ultimately strengthen the argument's overall credibility", "Have no effect whatsoever on how the argument is perceived by readers", "Indicate that the writer secretly agrees entirely with the opposing position"],
          correct: 1,
          explanation: {
            correct: "Strategic concession — acknowledging a genuinely valid point in an opposing view, while still ultimately defending one's own overall thesis — demonstrates intellectual honesty and a thorough understanding of the issue's genuine complexity, which can ultimately STRENGTHEN (not weaken) the argument's overall credibility with skeptical or thoughtful readers, who respect a writer engaging genuinely rather than ignoring valid counterpoints.",
            wrong: { 0: "A STRATEGIC, well-managed concession (acknowledging one specific point while still defending the overall thesis) does NOT undermine the entire argument — rather, it can strengthen credibility, provided the writer subsequently explains why this concession doesn't overturn their overall position.", 2: "This kind of strategic move DOES have a real, significant effect on how an argument is perceived — specifically, it tends to build credibility (ethos) with readers who value intellectually honest engagement with complexity, rather than having no discernible effect.", 3: "Making a SPECIFIC, limited concession on ONE point doesn't mean the writer secretly agrees with the OPPOSING VIEW ENTIRELY — the writer can acknowledge one valid point while still clearly maintaining and defending their own distinct overall position." },
            tempting: "Choice A is tempting to less experienced writers who fear that ANY concession weakens their argument, but STRATEGIC, well-managed concession (followed by continued defense of the overall thesis) is actually a hallmark of sophisticated, more persuasive argumentative writing.",
            commonMistake: "Fearing that ANY acknowledgment of an opposing view's validity automatically weakens one's own argument, rather than recognizing that STRATEGIC concession (acknowledging a specific valid point while still defending the overall thesis) is actually a sophisticated technique that builds credibility with thoughtful readers.",
            apTip: "Sophisticated argumentative writing doesn't avoid complexity — it ENGAGES with it directly, including through strategic concession of specific valid points, while still clearly maintaining and defending an overall position. This demonstrates the kind of nuanced, intellectually honest thinking that the AP Lang exam's highest-scoring essays consistently reward."
          }
        },
        {
          id: 'aplang-9-2', difficulty: 4, type: 'mcq', topic: 'Qualifying a Complex Argument',
          prompt: "A writer's thesis states, \"While this policy will not solve every aspect of the problem, it represents a meaningful and necessary first step toward addressing it.\" Compared to a simpler thesis stating only \"This policy will solve the problem,\" this more qualified version demonstrates:",
          choices: ["A weaker, less confident argumentative position with no real advantages", "A more sophisticated, nuanced argumentative position that is likely more defensible and credible, since it doesn't overclaim the policy's effects beyond what can reasonably be supported", "Identical persuasive strength and sophistication to the simpler version, with no meaningful difference", "A complete failure to take any clear position on the issue"],
          correct: 1,
          explanation: {
            correct: "This more qualified thesis (\"will not solve every aspect... but represents a meaningful and necessary first step\") demonstrates a MORE sophisticated, nuanced position — by not overclaiming the policy's effects beyond what can reasonably be defended, this thesis is likely MORE credible and defensible than the simpler, absolute claim (\"will solve the problem\"), which could be easily challenged by a single counterexample or complication.",
            wrong: { 0: "This is NOT simply weaker — appropriately QUALIFIED claims are often MORE sophisticated and ultimately MORE persuasive/defensible than absolute, unqualified claims, since they more accurately reflect real-world complexity and are harder to disprove with a single counterexample.", 2: "These two thesis versions are NOT equivalent in sophistication — the qualified version demonstrates a MORE nuanced, defensible understanding of the issue's actual complexity, representing a meaningful difference in argumentative sophistication.", 3: "This thesis clearly DOES take a specific position (that the policy is a meaningful, necessary first step) — it's simply an appropriately QUALIFIED position rather than an absolute one; qualification is not the same as taking no position at all." },
            tempting: "Choice A is tempting to writers who mistakenly equate confidence with absolute, unqualified claims, but APPROPRIATE qualification (acknowledging real limitations while still defending a clear position) actually demonstrates GREATER sophistication and credibility, not weakness.",
            commonMistake: "Equating a more qualified, nuanced thesis with a 'weaker' or less confident argumentative position, rather than recognizing that APPROPRIATE qualification (acknowledging genuine limitations while still defending a clear position) actually demonstrates sophisticated understanding and produces a MORE defensible, credible argument overall.",
            apTip: "Developing a complex, sophisticated argument (the specific focus of this unit) often means moving BEYOND simple, absolute claims toward more nuanced, appropriately qualified positions that acknowledge real complexity while still clearly defending a specific stance — this sophistication is explicitly and highly rewarded in the AP Lang exam's argument essay scoring."
          }
        },
        {
          id: 'aplang-9-3', difficulty: 3, type: 'mcq', topic: 'Refutation',
          prompt: "\"Refutation,\" as a strategy for engaging with counterarguments, specifically involves:",
          choices: ["Ignoring all opposing viewpoints entirely without any acknowledgment", "Directly addressing an opposing argument and explaining, with reasoning and/or evidence, why that opposing argument is ultimately unpersuasive or flawed", "Automatically agreeing completely with every opposing viewpoint presented", "Attacking the character of anyone who holds an opposing viewpoint"],
          correct: 1,
          explanation: {
            correct: "Refutation specifically means directly addressing an opposing argument and explaining — using reasoning and/or evidence — why that argument is ultimately unpersuasive, flawed, or insufficient. Unlike concession (acknowledging validity), refutation specifically pushes back against the opposing view's actual merit.",
            wrong: { 0: "This describes IGNORING counterarguments entirely, which is the OPPOSITE of refutation — refutation specifically requires DIRECTLY ENGAGING WITH and responding to an opposing argument, not ignoring it.", 2: "This describes CONCESSION (or complete capitulation), not refutation — refutation specifically involves EXPLAINING WHY an opposing argument is NOT persuasive, not simply agreeing with it entirely.", 3: "Attacking a person's CHARACTER (rather than their actual argument) describes an AD HOMINEM fallacy, not legitimate refutation — genuine refutation addresses the SUBSTANCE of the opposing ARGUMENT itself, not the character of the person making it." },
            tempting: "Choice C is tempting because refutation involves genuinely ENGAGING with an opposing view, but engaging with a view in order to explain why it's flawed is quite different from simply agreeing with it.",
            commonMistake: "Confusing refutation (directly explaining why an opposing argument is flawed/unpersuasive, using reasoning and evidence) with either ignoring counterarguments entirely, agreeing with them completely (concession without pushback), or fallaciously attacking the opposing arguer's character instead of their actual argument.",
            apTip: "Refutation and concession are related but distinct strategies for engaging with counterarguments: CONCESSION acknowledges a valid point in the opposing view before still defending your overall thesis, while REFUTATION directly explains why a SPECIFIC opposing argument is flawed or insufficient — sophisticated arguments often use BOTH strategically for different specific counterarguments."
          }
        },
        {
          id: 'aplang-9-4', difficulty: 4, type: 'mcq', topic: 'Crafting a Nuanced Argument Through Style',
          prompt: "A writer developing a complex argument uses precise, carefully chosen word choice (avoiding both overly absolute and overly vague language) alongside a clear, logical organizational structure. This combination of careful diction and clear organization primarily helps the writer to:",
          choices: ["Make the argument intentionally confusing and difficult for readers to follow", "Convey a nuanced, complex position with precision and clarity, helping readers follow sophisticated reasoning without becoming lost or misinterpreting the writer's actual claims", "Avoid taking any clear position on the issue whatsoever", "Guarantee that literally every single reader will agree completely with the argument"],
          correct: 1,
          explanation: {
            correct: "Careful, precise diction (avoiding both overstatement and vagueness) combined with clear organizational structure helps a writer convey a genuinely NUANCED, complex position with PRECISION and CLARITY — this combination allows readers to follow sophisticated reasoning accurately, without becoming lost in ambiguity or misinterpreting the writer's actual, carefully qualified claims.",
            wrong: { 0: "This is the OPPOSITE of the actual effect — careful diction and CLEAR organization specifically work to make a complex argument MORE understandable and easier to follow, not more confusing.", 2: "Precise diction and clear structure specifically help convey a SPECIFIC, nuanced POSITION with clarity — this is different from avoiding a position altogether; the goal is PRECISION in expressing a genuine, well-defined stance, not vagueness or position-avoidance.", 3: "No stylistic or organizational choice can GUARANTEE universal agreement from every reader — even the clearest, most precisely argued position can reasonably be disagreed with by some readers; clarity improves the chances of being understood and persuasive, but doesn't guarantee universal agreement." },
            tempting: "None of the distractors describe realistic outcomes, but assuming clarity guarantees universal persuasion (choice D) overestimates what even excellent stylistic/organizational choices can accomplish on a genuinely debatable issue.",
            commonMistake: "Assuming that developing a COMPLEX, nuanced argument requires sacrificing CLARITY (using deliberately vague or convoluted language) — in reality, the most sophisticated arguments combine complexity/nuance WITH precise diction and clear organization, making sophisticated reasoning accessible and persuasive rather than needlessly obscure.",
            apTip: "The culminating skill of this course (and this final unit) is combining COMPLEXITY of thought with CLARITY of expression — sophisticated arguments aren't sophisticated because they're hard to follow; they're sophisticated because they handle genuine nuance and complexity while remaining precisely and clearly expressed, through careful diction, logical organization, and purposeful stylistic choices."
          }
        },
        {
          id: 'aplang-9-5', difficulty: 3, type: 'mcq', topic: 'Balancing Multiple Claims in a Complex Argument',
          prompt: "A sophisticated argumentative essay defends a central thesis while also acknowledging that the issue involves multiple, sometimes competing values (such as balancing individual freedom against collective safety). Successfully managing this complexity primarily requires the writer to:",
          choices: ["Pretend that no competing values or tensions exist within the issue at all", "Clearly explain how they are weighing or prioritizing the competing values/considerations, while still ultimately defending a clear, specific position", "Refuse to take any specific position, since the issue involves competing considerations", "Randomly switch their stated position multiple times throughout the essay with no clear resolution"],
          correct: 1,
          explanation: {
            correct: "Successfully managing genuine complexity requires the writer to clearly explain HOW they are weighing, prioritizing, or reconciling the competing values/considerations at play — while still ultimately defending a clear, specific overall position. This demonstrates sophisticated engagement with real complexity without abandoning the fundamental argumentative goal of taking and defending a position.",
            wrong: { 0: "Pretending competing values/tensions don't exist would actually make the argument LESS sophisticated and less credible with readers who recognize the issue's genuine complexity — acknowledging and engaging with real tensions is a mark of sophistication, not something to hide.", 2: "The presence of competing considerations doesn't mean a writer should avoid taking ANY position — sophisticated argumentative writing specifically involves acknowledging complexity WHILE STILL defending a clear, specific position, not abandoning the goal of argumentation altogether.", 3: "Randomly switching positions with no clear resolution would create a confusing, incoherent essay — sophisticated handling of complexity means clearly explaining how competing considerations are being weighed, while still arriving at and maintaining ONE clear, defended position, not oscillating without resolution." },
            tempting: "Choice C is tempting because acknowledging genuine complexity might seem to require avoiding a firm position, but the actual skill being tested is defending a CLEAR position WHILE ALSO genuinely engaging with that complexity, not avoiding a position because complexity exists.",
            commonMistake: "Assuming that acknowledging genuine complexity/competing values means a writer must avoid taking a firm, specific position — sophisticated argumentative writing does BOTH: it genuinely engages with real tensions/complexity AND still arrives at and clearly defends a specific overall position, explaining how the competing considerations were weighed.",
            apTip: "The most sophisticated arguments (rewarded at the highest levels on the AP Lang exam) don't shy away from acknowledging genuine complexity and competing values — but they still clearly defend ONE specific position, explaining explicitly HOW that position accounts for or weighs the competing considerations, rather than either ignoring the complexity or refusing to commit to a clear stance."
          }
        },
        {
          id: 'aplang-9-6', difficulty: 4, type: 'mcq', topic: "Synthesizing a Complex, Original Argument",
          prompt: "After reviewing multiple sources that offer differing perspectives on an issue, a writer develops an original argument that draws selectively on points from several sources, while also adding new reasoning and connections not explicitly present in any single source. This process best exemplifies:",
          choices: ["Plagiarism, since ideas from multiple sources are being used", "Sophisticated synthesis — using multiple sources as a foundation while contributing original analysis, connections, and reasoning to develop the writer's own distinct argument", "A complete absence of any original thought or contribution from the writer", "A simple, unanalyzed summary of each individual source in sequence"],
          correct: 1,
          explanation: {
            correct: "This process exemplifies sophisticated synthesis: the writer draws on and properly engages with multiple sources as a FOUNDATION, but also contributes genuinely ORIGINAL analysis, connections, and reasoning not explicitly present in any single source — this combination of informed engagement with existing sources AND original contribution is the hallmark of high-level synthesis writing.",
            wrong: { 0: "PROPERLY ATTRIBUTED use of source material, combined with the writer's OWN original analysis and connections, is legitimate synthesis, not plagiarism — plagiarism specifically involves presenting others' ideas/words as one's own WITHOUT proper attribution, which isn't what's described here.", 2: "This process specifically involves the writer ADDING NEW reasoning and connections NOT explicitly present in any single source — this represents genuine ORIGINAL contribution, not an absence of original thought.", 3: "This process goes well BEYOND simply summarizing each source separately in sequence — it involves actively DRAWING CONNECTIONS between sources and adding original reasoning to build a genuinely NEW, synthesized argument, which is a more sophisticated process than simple sequential summary." },
            tempting: "Choice D is tempting because synthesis DOES involve engaging with multiple sources, but TRUE synthesis requires actively connecting and building upon those sources with original analysis, not simply listing/summarizing them one after another without this additional analytical work.",
            commonMistake: "Confusing sophisticated synthesis (using multiple sources as a foundation while contributing genuinely original analysis, connections, and reasoning) with either simple sequential summary of sources (missing the original contribution) or improperly attributed plagiarism (missing proper engagement with and attribution of the source material) — true synthesis requires both informed source engagement AND original contribution.",
            apTip: "This is the culminating skill the AP Lang synthesis essay evaluates: using provided sources as a genuine FOUNDATION for your argument (properly engaging with and referencing them) while still contributing your OWN original reasoning, connections, and ultimately a distinct argumentative position that goes beyond simply restating or summarizing what any single source already said."
          }
        }
      ]
    }
  ],
  frqs: [
    {
      id: 'aplang-frq-1', difficulty: 3, unit: 1,
      prompt: "Read the following brief passage: \"Our city's aging water infrastructure has caused three major pipe failures this year alone, each costing residents days without reliable water access. It is time for the city council to approve emergency funding for infrastructure repair.\"\n\nIdentify the claim being made in this passage, and explain what type of evidence is used to support it.",
      rubricPoints: [
        "Correctly identifies the claim (the city council should approve emergency funding for infrastructure repair) (1 pt)",
        "Correctly identifies the type of evidence used (a specific factual/statistical example — three pipe failures this year) (1 pt)",
        "Explains how this evidence supports the claim (demonstrates a concrete, recurring problem justifying the proposed funding) (1 pt)"
      ],
      sampleResponse: "The claim in this passage is that the city council should approve emergency funding for water infrastructure repair. This claim is supported by factual/statistical evidence — specifically, the citation of three major pipe failures occurring within the current year, each causing residents to lose reliable water access for multiple days. This evidence supports the claim by demonstrating that the infrastructure problem is not hypothetical or minor but concrete, recurring, and directly affecting residents, thereby justifying the urgency of the proposed emergency funding."
    },
    {
      id: 'aplang-frq-2', difficulty: 3, unit: 2,
      prompt: "A writer is drafting two versions of an argument supporting a proposed city bike lane expansion: one for a neighborhood newsletter aimed at longtime local homeowners, and one for a city council policy brief aimed at elected officials.\n\nExplain ONE way the writer might adapt their evidence or appeals differently for each of these two distinct audiences, while maintaining the same underlying thesis.",
      rubricPoints: [
        "Identifies a plausible way the argument might be adapted for the homeowner audience (e.g., emphasizing neighborhood safety, property values, or quality of life) (1 pt)",
        "Identifies a plausible way the argument might be adapted for the policy brief/official audience (e.g., emphasizing traffic data, cost-benefit analysis, or comparative city statistics) (1 pt)",
        "Explains that the underlying thesis (supporting the bike lane expansion) remains consistent across both versions, even as supporting evidence/emphasis shifts (1 pt)"
      ],
      sampleResponse: "For the neighborhood newsletter aimed at longtime homeowners, the writer might emphasize appeals related to neighborhood safety (such as reduced vehicle speeds near bike lanes) and quality-of-life benefits (such as more pleasant, walkable streets), since these homeowners likely care most about their immediate daily environment. For the city council policy brief aimed at elected officials, the writer might instead emphasize data-driven evidence, such as traffic accident statistics, cost-benefit projections, or comparative data from other cities that have implemented similar bike lane expansions, since officials typically respond to quantifiable, policy-relevant evidence when making funding decisions. In both cases, the underlying thesis — that the city should expand its bike lanes — remains the same; only the specific evidence and appeals emphasized shift to match each audience's distinct values and concerns."
    },
    {
      id: 'aplang-frq-3', difficulty: 4, unit: 3,
      prompt: "Two sources discuss the same policy issue (a proposed four-day work week). Source A argues the policy would increase worker productivity and satisfaction. Source B argues the policy would create scheduling difficulties for customer-facing businesses.\n\nExplain how a writer might synthesize these two sources into a single, original argument that acknowledges both perspectives while still reaching a clear position.",
      rubricPoints: [
        "Acknowledges the validity of both sources' perspectives (productivity/satisfaction benefits, and scheduling challenges) (1 pt)",
        "Proposes a plausible synthesized position that accounts for both perspectives (e.g., a qualified or conditional endorsement, such as supporting the policy for non-customer-facing roles) (1 pt)",
        "Explains how this represents genuine synthesis (connecting and building on both sources) rather than simply picking one side (1 pt)"
      ],
      sampleResponse: "A writer synthesizing these two sources might acknowledge that both perspectives raise legitimate points: Source A's evidence about increased productivity and satisfaction suggests genuine benefits to a four-day work week, while Source B's concern about scheduling difficulties for customer-facing businesses identifies a real, practical challenge. Rather than simply endorsing one source's view over the other, a sophisticated synthesized argument might propose a qualified position — for example, arguing that the four-day work week should be implemented for roles that don't require constant customer availability (such as many office and administrative positions), while customer-facing businesses might need alternative scheduling models (such as staggered four-day shifts across a team) to capture the productivity benefits without sacrificing customer service coverage. This represents genuine synthesis because it doesn't simply pick one source's conclusion over the other, but instead builds an original, more nuanced position that directly accounts for and reconciles the legitimate concerns raised by both sources."
    },
    {
      id: 'aplang-frq-4', difficulty: 3, unit: 4,
      prompt: "Explain the difference between a thesis statement and a line of reasoning in an argumentative essay, using an example of each for an essay arguing that a school should extend its library hours.",
      rubricPoints: [
        "Correctly explains that a thesis is the specific, debatable central claim of the essay (1 pt)",
        "Correctly explains that a line of reasoning is the logical sequence/structure of supporting claims that build toward and defend the thesis (1 pt)",
        "Provides a plausible example of each for the given topic (1 pt)"
      ],
      sampleResponse: "A thesis statement is the essay's specific, debatable central claim — for this topic, an example thesis might be: \"The school should extend its library hours to include evenings, since this would significantly benefit students' academic performance and access to resources.\" A line of reasoning, by contrast, is the logical sequence of supporting claims and evidence that build toward and defend this thesis across the essay's body paragraphs. For this topic, an example line of reasoning might proceed as follows: first establishing that many students lack quiet study space at home (supporting claim 1), then showing that extended library hours would directly address this gap (supporting claim 2), and finally addressing and refuting the counterargument that extended hours would be too costly by citing cost-effective staffing solutions (supporting claim 3) — together, this logical sequence of claims builds a cohesive case for the thesis, rather than presenting isolated, unconnected points."
    },
    {
      id: 'aplang-frq-5', difficulty: 3, unit: 5,
      prompt: "Read the following sentence from a student's argumentative essay draft: \"The new recycling program is good and will help a lot.\"\n\nRevise this sentence to include more specific commentary connecting the claim to a plausible piece of evidence, and explain what your revision improves.",
      rubricPoints: [
        "Provides a revised sentence that includes specific evidence (e.g., a plausible statistic or mechanism) (1 pt)",
        "Provides commentary explicitly connecting that evidence to the original claim (1 pt)",
        "Explains what the revision improves (specificity, credibility, clearer logical connection) (1 pt)"
      ],
      sampleResponse: "Revised sentence: \"The new recycling program is likely to meaningfully reduce landfill waste, since similar programs in comparable cities have reported waste reductions of up to 30% within their first two years.\" This revision improves the original sentence in several ways: it replaces the vague, unsupported claim (\"is good and will help a lot\") with a specific, plausible piece of evidence (a comparative statistic from similar programs), and it adds commentary explicitly connecting that evidence to the claim by explaining what the cited reduction suggests about this program's likely impact. This makes the argument more precise, credible, and persuasive, since readers can see a concrete, evidence-based reason to believe the claim, rather than simply being told the program is \"good\" without any supporting justification."
    },
    {
      id: 'aplang-frq-6', difficulty: 3, unit: 6,
      prompt: "A writer wants to persuade a skeptical audience to support a controversial new policy. Explain ONE strategy the writer could use to establish common ground with this skeptical audience before presenting their main argument, and explain why this strategy might be effective.",
      rubricPoints: [
        "Identifies a plausible common-ground strategy (e.g., acknowledging a shared value or concern both the writer and audience likely hold) (1 pt)",
        "Explains why this strategy might be effective with a skeptical audience (e.g., builds trust/receptiveness before introducing more contested claims) (1 pt)"
      ],
      sampleResponse: "The writer could begin by acknowledging a value that both the writer and the skeptical audience likely share — for example, a shared concern for the community's long-term financial stability — before introducing the specific, more contested policy proposal. This strategy is likely to be effective because it establishes initial trust and receptiveness with a skeptical audience: by first showing that the writer shares the audience's underlying values and concerns, the audience becomes more willing to genuinely consider the writer's subsequent, more specific and potentially contested argument, rather than dismissing it immediately due to an assumed fundamental disagreement in values."
    },
    {
      id: 'aplang-frq-7', difficulty: 4, unit: 7,
      prompt: "A writer argues: \"Every successful entrepreneur I've read about dropped out of college, so clearly a college degree is unnecessary for business success.\"\n\nIdentify the logical fallacy in this argument, and explain why it undermines the argument's persuasive strength.",
      rubricPoints: [
        "Correctly identifies the fallacy (hasty generalization, drawing a broad conclusion from an unrepresentative/small sample) (1 pt)",
        "Explains why this undermines persuasive strength (the sample of entrepreneurs \"read about\" is not representative of all entrepreneurs, especially since unsuccessful dropouts and successful degree-holders aren't accounted for) (1 pt)"
      ],
      sampleResponse: "This argument commits the fallacy of hasty generalization. The writer draws a sweeping conclusion — that a college degree is unnecessary for business success in general — based on a small, likely unrepresentative sample (entrepreneurs the writer happened to read about, who are probably disproportionately famous, unusually successful outliers). This undermines the argument's persuasive strength because it ignores the much larger number of successful entrepreneurs who DID complete college degrees, as well as the (likely far more numerous) college dropouts who did NOT achieve business success — the small, cherry-picked sample the writer relies on cannot logically support such a broad, general conclusion about college degrees and business success overall."
    },
    {
      id: 'aplang-frq-8', difficulty: 3, unit: 8,
      prompt: "Explain how a writer's use of short, direct sentences in a concluding paragraph (in contrast to longer, more complex sentences used earlier in the essay) might affect a reader, and why a writer might make this stylistic choice deliberately.",
      rubricPoints: [
        "Explains the likely effect on the reader (creates emphasis, urgency, or a sense of conviction through contrast) (1 pt)",
        "Explains why a writer might choose this deliberately (to leave a strong, memorable final impression, especially after building an argument through more complex analysis) (1 pt)"
      ],
      sampleResponse: "A shift to short, direct sentences in a concluding paragraph, especially following longer, more complex sentences earlier in the essay, tends to create a strong sense of emphasis, urgency, or conviction through contrast — the abrupt change in rhythm draws the reader's attention and can make the concluding points feel more forceful and memorable. A writer might choose this deliberately because a conclusion is often the last thing a reader remembers from an essay; using short, punchy sentences at this key moment can leave a stronger, more resonant final impression than continuing with the same longer, more measured sentence structures used to build the analytical argument throughout the body paragraphs."
    },
    {
      id: 'aplang-frq-9', difficulty: 4, unit: 9,
      prompt: "\"A sophisticated argumentative essay should acknowledge the complexity of an issue rather than presenting an oversimplified, one-sided position.\"\n\nExplain what specific techniques a writer could use to acknowledge genuine complexity while still defending a clear, specific thesis.",
      rubricPoints: [
        "Identifies at least one specific technique (e.g., concession of a valid opposing point, qualifying language, addressing competing values) (1 pt)",
        "Explains how this technique allows the writer to acknowledge complexity while still defending a clear position (1 pt)",
        "Notes that the goal is genuine engagement with complexity, not abandoning a clear position (1 pt)"
      ],
      sampleResponse: "A writer could use strategic concession — acknowledging a specific valid point in an opposing view — before explaining why this concession doesn't ultimately overturn their overall thesis. For example, a writer arguing for a new policy might concede that the policy involves real upfront costs, before explaining why the long-term benefits still justify moving forward. A writer could also use qualifying language (such as \"in most cases\" or \"while this alone won't solve every aspect of the problem\") rather than absolute claims, which more accurately reflects real-world complexity while still clearly defending a specific position. Both techniques allow the writer to genuinely engage with an issue's real complexity and competing considerations — demonstrating intellectual honesty and building credibility with skeptical readers — without abandoning the fundamental goal of taking and defending a clear, specific argumentative position throughout the essay."
    }
  ]
}
