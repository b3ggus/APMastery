// AP Macroeconomics — real College Board unit numbers/names used for
// authenticity. All 6 units covered with a starter question set; more
// questions can be added to each unit the same way as other subjects.

export const macro = {
  id: 'macro',
  name: 'AP Macroeconomics',
  icon: '📈',
  accent: 'indigo',
  units: [
    {
      id: 1,
      name: 'Unit 1: Basic Economic Concepts',
      questions: [
        {
          id: 'macro-1-1', difficulty: 1, type: 'mcq', topic: 'Opportunity Cost',
          prompt: "Maria can spend her Saturday afternoon either working at her part-time job for $60 or studying for an exam. If she chooses to study, her opportunity cost is:",
          choices: ['The time she spent studying', 'The $60 she could have earned working', 'The grade she earns on the exam', 'The value of her part-time job in general'],
          correct: 1,
          explanation: {
            correct: "Opportunity cost is the value of the single best forgone alternative when a choice is made. Since Maria's next best alternative to studying was working for $60, that $60 is her opportunity cost of choosing to study.",
            wrong: { 0: "The time spent studying is the RESOURCE being used, not the opportunity cost — opportunity cost measures the value of what was given up, not the resource spent making the choice.", 2: "The grade she earns is a BENEFIT of the choice she made (studying), not a measure of what she gave up by not working.", 3: "The 'value of her job in general' is too vague and not tied to this specific afternoon — opportunity cost requires a specific forgone amount, which here is the $60 in wages for that particular time period." },
            tempting: "Choice A is tempting because it names something Maria clearly 'used up,' but opportunity cost specifically measures the value of the best alternative given up, not the resource spent on the choice actually made.",
            commonMistake: "Confusing the resource used to make a choice (time) with the opportunity cost of that choice (the value of the next best alternative use of that resource).",
            apTip: "Opportunity cost = the value of the single next-best forgone alternative. When a scenario gives a specific dollar amount for 'what else could have been done,' that number is almost always the opportunity cost being tested."
          }
        },
        {
          id: 'macro-1-2', difficulty: 2, type: 'mcq', topic: 'Production Possibilities Curve',
          prompt: "A point located inside a country's production possibilities curve (PPC) indicates that the economy is:",
          choices: ['Operating efficiently and using all of its resources', 'Underutilizing resources or producing inefficiently, since more of both goods could be produced', 'Experiencing economic growth', 'Operating at a combination of goods that is unattainable with current resources'],
          correct: 1,
          explanation: {
            correct: "A point inside the PPC means the economy could produce more of both goods without needing additional resources — this reflects underutilized resources (like unemployment) or productive inefficiency, not a resource constraint.",
            wrong: { 0: "A point ON the curve, not inside it, represents efficient use of all available resources — every point on the PPC itself is already efficient.", 2: "Economic growth is represented by an outward shift of the ENTIRE PPC (a larger curve), not by a single point located inside a fixed, unchanged curve.", 3: "Points OUTSIDE the PPC, not inside it, represent combinations that are currently unattainable given the economy's resources and technology — the opposite of an inside point." },
            tempting: "None of the distractors closely match, but students who haven't fully separated 'inside,' 'on,' and 'outside' the curve can mix up which position represents inefficiency versus unattainability.",
            commonMistake: "Mixing up the three PPC positions: points INSIDE (inefficient/underutilized resources), points ON the curve (efficient), and points OUTSIDE (currently unattainable without growth).",
            apTip: "Memorize all three PPC positions together: inside = inefficiency/unemployment, on the curve = efficiency, outside = unattainable (unless the whole curve shifts outward through economic growth)."
          }
        },
        {
          id: 'macro-1-3', difficulty: 3, type: 'mcq', topic: 'Comparative Advantage',
          prompt: "Country A can produce either 10 units of wheat or 5 units of cloth per day using all its resources. Country B can produce either 8 units of wheat or 8 units of cloth per day. Based on comparative advantage, which country should specialize in wheat?",
          choices: ['Country A, since it has the lower opportunity cost of producing wheat', 'Country B, since it has the lower opportunity cost of producing wheat', 'Country A, since it can produce more wheat in absolute terms', 'Neither country, since Country B has an absolute advantage in both goods'],
          correct: 0,
          explanation: {
            correct: "Country A's opportunity cost of 1 unit of wheat is 0.5 units of cloth (5 cloth given up ÷ 10 wheat gained), while Country B's opportunity cost of 1 unit of wheat is 1 full unit of cloth (8 cloth given up ÷ 8 wheat gained). Since 0.5 < 1, Country A has the comparative advantage in wheat and should specialize in it.",
            wrong: { 1: "Country B actually has the HIGHER opportunity cost of wheat (1 cloth per wheat, versus Country A's 0.5), meaning Country B should specialize in cloth, not wheat.", 2: "Absolute advantage (who produces more in raw terms) does not determine specialization — comparative advantage (who has the lower opportunity cost) does, even though in this example Country A happens to have both.", 3: "Country B does not have an absolute advantage in BOTH goods: Country A can produce more wheat (10 vs. 8), while Country B can produce more cloth (8 vs. 5) — each country actually has the absolute advantage in one good." },
            tempting: "Choice C is tempting since it correctly names Country A, but for the wrong reason — absolute advantage (raw output) doesn't determine who should specialize in what; comparative advantage (lower opportunity cost) does.",
            commonMistake: "Determining specialization based on absolute advantage (who produces more) rather than calculating and comparing each country's opportunity cost, which is what actually determines comparative advantage and gains from trade.",
            apTip: "Always calculate opportunity cost as (units given up) ÷ (units gained) for each country before deciding who should specialize in what — the country with the LOWER opportunity cost of a good has the comparative advantage in producing it, regardless of who has the absolute advantage."
          }
        },
        {
          id: 'macro-1-4', difficulty: 2, type: 'mcq', topic: 'Determinants of Demand',
          prompt: "An increase in consumer income (assuming the good is a normal good) will cause which of the following in the market for that good?",
          choices: ['A rightward shift of the demand curve, increasing both equilibrium price and quantity', 'A movement along the existing demand curve to a lower price and higher quantity', 'A leftward shift of the demand curve, decreasing both equilibrium price and quantity', 'A rightward shift of the supply curve, decreasing equilibrium price'],
          correct: 0,
          explanation: {
            correct: "Income is a determinant (shifter) of demand, not a cause of movement along the curve. For a normal good, rising income increases demand at every price, shifting the whole demand curve rightward and raising both equilibrium price and quantity.",
            wrong: { 1: "A movement along the existing curve happens only when the price of the good ITSELF changes — income is a demand-shifting determinant, so it moves the entire curve, not just a point along it.", 2: "A leftward shift (decrease in demand) would occur for an INFERIOR good when income rises, not a normal good — for a normal good, rising income shifts demand right.", 3: "Income affects consumer DEMAND for a good, not producer SUPPLY of it — supply would not shift from a change in consumer income." },
            tempting: "Choice B is tempting because 'increase' might suggest movement, but a change in income is a determinant that shifts the whole demand curve, not a change in the good's own price that would cause movement along it.",
            commonMistake: "Confusing a shift of the demand curve (caused by a change in a determinant like income) with a movement along the demand curve (caused only by a change in the good's own price).",
            apTip: "Memorize the demand shifters: income (normal vs. inferior goods), consumer preferences, prices of related goods (substitutes/complements), expectations, and the number of buyers — any of these shift the entire curve; only a change in the good's own price causes movement along it."
          }
        },
        {
          id: 'macro-1-5', difficulty: 3, type: 'mcq', topic: 'Determinants of Supply',
          prompt: "A sharp increase in the price of steel, a key input for automobile manufacturers, will most directly cause:",
          choices: ['A leftward shift of the automobile supply curve, raising equilibrium price and lowering equilibrium quantity', 'A rightward shift of the automobile supply curve, lowering equilibrium price', 'A movement along the automobile supply curve to a higher quantity supplied', 'A rightward shift of the automobile demand curve'],
          correct: 0,
          explanation: {
            correct: "A rise in the cost of a key input raises production costs for automakers, making them less willing/able to supply cars at every price — this shifts the entire supply curve LEFT, raising equilibrium price and lowering equilibrium quantity.",
            wrong: { 1: "Rising input costs make production more expensive, which shifts supply LEFT (decreases supply), not right.", 2: "A change in an input's price is a supply determinant that shifts the whole curve — it does not cause a movement along a fixed supply curve, which only happens from a change in the good's own price.", 3: "Steel prices affect automakers' production COSTS (a supply-side factor), not consumers' willingness to buy cars, so this scenario doesn't directly shift demand." },
            tempting: "None of the distractors are especially deceptive, but students sometimes default to describing a 'movement' rather than recognizing that an input price change is a supply-shifting determinant.",
            commonMistake: "Forgetting that a change in input/resource prices shifts the SUPPLY curve (a cost-of-production shifter), not the demand curve, and that rising input costs shift supply LEFT (a decrease), not right.",
            apTip: "Memorize the supply shifters: resource/input prices, technology, number of sellers, producer expectations, and taxes/subsidies — rising input costs always shift supply LEFT, raising price and lowering quantity in equilibrium."
          }
        },
        {
          id: 'macro-1-6', difficulty: 4, type: 'mcq', topic: 'Marginal Analysis',
          prompt: "A firm is deciding whether to produce one additional unit of output. According to marginal analysis, the firm should produce that additional unit if and only if:",
          choices: ['Total revenue exceeds total cost', 'Marginal benefit (marginal revenue) is greater than or equal to marginal cost', 'Average total cost is falling', 'The firm has unused production capacity'],
          correct: 1,
          explanation: {
            correct: "Marginal analysis evaluates whether ONE MORE unit is worth producing by comparing the additional (marginal) benefit it generates to the additional (marginal) cost it requires — production should continue as long as marginal benefit is at least as large as marginal cost.",
            wrong: { 0: "Comparing TOTAL revenue to TOTAL cost determines overall profitability, but it doesn't tell you whether producing one MORE specific unit is worthwhile — a firm can be profitable overall while the very last unit still costs more to make than it earns.", 2: "Falling average total cost doesn't by itself indicate whether the specific marginal unit's benefit exceeds its specific marginal cost — average and marginal values can move differently.", 3: "Having unused capacity doesn't automatically mean producing more is worthwhile if that unit's marginal cost would exceed its marginal benefit." },
            tempting: "Choice A is tempting since comparing totals is the standard overall profit condition, but the marginal decision rule specifically concerns whether to produce ONE MORE unit, not whether the firm is profitable in total.",
            commonMistake: "Confusing total cost/revenue comparisons (which determine overall profit) with marginal cost/benefit comparisons (which determine whether to produce one additional unit).",
            apTip: "The golden rule of marginal analysis: keep doing an activity as long as marginal benefit is greater than or equal to marginal cost, and stop once marginal cost exceeds marginal benefit — this rule applies to firm output decisions, consumer choices, and government policy decisions alike."
          }
        }
      ]
    },
    {
      id: 2,
      name: 'Unit 2: Economic Indicators and the Business Cycle',
      questions: [
        {
          id: 'macro-2-1', difficulty: 2, type: 'mcq', topic: 'Components of GDP (Expenditure Approach)',
          prompt: "Using the expenditure approach, GDP is calculated as C + I + G + NX. Which of the following transactions would NOT be directly counted in this year's GDP?",
          choices: ['A consumer buying a newly built house', 'A business purchasing new factory equipment', 'A retailer reselling a used car to a customer', 'The government paying salaries to public school teachers'],
          correct: 2,
          explanation: {
            correct: "GDP only counts spending on NEWLY produced final goods and services within the current period. A used car resale involves a good that was already counted in GDP when it was originally produced, so reselling it again does not add new production or count again in this year's GDP.",
            wrong: { 0: "A newly built house is new residential construction, which is counted in the Investment (I) component of GDP.", 1: "New factory equipment is business investment in capital, which is directly counted in the Investment (I) component of GDP.", 3: "Government salaries paid for a current public service (teaching) are counted in the Government spending (G) component of GDP." },
            tempting: "None of the other choices are especially deceptive, since they clearly involve NEW production, but students may not immediately recognize why a used-good resale is specifically excluded.",
            commonMistake: "Forgetting that GDP only counts spending on NEWLY produced final goods and services within the current period — resales of used or existing goods, along with purely financial or transfer transactions, are excluded, since they don't reflect current-year production.",
            apTip: "GDP = C + I + G + NX counts only NEW, FINAL production in the current period; watch for the classic exclusions: used goods, intermediate goods (already embedded in a final good's price), and transfer payments (like Social Security, which involve no current production)."
          }
        },
        {
          id: 'macro-2-2', difficulty: 2, type: 'mcq', topic: 'Types of Unemployment',
          prompt: "A skilled coal miner loses his job permanently as the country shifts toward renewable energy and coal mining jobs disappear nationwide. This worker is experiencing:",
          choices: ['Frictional unemployment', 'Structural unemployment', 'Cyclical unemployment', 'Seasonal unemployment'],
          correct: 1,
          explanation: {
            correct: "Structural unemployment results from a long-term mismatch between workers' skills/location and the jobs actually available, often caused by lasting shifts in industry or technology — exactly what happens as an entire industry (coal) permanently declines.",
            wrong: { 0: "Frictional unemployment describes short-term, normal job search between positions (e.g., a new graduate searching for a first job), not a permanent industry-wide mismatch of skills.", 2: "Cyclical unemployment is tied to a downturn in the overall business cycle (a recession), not to a permanent, lasting shift in which industries exist.", 3: "Seasonal unemployment involves predictable fluctuations tied to the time of year (like agriculture or holiday retail), not a permanent structural shift away from an entire industry." },
            tempting: "Choice C is tempting since job loss can sound broadly 'economy-related,' but cyclical unemployment specifically ties to recessions/business-cycle downturns, not to permanent structural shifts in which industries exist.",
            commonMistake: "Confusing structural unemployment (a permanent mismatch between workers' skills/location and available jobs, often from lasting industry or technology changes) with cyclical unemployment (temporary job loss tied to the ups and downs of the business cycle).",
            apTip: "The four types, by trigger word: Frictional = 'searching/between jobs,' Structural = 'skills mismatch/industry disappearing,' Cyclical = 'recession/downturn,' Seasonal = 'predictable time of year' — structural and cyclical are the two most frequently tested and confused."
          }
        },
        {
          id: 'macro-2-3', difficulty: 3, type: 'mcq', topic: 'Calculating Inflation with CPI',
          prompt: "A market basket of goods cost $200 last year and costs $214 this year. What is the approximate inflation rate between the two years?",
          choices: ['0.7%', '7%', '14%', '21.4%'],
          correct: 1,
          explanation: {
            correct: "Inflation rate = [(this year's cost − last year's cost) ÷ last year's cost] × 100 = [($214 − $200) ÷ $200] × 100 = ($14 ÷ $200) × 100 = 7%.",
            wrong: { 0: "This would result from an arithmetic slip, such as dividing the $14 change by a much larger base value (like $2,000) instead of the correct $200 base.", 2: "$14 is the raw DOLLAR change in the basket's cost, not the percentage change — it must still be divided by the original $200 base value and converted to a percent.", 3: "This figure doesn't match the correct calculation and likely results from a division error, such as using the wrong base value in the denominator." },
            tempting: "Choice C is tempting since $14 is literally the dollar amount of the increase (the numerator), tempting a student to report it directly as if it were already the percentage change.",
            commonMistake: "Reporting the raw dollar (or index-point) change as the inflation rate directly, instead of dividing that change by the ORIGINAL (base year) value and converting the result to a percentage.",
            apTip: "Inflation rate formula: [(this year's CPI or basket cost − last year's) ÷ last year's] × 100 — always divide by the BASE (earlier) year's value, not the later year's."
          }
        },
        {
          id: 'macro-2-4', difficulty: 3, type: 'mcq', topic: 'Real vs. Nominal GDP',
          prompt: "If nominal GDP grows by 6% over a year while the price level rises by 4% over the same period, real GDP growth is approximately:",
          choices: ['10%', '6%', '4%', '2%'],
          correct: 3,
          explanation: {
            correct: "Real GDP growth is approximately nominal GDP growth minus the inflation rate: 6% − 4% = 2%. This isolates the portion of nominal growth that reflects an actual increase in the quantity of goods and services produced, rather than just rising prices.",
            wrong: { 0: "Adding the nominal growth rate and the inflation rate together (6% + 4%) is the wrong operation — the inflation rate should be subtracted from nominal growth, not added.", 1: "Reporting the nominal growth rate itself ignores that part of that 6% increase reflects rising prices rather than an increase in actual output.", 2: "Reporting the inflation rate itself confuses the price-level change with the growth in real output, which is a separate calculation." },
            tempting: "Choice B is tempting since 6% nominal growth might be mistaken for the 'real' figure if a student forgets to adjust for inflation at all.",
            commonMistake: "Treating nominal GDP growth as if it directly reflects growth in real output, without subtracting out the portion of that growth that is simply due to rising prices (inflation).",
            apTip: "Approximate rule: Real GDP growth ≈ Nominal GDP growth − Inflation rate. Real GDP is what actually matters for living standards, since it strips out the effect of rising prices and reflects only the change in the actual quantity of goods and services produced."
          }
        },
        {
          id: 'macro-2-5', difficulty: 2, type: 'mcq', topic: 'Phases of the Business Cycle',
          prompt: "An economy has just reached its highest point of output and employment before growth begins to slow and reverse. This point in the business cycle is called the:",
          choices: ['Trough', 'Expansion', 'Peak', 'Recovery'],
          correct: 2,
          explanation: {
            correct: "The peak is the specific turning point at the TOP of the business cycle, marking the highest level of output and employment reached before the economy turns downward into a contraction.",
            wrong: { 0: "The trough is the LOWEST point of the business cycle, the opposite turning point from the peak.", 1: "Expansion is the extended PHASE of rising output leading up to the peak — it describes the rising period, not the single highest turning point itself.", 3: "Recovery describes the period of renewed growth AFTER a trough, unrelated to the top of the cycle described in this scenario." },
            tempting: "Choice B is tempting since expansion also involves rising output, but expansion is the RISING phase, while the peak is the specific turning point at the top, just before the reversal begins.",
            commonMistake: "Confusing the expansion phase (the extended period of RISING output) with the peak (the specific highest turning POINT at the end of that expansion, right before contraction begins).",
            apTip: "Business cycle order: Trough (bottom) → Expansion (rising) → Peak (top, turning point) → Contraction/Recession (falling) → back to Trough — peak and trough are single turning points, not extended phases."
          }
        },
        {
          id: 'macro-2-6', difficulty: 4, type: 'mcq', topic: 'GDP Deflator vs. CPI',
          prompt: "Unlike the Consumer Price Index (CPI), which is based on a fixed basket of goods typically purchased by a representative household, the GDP deflator:",
          choices: ['Only measures the price of imported goods', 'Reflects the prices of all domestically produced final goods and services, and its basket automatically updates each year as the composition of GDP changes', 'Excludes government spending from its calculation entirely', 'Is always numerically identical to the CPI in any given year'],
          correct: 1,
          explanation: {
            correct: "The GDP deflator is based on the prices of everything actually produced domestically and counted in current GDP, so its 'basket' automatically reflects the current year's mix of output — unlike the CPI's fixed basket, which stays constant regardless of what is actually produced.",
            wrong: { 0: "The GDP deflator reflects DOMESTICALLY produced goods and actually excludes imports (since GDP itself excludes imports via the net exports component), the opposite of covering 'only' imports.", 2: "The GDP deflator does NOT exclude government spending — it covers prices across all components of GDP (C + I + G + NX), including government spending.", 3: "CPI and the GDP deflator are calculated differently (a fixed household basket vs. a changing current-year output basket) and commonly diverge, especially regarding imported goods and which categories of spending each one includes." },
            tempting: "Choice C is tempting since G is only one component among several, but the GDP deflator does not exclude any GDP component — it covers prices of everything produced domestically and counted in GDP, including government spending.",
            commonMistake: "Assuming CPI and the GDP deflator are interchangeable inflation measures, without recognizing their key structural differences: CPI uses a FIXED representative-household basket (and includes imported consumer goods), while the GDP deflator uses the CURRENT year's actual output basket of domestically produced goods (excluding imports).",
            apTip: "Key CPI vs. GDP deflator distinctions for the exam: CPI = fixed basket, includes imported goods, tracks a typical consumer's cost of living; GDP deflator = current output basket (changes yearly), only domestically produced goods, a broader measure covering all of GDP."
          }
        }
      ]
    },
    {
      id: 3,
      name: 'Unit 3: National Income and Price Determination',
      questions: [
        {
          id: 'macro-3-1', difficulty: 2, type: 'mcq', topic: 'Determinants of Aggregate Demand',
          prompt: "A significant increase in consumer confidence about future economic conditions would most directly cause:",
          choices: ['A rightward shift of the aggregate demand (AD) curve, as consumption spending increases at every price level', 'A movement along the existing AD curve to a lower price level', 'A leftward shift of the short-run aggregate supply (SRAS) curve', 'No change in AD, since consumer confidence only affects long-run outcomes'],
          correct: 0,
          explanation: {
            correct: "Consumer confidence is a determinant of consumption (C), a component of AD. Rising confidence increases consumer spending at every price level, shifting the entire AD curve to the right.",
            wrong: { 1: "A movement along the AD curve occurs from a change in the price level itself, not from a change in a determinant like confidence, which instead shifts the entire curve.", 2: "Consumer confidence is a demand-side determinant (it affects consumption spending), not a supply-side cost factor, so it does not directly shift SRAS.", 3: "Consumer confidence affects near-term spending decisions directly through the consumption component of AD, contrary to this choice." },
            tempting: "None of the distractors are especially deceptive, though the word 'increase' can tempt students toward describing a movement rather than a shift.",
            commonMistake: "Confusing an AD determinant (like consumer confidence, which shifts consumption spending at every price level) with a change in the price level itself, which instead causes a movement ALONG a fixed AD curve.",
            apTip: "AD = C + I + G + NX — memorize the specific determinants that shift each component (consumer confidence/wealth/income shift C; interest rates/business confidence shift I; government policy shifts G; exchange rates/foreign income shift NX) — any of these shift the WHOLE AD curve."
          }
        },
        {
          id: 'macro-3-2', difficulty: 3, type: 'mcq', topic: 'Short-Run Aggregate Supply Shifts',
          prompt: "A sudden, sharp increase in global oil prices would most directly cause which of the following in the AD/AS model?",
          choices: ['A rightward shift of SRAS, lowering the price level and raising output', 'A leftward shift of SRAS, raising the price level while lowering output (stagflation)', 'A rightward shift of AD, raising both price level and output', 'A leftward shift of the long-run aggregate supply (LRAS) curve'],
          correct: 1,
          explanation: {
            correct: "A sharp rise in oil prices raises production costs economy-wide, which shifts SRAS to the LEFT. This simultaneously raises the price level and lowers output — the classic combination known as stagflation.",
            wrong: { 0: "Rising oil prices raise, not lower, production costs, which shifts SRAS LEFT (a decrease in supply), not right.", 2: "Oil prices are a supply-side cost shock affecting production costs, not a demand-side shifter, so this scenario does not directly shift AD.", 3: "LRAS reflects an economy's long-run potential output, determined by resources, capital, technology, and institutions — it is not directly shifted by a temporary oil price spike." },
            tempting: "Choice D is tempting since oil is a resource, which might suggest a long-run supply effect, but a temporary price spike is a short-run cost shock affecting SRAS, not the economy's underlying long-run productive capacity.",
            commonMistake: "Forgetting that a rise in a key input's price (like oil) is a negative supply shock that shifts SRAS LEFT, simultaneously raising the price level AND lowering output — the defining combination known as stagflation.",
            apTip: "Stagflation = SRAS shifts LEFT from a negative supply shock (like an oil price spike), producing the unusual combination of a rising price level (inflation) AND falling output (recession) at the same time — a key AP Macro exam concept."
          }
        },
        {
          id: 'macro-3-3', difficulty: 4, type: 'mcq', topic: 'The Spending Multiplier',
          prompt: "If the marginal propensity to consume (MPC) in an economy is 0.75, and government spending increases by $40 billion, what is the maximum total increase in real GDP predicted by the simple spending multiplier?",
          choices: ['$40 billion', '$120 billion', '$160 billion', '$53.3 billion'],
          correct: 2,
          explanation: {
            correct: "The spending multiplier is 1 ÷ (1 − MPC) = 1 ÷ (1 − 0.75) = 1 ÷ 0.25 = 4. Total change in real GDP = multiplier × change in spending = 4 × $40 billion = $160 billion.",
            wrong: { 0: "This is just the initial spending increase, ignoring the multiplier effect created as recipients of that spending re-spend a portion of their new income.", 1: "This would result from using an incorrect multiplier of 3 (as if MPC were about 0.67 instead of the given 0.75).", 3: "This figure could result from dividing rather than correctly applying the 1 ÷ (1 − MPC) formula." },
            tempting: "Choice A is tempting since it ignores the multiplier effect entirely — a common shortcut error.",
            commonMistake: "Reporting the initial injection of spending as the final GDP change, forgetting that the multiplier effect (from repeated rounds of spending as each recipient re-spends a portion of new income) magnifies the total impact on GDP.",
            apTip: "Spending multiplier = 1 ÷ (1 − MPC) = 1 ÷ MPS. Multiply this by the CHANGE in spending to find the total change in real GDP: ΔGDP = multiplier × Δspending. Here: 1 ÷ (1 − 0.75) = 4, and 4 × $40B = $160B."
          }
        },
        {
          id: 'macro-3-4', difficulty: 3, type: 'mcq', topic: 'Expansionary Fiscal Policy',
          prompt: "An economy is currently experiencing a recessionary gap, with real GDP below full-employment (potential) GDP. Which fiscal policy action would be most appropriate to close this gap?",
          choices: ['Increasing taxes to reduce the budget deficit', 'Decreasing government spending to balance the budget', 'Increasing government spending and/or decreasing taxes to stimulate aggregate demand', 'Raising the required reserve ratio to slow the money supply'],
          correct: 2,
          explanation: {
            correct: "To close a recessionary gap, expansionary fiscal policy — increasing government spending and/or cutting taxes — is used to raise aggregate demand and push real GDP back up toward its full-employment level.",
            wrong: { 0: "Raising taxes would further REDUCE consumption and AD, worsening a recessionary gap rather than closing it.", 1: "Cutting government spending would further reduce AD, the opposite of what's needed to close a recessionary (contractionary) gap.", 3: "Adjusting the reserve ratio is a MONETARY policy tool controlled by the central bank, not a fiscal policy action taken by the government's taxing/spending authority." },
            tempting: "Choice D is tempting since it's a real policy tool that could also help stimulate the economy, but it's specifically a MONETARY policy tool, not fiscal policy, which is what the question asks about.",
            commonMistake: "Confusing fiscal policy tools (government spending and taxation, controlled by the legislature/executive) with monetary policy tools (like the reserve ratio, interest rates, and open market operations, controlled by the central bank).",
            apTip: "To close a RECESSIONARY gap (GDP below potential): use EXPANSIONARY fiscal policy — increase government spending and/or decrease taxes, both of which increase AD. To close an INFLATIONARY gap (GDP above potential): use CONTRACTIONARY fiscal policy — the reverse."
          }
        },
        {
          id: 'macro-3-5', difficulty: 4, type: 'mcq', topic: 'Crowding Out',
          prompt: "When the government finances a budget deficit by borrowing heavily in the loanable funds market, the resulting increase in interest rates that reduces private investment spending is known as:",
          choices: ['The multiplier effect', 'Crowding out', 'The wealth effect', 'Quantitative easing'],
          correct: 1,
          explanation: {
            correct: "Crowding out describes how increased government borrowing raises interest rates, which in turn discourages (crowds out) private investment spending — partially offsetting the stimulative effect of the government spending increase.",
            wrong: { 0: "The multiplier effect describes how an initial change in spending leads to a larger total change in GDP through repeated rounds of respending, not the interest-rate-driven reduction in private investment.", 2: "The wealth effect describes how changes in the price level affect consumption through the real value of household wealth/savings, unrelated to government borrowing crowding out investment.", 3: "Quantitative easing is a monetary policy tool used by central banks (large-scale asset purchases), not a side effect of government deficit financing." },
            tempting: "None of the distractors are especially deceptive beyond requiring precise terminology recall.",
            commonMistake: "Confusing crowding out (higher government borrowing raises interest rates, which reduces private investment) with the multiplier effect (how spending changes ripple through the economy to produce a larger overall change in GDP) — these are related but distinct fiscal policy concepts.",
            apTip: "Crowding out is a key LIMITATION of expansionary fiscal policy financed by borrowing: more government borrowing → increased demand for loanable funds → higher interest rates → reduced private investment spending, which partially offsets the intended stimulative effect of the government spending increase."
          }
        },
        {
          id: 'macro-3-6', difficulty: 5, type: 'mcq', topic: 'Long-Run Self-Correction',
          prompt: "An economy is currently producing above its full-employment level of output (an inflationary gap), with no government intervention. According to the long-run self-correction mechanism, what is expected to happen over time?",
          choices: ['The economy will remain permanently above full employment, since no automatic mechanism exists to correct this', 'Rising wages (due to a tight labor market) will shift SRAS leftward, raising the price level further and returning output to full-employment level in the long run', 'Falling wages will shift SRAS rightward, further increasing output above full employment', 'The government must intervene with contractionary fiscal policy, since the economy cannot self-correct'],
          correct: 1,
          explanation: {
            correct: "In an inflationary gap, the tight labor market drives wages up as firms compete for scarce workers, raising production costs and shifting SRAS LEFT. This process continues until output returns to potential GDP, though at a higher price level.",
            wrong: { 0: "Classical/long-run macro theory holds that the economy DOES self-correct through wage and price adjustments, even without policy intervention.", 2: "In an inflationary gap (tight labor market, low unemployment), wages tend to RISE, not fall, as firms compete for scarce workers, which shifts SRAS LEFT, not right.", 3: "Government intervention can speed up the adjustment, but the self-correction mechanism means the economy is theoretically capable of returning to full employment on its own, even without government action." },
            tempting: "Choice D is tempting since contractionary fiscal policy actually COULD help close an inflationary gap faster, but the question specifically asks about the automatic, no-intervention self-correction mechanism, under which wage/price adjustments alone eventually restore full-employment output.",
            commonMistake: "Assuming the economy can only return to full employment through active government policy, rather than understanding the classical long-run self-correction mechanism: in an inflationary gap, a tight labor market drives wages up, raising production costs and shifting SRAS left until the economy returns to producing at potential (full-employment) GDP, though at a higher price level.",
            apTip: "Self-correction mechanism: inflationary gap → tight labor market → rising wages → SRAS shifts LEFT → output falls back to potential GDP (price level rises further). Recessionary gap → high unemployment → falling wages (though often slow/'sticky' in the real world) → SRAS shifts RIGHT → output rises back to potential GDP (price level falls)."
          }
        }
      ]
    },
    {
      id: 4,
      name: 'Unit 4: Financial Sector',
      questions: [
        {
          id: 'macro-4-1', difficulty: 1, type: 'mcq', topic: 'Functions and Definition of Money',
          prompt: "Money's function as a way to compare the relative worth of very different goods and services, such as pricing both a car and a cup of coffee in the same terms, illustrates money serving as a:",
          choices: ['Medium of exchange', 'Unit of account', 'Store of value', 'Standard of deferred payment'],
          correct: 1,
          explanation: {
            correct: "The unit of account function refers to money's role in measuring and comparing the value of very different goods by pricing them in the same terms, which is exactly what's described here.",
            wrong: { 0: "Medium of exchange refers to money's use in DIRECT transactions to actually buy and sell goods, not specifically to comparing or pricing their relative values.", 2: "Store of value refers to money's ability to hold purchasing power over time (as in savings), not to pricing or comparing goods against one another.", 3: "Standard of deferred payment relates to using money to measure debts to be paid in the future, not simply to pricing goods for comparison in the present." },
            tempting: "Choice A is tempting since both functions involve money's everyday role in the economy, but unit of account is specifically about pricing/measuring value for comparison, while medium of exchange is about actually completing a purchase.",
            commonMistake: "Confusing unit of account (measuring and comparing value, like pricing goods) with medium of exchange (actually being accepted as payment in a transaction) — both are core functions of money but describe different roles.",
            apTip: "Money's three core functions: Medium of Exchange (used to buy/sell), Unit of Account (measures/compares value, e.g., prices), Store of Value (holds purchasing power over time) — look for the specific verb in the question (comparing/pricing vs. buying vs. saving) to identify which function is being tested."
          }
        },
        {
          id: 'macro-4-2', difficulty: 3, type: 'mcq', topic: 'Money Multiplier',
          prompt: "If the required reserve ratio is 20% and a bank receives a new deposit of $5,000, what is the maximum total increase in the money supply that could result from the banking system's deposit expansion process?",
          choices: ['$1,000', '$5,000', '$20,000', '$25,000'],
          correct: 3,
          explanation: {
            correct: "The money multiplier is 1 ÷ required reserve ratio = 1 ÷ 0.20 = 5. Total possible increase in the money supply = initial deposit × multiplier = $5,000 × 5 = $25,000.",
            wrong: { 0: "This equals the required reserves held on the initial deposit (20% of $5,000), not the total resulting expansion of the money supply.", 1: "This is just the initial deposit itself, not accounting for the multiplied effect of repeated lending and redepositing throughout the banking system.", 2: "This could result from using an incorrect multiplier (such as 4 instead of 5) or another arithmetic slip." },
            tempting: "Choice B is tempting since it ignores the multiplier effect entirely, a trap similar to the spending multiplier error.",
            commonMistake: "Reporting the initial deposit amount (or the amount held in required reserves) as the total money supply change, rather than applying the full money multiplier (1 ÷ required reserve ratio) to the ENTIRE initial deposit.",
            apTip: "Money multiplier = 1 ÷ required reserve ratio. Total possible change in the money supply = initial (excess) deposit × money multiplier. Here: 1 ÷ 0.20 = 5, and 5 × $5,000 = $25,000 — this assumes banks lend out all excess reserves and no cash is held outside the banking system."
          }
        },
        {
          id: 'macro-4-3', difficulty: 3, type: 'mcq', topic: 'The Money Market Model',
          prompt: "In the money market graph (nominal interest rate on the vertical axis, quantity of money on the horizontal axis), if the Federal Reserve increases the money supply through open market operations, the immediate effect is:",
          choices: ['The money supply curve shifts rightward, and the equilibrium nominal interest rate falls', 'The money demand curve shifts rightward, and the equilibrium nominal interest rate rises', 'A movement along the money supply curve to a lower interest rate', 'No change in the interest rate, since the money supply curve is horizontal'],
          correct: 0,
          explanation: {
            correct: "The money supply curve is vertical at the quantity set by the Fed. An open market operation that increases the money supply shifts this entire vertical curve to the right, causing a movement down the downward-sloping money demand curve to a lower equilibrium interest rate.",
            wrong: { 1: "An increase in the money SUPPLY (not demand) is what the Fed directly controls through open market operations — money demand is unaffected by this specific action.", 2: "The money supply curve is drawn as VERTICAL (since the Fed sets a specific quantity), so a monetary policy action shifts the entire curve rather than causing movement along it.", 3: "The money supply curve is vertical, not horizontal, and a shift of this vertical curve DOES change the equilibrium interest rate." },
            tempting: "Choice C is tempting since it describes a change along a curve, but because the money supply curve is drawn as VERTICAL at the Fed-determined quantity, a Fed action to change that quantity shifts the ENTIRE curve rather than producing movement along it.",
            commonMistake: "Confusing the vertical money supply curve (controlled directly by the Fed, shifts with policy actions) with the downward-sloping money demand curve (which shows the inverse relationship between quantity of money demanded and the interest rate, and shifts only with changes in real GDP or the price level).",
            apTip: "Money market model: MS is vertical (set by the Fed), MD is downward-sloping (money demanded falls as the interest rate rises). An increase in MS shifts the vertical MS curve right, causing a movement DOWN the fixed MD curve to a LOWER equilibrium interest rate."
          }
        },
        {
          id: 'macro-4-4', difficulty: 4, type: 'mcq', topic: 'Loanable Funds Market and Government Borrowing',
          prompt: "When the federal government increases its borrowing to finance a larger budget deficit, the loanable funds market model predicts:",
          choices: ['The supply of loanable funds shifts left, raising the real interest rate', 'The demand for loanable funds shifts right, raising the real interest rate and reducing private investment', 'The demand for loanable funds shifts left, lowering the real interest rate', 'Neither supply nor demand for loanable funds changes, since government borrowing occurs in a separate market'],
          correct: 1,
          explanation: {
            correct: "Government borrowing makes the government an additional borrower in the loanable funds market, increasing the DEMAND for loanable funds. This raises the equilibrium real interest rate and crowds out (reduces) some private investment spending.",
            wrong: { 0: "Government borrowing represents an increase in DEMAND for loanable funds (the government is a borrower), not a decrease in the SUPPLY of funds available from savers.", 2: "Government borrowing increases, not decreases, demand for loanable funds, since the government is seeking MORE funds to borrow, which raises, not lowers, the real interest rate.", 3: "Government borrowing occurs in the SAME loanable funds market as private borrowing, and directly affects the same equilibrium interest rate faced by private investors." },
            tempting: "Choice A is tempting since both scenarios involve interest rates rising, but the government's role is as an additional BORROWER (demander of funds), not as a factor reducing the SUPPLY of savings.",
            commonMistake: "Placing government borrowing on the supply side of the loanable funds market (as if it reduces available savings) rather than correctly modeling the government as an additional DEMANDER of loanable funds, competing with private borrowers for the same pool of funds.",
            apTip: "Loanable funds market: Supply comes from SAVERS (household/national savings); Demand comes from BORROWERS (private investment AND government borrowing). Increased government borrowing shifts DEMAND right, raising the real interest rate and crowding out some private investment — this is the loanable-funds-market version of the crowding-out effect."
          }
        },
        {
          id: 'macro-4-5', difficulty: 3, type: 'mcq', topic: 'Bank Balance Sheets and Excess Reserves',
          prompt: "A bank has $100,000 in checkable deposits and is required to hold 10% in reserves. If the bank currently holds $15,000 in reserves, how much does it have available to lend out (excess reserves)?",
          choices: ['$5,000', '$10,000', '$15,000', '$25,000'],
          correct: 0,
          explanation: {
            correct: "Required reserves = 10% × $100,000 = $10,000. Excess reserves = total reserves − required reserves = $15,000 − $10,000 = $5,000, which is the amount available for lending.",
            wrong: { 1: "This equals the required reserve amount itself, not the excess above that requirement.", 2: "This is the bank's TOTAL reserves held, not the portion available for lending after meeting the requirement.", 3: "This could result from adding required and excess reserves incorrectly, or another arithmetic slip." },
            tempting: "Choice C is tempting since $15,000 is the number given directly in the problem, but that figure is TOTAL reserves, not the LENDABLE excess above the requirement.",
            commonMistake: "Reporting total reserves held (or required reserves) as the lendable amount, instead of first calculating required reserves and then subtracting that from total reserves to isolate the EXCESS reserves available for lending.",
            apTip: "Excess reserves = Total reserves − Required reserves. Required reserves = Required reserve ratio × Checkable deposits. Here: required reserves = 10% × $100,000 = $10,000; excess reserves = $15,000 − $10,000 = $5,000 — only excess reserves can be lent out to create new money."
          }
        },
        {
          id: 'macro-4-6', difficulty: 5, type: 'mcq', topic: 'Quantity Theory of Money',
          prompt: "According to the quantity theory of money (MV = PQ), if the money supply (M) grows by 8% and the velocity of money (V) is constant, while real output (Q) grows by 3%, the approximate long-run inflation rate (change in P) will be:",
          choices: ['11%', '8%', '5%', '3%'],
          correct: 2,
          explanation: {
            correct: "From MV = PQ, in growth-rate terms: %ΔM + %ΔV ≈ %ΔP + %ΔQ. With V constant (%ΔV = 0): %ΔP ≈ %ΔM − %ΔQ = 8% − 3% = 5%.",
            wrong: { 0: "This results from adding money growth and output growth (8% + 3%) instead of subtracting real output growth from money growth.", 1: "This is simply the money supply growth rate, without accounting for the offsetting effect of real output (Q) growth.", 3: "This is the real output growth rate itself, mistaking it for the inflation rate rather than for the portion of money growth 'absorbed' by real growth." },
            tempting: "Choice B is tempting since M growth is the headline number in the scenario, but Q growth partially offsets its inflationary effect.",
            commonMistake: "Ignoring the role of real output (Q) growth in the quantity theory equation, and assuming inflation simply equals the money supply growth rate, rather than recognizing that only the portion of money growth NOT matched by real output growth translates into inflation (assuming constant velocity).",
            apTip: "Quantity theory equation of exchange: M × V = P × Q, so in growth-rate terms: %ΔM + %ΔV ≈ %ΔP + %ΔQ. With V constant (%ΔV = 0): %ΔP ≈ %ΔM − %ΔQ. This is also the basis for the long-run 'neutrality of money' idea — sustained money growth beyond real output growth translates into inflation, not real growth, in the long run."
          }
        }
      ]
    },
    {
      id: 5,
      name: 'Unit 5: Long-Run Consequences of Stabilization Policies',
      questions: [
        {
          id: 'macro-5-1', difficulty: 3, type: 'mcq', topic: 'Short-Run vs. Long-Run Phillips Curve',
          prompt: "In the short run, an economy experiences a trade-off between inflation and unemployment (the short-run Phillips Curve). According to most macroeconomic models, in the long run this trade-off:",
          choices: ['Remains exactly the same as in the short run', 'Disappears, as the long-run Phillips Curve is vertical at the natural rate of unemployment', 'Becomes positively sloped, meaning higher inflation is associated with higher unemployment', 'Only applies to developing economies, not advanced economies'],
          correct: 1,
          explanation: {
            correct: "As expectations adjust over time, the economy returns to the natural rate of unemployment regardless of the inflation rate, meaning the long-run Phillips Curve is drawn as a VERTICAL line at the natural rate, with no permanent inflation-unemployment trade-off.",
            wrong: { 0: "The short-run and long-run Phillips Curve relationships are explicitly DIFFERENT in mainstream macro models — the long-run curve does not simply replicate the short-run trade-off.", 2: "The long-run Phillips Curve is modeled as VERTICAL (at the natural rate), not positively sloped — there is no long-run relationship between inflation and unemployment in either direction.", 3: "The short-run/long-run Phillips Curve distinction is a general macroeconomic model, not one limited specifically to developing economies." },
            tempting: "Choice A can tempt students who haven't yet learned the specific long-run distinction and assume the short-run relationship simply continues indefinitely.",
            commonMistake: "Assuming the inflation-unemployment trade-off shown by the short-run Phillips Curve persists indefinitely, rather than understanding that in the long run, as expectations adjust, the economy returns to the natural rate of unemployment regardless of the inflation rate — making the long-run Phillips Curve vertical.",
            apTip: "Short-run Phillips Curve = downward-sloping (inflation-unemployment trade-off exists temporarily, tied to unanticipated changes in AD). Long-run Phillips Curve = VERTICAL at the natural rate of unemployment (no permanent trade-off, since expectations eventually adjust) — this mirrors the vertical LRAS curve in the AD/AS model."
          }
        },
        {
          id: 'macro-5-2', difficulty: 3, type: 'mcq', topic: 'Expansionary Monetary Policy Tools',
          prompt: "To combat a recession, the Federal Reserve conducts an open market purchase of government securities. This action will most directly:",
          choices: ['Decrease the money supply, raising interest rates and reducing investment', 'Increase the money supply, lowering interest rates and increasing investment spending', 'Have no effect on the money supply, only on the federal government\'s budget', 'Directly increase government spending on infrastructure'],
          correct: 1,
          explanation: {
            correct: "An open market purchase means the Fed buys securities, injecting reserves into the banking system. This increases the money supply, lowers interest rates, and encourages more borrowing and investment spending — a classic expansionary monetary policy action.",
            wrong: { 0: "An open market PURCHASE increases (not decreases) the money supply and LOWERS (not raises) interest rates — this describes an open market SALE instead.", 2: "Open market operations directly change the quantity of reserves in the banking system, which directly affects the money supply — it is not merely a budgetary transaction.", 3: "Open market operations are a MONETARY policy tool implemented by the Fed, not a FISCAL policy action that directly increases government spending on any specific program." },
            tempting: "Choice A might tempt a student who mixes up 'purchase' and 'sale' of securities and their opposite effects on the money supply.",
            commonMistake: "Confusing open market PURCHASES (Fed buys securities, injecting money into banks, increasing the money supply and lowering interest rates) with open market SALES (Fed sells securities, withdrawing money from banks, decreasing the money supply and raising interest rates) — these produce opposite effects and are frequently mixed up.",
            apTip: "Fed's main monetary policy tools: (1) open market operations (buying is expansionary/increases MS; selling is contractionary/decreases MS), (2) the discount rate (lowering it is expansionary), (3) the required reserve ratio (lowering it is expansionary, increasing the money multiplier) — open market operations are used most frequently in practice."
          }
        },
        {
          id: 'macro-5-3', difficulty: 5, type: 'mcq', topic: 'Long-Run Neutrality of Money',
          prompt: "If the Federal Reserve increases the money supply well beyond the rate needed to match growth in real GDP, the long-run consequence, according to the concept of monetary neutrality, is primarily:",
          choices: ['A permanent increase in real GDP and employment above the natural rate', 'A permanent decrease in the natural rate of unemployment', 'Higher inflation in the long run, with little to no lasting effect on real output or employment', 'A permanent decrease in the price level'],
          correct: 2,
          explanation: {
            correct: "The concept of monetary neutrality holds that in the long run, changes in the money supply affect only nominal variables (like the price level), not real variables (like real GDP or employment) — excess money growth beyond real output growth ultimately shows up as higher inflation, not lasting real gains.",
            wrong: { 0: "In the long run, monetary policy affects the PRICE LEVEL (nominal variables), not the economy's real productive capacity — real GDP returns to its potential level determined by real factors (labor, capital, technology), not by the money supply.", 1: "The natural rate of unemployment is determined by real, structural labor market factors (like labor market institutions and technology), not by the quantity of money in circulation.", 3: "Excessive money supply growth leads to a HIGHER price level (inflation) in the long run, not a decrease." },
            tempting: "Choice A is tempting since expansionary monetary policy does boost real output in the SHORT run, but the concept of monetary neutrality specifically describes the LONG-run outcome, in which excess money growth translates into inflation rather than a lasting increase in real output.",
            commonMistake: "Extending the SHORT-run stimulative effects of expansionary monetary policy (higher real output, lower unemployment) into the LONG run, rather than recognizing that in the long run, money is neutral — changes in the money supply affect only nominal variables (like the price level), not real variables (like real GDP or the natural rate of unemployment).",
            apTip: "Monetary neutrality: in the long run, changes in the money supply affect only NOMINAL variables (price level, nominal wages, nominal interest rates), not REAL variables (real GDP, real wages, the unemployment rate) — real output is ultimately determined by real factors like resources, capital, labor, and technology, not by how much money is in circulation."
          }
        },
        {
          id: 'macro-5-4', difficulty: 4, type: 'mcq', topic: 'Combining Fiscal and Monetary Policy',
          prompt: "Suppose the government simultaneously implements expansionary fiscal policy (increased spending) AND the central bank implements expansionary monetary policy (increased money supply). Compared to using fiscal policy alone, this combination will most likely result in:",
          choices: ['A smaller increase in real GDP, but a similar or smaller increase in interest rates due to the combined effect on the loanable funds and money markets', 'The complete elimination of any change in real GDP or interest rates', 'A larger increase in aggregate demand and real GDP, with a smaller rise (or even a decline) in interest rates compared to fiscal policy used alone', 'No effect, since fiscal and monetary policy always fully offset one another'],
          correct: 2,
          explanation: {
            correct: "When expansionary fiscal and monetary policy are combined, their effects on aggregate demand reinforce each other, amplifying the increase in real GDP; meanwhile, the Fed's monetary expansion works to offset the interest-rate increase that fiscal policy alone would cause through crowding out, resulting in a smaller rise (or even a decline) in interest rates.",
            wrong: { 0: "Combining expansionary fiscal AND monetary policy reinforces the AD increase rather than shrinking it, and the monetary expansion works to counteract the interest-rate increase that fiscal policy alone would cause (via crowding out), not simply produce a similarly sized rate change.", 1: "Combining expansionary policy this way does not eliminate the effect on GDP or interest rates — it generally amplifies the AD/GDP effect while helping offset the interest-rate/crowding-out effect.", 3: "Fiscal and monetary policy do not automatically fully offset each other; when both are expansionary in the same direction, their effects on aggregate demand tend to REINFORCE one another." },
            tempting: "Choice A can tempt students who know that crowding out exists, but combining monetary expansion with fiscal expansion specifically works AGAINST the interest-rate increase that fiscal policy alone would produce (since the Fed is directly adding to the money supply), rather than merely producing a similarly sized rate increase.",
            commonMistake: "Assuming fiscal and monetary policy tools always work against each other (or cancel out), rather than recognizing that when a central bank deliberately combines expansionary monetary policy WITH expansionary fiscal policy, the money supply increase can help offset the interest-rate-driven crowding out that fiscal policy alone would otherwise cause, amplifying the total effect on real GDP.",
            apTip: "When fiscal and monetary policy move in the SAME direction (both expansionary or both contractionary), their effects on AD/real GDP reinforce each other; a simultaneous monetary expansion can specifically help offset the crowding-out (interest rate increase) that would otherwise partially undercut expansionary fiscal policy used alone."
          }
        },
        {
          id: 'macro-5-5', difficulty: 4, type: 'mcq', topic: 'National Debt and Long-Run Growth',
          prompt: "Persistent, large government budget deficits financed by borrowing, sustained over many years, are most likely to have which long-run consequence for economic growth?",
          choices: ['Guaranteed higher long-run economic growth, since government spending always increases GDP', 'Potentially slower long-run growth, if sustained crowding out reduces private investment in capital and thus reduces future productive capacity', 'No effect whatsoever on long-run growth, since deficits only affect the short run', 'A guaranteed reduction in the natural rate of unemployment'],
          correct: 1,
          explanation: {
            correct: "If persistent deficit financing crowds out private investment over many years (through sustained higher interest rates), the economy's capital stock — and therefore its future productive capacity and growth potential — can end up smaller than it otherwise would have been.",
            wrong: { 0: "While government spending does raise AD/GDP in the short run, persistent deficit-financed borrowing carries potential long-run COSTS (via crowding out of investment) that are not captured by treating deficits as an unambiguous growth guarantee.", 2: "Sustained crowding out of private investment has REAL, LASTING implications for the economy's future capital stock and productive capacity, not just short-run demand effects.", 3: "The natural rate of unemployment is determined by structural/real labor market factors, not directly and predictably reduced by the existence of budget deficits." },
            tempting: "Choice A is tempting because it captures the short-run stimulative logic of deficit spending, without accounting for the potential long-run crowding-out costs of SUSTAINED deficits.",
            commonMistake: "Treating all deficit-financed government spending as unambiguously beneficial for growth, without considering the potential long-run trade-off: if persistent borrowing crowds out private investment in physical capital, the economy's future capital stock — and therefore its future productive capacity and growth potential — can be diminished.",
            apTip: "Distinguish short-run vs. long-run effects of deficits: in the SHORT run, deficit spending can boost AD and real GDP (especially during a recession); in the LONG run, if sustained deficits crowd out private investment (via higher interest rates in the loanable funds market), the resulting smaller capital stock can reduce the economy's future growth potential (a leftward-shifted or slower-growing LRAS)."
          }
        },
        {
          id: 'macro-5-6', difficulty: 5, type: 'mcq', topic: 'Loanable Funds Market After a Policy Shift',
          prompt: "In the loanable funds market, suppose the government moves from a budget surplus to a budget deficit, while private saving behavior remains unchanged. What happens to the equilibrium real interest rate and the quantity of loanable funds?",
          choices: ['The real interest rate falls, and the equilibrium quantity of loanable funds increases', 'The real interest rate rises, and the equilibrium quantity of loanable funds also increases (private investment is fully unaffected)', 'The real interest rate rises, as demand for loanable funds increases, while private investment (part of quantity demanded at the new higher rate) is reduced compared to what it otherwise would have been', 'There is no effect on the loanable funds market, since government budget changes do not involve borrowing or saving'],
          correct: 2,
          explanation: {
            correct: "Moving from a surplus (government as net saver) to a deficit (government as net borrower) increases demand for loanable funds, raising the equilibrium real interest rate. This higher rate discourages some private investment relative to what would have occurred at the original lower rate — the crowding-out effect — even as the total quantity of funds transacted may still rise.",
            wrong: { 0: "Moving from a surplus to a deficit means the government shifts from being a net SAVER/lender to a net BORROWER, INCREASING (not decreasing) demand for loanable funds, which raises (not lowers) the real interest rate.", 1: "While the rate does rise, private investment is NOT 'fully unaffected' — the higher interest rate specifically discourages some private investment spending that would have occurred at the previously lower rate (crowding out), even though the total quantity of funds borrowed/lent still increases overall.", 3: "Government deficits directly represent government BORROWING in the loanable funds market, meaning this scenario has a very real and direct effect on that market." },
            tempting: "Choice B is tempting because it correctly identifies that the interest rate rises, but it incorrectly claims private investment is fully unaffected — in reality, the higher equilibrium interest rate crowds out SOME private investment relative to what would have occurred at the original lower rate, even as the total quantity of loanable funds transacted increases.",
            commonMistake: "Overlooking that moving from a budget surplus to a deficit shifts the government from a SUPPLIER of loanable funds (surplus = net saving) to a DEMANDER of loanable funds (deficit = net borrowing), a shift of two full 'positions' in the market that has a correspondingly large effect on the equilibrium interest rate and represents the mechanism behind crowding out.",
            apTip: "A government budget SURPLUS effectively adds to the supply of loanable funds (government as net saver); a budget DEFICIT effectively adds to the demand for loanable funds (government as net borrower). Moving from surplus to deficit is a big swing on the demand side, raising the real interest rate and crowding out some private investment, even though the total quantity of funds loaned may still rise."
          }
        }
      ]
    },
    {
      id: 6,
      name: 'Unit 6: Open Economy — International Trade and Finance',
      questions: [
        {
          id: 'macro-6-1', difficulty: 2, type: 'mcq', topic: 'Balance of Payments',
          prompt: "A country's exports of goods and services, combined with net income earned from foreign investments, are recorded primarily in which section of the balance of payments?",
          choices: ['The capital and financial account', 'The current account', 'The reserve account only', 'None of these; exports are not recorded in the balance of payments'],
          correct: 1,
          explanation: {
            correct: "The current account records the flow of goods and services trade (exports/imports), investment income, and unilateral transfers — exactly the items described in this scenario.",
            wrong: { 0: "The capital/financial account records cross-border ownership of assets (like stocks, bonds, and direct investment), not the flow of goods, services, and investment income itself.", 2: "The reserve account is a specific, narrower component related to official foreign currency reserves, not the primary record for exports and investment income broadly.", 3: "Exports and investment income are core components explicitly recorded within the balance of payments, specifically the current account." },
            tempting: "Choice A is tempting since both accounts deal with international transactions, but the capital/financial account tracks asset OWNERSHIP flows, while the current account tracks goods/services/income FLOWS.",
            commonMistake: "Confusing the current account (goods, services, income, and transfers — flows of real economic activity) with the capital/financial account (flows of financial assets and ownership claims, like foreign purchases of domestic stocks, bonds, or real estate).",
            apTip: "Current account = goods and services trade (exports/imports), investment income, and unilateral transfers ('the flow of stuff and income'). Capital/financial account = flows of financial assets and ownership ('the flow of ownership claims') — by definition, these two accounts should roughly balance out to zero overall (a current account deficit is offset by a capital/financial account surplus, and vice versa)."
          }
        },
        {
          id: 'macro-6-2', difficulty: 3, type: 'mcq', topic: 'Foreign Exchange Market',
          prompt: "If consumers in Japan suddenly develop a much stronger preference for American-made goods, this will most directly cause, in the foreign exchange market for the U.S. dollar (priced in yen):",
          choices: ['A decrease in the demand for dollars, causing the dollar to depreciate', 'An increase in the demand for dollars, causing the dollar to appreciate relative to the yen', 'An increase in the supply of dollars, causing the dollar to depreciate', 'No change, since consumer preferences don\'t affect currency markets'],
          correct: 1,
          explanation: {
            correct: "To buy more American goods, Japanese consumers must acquire more dollars, increasing the demand for dollars in the foreign exchange market and causing the dollar to appreciate relative to the yen.",
            wrong: { 0: "Stronger demand for American goods increases (not decreases) the need for Japanese consumers to acquire dollars to buy those goods, which increases (not decreases) demand for dollars.", 2: "This scenario increases dollar DEMAND (Japanese buyers need dollars to purchase U.S. goods) — it does not directly increase the SUPPLY of dollars on the foreign exchange market.", 3: "Shifts in consumer preferences for foreign goods are a classic, direct determinant of currency demand/supply in the foreign exchange market." },
            tempting: "Choice C is tempting because a student may confuse whose currency is being demanded versus supplied in this cross-border transaction.",
            commonMistake: "Confusing which currency's demand or supply is affected by a given trade scenario — remember that to buy American goods, FOREIGN buyers must acquire and demand DOLLARS specifically, increasing dollar demand (not dollar supply) in the foreign exchange market.",
            apTip: "To determine which currency's demand shifts: identify who needs to ACQUIRE a given currency to complete the transaction. Japanese buyers wanting more U.S. goods must acquire more DOLLARS to pay for them, directly increasing DEMAND for dollars (appreciating the dollar) in the foreign exchange market."
          }
        },
        {
          id: 'macro-6-3', difficulty: 3, type: 'mcq', topic: 'Exchange Rate Appreciation and Net Exports',
          prompt: "If the U.S. dollar appreciates significantly against other major currencies, the most likely effect on U.S. net exports (exports minus imports) is:",
          choices: ['Net exports increase, since a stronger dollar makes U.S. goods cheaper for foreigners', 'Net exports decrease, since U.S. goods become more expensive for foreigners while foreign goods become cheaper for U.S. consumers', 'Net exports are unaffected by exchange rate movements', 'Only exports are affected; imports remain completely unchanged'],
          correct: 1,
          explanation: {
            correct: "Dollar appreciation makes U.S. exports more expensive for foreign buyers (reducing exports) while making foreign imports cheaper for U.S. consumers (increasing imports) — both effects reduce net exports.",
            wrong: { 0: "Dollar appreciation makes U.S. goods MORE, not less, expensive for foreign buyers holding other currencies, which tends to DECREASE, not increase, U.S. exports.", 2: "Exchange rate movements are one of the most direct and significant determinants of net exports, specifically through their effect on the relative prices of domestic vs. foreign goods.", 3: "Dollar appreciation affects BOTH sides — it makes U.S. exports more expensive for foreigners AND makes foreign imports cheaper for U.S. consumers, moving both exports down and imports up." },
            tempting: "Choice A is tempting because a 'stronger dollar' might sound intuitively positive for the U.S. economy overall, but for the specific variable of net EXPORTS, dollar strength hurts export competitiveness.",
            commonMistake: "Assuming dollar appreciation is 'good' for net exports because a 'strong' currency sounds positive, rather than recognizing that appreciation makes domestic goods relatively MORE expensive to foreign buyers (reducing exports) while making foreign goods relatively CHEAPER for domestic buyers (increasing imports) — both effects reduce net exports.",
            apTip: "Dollar appreciation → U.S. exports become more expensive abroad (exports fall) AND foreign imports become cheaper at home (imports rise) → net exports FALL, and this shifts U.S. AD LEFT. Dollar depreciation has the opposite effect on both exports/imports and shifts AD RIGHT."
          }
        },
        {
          id: 'macro-6-4', difficulty: 4, type: 'mcq', topic: 'Real Interest Rate Parity and Capital Flows',
          prompt: "If the United States raises real interest rates relative to other countries (holding other factors constant), the most likely effect is:",
          choices: ['Financial capital flows out of the United States, and the dollar depreciates', 'Financial capital flows into the United States seeking higher returns, and the dollar appreciates as foreign investors demand more dollars to invest', 'No change in capital flows, since interest rates don\'t affect international investment decisions', 'The dollar depreciates, since higher interest rates discourage all forms of investment'],
          correct: 1,
          explanation: {
            correct: "Higher relative U.S. real interest rates make U.S. financial assets more attractive to foreign investors, drawing financial capital into the United States; as foreign investors demand more dollars to make these investments, the dollar appreciates.",
            wrong: { 0: "Higher relative U.S. real interest rates make U.S. financial assets MORE attractive to foreign investors, drawing capital IN (not causing an outflow) and appreciating (not depreciating) the dollar.", 2: "Relative real interest rate differences across countries are one of the most significant drivers of international financial capital flows, as investors seek the highest available risk-adjusted returns.", 3: "Higher U.S. interest rates specifically attract MORE foreign financial investment into U.S. assets (like bonds), APPRECIATING the dollar as foreign investors demand dollars to make those investments — it does not broadly discourage all investment or cause depreciation." },
            tempting: "Choice A reverses the correct direction — higher relative U.S. interest rates make U.S. assets MORE attractive to foreign savers/investors, so capital flows IN, not out, appreciating rather than depreciating the dollar.",
            commonMistake: "Reversing the direction of capital flows relative to interest rate changes — remember that HIGHER relative interest rates in a country ATTRACT foreign financial capital seeking better returns (capital inflow), which increases demand for that country's currency and causes it to APPRECIATE.",
            apTip: "Real interest rate parity concept: countries offering relatively HIGHER real interest rates attract foreign financial capital inflows (investors chasing better returns), increasing demand for that country's currency and causing it to APPRECIATE — this connects the loanable funds/money market analysis to the foreign exchange market."
          }
        },
        {
          id: 'macro-6-5', difficulty: 4, type: 'mcq', topic: 'Terms of Trade',
          prompt: "Country X has an opportunity cost of 2 units of cloth per unit of wheat, while Country Y has an opportunity cost of 4 units of cloth per unit of wheat. For trade in wheat to be mutually beneficial to both countries, the agreed terms of trade (units of cloth per unit of wheat) must fall:",
          choices: ['Below 2 units of cloth per unit of wheat', 'Between 2 and 4 units of cloth per unit of wheat', 'Above 4 units of cloth per unit of wheat', 'Exactly at 3 units of cloth per unit of wheat, and no other value will work'],
          correct: 1,
          explanation: {
            correct: "For trade to benefit both countries, the terms of trade must fall strictly between the two countries' opportunity costs of wheat (2 and 4 units of cloth), giving each country a better deal than producing the good domestically on its own.",
            wrong: { 0: "A terms-of-trade price below Country X's own opportunity cost (2) would make trading wheat WORSE than not trading for Country X itself, since it could produce cloth more cheaply on its own than trading at that rate implies.", 2: "A terms-of-trade price above Country Y's own opportunity cost (4) would make trading wheat WORSE than not trading for Country Y, since Country Y could get wheat 'cheaper' (in cloth terms) by not trading at that rate.", 3: "While 3 does fall within the mutually beneficial range, it is not the ONLY workable value — any price strictly between the two countries' opportunity costs (2 and 4) creates mutual benefit, not just this single specific number." },
            tempting: "Choice D is tempting since 3 IS a valid terms-of-trade price, but the question asks for the necessary RANGE of terms of trade for mutual benefit, and any value strictly between 2 and 4 (not just exactly 3) works.",
            commonMistake: "Picking a single specific numeric terms-of-trade value instead of correctly identifying the full RANGE of mutually beneficial prices, which is any point strictly between the two countries' respective opportunity costs for the good being traded.",
            apTip: "For trade in a good to benefit BOTH countries, the terms of trade must fall strictly BETWEEN the two countries' opportunity costs for that good — this way, each country gets the good at a 'price' better than what it would cost them to produce it themselves domestically."
          }
        },
        {
          id: 'macro-6-6', difficulty: 3, type: 'mcq', topic: 'Exchange Rates and Aggregate Demand',
          prompt: "If the U.S. dollar depreciates against major foreign currencies, the most likely effect on U.S. aggregate demand (AD) is:",
          choices: ['AD shifts left, since net exports fall as the dollar weakens', 'AD shifts right, as net exports rise since U.S. goods become relatively cheaper for foreign buyers', 'AD is unaffected, since exchange rates only influence the financial account, not AD', 'AD shifts right, but only because of increased government spending caused by the depreciation'],
          correct: 1,
          explanation: {
            correct: "Dollar depreciation makes U.S. goods cheaper for foreign buyers and foreign goods more expensive for U.S. buyers, raising net exports (NX). Since NX is a component of AD (= C + I + G + NX), this increase in net exports shifts AD to the right.",
            wrong: { 0: "Dollar DEPRECIATION makes U.S. goods CHEAPER for foreign buyers, which tends to INCREASE, not decrease, net exports and shift AD RIGHT, not left.", 2: "Exchange rate changes directly affect net exports (a component of AD = C + I + G + NX), meaning they DO influence AD, not just financial capital flows.", 3: "The AD increase in this scenario comes specifically through the net export (NX) channel of rising exports/falling imports, not through any change in government spending, which isn't mentioned in this scenario." },
            tempting: "Choice A reverses the direction of the effect — a common trap when students mix up which direction (appreciation vs. depreciation) helps versus hurts net exports.",
            commonMistake: "Reversing the effects of currency appreciation and depreciation on net exports — remember: depreciation (a WEAKER dollar) makes exports cheaper abroad and imports more expensive at home, RAISING net exports and shifting AD right; appreciation (a STRONGER dollar) does the opposite.",
            apTip: "Dollar depreciates → U.S. exports cheaper for foreigners (exports rise) and foreign imports more expensive for Americans (imports fall) → net exports (NX) rise → AD shifts RIGHT. This is the exchange-rate channel connecting the foreign exchange market directly to the AD/AS model."
          }
        }
      ]
    }
  ],
  frqs: [
    {
      id: 'macro-frq-1', difficulty: 3, unit: 1,
      prompt: "A country can produce, using all its resources, either 60 units of Good A or 30 units of Good B (a straight-line PPC).\n\n(a) Calculate the opportunity cost of producing 1 unit of Good A in terms of Good B.\n(b) Explain what a point outside this country's PPC represents.\n(c) Explain one factor that could cause the entire PPC to shift outward.",
      rubricPoints: [
        "Correctly calculates the opportunity cost of 1 unit of Good A as 0.5 units of Good B (30/60) (1 pt)",
        "Explains that a point outside the PPC represents a combination of output that is currently unattainable given the country's existing resources and technology (1 pt)",
        "Identifies a valid factor that shifts the PPC outward, such as an increase in resources, an improvement in technology, or an increase in the labor force, with brief explanation (1 pt)"
      ],
      sampleResponse: "(a) The opportunity cost of producing 1 unit of Good A is 30 ÷ 60 = 0.5 units of Good B, since giving up the ability to produce all 30 units of Good B allows the country to produce all 60 units of Good A instead, meaning each additional unit of A costs 0.5 units of forgone B.\n(b) A point outside this PPC represents a combination of Good A and Good B that the country cannot currently produce, given its existing quantity of resources and current level of technology — it is only attainable if the economy's productive capacity increases.\n(c) An improvement in technology (for example, a more efficient production process for either good) could shift the entire PPC outward, since it would allow the country to produce more of both goods using the same quantity of resources as before."
    },
    {
      id: 'macro-frq-2', difficulty: 3, unit: 1,
      prompt: "The market for coffee is initially in equilibrium. Frost damages a large portion of the coffee crop, significantly reducing the available supply of coffee beans.\n\n(a) Using the supply-and-demand model, explain what happens to the equilibrium price and quantity of coffee.\n(b) Explain how this event would affect the market for tea, a substitute for coffee.",
      rubricPoints: [
        "Explains that supply shifts left (decreases) due to the frost damage (1 pt)",
        "Explains that this leftward supply shift raises the equilibrium price and lowers the equilibrium quantity of coffee (1 pt)",
        "Explains that the demand for tea (a substitute) increases/shifts right as coffee becomes more expensive, raising tea's price and quantity (1 pt)"
      ],
      sampleResponse: "(a) The frost damage destroys part of the coffee crop, reducing the quantity of coffee beans available at every price, which shifts the supply curve for coffee to the LEFT. This leftward shift in supply raises the equilibrium price of coffee and lowers the equilibrium quantity sold, since coffee has become scarcer relative to demand.\n(b) Because tea is a substitute for coffee, the rise in coffee's price causes some consumers to switch to tea instead, increasing (shifting right) the demand curve for tea; this rightward shift in tea demand raises both the equilibrium price and equilibrium quantity of tea."
    },
    {
      id: 'macro-frq-3', difficulty: 3, unit: 2,
      prompt: "Real GDP fell for two consecutive quarters, and the unemployment rate rose from 4% to 7% over the same period.\n\n(a) Identify the type of unemployment most directly associated with this specific increase.\n(b) Explain why this type of unemployment rises during this kind of economic period.\n(c) Explain one government policy that could be used to address this specific increase in unemployment.",
      rubricPoints: [
        "Identifies cyclical unemployment as the type most directly associated with the described increase (1 pt)",
        "Explains that cyclical unemployment rises because a falling real GDP/economic downturn reduces the overall demand for labor across the economy (1 pt)",
        "Identifies and briefly explains a valid government policy response, such as expansionary fiscal policy (increased government spending/lower taxes) or expansionary monetary policy (lower interest rates via increased money supply) (1 pt)"
      ],
      sampleResponse: "(a) This increase in unemployment is most directly associated with cyclical unemployment.\n(b) Cyclical unemployment rises during periods of falling real GDP because, as overall economic output and business activity decline, firms across many industries reduce their demand for labor (through layoffs and hiring freezes), leaving more workers unemployed simply because of the broader downturn in economic activity, rather than any change in their individual skills or the industry structure.\n(c) The government could respond with expansionary fiscal policy, such as increasing government spending or cutting taxes, both of which increase aggregate demand and can stimulate firms to hire more workers, helping to reduce cyclical unemployment."
    },
    {
      id: 'macro-frq-4', difficulty: 2, unit: 2,
      prompt: "Explain the difference between nominal GDP and real GDP, AND explain why real GDP is generally considered a more accurate measure of an economy's actual output over time.",
      rubricPoints: [
        "Explains that nominal GDP measures output using CURRENT year prices, while real GDP measures output using CONSTANT (base year) prices (1 pt)",
        "Explains that real GDP adjusts for changes in the price level (inflation), isolating the change in the actual physical quantity of goods and services produced (1 pt)",
        "Explains that this makes real GDP more accurate for comparing output/living standards across time, since nominal GDP changes can be misleadingly driven by inflation rather than actual increases in production (1 pt)"
      ],
      sampleResponse: "Nominal GDP measures the total value of all final goods and services produced in a given year using that year's CURRENT prices, while real GDP measures the same output using prices from a fixed BASE year, holding prices constant. Because real GDP holds prices constant, changes in real GDP over time reflect only changes in the actual physical QUANTITY of goods and services produced, rather than changes caused simply by rising prices. This makes real GDP a more accurate measure of an economy's true output and living standards over time, since nominal GDP could show growth purely due to inflation even if the actual quantity of goods and services produced stayed the same or fell."
    },
    {
      id: 'macro-frq-5', difficulty: 4, unit: 3,
      prompt: "An economy is currently producing at a real GDP level below its full-employment (potential) level of output, creating a recessionary gap.\n\n(a) Describe what would happen in the AD/AS model if the government uses expansionary fiscal policy to close this gap.\n(b) Explain one way this policy could be at least partially offset by the crowding-out effect.",
      rubricPoints: [
        "Explains that expansionary fiscal policy (increased government spending and/or lower taxes) shifts AD to the right, raising both the price level and real GDP toward the full-employment level (1 pt)",
        "Explains the crowding-out effect: government borrowing to finance the spending increase raises interest rates in the loanable funds market (1 pt)",
        "Explains that these higher interest rates reduce private investment spending, partially offsetting the intended increase in AD/real GDP from the fiscal policy (1 pt)"
      ],
      sampleResponse: "(a) Expansionary fiscal policy, such as increased government spending or decreased taxes, shifts the aggregate demand (AD) curve to the RIGHT. This shift raises both the equilibrium price level and equilibrium real GDP, moving the economy from below full-employment output closer to (or to) its full-employment (potential) level of output.\n(b) If this expansionary fiscal policy is financed by government borrowing, it increases the government's demand for loanable funds, which raises the equilibrium real interest rate in the loanable funds market. This higher interest rate makes borrowing more expensive for private firms, reducing private investment spending — a crowding-out effect that offsets part of the intended rightward shift in AD, meaning the actual increase in real GDP is somewhat smaller than it would be without this offsetting effect."
    },
    {
      id: 'macro-frq-6', difficulty: 4, unit: 3,
      prompt: "Explain how the spending multiplier works, using a numerical example where the marginal propensity to consume (MPC) is 0.8 and initial government spending increases by $50 billion. Calculate the resulting total change in real GDP.",
      rubricPoints: [
        "Correctly calculates the spending multiplier as 1/(1-0.8) = 5 (1 pt)",
        "Correctly calculates the total change in real GDP as 5 × $50 billion = $250 billion (1 pt)",
        "Explains the underlying mechanism: each round of new spending becomes new income, a portion of which (determined by MPC) is re-spent, creating additional rounds of spending that amplify the initial injection (1 pt)"
      ],
      sampleResponse: "The spending multiplier is calculated as 1 ÷ (1 − MPC). With an MPC of 0.8, the multiplier is 1 ÷ (1 − 0.8) = 1 ÷ 0.2 = 5. Applying this to the initial $50 billion increase in government spending: total change in real GDP = 5 × $50 billion = $250 billion. This occurs because the initial $50 billion in government spending becomes $50 billion in new income for the people and firms who receive it; those recipients then spend 80% of that new income (per the MPC of 0.8) on additional goods and services, which becomes income for yet another group of people, who in turn spend 80% of that income, and so on — this repeated cycle of respending causes the total change in real GDP to be several times larger than the initial spending injection."
    },
    {
      id: 'macro-frq-7', difficulty: 2, unit: 4,
      prompt: "Explain the three core functions of money, briefly describing each with an example.",
      rubricPoints: [
        "Explains medium of exchange (money is accepted in exchange for goods/services) with an example (1 pt)",
        "Explains unit of account (money is used to measure/compare the value of goods and services) with an example (1 pt)",
        "Explains store of value (money holds its purchasing power over time, allowing it to be saved) with an example (1 pt)"
      ],
      sampleResponse: "Money serves as a medium of exchange, meaning it is widely accepted as payment for goods and services — for example, using cash or a debit card to buy groceries. Money also serves as a unit of account, meaning it provides a common measure for comparing the value of very different goods, such as pricing both a house and a sandwich in dollar terms so their relative values can be compared. Finally, money serves as a store of value, meaning it can be saved and retain (most of) its purchasing power to be used for purchases in the future, such as keeping savings in a bank account to be spent later, rather than spending all income immediately."
    },
    {
      id: 'macro-frq-8', difficulty: 4, unit: 4,
      prompt: "The required reserve ratio is 25%. A bank receives a new checkable deposit of $8,000.\n\n(a) Calculate the required reserves on this deposit.\n(b) Calculate the maximum amount this single bank can initially lend out from this new deposit.\n(c) Calculate the maximum total change in the money supply for the entire banking system that could result from this initial deposit.",
      rubricPoints: [
        "Correctly calculates required reserves as 25% × $8,000 = $2,000 (1 pt)",
        "Correctly calculates the maximum initial loan amount as $8,000 − $2,000 = $6,000 (1 pt)",
        "Correctly calculates the maximum total money supply change using the money multiplier (1/0.25 = 4) × $8,000 = $32,000 (1 pt)"
      ],
      sampleResponse: "(a) Required reserves = 25% × $8,000 = $2,000.\n(b) The bank must hold $2,000 in required reserves, leaving $8,000 − $2,000 = $6,000 in excess reserves available to lend out initially.\n(c) The money multiplier is 1 ÷ required reserve ratio = 1 ÷ 0.25 = 4. Applying this to the full initial deposit: maximum total change in the money supply = 4 × $8,000 = $32,000, assuming banks throughout the system lend out all of their excess reserves and the funds are continually redeposited into the banking system."
    },
    {
      id: 'macro-frq-9', difficulty: 4, unit: 5,
      prompt: "Explain the difference between the short-run and long-run Phillips Curve, AND explain what causes the economy to move from a point on the short-run Phillips Curve back to the long-run Phillips Curve over time.",
      rubricPoints: [
        "Explains that the short-run Phillips Curve shows a trade-off (downward-sloping relationship) between inflation and unemployment (1 pt)",
        "Explains that the long-run Phillips Curve is vertical at the natural rate of unemployment, showing no permanent trade-off (1 pt)",
        "Explains that adjustments in expectations (e.g., wages/prices adjusting to actual inflation over time) move the economy back toward the natural rate in the long run (1 pt)"
      ],
      sampleResponse: "The short-run Phillips Curve is downward-sloping, showing a temporary trade-off in which lower unemployment is associated with higher inflation (and vice versa), often resulting from unanticipated changes in aggregate demand. The long-run Phillips Curve, by contrast, is VERTICAL at the economy's natural rate of unemployment, reflecting the idea that there is no permanent trade-off between inflation and unemployment once expectations have fully adjusted. The economy moves from a point on the short-run curve back to the long-run curve as workers and firms adjust their expectations to match the new, actual inflation rate over time (for example, negotiating higher nominal wages to keep pace with rising prices); once expectations catch up, unemployment returns to the natural rate, regardless of the now higher inflation rate."
    },
    {
      id: 'macro-frq-10', difficulty: 4, unit: 5,
      prompt: "Explain ONE monetary policy tool the Federal Reserve could use to combat high inflation, AND explain the chain of effects (transmission mechanism) by which this tool would be expected to reduce inflation.",
      rubricPoints: [
        "Identifies a valid contractionary monetary policy tool, such as an open market sale of securities, raising the discount rate, or raising the required reserve ratio (1 pt)",
        "Explains the immediate effect: this tool decreases the money supply and/or raises the interest rate (1 pt)",
        "Explains the transmission mechanism to lower inflation: higher interest rates reduce investment/consumption spending, decreasing AD, which lowers the price level/inflation (with some reduction in real GDP) (1 pt)"
      ],
      sampleResponse: "The Federal Reserve could conduct an open market SALE of government securities to combat high inflation. Selling securities withdraws reserves from the banking system, decreasing the money supply and raising the nominal (and real) interest rate. This higher interest rate makes borrowing more expensive, which reduces interest-sensitive spending — particularly business investment and consumer spending on big-ticket, credit-financed items — decreasing aggregate demand. As AD shifts left, the equilibrium price level falls (or its growth rate slows), reducing inflation, though this comes at the cost of somewhat lower real GDP and higher unemployment in the short run."
    },
    {
      id: 'macro-frq-11', difficulty: 3, unit: 6,
      prompt: "Country M has an opportunity cost of 3 units of Good Y per unit of Good X. Country N has an opportunity cost of 5 units of Good Y per unit of Good X.\n\n(a) Identify which country has the comparative advantage in producing Good X.\n(b) Explain why specialization and trade based on comparative advantage can make both countries better off.\n(c) Identify a terms-of-trade price (units of Good Y per unit of Good X) that would benefit both countries.",
      rubricPoints: [
        "Correctly identifies Country M as having the comparative advantage in Good X, since it has the lower opportunity cost (3 vs. 5) (1 pt)",
        "Explains that specialization according to comparative advantage allows total combined output/consumption to increase, since resources are used where they are relatively most efficient, creating gains from trade for both countries (1 pt)",
        "Identifies any valid terms-of-trade price strictly between 3 and 5 units of Good Y per unit of Good X (e.g., 4) (1 pt)"
      ],
      sampleResponse: "(a) Country M has the comparative advantage in producing Good X, since its opportunity cost of 3 units of Good Y per unit of Good X is lower than Country N's opportunity cost of 5 units of Good Y per unit of Good X.\n(b) When each country specializes in producing the good for which it has the lower opportunity cost (comparative advantage) and then trades, total combined production of both goods increases compared to if each country tried to produce both goods on its own; this allows both countries to consume combinations of goods beyond what their own individual production possibilities curves would allow, making both better off.\n(c) A terms-of-trade price of 4 units of Good Y per unit of Good X (or any value strictly between 3 and 5) would benefit both countries, since it lets each country obtain Good X (or Good Y) at a more favorable rate than their own individual opportunity cost of producing it domestically."
    },
    {
      id: 'macro-frq-12', difficulty: 4, unit: 6,
      prompt: "The U.S. dollar depreciates significantly relative to the euro.\n\n(a) Explain the effect of this depreciation on U.S. net exports.\n(b) Using the AD/AS model, explain the effect of this change in net exports on the U.S. price level and real GDP in the short run.",
      rubricPoints: [
        "Explains that dollar depreciation makes U.S. exports relatively cheaper for foreign (European) buyers and imports relatively more expensive for U.S. buyers, increasing net exports (1 pt)",
        "Explains that this increase in net exports shifts the U.S. aggregate demand (AD) curve to the right (1 pt)",
        "Explains that this rightward AD shift raises both the U.S. price level and real GDP in the short run (1 pt)"
      ],
      sampleResponse: "(a) When the dollar depreciates relative to the euro, U.S. goods become relatively CHEAPER for European buyers holding euros, while European goods become relatively MORE EXPENSIVE for U.S. buyers holding dollars; as a result, U.S. exports tend to rise and U.S. imports tend to fall, increasing net exports (exports minus imports).\n(b) Since net exports (NX) are a component of aggregate demand (AD = C + I + G + NX), this increase in net exports shifts the AD curve to the RIGHT. In the short run, this rightward shift in AD raises both the equilibrium price level (more inflation) and the equilibrium level of real GDP, moving the economy along the upward-sloping short-run aggregate supply (SRAS) curve to a higher output level."
    }
  ]
}
