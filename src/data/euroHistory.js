// AP European History — real College Board unit numbers/names/date ranges used
// for authenticity, matching the pattern in usHistory.js and worldHistory.js.
// FRQ prompts follow the same "Explain ONE way..." (SAQ-style) and "Evaluate
// the extent to which..." (LEQ-style) conventions used elsewhere.

export const euroHistory = {
  id: 'euro-history',
  name: 'AP European History',
  icon: '🏛️',
  accent: 'moss',
  units: [
    {
      id: 1,
      name: 'Unit 1: Renaissance and Exploration (c. 1450–1648)',
      questions: [
        {
          id: 'apeuro-1-1', difficulty: 2, type: 'mcq', topic: 'Renaissance Humanism',
          prompt: "Renaissance humanism, which emerged in Italy in the 14th and 15th centuries, is best characterized by:",
          choices: ['A rejection of all classical Greek and Roman learning as pagan and irrelevant', 'A renewed focus on classical Greek and Roman texts and an emphasis on human potential, individual achievement, and secular subjects alongside religious ones', 'An exclusive focus on religious theology, with no interest in classical antiquity', 'A complete rejection of art and literature in favor of pure scientific inquiry'],
          correct: 1,
          explanation: {
            correct: "Renaissance humanism centered on renewed study of classical Greek and Roman texts (rediscovered and newly translated), combined with an emphasis on human potential, individual achievement, and secular subjects (rhetoric, history, moral philosophy) studied alongside, not necessarily instead of, religious learning.",
            wrong: { 0: "Humanists specifically REVIVED and celebrated classical learning — the opposite of rejecting it — viewing Greek and Roman texts as models of eloquence and wisdom worth emulating.", 2: "Humanism broadened intellectual focus to include secular subjects (the studia humanitatis) alongside religious study, rather than narrowing focus exclusively to theology.", 3: "Renaissance humanism directly fueled a flourishing of art and literature (patronage of artists like Michelangelo and writers) — it did not reject these in favor of pure science." },
            tempting: "Choice A is tempting to students who assume the medieval Church's dominance meant classical 'pagan' texts were rejected, but humanists specifically prized and revived this classical heritage.",
            commonMistake: "Assuming humanism was anti-religious or purely secular — most Renaissance humanists remained devout Christians and saw classical learning as compatible with, not opposed to, their faith.",
            apTip: "Know specific humanist figures (Petrarch, often called the 'father of humanism'; Erasmus, a Christian/Northern humanist) and connect humanism to patronage by wealthy families (like the Medici in Florence) that funded much of the era's art and scholarship."
          }
        },
        {
          id: 'apeuro-1-2', difficulty: 2, type: 'mcq', topic: 'The Printing Press',
          prompt: "Johannes Gutenberg's development of the movable-type printing press (c. 1450) had which of the following significant effects on European society?",
          choices: ['It had virtually no effect on the spread of ideas, since literacy remained rare', 'It dramatically increased the speed and reduced the cost of book production, accelerating the spread of Renaissance humanist ideas and, later, Reformation religious texts', 'It was used exclusively to print government tax records, with no effect on intellectual or religious life', 'It caused literacy rates to decline as people relied on oral tradition instead'],
          correct: 1,
          explanation: {
            correct: "The printing press dramatically reduced the cost and increased the speed of book production compared to hand-copying manuscripts, enabling much wider and faster circulation of ideas — this directly accelerated the spread of Renaissance humanist texts and, in the following century, Reformation pamphlets and translated Bibles.",
            wrong: { 0: "The press had a MAJOR effect on European society, even with imperfect literacy — it lowered costs enough to expand the reading public and made ideas circulate far faster than handwritten copies allowed.", 2: "While government and commercial uses existed, the press's most historically significant effects were on intellectual and religious life — spreading humanist scholarship and later religious reform ideas.", 3: "Literacy rates generally INCREASED over time as books became more available and affordable, the opposite of decline." },
            tempting: "None of the distractors reflect the press's actual transformative impact, but underestimating its scale (choice A) misses one of the most significant technological developments of the era.",
            commonMistake: "Underestimating how directly the printing press connects to LATER events, especially the Reformation — Martin Luther's ideas spread as rapidly as they did specifically because of printed pamphlets.",
            apTip: "Connect the printing press directly to the Protestant Reformation (Unit 2) — without cheap, fast reproduction of texts, Luther's 95 Theses and vernacular Bible translations could not have spread across Europe as quickly as they did."
          }
        },
        {
          id: 'apeuro-1-3', difficulty: 3, type: 'mcq', topic: 'Motives for European Exploration',
          prompt: "European overseas exploration beginning in the 15th century (led initially by Portugal and Spain) was driven by a combination of motives often summarized as:",
          choices: ['Exclusively religious motives, with no economic or political interest whatsoever', 'God, glory, and gold — the desire to spread Christianity, achieve national/personal prestige, and acquire wealth through trade and resource extraction', 'A purely scientific desire to map the world, with no religious or economic component', 'A desire to permanently abandon European territory and settle exclusively overseas'],
          correct: 1,
          explanation: {
            correct: "European exploration was driven by an interconnected mix of motives: religious zeal (spreading Christianity and countering Islamic and other rival influences), glory (national prestige and individual fame for explorers and monarchs), and gold (the pursuit of wealth through direct access to Asian spice trade, precious metals, and other resources) — commonly summarized as 'God, gold, and glory.'",
            wrong: { 0: "Religious motives were real but not exclusive — economic (trade, precious metals) and political (national prestige, rivalry between Portugal and Spain) motives were equally significant driving factors.", 2: "While navigational and cartographic knowledge did advance, exploration was fundamentally driven by religious, economic, and political motives, not pure scientific curiosity alone.", 3: "Most exploration initially aimed at establishing trade routes and outposts, not abandoning Europe — permanent large-scale settlement colonies developed later and remained connected to European home countries." },
            tempting: "Choice A is tempting since religious rhetoric was prominent in exploration-era documents, but it was one of several closely intertwined motives, not the sole driver.",
            commonMistake: "Isolating a single motive (usually economic) rather than recognizing how religious, economic, and political motives reinforced each other in justifying and funding exploration.",
            apTip: "The 'God, gold, and glory' framework is a useful shorthand for FRQs on exploration motives — but be ready to explain how these motives reinforced each other (e.g., religious conversion justified claims to newly 'discovered' territory and its resources)."
          }
        },
        {
          id: 'apeuro-1-4', difficulty: 3, type: 'mcq', topic: 'The Commercial Revolution',
          prompt: "The influx of American silver and gold into Europe following Spanish colonization, combined with expanding overseas trade, contributed to the \"Commercial Revolution,\" characterized by:",
          choices: ['A decline in European trade and banking activity', 'Significant price inflation, the growth of banking and joint-stock companies, and a shift toward more market-oriented economic practices', 'The complete abandonment of agriculture in favor of industry', 'A return to a purely local, barter-based economy with no long-distance trade'],
          correct: 1,
          explanation: {
            correct: "The Commercial Revolution featured significant price inflation (partly driven by the massive influx of American silver, sometimes called the 'Price Revolution'), the growth of new financial institutions like banks and joint-stock companies (which pooled investor capital for risky overseas ventures), and an overall shift toward more market-oriented, profit-driven economic practices across Europe.",
            wrong: { 0: "Trade and banking activity significantly EXPANDED during this period, driven by new overseas wealth and trade routes, not declined.", 2: "This period predates large-scale industrialization (covered in Unit 6); agriculture remained the dominant economic activity, even as commercial and trade sectors grew.", 3: "Long-distance trade dramatically EXPANDED (connecting Europe to the Americas and Asia), the opposite of a retreat to local barter economies." },
            tempting: "None of the distractors reflect actual Commercial Revolution trends, but underestimating the scale of American silver's inflationary effect misses a frequently tested specific detail.",
            commonMistake: "Not connecting the specific CAUSE (American silver influx) to its specific ECONOMIC EFFECT (price inflation, sometimes called the Price Revolution) — this causal chain is a frequently tested detail.",
            apTip: "Know 'joint-stock company' as a specific financial innovation of this era (allowing investors to pool capital and share risk for expensive overseas ventures) — and connect American silver directly to European price inflation as a specific, testable cause-and-effect relationship."
          }
        },
        {
          id: 'apeuro-1-5', difficulty: 2, type: 'mcq', topic: 'Renaissance Art',
          prompt: "Renaissance art, exemplified by artists such as Leonardo da Vinci and Michelangelo, is particularly notable for its use of:",
          choices: ['Flat, two-dimensional figures with no attempt at realistic depth or proportion', 'Linear perspective and realistic human anatomy, reflecting humanist interest in accurately depicting the natural and human world', 'Exclusively abstract, non-representational imagery', 'A complete rejection of religious subject matter in favor of only secular themes'],
          correct: 1,
          explanation: {
            correct: "Renaissance artists developed and employed techniques like linear perspective (creating convincing three-dimensional depth on a flat surface) and studied human anatomy closely to achieve realistic proportion and musculature — reflecting the broader humanist interest in accurately observing and representing the natural and human world.",
            wrong: { 0: "This describes earlier medieval artistic conventions, which Renaissance artists specifically moved AWAY from in favor of realistic depth and proportion.", 2: "Renaissance art was overwhelmingly REPRESENTATIONAL (depicting recognizable people, scenes, and objects realistically), not abstract — abstract art is a much later development.", 3: "Religious subject matter remained extremely common in Renaissance art (such as Michelangelo's Sistine Chapel ceiling) — humanist techniques were often applied TO religious subjects, not used to replace them entirely." },
            tempting: "Choice D is tempting because humanism did increase SECULAR subject matter, but religious commissions (from the Church and wealthy patrons) remained a major, continuous source of Renaissance art.",
            commonMistake: "Assuming humanism's secular interests meant religious art disappeared — in reality, Renaissance techniques (perspective, anatomical realism) were applied to both religious and secular subjects.",
            apTip: "Know linear perspective as a specific, testable technical innovation of Renaissance art (contrast with the flatter, less proportionally accurate style of medieval art) — and be ready to cite specific artists/works (Leonardo's Mona Lisa, Michelangelo's David and Sistine Chapel) as evidence."
          }
        },
        {
          id: 'apeuro-1-6', difficulty: 3, type: 'mcq', topic: 'Christopher Columbus and the Columbian Exchange',
          prompt: "Christopher Columbus's 1492 voyage, sponsored by Spain, is historically significant primarily because it:",
          choices: ['Proved definitively that the Earth was flat', 'Initiated sustained contact between the Americas and Afro-Eurasia, beginning the Columbian Exchange of goods, people, and diseases with profound global consequences', 'Resulted in Columbus correctly identifying that he had reached a previously unknown continent', 'Had no lasting effect on either the Americas or Europe'],
          correct: 1,
          explanation: {
            correct: "Columbus's voyage initiated sustained, ongoing contact between the Americas and Afro-Eurasia (following earlier, non-sustained Norse contact centuries prior) — beginning the Columbian Exchange, which had profound and lasting global demographic, economic, and ecological consequences on both sides of the Atlantic.",
            wrong: { 0: "Educated Europeans already understood the Earth was round well before Columbus's voyage — this was not a matter of dispute his voyage resolved.", 2: "Columbus mistakenly believed he had reached Asia (the Indies), not a previously unknown continent — he died still believing this, and it was other explorers/geographers (like Amerigo Vespucci) who later recognized the Americas as a distinct landmass.", 3: "This voyage had ENORMOUS lasting effects (the Columbian Exchange, colonization, and their demographic/ecological consequences) — describing no lasting effect completely contradicts the voyage's well-documented historical significance." },
            tempting: "Choice C is tempting because it's easy to assume Columbus 'discovered' a new continent knowingly, but he specifically and persistently misidentified the Americas as part of Asia throughout his voyages.",
            commonMistake: "Misunderstanding Columbus's own beliefs about what he had found — he believed he'd reached Asia, not a 'New World'; this specific historical detail is a common point of confusion.",
            apTip: "Connect Columbus's voyage directly to the Columbian Exchange's broader consequences (Unit 1 sets up themes revisited in Unit 3/4 as Spain's American empire grows) — and remember his own mistaken belief that he'd reached Asia, a frequently tested specific detail."
          }
        }
      ]
    },
    {
      id: 2,
      name: 'Unit 2: Age of Reformation (c. 1450–1648)',
      questions: [
        {
          id: 'apeuro-2-1', difficulty: 2, type: 'mcq', topic: "Martin Luther and the 95 Theses",
          prompt: "Martin Luther's 95 Theses (1517), widely seen as the starting point of the Protestant Reformation, primarily criticized the Catholic Church's practice of:",
          choices: ['Translating the Bible into vernacular languages', 'Selling indulgences, which claimed to reduce punishment for sins in exchange for payment', 'Building elaborate cathedrals across Europe', 'Allowing priests to marry'],
          correct: 1,
          explanation: {
            correct: "Luther's 95 Theses primarily criticized the sale of indulgences — payments to the Church that were claimed to reduce the punishment for sins (both for the living and for souls in purgatory) — which Luther viewed as a corrupt practice that misrepresented the true nature of salvation through faith.",
            wrong: { 0: "Vernacular Bible translation was a LATER Reformation development (including Luther's own German translation) rather than the subject of the 95 Theses themselves, which focused specifically on indulgences.", 2: "Cathedral building itself wasn't Luther's direct target, though indulgence sales were sometimes specifically used to fund building projects (like St. Peter's Basilica in Rome), an indirect connection.", 3: "Clerical marriage became a Reformation-era practice among some Protestant clergy (including Luther himself, later), but it was not the subject of the 95 Theses, which focused specifically on indulgences." },
            tempting: "Choice C could tempt students who know indulgence sales partly funded St. Peter's Basilica construction, but the 95 Theses' direct target was the indulgence practice itself, not church architecture broadly.",
            commonMistake: "Conflating the SPECIFIC target of the 95 Theses (indulgence sales) with broader, later Reformation themes (vernacular Bibles, clerical marriage, doctrinal differences) that developed as the movement grew.",
            apTip: "Know indulgences specifically as the 95 Theses' target, and connect Luther's broader theology (justification by faith alone, sola fide, and scripture alone, sola scriptura) as the deeper theological principles that developed from this initial critique."
          }
        },
        {
          id: 'apeuro-2-2', difficulty: 3, type: 'mcq', topic: 'The Peace of Augsburg',
          prompt: "The Peace of Augsburg (1555), which temporarily settled religious conflict within the Holy Roman Empire, established the principle that:",
          choices: ['All of Europe must adopt a single, unified religion', 'Each individual prince within the Holy Roman Empire could determine whether his territory would be Catholic or Lutheran (cuius regio, eius religio)', 'All religious minorities would be granted full individual freedom of worship regardless of the ruler\'s religion', 'Calvinism would be the officially recognized religion throughout the Empire'],
          correct: 1,
          explanation: {
            correct: "The Peace of Augsburg established the principle of 'cuius regio, eius religio' ('whose realm, his religion'), allowing each individual prince within the Holy Roman Empire to determine whether his own territory would be Catholic or Lutheran — subjects were generally expected to follow their ruler's chosen faith, or in some cases permitted to relocate.",
            wrong: { 0: "The peace specifically allowed for RELIGIOUS DIVERSITY across different territories (each ruler choosing independently), not a single unified religion across all of Europe.", 2: "The principle applied to RULERS' choices for their territory, not individual freedom of worship for all subjects regardless of their ruler's decision — this is an important distinction from later, broader religious toleration principles.", 3: "The Peace of Augsburg recognized only Catholicism and Lutheranism, notably EXCLUDING Calvinism, which continued to be a source of tension (and a contributing factor to the later Thirty Years' War)." },
            tempting: "Choice C is tempting to students familiar with later religious toleration movements, but Augsburg's principle specifically empowered RULERS' choice, not universal individual religious freedom.",
            commonMistake: "Confusing 'cuius regio, eius religio' (ruler's choice determines territory's religion) with full individual religious liberty — and forgetting that Calvinism was specifically excluded from this settlement.",
            apTip: "Memorize 'cuius regio, eius religio' as a specific testable phrase — and connect Calvinism's exclusion from Augsburg directly to continuing religious tension that contributed to the devastating Thirty Years' War (1618–1648), covered later in this unit."
          }
        },
        {
          id: 'apeuro-2-3', difficulty: 2, type: 'mcq', topic: "John Calvin and Predestination",
          prompt: "John Calvin's theology, influential in the Swiss Reformation and beyond, is particularly associated with the doctrine of:",
          choices: ['Papal infallibility', 'Predestination, the belief that God has already determined which individuals are destined for salvation, regardless of their actions', 'The necessity of buying indulgences for salvation', 'The complete rejection of the Bible as a source of religious authority'],
          correct: 1,
          explanation: {
            correct: "Calvin's theology emphasized predestination — the belief that God has already determined, from eternity, which individuals ('the elect') are destined for salvation, a decision not alterable by human actions or good works, though visible signs like disciplined, moral living were often seen as possible indications of election.",
            wrong: { 0: "Papal infallibility is a Catholic doctrine (formally defined much later, in 1870); Calvin, as a Protestant reformer, specifically rejected papal authority altogether.", 2: "Calvin, like other Protestant reformers, REJECTED indulgences as a corrupt Catholic practice inconsistent with salvation through faith, not something he endorsed.", 3: "Calvin, like other Protestants, held the Bible as the SUPREME source of religious authority (sola scriptura) — he did not reject scripture, but rather rejected additional Catholic traditions/authorities alongside it." },
            tempting: "None of the distractors reflect Calvin's actual theology, but confusing Reformation figures' specific doctrines (Luther vs. Calvin vs. Catholic positions) is a common general source of error.",
            commonMistake: "Mixing up specific reformers' distinctive theological emphases — Luther is most associated with justification by faith alone, while Calvin is most specifically associated with predestination.",
            apTip: "Distinguish Calvin's predestination from Luther's justification by faith alone — both reformers rejected salvation through works/indulgences, but their specific theological emphases differed, and Calvinism spread significantly beyond Switzerland (into France as Huguenots, Scotland as Presbyterianism, and England/America as Puritanism)."
          }
        },
        {
          id: 'apeuro-2-4', difficulty: 3, type: 'mcq', topic: 'The Catholic (Counter) Reformation',
          prompt: "The Council of Trent (1545–1563), a central event of the Catholic Reformation (Counter-Reformation), primarily:",
          choices: ['Adopted major Protestant theological positions, such as justification by faith alone', 'Reaffirmed core Catholic doctrines while also addressing internal Church corruption and clarifying Catholic teaching in response to Protestant challenges', 'Abolished the Catholic Church entirely', 'Had no lasting effect on Catholic doctrine or practice'],
          correct: 1,
          explanation: {
            correct: "The Council of Trent reaffirmed core Catholic doctrines (including the necessity of both faith and good works for salvation, and the authority of Church tradition alongside scripture) while also addressing genuine internal corruption (such as clarifying rules against the sale of indulgences) as part of a broader Catholic Reformation response to the Protestant challenge.",
            wrong: { 0: "The Council specifically REJECTED and clarified against key Protestant positions (like justification by faith ALONE) rather than adopting them — it was a reaffirmation and clarification of distinctly Catholic doctrine.", 2: "The Council worked to REFORM and strengthen the Catholic Church internally, not abolish it — this was a defensive and reforming response to the Protestant Reformation, not Catholic self-destruction.", 3: "The Council had SIGNIFICANT and lasting doctrinal and institutional effects, shaping Catholic theology and practice for centuries afterward — describing no lasting effect misrepresents its historical importance." },
            tempting: "None of the distractors accurately describe Trent's actual outcomes, but underestimating its significance (choice D) misses one of the most consequential religious councils in European history.",
            commonMistake: "Confusing the Catholic Reformation/Counter-Reformation's REAFFIRMATION of core doctrine (with genuine internal reform of corrupt practices) with either full doctrinal capitulation to Protestants or a purely cosmetic, ineffective response.",
            apTip: "Connect the Council of Trent to the broader Catholic Reformation, including the founding of new religious orders like the Jesuits (Society of Jesus, founded by Ignatius of Loyola) that became central to Catholic renewal, education, and missionary efforts worldwide."
          }
        },
        {
          id: 'apeuro-2-5', difficulty: 4, type: 'mcq', topic: "The Thirty Years' War",
          prompt: "The Thirty Years' War (1618–1648), one of the most destructive conflicts in early modern European history, began primarily as a conflict over:",
          choices: ['Colonial territory disputes in the Americas', 'Religious tensions within the Holy Roman Empire (between Catholics, Lutherans, and Calvinists), which escalated into a broader political and dynastic conflict involving most major European powers', 'A trade dispute between England and the Netherlands', 'Naval competition between Spain and Portugal'],
          correct: 1,
          explanation: {
            correct: "The Thirty Years' War began primarily from religious tensions within the Holy Roman Empire (notably involving Calvinism, which had been excluded from the Peace of Augsburg), escalating from a regional Bohemian revolt into a much broader, devastating conflict that eventually involved most major European powers pursuing both religious and significant political/dynastic goals (such as the Bourbon-Habsburg rivalry).",
            wrong: { 0: "While European colonial competition existed during this era, it was not the PRIMARY cause of the Thirty Years' War, which was rooted specifically in religious/political tensions within the Holy Roman Empire.", 2: "This describes different, unrelated conflicts (English-Dutch trade rivalry) from a different context, not the actual origin of the Thirty Years' War.", 3: "Naval competition between Spain and Portugal is not the actual basis of this conflict, which centered on the Holy Roman Empire's internal religious/political tensions." },
            tempting: "None of the distractors reflect the war's actual origins, but underestimating the religious dimension (in favor of assuming purely political/dynastic causes) misses a key initial driver, even as the war's LATER phases became increasingly political.",
            commonMistake: "Not tracing the war's origin specifically to the unresolved religious tensions (Calvinism's exclusion from Augsburg) within the Holy Roman Empire, and/or not recognizing how the conflict evolved from a primarily religious dispute into a broader political power struggle as it progressed.",
            apTip: "The Peace of Westphalia (1648), which ended the Thirty Years' War, is a frequently tested companion topic — know that it extended toleration to Calvinism, reinforced the principle of state sovereignty, and significantly weakened the Holy Roman Empire's central authority, marking a key milestone in the development of the modern state system."
          }
        },
        {
          id: 'apeuro-2-6', difficulty: 3, type: 'mcq', topic: 'The English Reformation',
          prompt: "The English Reformation under King Henry VIII in the 1530s was distinctive compared to Continental reformations (like Luther's) primarily because it:",
          choices: ['Began purely out of deep theological conviction, with no political motivation whatsoever', 'Was initially driven significantly by Henry VIII\'s political and personal desire for an annulment (which the Pope refused to grant), leading to England\'s break from papal authority and the establishment of the Church of England', 'Resulted in England becoming a strictly Calvinist nation immediately', 'Had no lasting effect on English religious or political life'],
          correct: 1,
          explanation: {
            correct: "The English Reformation was distinctively driven initially by Henry VIII's political/personal motivations — his desire for an annulment from Catherine of Aragon (in order to remarry and hopefully produce a male heir), which the Pope refused to grant — leading Henry to break from papal authority and establish the Church of England (Anglican Church) with himself as its head, a process that only later developed more substantial theological distinctiveness.",
            wrong: { 0: "Unlike Luther's primarily theological motivations, Henry VIII's break from Rome was initially driven significantly by POLITICAL and PERSONAL motives (the succession/annulment issue), even as genuine theological reformation elements developed over time.", 2: "England's Reformation resulted in the distinctively Anglican Church of England, which retained many Catholic-like structures (such as bishops) even while breaking from papal authority — it did not become strictly Calvinist, though Calvinist influence (Puritanism) did grow significantly later.", 3: "The English Reformation had ENORMOUS lasting effects on English religious, political, and social life for centuries (including later conflicts like the English Civil War, partly rooted in religious tension) — describing no lasting effect is inaccurate." },
            tempting: "Choice C is tempting because Calvinism (Puritanism) did become significant in England later, but the initial Church of England under Henry VIII was not strictly Calvinist — it retained substantial Catholic-like structure initially.",
            commonMistake: "Assuming all Reformation movements were driven by the same primarily theological motivations as Luther's — Henry VIII's break from Rome is a specifically testable EXCEPTION, driven initially by dynastic/political concerns rather than doctrinal disagreement.",
            apTip: "Know the specific sequence for Henry VIII's break from Rome: desired annulment from Catherine of Aragon → papal refusal → Act of Supremacy (1534) establishing Henry as head of the Church of England — and connect this distinctly political origin to the English Reformation's initially more moderate theological changes compared to Continental Protestantism."
          }
        }
      ]
    },
    {
      id: 3,
      name: 'Unit 3: Absolutism and Constitutionalism (c. 1648–1815)',
      questions: [
        {
          id: 'apeuro-3-1', difficulty: 2, type: 'mcq', topic: 'Absolutism under Louis XIV',
          prompt: "King Louis XIV of France (r. 1643–1715), often considered the model of an absolute monarch, consolidated his power in part by:",
          choices: ['Sharing power equally with an elected national parliament', 'Centralizing political authority in himself, famously associated with the phrase \"L\'état, c\'est moi\" (\"I am the state\"), and reducing the independent political power of the nobility', 'Abolishing the monarchy in favor of a republic', 'Granting significant independent political power to regional nobles and the Estates-General'],
          correct: 1,
          explanation: {
            correct: "Louis XIV centralized political authority firmly in the monarchy itself — famously associated (though likely apocryphally) with the phrase 'L'état, c'est moi' — and worked to reduce the independent political power of the traditional nobility, notably by requiring many nobles to reside at his lavish Palace of Versailles, where he could closely monitor and control them rather than allowing them independent regional power bases.",
            wrong: { 0: "Absolutism specifically meant concentrating power in the MONARCH, not sharing it equally with an elected body — this describes the opposite of Louis XIV's actual governing approach.", 2: "Louis XIV strengthened and centralized the MONARCHY itself, the opposite of abolishing it in favor of a republic.", 3: "Louis XIV specifically worked to REDUCE nobles' independent political power (partly through the Versailles system) and did not convene the Estates-General (France's traditional representative assembly) at all during his long reign, reinforcing centralized royal authority instead." },
            tempting: "None of the distractors describe Louis XIV's actual approach, but underestimating how deliberately he neutralized noble political power (via Versailles) misses a key, specific historical strategy.",
            commonMistake: "Not connecting Louis XIV's specific STRATEGY (requiring nobles to live at Versailles, engaging them in elaborate court ritual and etiquette) to his broader GOAL of reducing their independent political power and centralizing authority in himself.",
            apTip: "Know Versailles specifically as Louis XIV's tool for controlling the nobility (keeping them dependent on royal favor and occupied with court ritual rather than independent regional power) — and contrast French absolutism directly with English constitutionalism (also covered in this unit) for comparison-based FRQs."
          }
        },
        {
          id: 'apeuro-3-2', difficulty: 3, type: 'mcq', topic: 'The English Civil War and Constitutionalism',
          prompt: "The English Civil War (1642–1651) and the subsequent Glorious Revolution (1688) together reflected a broader trend in England toward:",
          choices: ['Increasingly absolute, unchecked royal power with no role for Parliament', 'Constitutionalism — the principle that a monarch\'s power should be limited by law and shared with a representative body (Parliament), rather than absolute', 'The complete permanent abolition of the English monarchy', 'A model that other European nations universally and immediately copied without any variation'],
          correct: 1,
          explanation: {
            correct: "These events (the Civil War's execution of Charles I, the brief republican Commonwealth period, the Restoration, and finally the Glorious Revolution) together established English constitutionalism — the principle that the monarch's power must be limited by law and shared with Parliament, formalized notably in the English Bill of Rights (1689) following the Glorious Revolution.",
            wrong: { 0: "This describes the OPPOSITE trend from what actually occurred in England — the century's turmoil specifically moved England AWAY from unchecked absolute royal power toward a more constitutionally limited monarchy.", 2: "While the monarchy was briefly abolished during the Commonwealth period (1649–1660) under Cromwell, it was RESTORED in 1660 (the Restoration) — the monarchy continued, but with increasingly limited, constitutional powers going forward.", 3: "European nations followed DIFFERENT paths during this period — France (Unit 3's Louis XIV) moved toward absolutism while England moved toward constitutionalism, demonstrating notably DIFFERENT, not uniform, political developments across Europe." },
            tempting: "Choice C is tempting because the monarchy WAS briefly abolished (1649–1660), but it's important to know this was temporary — the monarchy was restored, then further constitutionally limited by 1688–89.",
            commonMistake: "Not tracing the full sequence (Civil War → temporary republic → Restoration → Glorious Revolution → Bill of Rights) and mistakenly assuming permanent monarchy abolition, or missing the comparison opportunity with contrasting French absolutism.",
            apTip: "This English constitutionalism vs. French absolutism comparison is a classic AP Euro FRQ topic — know specific evidence for each: France's Versailles-based noble control and Louis XIV's centralization versus England's Bill of Rights (1689), which limited royal power and affirmed Parliament's authority over taxation and lawmaking."
          }
        },
        {
          id: 'apeuro-3-3', difficulty: 3, type: 'mcq', topic: 'Peter the Great and Russian Westernization',
          prompt: "Tsar Peter the Great of Russia (r. 1682–1725) is particularly known for his efforts to:",
          choices: ['Isolate Russia completely from Western European influence and technology', 'Modernize and \"westernize\" Russia by adopting Western European technology, military organization, and cultural practices, while still maintaining strong autocratic (absolutist) political control', 'Abolish the Russian monarchy in favor of a Western-style parliamentary system', 'Reduce Russia\'s military strength and international influence'],
          correct: 1,
          explanation: {
            correct: "Peter the Great pursued a significant westernization program, adopting Western European technology (especially naval and military technology, having personally studied shipbuilding in the Netherlands), military organizational reforms, and certain Western cultural practices (such as requiring nobles to adopt Western-style dress and, controversially, shave their traditional beards) — all while maintaining and even strengthening Russia's autocratic, absolutist political system, not adopting Western constitutional/parliamentary models.",
            wrong: { 0: "Peter the Great specifically pursued INCREASED engagement with and adoption of Western technology and practices, the opposite of isolation.", 2: "Peter maintained and REINFORCED Russian autocracy (absolutist rule) throughout his reign — he adopted Western technology and certain cultural practices, but not Western political/parliamentary systems.", 3: "Peter significantly STRENGTHENED Russian military power (building a modern navy and reformed army) and expanded Russian territory and influence (including founding St. Petersburg as a new capital, a 'window to the West') — the opposite of reducing military strength." },
            tempting: "Choice C is tempting because 'westernization' might suggest adopting Western political systems broadly, but Peter specifically imported WESTERN TECHNOLOGY/MILITARY methods while preserving (and reinforcing) Russian autocratic political structure.",
            commonMistake: "Conflating technological/cultural westernization with political westernization — Peter adopted Western technical and some cultural practices while explicitly REJECTING Western constitutional limits on monarchical power, maintaining Russian absolutism throughout.",
            apTip: "Know St. Petersburg (founded by Peter as a new, Western-facing capital city) as a specific, testable symbol of his westernization program — and be ready to contrast Peter's TECHNOLOGICAL/military westernization with his continued POLITICAL absolutism, an important nuance for FRQs."
          }
        },
        {
          id: 'apeuro-3-4', difficulty: 2, type: 'mcq', topic: 'The Dutch Republic',
          prompt: "The Dutch Republic during its \"Golden Age\" (roughly the 17th century) was notable for combining significant economic prosperity with:",
          choices: ['A traditional absolute monarchy modeled on France', 'A relatively decentralized republican political structure and, compared to much of the rest of Europe, notable religious toleration', 'The complete absence of any overseas trade or colonial activity', 'Strict religious uniformity with no toleration for religious minorities'],
          correct: 1,
          explanation: {
            correct: "The Dutch Republic featured a relatively decentralized republican political structure (governed by regional/local governing bodies rather than a single absolute monarch), and — notably for this era — relatively significant religious toleration, which attracted religious minorities (including some Jewish communities and other Protestants) fleeing persecution elsewhere in Europe, and contributed to the Republic's vibrant intellectual and commercial life.",
            wrong: { 0: "The Dutch Republic was specifically a REPUBLIC (not a monarchy), governed through decentralized regional political structures — this stands in direct contrast to French-style absolute monarchy.", 2: "The Dutch Republic was a MAJOR overseas trading and colonial power during this period (notably through the Dutch East India Company), not absent from overseas trade — this trade was central to its prosperity.", 3: "The Dutch Republic was notably MORE tolerant religiously than much of the rest of Europe during this period, attracting religious minorities — the opposite of strict uniformity." },
            tempting: "None of the distractors accurately describe the Dutch Republic, but underestimating its distinctive republican structure (in favor of assuming a standard European monarchy) misses a key point of comparison for this unit.",
            commonMistake: "Not recognizing the Dutch Republic as a significant COUNTEREXAMPLE to the broader absolutism trend of this era — its decentralized, republican, and relatively tolerant model offers a useful comparison point against both French absolutism and English constitutionalism.",
            apTip: "Use the Dutch Republic as a THIRD political model (alongside French absolutism and English constitutionalism) for comparison-based FRQs — and connect its prosperity to the Dutch East India Company and its role in the broader Commercial Revolution (Unit 1)."
          }
        },
        {
          id: 'apeuro-3-5', difficulty: 3, type: 'mcq', topic: 'Mercantilism in Practice',
          prompt: "Jean-Baptiste Colbert, Louis XIV's finance minister, implemented mercantilist economic policies in France that primarily aimed to:",
          choices: ['Encourage completely unrestricted free trade with no government involvement in the economy', 'Maximize French national wealth and self-sufficiency by promoting domestic manufacturing, restricting imports, and encouraging colonial economic activity that benefited France specifically', 'Eliminate France\'s colonial empire entirely', 'Reduce the French monarchy\'s involvement in and control over the national economy'],
          correct: 1,
          explanation: {
            correct: "Colbert's mercantilist policies aimed to maximize French national wealth and self-sufficiency through active government intervention — promoting domestic manufacturing (including luxury goods industries), restricting imports (to reduce dependency on foreign goods and protect domestic industry), and directing colonial economic activity to specifically benefit France as the parent country, consistent with broader mercantilist principles applied across European empires during this era.",
            wrong: { 0: "Mercantilism specifically involved SIGNIFICANT government intervention and regulation of the economy (tariffs, subsidies, colonial trade restrictions) — this is the opposite of unrestricted free trade with no government involvement.", 2: "Colbert and Louis XIV specifically sought to EXPAND and economically exploit French colonial holdings (not eliminate them), consistent with mercantilist principles of using colonies to benefit the parent country.", 3: "Colbert's policies specifically INCREASED, not reduced, the French monarchy's active involvement in and control over economic activity, reflecting the broader trend of absolutist states directing national economic policy." },
            tempting: "Choice A is tempting to students who conflate mercantilism with later free-trade economic philosophy, but mercantilism specifically involved extensive government economic intervention and control.",
            commonMistake: "Confusing mercantilism (government-directed economic policy aimed at national wealth accumulation and favorable trade balance) with later, competing free-trade/laissez-faire economic philosophy — these represent essentially opposite approaches to government's economic role.",
            apTip: "Connect Colbert's mercantilism directly to Louis XIV's broader absolutist state-building — mercantilist economic policy and political absolutism reinforced each other, with a strong, centralized state actively directing economic activity to fund and support royal power and prestige."
          }
        },
        {
          id: 'apeuro-3-6', difficulty: 4, type: 'mcq', topic: 'Comparing Absolutism and Constitutionalism',
          prompt: "A key difference between the political developments in France (under Louis XIV) and England (through the Glorious Revolution) during this period was that:",
          choices: ['France moved toward limiting royal power through a representative body, while England moved toward absolute, unchecked monarchical power', 'France concentrated political power increasingly in the monarch with reduced noble/parliamentary influence, while England established firmer legal limits on royal power, affirming Parliament\'s authority', 'Both nations developed identical, functionally interchangeable political systems by 1715', 'Neither nation experienced any significant political change during this period'],
          correct: 1,
          explanation: {
            correct: "France under Louis XIV moved toward absolutism, with the monarch concentrating political power and reducing independent noble and representative institutional influence (notably not convening the Estates-General), while England, through the Civil War and especially the Glorious Revolution and the resulting Bill of Rights (1689), established firmer legal limits on royal power and affirmed Parliament's authority, particularly over taxation and lawmaking — representing two clearly contrasting political trajectories.",
            wrong: { 0: "This has the comparison exactly backwards — France moved toward ABSOLUTISM (increased royal power), while England moved toward CONSTITUTIONALISM (limited royal power), not the reverse.", 2: "France and England developed CLEARLY DIFFERENT political systems during this period (absolutism versus constitutionalism) — describing them as identical or interchangeable directly contradicts this well-documented historical divergence.", 3: "Both nations experienced highly SIGNIFICANT political changes during this period (Louis XIV's absolutist consolidation in France; the Civil War, Restoration, and Glorious Revolution in England) — describing no significant change misrepresents this pivotal era in each nation's political development." },
            tempting: "Choice A is tempting only if the specific developments in France and England are confused/reversed, but the actual historical trajectories moved in genuinely opposite directions.",
            commonMistake: "Reversing which nation moved toward absolutism versus constitutionalism, or failing to identify SPECIFIC supporting evidence (Versailles/no Estates-General for France; Bill of Rights/Parliament's power for England) needed for a strong comparative FRQ response.",
            apTip: "This France-England comparison is one of the most frequently tested topics in AP European History — always be ready to cite SPECIFIC evidence for each nation's trajectory (Louis XIV's Versailles system and absolutist rule for France; the English Bill of Rights and Parliament's established authority for England) rather than relying on general characterizations alone."
          }
        }
      ]
    },
    {
      id: 4,
      name: 'Unit 4: Scientific, Philosophical, and Political Developments (c. 1648–1815)',
      questions: [
        {
          id: 'apeuro-4-1', difficulty: 2, type: 'mcq', topic: 'The Scientific Revolution',
          prompt: "The Scientific Revolution, associated with figures such as Copernicus, Galileo, and Newton, is significant primarily for establishing:",
          choices: ['A renewed reliance on ancient authority (such as Aristotle) as the sole basis for understanding the natural world', 'A new methodology emphasizing observation, experimentation, and mathematical reasoning to understand and describe the natural world, often challenging previously accepted Church-endorsed views', 'A complete rejection of mathematics as a tool for understanding nature', 'A conclusion that the Earth is the fixed center of the universe'],
          correct: 1,
          explanation: {
            correct: "The Scientific Revolution established a new methodology centered on direct observation, controlled experimentation, and mathematical description of natural phenomena — figures like Galileo (empirical observation and experimentation) and Newton (mathematical laws of motion and gravity) exemplified this approach, which often directly challenged previously accepted views, including some endorsed by the Catholic Church (such as the geocentric model of the universe).",
            wrong: { 0: "The Scientific Revolution specifically MOVED AWAY from relying solely on ancient authorities (like Aristotle) in favor of new observation and experimentation-based methods — this represents a significant break from, not a return to, pure ancient authority.", 2: "Mathematics became INCREASINGLY central to this new scientific approach (especially with Newton's mathematical laws) — the Scientific Revolution significantly increased, not rejected, mathematics's role in understanding nature.", 3: "The Scientific Revolution's major astronomical development (heliocentrism, advanced by Copernicus and later Galileo) specifically OVERTURNED the earlier geocentric (Earth-centered) model — describing a geocentric conclusion is exactly the view this revolution challenged and ultimately displaced." },
            tempting: "None of the distractors reflect the actual outcome, but underestimating the conflict with existing Church-endorsed views (as in Galileo's trial) misses an important, specific historical episode.",
            commonMistake: "Not recognizing the SPECIFIC methodological shift (empirical observation/experimentation plus mathematical description) that defines the Scientific Revolution, and/or forgetting the specific tension this created with some existing Church teachings (as dramatized by Galileo's trial before the Inquisition).",
            apTip: "Know the heliocentric model (Copernicus, later strongly supported by Galileo's telescopic observations) as a specific, testable example of how new scientific methodology directly challenged prior Church-endorsed geocentric views — and connect this new empirical, questioning mindset directly to the Enlightenment's broader application of reason to society and politics."
          }
        },
        {
          id: 'apeuro-4-2', difficulty: 2, type: 'mcq', topic: 'Enlightenment Political Philosophy',
          prompt: "Enlightenment philosophers such as John Locke and Jean-Jacques Rousseau developed political ideas centered on the concept that:",
          choices: ['Absolute monarchy is the only legitimate and effective form of government, unquestionable by subjects', 'Legitimate political authority derives from the consent of the governed (a \"social contract\"), and government exists to protect natural rights, with unjust governments potentially subject to resistance', 'Social and political hierarchy should never be questioned or reformed under any circumstances', 'Reason has no useful application to political or social questions'],
          correct: 1,
          explanation: {
            correct: "Enlightenment political philosophers developed influential social contract theories, arguing that legitimate government authority derives from the CONSENT of the governed and exists specifically to protect natural rights (life, liberty, property, for Locke) — with a government failing this basic purpose potentially subject to legitimate resistance or overthrow, ideas that directly influenced later revolutionary movements.",
            wrong: { 0: "This is essentially the OPPOSITE of core Enlightenment political philosophy, which specifically challenged the legitimacy of unchecked absolute monarchical power in favor of consent-based, rights-protecting government.", 2: "Enlightenment philosophy specifically ENCOURAGED critically questioning traditional political and social hierarchies using reason — this questioning, reform-minded stance is a defining feature of Enlightenment thought.", 3: "The Enlightenment was specifically defined by its confidence in APPLYING reason to political, social, and even religious questions — describing reason as inapplicable to politics is the opposite of this era's defining intellectual approach." },
            tempting: "None of the distractors reflect actual core Enlightenment political philosophy, but assuming continuity with existing absolutist structures (choice A) misses the fundamentally critical, reason-based challenge to those structures.",
            commonMistake: "Not clearly connecting SPECIFIC Enlightenment concepts (natural rights, social contract, consent of the governed) to their DIRECT later influence on revolutionary movements (French Revolution, covered in Unit 5) — this causal connection is frequently tested.",
            apTip: "Distinguish Locke's more OPTIMISTIC view of human nature and government (protecting pre-existing natural rights) from Rousseau's concept of the 'general will' (collective popular sovereignty) — both influenced revolutionary thought but with somewhat different emphases worth knowing for FRQs."
          }
        },
        {
          id: 'apeuro-4-3', difficulty: 3, type: 'mcq', topic: 'Enlightened Absolutism',
          prompt: "Rulers such as Frederick the Great of Prussia and Catherine the Great of Russia are often described as \"enlightened absolutists\" because they:",
          choices: ['Fully abolished monarchy in favor of Enlightenment-inspired republican government', 'Maintained absolute monarchical political power while implementing some Enlightenment-inspired reforms, such as religious toleration, legal reform, or support for education and the arts', 'Completely rejected all Enlightenment ideas as dangerous to political stability', 'Immediately granted full political rights and representation to all social classes'],
          correct: 1,
          explanation: {
            correct: "'Enlightened absolutists' maintained fundamentally absolute, centralized monarchical political power while selectively implementing certain Enlightenment-inspired reforms — such as expanded religious toleration, legal code modernization, administrative efficiency improvements, and patronage of Enlightenment arts, sciences, and education — without fundamentally challenging their own ultimate political authority.",
            wrong: { 0: "These rulers specifically MAINTAINED (and often reinforced) absolute monarchical power — they did not move toward republican government, distinguishing 'enlightened absolutism' from more radical, later revolutionary movements.", 2: "These rulers specifically and selectively ENGAGED WITH and implemented certain Enlightenment ideas (in areas like legal reform, religious toleration, education) — full rejection would contradict the very basis for the 'enlightened' label historians apply to them.", 3: "Enlightened absolutists specifically did NOT grant broad political representation or rights to the general population — political power remained firmly concentrated in the monarch, distinguishing this from genuine democratic or constitutional reform." },
            tempting: "Choice D is tempting because these rulers DID implement some genuine reforms, but they specifically stopped well short of granting broad political representation, maintaining their own absolute authority throughout.",
            commonMistake: "Overestimating the extent of 'enlightened absolutist' reforms — these rulers selectively adopted Enlightenment ideas that didn't threaten their own political power, rather than embracing the more politically radical implications (like popular sovereignty) of Enlightenment philosophy.",
            apTip: "Know specific examples for enlightened absolutists: Frederick the Great's religious toleration and legal reforms in Prussia; Catherine the Great's patronage of Enlightenment thinkers and (limited) legal reform attempts in Russia — and be ready to note the LIMITS of their reforms (maintained serfdom, absolute political power) for a nuanced FRQ response."
          }
        },
        {
          id: 'apeuro-4-4', difficulty: 3, type: 'mcq', topic: 'The Enlightenment and Religious Toleration',
          prompt: "Enlightenment thinkers such as Voltaire were notably critical of:",
          choices: ['All forms of organized religion and religious institutions equally, with no distinction between them', 'Religious intolerance and institutional abuses (such as the persecution of religious minorities), while some Enlightenment figures still maintained personal religious or deist beliefs', 'The application of reason to religious questions', 'Any effort at legal or judicial reform'],
          correct: 1,
          explanation: {
            correct: "Voltaire and other Enlightenment thinkers were particularly critical of religious INTOLERANCE and specific institutional abuses (such as persecution of religious minorities and the influence of what they saw as superstition or corruption within religious institutions), while many Enlightenment figures — including Voltaire himself — maintained deist beliefs (belief in a rational creator god who does not intervene directly in the world) rather than rejecting religious belief entirely.",
            wrong: { 0: "Most Enlightenment critique targeted SPECIFIC abuses and intolerance rather than religious belief itself universally and equally — many prominent Enlightenment figures (including Voltaire) were deists, maintaining some form of religious/spiritual belief.", 2: "The Enlightenment specifically APPLIED reason to religious questions (this application is central to Enlightenment thought, including deism itself, which used reason to argue for a rational creator) — this is the opposite of avoiding reason in religious matters.", 3: "Voltaire specifically ADVOCATED FOR legal and judicial reform (notably in cases of wrongful persecution, such as the Calas affair) — this describes the opposite of his actual reformist activities." },
            tempting: "Choice A is tempting because Enlightenment critique of religious institutions was often sharp, but it's important to distinguish criticism of INTOLERANCE/ABUSES from wholesale rejection of religious belief itself.",
            commonMistake: "Overstating Enlightenment thinkers' hostility to religion in general — most (including Voltaire) specifically targeted intolerance, superstition, and institutional abuse rather than rejecting religious/spiritual belief altogether (many were deists, not atheists).",
            apTip: "Know Voltaire's specific advocacy for religious toleration and his involvement in specific legal reform cases (like the Calas affair, where he campaigned against a wrongful execution) as concrete evidence for FRQs about Enlightenment critiques of religious intolerance and judicial injustice."
          }
        },
        {
          id: 'apeuro-4-5', difficulty: 2, type: 'mcq', topic: "Adam Smith and Economic Liberalism",
          prompt: "Adam Smith's Wealth of Nations (1776) introduced economic ideas that directly challenged mercantilism by arguing that:",
          choices: ['Government control over all economic activity produces the greatest national wealth', 'Individuals pursuing their own self-interest within a relatively free market (with limited government interference) would collectively promote overall economic prosperity, guided by an \"invisible hand\"', 'International trade should be completely banned to protect domestic industry', 'Economic activity has no connection to individual self-interest whatsoever'],
          correct: 1,
          explanation: {
            correct: "Adam Smith argued that individuals freely pursuing their own rational self-interest within a relatively unregulated market — with minimal government interference — would, guided by what he metaphorically called an 'invisible hand,' collectively and unintentionally promote overall economic efficiency and prosperity more effectively than heavy government direction and control (mercantilism).",
            wrong: { 0: "This describes essentially the MERCANTILIST position Smith was specifically challenging — Smith argued for LESS, not more, government control over economic activity.", 2: "Smith specifically argued for FREER trade (reduced tariffs and government trade restrictions), the opposite of banning international trade — this directly challenged mercantilist trade restriction policies.", 3: "Individual self-interest is CENTRAL to Smith's economic theory — he argued this self-interested behavior, operating within a free market, naturally promotes broader economic benefit, not that self-interest is irrelevant to economics." },
            tempting: "Choice A is tempting because it describes a real economic philosophy (mercantilism), but it's the OPPOSITE of what Smith was proposing — Smith specifically challenged extensive government economic control.",
            commonMistake: "Confusing Smith's free-market economic liberalism with the mercantilist government-control philosophy it specifically challenged — these represent essentially opposing views on government's proper economic role.",
            apTip: "Connect Adam Smith's economic liberalism directly to broader Enlightenment principles (applying reason to social/economic questions, skepticism of unchecked government authority) — and note his 'invisible hand' metaphor as a specific, frequently tested concept describing how individual self-interest can unintentionally serve broader social benefit within a free market."
          }
        },
        {
          id: 'apeuro-4-6', difficulty: 3, type: 'mcq', topic: 'The Enlightenment and Women',
          prompt: "Mary Wollstonecraft's A Vindication of the Rights of Woman (1792) applied Enlightenment principles of reason and natural rights to argue that:",
          choices: ['Women were inherently intellectually inferior to men and should be excluded from all education', 'Women possessed the same rational capacity as men and deserved equal educational opportunities and rights, challenging the era\'s prevailing gender assumptions', 'The Enlightenment had no relevance whatsoever to questions of gender or women\'s status', 'Existing political and social structures regarding women\'s roles were fully just and required no reform'],
          correct: 1,
          explanation: {
            correct: "Wollstonecraft directly applied core Enlightenment principles (belief in universal human reason and natural rights) to argue that women possessed the same fundamental rational capacity as men, and therefore deserved equal educational opportunities and greater social/political rights — directly challenging prevailing assumptions about women's supposedly inherent intellectual inferiority and appropriately limited social role.",
            wrong: { 0: "This describes the PREVAILING view Wollstonecraft was specifically challenging and arguing AGAINST — she argued women were NOT inherently intellectually inferior, advocating instead for equal educational opportunity.", 2: "Wollstonecraft's work is a DIRECT and significant example of Enlightenment principles being extended and applied to gender/women's status — describing no relevance directly contradicts the actual content and significance of her argument.", 3: "Wollstonecraft specifically argued that existing structures limiting women's education and rights were UNJUST and needed significant reform — she did not defend the status quo but rather critiqued it using Enlightenment reasoning." },
            tempting: "None of the distractors reflect Wollstonecraft's actual argument, but underestimating her direct application of mainstream Enlightenment principles (rather than treating her ideas as separate from the broader movement) misses an important connection.",
            commonMistake: "Treating Wollstonecraft's arguments as separate from 'mainstream' Enlightenment thought rather than recognizing them as a DIRECT APPLICATION of the same core Enlightenment principles (universal reason, natural rights) that other, better-known Enlightenment figures used for other political arguments.",
            apTip: "Wollstonecraft is a key example for FRQs about the Enlightenment's LIMITS and internal tensions — many prominent Enlightenment thinkers did not extend their natural rights arguments to women, making Wollstonecraft's work an important critique from WITHIN the broader Enlightenment intellectual framework, not from outside it."
          }
        }
      ]
    },
    {
      id: 5,
      name: 'Unit 5: Conflict, Crisis, and Reaction in the Late 18th Century (c. 1648–1815)',
      questions: [
        {
          id: 'apeuro-5-1', difficulty: 2, type: 'mcq', topic: 'Causes of the French Revolution',
          prompt: "The outbreak of the French Revolution in 1789 is commonly attributed to a combination of factors, including:",
          choices: ['A complete absence of any financial problems facing the French monarchy', 'Severe government financial crisis (worsened by costly wars and an inequitable tax system), Enlightenment ideas challenging absolutist and aristocratic privilege, and widespread social/economic grievances, especially among the Third Estate', 'Universal satisfaction among all French social classes with the existing political and social order', 'A sudden, completely unexpected event with no underlying long-term causes whatsoever'],
          correct: 1,
          explanation: {
            correct: "The French Revolution's outbreak resulted from a combination of long-term and immediate factors: severe government financial crisis (worsened by costly involvement in wars, including support for the American Revolution, combined with an inequitable tax system that largely exempted the privileged First and Second Estates), the spread of Enlightenment ideas challenging traditional absolutist and aristocratic privilege, and significant social/economic grievances, particularly among the largely unprivileged and heavily taxed Third Estate (commoners).",
            wrong: { 0: "France faced a SEVERE financial crisis by the late 1780s (worsened significantly by war debts, including support for American independence) — this financial crisis was a major, well-documented immediate trigger for the calling of the Estates-General and the subsequent Revolution.", 2: "There was significant, deep social and economic DISSATISFACTION, especially among the Third Estate, who bore a disproportionate tax burden while lacking proportional political representation — describing universal satisfaction directly contradicts these well-documented grievances.", 3: "The Revolution had SIGNIFICANT identifiable long-term underlying causes (financial crisis, Enlightenment ideas, social inequality) that developed over years/decades before 1789 — describing it as completely unexpected with no underlying causes misrepresents this well-documented historical buildup." },
            tempting: "None of the distractors accurately capture the actual causes, but underestimating the specific financial crisis's severity (in favor of assuming purely ideological causes) misses a crucial immediate trigger.",
            commonMistake: "Not identifying the FULL combination of causes (financial crisis, Enlightenment ideology, social/economic inequality specifically affecting the Third Estate) together — a strong FRQ response addresses multiple interconnected causal factors rather than relying on just one.",
            apTip: "Know the specific structure of French society under the 'Old Regime' (Ancien Régime) — the First Estate (clergy), Second Estate (nobility), and Third Estate (everyone else, bearing most of the tax burden) — as this social structure and its inequities are frequently tested as a specific underlying cause of revolutionary grievance."
          }
        },
        {
          id: 'apeuro-5-2', difficulty: 3, type: 'mcq', topic: 'The Declaration of the Rights of Man',
          prompt: "The Declaration of the Rights of Man and of the Citizen (1789), adopted early in the French Revolution, reflected the direct influence of:",
          choices: ['Traditional medieval feudal principles, with no connection to Enlightenment thought', 'Enlightenment political philosophy, proclaiming principles such as natural rights, popular sovereignty, and legal equality for citizens', 'A complete rejection of any concept of individual rights', 'An endorsement of continued absolute monarchical power with no limitations'],
          correct: 1,
          explanation: {
            correct: "The Declaration of the Rights of Man and of the Citizen directly reflected Enlightenment political philosophy, proclaiming principles including natural, inalienable rights (such as liberty, property, and security), popular sovereignty (political authority deriving from the nation/people rather than divine right of kings), and legal equality for citizens before the law — representing a direct and explicit application of Enlightenment ideas to a foundational revolutionary political document.",
            wrong: { 0: "The Declaration specifically REJECTED traditional feudal/absolutist principles in favor of new Enlightenment-influenced ideas about rights and popular sovereignty — it represented a revolutionary break from, not a continuation of, medieval feudal principles.", 2: "The Declaration is specifically FOUNDED on the concept of individual natural rights (liberty, property, security, resistance to oppression) — this is one of its most central and defining features, not something it rejected.", 3: "The Declaration specifically challenged and limited traditional absolute monarchical authority by asserting POPULAR SOVEREIGNTY and legal equality — this represents a direct challenge to, not an endorsement of, continued unchecked absolute royal power." },
            tempting: "None of the distractors accurately describe the Declaration, but underestimating its direct, explicit connection to specific Enlightenment philosophers' ideas (natural rights, social contract, popular sovereignty) misses the document's clear intellectual lineage.",
            commonMistake: "Not connecting the Declaration's SPECIFIC language and principles directly back to specific Enlightenment thinkers and concepts (Locke's natural rights, Rousseau's popular sovereignty/general will) covered earlier in Unit 4 — this connection strengthens FRQ analysis significantly.",
            apTip: "Compare the French Declaration of the Rights of Man directly with the American Declaration of Independence (both Enlightenment-influenced founding documents) for a strong comparative FRQ — noting both similarities (natural rights language) and differences (context, specific provisions, ultimate political outcomes)."
          }
        },
        {
          id: 'apeuro-5-3', difficulty: 4, type: 'mcq', topic: 'The Reign of Terror',
          prompt: "The Reign of Terror (1793–1794), led by Maximilien Robespierre and the Committee of Public Safety during the radical phase of the French Revolution, was characterized by:",
          choices: ['A complete cessation of any political violence or executions', 'Mass arrests, show trials, and executions (often by guillotine) of perceived enemies of the Revolution, justified as necessary to defend the Revolution against internal and external threats', 'The full restoration of the pre-revolutionary monarchy and aristocratic privilege', 'Universal political stability with no internal revolutionary conflict or violence'],
          correct: 1,
          explanation: {
            correct: "The Reign of Terror featured mass arrests, often summary trials, and executions (frequently by guillotine) of individuals accused of being counter-revolutionaries or enemies of the Revolution — including former nobles, clergy, and eventually even rival revolutionary factions themselves — justified by Robespierre and the Committee of Public Safety as necessary emergency measures to defend the fragile Revolution against genuine internal conspiracy and external military threats from other European monarchies.",
            wrong: { 0: "This period is specifically and historically defined BY intense political violence and mass executions — describing a cessation of violence directly contradicts the Terror's well-documented, defining historical character.", 2: "The Terror represented the RADICAL, revolutionary phase of the Revolution (with the monarchy having already been abolished and King Louis XVI executed) — it did not restore the monarchy, but rather intensified revolutionary radicalism.", 3: "This period was specifically marked by SIGNIFICANT internal revolutionary conflict, political instability, and violence (including conflict between rival revolutionary factions) — describing universal stability misrepresents this historically volatile and violent period." },
            tempting: "None of the distractors reflect the Terror's actual character, but underestimating its scale and specifically revolutionary (not restorationist) nature misses key defining features.",
            commonMistake: "Not understanding the Terror's SPECIFIC justification (as an emergency defensive measure against perceived internal/external threats to the Revolution) alongside its brutal practical reality, and/or not recognizing that Robespierre himself was eventually arrested and executed as the Terror ended (Thermidorian Reaction, 1794).",
            apTip: "Know the eventual overthrow and execution of Robespierre himself (the Thermidorian Reaction, July 1794) as the direct end of the Terror — this demonstrates how the revolutionary violence eventually turned against its own architects, a frequently tested specific detail showing the Revolution's continuing instability."
          }
        },
        {
          id: 'apeuro-5-4', difficulty: 2, type: 'mcq', topic: "Napoleon Bonaparte's Rise to Power",
          prompt: "Napoleon Bonaparte's rise to power in France, culminating in his coup d'état in 1799 and later self-coronation as Emperor in 1804, occurred in the context of:",
          choices: ['A period of complete political stability in France with no need for strong leadership', 'Ongoing political instability and disorder following the Revolution and the Terror, which created conditions favorable to a strong, popular military leader seizing centralized political power', 'A direct and immediate continuation of the pre-revolutionary Bourbon monarchy with no interruption', 'A complete rejection of any military involvement in French politics'],
          correct: 1,
          explanation: {
            correct: "Napoleon's rise occurred amid significant ongoing political instability, disorder, and disillusionment in France following the Revolution's radical phases and the Terror — the ineffective and increasingly unpopular Directory government (which followed the Terror) created conditions in which Napoleon, a successful and popular military general, could seize centralized political power through his 1799 coup, eventually consolidating this into imperial rule by 1804.",
            wrong: { 0: "France experienced SIGNIFICANT ongoing political instability during this period (following the Revolution and Terror) — this instability, not stability, created the specific conditions enabling Napoleon's rise to power.", 2: "Napoleon's rise represented a NEW form of rule (eventually imperial, but originating from revolutionary/military circumstances) — it was not a direct continuation of the pre-revolutionary Bourbon monarchy, which had been overthrown by the Revolution.", 3: "Napoleon's rise to power was SPECIFICALLY and directly enabled by his MILITARY success and role — military involvement in politics was central to, not absent from, his path to power." },
            tempting: "None of the distractors accurately describe the context of Napoleon's rise, but underestimating the specific instability of the Directory period misses an important immediate political context.",
            commonMistake: "Not connecting Napoleon's rise SPECIFICALLY to the political instability and popular disillusionment of the Directory period (1795–1799) that directly preceded and enabled his coup — this specific causal chain is frequently tested.",
            apTip: "Know the specific sequence: Terror ends (1794) → Directory government (1795–1799, increasingly unstable/unpopular) → Napoleon's coup d'état (1799, establishing the Consulate) → Napoleon crowns himself Emperor (1804) — this timeline demonstrates how revolutionary instability directly enabled Napoleon's consolidation of power."
          }
        },
        {
          id: 'apeuro-5-5', difficulty: 3, type: 'mcq', topic: "The Napoleonic Code",
          prompt: "The Napoleonic Code (Civil Code of 1804), one of Napoleon's most significant and lasting achievements, established:",
          choices: ['A return to feudal legal privileges based on birth and social rank', 'A unified, rationalized legal system emphasizing legal equality for male citizens, secular authority, property rights, and merit over hereditary privilege, while notably limiting women\'s legal rights', 'Complete legal equality for women equal to that granted to men', 'The immediate restoration of the pre-revolutionary Bourbon monarchy\'s legal system'],
          correct: 1,
          explanation: {
            correct: "The Napoleonic Code established a unified, rationalized legal system (replacing the patchwork of regional legal traditions that existed under the old regime) emphasizing legal equality for male citizens before the law, secular civil authority, protection of property rights, and merit-based advancement over hereditary aristocratic privilege — reflecting certain Revolutionary/Enlightenment principles — while notably and significantly RESTRICTING women's legal rights (subordinating wives legally to husbands in several respects), reflecting the era's persistent gender inequality even amid other legal modernization.",
            wrong: { 0: "The Code specifically REJECTED feudal privilege based on birth in favor of legal equality (for men) and merit — this represents a significant break from, not a return to, feudal legal traditions.", 2: "The Code notably LIMITED rather than expanded women's legal rights and status (particularly within marriage) — describing full equality with men directly contradicts the Code's well-documented gender provisions.", 3: "The Code represented a NEW, rationalized legal system reflecting certain revolutionary principles (legal equality for men, secular authority) — it was not a simple restoration of the pre-revolutionary Bourbon legal system." },
            tempting: "Choice C is tempting because the Code DID establish legal equality principles, but specifically and significantly limited to men — women's legal status was notably restricted under the Code, an important nuance.",
            commonMistake: "Overstating the Napoleonic Code's egalitarianism by failing to note its SPECIFIC AND SIGNIFICANT limitations regarding women's legal rights — a nuanced, accurate FRQ response should note both the Code's modernizing aspects (for men) and its regressive aspects (for women).",
            apTip: "The Napoleonic Code is an excellent example for FRQs about the COMPLEX, mixed legacy of the French Revolution and Napoleonic era — genuinely modernizing in some respects (legal equality for men, merit over birth) while explicitly reinforcing gender inequality in others, demonstrating that revolutionary/Enlightenment principles were not applied uniformly across all groups."
          }
        },
        {
          id: 'apeuro-5-6', difficulty: 3, type: 'mcq', topic: 'The Congress of Vienna',
          prompt: "The Congress of Vienna (1814–1815), convened after Napoleon's defeat, primarily aimed to:",
          choices: ['Spread revolutionary and Napoleonic principles throughout Europe', 'Restore political stability and a balance of power in Europe, often through restoring traditional monarchies and adjusting territorial boundaries, in reaction against revolutionary and Napoleonic disruption', 'Establish a single unified European government replacing all individual nations', 'Immediately grant full democratic representation to all European populations'],
          correct: 1,
          explanation: {
            correct: "The Congress of Vienna, led significantly by conservative statesmen including Austria's Klemens von Metternich, aimed to restore political stability and a workable balance of power among European states following the disruptions of the French Revolution and Napoleonic Wars — this often involved restoring traditional monarchies (including the Bourbon monarchy in France) and adjusting territorial boundaries specifically to prevent any single power from becoming too dominant again, reflecting a broadly conservative reaction against revolutionary and Napoleonic upheaval.",
            wrong: { 0: "The Congress represented a fundamentally CONSERVATIVE REACTION AGAINST revolutionary and Napoleonic principles, seeking to restore traditional order — the opposite of spreading these disruptive principles further.", 2: "The Congress worked to restore and rebalance the EXISTING system of independent European states/monarchies (not replace them with a single unified government) — the concept of a unified European government is a much later development.", 3: "The Congress specifically favored RESTORING traditional monarchical authority (not democratic representation) as part of its broadly conservative approach to post-Napoleonic stability — full democratic representation was not its goal." },
            tempting: "None of the distractors accurately describe the Congress's actual conservative, stability-focused goals, but assuming continuity with revolutionary principles (choice A) misunderstands its fundamentally reactionary character.",
            commonMistake: "Not recognizing the Congress of Vienna's fundamentally CONSERVATIVE, restoration-oriented character as a direct reaction AGAINST the revolutionary and Napoleonic changes of the preceding decades — this conservative reaction sets up Unit 6/7's later tensions between conservatism and nationalism/liberalism.",
            apTip: "Know Klemens von Metternich as the key architect of the Congress of Vienna's conservative settlement — and connect this conservative restoration directly to the SUBSEQUENT tension with rising nationalist and liberal movements covered in Units 6 and 7, since the Congress's restored order would face increasing challenges throughout the 19th century."
          }
        }
      ]
    },
    {
      id: 6,
      name: 'Unit 6: Industrialization and Its Effects (c. 1815–1914)',
      questions: [
        {
          id: 'apeuro-6-1', difficulty: 2, type: 'mcq', topic: 'Origins of Industrialization in Britain',
          prompt: "Great Britain's early leadership in industrialization (beginning in the mid-to-late 18th century) is often attributed to a combination of factors, including:",
          choices: ['A complete absence of accessible coal and iron ore resources', 'Access to abundant coal and iron ore, a growing labor supply (partly from agricultural changes), accumulated capital, and relatively stable political/financial institutions', 'The total absence of any colonial empire or overseas trade connections', 'Government policy that actively banned all technological innovation'],
          correct: 1,
          explanation: {
            correct: "Britain's industrial leadership resulted from a combination of favorable factors: abundant domestic coal and iron ore resources (essential raw materials for steam power and iron production), a growing available labor supply (partly resulting from earlier agricultural changes, including enclosure, that freed up rural labor), significant accumulated capital available for investment, and relatively stable political and financial institutions that supported industrial investment and risk-taking.",
            wrong: { 0: "Britain had significant, ACCESSIBLE coal and iron ore deposits — crucial raw material inputs directly enabling early industrial development like steam engines and iron production.", 2: "Britain's extensive colonial empire and overseas trade provided important raw materials, export markets, and capital that helped fund industrial development — an absence of these connections would have undermined, not supported, industrialization.", 3: "British institutions generally SUPPORTED technological innovation (including patent protections for inventors) rather than banning it — this supportive environment was a contributing factor to industrial leadership." },
            tempting: "None of the distractors reflect Britain's actual advantages, but underestimating natural resource access is a common misconception.",
            commonMistake: "Focusing on just one single factor rather than recognizing the FULL COMBINATION (resources, labor, capital, institutions) that together explain Britain's early industrial leadership.",
            apTip: "For an FRQ on industrialization's origins, address multiple contributing factors together (coal/iron resources, labor supply changes from agricultural improvements, capital from trade/colonialism, supportive institutions) rather than a single-cause explanation — and connect to Unit 1's Commercial Revolution for the deeper capital-accumulation roots."
          }
        },
        {
          id: 'apeuro-6-2', difficulty: 3, type: 'mcq', topic: 'Social Consequences of Industrialization',
          prompt: "Industrialization in 19th-century Europe contributed significantly to the growth of:",
          choices: ['A completely classless society with no economic distinctions between people', 'New, more distinct social classes, particularly a growing industrial working class facing difficult factory conditions, and a growing industrial/business-owning middle class', 'The immediate elimination of all pre-existing social and economic inequality', 'A complete return to purely agricultural, pre-industrial economic and social structures'],
          correct: 1,
          explanation: {
            correct: "Industrialization significantly reshaped European social class structures, contributing to the growth of a large industrial working class facing often difficult conditions (long hours, dangerous factories, low wages, crowded urban housing) alongside a growing industrial/business-owning middle class (bourgeoisie) that increasingly held significant economic and, eventually, political influence.",
            wrong: { 0: "Industrialization created NEW, often starkly visible class distinctions (between workers and owners), the opposite of a classless society — these divisions became significant sources of social tension.", 2: "Industrialization created NEW forms of inequality (between industrial workers and capital-owning classes) rather than eliminating economic inequality — in many respects it intensified visible disparities in rapidly growing industrial cities.", 3: "Industrialization represented a significant SHIFT AWAY from primarily agricultural structures toward increasingly industrial, urban ones — the opposite of a return to purely agricultural structures." },
            tempting: "None of the distractors accurately describe industrialization's social effects, but assuming automatic equalization (choices A/C) reflects a common but historically inaccurate assumption.",
            commonMistake: "Assuming industrialization's technological/economic advances automatically improved conditions equally for all — in reality, it created new class divisions and often significant hardship for workers, fueling later labor movements and socialist political ideologies (Unit 7).",
            apTip: "Connect industrialization's class effects directly to the rise of socialism/Marxism (Unit 7) and early labor movements/unions — this causal connection between economic transformation and new political ideologies is frequently tested."
          }
        },
        {
          id: 'apeuro-6-3', difficulty: 2, type: 'mcq', topic: 'Urbanization',
          prompt: "A significant social consequence of European industrialization was rapid urbanization, meaning:",
          choices: ['A significant population shift away from cities toward exclusively rural, agricultural living', 'Rapid growth in city populations as people moved from rural areas to industrial cities seeking factory employment, often resulting in overcrowded and challenging urban living conditions', 'No significant change in where Europeans chose to live during this period', 'The complete elimination of all rural agricultural communities across Europe'],
          correct: 1,
          explanation: {
            correct: "Urbanization refers to the rapid growth of city populations as people migrated from rural agricultural areas to industrial cities seeking factory employment — this rapid, often poorly planned urban growth frequently resulted in significant challenges, including overcrowded housing, inadequate sanitation infrastructure, and difficult public health conditions in many rapidly industrializing European cities like Manchester and London.",
            wrong: { 0: "This describes the OPPOSITE of urbanization — the actual trend was population movement TOWARD cities, not away from them.", 2: "This period saw very significant demographic change (large-scale rural-to-urban migration) — describing no significant change contradicts well-documented population shifts.", 3: "While urban populations grew significantly, rural agricultural communities did NOT completely disappear — agriculture remained an important, if proportionally declining, part of the broader economy." },
            tempting: "None of the distractors accurately describe urbanization, but underestimating its scale misses just how dramatic this demographic shift actually was.",
            commonMistake: "Underestimating the scale/speed of urbanization and/or failing to connect it to its significant social consequences (overcrowding, sanitation challenges, public health crises like cholera outbreaks) that are frequently tested alongside the basic definition.",
            apTip: "Connect urbanization directly to its consequences: overcrowded tenement housing, inadequate sanitation (contributing to disease outbreaks), and eventual public health/housing reform movements — these specific conditions also connect to the rise of labor movements covered elsewhere in this unit."
          }
        },
        {
          id: 'apeuro-6-4', difficulty: 3, type: 'mcq', topic: 'Marxist Socialism',
          prompt: "Karl Marx and Friedrich Engels's political-economic ideology, developed partly in response to industrialization's social effects, argued that:",
          choices: ['Private ownership of industrial production should be expanded and protected with no limitations whatsoever', 'The capitalist economic system inherently exploited industrial workers (the proletariat) for the benefit of factory/business owners (the bourgeoisie), and workers should ultimately seize control of the means of production', 'Industrial workers had no legitimate grievances against factory owners or working conditions', 'Government or collective intervention in the economy should be completely eliminated'],
          correct: 1,
          explanation: {
            correct: "Marx and Engels argued that capitalism inherently exploited industrial workers (the proletariat) for the benefit of the capital-owning class (the bourgeoisie), and that this fundamental class conflict would eventually lead the proletariat to seize control of the means of production, ultimately establishing a more economically equal, classless society — this critique, developed in works like The Communist Manifesto (1848), was a direct response to the harsh working-class conditions industrialization had produced.",
            wrong: { 0: "This describes an essentially unrestricted CAPITALIST position, the opposite of Marx and Engels's critique, which specifically argued AGAINST unlimited private ownership as the source of worker exploitation.", 2: "Marx and Engels's entire critique was built on the premise that industrial workers DID have legitimate, systemic grievances against exploitative capitalist conditions — this is the foundation of their analysis.", 3: "Marxist socialism specifically envisioned significant COLLECTIVE control over economic production — this is the opposite of eliminating all government/collective economic intervention, which more closely describes an unrestricted capitalist position." },
            tempting: "Choice A is tempting because it represents a real economic position, but it's the OPPOSITE of Marx and Engels's critique of unrestricted capitalism.",
            commonMistake: "Confusing Marxist socialism with the laissez-faire capitalist ideology it specifically critiqued — these represent fundamentally opposing views on private ownership and the appropriate role of collective control over production.",
            apTip: "Connect Marx and Engels's ideas directly to the specific working-class factory conditions and bourgeoisie/proletariat divide produced by industrialization (Unit 6) — and note this ideology's major LATER influence on 20th-century political movements, revisited in later units."
          }
        },
        {
          id: 'apeuro-6-5', difficulty: 3, type: 'mcq', topic: 'The Second Industrial Revolution',
          prompt: "The \"Second Industrial Revolution\" (roughly the late 19th century) is distinguished from the earlier phase of industrialization primarily by its emphasis on:",
          choices: ['A complete return to purely hand-crafted, pre-industrial production methods', 'New industries and technologies such as steel production, chemicals, electricity, and the internal combustion engine, alongside greater scientific application to industrial processes', 'The complete abandonment of factory-based production', 'A total absence of any new technological development compared to the earlier industrial period'],
          correct: 1,
          explanation: {
            correct: "The Second Industrial Revolution featured new industries and technologies including large-scale steel production (via processes like the Bessemer process), chemical industries, electricity generation and distribution, and the internal combustion engine — alongside an increasingly close and deliberate connection between scientific research and industrial application, distinguishing it from the earlier, more textile/steam-power-focused First Industrial Revolution.",
            wrong: { 0: "This period specifically continued and EXPANDED factory-based, technologically advanced production — it did not return to earlier hand-crafted methods.", 2: "Factory-based production continued and EXPANDED significantly during this period, incorporating new technologies — it was not abandoned.", 3: "This period is specifically defined by SIGNIFICANT NEW technological developments (steel, electricity, chemicals, internal combustion) distinct from the earlier industrial phase — describing an absence of new technology misrepresents this well-documented second wave of innovation." },
            tempting: "None of the distractors reflect the Second Industrial Revolution's actual character, but underestimating its distinctiveness from the earlier industrial phase misses an important periodization point.",
            commonMistake: "Not distinguishing the Second Industrial Revolution's SPECIFIC new technologies (steel, chemicals, electricity, internal combustion) from the earlier First Industrial Revolution's focus (textiles, steam power, coal/iron) — this periodization distinction is a frequently tested detail.",
            apTip: "Know specific technologies associated with the Second Industrial Revolution (steel via Bessemer process, electricity, internal combustion engine) as distinct from earlier textile/steam-focused innovations — and connect this technological advancement directly to the New Imperialism covered in Unit 7, since these new industries drove increased demand for global raw materials and markets."
          }
        },
        {
          id: 'apeuro-6-6', difficulty: 4, type: 'mcq', topic: 'Government Responses to Industrialization',
          prompt: "By the late 19th century, some European governments, including Germany under Otto von Bismarck, began implementing early social welfare programs (such as health insurance and old-age pensions) primarily in order to:",
          choices: ['Fully eliminate capitalism and transition immediately to a socialist economic system', 'Address some of industrialization\'s social problems and undercut the growing appeal of socialist political movements among the working class, while preserving the existing political and economic order', 'Completely ignore the social problems created by industrialization', 'Abolish all industrial factories and return to a purely agricultural economy'],
          correct: 1,
          explanation: {
            correct: "Bismarck's social welfare programs (including health insurance and old-age pension systems, pioneering measures for the era) were implemented partly to address some of industrialization's genuine social problems, but significantly also as a strategic effort to undercut the growing political appeal of socialist and labor movements among industrial workers — providing some material benefits and stability while preserving the existing conservative political and economic order, rather than embracing socialist restructuring.",
            wrong: { 0: "Bismarck was specifically a CONSERVATIVE statesman seeking to PRESERVE the existing political/economic order (including capitalism and monarchical authority) by strategically undercutting socialism's appeal — not to eliminate capitalism and adopt socialism.", 2: "These programs represented a DIRECT government RESPONSE to and engagement with industrialization's social problems, not an ignoring of them — even if the underlying motivation was partly strategic/political rather than purely humanitarian.", 3: "These welfare programs worked WITHIN the existing industrial economic system, aiming to manage its social effects — they did not involve abolishing industrial factories or returning to agriculture." },
            tempting: "Choice A is tempting because these programs DO represent significant government intervention, but Bismarck's underlying goal was specifically to PRESERVE the existing conservative order by undercutting socialism, not to transition toward socialism himself.",
            commonMistake: "Missing the STRATEGIC, politically conservative motivation behind Bismarck's welfare programs — these were specifically designed to counter socialism's growing appeal (a preemptive, conservative response) rather than reflecting socialist sympathies himself.",
            apTip: "Bismarck's welfare programs are a key example for FRQs about how CONSERVATIVE governments could respond to industrialization's social pressures WITHOUT embracing socialism — connect this directly to the broader theme of governments managing (rather than eliminating) the tensions industrialization created, a useful nuance distinguishing state welfare from socialist revolution."
          }
        }
      ]
    },
    {
      id: 7,
      name: 'Unit 7: 19th-Century Perspectives and Political Developments (c. 1815–1914)',
      questions: [
        {
          id: 'apeuro-7-1', difficulty: 2, type: 'mcq', topic: 'Nationalism as a Political Ideology',
          prompt: "The 19th-century political ideology of nationalism, which contributed to movements like Italian and German unification, is best defined as the belief that:",
          choices: ['Political and cultural loyalty should be directed primarily toward a multinational, dynastic empire rather than any specific nation', 'People sharing a common culture, language, history, or ethnic identity should have their own sovereign nation-state, with political loyalty directed primarily toward this national community', 'National borders and identities are entirely meaningless and should be abolished', 'Only hereditary monarchs, not the broader population, can legitimately claim any national identity'],
          correct: 1,
          explanation: {
            correct: "Nationalism held that people sharing a common culture, language, history, and/or ethnic identity constitute a distinct 'nation' that should ideally have its own sovereign, self-governing state — with political loyalty directed primarily toward this national community rather than, for instance, a dynastic ruler or a multinational empire.",
            wrong: { 0: "This describes essentially the OPPOSITE of nationalism — 19th-century nationalism specifically challenged and often worked to undermine multinational, dynastic empires (like Austria-Hungary), which nationalists saw as illegitimately containing multiple distinct nations.", 2: "Nationalism specifically emphasized the importance and legitimacy of national identity — this is the opposite of viewing national identity as meaningless; nationalism was a powerful, identity-affirming political force.", 3: "Nationalism was fundamentally a POPULAR/mass political ideology, emphasizing that the broader population (the 'nation,' based on shared culture/language/history) — not just hereditary monarchs — constituted the legitimate source of national identity and sovereignty." },
            tempting: "Choice A is tempting because dynastic empires are a relevant contrast, but nationalism specifically OPPOSED multinational dynastic loyalty in favor of shared national community identity.",
            commonMistake: "Confusing nationalism with the multinational dynastic loyalty systems it specifically challenged — 19th-century nationalism represented a significant shift away from purely dynastic sources of political loyalty toward shared cultural/ethnic/linguistic national identity.",
            apTip: "Connect nationalism directly to Italian unification (led by figures like Cavour and Garibaldi) and German unification (led by Bismarck) as concrete examples — and note how nationalism could be both a UNIFYING force (combining smaller states) and a DIVISIVE force (fueling independence movements within multinational empires like Austria-Hungary)."
          }
        },
        {
          id: 'apeuro-7-2', difficulty: 3, type: 'mcq', topic: 'Otto von Bismarck and German Unification',
          prompt: "Otto von Bismarck, the Prussian statesman who led German unification (completed 1871), is particularly associated with the strategy of:",
          choices: ['Achieving unification purely through peaceful diplomatic negotiation, with no military conflict involved', 'Realpolitik — a pragmatic, power-focused political approach, including the deliberate use of calculated wars (against Denmark, Austria, and France) to achieve unification under Prussian leadership', 'Uniting Germany through a broad, grassroots democratic and revolutionary movement led by ordinary citizens', 'Rejecting any expansion of Prussian power or territory'],
          correct: 1,
          explanation: {
            correct: "Bismarck is closely associated with Realpolitik — a pragmatic, power-focused political approach prioritizing practical results over ideology — which he applied by deliberately engineering and winning a calculated sequence of wars (against Denmark in 1864, Austria in 1866, and France in 1870–71) that progressively isolated rivals and united the German states under Prussian leadership, culminating in the proclamation of the German Empire in 1871.",
            wrong: { 0: "Unification was achieved significantly through calculated MILITARY conflict (not purely peaceful diplomacy) — Bismarck's strategy specifically and deliberately included engineered wars as key tools.", 2: "Unification was achieved primarily through Bismarck's TOP-DOWN, state-directed strategy (using Prussian military and diplomatic power) rather than a broad grassroots democratic/revolutionary movement — this contrasts with some earlier, less successful 1848 revolutionary unification attempts.", 3: "Bismarck's entire strategy was specifically aimed at EXPANDING Prussian power and leadership over a unified Germany — the opposite of rejecting Prussian expansion." },
            tempting: "Choice C is tempting to students aware of earlier 1848 revolutionary nationalist movements in Germany, but Bismarck's SUCCESSFUL unification specifically came through top-down state/military strategy, not grassroots revolution.",
            commonMistake: "Confusing Bismarck's successful top-down, Realpolitik-driven unification strategy with earlier, less successful grassroots revolutionary nationalist movements (like those of 1848) — these represent different approaches to German unification, only one of which succeeded.",
            apTip: "Know the specific sequence of Bismarck's wars (Danish War 1864, Austro-Prussian War 1866, Franco-Prussian War 1870–71) as concrete evidence of his Realpolitik strategy — each war served a specific strategic purpose in isolating rivals and building German nationalist sentiment under Prussian leadership."
          }
        },
        {
          id: 'apeuro-7-3', difficulty: 3, type: 'mcq', topic: 'Conservatism, Liberalism, and the Revolutions of 1848',
          prompt: "The widespread European revolutions of 1848 were significantly driven by demands for:",
          choices: ['A complete return to unrestricted absolute monarchy across Europe', 'Liberal constitutional reforms (such as expanded political representation and civil liberties) and, in many regions, nationalist self-determination', 'The total abolition of all forms of government', 'Exclusively economic demands, with no political or nationalist component whatsoever'],
          correct: 1,
          explanation: {
            correct: "The Revolutions of 1848 were driven significantly by demands for liberal constitutional reforms (expanded political representation, civil liberties, constitutional limits on monarchical power) and, in many regions (such as the German and Italian states, and within the Austrian Empire), nationalist demands for self-determination and unification — though most of these 1848 revolutions were ultimately suppressed, their underlying demands continued to shape European politics for decades afterward.",
            wrong: { 0: "The revolutions specifically demanded MORE liberal/constitutional limits on monarchical power, the opposite of a return to unrestricted absolutism — they represented a challenge to, not an endorsement of, absolutist restoration.", 2: "The revolutions generally sought REFORM of government (more representative, constitutional structures) rather than the complete abolition of government/political authority altogether.", 3: "While economic hardship (such as harvest failures) contributed to unrest, the revolutions had SIGNIFICANT political (liberal constitutional) and nationalist dimensions as well — describing purely economic causes misses these crucial political/nationalist components." },
            tempting: "None of the distractors accurately capture 1848's actual demands, but underestimating the specifically POLITICAL and NATIONALIST dimensions (in favor of purely economic explanations) misses key drivers.",
            commonMistake: "Not recognizing the DUAL nature of many 1848 revolutionary demands — combining LIBERAL political reform (constitutional government, civil liberties) with, in many regions, NATIONALIST aspirations (self-determination, unification) simultaneously.",
            apTip: "While most 1848 revolutions were ultimately SUPPRESSED (a frequently tested outcome), know that they set important precedents and raised issues (liberal constitutionalism, nationalism) that continued to shape later, more successful political developments — including eventual German and Italian unification later in the century."
          }
        },
        {
          id: 'apeuro-7-4', difficulty: 2, type: 'mcq', topic: "Darwin and Social Darwinism",
          prompt: "Charles Darwin's theory of evolution by natural selection, published in On the Origin of Species (1859), was later applied (often in a distorted way) by some 19th-century thinkers to develop the concept of:",
          choices: ['Social Darwinism, which misapplied biological concepts like \"survival of the fittest\" to justify social/economic inequality, imperialism, and racial hierarchies', 'A direct, scientifically accurate application of evolutionary biology to political theory with no distortion involved', 'A rejection of all scientific inquiry into human society', 'A theory used exclusively to promote greater social equality and welfare programs'],
          correct: 0,
          explanation: {
            correct: "Social Darwinism took Darwin's biological concept of natural selection (often summarized, somewhat inaccurately as applied to society, by the phrase 'survival of the fittest,' a term actually coined by Herbert Spencer) and misapplied it to human society — using it to attempt to justify existing social and economic inequality, imperial conquest, and racial hierarchies as supposedly natural, inevitable outcomes of competition, a significant distortion of Darwin's actual biological theory.",
            wrong: { 1: "Social Darwinism represented a SIGNIFICANT MISAPPLICATION and distortion of Darwin's biological theory to social/political contexts — it was not a scientifically accurate or legitimate application of evolutionary biology to political theory.", 2: "Social Darwinism represented precisely an APPLICATION (albeit a distorted one) of scientific-sounding concepts to human society — it does not represent a rejection of scientific inquiry into society, but rather a misuse of scientific language for ideological purposes.", 3: "Social Darwinism was specifically used to JUSTIFY existing inequality and hierarchy (including opposing welfare/social reform as interfering with 'natural' competition) — it was not used to promote greater equality, but rather the opposite." },
            tempting: "None of the distractors accurately describe Social Darwinism's actual use, but assuming any application of Darwin's ideas must be scientifically legitimate (choice B) misses the important distinction between biological science and its ideological misapplication.",
            commonMistake: "Not recognizing Social Darwinism as a DISTORTION/misapplication of actual Darwinian biology to social and political contexts — this concept is frequently tested precisely because it demonstrates how scientific ideas can be selectively and inaccurately used to justify pre-existing political/social agendas.",
            apTip: "Connect Social Darwinism directly to its use in justifying New Imperialism (Unit 8) and racial hierarchies during this period — this is a frequently tested connection between 19th-century scientific ideas and their problematic ideological application to political/social justification."
          }
        },
        {
          id: 'apeuro-7-5', difficulty: 3, type: 'mcq', topic: 'The Expansion of Suffrage',
          prompt: "Over the course of the 19th century, many European nations gradually expanded voting rights (suffrage), a process significantly driven by:",
          choices: ['A complete absence of any popular political pressure or organized movements for expanded rights', 'Growing pressure from liberal and labor movements, alongside the social changes wrought by industrialization (such as the growth of an organized urban working class), pushing for broader political representation', 'Governments spontaneously and voluntarily expanding suffrage with absolutely no external pressure whatsoever', 'A uniform, simultaneous, and complete expansion of full suffrage to all adult men and women across every European nation at exactly the same time'],
          correct: 1,
          explanation: {
            correct: "The gradual expansion of suffrage across 19th-century Europe was significantly driven by sustained pressure from liberal political movements and organized labor movements, connected to the social changes industrialization produced (including a growing, increasingly organized urban working class demanding political representation) — though the specific pace, scope (often initially limited to men, and frequently with property qualifications), and timeline varied considerably between different European nations.",
            wrong: { 0: "There was in fact SIGNIFICANT, sustained organized political pressure (from liberal and labor movements) pushing for suffrage expansion throughout this period — describing an absence of such pressure contradicts well-documented reform movements.", 2: "Suffrage expansion typically came only after SIGNIFICANT sustained external political pressure and organized movements, not spontaneous government initiative alone.", 3: "Suffrage expansion occurred at DIFFERENT paces and with DIFFERENT specific provisions across different European nations (and initially excluded women almost everywhere, with full women's suffrage generally coming even later, in the 20th century) — describing simultaneous, complete, uniform expansion misrepresents this varied, gradual, and incomplete historical process." },
            tempting: "Choice D is tempting because suffrage DID eventually expand significantly across Europe, but the actual process was gradual, uneven, and varied significantly by country and time period, not simultaneous or complete.",
            commonMistake: "Overstating the speed/completeness of suffrage expansion, and/or underestimating the SUSTAINED POLITICAL PRESSURE (from liberal and specifically labor/working-class movements, connected to industrialization) required to achieve even partial suffrage expansion in most nations.",
            apTip: "Connect suffrage expansion movements directly to industrialization's social effects (Unit 6) — the growth of an organized, increasingly politically conscious urban working class directly fueled demands for greater political representation, illustrating the connection between economic/social change and political reform movements."
          }
        },
        {
          id: 'apeuro-7-6', difficulty: 4, type: 'mcq', topic: 'Nationalism as a Divisive Force in Multinational Empires',
          prompt: "Within multinational empires such as Austria-Hungary during the late 19th and early 20th centuries, rising nationalism among various ethnic groups primarily:",
          choices: ['Had no effect whatsoever on political stability within these empires', 'Created significant internal political tensions and instability, as various ethnic/national groups increasingly sought greater autonomy or full independence from centralized imperial control', 'Strengthened these empires by unifying all ethnic groups under a single shared national identity', 'Was actively encouraged and promoted by imperial governments as a stabilizing force'],
          correct: 1,
          explanation: {
            correct: "Rising nationalism among various ethnic groups (such as Hungarians, Czechs, Slavs, and others) within multinational empires like Austria-Hungary created SIGNIFICANT internal political tensions and instability, as these groups increasingly sought greater autonomy or full independence from centralized imperial control — this internal nationalist tension is widely recognized by historians as a significant contributing long-term factor to these empires' eventual instability and, ultimately, their role in the outbreak and outcome of World War I (Unit 8).",
            wrong: { 0: "Nationalism had SIGNIFICANT, well-documented destabilizing effects on multinational empires' internal political cohesion — describing no effect misrepresents this major historical tension.", 2: "Nationalism specifically WORKED AGAINST unified imperial identity by emphasizing DISTINCT ethnic/national identities within the empire — this represented a divisive, not unifying, force for these multinational states.", 3: "Imperial governments generally viewed and treated rising internal nationalism as a significant THREAT to their political stability and territorial integrity, not something they actively encouraged — nationalist movements were more often suppressed or managed defensively by imperial authorities." },
            tempting: "None of the distractors accurately describe nationalism's actual destabilizing effect on these empires, but assuming nationalism could unify diverse populations (choice C) misunderstands its fundamentally particularist, group-specific character.",
            commonMistake: "Not recognizing nationalism's specifically DIVISIVE effect within multinational empires (as opposed to its UNIFYING effect in cases like German/Italian unification) — nationalism's effect depends significantly on context, a nuance important for sophisticated FRQ analysis.",
            apTip: "This is a key SET-UP topic for Unit 8 — internal nationalist tensions within Austria-Hungary (and the broader Balkans, sometimes called the 'powder keg of Europe') are frequently cited as significant underlying long-term causes contributing to the tensions that erupted into World War I, making this connection valuable for cross-unit FRQ analysis."
          }
        }
      ]
    },
    {
      id: 8,
      name: 'Unit 8: 20th-Century Global Conflicts (c. 1914–present)',
      questions: [
        {
          id: 'apeuro-8-1', difficulty: 2, type: 'mcq', topic: 'Causes of World War I',
          prompt: "The outbreak of World War I in 1914 is commonly attributed to a combination of long-term underlying factors, often summarized as \"MAIN\":",
          choices: ['A complete absence of any nationalist tension or rivalry between European powers', 'Militarism, a complex system of competing Alliances, intense Nationalism (especially in the Balkans), and Imperial rivalry among major European powers', 'A total lack of any pre-existing military buildup or arms competition among European nations', 'Universal, complete European cooperation and shared political goals in the years leading up to 1914'],
          correct: 1,
          explanation: {
            correct: "World War I's outbreak is commonly explained using the 'MAIN' framework: Militarism (emphasis on military buildup, including a significant naval arms race between Britain and Germany), Alliances (a complex, interlocking system of alliances meaning a localized conflict could rapidly draw in many nations), Nationalism (including volatile ethnic tensions in the Balkans, connecting directly to Unit 7's discussion of nationalism within multinational empires), and Imperialism (ongoing colonial rivalry between major European powers).",
            wrong: { 0: "There was SIGNIFICANT nationalist tension, especially in the volatile Balkans region (where the war's immediate trigger occurred) — this was a major contributing factor, not an absence.", 2: "There was significant, well-documented military buildup and arms competition (including naval competition between Britain and Germany) among major powers before 1914 — this militarism was a significant contributing factor.", 3: "The pre-war landscape was characterized by significant COMPETITION and rivalry (alliances, imperial competition, nationalist tensions), not universal cooperation — these tensions made rapid escalation possible." },
            tempting: "None of the distractors reflect actual pre-war tensions, but assuming general cooperation (choice D) misses the significant underlying rivalries enabling rapid escalation.",
            commonMistake: "Not identifying the FULL combination of long-term causes (MAIN) alongside the immediate triggering event (Archduke Franz Ferdinand's assassination in Sarajevo, 1914) — a strong FRQ addresses both structural causes and the immediate spark.",
            apTip: "Pair the 'MAIN' acronym with the specific immediate trigger (Archduke Franz Ferdinand's assassination, connected directly to Balkan nationalist tension covered in Unit 7) to show how a localized crisis escalated into broader war through the interlocking alliance system."
          }
        },
        {
          id: 'apeuro-8-2', difficulty: 3, type: 'mcq', topic: 'Total War',
          prompt: "World War I and World War II are often described as \"total wars,\" meaning these conflicts were characterized by:",
          choices: ['Fighting strictly limited to professional soldiers, with no impact whatsoever on civilian populations or domestic economies', 'The full mobilization of entire national economies, populations, and resources toward the war effort, blurring distinctions between combatants and civilian society', 'Wars fought exclusively using pre-industrial weapons and technology', 'Conflicts that had no significant effect on European borders, political systems, or global power structures afterward'],
          correct: 1,
          explanation: {
            correct: "'Total war' describes conflicts characterized by the full mobilization of an entire nation's resources, economy, and population toward the war effort — including civilian industrial production converted to military purposes, extensive government economic control/rationing, and often direct civilian involvement or targeting, significantly blurring traditional distinctions between combatants and civilian society.",
            wrong: { 0: "This is essentially the OPPOSITE of what defines total war — these conflicts specifically and extensively involved civilian populations and entire domestic economies, a key defining feature.", 2: "Both World Wars specifically involved significant, often unprecedented industrial and technological warfare (tanks, aircraft, chemical weapons, nuclear weapons in WWII) — describing pre-industrial technology directly contradicts their technological character.", 3: "Both World Wars had ENORMOUS lasting effects on European borders (extensive territorial changes), political systems (collapse of several empires after WWI), and global power structures — describing no significant effect is factually incorrect." },
            tempting: "None of the distractors accurately describe total war, but underestimating civilian mobilization/impact misses the concept's actual defining characteristic.",
            commonMistake: "Not clearly defining 'total war' by its specific defining characteristic — full-scale mobilization of ENTIRE national economies and populations, blurring the military/civilian line — rather than vaguely associating the term with destructive wars in general.",
            apTip: "Give specific examples on an FRQ: government economic planning/rationing, wartime industrial conversion, propaganda targeting civilian morale, and civilian impacts (bombing campaigns) — connecting these features to both World Wars."
          }
        },
        {
          id: 'apeuro-8-3', difficulty: 3, type: 'mcq', topic: 'The Treaty of Versailles',
          prompt: "The Treaty of Versailles (1919), which formally ended World War I, is notable for:",
          choices: ['Placing no restrictions or obligations whatsoever on Germany', 'Imposing significant territorial losses, military restrictions, and reparations payments on Germany, which many historians argue contributed to postwar German resentment and later instability', 'Being universally regarded by all parties as a completely fair and successful long-term peace settlement', 'Immediately and permanently resolving all sources of tension in Europe with no future significant conflicts'],
          correct: 1,
          explanation: {
            correct: "The Treaty of Versailles imposed significant terms on defeated Germany, including territorial losses, strict military limitations, and substantial reparations payments — many historians argue these harsh terms (particularly the reparations burden and the treaty's 'war guilt clause') contributed significantly to postwar German economic hardship, resentment, and political instability, factors some historians connect to the later rise of Nazism.",
            wrong: { 0: "This is the opposite of the treaty's actual content — Versailles imposed SIGNIFICANT restrictions/obligations on Germany, including territorial losses, military limitations, and reparations.", 2: "The treaty was WIDELY CRITICIZED and controversial — some viewed it as excessively harsh, while others felt it didn't go far enough — 'universal' agreement on its fairness misrepresents historical reactions.", 3: "The treaty's terms are widely viewed by historians as CONTRIBUTING to future instability rather than permanently resolving it — its perceived harshness is frequently cited as contributing to conditions leading to World War II." },
            tempting: "Choice D is tempting because treaties are nominally meant to resolve conflict, but Versailles is frequently cited as having contributed to FUTURE instability rather than lasting peace.",
            commonMistake: "Assuming a peace treaty ending one major war automatically achieved lasting peace — Versailles is a key example of how a settlement's specific terms could instead contribute to future conflict.",
            apTip: "Connect Versailles's harsh terms and resulting German resentment directly to interwar instability and, ultimately, to conditions historians connect to the rise of Nazism and the outbreak of World War II — this causal chain is frequently tested."
          }
        },
        {
          id: 'apeuro-8-4', difficulty: 4, type: 'mcq', topic: 'Totalitarianism',
          prompt: "Totalitarian regimes that emerged in interwar and World War II-era Europe, such as Nazi Germany under Hitler and the Soviet Union under Stalin, were characterized by:",
          choices: ['Extremely limited government power, with most authority held by independent local governments', 'A single party or leader exercising near-total control over political, economic, social, and cultural life, often employing propaganda, surveillance, and repression to eliminate political opposition', 'Complete freedom of the press and open political opposition, with no government restrictions whatsoever', 'A total absence of any organized government structure or centralized authority'],
          correct: 1,
          explanation: {
            correct: "Totalitarian regimes were characterized by a single party or leader seeking near-total control over political, economic, social, and cultural life — commonly employing extensive propaganda, pervasive surveillance systems, and often violent repression targeting political opponents and, in Nazi Germany's case, specific ethnic/religious groups, to eliminate organized opposition and maintain total control.",
            wrong: { 0: "This is essentially the OPPOSITE of totalitarianism — these regimes specifically sought to CENTRALIZE and CONCENTRATE power rather than distributing significant independent authority locally.", 2: "Totalitarian regimes specifically and severely RESTRICTED press freedom and political opposition — state control over information and suppression of dissent were defining features, not their absence.", 3: "Totalitarian regimes were HIGHLY organized and centralized, with extensive bureaucracies and security apparatuses — this describes the opposite of an absence of organized government structure." },
            tempting: "None of the distractors accurately describe totalitarianism, but assuming 'total' control implies disorganization misapplies the term's actual meaning.",
            commonMistake: "Confusing 'totalitarian' (referring to TOTAL government CONTROL over society) with an absence of government structure — these regimes are characterized by extremely CENTRALIZED, organized, pervasive state power.",
            apTip: "Give specific examples for an FRQ: propaganda ministries (Nazi Germany's Ministry of Propaganda under Goebbels), secret police/surveillance (Soviet NKVD), and mass mobilization techniques — connecting these to the broader goal of eliminating opposition and achieving comprehensive control."
          }
        },
        {
          id: 'apeuro-8-5', difficulty: 4, type: 'mcq', topic: 'The Holocaust',
          prompt: "The Holocaust, in which Nazi Germany systematically murdered approximately six million Jews (along with millions of others), is historically significant as an example of:",
          choices: ['A spontaneous, entirely unplanned event with no systematic organization involved', 'State-sponsored genocide, involving the systematic, bureaucratically organized persecution and mass murder of a targeted group based on ethnic/religious identity', 'An event limited only to military combat casualties, with no targeting of civilian populations', 'A conflict that had no connection whatsoever to broader Nazi racial ideology'],
          correct: 1,
          explanation: {
            correct: "The Holocaust represents a defining example of state-sponsored genocide — the systematic, deliberately bureaucratically organized persecution and mass murder of a targeted civilian population (European Jews, along with Roma people, disabled individuals, and others) based on Nazi racial ideology, carried out using organized state machinery, including specifically constructed concentration and extermination camps.",
            wrong: { 0: "This is factually incorrect — the Holocaust involved extensive, deliberate BUREAUCRATIC planning (such as at the Wannsee Conference) and constructed extermination infrastructure, representing systematic organization, not spontaneity.", 2: "The Holocaust specifically and overwhelmingly targeted CIVILIAN populations, distinguishing genocide from conventional military combat.", 3: "The Holocaust was DIRECTLY connected to and driven by specific Nazi racial ideology, which characterized Jewish people and other groups as racially inferior — this ideological foundation was the explicit justification and motivation." },
            tempting: "None of the distractors accurately describe the Holocaust, but underestimating its systematic, bureaucratic organization misses a defining characteristic.",
            commonMistake: "Underestimating the systematic, bureaucratically organized nature of the Holocaust — this deliberate organization distinguishes genocide as a specific category of historical atrocity.",
            apTip: "Know the Wannsee Conference (1942) as a specific, testable example of the Holocaust's bureaucratic planning — and connect Nazi racial ideology directly to broader European antisemitism with deeper historical roots, useful for a well-contextualized FRQ."
          }
        },
        {
          id: 'apeuro-8-6', difficulty: 3, type: 'mcq', topic: 'European Reconstruction After World War II',
          prompt: "The Marshall Plan (1948), through which the United States provided significant economic aid to Western European nations after World War II, primarily aimed to:",
          choices: ['Punish Western European nations economically for their role in the war', 'Support Western European economic recovery and stability, partly to help prevent the spread of communism amid the emerging Cold War', 'Fund a new European military invasion of the Soviet Union', 'Provide aid exclusively to Eastern European communist nations'],
          correct: 1,
          explanation: {
            correct: "The Marshall Plan provided substantial American economic aid to support Western European economic recovery and rebuilding after the devastation of World War II — significantly motivated also by the emerging Cold War context, as American policymakers believed economic stability and prosperity in Western Europe would help prevent the spread of communism, which some feared could gain appeal amid postwar economic hardship and instability.",
            wrong: { 0: "The Marshall Plan specifically provided SUPPORTIVE economic aid to help REBUILD Western European economies, not punish them — this represented a constructive recovery effort, not punishment.", 2: "The Marshall Plan was specifically an ECONOMIC aid program, not a military funding initiative for invasion — its goals were economic recovery and stability, not military conflict.", 3: "The Marshall Plan specifically provided aid to WESTERN European nations (allied with the US in the emerging Cold War) — Soviet-aligned Eastern European nations did not participate, reflecting the plan's Cold War geopolitical context." },
            tempting: "None of the distractors accurately describe the Marshall Plan's actual purpose, but underestimating its explicit Cold War geopolitical motivation (alongside genuine humanitarian/economic goals) misses an important dual purpose.",
            commonMistake: "Focusing only on the Marshall Plan's humanitarian/economic recovery goals without also recognizing its significant Cold War STRATEGIC motivation — preventing communism's spread through economic stability — a dual purpose important for sophisticated FRQ analysis.",
            apTip: "Connect the Marshall Plan directly to the emerging Cold War division of Europe (Unit 9) — Western Europe's American-aided recovery contrasted with Soviet-controlled Eastern Europe's different postwar economic trajectory, illustrating how economic policy became intertwined with Cold War geopolitical competition."
          }
        }
      ]
    },
    {
      id: 9,
      name: 'Unit 9: Cold War and Contemporary Europe (c. 1914–present)',
      questions: [
        {
          id: 'apeuro-9-1', difficulty: 2, type: 'mcq', topic: 'The Division of Europe',
          prompt: "Following World War II, Europe became significantly divided along Cold War lines, famously described by Winston Churchill as separated by an \"Iron Curtain,\" referring to:",
          choices: ['A literal physical wall built across the entire European continent', 'The ideological, political, and physical division between Soviet-controlled communist Eastern Europe and American-aligned democratic/capitalist Western Europe', 'A trade agreement between Britain and France with no connection to the Soviet Union', 'A temporary military alliance that dissolved immediately after World War II ended'],
          correct: 1,
          explanation: {
            correct: "The 'Iron Curtain' (a term popularized by Churchill in a 1946 speech) metaphorically described the significant ideological, political, and increasingly physical division that emerged between Soviet-controlled communist Eastern European states and American-aligned democratic, capitalist Western European nations, symbolizing the broader Cold War division of the continent that would persist for decades.",
            wrong: { 0: "The 'Iron Curtain' was primarily a METAPHORICAL description of ideological/political division (though it did have some real physical manifestations, like border fortifications and later the Berlin Wall) — it did not describe one single literal wall across the entire continent.", 2: "This description specifically referred to the DIVISION between Soviet-controlled Eastern Europe and the Western allied nations — it was directly connected to Cold War tensions with the Soviet Union, not a separate Britain-France trade matter.", 3: "This division proved to be LONG-LASTING (persisting for decades until the late 1980s/early 1990s), not a temporary alliance that quickly dissolved — the Iron Curtain divide was a defining, persistent feature of the Cold War era." },
            tempting: "Choice A is tempting because there WAS an eventual physical wall (the Berlin Wall, built 1961) as one specific manifestation, but the broader 'Iron Curtain' concept described the wider ideological/political division across the whole continent.",
            commonMistake: "Conflating the broader metaphorical 'Iron Curtain' concept with the SPECIFIC later Berlin Wall (a more localized physical structure) — both are related but distinct concepts worth keeping straight for precise FRQ responses.",
            apTip: "Know Churchill's 1946 speech as the origin of the 'Iron Curtain' phrase — and connect this broader continental division directly to specific later events like the Berlin Wall's construction (1961) as a more localized, later physical manifestation of this same broader Cold War division."
          }
        },
        {
          id: 'apeuro-9-2', difficulty: 3, type: 'mcq', topic: 'NATO and the Warsaw Pact',
          prompt: "The formation of NATO (North Atlantic Treaty Organization, 1949) by the United States and Western European allies, and the Warsaw Pact (1955) by the Soviet Union and Eastern European allies, together reflected:",
          choices: ['A single unified military alliance encompassing all of Europe with no division', "The formalized military alliance structure of the Cold War's two opposing blocs, reflecting the broader ideological and political division of Europe", 'Alliances that had no connection whatsoever to broader Cold War tensions', 'A purely economic (not military) cooperation agreement between all European nations'],
          correct: 1,
          explanation: {
            correct: "NATO and the Warsaw Pact represented the formalized MILITARY alliance structures of the Cold War's two opposing blocs — NATO uniting the United States with Western European allies, and the Warsaw Pact uniting the Soviet Union with its Eastern European satellite states — directly reflecting and reinforcing the broader ideological and political division of Europe along Cold War lines.",
            wrong: { 0: "These represented TWO SEPARATE, opposing alliance systems (not one unified alliance) — this division itself is precisely what reflected and reinforced the broader Cold War split of Europe.", 2: "These alliances were DIRECTLY connected to and specifically created BECAUSE OF broader Cold War tensions — they were formalized military structures of the two opposing Cold War blocs, not unrelated to this broader conflict.", 3: "Both NATO and the Warsaw Pact were specifically MILITARY alliances (mutual defense agreements), not purely economic cooperation arrangements — and they specifically did NOT include all European nations, but rather divided the continent into two opposing camps." },
            tempting: "None of the distractors accurately describe these alliances, but underestimating their explicitly military (not just political/economic) character misses an important defining feature.",
            commonMistake: "Not clearly identifying NATO and the Warsaw Pact as specifically MILITARY (not just political or economic) alliance structures, and/or not connecting them directly to the broader Iron Curtain division of Europe discussed elsewhere in this unit.",
            apTip: "Know NATO (1949, Western-aligned) and the Warsaw Pact (1955, Soviet-aligned) as the formalized MILITARY alliance systems paralleling the broader Iron Curtain political/ideological division — and connect this directly to the Marshall Plan (Unit 8) as another, economic dimension of this broader Cold War division of Europe."
          }
        },
        {
          id: 'apeuro-9-3', difficulty: 2, type: 'mcq', topic: 'The Fall of Communism in Eastern Europe',
          prompt: "The wave of political change across Eastern Europe in 1989, including the fall of the Berlin Wall, was significantly influenced by:",
          choices: ['A sudden American military invasion of Eastern Europe', 'Soviet leader Mikhail Gorbachev\'s reform policies (glasnost and perestroika) and his choice not to militarily intervene to prop up Eastern European communist governments, combined with growing internal reform/protest movements within these countries', 'Complete indifference among Eastern European populations toward political change', 'A formal, mutually agreed-upon treaty signed years earlier that had already scheduled these specific 1989 events'],
          correct: 1,
          explanation: {
            correct: "The dramatic political changes of 1989 were significantly influenced by Soviet leader Mikhail Gorbachev's reform policies (glasnost, meaning openness, and perestroika, meaning restructuring) and, crucially, his decision NOT to use Soviet military force to prop up struggling Eastern European communist governments (a significant departure from earlier Soviet interventions, such as in Hungary in 1956 and Czechoslovakia in 1968) — this, combined with growing internal reform and protest movements within Eastern European countries themselves (such as Poland's Solidarity movement), enabled the rapid collapse of communist control across the region.",
            wrong: { 0: "These changes resulted primarily from INTERNAL developments (Soviet policy changes, internal reform/protest movements) rather than a direct American military invasion, which did not occur.", 2: "There was SIGNIFICANT, organized internal political activism and protest movements within Eastern European nations (such as Poland's Solidarity movement) — describing complete indifference misrepresents this well-documented grassroots activism.", 3: "These events were NOT pre-scheduled by an earlier formal treaty — they resulted from a rapidly unfolding combination of Soviet policy shifts and internal reform movements that unfolded relatively unexpectedly during 1989 itself." },
            tempting: "None of the distractors accurately describe the actual causes, but underestimating Gorbachev's specific policy choices (in favor of assuming purely external American action) misses crucial Soviet-side decision-making.",
            commonMistake: "Not connecting Gorbachev's SPECIFIC policy choices (glasnost, perestroika, and non-intervention) directly and specifically to the RAPID pace of change in 1989 — and/or underestimating the significant role of internal Eastern European reform movements (like Solidarity in Poland) working alongside these Soviet policy shifts.",
                        apTip: "Know Poland's Solidarity movement (led by Lech Wałęsa) as a specific, testable example of internal Eastern European activism — and connect Gorbachev's non-intervention decision directly to earlier Soviet interventions (Hungary 1956, Czechoslovakia 1968) as a significant, deliberate POLICY CHANGE that enabled 1989's rapid, largely peaceful transformations."
          }
        },
        {
          id: 'apeuro-9-4', difficulty: 3, type: 'mcq', topic: 'The European Union',
          prompt: "The development of the European Union (evolving from earlier organizations like the European Coal and Steel Community, founded 1951) primarily reflected a post-World War II effort to:",
          choices: ['Maintain complete economic and political separation between European nations to prevent any future cooperation', 'Foster economic and eventually political integration among European nations, partly to promote lasting peace and shared prosperity by making future European wars less likely through interdependence', 'Establish a single unified European military dictatorship', 'Exclude all Eastern European nations from any possible future membership permanently'],
          correct: 1,
          explanation: {
            correct: "European integration efforts, beginning with the European Coal and Steel Community and eventually developing into the European Union, aimed to foster economic and eventually greater political integration among European nations — partly motivated by the belief (following two devastating World Wars originating substantially in Europe) that closer economic interdependence between nations like France and Germany would make future European wars less likely, while also promoting shared economic prosperity.",
            wrong: { 0: "This describes the OPPOSITE of European integration's actual goal — these organizations specifically aimed to INCREASE cooperation and interdependence between European nations, not maintain separation.", 2: "The EU developed as a voluntary, democratic economic and political UNION among member nations (with democratic institutions and voluntary membership), not a military dictatorship.", 3: "Following the end of the Cold War, the EU specifically EXPANDED to include many former Eastern European communist nations (such as Poland, Hungary, and others) as new members — permanent exclusion directly contradicts this well-documented expansion." },
            tempting: "None of the distractors accurately describe the EU's actual goals, but underestimating the specific peace-through-interdependence rationale misses an important founding motivation.",
            commonMistake: "Not connecting the EU's ORIGINS specifically to the goal of preventing future European wars (particularly between historic rivals like France and Germany) through economic interdependence — this peace-oriented motivation is a frequently tested founding rationale, alongside economic prosperity goals.",
            apTip: "Know the European Coal and Steel Community (1951) as the EU's specific origin point — pooling French and German coal/steel resources (historically important war materials) specifically to make future conflict between these two nations more difficult and less likely, a concrete example of 'peace through economic interdependence.'"
          }
        },
        {
          id: 'apeuro-9-5', difficulty: 3, type: 'mcq', topic: 'Post-Cold War European Challenges',
          prompt: "Following the end of the Cold War, the breakup of Yugoslavia during the 1990s was marked by:",
          choices: ['A completely peaceful, uncontested transition with no conflict whatsoever', 'Significant ethnic conflict and violence (including instances widely characterized as genocide/ethnic cleansing) as the multiethnic federation fragmented along ethnic and nationalist lines', 'Yugoslavia\'s continued existence as a unified, stable single nation with no significant political change', 'A conflict entirely unconnected to ethnic or nationalist tensions'],
          correct: 1,
          explanation: {
            correct: "The breakup of Yugoslavia during the 1990s was marked by significant, often brutal ethnic conflict and violence — including instances (particularly in Bosnia) widely characterized by international bodies as genocide/ethnic cleansing — as this multiethnic federation fragmented along ethnic and nationalist lines following the end of Cold War-era political constraints, illustrating how nationalist tensions (a recurring theme across multiple units of this course) could still produce devastating conflict in contemporary Europe.",
            wrong: { 0: "This breakup involved SIGNIFICANT, often brutal violent conflict (including the Bosnian War and associated atrocities) — describing a completely peaceful transition directly contradicts this well-documented, tragic history.", 2: "Yugoslavia specifically FRAGMENTED into multiple separate nations (including Slovenia, Croatia, Bosnia, Serbia, and others) during this period — it did not continue as a unified, stable single nation.", 3: "This conflict was DIRECTLY and centrally driven by ethnic and nationalist tensions among Yugoslavia's diverse population — describing it as unconnected to these factors misrepresents the conflict's well-documented central character." },
            tempting: "None of the distractors accurately describe Yugoslavia's breakup, but underestimating the severity/scale of the resulting ethnic conflict misses a historically significant and tragic contemporary European event.",
            commonMistake: "Underestimating the SEVERITY and international significance of Yugoslavia's breakup (including internationally recognized war crimes/genocide, particularly the Srebrenica massacre in Bosnia) — and/or not connecting this conflict directly back to the recurring theme of nationalism's potentially divisive and violent effects within multiethnic states, a theme traceable across multiple units of this course.",
                        apTip: "Connect Yugoslavia's breakup directly to the broader recurring AP European History theme of nationalism's DIVISIVE potential within multiethnic states (also seen with Austria-Hungary in Unit 7/8) — and note this as a significant, sobering example that European conflict rooted in nationalist/ethnic tension did not end with the World Wars or the Cold War."
          }
        },
        {
          id: 'apeuro-9-6', difficulty: 2, type: 'mcq', topic: 'Second-Wave Feminism in Europe',
          prompt: "The second-wave feminist movement, significant across Western Europe (and elsewhere) particularly from the 1960s onward, primarily advocated for:",
          choices: ['A complete return to earlier, more restrictive gender roles and limitations on women\'s participation in public life', 'Expanded legal, economic, and social equality for women, including issues such as workplace equality, reproductive rights, and broader challenges to traditional gender roles', 'The complete exclusion of men from any public political or economic life', 'No significant change to existing gender-based legal or social structures'],
          correct: 1,
          explanation: {
            correct: "Second-wave feminism (following the earlier 'first wave' focused significantly on suffrage) advocated for expanded legal, economic, and social equality for women across a broader range of issues — including workplace equality and opportunity, reproductive rights, and broader critiques and challenges to traditional, limiting gender roles and expectations in both public and private life.",
            wrong: { 0: "This describes essentially the OPPOSITE of second-wave feminism's goals — the movement specifically advocated for EXPANDING, not restricting, women's rights, opportunities, and public participation.", 2: "Second-wave feminism generally advocated for GREATER EQUALITY between genders (in rights, opportunity, and treatment), not the complete exclusion of men from public life — this misrepresents the movement's actual equality-focused goals.", 3: "Second-wave feminism specifically and significantly ADVOCATED FOR change to existing gender-based legal and social structures — describing no significant advocated change directly contradicts the movement's well-documented reformist goals and activities." },
            tempting: "None of the distractors accurately describe second-wave feminism's actual goals, but underestimating the movement's broad scope (workplace, reproductive rights, social roles collectively) in favor of a narrower framing is a common oversimplification.",
            commonMistake: "Not recognizing the BROADER SCOPE of second-wave feminist demands (beyond just formal legal/voting rights, which were the primary focus of earlier 'first-wave' feminism) — extending specifically into workplace equality, reproductive rights, and broader social/cultural gender role critiques.",
            apTip: "Distinguish SECOND-WAVE feminism (1960s onward, broader social/economic/reproductive rights focus) from earlier FIRST-WAVE feminism (primarily focused on legal rights like suffrage, covered implicitly in Units 6-7's suffrage expansion) — this wave distinction is a useful, testable framework for organizing feminism's historical development across this course."
          }
        }
      ]
    }
  ],
  frqs: [
    {
      id: 'apeuro-frq-1', difficulty: 4, unit: 1,
      prompt: "Explain ONE way that the printing press contributed to intellectual or religious change in Europe during the period c. 1450–1648, using specific evidence.",
      rubricPoints: [
        "Identifies a specific way the printing press enabled intellectual or religious change (e.g., accelerating the spread of humanist texts, or later, Reformation pamphlets/vernacular Bibles) (1 pt)",
        "Explains specifically how the technology enabled this change (lower cost, faster production, wider circulation) (1 pt)",
        "Provides specific supporting historical evidence (1 pt)"
      ],
      sampleResponse: "The printing press significantly accelerated the spread of Martin Luther's Reformation ideas across Europe. Before the press, hand-copied texts were slow and expensive to produce, limiting the spread of new ideas. After Gutenberg's development of movable type around 1450, printed pamphlets and books could be produced far more quickly and cheaply, allowing Luther's 95 Theses and later writings to circulate widely and rapidly throughout the Holy Roman Empire and beyond within just a few years of their initial composition. This rapid, wide circulation—impossible under the earlier hand-copying system—was directly responsible for the speed at which Reformation ideas reached diverse audiences across Europe, demonstrating how this specific technological innovation directly enabled unprecedented religious change."
    },
    {
      id: 'apeuro-frq-2', difficulty: 3, unit: 2,
      prompt: "Explain ONE similarity AND ONE difference between Martin Luther's and John Calvin's theological positions during the Protestant Reformation.",
      rubricPoints: [
        "Identifies a valid similarity (e.g., both rejected the sale of indulgences and papal authority, both emphasized scripture as the primary source of religious authority) (1 pt)",
        "Identifies a valid difference (e.g., Luther's justification by faith alone versus Calvin's specific doctrine of predestination) (1 pt)",
        "Provides specific supporting evidence for both the similarity and the difference (1 pt)"
      ],
      sampleResponse: "Similarity: Both Luther and Calvin rejected papal authority and the Catholic Church's sale of indulgences, instead emphasizing scripture (sola scriptura) as the primary source of religious authority rather than Church tradition or papal pronouncements. Difference: Luther is most specifically associated with justification by faith alone (sola fide) — the belief that individual faith, not good works or indulgences, is what secures salvation — while Calvin developed a more specific doctrine of predestination, the belief that God has already determined from eternity which individuals are destined for salvation, regardless of their actions. This difference reflects distinct theological emphases that led to somewhat different Protestant traditions (Lutheranism versus Calvinism) spreading through different regions of Europe."
    },
    {
      id: 'apeuro-frq-3', difficulty: 4, unit: 3,
      prompt: "\"Political developments in 17th-century France and England represented fundamentally different responses to the challenge of royal authority.\"\n\nEvaluate the extent to which you agree with this statement, using specific evidence from both nations.",
      rubricPoints: [
        "States a clear, defensible thesis responding to the extent of this difference (1 pt)",
        "Provides specific evidence of France's absolutist trajectory (e.g., Louis XIV's Versailles system, not convening the Estates-General) (1 pt)",
        "Provides specific evidence of England's constitutionalist trajectory (e.g., the Glorious Revolution, English Bill of Rights) (1 pt)",
        "Explains HOW this evidence supports the thesis regarding the extent of divergence (1 pt)",
        "Acknowledges complexity, such as noting both nations shared some underlying concerns about maintaining royal authority and stability despite their different resolutions (1 pt)"
      ],
      sampleResponse: "France and England did represent fundamentally different responses to the challenge of royal authority during the 17th century. In France, Louis XIV consolidated absolute royal power, famously associated with the phrase 'L'état, c'est moi,' and used the Palace of Versailles to control the nobility by requiring their court residence, while never convening the Estates-General, France's traditional representative body, during his long reign. This represented a clear move toward absolutism, with power concentrated firmly in the monarch. In England, by contrast, the Civil War, Restoration, and especially the Glorious Revolution of 1688 led to firm legal limits on royal power, formalized in the English Bill of Rights (1689), which affirmed Parliament's authority, particularly over taxation and lawmaking. This represented a clear move toward constitutionalism, limiting rather than concentrating royal power. However, both nations shared an underlying concern with maintaining political stability and effective governance following periods of significant crisis (France's earlier Fronde rebellions; England's Civil War) — they simply resolved this shared challenge through opposite means, with France centralizing power in the monarchy and England distributing it constitutionally between crown and Parliament."
    },
    {
      id: 'apeuro-frq-4', difficulty: 3, unit: 4,
      prompt: "Explain ONE way that Enlightenment political philosophy influenced later political developments in Europe, using a specific example.",
      rubricPoints: [
        "Identifies a specific Enlightenment concept (e.g., natural rights, social contract, popular sovereignty) (1 pt)",
        "Identifies a specific later political development influenced by this concept (e.g., the French Revolution's Declaration of the Rights of Man) (1 pt)",
        "Explains the specific connection between the philosophical concept and the political development (1 pt)"
      ],
      sampleResponse: "Enlightenment concepts of natural rights and popular sovereignty, developed by philosophers like Locke and Rousseau, directly influenced the French Revolution's Declaration of the Rights of Man and of the Citizen (1789). This foundational revolutionary document proclaimed principles including natural, inalienable rights and the idea that political authority derives from the nation/people rather than divine right of kings — directly reflecting Enlightenment social contract theory. Revolutionary leaders explicitly drew on these philosophical ideas to justify challenging and ultimately overturning the traditional absolutist political structure of the French monarchy, demonstrating a direct causal line from Enlightenment political philosophy to concrete revolutionary political change."
    },
    {
      id: 'apeuro-frq-5', difficulty: 4, unit: 5,
      prompt: "Explain ONE way that the French Revolution's radical phase (including the Reign of Terror) differed from its more moderate early phase (1789), using specific evidence.",
      rubricPoints: [
        "Identifies a specific difference between the early moderate phase and the later radical phase (e.g., shift from constitutional monarchy to republic and mass violence) (1 pt)",
        "Provides specific evidence from the early moderate phase (e.g., Declaration of the Rights of Man, initial constitutional monarchy) (1 pt)",
        "Provides specific evidence from the radical phase (e.g., execution of Louis XVI, Reign of Terror under Robespierre) (1 pt)"
      ],
      sampleResponse: "The French Revolution's early moderate phase (1789) focused on establishing a constitutional monarchy and proclaiming Enlightenment-influenced rights, evidenced by the Declaration of the Rights of Man and of the Citizen (1789), which established principles of natural rights and legal equality while initially maintaining Louis XVI as a limited, constitutional monarch. The later radical phase differed dramatically, moving toward a republic and eventually mass political violence: the monarchy was abolished and Louis XVI was executed in 1793, and the Committee of Public Safety under Robespierre initiated the Reign of Terror (1793–1794), involving mass arrests, show trials, and executions of perceived enemies of the Revolution. This shift from moderate constitutional reform to radical republicanism and violent purges demonstrates how the Revolution's goals and methods evolved dramatically as it progressed."
    },
    {
      id: 'apeuro-frq-6', difficulty: 3, unit: 6,
      prompt: "Explain ONE way that industrialization changed social class structures in 19th-century Europe, using specific evidence.",
      rubricPoints: [
        "Identifies a specific social class change resulting from industrialization (e.g., growth of the industrial working class/proletariat, growth of the industrial middle class/bourgeoisie) (1 pt)",
        "Explains specifically how this change occurred and its significance (1 pt)",
        "Provides specific supporting historical evidence (1 pt)"
      ],
      sampleResponse: "Industrialization contributed to the growth of a large industrial working class, as people left agricultural work for factory labor under often difficult conditions, including long hours and low wages, particularly in rapidly industrializing cities like Manchester. This new urban industrial working class faced significantly different living and working conditions than earlier agricultural laborers. This dramatic social change directly contributed to the rise of new political ideologies responding to these conditions, most significantly Karl Marx and Friedrich Engels's socialist critique of capitalism, published in works like The Communist Manifesto (1848), which specifically analyzed and criticized the exploitative relationship between this growing industrial proletariat and the factory-owning bourgeoisie, demonstrating how industrialization's social consequences directly shaped new political and economic ideas."
    },
    {
      id: 'apeuro-frq-7', difficulty: 4, unit: 7,
      prompt: "Explain ONE way that nationalism served as a unifying force in 19th-century Europe AND one way it served as a divisive force, using specific evidence for each.",
      rubricPoints: [
        "Identifies a specific example of nationalism as a unifying force (e.g., German unification under Bismarck, or Italian unification) (1 pt)",
        "Identifies a specific example of nationalism as a divisive force (e.g., tension within multinational Austria-Hungary among various ethnic groups) (1 pt)",
        "Provides specific supporting evidence for both examples (1 pt)"
      ],
      sampleResponse: "As a unifying force, nationalism drove German unification under Otto von Bismarck, who used a calculated series of wars (against Denmark in 1864, Austria in 1866, and France in 1870–71) to unite the previously fragmented German states under Prussian leadership, culminating in the proclamation of the German Empire in 1871 — nationalism here unified previously separate states around shared German cultural and linguistic identity. As a divisive force, nationalism created significant internal tension within the multinational Austro-Hungarian Empire, as various ethnic groups (including Hungarians, Czechs, and various Slavic populations) increasingly sought greater autonomy or independence from centralized imperial control, ultimately contributing to the empire's instability. This demonstrates nationalism's dual capacity: unifying people who share a common identity into a single nation-state, while simultaneously threatening to fracture existing multinational states along those same ethnic/national lines."
    },
    {
      id: 'apeuro-frq-8', difficulty: 4, unit: 8,
      prompt: "\"World War I fundamentally transformed the political map and social order of Europe.\"\n\nEvaluate the extent to which you agree with this statement, using specific evidence.",
      rubricPoints: [
        "States a clear, defensible thesis addressing the extent of transformation (1 pt)",
        "Provides specific evidence of political/territorial transformation (e.g., collapse of the Austro-Hungarian, Russian, German, and Ottoman Empires; new nation-states created) (1 pt)",
        "Provides specific evidence of social transformation (e.g., changes in gender roles from wartime labor, rise of new political ideologies like communism following the Russian Revolution) (1 pt)",
        "Explains HOW this evidence supports the thesis (1 pt)",
        "Acknowledges complexity, such as noting some continuities alongside the significant changes (e.g., existing nationalist tensions persisted and shaped the postwar settlement) (1 pt)"
      ],
      sampleResponse: "World War I did fundamentally transform Europe's political map and social order. Politically, the war led to the collapse of four major empires — the Austro-Hungarian, Russian, German, and Ottoman Empires — and the creation of numerous new nation-states in Central and Eastern Europe (such as Poland, Czechoslovakia, and Yugoslavia) as part of the postwar settlement, dramatically redrawing the European political map. The war also directly enabled the Russian Revolution (1917), which overthrew the Tsarist monarchy and eventually established the Soviet Union, introducing communism as a major new political and economic system with global significance. Socially, the massive wartime mobilization brought significant numbers of women into industrial labor and other public roles previously dominated by men, contributing to postwar momentum for expanded women's suffrage in several nations. However, some important continuities persisted alongside these transformations: nationalist tensions that had contributed to the war's outbreak (such as unresolved ethnic divisions in the former Austro-Hungarian territories) continued to shape and complicate the new postwar political order, showing that the war's transformative effects did not fully erase pre-existing tensions, but rather reshaped the context in which they continued to play out."
    },
    {
      id: 'apeuro-frq-9', difficulty: 3, unit: 8,
      prompt: "Explain ONE way that totalitarian regimes in interwar Europe used specific methods to maintain political control, using a specific example.",
      rubricPoints: [
        "Identifies a specific totalitarian method (e.g., propaganda, surveillance/secret police, mass mobilization organizations) (1 pt)",
        "Identifies a specific regime and example (e.g., Nazi Germany's Ministry of Propaganda, Soviet NKVD) (1 pt)",
        "Explains how this method helped maintain political control (1 pt)"
      ],
      sampleResponse: "Nazi Germany used extensive state propaganda, directed by Joseph Goebbels's Ministry of Propaganda, to maintain political control over the German population. This propaganda apparatus controlled media, film, and public messaging to shape public opinion, glorify Hitler and Nazi ideology, and demonize designated enemies (including Jewish people and political opponents), while suppressing any dissenting information or viewpoints. By controlling the information available to the German public and constantly reinforcing Nazi ideology through every available media channel, the regime was able to build and maintain popular support (or at least outward compliance) while making organized political opposition significantly more difficult, demonstrating how systematic control of information served as a key tool for totalitarian political control."
    },
    {
      id: 'apeuro-frq-10', difficulty: 3, unit: 9,
      prompt: "Explain ONE way that Cold War tensions shaped political developments within Europe during the period c. 1945–1989, using specific evidence.",
      rubricPoints: [
        "Identifies a specific way Cold War tensions shaped European political developments (e.g., the formation of NATO and the Warsaw Pact, or the division of Germany) (1 pt)",
        "Explains specifically how this development reflected broader Cold War tensions (1 pt)",
        "Provides specific supporting historical evidence (1 pt)"
      ],
      sampleResponse: "Cold War tensions directly shaped the formation of opposing military alliance systems in Europe: NATO (1949), uniting the United States with Western European allies, and the Warsaw Pact (1955), uniting the Soviet Union with its Eastern European satellite states. These alliances formalized the broader ideological and political division of Europe along Cold War lines, described metaphorically by Winston Churchill as an 'Iron Curtain' dividing the continent. This alliance division meant that European nations' military and foreign policy became closely tied to their alignment with one of the two Cold War superpowers, with countries like West Germany integrated into NATO's Western defense structure while East Germany became part of the Warsaw Pact's Soviet-aligned system, illustrating how superpower rivalry directly reshaped European political and military organization for decades."
    },
    {
      id: 'apeuro-frq-11', difficulty: 4, unit: 9,
      prompt: "Explain ONE way that Mikhail Gorbachev's policies contributed to the fall of communism in Eastern Europe in 1989, using specific evidence.",
      rubricPoints: [
        "Identifies a specific Gorbachev policy (e.g., glasnost, perestroika, or non-intervention in Eastern European affairs) (1 pt)",
        "Explains specifically how this policy contributed to the fall of communist governments in Eastern Europe (1 pt)",
        "Provides specific supporting historical evidence (1 pt)"
      ],
      sampleResponse: "Gorbachev's decision not to use Soviet military force to prop up struggling Eastern European communist governments — a significant departure from earlier Soviet interventions, such as suppressing uprisings in Hungary (1956) and Czechoslovakia (1968) — directly enabled the rapid collapse of communist control across Eastern Europe in 1989. Without the threat of Soviet military intervention to maintain their power, communist governments in countries like Poland, Hungary, and East Germany faced growing internal reform and protest movements (such as Poland's Solidarity movement) without their previous ultimate backstop of Soviet military support, allowing these movements to successfully push for political change, including the fall of the Berlin Wall, far more rapidly and with far less violence than might otherwise have occurred."
    },
    {
      id: 'apeuro-frq-12', difficulty: 3, unit: 9,
      prompt: "Explain ONE way that European integration efforts (such as the European Coal and Steel Community or the European Union) reflected lessons learned from earlier 20th-century conflicts, using specific evidence.",
      rubricPoints: [
        "Identifies a specific integration effort and its connection to preventing future conflict (e.g., European Coal and Steel Community pooling French and German resources) (1 pt)",
        "Explains specifically how this reflected lessons from earlier conflicts (World War I and/or World War II) (1 pt)",
        "Provides specific supporting evidence (1 pt)"
      ],
      sampleResponse: "The European Coal and Steel Community (1951), an early step toward European integration, pooled French and German coal and steel resources — historically significant war materials — under joint international management. This reflected a direct lesson learned from the devastating conflicts of World War I and World War II, both of which involved significant and repeated conflict between France and Germany specifically: by making these two historic rivals economically interdependent regarding war-relevant resources, integration architects hoped to make future military conflict between them more difficult and less likely, since war would now directly damage each nation's own economic interests through their shared, integrated resource management. This demonstrates how postwar European integration efforts were directly motivated by the goal of preventing a repeat of the devastating conflicts that had twice engulfed the continent in the preceding decades."
    }
  ]
}
