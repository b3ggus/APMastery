// AP Microeconomics — real College Board unit numbers/names used for
// authenticity, matching the pattern in macro.js. Unit 1 shares foundational
// concepts with AP Macroeconomics (scarcity, PPC, comparative advantage) by
// design (both courses share this foundation), using fresh scenarios/numbers.

export const micro = {
  id: 'micro',
  name: 'AP Microeconomics',
  icon: '💹',
  accent: 'indigo',
  units: [
    {
      id: 1,
      name: 'Unit 1: Basic Economic Concepts',
      questions: [
        {
          id: 'micro-1-1', difficulty: 1, type: 'mcq', topic: 'Opportunity Cost',
          prompt: "A farmer has one acre of land and can use it to grow either corn (earning $800) or soybeans (earning $650). If the farmer plants corn, the opportunity cost of this decision is:",
          choices: ['$800, the value of the corn produced', '$650, the value of the soybeans given up', '$1,450, the combined value of both crops', '$150, the difference between the two crop values'],
          correct: 1,
          explanation: {
            correct: "Opportunity cost is the value of the single best forgone alternative. Since the farmer's next best alternative to planting corn was planting soybeans worth $650, that $650 is the opportunity cost of choosing corn.",
            wrong: { 0: "$800 is the BENEFIT of the choice actually made (corn), not the cost of what was given up — opportunity cost measures the forgone alternative, not the value of the chosen option.", 2: "The land can only be used for ONE crop at a time (it's a single acre), so combining both values doesn't represent a real, available alternative use of the resource.", 3: "The 'difference' between two values is not how opportunity cost is defined or calculated — opportunity cost is the value of the forgone alternative itself, not the gap between two options." },
            tempting: "Choice C is tempting since it involves both numbers given, but opportunity cost is never the SUM of the chosen and forgone options — only one acre exists, so only one crop can actually be grown.",
            commonMistake: "Confusing opportunity cost with the value of the choice actually made, or attempting to combine/subtract the two option values rather than simply identifying the value of the single best forgone alternative.",
            apTip: "Opportunity cost = the value of the single next-best forgone alternative. When a scenario gives two specific dollar values for two mutually exclusive choices, the opportunity cost of choosing one is simply the dollar value of the other."
          }
        },
        {
          id: 'micro-1-2', difficulty: 3, type: 'mcq', topic: 'The Production Possibilities Curve',
          prompt: "A country's production possibilities curve (PPC) for two goods is typically drawn as bowed outward (concave to the origin) rather than as a straight line. This shape reflects:",
          choices: ['Constant opportunity costs regardless of how much of each good is produced', 'The law of increasing opportunity cost — as more of one good is produced, increasingly larger amounts of the other good must be given up, since resources are not equally well-suited to producing both goods', 'A situation where more of both goods can always be produced simultaneously with no tradeoff', 'An economy experiencing no scarcity of resources'],
          correct: 1,
          explanation: {
            correct: "The bowed-out shape reflects the law of increasing opportunity cost: resources are not perfectly adaptable between producing both goods, so as an economy shifts more resources toward producing more of one good, it must give up increasingly larger amounts of the other good, since progressively less well-suited resources must be reallocated.",
            wrong: { 0: "Constant opportunity cost would produce a STRAIGHT-LINE PPC (resources equally well-suited to both goods), not the bowed-out shape — a bowed curve specifically reflects CHANGING (increasing) opportunity costs.", 2: "The PPC specifically represents the TRADEOFF between two goods given limited resources — moving along the curve always requires giving up some of one good to get more of the other; simultaneous increases in both would require moving beyond the existing curve (only possible through economic growth).", 3: "The PPC itself exists specifically BECAUSE of scarcity (limited resources) — a bowed-out curve doesn't indicate an absence of scarcity, but rather illustrates the specific tradeoffs scarcity creates." },
            tempting: "Choice A is tempting because a PPC does represent tradeoffs, but a STRAIGHT-line PPC (not the typical bowed-out shape) is what would reflect constant, unchanging opportunity costs.",
            commonMistake: "Not connecting the PPC's bowed-out SHAPE specifically to the underlying economic principle (increasing opportunity cost from imperfectly adaptable resources) that explains why the curve isn't simply a straight line.",
            apTip: "Always connect the bowed-out PPC shape to the law of increasing opportunity cost — as you move along the curve, the SLOPE changes (getting steeper), reflecting that each additional unit of one good requires giving up progressively more of the other good."
          }
        },
        {
          id: 'micro-1-3', difficulty: 3, type: 'mcq', topic: 'Comparative Advantage',
          prompt: "Country X can produce either 12 units of wheat or 6 units of cloth per day using all its resources. Country Y can produce either 9 units of wheat or 9 units of cloth per day. Based on comparative advantage, which country should specialize in producing wheat?",
          choices: ['Country X, since its opportunity cost of wheat (0.5 units of cloth) is lower than Country Y\'s (1 unit of cloth)', 'Country Y, since its opportunity cost of wheat is lower than Country X\'s', 'Country X, since it can produce more wheat in absolute terms', 'Neither country, since Country Y has equal output potential in both goods'],
          correct: 0,
          explanation: {
            correct: "Country X's opportunity cost of 1 unit of wheat is 0.5 units of cloth (6 cloth given up ÷ 12 wheat gained), while Country Y's opportunity cost of 1 unit of wheat is 1 full unit of cloth (9 cloth given up ÷ 9 wheat gained). Since 0.5 < 1, Country X has the comparative advantage in wheat and should specialize in it.",
            wrong: { 1: "Country Y actually has the HIGHER opportunity cost of wheat (1 cloth per wheat, versus Country X's 0.5), meaning Country Y should specialize in cloth instead, not wheat.", 2: "Absolute advantage (who produces more in raw terms) does not determine specialization — comparative advantage (who has the lower opportunity cost) does, even though Country X happens to have the absolute advantage in wheat here too.", 3: "Country Y's equal output potential in both goods (9 and 9) doesn't mean neither country should specialize — comparative advantage can still be calculated and compared, and Country X's lower opportunity cost in wheat still determines efficient specialization." },
            tempting: "Choice C is tempting since it correctly names Country X, but for the wrong reason — absolute advantage (raw output) doesn't determine who should specialize in what; comparative advantage (lower opportunity cost) does.",
            commonMistake: "Determining specialization based on absolute advantage (who produces more) rather than calculating and comparing each country's opportunity cost, which is what actually determines comparative advantage and gains from trade.",
            apTip: "Always calculate opportunity cost as (units given up) ÷ (units gained) for each country before deciding who should specialize in what — the country with the LOWER opportunity cost of a good has the comparative advantage in producing it."
          }
        },
        {
          id: 'micro-1-4', difficulty: 2, type: 'mcq', topic: 'Positive vs. Normative Economics',
          prompt: "The statement \"The government should raise the minimum wage to $15 per hour\" is an example of:",
          choices: ['Positive economics, since it can be objectively tested and verified', 'Normative economics, since it expresses an opinion or value judgment about what policy SHOULD be, rather than a testable factual claim', 'Neither positive nor normative economics', 'Both positive and normative economics simultaneously, with no meaningful distinction between them'],
          correct: 1,
          explanation: {
            correct: "This statement expresses a value judgment or opinion about what policy OUGHT to be done — this is the defining feature of normative economics, which deals with subjective claims about what 'should' happen, as opposed to positive economics, which deals with objective, testable factual claims about how the economy actually works.",
            wrong: { 0: "Positive economics deals with objective, testable factual claims (e.g., 'raising the minimum wage to $15 will reduce employment by X%') — this statement instead expresses a subjective OPINION about what should be done, which cannot be simply proven true or false through data alone.", 2: "This statement clearly falls into one of the two categories — it is a normative (opinion-based, \"should\") statement, not an economics-unrelated statement.", 3: "Positive and normative economics are DISTINCT categories with a clear, testable distinction (can it be objectively verified as true/false, or does it express an opinion about what should happen) — this statement specifically falls into the normative category alone." },
            tempting: "Choice A is tempting because minimum wage effects CAN be studied using positive economic analysis, but this SPECIFIC statement is phrased as a policy recommendation ('should'), which makes it normative, not positive.",
            commonMistake: "Confusing a topic that COULD be studied using positive economic analysis (like minimum wage effects) with a specific STATEMENT about that topic that is phrased normatively (using 'should') rather than as a testable factual claim.",
            apTip: "Look for the word 'should' (or similar language expressing opinion/value judgment) as a strong signal of a NORMATIVE statement — positive statements instead use language describing what IS or WILL happen, in principle testable against real-world data."
          }
        },
        {
          id: 'micro-1-5', difficulty: 2, type: 'mcq', topic: 'Marginal Analysis and Consumer Choice',
          prompt: "According to the principle of marginal analysis, a rational consumer will continue purchasing additional units of a good as long as:",
          choices: ['Total utility from all units purchased so far is positive', 'The marginal utility gained from the next unit is greater than or equal to its marginal cost (price)', 'Average utility per unit purchased is increasing', 'The consumer has not yet spent their entire budget'],
          correct: 1,
          explanation: {
            correct: "Marginal analysis for consumer choice compares the marginal (additional) benefit from ONE more unit — its marginal utility — to its marginal cost (the price paid). A rational consumer continues purchasing as long as marginal utility is at least as large as the price, and stops once price would exceed the marginal utility gained.",
            wrong: { 0: "Positive TOTAL utility doesn't indicate whether purchasing one MORE specific unit is worthwhile — total utility can be positive and rising even as marginal utility from each additional unit continues to fall (per the law of diminishing marginal utility).", 2: "Average utility trends don't directly determine the marginal decision — a rational consumer specifically compares the MARGINAL (additional) utility of the next unit to its cost, not the average across all units purchased.", 3: "Simply having remaining budget doesn't mean purchasing more of THIS SPECIFIC good is worthwhile — the consumer should only buy more if the marginal utility from doing so justifies the price, regardless of whether unspent budget remains." },
            tempting: "Choice A is tempting since positive total utility sounds like a reasonable purchasing signal, but the marginal DECISION specifically depends on the utility from the NEXT unit, not the cumulative total so far.",
            commonMistake: "Confusing total or average utility measures (which describe overall satisfaction) with the marginal utility comparison (marginal utility versus price) that actually determines the rational decision to buy one more unit.",
            apTip: "The rational consumer purchasing rule mirrors the general marginal analysis rule: continue as long as marginal benefit (marginal utility) ≥ marginal cost (price), and stop once price would exceed marginal utility — this reflects the law of diminishing marginal utility, where each additional unit typically provides less additional satisfaction than the last."
          }
        },
        {
          id: 'micro-1-6', difficulty: 2, type: 'mcq', topic: 'Economic Systems',
          prompt: "In a market economic system, as compared to a command economic system, the fundamental economic questions of what to produce, how to produce it, and for whom to produce are primarily answered by:",
          choices: ['Central government planners who directly determine production and distribution decisions', 'The decentralized interaction of individual buyers and sellers through prices, driven by supply and demand in markets', 'A single monopolistic firm that controls all production nationwide', 'Random chance, with no systematic mechanism determining outcomes'],
          correct: 1,
          explanation: {
            correct: "In a market economic system, these fundamental economic questions are answered primarily through the decentralized interaction of individual buyers and sellers in markets, coordinated by the price mechanism — prices signal relative scarcity and consumer preferences, guiding producers' decisions about what and how much to produce without centralized government direction.",
            wrong: { 0: "This describes a COMMAND economic system (centrally planned), the opposite of a market economy, which specifically relies on decentralized market mechanisms rather than central government planners.", 2: "A market economy is characterized by numerous independent buyers and sellers interacting (not a single controlling firm) — a single monopolistic controller would more closely resemble a highly centralized, non-competitive system, not the decentralized market ideal.", 3: "Market economies have a SYSTEMATIC coordinating mechanism (the price system, driven by supply and demand) — this is not random or chance-based, even though no single entity centrally directs the outcome." },
            tempting: "Choice A is tempting because it describes a REAL alternative economic system (command economy), but the question specifically asks about MARKET economies, which function through decentralized price signals rather than central planning.",
            commonMistake: "Confusing the mechanisms of market economies (decentralized price signals from supply and demand) with command economies (centralized government planning) — these represent two fundamentally different approaches to answering the basic economic questions.",
            apTip: "Remember the three fundamental economic questions (what, how, and for whom to produce) as a recurring framework — market economies answer these through decentralized price signals, command economies through centralized planning, and most real-world economies are actually 'mixed economies' combining elements of both."
          }
        }
      ]
    },
    {
      id: 2,
      name: 'Unit 2: Supply and Demand',
      questions: [
        {
          id: 'micro-2-1', difficulty: 3, type: 'mcq', topic: 'Price Elasticity of Demand',
          prompt: "When the price of a good rises from $10 to $12 (a 20% increase), the quantity demanded falls from 100 units to 80 units (a 20% decrease). Based on this information, the price elasticity of demand for this good is approximately:",
          choices: ['-1.0, meaning demand is unit elastic', '-0.2, meaning demand is inelastic', '-2.0, meaning demand is elastic', '0, meaning demand is perfectly inelastic'],
          correct: 0,
          explanation: {
            correct: "Price elasticity of demand = (% change in quantity demanded) ÷ (% change in price) = (-20%) ÷ (20%) = -1.0. Since the absolute value equals exactly 1, demand is unit elastic — the percentage change in quantity demanded exactly matches the percentage change in price.",
            wrong: { 1: "This doesn't correctly divide the two given percentage changes — since both percentage changes are equal in magnitude (20% each), the ratio should be exactly -1.0, not a smaller fraction.", 2: "This doesn't match the actual calculation — with EQUAL percentage changes in price and quantity (both 20%), the elasticity coefficient is exactly -1.0, not -2.0 (which would require quantity to change twice as much, percentage-wise, as price).", 3: "An elasticity of 0 would mean quantity demanded doesn't change AT ALL in response to a price change (perfectly inelastic) — but here quantity demanded DID change significantly (a 20% decrease), ruling out zero elasticity." },
            tempting: "Choice C is tempting if a student mistakenly doubles or miscalculates the ratio, but since both percentage changes given are exactly equal (20% each), the correctly calculated elasticity must be exactly -1.0.",
            commonMistake: "Incorrectly calculating the percentage change ratio, or forgetting that equal percentage changes in price and quantity demanded (regardless of the specific numbers) always produce an elasticity coefficient of exactly -1 (unit elastic).",
            apTip: "Price elasticity of demand = %ΔQd ÷ %ΔP. When the magnitudes of the percentage changes are equal, elasticity is exactly -1 (unit elastic); when %ΔQd exceeds %ΔP in magnitude, demand is elastic (|E|>1); when %ΔQd is smaller than %ΔP, demand is inelastic (|E|<1)."
          }
        },
        {
          id: 'micro-2-2', difficulty: 2, type: 'mcq', topic: 'Substitute and Complementary Goods',
          prompt: "Coffee and tea are substitute goods, while coffee and coffee creamer are complementary goods. If the price of coffee rises significantly, what will happen in the markets for tea and coffee creamer?",
          choices: ['Demand for tea will increase (shift right), and demand for coffee creamer will decrease (shift left)', 'Demand for both tea and coffee creamer will increase (shift right)', 'Demand for both tea and coffee creamer will decrease (shift left)', 'Demand for tea will decrease, and demand for coffee creamer will increase'],
          correct: 0,
          explanation: {
            correct: "As coffee becomes more expensive, some consumers switch to tea (a substitute), increasing demand for tea (shifting the tea demand curve right). Meanwhile, since less coffee is being purchased, less coffee creamer (a complement, used together with coffee) is needed, decreasing demand for coffee creamer (shifting its demand curve left).",
            wrong: { 1: "Coffee creamer's demand should DECREASE (not increase) since it is used together with coffee — with less coffee being purchased, complementary coffee creamer demand falls, not rises.", 2: "Tea's demand should INCREASE (not decrease) since it is a substitute for coffee — as coffee becomes more expensive, consumers switch toward the relatively cheaper substitute, tea.", 3: "This reverses both relationships — tea (a substitute) should see increased demand, while coffee creamer (a complement) should see decreased demand, not the opposite pattern shown here." },
            tempting: "None of the distractors correctly track both relationships, but confusing which good is the substitute (tea) versus the complement (creamer) is a common source of error.",
            commonMistake: "Confusing the demand response direction for substitutes (demand for the substitute good INCREASES when the price of the original good rises) versus complements (demand for the complement DECREASES when the price of the original good rises).",
            apTip: "For substitute goods, a price increase in one good shifts demand for the OTHER good in the SAME direction (both increase, or think of them as moving together); for complementary goods, a price increase in one shifts demand for the other in the OPPOSITE direction (one up, one down)."
          }
        },
        {
          id: 'micro-2-3', difficulty: 3, type: 'mcq', topic: 'Price Ceilings',
          prompt: "A government imposes a price ceiling on rental apartments that is set BELOW the market equilibrium price. What is the most likely result of this policy?",
          choices: ['A surplus of apartments, as landlords produce more housing than renters want', 'A shortage of apartments, as the quantity of apartments demanded at the artificially low price exceeds the quantity landlords are willing to supply', 'No effect on the market, since price ceilings never actually change market outcomes', 'A shortage will not occur, since the market will simply move to a new equilibrium at the ceiling price'],
          correct: 1,
          explanation: {
            correct: "A price ceiling set below equilibrium price is a BINDING price control that prevents the price from rising to clear the market. At this artificially low price, quantity demanded (renters wanting apartments) exceeds quantity supplied (landlords willing to offer apartments at that low price), creating a persistent shortage.",
            wrong: { 0: "A price ceiling BELOW equilibrium discourages, rather than encourages, supply (since landlords receive less revenue per unit) while encouraging MORE demand (since rent is cheaper) — this combination creates a SHORTAGE, not a surplus.", 2: "A BINDING price ceiling (set below equilibrium) DOES have a real, significant market effect — specifically causing a persistent shortage, since it prevents the price mechanism from naturally balancing quantity supplied and demanded.", 3: "Because the price ceiling is BELOW equilibrium and legally prevents the price from rising further, the market CANNOT reach a new balanced equilibrium at that price — quantity demanded will persistently exceed quantity supplied, creating an ongoing shortage rather than a stable new equilibrium." },
            tempting: "Choice D is tempting because it's easy to assume markets always find a new balance point, but a BINDING price ceiling specifically prevents the price from rising to the level that WOULD balance supply and demand, creating a persistent shortage instead.",
            commonMistake: "Not recognizing that a price ceiling set BELOW equilibrium is 'binding' and legally prevents the market-clearing price adjustment from occurring — this specifically and predictably creates a shortage, a fundamental and frequently tested price control effect.",
            apTip: "A price ceiling is only 'binding' (has an actual market effect) when set BELOW equilibrium price — this creates a shortage (Qd > Qs) since the low price boosts quantity demanded while discouraging quantity supplied. A price ceiling set ABOVE equilibrium would have no effect, since the market would already naturally settle below that ceiling."
          }
        },
        {
          id: 'micro-2-4', difficulty: 3, type: 'mcq', topic: 'Price Floors',
          prompt: "A government imposes a minimum wage (a price floor on labor) that is set ABOVE the market equilibrium wage. What is the most likely result of this policy in the labor market?",
          choices: ['A shortage of workers, as employers demand more labor than is available', 'A surplus of labor (unemployment), as the quantity of labor supplied at the artificially high wage exceeds the quantity employers demand', 'No effect on the labor market whatsoever', 'Wages will fall below the minimum wage level to restore equilibrium'],
          correct: 1,
          explanation: {
            correct: "A minimum wage set above equilibrium is a binding price floor. At this artificially high wage, more workers want to work (quantity supplied of labor increases) than employers are willing to hire (quantity demanded of labor decreases) — this creates a surplus of labor, which in the labor market context is known as unemployment.",
            wrong: { 0: "A wage set ABOVE equilibrium discourages employers from hiring (they demand LESS labor at the higher wage), while encouraging MORE people to seek work (supply increases) — this combination creates a labor SURPLUS (unemployment), not a shortage.", 2: "A BINDING price floor (set above equilibrium) DOES have a real market effect — specifically creating unemployment (a labor surplus), since it prevents the wage from falling to the level that would naturally balance labor supply and demand.", 3: "Because the minimum wage LEGALLY prevents wages from falling below that level, the market CANNOT return to its natural equilibrium wage — this is precisely why the price floor creates a persistent surplus (unemployment) rather than allowing the market to self-correct." },
            tempting: "Choice A is tempting because 'shortage' and 'surplus' can be confused, but a price floor set above equilibrium specifically creates a SURPLUS of the good/resource (here, labor) since suppliers offer more than buyers demand at that artificially high price.",
            commonMistake: "Confusing the effects of price floors (surplus, when set above equilibrium) with price ceilings (shortage, when set below equilibrium) — these are mirror-image policies with opposite typical effects.",
            apTip: "A price floor is only 'binding' (has an actual market effect) when set ABOVE equilibrium price — this creates a surplus (Qs > Qd), which in the labor market specifically manifests as unemployment. Contrast this directly with price ceilings, which create shortages when set below equilibrium."
          }
        },
        {
          id: 'micro-2-5', difficulty: 2, type: 'mcq', topic: 'Income Elasticity of Demand',
          prompt: "If a 10% increase in consumer income leads to a 15% increase in the quantity demanded of a particular good, this good is best classified as:",
          choices: ['An inferior good, since demand increased', 'A normal good, and specifically a luxury good, since income elasticity of demand is greater than 1 (positive and elastic)', 'A normal good, but specifically a necessity, since income elasticity is negative', 'A good with zero income elasticity of demand'],
          correct: 1,
          explanation: {
            correct: "Income elasticity of demand here = 15% ÷ 10% = 1.5, which is positive (demand increases as income increases, making it a normal good) and greater than 1 in magnitude (demand increases proportionally MORE than income, making it specifically a luxury good, as opposed to a necessity).",
            wrong: { 0: "An INFERIOR good is defined by a NEGATIVE income elasticity (demand DECREASES as income increases) — since demand here increased alongside income, this is a NORMAL good, not inferior.", 2: "A necessity typically has a POSITIVE but relatively small income elasticity (between 0 and 1, meaning demand increases but less than proportionally to income) — this good's elasticity of 1.5 (greater than 1) instead classifies it as a luxury good, and importantly, positive elasticity indicates a normal good, not negative.", 3: "Zero income elasticity would mean demand does NOT change at all when income changes — but here demand changed significantly (15% increase), ruling out zero elasticity." },
            tempting: "Choice C is tempting because 'necessity' sounds intuitive for many goods, but a necessity specifically has income elasticity BETWEEN 0 and 1 (positive but less than proportional) — this good's elasticity of 1.5 exceeds 1, classifying it as a luxury.",
            commonMistake: "Confusing the SIGN of income elasticity (positive = normal good, negative = inferior good) with its MAGNITUDE (greater than 1 = luxury, between 0 and 1 = necessity) — both pieces of information are needed for a complete classification.",
            apTip: "Income elasticity of demand = %ΔQd ÷ %Δincome. Remember the classification: negative = inferior good; positive and less than 1 = normal good/necessity; positive and greater than 1 = normal good/luxury."
          }
        },
        {
          id: 'micro-2-6', difficulty: 3, type: 'mcq', topic: 'Consumer and Producer Surplus',
          prompt: "At the market equilibrium price and quantity, total economic surplus (the sum of consumer surplus and producer surplus) is:",
          choices: ['Always equal to zero at equilibrium', 'Maximized at the competitive market equilibrium, representing the most efficient allocation of resources', 'Only relevant when a price ceiling or price floor is in place', 'Impossible to measure or estimate in any market'],
          correct: 1,
          explanation: {
            correct: "At the competitive market equilibrium (where supply equals demand with no price controls or other distortions), total economic surplus — consumer surplus (the value consumers receive above what they pay) plus producer surplus (the value producers receive above their costs) — is MAXIMIZED, representing the most economically efficient allocation of resources.",
            wrong: { 0: "Total surplus at competitive equilibrium is generally POSITIVE and, importantly, MAXIMIZED (not zero) — both consumers and producers typically gain value from transactions occurring at the market-clearing price.", 2: "Consumer and producer surplus are meaningful and calculable concepts in ANY market, not just when price controls create distortions — indeed, comparing surplus WITH and WITHOUT price controls (or other market interventions) is exactly how economists measure the WELFARE LOSS (deadweight loss) that such interventions can cause.", 3: "Total surplus CAN be estimated, typically as the area of triangles/regions bounded by the supply and demand curves on a standard supply-and-demand graph — this is a standard, calculable concept in microeconomic analysis, not something impossible to measure." },
            tempting: "Choice C is tempting because surplus analysis is FREQUENTLY used specifically to analyze the effects of price controls (like ceilings/floors), but the underlying concept of consumer/producer surplus is meaningful and applicable in any market, with or without government intervention.",
            commonMistake: "Assuming consumer/producer surplus concepts only apply when analyzing price controls, rather than recognizing that MAXIMUM total surplus at the natural competitive equilibrium is itself the BASELINE against which the deadweight loss from any market distortion (price controls, taxes, etc.) is measured.",
            apTip: "Total surplus (consumer + producer surplus) is MAXIMIZED at the competitive market equilibrium with no distortions — this is the foundation for understanding DEADWEIGHT LOSS (Unit 6), which measures the REDUCTION in total surplus caused by market interventions like price controls or taxes that push quantity away from this efficient equilibrium level."
          }
        }
      ]
    },
    {
      id: 3,
      name: 'Unit 3: Production, Cost, and the Perfect Competition Model',
      questions: [
        {
          id: 'micro-3-1', difficulty: 3, type: 'mcq', topic: 'Diminishing Marginal Returns',
          prompt: "A factory adds workers one at a time to a fixed number of machines. Initially, each additional worker increases output significantly, but eventually each additional worker adds progressively less to total output than the previous worker did. This pattern illustrates:",
          choices: ['Economies of scale', 'The law of diminishing marginal returns, which occurs in the short run when at least one input (here, machines/capital) is fixed', 'A permanent, unlimited increase in marginal product as more workers are added', 'The concept of comparative advantage'],
          correct: 1,
          explanation: {
            correct: "This describes the law of diminishing marginal returns: in the short run, with at least one fixed input (the fixed number of machines), adding more of a variable input (workers) eventually causes each additional worker to contribute less additional (marginal) output than the previous one, since the fixed capital must increasingly be shared among more workers.",
            wrong: { 0: "Economies of scale describes what happens to LONG-RUN average costs as a firm's ENTIRE scale of operation (including capital) changes — this scenario specifically involves a FIXED input (machines) in the SHORT RUN, which is the defining condition for diminishing returns, not economies of scale.", 2: "The scenario specifically describes marginal product EVENTUALLY DECLINING (each worker adding less than the last), not a permanent unlimited increase — this decline is precisely what defines diminishing marginal returns.", 3: "Comparative advantage relates to which producer (individual, firm, or country) has the lower opportunity cost of producing a good, relevant for trade/specialization decisions — this concept doesn't describe the pattern of diminishing output gains from adding workers to fixed capital described here." },
            tempting: "Choice A is tempting since both concepts relate to production and scale, but economies of scale specifically concerns LONG-RUN cost behavior as ALL inputs vary, while diminishing returns specifically concerns SHORT-RUN behavior with at least one FIXED input.",
            commonMistake: "Confusing diminishing marginal returns (a short-run concept, with at least one fixed input) with economies/diseconomies of scale (a long-run concept, where all inputs, including capital, can vary).",
            apTip: "The law of diminishing marginal returns is specifically a SHORT-RUN phenomenon (at least one input, like capital/machines, is fixed) — as more of a variable input (labor) is added, marginal product eventually declines. This directly explains why short-run marginal cost curves are eventually upward-sloping (as marginal product falls, marginal cost of producing more output rises)."
          }
        },
        {
          id: 'micro-3-2', difficulty: 4, type: 'mcq', topic: 'Marginal Cost and Average Cost Curves',
          prompt: "On a standard short-run cost curve graph, the marginal cost (MC) curve intersects both the average variable cost (AVC) curve and the average total cost (ATC) curve at:",
          choices: ['The highest points of the AVC and ATC curves', 'The minimum points of the AVC and ATC curves', 'A single point where all three curves are equal at every output level', 'Points that are unrelated to the shape or position of the AVC and ATC curves'],
          correct: 1,
          explanation: {
            correct: "The marginal cost curve intersects both the AVC and ATC curves precisely at their MINIMUM points. This reflects a general mathematical relationship: when marginal cost is below average cost, it pulls the average down; when marginal cost is above average cost, it pulls the average up; the average is therefore at its minimum exactly where marginal cost crosses it.",
            wrong: { 0: "MC intersects AVC and ATC at their MINIMUM points, not their highest points — this reflects the mathematical relationship between marginal and average values (marginal pulls the average toward itself).", 2: "MC, AVC, and ATC are NOT equal at every output level — they are distinct curves with different values across most of the output range; MC specifically equals AVC and ATC only at those curves' respective minimum points, not universally.", 3: "MC's intersection points with AVC and ATC are DIRECTLY and specifically related to those curves' shapes — MC crossing from below to above an average curve is precisely what causes that average curve to reach its minimum and then start rising." },
            tempting: "None of the distractors accurately describe this relationship, but assuming MC and average costs are unrelated (choice D) misses one of the most fundamental, testable relationships in cost curve analysis.",
            commonMistake: "Not understanding the general mathematical principle that 'marginal pulls the average' — whenever marginal cost is below the current average, the average is being pulled down (still falling); whenever marginal cost is above the average, the average is being pulled up (rising) — meaning the average must be at its minimum exactly where marginal crosses it.",
            apTip: "This MC-crosses-AVC-and-ATC-at-their-minimums relationship is one of the MOST frequently tested and graphed relationships in AP Microeconomics — practice sketching this graph from memory: MC starts below AVC/ATC, crosses AVC at its minimum first (since AVC's minimum occurs at a lower output level than ATC's), then crosses ATC at ITS minimum shortly after."
          }
        },
        {
          id: 'micro-3-3', difficulty: 3, type: 'mcq', topic: 'Perfect Competition — Profit Maximization',
          prompt: "A perfectly competitive firm faces a market price of $40 per unit. Its marginal cost curve is given by MC = 2Q. To maximize profit in the short run, this firm should produce a quantity of:",
          choices: ['20 units, where price equals marginal cost (P = MC)', '40 units, matching the price level directly', '0 units, since perfectly competitive firms cannot earn any profit', '10 units, where average cost is at its theoretical minimum'],
          correct: 0,
          explanation: {
            correct: "A perfectly competitive firm maximizes profit by producing where price equals marginal cost (P = MC), since the firm is a 'price taker' and marginal revenue equals price for every unit sold. Setting P = MC: 40 = 2Q, so Q = 20 units.",
            wrong: { 1: "This confuses the given PRICE value (40) with the correct OUTPUT quantity — the profit-maximizing rule requires setting price EQUAL TO marginal cost and solving for Q algebraically, not simply using the price number as the quantity.", 2: "Perfectly competitive firms CAN and often DO earn profit (or at least cover costs) in the short run, depending on where price sits relative to their cost curves — the P=MC profit-maximizing RULE doesn't imply zero output; it's used specifically to find the profit-maximizing positive quantity.", 3: "The profit-maximizing quantity is found using the P=MC rule specifically, not by locating a theoretical minimum average cost point (which isn't calculable from the information given, and isn't the correct profit-maximization rule in any case)." },
            tempting: "Choice B is tempting because it directly reuses the given price number, but the actual profit-maximizing rule requires solving the equation P=MC (40=2Q) for Q, which yields a different numerical answer (20).",
            commonMistake: "Forgetting to actually SOLVE the P=MC equation algebraically for Q, and instead just restating one of the given numbers (price) as if it were the answer.",
            apTip: "The perfectly competitive firm's profit-maximizing rule is P = MC (since P = MR for a price-taking firm). Given a marginal cost function and a market price, always set them equal and solve algebraically for Q — this single equation is one of the most frequently tested calculations in this unit."
          }
        },
        {
          id: 'micro-3-4', difficulty: 4, type: 'mcq', topic: 'The Shutdown Decision',
          prompt: "In the short run, a perfectly competitive firm should shut down production entirely (produce zero output) if:",
          choices: ['Price is below average variable cost (P < AVC), meaning the firm cannot even cover its variable costs of production', 'Price is below average total cost but still above average variable cost', 'The firm is earning zero economic profit', 'Total revenue is less than total fixed cost'],
          correct: 0,
          explanation: {
            correct: "A firm should shut down in the short run specifically when price falls below average variable cost (P < AVC) — at this point, the firm cannot even cover its variable costs of production, so every unit produced adds to losses beyond what it would lose by simply shutting down and only paying its unavoidable fixed costs.",
            wrong: { 1: "When P is below ATC but still ABOVE AVC, the firm should continue operating in the short run — it's covering its variable costs and contributing SOME revenue toward fixed costs, minimizing its losses compared to shutting down completely (where it would lose the entire fixed cost with no offsetting revenue).", 2: "Zero economic profit (a 'normal profit' situation) does NOT indicate the firm should shut down — this actually describes a firm doing reasonably well, covering all its explicit and implicit costs, including a normal return on investment.", 3: "This isn't the standard shutdown criterion used in the model — the correct short-run shutdown rule specifically compares PRICE to AVERAGE VARIABLE COST (a per-unit comparison), not total revenue to total fixed cost directly." },
            tempting: "Choice B is tempting because P < ATC does mean the firm is losing money overall, but the specific SHUTDOWN threshold is P < AVC — a firm with P between AVC and ATC is still losing money but should keep operating anyway, since operating loses LESS than shutting down entirely.",
            commonMistake: "Confusing the shutdown rule (P < AVC) with simply losing money (P < ATC) — a firm can be UNPROFITABLE (P<ATC) while still rationally continuing to operate in the short run, as long as P remains above AVC.",
            apTip: "Memorize the short-run shutdown rule precisely: shut down if P < AVC (minimum). If P is between AVC and ATC, the firm should continue operating despite short-run losses, since it's covering variable costs and contributing partially toward fixed costs — shutting down would mean losing the ENTIRE fixed cost with zero offsetting revenue."
          }
        },
        {
          id: 'micro-3-5', difficulty: 4, type: 'mcq', topic: 'Long-Run Equilibrium in Perfect Competition',
          prompt: "In the long run, perfectly competitive firms earn zero economic profit at equilibrium. This long-run equilibrium condition can be expressed as:",
          choices: ['P = MC only, with no other conditions required', 'P = MR = MC = minimum ATC, since free entry and exit eliminate any economic profit or loss over time', 'P is always greater than ATC, guaranteeing positive economic profit indefinitely', 'Firms produce at a quantity where MC is falling'],
          correct: 1,
          explanation: {
            correct: "In long-run perfectly competitive equilibrium, P = MR = MC = minimum ATC. Free entry (when firms are earning positive economic profit) and free exit (when firms are earning losses) drive the market price toward the level exactly equal to each firm's minimum average total cost, at which point economic profit is exactly zero and there's no further incentive for firms to enter or exit.",
            wrong: { 0: "P = MC alone describes the SHORT-RUN profit-maximizing condition, but LONG-RUN equilibrium specifically requires the ADDITIONAL condition that P also equals minimum ATC (zero economic profit) — without this additional condition, firms would still have an incentive to enter or exit the market.", 2: "Positive economic profit specifically ATTRACTS new firms to enter the market in the long run (since entry is free/unrestricted in the perfect competition model), which increases market supply and drives price back DOWN until economic profit returns to zero — profit cannot persist indefinitely under this model's assumptions.", 3: "Firms produce where MC is RISING (not falling) at the profit-maximizing quantity — specifically at the point where the rising MC curve crosses MR (=P), which in long-run equilibrium is also the minimum point of the ATC curve." },
            tempting: "Choice A is tempting since P=MC IS part of the correct answer, but it's incomplete — the LONG-RUN equilibrium condition requires the ADDITIONAL specification that this occurs exactly at minimum ATC (zero economic profit), distinguishing it from the more general short-run profit-maximizing rule.",
            commonMistake: "Stating only the short-run profit-maximizing condition (P=MC) without adding the crucial LONG-RUN specific condition (P = minimum ATC, meaning zero economic profit) that results from free entry and exit driving out any profit or loss over time.",
            apTip: "Long-run perfect competition equilibrium: P = MR = MC = minimum ATC. This four-way equality is one of the most important and frequently tested concepts in this unit — it reflects the powerful economic logic of free entry/exit eliminating economic profit (though firms still earn 'normal' accounting profit, covering all costs including opportunity cost of capital)."
          }
        },
        {
          id: 'micro-3-6', difficulty: 3, type: 'mcq', topic: 'Economies of Scale',
          prompt: "A firm experiences \"economies of scale\" when:",
          choices: ['Long-run average total cost increases as the firm increases its scale of production', 'Long-run average total cost decreases as the firm increases its scale of production, often due to factors like specialization of labor or bulk purchasing discounts', 'Short-run marginal cost decreases due to a temporarily fixed input', 'The firm\'s total revenue exceeds its total cost'],
          correct: 1,
          explanation: {
            correct: "Economies of scale occur when a firm's LONG-RUN average total cost DECREASES as it increases its overall scale of production (increasing ALL inputs, including capital, since this is a long-run concept) — often resulting from factors like greater specialization of labor, more efficient use of large-scale equipment, or bulk-purchasing discounts on inputs.",
            wrong: { 0: "This describes the OPPOSITE — DISECONOMIES of scale (where long-run average cost INCREASES with scale, often due to coordination/management difficulties in very large organizations) — economies of scale specifically means average cost DECREASES with increased scale.", 2: "Economies of scale is specifically a LONG-RUN concept (concerning changes in the firm's overall scale, including capital) — this describes a different, SHORT-RUN cost concept instead, which relates to diminishing returns from a temporarily fixed input, not economies of scale.", 3: "This describes overall PROFITABILITY (total revenue vs. total cost), a completely different concept from economies of scale, which specifically concerns how AVERAGE cost per unit changes as the SCALE of production changes." },
            tempting: "Choice A is tempting only if 'economies of scale' is confused with its opposite (diseconomies of scale) — remember that economies of scale specifically describes cost ADVANTAGES (decreasing average cost) from larger scale.",
            commonMistake: "Confusing economies of scale (long-run, all inputs variable, average cost DECREASING with scale) with either its opposite (diseconomies of scale, cost increasing with scale) or with short-run diminishing returns (which involves at least one FIXED input, a different concept entirely).",
            apTip: "Economies of scale is a LONG-RUN concept (long-run average total cost curve, LRATC) reflecting cost advantages from larger scale — contrast this directly with diminishing marginal returns (a SHORT-RUN concept with at least one fixed input) and with diseconomies of scale (the OPPOSITE long-run pattern, where costs increase with excessive scale, often due to management/coordination challenges)."
          }
        }
      ]
    },
    {
      id: 4,
      name: 'Unit 4: Imperfect Competition',
      questions: [
        {
          id: 'micro-4-1', difficulty: 4, type: 'mcq', topic: 'Monopoly Profit Maximization',
          prompt: "A monopolist faces the demand curve P = 100 - 2Q and has marginal revenue MR = 100 - 4Q. The monopolist's marginal cost is constant at MC = $20. To maximize profit, the monopolist should produce a quantity of 20 units and charge a price of:",
          choices: ['$20, equal to marginal cost', '$60, found by substituting Q=20 into the demand equation (not the marginal revenue equation)', '$100, the maximum possible price on the demand curve', '$40, the average of price and marginal cost'],
          correct: 1,
          explanation: {
            correct: "The monopolist maximizes profit where MR = MC: 100 - 4Q = 20, solving gives Q = 20. However, the PRICE the monopolist charges comes from the DEMAND curve (not the MR curve) at this quantity: P = 100 - 2(20) = 100 - 40 = $60. A key monopoly rule: find quantity using MR=MC, but find price using the demand curve at that quantity.",
            wrong: { 0: "$20 is the marginal COST, not the price the monopolist charges — a defining feature of monopoly (unlike perfect competition) is that price is set ABOVE marginal cost, using the demand curve, not equal to it.", 2: "$100 is the price-axis INTERCEPT of the demand curve (the price if quantity were 0) — it is not the actual profit-maximizing price at the correctly calculated quantity of 20 units.", 3: "This isn't how monopoly pricing works — price is NOT found by averaging price and marginal cost; it's found by plugging the profit-maximizing quantity into the DEMAND equation specifically." },
            tempting: "Choice A is tempting because P=MC is the rule for PERFECT COMPETITION, but monopolists specifically charge a price ABOVE marginal cost, found using the demand curve at the MR=MC quantity — this is a key monopoly-specific distinction.",
            commonMistake: "Using the marginal revenue equation (or marginal cost) to find price instead of the DEMAND equation — the MR=MC equality is used ONLY to solve for the profit-maximizing QUANTITY; the corresponding PRICE must then be found by plugging that quantity into the DEMAND curve equation.",
            apTip: "The two-step monopoly profit-maximization process: (1) Set MR = MC and solve for Q. (2) Plug that Q value into the DEMAND equation (not MR, not MC) to find the profit-maximizing price P. This price will always be ABOVE marginal cost for a monopolist — the size of this markup reflects the monopolist's market power."
          }
        },
        {
          id: 'micro-4-2', difficulty: 3, type: 'mcq', topic: 'Monopoly Deadweight Loss',
          prompt: "Compared to a perfectly competitive market with identical costs, a monopoly typically produces:",
          choices: ['A greater quantity at a lower price, increasing total economic surplus', 'A smaller quantity at a higher price, resulting in a deadweight loss to society (reduced total economic surplus) compared to the competitive outcome', 'The exact same quantity and price as a perfectly competitive market', 'An identical level of total economic surplus, just distributed differently between consumers and the monopolist'],
          correct: 1,
          explanation: {
            correct: "A monopolist restricts output below the competitive level and charges a higher price (using its market power to set P above MC, unlike a price-taking competitive firm) — this restriction of output below the socially efficient competitive level creates a deadweight loss, representing mutually beneficial transactions that don't occur, reducing total economic surplus compared to the competitive outcome.",
            wrong: { 0: "This describes the OPPOSITE of monopoly's actual effect — a monopoly produces LESS (not more) at a HIGHER (not lower) price than a competitive market, and this restriction DECREASES (not increases) total surplus.", 2: "A monopoly and a perfectly competitive market with identical costs produce DIFFERENT outcomes — monopoly specifically restricts output and raises price above the competitive level, due to its market power (ability to set P > MC, rather than being a price-taker).", 3: "Monopoly does NOT simply redistribute the SAME total surplus differently — it actually REDUCES total surplus (creating deadweight loss) compared to the competitive outcome, due to the output restriction, not just a different distribution of an unchanged total surplus amount." },
            tempting: "Choice D is tempting because monopoly power DOES transfer some surplus from consumers to the monopolist (higher price, more producer surplus), but it also creates a NET LOSS in total surplus (deadweight loss) beyond just redistribution — this net loss is the key inefficiency.",
            commonMistake: "Assuming monopoly's effect is purely REDISTRIBUTIVE (just shifting surplus from consumers to the monopolist) without recognizing the ADDITIONAL deadweight loss — mutually beneficial transactions that simply don't happen because of the monopolist's output restriction, representing an actual net loss to society, not just a transfer.",
            apTip: "Practice graphing monopoly deadweight loss: it appears as the triangle between the monopoly quantity and the (larger) competitive/efficient quantity, bounded by the demand and marginal cost curves — this visual representation of 'lost' mutually beneficial trades is one of the most frequently tested graphs in this unit."
          }
        },
        {
          id: 'micro-4-3', difficulty: 3, type: 'mcq', topic: 'Price Discrimination',
          prompt: "A movie theater charges a lower ticket price to senior citizens and students than to other adult customers for the identical movie showing. This practice is an example of:",
          choices: ['Perfect competition, since prices are set by market forces alone', 'Price discrimination, in which a firm with market power charges different prices to different customer groups based on their differing price sensitivity (elasticity of demand), in order to increase profit', 'A price ceiling imposed by government regulation', 'Predatory pricing intended to drive competitors out of business'],
          correct: 1,
          explanation: {
            correct: "This is a classic example of price discrimination: a firm with some degree of market power identifies groups with different price sensitivities (elasticity of demand) — students and seniors often have relatively more elastic demand for movies (more price-sensitive, perhaps due to lower/fixed incomes) — and charges these groups a lower price, while charging other adults (assumed less price-sensitive) a higher price, in order to capture more total revenue/profit than a single uniform price would allow.",
            wrong: { 0: "Perfect competition involves firms as PRICE TAKERS with no ability to set different prices for different customers — the ability to CHARGE DIFFERENT PRICES to different groups (as in this scenario) actually requires some degree of MARKET POWER, which is inconsistent with the perfect competition model.", 2: "This pricing pattern is set VOLUNTARILY by the firm itself (the theater) as a business strategy, not imposed externally by government regulation — a price ceiling would be a government-mandated MAXIMUM price applying uniformly, not a firm's own strategic differential pricing.", 3: "Predatory pricing specifically involves setting prices BELOW cost specifically to drive competitors out of business, with the intent to raise prices later once competition is eliminated — this scenario simply describes ROUTINE differential pricing based on different customer groups' price sensitivity, not an anti-competitive predatory strategy." },
            tempting: "None of the distractors accurately describe this common, legal business practice, but confusing it with a government-imposed policy (choice C) misunderstands its voluntary, firm-driven nature.",
            commonMistake: "Not recognizing common real-world examples (student/senior discounts, airline ticket pricing) as instances of price discrimination, and/or not connecting this practice to the underlying economic logic (charging based on differing GROUP-level price elasticity of demand to increase total profit).",
            apTip: "Price discrimination requires: (1) some degree of market power (ability to set price, unlike a perfectly competitive firm), (2) the ability to identify and separate customers into groups with different price elasticities, and (3) the ability to prevent resale between groups (so a low-price buyer can't resell to a high-price buyer) — student/senior discounts are a classic, frequently tested real-world example."
          }
        },
        {
          id: 'micro-4-4', difficulty: 3, type: 'mcq', topic: 'Monopolistic Competition',
          prompt: "A market structure characterized by many firms selling similar but differentiated products (such as many different restaurants in a city), with relatively easy entry and exit, is known as:",
          choices: ['Perfect competition, since there are many sellers', 'Monopolistic competition, distinguished from perfect competition by product differentiation, which gives each firm some limited control over its own price', "A pure monopoly, since each firm's product is somewhat unique", 'An oligopoly, since a small number of dominant firms control the market'],
          correct: 1,
          explanation: {
            correct: "Monopolistic competition is characterized by many sellers (like perfect competition) offering DIFFERENTIATED products (unlike perfect competition's identical products) — this differentiation gives each firm some limited degree of price-setting power (a downward-sloping demand curve for its specific product), distinguishing it from the perfectly competitive model, while relatively easy entry/exit (also like perfect competition) tends to drive long-run economic profit toward zero.",
            wrong: { 0: "Perfect competition specifically requires IDENTICAL (homogeneous) products with no differentiation, and firms as pure price-takers with NO individual pricing power — the DIFFERENTIATED products described here (different restaurants) instead indicate monopolistic competition.", 2: "A pure monopoly involves a SINGLE seller with no close substitutes — this scenario describes MANY different sellers (many different restaurants), which is inconsistent with a single-firm monopoly structure.", 3: "Oligopoly is characterized by a SMALL number of large, mutually interdependent firms dominating a market — this scenario describes MANY sellers (not just a few dominant ones), which is inconsistent with the oligopoly structure." },
            tempting: "Choice A is tempting because 'many sellers' does match one criterion of perfect competition, but the crucial DIFFERENTIATED PRODUCT feature (unlike perfect competition's identical products) is what specifically identifies this as monopolistic competition instead.",
            commonMistake: "Focusing only on the NUMBER of sellers (many) without also considering whether products are IDENTICAL (perfect competition) or DIFFERENTIATED (monopolistic competition) — both the number of sellers AND the nature of the product together determine the correct market structure classification.",
            apTip: "Monopolistic competition combines features of BOTH perfect competition (many sellers, easy entry/exit, zero long-run economic profit) AND monopoly (differentiated products giving each firm some limited price-setting power, downward-sloping individual demand curve) — this hybrid nature is the key concept to remember, along with its characteristic long-run outcome of firms producing at excess capacity (below the minimum-ATC output level)."
          }
        },
        {
          id: 'micro-4-5', difficulty: 4, type: 'mcq', topic: 'Oligopoly and Game Theory',
          prompt: "In an oligopoly market with only a few dominant firms, game theory models (such as the \"prisoner's dilemma\") are often used to analyze firm behavior because:",
          choices: ['Oligopoly firms make pricing and output decisions completely independently, with no consideration of rivals\' likely responses', 'Each firm\'s optimal decision (such as pricing or output level) depends significantly on the actions and likely reactions of its relatively few rival firms, creating strategic interdependence', 'There is only ever a single firm in an oligopoly market, eliminating any need for strategic analysis', 'Prices in oligopoly markets are always set through pure market forces with no strategic firm behavior involved'],
          correct: 1,
          explanation: {
            correct: "Game theory models like the prisoner's dilemma are useful for analyzing oligopoly specifically because, with only a FEW dominant firms in the market, each firm's optimal strategy (pricing, output, advertising, etc.) genuinely depends on anticipating and responding to its rivals' likely actions — this mutual, strategic interdependence between a small number of firms is precisely the kind of situation game theory models are designed to analyze.",
            wrong: { 0: "This describes the OPPOSITE of actual oligopoly firm behavior — the defining feature of oligopoly is precisely that firms MUST consider their rivals' likely actions/reactions when making decisions, due to their mutual interdependence (unlike perfectly competitive firms, who are so numerous that no single rival's actions matter).", 2: "Oligopoly is specifically defined by having a SMALL NUMBER of firms (more than one, but few) — a market with only a SINGLE firm would instead be a MONOPOLY, a different market structure entirely.", 3: "Oligopoly pricing/output decisions specifically involve significant STRATEGIC behavior (anticipating rivals' responses) rather than being determined purely by impersonal aggregate market forces (as in perfect competition, where individual firms are 'price takers' with no meaningful strategic interaction)." },
            tempting: "None of the distractors accurately describe oligopoly, but assuming firms act in isolation (choice A) misses the CORE defining feature (strategic interdependence) that makes oligopoly analytically distinct from other market structures.",
            commonMistake: "Not recognizing STRATEGIC INTERDEPENDENCE (each firm's best decision depends on what rivals are expected to do) as the SPECIFIC defining feature of oligopoly that makes game theory tools particularly useful and relevant for analyzing this market structure, unlike perfect competition or monopoly.",
            apTip: "Know the basic prisoner's dilemma setup as applied to oligopoly pricing: two firms would both be better off COOPERATING (e.g., both maintaining high prices/collusion), but each has an individual incentive to 'cheat' (lower price to gain market share) — this tension helps explain why explicit or tacit collusion in oligopoly can be difficult to sustain even when it would benefit both firms."
          }
        },
        {
          id: 'micro-4-6', difficulty: 3, type: 'mcq', topic: 'Regulating Natural Monopolies',
          prompt: "A \"natural monopoly\" occurs when a single firm can supply an entire market at a lower average cost than multiple competing firms could, often due to very large fixed costs (such as utility infrastructure). Government regulation of natural monopolies commonly involves:",
          choices: ['Completely banning the monopoly firm from operating at all', 'Setting a regulated price (often at or near marginal cost or average total cost) that is lower than the unregulated monopoly price, attempting to capture some of the efficiency benefits of single-firm production while limiting monopoly pricing power', 'Requiring the monopoly to charge the highest price it possibly can', 'Completely ignoring the monopoly and allowing entirely unregulated pricing'],
          correct: 1,
          explanation: {
            correct: "Government regulation of natural monopolies (such as utility companies) commonly involves setting a regulated maximum price — often targeting a level at or near marginal cost or average total cost — that is lower than what an unregulated monopolist would charge, attempting to balance the genuine cost efficiency of single-firm production (avoiding costly duplicate infrastructure) against the need to limit the monopolist's ability to extract excessive profit through unrestricted monopoly pricing.",
            wrong: { 0: "Since natural monopolies often provide genuine cost efficiency advantages through single-firm production (avoiding wasteful duplicate infrastructure, such as multiple competing water pipe networks), regulators typically choose to REGULATE the monopoly's pricing rather than banning its operation entirely, which would sacrifice these efficiency benefits.", 2: "Regulation specifically aims to LOWER prices from what an unregulated monopolist would otherwise charge — requiring the HIGHEST possible price is the opposite of the actual purpose and typical practice of monopoly price regulation.", 3: "Natural monopolies are typically SUBJECT TO regulation PRECISELY BECAUSE unregulated monopoly pricing would result in inefficiently high prices and restricted output — completely ignoring the monopoly and allowing fully unregulated pricing is the opposite of the standard, commonly tested regulatory approach." },
            tempting: "None of the distractors accurately describe standard natural monopoly regulation, but assuming a complete ban (choice A) misses the important economic rationale for allowing natural monopolies to continue operating (their genuine cost efficiency), just under price regulation.",
            commonMistake: "Not recognizing the ECONOMIC RATIONALE for regulating (rather than banning) natural monopolies — since a single large-scale firm can genuinely produce at a LOWER cost than multiple smaller competing firms in specific industries with very high fixed costs, the goal of regulation is to capture this efficiency while still limiting excessive monopoly pricing power.",
            apTip: "Natural monopoly regulation commonly targets either MARGINAL COST PRICING (most economically efficient, but may not cover the firm's total costs given high fixed costs, potentially requiring a subsidy) or AVERAGE COST PRICING (ensures the firm breaks even, covering all costs, but is less economically efficient than marginal cost pricing) — know this tradeoff between these two common regulatory price-setting approaches for utility companies and similar natural monopolies."
          }
        }
      ]
    },
    {
      id: 5,
      name: 'Unit 5: Factor Markets',
      questions: [
        {
          id: 'micro-5-1', difficulty: 3, type: 'mcq', topic: 'Marginal Revenue Product',
          prompt: "A firm operating in a perfectly competitive output market sells its product for $5 per unit. Hiring one additional worker increases total output by 10 units. This worker's marginal revenue product (MRP) is:",
          choices: ['$5', '$10', '$50, found by multiplying the worker\'s marginal product (10 units) by the product\'s price ($5)', '$2, found by dividing price by marginal product'],
          correct: 2,
          explanation: {
            correct: "Marginal revenue product (MRP) = marginal product (MP) × marginal revenue (which equals price, $5, for a firm selling in a perfectly competitive output market). MRP = 10 units × $5 = $50 — this represents the additional revenue the firm gains from hiring this one additional worker.",
            wrong: { 0: "$5 is just the PRICE per unit of output, not the full marginal revenue product, which must also account for HOW MANY additional units of output this specific worker actually produces (their marginal product).", 1: "$10 is just the worker's MARGINAL PRODUCT (units of output produced), not their marginal REVENUE product — MRP must also multiply this by the price/marginal revenue per unit to convert units of output into a dollar value of additional revenue.", 3: "Dividing price by marginal product doesn't correspond to any meaningful economic calculation here — MRP is calculated by MULTIPLYING marginal product by price (marginal revenue per unit), not dividing." },
            tempting: "Choices A and B are both tempting since they use one of the two given numbers correctly by itself, but MRP specifically requires MULTIPLYING marginal product BY price/marginal revenue, not using either number alone.",
            commonMistake: "Reporting only ONE of the two components (either just marginal product in physical units, or just price per unit) instead of correctly MULTIPLYING marginal product by price (or marginal revenue) to find the complete dollar-value marginal revenue product.",
            apTip: "Marginal Revenue Product (MRP) = Marginal Product (MP) × Marginal Revenue (MR). For a firm selling in a perfectly competitive OUTPUT market, MR simply equals the market price. This MRP value represents the additional REVENUE (in dollars) a firm gains from hiring one more unit of a resource (like labor) — it is the DEMAND curve for that resource in the factor market."
          }
        },
        {
          id: 'micro-5-2', difficulty: 3, type: 'mcq', topic: "The Firm's Hiring Decision",
          prompt: "A firm operating in a perfectly competitive labor market should continue hiring additional workers up to the point where:",
          choices: ['Marginal revenue product (MRP) of labor equals the wage rate (which equals marginal factor cost, MFC, in a competitive labor market)', 'Total revenue equals total cost', 'The firm has hired its maximum possible number of workers regardless of cost', 'Average product of labor is at its theoretical maximum'],
          correct: 0,
          explanation: {
            correct: "A firm maximizes profit in hiring by continuing to hire additional units of a resource (like labor) as long as the marginal benefit of hiring (MRP, the additional revenue generated) exceeds the marginal cost of hiring (the wage rate, which equals marginal factor cost, MFC, in a perfectly competitive labor market where the firm is a wage-taker) — the firm should hire exactly up to the point where MRP = wage (MFC), since hiring beyond this point would cost more than the additional revenue it generates.",
            wrong: { 1: "Comparing TOTAL revenue to TOTAL cost determines overall firm profitability, but it doesn't specifically determine the OPTIMAL number of workers to hire — that requires the MARGINAL comparison (MRP versus wage/MFC) for each additional worker specifically.", 2: "Firms don't hire an unlimited or arbitrary maximum number of workers 'regardless of cost' — hiring decisions are specifically guided by comparing each additional worker's marginal benefit (MRP) to their marginal cost (wage), stopping once this marginal cost would exceed the marginal benefit.", 3: "Average product of labor reaching its maximum is a different, unrelated concept from the firm's profit-maximizing INPUT hiring decision, which specifically depends on comparing MARGINAL revenue product to the wage rate, not average product." },
            tempting: "Choice B is tempting since comparing totals seems intuitive for an overall business decision, but the specific hiring decision requires a MARGINAL analysis (MRP vs. wage) for each additional worker, not simply a total revenue/cost comparison.",
            commonMistake: "Applying a TOTAL revenue/cost comparison (appropriate for assessing overall firm profitability) instead of the correct MARGINAL comparison (MRP vs. wage/MFC) that specifically determines the profit-maximizing QUANTITY of a resource like labor to hire.",
            apTip: "This is the direct factor-market parallel to the output-market profit-maximizing rule (P=MC): in factor markets, firms hire resources up to the point where MRP = MFC (marginal factor cost, which equals the wage rate in a perfectly competitive/wage-taking labor market) — this MRP=wage rule generates the firm's downward-sloping labor DEMAND curve."
          }
        },
        {
          id: 'micro-5-3', difficulty: 2, type: 'mcq', topic: 'Derived Demand',
          prompt: "The demand for labor and other productive resources is often described as a \"derived demand.\" This means that:",
          choices: ['Resource demand exists independently, with no connection to the demand for the final goods or services that resource helps produce', 'The demand for a resource (like labor) derives directly from, and depends on, the demand for the final product or service that resource is used to produce', 'Resources are demanded purely for their own inherent value, unrelated to any production process', 'Firms demand resources randomly, with no systematic economic basis'],
          correct: 1,
          explanation: {
            correct: "'Derived demand' means the demand for a productive resource (such as labor, capital, or land) derives directly from — and depends fundamentally on — the demand for the final good or service that resource helps produce. If demand for a final product rises, demand for the resources used to produce it typically rises correspondingly, and vice versa.",
            wrong: { 0: "This is the OPPOSITE of what 'derived demand' means — resource demand is specifically and directly CONNECTED TO (derived from) the demand for the final product, not independent of it.", 2: "Resources like labor are demanded specifically BECAUSE of their role in PRODUCING valued final goods/services (not for pure inherent value on their own) — this productive role is exactly what 'derived' demand refers to.", 3: "Resource demand follows a SYSTEMATIC economic logic (tied directly to final product demand and the resource's marginal productivity/MRP), not random firm behavior — this systematic connection is the entire basis of the derived demand concept." },
            tempting: "None of the distractors accurately describe derived demand, but assuming resource demand exists independently (choice A) misses the entire point of why it's specifically called 'derived.'",
            commonMistake: "Not connecting the term 'derived demand' specifically and directly to its defining characteristic — that resource demand is causally DERIVED FROM (dependent on) final product demand, meaning changes in consumer demand for final goods directly ripple through to change firms' demand for the underlying resources used to produce them.",
            apTip: "Connect 'derived demand' directly to real-world examples: if consumer demand for new houses increases, demand for construction workers (labor) and lumber (a resource) will typically increase correspondingly — resource demand is fundamentally driven by, and 'derived from,' this underlying final product demand, not existing independently."
          }
        },
        {
          id: 'micro-5-4', difficulty: 4, type: 'mcq', topic: 'Monopsony in Labor Markets',
          prompt: "A \"monopsony\" describes a labor market situation where:",
          choices: ['Many competing employers exist, giving workers many job options and driving wages up to competitive levels', 'A single employer (or a small number of dominant employers) has significant market power as a BUYER of labor, potentially allowing it to pay a wage below what a competitive labor market would produce', 'Workers, rather than employers, have complete control over setting the market wage', 'The concept applies exclusively to product/output markets, never to labor markets'],
          correct: 1,
          explanation: {
            correct: "Monopsony describes a labor market situation where a single employer (or very few dominant employers) has significant market power specifically as a BUYER of labor (analogous to how a monopoly firm has market power as a SELLER of output) — this employer market power can potentially allow the firm to pay workers a wage BELOW what a genuinely competitive labor market (with many competing employers) would produce, since workers have limited alternative employment options.",
            wrong: { 0: "This describes a COMPETITIVE labor market (many employers competing for workers), which is the OPPOSITE situation from monopsony — monopsony specifically involves LIMITED employer competition (one or few dominant employers), not many.", 2: "Monopsony power belongs to the EMPLOYER (as a buyer of labor), not to workers — this describes the opposite situation, where workers themselves would hold market power over wage-setting, which isn't what monopsony refers to.", 3: "Monopsony is SPECIFICALLY and commonly applied to LABOR markets (a single or few dominant employers/buyers of labor) as one of its most frequently tested applications, alongside its more general application to any resource/input market where a single dominant buyer exists — it is not exclusive to output/product markets, which is where the analogous concept of monopoly (single SELLER) applies instead." },
            tempting: "Choice A describes a real labor market scenario, but it's the OPPOSITE of monopsony — monopsony specifically involves LIMITED (not abundant) employer competition, giving the dominant employer(s) wage-setting power over workers.",
            commonMistake: "Confusing monopsony (single/dominant BUYER, here of labor, with power to suppress wages below competitive levels) with monopoly (single dominant SELLER of a product, with power to raise prices above competitive levels) — these are analogous but distinctly different concepts applying to opposite sides of a market.",
            apTip: "Remember: MONOPOLY = single/dominant SELLER (market power over price charged, sets P above competitive level); MONOPSONY = single/dominant BUYER (market power over price paid, sets wage below competitive level in a labor market context) — a classic real-world example is a single major employer in a small, isolated company town with few alternative job opportunities for local workers."
          }
        },
        {
          id: 'micro-5-5', difficulty: 3, type: 'mcq', topic: 'Determinants of Resource Demand',
          prompt: "If the price of a good produced using a particular resource (such as labor) rises significantly, holding the resource's marginal product constant, what happens to the demand for that resource?",
          choices: ['Resource demand decreases, since MRP falls', 'Resource demand increases (the resource demand curve shifts right), since MRP = MP × Price, and a higher output price directly increases MRP at every quantity of the resource', 'Resource demand remains completely unchanged', 'Resource demand becomes perfectly inelastic'],
          correct: 1,
          explanation: {
            correct: "Since MRP = marginal product (MP) × output price, and MP is held constant here while output price rises, MRP increases at every level of resource use — this means firms are now willing to pay MORE for each unit of the resource at every quantity, which is represented as a RIGHTWARD SHIFT of the resource demand curve (since MRP IS the resource demand curve).",
            wrong: { 0: "MRP would INCREASE (not fall) here, since MRP = MP × Price, and price is rising while MP stays constant — a higher output price directly and positively affects MRP, increasing (not decreasing) resource demand.", 2: "Since MRP = MP × Price, and price is explicitly rising, MRP (and therefore resource demand) MUST change — it cannot remain 'completely unchanged' when one of its two direct multiplicative components (price) is increasing.", 3: "This scenario describes a SHIFT of the resource demand curve (a change in a determinant, output price), not a change in the curve's ELASTICITY (steepness/responsiveness) — these are different concepts; nothing here indicates the demand curve becomes perfectly inelastic (vertical)." },
            tempting: "None of the distractors reflect the correct MRP-based reasoning, but assuming no change (choice C) misses the direct mathematical relationship between output price and MRP.",
            commonMistake: "Not applying the MRP formula (MRP = MP × output price) directly to determine how a change in output price specifically affects resource demand — since resource demand IS the MRP curve, any change in output price (holding MP constant) directly shifts resource demand in the same direction.",
            apTip: "Resource demand shifters directly parallel this MRP relationship: resource demand increases (shifts right) when (1) output price rises, (2) the resource's marginal product/productivity increases (e.g., from new technology or training), or (3) demand for the related final output good increases (connecting directly back to the 'derived demand' concept)."
          }
        },
        {
          id: 'micro-5-6', difficulty: 2, type: 'mcq', topic: 'Factors of Production and Their Payments',
          prompt: "In economic analysis, the four traditional factors of production and their corresponding payments are typically identified as:",
          choices: ['Land (rent), labor (wages), capital (interest), and entrepreneurship (profit)', 'Only labor and capital, with no other recognized factors of production', 'Money, banks, government, and consumers', 'Land, water, air, and sunlight, with no connection to payments or markets'],
          correct: 0,
          explanation: {
            correct: "The four traditional factors of production, each with a corresponding type of payment for its use, are: land (payment: rent), labor (payment: wages), capital, meaning physical capital like machinery and buildings (payment: interest), and entrepreneurship, meaning the risk-taking and organizational skill of starting/running a business (payment: profit).",
            wrong: { 1: "Economic analysis traditionally recognizes FOUR factors of production (land, labor, capital, and entrepreneurship), not just two — omitting land and entrepreneurship misses two significant, traditionally recognized categories.", 2: "Money, banks, government, and consumers are not the traditional 'factors of production' framework used in microeconomic analysis — this framework specifically covers the fundamental inputs (land, labor, capital, entrepreneurship) used to produce goods and services.", 3: "While land as a factor of production does relate to natural resources, 'water, air, and sunlight' isn't the standard traditional categorization used in economics, and this option specifically denies any connection to payments/markets, which contradicts how factor markets (including markets for land/natural resources) actually function economically." },
            tempting: "Choice B is tempting since labor and capital are indeed two of the four factors, but this list is INCOMPLETE — land and entrepreneurship are also traditionally recognized, each with their own distinct type of payment.",
            commonMistake: "Forgetting entrepreneurship as a distinct fourth factor of production (with profit as its corresponding payment) — students often correctly remember land, labor, and capital, but forget to include entrepreneurship and its specific payment type (profit, as compensation for risk-taking and organizational skill).",
            apTip: "Memorize all four factors of production WITH their corresponding payment types together as pairs: Land→Rent, Labor→Wages, Capital→Interest, Entrepreneurship→Profit — this framework provides useful vocabulary for analyzing different types of factor markets throughout this unit."
          }
        }
      ]
    },
    {
      id: 6,
      name: 'Unit 6: Market Failure and the Role of Government',
      questions: [
        {
          id: 'micro-6-1', difficulty: 3, type: 'mcq', topic: 'Negative Externalities',
          prompt: "A factory produces steel, generating pollution that harms nearby residents' health, but this pollution cost is not reflected in the factory's production costs or the market price of steel. This situation is an example of:",
          choices: ['A positive externality, since the factory is providing useful steel', 'A negative externality, in which the market fails to account for a real cost imposed on third parties, resulting in the market overproducing steel beyond the socially optimal (efficient) quantity', 'A perfectly efficient market outcome, since supply and demand are still balanced at the market price', 'A situation with no effect on the socially optimal level of production'],
          correct: 1,
          explanation: {
            correct: "This is a negative externality: pollution imposes a real cost on third parties (nearby residents) that is NOT reflected in the factory's private production costs or the market price of steel. Since the firm doesn't have to pay this 'external' cost, the market price is too low and the market quantity produced is too HIGH relative to the socially optimal (efficient) level, which would account for the FULL social cost (private cost plus external cost) of production.",
            wrong: { 0: "This describes a NEGATIVE externality (imposing a cost on third parties), not a positive one (which would provide a BENEFIT to third parties not captured in market price) — pollution harming residents' health is a cost, not a benefit, to those third parties.", 2: "The market outcome here is NOT efficient — since the pollution cost is excluded from the market price, the market SYSTEMATICALLY OVERPRODUCES steel beyond the socially efficient quantity, representing a market failure (a deviation from efficiency), not an efficient outcome.", 3: "Negative externalities DO affect the socially optimal production level — specifically, they mean the market-determined quantity (based only on private costs) will be HIGHER than the true socially optimal quantity (which would also account for the external pollution cost)." },
            tempting: "Choice C is tempting because the MARKET itself appears balanced (private supply meets private demand at the market price), but this ignores the additional EXTERNAL cost not reflected in that market price — true social efficiency requires accounting for ALL costs, including externalities.",
            commonMistake: "Confusing MARKET equilibrium (where private supply meets private demand) with SOCIALLY OPTIMAL/efficient equilibrium (which would also account for external costs or benefits) — with a negative externality present, these two equilibrium points are NOT the same; the market equilibrium quantity exceeds the true social optimum.",
            apTip: "For negative externalities (like pollution), the market supply curve reflects only PRIVATE cost, understating the true SOCIAL cost (private cost + external cost) — this causes market equilibrium quantity to be HIGHER than the socially optimal quantity. A government-imposed tax (a 'Pigovian tax') equal to the external cost per unit can help correct this market failure by aligning private cost with true social cost."
          }
        },
        {
          id: 'micro-6-2', difficulty: 3, type: 'mcq', topic: 'Positive Externalities',
          prompt: "Vaccination against a contagious disease provides direct health benefits to the vaccinated individual, but it also reduces disease transmission risk for OTHER people in the community who are not directly party to that person's vaccination decision. This is an example of:",
          choices: ['A negative externality that leads to market overproduction of vaccines', 'A positive externality, in which the market tends to UNDERPRODUCE vaccines relative to the socially optimal quantity, since the market price doesn\'t reflect the additional benefit to third parties', 'A situation with no relevance to market efficiency', 'A pure public good, with no connection to externality analysis'],
          correct: 1,
          explanation: {
            correct: "This is a positive externality: vaccination provides an additional BENEFIT to third parties (reduced disease transmission risk in the broader community) that is not captured in the private decision-making or market price of the vaccine. Since the market price doesn't reflect this full social benefit, the market tends to UNDERPRODUCE (fewer people get vaccinated) relative to the socially optimal quantity, which would account for the FULL social benefit (private benefit plus external benefit).",
            wrong: { 0: "This describes a POSITIVE externality (providing a BENEFIT to third parties), not a negative one — and positive externalities lead to market UNDERPRODUCTION (not overproduction) relative to the social optimum.", 2: "This scenario is DIRECTLY relevant to market efficiency — positive externalities represent a specific, well-documented type of market failure, since the market fails to produce the socially optimal quantity when external benefits aren't reflected in market prices.", 3: "While public goods and positive externalities are related concepts, vaccination is typically analyzed specifically as a POSITIVE EXTERNALITY (a private good with a spillover benefit), rather than a pure public good (which would need to be both non-excludable and non-rivalrous, criteria a vaccine dose doesn't meet, since it can be excluded from non-payers and is used up by one person)." },
            tempting: "Choice A confuses positive and negative externalities' effects — remember: negative externalities cause OVERPRODUCTION, while positive externalities cause UNDERPRODUCTION relative to the social optimum.",
            commonMistake: "Confusing the market EFFECT of positive externalities (underproduction) with that of negative externalities (overproduction) — the direction of market failure depends specifically on whether the externality is a cost (negative, leading to overproduction) or benefit (positive, leading to underproduction) to third parties.",
            apTip: "For positive externalities (like vaccination or education), the market demand curve reflects only PRIVATE benefit, understating the true SOCIAL benefit (private + external benefit) — this causes market equilibrium quantity to be LOWER than the socially optimal quantity. A government subsidy can help correct this market failure by encouraging additional consumption/production closer to the socially optimal level."
          }
        },
        {
          id: 'micro-6-3', difficulty: 3, type: 'mcq', topic: 'Public Goods',
          prompt: "National defense is typically classified as a \"public good\" in economic analysis because it is:",
          choices: ['Excludable and rivalrous, just like most privately produced goods', 'Non-excludable (people cannot practically be prevented from benefiting from it, even if they don\'t pay) and non-rivalrous (one person\'s benefit doesn\'t reduce the amount available to others)', 'Produced exclusively and efficiently by private, for-profit firms with no need for government involvement', 'A good with no free-rider problem whatsoever'],
          correct: 1,
          explanation: {
            correct: "Public goods, like national defense, are defined by two key characteristics: they are NON-EXCLUDABLE (it's impractical or impossible to prevent any individual, even a non-payer, from benefiting from national defense once it's provided) and NON-RIVALROUS (one person benefiting from national defense doesn't reduce the amount/quality available to anyone else) — these two characteristics together create significant challenges for private market provision.",
            wrong: { 0: "This describes a PRIVATE good (like a sandwich or a haircut), the OPPOSITE characteristics of a public good — public goods are specifically NON-excludable and NON-rivalrous, not excludable and rivalrous.", 2: "Because public goods are non-excludable, private firms typically CANNOT efficiently or profitably produce them — since non-payers can't be excluded from benefiting, private firms lack sufficient profit incentive to provide adequate quantities, which is exactly WHY government provision or funding is typically needed for goods like national defense.", 3: "Public goods, due to their non-excludability, are SPECIFICALLY prone to the 'free-rider problem' (people benefiting without paying, since they can't practically be excluded) — this free-rider problem is a defining, frequently tested challenge associated with public goods, not something absent from them." },
            tempting: "Choice C is tempting because private firms DO produce many goods efficiently, but the SPECIFIC characteristics of public goods (non-excludability especially) make private, profit-driven production of adequate quantities generally impractical, justifying government involvement.",
            commonMistake: "Not clearly defining and distinguishing the TWO specific defining characteristics of public goods (non-excludability AND non-rivalry) — and not connecting non-excludability directly to the resulting free-rider problem that typically justifies government provision or funding of these goods.",
            apTip: "Memorize the two defining public good characteristics together: NON-EXCLUDABLE (can't prevent non-payers from benefiting) and NON-RIVALROUS (one person's use doesn't diminish availability for others) — both characteristics must be present for a TRUE public good (contrast with 'common resources,' which are non-excludable but RIVALROUS, like an open ocean fishery, a different market failure category)."
          }
        },
        {
          id: 'micro-6-4', difficulty: 3, type: 'mcq', topic: 'Tax Incidence and Elasticity',
          prompt: "When a government imposes a tax on a good, the actual division of the tax burden between buyers and sellers (known as tax incidence) depends primarily on:",
          choices: ['Which party (buyer or seller) is legally required to physically submit the tax payment to the government', 'The relative price elasticities of supply and demand for the good — the side of the market (buyers or sellers) that is relatively LESS elastic (less able to easily adjust behavior) will bear a proportionally larger share of the tax burden', 'The good\'s total market size, with no connection to elasticity whatsoever', 'Government preference alone, with no connection to underlying market conditions'],
          correct: 1,
          explanation: {
            correct: "Tax incidence (who actually bears the economic burden of a tax) depends primarily on the relative price elasticities of supply and demand — the side of the market that is relatively LESS ELASTIC (has fewer good alternatives or is less able to adjust behavior in response to the tax) ends up bearing a proportionally LARGER share of the tax burden, REGARDLESS of which side is legally responsible for remitting the tax payment to the government.",
            wrong: { 0: "This is a common misconception — the LEGAL requirement to remit tax payment (statutory incidence) does NOT determine who actually bears the ECONOMIC burden of the tax (economic incidence) — these can differ significantly, since prices adjust in the market regardless of which side physically pays the government.", 2: "Elasticity, not overall market size, is the key factor determining tax incidence distribution between buyers and sellers — a good's total size/volume doesn't by itself determine how the tax burden splits between the two sides of the market.", 3: "Tax incidence is determined by underlying MARKET CONDITIONS (specifically relative elasticities of supply and demand), not simply by arbitrary government preference — while government sets the tax's legal requirements, the actual ECONOMIC distribution of the burden is determined by how the market responds, based on elasticity." },
            tempting: "Choice A is tempting because it seems intuitive that whoever legally pays the tax bears its burden, but this is a classic economic misconception — the actual (economic) burden depends on elasticity, not legal payment responsibility, since market prices adjust regardless of who physically remits payment.",
            commonMistake: "Confusing STATUTORY tax incidence (who is legally required to remit payment) with ECONOMIC tax incidence (who actually bears the burden through price changes) — these are DIFFERENT, and it's the relative ELASTICITY of the two sides of the market, not the legal payment requirement, that determines the actual economic burden distribution.",
            apTip: "Remember the elasticity-incidence relationship: the side of the market (buyers or sellers) with the relatively LESS ELASTIC curve bears MORE of the tax burden, since that side has fewer good alternatives and is less able to avoid or adjust to the tax by changing behavior — this holds true regardless of whether tax incidence is analyzed as a shift in supply or demand on a standard graph."
          }
        },
        {
          id: 'micro-6-5', difficulty: 4, type: 'mcq', topic: 'Deadweight Loss from Taxation',
          prompt: "When a government imposes a tax on a good, the resulting reduction in total economic surplus that is not captured as tax revenue by the government (representing mutually beneficial trades that no longer occur due to the tax) is known as:",
          choices: ['Consumer surplus', 'Deadweight loss, which represents the pure economic inefficiency created when a tax reduces the quantity traded below the market equilibrium level', 'Producer surplus', 'Tax revenue collected by the government'],
          correct: 1,
          explanation: {
            correct: "Deadweight loss represents the PURE economic inefficiency (the portion of lost total surplus that is NOT transferred to anyone, including the government as tax revenue) created when a tax causes quantity traded to fall below the efficient market equilibrium level — these are mutually beneficial transactions between buyers and sellers that simply no longer occur because of the tax, representing a genuine net loss to society as a whole.",
            wrong: { 0: "Consumer surplus is a SPECIFIC component of total surplus (the value buyers receive above what they pay) that TYPICALLY DECREASES due to a tax (since tax raises the effective price paid) — but consumer surplus itself is not the same concept as deadweight loss, which specifically refers to the PURE, uncaptured efficiency loss.", 2: "Producer surplus is a SPECIFIC component of total surplus (the value sellers receive above their costs) that TYPICALLY DECREASES due to a tax (since tax lowers the effective price received) — but like consumer surplus, it is a different, distinct concept from deadweight loss specifically.", 3: "Tax revenue is the portion of surplus that IS captured (transferred to the government) — this is explicitly DIFFERENT FROM deadweight loss, which specifically refers to the portion of LOST total surplus that is NOT captured by anyone (not by buyers, sellers, OR the government)." },
            tempting: "Choice D is tempting since both concepts relate to the tax's overall market effect, but tax revenue is SURPLUS THAT IS CAPTURED (by government), while deadweight loss is specifically the surplus that is LOST ENTIRELY, benefiting no one.",
            commonMistake: "Confusing deadweight loss (a NET loss to society, benefiting no one) with either consumer/producer surplus reductions (surplus that shifts elsewhere, e.g., to government as tax revenue) or with tax revenue itself (surplus that IS captured, just by a different party) — deadweight loss specifically refers to value that simply disappears entirely from the transaction.",
            apTip: "On a standard tax graph, total surplus loss from a tax = (loss in consumer surplus) + (loss in producer surplus). Part of this total loss becomes TAX REVENUE (captured by government), while the remaining portion — specifically the triangle representing the REDUCTION in quantity traded below the untaxed equilibrium — is DEADWEIGHT LOSS, representing pure economic inefficiency with no offsetting benefit to anyone."
          }
        },
        {
          id: 'micro-6-6', difficulty: 2, type: 'mcq', topic: 'Income Inequality and the Lorenz Curve',
          prompt: "A Lorenz curve is a graphical tool used to illustrate:",
          choices: ['The relationship between price and quantity demanded for a specific good', 'The distribution of income (or wealth) across a population, comparing the cumulative percentage of total income against the cumulative percentage of the population receiving it', 'The relationship between marginal cost and average cost for a firm', 'The supply and demand equilibrium in a competitive market'],
          correct: 1,
          explanation: {
            correct: "A Lorenz curve graphically illustrates income (or wealth) distribution across a population by plotting the cumulative percentage of total income received against the cumulative percentage of the population (typically ordered from lowest to highest income) — the further this curve bows away from the perfectly equal 45-degree line, the greater the degree of income inequality in that population.",
            wrong: { 0: "This describes a standard DEMAND CURVE, a completely different microeconomic graphing tool used to show the price-quantity relationship for a specific good — not the Lorenz curve, which specifically illustrates income/wealth distribution across a population.", 2: "This describes the standard COST CURVE graph (used in Unit 3's production and cost analysis), a completely different tool from the Lorenz curve, which specifically addresses income distribution, not firm cost structure.", 3: "This describes a standard SUPPLY AND DEMAND graph showing market equilibrium, a different microeconomic tool entirely from the Lorenz curve, which specifically addresses the distribution of income/wealth across a POPULATION, not market price/quantity determination." },
            tempting: "None of the distractors accurately describe the Lorenz curve, but confusing it with other common microeconomic graphing tools (supply/demand, cost curves) is a common general source of error given how many different graph types this course covers.",
            commonMistake: "Confusing the Lorenz curve (a specific tool for illustrating income/wealth DISTRIBUTION/inequality across a population) with other common microeconomic graphs covered elsewhere in the course (supply/demand curves, cost curves) that address entirely different economic questions.",
            apTip: "The Lorenz curve is specifically used alongside the related GINI COEFFICIENT (a single numerical summary measure derived from the Lorenz curve's shape, ranging from 0 = perfect equality to 1 = perfect inequality) to analyze and compare income inequality — the further the Lorenz curve bows below the diagonal 45-degree line of perfect equality, the higher the implied Gini coefficient and the greater the measured income inequality."
          }
        }
      ]
    }
  ],
  frqs: [
    {
      id: 'micro-frq-1', difficulty: 3, unit: 1,
      prompt: "A student can spend an evening either studying for an exam (expected to raise their grade, worth an estimated $200 in future scholarship value) or working a part-time shift (earning $60).\n\n(a) Identify the student's opportunity cost of choosing to study.\n(b) Explain whether the student is making an economically rational choice if they choose to study, using the concept of opportunity cost.",
      rubricPoints: [
        "Correctly identifies the opportunity cost of studying as the $60 in forgone wages (1 pt)",
        "Explains that the choice is rational since the benefit of studying ($200) exceeds its opportunity cost ($60) (1 pt)"
      ],
      sampleResponse: "(a) The opportunity cost of studying is $60, the wages the student gives up by not working the part-time shift instead.\n(b) Choosing to study is economically rational, since the expected benefit of studying ($200 in future scholarship value) exceeds the opportunity cost of forgoing work ($60). A rational decision-maker compares the benefit of a choice to its opportunity cost, and since $200 > $60, studying is the better economic choice in this case."
    },
    {
      id: 'micro-frq-2', difficulty: 4, unit: 2,
      prompt: "The market for a particular good is initially in equilibrium. Suppose the government imposes a binding price ceiling below the equilibrium price.\n\n(a) Using a supply and demand graph description, explain what happens to quantity supplied and quantity demanded at the new ceiling price.\n(b) Identify and explain the resulting market condition.\n(c) Explain one likely non-price effect of this shortage (such as how goods might be allocated instead of through price).",
      rubricPoints: [
        "Explains that quantity demanded increases (more buyers want the good at the lower price) while quantity supplied decreases (sellers are less willing to supply at the lower price) (1 pt)",
        "Correctly identifies the resulting condition as a shortage, since quantity demanded exceeds quantity supplied at the ceiling price (1 pt)",
        "Explains a plausible non-price rationing mechanism, such as waiting in line, black markets, or first-come-first-served allocation (1 pt)"
      ],
      sampleResponse: "(a) At the price ceiling, which is below equilibrium, quantity demanded increases beyond the equilibrium quantity (since the good is now cheaper, more buyers want it), while quantity supplied decreases below the equilibrium quantity (since sellers receive less revenue per unit and are less willing to supply as much).\n(b) This creates a shortage, since quantity demanded now exceeds quantity supplied at the artificially low ceiling price — the market cannot clear at this price because the price is legally prevented from rising to the level that would balance supply and demand.\n(c) With price prevented from rationing the good, non-price mechanisms often emerge to allocate the limited available supply — for example, buyers may need to wait in long lines (rationing by time) to obtain the good, or black markets may develop where the good is illegally resold at a higher price to those willing to pay more."
    },
    {
      id: 'micro-frq-3', difficulty: 4, unit: 3,
      prompt: "A perfectly competitive firm has the short-run marginal cost function MC = 4Q and faces a constant market price of $40.\n\n(a) Determine the firm's profit-maximizing quantity of output.\n(b) Explain the general rule used to find this quantity.\n(c) If the market price were to fall to a level below the firm's average variable cost, explain what decision the firm should make in the short run, and why.",
      rubricPoints: [
        "Correctly sets P = MC (40 = 4Q) and solves for Q = 10 (1 pt)",
        "Correctly explains the P=MC profit-maximizing rule for a perfectly competitive (price-taking) firm (1 pt)",
        "Correctly explains that the firm should shut down (produce zero output) if price falls below AVC, since it cannot cover variable costs and minimizes losses by not producing (1 pt)"
      ],
      sampleResponse: "(a) Setting P = MC: 40 = 4Q, so Q = 10 units.\n(b) A perfectly competitive firm is a price taker, meaning marginal revenue equals price for every unit sold. The firm maximizes profit by producing where marginal revenue (price) equals marginal cost, since producing any less would forgo profitable units (where MR still exceeds MC), while producing any more would add units that cost more to produce than they earn in revenue (MC exceeds MR).\n(c) If price falls below average variable cost, the firm should shut down and produce zero output in the short run. At this point, the firm cannot even cover its variable costs of production, meaning every unit produced would add to its losses beyond what it would lose by simply shutting down and only paying its unavoidable fixed costs. Shutting down minimizes the firm's losses to just its fixed costs, rather than fixed costs plus additional uncovered variable costs."
    },
    {
      id: 'micro-frq-4', difficulty: 4, unit: 4,
      prompt: "A monopolist faces demand P = 80 - Q and marginal revenue MR = 80 - 2Q, with constant marginal cost MC = $20.\n\n(a) Calculate the monopolist's profit-maximizing quantity and price.\n(b) Explain why the monopolist's price is above its marginal cost, in contrast to a perfectly competitive firm.\n(c) Explain the concept of deadweight loss as it relates to this monopoly outcome, compared to the outcome if this same market were perfectly competitive.",
      rubricPoints: [
        "Correctly sets MR = MC (80 - 2Q = 20) to find Q = 30, then substitutes into the demand equation to find P = 80 - 30 = $50 (1 pt)",
        "Explains that the monopolist, unlike a price-taking competitive firm, faces a downward-sloping demand curve and uses its market power to set price above marginal cost, using the demand curve at the profit-maximizing quantity (1 pt)",
        "Explains that the monopoly output (30) is below the competitive/efficient output level (where P=MC, i.e., 80-Q=20, Q=60), and this restriction creates deadweight loss — a reduction in total economic surplus from mutually beneficial trades that don't occur (1 pt)"
      ],
      sampleResponse: "(a) Setting MR = MC: 80 - 2Q = 20, so 2Q = 60, giving Q = 30. Substituting into the demand equation: P = 80 - 30 = $50.\n(b) Unlike a perfectly competitive firm, which is a price taker facing a horizontal (perfectly elastic) demand curve at the market price, a monopolist faces the entire downward-sloping market demand curve. This gives the monopolist market power to restrict output below the competitive level and charge a price above marginal cost (here, $50 versus MC of $20), since consumers have no alternative supplier to turn to.\n(c) If this market were perfectly competitive, the efficient outcome would occur where P = MC: 80 - Q = 20, giving Q = 60. The monopoly output of 30 units is significantly below this efficient competitive quantity of 60 units. This output restriction means there are mutually beneficial transactions (units that consumers would value more than their cost to produce, between Q=30 and Q=60) that simply do not occur under monopoly — this lost potential surplus, benefiting no one, is the deadweight loss created by the monopoly's output restriction."
    },
    {
      id: 'micro-frq-5', difficulty: 3, unit: 4,
      prompt: "Explain ONE key similarity AND ONE key difference between monopolistic competition and perfect competition.",
      rubricPoints: [
        "Identifies a valid similarity (e.g., both have many firms and relatively easy entry/exit, both tend toward zero long-run economic profit) (1 pt)",
        "Identifies a valid difference (e.g., monopolistic competition involves differentiated products giving firms some price-setting power, while perfect competition involves identical products and firms as pure price takers) (1 pt)"
      ],
      sampleResponse: "Similarity: Both monopolistic competition and perfect competition are characterized by many firms in the market and relatively easy entry and exit, which drives long-run economic profit toward zero in both market structures, as new firms enter whenever positive economic profit is available. Difference: Perfect competition involves firms selling completely identical (homogeneous) products, making each firm a pure price taker with a perfectly elastic (horizontal) demand curve at the market price. Monopolistic competition, by contrast, involves firms selling differentiated products (with real or perceived differences between competitors' offerings), which gives each firm some limited degree of price-setting power and a downward-sloping (though relatively elastic) demand curve for its own specific product."
    },
    {
      id: 'micro-frq-6', difficulty: 4, unit: 5,
      prompt: "A firm sells its output in a perfectly competitive market at $8 per unit. The table below shows the marginal product of labor at different quantities of workers hired: the 5th worker adds 10 units of output, the 6th worker adds 8 units, and the 7th worker adds 5 units. The market wage rate is $56 per worker.\n\n(a) Calculate the marginal revenue product (MRP) of the 5th, 6th, and 7th workers.\n(b) Using the MRP=wage rule, determine how many workers (from this range) the firm should hire, and explain your reasoning.",
      rubricPoints: [
        "Correctly calculates MRP for each worker: 5th worker MRP = 10×$8 = $80; 6th worker MRP = 8×$8 = $64; 7th worker MRP = 5×$8 = $40 (1 pt)",
        "Correctly identifies that the firm should hire through the 6th worker (since MRP=$64 > wage=$56), but not the 7th (since MRP=$40 < wage=$56) (1 pt)",
        "Explains the reasoning: hire workers as long as MRP exceeds or equals the wage, since each such worker adds more revenue than cost (1 pt)"
      ],
      sampleResponse: "(a) MRP = marginal product × price. 5th worker: MRP = 10 × $8 = $80. 6th worker: MRP = 8 × $8 = $64. 7th worker: MRP = 5 × $8 = $40.\n(b) The firm should hire through the 6th worker, but not hire the 7th worker. This is because the firm should continue hiring additional workers as long as their MRP is greater than or equal to the wage rate ($56): the 5th worker's MRP ($80) and 6th worker's MRP ($64) both exceed the wage, meaning each adds more revenue than they cost to employ, making them profitable to hire. However, the 7th worker's MRP ($40) is below the wage ($56), meaning this worker would cost more to employ than the additional revenue they generate — hiring this worker would reduce the firm's profit, so the firm should stop hiring after the 6th worker."
    },
    {
      id: 'micro-frq-7', difficulty: 4, unit: 6,
      prompt: "A factory's production process creates air pollution that harms nearby residents, a cost not reflected in the market price of the factory's product.\n\n(a) Explain why this negative externality causes the free market to overproduce the good relative to the socially optimal quantity.\n(b) Describe one government policy that could help correct this market failure, and explain how it works.",
      rubricPoints: [
        "Explains that the market supply curve reflects only private cost, not the full social cost (private cost plus external pollution cost), causing market equilibrium quantity to exceed the socially optimal quantity (1 pt)",
        "Describes a valid corrective policy (e.g., a Pigovian tax equal to the external cost per unit) (1 pt)",
        "Explains how the policy works to correct the externality (e.g., the tax raises the firm's private cost to reflect the true social cost, reducing quantity produced toward the socially optimal level) (1 pt)"
      ],
      sampleResponse: "(a) The market supply curve reflects only the factory's private production costs, not the additional external cost imposed on nearby residents through pollution. Because this external cost isn't included in the firm's costs or the market price, the market price is too low and the market equilibrium quantity is too high compared to the true socially optimal quantity, which would account for the FULL social cost of production (private cost plus the external pollution cost).\n(b) A government could impose a Pigovian tax on the factory equal to the estimated external cost per unit of pollution caused. This tax effectively raises the factory's private cost of production to reflect the true social cost, shifting the supply curve leftward (upward). This shift reduces the equilibrium quantity produced, moving the market outcome closer to the socially optimal quantity that fully accounts for the pollution's external cost, correcting the market failure."
    },
    {
      id: 'micro-frq-8', difficulty: 3, unit: 6,
      prompt: "Explain why public goods, such as national defense, tend to be underprovided by a purely free market system, using the specific characteristics of public goods in your explanation.",
      rubricPoints: [
        "Identifies non-excludability as a key characteristic (people cannot be prevented from benefiting even without paying) (1 pt)",
        "Explains the resulting free-rider problem — people have an incentive not to pay since they can benefit anyway, reducing private firms' incentive to provide the good (1 pt)",
        "Connects this to underprovision — since private firms cannot profitably capture payment from all beneficiaries, they will provide less than the socially optimal quantity (or none at all) (1 pt)"
      ],
      sampleResponse: "Public goods like national defense are non-excludable, meaning it is impractical or impossible to prevent any individual — even someone who hasn't paid — from benefiting once the good is provided. This creates a free-rider problem: since people can benefit from national defense regardless of whether they personally pay for it, individuals have an incentive to avoid paying and rely on others to fund it instead. Because private firms cannot exclude non-payers and therefore cannot reliably capture payment from all the people who benefit, they lack sufficient profit incentive to provide the good in adequate quantities. As a result, a purely free market system tends to underprovide public goods like national defense relative to the socially optimal quantity, which is why governments typically provide or fund these goods instead, using tax revenue collected from the broader population."
    }
  ]
}
