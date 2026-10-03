// AP Human Geography — real College Board unit numbers/names used for
// authenticity. All 7 units covered with a starter question set; more
// questions can be added to each unit the same way as other subjects.

export const humanGeo = {
  id: 'human-geo',
  name: 'AP Human Geography',
  icon: '🗺️',
  accent: 'moss',
  units: [
    {
      id: 1,
      name: 'Unit 1: Thinking Geographically',
      questions: [
        {
          id: 'hg-1-1', difficulty: 1, type: 'mcq', topic: 'Map Projections',
          prompt: "A map that preserves accurate angles and shapes but severely distorts the relative size of landmasses near the poles (making Greenland appear larger than Africa, despite Africa being about 14 times larger) is using which projection?",
          choices: ['Robinson projection', 'Mercator projection', 'Goode homolosine projection', 'Azimuthal equidistant projection'],
          correct: 1,
          explanation: {
            correct: "The Mercator projection preserves angles and shape (making it useful for navigation, since straight lines represent constant compass bearings), but it does so at the cost of dramatically distorting area, especially near the poles, since it stretches lines of latitude to remain parallel and perpendicular to longitude lines.",
            wrong: { 0: "The Robinson projection is a compromise projection that balances shape, area, and distance distortion rather than heavily favoring shape preservation, so it doesn't produce the extreme polar-area distortion described.", 2: "The Goode homolosine projection is an equal-area projection specifically designed to minimize area distortion (often shown 'interrupted' with gaps in the oceans), so it would not make Greenland appear larger than Africa.", 3: "An azimuthal equidistant projection preserves accurate distances and directions from a single central point, not overall shape, and is typically centered on one point (like the North Pole) rather than producing this classic Mercator-style area distortion." },
            tempting: "Choice A is tempting since the Robinson projection is also a common 'default' world map style, but it's specifically built as a compromise that reduces the extreme polar distortion the question describes, distinguishing it from the Mercator.",
            commonMistake: "Assuming any commonly-seen world map (like the classic rectangular grid) must be a Mercator projection, without checking whether it's actually a compromise projection like Robinson that intentionally reduces area distortion.",
            apTip: "Remember the classic projection trade-off: Mercator = true shape/angle, false area (great for navigation, bad for comparing country sizes); equal-area projections like Goode homolosine = true area, distorted shape; compromise projections like Robinson = moderate distortion in both."
          }
        },
        {
          id: 'hg-1-2', difficulty: 2, type: 'mcq', topic: 'Spatial Relationships — Distance Decay',
          prompt: "A city's newspaper subscription rate drops off sharply as distance from the city center increases, with very few subscribers beyond 50 miles. This pattern best illustrates:",
          choices: ['Absolute distance', 'Distance decay', 'Spatial diffusion', 'Complementarity'],
          correct: 1,
          explanation: {
            correct: "Distance decay describes how the interaction, influence, or intensity of a spatial phenomenon (here, newspaper subscriptions) diminishes as distance from its source increases, which matches the sharp drop-off described.",
            wrong: { 0: "Absolute distance is simply a measurement of physical space (e.g., in miles or kilometers) between two locations, not a description of how interaction changes as that distance grows.", 2: "Spatial diffusion refers to the spread of a phenomenon, idea, or innovation outward from its origin over time, not specifically the weakening of interaction as distance increases.", 3: "Complementarity refers to a relationship in which one place has a surplus of something another place demands, encouraging exchange between them — it doesn't describe the distance-based drop-off pattern itself." },
            tempting: "Choice C is tempting since diffusion also involves spread from a central point, but diffusion describes the process of spreading over space/time, while distance decay specifically describes the weakening of interaction as distance grows.",
            commonMistake: "Confusing distance decay (interaction weakens with distance) with diffusion (a phenomenon spreads outward), which are related but distinct spatial concepts frequently tested together.",
            apTip: "When a question describes something 'dropping off' or 'weakening' the farther you get from a point, that's the signature of distance decay — look for language like 'sharply decreases,' 'few beyond X distance,' or 'strongest near the source.'"
          }
        },
        {
          id: 'hg-1-3', difficulty: 2, type: 'mcq', topic: 'Types of Diffusion',
          prompt: "A new farming technique spreads because migrating farmers physically relocate to a new region and bring the technique with them, rather than the idea simply spreading through communication without anyone moving. This is best described as:",
          choices: ['Contagious diffusion', 'Hierarchical diffusion', 'Relocation diffusion', 'Stimulus diffusion'],
          correct: 2,
          explanation: {
            correct: "Relocation diffusion occurs when the people carrying an idea, practice, or innovation physically move to a new location, bringing the trait with them — exactly the case of migrating farmers bringing their farming technique to a new region.",
            wrong: { 0: "Contagious diffusion spreads rapidly through direct contact across a population without requiring physical relocation of an origin group, more like a phenomenon spreading person-to-person outward from a source.", 1: "Hierarchical diffusion spreads from larger, more influential places or people down to smaller or less influential ones (e.g., a trend spreading from major cities to smaller towns), not through physical migration of the originators.", 3: "Stimulus diffusion occurs when the underlying idea itself spreads and inspires a new, adapted practice elsewhere, even though the exact original practice does not transfer intact — it doesn't require the originators to move." },
            tempting: "Choice A is tempting because both contagious diffusion and relocation diffusion can 'spread' a practice through people, but only relocation diffusion specifically requires that the carriers physically move to a new place.",
            commonMistake: "Overlooking the physical migration detail in a scenario and defaulting to contagious diffusion whenever people are involved in spreading something, rather than checking whether relocation (permanent movement) is specifically described.",
            apTip: "The key trigger phrase for relocation diffusion is migration or physical movement of people to a new location — if the scenario mentions people moving and bringing a trait with them, it's relocation diffusion, not contagious or hierarchical."
          }
        },
        {
          id: 'hg-1-4', difficulty: 3, type: 'mcq', topic: 'Formal vs. Functional Regions',
          prompt: "The area served by a single metropolitan newspaper's home-delivery zone, defined by the practical reach of its delivery trucks and organized around the newspaper's central printing location, is an example of a:",
          choices: ['Formal region', 'Functional region', 'Perceptual (vernacular) region', 'Physiographic region'],
          correct: 1,
          explanation: {
            correct: "A functional region is organized around a focal point or node (here, the newspaper's central printing/distribution hub) and defined by the interactions or connections extending outward from it, such as a delivery zone.",
            wrong: { 0: "A formal region is defined by a shared, measurable characteristic (such as a common language, climate type, or political boundary) that is relatively uniform throughout, not by a functional connection to a central node.", 2: "A perceptual (vernacular) region is defined by people's subjective, informal sense of a place's identity (like 'the South' or 'the Midwest'), not by a formally organized delivery or service network.", 3: "A physiographic region is defined by shared physical/natural landscape features, such as landforms or climate, which is unrelated to a business's organized service area." },
            tempting: "Choice A is tempting since delivery zones can feel like a defined, bounded area similar to a formal region, but the key distinguishing factor is that a functional region is organized AROUND a central node with connections radiating outward, not simply sharing a uniform trait.",
            commonMistake: "Treating any region with a clear boundary as automatically 'formal,' without checking whether it's actually structured around a central point of interaction (functional) rather than a shared uniform characteristic (formal).",
            apTip: "Ask: is this region defined by a shared trait everywhere within it (formal), by connections/interactions radiating from a central node (functional), or by people's subjective sense of identity (perceptual)? Delivery zones, commuting zones, and cell phone coverage areas are classic functional regions."
          }
        },
        {
          id: 'hg-1-5', difficulty: 3, type: 'mcq', topic: 'GIS and Geospatial Technologies',
          prompt: "An urban planner overlays separate digital layers showing population density, flood zones, and existing road networks to decide where a new hospital should be built. This process most directly relies on:",
          choices: ['Global Positioning System (GPS)', 'Geographic Information Systems (GIS)', 'Remote sensing', 'A choropleth map'],
          correct: 1,
          explanation: {
            correct: "GIS is a computer-based system designed specifically to capture, store, and layer multiple types of spatial data (like density, flood zones, and roads) so they can be analyzed together, which is exactly the layered overlay process described.",
            wrong: { 0: "GPS is a satellite-based system used to determine precise locations and navigate, but it doesn't itself provide the layered data-analysis and overlay capability described in the scenario.", 2: "Remote sensing refers to collecting data about the Earth's surface from a distance (such as via satellites or aircraft), which can be one INPUT into a GIS, but the overlay/analysis process itself is the GIS function.", 3: "A choropleth map is a single type of thematic map that uses shading/color to represent a data value across regions — it's an output format, not the underlying system used to layer and analyze multiple datasets together." },
            tempting: "Choice C is tempting since remote sensing data (like satellite flood imagery) might feed into this analysis, but remote sensing is a data-collection method, while GIS is the system that combines and analyzes multiple data layers together.",
            commonMistake: "Confusing GIS (an analytical system that layers and combines spatial data) with GPS (a location/navigation tool) or remote sensing (a data-collection method), even though all three are related geospatial technologies.",
            apTip: "Remember: GPS tells you WHERE something is, remote sensing COLLECTS data from a distance (often via satellite), and GIS LAYERS and ANALYZES multiple spatial datasets together — 'overlay,' 'layers,' and 'spatial analysis' are the giveaway words for GIS specifically."
          }
        },
        {
          id: 'hg-1-6', difficulty: 4, type: 'mcq', topic: 'Scale and the Modifiable Areal Unit Problem',
          prompt: "A researcher analyzing the same set of household income data finds a strong statistical pattern when the data is aggregated by census tract, but the pattern weakens considerably when the same underlying data is instead aggregated by larger zip-code boundaries. This is best explained by:",
          choices: ['Distance decay', 'The modifiable areal unit problem (MAUP)', 'Site versus situation', 'Absolute versus relative location'],
          correct: 1,
          explanation: {
            correct: "The modifiable areal unit problem describes how statistical results can change significantly depending on how spatial data is grouped into different-sized or differently-shaped areal units, which is exactly what's happening as the same data shifts between census-tract and zip-code aggregation.",
            wrong: { 0: "Distance decay describes weakening interaction over increasing distance, not the effect of choosing different-sized units to aggregate the same underlying data.", 2: "Site versus situation is a distinction about a place's internal physical characteristics (site) versus its location relative to other places (situation), unrelated to how statistical boundaries affect aggregated results.", 3: "Absolute versus relative location distinguishes a fixed coordinate location from a location described relative to other places, which doesn't address why aggregation scale changes a statistical pattern." },
            tempting: "None of the distractors closely match this specific scale-dependent statistical effect, but students unfamiliar with MAUP sometimes default to 'scale' in a vague sense without naming the specific, testable phenomenon.",
            commonMistake: "Recognizing that scale affects the data but not knowing the specific AP term (MAUP) for how the choice of areal unit boundaries can change statistical outcomes derived from the same underlying data.",
            apTip: "MAUP is a favorite higher-difficulty AP Human Geo concept: whenever a question describes the SAME data producing DIFFERENT statistical patterns at different scales of aggregation (tract vs. zip code vs. county), that's the MAUP signature — memorize the term precisely."
          }
        }
      ]
    },
    {
      id: 2,
      name: 'Unit 2: Population and Migration Patterns and Processes',
      questions: [
        {
          id: 'hg-2-1', difficulty: 1, type: 'mcq', topic: 'Demographic Transition Model',
          prompt: "A country with high birth rates, high death rates, and very slow overall population growth is best described as being in which stage of the Demographic Transition Model (DTM)?",
          choices: ['Stage 1', 'Stage 2', 'Stage 4', 'Stage 5'],
          correct: 0,
          explanation: {
            correct: "Stage 1 of the DTM is characterized by both high birth rates AND high death rates, which roughly balance each other out, resulting in slow or stagnant overall population growth — historically the condition of nearly all human societies before modern medicine and sanitation.",
            wrong: { 1: "Stage 2 features high birth rates but RAPIDLY FALLING death rates (due to improved sanitation/medicine), producing rapid population growth, not the slow growth described in the scenario.", 2: "Stage 4 features both low birth rates and low death rates, again producing slow growth, but for very different reasons (modernization/development) than the high-birth/high-death balance of Stage 1.", 3: "Stage 5, sometimes added to the model, features birth rates falling BELOW death rates, leading to population decline, not the balanced high-high scenario described." },
            tempting: "Choice C is tempting since both Stage 1 and Stage 4 have slow growth, but the underlying cause differs entirely: Stage 1 is high birth AND high death rates, while Stage 4 is low birth AND low death rates.",
            commonMistake: "Assuming 'slow population growth' always means a developed, Stage 4 country, without checking whether birth AND death rates are described as high (Stage 1) or low (Stage 4) — the growth rate alone doesn't tell you the stage.",
            apTip: "Always check BOTH birth rate and death rate levels, not just the resulting growth rate, to correctly identify a DTM stage — Stage 1 and Stage 4 can both show slow growth, but for opposite underlying reasons."
          }
        },
        {
          id: 'hg-2-2', difficulty: 2, type: 'mcq', topic: 'Population Pyramids',
          prompt: "A population pyramid with a very wide base that narrows sharply moving upward most directly indicates:",
          choices: ['A high proportion of elderly residents', 'A high birth rate and a young population structure', 'A country experiencing net out-migration only', 'Gender parity across all age groups'],
          correct: 1,
          explanation: {
            correct: "A wide base on a population pyramid represents a large number of young children being born, and a sharp narrowing moving upward reflects both a high birth rate and (often) higher mortality at older ages, together indicating a young, rapidly-growing population structure.",
            wrong: { 0: "A high proportion of elderly residents would instead be shown by a wider TOP of the pyramid relative to the base, the opposite pattern of what's described.", 2: "Net migration patterns aren't the primary driver of the wide-base shape; birth rate and age structure are, and migration typically shows up as specific notches at certain age groups rather than an overall wide base.", 3: "Gender parity would be reflected in symmetric left/right proportions at each age level, which isn't what a wide base versus narrow top describes — that shape reflects age structure, not gender balance." },
            tempting: "Choice A can tempt students who reverse the pyramid's visual logic — remember, the WIDER portion is the more populous age group, so a wide BASE means many young people, not many elderly people.",
            commonMistake: "Reversing which part of the pyramid (base vs. top) corresponds to young versus elderly populations, especially under time pressure.",
            apTip: "Picture the pyramid shape literally: a true 'pyramid' shape (wide base, narrow top) = young, fast-growing population (often Stage 2 DTM); a more rectangular/column shape = older, slow-growing population (often Stage 4)."
          }
        },
        {
          id: 'hg-2-3', difficulty: 2, type: 'mcq', topic: 'Push and Pull Factors',
          prompt: "A family leaves their home region due to prolonged drought and crop failure, while also being drawn to a specific destination city because relatives there can help them find housing and jobs. The drought is best classified as a _____ factor, and the relatives' assistance is best classified as a _____ factor.",
          choices: ['pull; push', 'push; pull', 'intervening obstacle; push', 'pull; intervening obstacle'],
          correct: 1,
          explanation: {
            correct: "A push factor is a negative condition (like drought and crop failure) that drives people AWAY from their origin, while a pull factor is a positive condition (like family support and job opportunities) that attracts people TO a specific destination — matching the drought as push and relatives' help as pull.",
            wrong: { 0: "This reverses the definitions: drought pushes people away (push factor), it doesn't pull them anywhere, and family support pulls them toward a destination, it doesn't push them away from their origin.", 2: "An intervening obstacle is a barrier that makes migration more difficult (like a border, a mountain range, or cost), not a positive condition attracting migrants to a destination like family assistance.", 3: "The drought is correctly classified as a negative origin condition (push, not pull), and while family assistance is indeed a pull factor, it is not an intervening obstacle (a barrier), so this pairing is only half correct." },
            tempting: "Choice A is a common reversal error, since 'push' and 'pull' can sound interchangeable if the direction of the effect (away from vs. toward) isn't carefully tracked.",
            commonMistake: "Mixing up push and pull factors, or confusing an intervening obstacle (a barrier during the journey, like distance, cost, or a border) with a pull factor (a positive draw at the destination).",
            apTip: "Push = negative conditions at the ORIGIN that drive people away; pull = positive conditions at the DESTINATION that attract people; intervening obstacles = barriers encountered DURING the move itself (cost, distance, legal barriers) — keep these three categories distinct."
          }
        },
        {
          id: 'hg-2-4', difficulty: 3, type: 'mcq', topic: "Ravenstein's Laws of Migration",
          prompt: "According to Ravenstein's laws of migration, which statement best reflects an established general pattern?",
          choices: ['Most long-distance migrants move directly to remote rural areas rather than urban centers', 'Most migrants move only short distances, and long-distance migrants tend to prefer large cities and centers of commerce', 'Migration flows are always perfectly balanced by an equal counterflow in the opposite direction', 'Rural-to-urban migration primarily occurs among the elderly population'],
          correct: 1,
          explanation: {
            correct: "One of Ravenstein's core laws states that most migrants move only a short distance, while those who do migrate long distances tend to move toward major cities and centers of commerce/industry, reflecting economic opportunity as a major pull factor.",
            wrong: { 0: "Ravenstein's laws suggest the opposite: long-distance migrants gravitate toward large urban/commercial centers rather than remote rural areas.", 2: "While Ravenstein noted that migration does produce some counterflows, he did not claim these counterflows are always perfectly equal in volume to the original flow.", 3: "Ravenstein's laws associate rural-to-urban migration more with young adults seeking economic opportunity, not primarily the elderly population." },
            tempting: "Choice C might tempt students who recall that Ravenstein discussed counterflows accompanying major migration flows, but the law describes a general TENDENCY toward some counterflow, not a claim of exact numerical balance.",
            commonMistake: "Overstating Ravenstein's observations as absolute, exact rules (like 'always perfectly balanced') rather than general tendencies about typical migration patterns.",
            apTip: "Ravenstein's laws are testable as general PATTERNS/TENDENCIES (most migrants move short distances; long-distance migrants prefer urban centers; migration produces some counterflow; young adults are more likely to migrate) rather than as absolute rules — watch for answer choices using words like 'always' or 'only,' which often signal an overstated distractor."
          }
        },
        {
          id: 'hg-2-5', difficulty: 3, type: 'mcq', topic: 'Refugees vs. Internally Displaced Persons',
          prompt: "A group of people flees armed conflict in their home country and crosses an international border into a neighboring country to seek safety. Under international law, this group is most accurately classified as:",
          choices: ['Internally displaced persons (IDPs)', 'Refugees', 'Economic migrants', 'Guest workers'],
          correct: 1,
          explanation: {
            correct: "Refugees are specifically people who flee their home country and cross an INTERNATIONAL BORDER due to a well-founded fear of persecution, war, or violence, matching the scenario of crossing into a neighboring country to escape conflict.",
            wrong: { 0: "Internally displaced persons (IDPs) are forced to flee their homes for similar reasons (conflict, persecution, disaster) but remain WITHIN their own country's borders, unlike this group which crosses an international border.", 2: "Economic migrants relocate primarily to seek better economic opportunities, not primarily to escape violence or persecution, which doesn't match the conflict-driven scenario described.", 3: "Guest workers are migrants who move (often temporarily) specifically for employment purposes under a formal labor arrangement, not people fleeing armed conflict." },
            tempting: "Choice A is the most common confusion, since both IDPs and refugees are forced to flee for similar reasons — the key distinguishing factor is strictly whether an INTERNATIONAL border was crossed (refugee) or not (IDP).",
            commonMistake: "Using 'refugee' and 'IDP' interchangeably, without checking the crucial detail of whether an international border was actually crossed during the displacement.",
            apTip: "The single most important test-taking distinction: refugee = crossed an INTERNATIONAL border to flee persecution/violence; IDP = forced to flee but stayed WITHIN their home country's borders. Always look for that border-crossing detail in the scenario."
          }
        },
        {
          id: 'hg-2-6', difficulty: 4, type: 'mcq', topic: 'Population Policies — Expansive vs. Restrictive',
          prompt: "A government offers generous parental leave, direct cash payments per child, and subsidized childcare specifically to encourage citizens to have more children. This best exemplifies:",
          choices: ['A restrictive population policy', 'An expansive (pro-natalist) population policy', 'An eugenic population policy', 'A policy targeting international migration rates'],
          correct: 1,
          explanation: {
            correct: "An expansive (pro-natalist) population policy is specifically designed to increase birth rates through incentives such as parental leave, cash payments per child, and subsidized childcare, exactly as described.",
            wrong: { 0: "A restrictive population policy aims to LIMIT population growth (such as China's former one-child policy), the opposite goal of the incentives described here, which are designed to increase births.", 2: "A eugenic population policy specifically aims to influence the genetic or hereditary composition of a population (often through discriminatory or coercive means targeting specific groups), not simply to raise the overall birth rate broadly through incentives.", 3: "This scenario targets domestic birth rates directly through family incentives, not international migration flows, so it isn't primarily a migration-focused policy." },
            tempting: "Choice C can tempt students since eugenic policies sometimes historically overlapped with population control efforts, but the described policy is broadly pro-natalist (encouraging births for all citizens) rather than specifically selective/discriminatory in a eugenic sense.",
            commonMistake: "Confusing broadly pro-natalist policies (encouraging births generally through incentives) with narrower, discriminatory eugenic policies (targeting specific groups' reproduction), which are a distinct and more troubling category.",
            apTip: "Expansive/pro-natalist = encourages MORE births (incentives like cash-per-child, parental leave); restrictive = limits births (fines, access restrictions, one-child-style rules) — match the direction of the incentive (more vs. fewer children) to classify the policy correctly."
          }
        }
      ]
    },
    {
      id: 3,
      name: 'Unit 3: Cultural Patterns and Processes',
      questions: [
        {
          id: 'hg-3-1', difficulty: 1, type: 'mcq', topic: 'Culture Traits, Complexes, Regions, and Landscapes',
          prompt: "A specific single practice, such as using chopsticks to eat, is best classified as a:",
          choices: ['Culture complex', 'Culture trait', 'Culture region', 'Cultural landscape'],
          correct: 1,
          explanation: {
            correct: "A culture trait is a single, individual characteristic or practice of a culture, such as a specific food custom (using chopsticks), a specific style of dress, or a specific religious practice.",
            wrong: { 0: "A culture complex is a combination of MULTIPLE related culture traits functioning together (for example, all the customs and traits associated with a particular cuisine or dining tradition as a whole), not just one single practice.", 2: "A culture region is the geographic area over which a particular set of cultural traits or characteristics is dominant or shared, a spatial concept rather than a single practice itself.", 3: "A cultural landscape refers to the visible, human-modified imprint of a culture on the physical environment (like building styles or land-use patterns), not a single practice like chopstick use." },
            tempting: "Choice A is tempting since a trait can be part of a larger complex, but the question describes just ONE single practice, which is the definition of a trait, not the broader combination that makes up a complex.",
            commonMistake: "Confusing a single trait with the broader complex it belongs to — remember, multiple related traits combine to form a culture complex.",
            apTip: "Think of it as a hierarchy: individual trait (using chopsticks) → culture complex (the full set of customs around East Asian cuisine) → culture region (the geographic area where that cuisine and its customs are dominant)."
          }
        },
        {
          id: 'hg-3-2', difficulty: 2, type: 'mcq', topic: 'Ethnic vs. Universalizing Religions',
          prompt: "A religion that actively seeks converts across the entire world regardless of ethnicity, nationality, or location is best classified as a:",
          choices: ['Ethnic religion', 'Universalizing religion', 'Animistic religion', 'Syncretic religion'],
          correct: 1,
          explanation: {
            correct: "A universalizing religion actively seeks to appeal to and convert people everywhere, regardless of their specific ethnic background or location, which matches Christianity, Islam, and Buddhism, among others.",
            wrong: { 0: "An ethnic religion is typically closely tied to a specific ethnic group, culture, or place of origin and generally does NOT actively seek converts outside that group (such as Judaism or Hinduism, in their traditional forms).", 2: "Animistic religions specifically believe that natural objects or phenomena possess spirits or souls; while some animistic religions are ethnic in nature, the term itself describes a belief system, not the universal-conversion-seeking trait described.", 3: "A syncretic religion blends elements from multiple different religious traditions into a new combined belief system, which isn't specifically defined by actively seeking worldwide converts." },
            tempting: "Choice A can tempt students who know religions are often tied to specific cultural origins, but the KEY distinguishing factor tested here is whether the religion actively seeks converts everywhere (universalizing) or remains closely tied to one group (ethnic).",
            commonMistake: "Assuming any widely-practiced religion must automatically be universalizing, without checking whether it specifically seeks converts outside its original ethnic or cultural group.",
            apTip: "The defining test: does the religion actively seek converts everywhere, regardless of ethnicity (universalizing — Christianity, Islam, Buddhism), or is it tied to a specific ethnic group and doesn't typically seek outside converts (ethnic — Judaism, Hinduism)?"
          }
        },
        {
          id: 'hg-3-3', difficulty: 2, type: 'mcq', topic: 'Language Families and Language Diffusion',
          prompt: "The wide geographic spread of Indo-European languages across Europe, Iran, and South Asia is most often explained by geographers using which combination of diffusion processes?",
          choices: ['Only contagious diffusion, with no relocation involved', 'Relocation diffusion (migration of speakers) combined with subsequent contagious diffusion among neighboring populations', 'Only hierarchical diffusion, spreading from major world cities', 'Only stimulus diffusion, since the exact original language did not spread'],
          correct: 1,
          explanation: {
            correct: "Geographers generally explain the vast, ancient spread of the Indo-European language family through relocation diffusion — migrating groups physically carrying the language to new regions over centuries — often followed by more localized contagious diffusion as it spread among neighboring populations already settled in an area.",
            wrong: { 0: "Explaining the language family's spread as ONLY contagious diffusion ignores the crucial role that large-scale historical migrations (relocation diffusion) played in initially carrying speakers vast distances.", 2: "Hierarchical diffusion (spreading from large, influential places downward) doesn't match the ancient, migration-driven mechanism generally used to explain Indo-European language spread, which predates the modern urban hierarchy concept.", 3: "Stimulus diffusion applies when only the underlying IDEA (not the exact original form) diffuses and inspires something new elsewhere; the Indo-European language family's spread involved actual language transmission through migrating and interacting populations, not just an inspired reinvention." },
            tempting: "Choice A is tempting since contagious diffusion likely did play a role in more localized spread, but it can't fully explain the spread across such vast geographic distances without the initial large-scale migrations (relocation diffusion).",
            commonMistake: "Picking only ONE diffusion type when a real historical/geographic process (like Indo-European language spread) often involves a COMBINATION of diffusion types operating at different times and scales.",
            apTip: "For big, historically complex geographic patterns (like a major language family's spread), consider whether multiple diffusion types worked together across different phases, rather than assuming a single, simple diffusion process explains the entire pattern."
          }
        },
        {
          id: 'hg-3-4', difficulty: 3, type: 'mcq', topic: 'Ethnic Enclaves and Ethnic Neighborhoods',
          prompt: "A large city contains a distinct neighborhood where residents of a particular ethnic background have voluntarily clustered together, maintaining shared cultural institutions, businesses, and community ties. This is best described as an example of:",
          choices: ['Forced segregation', 'An ethnic enclave', 'A ghetto', 'Gerrymandering'],
          correct: 1,
          explanation: {
            correct: "An ethnic enclave is a neighborhood where members of a particular ethnic group voluntarily concentrate, often to maintain cultural ties, support networks, businesses, and institutions relevant to their shared background.",
            wrong: { 0: "Forced segregation implies the clustering was imposed by external legal or social coercion rather than the voluntary clustering described in the scenario.", 2: "The AP Human Geography use of 'ghetto' typically refers to an area where a group is forced to live due to discrimination or economic constraints, distinct from the voluntary clustering that defines an enclave.", 3: "Gerrymandering refers to the manipulation of political district boundaries for electoral advantage, entirely unrelated to voluntary ethnic residential clustering." },
            tempting: "Choice C is tempting because both enclaves and ghettos involve ethnic residential concentration, but the key distinguishing factor tested on the AP exam is whether the clustering is voluntary (enclave) or the result of discriminatory constraint (ghetto).",
            commonMistake: "Using 'enclave' and 'ghetto' interchangeably, without noting the AP-specific distinction based on whether the clustering is voluntary or externally forced.",
            apTip: "AP Human Geography specifically tests the voluntary-versus-forced distinction: enclave = voluntary ethnic clustering; ghetto (as typically used in this course) = clustering resulting from discriminatory or economic forces limiting where a group can live."
          }
        },
        {
          id: 'hg-3-5', difficulty: 3, type: 'mcq', topic: 'Sequent Occupance',
          prompt: "A city block that historically housed a Native American settlement, was later built up as a 19th-century industrial district, and now serves as a neighborhood of trendy apartment lofts converted from old factory buildings illustrates the geographic concept of:",
          choices: ['Cultural relativism', 'Sequent occupance', 'Environmental determinism', 'Possibilism'],
          correct: 1,
          explanation: {
            correct: "Sequent occupance refers to the successive layers of settlement and land use left by different groups and eras at the same location over time, exactly as illustrated by the shifting Native American, industrial, and now residential/loft uses of the same city block.",
            wrong: { 0: "Cultural relativism refers to evaluating a culture by its own internal standards rather than by another culture's standards, which is an ethical/evaluative concept, not one about layered land use over time.", 2: "Environmental determinism is the (now largely rejected) idea that the physical environment directly determines human cultural development, unrelated to the layered historical land-use pattern described.", 3: "Possibilism is the view that the environment sets certain constraints but humans have agency to adapt and choose among possible responses — a different concept from the specific idea of successive land-use layers at one location." },
            tempting: "None of the other choices closely resemble this specific spatial-historical concept, but students unfamiliar with the term 'sequent occupance' sometimes default to a more commonly-known term like environmental determinism out of unfamiliarity.",
            commonMistake: "Not recognizing the specific vocabulary term 'sequent occupance' for the layered, successive-use-over-time pattern, since it's a less frequently emphasized but real AP Human Geography term.",
            apTip: "Whenever a question describes MULTIPLE different groups or uses occupying the SAME physical location across different historical time periods, layered like archaeological strata, that's the signature of sequent occupance."
          }
        },
        {
          id: 'hg-3-6', difficulty: 4, type: 'mcq', topic: 'Cultural Landscape and Placelessness',
          prompt: "A traveler notices that the strip malls, chain restaurants, and gas station layouts near a highway exit look virtually identical whether they are in Ohio, Texas, or Oregon, lacking any distinctive regional character. This phenomenon is best described using the concept of:",
          choices: ['Cultural relativism', 'Placelessness', 'Sequent occupance', 'A vernacular region'],
          correct: 1,
          explanation: {
            correct: "Placelessness describes the loss of distinctive, unique regional character in the landscape due to globalization and standardized commercial development, such as identical chain stores and strip malls appearing across many different regions.",
            wrong: { 0: "Cultural relativism is an ethical stance about judging cultures by their own standards, unrelated to the visual standardization of commercial landscapes across different regions.", 2: "Sequent occupance describes successive layers of DIFFERENT land uses at the SAME location over time, not the homogenization of landscapes ACROSS different locations at the same time.", 3: "A vernacular region is a place defined by people's informal, subjective sense of identity (like 'the Rust Belt'), which is unrelated to a landscape losing distinctiveness due to standardized commercial development." },
            tempting: "Choice C can tempt students confusing 'multiple layers over time' (sequent occupance) with 'sameness across different places at once' (placelessness) — these both involve the idea of landscape change but describe very different patterns.",
            commonMistake: "Mixing up placelessness (landscapes across DIFFERENT places becoming similar to each other) with sequent occupance (the SAME place changing use over time), since both are 'landscape over time/space' concepts easily conflated under time pressure.",
            apTip: "Placelessness is specifically the AP term for globalization's tendency to make commercial/built landscapes in different regions look interchangeable — watch for scenario language like 'looks the same everywhere' or 'chain stores identical across regions.'"
          }
        }
      ]
    },
    {
      id: 4,
      name: 'Unit 4: Political Patterns and Processes',
      questions: [
        {
          id: 'hg-4-1', difficulty: 1, type: 'mcq', topic: 'State, Nation, and Nation-State',
          prompt: "A politically organized territory with a permanent population, defined boundaries, and a government that has sovereignty (recognized by other such entities) is best defined as a:",
          choices: ['Nation', 'State', 'Nation-state', 'Stateless nation'],
          correct: 1,
          explanation: {
            correct: "A state, in the political-geography sense, is precisely a politically organized territory with a permanent population, defined boundaries, and sovereign government recognized by other states — the formal political-legal unit.",
            wrong: { 0: "A nation refers to a group of people sharing a common culture, history, language, or identity, and does NOT necessarily require formal sovereignty or defined political boundaries.", 2: "A nation-state is a specific case where a state's boundaries closely align with a single, dominant nation's cultural identity — a more specific combined concept than just the basic definition of a state.", 3: "A stateless nation refers to a cultural nation that lacks its own sovereign state/formal political territory (such as the Kurds), the opposite of having sovereignty and defined boundaries." },
            tempting: "Choice A is the classic confusion in this unit, since 'nation' and 'state' are used almost interchangeably in everyday English, but AP Human Geography tests a precise distinction between the two.",
            commonMistake: "Using 'nation' and 'state' interchangeably in everyday speech, without recognizing the AP-specific precise distinction: nation = cultural/ethnic identity group; state = sovereign political-territorial unit.",
            apTip: "Memorize this core distinction cold: state = political/legal entity with sovereignty and borders; nation = cultural/ethnic group with shared identity; nation-state = a state whose borders closely match a single nation's territory."
          }
        },
        {
          id: 'hg-4-2', difficulty: 2, type: 'mcq', topic: 'Unitary vs. Federal Government Systems',
          prompt: "A country in which most political power is concentrated in a single, central national government, with regional or local governments (if they exist) holding only limited powers granted by that central authority, uses a:",
          choices: ['Federal system', 'Unitary system', 'Confederation', 'Supranational organization'],
          correct: 1,
          explanation: {
            correct: "A unitary government system concentrates most political power at the central/national level, with any regional or local governments possessing only limited authority delegated by that central government.",
            wrong: { 0: "A federal system instead divides significant power between a central government and regional/state governments, each holding meaningful independent authority, the opposite of concentrated central power.", 2: "A confederation is a loose alliance of largely independent states/units that voluntarily cooperate on limited matters, with the CENTRAL authority actually being relatively weak compared to the individual member units.", 3: "A supranational organization involves multiple independent countries voluntarily giving up some sovereignty to a shared international body (like the EU), a different scale of governance than a single country's internal power structure." },
            tempting: "Choice C is tempting since both unitary systems and confederations involve a central authority, but in a unitary system the CENTRAL government is powerful and regions are weak, while in a confederation the central authority is comparatively WEAK and member units are powerful.",
            commonMistake: "Reversing where power is concentrated in unitary versus federal versus confederal systems, since all three involve some combination of central and regional authority but distribute power very differently.",
            apTip: "Think of it as a spectrum of central power: unitary (strong center, weak regions) → federal (power meaningfully shared/divided) → confederation (weak center, strong independent member units)."
          }
        },
        {
          id: 'hg-4-3', difficulty: 2, type: 'mcq', topic: 'Types of Boundaries',
          prompt: "A political boundary that follows a river's course, dividing two countries along that natural feature, is best classified as a:",
          choices: ['Geometric boundary', 'Physical (natural) boundary', 'Relic boundary', 'Superimposed boundary'],
          correct: 1,
          explanation: {
            correct: "A physical (natural) boundary follows a distinctive natural landscape feature, such as a river, mountain range, or other clear physical landmark, exactly as described with the river-following boundary.",
            wrong: { 0: "A geometric boundary is drawn using straight lines or arcs, often following lines of latitude/longitude, without regard to natural features — the opposite of following a river's course.", 2: "A relic boundary is a former boundary that no longer functions as an active political border but still leaves a visible cultural or landscape trace (such as remnants of the former Berlin Wall route), not a currently active river-based border.", 3: "A superimposed boundary is one drawn by an outside/colonial power onto a region without regard to existing cultural or ethnic patterns on the ground, a different concept than simply following a natural river feature." },
            tempting: "Choice A is tempting because both geometric and physical boundaries are common boundary types, but a geometric boundary specifically ignores natural features in favor of straight lines, the opposite of a river-following boundary.",
            commonMistake: "Confusing physical/natural boundaries (following rivers, mountains) with geometric boundaries (following straight lines/coordinates), since both are 'objective' in the sense of not being based on culture.",
            apTip: "Physical/natural boundary = follows a landscape feature (river, mountain ridge); geometric boundary = follows a straight line or arc (often latitude/longitude); memorize real-world examples of each (e.g., the Rio Grande as physical; the 49th parallel as geometric)."
          }
        },
        {
          id: 'hg-4-4', difficulty: 3, type: 'mcq', topic: 'Devolution',
          prompt: "Over several decades, a national government gradually transfers increasing amounts of political power and autonomy to a distinct region within the country that has a strong separate cultural and linguistic identity. This process is best described as:",
          choices: ['Devolution', 'Balkanization', 'Annexation', 'Irredentism'],
          correct: 0,
          explanation: {
            correct: "Devolution is the process by which a central government grants increasing political power and autonomy to regional or local governments, often in response to that region's distinct cultural, ethnic, or historical identity.",
            wrong: { 1: "Balkanization refers to a country or region fragmenting into smaller, often hostile, independent states, a more extreme and complete breakup than a gradual, ongoing transfer of autonomy within a still-unified country.", 2: "Annexation refers to one state formally incorporating (often forcibly) territory that previously belonged to another state or was independent, essentially the opposite direction of granting a region MORE autonomy.", 3: "Irredentism refers to a movement or policy aimed at reclaiming and reuniting territory that is considered historically or ethnically part of one's nation but currently lies within another state's borders, unrelated to internal power transfer." },
            tempting: "Choice B is tempting since both devolution and Balkanization involve regions gaining distinctiveness/independence from a central authority, but Balkanization specifically implies full fragmentation into separate states, while devolution keeps the region within the original country but with more autonomy.",
            commonMistake: "Confusing devolution (granting MORE autonomy while remaining part of the same country) with Balkanization (complete fragmentation into separate independent states), which represent very different degrees of political change.",
            apTip: "Devolution = power flows DOWN from central government to a region, but the region stays part of the country (e.g., Scotland within the UK); Balkanization = the country actually BREAKS APART into multiple separate states."
          }
        },
        {
          id: 'hg-4-5', difficulty: 3, type: 'mcq', topic: 'Supranationalism',
          prompt: "Several independent European countries voluntarily agree to give up a degree of individual sovereignty by joining a shared organization that sets common trade policies, a shared currency for some members, and unified regulations. This best illustrates:",
          choices: ['Devolution', 'Supranationalism', 'A unitary state', 'Irredentism'],
          correct: 1,
          explanation: {
            correct: "Supranationalism occurs when multiple independent countries voluntarily join together into an organization and give up some degree of individual sovereignty in exchange for shared benefits, such as common trade policy or a shared currency — exactly matching an EU-style arrangement.",
            wrong: { 0: "Devolution involves power transferring WITHIN a single country from its central government to internal regions, not multiple independent countries pooling sovereignty together into a shared organization.", 2: "A unitary state describes the internal power structure of a SINGLE country (centralized power), not a voluntary arrangement joining MULTIPLE separate sovereign countries together.", 3: "Irredentism refers to a movement to reclaim territory considered historically/ethnically part of one's nation from another state, unrelated to voluntarily pooling sovereignty in a shared multinational organization." },
            tempting: "None of the distractors closely resemble supranationalism, but students sometimes confuse any 'countries working together' scenario with devolution simply because both involve shifts in the level at which power is held.",
            commonMistake: "Confusing supranationalism (multiple independent countries voluntarily sharing sovereignty) with devolution (power shifting between levels WITHIN one country), since both involve non-standard distributions of political power.",
            apTip: "Supranationalism = MULTIPLE separate, sovereign countries voluntarily giving up some individual sovereignty to a shared larger organization (EU, UN, NATO); this operates at a scale ABOVE individual states, unlike devolution, which operates WITHIN a single state."
          }
        },
        {
          id: 'hg-4-6', difficulty: 4, type: 'mcq', topic: 'Gerrymandering',
          prompt: "A state legislature redraws congressional district boundaries into unusually shaped districts specifically designed to concentrate opposition-party voters into as few districts as possible, maximizing the number of districts the majority party is likely to win. This practice is known as:",
          choices: ['Devolution', 'Gerrymandering', 'Redistricting reform', 'Apportionment'],
          correct: 1,
          explanation: {
            correct: "Gerrymandering is the deliberate manipulation of electoral district boundaries — often producing oddly-shaped districts — to benefit a particular political party or group, exactly as described with concentrating opposition voters into as few districts as possible.",
            wrong: { 0: "Devolution refers to the transfer of political power/autonomy to regional governments, an entirely different process than manipulating electoral district shapes for partisan advantage.", 2: "Redistricting reform refers to EFFORTS TO REDUCE partisan manipulation of district boundaries (such as using independent, nonpartisan commissions), essentially the opposite intent of gerrymandering.", 3: "Apportionment refers to the process of allocating a fixed number of legislative seats among different areas based on population (such as how many U.S. House seats each state receives), a related but distinct process from drawing the specific district boundary shapes." },
            tempting: "Choice D is tempting because apportionment and gerrymandering are both part of the redistricting process and often discussed together, but apportionment is about HOW MANY seats a region gets, while gerrymandering is about HOW the district boundary LINES are drawn.",
            commonMistake: "Confusing apportionment (allocating the NUMBER of seats to a region based on population) with gerrymandering (drawing the specific district BOUNDARIES for partisan advantage), which are related but distinct steps in the redistricting process.",
            apTip: "Two common gerrymandering techniques to know by name: 'packing' (cramming opposition voters into few districts, as in this scenario) and 'cracking' (spreading opposition voters thinly across many districts so they can't win a majority anywhere)."
          }
        }
      ]
    },
    {
      id: 5,
      name: 'Unit 5: Agriculture and Rural Land-Use Patterns and Processes',
      questions: [
        {
          id: 'hg-5-1', difficulty: 1, type: 'mcq', topic: 'First and Second Agricultural Revolutions',
          prompt: "The historical shift from hunting and gathering to the deliberate domestication of plants and animals for food production is known as the:",
          choices: ['Second Agricultural Revolution', 'First Agricultural Revolution (Neolithic Revolution)', 'Green Revolution', 'Industrial Revolution'],
          correct: 1,
          explanation: {
            correct: "The First Agricultural Revolution, also called the Neolithic Revolution, refers to the ancient historical transition from hunting/gathering lifestyles to deliberately domesticating plants and animals for food production.",
            wrong: { 0: "The Second Agricultural Revolution refers to the later, more mechanized and technologically-driven improvements in farming (linked to the broader Industrial Revolution era), not the original shift away from hunting/gathering.", 2: "The Green Revolution refers to a mid-20th-century wave of agricultural technology (high-yield seed varieties, fertilizers, irrigation) that dramatically increased food production, a much later and distinct development.", 3: "The Industrial Revolution refers broadly to the shift toward mechanized manufacturing and factory production starting in the 18th century, related to but distinct from the specific agricultural domestication shift described." },
            tempting: "Choice A is tempting since students may not clearly distinguish the numbered agricultural revolutions, but the FIRST one specifically refers to the very earliest shift to domestication, while the SECOND refers to much later mechanization improvements.",
            commonMistake: "Mixing up the numbered order of agricultural revolutions (First = ancient domestication; Second = later mechanization tied to Industrial Revolution; Green Revolution = 20th-century high-yield technology).",
            apTip: "Keep a clear timeline in mind: First Agricultural Revolution (Neolithic, ~10,000 years ago, domestication) → Second Agricultural Revolution (mechanization, alongside Industrial Revolution) → Green Revolution (mid-1900s, high-yield seeds/fertilizer/irrigation)."
          }
        },
        {
          id: 'hg-5-2', difficulty: 2, type: 'mcq', topic: "Von Thünen's Model",
          prompt: "According to Von Thünen's model of agricultural land use, which type of land use is typically located CLOSEST to the central market, assuming a uniform, featureless plain?",
          choices: ['Ranching/livestock grazing', 'Dairying and market gardening (perishable, intensive products)', 'Grain farming for export', 'Forest for fuel and building materials'],
          correct: 1,
          explanation: {
            correct: "Von Thünen's model places dairying and market gardening (producing perishable goods like milk, fruits, and vegetables that spoil quickly or are costly/difficult to transport) closest to the central market, since transportation costs and the need for freshness make proximity essential.",
            wrong: { 0: "Ranching/livestock grazing is placed farthest from the market in Von Thünen's model, since livestock can transport themselves over longer distances (walking to market) and land closer in is too valuable/costly for extensive grazing.", 2: "Grain farming is placed at an intermediate distance in the model — grain is less perishable than dairy/produce but still requires meaningful transport, so it sits further out than dairying but closer in than distant ranching.", 3: "In Von Thünen's original model, forest for fuel and building materials was actually placed relatively close to the market (historically, wood was heavy, bulky, and important for daily fuel/construction needs), but forestry is still positioned farther out than the most perishable dairy/garden products." },
            tempting: "Choice D can be tricky since forest is placed closer in than farmers might initially expect (due to historical fuelwood transport difficulty), but it still sits farther from the market center than the innermost dairying/market gardening ring.",
            commonMistake: "Assuming distance from market is based only on 'how valuable' a good is, rather than specifically on transportation cost/perishability relative to the good's value — perishability and bulk relative to price are the driving factors in Von Thünen's model.",
            apTip: "Memorize the classic Von Thünen ring order from the market outward: (1) dairying/market gardening (perishable/intensive), (2) forest (historically, for fuel/building), (3) grain farming, (4) ranching/livestock (farthest, since animals can walk to market)."
          }
        },
        {
          id: 'hg-5-3', difficulty: 2, type: 'mcq', topic: 'Subsistence vs. Commercial Agriculture',
          prompt: "A farming family grows just enough rice and vegetables to feed themselves and their immediate community, with very little surplus sold or traded beyond local needs. This is best described as:",
          choices: ['Commercial agriculture', 'Subsistence agriculture', 'Agribusiness', 'Plantation agriculture'],
          correct: 1,
          explanation: {
            correct: "Subsistence agriculture is farming primarily to meet the immediate food needs of the farming family or local community, with little intended for sale or export beyond local consumption — matching the described scenario exactly.",
            wrong: { 0: "Commercial agriculture is specifically oriented toward producing crops or livestock FOR SALE in a broader market, generating profit, the opposite emphasis of growing food primarily for one's own family/community.", 2: "Agribusiness refers to large-scale, highly mechanized, often corporate-run commercial farming operations, a very different scale and purpose than the small-scale, self-sufficient farming described.", 3: "Plantation agriculture involves large-scale commercial farming of a single cash crop (like coffee, sugar, or cotton), typically for export, which contradicts the local self-sufficiency focus described." },
            tempting: "None of the distractors closely match subsistence farming's defining trait, but 'commercial agriculture' can tempt students who forget that the KEY distinction is the INTENDED PURPOSE of the output (self-sufficiency vs. sale for profit), not simply the crop grown.",
            commonMistake: "Focusing on WHAT crop is grown rather than WHY it's grown (for the farmer's own consumption vs. for sale/profit), which is the actual distinguishing factor between subsistence and commercial agriculture.",
            apTip: "The core test: is the output primarily consumed by the producers themselves/local community (subsistence) or primarily sold for profit in a broader market (commercial)? This purpose-based distinction matters more than farm size or specific crop type."
          }
        },
        {
          id: 'hg-5-4', difficulty: 3, type: 'mcq', topic: 'The Green Revolution',
          prompt: "Which of the following was a well-documented consequence of the Green Revolution's introduction of high-yield seed varieties, synthetic fertilizers, and irrigation technology in the mid-20th century?",
          choices: ['A significant decrease in total global food production', 'Increased crop yields, but also increased dependence on expensive inputs that disadvantaged smaller, poorer farmers', 'The complete elimination of world hunger', 'A shift away from any use of chemical fertilizers'],
          correct: 1,
          explanation: {
            correct: "The Green Revolution substantially increased crop yields through high-yield seed varieties, fertilizers, and irrigation, but it also required significant capital investment in these inputs, which often disadvantaged smaller or poorer farmers who couldn't afford them as easily as larger, wealthier operations.",
            wrong: { 0: "The Green Revolution is well-documented to have substantially INCREASED total food production and yields, not decreased them.", 2: "While the Green Revolution significantly reduced hunger and famine risk in many regions, it did not completely eliminate world hunger, which remains an ongoing global issue.", 3: "The Green Revolution actually significantly INCREASED reliance on synthetic chemical fertilizers as a core input, rather than moving away from their use." },
            tempting: "Choice C is tempting since the Green Revolution is often praised for dramatically reducing famine risk, but 'completely eliminating world hunger' overstates its actual, still-incomplete impact.",
            commonMistake: "Treating the Green Revolution as an unambiguously perfect solution (eliminating hunger entirely) rather than recognizing its real, documented trade-offs, including increased input costs disadvantaging smaller farmers and environmental concerns.",
            apTip: "For FRQs on the Green Revolution, always be ready to discuss BOTH benefits (increased yields, reduced famine risk in many regions) AND costs/trade-offs (increased dependence on costly inputs, disadvantages for smaller farmers, environmental concerns like fertilizer runoff) for a complete, balanced answer."
          }
        },
        {
          id: 'hg-5-5', difficulty: 3, type: 'mcq', topic: 'Land Survey Systems',
          prompt: "An aerial photograph of a rural U.S. Midwest landscape shows farmland divided into a clear rectangular, gridlike pattern of square-mile sections. This survey pattern most likely reflects the:",
          choices: ['Metes and bounds survey system', 'Long-lot survey system', 'Township-and-range survey system', 'Cadastral survey based on ethnic boundaries'],
          correct: 2,
          explanation: {
            correct: "The township-and-range survey system, used across much of the U.S. Midwest and West, divides land into a clear rectangular grid of square-mile sections, producing exactly the gridlike aerial pattern described.",
            wrong: { 0: "The metes and bounds system uses irregular natural landmarks and boundary descriptions (like 'from the old oak tree to the creek bend'), typically producing irregular, non-gridlike shapes rather than a clean rectangular grid.", 1: "The long-lot system divides land into narrow strips typically perpendicular to a river or road (common in French colonial areas like Quebec or Louisiana), producing long narrow parcels rather than square grid sections.", 3: "'Cadastral survey' is a general term for land ownership/boundary surveys, but this option isn't a real recognized specific system based on ethnic boundaries in AP Human Geography." },
            tempting: "Choice A is tempting since metes and bounds is also a historic U.S. survey method, but it produces IRREGULAR boundaries following natural landmarks, the opposite of the clean rectangular grid pattern described.",
            commonMistake: "Confusing the three major historic North American land survey systems — remember their distinctive visual signatures: metes and bounds = irregular; long-lot = narrow strips; township-and-range = clean rectangular grid.",
            apTip: "Learn to recognize these three land division patterns by their AERIAL SHAPE: metes and bounds = irregular/organic shapes following natural features; long-lot = narrow rectangular strips perpendicular to a river/road; township-and-range = clean square-mile grid sections."
          }
        },
        {
          id: 'hg-5-6', difficulty: 4, type: 'mcq', topic: 'Agricultural Location and Globalization', 
          prompt: "A large multinational corporation now sources fresh berries from farms in the Southern Hemisphere specifically during the Northern Hemisphere's winter, allowing grocery stores in the north to sell 'fresh' berries year-round rather than only in their traditional local growing season. This practice best illustrates:",
          choices: ['Subsistence agriculture', "Von Thünen's original model working exactly as originally described", 'Globalization and the ability of transportation/refrigeration advances to overcome traditional spatial and seasonal limits on agriculture', 'The First Agricultural Revolution'],
          correct: 2,
          explanation: {
            correct: "This scenario illustrates how modern globalization, combined with advanced transportation and refrigeration technology, allows agricultural products to be sourced from distant regions with opposite growing seasons, overcoming the traditional local, seasonal limits that once constrained fresh produce availability.",
            wrong: { 0: "Subsistence agriculture describes farming primarily for local self-sufficiency, the opposite of large-scale commercial farming explicitly organized around international, profit-driven trade.", 1: "Von Thünen's original model assumed a self-contained, uniform local market with limited long-distance transportation, which doesn't account for modern global sourcing across hemispheres and seasons — a scenario that actually reflects the model's real-world limitations rather than it 'working exactly as described.'", 3: "The First Agricultural Revolution refers to the ancient shift from hunting/gathering to early domestication, entirely unrelated to modern global agricultural supply chains and refrigerated transport." },
            tempting: "Choice B can tempt students who recognize this as an agricultural geography scenario and default to naming Von Thünen's model, without noticing that this global, cross-hemisphere sourcing pattern actually goes BEYOND (and challenges the assumptions of) that older, localized model.",
            commonMistake: "Applying Von Thünen's model to every agricultural land-use scenario, even when the situation specifically involves modern global trade and technology that the original 19th-century model didn't account for.",
            apTip: "When a scenario emphasizes MODERN global trade, refrigerated shipping, or year-round availability across hemispheres, that's testing your understanding of globalization's effect on agriculture — a nuance and limitation of, rather than a direct example of, Von Thünen's classic localized model."
          }
        }
      ]
    },
    {
      id: 6,
      name: 'Unit 6: Cities and Urban Land-Use Patterns and Processes',
      questions: [
        {
          id: 'hg-6-1', difficulty: 1, type: 'mcq', topic: 'Urban Models — The Concentric Zone Model',
          prompt: "Burgess's Concentric Zone Model describes a city as growing outward in a series of:",
          choices: ['Wedge-shaped sectors radiating from the center', 'Rings, with the Central Business District at the very center', 'Multiple separate nuclei, each specializing in a different function', 'A single linear strip following a major highway'],
          correct: 1,
          explanation: {
            correct: "The Concentric Zone Model, developed by Burgess, depicts a city as a series of RINGS expanding outward from a central Central Business District (CBD), with each successive ring representing a different land-use zone (such as a transition zone, working-class housing, and outer suburbs).",
            wrong: { 0: "Wedge-shaped sectors radiating from the center describes the Sector Model (Hoyt), not the Concentric Zone Model.", 2: "Multiple separate nuclei, each specializing in different functions, describes the Multiple Nuclei Model (Harris and Ullman), not Burgess's ring-based model.", 3: "A single linear strip along a highway isn't one of the three classic urban land-use models tested on the AP exam." },
            tempting: "Choice A is tempting since students often mix up the three classic urban models (concentric zone, sector, multiple nuclei), but each has a visually distinct shape: rings, wedges, and scattered nodes respectively.",
            commonMistake: "Confusing the three classic urban models with each other, since they're often taught together and tested by asking you to identify a model from its described shape.",
            apTip: "Memorize the three classic models by their SHAPE: Concentric Zone (Burgess) = rings; Sector (Hoyt) = wedges/pie slices radiating outward, often along transportation routes; Multiple Nuclei (Harris & Ullman) = several separate specialized centers/nodes."
          }
        },
        {
          id: 'hg-6-2', difficulty: 2, type: 'mcq', topic: 'Urban Sprawl and Edge Cities',
          prompt: "A formerly rural area at the outer edge of a large metropolitan region rapidly develops its own office parks, shopping centers, and housing, eventually functioning as a significant employment and commercial center in its own right, separate from the original downtown. This is best described as an example of:",
          choices: ['Gentrification', 'An edge city', 'A central business district (CBD)', 'Redlining'],
          correct: 1,
          explanation: {
            correct: "An edge city is a significant, largely self-sufficient node of commercial and employment activity that develops at the outer edge of a metropolitan area, distinct from and often independent of the original downtown core.",
            wrong: { 0: "Gentrification refers to the renovation and upgrading of a DETERIORATED, typically inner-city neighborhood, often displacing lower-income residents, unrelated to new development at the metropolitan periphery.", 2: "A central business district (CBD) refers to the traditional, original downtown commercial core of a city, the opposite location of the newly-developed periphery area described.", 3: "Redlining refers to a discriminatory historical practice of denying loans/services to residents of certain (often minority) neighborhoods, unrelated to new peripheral commercial development." },
            tempting: "Choice C is tempting since edge cities function similarly to a CBD (as commercial/employment hubs), but the key distinguishing detail is LOCATION — an edge city develops at the metropolitan PERIPHERY, not in the traditional original downtown.",
            commonMistake: "Assuming any major commercial/employment hub must be the CBD, without checking whether the scenario specifically describes new development at the outer edge of a metro area (edge city) rather than the original downtown core.",
            apTip: "Edge cities are a hallmark of urban sprawl — look for descriptive clues like 'formerly rural,' 'outer edge of the metro area,' or 'separate from downtown' paired with significant new office/retail development."
          }
        },
        {
          id: 'hg-6-3', difficulty: 2, type: 'mcq', topic: 'Gentrification',
          prompt: "An older, previously lower-income urban neighborhood begins attracting wealthier residents who renovate historic buildings, open upscale businesses, and drive up property values and rents, eventually displacing many of the original lower-income residents who can no longer afford to live there. This process is known as:",
          choices: ['Suburbanization', 'Gentrification', 'Redlining', 'Urban blight'],
          correct: 1,
          explanation: {
            correct: "Gentrification is the process by which a previously lower-income, often deteriorated urban neighborhood is renovated and upgraded by wealthier newcomers, typically raising property values/rents and displacing original lower-income residents.",
            wrong: { 0: "Suburbanization refers to the outward movement of population and development from a central city toward surrounding suburban areas, a different geographic direction of change than upgrading an existing inner-city neighborhood.", 2: "Redlining refers to a historical discriminatory practice of denying loans, insurance, or services to residents of certain neighborhoods (often based on race), a cause of urban disinvestment rather than the description of later reinvestment/upgrading.", 3: "Urban blight refers to the DETERIORATION and decline of an urban area (abandoned buildings, disinvestment), essentially the opposite process of the described upgrading and reinvestment." },
            tempting: "Choice D is tempting since blight and gentrification are often discussed in the same neighborhoods over time (blight often precedes gentrification), but they describe opposite directions of change: decline (blight) versus upgrading/reinvestment (gentrification).",
            commonMistake: "Confusing gentrification (upgrading/reinvestment, often displacing existing residents) with urban blight (decline/disinvestment), since both are commonly discussed together as stages in a neighborhood's changing history.",
            apTip: "For FRQs on gentrification, be ready to discuss BOTH sides: benefits (increased investment, renovated infrastructure, higher tax revenue) and costs (displacement of lower-income residents, loss of neighborhood cultural character, rising rents)."
          }
        },
        {
          id: 'hg-6-4', difficulty: 3, type: 'mcq', topic: 'Rank-Size Rule and Primate Cities',
          prompt: "A country's largest city has a population far more than twice as large as its second-largest city, and this dominant city serves as the disproportionate center of national culture, economy, and political power. This urban pattern is best described as:",
          choices: ['Following the rank-size rule', 'A primate city distribution', 'A gravity model pattern', 'A central place hierarchy'],
          correct: 1,
          explanation: {
            correct: "A primate city is a country's largest city that is disproportionately larger than the next-largest city (often more than double, or by an even greater margin) and dominates the country's economic, cultural, and political life.",
            wrong: { 0: "The rank-size rule describes the OPPOSITE, more balanced pattern, where a country's nth-largest city has a population roughly 1/n the size of the largest city, producing a smoother, more even size distribution rather than one dominant primate city.", 2: "The gravity model is used to predict the strength of interaction between two places based on their population sizes and the distance between them, not to describe a country's overall city-size distribution pattern.", 3: "Central place theory (and its resulting hierarchy) describes how settlements of different sizes are spaced and organized to efficiently provide goods and services, a related but distinct concept from a single dominant primate city." },
            tempting: "Choice A is the classic contrasting pair tested here — students must distinguish a primate city distribution (one dominant city) from the rank-size rule (a smoother, more evenly distributed hierarchy of city sizes).",
            commonMistake: "Confusing primate city distribution (one dominant, oversized city) with the rank-size rule (a smooth, evenly-graduated hierarchy of city sizes), since both describe overall national city-size patterns but represent opposite outcomes.",
            apTip: "Primate city = ONE dominant city, much larger than all others (e.g., Paris in France, Bangkok in Thailand); rank-size rule = a smooth, evenly graduated hierarchy where city sizes decrease predictably by rank — memorize this as a direct contrasting pair."
          }
        },
        {
          id: 'hg-6-5', difficulty: 3, type: 'mcq', topic: 'Urban Sustainability and Smart Growth',
          prompt: "A city government adopts new zoning policies encouraging higher-density, mixed-use development near public transit stations, aiming to reduce urban sprawl, car dependency, and the loss of open rural land at the metro edge. This policy approach is best described as an example of:",
          choices: ['Redlining', 'Smart growth', 'Suburban sprawl', 'A primate city policy'],
          correct: 1,
          explanation: {
            correct: "Smart growth refers to urban planning strategies specifically designed to encourage denser, more efficient, transit-oriented development, aiming to reduce sprawl, preserve open land, and decrease car dependency — matching the described transit-focused zoning policy.",
            wrong: { 0: "Redlining refers to a historical discriminatory lending/insurance practice targeting specific neighborhoods, unrelated to modern zoning strategies aimed at reducing sprawl.", 2: "Suburban sprawl describes the very outward, low-density, car-dependent expansion pattern that smart-growth policies are specifically designed to COUNTERACT, the opposite of the policy goal described.", 3: "'Primate city policy' isn't a recognized planning term; primate city refers to a country's disproportionately large dominant city, unrelated to this transit-and-density-focused zoning strategy." },
            tempting: "Choice C is tempting only in the sense that sprawl is the PROBLEM being addressed, but the scenario describes the POLICY RESPONSE (smart growth) rather than describing sprawl itself.",
            commonMistake: "Confusing the described PROBLEM (sprawl) with the described SOLUTION/POLICY (smart growth) when a question describes a planning intervention specifically targeting sprawl's negative effects.",
            apTip: "Smart growth is closely associated with specific strategies: transit-oriented development, mixed-use zoning, higher density near transit, and urban growth boundaries — look for these keywords to identify smart-growth policy scenarios."
          }
        },
        {
          id: 'hg-6-6', difficulty: 4, type: 'mcq', topic: 'World Cities and Global Urban Hierarchy',
          prompt: "A geographer classifies certain cities (such as New York, London, and Tokyo) as occupying the very top tier of a global urban hierarchy, based on their outsized influence over global finance, corporate headquarters, and cultural/media production, rather than simply their population size. This classification framework is best known as the concept of:",
          choices: ['The rank-size rule', 'World cities (global cities)', 'Central place theory', 'Primate cities'],
          correct: 1,
          explanation: {
            correct: "The world cities (or global cities) framework classifies cities based on their command-and-control functions in the global economy (finance, corporate headquarters, media, culture) rather than simply population size, exactly matching the described classification of New York, London, and Tokyo.",
            wrong: { 0: "The rank-size rule describes a mathematical relationship in city POPULATION SIZE distribution within a country, not a qualitative classification of global economic/cultural influence.", 2: "Central place theory explains the spacing, size, and function of settlements providing goods and services within a region, a different (and more local/regional) framework than global-scale city influence classification.", 3: "Primate cities are defined by a city's disproportionate size relative to other cities WITHIN THE SAME COUNTRY, not by global-scale economic and cultural influence across multiple countries." },
            tempting: "Choice D can tempt students since 'primate city' and 'world city' both describe unusually dominant/important cities, but primate city dominance is measured by POPULATION SIZE within one country, while world city status is measured by GLOBAL ECONOMIC/CULTURAL INFLUENCE across the world, regardless of population rank.",
            commonMistake: "Confusing primate cities (population dominance within a single country) with world/global cities (economic and cultural command functions at a GLOBAL scale), since both describe unusually significant or dominant cities.",
            apTip: "World/global cities are ranked by their COMMAND-AND-CONTROL functions in the global economy (headquarters of multinational corporations, global finance, media influence) — a city can be a world city (like Singapore) without necessarily having the largest population in its own country."
          }
        }
      ]
    },
    {
      id: 7,
      name: 'Unit 7: Industrial and Economic Development Patterns and Processes',
      questions: [
        {
          id: 'hg-7-1', difficulty: 1, type: 'mcq', topic: 'Economic Sectors',
          prompt: "A worker employed at a factory that assembles automobiles from manufactured parts is employed in which economic sector?",
          choices: ['Primary sector', 'Secondary sector', 'Tertiary sector', 'Quaternary sector'],
          correct: 1,
          explanation: {
            correct: "The secondary sector involves manufacturing and processing raw materials or components into finished goods, exactly matching automobile assembly at a factory.",
            wrong: { 0: "The primary sector involves the direct extraction of raw materials from nature (farming, mining, fishing, forestry), not the manufacturing/assembly of finished products.", 2: "The tertiary sector involves providing services (like retail, transportation, or healthcare) rather than manufacturing physical goods.", 3: "The quaternary sector involves knowledge-based and information services (research, information technology, consulting), not physical assembly-line manufacturing." },
            tempting: "None of the distractors closely match factory assembly work, but students sometimes default to primary sector by associating 'factory' loosely with 'industry' without considering that raw material extraction (primary) is distinct from manufacturing/assembly (secondary).",
            commonMistake: "Confusing which sector handles raw material extraction (primary) versus manufacturing finished goods from those materials (secondary), since both are sometimes loosely grouped together as 'industry' in casual speech.",
            apTip: "Memorize the four/five sector hierarchy with clear examples: primary (farming, mining) → secondary (factory manufacturing) → tertiary (retail, services) → quaternary (research, IT, information/knowledge work) → quinary (highest-level decision-making, like top corporate executives or government leaders)."
          }
        },
        {
          id: 'hg-7-2', difficulty: 2, type: 'mcq', topic: "Rostow's Stages of Economic Growth",
          prompt: "According to Rostow's stages of economic growth model, a country experiencing rapid industrialization, significant investment in a few key leading industries, and a decisive economic 'takeoff' from traditional agrarian patterns is most likely in which stage?",
          choices: ['Traditional society', 'Preconditions for takeoff', 'Takeoff', 'Age of high mass consumption'],
          correct: 2,
          explanation: {
            correct: "Rostow's 'takeoff' stage is specifically characterized by rapid industrialization, concentrated investment in a small number of leading industrial sectors, and a decisive economic shift away from traditional agrarian patterns.",
            wrong: { 0: "The traditional society stage is characterized by subsistence agriculture, limited technology, and little social/economic change, the opposite of the rapid industrial takeoff described.", 1: "The preconditions for takeoff stage involves the EARLY BUILDING BLOCKS (some infrastructure development, emerging trade, initial capital accumulation) that set the stage for takeoff, but doesn't yet involve the decisive, rapid industrial surge itself.", 3: "The age of high mass consumption is a LATER, more mature stage characterized by widespread consumer goods production and consumption, well beyond the initial rapid industrial takeoff phase." },
            tempting: "Choice B is tempting since 'preconditions for takeoff' sounds similar to 'takeoff,' but the preconditions stage is the earlier SETUP phase, while takeoff itself is the actual decisive surge of rapid industrialization.",
            commonMistake: "Confusing the 'preconditions for takeoff' stage (building the groundwork) with the 'takeoff' stage itself (the actual rapid industrial surge), since the names sound similar and represent sequential stages.",
            apTip: "Memorize Rostow's five stages in strict order: (1) traditional society, (2) preconditions for takeoff, (3) takeoff, (4) drive to maturity, (5) age of high mass consumption — 'takeoff' itself is the dramatic, rapid industrialization stage, not the setup stage before it."
          }
        },
        {
          id: 'hg-7-3', difficulty: 2, type: 'mcq', topic: 'The Gender Inequality Index and the Human Development Index',
          prompt: "A composite statistic used by the United Nations to compare countries' overall development levels, incorporating life expectancy, education, and income (GNI per capita) into a single measure, is known as the:",
          choices: ['Gender Inequality Index (GII)', 'Human Development Index (HDI)', 'Gross Domestic Product (GDP) per capita alone', 'Purchasing Power Parity (PPP) alone'],
          correct: 1,
          explanation: {
            correct: "The Human Development Index (HDI) is the UN's composite statistic combining life expectancy, education (mean/expected years of schooling), and income (GNI per capita) into a single overall development score.",
            wrong: { 0: "The Gender Inequality Index (GII) is a related but SEPARATE composite UN measure specifically focused on gender-based disparities in reproductive health, empowerment, and labor participation, not the general life-expectancy/education/income composite described.", 2: "GDP per capita alone is a single economic measure of average output per person, not the multidimensional composite (including health and education) that HDI represents.", 3: "Purchasing Power Parity (PPP) is an adjustment method comparing currency values/cost of living across countries, not itself a composite development index incorporating health and education." },
            tempting: "Choice A is tempting since GII and HDI are both UN-created composite indices often discussed together, but GII specifically measures GENDER-based inequality, while HDI measures OVERALL development combining health, education, and income broadly.",
            commonMistake: "Confusing the Human Development Index (broad development: health + education + income) with the Gender Inequality Index (specifically gender-based disparities), since both are composite UN development statistics introduced in the same course unit.",
            apTip: "HDI = broad development composite (life expectancy + education + income); GII = specifically gender-based inequality composite (reproductive health + empowerment + labor market); keep these two distinct UN indices from being conflated."
          }
        },
        {
          id: 'hg-7-4', difficulty: 3, type: 'mcq', topic: 'Outsourcing and the New International Division of Labor',
          prompt: "A multinational corporation based in a wealthy country relocates its labor-intensive manufacturing operations to a lower-wage country specifically to reduce production costs, while keeping its research, design, and corporate headquarters functions in the original wealthy country. This pattern best illustrates:",
          choices: ['Import substitution industrialization', 'Outsourcing and the new international division of labor', 'A primate city pattern', 'Devolution'],
          correct: 1,
          explanation: {
            correct: "This scenario illustrates outsourcing within the new international division of labor, where higher-value functions (research, design, corporate control) remain concentrated in wealthier core countries, while lower-wage, labor-intensive manufacturing is relocated to lower-income peripheral or semi-peripheral countries to cut costs.",
            wrong: { 0: "Import substitution industrialization is a development STRATEGY in which a country tries to reduce reliance on imports by building up its OWN domestic manufacturing industries, the opposite of a wealthy country's corporation relocating production abroad.", 2: "A primate city pattern describes a country's disproportionately large dominant city, unrelated to a corporation's decision about where to locate manufacturing versus headquarters functions.", 3: "Devolution refers to a national government transferring political power to regional governments, unrelated to a corporation's international manufacturing/outsourcing decisions." },
            tempting: "Choice A is tempting since both concepts relate to international economic development strategy, but import substitution is about a COUNTRY building its own industry to reduce imports, while this scenario is about a CORPORATION relocating manufacturing abroad to cut labor costs — essentially opposite dynamics.",
            commonMistake: "Confusing a country's internal development strategy (import substitution industrialization) with a multinational corporation's outsourcing decision (new international division of labor), since both involve global economic development concepts from the same unit.",
            apTip: "The new international division of labor concept is closely tied to core-periphery relationships in world-systems theory: higher-value knowledge/design/corporate-control functions stay in wealthy core countries, while lower-wage manufacturing shifts to poorer peripheral/semi-peripheral countries."
          }
        },
        {
          id: 'hg-7-5', difficulty: 3, type: 'mcq', topic: 'World-Systems Theory',
          prompt: "According to Immanuel Wallerstein's world-systems theory, a country that supplies raw materials and cheap labor to wealthier countries, while having relatively weak political and economic institutions of its own, would most likely be classified as part of the:",
          choices: ['Core', 'Semi-periphery', 'Periphery', 'Supranational tier'],
          correct: 2,
          explanation: {
            correct: "Periphery countries in world-systems theory are typically characterized by supplying raw materials and cheap labor to wealthier core countries, while having relatively weaker, less-developed political and economic institutions of their own.",
            wrong: { 0: "Core countries are the wealthy, economically and technologically dominant nations that benefit most from global trade relationships, controlling finance, high-tech industries, and corporate headquarters — the opposite profile described.", 1: "Semi-periphery countries occupy an intermediate position, exhibiting some characteristics of both core and periphery countries (e.g., some industrialization alongside continued reliance on raw material exports), rather than the more extreme raw-material/cheap-labor dependency profile of a purely peripheral country.", 3: "'Supranational tier' isn't a recognized classification within world-systems theory, which specifically uses the three-tier core/semi-periphery/periphery structure." },
            tempting: "Choice B is tempting since semi-periphery countries also engage in raw material and labor-based trade with core countries, but semi-periphery nations typically have a MORE developed, diversified economy than the described weak-institution, pure raw-material/labor supplier profile of a periphery country.",
            commonMistake: "Confusing periphery countries (weakest institutions, most dependent on raw material/labor exports) with semi-periphery countries (intermediate development, exhibiting a mix of core and periphery traits), since both supply resources/labor to core countries to some degree.",
            apTip: "World-systems theory's three-tier structure: core (wealthy, dominant, high-tech/finance/corporate control) → semi-periphery (intermediate, mixed characteristics) → periphery (raw materials/cheap labor supplier, weakest institutions, most dependent) — memorize this hierarchy and be ready to classify example countries."
          }
        },
        {
          id: 'hg-7-6', difficulty: 4, type: 'mcq', topic: 'Deindustrialization and Economic Restructuring',
          prompt: "A region that was historically a major center of heavy manufacturing (such as steel production) experiences a sharp decline in factory jobs over several decades, as production shifts to lower-wage regions abroad, while the region's economy gradually shifts toward service-sector and technology-based employment instead. This overall process is best described as:",
          choices: ['Import substitution industrialization', 'Deindustrialization and economic restructuring', 'The First Agricultural Revolution', 'Balkanization'],
          correct: 1,
          explanation: {
            correct: "Deindustrialization refers to the decline of manufacturing employment in a formerly industrial region (often due to production shifting to lower-wage regions abroad), typically accompanied by economic restructuring toward service-sector and technology-based employment instead — exactly matching the scenario.",
            wrong: { 0: "Import substitution industrialization is a development strategy aimed at BUILDING UP domestic manufacturing to reduce reliance on imports, essentially the opposite trend of the manufacturing DECLINE described in this scenario.", 2: "The First Agricultural Revolution refers to the ancient shift from hunting/gathering to early plant/animal domestication, entirely unrelated to modern industrial decline and service-sector restructuring.", 3: "Balkanization refers to a country or region fragmenting into smaller, often hostile, independent states — a political geography concept unrelated to industrial economic decline." },
            tempting: "None of the distractors closely resemble deindustrialization's specific pattern, but 'import substitution industrialization' can superficially seem related since both terms involve 'industrialization,' despite describing essentially opposite economic trends (building up manufacturing vs. its decline).",
            commonMistake: "Being distracted by superficial keyword overlap (both options mention 'industrialization') without noticing that import substitution industrialization describes BUILDING manufacturing capacity, the opposite of deindustrialization's decline in manufacturing.",
            apTip: "Deindustrialization is commonly associated with the U.S. 'Rust Belt,' parts of the UK, and other historically industrial regions — for FRQs, be ready to explain both the CAUSE (production shifting to lower-wage regions/countries as part of the new international division of labor) and the CONSEQUENCE (economic restructuring toward services/tech, often with job losses and population decline in the affected region)."
          }
        }
      ]
    }
  ],
  frqs: [
    {
      id: 'hg-frq-1', difficulty: 4, unit: 1,
      prompt: "A geographer wants to study patterns of household income across a metropolitan region.\n\n(a) Explain the modifiable areal unit problem (MAUP) and how it could affect this geographer's findings.\n(b) Explain one way the choice of map projection could also introduce distortion relevant to presenting this data.\n(c) Propose one strategy the geographer could use to make their spatial analysis more reliable despite these challenges.",
      rubricPoints: [
        "Correctly explains MAUP: results can vary depending on how data is aggregated into different-sized/shaped areal units, even using the same underlying data (1 pt)",
        "Explains a projection-related distortion relevant to presenting the data, such as area distortion misrepresenting the relative size of different income zones on a map (1 pt)",
        "Proposes a reasonable strategy, such as testing multiple different areal unit scales/boundaries for consistency, or choosing an equal-area projection appropriate to the data being shown (1 pt)"
      ],
      sampleResponse: "(a) MAUP means that the same underlying income data can produce different statistical patterns depending on how it's aggregated into different-sized or differently-shaped areal units (such as census tracts versus zip codes), so the geographer's conclusions about income patterns could shift substantially just by changing the boundaries used, even without any change in the underlying data itself.\n(b) If the geographer maps this data using a projection that distorts area (like the Mercator projection), regions could visually appear larger or smaller than their true relative size, which could mislead viewers about how much of the metro area is affected by a given income pattern.\n(c) The geographer could re-run the analysis using multiple different areal unit boundaries (such as both tracts and zip codes) to check whether the pattern holds consistently across scales, and use an equal-area projection when presenting the data visually to avoid misrepresenting the relative size of different income zones."
    },
    {
      id: 'hg-frq-2', difficulty: 4, unit: 2,
      prompt: "A country has a population pyramid with a wide base and a rapid decline in population moving upward, and it is currently receiving very little in-migration.\n\n(a) Identify the likely DTM stage this country is in, and justify your answer using the pyramid shape.\n(b) Explain one specific challenge this country's government might face as a result of this population structure.\n(c) Explain one specific policy the government could adopt to address that challenge.",
      rubricPoints: [
        "Correctly identifies Stage 2 (or early Stage 3) of the DTM and justifies with the wide base indicating high birth rates alongside falling death rates (1 pt)",
        "Explains a specific, plausible challenge, such as strain on schools, healthcare, and job creation for the large youth population (1 pt)",
        "Proposes a specific, relevant policy, such as investing in education/job training infrastructure or family planning access (1 pt)"
      ],
      sampleResponse: "(a) This country is likely in Stage 2 of the DTM. The wide base of the pyramid indicates a high birth rate, and the rapid narrowing moving upward suggests death rates have fallen (improving survival), resulting in a large, young population — the classic Stage 2 signature of rapid natural increase.\n(b) A specific challenge is strain on the education system and job market, since a very large youth cohort will need schooling now and will enter the workforce in large numbers within a decade, potentially outpacing available jobs.\n(c) The government could invest heavily in education and vocational training infrastructure now, ensuring the large youth cohort develops skills that match future job market needs, helping convert this 'youth bulge' into a productive workforce rather than a source of unemployment and instability."
    },
    {
      id: 'hg-frq-3', difficulty: 3, unit: 3,
      prompt: "A universalizing religion spreads rapidly into a new region and, over time, blends some of its practices with existing local ethnic religious traditions already present there.\n\n(a) Explain the diffusion process most likely responsible for the religion's initial spread into the new region.\n(b) Define syncretism and explain how it applies to this scenario.\n(c) Explain one way this blended religious landscape might visibly appear in the region's cultural landscape (built environment).",
      rubricPoints: [
        "Correctly identifies a plausible diffusion process for a universalizing religion's spread, such as contagious or hierarchical diffusion, with a brief justification (1 pt)",
        "Correctly defines syncretism as the blending of elements from different religious/cultural traditions into a new combined form, and applies it to the scenario (1 pt)",
        "Gives a plausible cultural landscape example, such as religious buildings incorporating both universalizing-religion architectural elements and local ethnic-religion symbols or materials (1 pt)"
      ],
      sampleResponse: "(a) The religion's initial spread is most likely explained by contagious diffusion, since universalizing religions often spread through direct person-to-person contact and communication across a population once introduced into a region, without requiring the converting population to physically relocate.\n(b) Syncretism refers to the blending of elements from different religious or cultural traditions into a new, combined belief system or set of practices; here, it applies as the incoming universalizing religion's practices merge with pre-existing local ethnic religious traditions rather than fully replacing them.\n(c) This blended religious landscape might visibly appear as local temples or places of worship that combine the universalizing religion's typical architectural style with local ethnic religious symbols, materials, or decorative elements distinctive to the pre-existing tradition."
    },
    {
      id: 'hg-frq-4', difficulty: 4, unit: 4,
      prompt: "A national government has redrawn several electoral district boundaries into unusual, non-compact shapes shortly before an upcoming election.\n\n(a) Define gerrymandering and explain how it could apply to this scenario.\n(b) Distinguish between the 'packing' and 'cracking' gerrymandering techniques.\n(c) Explain one broader consequence gerrymandering can have for a country's political system.",
      rubricPoints: [
        "Correctly defines gerrymandering as manipulating district boundaries for partisan/political advantage and applies it to the unusual shapes described (1 pt)",
        "Correctly distinguishes packing (concentrating opposition voters into few districts) from cracking (spreading opposition voters thinly across many districts) (1 pt)",
        "Explains a plausible broader consequence, such as reduced electoral competitiveness or a mismatch between vote share and seat share won (1 pt)"
      ],
      sampleResponse: "(a) Gerrymandering is the deliberate manipulation of electoral district boundaries to benefit a particular political party or group; the unusual, non-compact shapes described suggest the districts were redrawn strategically rather than based on compact, natural geographic boundaries, a common visual signature of gerrymandering.\n(b) Packing concentrates as many opposition-party voters as possible into a small number of districts (so they win those districts by overwhelming margins but few others), while cracking spreads opposition-party voters thinly across many districts (so they never reach a majority in any single one).\n(c) A broader consequence is that the party controlling redistricting can win a disproportionate share of legislative seats relative to its actual share of the total vote, reducing genuine electoral competitiveness and potentially undermining public trust in the fairness of the political system."
    },
    {
      id: 'hg-frq-5', difficulty: 3, unit: 5,
      prompt: "A government is deciding where to allow new agricultural development around a growing regional market city on an otherwise uniform plain.\n\n(a) Using Von Thünen's model, explain which type of agriculture should be located closest to the market, and why.\n(b) Explain which type of agriculture should be located farthest from the market, and why.\n(c) Explain one real-world factor not accounted for in Von Thünen's original model that could change this ideal spatial arrangement.",
      rubricPoints: [
        "Correctly identifies dairying/market gardening as closest, justified by perishability and need for freshness/quick transport (1 pt)",
        "Correctly identifies ranching/livestock as farthest, justified by livestock's ability to transport themselves and lower land-value needs (1 pt)",
        "Identifies a valid real-world factor Von Thünen's model doesn't account for, such as modern refrigerated transportation, variable terrain, or government subsidies (1 pt)"
      ],
      sampleResponse: "(a) Dairying and market gardening (perishable products like milk, fruits, and vegetables) should be located closest to the market, since these goods spoil quickly or are costly to transport over long distances, making proximity to the market essential to preserve freshness and minimize transport costs.\n(b) Ranching/livestock grazing should be located farthest from the market, since livestock can transport themselves to market over long distances (by walking), and grazing land doesn't need to be as valuable or close-in as land used for more perishable, intensive products.\n(c) Modern refrigerated transportation is a real-world factor Von Thünen's original model didn't account for — with refrigerated trucks and ships, even perishable goods like dairy and produce can now be transported profitably over much longer distances, weakening the model's assumption that perishability alone dictates proximity to market."
    },
    {
      id: 'hg-frq-6', difficulty: 3, unit: 6,
      prompt: "A metropolitan area's downtown neighborhood, once home mostly to lower-income residents, has recently seen a wave of renovation, new upscale businesses, and rising rents.\n\n(a) Define gentrification and explain how it applies to this scenario.\n(b) Explain one potential benefit of this process for the city as a whole.\n(c) Explain one potential cost of this process for the neighborhood's original residents.",
      rubricPoints: [
        "Correctly defines gentrification and applies it to the described renovation/rising rent scenario (1 pt)",
        "Identifies a plausible benefit, such as increased tax revenue, renovated infrastructure, or reduced urban blight (1 pt)",
        "Identifies a plausible cost, such as displacement of original lower-income residents who can no longer afford rising rents (1 pt)"
      ],
      sampleResponse: "(a) Gentrification is the process by which a previously lower-income, often deteriorated neighborhood is renovated and upgraded by wealthier newcomers, typically raising property values and rents; this matches the scenario's described wave of renovation, upscale businesses, and rising rents in the downtown neighborhood.\n(b) A potential benefit for the city is increased tax revenue from higher property values and new businesses, which can fund improved city services and infrastructure, along with reduced urban blight in a previously deteriorated area.\n(c) A potential cost for original residents is displacement, since rising rents and property values can price out lower-income residents who can no longer afford to live in the neighborhood they called home, often forcing them to relocate elsewhere."
    },
    {
      id: 'hg-frq-7', difficulty: 4, unit: 7,
      prompt: "A multinational corporation headquartered in a wealthy 'core' country relocates its manufacturing operations to a lower-income 'periphery' country to reduce labor costs, while keeping research, design, and executive functions at home.\n\n(a) Using world-systems theory, explain the roles of the core and periphery countries in this scenario.\n(b) Explain how this scenario illustrates the new international division of labor.\n(c) Explain one potential economic consequence for the core country's original manufacturing region as a result of this shift.",
      rubricPoints: [
        "Correctly explains the core country's role (retaining high-value research/design/corporate control) and the periphery country's role (supplying cheap manufacturing labor) (1 pt)",
        "Correctly explains the new international division of labor as higher-value functions concentrating in core countries while labor-intensive manufacturing shifts to lower-wage periphery/semi-periphery countries (1 pt)",
        "Identifies a plausible consequence for the core country's original manufacturing region, such as deindustrialization and job losses (1 pt)"
      ],
      sampleResponse: "(a) The core country retains the higher-value functions — research, design, and executive/corporate control — reflecting its dominant position in the global economy, while the periphery country supplies cheap manufacturing labor, reflecting its weaker economic position and greater dependency on core-country investment.\n(b) This scenario illustrates the new international division of labor because higher-value knowledge and decision-making functions remain concentrated in the wealthy core country, while labor-intensive manufacturing — which requires lower-cost labor to remain profitable — is relocated to the lower-wage periphery country.\n(c) A likely consequence for the core country's original manufacturing region is deindustrialization: a decline in manufacturing jobs as production shifts abroad, potentially leading to regional economic restructuring toward service-sector employment and, in some cases, higher unemployment or population decline in the affected area."
    }
  ]
}
