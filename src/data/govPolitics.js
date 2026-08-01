// AP US Government & Politics — real College Board unit numbers/names used
// for authenticity. Started with 2 units; more to be added in follow-up passes.

export const govPolitics = {
  id: 'gov',
  name: 'AP US Government & Politics',
  icon: '⚖️',
  accent: 'ember',
  units: [
    {
      id: 1,
      name: 'Unit 1: Foundations of American Democracy',
      questions: [
        {
          id: 'gov-1-1', difficulty: 1, type: 'mcq', topic: 'Separation of Powers',
          prompt: "The division of the federal government into legislative, executive, and judicial branches, each with distinct powers, is known as:",
          choices: ['Federalism', 'Separation of powers', 'Popular sovereignty', 'Judicial review'],
          correct: 1,
          explanation: {
            correct: "Separation of powers refers specifically to dividing government authority among distinct branches (legislative, executive, judicial), each with its own defined responsibilities, designed to prevent any single branch from accumulating excessive power.",
            wrong: { 0: "Federalism refers to the division of power between the NATIONAL government and STATE governments, a different kind of power division than the branches WITHIN the national government.", 2: "Popular sovereignty refers to the principle that governmental authority ultimately derives from the consent and will of the people, not to the specific structural division of government into branches.", 3: "Judicial review refers specifically to the courts' power to determine whether laws or government actions are constitutional, a specific POWER held by the judicial branch, not the overall structural concept of dividing power among branches." },
            tempting: "Choice A is tempting because both federalism and separation of powers involve 'dividing' government power, but federalism divides power between NATIONAL and STATE governments, while separation of powers divides power among branches WITHIN the national government.",
            commonMistake: "Confusing federalism (national vs. state power division) with separation of powers (division among branches of the national government) — both are foundational concepts often taught together and easily conflated.",
            apTip: "Keep these two foundational concepts clearly separate: federalism = power divided BETWEEN national and state governments (vertical division); separation of powers = power divided AMONG the three branches of the national government (horizontal division) — both are reinforced by checks and balances."
          }
        },
        {
          id: 'gov-1-2', difficulty: 1, type: 'mcq', topic: 'Checks and Balances',
          prompt: "The president's power to veto legislation passed by Congress is an example of:",
          choices: ['Federalism', 'Checks and balances, allowing one branch to limit the power of another', 'Judicial review', 'Popular sovereignty'],
          correct: 1,
          explanation: {
            correct: "Checks and balances refers to the system where each branch of government has some power to check (limit or influence) the actions of the other branches; the presidential veto is a classic example, allowing the executive branch to check the legislative branch's lawmaking power.",
            wrong: { 0: "Federalism concerns the division of power between national and state governments, not the interaction between different branches of the national government itself.", 2: "Judicial review is specifically the power of COURTS to strike down laws or actions as unconstitutional, a different specific check than the presidential veto (an executive branch power over legislation).", 3: "Popular sovereignty refers to the general principle that government authority comes from the people, not to a specific structural mechanism like the veto power." },
            tempting: "Choice C is tempting because both veto power and judicial review are specific named 'checks,' but they belong to different branches (executive veto vs. judicial review) and operate through different mechanisms.",
            commonMistake: "Not distinguishing between the SPECIFIC named checks that different branches hold (e.g., presidential veto, congressional override, judicial review, Senate confirmation) rather than treating 'checks and balances' as one single undifferentiated concept.",
            apTip: "Build a specific reference table of checks each branch holds over the others: Congress can override a veto (2/3 vote) or impeach; the President can veto legislation or nominate judges; the Judiciary can exercise judicial review — knowing SPECIFIC examples like these is more useful than the general concept alone."
          }
        },
        {
          id: 'gov-1-3', difficulty: 2, type: 'mcq', topic: 'The Federalist Papers',
          prompt: "In Federalist No. 10, James Madison argues that a large, extended republic (rather than a small direct democracy) is better suited to controlling the dangers of:",
          choices: ['Foreign invasion', 'Factions, since a large republic with diverse interests makes it harder for any single faction to gain a dominant, tyrannical majority', 'Economic recession', 'Judicial overreach'],
          correct: 1,
          explanation: {
            correct: "In Federalist No. 10, Madison argues that a large, extended republic with numerous diverse interests and factions makes it structurally more difficult for any single faction to form a dominant majority capable of oppressing minority rights, compared to a small direct democracy where a single faction could more easily dominate.",
            wrong: { 0: "Federalist No. 10 is specifically focused on the internal political problem of factions and majority tyranny, not on external threats like foreign invasion.", 2: "This essay addresses political/structural concerns about factions and republican government design, not economic policy or recession prevention specifically.", 3: "Judicial overreach as a specific concern is not the focus of Federalist No. 10; Madison's argument here centers on legislative/factional dynamics within a republic's size and structure." },
            tempting: "None of the distractors closely match Federalist No. 10's actual, specific argument if the essay's content is known precisely, but general assumptions about 'what the Federalist Papers were about' without specific knowledge of this particular essay's argument could lead to a plausible-sounding but incorrect guess.",
            commonMistake: "Not having the SPECIFIC argument of Federalist No. 10 (large republics control factions better than small ones) memorized precisely, leading to vague or incorrect guesses about its content.",
            apTip: "Federalist No. 10 (factions/large republic) and Federalist No. 51 (checks and balances, 'ambition must be made to counteract ambition') are the two most frequently tested Federalist Papers on the AP Gov exam — know each one's SPECIFIC core argument precisely, not just that they're 'about the Constitution' generally."
          }
        },
        {
          id: 'gov-1-4', difficulty: 3, type: 'mcq', topic: 'Types of Federalism',
          prompt: "A federal grant program that gives states money for education but requires states to meet specific federal standards and reporting requirements to receive the funds is an example of:",
          choices: ['Dual federalism, in which national and state governments operate in entirely separate spheres', 'Categorical grants with conditions attached, reflecting a more cooperative (and somewhat coercive) form of federalism in which the federal government uses funding to influence state policy', 'A complete transfer of that policy area entirely to state control with no federal involvement', 'An unconstitutional violation of states\' rights, according to modern constitutional interpretation'],
          correct: 1,
          explanation: {
            correct: "This describes a categorical grant with strings attached — a specific type of federal funding tool where the national government provides money for a defined purpose but requires states to comply with certain conditions/standards to receive it, reflecting a cooperative (and sometimes described as coercive, given states' financial dependence) style of federalism where federal funding is used as leverage to influence state policy choices.",
            wrong: { 0: "Dual federalism (sometimes called 'layer cake federalism') describes an OLDER historical model where national and state governments operated in largely separate, non-overlapping spheres; the described scenario, with federal funding conditions influencing state education policy, reflects a more modern, intertwined ('marble cake') model of federalism, not dual federalism.", 2: "This scenario specifically involves federal funding WITH conditions attached, meaning the federal government retains significant influence, not a complete, unconditional transfer of the policy area to states.", 3: "Conditional federal grants of this type have generally been upheld as constitutional by the Supreme Court (with certain limits, such as the grants not being unduly coercive), and are a common, well-established federalism tool, not a categorically unconstitutional practice." },
            tempting: "Choice A is tempting because 'federalism' involving national and state governments can loosely evoke images of separate spheres, but the SPECIFIC scenario described (conditional funding influencing state policy) is a hallmark of modern cooperative federalism, which is essentially the opposite of the strict separation implied by dual federalism.",
            commonMistake: "Confusing older dual federalism ('layer cake,' separate spheres) with modern cooperative federalism ('marble cake,' intertwined national-state relationships, often through conditional funding) — these represent different historical eras and models of federal-state relationships.",
            apTip: "Know the specific terminology: categorical grants (funding for a specific purpose, often with significant conditions) vs. block grants (funding for a broader purpose with more state flexibility) — and connect conditional categorical grants specifically to the modern 'cooperative federalism' model, a frequently tested distinction."
          }
        },
        {
          id: 'gov-1-5', difficulty: 4, type: 'mcq', topic: 'McCulloch v. Maryland',
          prompt: "The Supreme Court\'s decision in McCulloch v. Maryland (1819) is significant primarily because it established that:",
          choices: ['States have the power to tax federal institutions operating within their borders', 'Congress has implied powers beyond those explicitly listed in the Constitution (via the Necessary and Proper Clause), and federal law takes precedence over conflicting state law (the Supremacy Clause)', 'The federal government has no power to charter a national bank', 'State governments are completely immune from federal court oversight'],
          correct: 1,
          explanation: {
            correct: "McCulloch v. Maryland established two significant constitutional principles: first, that Congress possesses implied powers beyond those explicitly enumerated, justified through the Necessary and Proper Clause (upholding Congress's power to charter a national bank, even though this power isn't explicitly listed in the Constitution); second, that federal law is supreme over conflicting state law (the Supremacy Clause), meaning Maryland could not tax the federally-chartered bank.",
            wrong: { 0: "The Court specifically ruled AGAINST Maryland's attempt to tax the federal bank, establishing that states CANNOT tax federal institutions in a way that interferes with legitimate federal operations — the opposite of what this choice claims.", 2: "The Court's ruling specifically UPHELD Congress's power to charter a national bank (via implied powers under the Necessary and Proper Clause), not denied it.", 3: "This case did not establish complete state immunity from federal oversight; if anything, it reinforced federal supremacy over conflicting state actions in this specific context." },
            tempting: "Choice A is tempting because the case specifically involves a state TAX dispute, but the Court's actual ruling went against Maryland's power to tax in this context, establishing federal supremacy rather than affirming state taxing power over federal institutions.",
            commonMistake: "Reversing the actual outcome/holding of McCulloch v. Maryland — remember the Court ruled FOR federal power (implied powers AND supremacy over conflicting state law), against Maryland's state taxing power in this specific context.",
            apTip: "McCulloch v. Maryland is one of the required Supreme Court cases on the AP Gov exam — memorize its TWO key holdings specifically: (1) implied powers exist via the Necessary and Proper Clause ('elastic clause'), and (2) federal law is supreme over conflicting state law (Supremacy Clause) — both halves are commonly tested together."
          }
        },
        {
          id: 'gov-1-6', difficulty: 5, type: 'mcq', topic: 'Constitutional Interpretation & the Elastic Clause',
          prompt: "A member of Congress argues that a proposed federal law regulating a new area of technology is constitutional under the Necessary and Proper Clause, even though the Constitution doesn\'t explicitly mention this specific technology. A critic argues this represents an overly broad, potentially limitless expansion of federal power. This debate best illustrates an ongoing tension between:",
          choices: ['Federalism and separation of powers, which are considered contradictory concepts', 'Loose (broad) constitutional construction (allowing Congress significant flexibility to address new circumstances via implied powers) and strict (narrow) constitutional construction (limiting Congress to more literally enumerated powers)', 'Judicial review and popular sovereignty, which cannot coexist', 'State sovereignty and the Bill of Rights, which serve identical constitutional functions'],
          correct: 1,
          explanation: {
            correct: "This scenario reflects the long-standing constitutional debate between LOOSE construction (a broad interpretation of the Necessary and Proper Clause and implied powers, allowing Congress flexibility to adapt to new circumstances not explicitly foreseen by the Constitution's text) and STRICT construction (a narrower interpretation limiting Congress primarily to its explicitly enumerated powers, expressing concern about unchecked expansion of federal authority) — a debate dating back to the Hamilton-Jefferson disagreements of the early Republic and continuing in various forms today.",
            wrong: { 0: "Federalism and separation of powers are related but distinct organizing structural principles of American government; they are not considered fundamentally 'contradictory' concepts, and this framing doesn't capture the actual constitutional interpretation debate illustrated in the scenario.", 2: "Judicial review and popular sovereignty are not mutually exclusive or inherently in conflict as general constitutional concepts; this framing doesn't accurately describe the loose vs. strict construction debate about the scope of Congress's implied powers illustrated here.", 3: "State sovereignty and the Bill of Rights serve different, not identical, constitutional functions (one concerns state-federal power division, the other concerns protections for individual rights), and this framing doesn't capture the actual debate about the SCOPE of federal legislative power illustrated in this scenario." },
            tempting: "None of the distractors accurately capture the specific, well-established loose vs. strict construction debate if this constitutional interpretation framework is known specifically, but vague pattern-matching to 'some kind of constitutional tension' without the specific correct terminology could lead to grabbing a plausible-sounding but incorrect pairing of concepts.",
            commonMistake: "Not having the specific terminology of 'loose construction' vs. 'strict construction' (regarding interpretation of the Necessary and Proper/elastic clause) available to correctly name this recurring, historically rooted constitutional debate.",
            apTip: "College-level insight: connect this modern-sounding debate explicitly back to its historical roots in the Hamilton (loose construction, supporting the national bank) vs. Jefferson (strict construction, opposing the national bank) disagreement from the early Republic — showing this historical throughline on an FRQ demonstrates the kind of cross-unit synthesis that distinguishes a sophisticated response."
          }
        }
      ]
    },
    {
      id: 2,
      name: 'Unit 2: Congress & the Presidency',
      questions: [
        {
          id: 'gov-2-1', difficulty: 1, type: 'mcq', topic: 'Structure of Congress',
          prompt: "How many voting members serve in the United States Senate?",
          choices: ['435', '100', '50', '535'],
          correct: 1,
          explanation: {
            correct: "The Senate has 100 voting members — 2 senators from each of the 50 states, reflecting the Constitution's design giving each state equal representation in the Senate regardless of population.",
            wrong: { 0: "435 is the number of voting members in the House of Representatives, apportioned by state population, not the Senate.", 2: "50 would be only 1 senator per state, but each state is constitutionally guaranteed exactly 2 senators, making the correct total 100, not 50.", 3: "535 is the combined total of the House (435) and Senate (100) together, not the Senate's number alone." },
            tempting: "Choice A is a common mix-up between the House (435, population-based) and Senate (100, equal per state) member counts.",
            commonMistake: "Confusing the House of Representatives' member count (435, population-apportioned) with the Senate's member count (100, exactly 2 per state regardless of population).",
            apTip: "Memorize both numbers together with their basis: House = 435 members, apportioned by STATE POPULATION; Senate = 100 members, exactly 2 per state (EQUAL representation) — this contrast in representation basis is a core, frequently tested feature of Congress's bicameral structure."
          }
        },
        {
          id: 'gov-2-2', difficulty: 2, type: 'mcq', topic: 'Congressional Committees',
          prompt: "Most of the detailed work of drafting, reviewing, and amending proposed legislation in Congress takes place primarily in:",
          choices: ['A full vote of the entire House and Senate immediately after a bill is introduced', 'Congressional committees, which specialize in specific policy areas and review bills before they reach the full chamber', 'The President\'s cabinet', 'The Supreme Court'],
          correct: 1,
          explanation: {
            correct: "Congressional committees (and often subcommittees), organized around specific policy areas (like Armed Services, Judiciary, or Ways and Means), do the detailed work of reviewing, holding hearings on, and amending proposed legislation before it can proceed to a vote by the full chamber — this committee system is central to how Congress actually processes the large volume of bills introduced each session.",
            wrong: { 0: "Bills are NOT immediately voted on by the full chamber right after introduction; they are typically referred to a relevant committee first for detailed review, a crucial and often lengthy step in the legislative process.", 2: "The President's cabinet is part of the EXECUTIVE branch and doesn't have a formal role in the internal legislative process of drafting and amending bills within Congress.", 3: "The Supreme Court is part of the JUDICIAL branch and doesn't participate in the legislative drafting process; its role (judicial review) comes later, if a law's constitutionality is challenged after being passed." },
            tempting: "None of the distractors accurately describe the committee system's central role if the legislative process is understood specifically, but not knowing the specific STEP-BY-STEP process (introduction → committee referral → committee work → floor vote) could lead to skipping over the committee stage's importance.",
            commonMistake: "Not recognizing the committee system as the crucial, detailed-work stage of the legislative process, and instead assuming legislation moves directly from introduction to a full floor vote.",
            apTip: "Memorize the basic 'how a bill becomes a law' sequence explicitly: introduction → committee referral (this is where most substantive work, hearings, and amendments happen) → floor debate/vote → other chamber repeats the process → conference committee (if versions differ) → presidential signature or veto — committees are a frequently tested, crucial middle step."
          }
        },
        {
          id: 'gov-2-3', difficulty: 2, type: 'mcq', topic: 'Presidential Powers',
          prompt: "Which of the following is an example of a formal (constitutionally enumerated) power of the President?",
          choices: ['Using the \'bully pulpit\' to shape public opinion through speeches', 'The power to nominate federal judges and Supreme Court justices, subject to Senate confirmation', 'Issuing executive orders that go far beyond any statutory or constitutional authority', 'Informal negotiation influence over legislation not requiring any constitutional basis'],
          correct: 1,
          explanation: {
            correct: "The power to nominate federal judges (including Supreme Court justices) is an explicitly enumerated, FORMAL constitutional power granted to the President in Article II, subject to Senate confirmation ('advice and consent') as a specific constitutional check.",
            wrong: { 0: "Using the 'bully pulpit' (using the presidency's visibility to influence public opinion) is an INFORMAL power — not explicitly granted by the Constitution's text, but rather a power that has developed through the practical influence and visibility of the office.", 2: "Legitimate executive orders must be grounded in some existing statutory or constitutional authority; the scenario described (going 'far beyond' any authority) would represent a potentially unconstitutional overreach, not a legitimate formal power.", 3: "Informal negotiation influence, while a real and important presidential tool, is by definition an INFORMAL power (based on political skill, relationships, and persuasion) rather than a formal, explicitly enumerated constitutional power." },
            tempting: "Choice A is tempting because it's a very real and commonly discussed presidential tool, but it specifically illustrates an INFORMAL power (not explicitly listed in the Constitution), which is the opposite of what the question asks for.",
            commonMistake: "Confusing formal powers (explicitly enumerated in the Constitution, like appointment power, veto power, commander-in-chief) with informal powers (developed through practice and political skill, like the bully pulpit, executive agreements' informal negotiating influence, or public appeals) — both categories are important but are frequently tested as a specific distinction.",
            apTip: "Build two separate lists explicitly: FORMAL presidential powers (veto, appointment/nomination with Senate confirmation, commander-in-chief, treaty-making with Senate ratification, pardon power) vs. INFORMAL presidential powers (bully pulpit, executive orders' practical influence, going public, legislative skill/negotiation) — questions frequently ask you to correctly classify a specific example into one of these two categories."
          }
        },
        {
          id: 'gov-2-4', difficulty: 3, type: 'mcq', topic: 'Divided Government & Gridlock',
          prompt: "When one political party controls the presidency while the opposing party controls one or both chambers of Congress, this situation is known as divided government, and it often results in:",
          choices: ['Immediate, unanimous agreement on all major legislation', 'Increased legislative gridlock, as differing party priorities and incentives can make it harder to pass major legislation, though divided government doesn\'t make lawmaking entirely impossible', 'The automatic dissolution of Congress', 'A constitutional requirement for new elections'],
          correct: 1,
          explanation: {
            correct: "Divided government often (though not always, and to varying degrees) leads to increased legislative gridlock, since the President and congressional majority may have significantly different policy priorities and political incentives, making compromise more difficult on major or contentious legislation, though some bipartisan legislation can and does still pass even under divided government.",
            wrong: { 0: "Divided government tends to make agreement HARDER, not immediate or unanimous, given the differing party priorities and political incentives at play — this is essentially the opposite of the typical dynamic.", 2: "There is no constitutional mechanism by which divided government causes Congress to dissolve; Congress continues to function and operate under its regular constitutional term structure regardless of which party controls which branch.", 3: "Divided government does not trigger any constitutional requirement for new elections; elections occur on their regular constitutionally/statutorily scheduled cycle (House every 2 years, Senate staggered 6-year terms, President every 4 years) regardless of which party controls what." },
            tempting: "None of the distractors accurately describe divided government's real effects if the concept is understood specifically, but vague assumptions that political conflict must trigger some kind of dramatic structural consequence (dissolution, forced elections) reflect a misunderstanding of how the American constitutional system actually handles political disagreement.",
            commonMistake: "Assuming political conflict/disagreement under divided government triggers some dramatic structural or constitutional consequence, rather than understanding that the US system is specifically designed to continue functioning (even if less efficiently, with more gridlock) despite significant political disagreement between branches.",
            apTip: "Connect divided government explicitly to the broader theme of checks and balances and separation of powers — the Founders' design intentionally makes rapid, unchecked legislative action difficult even under united government, and this effect is generally amplified under divided government, which is a feature (deliberate friction) as much as it may be seen as a frustration."
          }
        },
        {
          id: 'gov-2-5', difficulty: 4, type: 'mcq', topic: 'The Filibuster',
          prompt: "The Senate filibuster, a procedural tactic used to delay or block a vote on legislation, primarily functions by:",
          choices: ['Requiring a simple majority vote to end debate on any topic', 'Allowing a senator (or group of senators) to extend debate indefinitely, generally requiring a 60-vote supermajority (cloture) to end debate and force a vote on most legislation', 'Being a power exclusively available to the Speaker of the House', 'Automatically expiring after exactly 24 hours in all cases'],
          correct: 1,
          explanation: {
            correct: "The filibuster allows senators to extend debate on a bill, effectively delaying or blocking a vote; ending this extended debate generally requires invoking 'cloture,' which typically requires a 60-vote supermajority in the 100-member Senate (rather than a simple majority), giving a large minority significant power to block legislation unless enough senators from both parties agree to end debate.",
            wrong: { 0: "This directly contradicts how the filibuster/cloture process actually works — ending filibuster-extended debate typically requires a 60-vote SUPERMAJORITY (not a simple majority) under standard Senate rules for most legislation.", 2: "The filibuster is specifically a SENATE procedural tool; the Speaker of the House is a House of Representatives leadership position, and the House does not have an equivalent unlimited-debate filibuster rule (House debate time is generally more strictly limited by rule).", 3: "There is no fixed, automatic 24-hour expiration for a filibuster; debate can be extended for much longer unless cloture is successfully invoked (with the specific supermajority threshold) to end it." },
            tempting: "Choice C is tempting for students who don't clearly distinguish House and Senate procedural rules, since both chambers have distinct leadership structures and rules that are easy to conflate.",
            commonMistake: "Confusing House and Senate procedural rules and leadership structures (the filibuster is specifically a SENATE tool, tied to the Senate's tradition of extended/unlimited debate, unlike the House's more time-limited debate rules) or not knowing the specific 60-vote cloture threshold.",
            apTip: "Memorize the specific numbers: filibuster/cloture typically requires 60 votes (a supermajority, not just 51) to end debate on most legislation in the Senate — and connect this to the broader theme of how Senate rules can empower a significant minority to block majority-supported legislation, a frequently tested feature of Congress's structure and function."
          }
        },
        {
          id: 'gov-2-6', difficulty: 5, type: 'mcq', topic: 'Executive Power & Signing Statements',
          prompt: "A president signs a bill into law but issues a signing statement expressing the belief that certain provisions of the law are unconstitutional and indicating an intent not to enforce those specific provisions. Which best describes the constitutional tension this practice illustrates?",
          choices: ['This practice is explicitly and specifically authorized by a clear constitutional provision, with no controversy or ambiguity', 'This practice raises separation of powers concerns, since it can be seen as the executive branch unilaterally reinterpreting or declining to enforce a law passed by the legislative branch, potentially encroaching on Congress\'s lawmaking authority and the judiciary\'s role in constitutional interpretation', 'Signing statements have the same formal legal authority as a Supreme Court ruling', 'This practice is universally considered unconstitutional and has been struck down by the Supreme Court in every instance'],
          correct: 1,
          explanation: {
            correct: "Presidential signing statements, especially when they indicate an intent not to enforce specific provisions of a duly passed law, raise genuine separation of powers concerns and ongoing constitutional debate — critics argue this practice allows the executive to unilaterally reinterpret or effectively nullify parts of a law without going through the constitutionally established processes of veto (subject to override) or judicial review, potentially blurring the line between the executive's duty to 'faithfully execute the laws' and an inappropriate expansion of unilateral executive authority into both legislative and judicial functions.",
            wrong: { 0: "The Constitution does not explicitly and specifically authorize (or even directly mention) signing statements; this is a practice that has developed and evolved over time, and its scope and legitimacy remain genuinely debated rather than clearly and uncontroversially established.", 2: "Signing statements do not carry the same formal legal authority as a Supreme Court ruling; they represent the President's stated interpretation or intent, but don't have the same binding constitutional/legal weight as an actual judicial determination of constitutionality.", 3: "Signing statements have not been universally struck down by the Supreme Court in every instance; this is an evolving, contested area of executive power without a single, uniform judicial resolution settling the issue definitively in all cases." },
            tempting: "Choice A can tempt students who assume any commonly used presidential practice must have clear, explicit constitutional grounding, when in reality many aspects of modern executive power (including signing statements) have developed through practice and remain areas of genuine, ongoing constitutional debate rather than settled, uncontroversial authority.",
            commonMistake: "Assuming that because a presidential practice is common or long-standing, it must therefore be clearly, explicitly, and uncontroversially authorized by the Constitution, rather than recognizing that many real executive powers have evolved through practice and remain genuinely contested.",
            apTip: "College-level insight: signing statements are a great example for FRQs discussing the broader, ongoing tension between the three branches over interpreting and enforcing law — connecting this specific practice to the general theme of executive power's expansion and the resulting separation-of-powers friction demonstrates the kind of nuanced, evidence-based analysis expected in high-scoring AP Gov argumentative essays."
          }
        }
      ]
    },
    {
      id: 3,
      name: 'Unit 3: Civil Liberties & Civil Rights',
      questions: [
        {
          id: 'gov-3-1', difficulty: 1, type: 'mcq', topic: 'Civil Liberties vs. Civil Rights',
          prompt: "Which best distinguishes civil liberties from civil rights?",
          choices: ['They are simply two different names for the exact same concept', 'Civil liberties are protections FROM government interference (like freedom of speech); civil rights are protections of equal treatment BY government and society (like protection from discrimination)', 'Civil liberties only apply to citizens, while civil rights apply to all people including non-citizens', 'Civil rights are found only in the Bill of Rights, while civil liberties are found only in later amendments'],
          correct: 1,
          explanation: {
            correct: "Civil liberties generally refer to individual freedoms protected FROM government interference or restriction (like freedom of speech, religion, or protection from unreasonable searches); civil rights generally refer to protections ensuring equal treatment and protection under the law, often specifically addressing discrimination based on characteristics like race, sex, or religion.",
            wrong: { 0: "While related and sometimes used loosely in everyday language, these are distinct political science concepts with different specific focuses (freedom FROM government interference vs. equal treatment protections).", 2: "This citizen/non-citizen distinction isn't the actual basis for differentiating civil liberties from civil rights; the real distinction is about freedom FROM interference versus equal treatment protections, and both concepts can apply variably to citizens and non-citizens depending on the specific right or liberty in question.", 3: "This is factually incorrect — the Bill of Rights (first 10 amendments) primarily addresses civil LIBERTIES (freedom of speech, religion, etc.), while many key civil RIGHTS protections (like the 14th Amendment's equal protection clause) came in LATER amendments, essentially the reverse pairing of what this choice claims." },
            tempting: "None of the distractors accurately capture the real distinction if the concepts are precisely defined, but treating these related, similarly-named concepts as interchangeable (choice A) is an extremely common simplification.",
            commonMistake: "Using 'civil liberties' and 'civil rights' interchangeably, without recognizing their distinct conceptual focus (freedom FROM government interference vs. equal treatment protections).",
            apTip: "Use this quick mental anchor: civil LIBERTIES = 'freedom FROM' government overreach (speech, religion, privacy); civil RIGHTS = 'freedom TO' be treated equally (protection from discrimination) — most Bill of Rights amendments are liberties; most major civil rights legislation and the 14th Amendment's equal protection clause address rights."
          }
        },
        {
          id: 'gov-3-2', difficulty: 2, type: 'mcq', topic: 'Selective Incorporation',
          prompt: "The doctrine of selective incorporation refers to the process by which:",
          choices: ['State governments gain the power to overrule federal law', 'The Supreme Court has applied most protections in the Bill of Rights (originally written to restrict only the federal government) to state governments as well, primarily through the 14th Amendment\'s due process clause', 'Congress selects which states must follow the Constitution', 'The federal government incorporates as a business entity'],
          correct: 1,
          explanation: {
            correct: "Selective incorporation is the process, developed through a series of Supreme Court cases, by which most individual protections in the Bill of Rights — originally intended to restrict only the FEDERAL government — have been applied ('incorporated') to also restrict STATE governments, primarily using the 14th Amendment's due process clause as the legal mechanism.",
            wrong: { 0: "This is unrelated to and essentially the reverse of incorporation's actual effect; incorporation extends federal constitutional protections' reach OVER state governments, not the other way around.", 2: "Incorporation is a judicial doctrine developed through Supreme Court case law, not a selection process performed by Congress, and it applies to constitutional rights protections, not general 'following the Constitution' in some undefined selective sense.", 3: "This isn't related to incorporation at all; 'incorporation' in this specific constitutional law context refers to extending Bill of Rights protections to the states, not any kind of business/organizational structure." },
            tempting: "None of the distractors closely resemble incorporation's actual meaning if the doctrine is understood specifically, but the word 'incorporation' has other everyday meanings (like business incorporation) that could create confusion without knowing its specific constitutional law usage.",
            commonMistake: "Not knowing the specific legal mechanism (14th Amendment due process clause) and historical process (case-by-case Supreme Court decisions) by which selective incorporation actually occurred, or confusing the term with unrelated everyday uses of 'incorporation.'",
            apTip: "Remember that incorporation happened gradually, case by case (hence 'SELECTIVE'), not all at once — be ready to name at least one specific incorporation case (e.g., Gitlow v. New York incorporating free speech, Mapp v. Ohio incorporating the exclusionary rule) as concrete evidence on an FRQ."
          }
        },
        {
          id: 'gov-3-3', difficulty: 2, type: 'mcq', topic: 'Freedom of Speech Limits',
          prompt: "The Supreme Court has ruled that freedom of speech, while broadly protected, is not absolute. Which of the following is an example of speech that generally receives LESS constitutional protection?",
          choices: ['Political criticism of government officials or policies', 'Speech that directly incites imminent lawless action likely to occur', 'Peaceful protest in a public park', 'Expressing an unpopular opinion in a newspaper op-ed'],
          correct: 1,
          explanation: {
            correct: "Under the standard established in Brandenburg v. Ohio, speech that is directed at inciting or producing imminent lawless action AND is likely to actually produce such action receives significantly less First Amendment protection than most other categories of speech, which are generally protected even when unpopular or controversial.",
            wrong: { 0: "Political criticism of government officials/policies is actually among the MOST protected categories of speech under the First Amendment, reflecting core democratic values about open political debate.", 2: "Peaceful protest in appropriate public forums is generally strongly protected speech/assembly activity, subject only to reasonable, content-neutral time/place/manner restrictions, not a category of significantly reduced protection.", 3: "Expressing unpopular opinions, even in published form, is core protected speech under the First Amendment — the amendment's protection is specifically MOST important for controversial or unpopular viewpoints, not least important." },
            tempting: "None of the distractors describe reduced-protection speech categories if the actual First Amendment framework is understood specifically, but a vague sense that 'government must be able to restrict some speech' without knowing the SPECIFIC legal standard (imminent lawless action) could lead to incorrectly flagging protected political speech as an example of reduced protection.",
            commonMistake: "Not knowing the SPECIFIC legal standard (imminent lawless action, from Brandenburg v. Ohio) for the narrow category of speech that receives reduced protection, and instead assuming any controversial or critical speech might fall into a lesser-protected category.",
            apTip: "Memorize the Brandenburg v. Ohio standard specifically: speech loses protection only when it's both DIRECTED at inciting imminent lawless action AND LIKELY to actually produce that action — both conditions are required together, and this is a required Supreme Court case on the AP Gov exam."
          }
        },
        {
          id: 'gov-3-4', difficulty: 3, type: 'mcq', topic: 'Due Process & the Exclusionary Rule',
          prompt: "In Mapp v. Ohio (1961), the Supreme Court ruled that evidence obtained through an illegal search and seizure:",
          choices: ['Can always be used in court regardless of how it was obtained', 'Must be excluded from use in STATE criminal trials (applying the exclusionary rule to the states), just as it already was in federal trials', 'Can only be excluded from federal trials, not state trials', 'Automatically results in the dismissal of all charges against a defendant'],
          correct: 1,
          explanation: {
            correct: "Mapp v. Ohio incorporated the exclusionary rule (which prevents illegally obtained evidence from being used in court) to apply to STATE criminal proceedings via the 14th Amendment's due process clause, extending a protection that had previously applied only in federal trials, and reinforcing 4th Amendment protections against unreasonable searches and seizures at the state level.",
            wrong: { 0: "This is the opposite of the actual ruling — Mapp v. Ohio specifically established that illegally obtained evidence generally CANNOT be used, not that it can always be used regardless of how obtained.", 2: "This describes the situation BEFORE Mapp v. Ohio (exclusionary rule applied only federally); the case's specific significance was extending this rule TO state trials as well, changing this exact prior limitation.", 3: "The exclusionary rule specifically addresses whether particular EVIDENCE can be used, not an automatic dismissal of all charges; a case might still proceed using other, properly obtained evidence even after illegally obtained evidence is excluded." },
            tempting: "Choice C describes the PRE-Mapp v. Ohio legal landscape, which can tempt students who know the exclusionary rule existed at the federal level but don't know this specific case's role in extending it to states via incorporation.",
            commonMistake: "Not connecting Mapp v. Ohio to the broader incorporation doctrine, or confusing the pre-existing federal-only rule with the case's actual holding, which specifically extended the rule to state trials.",
            apTip: "Mapp v. Ohio is a required Supreme Court case for the AP Gov exam — connect it explicitly to BOTH the exclusionary rule/4th Amendment protections AND the broader selective incorporation doctrine (extending Bill of Rights protections to the states via the 14th Amendment) for full FRQ credit."
          }
        },
        {
          id: 'gov-3-5', difficulty: 4, type: 'mcq', topic: 'Affirmative Action & Equal Protection',
          prompt: "Supreme Court cases addressing affirmative action in college admissions (such as Fisher v. University of Texas and later cases) have generally grappled with balancing:",
          choices: ['The complete prohibition of any consideration of race in any context whatsoever, with no exceptions ever recognized', 'The goal of diversity in education against the 14th Amendment\'s equal protection clause, which requires any racial classifications to survive strict scrutiny (a very high legal bar)', 'A universally agreed-upon, uncontroversial legal consensus with no significant disagreement among justices', 'Only religious diversity considerations, unrelated to racial classifications'],
          correct: 1,
          explanation: {
            correct: "Affirmative action cases have generally required courts to balance the educational benefits of diversity against the 14th Amendment's equal protection clause, which requires that any government use of racial classifications survive 'strict scrutiny' — the most rigorous level of judicial review, requiring a compelling government interest and narrowly tailored means — reflecting genuine, ongoing tension between these two considerations.",
            wrong: { 0: "The Court's affirmative action jurisprudence has historically been more nuanced than a complete, blanket prohibition with no exceptions ever recognized; various rulings over time have permitted certain narrowly tailored considerations of race under strict scrutiny (though the most recent major rulings have significantly restricted or eliminated this further), reflecting an evolving, contested legal landscape rather than a simple absolute rule throughout.", 2: "Affirmative action has been one of the most contested, closely divided areas of constitutional law, with significant disagreement among justices and shifting majorities over time — this is far from an uncontroversial, unanimous area of law.", 3: "These cases have centered specifically on RACIAL classifications in admissions, not religious diversity considerations." },
            tempting: "Choice A can tempt students unfamiliar with the specific historical evolution of this doctrine into assuming the law has always been a simple, absolute rule, rather than a genuinely contested and evolving area of constitutional interpretation.",
            commonMistake: "Assuming affirmative action jurisprudence has been simple, static, or uncontroversial, rather than recognizing it as one of the most closely contested, evolving areas of equal protection law.",
            apTip: "Connect affirmative action cases explicitly to the specific legal standard of 'strict scrutiny' (compelling government interest + narrowly tailored means) used for racial classifications — and be aware this is an evolving area of law, so framing your answer around the GENERAL legal standard and tension (diversity goals vs. equal protection) is more durable than citing any single case's specific, potentially since-modified outcome."
          }
        },
        {
          id: 'gov-3-6', difficulty: 5, type: 'mcq', topic: 'Balancing Liberty and Security',
          prompt: "Historically, during times of national crisis (such as wartime), the Supreme Court has sometimes upheld government actions restricting civil liberties (such as Japanese American internment in Korematsu v. United States) that were later widely repudiated. What does this pattern suggest about the relationship between civil liberties and national security in constitutional law?",
          choices: ['Civil liberties are always fully protected by the courts regardless of any claimed national security justification, with no historical exceptions', 'Courts have sometimes deferred significantly to government claims of national security necessity, even at serious cost to civil liberties, a pattern later widely criticized and, in some instances like Korematsu, explicitly repudiated by later courts and legal scholars', 'National security concerns have never been raised as a justification for restricting civil liberties in American constitutional history', 'The Supreme Court has never reversed or repudiated any of its own prior civil liberties rulings'],
          correct: 1,
          explanation: {
            correct: "Historical cases like Korematsu v. United States (upholding Japanese American internment during WWII) illustrate a pattern where courts have sometimes given substantial deference to government claims of wartime/national security necessity, even when this significantly restricted civil liberties in ways later widely recognized as unjust; Korematsu itself was later effectively repudiated (including explicit statements from the Supreme Court in a later case, Trump v. Hawaii, that Korematsu was gravely wrong the day it was decided), illustrating how this liberty-security balance has been evaluated differently by different courts across different historical periods.",
            wrong: { 0: "This directly contradicts well-documented historical exceptions (like Korematsu) where courts DID substantially defer to government security claims at real cost to civil liberties, at least at the time such cases were decided.", 2: "National security has been invoked as a justification for restricting civil liberties multiple times in American history (Korematsu/Japanese internment, some WWI-era Espionage Act prosecutions, and other examples), making this claim factually inaccurate.", 3: "The Supreme Court HAS at times repudiated or effectively overturned its own prior rulings (Korematsu being explicitly criticized and repudiated in later legal commentary and subsequent Court statements), making this claim of complete consistency inaccurate." },
            tempting: "Choice A represents an overly idealized view of constitutional history that ignores well-documented historical exceptions where courts significantly deferred to security claims at real, later-regretted cost to civil liberties.",
            commonMistake: "Assuming constitutional protection of civil liberties has been consistently, uniformly strong throughout American history, rather than recognizing specific historical periods (particularly wartime) where courts have sometimes deferred substantially to government security claims, with such deference later widely criticized.",
            apTip: "College-level insight: Korematsu v. United States is frequently cited specifically as a cautionary historical example in discussions of civil liberties versus national security — for a sophisticated FRQ response on this tension, name this specific case, its later repudiation, and use it as concrete evidence that the liberty-security balance has shifted and been contested across different historical and judicial contexts, rather than describing this tension only in the abstract."
          }
        }
      ]
    },
    {
      id: 4,
      name: 'Unit 4: American Political Ideologies & Beliefs',
      questions: [
        {
          id: 'gov-4-1', difficulty: 1, type: 'mcq', topic: 'Political Ideology Basics',
          prompt: "A person who generally favors more government intervention in the economy but less government involvement in personal/social matters would typically be described as:",
          choices: ['Conservative on both economic and social issues', 'Liberal on both economic and social issues, favoring government intervention in the economy while supporting personal freedom in social matters', 'Libertarian, favoring minimal government involvement in both areas', 'There is no consistent ideological label for this combination of views'],
          correct: 1,
          explanation: {
            correct: "This combination — supporting government intervention in the economy (e.g., regulation, social programs) while favoring personal freedom in social matters (e.g., lifestyle choices, personal autonomy) — is generally associated with the modern American liberal political ideology, roughly aligned with the contemporary Democratic Party's general positioning.",
            wrong: { 0: "Conservative ideology (as commonly used in modern American politics) typically favors LESS government intervention in the economy and, often, MORE traditional/restrictive positions on social issues — closer to the opposite combination described here.", 2: "Libertarianism specifically favors minimal government involvement in BOTH economic and social matters; this description specifically includes support for economic intervention, which doesn't match a libertarian position.", 3: "This combination is a well-recognized ideological category (modern American liberalism) with a specific, standard label, not an unclassifiable or inconsistent combination of views." },
            tempting: "Choice C is tempting because 'less government in personal matters' sounds libertarian, but libertarianism specifically requires ALSO wanting minimal government in economic matters, which contradicts this description's support for economic intervention.",
            commonMistake: "Assuming 'favoring personal freedom' alone determines libertarian identification without checking the person's ECONOMIC policy views as well; a full ideological classification requires checking both economic and social dimensions.",
            apTip: "Use a two-axis mental model for political ideology: economic axis (more vs. less government intervention) and social axis (more traditional/restrictive vs. more permissive/liberal) — modern American liberalism = more economic intervention + more social permissiveness; modern conservatism = less economic intervention + more social traditionalism; libertarianism = less government on BOTH axes."
          }
        },
        {
          id: 'gov-4-2', difficulty: 2, type: 'mcq', topic: 'Political Socialization',
          prompt: "The process by which individuals develop their political beliefs and values over their lifetime, influenced by factors such as family, education, media, and peer groups, is known as:",
          choices: ['Political polarization', 'Political socialization', 'Political realignment', 'Gerrymandering'],
          correct: 1,
          explanation: {
            correct: "Political socialization is the lifelong process through which individuals acquire their political attitudes, beliefs, and values, shaped by various influences including family (often considered the most influential early factor), education, media exposure, peer groups, and significant life events.",
            wrong: { 0: "Political polarization refers to the growing ideological distance/division between opposing political groups or parties, a different concept from the individual process of forming political beliefs.", 2: "Political realignment refers to a significant, lasting shift in party coalitions or voter allegiances, often associated with major historical shifts in which groups support which parties — a different, larger-scale phenomenon than individual belief formation.", 3: "Gerrymandering refers to the manipulation of electoral district boundaries for political advantage, an entirely unrelated concept to how individuals form political beliefs." },
            tempting: "None of the distractors closely resemble political socialization's actual meaning if the term is precisely known, but these are all commonly co-taught political science vocabulary terms that can blend together without clear, distinct definitions.",
            commonMistake: "Confusing several similarly-themed but distinct political science vocabulary terms (socialization, polarization, realignment) taught within the same general unit on political beliefs and behavior.",
            apTip: "Attach political socialization specifically to its KEY influencing agents (family, school, media, peer groups, significant events) — being able to name and briefly explain how at least two or three of these specific agents shape political beliefs is what FRQs on this topic typically require."
          }
        },
        {
          id: 'gov-4-3', difficulty: 2, type: 'mcq', topic: 'Public Opinion Polling',
          prompt: "A polling organization surveys 1,000 randomly selected adults and reports the results with a margin of error of ±3%. What does this margin of error indicate?",
          choices: ['The poll is completely inaccurate and should be disregarded', 'There is a range of uncertainty around the reported percentages, reflecting normal statistical variability from surveying a sample rather than the entire population', 'Exactly 3% of respondents refused to answer the survey', 'The poll only surveyed people within 3% of the average age'],
          correct: 1,
          explanation: {
            correct: "Margin of error reflects the statistical uncertainty inherent in surveying a SAMPLE of the population rather than every single individual; a ±3% margin of error means the true population value is likely (typically at a 95% confidence level) within 3 percentage points of the reported sample result, in either direction.",
            wrong: { 0: "A margin of error, especially a relatively small one like ±3%, doesn't mean a poll is inaccurate or should be disregarded — it's a standard, expected feature of legitimate sample-based survey methodology.", 2: "Margin of error is a STATISTICAL concept about the poll's precision/uncertainty, not a literal percentage of people who refused to respond, which is an unrelated (though real) survey methodology consideration (non-response).", 3: "Margin of error has nothing to do with respondents' ages or any specific demographic characteristic; it's a general statistical measure of the poll's overall precision based on sample size." },
            tempting: "None of the distractors accurately describe margin of error's actual statistical meaning if the concept is understood precisely, but treating it as a vague sign of 'unreliability' rather than a normal, expected feature of sampling is a common oversimplification.",
            commonMistake: "Treating any nonzero margin of error as evidence a poll is flawed or untrustworthy, rather than understanding it as an expected, quantifiable feature of statistical sampling that all sample-based polls have.",
            apTip: "Connect margin of error explicitly to sample size: LARGER sample sizes generally produce SMALLER margins of error (more precision), following the same statistical principles covered in AP Statistics — and always interpret a poll's reported percentages as a RANGE (± the margin of error), not a single precise number."
          }
        },
        {
          id: 'gov-4-4', difficulty: 3, type: 'mcq', topic: 'Ideology and Policy Preferences',
          prompt: "A voter consistently supports lower taxes, reduced government regulation of businesses, and increased defense spending, while also supporting stricter immigration enforcement. This voter\'s overall pattern of preferences would most likely align most closely with which ideological/party label in contemporary American politics?",
          choices: ['Progressive/liberal Democrat', 'Conservative Republican', 'Socialist', 'Green Party'],
          correct: 1,
          explanation: {
            correct: "This combination of preferences (lower taxes, less business regulation, increased defense spending, stricter immigration enforcement) generally aligns with the contemporary conservative ideological position, typically associated with the modern Republican Party's general platform.",
            wrong: { 0: "Progressive/liberal Democrats generally favor the OPPOSITE combination on most of these specific issues (more regulation, different tax priorities often favoring progressive taxation, generally more permissive immigration policies), not matching this voter's described preferences.", 2: "Socialist ideology generally favors substantially MORE government economic intervention and different priorities than lower taxes and reduced regulation, not matching this voter's preferences.", 3: "The Green Party platform generally emphasizes environmental protection and often more progressive social/economic positions, not typically aligned with reduced regulation and stricter immigration enforcement as described here." },
            tempting: "None of the distractors closely match this specific combination of stated preferences if contemporary American party platforms are understood specifically, but not knowing the GENERAL policy positions associated with each major ideology/party could lead to an incorrect match.",
            commonMistake: "Not having a general, working knowledge of which policy positions cluster together under which contemporary American ideological/party labels, making it difficult to correctly match a described set of preferences to the right label.",
            apTip: "Build a general awareness of how SPECIFIC policy positions (tax levels, regulation, defense spending, immigration, social issues) tend to cluster together under broader ideological labels in the CURRENT American political context — while individual voters can mix positions in less predictable ways, AP Gov questions typically test recognition of these general, commonly associated clusters."
          }
        },
        {
          id: 'gov-4-5', difficulty: 4, type: 'mcq', topic: 'Ideological Consistency vs. Political Sophistication',
          prompt: "Political scientists have found that many ordinary voters do NOT hold consistently ideological (uniformly liberal or uniformly conservative) views across all policy issues. What does this finding suggest about public opinion?",
          choices: ['All voters are equally politically sophisticated and ideologically consistent', 'Many voters hold a mix of positions that don\'t fit neatly into a single consistent ideological framework, suggesting that real-world public opinion is often more complex and less uniformly structured than simple liberal-conservative labels might suggest', 'Public opinion research is fundamentally invalid and should be disregarded', 'Only elected officials, not ordinary citizens, have any political opinions at all'],
          correct: 1,
          explanation: {
            correct: "Research on public opinion (including foundational work by political scientists studying 'belief systems') has found that many ordinary citizens hold a mix of positions across issues that don't consistently align with a single, coherent liberal or conservative ideological framework, suggesting that real-world political thinking is often more fragmented, issue-specific, or influenced by other factors (like group identity or specific personal concerns) than a simple, fully consistent ideological model would predict.",
            wrong: { 0: "This directly contradicts the research finding described — the finding SPECIFICALLY shows that many voters do NOT display consistent ideological sophistication across all issues, not that all voters are uniformly sophisticated and consistent.", 2: "This research finding doesn't invalidate public opinion research generally; rather, it's itself an important, well-established FINDING produced BY legitimate public opinion research, refining our understanding of how citizens actually think about politics.", 3: "This is an extreme overstatement not supported by the finding; ordinary citizens clearly do have political opinions on various issues — the finding is specifically about the degree of internal CONSISTENCY across those opinions, not whether opinions exist at all." },
            tempting: "Choice A represents an idealized assumption about universal political sophistication that this specific, well-documented research finding directly challenges and complicates.",
            commonMistake: "Assuming all citizens engage with politics in a highly structured, ideologically consistent way, rather than recognizing well-documented research showing many people's political views are more fragmented or issue-specific than a single unified ideology would predict.",
            apTip: "College-level insight: this connects to classic political science research (such as work by Philip Converse on 'belief systems' and mass publics) distinguishing between political elites (who tend to show more ideological consistency) and ordinary citizens (who often show less) — citing this elite-vs-mass distinction adds sophistication to an FRQ response about political ideology and public opinion."
          }
        },
        {
          id: 'gov-4-6', difficulty: 5, type: 'mcq', topic: 'Political Efficacy and Trust',
          prompt: "Political scientists distinguish between \"internal political efficacy\" (belief in one\'s own ability to understand and participate effectively in politics) and \"external political efficacy\" (belief that the government/political system is responsive to citizens\' input). A survey finds that a particular group has HIGH internal efficacy but LOW external efficacy. What would this combination most likely predict about that group\'s political behavior?",
          choices: ['This group is likely to be completely and permanently politically disengaged, with no meaningful participation of any kind', 'This group may feel capable of understanding and engaging with politics, but may become frustrated or cynical due to a belief that the system doesn\'t actually respond to their engagement, potentially leading to alternative forms of participation (like protest) or selective disengagement from conventional channels (like voting) rather than complete apathy', 'This group will definitely have the highest voter turnout of any demographic group', 'Internal and external efficacy always move together and cannot differ from each other'],
          correct: 1,
          explanation: {
            correct: "A group with high internal efficacy (confidence in their own political understanding/capability) but low external efficacy (skepticism that the system actually responds to citizen input) may feel capable of engaging but frustrated that conventional engagement doesn't produce results, potentially leading them toward alternative participation methods (protests, activism, alternative media) or selective disengagement from certain conventional channels (like voting, if they feel it's futile) — rather than complete apathy, since their internal confidence remains high even if their trust in the system's responsiveness is low.",
            wrong: { 0: "High internal efficacy suggests this group does NOT feel generally incapable or disengaged from understanding politics; their behavior is more likely to be selectively channeled or frustrated rather than characterized by complete, blanket disengagement from all political activity.", 2: "This combination (high internal, low external efficacy) is actually associated with variable, sometimes REDUCED conventional participation like voting (due to cynicism about system responsiveness) or a shift toward alternative engagement forms, not necessarily the highest possible turnout.", 3: "Internal and external efficacy are conceptually distinct dimensions that political scientists specifically study as potentially DIVERGENT — this scenario itself (high internal, low external) is a real, documented pattern demonstrating these two dimensions can differ from each other." },
            tempting: "Choice C can tempt students who assume feeling capable (high internal efficacy) straightforwardly translates into maximum civic participation, without considering how LOW external efficacy (belief the system won't respond anyway) can counteract or redirect that capability into different or reduced forms of engagement.",
            commonMistake: "Treating political efficacy as one single, undifferentiated concept, rather than recognizing internal and external efficacy as distinct dimensions that can point in different directions and have different specific effects on behavior.",
            apTip: "College-level insight: explicitly distinguish internal efficacy (self-confidence in political understanding/skill) from external efficacy (belief in system responsiveness) on FRQs discussing political participation — and note that DIVERGENT combinations (high internal/low external being a particularly interesting and well-studied case) can predict more complex, alternative, or selective participation patterns rather than simple high or low engagement across the board."
          }
        }
      ]
    },
    {
      id: 5,
      name: 'Unit 5: Political Participation',
      questions: [
        {
          id: 'gov-5-1', difficulty: 1, type: 'mcq', topic: 'Voter Turnout Factors',
          prompt: "Which of the following is generally associated with HIGHER voter turnout in the United States?",
          choices: ['Lower levels of educational attainment', 'Higher levels of educational attainment and older age', 'Living in a non-competitive, safely one-party district', 'Complex or burdensome voter registration requirements'],
          correct: 1,
          explanation: {
            correct: "Research on voter turnout in the United States has consistently found that higher educational attainment and older age are both associated with higher rates of voting participation, likely reflecting factors like greater civic knowledge/engagement, more stable residency, and stronger habitual participation patterns.",
            wrong: { 0: "Lower educational attainment is generally associated with LOWER, not higher, turnout rates in most studied populations, the opposite of this claim.", 2: "Living in a non-competitive district (where the outcome feels like a foregone conclusion) is generally associated with LOWER turnout, since voters may feel their individual vote matters less when the race isn't seen as close or competitive.", 3: "More complex or burdensome registration requirements generally DECREASE turnout by adding barriers to participation, not increase it." },
            tempting: "None of the distractors accurately describe factors associated with higher turnout if the relevant research findings are known specifically, but general assumptions running counter to documented patterns (like assuming complexity might filter for more 'serious' voters) could lead to an incorrect choice.",
            commonMistake: "Not having the SPECIFIC demographic and structural factors (age, education, district competitiveness, registration requirements) and their documented relationship to turnout clearly memorized.",
            apTip: "Memorize the general demographic and structural patterns associated with turnout: HIGHER turnout is associated with older age, higher education, higher income, and more competitive elections; LOWER turnout is associated with younger age, lower education, and burdensome registration/voting requirements — these patterns are frequently tested with specific demographic scenarios."
          }
        },
        {
          id: 'gov-5-2', difficulty: 2, type: 'mcq', topic: 'Linkage Institutions',
          prompt: "Political parties, interest groups, the media, and elections are all examples of what political science calls:",
          choices: ['Branches of government', 'Linkage institutions, which connect citizens\' interests and preferences to the policymaking process of government', 'Bureaucratic agencies', 'Judicial review mechanisms'],
          correct: 1,
          explanation: {
            correct: "Linkage institutions are the channels through which citizens' interests, opinions, and preferences are communicated to and connect with government and the policymaking process; political parties, interest groups, media, and elections are the four classic examples of these linkage institutions.",
            wrong: { 0: "Branches of government refers specifically to the legislative, executive, and judicial branches, a structural governmental concept distinct from these citizen-connecting institutions.", 2: "Bureaucratic agencies are part of the executive branch's implementation apparatus, not citizen-to-government linkage institutions in the specific sense this term describes.", 3: "Judicial review is a specific POWER held by courts (to assess constitutionality), not a broader category encompassing parties, interest groups, media, and elections." },
            tempting: "None of the distractors accurately group these four specific institutions under the correct category if 'linkage institutions' is a known, specific term, but not having this exact vocabulary term available could lead to selecting a plausible-sounding but incorrect broader category.",
            commonMistake: "Not having the specific term 'linkage institutions' available to correctly categorize these four channels connecting citizens to government, and instead defaulting to a government-structure-focused category that doesn't fit.",
            apTip: "Memorize the FOUR classic linkage institutions as a set: political parties, interest groups, media, and elections — and be ready to explain HOW each one specifically connects citizen preferences to government policymaking (e.g., interest groups lobby on specific policy issues; elections allow citizens to select representatives)."
          }
        },
        {
          id: 'gov-5-3', difficulty: 2, type: 'mcq', topic: 'Interest Groups & Pluralism',
          prompt: "Pluralist theory of American democracy argues that political power is:",
          choices: ['Concentrated entirely in the hands of a single small elite group', 'Distributed among many competing interest groups, with public policy emerging from the competition and bargaining among these diverse groups', 'Held exclusively by elected officials with no influence from outside groups', 'Irrelevant, since ordinary citizens have no meaningful influence on policy through any channel'],
          correct: 1,
          explanation: {
            correct: "Pluralist theory holds that political power in American democracy is distributed among many different, competing interest groups (representing business, labor, environmental, civil rights, and other diverse interests), with public policy resulting from ongoing competition, negotiation, and bargaining among these various groups, rather than being controlled by any single dominant actor.",
            wrong: { 0: "This describes ELITE theory (the view that power is concentrated among a small, cohesive elite), which is a contrasting, alternative theory to pluralism, not pluralism itself.", 2: "Pluralist theory specifically emphasizes the significant INFLUENCE of interest groups (outside formal elected officials) on the policymaking process, not the exclusion of such outside influence.", 3: "Pluralist theory specifically argues citizens CAN exert meaningful influence, particularly through organizing into and participating in interest groups, contradicting a claim of no meaningful influence through any channel." },
            tempting: "Choice A describes a genuinely real, contrasting theory (elite theory) that's frequently taught alongside pluralism, making it easy to mix up which specific theory claims what about the distribution of power.",
            commonMistake: "Confusing pluralist theory (power distributed among many competing groups) with elite theory (power concentrated among a small, cohesive elite) — these are two standard, contrasting theories of democracy frequently taught and tested together.",
            apTip: "Keep pluralism and elite theory as a clear contrasting pair: pluralism = many competing groups, distributed power, bargaining process; elite theory = small, cohesive group holds concentrated power — and be ready to evaluate real-world evidence for and against each perspective on an FRQ."
          }
        },
        {
          id: 'gov-5-4', difficulty: 3, type: 'mcq', topic: 'Media\'s Role in Political Participation',
          prompt: "The concept of \"agenda-setting\" in media studies refers to the media\'s ability to:",
          choices: ['Directly tell citizens exactly what opinions to hold on every issue', 'Influence which issues the public considers important and worthy of attention, by choosing what to extensively cover, even without necessarily dictating specific opinions on those issues', 'Have no meaningful influence on public political attention whatsoever', 'Only affect voting behavior in local elections, not national elections'],
          correct: 1,
          explanation: {
            correct: "Agenda-setting theory describes the media's significant influence over WHICH issues the public perceives as important or salient, based on which topics receive extensive coverage — this is distinct from directly telling people WHAT to think about those issues (a different, more direct effect that most media effects research finds is less strong and consistent than agenda-setting effects).",
            wrong: { 0: "Agenda-setting specifically describes influence over which issues seem important (attention/salience), NOT direct control over what specific opinions people hold about those issues — this distinction (agenda-setting vs. opinion-changing) is a key part of the concept.", 2: "Agenda-setting theory specifically documents that media DOES have meaningful, measurable influence on public attention to issues, contradicting a claim of no meaningful influence at all.", 3: "Agenda-setting effects have been studied and documented across various levels of elections and political contexts, not limited exclusively to local elections." },
            tempting: "Choice A is tempting because it captures a stronger, more dramatic claim about media influence, but the actual research-supported concept of agenda-setting is more specifically about influencing issue SALIENCE/attention rather than directly dictating opinions.",
            commonMistake: "Overstating agenda-setting's effect as media directly controlling what people think (opinion content) rather than the more precise, research-supported claim that media influences which issues people consider important (attention/salience).",
            apTip: "Use the precise, well-known summary phrase for agenda-setting: media may not be very successful at telling people WHAT to think, but is quite successful at telling people WHAT TO THINK ABOUT — this exact framing captures the key distinction tested on this topic."
          }
        },
        {
          id: 'gov-5-5', difficulty: 4, type: 'mcq', topic: 'Third Parties in American Politics',
          prompt: "Despite occasionally influencing elections or specific policy debates, third parties in the United States have historically struggled to win significant numbers of seats or the presidency. Which structural factor best explains this pattern?",
          choices: ['Third parties are legally prohibited from participating in US elections', 'The winner-take-all, single-member district electoral system (as opposed to proportional representation) tends to discourage third-party viability, since votes for a losing third-party candidate can feel \"wasted\" compared to systems awarding seats proportionally', 'Third parties have never received any votes in American history', 'The Constitution explicitly limits American elections to exactly two political parties'],
          correct: 1,
          explanation: {
            correct: "The United States' winner-take-all, single-member district electoral system (where only the single candidate with the most votes in a district wins, with no proportional allocation of seats) tends to structurally discourage third-party success, since votes for a third-party candidate who doesn't win a plurality are effectively 'wasted' in terms of representation, unlike proportional representation systems (used in many other democracies) that can award seats to parties based on their overall vote share, even without winning any single district outright.",
            wrong: { 0: "Third parties are NOT legally prohibited from participating in US elections; they can and do run candidates, even if they rarely win significant numbers of seats due to structural (not legal prohibition) factors.", 2: "Third parties have received meaningful numbers of votes at various points in American history (such as Ross Perot's substantial 1992 presidential vote share, or various historical third-party movements), even without winning the presidency or many seats.", 3: "The Constitution does not explicitly mention or limit the number of political parties at all; the two-party system's dominance is a product of structural/electoral factors and political history, not an explicit constitutional requirement or limitation." },
            tempting: "None of the distractors accurately describe the actual structural explanation if the winner-take-all system's effects are understood specifically, but vague assumptions about legal prohibition or constitutional mandate (rather than the more nuanced structural/electoral system explanation) are common oversimplifications.",
            commonMistake: "Assuming the two-party system's dominance is a matter of explicit legal or constitutional rule, rather than understanding it as a structural consequence of the winner-take-all, single-member district electoral system (sometimes summarized by the related concept of Duverger's Law).",
            apTip: "College-level insight: connect this pattern explicitly to Duverger's Law, a well-known political science principle stating that winner-take-all, single-member district electoral systems tend to produce and sustain two-party systems, while proportional representation systems tend to support multi-party systems — citing this specific principle by name demonstrates a more sophisticated understanding on an FRQ about third parties."
          }
        },
        {
          id: 'gov-5-6', difficulty: 5, type: 'mcq', topic: 'Political Participation Beyond Voting',
          prompt: "Political scientists note that voting is only one of many forms of political participation, and that different demographic groups may participate through different channels at different rates. What is the significance of this observation for understanding political influence and representation?",
          choices: ['Since voting is the only form of participation that matters, groups with lower voter turnout have no political influence whatsoever', 'Measuring political engagement by voter turnout alone may understate the actual political voice/influence of groups that participate heavily through OTHER channels (such as protest, community organizing, or direct contact with officials), even if their voting rates are comparatively lower', 'All forms of political participation are exactly equally effective at influencing specific policy outcomes, with no meaningful differences between them', 'Only wealthy individuals are capable of participating in politics through any channel'],
          correct: 1,
          explanation: {
            correct: "Because political participation takes many forms beyond voting (protest, community organizing, direct contact with officials, donating, volunteering, social media activism, etc.), and different demographic groups may rely more heavily on different specific channels, focusing exclusively on voter turnout as the measure of a group's political engagement or influence can understate the actual political voice of groups that are highly active through other, non-voting channels — a genuinely more complete picture of political influence requires considering this full range of participation methods.",
            wrong: { 0: "This overstates voting's exclusive importance; groups can and do exercise meaningful political influence through other channels (protest movements' proven historical impact on policy, for example) even when their voting rates are comparatively lower.", 2: "Different forms of participation clearly have different levels of effectiveness depending on the specific context, issue, and goal (e.g., voting is generally effective for elections, while direct contact/lobbying may be more effective for specific legislative outcomes); they are not all interchangeable or equally effective in every situation.", 3: "While there are well-documented socioeconomic disparities in participation rates across different channels, it's factually inaccurate to claim ONLY wealthy individuals can participate in politics through any channel at all — many forms of grassroots participation (protest, community organizing, voting itself) are accessible across socioeconomic levels, even if participation rates vary." },
            tempting: "Choice A represents a common oversimplification that treats voting as the sole meaningful indicator of political engagement, ignoring substantial political science research on alternative, sometimes highly impactful forms of political participation.",
            commonMistake: "Treating voter turnout as the single, complete measure of a group's political engagement or influence, rather than recognizing the broader landscape of political participation methods and how their differential use across groups affects a full understanding of political voice and influence.",
            apTip: "College-level insight: for a sophisticated FRQ response on political participation, explicitly name MULTIPLE forms of participation beyond voting (protest/social movements, contacting officials, interest group membership, financial contributions, volunteering) and discuss how examining ONLY voter turnout data can provide an incomplete picture of a demographic group's actual political engagement and influence — this broader, multi-channel framing reflects genuine political science nuance beyond a voting-centric view."
          }
        }
      ]
    }
  ],
  frqs: [
    {
      id: 'gov-frq-1', difficulty: 4, unit: 1,
      prompt: "Federalist No. 51, written by James Madison, argues that a system of separated powers combined with checks and balances is necessary to prevent tyranny, famously stating that 'ambition must be made to counteract ambition.'\n\n(a) Explain Madison's argument for why checks and balances are necessary, referencing the concept of human nature/self-interest.\n(b) Describe one specific constitutional check that one branch of government has over another.\n(c) Explain how federalism (the division of power between national and state governments) serves as an additional check described in Federalist No. 51, beyond the separation of powers among the three branches.",
      rubricPoints: [
        "Explains Madison's core argument: since government is administered by imperfect people who may act in self-interest, structural mechanisms (not just reliance on good character) are needed to prevent abuse of power (1 pt)",
        "Correctly describes the 'ambition must counteract ambition' concept: giving each branch incentive and means to check the others' power (1 pt)",
        "Provides one specific, accurate example of a constitutional check (e.g., presidential veto, congressional override, Senate confirmation of appointments, judicial review) (1 pt)",
        "Explains that federalism creates an additional 'double security' by dividing power between national and state governments, providing another layer of protection against concentrated power beyond the three-branch separation (1 pt)"
      ],
      sampleResponse: "(a) Madison argues that because people (including those who hold government office) are not angels and may act out of self-interest or ambition, government cannot rely solely on good intentions or virtue to prevent abuses of power. Instead, structural mechanisms must be built into the system itself so that each branch has both the constitutional means and the personal incentive to resist encroachments by the other branches.\n(b) One specific example is the presidential veto: Congress passes legislation, but the President can veto it, checking the legislative branch's lawmaking power; Congress can, in turn, override that veto with a two-thirds vote in both chambers, itself a check on the President's check.\n(c) Federalism provides an additional layer of protection, sometimes described as 'double security,' by dividing power between the national government and state governments. Even if power became concentrated within one level of government, having the other level (state or national) still functioning independently provides an additional structural safeguard against total concentration of power, complementing and extending the protection already provided by the separation of powers among the three branches at the national level."
    },
    {
      id: 'gov-frq-2', difficulty: 3, unit: 1,
      prompt: "Explain ONE way that federalism divides power between national and state governments, AND explain ONE specific constitutional provision that supports federal power over conflicting state law.",
      rubricPoints: [
        "Explains federalism as the division of power between national and state governments, each with certain reserved or shared powers (1 pt)",
        "Identifies the Supremacy Clause (Article VI) as establishing that federal law takes precedence over conflicting state law (1 pt)",
        "Provides supporting reasoning or example connecting the clause to federal supremacy (1 pt)"
      ],
      sampleResponse: "Federalism divides governing power between the national government (with certain enumerated powers, like regulating interstate commerce) and state governments (which retain powers not delegated to the national government, per the 10th Amendment, such as regulating local matters). The Supremacy Clause (Article VI of the Constitution) establishes that federal law takes precedence over conflicting state law, meaning that when a valid federal law and a state law conflict, the federal law prevails — this was central to the reasoning in McCulloch v. Maryland, where the Court ruled Maryland could not tax the federally-chartered bank."
    },
    {
      id: 'gov-frq-3', difficulty: 4, unit: 2,
      prompt: "Explain ONE formal power of Congress AND ONE formal power of the President, then explain how these two powers could be used to check one another regarding a specific piece of legislation.",
      rubricPoints: [
        "Identifies a specific formal congressional power (e.g., passing legislation, override of veto) (1 pt)",
        "Identifies a specific formal presidential power (e.g., veto) (1 pt)",
        "Explains the specific check-and-balance interaction between these two powers (1 pt)"
      ],
      sampleResponse: "Congress has the formal power to pass legislation through a majority vote in both chambers. The President has the formal power to veto legislation passed by Congress. These powers check each other: if Congress passes a bill the President disagrees with, the President can veto it, preventing it from becoming law; however, Congress can in turn override this veto with a two-thirds vote in both the House and Senate, allowing the legislation to become law despite the President's objection — illustrating the layered system of checks between these two branches."
    },
    {
      id: 'gov-frq-4', difficulty: 4, unit: 3,
      prompt: "Explain ONE way the Supreme Court has expanded protections for defendants' rights (referencing a specific case), AND explain ONE ongoing debate about the balance between civil liberties and government authority.",
      rubricPoints: [
        "Identifies a specific case (e.g., Mapp v. Ohio and the exclusionary rule) and explains its significance (1 pt)",
        "Identifies a specific ongoing civil liberties vs. government authority debate (e.g., balancing national security surveillance against privacy rights) (1 pt)",
        "Provides reasoning connecting the case to the broader debate (1 pt)"
      ],
      sampleResponse: "In Mapp v. Ohio (1961), the Supreme Court extended the exclusionary rule (preventing illegally obtained evidence from being used in court) to state trials via the 14th Amendment's due process clause, expanding 4th Amendment protections against unreasonable searches at the state level. This reflects an ongoing broader debate about balancing civil liberties against government authority — for example, contemporary debates about government surveillance programs raise similar tensions between protecting individual privacy rights and enabling law enforcement or national security investigations, showing that this balance remains a continually contested area of constitutional interpretation."
    },
    {
      id: 'gov-frq-5', difficulty: 3, unit: 4,
      prompt: "Explain ONE way political ideology influences policy preferences, using a specific policy example, AND explain ONE limitation of using a simple liberal-conservative spectrum to describe all voters' views.",
      rubricPoints: [
        "Provides a specific example connecting an ideological position to a policy preference (e.g., conservative preference for lower taxes/less regulation, or liberal preference for more government economic intervention) (1 pt)",
        "Explains a limitation of the simple spectrum model, such as many voters holding a mix of positions that don't fit neatly into one consistent ideological category (1 pt)",
        "Provides supporting reasoning for the limitation (1 pt)"
      ],
      sampleResponse: "Conservative ideology often translates into policy preferences for lower taxes and reduced government regulation of business, reflecting a belief in limited government economic intervention. However, a simple liberal-conservative spectrum has limitations, since research has found that many ordinary voters hold a mix of positions across different issues that don't consistently align with a single ideological label — a person might hold traditionally conservative views on economic policy while holding more liberal views on a specific social issue, showing that real political attitudes are often more complex and issue-specific than a single-axis spectrum can fully capture."
    },
    {
      id: 'gov-frq-6', difficulty: 4, unit: 5,
      prompt: "Explain ONE reason voter turnout in the United States tends to be lower than in some other democracies, AND explain ONE linkage institution's role in connecting citizens to the policymaking process.",
      rubricPoints: [
        "Identifies a specific factor associated with lower US turnout (e.g., registration requirements, frequent elections, non-compulsory voting) (1 pt)",
        "Identifies a specific linkage institution (parties, interest groups, media, or elections) (1 pt)",
        "Explains how this linkage institution connects citizen preferences to government/policymaking (1 pt)"
      ],
      sampleResponse: "One factor associated with lower US voter turnout compared to some other democracies is the burden of voter registration requirements — in many other countries, citizens are automatically registered to vote, while in the US, registration often requires individual action, adding a participation barrier not present elsewhere. Interest groups serve as an important linkage institution, connecting citizen interests to government by organizing individuals around shared policy concerns and lobbying elected officials and agencies, translating diffuse public interests into more organized influence on the policymaking process."
    },
    {
      id: 'gov-frq-7', difficulty: 4, unit: 2,
      prompt: "Explain ONE way congressional committees shape the legislative process, AND explain ONE informal power presidents use to influence policy outcomes beyond their formal constitutional powers.",
      rubricPoints: [
        "Explains committees' role in reviewing, amending, and holding hearings on bills before they reach the full chamber (1 pt)",
        "Identifies a specific informal presidential power (e.g., the \"bully pulpit,\" going public to build support) (1 pt)",
        "Explains how this informal power allows influence beyond formal constitutional authority (1 pt)"
      ],
      sampleResponse: "Congressional committees, organized around specific policy areas, review, hold hearings on, and amend proposed legislation before it can reach a vote by the full chamber, meaning most substantive legislative work happens at the committee stage rather than on the floor. Presidents also use informal powers, such as the \"bully pulpit\" — using the visibility and platform of the presidency to appeal directly to the public and shape public opinion — to build pressure on Congress to support the President's preferred policies, extending presidential influence beyond formal powers like the veto."
    },
    {
      id: 'gov-frq-8', difficulty: 4, unit: 3,
      prompt: "Explain the significance of the Supreme Court case Engel v. Vitale for the Establishment Clause, AND explain how selective incorporation connects this kind of ruling to state-level policy.",
      rubricPoints: [
        "Explains Engel v. Vitale's holding: state-sponsored/organized prayer in public schools violates the Establishment Clause (1 pt)",
        "Explains selective incorporation as the process by which Bill of Rights protections, originally limiting only the federal government, have been applied to state governments via the 14th Amendment (1 pt)",
        "Connects the two: this incorporation is why a First Amendment religion clause ruling constrains STATE-level school policy, not just federal action (1 pt)"
      ],
      sampleResponse: "In Engel v. Vitale (1962), the Supreme Court ruled that state-sponsored, organized prayer in public schools violates the Establishment Clause of the First Amendment, since it constitutes government endorsement of religious activity. This ruling applies to STATE-level school policy because of selective incorporation — the process by which the Supreme Court has applied most Bill of Rights protections (originally written to restrict only the federal government) to state and local governments as well, via the 14th Amendment's due process clause; without this incorporation, the First Amendment's religion clauses would not necessarily constrain state and local public school policies."
    },
    {
      id: 'gov-frq-9', difficulty: 3, unit: 4,
      prompt: "Explain ONE way political socialization shapes an individual's political beliefs, referencing a specific socializing agent.",
      rubricPoints: [
        "Identifies a specific socializing agent (e.g., family, education, media, peer groups) (1 pt)",
        "Explains how this agent shapes political beliefs over the course of a person's life (1 pt)",
        "Provides supporting reasoning or example (1 pt)"
      ],
      sampleResponse: "Family is often considered one of the most influential agents of political socialization; children frequently adopt political party identification and general ideological leanings similar to their parents, since early political attitudes are often absorbed through household conversations, modeled behaviors (like discussing news or voting), and shared values communicated during upbringing, forming a foundation for political beliefs that often persists, to some degree, into adulthood."
    },
    {
      id: 'gov-frq-10', difficulty: 4, unit: 5,
      prompt: "Explain ONE reason why the winner-take-all electoral system in the United States tends to sustain a two-party system, AND explain ONE way third parties can still influence American politics despite rarely winning major elections.",
      rubricPoints: [
        "Explains the winner-take-all, single-member district system's tendency to discourage third parties, since votes for a losing third-party candidate can feel wasted (sometimes referencing Duverger's Law) (1 pt)",
        "Identifies a specific way third parties influence politics despite rarely winning (e.g., raising issues that major parties then adopt, acting as spoilers in close elections) (1 pt)",
        "Provides supporting reasoning or example (1 pt)"
      ],
      sampleResponse: "The winner-take-all, single-member district electoral system tends to sustain a two-party system (a pattern sometimes called Duverger's Law), since only one candidate wins each district's seat and votes for a losing third-party candidate don't translate into any representation, making such votes feel 'wasted' compared to systems with proportional representation. Despite rarely winning major elections, third parties can still influence American politics by raising issues or policy positions that one of the major parties may later adopt to attract those voters, or by acting as a 'spoiler,' drawing enough votes away from a major-party candidate in a close election to affect its outcome."
    }
  ]
}
