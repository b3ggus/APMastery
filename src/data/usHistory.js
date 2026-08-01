// AP US History — real College Board period numbers/names used for authenticity.
// Started with 2 units; more periods to be added in follow-up passes, matching
// the pattern used for Biology/Chemistry/Statistics/Psychology.

export const usHistory = {
  id: 'us-history',
  name: 'AP US History',
  icon: '🗽',
  accent: 'ember',
  units: [
    {
      id: 1,
      name: 'Period 1: 1491–1607',
      questions: [
        {
          id: 'apush-1-1', difficulty: 1, type: 'mcq', topic: 'Columbian Exchange',
          prompt: "The Columbian Exchange refers to the widespread transfer of which of the following between the Americas, Europe, and Africa following 1492?",
          choices: ['Only manufactured goods and currency', 'Plants, animals, diseases, and people, producing profound and lasting effects on populations and ecosystems on both sides of the Atlantic', 'Only military technology', 'Only religious texts and ideas'],
          correct: 1,
          explanation: {
            correct: "The Columbian Exchange describes the massive transfer of plants (like potatoes, maize, and tobacco), animals (like horses and pigs), diseases (like smallpox), and people (through both voluntary migration and the forced transatlantic slave trade) between the Americas, Europe, and Africa following Columbus's voyages, with profound demographic, ecological, and economic effects on all sides.",
            wrong: { 0: "While goods and currency were indeed exchanged as part of broader trade, the Columbian Exchange specifically and most significantly refers to the much broader biological and demographic exchange (plants, animals, diseases, people), not simply manufactured goods.", 2: "Military technology transfer was one small part of broader contact, but doesn't capture the Columbian Exchange's primary, defining focus on biological and demographic transfer.", 3: "Religious ideas did spread as part of colonization efforts, but this is a separate cultural phenomenon from the Columbian Exchange's specific, defining focus on biological/demographic transfer (plants, animals, diseases, people)." },
            tempting: "None of the distractors capture the Columbian Exchange's actual broad, defining scope if the term is understood specifically, but narrowing it to just one category (goods, technology, or religion) rather than the full biological/demographic exchange is a common oversimplification.",
            commonMistake: "Narrowing the Columbian Exchange to only one specific category of exchange (like goods or technology) rather than recognizing its defining, broader scope covering plants, animals, diseases, AND people together.",
            apTip: "Be ready to name specific examples in each category for the Columbian Exchange: from Americas to Europe/Africa (maize, potatoes, tobacco); from Europe/Africa to Americas (horses, pigs, wheat, smallpox and other diseases) — and note the devastating demographic impact of disease on Native American populations, who lacked immunity to these new pathogens."
          }
        },
        {
          id: 'apush-1-2', difficulty: 2, type: 'mcq', topic: 'Spanish Colonization',
          prompt: "The encomienda system, established by Spanish colonizers in the Americas, primarily involved:",
          choices: ['Granting Native Americans full political independence from Spanish rule', 'Spanish colonizers being granted the labor of Native Americans in a specific area, in exchange for a nominal obligation to provide protection and religious instruction', 'A trading partnership between equals with no labor obligations', 'The immediate abolition of forced labor throughout the Spanish colonies'],
          correct: 1,
          explanation: {
            correct: "The encomienda system granted Spanish colonizers (encomenderos) the right to demand labor and tribute from Native Americans in a specific area, nominally in exchange for protection and Christian religious instruction — in practice, this system frequently resulted in harsh forced labor conditions and significant exploitation of Native populations.",
            wrong: { 0: "This system specifically subjected Native Americans to Spanish colonial control and labor obligations, the opposite of granting them political independence.", 2: "This wasn't an equal trading partnership; it specifically involved a coercive, unequal labor obligation system imposed on Native Americans by Spanish colonizers.", 3: "The encomienda system was itself a form of coerced labor system, not an abolition of forced labor; forced labor practices continued in various forms throughout the Spanish colonial period." },
            tempting: "None of the distractors accurately describe the encomienda system if its specific structure and function are known, but assuming any colonial system must have been either fully independent or fully abolished (rather than understanding this specific exploitative labor arrangement) could lead to an incorrect choice.",
            commonMistake: "Not having the specific mechanics of the encomienda system (granted labor/tribute rights over Native Americans, nominal protection/religious instruction obligation in return) clearly understood and differentiated from other colonial labor systems.",
            apTip: "Connect the encomienda system to its real historical consequences — including significant Native American population decline from overwork, disease, and mistreatment — and to related later reform efforts (like the Bartolomé de las Casas-influenced New Laws of 1542) that attempted, with limited success, to address the system's abuses."
          }
        },
        {
          id: 'apush-1-3', difficulty: 2, type: 'mcq', topic: 'Native American Societies Before Contact',
          prompt: "Prior to European contact, Native American societies in the Americas were characterized by:",
          choices: ['A single, uniform culture and language shared across the entire continent', 'Extraordinary diversity in languages, political organization, economic practices, and cultural traditions across different regions and groups', 'A complete absence of any agricultural practices anywhere in the Americas', 'Political and social structures that were completely unchanging for thousands of years'],
          correct: 1,
          explanation: {
            correct: "Native American societies before European contact were remarkably diverse, encompassing hundreds of distinct languages, a wide range of political organizations (from small bands to complex, large-scale empires like the Aztec and Inca), and varied economic practices (including extensive agriculture in many regions, alongside hunting-gathering and other subsistence strategies in others).",
            wrong: { 0: "This is a significant oversimplification; pre-contact Native American societies were extremely diverse, not uniform, across the vast geographic expanse of the Americas.", 2: "Agriculture was actually extensively practiced by many Native American societies (such as the Three Sisters farming — corn, beans, squash — common in parts of North America, or the sophisticated agricultural systems of Mesoamerican civilizations), directly contradicting a claim of complete absence.", 3: "Native American societies, like all human societies, experienced change and development over time (migrations, technological developments, shifting political structures); they were not static or unchanging for millennia." },
            tempting: "None of the distractors accurately describe pre-contact Native American diversity if this history is understood specifically, but oversimplified, monolithic portrayals of 'Native Americans' as a single undifferentiated group are unfortunately common popular misconceptions that this question is designed to challenge.",
            commonMistake: "Treating Native American societies as a single, homogeneous, unchanging group, rather than recognizing their genuine and extensive diversity in language, political organization, and economic practices across different regions and time periods.",
            apTip: "Be ready to cite SPECIFIC examples of this diversity on an FRQ — such as the highly urbanized, complex political structures of Mesoamerican civilizations (Aztec, Maya) contrasted with the more decentralized structures of some North American groups, or the variety of subsistence strategies (intensive agriculture, hunting-gathering, fishing) adapted to different regional environments."
          }
        },
        {
          id: 'apush-1-4', difficulty: 3, type: 'mcq', topic: 'Comparing Colonial Empires',
          prompt: "Compared to Spanish colonization, which often focused heavily on resource extraction (particularly precious metals) and religious conversion, early English colonization in North America (such as at Jamestown and Plymouth) was more often characterized by:",
          choices: ['An identical focus on immediate precious metal extraction as the primary colonial goal', 'A greater initial emphasis on permanent settlement, agriculture (such as tobacco cultivation), and, in some cases, religious freedom for the colonizers themselves', 'A complete absence of any interaction or conflict with Native American populations', 'Immediate and complete political independence from the English crown'],
          correct: 1,
          explanation: {
            correct: "While motivations varied across different English colonies, early English colonization efforts often emphasized permanent settlement and agricultural production (such as the enormously profitable tobacco cultivation at Jamestown) more than the Spanish focus on precious metal extraction, and some colonies (like Plymouth) were specifically motivated by seeking religious freedom for their own colonizing religious communities.",
            wrong: { 0: "English colonization, particularly after early Jamestown struggles, shifted toward agricultural production (tobacco) rather than replicating the Spanish focus on precious metal extraction, which the English colonies largely lacked access to in the same way.", 2: "English colonization involved extensive, often violent interaction and conflict with Native American populations (such as conflicts with the Powhatan Confederacy near Jamestown), not an absence of contact.", 3: "English colonies remained under English crown authority (governed through charters and, for some, direct crown control) for a long period; they did not achieve immediate political independence, which only came much later with the American Revolution." },
            tempting: "None of the distractors accurately describe general patterns of early English colonization if this comparative history is known specifically, but assuming all European colonization efforts followed an identical pattern (like the Spanish model) is a common oversimplification.",
            commonMistake: "Assuming all European colonial powers pursued identical strategies and goals in the Americas, rather than recognizing meaningful differences in emphasis (Spanish: precious metals, religious conversion via mission systems; English: permanent settlement, agriculture, and in some cases religious motivations for the colonizers themselves).",
            apTip: "Build a comparative framework for the major European colonizing powers (Spanish, English, French, Dutch) noting each one's typical PRIMARY motivations and colonial structures — this kind of comparative analysis across empires is a frequently tested skill in the early AP US History periods."
          }
        },
        {
          id: 'apush-1-5', difficulty: 4, type: 'mcq', topic: 'Labor Systems in Early Colonies',
          prompt: "In the early Chesapeake colonies (Virginia and Maryland), the labor system gradually shifted over the 17th century from a reliance primarily on English indentured servants to an increasing reliance on:",
          choices: ['Fully automated agricultural machinery', 'Enslaved Africans, particularly as this system became more codified and expanded following events like Bacon\'s Rebellion in 1676', 'Native American labor exclusively, with no other labor source used', 'Free wage labor exclusively, with no coerced labor of any kind'],
          correct: 1,
          explanation: {
            correct: "Over the course of the 17th century, Chesapeake colonies increasingly shifted from relying primarily on English indentured servants toward an increasing reliance on enslaved Africans for labor, a shift that became more pronounced and legally codified following events like Bacon's Rebellion (1676), which highlighted risks colonial elites associated with a large population of free or soon-to-be-free former indentured servants.",
            wrong: { 0: "Agricultural machinery/automation is an anachronistic concept for this historical period; labor during this era was performed by human workers (indentured servants, enslaved people), not machines.", 2: "While Native American labor was used to some extent in various colonial contexts, the SPECIFIC, well-documented major labor shift in the Chesapeake during this period was toward enslaved Africans, not an exclusive reliance on Native American labor.", 3: "This period saw an INCREASE in coerced labor (specifically enslaved African labor), not a shift toward free wage labor exclusively; forced/coerced labor systems expanded significantly during this era, not diminished." },
            tempting: "None of the distractors accurately describe this specific, well-documented labor system shift if the history is known precisely, but not connecting this shift to its specific historical triggers (like Bacon's Rebellion) could lead to a vaguer, less complete understanding.",
            commonMistake: "Not connecting the shift from indentured servitude to slavery in the Chesapeake to its SPECIFIC historical context and triggers, particularly the elite colonial response to Bacon's Rebellion's demonstration of the risks of a large discontented population of free former servants.",
            apTip: "Explicitly connect this labor system shift to Bacon's Rebellion (1676) on FRQs — the rebellion, which united poor free colonists (including former servants) and enslaved people against colonial elites, is frequently cited as accelerating colonial elites' preference for the more permanent, legally rigid institution of racial slavery over indentured servitude, partly as a strategy to prevent similar future alliances across racial/class lines."
          }
        },
        {
          id: 'apush-1-6', difficulty: 5, type: 'mcq', topic: 'Historical Interpretation & Contact-Era Demographics',
          prompt: "Historians have significantly revised estimates of pre-Columbian Native American population size upward over recent decades, and have correspondingly emphasized the demographic catastrophe (from disease, violence, and displacement) that followed European contact. What methodological challenge makes precisely quantifying pre-contact Native American population especially difficult?",
          choices: ['Native American societies kept no records of any kind, providing no evidence whatsoever for historians to analyze', 'The absence of comprehensive written census records from the pre-contact period requires historians to rely on indirect evidence (archaeological findings, oral histories, early colonial accounts, and epidemiological modeling), each with its own limitations and uncertainties', 'Population size before contact is a settled, uncontested question with no ongoing scholarly debate', 'European colonial records provide completely precise and unbiased population counts from the moment of first contact'],
          correct: 1,
          explanation: {
            correct: "Because comprehensive written census-style records didn't exist for the pre-contact period in the way modern demographic records do, historians must rely on a combination of indirect evidence — archaeological findings (settlement size, artifact density), oral histories and traditions, early (often incomplete, biased, or inconsistent) colonial accounts, and epidemiological modeling estimating disease-driven population decline — each source carrying its own specific limitations, which is why population estimates have been repeatedly revised and remain subject to ongoing scholarly debate and methodological refinement.",
            wrong: { 0: "This overstates the case — Native American societies had rich oral history traditions and left substantial archaeological evidence, even without European-style written census records; 'no evidence whatsoever' is inaccurate.", 2: "This is factually incorrect — pre-contact population estimates have been, and remain, an actively debated and revised area of historical/demographic scholarship, not a settled, uncontested matter.", 3: "Early European colonial records are widely recognized by historians as often incomplete, inconsistently kept, and subject to various biases and motivated interests, not simply objective or fully precise counts, especially for the period immediately following initial contact." },
            tempting: "Choice D can tempt students into assuming written historical records from any era are automatically reliable and precise, without considering the specific limitations, biases, and gaps present in early colonial-era record-keeping, especially regarding Native American populations.",
            commonMistake: "Assuming historical population estimates (especially for pre-literate-record periods, from a European documentary perspective) are either completely unknowable or simply matters of straightforward historical fact, rather than understanding them as evolving, actively debated scholarly reconstructions based on multiple, imperfect, indirect sources of evidence.",
            apTip: "College-level insight: this reflects genuine historiographical debate (how historians' methods and interpretations change over time) — citing the SPECIFIC types of evidence used (archaeology, oral history, epidemiological modeling, colonial records) and their respective limitations on an FRQ demonstrates sophisticated engagement with historical methodology, not just the historical content itself."
          }
        }
      ]
    },
    {
      id: 2,
      name: 'Period 2: 1607–1754',
      questions: [
        {
          id: 'apush-2-1', difficulty: 1, type: 'mcq', topic: 'Colonial Regional Differences',
          prompt: "New England colonies developed an economy primarily based on which of the following, given their climate and geography?",
          choices: ['Large-scale plantation agriculture, particularly tobacco and rice', 'Small-scale farming, fishing, shipbuilding, and trade, given the region\'s rocky soil and shorter growing season', 'Exclusively large-scale mining of precious metals', 'An economy based entirely on a single cash crop'],
          correct: 1,
          explanation: {
            correct: "New England's rocky soil, hilly terrain, and shorter growing season made large-scale cash crop agriculture impractical; instead, the region developed a diversified economy based on small-scale subsistence farming, fishing, shipbuilding, and maritime trade, taking advantage of its extensive coastline and natural harbors.",
            wrong: { 0: "Large-scale plantation agriculture (tobacco, rice) was characteristic of the Southern colonies, whose climate and soil were much better suited to these labor-intensive cash crops, not New England.", 2: "There were no significant precious metal deposits driving the New England economy in the way Spanish colonies further south relied on mining; New England's economy was based on the diversified activities described, not mining.", 3: "New England's economy was notably diversified (farming, fishing, shipbuilding, trade) rather than dependent on a single cash crop, unlike the more cash-crop-dependent Southern colonial economies." },
            tempting: "Choice A is tempting because cash crop agriculture is a very commonly discussed colonial economic activity, but it specifically characterizes the SOUTHERN colonies' economy, not New England's, which had a fundamentally different climate and geography.",
            commonMistake: "Applying the Southern colonies' plantation cash-crop economic model to New England, rather than recognizing the significant REGIONAL economic differences driven by differing climate, soil, and geography across the colonies.",
            apTip: "Build a clear regional economic comparison: New England (farming, fishing, shipbuilding, trade — due to poor soil/short growing season), Middle Colonies (diversified farming, especially grain — 'breadbasket' colonies), Southern Colonies (large-scale plantation cash crops — tobacco, rice, indigo — due to fertile soil/long growing season) — this three-region comparison is fundamental and frequently tested."
          }
        },
        {
          id: 'apush-2-2', difficulty: 2, type: 'mcq', topic: 'The Great Awakening',
          prompt: "The First Great Awakening, a widespread religious revival movement in the mid-18th century colonies, is significant historically because it:",
          choices: ['Strengthened the authority and unquestioned power of established, traditional religious institutions', 'Emphasized a more personal, emotional religious experience accessible to ordinary people, and contributed to a broader questioning of traditional authority that some historians connect to later revolutionary sentiment', 'Had no lasting impact on colonial society or culture', 'Was primarily a political movement unrelated to religious belief or practice'],
          correct: 1,
          explanation: {
            correct: "The First Great Awakening emphasized emotional, personal religious conversion experiences accessible to ordinary individuals (rather than requiring traditional clergy-mediated religious authority), and this emphasis on individual religious authority and questioning of established institutions is seen by many historians as contributing to a broader culture of questioning traditional authority structures, which some connect to the ideological environment that later contributed to revolutionary sentiment.",
            wrong: { 0: "The Great Awakening actually tended to CHALLENGE and sometimes divide established religious institutions and traditional clergy authority (new revivalist preachers often directly competed with established church leaders), rather than simply strengthening existing traditional authority.", 2: "The Great Awakening had significant, well-documented lasting effects on colonial religious life, denominational structures (contributing to new/splinter denominations), and broader colonial culture, not an absence of impact.", 3: "The Great Awakening was fundamentally a RELIGIOUS revival movement in its core content and motivation, even though some historians analyze its broader social and political IMPLICATIONS/connections to later political developments." },
            tempting: "None of the distractors accurately capture the Great Awakening's actual significance if its historical content and effects are understood specifically, but underestimating its broader cultural/political implications (beyond just religious practice) is a common oversimplification.",
            commonMistake: "Treating the Great Awakening as having purely religious significance with no broader connections to colonial society, culture, or the general questioning of traditional authority that some historians link to later political developments.",
            apTip: "Be ready to name key Great Awakening figures (like George Whitefield or Jonathan Edwards) and explain how the movement's emphasis on personal religious authority/experience represented a broader questioning of established, traditional (both religious AND, some argue, by extension political) hierarchical authority — a connection frequently explored in comparative/contextualizing FRQ responses."
          }
        },
        {
          id: 'apush-2-3', difficulty: 2, type: 'mcq', topic: 'Mercantilism & the Navigation Acts',
          prompt: "The Navigation Acts, passed by the English Parliament starting in the mid-17th century, were designed to:",
          choices: ['Grant colonies complete freedom to trade with any nation, with no restrictions', 'Ensure that colonial trade primarily benefited England, by requiring certain goods to be shipped on English ships and through English ports, consistent with mercantilist economic theory', 'Immediately grant the colonies full political independence', 'Eliminate all forms of colonial trade entirely'],
          correct: 1,
          explanation: {
            correct: "The Navigation Acts reflected mercantilist economic theory, which held that colonies existed primarily to economically benefit the mother country; these acts required that certain valuable colonial goods be shipped only on English (or colonial) ships and often routed through English ports, ensuring England captured the economic benefits of colonial trade and shipping.",
            wrong: { 0: "This is the opposite of the Navigation Acts' actual purpose — they specifically RESTRICTED colonial trade freedom, funneling it through England for England's economic benefit, not granting unrestricted trade freedom.", 2: "The Navigation Acts were economic trade regulations, not political independence measures; they actually reinforced English colonial economic control, not colonial political autonomy.", 3: "The Navigation Acts regulated and channeled colonial trade (in specific ways favorable to England), rather than eliminating colonial trade entirely, which continued to occur, just under these new regulatory constraints." },
            tempting: "None of the distractors accurately describe the Navigation Acts' actual mercantilist purpose if the acts and underlying economic theory are understood specifically, but not connecting these acts to the broader mercantilist framework could lead to a vaguer or incorrect characterization.",
            commonMistake: "Not connecting the Navigation Acts to the underlying MERCANTILIST economic theory (colonies exist to economically benefit the mother country) that specifically motivated and justified these trade restrictions.",
            apTip: "Always explain the Navigation Acts in the context of mercantilism explicitly — colonies were viewed as sources of raw materials and captive markets for the mother country's manufactured goods, and the Navigation Acts' shipping/trade restrictions were a direct policy tool implementing this broader economic theory; this connection is frequently expected in FRQ responses on colonial economic policy."
          }
        },
        {
          id: 'apush-2-4', difficulty: 3, type: 'mcq', topic: 'Salutary Neglect',
          prompt: "The British policy sometimes referred to as \"salutary neglect\" during much of the early-to-mid 18th century refers to:",
          choices: ['Britain\'s strict, rigorously enforced control over every aspect of colonial governance and trade', 'A general British policy of loosely enforcing trade regulations and allowing colonies significant practical autonomy in local governance, which allowed colonial self-government traditions to develop and strengthen', 'The complete abandonment of any British claim over the American colonies', 'A policy exclusively applied to colonial religious practices, unrelated to trade or governance'],
          correct: 1,
          explanation: {
            correct: "\"Salutary neglect\" describes the general British approach (particularly before the 1760s) of loosely enforcing trade regulations like the Navigation Acts and generally allowing American colonies considerable practical autonomy in local governance and daily affairs, inadvertently allowing traditions of colonial self-government and political independence to develop and strengthen over time.",
            wrong: { 0: "This is essentially the opposite of salutary neglect — the term specifically describes LOOSE, inconsistent enforcement and considerable practical colonial autonomy, not strict, rigorous British control.", 2: "Britain maintained formal claims of sovereignty and authority over the colonies throughout this period; salutary neglect describes loose PRACTICAL enforcement, not a complete abandonment of British claims or authority.", 3: "Salutary neglect specifically and primarily refers to trade regulation enforcement and colonial governance practices, not religious practice specifically." },
            tempting: "None of the distractors accurately describe salutary neglect if the term's actual meaning is understood specifically, but assuming British colonial policy must have been either completely strict or completely absent (rather than the actual nuanced middle-ground policy) is a common oversimplification.",
            commonMistake: "Not understanding salutary neglect as a specific, nuanced MIDDLE-GROUND policy (loose practical enforcement alongside continued formal claims of authority), rather than assuming British colonial policy was either fully rigorous or entirely absent.",
            apTip: "Connect salutary neglect explicitly to its LATER historical significance — when Britain shifted away from this policy after the French and Indian War (imposing stricter enforcement and new taxes to address war debt), colonists who had grown accustomed to significant practical autonomy strongly resented this change, contributing significantly to the growing tensions that led to the American Revolution."
          }
        },
        {
          id: 'apush-2-5', difficulty: 4, type: 'mcq', topic: 'Comparing Colonial Slavery Systems',
          prompt: "Compared to slavery in the Northern colonies (which tended to be smaller-scale and more urban/domestic in character), slavery in the Southern colonies during this period was generally characterized by:",
          choices: ['An identical scale and character, with no meaningful regional differences', 'Larger-scale plantation agriculture, with enslaved populations often constituting a much larger proportion of the total colonial population in some areas, tied closely to labor-intensive cash crops like tobacco and rice', 'The complete absence of slavery of any kind in Southern colonies', 'A system based entirely on voluntary labor contracts rather than coerced, hereditary bondage'],
          correct: 1,
          explanation: {
            correct: "Southern colonies developed a system of large-scale plantation slavery tied to labor-intensive cash crops (particularly tobacco in the Chesapeake and rice in South Carolina), with enslaved populations constituting a very large proportion of the total population in some areas (especially in South Carolina, where enslaved people came to outnumber free colonists in certain periods), differing significantly in SCALE from the smaller-scale, more urban/domestic slavery more typical of Northern colonies.",
            wrong: { 0: "There were significant, well-documented regional differences in slavery's scale and character between Southern and Northern colonies during this period, contradicting a claim of identical patterns.", 2: "Slavery was extensively practiced and legally entrenched throughout the Southern colonies during this period, forming a central part of the region's plantation economy; it was definitely not absent.", 3: "Southern colonial slavery was specifically a system of coerced, hereditary, race-based bondage (chattel slavery), not voluntary labor contracts; enslaved status was hereditary and permanent, fundamentally different from voluntary contractual labor arrangements like indentured servitude." },
            tempting: "None of the distractors accurately describe the actual regional slavery patterns if this comparative history is known specifically, but underestimating genuine regional variation in slavery's scale and economic role across different colonies is a common oversimplification.",
            commonMistake: "Treating colonial slavery as a uniform, undifferentiated institution across all colonies, rather than recognizing significant regional variation in scale, economic role, and population proportion between Southern plantation colonies and Northern colonies.",
            apTip: "Be ready to cite specific regional data points on an FRQ — such as South Carolina's enslaved population significantly outnumbering the free population in certain areas by the early-to-mid 18th century — to substantiate claims about the scale and significance of Southern plantation slavery compared to smaller-scale Northern slavery during this period."
          }
        },
        {
          id: 'apush-2-6', difficulty: 5, type: 'mcq', topic: 'Anglicization & Colonial Identity',
          prompt: "Historians studying the colonial period sometimes describe a process of \"Anglicization\" occurring in the early-to-mid 18th century, in which American colonists increasingly adopted British cultural styles, consumer goods, and political ideas even while developing distinct colonial identities. What is the significance of this observation for understanding the causes of the American Revolution?",
          choices: ['It suggests colonists felt no meaningful connection to British culture at all before the Revolution, making revolution an inevitable, sudden break', 'It suggests colonial identity was complex — colonists could simultaneously feel a strong cultural/political connection to Britain (as British subjects proud of certain British political traditions, like rights of Englishmen) while also developing distinctly American experiences and grievances, making the eventual break with Britain a more complicated, contested, and gradual development rather than an inevitable or simple process', 'It proves that the American Revolution was actually a mistake, since colonists were fundamentally identical to residents of Britain', 'Anglicization had no relevance to or connection with the causes of the American Revolution'],
          correct: 1,
          explanation: {
            correct: "Anglicization suggests that colonial identity in this period was genuinely complex — colonists often felt significant pride in and connection to British political traditions (such as the rights of Englishmen, parliamentary government) even as they simultaneously developed distinct colonial experiences, economic interests, and eventually grievances (like taxation without representation); this complexity helps explain why the movement toward revolution was a gradual, contested process rather than an inevitable or simple, sudden rejection of all things British, since many colonists initially sought to defend what they saw as their RIGHTS AS BRITISH SUBJECTS before later movements pushed toward full independence.",
            wrong: { 0: "This directly contradicts the Anglicization phenomenon, which specifically shows colonists felt SIGNIFICANT cultural and political connection to Britain, not an absence of connection; this complicates rather than simplifies the causes of revolution.", 2: "This overstates and misapplies the observation into an unsupported value judgment about the Revolution itself, rather than using it as a lens for understanding the complexity of colonial identity and the causes of revolutionary sentiment.", 3: "This dismisses a genuinely relevant historical concept; Anglicization is specifically discussed BY historians because of its relevance to understanding pre-Revolutionary colonial identity and the complicated origins of revolutionary sentiment." },
            tempting: "Choice A represents a common oversimplification of revolutionary causation as an inevitable, clean break, when the actual historical complexity (colonists identifying strongly as British subjects even while developing distinct interests) suggests a more gradual, contested process.",
            commonMistake: "Treating the American Revolution as an inevitable, simple, clean break from an entirely foreign British identity, rather than recognizing the genuine complexity of colonial identity (strong British cultural/political connection alongside distinct colonial development) that makes the actual historical process more gradual and contested.",
            apTip: "College-level insight: this Anglicization framework helps explain why early colonial resistance (1760s-early 1770s) was often framed in terms of colonists defending their RIGHTS AS BRITISH SUBJECTS (not initially seeking full independence), and only gradually shifted toward seeking full independence — using this nuanced framing on an FRQ about revolutionary causation demonstrates a more sophisticated understanding than a simple 'colonists always wanted independence' narrative."
          }
        }
      ]
    },
    {
      id: 3,
      name: 'Period 3: 1754–1800',
      questions: [
        {
          id: 'apush-3-1', difficulty: 1, type: 'mcq', topic: 'Causes of the American Revolution',
          prompt: "Which of the following was a major colonial grievance that contributed to growing resistance against British rule in the 1760s and 1770s?",
          choices: ['The British government eliminated all colonial legislatures', 'Parliament imposed new taxes (such as the Stamp Act) on the colonies without colonial representation in Parliament', 'The colonies were granted full independence but rejected it', 'Britain refused to trade with the colonies at all'],
          correct: 1,
          explanation: {
            correct: "Parliament's taxation of the colonies (e.g., the Stamp Act of 1765, Townshend Acts) without any colonial representation in Parliament fueled the famous grievance 'no taxation without representation,' becoming a central rallying point for colonial resistance.",
            wrong: { 0: "Colonial legislatures (like the Virginia House of Burgesses) continued to exist and function throughout this period; they were not eliminated by Britain.", 2: "The colonies had not been offered or granted independence at this point; independence was actively fought for and only formally achieved after the Revolutionary War.", 3: "Trade between Britain and the colonies continued throughout this period (regulated by mercantilist policies like the Navigation Acts); Britain did not refuse to trade with the colonies entirely." },
            tempting: "None of the distractors closely resemble actual documented grievances if the period's key events are known, but vague general impressions of 'colonial unhappiness' without specific facts can lead to guessing among plausible-sounding but inaccurate options.",
            commonMistake: "Not connecting the general idea of 'colonial resistance' to the SPECIFIC, testable grievance (taxation without representation) and specific legislation (Stamp Act, Townshend Acts) that caused it.",
            apTip: "Memorize specific named acts (Stamp Act, Townshend Acts, Tea Act, Intolerable/Coercive Acts) and connect each to the specific colonial grievance/response it provoked — DBQ and LEQ prompts on this period frequently expect these specific named examples, not just general statements."
          }
        },
        {
          id: 'apush-3-2', difficulty: 2, type: 'mcq', topic: 'The Articles of Confederation',
          prompt: "A major weakness of the Articles of Confederation, the United States' first national governing document, was that it:",
          choices: ['Gave the national government the power to directly tax citizens', 'Created a strong national executive branch with broad powers', 'Denied the national government the power to levy taxes or regulate interstate commerce, leaving it heavily dependent on voluntary state cooperation', 'Established a national army under strong central government control'],
          correct: 2,
          explanation: {
            correct: "Under the Articles of Confederation, the national government lacked the power to directly tax citizens or effectively regulate interstate commerce, instead relying on voluntary financial contributions from the states, which frequently fell short and left the national government financially weak and largely powerless to enforce its will.",
            wrong: { 0: "The Articles specifically did NOT grant the national government direct taxing power over citizens; this lack of taxing authority was one of its most significant weaknesses.", 1: "The Articles created a notably weak national government with no separate executive branch at all, not a strong executive.", 3: "The national government under the Articles had very limited military authority and depended on state militias; it did not maintain a strong, centrally-controlled standing army." },
            tempting: "None of the distractors accurately describe the Articles' actual (weak) structure if the document's specific provisions are known, but general assumptions that 'a government must have these powers' can lead to incorrectly assuming the Articles included them.",
            commonMistake: "Assuming the Articles of Confederation created a government with powers similar to the one later established by the Constitution, rather than recognizing its specific, deliberate weaknesses (no taxing power, no strong executive, difficulty regulating commerce).",
            apTip: "Directly contrast the Articles of Confederation with the later Constitution on these SPECIFIC points (taxation power, executive branch, commerce regulation, amendment process) — this comparison is one of the most frequently tested contrasts in this period."
          }
        },
        {
          id: 'apush-3-3', difficulty: 2, type: 'mcq', topic: "Shays's Rebellion",
          prompt: "Shays's Rebellion (1786-1787), an uprising of indebted Massachusetts farmers protesting economic hardship and state debt collection policies, most directly contributed to:",
          choices: ['The immediate ratification of the Declaration of Independence', 'Growing support among many political leaders for replacing or strengthening the Articles of Confederation, contributing to the calling of the Constitutional Convention', 'The permanent abolition of state governments', 'Britain regaining control over the former colonies'],
          correct: 1,
          explanation: {
            correct: "Shays's Rebellion revealed the national government's inability under the Articles of Confederation to respond effectively to internal unrest, alarming many political leaders and strengthening the case for a stronger central government, directly contributing to the calling of the Constitutional Convention in 1787.",
            wrong: { 0: "The Declaration of Independence was adopted in 1776, years before Shays's Rebellion occurred, so it could not have been influenced by (or caused by) this later event.", 2: "State governments continued to exist and operate; Shays's Rebellion didn't result in their abolition, but rather highlighted weaknesses in the NATIONAL government's power.", 3: "Britain did not regain control over the former colonies as a result of this internal domestic uprising; the rebellion was an internal matter concerning the new nation's own governing structure." },
            tempting: "None of the distractors correctly connect to this event's actual historical significance if the timeline and consequences are known specifically, but timeline confusion (mixing up which events came before/after) is a common source of error in this period.",
            commonMistake: "Losing track of the specific chronological sequence of events in this period (Declaration of Independence 1776 → Articles of Confederation → Shays's Rebellion 1786-87 → Constitutional Convention 1787), leading to incorrect cause-and-effect connections.",
            apTip: "Build a clear timeline of this period's key events with specific years, and practice explaining how EACH event causally connects to the next — Shays's Rebellion specifically demonstrating the Articles' weaknesses and directly motivating the Constitutional Convention is a frequently tested causal chain."
          }
        },
        {
          id: 'apush-3-4', difficulty: 3, type: 'mcq', topic: 'Federalists vs. Anti-Federalists',
          prompt: "During the debate over ratifying the Constitution, Anti-Federalists' primary concern was that:",
          choices: ['The new Constitution didn\'t create a strong enough national government', 'The new Constitution lacked a Bill of Rights and created a national government with the potential to become too powerful, threatening individual liberties and states\' rights', 'The Constitution should immediately abolish slavery', 'The Constitution gave too much power to state governments and too little to the national government'],
          correct: 1,
          explanation: {
            correct: "Anti-Federalists specifically worried that the proposed Constitution created a national government with too much centralized power and no explicit Bill of Rights to protect individual liberties, fearing this could lead to tyranny similar to what they had fought against in the Revolution; this concern eventually led to the promise of the Bill of Rights as a condition for ratification in several states.",
            wrong: { 0: "This concern (government not strong enough) was closer to the FEDERALISTS' motivation for supporting a stronger national government to replace the weak Articles of Confederation, not the Anti-Federalists' primary worry.", 2: "Slavery's abolition was not the central issue debated in the Federalist/Anti-Federalist ratification debates; the primary concerns centered on the balance of power between national and state governments and individual rights protections.", 3: "This describes essentially the opposite of Anti-Federalist concerns — they worried the NATIONAL government would become too powerful relative to the states and individuals, not that states had too much power." },
            tempting: "Choice A is tempting because it's easy to mix up which side (Federalist or Anti-Federalist) wanted a STRONGER versus more limited national government, since both terms sound similar and are easily confused.",
            commonMistake: "Reversing Federalist and Anti-Federalist positions — remember, Federalists SUPPORTED the stronger national government proposed by the Constitution, while Anti-Federalists were WARY of it and pushed for a Bill of Rights as a safeguard.",
            apTip: "Anchor the two groups with their core concern: Federalists = supported a stronger national government to fix the Articles' weaknesses; Anti-Federalists = feared this new government could become tyrannical without explicit rights protections — connecting this debate directly to the eventual Bill of Rights (1791) shows fuller understanding."
          }
        },
        {
          id: 'apush-3-5', difficulty: 4, type: 'mcq', topic: 'Hamilton vs. Jefferson: Early Political Parties',
          prompt: "Alexander Hamilton's economic vision, including a national bank and federal assumption of state debts, was primarily opposed by Thomas Jefferson and his supporters because they believed it:",
          choices: ['Would eliminate the national government entirely', 'Favored commercial/financial interests and expanded federal power beyond what they believed the Constitution strictly authorized, threatening their vision of an agrarian society with limited central government', 'Would immediately lead to war with Britain', 'Focused too heavily on protecting small farmers at the expense of wealthy merchants'],
          correct: 1,
          explanation: {
            correct: "Jefferson and his supporters (who would form the Democratic-Republican Party) believed Hamilton's financial program excessively favored commercial and financial elites, relied on a loose/broad interpretation of the Constitution to justify expanded federal power (like creating a national bank, not explicitly authorized in the Constitution's text), and threatened their preferred vision of a more decentralized, agrarian-focused republic with strictly limited federal power.",
            wrong: { 0: "Jefferson's disagreement was about the SCOPE and DIRECTION of federal power and economic policy, not a desire to eliminate the national government altogether.", 2: "Hamilton's economic program (national bank, debt assumption, tariffs) was a domestic financial policy issue, not directly a matter that would immediately provoke a war with Britain.", 3: "This is backwards — it was Hamilton's plan that Jefferson believed favored WEALTHY financial/commercial interests over farmers, not the reverse." },
            tempting: "None of the distractors accurately capture the real Hamilton-Jefferson divide if the specific policy debate (loose vs. strict constitutional interpretation, commercial vs. agrarian vision) is understood precisely, but oversimplifying the disagreement into a vague 'they just disagreed' framing without specifics is common.",
            commonMistake: "Not connecting this early political conflict to its SPECIFIC underlying issues: loose vs. strict constitutional interpretation, and competing visions of a commercial/financial vs. agrarian-based society.",
            apTip: "This Hamilton-Jefferson divide is foundational to understanding the emergence of America's first political parties — explicitly name the specific policy disputes (national bank, debt assumption, loose vs. strict constitutional interpretation) rather than describing the conflict only in vague, general terms on an FRQ."
          }
        },
        {
          id: 'apush-3-6', difficulty: 5, type: 'mcq', topic: 'Continuity and Change: Revolutionary Ideals and Reality',
          prompt: "Historians often note a significant tension in the Revolutionary era between the ideals expressed in documents like the Declaration of Independence (proclaiming universal rights) and the actual social/political reality of the new nation. Which best illustrates this tension?",
          choices: ['The Declaration of Independence was immediately followed by full legal equality for all residents of the new nation', 'Despite proclaiming that \'all men are created equal,\' the new nation continued to permit slavery, denied women full political rights, and often excluded or displaced Native Americans from these proclaimed ideals', 'There was no meaningful gap between Revolutionary rhetoric and actual social/political practice', 'Revolutionary ideals were applied equally and immediately to all groups without exception'],
          correct: 1,
          explanation: {
            correct: "A major historical tension of this period is the gap between Enlightenment-influenced revolutionary rhetoric proclaiming universal natural rights and equality, and the actual continuation of slavery, the exclusion of women from full political participation, and the displacement/exclusion of Native Americans from the rights and citizenship being proclaimed for (mostly white, male, property-owning) citizens.",
            wrong: { 0: "Full legal equality for all residents did NOT follow the Declaration of Independence; slavery continued, women lacked most political rights, and Native Americans were largely excluded from the new nation's citizenship and rights framework.", 2: "This directly contradicts well-documented historical reality; there was in fact a very significant and frequently analyzed gap between revolutionary ideals and actual social/political practice for many groups.", 3: "This is factually inaccurate — application of these ideals was highly uneven and excluded significant portions of the population (enslaved people, women, Native Americans, and often non-property-owning men) from full rights and participation." },
            tempting: "None of the incorrect options reflect actual historical accuracy if the period's social realities are known specifically, but a superficial or idealized reading of Revolutionary rhetoric (without examining who was actually included/excluded) could lead to overly optimistic assumptions about this period's immediate social changes.",
            commonMistake: "Taking Revolutionary-era rhetoric about equality and rights at face value without examining the actual, documented gap between those stated ideals and their limited application in practice.",
            apTip: "For AP US History FRQs about this period, always be ready to name SPECIFIC excluded groups (enslaved African Americans, women, Native Americans) and specific evidence of the ideals/reality gap (continuation of slavery despite 'all men are created equal' language, exclusion of women from voting, Indian Removal-era policies beginning to take shape) — this tension is one of the most consistently tested themes across the entire Revolutionary and early Republic period."
          }
        }
      ]
    },
    {
      id: 6,
      name: 'Period 6: 1865–1898',
      questions: [
        {
          id: 'apush-6-1', difficulty: 1, type: 'mcq', topic: 'Industrialization',
          prompt: "Which factor most directly fueled the rapid industrial growth of the United States in the decades following the Civil War?",
          choices: ['A significant decrease in the U.S. population', 'Abundant natural resources, new technologies, access to capital, and a growing labor supply (including immigration)', 'The federal government\'s active discouragement of business growth', 'The complete elimination of railroads as a form of transportation'],
          correct: 1,
          explanation: {
            correct: "Rapid post-Civil War industrialization was fueled by a combination of abundant natural resources (coal, iron, oil), new technologies (like the Bessemer steel process), access to investment capital, and a growing labor force fed substantially by immigration, all combining to enable massive industrial expansion.",
            wrong: { 0: "The U.S. population grew significantly during this period (fueled substantially by immigration), providing an expanding labor force and consumer market rather than shrinking.", 2: "Federal government policy during this era (the 'Gilded Age') was generally characterized by limited regulation and often favorable treatment toward business interests, not active discouragement of business growth.", 3: "Railroads dramatically EXPANDED during this period, becoming a crucial infrastructure element connecting resources, factories, and markets across the country, not disappearing." },
            tempting: "None of the distractors accurately describe factors that fueled industrialization if the period's actual economic conditions are known, but vague assumptions about government or population trends without specific historical knowledge could lead to incorrect guesses.",
            commonMistake: "Not connecting industrialization to its SPECIFIC, testable causal factors (natural resources, technology, capital, labor/immigration) with concrete supporting examples.",
            apTip: "Memorize the specific cluster of factors driving Gilded Age industrialization (natural resources, technological innovation, capital investment, labor supply/immigration, minimal federal regulation) as a checklist — DBQ/LEQ prompts on this era frequently expect you to discuss multiple of these factors together with specific supporting evidence."
          }
        },
        {
          id: 'apush-6-2', difficulty: 2, type: 'mcq', topic: 'Labor Movements',
          prompt: "The Knights of Labor and later the American Federation of Labor (AFL) both emerged during this period primarily in response to:",
          choices: ['A shortage of available industrial jobs', 'Poor working conditions, low wages, and long hours faced by industrial workers, leading to organized efforts to advocate for workers\' rights and better conditions', 'Government mandates requiring the formation of labor unions', 'A complete absence of industrial employers during this period'],
          correct: 1,
          explanation: {
            correct: "Labor organizations like the Knights of Labor and the AFL formed specifically in response to the difficult conditions industrial workers faced — including low wages, dangerous and long working hours, and limited job security — organizing collectively to advocate for improved wages, hours, and working conditions.",
            wrong: { 0: "Industrial jobs were actually rapidly EXPANDING during this period due to industrialization; a shortage of jobs wasn't the driving concern behind labor organizing (job conditions and treatment were).", 2: "The federal government did not mandate the formation of unions during this period; unions formed voluntarily through worker organizing efforts, often facing significant resistance from employers and sometimes government intervention AGAINST strikes.", 3: "Industrial employers were plentiful during this rapidly industrializing period; labor organizing was a response to conditions created by these numerous employers, not their absence." },
            tempting: "None of the distractors reflect the actual historical motivation for labor organizing if the period's labor conditions are understood specifically, but vague or backwards assumptions about labor/employer dynamics can lead to incorrect answers.",
            commonMistake: "Not connecting labor union formation to its SPECIFIC driving conditions (wages, hours, safety, job security) rather than vague or incorrect assumptions about job availability or government mandates.",
            apTip: "Be ready to name specific labor conflicts of this era (like the Haymarket Affair, the Homestead Strike, the Pullman Strike) as concrete evidence of the tensions between labor and industrial employers/government during this period — specific named events strengthen FRQ responses significantly over generic descriptions."
          }
        },
        {
          id: 'apush-6-3', difficulty: 2, type: 'mcq', topic: 'Social Darwinism',
          prompt: "Social Darwinism, an ideology popular among some business leaders and intellectuals during the Gilded Age, was primarily used to:",
          choices: ['Justify labor unions and worker protections as necessary for social progress', 'Justify vast economic inequality and minimal government intervention by applying the idea of \'survival of the fittest\' to human society and economic competition', 'Advocate for stronger government regulation of businesses', 'Promote racial and social equality across all groups in society'],
          correct: 1,
          explanation: {
            correct: "Social Darwinism applied a distorted version of Darwin's biological concept of natural selection ('survival of the fittest') to human society and economics, using it to argue that economic success reflected natural superiority and that government intervention (regulation, welfare, labor protections) would wrongly interfere with natural social and economic competition — providing an ideological justification for existing wealth inequality and limited government intervention.",
            wrong: { 0: "Social Darwinism was typically used to argue AGAINST labor unions and worker protections, framing such interventions as artificially interfering with natural competitive processes, not to justify them.", 2: "Social Darwinist thinking was generally used to argue AGAINST increased government regulation of business, not to advocate for it.", 3: "Social Darwinism was frequently used to justify existing social/racial hierarchies and inequality (framing them as products of natural, deserved competitive outcomes), not to promote equality across groups." },
            tempting: "None of the distractors correctly describe Social Darwinism's actual historical use if the ideology's specific content and purpose are understood precisely, but the concept's connection to Darwin's biological theory alone (without the twisted social/economic application) might mislead students unfamiliar with its specific historical use.",
            commonMistake: "Not distinguishing Social Darwinism (an economic/social ideology used to justify inequality and limited regulation) from Darwin's actual biological theory of natural selection, or misunderstanding which side of Gilded Age economic debates this ideology supported.",
            apTip: "Explicitly connect Social Darwinism to its use by figures like Andrew Carnegie (though note Carnegie's own 'Gospel of Wealth' had nuances around philanthropy) and its general function of providing an intellectual justification for laissez-faire economics and opposition to government intervention/regulation during the Gilded Age."
          }
        },
        {
          id: 'apush-6-4', difficulty: 3, type: 'mcq', topic: 'The New South & Reconstruction\'s Legacy',
          prompt: "Following the end of Reconstruction in 1877, Southern states increasingly enacted laws and social practices — including Jim Crow laws, poll taxes, and literacy tests — that primarily served to:",
          choices: ['Expand voting rights and civil liberties for African Americans', 'Systematically disenfranchise and segregate African Americans, undermining the political and civil rights gains made during Reconstruction', 'Immediately end all forms of racial discrimination in the South', 'Strengthen federal oversight and enforcement of civil rights in Southern states'],
          correct: 1,
          explanation: {
            correct: "After Reconstruction ended (following the Compromise of 1877 and withdrawal of federal troops), Southern states enacted Jim Crow laws mandating racial segregation, along with poll taxes, literacy tests, and other discriminatory practices specifically designed to disenfranchise African American voters and reverse many of the political/civil rights gains achieved during Reconstruction.",
            wrong: { 0: "These laws and practices did the OPPOSITE — they specifically restricted and undermined voting rights and civil liberties for African Americans, rather than expanding them.", 2: "These laws established and enforced systematic racial discrimination and segregation (Jim Crow), rather than ending discrimination; this system persisted for decades until the Civil Rights Movement of the mid-20th century.", 3: "Federal oversight and enforcement of civil rights in the South actually DECREASED significantly after Reconstruction ended in 1877, allowing Southern states to implement these discriminatory laws largely unchecked by federal intervention for decades." },
            tempting: "None of the distractors accurately describe the actual function of Jim Crow-era laws if this period's history is understood specifically, but a superficial assumption that 'laws generally protect rights' without specific historical knowledge could lead to an incorrect, overly optimistic answer.",
            commonMistake: "Not recognizing the specific, deliberate discriminatory function and mechanisms (poll taxes, literacy tests, segregation laws) of the post-Reconstruction Jim Crow system, or assuming legal measures during this period must have been rights-expanding rather than rights-restricting.",
            apTip: "Be ready to name specific mechanisms of disenfranchisement (poll taxes, literacy tests, grandfather clauses, violence/intimidation) and connect this era explicitly to the broader theme of Reconstruction's incomplete and reversed promises — this connection between Reconstruction's gains and their subsequent rollback is a frequently tested continuity/change theme."
          }
        },
        {
          id: 'apush-6-5', difficulty: 4, type: 'mcq', topic: 'Populism',
          prompt: "The Populist Party (People\'s Party) that emerged in the 1890s primarily represented the economic interests and grievances of:",
          choices: ['Wealthy industrialists and bankers seeking fewer regulations', 'Farmers, particularly in the South and West, who faced falling crop prices, high debt, and unfavorable railroad shipping rates, and who advocated for reforms like the free coinage of silver', 'Urban factory owners seeking cheaper immigrant labor', 'Northeastern manufacturing interests seeking higher tariffs'],
          correct: 1,
          explanation: {
            correct: "The Populist movement emerged primarily from agrarian discontent, particularly among farmers in the South and West struggling with falling crop prices, high debt burdens, and what they saw as exploitative railroad shipping rates and banking practices; Populists advocated for reforms including the free coinage of silver (to inflate currency and ease debt burdens) and increased government regulation of railroads and banks.",
            wrong: { 0: "Populism specifically arose in OPPOSITION to the interests of wealthy industrialists and bankers, whom many Populists blamed for the economic conditions harming farmers, not as a movement representing those elite interests.", 2: "Populism was primarily an agrarian (farmer-based) movement, not a movement representing urban factory owners' interests in cheap labor.", 3: "Populism's base was primarily agricultural and often specifically critical of the existing economic system that many Northeastern manufacturing/banking interests benefited from; it wasn't a movement advocating for Northeastern manufacturing tariff interests." },
            tempting: "None of the distractors accurately describe Populism's actual social base if the movement's specific origins and demands are understood precisely, but vague assumptions equating any 'reform movement' with urban/labor interests specifically (rather than the actual agrarian base) could lead to confusion with other reform movements of the era.",
            commonMistake: "Confusing agrarian-based Populism with urban labor movements or Progressive Era reforms (a related but chronologically and substantively distinct later movement), rather than correctly identifying Populism's specific farmer-based origins and demands.",
            apTip: "Connect Populism explicitly to its specific base (farmers, especially in the South and West) and its specific key demands (free silver coinage, railroad regulation, graduated income tax, direct election of senators) — and be ready to distinguish it from the later, broader, more urban-centered Progressive movement of the early 1900s."
          }
        },
        {
          id: 'apush-6-6', difficulty: 5, type: 'mcq', topic: 'Comparative Analysis: Reconstruction and Gilded Age Reform Movements',
          prompt: "Historians often compare the federal government\'s approach to Reconstruction (1865-1877) with its approach to regulating industrial capitalism during the subsequent Gilded Age (1877-1900). Which best characterizes a key continuity between these periods?",
          choices: ['The federal government aggressively and consistently intervened to protect vulnerable groups\' rights throughout both periods without interruption', 'A pattern of initial federal intervention (Reconstruction-era civil rights enforcement) followed by a retreat toward limited federal intervention (Gilded Age laissez-faire economic policy and reduced civil rights enforcement), reflecting a broader era of restrained federal power over both racial and economic matters after 1877', 'The federal government had no involvement in either Reconstruction or Gilded Age economic policy', 'Federal civil rights enforcement significantly INCREASED throughout the Gilded Age, continuing Reconstruction\'s momentum'],
          correct: 1,
          explanation: {
            correct: "A notable continuity across this era is the federal government's shift toward more limited intervention after 1877 — both in terms of REDUCED enforcement of African Americans' civil rights (as Reconstruction-era protections were rolled back) and in terms of a generally laissez-faire, minimally regulatory approach toward industrial capitalism during the Gilded Age, reflecting a broader philosophical and political trend toward restrained federal power in both racial and economic spheres during this specific era.",
            wrong: { 0: "Federal intervention actually decreased significantly after 1877 in both areas (civil rights enforcement and economic regulation), directly contradicting a claim of consistent, aggressive intervention throughout.", 2: "The federal government was involved in both areas throughout this era (Reconstruction-era policies and, even if minimally regulatory, various Gilded Age economic policies like tariffs); it wasn't completely uninvolved in either period.", 3: "This is factually backwards — federal civil rights enforcement significantly DECREASED after Reconstruction ended in 1877 (with the rise of Jim Crow laws proceeding largely unchecked), rather than increasing." },
            tempting: "Choice A can tempt students who assume government intervention is a straightforward, continuously increasing trend, without recognizing the specific historical retreat from Reconstruction-era enforcement that characterized the following Gilded Age.",
            commonMistake: "Not recognizing the specific historical pattern of federal RETREAT from intervention after 1877 in BOTH civil rights enforcement and economic regulation, treating these as unrelated developments rather than connected expressions of a broader shift toward limited federal power during this specific era.",
            apTip: "College-level insight: this connects to a genuinely sophisticated historical argument (often used in comparison or continuity/change-over-time essays) linking the end of Reconstruction's federal enforcement to the broader laissez-faire political philosophy of the Gilded Age — explicitly drawing this connection between racial and economic policy retrenchment after 1877 demonstrates the kind of synthesis that scores highest on AP US History's long essay question (LEQ)."
          }
        }
      ]
    },
    {
      id: 7,
      name: 'Period 7: 1890–1945',
      questions: [
        {
          id: 'apush-7-1', difficulty: 1, type: 'mcq', topic: 'Progressive Era Reforms',
          prompt: "Progressive Era reformers in the early 1900s primarily sought to address problems such as political corruption, unsafe working conditions, and monopolistic business practices through:",
          choices: ['A complete rejection of capitalism in favor of a fully socialist economy', 'Government regulation and reform efforts, including trust-busting, workplace safety laws, and expanded direct democracy measures (like the initiative and referendum)', 'Eliminating all forms of local and state government', 'A return to pre-industrial, purely agricultural society'],
          correct: 1,
          explanation: {
            correct: "Progressive reformers generally sought to address industrialization's problems by working WITHIN the existing capitalist and governmental system, pushing for increased government regulation (like trust-busting under Theodore Roosevelt), workplace safety and labor laws, and democratic reforms (initiative, referendum, recall, direct election of senators) to reduce corruption and increase government responsiveness.",
            wrong: { 0: "Most mainstream Progressive reformers sought to reform and regulate capitalism, not replace it entirely with socialism; complete rejection of capitalism was a more radical position held by a smaller minority, not the general Progressive approach.", 2: "Progressives generally sought to STRENGTHEN and reform government (including expanding its regulatory role), not eliminate it.", 3: "Progressives were responding to and working within an industrial, urbanizing society; they generally sought to manage and reform industrialization's effects, not reverse it entirely back to a pre-industrial agricultural economy." },
            tempting: "None of the distractors accurately describe mainstream Progressive goals if the movement's actual reform-within-the-system approach is understood specifically, but conflating Progressivism with more radical contemporary movements (like socialism) is a common simplification.",
            commonMistake: "Conflating Progressive reform (working within the system to regulate capitalism and government) with more radical alternative movements like socialism that sought to replace the existing economic system entirely.",
            apTip: "Be ready to name specific Progressive reforms and legislation (Sherman Antitrust Act enforcement, Pure Food and Drug Act, 17th Amendment, women's suffrage movement culminating in the 19th Amendment) as concrete evidence — specific named reforms substantially strengthen FRQ responses about this era."
          }
        },
        {
          id: 'apush-7-2', difficulty: 2, type: 'mcq', topic: 'US Entry into World War I',
          prompt: "Which of the following was a primary factor leading to US entry into World War I in 1917?",
          choices: ['A surprise attack on US territory by Germany', 'German unrestricted submarine warfare against ships (including those carrying American passengers/cargo) and the revelation of the Zimmermann Telegram, which proposed a German-Mexican alliance against the US', 'The United States had been a formal military ally of Germany since the war began', 'The US joined immediately when the war began in 1914'],
          correct: 1,
          explanation: {
            correct: "Germany's resumption of unrestricted submarine warfare (threatening American ships and lives, including the earlier sinking of the Lusitania) combined with the revelation of the Zimmermann Telegram (in which Germany proposed a military alliance with Mexico against the United States) were major factors pushing American public and political opinion toward entering the war on the side of the Allies in 1917.",
            wrong: { 0: "There was no direct surprise military attack on US territory that triggered WWI entry (unlike the later Pearl Harbor attack that triggered WWII entry); the actual causes involved submarine warfare and diplomatic provocations rather than a direct territorial attack.", 2: "The United States was NOT a formal ally of Germany; the US ultimately entered the war on the side of the Allied Powers (including Britain and France), opposing Germany and the Central Powers.", 3: "The US did not enter the war when it began in 1914; the US maintained official neutrality for about three years before entering in April 1917, following the specific triggering events described." },
            tempting: "None of the distractors accurately describe the actual triggers for US entry if the period's specific events are known, but confusing this conflict's entry circumstances with those of WWII (like assuming a surprise attack) is a common chronological/historical mix-up.",
            commonMistake: "Confusing the specific circumstances leading to US entry into WWI (submarine warfare, Zimmermann Telegram) with those leading to WWII entry (Pearl Harbor attack), since both are wartime entry questions covered in the same general historical period.",
            apTip: "Keep the specific triggering events for each war's US entry clearly separated: WWI = unrestricted submarine warfare + Zimmermann Telegram (1917); WWII = Pearl Harbor attack (1941) — these are frequently tested, easily confused if not memorized with their specific associated events and dates."
          }
        },
        {
          id: 'apush-7-3', difficulty: 2, type: 'mcq', topic: 'The Great Depression',
          prompt: "Which of the following was a significant underlying economic factor that contributed to the severity of the Great Depression beginning in 1929?",
          choices: ['Overregulation of the banking industry prevented any risk-taking', 'Widespread stock market speculation (often using borrowed money/buying on margin), combined with bank failures and a sharp contraction in consumer spending', 'The federal government had already implemented extensive social safety net programs before 1929', 'A sudden and complete absence of industrial production throughout the 1920s'],
          correct: 1,
          explanation: {
            correct: "Significant stock market speculation, often fueled by buying on margin (borrowed money), created an unstable financial bubble; when the stock market crashed in October 1929, it triggered widespread bank failures (partly due to insufficient regulation and bank runs) and a sharp contraction in consumer spending and business investment, deepening and prolonging the economic downturn into the Great Depression.",
            wrong: { 0: "The banking industry was relatively UNDERregulated during this period (this lack of regulation, not overregulation, contributed to risky practices and subsequent bank failures); stronger banking regulations were actually introduced LATER, as part of New Deal reforms (like the Glass-Steagall Act) in response to this crisis.", 2: "Extensive federal social safety net programs (like Social Security) were established AFTER the Depression began, as part of Franklin Roosevelt's New Deal response starting in 1933, not before 1929.", 3: "The 1920s (before the Depression) were actually characterized by significant industrial growth and production increases, not an absence of industrial activity; the sharp DECLINE in production came as a consequence of the Depression beginning in 1929, not as a pre-existing condition causing it." },
            tempting: "Choice A can tempt students who assume any major economic crisis must result from 'too much regulation constraining the economy,' when the actual historical consensus points to insufficient regulation of speculative practices as a significant contributing factor.",
            commonMistake: "Assuming New Deal-era regulations and safety net programs existed BEFORE the Depression began, rather than correctly understanding they were later REESPONSES to the crisis, not pre-existing conditions.",
            apTip: "Keep a clear chronological distinction: the causes/onset of the Depression (1929 crash, speculation, bank failures, contracting spending) came BEFORE the New Deal; Roosevelt's New Deal programs (Social Security, Glass-Steagall, FDIC, etc.) were the government's RESPONSE, starting in 1933 — mixing up this before/after sequence is a common chronological error."
          }
        },
        {
          id: 'apush-7-4', difficulty: 3, type: 'mcq', topic: 'The New Deal',
          prompt: "Franklin D. Roosevelt\'s New Deal programs represented a significant shift in the federal government\'s role primarily by:",
          choices: ['Reducing federal government involvement in the economy to pre-1920s levels', 'Substantially expanding the federal government\'s role in regulating the economy and providing direct relief and social welfare programs to citizens', 'Eliminating the Federal Reserve System entirely', 'Immediately balancing the federal budget through strict austerity measures'],
          correct: 1,
          explanation: {
            correct: "The New Deal significantly expanded the federal government's role, introducing regulatory agencies and legislation (like the SEC, FDIC, Glass-Steagall Act), direct relief and jobs programs (like the WPA and CCC), and long-term social welfare programs (most notably Social Security), fundamentally shifting expectations about the federal government's responsibility for economic regulation and citizen welfare.",
            wrong: { 0: "This is the opposite of what occurred — the New Deal substantially EXPANDED, not reduced, federal government involvement in the economy compared to earlier, more laissez-faire approaches.", 2: "The Federal Reserve System (established in 1913) continued to exist and function throughout and after the New Deal; it was not eliminated.", 3: "New Deal programs generally involved significant federal SPENDING on relief and jobs programs (deficit spending), rather than strict budget-balancing austerity measures, which would have been counterproductive to the relief-focused goals of these programs." },
            tempting: "None of the distractors accurately describe the New Deal's actual approach if its key programs and philosophy are understood specifically, but general assumptions that any major government response must involve austerity or reduced government size could mislead students unfamiliar with the New Deal's actual expansionary approach.",
            commonMistake: "Not recognizing the New Deal's fundamental shift toward EXPANDED, not reduced, federal government economic involvement and social welfare responsibility.",
            apTip: "Be ready to name specific New Deal programs and categorize them by type (Relief: WPA, CCC providing direct jobs/aid; Recovery: NRA, AAA aiming to stabilize industries/farming; Reform: SEC, FDIC, Social Security establishing long-term regulatory and safety net structures) — this 3 R's framework (Relief, Recovery, Reform) is a standard, testable way to organize New Deal programs on an FRQ."
          }
        },
        {
          id: 'apush-7-5', difficulty: 4, type: 'mcq', topic: 'Japanese American Internment',
          prompt: "The internment of Japanese Americans during World War II, authorized by Executive Order 9066, is most often cited by historians as an example of:",
          choices: ['A necessary and uncontroversial security measure with no lasting legal or ethical significance', 'A significant civil liberties violation driven substantially by wartime hysteria and racial prejudice, later officially acknowledged and repudiated by the US government', 'A policy that was immediately reversed within weeks of being implemented', 'A measure that applied equally to German Americans and Italian Americans in the same proportion as Japanese Americans'],
          correct: 1,
          explanation: {
            correct: "The forced internment of roughly 120,000 Japanese Americans (the majority of whom were US citizens) is widely recognized by historians as a severe civil liberties violation, driven substantially by wartime hysteria, racial prejudice, and unfounded suspicion rather than credible evidence of disloyalty; the US government later formally acknowledged this injustice, including through the Civil Liberties Act of 1988, which provided a formal apology and reparations to survivors.",
            wrong: { 0: "This policy has been extensively studied and is widely regarded by historians and the US government itself (through later formal apology and reparations) as a serious injustice and civil liberties violation, not an uncontroversial or insignificant security measure.", 2: "Internment continued for years, not weeks — many Japanese Americans remained in internment camps until 1945, near the war's end, not a quick, immediately-reversed policy.", 3: "While some German and Italian nationals faced restrictions or individual internment, Japanese Americans were subject to a far more sweeping, race-based mass internment policy that specifically targeted their entire community (including US citizens) at a scale and with a racial specificity not applied to German or Italian American communities." },
            tempting: "Choice D can tempt students who know that German and Italian nationals also faced WWII-era restrictions, without recognizing the significantly different SCALE and specifically race-based targeting that characterized the Japanese American internment policy specifically.",
            commonMistake: "Assuming wartime restrictions were applied equally across all 'enemy nation' ancestry groups, rather than recognizing the specifically severe, race-based, and disproportionate scale of Japanese American internment compared to policies affecting German or Italian Americans.",
            apTip: "For FRQs about civil liberties during wartime, cite the specific later federal acknowledgment (Civil Liberties Act of 1988, formal apology and reparations) as concrete evidence of how this policy has been historically evaluated — this kind of specific, later historical evidence strengthens an analysis of the event's significance and legacy."
          }
        },
        {
          id: 'apush-7-6', difficulty: 5, type: 'mcq', topic: 'Comparative Analysis: WWI and WWII Homefronts',
          prompt: "Historians often compare the domestic (homefront) impacts of World War I and World War II on American society and government. Which best characterizes a significant difference between the two wars\' homefront experiences?",
          choices: ['Both wars had virtually identical effects on government economic power, civil liberties, and the role of women in the workforce', 'World War II\'s homefront mobilization was even more extensive than WWI\'s, involving far larger-scale industrial conversion, a substantially expanded federal economic role, and a more pronounced (though still temporary and contested) shift in women\'s and minorities\' workforce participation', 'World War I had virtually no impact on American domestic life or government', 'World War II resulted in LESS federal government economic involvement than World War I'],
          correct: 1,
          explanation: {
            correct: "While both wars involved some domestic mobilization and civil liberties concerns (like the Espionage/Sedition Acts in WWI and Japanese internment in WWII), World War II's homefront mobilization was generally more extensive and transformative — involving massive industrial conversion to war production, a substantially expanded federal economic role (including significant deficit spending and price/production controls), and a more pronounced, though still temporary and socially contested, shift in women's (e.g., 'Rosie the Riveter') and some minorities' workforce participation, setting important precedents that would influence post-war social and economic developments.",
            wrong: { 0: "While both wars shared some general patterns (some economic mobilization, some civil liberties restrictions), the SCALE and specific character of these effects differed significantly between the two wars, making 'virtually identical' an inaccurate simplification.", 2: "World War I did have meaningful domestic impacts, including the Espionage and Sedition Acts restricting civil liberties, government economic coordination efforts (like the War Industries Board), and some shifts in labor patterns — it was not without domestic significance, even though WWII's impact was generally even more extensive.", 3: "World War II actually involved a substantially LARGER expansion of federal economic involvement (given its larger scale, longer sustained industrial mobilization, and larger federal spending) compared to WWI, not less." },
            tempting: "Choice A represents an oversimplified 'wars are basically the same' framing that ignores meaningful historical differences in SCALE and specific character between the two homefront experiences, which is exactly the kind of nuanced comparison AP US History comparison essays are designed to test.",
            commonMistake: "Treating the domestic homefront impacts of WWI and WWII as essentially interchangeable, rather than recognizing the specific differences in scale, scope, and lasting significance between the two wartime mobilization efforts.",
            apTip: "College-level insight: for a strong AP US History comparison essay on this topic, cite SPECIFIC comparative evidence for both wars (WWI: Espionage/Sedition Acts, War Industries Board, some female/minority labor shifts; WWII: much larger industrial conversion, women's/'Rosie the Riveter' expanded workforce role, Japanese American internment, larger deficit spending) rather than treating either war's homefront experience as a monolithic, undifferentiated whole."
          }
        }
      ]
    },
    {
      id: 4,
      name: 'Period 4: 1800–1848',
      questions: [
        {
          id: 'apush-4-1', difficulty: 1, type: 'mcq', topic: 'The Market Revolution',
          prompt: "The Market Revolution of the early-to-mid 19th century in the United States was characterized by:",
          choices: ['A decline in transportation infrastructure and interregional trade', 'Significant improvements in transportation (canals, railroads) and manufacturing, which integrated regional economies into a broader national market', 'A complete rejection of any market-based economic activity', 'An economy based entirely on subsistence farming, with no significant trade'],
          correct: 1,
          explanation: {
            correct: "The Market Revolution involved significant transportation improvements (canals like the Erie Canal, expanding railroad networks) and growing manufacturing/industrialization, which together integrated previously more isolated regional economies into a broader, interconnected national market for goods, labor, and capital.",
            wrong: { 0: "This period saw significant IMPROVEMENT and expansion, not decline, in transportation infrastructure (canals, railroads, roads), which was central to enabling the broader Market Revolution.", 2: "This period saw a significant EXPANSION of market-based economic activity, not a rejection of it; the 'Market Revolution' name itself reflects this dramatic expansion.", 3: "The Market Revolution specifically represented a shift AWAY from purely localized subsistence farming toward more market-oriented, interconnected commercial agriculture and manufacturing." },
            tempting: "None of the distractors accurately describe the Market Revolution's actual defining characteristics if the period's economic transformation is understood specifically, but assuming continuity rather than significant economic transformation during this period is a common oversimplification.",
            commonMistake: "Not recognizing the Market Revolution as a significant, transformative economic shift (via transportation and manufacturing improvements) integrating previously separate regional economies into a broader national market.",
            apTip: "Be ready to name specific developments driving the Market Revolution (Erie Canal, expanding railroad networks, textile mill industrialization in New England, cotton gin's impact on Southern agriculture) as concrete evidence connecting this economic transformation to its specific technological and infrastructural drivers."
          }
        },
        {
          id: 'apush-4-2', difficulty: 2, type: 'mcq', topic: 'Jacksonian Democracy',
          prompt: "The era of \"Jacksonian Democracy\" in the 1820s-1830s is associated with which of the following political developments?",
          choices: ['A significant restriction of voting rights to only wealthy property owners', 'An expansion of voting rights for white men (removing many remaining property requirements), alongside increased emphasis on popular participation in politics', 'The complete abolition of political parties', 'A dramatic expansion of federal government power over the economy, with no opposition'],
          correct: 1,
          explanation: {
            correct: "Jacksonian Democracy is associated with an expansion of voting rights for white men (many states removed remaining property ownership requirements for voting during this period), alongside a broader cultural emphasis on popular political participation, mass political parties, and appeals to the 'common man' voter (though these expanded rights notably did NOT extend to women, Native Americans, or enslaved/free Black Americans).",
            wrong: { 0: "This is the opposite of the actual trend — voting rights EXPANDED (removing property requirements) for white men during this era, rather than becoming more restricted.", 2: "This era actually saw the STRENGTHENING and expansion of mass political party organization and activity (including the formation of the Democratic Party under Jackson), not the abolition of political parties.", 3: "Jackson's own political philosophy and actions (such as his opposition to the Second Bank of the United States) often emphasized SKEPTICISM of centralized federal economic power, and his policies (like the Bank War) were highly contested and opposed by others (like the emerging Whig Party), not universally expanded federal power without any opposition." },
            tempting: "None of the distractors accurately describe Jacksonian Democracy's actual key features if this era is understood specifically, but assuming any 'democracy'-named era must universally have expanded rights for everyone (rather than specifically for white men, with continued or worsening exclusion of other groups) is an important nuance to get right.",
            commonMistake: "Assuming Jacksonian Democracy's expansion of political participation applied universally to all groups, rather than recognizing it specifically expanded rights for white men while other groups (women, Native Americans, Black Americans) remained excluded or, in some cases (like Native Americans facing Indian Removal), faced worsening treatment during this same period.",
            apTip: "Always qualify claims about Jacksonian-era democratic expansion specifically as applying to WHITE MEN, and be ready to discuss the stark contrast with this era's treatment of Native Americans (Indian Removal Act, Trail of Tears) and continued exclusion of women and Black Americans from these same expanding political rights — this nuance is frequently expected in sophisticated FRQ responses on this period."
          }
        },
        {
          id: 'apush-4-3', difficulty: 2, type: 'mcq', topic: 'Indian Removal',
          prompt: "The Indian Removal Act of 1830, and the subsequent forced relocation of Native American nations (such as the Cherokee\'s \"Trail of Tears\"), primarily reflected:",
          choices: ['A mutually beneficial, voluntary agreement fully supported by all affected Native American nations', 'Federal policy prioritizing white settler demands for land (particularly in the Southeast) over Native American treaty rights and legal protections, resulting in forced displacement and significant loss of life', 'A policy that was immediately and universally opposed by all branches of the federal government', 'An expansion of Native American sovereignty and territorial control'],
          correct: 1,
          explanation: {
            correct: "The Indian Removal Act and subsequent forced relocations (like the Cherokee Trail of Tears) reflected federal policy prioritizing white settlers' demands for valuable Native American land (particularly in the Southeast, driven partly by the discovery of gold on Cherokee land and demand for cotton-growing land) over Native American nations' treaty rights and legal protections, resulting in forced, often brutal displacement and substantial loss of life during these relocations.",
            wrong: { 0: "This removal was NOT voluntary or mutually beneficial; it was forced upon Native American nations, including the Cherokee, who notably fought the policy through legal channels (including the Supreme Court case Worcester v. Georgia) and were forcibly removed despite these efforts.", 2: "While the Supreme Court (in Worcester v. Georgia) actually ruled in favor of Cherokee sovereignty, President Jackson notably did NOT enforce this ruling, and the executive branch actively pursued and enforced the removal policy — so this policy was not universally opposed across all branches of government in practice.", 3: "This policy resulted in the DIMINISHMENT and forced relocation of Native American territorial control (moving nations to reservations in the West, notably Indian Territory), not an expansion of Native sovereignty or territory." },
            tempting: "None of the distractors accurately describe Indian Removal's actual nature and consequences if this history is known specifically, but underestimating the federal government's active role in enforcing this policy despite legal challenges is a common oversimplification.",
            commonMistake: "Not knowing the specific legal and political conflict surrounding Indian Removal (particularly the Supreme Court's Worcester v. Georgia ruling in favor of Cherokee sovereignty, followed by Jackson's refusal to enforce it), which demonstrates the complex, contested nature of this policy within the federal government itself.",
            apTip: "Cite the specific legal case Worcester v. Georgia (1832) explicitly on FRQs about Indian Removal — the Supreme Court's ruling in favor of Cherokee sovereignty, followed by the executive branch's failure to enforce it and subsequent forced removal anyway, is a powerful, specific illustration of the gap between legal rulings and actual policy enforcement in this period."
          }
        },
        {
          id: 'apush-4-4', difficulty: 3, type: 'mcq', topic: 'Antebellum Reform Movements',
          prompt: "The antebellum reform movements of the early-to-mid 19th century (including temperance, education reform, and abolitionism) were significantly influenced by which broader religious/cultural movement?",
          choices: ['The Enlightenment\'s emphasis on strict religious skepticism', 'The Second Great Awakening, whose religious revivalism and emphasis on individual moral responsibility and the possibility of societal perfection inspired many reformers to address perceived social ills', 'A general decline in religious sentiment and institutional religious participation throughout this period', 'Reform movements during this period were completely secular and had no connection whatsoever to religious belief'],
          correct: 1,
          explanation: {
            correct: "The Second Great Awakening's religious revivalism, with its emphasis on individual moral responsibility, the possibility of achieving a more perfect (or 'perfected') society, and active engagement in addressing sin and social problems, significantly inspired and motivated many antebellum reform movements, including temperance, education reform, prison reform, and abolitionism.",
            wrong: { 0: "The Enlightenment's skepticism-oriented themes are a different intellectual movement from an earlier period; the SPECIFIC religious revivalism directly connected to antebellum reform movements is the Second Great Awakening, not Enlightenment skepticism.", 2: "This period actually saw a significant INCREASE (not decline) in religious revivalism and institutional religious participation, particularly through the widespread revival meetings and new denominational growth associated with the Second Great Awakening.", 3: "Many antebellum reform movements were explicitly and substantially motivated by religious conviction (stemming from Second Great Awakening revivalism), not purely secular in origin or motivation." },
            tempting: "None of the distractors accurately connect antebellum reform to its actual, well-documented religious inspiration if this connection is known specifically, but underestimating religion's role in shaping seemingly 'secular' reform movements (like abolitionism or temperance) is a common oversimplification.",
            commonMistake: "Not connecting antebellum reform movements to their significant religious motivation and inspiration from the Second Great Awakening, treating these movements as if they arose in a purely secular context.",
            apTip: "Explicitly connect the Second Great Awakening to SPECIFIC antebellum reform movements on FRQs — for example, many abolitionists framed slavery as a moral SIN requiring active reform, directly reflecting the Second Great Awakening's emphasis on individual moral responsibility and active engagement in addressing societal wrongs, rather than treating these reform movements as disconnected from their religious context."
          }
        },
        {
          id: 'apush-4-5', difficulty: 4, type: 'mcq', topic: 'Sectionalism & the Missouri Compromise',
          prompt: "The Missouri Compromise of 1820 attempted to address escalating sectional tensions over slavery\'s expansion by:",
          choices: ['Immediately abolishing slavery throughout the entire United States', 'Admitting Missouri as a slave state and Maine as a free state (maintaining the sectional balance in the Senate), while prohibiting slavery in the remaining Louisiana Purchase territory north of the 36°30\' line', 'Banning any future territorial expansion of the United States', 'Granting full political representation in Congress to enslaved people'],
          correct: 1,
          explanation: {
            correct: "The Missouri Compromise addressed the immediate crisis over Missouri's admission by admitting Missouri as a slave state and Maine as a free state simultaneously (preserving the existing sectional balance of free and slave states in the Senate), while also establishing a geographic line (36°30' latitude) prohibiting slavery in the remaining Louisiana Purchase territory north of that line, attempting to provide a temporary, structural solution to the growing sectional conflict over slavery's expansion into new territories.",
            wrong: { 0: "The Missouri Compromise did NOT abolish slavery anywhere it already existed; it specifically ADMITTED Missouri as a new slave state and only restricted slavery's future expansion in specific NEW territories north of the compromise line.", 2: "The compromise didn't ban future territorial expansion generally; it specifically addressed how slavery would (or wouldn't) be permitted within the ALREADY-ACQUIRED Louisiana Purchase territory as it became organized into new states.", 3: "The Three-Fifths Compromise (part of the original Constitution) addressed enslaved people's partial counting for representation purposes; the Missouri Compromise specifically addressed slavery's GEOGRAPHIC expansion into new territories, a different, though related, sectional issue." },
            tempting: "None of the distractors accurately describe the Missouri Compromise's actual specific provisions if this history is known precisely, but conflating this compromise with other slavery-related constitutional provisions or later compromises (like the Compromise of 1850) is a common source of confusion.",
            commonMistake: "Confusing the Missouri Compromise's SPECIFIC provisions (simultaneous slave/free state admission, 36°30' line) with other, different slavery-related compromises or provisions from other historical periods (like the Three-Fifths Compromise or the later Compromise of 1850).",
            apTip: "Memorize the Missouri Compromise's two specific key provisions together: (1) Missouri admitted as a slave state, Maine as a free state (maintaining Senate balance), and (2) the 36°30' line prohibiting slavery in the remaining Louisiana Purchase territory to the north — both halves are frequently tested together as this compromise's defining structure."
          }
        },
        {
          id: 'apush-4-6', difficulty: 5, type: 'mcq', topic: 'Contradictions in Jacksonian-Era Democracy',
          prompt: "Historians often highlight a significant tension in the Jacksonian era between its rhetoric of expanding democracy for the \"common man\" and its actual treatment of certain groups. Which best illustrates this documented tension?",
          choices: ['Jacksonian democracy consistently and without exception expanded rights and protections for all groups in American society equally', 'While expanding political participation for white men, the Jacksonian era simultaneously intensified the forced removal and displacement of Native Americans and saw the continued, deeply entrenched institution of slavery for Black Americans, revealing that this era\'s democratic expansion was selectively and racially bounded', 'There is no meaningful tension to analyze, since Jacksonian democracy and Native American/Black American history are considered entirely separate, unrelated topics', 'Jacksonian era policies had no significant or lasting effect on Native American or Black American populations whatsoever'],
          correct: 1,
          explanation: {
            correct: "This era's genuine historical tension is that its celebrated expansion of political participation and rights was specifically and narrowly bounded by race and gender — it expanded meaningfully for white men while simultaneously the federal government intensified Native American removal policies (Indian Removal Act, Trail of Tears) and slavery remained a deeply entrenched, expanding institution for Black Americans, revealing that Jacksonian 'democracy' was selectively defined and applied rather than a universal expansion of rights and protections.",
            wrong: { 0: "This directly contradicts well-documented historical evidence of this era's simultaneous rights expansion (for white men) alongside intensified oppression (Indian Removal, continued/expanding slavery) for other specific groups — the actual pattern was selective, not universal.", 2: "These topics are directly and significantly historically connected, precisely because they occurred within and were shaped by the same broader political era and its underlying ideological assumptions about who counted as full political participants; treating them as unrelated ignores this important historical connection.", 3: "Jacksonian-era policies had PROFOUND, well-documented, and often devastating effects on Native American populations (forced removal, loss of life and land) and continued to entrench slavery's expansion for Black Americans — the impact was substantial, not absent." },
            tempting: "Choice A represents an overly celebratory, incomplete narrative of this era that ignores well-documented, significant historical evidence of simultaneous racial exclusion and oppression occurring alongside expanded rights for white men specifically.",
            commonMistake: "Accepting an incomplete, celebratory narrative of Jacksonian democratic expansion without examining which SPECIFIC groups actually benefited and which groups simultaneously experienced worsening treatment during this same period.",
            apTip: "For a sophisticated FRQ response analyzing this era, explicitly hold both halves of this tension together: expanded suffrage/political participation for white men on one hand, and Indian Removal plus continued/expanding slavery on the other — presenting BOTH sides with specific evidence (not just one, celebratory or one, purely critical narrative) reflects the kind of complexity and nuance that earns the highest-level historical thinking credit."
          }
        }
      ]
    },
    {
      id: 5,
      name: 'Period 5: 1844–1877',
      questions: [
        {
          id: 'apush-5-1', difficulty: 1, type: 'mcq', topic: 'Manifest Destiny',
          prompt: "The concept of \"Manifest Destiny,\" widely popular in the 1840s, referred to the belief that:",
          choices: ['The United States should isolate itself entirely from world affairs', 'The United States was destined by God or providence to expand its territory across the North American continent', 'Slavery should be immediately abolished throughout the nation', 'The federal government should return all western territories to Native American control'],
          correct: 1,
          explanation: {
            correct: "Manifest Destiny was the widely held 19th-century belief that American expansion across the North American continent was inevitable, justified, and even divinely ordained, providing ideological justification for westward expansion, including the Mexican-American War and various displacement policies toward Native Americans.",
            wrong: { 0: "Manifest Destiny specifically promoted ACTIVE territorial expansion, the opposite of isolationist withdrawal from continental affairs.", 2: "Manifest Destiny was primarily about territorial expansion, not a position on slavery's abolition; in fact, debates over whether new territories would permit or prohibit slavery became a major, contentious consequence of this expansion.", 3: "Manifest Destiny ideology was used to JUSTIFY taking land from Native Americans through displacement and conflict, not to return territory to Native American control." },
            tempting: "None of the distractors closely match Manifest Destiny's actual meaning if the term is understood specifically, but vague guesses based on the era's general themes (slavery, Native Americans) without knowing the term's precise definition could lead to a plausible-sounding but incorrect choice.",
            commonMistake: "Not having Manifest Destiny's precise definition (belief in inevitable, justified continental expansion) clearly memorized, leading to confusion with other related but distinct themes of the era.",
            apTip: "Connect Manifest Destiny explicitly to its specific consequences: the Mexican-American War (1846-1848) and resulting territorial acquisition, the Oregon Trail migration, and its role in intensifying sectional conflict over whether new territories would be slave or free."
          }
        },
        {
          id: 'apush-5-2', difficulty: 2, type: 'mcq', topic: 'The Compromise of 1850',
          prompt: "The Compromise of 1850 attempted to address escalating sectional tensions by including which controversial provision?",
          choices: ['The immediate abolition of slavery in all US territories', 'A stronger Fugitive Slave Act, requiring citizens (including in free states) to assist in the capture and return of escaped enslaved people', 'The permanent prohibition of any new states joining the Union', 'The complete secession of Southern states from the Union'],
          correct: 1,
          explanation: {
            correct: "The Compromise of 1850 included a strengthened Fugitive Slave Act, which required citizens throughout the country — including in free states — to assist in capturing and returning escaped enslaved people, a provision deeply controversial in the North and one that significantly intensified sectional tensions rather than resolving them.",
            wrong: { 0: "The Compromise did not abolish slavery in all territories; it included provisions like popular sovereignty for some territories (allowing residents to vote on slavery's status) rather than blanket abolition.", 2: "The Compromise did allow new states to join the Union (California was admitted as a free state as part of this very compromise); it did not permanently prohibit new states.", 3: "The Compromise of 1850 was an attempt to PREVENT secession and hold the Union together through negotiated concessions to both sections; it was not itself an act of secession." },
            tempting: "None of the distractors accurately describe the Compromise's actual provisions if the agreement's specific terms are known, but general assumptions that a 'compromise' must be moderate or resolve tension fully can obscure how genuinely controversial specific provisions like the Fugitive Slave Act actually were.",
            commonMistake: "Assuming a historical 'compromise' by definition eased tensions for both sides equally, rather than recognizing that specific provisions (like the stronger Fugitive Slave Act) were deeply controversial and actually intensified sectional conflict.",
            apTip: "Be ready to list the Compromise of 1850's key specific provisions (California admitted as a free state, popular sovereignty for Utah/New Mexico territories, stronger Fugitive Slave Act, abolition of the slave trade—but not slavery itself—in Washington DC) — this compromise is frequently tested as a failed attempt to permanently resolve sectional tensions before the Civil War."
          }
        },
        {
          id: 'apush-5-3', difficulty: 2, type: 'mcq', topic: 'Causes of the Civil War',
          prompt: "Historians widely agree that the fundamental, underlying cause of the Civil War was:",
          choices: ['A dispute over tariff rates alone, unrelated to slavery', 'The deep sectional conflict over slavery, including its expansion into new territories, which underlay related disputes over states\' rights and political power', 'A disagreement over which city should serve as the national capital', 'A conflict between the US and a foreign nation over territorial boundaries'],
          correct: 1,
          explanation: {
            correct: "While Southern secessionists often framed their cause in terms of 'states' rights,' the historical evidence (including Southern states' own secession declarations) shows that the underlying, fundamental issue was the preservation and expansion of slavery, particularly the question of whether new territories and states would permit or prohibit it — this sectional conflict over slavery is what most fundamentally divided North and South.",
            wrong: { 0: "While tariff disputes (like the Nullification Crisis of the 1830s) were real sources of earlier sectional tension, they are not considered the fundamental, primary cause of the Civil War by most historians; slavery's expansion was the more central driving issue by the 1850s-60s.", 2: "There was no such dispute over the location of the national capital driving the Civil War; this is not a real historical cause of the conflict.", 3: "The Civil War was fundamentally a DOMESTIC/internal conflict between the United States government and Southern states that seceded, not a conflict with a foreign nation over international boundaries." },
            tempting: "Choice A can tempt students who've heard 'states' rights' framed as the cause without examining what RIGHT specifically was being contested (the right to maintain and expand slavery), or who conflate this later 'states' rights' framing with an earlier, separate tariff-based sectional conflict.",
                    commonMistake: "Accepting the 'states' rights' framing of the Civil War's cause without examining the SPECIFIC right being contested (slavery), or confusing this conflict with the earlier, distinct Nullification Crisis over tariffs.",
            apTip: "For FRQs on Civil War causation, cite specific primary source evidence when possible (such as Southern states' own secession declarations, which explicitly named the preservation of slavery as their central grievance) to support the argument that slavery, not an abstract states' rights principle alone, was the fundamental cause."
          }
        },
        {
          id: 'apush-5-4', difficulty: 3, type: 'mcq', topic: 'The Emancipation Proclamation',
          prompt: "The Emancipation Proclamation, issued by Abraham Lincoln in 1863, specifically:",
          choices: ['Immediately freed all enslaved people throughout the entire United States, including in border states loyal to the Union', 'Declared enslaved people free in Confederate states still in rebellion, while not immediately applying to slaveholding border states loyal to the Union, and reframed the war\'s purpose to include ending slavery', 'Ended the Civil War immediately upon its issuance', 'Was primarily focused on granting voting rights to formerly enslaved men'],
          correct: 1,
          explanation: {
            correct: "The Emancipation Proclamation specifically declared enslaved people free in Confederate territories still in rebellion against the Union (areas the Union didn't currently control, limiting its immediate practical effect), while notably NOT applying to slaveholding border states that remained loyal to the Union, reflecting Lincoln's careful political calculation; the Proclamation also strategically reframed the war's purpose to explicitly include ending slavery, not just preserving the Union.",
            wrong: { 0: "The Proclamation specifically did NOT apply to loyal border states (like Maryland, Kentucky, Missouri, Delaware) where slavery still legally continued at that point — full, nationwide abolition came later with the 13th Amendment (1865), not this 1863 proclamation.", 2: "The war continued for roughly two more years after the Proclamation's issuance (until 1865); it did not end the war immediately.", 3: "Voting rights for formerly enslaved men were addressed later, primarily through the 15th Amendment (1870), not as the primary focus of the Emancipation Proclamation itself, which centered on the status of enslaved people during the ongoing war." },
            tempting: "Choice A is a very common misconception — many students assume the Emancipation Proclamation immediately and universally ended slavery everywhere, when its actual legal scope was more limited and strategically targeted specifically at rebelling Confederate territory.",
            commonMistake: "Assuming the Emancipation Proclamation immediately and universally abolished slavery everywhere in the US, rather than understanding its more limited, strategic scope (Confederate territory only) and its actual role in reframing the war's purpose, with full abolition coming later via the 13th Amendment.",
            apTip: "Keep the timeline and scope precise: Emancipation Proclamation (1863) applied only to Confederate territory in rebellion and reframed the war's purpose; the 13th Amendment (1865) is what constitutionally and comprehensively abolished slavery throughout the entire United States — these are two distinct, sequential steps frequently conflated."
          }
        },
        {
          id: 'apush-5-5', difficulty: 4, type: 'mcq', topic: 'Reconstruction Amendments',
          prompt: "Which of the following correctly matches a Reconstruction-era constitutional amendment with its primary provision?",
          choices: ['13th Amendment: granted voting rights regardless of race; 14th Amendment: abolished slavery', '13th Amendment: abolished slavery; 14th Amendment: granted citizenship and equal protection under the law; 15th Amendment: prohibited denying voting rights based on race', '14th Amendment: abolished slavery; 15th Amendment: granted citizenship', '13th, 14th, and 15th Amendments all address exclusively economic policy, unrelated to civil rights'],
          correct: 1,
          explanation: {
            correct: "The three Reconstruction Amendments, in order, established: 13th Amendment (1865) — abolished slavery throughout the United States; 14th Amendment (1868) — granted citizenship to all persons born or naturalized in the US (including formerly enslaved people) and guaranteed equal protection under the law; 15th Amendment (1870) — prohibited denying citizens the right to vote based on race, color, or previous condition of servitude.",
            wrong: { 0: "This reverses the 13th and 14th Amendments' actual provisions — the 13th abolished slavery (not voting rights), while citizenship/equal protection came from the 14th, and voting rights specifically came from the 15th, not directly the 14th.", 2: "This misattributes abolition of slavery to the 14th Amendment (that was actually the 13th) and citizenship to the 15th Amendment (that was actually the 14th) — both amendments are mismatched with their actual provisions.", 3: "These three amendments are specifically and centrally about CIVIL RIGHTS issues (ending slavery, establishing citizenship/equal protection, and voting rights), not primarily economic policy." },
            tempting: "Choices A and C both represent plausible-sounding but scrambled versions of the correct pairings, reflecting the common difficulty of keeping three sequentially-numbered amendments' specific provisions straight.",
            commonMistake: "Mixing up which specific provision (abolition, citizenship/equal protection, voting rights) belongs to which of the three sequentially numbered Reconstruction amendments (13th, 14th, 15th).",
            apTip: "Use a simple memory anchor tied to the numbers themselves: 13 (abolish slavery — a foundational, first step), 14 (citizenship and equal protection — establishing legal status), 15 (voting rights — the final piece extending political participation) — reciting them in this exact numerical and thematic order helps lock in the correct pairings."
          }
        },
        {
          id: 'apush-5-6', difficulty: 5, type: 'mcq', topic: 'Reconstruction: Successes and Failures',
          prompt: "Historians often characterize Reconstruction (1865-1877) as a period of significant, though ultimately incomplete and reversed, progress. Which best supports this characterization?",
          choices: ['Reconstruction achieved permanent, unchallenged racial equality throughout the United States with no subsequent setbacks', 'Reconstruction saw real gains, including the Reconstruction Amendments, Black political participation, and federal enforcement efforts, but these gains were significantly undermined by the end of federal enforcement in 1877, the rise of Jim Crow laws, and widespread racial violence and intimidation', 'Reconstruction had no lasting effects or significance of any kind on American society', 'The federal government\'s role during Reconstruction remained exactly the same throughout the entire period from 1865 to 1877 with no notable changes in policy or enforcement'],
          correct: 1,
          explanation: {
            correct: "Reconstruction achieved genuine, significant progress — including the constitutional Reconstruction Amendments, meaningful Black political participation (including Black officeholders), and federal military/political enforcement of these new rights — but this progress was substantially undermined and reversed following the Compromise of 1877 (ending federal troop presence and enforcement), the subsequent rise of Jim Crow segregation laws, and pervasive racial violence and voter intimidation that suppressed the political and civil gains made during Reconstruction.",
            wrong: { 0: "This significantly overstates Reconstruction's permanence and completeness; the subsequent rise of Jim Crow laws and disenfranchisement directly contradicts a claim of permanent, unchallenged equality.", 2: "Reconstruction had substantial and lasting significance — including constitutional amendments that remain part of the Constitution today, and its complex legacy of both progress and reversal remains a significant subject of historical study.", 3: "Federal policy and enforcement DID change significantly over this period — early, more assertive federal enforcement (including military presence in the South) gradually weakened over time, particularly after the Compromise of 1877, rather than remaining constant throughout." },
            tempting: "Choice A represents an overly optimistic oversimplification, while choice C represents an overly dismissive oversimplification — the actual, historically accurate characterization requires holding BOTH the genuine progress AND its significant, documented reversal in mind simultaneously.",
            commonMistake: "Characterizing Reconstruction as either a simple, complete success or a complete failure/non-event, rather than recognizing the more historically accurate, nuanced pattern of real initial progress followed by significant, documented reversal.",
            apTip: "College-level insight: for a sophisticated Reconstruction essay, explicitly discuss BOTH dimensions — genuine achievements (specific amendments, Black officeholders, federal enforcement efforts like the Enforcement Acts) AND their subsequent undermining (Compromise of 1877, Jim Crow, racial violence, disenfranchisement) — this balanced, evidence-based complexity is exactly what earns the highest-level analysis points on AP US History's DBQ and LEQ rubrics."
          }
        }
      ]
    },
    {
      id: 8,
      name: 'Period 8: 1945–1980',
      questions: [
        {
          id: 'apush-8-1', difficulty: 1, type: 'mcq', topic: 'The Cold War',
          prompt: "The Cold War, which dominated US foreign policy from the late 1940s through the early 1990s, was primarily characterized by:",
          choices: ['Direct, large-scale military conflict between the United States and the Soviet Union', 'An intense ideological, political, and military rivalry between the US and Soviet Union, generally avoiding direct armed conflict between the two superpowers themselves, while often involving proxy conflicts in other regions', 'Close political and military cooperation between the US and Soviet Union throughout this entire period', 'A conflict focused exclusively on economic trade disputes, unrelated to political ideology'],
          correct: 1,
          explanation: {
            correct: "The Cold War was defined by intense ideological (capitalism vs. communism), political, and military rivalry and competition between the US and Soviet Union, generally avoiding DIRECT armed conflict between the two superpowers themselves (given the catastrophic risk of nuclear war), while often playing out through proxy conflicts and interventions in other regions (such as Korea, Vietnam, and various Cold War-era conflicts in Africa, Latin America, and elsewhere).",
            wrong: { 0: "The defining, notable feature of the Cold War was specifically the AVOIDANCE of direct large-scale military conflict between the US and USSR themselves, given the catastrophic risks of potential nuclear war; conflict instead occurred through proxy wars and indirect competition.", 2: "This period was characterized by significant RIVALRY and tension (not cooperation) between the US and Soviet Union, despite some limited moments of specific diplomatic engagement (like arms control negotiations) within this broader adversarial relationship.", 3: "While economic competition was one dimension, the Cold War was fundamentally and primarily an IDEOLOGICAL conflict (capitalism/democracy vs. communism) with major political and military dimensions, not simply an economic trade dispute." },
            tempting: "None of the distractors accurately describe the Cold War's actual defining character if the period's history is understood specifically, but oversimplifying it as either a hot (direct military) war or an economic-only dispute misses its defining ideological/indirect nature.",
            commonMistake: "Not recognizing the Cold War's specific defining feature — intense rivalry while generally avoiding DIRECT superpower military conflict — and instead assuming it involved direct large-scale warfare between the US and USSR themselves.",
            apTip: "Be ready to name specific Cold War proxy conflicts and events (Korean War, Vietnam War, Cuban Missile Crisis, Berlin Airlift/Wall) as concrete evidence of how this ideological rivalry played out through indirect means rather than direct superpower conflict — these specific examples are frequently expected in FRQ responses on this era."
          }
        },
        {
          id: 'apush-8-2', difficulty: 2, type: 'mcq', topic: 'The Civil Rights Movement',
          prompt: "The Civil Rights Movement of the 1950s-1960s employed which of the following strategies to challenge racial segregation and discrimination?",
          choices: ['Exclusively armed resistance, with no other tactics used', 'A combination of nonviolent civil disobedience (sit-ins, boycotts, marches), legal challenges through the courts, and legislative advocacy', 'Complete avoidance of any legal or political engagement with the federal government', 'Exclusive reliance on international diplomatic pressure, with no domestic activism'],
          correct: 1,
          explanation: {
            correct: "The Civil Rights Movement employed a strategic combination of nonviolent civil disobedience (such as the Montgomery Bus Boycott, sit-ins, and the March on Washington), legal challenges through the court system (such as Brown v. Board of Education), and legislative/political advocacy (contributing to landmark legislation like the Civil Rights Act of 1964 and Voting Rights Act of 1965).",
            wrong: { 0: "While some strands of the broader Black freedom struggle (including later Black Power movement elements) engaged with different tactical approaches, the MAINSTREAM Civil Rights Movement of this period (associated with leaders like Martin Luther King Jr.) is specifically and primarily characterized by its strategic commitment to NONVIOLENT civil disobedience, not armed resistance as its primary or exclusive tactic.", 2: "The movement actively and directly engaged with legal and political processes (court cases, legislative advocacy, direct engagement with federal officials) as a core part of its strategy, not an avoidance of such engagement.", 3: "While international attention and pressure did play some role, the movement's primary strategy centered on sustained DOMESTIC activism (direct action, legal challenges, legislative advocacy), not exclusive reliance on international diplomacy." },
            tempting: "None of the distractors accurately capture the actual multi-pronged strategic approach if the movement's history is understood specifically, but oversimplifying the movement into a single tactic (only protest, or only legal action) misses its genuinely coordinated, multi-front strategic approach.",
            commonMistake: "Reducing the Civil Rights Movement to a single tactical approach (only nonviolent protest, or only legal action) rather than recognizing its genuinely coordinated combination of direct action, legal strategy, and legislative advocacy working together.",
            apTip: "Be ready to name SPECIFIC events/strategies across these different categories on an FRQ — direct action (Montgomery Bus Boycott, Greensboro sit-ins, March on Washington), legal strategy (Brown v. Board of Education, NAACP Legal Defense Fund), and legislative outcomes (Civil Rights Act of 1964, Voting Rights Act of 1965) — showing this multi-pronged approach demonstrates fuller understanding than naming just one tactic alone."
          }
        },
        {
          id: 'apush-8-3', difficulty: 2, type: 'mcq', topic: 'Containment Policy',
          prompt: "The US policy of \"containment,\" articulated in the early Cold War period, referred to the strategy of:",
          choices: ['Actively invading and occupying communist countries to forcibly remove their governments', 'Preventing the further spread of communism to new countries and regions, without necessarily trying to roll back communism where it already existed', 'Providing unconditional economic and military support to the Soviet Union', 'Withdrawing completely from any international involvement or alliances'],
          correct: 1,
          explanation: {
            correct: "Containment, articulated by figures like George Kennan and adopted as official US Cold War policy, specifically referred to the strategy of preventing communism's further expansion into NEW countries and regions (through economic aid, military alliances, and, when necessary, military intervention), generally without directly attempting to forcibly remove or 'roll back' communist governments where they were already established.",
            wrong: { 0: "Containment specifically focused on PREVENTING NEW communist expansion, not on invading and forcibly removing already-established communist governments (a different, more aggressive strategy sometimes called 'rollback,' which was debated but not the primary official containment policy).", 2: "Containment was specifically a strategy OPPOSING Soviet/communist expansion, not providing support to the Soviet Union; these are opposite approaches.", 3: "Containment specifically involved ACTIVE international engagement (alliances like NATO, economic aid like the Marshall Plan, and military interventions when deemed necessary) to prevent communist expansion, the opposite of withdrawing from international involvement." },
            tempting: "None of the distractors accurately describe containment's actual specific meaning if the policy is understood precisely, but confusing containment with more aggressive 'rollback' strategies, or with isolationism, are both plausible sources of error.",
            commonMistake: "Confusing containment (preventing NEW communist expansion) with a more aggressive 'rollback' strategy (actively removing existing communist governments), or with isolationism (withdrawing from international involvement) — containment specifically involves ACTIVE international engagement focused on prevention of further spread.",
            apTip: "Connect containment explicitly to its specific policy applications on FRQs — the Marshall Plan (economic aid to prevent communism's appeal in war-torn Europe), the Truman Doctrine (supporting countries resisting communist takeover), and military interventions in Korea and Vietnam (preventing communist expansion in Asia) — these are the concrete applications of the containment strategy."
          }
        },
        {
          id: 'apush-8-4', difficulty: 3, type: 'mcq', topic: 'The Great Society',
          prompt: "President Lyndon B. Johnson\'s \"Great Society\" programs of the 1960s primarily aimed to:",
          choices: ['Reduce the size and scope of the federal government\'s role in social welfare', 'Expand federal government programs addressing poverty, healthcare access (through Medicare and Medicaid), education, and civil rights, significantly building on New Deal-era precedents', 'Focus exclusively on foreign policy and military expansion, with no domestic policy component', 'Eliminate all federal social welfare programs established during the New Deal'],
          correct: 1,
          explanation: {
            correct: "The Great Society represented a significant expansion of federal government programs addressing poverty (War on Poverty initiatives), healthcare access (creating Medicare for the elderly and Medicaid for low-income individuals), education funding, and civil rights protections, building substantially on and expanding the federal government's social welfare role established earlier during the New Deal.",
            wrong: { 0: "This is the opposite of the Great Society's actual approach — it significantly EXPANDED (not reduced) federal government involvement in social welfare programs.", 2: "While Johnson's presidency is also significantly associated with foreign policy (particularly the Vietnam War), the Great Society SPECIFICALLY refers to his substantial DOMESTIC policy agenda, not foreign policy.", 3: "The Great Society BUILT ON and expanded New Deal-era precedents and programs, rather than eliminating them; it represented a continuation and significant expansion of federal social welfare commitment, not a rollback." },
            tempting: "None of the distractors accurately describe the Great Society's actual expansionary domestic policy focus if this history is known specifically, but confusing Johnson's domestic Great Society agenda with his foreign policy actions (Vietnam) is a plausible source of error.",
            commonMistake: "Confusing or conflating Johnson's domestic Great Society agenda with his foreign policy actions (particularly the Vietnam War), when these represent distinct (though simultaneously occurring) dimensions of his presidency.",
            apTip: "Be ready to name specific Great Society programs on an FRQ — Medicare (healthcare for the elderly), Medicaid (healthcare for low-income individuals), the Elementary and Secondary Education Act, and various War on Poverty initiatives — and explicitly connect this expansion to its New Deal precedent (Social Security), showing the throughline of expanding federal social welfare responsibility across these two distinct eras."
          }
        },
        {
          id: 'apush-8-5', difficulty: 4, type: 'mcq', topic: 'Vietnam War & Domestic Dissent',
          prompt: "The Vietnam War (1960s-early 1970s) generated significant domestic political controversy and opposition in the United States, particularly due to:",
          choices: ['Universal, unanimous public and political support for the war throughout its entire duration', 'Growing public skepticism fueled by factors such as the war\'s human and financial costs, media coverage bringing the war\'s realities into American homes, the draft\'s disproportionate impact on certain groups, and revelations (like the Pentagon Papers) suggesting the government had misled the public about the war\'s progress', 'A complete absence of any media coverage of the conflict', 'Universal agreement among political leaders about the war\'s strategic necessity and prospects for success'],
          correct: 1,
          explanation: {
            correct: "Domestic opposition to the Vietnam War grew substantially due to multiple compounding factors: the war's mounting human casualties and financial costs, extensive television media coverage that brought vivid war footage into American living rooms in an unprecedented way, controversy over the military draft (including perceptions of unequal burden across social/economic groups), and damaging revelations like the Pentagon Papers, which suggested government officials had misrepresented the war's progress and prospects to the American public.",
            wrong: { 0: "Public and political support for the war was NOT universal or unanimous, especially as the war continued; growing, significant, and increasingly vocal opposition developed over time, particularly among younger Americans and on college campuses.", 2: "Extensive television and print media coverage of the war (sometimes called the first 'television war') was actually a SIGNIFICANT, well-documented factor in shaping public opinion, not an absence of coverage.", 3: "There was substantial, well-documented political disagreement and debate about the war's strategic necessity, conduct, and prospects for success, both among political leaders and the broader public, not universal agreement." },
            tempting: "None of the distractors accurately capture the substantial, well-documented domestic controversy surrounding the Vietnam War if this history is known specifically, but underestimating the war's genuine domestic political impact is a common oversimplification.",
            commonMistake: "Underestimating the extent and specific causes of domestic opposition to the Vietnam War, rather than recognizing the multiple, compounding, well-documented factors (casualties/costs, media coverage, draft controversy, credibility-damaging revelations) that fueled growing skepticism and protest.",
            apTip: "Cite the Pentagon Papers specifically on FRQs about Vietnam War domestic opposition — this leaked government study, revealing that officials had privately doubted the war's winnability while publicly expressing optimism, significantly damaged public trust in government statements about the war and is a frequently expected specific piece of evidence for this topic."
          }
        },
        {
          id: 'apush-8-6', difficulty: 5, type: 'mcq', topic: 'Assessing Postwar Liberalism\'s Legacy',
          prompt: "Historians have debated the long-term legacy and effectiveness of postwar liberalism (encompassing New Deal-era programs through the Great Society) in addressing poverty and inequality in the United States. Which best characterizes the nature of this ongoing historical debate?",
          choices: ['There is complete, unanimous scholarly agreement that these programs were entirely successful with no meaningful criticisms or limitations of any kind', 'Historians and policy analysts continue to debate specific questions about these programs\' effectiveness, unintended consequences, and adequacy in addressing structural inequality, reflecting genuine, ongoing scholarly and political disagreement rather than a single settled verdict', 'There is complete, unanimous scholarly agreement that these programs were entirely unsuccessful failures with no positive effects of any kind', 'This topic has never been studied or debated by historians or policy analysts'],
          correct: 1,
          explanation: {
            correct: "The legacy of postwar liberal programs (New Deal, Great Society, and related policies) remains a genuinely contested area of historical and policy analysis — scholars and analysts continue to debate specific questions about program effectiveness (e.g., Medicare/Medicaid's healthcare access impact), unintended consequences, and whether these programs adequately addressed deeper structural inequalities (related to race, class, and regional disparities), reflecting authentic, ongoing scholarly and political disagreement rather than a single, settled, unanimous verdict in either direction.",
            wrong: { 0: "This overstates scholarly consensus — there is substantial, documented debate and disagreement about various specific aspects of these programs' effectiveness and limitations, not unanimous, uncomplicated praise.", 2: "This equally overstates consensus in the opposite direction — there is substantial, documented evidence of at least some positive effects and achievements from these programs, alongside genuine debate about their limitations; a uniformly negative characterization doesn't reflect the actual complexity of scholarly assessment.", 3: "This topic has been extensively studied and debated by historians, economists, and policy analysts; it's an active, ongoing area of serious scholarly and political discourse, not one lacking any study or debate." },
            tempting: "Choices A and C represent opposite oversimplifications (uniform success or uniform failure) that both ignore the genuine, nuanced, ongoing scholarly debate that actually characterizes serious historical and policy analysis of this topic.",
            commonMistake: "Assuming any major historical policy question must have a single, simple, settled verdict (either wholly positive or wholly negative), rather than recognizing genuine, ongoing scholarly complexity and disagreement as a normal, expected feature of serious historical/policy analysis.",
            apTip: "College-level insight: for a sophisticated FRQ response evaluating postwar liberalism's legacy, explicitly acknowledge BOTH documented achievements (such as measurable reductions in elderly poverty following Social Security/Medicare, expanded healthcare access) AND documented limitations/criticisms (such as debates about the adequacy of anti-poverty program funding, or critiques regarding how effectively these programs addressed underlying structural/racial inequalities) — presenting this balanced complexity, rather than a one-sided verdict, reflects genuine historical sophistication."
          }
        }
      ]
    },
    {
      id: 9,
      name: 'Period 9: 1980–Present',
      questions: [
        {
          id: 'apush-9-1', difficulty: 1, type: 'mcq', topic: 'Reaganomics',
          prompt: "The economic policies associated with President Ronald Reagan in the 1980s, sometimes called \"Reaganomics,\" primarily emphasized:",
          choices: ['Significant tax increases and expanded government regulation of business', 'Tax cuts, reduced government regulation, and reduced federal spending on domestic social programs (while defense spending increased), reflecting a supply-side economic approach', 'The nationalization of major private industries', 'A dramatic expansion of federal welfare programs'],
          correct: 1,
          explanation: {
            correct: "Reaganomics emphasized supply-side economic theory, featuring significant tax cuts (particularly for higher earners and businesses, based on the theory that this would stimulate investment and economic growth), reduced government regulation of business, and reduced federal spending on domestic social programs, while simultaneously increasing defense spending significantly during this Cold War period.",
            wrong: { 0: "This is the opposite of Reaganomics' actual approach — it emphasized tax CUTS and reduced (not expanded) regulation, reflecting a very different economic philosophy.", 2: "Reaganomics reflected a free-market, pro-private-enterprise philosophy; nationalizing private industries would be inconsistent with and opposite to this approach.", 3: "Reaganomics specifically aimed to REDUCE (not expand) federal spending on domestic social/welfare programs, reflecting a preference for smaller domestic government spending." },
            tempting: "None of the distractors accurately describe Reaganomics' actual defining policies if this economic approach is understood specifically, but assuming any major economic policy program must be a generic 'expansion' of government activity across all fronts is an oversimplification that misses Reaganomics' specific, selective approach (cutting domestic programs/regulation while increasing defense spending).",
            commonMistake: "Not recognizing Reaganomics' SPECIFIC, somewhat selective combination of policies (tax cuts, deregulation, reduced domestic social spending, INCREASED defense spending) rather than assuming a simple, uniform 'more government' or 'less government' characterization across the board.",
            apTip: "Memorize the core components of supply-side 'Reaganomics' together: tax cuts (especially for high earners/businesses), deregulation, reduced domestic social spending, paired with INCREASED defense spending — this last point (increased defense spending alongside domestic cuts) is a frequently tested nuance that shows the policy wasn't simply about 'smaller government' uniformly across every category."
          }
        },
        {
          id: 'apush-9-2', difficulty: 2, type: 'mcq', topic: 'The End of the Cold War',
          prompt: "The Cold War effectively ended around 1989-1991, marked by events including the fall of the Berlin Wall and the dissolution of the Soviet Union. Which factor is commonly cited by historians as significantly contributing to this outcome?",
          choices: ['A sudden, unexpected US military invasion of the Soviet Union', 'A combination of internal Soviet economic struggles, reform efforts (like Gorbachev\'s glasnost and perestroika) that had unintended destabilizing effects, and sustained Western political/economic pressure over decades', 'The Soviet Union voluntarily disbanding for entirely unrelated reasons with no connection to any internal or external pressures', 'A formal, mutually agreed-upon peace treaty ending the Cold War in a single defining event'],
          correct: 1,
          explanation: {
            correct: "Historians generally point to a combination of factors contributing to the Cold War's end: significant internal Soviet economic struggles and inefficiencies, Gorbachev's reform efforts (glasnost/openness and perestroika/economic restructuring) that were intended to strengthen the Soviet system but had significant unintended destabilizing effects, and sustained Western (particularly US) political, economic, and military pressure over the preceding decades of the Cold War.",
            wrong: { 0: "There was no direct US military invasion of the Soviet Union; the Cold War's end came through the combination of internal Soviet developments and sustained indirect pressure, not direct military conquest.", 2: "The Soviet Union's dissolution was significantly connected to real, identifiable internal economic and political pressures (and their interaction with reform efforts), not an unrelated, disconnected event.", 3: "There was no single, formal peace treaty in this sense marking the Cold War's end; it concluded through a more gradual, complex process of internal Soviet collapse and changing international relations rather than one defining formal agreement." },
            tempting: "None of the distractors accurately describe the actual, complex combination of factors historians point to if this history is understood specifically, but oversimplifying such a complex, multi-causal historical event into a single simple cause (or dismissing any connection to underlying pressures) misses this complexity.",
            commonMistake: "Reducing the Cold War's end to a single, simple cause (like a specific gesture or moment) rather than recognizing the genuinely complex combination of internal Soviet factors and external pressures that historians typically cite together.",
            apTip: "Be ready to name specific relevant terms and figures on an FRQ — Mikhail Gorbachev, glasnost (political openness) and perestroika (economic restructuring), and the general concept of accumulated Soviet economic inefficiency relative to Western economies — as concrete evidence supporting a multi-causal explanation for the Cold War's end, rather than a single-cause narrative."
          }
        },
        {
          id: 'apush-9-3', difficulty: 2, type: 'mcq', topic: 'Post-9/11 Foreign Policy',
          prompt: "Following the September 11, 2001 terrorist attacks, US foreign policy shifted significantly to emphasize:",
          choices: ['Complete military withdrawal from all international engagements', 'A renewed focus on combating terrorism, including military interventions in Afghanistan and Iraq, alongside expanded domestic security measures', 'Immediate and complete normalization of relations with all groups involved in the attacks', 'A return to strict pre-World War II style isolationism'],
          correct: 1,
          explanation: {
            correct: "Following the September 11 attacks, US foreign policy shifted to emphasize combating terrorism as a central priority, including military interventions in Afghanistan (targeting al-Qaeda and the Taliban government harboring them) and later Iraq, alongside significant expansion of domestic security measures and government institutions (such as the creation of the Department of Homeland Security and passage of the USA PATRIOT Act).",
            wrong: { 0: "This is the opposite of the actual response — the US significantly INCREASED military engagement and intervention (Afghanistan, Iraq) following 9/11, not withdrew from international engagement.", 2: "The US response specifically involved MILITARY ACTION against those responsible for and harboring the attackers, not immediate normalization of relations with these same groups.", 3: "This period saw significantly INCREASED international military engagement and a heightened focus on global counterterrorism efforts, essentially the opposite of an isolationist foreign policy retreat." },
            tempting: "None of the distractors accurately describe the actual, well-documented post-9/11 foreign policy shift if this history is known specifically, but assuming a national trauma of this magnitude would produce withdrawal rather than increased international engagement is a plausible but incorrect assumption.",
            commonMistake: "Not recognizing that the September 11 attacks led to INCREASED (not decreased) international military engagement and intervention, reflecting a shift toward more assertive counterterrorism-focused foreign policy, not isolationist withdrawal.",
            apTip: "Be ready to name specific post-9/11 developments on an FRQ — the Afghanistan invasion (2001, targeting al-Qaeda/Taliban), the Iraq War (2003), the USA PATRIOT Act (expanding domestic surveillance/security powers), and the creation of the Department of Homeland Security — as concrete evidence of this significant foreign and domestic policy shift."
          }
        },
        {
          id: 'apush-9-4', difficulty: 3, type: 'mcq', topic: 'Economic Globalization',
          prompt: "The trend of economic globalization accelerating in the late 20th and early 21st centuries has been characterized by:",
          choices: ['A significant decrease in international trade and economic interconnection between countries', 'Increased international trade, the growth of multinational corporations, and greater economic interdependence between countries, facilitated partly by trade agreements and technological advances', 'Complete economic isolation of the United States from all other countries', 'A total elimination of any economic disparities between different countries and regions'],
          correct: 1,
          explanation: {
            correct: "Economic globalization has been characterized by substantially increased international trade, the significant growth and influence of multinational corporations operating across many countries, and greater economic interdependence between nations, facilitated by trade agreements (such as NAFTA) and technological advances (particularly in communication and transportation) that made international economic coordination faster and more efficient.",
            wrong: { 0: "This is the opposite of the actual, well-documented trend — international trade and economic interconnection have significantly INCREASED, not decreased, during this era of accelerating globalization.", 2: "The United States has been significantly and increasingly ECONOMICALLY INTEGRATED with other countries during this period (through trade, multinational business activity, and international agreements), not isolated from them.", 3: "While globalization has had complex and varied effects on economic inequality both within and between countries, it has NOT eliminated economic disparities entirely; significant inequalities have persisted and, in some analyses, been reshaped or even exacerbated in certain ways by globalization." },
            tempting: "None of the distractors accurately describe globalization's actual well-documented characteristics if this trend is understood specifically, but overstating either the completeness of global economic integration or global economic equality are both common oversimplifications.",
            commonMistake: "Overstating globalization's effects as either completely eliminating economic problems/disparities, or, conversely, not recognizing genuine substantial increases in international economic interconnection that have actually occurred during this period.",
            apTip: "Be ready to discuss globalization with appropriate nuance on an FRQ — noting both its significant, well-documented economic INTEGRATION effects (increased trade, multinational corporations, trade agreements like NAFTA) AND its more contested, debated consequences (effects on domestic manufacturing employment, wage effects, environmental/labor standard concerns) rather than presenting only a purely positive or purely negative narrative."
          }
        },
        {
          id: 'apush-9-5', difficulty: 4, type: 'mcq', topic: 'Political Polarization in Recent Decades',
          prompt: "Political scientists and historians studying recent American politics have noted a significant increase in political polarization since the late 20th century. Which factor is commonly cited as contributing to this trend?",
          choices: ['A complete disappearance of political parties altogether', 'The fragmentation and diversification of media sources (including cable news and social media), which some scholars argue has allowed people to increasingly select information sources that reinforce existing political views, alongside broader demographic and geographic sorting by political affiliation', 'Universal, complete political agreement across all demographic groups on all policy issues', 'A significant decrease in the total number of people participating in politics or expressing political opinions'],
          correct: 1,
          explanation: {
            correct: "Scholars studying rising political polarization commonly cite the fragmentation and diversification of media sources (the rise of cable news with distinct ideological leanings, and later social media, which can create more selective/curated information environments) as one significant contributing factor, allowing individuals to increasingly consume media that reinforces rather than challenges their existing political views, alongside broader trends of geographic and demographic 'sorting' by political affiliation.",
            wrong: { 0: "Political parties have remained a central, active feature of American politics throughout this period; they haven't disappeared, and party identity has if anything become a stronger predictor of political behavior during this era of increased polarization.", 2: "This directly contradicts the premise of increasing polarization — polarization specifically describes INCREASING political disagreement and division, not universal agreement across groups.", 3: "Political engagement and expression (including through new digital/social media platforms) has if anything become more visible and widespread in various ways during this period, not diminished; increased polarization is generally discussed alongside continued or even increased political engagement/expression, not political apathy." },
            tempting: "None of the distractors accurately identify a real contributing factor to polarization if this scholarly discussion is understood specifically, but each represents either a misunderstanding of what polarization means or an inaccurate claim about political engagement trends during this period.",
            commonMistake: "Confusing political polarization (increasing political DIVISION/disagreement) with either political apathy (decreased engagement) or assuming parties/political identity have become less significant, when polarization scholarship generally emphasizes STRENGTHENING partisan identity and division.",
            apTip: "College-level insight: connect media fragmentation (cable news proliferation since the 1980s-90s, social media's rise in the 2000s-2010s) explicitly to the concept of 'echo chambers' or selective media consumption reinforcing existing views — this specific mechanism (not just 'media changed') is what scholarly discussions of media's role in polarization typically emphasize, and citing it specifically strengthens an FRQ response on this topic."
          }
        },
        {
          id: 'apush-9-6', difficulty: 5, type: 'mcq', topic: 'Historical Perspective on Recent Events',
          prompt: "Historians often note that analyzing very recent historical events (such as those from the last few decades) presents distinct methodological challenges compared to analyzing more distant historical periods. Which best describes a key reason for this distinct challenge?",
          choices: ['Recent events are always completely irrelevant to historical study and should never be analyzed by historians', 'Historians analyzing very recent events often have less critical distance and a smaller body of long-term consequences and declassified evidence to draw upon, compared to more distant events where long-term effects and fuller documentary evidence have had more time to become clear and available', 'Recent events are always easier to analyze definitively than distant historical events, with no additional challenges whatsoever', 'There is no meaningful methodological difference between analyzing recent versus distant historical events'],
          correct: 1,
          explanation: {
            correct: "Historians analyzing very recent events face genuine methodological challenges including less critical/temporal distance (making it harder to assess long-term significance and consequences that are still unfolding), a smaller body of available evidence (since some official government documents may not yet be declassified or archived materials fully processed and accessible), and the difficulty of separating ongoing political/social debates from more settled historical analysis — challenges that diminish, though don't disappear, as more time passes and more evidence becomes available for more distant historical periods.",
            wrong: { 0: "Recent events are absolutely a legitimate and increasingly common subject of historical study (sometimes called 'contemporary history'); they are not irrelevant to historians, even though they present some distinct methodological challenges.", 2: "This is essentially the opposite of the actual, genuine challenge — recent events are generally considered MORE methodologically challenging to analyze with full historical perspective (due to limited critical distance and incomplete evidence access), not easier.", 3: "There IS a meaningful, well-recognized methodological difference — historians studying recent events must navigate specific challenges (limited critical distance, incomplete archival access, ongoing political sensitivity) that are less pronounced for well-documented distant historical periods." },
            tempting: "Choice C can tempt students who assume more familiarity with recent events (since they may have lived through them, or have more readily available information) automatically makes them EASIER to analyze historically, when in fact this proximity itself creates specific, distinct methodological challenges.",
            commonMistake: "Assuming greater personal or cultural familiarity with recent events translates directly into easier or more definitive historical analysis, rather than recognizing that this very proximity creates specific challenges (limited critical distance, incomplete evidence, ongoing political relevance) distinct from those faced when studying more temporally distant periods.",
            apTip: "College-level insight: this reflects genuine historiographical/methodological discussions about the practice of 'contemporary history' — on an FRQ discussing very recent events (post-2000, for example), explicitly acknowledging these specific methodological limitations (limited long-term perspective, incomplete declassified evidence, ongoing political contestation) demonstrates sophisticated awareness of historical methodology itself, not just the historical content."
          }
        }
      ]
    }
  ],
  frqs: [
    {
      id: 'apush-frq-1', difficulty: 4, unit: 3,
      prompt: "\"The ratification of the Constitution in 1788 represented a significant departure from the principles established under the Articles of Confederation.\"\n\nEvaluate the extent to which you agree with this statement, using specific evidence about the structure and powers of government under both documents.",
      rubricPoints: [
        "States a clear, defensible thesis that responds directly to the prompt (e.g., largely agrees, showing significant departure) (1 pt)",
        "Provides specific evidence about the Articles of Confederation's structure/weaknesses (e.g., no taxing power, no strong executive, difficulty regulating commerce) (1 pt)",
        "Provides specific evidence about the Constitution's new structure (e.g., federal taxing power, three branches with checks and balances, commerce clause) (1 pt)",
        "Explains HOW this evidence supports the thesis (analysis connecting evidence to the argument, not just listing facts) (1 pt)",
        "Acknowledges complexity, such as continuities between the two documents (e.g., both created a republic, both maintained state governments) or contextualizes the change (e.g., referencing Shays's Rebellion as a catalyst) (1 pt)"
      ],
      sampleResponse: "The ratification of the Constitution did represent a significant departure from the Articles of Confederation, primarily in the scope of national government power. Under the Articles, the national government could not directly tax citizens and relied on voluntary state contributions, leaving it financially weak; the Constitution granted Congress direct taxing power. The Articles had no separate executive branch, while the Constitution created a presidency with defined powers, along with a judiciary, forming a three-branch system with checks and balances absent under the Articles. The Constitution also granted Congress power to regulate interstate commerce, addressing a major weakness that had allowed trade disputes between states under the Articles. This shift was significantly motivated by events like Shays's Rebellion, which exposed the national government's inability to respond to internal unrest under the Articles. However, some continuity existed: both documents maintained a republican government and preserved a role for state governments, showing the change was a significant strengthening of federal power rather than a complete rejection of the underlying republican and federalist principles established earlier."
    },
    {
      id: 'apush-frq-2', difficulty: 4, unit: 1,
      prompt: "\"The Columbian Exchange fundamentally transformed both the Americas and the wider Atlantic World.\"\n\nEvaluate the extent to which you agree with this statement, using specific evidence about biological, economic, and demographic effects.",
      rubricPoints: [
        "States a clear, defensible thesis addressing the extent of transformation (1 pt)",
        "Provides specific evidence of biological exchange (crops like maize/potatoes moving to Europe/Africa; animals like horses moving to Americas; diseases devastating Native populations) (1 pt)",
        "Provides specific evidence of economic transformation (new crops fueling European population growth; plantation economies developing in the Americas) (1 pt)",
        "Provides specific evidence of demographic transformation (catastrophic Native American population decline; beginning of forced African migration) (1 pt)",
        "Explains HOW this evidence supports the extent of transformation claimed in the thesis (1 pt)"
      ],
      sampleResponse: "The Columbian Exchange did fundamentally transform both the Americas and the wider Atlantic World. Biologically, crops like maize and potatoes transferred from the Americas to Europe and Africa, eventually contributing to population growth there, while European livestock like horses and pigs transformed Native American ways of life (e.g., Plains tribes adopting horse culture) and diseases like smallpox devastated Native American populations, who had no prior immunity. Economically, new crop availability changed agricultural patterns on both sides of the Atlantic, and the demand for labor to work new American plantation economies (growing crops like sugar and tobacco) fueled the developing forced African slave trade. Demographically, the scale of Native American population decline was catastrophic in many regions, fundamentally reshaping the human landscape of the Americas, while the beginnings of forced African migration permanently altered the demographic composition of the Americas going forward. Together, these interconnected biological, economic, and demographic changes represented a transformation of nearly unprecedented scale and permanence."
    },
    {
      id: 'apush-frq-3', difficulty: 3, unit: 2,
      prompt: "Explain ONE way that religious motivations shaped colonial development in the 17th century, AND explain ONE way that economic motivations shaped colonial development in the same period, using specific colonial examples.",
      rubricPoints: [
        "Identifies a specific religious motivation example (e.g., Puritan settlement of Massachusetts Bay seeking religious community/reform, or Quaker settlement of Pennsylvania seeking religious tolerance) (1 pt)",
        "Explains how this motivation shaped that colony's specific development (1 pt)",
        "Identifies a specific economic motivation example (e.g., Virginia/Chesapeake tobacco cultivation, or joint-stock company funding of Jamestown) (1 pt)",
        "Explains how this motivation shaped that colony's specific development (1 pt)"
      ],
      sampleResponse: "Religious motivations: Puritan settlers in Massachusetts Bay sought to establish a religious community that reflected their own beliefs (sometimes described as a 'city upon a hill'), which shaped the colony's tightly-knit community structure, emphasis on religious conformity, and church-connected local governance in its early development. Economic motivations: Virginia's Jamestown settlement was funded by the Virginia Company, a joint-stock company seeking profit, and the colony's development became centered around tobacco cultivation once this cash crop proved highly profitable, shaping Virginia's plantation-based economy and its growing reliance on indentured servant and later enslaved labor to work these labor-intensive tobacco fields."
    },
    {
      id: 'apush-frq-4', difficulty: 4, unit: 4,
      prompt: "\"The Market Revolution and Jacksonian-era political changes were deeply interconnected.\"\n\nExplain ONE way that economic changes during this period (1800-1848) influenced political developments, using specific evidence.",
      rubricPoints: [
        "Identifies a specific economic change (e.g., growth of a market economy, wage labor, urbanization) (1 pt)",
        "Identifies a specific political development connected to it (e.g., expansion of suffrage for white men, rise of mass political parties) (1 pt)",
        "Explains the specific causal connection between the economic change and the political development (1 pt)"
      ],
      sampleResponse: "The Market Revolution's growth of wage labor and a more interconnected market economy contributed to Jacksonian-era expansion of suffrage for white men (removing remaining property ownership requirements in many states). As more men worked for wages rather than owning land (a traditional prerequisite for voting in earlier eras), political pressure grew to expand voting rights beyond property owners to include this growing class of wage laborers, connecting the economic shift toward wage labor with the political shift toward broader (though still racially and gender-limited) democratic participation."
    },
    {
      id: 'apush-frq-5', difficulty: 4, unit: 5,
      prompt: "Explain ONE similarity AND ONE difference between the causes of sectional tension in the 1820s (such as the Missouri Compromise) and the causes of sectional tension in the 1850s (such as the Compromise of 1850 and Kansas-Nebraska Act).",
      rubricPoints: [
        "Identifies a valid similarity (e.g., both periods centrally involved disputes over whether new territories/states would permit slavery) (1 pt)",
        "Identifies a valid difference (e.g., 1850s tensions were more intense/less resolvable, involved popular sovereignty as a new approach, and were closer to actual civil conflict, as seen in 'Bleeding Kansas') (1 pt)",
        "Provides specific supporting evidence for both the similarity and difference (1 pt)"
      ],
      sampleResponse: "Similarity: Both the 1820s and 1850s tensions centrally involved disputes over whether new territories/states would permit or prohibit slavery — the Missouri Compromise (1820) addressed this through a geographic line (36°30'), while 1850s compromises grappled with the same core issue for newly acquired territories from the Mexican-American War. Difference: 1850s tensions were significantly more volatile and less resolvable; unlike the more geographically-based 1820 solution, the Kansas-Nebraska Act's use of popular sovereignty (letting territorial residents vote on slavery) led to actual violent conflict ('Bleeding Kansas') between pro- and anti-slavery settlers, reflecting an escalation in sectional conflict intensity compared to the more stable, longer-lasting 1820 compromise."
    },
    {
      id: 'apush-frq-6', difficulty: 4, unit: 6,
      prompt: "Explain ONE way Reconstruction (1865-1877) expanded rights for African Americans, AND explain ONE way its gains were subsequently undermined in the following decades.",
      rubricPoints: [
        "Identifies a specific Reconstruction-era rights expansion (e.g., 14th Amendment citizenship/equal protection, 15th Amendment voting rights, Black political officeholding) (1 pt)",
        "Identifies a specific subsequent undermining development (e.g., Jim Crow laws, poll taxes/literacy tests, end of federal enforcement after 1877) (1 pt)",
        "Explains the connection/contrast between the two with specific evidence (1 pt)"
      ],
      sampleResponse: "Reconstruction expanded African American rights through the 15th Amendment (1870), which prohibited denying voting rights based on race, enabling significant Black political participation and officeholding during this period, particularly in Southern state legislatures and Congress. However, these gains were substantially undermined after federal troop withdrawal following the Compromise of 1877, as Southern states implemented Jim Crow laws, poll taxes, literacy tests, and other mechanisms specifically designed to disenfranchise Black voters, effectively reversing much of the political participation gained during Reconstruction for decades to come."
    },
    {
      id: 'apush-frq-7', difficulty: 4, unit: 7,
      prompt: "Explain ONE way Progressive Era reforms (roughly 1890s-1920s) addressed problems caused by industrialization, using a specific example.",
      rubricPoints: [
        "Identifies a specific industrialization-caused problem (e.g., unsafe working conditions, monopolistic business practices, political corruption) (1 pt)",
        "Identifies a specific Progressive reform addressing it (e.g., workplace safety laws, trust-busting antitrust enforcement, direct election of senators) (1 pt)",
        "Explains the specific connection between the problem and the reform (1 pt)"
      ],
      sampleResponse: "Industrialization led to the rise of powerful monopolistic trusts that could control entire industries and set prices without meaningful competition. Progressive reformers addressed this through antitrust enforcement (such as Theodore Roosevelt's trust-busting efforts using the Sherman Antitrust Act), which sought to break up or regulate these monopolistic combinations to restore competitive markets and curb the outsized economic and political power these trusts had accumulated during rapid industrialization."
    },
    {
      id: 'apush-frq-8', difficulty: 4, unit: 8,
      prompt: "Explain ONE way the Cold War influenced domestic US policy or society during the period 1945-1980, using a specific example.",
      rubricPoints: [
        "Identifies a specific domestic effect connected to Cold War concerns (e.g., Red Scare/McCarthyism, space race investment in education/science, civil rights movement's international dimension) (1 pt)",
        "Provides specific supporting evidence for this connection (1 pt)",
        "Explains the causal link between Cold War competition/concerns and the domestic development (1 pt)"
      ],
      sampleResponse: "Cold War competition with the Soviet Union influenced domestic policy through increased federal investment in science and education, particularly after the Soviet launch of Sputnik in 1957 raised fears the US was falling behind technologically; this led to legislation like the National Defense Education Act, which funded science, math, and foreign language education, reflecting how Cold War geopolitical competition directly shaped domestic educational policy priorities."
    },
    {
      id: 'apush-frq-9', difficulty: 4, unit: 9,
      prompt: "Explain ONE way that globalization has affected the US economy since 1980, AND explain ONE way it has affected US foreign policy in the same period.",
      rubricPoints: [
        "Identifies a specific economic effect of globalization (e.g., increased international trade, outsourcing of manufacturing, growth of multinational corporations) (1 pt)",
        "Identifies a specific foreign policy effect (e.g., trade agreements like NAFTA, increased economic interdependence shaping diplomatic relationships) (1 pt)",
        "Provides specific supporting evidence for both effects (1 pt)"
      ],
      sampleResponse: "Economically, globalization has led to significantly increased international trade and the growth of multinational corporations operating across many countries, while also contributing to the outsourcing of some domestic manufacturing to countries with lower labor costs, changing the composition of US domestic employment over recent decades. In foreign policy, this economic interdependence has shaped diplomatic relationships, exemplified by trade agreements like NAFTA (1994), which aimed to reduce trade barriers between the US, Canada, and Mexico, reflecting how growing economic globalization has become intertwined with foreign policy and international relationship-building."
    },
    {
      id: 'apush-frq-10', difficulty: 3, unit: 1,
      prompt: "Explain ONE way that Spanish colonization methods differed from English colonization methods in the Americas, using specific evidence.",
      rubricPoints: [
        "Identifies a specific difference (e.g., Spanish encomienda/mission-based labor and conversion systems vs. English permanent settlement/agriculture-focused colonization) (1 pt)",
        "Provides specific supporting evidence for the Spanish approach (1 pt)",
        "Provides specific supporting evidence for the English approach (1 pt)"
      ],
      sampleResponse: "Spanish colonization often centered on extracting resources (particularly precious metals) and religious conversion through mission systems, using labor systems like the encomienda that granted colonizers rights to Native American labor and tribute. English colonization, by contrast, more often emphasized permanent agricultural settlement, as seen in Jamestown's shift toward tobacco cultivation and Plymouth's family-based farming communities, reflecting a different overall colonial economic and social model than the Spanish approach."
    },
    {
      id: 'apush-frq-11', difficulty: 3, unit: 2,
      prompt: "Explain ONE way that the labor system in the Chesapeake colonies changed over the course of the 17th century, and explain ONE specific event or factor that contributed to this change.",
      rubricPoints: [
        "Identifies the shift from indentured servitude toward increasing reliance on enslaved African labor (1 pt)",
        "Identifies a specific contributing factor, most notably Bacon's Rebellion (1676) (1 pt)",
        "Explains the connection between the factor and the labor system shift (1 pt)"
      ],
      sampleResponse: "The Chesapeake labor system gradually shifted from a primary reliance on English indentured servants toward increasing reliance on enslaved Africans over the course of the 17th century. Bacon's Rebellion (1676), which united poor free colonists (including former servants) and enslaved people in a revolt against colonial elites, is frequently cited as accelerating this shift, as colonial elites increasingly preferred the more legally rigid, permanent institution of racial slavery, partly as a strategy to prevent similar future cross-racial alliances among the colony's laboring classes."
    },
    {
      id: 'apush-frq-12', difficulty: 3, unit: 3,
      prompt: "Explain ONE way that Enlightenment ideas influenced the arguments used to justify American independence, using specific evidence from the Declaration of Independence or related documents.",
      rubricPoints: [
        "Identifies a specific Enlightenment idea (e.g., natural rights, social contract theory, government by consent) (1 pt)",
        "Connects this idea to specific language or arguments in the Declaration of Independence (1 pt)",
        "Explains how this Enlightenment-derived argument was used to justify independence (1 pt)"
      ],
      sampleResponse: "Enlightenment natural rights theory, particularly as articulated by John Locke, influenced the Declaration of Independence's argument that all people possess certain unalienable rights (life, liberty, and the pursuit of happiness) and that governments derive their just power from the consent of the governed. The Declaration used this Enlightenment framework to argue that King George III's actions violated these natural rights and the social contract, justifying the colonies' right to dissolve their political connection to Britain and establish independent government."
    },
    {
      id: 'apush-frq-13', difficulty: 3, unit: 4,
      prompt: "Explain ONE way that Indian Removal policy in the 1830s reflected broader tensions in Jacksonian-era democracy, referencing the gap between democratic rhetoric and actual policy.",
      rubricPoints: [
        "Identifies the specific tension: expanded democratic participation for white men occurring alongside intensified oppression of Native Americans (1 pt)",
        "Provides specific evidence of Indian Removal policy (e.g., Indian Removal Act, Trail of Tears, or Worcester v. Georgia and Jackson's non-enforcement) (1 pt)",
        "Explains how this illustrates the selective, racially-bounded nature of Jacksonian-era democratic expansion (1 pt)"
      ],
      sampleResponse: "Indian Removal policy illustrates the tension between Jacksonian-era democratic expansion (for white men) and simultaneous, worsening oppression of Native Americans. Despite the Supreme Court ruling in Worcester v. Georgia (1832) in favor of Cherokee sovereignty, President Jackson did not enforce this ruling and pursued removal anyway, resulting in the forced relocation and significant loss of life known as the Trail of Tears — demonstrating that this era's expanded democratic participation was specifically and selectively bounded by race, applying to white men while Native American nations faced intensified displacement and loss of sovereignty during the same period."
    },
    {
      id: 'apush-frq-14', difficulty: 3, unit: 5,
      prompt: "Explain ONE way that the Emancipation Proclamation changed the purpose or character of the Civil War.",
      rubricPoints: [
        "Explains the Proclamation's specific content/limitations (applied only to Confederate territory in rebellion) (1 pt)",
        "Explains how it reframed the war's purpose to explicitly include ending slavery, not just preserving the Union (1 pt)",
        "Provides reasoning or evidence connecting this reframing to the war's broader character/significance (1 pt)"
      ],
      sampleResponse: "The Emancipation Proclamation (1863) declared enslaved people free in Confederate territory still in rebellion, though it did not immediately apply to slaveholding border states loyal to the Union. Its major significance was reframing the war's purpose to explicitly include ending slavery, not solely preserving the Union as the war's original stated goal had been; this shift also opened the door for Black soldiers to formally join the Union war effort, further connecting the war's outcome directly to the fate of slavery in the United States."
    },
    {
      id: 'apush-frq-15', difficulty: 3, unit: 6,
      prompt: "Explain ONE way that industrialization changed the nature of work for American laborers in the late 19th century, using specific evidence.",
      rubricPoints: [
        "Identifies a specific change (e.g., shift from skilled artisan work to repetitive factory labor, longer hours, unsafe conditions) (1 pt)",
        "Provides specific supporting evidence (e.g., specific labor conflicts like the Homestead Strike, or general working condition descriptions) (1 pt)",
        "Explains the broader significance of this change for workers' lives (1 pt)"
      ],
      sampleResponse: "Industrialization shifted much of American labor from skilled, artisan-based work toward repetitive, often dangerous factory labor performed for long hours and low wages under employer-set conditions. This shift contributed to significant labor conflict, as seen in events like the Homestead Strike (1892), where workers organized to protest wage cuts and poor working conditions, reflecting how industrialization fundamentally changed workers' relationship to their labor and prompted new forms of collective organizing in response."
    },
    {
      id: 'apush-frq-16', difficulty: 3, unit: 7,
      prompt: "Explain ONE way that World War I affected American society on the home front, using specific evidence.",
      rubricPoints: [
        "Identifies a specific home front effect (e.g., civil liberties restrictions via Espionage/Sedition Acts, expanded government economic coordination, shifts in labor patterns) (1 pt)",
        "Provides specific supporting evidence (1 pt)",
        "Explains the significance of this effect (1 pt)"
      ],
      sampleResponse: "World War I led to significant civil liberties restrictions on the home front, exemplified by the Espionage Act (1917) and Sedition Act (1918), which criminalized certain forms of anti-war speech and dissent. These laws reflected heightened wartime concern about disloyalty and led to the prosecution of individuals who spoke out against the war or the draft, illustrating how wartime mobilization could come into tension with peacetime civil liberties protections."
    },
    {
      id: 'apush-frq-17', difficulty: 3, unit: 8,
      prompt: "Explain ONE way that the Civil Rights Movement used legal strategy to challenge racial segregation, using a specific example.",
      rubricPoints: [
        "Identifies legal strategy as a Civil Rights Movement tactic (1 pt)",
        "Provides a specific example (most commonly Brown v. Board of Education) (1 pt)",
        "Explains the significance/outcome of this legal strategy (1 pt)"
      ],
      sampleResponse: "The Civil Rights Movement used legal strategy through organizations like the NAACP Legal Defense Fund, which brought the case Brown v. Board of Education (1954) to the Supreme Court, successfully arguing that racially segregated public schools were inherently unequal and therefore unconstitutional under the 14th Amendment's equal protection clause. This landmark ruling overturned the earlier 'separate but equal' precedent from Plessy v. Ferguson and provided a significant legal foundation for further desegregation efforts throughout the Civil Rights Movement."
    },
    {
      id: 'apush-frq-18', difficulty: 3, unit: 9,
      prompt: "Explain ONE way that political polarization has affected American governance since the 1980s, using specific evidence.",
      rubricPoints: [
        "Identifies a specific effect of polarization (e.g., increased legislative gridlock, more contentious confirmation processes, media fragmentation reinforcing division) (1 pt)",
        "Provides specific supporting evidence (1 pt)",
        "Explains the broader significance for governance (1 pt)"
      ],
      sampleResponse: "Political polarization has contributed to increased legislative gridlock, as growing ideological division between the parties has made bipartisan compromise on major legislation more difficult to achieve compared to earlier eras. This is reflected in patterns of divided government and closely contested elections becoming more common, illustrating how deepening partisan division has made it more challenging for Congress and the President to reach agreement on significant policy questions, a significant change in the practical functioning of American governance in recent decades."
    }
  ]
}
