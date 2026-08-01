// AP Computer Science A — real College Board unit numbers/names used for
// authenticity. Started with 2 units; more to be added in follow-up passes.

export const csa = {
  id: 'csa',
  name: 'AP Computer Science A',
  icon: '💻',
  accent: 'indigo',
  units: [
    {
      id: 1,
      name: 'Unit 1: Primitive Types & Objects',
      questions: [
        {
          id: 'csa-1-1', difficulty: 1, type: 'mcq', topic: 'Primitive Types',
          prompt: "What is the value of x after this code executes?\n\nint x = 7 / 2;",
          choices: ['3.5', '3', '4', '0'],
          correct: 1,
          explanation: {
            correct: "When both operands of the division operator are int values, Java performs integer division, truncating (not rounding) any fractional part; 7 / 2 mathematically equals 3.5, but integer division discards the decimal, leaving 3.",
            wrong: { 0: "3.5 would be the result of floating-point division, but since both 7 and 2 are int literals and x is declared as int, Java performs integer division instead.", 2: "4 would result from rounding 3.5 up, but integer division in Java truncates (rounds toward zero) rather than rounding to the nearest value.", 3: "0 would only occur if the numerator were smaller than the denominator (like 1/2), which isn't the case here." },
            tempting: "Choice A is the most common trap — Java doesn't automatically produce a decimal result from dividing two integers, even though the 'true' mathematical answer is 3.5.",
            commonMistake: "Assuming that division between two int values in Java automatically produces a decimal (floating-point) result, rather than recognizing that int/int division truncates to an int result.",
            apTip: "Remember: int / int = int (truncated, not rounded) in Java; to get a decimal result, at least one operand must be a double (e.g., 7.0 / 2, or (double) 7 / 2)."
          }
        },
        {
          id: 'csa-1-2', difficulty: 1, type: 'mcq', topic: 'Variables & Assignment',
          prompt: "Which of the following correctly declares and initializes an integer variable named count with the value 10?",
          choices: ['int count = 10;', 'integer count == 10;', 'int count(10);', 'Int count = 10'],
          correct: 0,
          explanation: {
            correct: "The correct Java syntax for declaring and initializing a variable is: [type] [name] = [value];, so int count = 10; correctly declares an int variable named count and assigns it the value 10, ending with a semicolon.",
            wrong: { 1: "'integer' (lowercase) is not a valid Java primitive type keyword (the correct primitive type is 'int', all lowercase, and this line also incorrectly uses '==', the equality comparison operator, instead of '=', the assignment operator), and this line is missing a semicolon.", 2: "This uses parentheses (function-call-like syntax) instead of the assignment operator '=', which is not valid Java variable initialization syntax.", 3: "'Int' with a capital I is not a valid Java keyword (Java is case-sensitive, and the primitive type must be lowercase 'int'), and this line is also missing a terminating semicolon." },
            tempting: "Choice B is tempting because '==' looks similar to '=' but serves a completely different purpose (comparison instead of assignment), a very common early syntax confusion.",
            commonMistake: "Confusing the assignment operator (=) with the equality comparison operator (==), or introducing case-sensitivity errors with Java's primitive type keywords.",
            apTip: "Remember Java is case-sensitive ('int' must be lowercase) and distinguishes assignment (single =) from comparison (double ==) — mixing these up is one of the most common early syntax errors on the AP CSA exam's multiple choice section."
          }
        },
        {
          id: 'csa-1-3', difficulty: 2, type: 'mcq', topic: 'Objects & the String Class',
          prompt: "Given the code: String s1 = \"hello\"; String s2 = new String(\"hello\"); What does the expression (s1 == s2) evaluate to, and why?",
          choices: ['true, because both variables contain the identical text \"hello\"', 'false, because == compares object references (memory addresses), and s2 was explicitly created as a new, separate object using the new keyword', 'true, because Java automatically merges identical String objects into one', 'This code causes a compilation error'],
          correct: 1,
          explanation: {
            correct: "For object types like String, the == operator compares object REFERENCES (whether two variables point to the exact same object in memory), not their content; since s2 was explicitly created with 'new String(...)', it is a distinct object in memory from s1 (which may reference a pooled string literal), so s1 == s2 evaluates to false even though their text content is identical.",
            wrong: { 0: "This describes what the .equals() method would check (content equality), but == specifically checks reference (memory location) equality for objects, which differs here since 'new' explicitly creates a separate object.", 2: "Java does NOT automatically merge/pool objects created with the 'new' keyword; the string literal pool optimization applies to literals created directly (like just writing \"hello\"), but explicitly using 'new String(...)' deliberately creates a separate, distinct object outside that pool.", 3: "This code is syntactically valid and will compile and run without error; it simply demonstrates a semantic distinction between reference equality (==) and content equality (.equals()), not a syntax problem." },
            tempting: "Choice A is extremely tempting and represents one of the most classic 'gotcha' concepts in introductory Java — that == doesn't check content equality for objects the way it does for primitives.",
            commonMistake: "Using == to compare object content (like Strings) instead of using the .equals() method, which is specifically designed to compare the actual content/value of objects rather than their memory references.",
            apTip: "Memorize this critical distinction: for PRIMITIVE types (int, double, boolean, etc.), == compares actual values; for OBJECTS (String, and other reference types), == compares references (memory addresses) — always use .equals() to compare String CONTENT, a rule tested very frequently on the AP CSA exam."
          }
        },
        {
          id: 'csa-1-4', difficulty: 3, type: 'mcq', topic: 'Casting & Type Conversion',
          prompt: "What is the output of the following code?\n\ndouble d = 9.99;\nint x = (int) d;\nSystem.out.println(x);",
          choices: ['10', '9', '9.99', 'This code causes a compilation error'],
          correct: 1,
          explanation: {
            correct: "Casting a double to an int in Java truncates the decimal portion entirely (it does NOT round), so (int) 9.99 simply discards the .99 portion, leaving 9.",
            wrong: { 0: "10 would be the result of ROUNDING 9.99 to the nearest integer, but a cast to int in Java truncates rather than rounds.", 2: "9.99 would be the result if no casting occurred at all, but since x is explicitly declared as an int and the (int) cast is applied, the value is converted (truncated) before being stored.", 3: "This code is syntactically valid and compiles correctly; explicit casting from a wider type (double) to a narrower type (int) using the (int) syntax is legal Java, though it does lose precision (the decimal part), which is exactly the point being tested." },
            tempting: "Choice A is a very common trap — many students assume any double-to-int conversion involves standard mathematical rounding, when Java's explicit (int) cast specifically truncates instead.",
            commonMistake: "Assuming that casting a double to an int rounds to the nearest whole number, rather than correctly truncating (simply cutting off) the decimal portion.",
            apTip: "Memorize explicitly: casting a double to an int in Java ALWAYS truncates (drops the decimal part, rounding toward zero), never rounds — if actual rounding behavior is needed, use Math.round() instead of a direct (int) cast."
          }
        },
        {
          id: 'csa-1-5', difficulty: 4, type: 'mcq', topic: 'Wrapper Classes & Autoboxing',
          prompt: "Consider the following code:\n\nInteger a = 127;\nInteger b = 127;\nInteger c = 200;\nInteger d = 200;\nSystem.out.println(a == b);\nSystem.out.println(c == d);\n\nWhat is the output, and why does this occur?",
          choices: ['true, then true, because Integer objects always use == to compare by value', 'true, then false, because Java caches (pools) Integer objects for values from -128 to 127 for efficiency, but creates separate objects for values outside that cached range', 'false, then false, because Integer objects are never equal when compared with ==', 'This code causes a compilation error since Integer cannot be compared with =='],
          correct: 1,
          explanation: {
            correct: "Java's Integer class caches (pools/reuses) Integer objects for values in the range -128 to 127 as a performance optimization, so a and b (both 127) actually reference the SAME cached object, making a == b true; but 200 falls outside this cached range, so c and d are separate, distinct Integer objects, making c == d false, even though their values are equal — this is a well-known, tricky Java 'gotcha' related to autoboxing.",
            wrong: { 0: "This is incorrect specifically because of the caching behavior — == compares object REFERENCES for Integer (an object/wrapper type), and outside the cached range, equal-VALUE Integer objects are NOT the same reference, producing false for c == d.", 2: "This ignores the specific caching behavior for values within -128 to 127, which DOES make a == b true due to reference sharing from the cache, even though == generally compares references for objects.", 3: "This code compiles and runs perfectly fine — comparing Integer objects with == is legal Java syntax (though it compares references, which is the specific 'gotcha' being tested), not a compilation error." },
            tempting: "Choice A is tempting because in many other contexts, small integer wrapper comparisons behave in ways that can seem value-based due to the caching optimization, leading students to overgeneralize this caching behavior to ALL Integer values rather than recognizing its specific limited range.",
            commonMistake: "Not knowing about Java's specific Integer caching range (-128 to 127) and assuming Integer object comparison with == either always works like value comparison or never does, rather than recognizing this specific boundary-dependent caching behavior.",
            apTip: "College-level insight: this exact caching behavior (Integer caching for -128 to 127) is a well-documented, frequently discussed 'gotcha' in real Java programming — while it's more of an advanced/trivia-level detail, the underlying lesson (always use .equals() for wrapper class content comparison, never rely on ==) is the practical, exam-relevant takeaway."
          }
        },
        {
          id: 'csa-1-6', difficulty: 5, type: 'mcq', topic: 'Object References & Mutability',
          prompt: "Consider a method that takes an object parameter and reassigns it to a brand new object inside the method body:\n\npublic static void reassign(StringBuilder sb) {\n    sb = new StringBuilder(\"changed\");\n}\n\npublic static void main(String[] args) {\n    StringBuilder original = new StringBuilder(\"original\");\n    reassign(original);\n    System.out.println(original);\n}\n\nWhat is printed, and why?",
          choices: ['\"changed\", because Java passes objects by reference, so reassigning the parameter changes the original variable too', '\"original\", because Java passes object references BY VALUE — reassigning the local parameter sb only changes what that local copy of the reference points to, not the original variable outside the method', '\"changed\", because StringBuilder is immutable like String', 'This code causes a runtime error'],
          correct: 1,
          explanation: {
            correct: "Java always passes arguments by value — for object types, this means the reference itself (which is like a pointer/address) is copied into the parameter; reassigning the LOCAL parameter (sb = new StringBuilder(...)) only changes what that local copy of the reference points to, leaving the original variable (original) in the calling method completely unaffected, still pointing to the original StringBuilder object with the text 'original'.",
            wrong: { 0: "This is a common misconception — Java does NOT pass objects 'by reference' in the sense of allowing the original variable to be reassigned by the method; it passes a COPY of the reference (pass-by-value for the reference itself), so reassignment inside the method doesn't propagate back to the caller's variable.", 2: "StringBuilder is specifically MUTABLE (that's its main advantage over String for building/modifying text efficiently); however, mutability isn't actually the relevant issue here — the key issue is that REASSIGNING a parameter (pointing it to a new object entirely) is different from MODIFYING the object it originally pointed to.", 3: "This code is completely valid and will run without error; it simply demonstrates the distinction between reassigning a reference parameter versus modifying the object that a reference points to." },
            tempting: "Choice A represents an extremely common and important misconception about how Java handles objects — students often conflate 'objects are passed by reference' (partially true, in that the reference value is passed) with 'you can reassign the caller's variable from inside a method' (false, since it's the reference VALUE that's copied, similar to any other value parameter).",
            commonMistake: "Confusing 'passing the reference' with 'passing by reference' in the formal sense — Java copies the reference value itself into the parameter (pass-by-value semantics applied to the reference), so reassigning the parameter inside the method does not affect the caller's original variable.",
            apTip: "College-level insight: memorize the precise distinction between MUTATING an object through a reference parameter (e.g., calling sb.append(\"text\") WOULD affect the original object, since both the parameter and the original variable point to the SAME object) versus REASSIGNING the parameter to a new object entirely (which does NOT affect the original variable) — this exact distinction is one of the most conceptually important and frequently misunderstood topics in the entire AP CSA curriculum, and explicitly explaining 'Java is pass-by-value, even for object references' is the precise, correct technical framing expected in a strong response."
          }
        }
      ]
    },
    {
      id: 2,
      name: 'Unit 2: Using Objects',
      questions: [
        {
          id: 'csa-2-1', difficulty: 1, type: 'mcq', topic: 'Method Calls & Return Values',
          prompt: "Given: String word = \"Computer\";\nWhat does word.length() return?",
          choices: ['9', '8', '7', 'An error, since length is not a valid String method'],
          correct: 1,
          explanation: {
            correct: "The String \"Computer\" contains exactly 8 characters (C-o-m-p-u-t-e-r), and the .length() method returns the number of characters in the String, so word.length() returns 8.",
            wrong: { 0: "9 overcounts by one character; carefully counting C-o-m-p-u-t-e-r gives exactly 8 letters, not 9.", 2: "7 undercounts by one character; recounting the letters in \"Computer\" confirms there are 8, not 7.", 3: "length() is a valid, commonly used String method that returns the number of characters in the string; this is not an error." },
            tempting: "None of the distractors are conceptually difficult if the method is known and the word is counted carefully, but simple miscounting of characters is a common source of error.",
            commonMistake: "Miscounting the number of characters in a string, especially under time pressure, leading to off-by-one errors in the length() result.",
            apTip: "For any String, physically count each character (including spaces and punctuation) one by one rather than estimating — length() counts ALL characters, and small counting slips are a common, avoidable source of lost points."
          }
        },
        {
          id: 'csa-2-2', difficulty: 1, type: 'mcq', topic: 'String Indexing',
          prompt: "Given: String s = \"PROGRAM\"; What does s.charAt(2) return?",
          choices: ['P', 'R', 'O', 'G'],
          correct: 2,
          explanation: {
            correct: "String indexing in Java is zero-based, so charAt(0) = 'P', charAt(1) = 'R', charAt(2) = 'O' — the character at index 2 is 'O'.",
            wrong: { 0: "'P' is at index 0, not index 2; this would be the result of incorrectly treating indices as starting from 1 instead of 0.", 1: "'R' is at index 1, one position before the requested index 2.", 3: "'G' is at index 3, one position after the requested index 2." },
            tempting: "Choice A is tempting for students who forget that Java (like most programming languages) uses zero-based indexing, mistakenly counting the first character as index 1 instead of index 0.",
            commonMistake: "Forgetting that String indices (like array indices) start at 0, not 1, leading to an off-by-one error when identifying the character at a given index.",
            apTip: "Always write out the string with each character's index labeled underneath (P=0, R=1, O=2, G=3, R=4, A=5, M=6) when working through charAt() or substring() problems — this prevents zero-indexing errors, especially under exam time pressure."
          }
        },
        {
          id: 'csa-2-3', difficulty: 2, type: 'mcq', topic: 'The substring Method',
          prompt: "Given: String s = \"programming\"; What does s.substring(3, 7) return?",
          choices: ['\"gram\"', '\"gramm\"', '\"ogra\"', '\"progr\"'],
          correct: 0,
          explanation: {
            correct: "substring(3, 7) returns characters starting at index 3 UP TO BUT NOT INCLUDING index 7; indexing \"programming\" (p=0,r=1,o=2,g=3,r=4,a=5,m=6,m=7,i=8,n=9,g=10), characters at indices 3,4,5,6 are 'g','r','a','m', giving \"gram\".",
            wrong: { 1: "\"gramm\" incorrectly includes the character at index 7 ('m'), but substring's second parameter is EXCLUSIVE (up to but not including that index), so index 7 should not be included.", 2: "\"ogra\" starts one index too early, incorrectly beginning at index 2 ('o') instead of the specified starting index 3 ('g').", 3: "\"progr\" starts from index 0 rather than the specified starting index 3, and also incorrectly extends the substring length." },
            tempting: "Choice B is the most common trap — forgetting that substring's ending index parameter is EXCLUSIVE (not included in the result), leading to one extra character being incorrectly included.",
            commonMistake: "Treating the substring(start, end) method's end parameter as INCLUSIVE rather than correctly recognizing it as EXCLUSIVE (the character at the end index is NOT included in the result).",
            apTip: "Memorize substring(start, end) precisely: it includes the character at 'start' but STOPS BEFORE 'end' (end is exclusive) — the number of characters returned equals (end - start); using this length check ((7-3)=4 characters expected) is a fast way to verify your answer."
          }
        },
        {
          id: 'csa-2-4', difficulty: 3, type: 'mcq', topic: 'Constructors',
          prompt: "Consider a class Dog with the following constructor:\n\npublic Dog(String name, int age) {\n    this.name = name;\n    this.age = age;\n}\n\nWhat is the purpose of the keyword 'this' in this code?",
          choices: ['It creates a new Dog object', 'It refers to the current object being constructed, distinguishing the instance variables (this.name, this.age) from the constructor\'s parameters (name, age), which share the same names', 'It is required syntax with no functional purpose', 'It calls a different constructor in the same class'],
          correct: 1,
          explanation: {
            correct: "The 'this' keyword refers to the current object instance being constructed; it's specifically needed here because the parameter names (name, age) are identical to the instance variable names (name, age), and 'this.name' explicitly specifies 'the instance variable belonging to this object,' distinguishing it from the local parameter variable of the same name.",
            wrong: { 0: "'this' doesn't create a new object; object creation happens when 'new Dog(...)' is called elsewhere in the code, and 'this' inside the constructor refers to the object already being constructed at that point.", 2: "'this' has a specific, meaningful functional purpose here (disambiguating between instance variables and same-named parameters); it is not merely optional or purposeless syntax in this context.", 3: "Calling a different constructor in the same class would use 'this(...)' with parentheses (constructor chaining syntax), which is a different, more specific use of the keyword than the 'this.variableName' pattern shown here." },
            tempting: "None of the distractors accurately describe 'this' usage in this specific context if the disambiguation purpose is understood, but the general concept of 'this' referring to the current object can be vaguely known without understanding the SPECIFIC reason it's needed when parameter and field names match.",
            commonMistake: "Not understanding the SPECIFIC reason 'this' is necessary here — namely that identical parameter and instance variable names would otherwise be ambiguous without 'this' explicitly indicating the instance variable.",
            apTip: "Remember: 'this.variableName' always refers to the CURRENT OBJECT's instance variable, which is essential specifically when a parameter or local variable shares the same name as an instance variable — without 'this', 'name = name' would just reassign the parameter to itself, never actually setting the instance variable."
          }
        },
        {
          id: 'csa-2-5', difficulty: 4, type: 'mcq', topic: 'Class Design & Encapsulation',
          prompt: "A class BankAccount has a private instance variable named balance, along with public methods deposit(double amount) and getBalance(). Why is balance declared private rather than public?",
          choices: ['Private variables use less memory than public variables', 'Encapsulation: keeping balance private prevents outside code from directly modifying it in unchecked ways, forcing all changes to go through controlled methods like deposit(), which can enforce rules (e.g., preventing negative deposits)', 'Private variables can only be used within loops', 'Java requires all instance variables to be private by default, with no choice involved'],
          correct: 1,
          explanation: {
            correct: "This reflects encapsulation, a core object-oriented programming principle: making balance private prevents external code from directly and arbitrarily changing it (e.g., accountObj.balance = -1000000), instead forcing all modifications through defined public methods like deposit(), which can include validation logic (like rejecting negative or invalid amounts) to protect the object's internal state and maintain valid, consistent data.",
            wrong: { 0: "Access modifiers (private/public) don't affect memory usage; this is purely about controlling access and visibility to the variable, not a memory optimization technique.", 2: "Access modifiers like private/public have nothing to do with loops; 'private' controls which parts of the code (inside vs. outside the class) can access a variable or method, unrelated to loop usage.", 3: "Java does NOT require all instance variables to be private by default; access modifiers (private, public, protected, or package-private/default) are a deliberate DESIGN CHOICE made by the programmer, not a mandatory language requirement." },
            tempting: "None of the distractors reflect real Java behavior if access modifiers and encapsulation are understood accurately, but vague or fabricated 'rules' about private variables can seem plausible without a clear understanding of WHY encapsulation is a deliberate design principle.",
            commonMistake: "Not understanding the specific PURPOSE of encapsulation (protecting data integrity by controlling access through methods) and instead treating private/public as an arbitrary or automatic language requirement rather than a deliberate design decision.",
            apTip: "On FRQs about class design, explicitly use the term 'encapsulation' and explain its SPECIFIC benefit: private instance variables paired with public methods (getters/setters or more specific methods like deposit()) allow the class to CONTROL and VALIDATE how its internal data is accessed and modified, protecting the object from invalid states."
          }
        },
        {
          id: 'csa-2-6', difficulty: 5, type: 'mcq', topic: 'Wrapper Classes, Overloading, and Object Behavior',
          prompt: "A class has two overloaded methods:\n\npublic void process(int x) { System.out.println(\"int version\"); }\npublic void process(Integer x) { System.out.println(\"Integer version\"); }\n\nWhen calling process(5) (a primitive int literal), which version executes, and why?",
          choices: ['The Integer version, because Java always prefers autoboxing to match object parameter types', 'The int version, because Java\'s method resolution prioritizes an exact primitive type match over autoboxing an int into an Integer object when both options are available', 'This causes a compilation error due to ambiguous method calls', 'Both methods execute, since Java runs all matching overloaded methods'],
          correct: 1,
          explanation: {
            correct: "Java's method overload resolution specifically prioritizes finding an exact, direct primitive type match before considering autoboxing (automatically converting int to Integer); since process(int x) is an exact match for the primitive literal 5, Java calls this version directly WITHOUT needing to autobox 5 into an Integer object, even though a process(Integer x) overload also exists.",
            wrong: { 0: "This reverses Java's actual method resolution priority — Java prefers an exact primitive match FIRST, only falling back to autoboxing when no exact primitive-type match is available among the overloaded methods.", 2: "This specific scenario (both int and Integer overloads with a primitive int argument) is NOT ambiguous in Java; the language's resolution rules clearly and deterministically select the exact primitive match (the int version) without any compilation error.", 3: "Java overload resolution selects exactly ONE best-matching method to execute for a given call; it does not execute multiple overloaded versions simultaneously for a single method call." },
            tempting: "Choice A can tempt students who know autoboxing exists and assume Java might prefer working with objects generally, without knowing the SPECIFIC resolution priority rule that favors an exact primitive match first.",
            commonMistake: "Not knowing Java's specific method overload resolution priority order (exact match, then widening primitive conversion, then autoboxing, then varargs) and instead guessing based on incomplete intuitions about object-oriented preference.",
            apTip: "College-level insight: this exact overload resolution priority (primitive exact match beats autoboxing) is a genuinely advanced Java trivia point beyond typical AP CSA exam scope, but the underlying, AP-relevant lesson — that primitives (int) and their wrapper class counterparts (Integer) are related but distinct types with different behaviors — is very much AP-tested; a strong answer connects this specific example back to that broader, exam-relevant primitive-vs-wrapper distinction."
          }
        }
      ]
    },
    {
      id: 3,
      name: 'Unit 3: Boolean Expressions & if Statements',
      questions: [
        {
          id: 'csa-3-1', difficulty: 1, type: 'mcq', topic: 'Boolean Expressions',
          prompt: "What is the value of the boolean expression: (5 > 3) && (2 == 2)",
          choices: ['true', 'false', '5', 'This causes a compilation error'],
          correct: 0,
          explanation: {
            correct: "5 > 3 evaluates to true, and 2 == 2 evaluates to true; since && (logical AND) requires BOTH sides to be true to produce true, and both sides here are true, the overall expression evaluates to true.",
            wrong: { 1: "false would only result if at least one of the two individual comparisons were false, but both (5 > 3) and (2 == 2) are true.", 2: "5 is not a boolean value and isn't a possible result of a boolean expression using comparison and logical operators like this one.", 3: "This is syntactically valid Java; comparing values with > and == and combining boolean results with && is standard, error-free syntax." },
            tempting: "None of the distractors are especially tricky if && is understood correctly, but confusing && (AND, both must be true) with || (OR, at least one must be true) could lead to correct answers for the wrong reason or errors in trickier cases.",
            commonMistake: "Confusing && (AND) and || (OR) logical operators, or their required conditions for producing a true result.",
            apTip: "Memorize precisely: && (AND) requires BOTH operands to be true to be true; || (OR) requires AT LEAST ONE operand to be true to be true — write out truth tables for both if this distinction isn't automatic yet."
          }
        },
        {
          id: 'csa-3-2', difficulty: 2, type: 'mcq', topic: 'if-else Chains',
          prompt: "What is printed by the following code when score = 75?\n\nif (score >= 90) {\n    System.out.println(\"A\");\n} else if (score >= 80) {\n    System.out.println(\"B\");\n} else if (score >= 70) {\n    System.out.println(\"C\");\n} else {\n    System.out.println(\"F\");\n}",
          choices: ['A', 'B', 'C', 'F'],
          correct: 2,
          explanation: {
            correct: "Java evaluates if-else-if chains in order, checking each condition until one is true: score >= 90 is false (75 is not ≥90), score >= 80 is false (75 is not ≥80), score >= 70 IS true (75 ≥ 70), so \"C\" prints, and the chain stops there without checking the remaining else.",
            wrong: { 0: "score(75) is not ≥ 90, so this first condition is false and its branch does not execute.", 1: "score(75) is not ≥ 80, so this second condition is also false and its branch does not execute.", 3: "The chain stops as soon as it finds a TRUE condition (score >= 70); since that condition is true, the final else branch is never reached or checked." },
            tempting: "None of the distractors are especially close if the sequential, first-match-wins nature of if-else-if chains is understood, but skipping ahead or checking conditions out of order can lead to an incorrect branch being selected.",
            commonMistake: "Not tracing if-else-if chains strictly in order, top to bottom, stopping at the FIRST true condition — sometimes mistakenly checking a later condition even if an earlier one was already true, or vice versa.",
            apTip: "Always trace if-else-if chains top-to-bottom, checking EACH condition in order, and stop (mentally and in your trace) at the very first TRUE condition — only ONE branch of the entire chain ever executes, no matter how many conditions would technically also be true if checked independently."
          }
        },
        {
          id: 'csa-3-3', difficulty: 2, type: 'mcq', topic: 'Compound Boolean Conditions',
          prompt: "Which condition correctly checks whether an integer x is NOT between 10 and 20, inclusive (that is, x is outside the closed range [10, 20])?",
          choices: ['x < 10 && x > 20', 'x < 10 || x > 20', 'x <= 10 || x >= 20', 'x != 10 && x != 20'],
          correct: 1,
          explanation: {
            correct: "\"Between 10 and 20, inclusive\" means 10 <= x <= 20, so 10 and 20 themselves count as being IN that range. \"NOT between, inclusive\" is therefore the negation: x is outside that closed range, meaning x < 10 || x > 20 — this correctly excludes x=10 and x=20 from being flagged (since they ARE within the inclusive range), only flagging values strictly less than 10 or strictly greater than 20.",
            wrong: { 0: "Using && (AND) here is impossible to satisfy — no single value of x can simultaneously be both less than 10 AND greater than 20 at the same time, making this condition always false regardless of x's actual value.", 2: "This uses <= and >=, which would incorrectly flag x=10 and x=20 themselves as being 'not between,' but since the range is defined as INCLUSIVE of 10 and 20, those two values should count as being inside the range, not outside it.", 3: "This only excludes x when it is EXACTLY 10 or EXACTLY 20, but says nothing about the rest of the range — for example, x=15 (which IS between 10 and 20 and should NOT be flagged as 'not between') would incorrectly satisfy this condition too, since 15 != 10 and 15 != 20 are both true." },
            tempting: "Choice A is the classic trap — using && instead of || for a 'not between' compound condition, creating a condition that can never be true, since no number can be both less than 10 and greater than 20 simultaneously.",
            commonMistake: "Using <= and >= (inclusive comparisons) when negating an inclusive range, rather than recognizing that negating an inclusive range boundary requires STRICT inequalities (< and >) to correctly exclude the original range's endpoints from the 'not between' result.",
            apTip: "When negating a range condition, flip both the logical connective (AND becomes OR, or vice versa) AND each comparison operator to its strict/non-strict opposite (>= becomes <, <= becomes >) — applying De Morgan's Law carefully to both the connective and the comparison operators together avoids boundary (off-by-one-style) errors."
          }
        },
        {
          id: 'csa-3-4', difficulty: 3, type: 'mcq', topic: 'Short-Circuit Evaluation',
          prompt: "Given: int x = 5;\nboolean result = (x > 10) && (10 / (x - 5) > 1);\n\nWhat happens when this code executes, and why?",
          choices: ['A runtime ArithmeticException (divide by zero) occurs, since x - 5 evaluates to 0', 'result is set to false, and NO exception occurs, because && uses short-circuit evaluation: since (x > 10) is false, Java never evaluates the second operand at all', 'result is set to true', 'A compilation error occurs since dividing by a variable is not allowed'],
          correct: 1,
          explanation: {
            correct: "Java's && operator uses short-circuit evaluation: if the LEFT operand is false, the entire && expression is guaranteed to be false regardless of the right operand, so Java doesn't even evaluate the right side; since (x > 10) is false (5 is not > 10), the second operand (10 / (x-5), which WOULD cause division by zero) is never evaluated, avoiding the exception entirely, and result is simply set to false.",
            wrong: { 0: "This would occur if Java always evaluated both sides of &&, but short-circuit evaluation specifically PREVENTS this exception by skipping the right operand once the left is already known to be false.", 2: "result cannot be true, since the left operand (x > 10) is false, and && can never produce true when either operand is false — false is the guaranteed, correct result here.", 3: "Dividing by a variable is completely valid, ordinary Java syntax; the concern here isn't a compile-time syntax issue but a potential RUNTIME issue (division by zero), which short-circuit evaluation happens to avoid in this specific case." },
            tempting: "Choice A is a very reasonable-seeming trap for students who don't know about short-circuit evaluation and assume Java always evaluates every part of a boolean expression regardless of earlier results.",
            commonMistake: "Not knowing that && and || use short-circuit evaluation in Java, assuming instead that both sides of a compound boolean expression are always fully evaluated regardless of the left side's result.",
            apTip: "Memorize short-circuit evaluation precisely: for &&, if the left operand is false, the right operand is never evaluated (result is guaranteed false); for ||, if the left operand is true, the right operand is never evaluated (result is guaranteed true) — this is a frequently tested behavior, especially in code that might otherwise cause an exception (like division by zero or null access) on the right-hand side."
          }
        },
        {
          id: 'csa-3-5', difficulty: 4, type: 'mcq', topic: 'De Morgan\'s Laws',
          prompt: "Which expression is logically equivalent to !(a || b), according to De Morgan\'s Laws?",
          choices: ['!a || !b', '!a && !b', 'a && b', '!a || b'],
          correct: 1,
          explanation: {
            correct: "De Morgan's Laws state that !(a || b) is logically equivalent to (!a && !b) — negating an OR expression flips it into an AND of the individually negated terms; intuitively, 'NOT (a or b)' means neither a nor b is true, which is the same as saying 'not a AND not b.'",
            wrong: { 0: "This applies the OR (not AND) version incorrectly to this specific negated-OR expression; !a || !b is actually the De Morgan's equivalent of !(a && b), a different original expression than the one given here.", 2: "This drops the negations entirely, which isn't a valid logical transformation of the original negated expression at all.", 3: "This only negates one of the two variables (a) while leaving b unnegated, and also incorrectly keeps the || operator instead of converting to &&, not correctly applying De Morgan's transformation rule to either term." },
            tempting: "Choice A is the classic De Morgan's mix-up — correctly negating both terms but using the WRONG corresponding operator (using || instead of &&, mixing up which negated-compound expression pairs with which transformation).",
            commonMistake: "Correctly negating both individual terms but pairing them with the wrong logical operator, or only remembering one of the two De Morgan's transformation rules and misapplying it to the other case.",
            apTip: "Memorize BOTH De Morgan's transformations as a pair: !(a || b) = !a && !b (negated OR becomes AND of negations); !(a && b) = !a || !b (negated AND becomes OR of negations) — notice the operator always SWITCHES (|| becomes &&, or && becomes ||) whenever you distribute a negation through it."
          }
        },
        {
          id: 'csa-3-6', difficulty: 5, type: 'mcq', topic: 'Nested Conditionals & Logical Equivalence',
          prompt: "Two code segments are proposed to check if a student passes a course, requiring BOTH an exam score of at least 60 AND at least 80% attendance:\n\nSegment 1:\nif (examScore >= 60) {\n    if (attendance >= 0.80) {\n        pass = true;\n    }\n}\n\nSegment 2:\nif (examScore >= 60 && attendance >= 0.80) {\n    pass = true;\n}\n\nAre these two segments logically equivalent in their effect on the pass variable?",
          choices: ['No, Segment 1 will always set pass to true more often than Segment 2', 'Yes, both segments set pass to true under exactly the same combined condition (both examScore >= 60 AND attendance >= 0.80), just structured differently (nested ifs vs. a single compound condition)', 'No, Segment 2 contains a syntax error and won\'t compile', 'Yes, but only when examScore is exactly 60'],
          correct: 1,
          explanation: {
            correct: "Both segments are logically equivalent: a nested if statement (Segment 1) where the inner if only executes when the outer if is also true functions identically to a single if statement using && to combine both conditions (Segment 2) — in both cases, pass is set to true if and only if BOTH conditions (examScore >= 60 AND attendance >= 0.80) are true simultaneously.",
            wrong: { 0: "Both segments require the exact same combined condition to be true before setting pass to true; Segment 1 doesn't set pass to true under any additional circumstances that Segment 2 wouldn't also cover.", 2: "Segment 2 is syntactically valid, standard Java — combining two boolean conditions with && inside a single if statement's parentheses is completely normal, error-free syntax.", 3: "The equivalence between nested ifs and a compound && condition holds generally for ALL values of examScore and attendance, not just the specific boundary case of examScore being exactly 60." },
            tempting: "None of the incorrect options reflect a correct understanding of nested-if vs. compound-condition equivalence, but not recognizing this equivalence at all (assuming nested ifs must behave differently from a single compound condition) is a common conceptual gap for students newer to conditional logic.",
            commonMistake: "Not recognizing that a nested if (inner if only reached when outer if is true) and a single if using && are two different SYNTACTIC structures that produce IDENTICAL logical behavior — assuming structurally different code must also behave differently.",
            apTip: "Recognize this specific, frequently tested equivalence pattern: nesting one if inside another (where the inner if has no accompanying else) is always logically equivalent to combining both conditions with && in a single if statement — being able to convert between these two equivalent forms is a common AP CSA free-response and multiple-choice skill."
          }
        }
      ]
    },
    {
      id: 4,
      name: 'Unit 4: Iteration',
      questions: [
        {
          id: 'csa-4-1', difficulty: 1, type: 'mcq', topic: 'While Loops',
          prompt: "How many times will \"Hi\" be printed by the following code?\n\nint i = 0;\nwhile (i < 5) {\n    System.out.println(\"Hi\");\n    i++;\n}",
          choices: ['4', '5', '6', 'Infinitely'],
          correct: 1,
          explanation: {
            correct: "The loop starts with i = 0 and continues as long as i < 5, printing 'Hi' and incrementing i each iteration; it runs for i = 0, 1, 2, 3, 4 (five total iterations) before i becomes 5 and the condition i < 5 becomes false, stopping the loop — so 'Hi' is printed 5 times.",
            wrong: { 0: "4 undercounts by one iteration; tracing through i = 0,1,2,3,4 shows the loop body executes 5 times before the condition fails, not 4.", 2: "6 overcounts by one iteration; the loop stops as soon as i reaches 5 (since 5 < 5 is false), so the body doesn't execute a 6th time.", 3: "The loop does NOT run infinitely, since i is properly incremented (i++) each iteration, eventually causing the condition i < 5 to become false and terminating the loop." },
            tempting: "Choice A is a common off-by-one error, undercounting by not tracing the final iteration where i = 4 (which still satisfies i < 5) before the loop stops.",
            commonMistake: "Off-by-one counting errors in loop tracing — miscounting how many times a loop body executes relative to its starting and stopping condition values.",
            apTip: "For any loop-counting question, physically trace through the variable's value at the START of each iteration (0, 1, 2, 3, 4 here) and check the condition each time — this trace-through method prevents off-by-one errors far more reliably than mental math shortcuts."
          }
        },
        {
          id: 'csa-4-2', difficulty: 2, type: 'mcq', topic: 'For Loops',
          prompt: "What is the output of the following code?\n\nfor (int i = 10; i > 0; i -= 3) {\n    System.out.print(i + \" \");\n}",
          choices: ['10 7 4 1', '10 7 4 1 -2', '10 9 8 7', 'This code causes an infinite loop'],
          correct: 0,
          explanation: {
            correct: "The loop starts at i=10, continues while i > 0, and decreases i by 3 each iteration: prints 10 (10>0, true), then i becomes 7 (7>0, true, prints 7), then i becomes 4 (4>0, true, prints 4), then i becomes 1 (1>0, true, prints 1), then i becomes -2 (-2>0, false, loop stops) — so the printed sequence is exactly '10 7 4 1 '.",
            wrong: { 1: "This includes an extra '-2' at the end, but the loop condition (i > 0) is checked BEFORE each print statement executes; once i becomes -2, the condition fails and the loop body (including the print) does not execute again.", 2: "This uses a decrement of 1 (or increment) rather than correctly applying the actual update statement given in the code (i -= 3), which decreases i by 3 each time, not 1.", 3: "This loop is NOT infinite — i strictly decreases by 3 each iteration, and will eventually become ≤ 0 (specifically becoming -2), causing the loop condition to become false and the loop to terminate normally." },
            tempting: "Choice B is tempting because it's easy to forget that the loop CONDITION is checked before the loop body runs each time, mistakenly printing one extra value that technically fails the condition.",
            commonMistake: "Forgetting that a for-loop's condition is checked BEFORE the loop body executes on each iteration (including the very last, failing check), leading to an extra iteration being incorrectly included in the trace.",
            apTip: "When tracing a for-loop, use the precise sequence: check condition → if true, execute body → apply update statement → check condition again → repeat; stop immediately once the condition check fails, BEFORE executing the body again — writing out this exact sequence prevents both off-by-one undercounting and overcounting errors."
          }
        },
        {
          id: 'csa-4-3', difficulty: 2, type: 'mcq', topic: 'Nested Loops',
          prompt: "How many total times will the inner System.out.print statement execute in the following nested loop?\n\nfor (int i = 0; i < 3; i++) {\n    for (int j = 0; j < 4; j++) {\n        System.out.print(\"*\");\n    }\n}",
          choices: ['3', '4', '7', '12'],
          correct: 3,
          explanation: {
            correct: "The outer loop runs 3 times (i = 0, 1, 2), and for EACH of those 3 outer iterations, the inner loop runs completely through all 4 of its iterations (j = 0, 1, 2, 3); total executions of the print statement = 3 × 4 = 12.",
            wrong: { 0: "3 only accounts for the outer loop's iteration count, ignoring that the inner loop runs multiple times within EACH outer iteration.", 1: "4 only accounts for the inner loop's iteration count for a SINGLE pass, ignoring that this inner loop repeats itself across all 3 outer loop iterations.", 2: "7 results from incorrectly ADDING the outer and inner loop counts (3+4) instead of correctly MULTIPLYING them, since the inner loop fully repeats for each outer iteration rather than simply combining with it once." },
            tempting: "Choice C is a very common trap for students first learning nested loops — incorrectly adding the loop bounds instead of recognizing that nested loops multiply their total iteration counts.",
            commonMistake: "Adding the outer and inner loop's iteration counts instead of correctly multiplying them to find the total number of times a doubly-nested statement executes.",
            apTip: "For nested loops, always calculate total inner-statement executions by MULTIPLYING the number of iterations of each loop level (outer count × inner count), not adding them — sketch out a small grid or table if needed to visually confirm this for tricky nested loop problems."
          }
        },
        {
          id: 'csa-4-4', difficulty: 3, type: 'mcq', topic: 'Loop-Based Algorithms',
          prompt: "Which code segment correctly computes the sum of all even numbers from 1 to 20 (inclusive)?",
          choices: ['int sum = 0; for (int i = 1; i <= 20; i++) { sum += i; }', 'int sum = 0; for (int i = 2; i <= 20; i += 2) { sum += i; }', 'int sum = 0; for (int i = 1; i <= 20; i += 2) { sum += i; }', 'int sum = 0; for (int i = 0; i < 20; i++) { if (i % 2 == 1) sum += i; }'],
          correct: 1,
          explanation: {
            correct: "Starting i at 2 (the first even number), incrementing by 2 each time (i += 2), and continuing through 20 (i <= 20) correctly iterates through exactly the even numbers 2, 4, 6, ..., 20, summing each one.",
            wrong: { 0: "This sums ALL integers from 1 to 20 (both even and odd), not just the even numbers, since it increments by 1 each time without any filtering.", 2: "This starts at 1 (an odd number) and increments by 2, which actually iterates through only the ODD numbers (1, 3, 5, ..., 19), the opposite of what's needed.", 3: "This checks i % 2 == 1, which correctly identifies ODD numbers (not even), and also only goes up to i < 20 (excluding 20 itself) — both the modulo condition and the range are incorrect for summing even numbers." },
            tempting: "Choice C is tempting because it does use a step of 2, which is the right idea for skipping every other number, but starting at 1 instead of 2 shifts the entire sequence to odd numbers instead of even ones.",
            commonMistake: "Getting the right general STRATEGY (incrementing by 2) but starting at the wrong initial value (1 instead of 2), or confusing the modulo condition for identifying even (i % 2 == 0) versus odd (i % 2 == 1) numbers.",
            apTip: "For 'even numbers only' loops, either start at an even number and increment by 2 (i = 2; i += 2), OR use the condition i % 2 == 0 inside a loop that checks every integer — know both approaches and double-check your starting value/condition matches which set (even vs. odd) you actually want."
          }
        },
        {
          id: 'csa-4-5', difficulty: 4, type: 'mcq', topic: 'Loop Invariants & Off-by-One Errors',
          prompt: "A student writes the following code intending to print all elements of an array called arr, but it throws an ArrayIndexOutOfBoundsException:\n\nfor (int i = 0; i <= arr.length; i++) {\n    System.out.println(arr[i]);\n}\n\nWhat is the specific bug, and how should it be fixed?",
          choices: ['The loop should start at i = 1 instead of i = 0', 'The condition should be i < arr.length instead of i <= arr.length, since valid array indices range from 0 to arr.length - 1', 'The array itself must be declared incorrectly', 'This code has no bug; the exception is unrelated to the loop'],
          correct: 1,
          explanation: {
            correct: "Valid indices for an array of length n range from 0 to n-1 (arr.length - 1); using i <= arr.length allows i to reach arr.length itself on the final iteration, which is one index PAST the last valid index, causing an ArrayIndexOutOfBoundsException — the fix is changing the condition to the strict less-than i < arr.length.",
            wrong: { 0: "Starting at i = 1 would actually cause the loop to SKIP the first valid element (index 0) while still hitting the same out-of-bounds problem at the end; the real issue is the upper bound condition, not the starting index.", 2: "There's no indication the array itself is declared incorrectly; the bug is specifically in the LOOP'S boundary condition (using <= instead of <), not in how the array was created.", 3: "This code definitely has a bug — using <= arr.length is a classic off-by-one error that directly causes the described ArrayIndexOutOfBoundsException by attempting to access one index beyond the array's valid range." },
            tempting: "Choice A can tempt students who sense 'something is off by one' but misidentify WHICH boundary (start vs. end) is actually causing the problem.",
            commonMistake: "Using <= arr.length instead of < arr.length when looping through array indices, forgetting that valid indices only go up to arr.length - 1, not arr.length itself.",
            apTip: "Memorize this array-iteration boundary rule as an absolute rule: valid array indices always range from 0 to arr.length - 1, so the loop condition for iterating through ALL elements should always be i < arr.length (strict less-than), never i <= arr.length — this specific off-by-one bug is one of the most common errors on the actual AP CSA exam's code-tracing and debugging questions."
          }
        },
        {
          id: 'csa-4-6', difficulty: 5, type: 'mcq', topic: 'Algorithm Efficiency with Loops',
          prompt: "Two algorithms both search for a target value in an unsorted array of n elements. Algorithm A uses a single loop checking each element once (linear search). Algorithm B uses a nested loop, comparing every element to every other element. In terms of Big-O time complexity, how do these two algorithms compare?",
          choices: ['Both are O(n), since they both use loops over the same array', 'Algorithm A is O(n) (linear), while Algorithm B is O(n²) (quadratic), since its nested loop structure means work grows proportionally to n multiplied by n', 'Algorithm B is always faster in practice because nested loops process more information', 'Big-O complexity cannot be determined without knowing the actual array size n'],
          correct: 1,
          explanation: {
            correct: "Algorithm A's single loop performs a bounded, constant amount of work per element, checking each of the n elements once, giving O(n) (linear) time complexity; Algorithm B's nested loop structure means that for EACH of the n outer iterations, another n inner iterations occur, giving n × n = n² total operations, resulting in O(n²) (quadratic) time complexity — a nested loop over the same-sized input is the classic signature of quadratic complexity.",
            wrong: { 0: "Both using 'a loop' doesn't mean equal complexity; the STRUCTURE of the loops (single vs. nested) fundamentally changes how the total work scales with n — nested loops over the same n typically produce quadratic, not linear, growth.", 2: "More nested processing doesn't mean 'faster' — quadratic time complexity (O(n²)) means Algorithm B's work grows much faster (and thus takes LONGER) as n increases compared to Algorithm A's linear O(n) growth, especially for large n.", 3: "Big-O complexity describes how an algorithm's running time GROWS as input size n increases in general (an asymptotic, structural property of the algorithm), and can be determined directly from analyzing the code's loop structure without needing to know a specific numerical value for n." },
            tempting: "Choice A can tempt students who see 'loops' in both algorithms and assume equivalent complexity without analyzing the specific NESTED structure that causes Algorithm B's work to scale quadratically rather than linearly.",
            commonMistake: "Not distinguishing between a single loop (typically linear O(n) complexity) and a nested loop over the same-sized input (typically quadratic O(n²) complexity), and instead assuming any loop-based algorithm has the same general complexity.",
            apTip: "College-level insight: recognize the specific STRUCTURAL pattern of nested loops over the same input size as the classic signature of O(n²) quadratic complexity — while formal Big-O analysis is more of a college-level extension beyond the core AP CSA curriculum, understanding that nested loops multiply their iteration counts (as tested in Unit 4 on iteration) is the direct, testable AP-level foundation this deeper concept builds on."
          }
        }
      ]
    },
    {
      id: 5,
      name: 'Unit 5: Writing Classes',
      questions: [
        {
          id: 'csa-5-1', difficulty: 1, type: 'mcq', topic: 'Class Structure Basics',
          prompt: "Which of the following correctly describes the relationship between a class and an object in Java?",
          choices: ['A class and an object are exactly the same thing, with no distinction', 'A class is a blueprint/template that defines properties and behaviors, while an object is a specific instance created from that class', 'An object must be created before its class can be written', 'A class can only ever create exactly one object'],
          correct: 1,
          explanation: {
            correct: "A class serves as a blueprint or template defining what properties (instance variables) and behaviors (methods) its objects will have; an object is a specific INSTANCE created from that class, with its own actual values for those defined properties.",
            wrong: { 0: "A class and object are related but distinct concepts — the class is the template/definition, while an object is an actual instance created using that template; they aren't identical.", 2: "The class must be WRITTEN/DEFINED first, before any objects can be created FROM it using that class definition — the order described here is reversed.", 3: "A single class can be used to create MANY different objects (instances), each potentially having different specific values for their instance variables — a class isn't limited to producing just one object." },
            tempting: "None of the distractors accurately describe the class-object relationship if it's understood precisely, but conflating the two concepts (or reversing their creation order) is a common early source of confusion for those new to object-oriented programming.",
            commonMistake: "Not clearly distinguishing between a class (the blueprint/definition) and an object (a specific instance created from that blueprint), or confusing the order in which they're created (class definition must come first).",
            apTip: "Use a real-world analogy to anchor this distinction: a class is like a cookie cutter (the template/shape definition), while objects are like the individual cookies made using that cutter (each cookie is a separate instance, potentially decorated/varied differently, but sharing the same basic shape defined by the cutter)."
          }
        },
        {
          id: 'csa-5-2', difficulty: 2, type: 'mcq', topic: 'Accessor and Mutator Methods',
          prompt: "In a well-designed class with a private instance variable, a method that returns the current value of that variable without changing it is typically called a(n):",
          choices: ['Mutator method (setter)', 'Accessor method (getter)', 'Constructor', 'Static method'],
          correct: 1,
          explanation: {
            correct: "An accessor method (commonly called a 'getter') is specifically designed to return the current value of a private instance variable WITHOUT modifying it, providing controlled, read-only access to that otherwise-private data from outside the class.",
            wrong: { 0: "A mutator method (setter) is specifically designed to CHANGE/modify an instance variable's value, the opposite purpose of an accessor method that only returns (reads) the current value.", 2: "A constructor is a special method used to INITIALIZE a new object when it's first created (using the 'new' keyword), not a method for retrieving an existing object's current variable value afterward.", 3: "A static method belongs to the class itself rather than to any specific object instance, and isn't specifically defined by the accessor/getter behavior of returning an instance variable's value." },
            tempting: "Choice A is tempting because accessor and mutator methods are commonly discussed together as a pair, but they serve OPPOSITE purposes (reading vs. changing a value), and mixing up which is which is a common vocabulary confusion.",
            commonMistake: "Confusing accessor methods (getters, which READ/return a value) with mutator methods (setters, which CHANGE a value) — these terms are often taught together and can be easily swapped.",
            apTip: "Use the common naming convention as a memory aid: accessor/getter methods are typically named getVariableName() (e.g., getBalance()) and return a value; mutator/setter methods are typically named setVariableName(newValue) (e.g., setBalance(500)) and don't return a value, instead modifying the instance variable directly."
          }
        },
        {
          id: 'csa-5-3', difficulty: 2, type: 'mcq', topic: 'Method Overloading',
          prompt: "A class has two methods both named calculateArea, but one takes a single parameter (for a square) and the other takes two parameters (for a rectangle). This is an example of:",
          choices: ['A compilation error, since two methods cannot share the same name', 'Method overloading, where multiple methods share the same name but have different parameter lists (different number and/or types of parameters)', 'Method overriding', 'Constructor chaining'],
          correct: 1,
          explanation: {
            correct: "Method overloading allows multiple methods within the same class to share the same name, as long as they have different parameter lists (differing in number of parameters, parameter types, or both); Java determines which specific version to call based on the arguments provided at the call site.",
            wrong: { 0: "This is NOT a compilation error — Java explicitly supports having multiple methods with the same name in a class, AS LONG AS their parameter lists differ (which is exactly method overloading), so this is valid, legal Java code.", 2: "Method overriding refers to a SUBCLASS redefining a method it inherited from a superclass with the SAME signature (same name AND same parameters) — a different concept involving inheritance, not simply having multiple same-named methods with different parameters in one class.", 3: "Constructor chaining refers to one constructor calling another constructor within the same class (using this(...)) or a superclass's constructor (using super(...)), a different specific technique unrelated to having multiple same-named methods with different parameter lists." },
            tempting: "Choice C is tempting because 'overloading' and 'overriding' sound very similar and are easily confused, but they describe different concepts — overloading involves multiple methods in the SAME class with different parameters, while overriding involves a SUBCLASS redefining an inherited method with the SAME parameters.",
            commonMistake: "Confusing method overloading (same name, different parameters, within one class) with method overriding (same name AND same parameters, but redefined in a subclass) — these terms sound similar but describe distinct concepts.",
            apTip: "Keep overloading and overriding clearly distinguished: OVERLOADING = same method name, DIFFERENT parameter lists, within the SAME class; OVERRIDING = same method name, SAME parameter list, redefined in a SUBCLASS that inherits from a superclass — the key distinguishing question is whether parameters differ (overloading) or classes/inheritance are involved (overriding)."
          }
        },
        {
          id: 'csa-5-4', difficulty: 3, type: 'mcq', topic: 'The toString Method',
          prompt: "A class defines a custom toString() method. What is the primary purpose of overriding this method?",
          choices: ['To prevent the object from ever being printed', 'To provide a custom, readable String representation of the object, which is automatically used when the object is printed or concatenated with a String', 'To convert the object into an integer', 'toString() cannot be overridden in Java'],
          correct: 1,
          explanation: {
            correct: "Overriding toString() allows a class to define a custom, meaningful String representation of its objects (e.g., showing relevant instance variable values in a readable format); this custom version is automatically called whenever the object is passed to System.out.println(), concatenated with a String using +, or otherwise implicitly converted to a String.",
            wrong: { 0: "Overriding toString() doesn't prevent printing; it specifically CONTROLS what text representation appears WHEN the object is printed, providing more useful/readable output rather than blocking printing entirely.", 2: "toString() specifically converts an object to a STRING representation, not to an integer or other numeric type — a different conversion method would be needed for numeric conversion.", 3: "toString() is a method inherited from the Object class that CAN be (and very commonly is) overridden by any custom class to provide more meaningful output than the default version (which typically shows just the class name and a memory reference)." },
            tempting: "None of the distractors accurately describe toString()'s actual purpose if the method is understood specifically, but not knowing this specific, very commonly used method could lead to any of these incorrect guesses about its function.",
            commonMistake: "Not knowing that toString() is a method inherited from Object that's commonly and intentionally overridden to customize how an object appears when printed or converted to a String, rather than assuming it has a restrictive or unrelated purpose.",
            apTip: "Always remember that without a custom toString() override, printing an object directly (System.out.println(myObject)) shows an unhelpful default representation (like ClassName@somehashcode); overriding toString() to return a meaningful, readable String (e.g., showing the object's key instance variable values) is standard, expected practice for well-designed classes."
          }
        },
        {
          id: 'csa-5-5', difficulty: 4, type: 'mcq', topic: 'The equals Method',
          prompt: "By default (without overriding), the equals() method inherited from the Object class compares two objects based on:",
          choices: ['Whether their instance variables have identical values', 'Whether they are the exact same object in memory (reference equality), the same behavior as the == operator for objects, unless equals() has been overridden', 'Whether they belong to the same class, regardless of instance variable values', 'Nothing — equals() always returns false by default'],
          correct: 1,
          explanation: {
            correct: "The default equals() method (inherited from Object, before any custom override) compares object REFERENCES — checking whether the two variables point to the exact same object in memory — functionally identical to using the == operator on objects, unless a class specifically overrides equals() to implement custom content-based comparison logic.",
            wrong: { 0: "This describes what a CUSTOM, OVERRIDDEN equals() method is typically designed to do (compare instance variable values/content), but it's NOT the default behavior before any override — the default is reference-based comparison.", 2: "The default equals() method doesn't specifically check class membership as its comparison basis; it checks REFERENCE equality (same object in memory), which inherently requires being the same object (and thus same class), but the comparison logic itself is reference-based, not class-based.", 3: "The default equals() method doesn't always return false; it returns true specifically when comparing an object to itself (or another reference to the exact same object in memory), and false otherwise — it's not unconditionally false." },
            tempting: "Choice A describes the common REASON classes override equals() (to get content-based comparison), which can be confused with what the DEFAULT (non-overridden) behavior actually is (reference-based comparison) — a common mix-up between default behavior and customized behavior.",
            commonMistake: "Confusing the DEFAULT (inherited, non-overridden) behavior of equals() (reference-based comparison, same as ==) with the CUSTOM behavior classes often implement by overriding it (content/value-based comparison) — these are different unless a class explicitly overrides the method.",
            apTip: "Remember: default equals() = same as == (reference comparison); OVERRIDDEN equals() (as classes like String already do, and as custom classes often should) = typically compares actual instance variable content/values — always check whether a specific class has overridden equals() before assuming which comparison behavior applies."
          }
        },
        {
          id: 'csa-5-6', difficulty: 5, type: 'mcq', topic: 'Class Design & Immutability',
          prompt: "A class is designed to be immutable (its instance variables cannot be changed after object creation). Which design choices are necessary to achieve true immutability?",
          choices: ['Making instance variables public so they can be directly accessed but not modified through methods', 'Making instance variables private and final, providing only accessor (getter) methods with no mutator (setter) methods, and ensuring the constructor is the only place where values are assigned', 'Providing both getter and setter methods for every instance variable', 'Immutability cannot be achieved in Java under any circumstances'],
          correct: 1,
          explanation: {
            correct: "True immutability requires: instance variables declared private (preventing direct external access/modification) and often final (ensuring they're assigned exactly once, typically in the constructor), providing ONLY accessor/getter methods (allowing reading but not modification) with NO mutator/setter methods, and ensuring all values are set once during object construction and never changed afterward.",
            wrong: { 0: "Making variables PUBLIC would actually allow direct external modification (defeating immutability); private access (combined with no setters) is what actually prevents unwanted modification, not public access.", 2: "Providing setter methods would directly CONTRADICT immutability, since setters are specifically designed to allow modification of instance variables after object creation — an immutable class should have NO setter methods.", 3: "Immutability is a well-established, commonly used design pattern in Java (the String class itself is a famous example of an immutable class) — it is definitely achievable through specific, deliberate class design choices." },
            tempting: "Choice C can tempt students who default to 'always provide both getters and setters' as a general class design habit, without recognizing that immutability specifically REQUIRES omitting setters entirely.",
            commonMistake: "Defaulting to a 'provide both getters and setters' design pattern automatically, without recognizing that achieving immutability specifically requires deliberately OMITTING setter methods and using private (often final) instance variables set only once in the constructor.",
            apTip: "College-level insight: the String class is the canonical real-world example of Java immutability — every operation that appears to 'modify' a String (like concatenation) actually creates and returns a NEW String object rather than changing the original; use this real, familiar example to explain immutability's practical benefits (thread safety, predictability, safe sharing of references) on an FRQ about class design."
          }
        }
      ]
    },
    {
      id: 6,
      name: 'Unit 6: Array',
      questions: [
        {
          id: 'csa-6-1', difficulty: 1, type: 'mcq', topic: 'Array Basics',
          prompt: "Given: int[] nums = {10, 20, 30, 40}; What is the value of nums[2]?",
          choices: ['10', '20', '30', '40'],
          correct: 2,
          explanation: {
            correct: "Array indexing starts at 0, so nums[0]=10, nums[1]=20, nums[2]=30, nums[3]=40 — the value at index 2 is 30.",
            wrong: { 0: "10 is at index 0, not index 2 — this would be the value if indexing incorrectly started at 1 counting '10' as the 2nd element some other way.", 1: "20 is at index 1, one position before the requested index 2.", 3: "40 is at index 3, one position after the requested index 2." },
            tempting: "Choice B is tempting for students who miscount by one position, a common off-by-one error when working with zero-based indexing.",
            commonMistake: "Forgetting that array indexing starts at 0, not 1, leading to an off-by-one error when identifying the element at a given index.",
            apTip: "Always write out the array with each element's index labeled underneath (10=index 0, 20=index 1, 30=index 2, 40=index 3) when working through array indexing problems — this prevents zero-indexing confusion."
          }
        },
        {
          id: 'csa-6-2', difficulty: 1, type: 'mcq', topic: 'Array Length',
          prompt: "Given: int[] arr = new int[7]; What is the value of arr.length?",
          choices: ['6', '7', '8', 'arr.length is not valid syntax for arrays'],
          correct: 1,
          explanation: {
            correct: "arr.length gives the total number of elements the array was declared to hold; since arr was created with new int[7], it has 7 elements, so arr.length equals 7.",
            wrong: { 0: "6 would be the highest valid INDEX (since indices range from 0 to length-1), not the length itself — don't confuse the highest index with the total count.", 2: "8 overcounts the array's declared size; new int[7] creates exactly 7 elements, not 8.", 3: "length is a valid, commonly used property for arrays in Java (note: no parentheses, unlike String's length() method) — this is completely valid syntax." },
            tempting: "Choice A is tempting because the highest valid INDEX for a 7-element array is 6 (since indices go from 0 to 6), but the LENGTH itself is 7, a distinction that's easy to blur.",
            commonMistake: "Confusing an array's length (total element count) with its highest valid index (length - 1) — these are related but different numbers.",
            apTip: "Remember: for an array of length n, valid indices range from 0 to n-1; the length itself (arr.length, no parentheses for arrays) always equals the total number of elements — keep 'length' and 'highest index' as two distinctly different numbers, always differing by exactly 1."
          }
        },
        {
          id: 'csa-6-3', difficulty: 2, type: 'mcq', topic: 'Array Traversal',
          prompt: "What is printed by the following code?\n\nint[] arr = {5, 10, 15};\nint sum = 0;\nfor (int i = 0; i < arr.length; i++) {\n    sum += arr[i];\n}\nSystem.out.println(sum);",
          choices: ['15', '30, since 5+10+15=30', '3', '0'],
          correct: 1,
          explanation: {
            correct: "The loop iterates through all three elements (i=0,1,2), adding each to sum: sum starts at 0, becomes 0+5=5, then 5+10=15, then 15+15=30 — the final printed value is 30.",
            wrong: { 0: "15 is only the LAST element added (arr[2]), not the cumulative sum of all three elements.", 2: "3 is the array's LENGTH (number of elements), not the sum of the elements' values.", 3: "0 is only the INITIAL value of sum before the loop runs; it doesn't reflect the accumulated total after the loop completes." },
            tempting: "Choice A is tempting for students who might trace only the final iteration's addition rather than tracking the cumulative running total across all iterations.",
            commonMistake: "Not correctly tracking the cumulative/running total across all loop iterations, instead reporting only the last individual value added or another intermediate value.",
            apTip: "When tracing accumulator-pattern loops (like summing array elements), explicitly track the running total's value AFTER each individual iteration in a small table, rather than trying to compute the final answer directly in your head — this prevents losing track of intermediate additions."
          }
        },
        {
          id: 'csa-6-4', difficulty: 3, type: 'mcq', topic: 'Array Algorithms — Finding Maximum',
          prompt: "A method is designed to find the maximum value in an array. Which initialization for the \"max\" tracking variable is most robust and correct?",
          choices: ['Initialize max to 0, assuming all array values will be positive', 'Initialize max to the array\'s FIRST element (arr[0]), then compare each subsequent element against this running max, updating as needed', 'Initialize max to Integer.MAX_VALUE', 'Initialize max to the array\'s LAST element only, without checking any other elements'],
          correct: 1,
          explanation: {
            correct: "Initializing max to the array's first element (arr[0]) and then comparing every subsequent element against this running maximum (updating max whenever a larger value is found) is the standard, robust approach that correctly works regardless of whether array values are positive, negative, or zero.",
            wrong: { 0: "Assuming all values will be positive and initializing to 0 is NOT robust — if all actual array values happen to be negative, this incorrect initialization would produce a wrong result (0, which isn't even in the array), rather than the true (negative) maximum.", 2: "Initializing to Integer.MAX_VALUE would mean this initial 'max' value is never actually replaced/updated (since no realistic array value would exceed it), causing the method to incorrectly return Integer.MAX_VALUE instead of the array's actual highest value.", 3: "Using only the last element without checking any other elements would ignore the rest of the array entirely, very likely producing an incorrect result unless the last element happens to coincidentally be the true maximum." },
            tempting: "Choice A is a common but subtly flawed approach — it happens to work correctly if all values ARE positive, but fails silently and incorrectly for arrays containing negative numbers, a common source of hard-to-notice bugs.",
                    commonMistake: "Initializing a 'max' tracking variable to an arbitrary constant (like 0) that makes unwarranted assumptions about the data's range, rather than correctly initializing it to the array's own first actual element.",
            apTip: "For finding max (or min) in an array, always initialize the tracking variable to the array's FIRST ELEMENT (arr[0]), then loop starting from index 1 (or index 0, redundantly re-checking the first element against itself) comparing and updating as needed — this approach is robust regardless of whether the data is positive, negative, or mixed."
          }
        },
        {
          id: 'csa-6-5', difficulty: 4, type: 'mcq', topic: 'Array Reference Semantics',
          prompt: "Consider the following code:\n\nint[] arr1 = {1, 2, 3};\nint[] arr2 = arr1;\narr2[0] = 99;\nSystem.out.println(arr1[0]);\n\nWhat is printed, and why?",
          choices: ['1, since arr1 and arr2 are completely independent, separate arrays', '99, since arr2 = arr1 copies the REFERENCE (not the actual array data), so arr1 and arr2 both point to the exact same underlying array in memory', '0, since arrays cannot be assigned to each other this way', 'This code causes a compilation error'],
          correct: 1,
          explanation: {
            correct: "When you write arr2 = arr1, you're copying the REFERENCE (essentially, the memory address) to the array, not creating a new, independent copy of the array's actual data; both arr1 and arr2 now point to the SAME underlying array object, so modifying an element through EITHER variable (like arr2[0]=99) affects the SAME data, visible through BOTH variable names — printing arr1[0] shows 99.",
            wrong: { 0: "This assumes arr1 and arr2 are independent copies, but array assignment in Java copies the REFERENCE, not the data itself — they actually refer to the exact same array in memory, so changes through one are visible through the other.", 2: "This assignment (arr2 = arr1) is completely valid, standard Java syntax for copying an array reference; it doesn't cause any error or default to zero.", 3: "This code is syntactically valid and will compile and run without error; it demonstrates reference semantics for arrays (a valid, if sometimes surprising, behavior), not an error." },
            tempting: "Choice A represents a very common and important misconception — assuming that assigning one array variable to another creates an independent copy, when in Java (as with all object/reference types), this assignment only copies the REFERENCE, not the underlying data.",
            commonMistake: "Assuming that arr2 = arr1 creates a separate, independent copy of the array's data, rather than correctly understanding that arrays are reference types, so this assignment makes both variables point to the SAME underlying array.",
            apTip: "Remember that arrays (like all non-primitive types in Java) are reference types — assigning one array variable to another (arr2 = arr1) does NOT copy the data, it copies the REFERENCE, making both variable names point to the identical underlying array; to make an actual independent COPY of an array's data, you must explicitly copy each element (e.g., using a loop, or methods like Arrays.copyOf())."
          }
        },
        {
          id: 'csa-6-6', difficulty: 5, type: 'mcq', topic: 'Array Algorithms — Efficient Search',
          prompt: "A sorted array of 1,000 elements is searched using binary search instead of linear search. Approximately how many comparisons does binary search require in the worst case, compared to linear search\'s worst case of 1,000 comparisons?",
          choices: ['About 1,000 comparisons, the same as linear search', 'About 10 comparisons, since binary search\'s worst case is approximately log₂(n), and log₂(1000) ≈ 10', 'About 500 comparisons (half of linear search)', 'About 2 comparisons, regardless of array size'],
          correct: 1,
          explanation: {
            correct: "Binary search's worst-case number of comparisons is approximately log₂(n), since each comparison eliminates half of the remaining search space; for n=1000, log₂(1000) ≈ 9.97, so approximately 10 comparisons are needed in the worst case — a dramatic improvement over linear search's worst case of up to 1000 comparisons.",
            wrong: { 0: "This describes linear search's worst case, not binary search's — binary search is specifically designed to be much more efficient than this by repeatedly halving the search space.", 2: "This assumes binary search simply cuts the total comparisons in half in a linear way, but the actual relationship is LOGARITHMIC (repeatedly halving the remaining search space each step), giving a much smaller number of comparisons (~10) than simply halving 1000 (~500).", 3: "This drastically undercounts the required comparisons; while binary search is very efficient, it still requires approximately log₂(n) comparisons, which is about 10 for n=1000, not a small constant like 2 regardless of size." },
            tempting: "Choice C is tempting because 'binary' suggests dividing by 2 just once, but binary search's efficiency comes from REPEATEDLY halving the search space at EACH step, producing a logarithmic (not simply halved) relationship with the total array size.",
            commonMistake: "Misunderstanding binary search's efficiency as a simple one-time halving of the total comparison count, rather than correctly recognizing the logarithmic relationship (repeated halving at each step) that makes it dramatically more efficient for large arrays.",
            apTip: "College-level insight: memorize that binary search's worst-case time complexity is O(log n), meaning the number of comparisons needed grows very slowly even as array size grows dramatically larger (doubling the array size adds only ONE more comparison in the worst case) — this is why binary search is dramatically more efficient than linear search's O(n) for large sorted datasets, a key motivating example for studying algorithmic efficiency."
          }
        }
      ]
    },
    {
      id: 7,
      name: 'Unit 7: ArrayList',
      questions: [
        {
          id: 'csa-7-1', difficulty: 1, type: 'mcq', topic: 'ArrayList Basics',
          prompt: "Which of the following is a key advantage of an ArrayList compared to a regular array?",
          choices: ['ArrayLists can only store primitive types like int and double', 'ArrayLists can dynamically grow and shrink in size, unlike arrays which have a fixed size once created', 'ArrayLists are always faster than arrays for every operation', 'ArrayLists cannot store any objects, only null values'],
          correct: 1,
          explanation: {
            correct: "A key advantage of ArrayList is that it can dynamically grow or shrink in size as elements are added or removed, unlike a regular array, whose size is fixed permanently once it's created with 'new'.",
            wrong: { 0: "ArrayLists specifically CANNOT store primitive types directly; they store OBJECTS, which is why primitives must be autoboxed into their wrapper class equivalents (int becomes Integer, double becomes Double) to be stored in an ArrayList.", 2: "ArrayLists are not universally faster than arrays for every operation; arrays can actually be faster for simple, fixed-size, direct-index access in some cases, while ArrayList's dynamic resizing and object-wrapping overhead can add some cost — the real advantage is FLEXIBILITY (dynamic sizing), not universal speed.", 3: "ArrayLists specifically CAN and do store actual objects (not just null values) — this is one of their primary uses, storing and managing collections of real object data." },
            tempting: "Choice C is tempting because ArrayList's added flexibility might suggest it's simply 'better' in every way, but the actual key, specific advantage over arrays is dynamic SIZING/flexibility, not universal speed superiority.",
            commonMistake: "Assuming ArrayList is uniformly 'better' or 'faster' than arrays in every respect, rather than correctly identifying its SPECIFIC key advantage (dynamic resizing) as distinct from performance considerations.",
            apTip: "Remember the core trade-off: arrays have FIXED size (set once at creation) but can directly store primitives and can be slightly more efficient for simple fixed-size use; ArrayLists have DYNAMIC size (can grow/shrink) but can only store objects (requiring autoboxing for primitive-like data) — choose based on whether your collection's size needs to change."
          }
        },
        {
          id: 'csa-7-2', difficulty: 2, type: 'mcq', topic: 'Common ArrayList Methods',
          prompt: "Given: ArrayList<String> list = new ArrayList<>();\nlist.add(\"apple\");\nlist.add(\"banana\");\nlist.add(\"cherry\");\nlist.remove(1);\n\nWhat does list now contain?",
          choices: ['[\"apple\", \"banana\", \"cherry\"], since remove(1) doesn\'t actually change anything', '[\"apple\", \"cherry\"], since remove(1) removes the element AT INDEX 1 (\"banana\"), shifting subsequent elements down', '[\"apple\", \"banana\"], since remove(1) removes the LAST element', '[\"banana\", \"cherry\"], since remove(1) removes the FIRST element'],
          correct: 1,
          explanation: {
            correct: "remove(1) removes the element AT INDEX 1 (which is \"banana\", since indexing starts at 0: apple=0, banana=1, cherry=2), and all subsequent elements shift down to fill the gap, leaving [\"apple\", \"cherry\"].",
            wrong: { 0: "remove(1) DOES change the list — it removes the element specifically at index 1, so this claim that nothing changes is incorrect.", 2: "This assumes remove(1) removes the LAST element, but it specifically removes the element AT INDEX 1 (a specific position), not automatically the last one (unless index 1 happened to BE the last index, which isn't the case here with 3 elements).", 3: "This assumes remove(1) removes the FIRST element (index 0), but it specifically targets index 1, which is the SECOND element (\"banana\"), not the first (\"apple\")." },
            tempting: "Choice D is tempting if 1 is confused with 'the first element to remove' in a casual counting sense, rather than correctly interpreting it as the specific zero-based INDEX to target.",
            commonMistake: "Confusing the parameter passed to remove(index) with a casual count (like 'the first item to remove') rather than correctly interpreting it as a specific zero-based index position.",
            apTip: "Always interpret list.remove(index) using zero-based indexing (just like array/String indexing) — remove(1) removes the SECOND element (index 1), not the first; also note that ArrayList's remove() method is overloaded: remove(int index) removes by position, while remove(Object o) removes by matching VALUE — be sure to check which version is being used based on the argument type."
          }
        },
        {
          id: 'csa-7-3', difficulty: 2, type: 'mcq', topic: 'ArrayList Traversal',
          prompt: "What is the safest way to traverse an ArrayList when you need to REMOVE elements that meet a certain condition while iterating?",
          choices: ['Use a standard for-each loop, calling remove() directly on the list during iteration', 'Iterate using a regular for loop, traversing BACKWARDS (from the last index to the first), calling remove() as needed without disrupting the indices of not-yet-visited elements', 'Removing elements while iterating is never possible in Java under any circumstances', 'Always create a completely new, empty ArrayList and just never remove any elements from the original'],
          correct: 1,
          explanation: {
            correct: "Iterating BACKWARDS (from the last index down to the first) with a regular for loop allows safe removal during traversal, since removing an element only shifts elements AFTER it (which have already been visited when going backwards), leaving not-yet-visited earlier elements' indices unaffected.",
            wrong: { 0: "Directly calling remove() on a list during a standard for-each loop typically throws a ConcurrentModificationException, since for-each loops use an iterator internally that doesn't expect the underlying list to change during iteration this way.", 2: "Removing elements while iterating IS possible in Java, using specific safe techniques (like backwards iteration with a regular for loop, or using an Iterator's own remove() method) — it's not universally impossible, just requires care to do correctly.", 3: "This avoids modifying the original list, but doesn't actually address the task (removing elements that meet a condition); it also doesn't reflect a technique for handling removal during iteration at all." },
            tempting: "Choice A is a very common trap for newer programmers — attempting to directly modify a list during a standard for-each loop often causes a runtime exception (ConcurrentModificationException), a frequently encountered real bug.",
            commonMistake: "Attempting to add/remove elements directly during a standard for-each loop (or forward-iterating regular for loop) without accounting for how this shifts indices or invalidates the iterator, leading to skipped elements or runtime exceptions.",
            apTip: "For safely removing elements while iterating, use ONE of these two standard approaches: (1) iterate BACKWARDS using a regular for loop (from list.size()-1 down to 0), or (2) use an Iterator explicitly and call the iterator's own remove() method (not the list's) — avoid using a standard forward for-each loop with direct list modification, since it commonly causes skipped elements or a ConcurrentModificationException."
          }
        },
        {
          id: 'csa-7-4', difficulty: 3, type: 'mcq', topic: 'ArrayList of Objects',
          prompt: "An ArrayList<Student> stores custom Student objects. To find a student with a specific ID number stored in the list, what is the standard approach?",
          choices: ['Use the built-in indexOf() method, which automatically searches by any custom field like ID without any additional setup', 'Traverse the ArrayList with a loop, calling a getter method (like getId()) on each Student object and comparing it to the target ID', 'ArrayLists cannot store custom objects, only built-in types like String or Integer', 'Directly access the ID by calling list.ID, without needing any loop or method calls'],
          correct: 1,
          explanation: {
            correct: "To search for an object matching a specific custom field (like a Student's ID), the standard approach is to traverse the ArrayList with a loop, calling the appropriate getter method (e.g., getId()) on each Student object in turn, and comparing that returned value to the target ID you're searching for.",
            wrong: { 0: "indexOf() searches for an element that is EQUAL (using .equals()) to a specifically provided object/value; it doesn't automatically know how to search by an arbitrary custom field like ID unless the class's equals() method has been specifically overridden to compare by that field, which isn't guaranteed by default.", 2: "ArrayLists absolutely CAN store custom objects (like a custom Student class) — this is one of their most common and powerful uses, storing collections of custom object types, not just built-in types.", 3: "There's no such direct syntax as list.ID; you must access an object's field through its proper getter method (like student.getId()) after retrieving the specific object from the list (e.g., via list.get(index)), not through some direct shortcut on the list itself." },
            tempting: "Choice A can tempt students who know indexOf() exists as a search-related method, without realizing it specifically requires an exact object match (via equals()), not an automatic search by an arbitrary custom field.",
            commonMistake: "Assuming built-in ArrayList methods like indexOf() can automatically search by any arbitrary custom object field, without recognizing that a manual loop with getter method calls is typically needed for this specific kind of custom-field search.",
            apTip: "For searching a list of custom objects by a specific field, always write an explicit loop: iterate through the list, call the relevant getter method on each element, and compare that returned value to your target — this manual traversal-and-compare pattern is a fundamental, frequently tested ArrayList-of-objects technique."
          }
        },
        {
          id: 'csa-7-5', difficulty: 4, type: 'mcq', topic: 'ArrayList vs. Array Trade-offs',
          prompt: "A program needs to store a collection of numbers where the exact quantity is not known in advance and may change frequently as the program runs (numbers being added and removed regularly). Which data structure is more appropriate, and why?",
          choices: ['A regular array, since arrays are always the best choice for storing numbers', 'An ArrayList (using the Integer wrapper class), since its dynamic resizing capability is well-suited to a collection whose size changes frequently and unpredictably during program execution', 'Neither an array nor an ArrayList can handle a changing quantity of elements', 'A single int variable, since it can hold any number of values simultaneously'],
          correct: 1,
          explanation: {
            correct: "An ArrayList (storing Integer objects, since ArrayLists require object types rather than primitives) is well-suited to this scenario specifically because its size can dynamically grow and shrink as elements are added or removed during program execution, unlike a regular array's fixed size that would require manual resizing (creating a new, larger/smaller array and copying elements) to handle a changing element count.",
            wrong: { 0: "Arrays have a FIXED size once created; while arrays are useful in many contexts, they aren't well-suited to a scenario with a frequently and unpredictably CHANGING quantity of elements without significant extra manual resizing work.", 2: "Both data structures CAN handle collections of numbers; the specific question is about which is more convenient/appropriate for a FREQUENTLY CHANGING quantity, and ArrayList's dynamic resizing capability specifically addresses this need better than a fixed-size array.", 3: "A single int variable can only hold ONE value at a time, not a whole collection of numbers; this doesn't address the need to store multiple numbers at all." },
            tempting: "None of the distractors correctly identify ArrayList's specific advantage for this scenario if the trade-off is understood clearly, but assuming arrays are always the 'default best' choice without considering the specific requirement (frequently changing size) is a common oversimplification.",
            commonMistake: "Not connecting the SPECIFIC scenario requirement (frequently changing, unknown-in-advance quantity) to the data structure feature (dynamic resizing) that specifically addresses that requirement.",
            apTip: "When choosing between array and ArrayList, always ask: 'do I know the exact size in advance, and will it stay fixed?' — if yes, an array can work well (and may be simpler/more efficient for fixed-size numeric data); if the size is unknown in advance or will change frequently, ArrayList's dynamic resizing is the more appropriate, convenient choice."
          }
        },
        {
          id: 'csa-7-6', difficulty: 5, type: 'mcq', topic: 'ArrayList Method Implementation',
          prompt: "You are writing a method that removes all elements from an ArrayList<Integer> that are negative. Which approach correctly and safely accomplishes this?",
          choices: ['for (int i = 0; i < list.size(); i++) { if (list.get(i) < 0) list.remove(i); } — a standard forward loop calling remove() directly', 'for (int i = list.size() - 1; i >= 0; i--) { if (list.get(i) < 0) list.remove(i); } — iterating backwards to safely remove without skipping elements or causing index errors', 'Using a for-each loop: for (int num : list) { if (num < 0) list.remove(num); }', 'This task is impossible to accomplish with an ArrayList'],
          correct: 1,
          explanation: {
            correct: "Iterating BACKWARDS (from the last index down to 0) and calling remove() as needed correctly handles this task: when an element is removed, only the ALREADY-VISITED (higher-index) elements shift, which doesn't affect the not-yet-visited (lower-index) elements still to be checked, avoiding the skipped-element bug that forward iteration with removal causes.",
            wrong: { 0: "This forward-iteration approach has a subtle but serious bug: when an element is removed, all SUBSEQUENT elements shift down to fill the gap, but the loop variable i still increments normally, causing it to SKIP the element that shifted into the just-vacated position — some negative numbers could be missed.", 2: "This has two problems: for-each loops don't allow direct list modification via the list's own remove() method without risking a ConcurrentModificationException, AND remove(num) (with num as an Integer/int) is ambiguous/risky here, since ArrayList's remove() is overloaded (remove(int index) vs. remove(Object o)) and passing an int can be misinterpreted as an index rather than a value to remove.", 3: "This task is definitely accomplishable with an ArrayList, using the correct technique (backwards iteration, or an explicit Iterator's remove() method) — it's a common, standard type of list-filtering operation." },
            tempting: "Choice A is the most dangerous trap — it looks like a perfectly reasonable, straightforward approach, but contains a subtle, classic bug (skipping elements after a removal) that's easy to miss without carefully tracing through an example with multiple consecutive negative numbers.",
            commonMistake: "Using straightforward forward iteration with direct removal, not realizing that removing an element shifts all subsequent elements down, causing the loop's incrementing index to skip over the newly-shifted element (a very common, subtle bug when filtering/removing from a list while iterating forward).",
            apTip: "College-level insight: trace through choice A's approach with a concrete example, like [-1, -2, 3] — when i=0, list.get(0)=-1 (negative, removed), leaving [-2, 3]; i increments to 1, but now list.get(1)=3 (not -2!), meaning -2 gets skipped entirely and never removed — this concrete trace-through demonstrates exactly why backwards iteration (or explicit Iterator use) is the correct, necessary technique for this common removal-while-iterating pattern."
          }
        }
      ]
    },
    {
      id: 8,
      name: 'Unit 8: 2D Array',
      questions: [
        {
          id: 'csa-8-1', difficulty: 1, type: 'mcq', topic: '2D Array Basics',
          prompt: "Given: int[][] grid = new int[3][4]; How many total elements does this 2D array contain?",
          choices: ['7', '12, since it has 3 rows and 4 columns, and 3 × 4 = 12 total elements', '3', '4'],
          correct: 1,
          explanation: {
            correct: "A 2D array declared as new int[3][4] creates 3 rows, each containing 4 columns (elements), for a total of 3 × 4 = 12 individual elements.",
            wrong: { 0: "7 results from adding the dimensions (3+4=7) instead of correctly multiplying them to find the total element count.", 2: "3 is only the number of ROWS, not the total element count across the entire 2D array.", 3: "4 is only the number of COLUMNS (elements per row), not the total element count across all rows." },
            tempting: "Choice A is a common trap — adding the two dimensions instead of correctly multiplying them to find the total number of elements in the full 2D array.",
            commonMistake: "Adding the row and column dimensions instead of correctly multiplying them to find the total number of elements in a 2D array.",
            apTip: "For a 2D array declared as new type[rows][columns], always calculate total elements by MULTIPLYING rows × columns, not adding them — visualize the array as a grid/table to help confirm this multiplication relationship."
          }
        },
        {
          id: 'csa-8-2', difficulty: 2, type: 'mcq', topic: '2D Array Indexing',
          prompt: "Given a 2D array grid, which correctly accesses the element in the 2nd row and 3rd column (using standard zero-based indexing)?",
          choices: ['grid[2][3]', 'grid[1][2], since the 2nd row is at index 1 and the 3rd column is at index 2, using zero-based indexing', 'grid[3][2]', 'grid[2, 3]'],
          correct: 1,
          explanation: {
            correct: "Using zero-based indexing, the '2nd row' corresponds to index 1 (since the 1st row is index 0), and the '3rd column' corresponds to index 2 (since the 1st column is index 0); so grid[1][2] correctly accesses this element.",
            wrong: { 0: "grid[2][3] would access the 3rd row (index 2) and 4th column (index 3) — this is one position off in EACH dimension from what's being asked for.", 2: "grid[3][2] swaps the correct row and column INDICES (using 3 for row and 2 for column, when it should be 1 for row and 2 for column) — this doesn't correctly represent '2nd row, 3rd column.'", 3: "grid[2, 3] uses invalid Java syntax; 2D array access requires SEPARATE bracket pairs for each dimension (grid[row][column]), not a single bracket with a comma-separated pair." },
            tempting: "Choice A is tempting because '2nd row, 3rd column' might seem to directly translate to the numbers 2 and 3, without correctly converting these ordinal positions to their corresponding zero-based INDICES (1 and 2 respectively).",
            commonMistake: "Not converting ordinal position descriptions ('2nd row,' '3rd column') to their correct zero-based index equivalents (subtracting 1 from each), leading to an off-by-one error in one or both dimensions.",
            apTip: "Always explicitly convert ordinal descriptions to zero-based indices by subtracting 1: 'Nth row/column' corresponds to index N-1 — and remember correct 2D array access syntax requires separate bracket pairs, grid[row][column], not a single bracket with a comma."
          }
        },
        {
          id: 'csa-8-3', difficulty: 2, type: 'mcq', topic: 'Traversing 2D Arrays',
          prompt: "Which nested loop structure correctly traverses EVERY element of a 2D array named grid with R rows and C columns?",
          choices: ['for (int i = 0; i < R; i++) { for (int j = 0; j < R; j++) { /* use grid[i][j] */ } }', 'for (int i = 0; i < R; i++) { for (int j = 0; j < C; j++) { /* use grid[i][j] */ } }', 'for (int i = 0; i < C; i++) { for (int j = 0; j < R; j++) { /* use grid[i][j] */ } }', 'for (int i = 0; i < R + C; i++) { /* use grid[i][i] */ }'],
          correct: 1,
          explanation: {
            correct: "The correct nested loop structure uses the outer loop (typically representing rows) bounded by R (total rows), and the inner loop (typically representing columns) bounded by C (total columns): for(i=0;i<R;i++){ for(j=0;j<C;j++){ grid[i][j] } } — this correctly visits every single element exactly once.",
            wrong: { 0: "This incorrectly uses R (rows) as the bound for BOTH loops, rather than correctly using C (columns) for the inner loop; if R≠C, this would either miss elements or cause an ArrayIndexOutOfBoundsException.", 2: "This swaps R and C between the outer and inner loops; while this specific swap might still traverse all elements correctly in a purely mathematical sense (just switching row-major vs the wrong bound placement), it specifically MISMATCHES which bound (R or C) governs which index (i or j) as intended for standard row-by-row traversal, and would cause errors or incorrect traversal if R≠C and grid[i][j] indexing assumes i is bounded by R and j by C.", 3: "This uses only a SINGLE loop with a single index i used for BOTH dimensions (grid[i][i]), which only visits diagonal-like elements (and only makes sense if R=C), completely failing to visit most elements in a typical rectangular 2D array." },
            tempting: "Choice A is a very common typo-like error — accidentally reusing the same bound variable (R) for both loops instead of correctly using the DIFFERENT bound (C) for the inner loop.",
            commonMistake: "Accidentally using the same dimension's bound (like R) for both the outer AND inner loop, rather than correctly matching each loop to its OWN correct dimension bound (R for rows/outer, C for columns/inner).",
            apTip: "Always match each nested loop to its own correct bound explicitly: outer loop index (commonly i, representing rows) should be bounded by the TOTAL ROWS, and inner loop index (commonly j, representing columns) should be bounded by the TOTAL COLUMNS — double-check that you haven't accidentally reused one bound for both loops, especially when R and C might differ (a non-square 2D array)."
          }
        },
        {
          id: 'csa-8-4', difficulty: 3, type: 'mcq', topic: 'Row-Major vs. Column-Major Traversal',
          prompt: "A program needs to process a 2D array column by column (processing all elements in column 0 first, then all elements in column 1, etc.) rather than row by row. How should the nested loop structure be modified from the standard row-by-row traversal?",
          choices: ['No modification is needed; standard row-by-row loops automatically also process column by column', 'Swap which loop is the OUTER loop and which is the INNER loop: make the column index the outer loop (bounded by C) and the row index the inner loop (bounded by R)', 'This kind of traversal is impossible with a 2D array', 'Simply reverse the direction of the existing loops (counting backwards) without changing which is outer/inner'],
          correct: 1,
          explanation: {
            correct: "To traverse column by column, swap the loop structure so that the COLUMN index becomes the OUTER loop (iterating through each column in turn, bounded by C) and the ROW index becomes the INNER loop (iterating through all rows within that current column, bounded by R) — this processes all elements in column 0 first, then column 1, etc., the opposite pattern from standard row-major traversal.",
            wrong: { 0: "Standard row-by-row (row-major) traversal specifically processes all of row 0 first, then row 1, etc. — a fundamentally DIFFERENT order from column-by-column (column-major) traversal; they are not automatically equivalent.", 2: "Column-by-column traversal is absolutely possible with a 2D array — it simply requires restructuring which loop is outer versus inner (as described in the correct answer), not any fundamental limitation of 2D arrays.", 3: "Simply reversing loop DIRECTION (counting backwards) doesn't change the fundamental row-major vs. column-major traversal PATTERN; it would just process the same row-by-row (or column-by-column) order in reverse sequence, not switch between these two different traversal patterns." },
            tempting: "Choice A can tempt students who don't carefully distinguish between traversal ORDER (which element is visited first, second, etc.) and simply visiting 'all the same elements eventually' — the specific SEQUENCE/order differs meaningfully between row-major and column-major traversal.",
            commonMistake: "Not recognizing that swapping which loop is outer vs. inner is what actually changes the traversal order from row-major to column-major, rather than assuming any nested loop structure automatically produces the same processing order.",
            apTip: "Remember this key structural principle: the OUTER loop determines the 'major' grouping (processed one complete group at a time), while the INNER loop cycles through all sub-elements WITHIN each outer group — for row-major (standard) traversal, rows are outer/columns are inner; for column-major traversal, SWAP this, making columns outer/rows inner."
          }
        },
        {
          id: 'csa-8-5', difficulty: 4, type: 'mcq', topic: '2D Array Algorithms — Diagonal Sum',
          prompt: "For a SQUARE 2D array (same number of rows and columns, n×n), which expression correctly accesses the elements along the main diagonal (top-left to bottom-right)?",
          choices: ['grid[0][0], grid[1][1], grid[2][2], ... — in general, grid[i][i] for i from 0 to n-1', 'grid[i][0] for all i', 'grid[0][j] for all j', 'grid[i][n-i] for all i'],
          correct: 0,
          explanation: {
            correct: "The main diagonal of a square array runs from the top-left corner to the bottom-right corner, where the row index always equals the column index; this is captured by grid[i][i] for i ranging from 0 to n-1 (giving grid[0][0], grid[1][1], grid[2][2], etc.).",
            wrong: { 1: "grid[i][0] for all i describes the entire FIRST COLUMN (column index always 0), not the main diagonal.", 2: "grid[0][j] for all j describes the entire FIRST ROW (row index always 0), not the main diagonal.", 3: "grid[i][n-i] describes the ANTI-diagonal (top-right to bottom-left), not the main diagonal — note this specific formula would also need adjustment (like n-1-i) to correctly stay within valid zero-based index bounds." },
            tempting: "Choice D is tempting because it does describe a genuine diagonal pattern, but it's the ANTI-diagonal (top-right to bottom-left, using n-i, needing adjustment to n-1-i for correct zero-based indexing), not the MAIN diagonal (top-left to bottom-right) that this question specifically asks about.",
            commonMistake: "Confusing the main diagonal (grid[i][i], top-left to bottom-right) with the anti-diagonal (grid[i][n-1-i], top-right to bottom-left) — both are valid 'diagonal' concepts but represent different sets of elements.",
            apTip: "Memorize both diagonal formulas for a square n×n array: main diagonal = grid[i][i] (row index equals column index); anti-diagonal = grid[i][n-1-i] (row and column indices sum to n-1) — sketching a small 3×3 or 4×4 grid and tracing both diagonals by hand helps solidify which formula produces which diagonal."
          }
        },
        {
          id: 'csa-8-6', difficulty: 5, type: 'mcq', topic: 'Jagged Arrays',
          prompt: "Unlike a standard rectangular 2D array (where every row has the same number of columns), a \"jagged array\" in Java allows:",
          choices: ['Each row to have a different number of columns/elements, since each row is actually a separate, independently-sized 1D array', 'Only square (n×n) arrays to be created', 'Arrays to contain a mix of different data types (like int and String) within the same array', 'Jagged arrays are not supported in Java under any circumstances'],
          correct: 0,
          explanation: {
            correct: "A jagged array in Java is implemented as an array of arrays, where each 'row' is actually its own independently-created and independently-sized 1D array — this allows different rows to have different lengths (numbers of columns), unlike a standard rectangular 2D array where every row must have the same fixed number of columns.",
            wrong: { 1: "Jagged arrays specifically allow VARYING row lengths, not a restriction to only square arrays — in fact, jagged arrays are useful precisely BECAUSE they allow non-uniform, non-rectangular row lengths.", 2: "Jagged arrays (like all arrays in Java) still require every element to be of the SAME declared type (e.g., all int, or all String) — Java arrays are NOT designed to mix different data types within a single array structure.", 3: "Jagged arrays ARE fully supported in Java — they're a standard, well-established feature, implemented as an array of arrays where each sub-array can have its own independent length." },
            tempting: "None of the distractors accurately describe jagged arrays if the concept is understood specifically, but assuming all 2D-array-like structures must be perfectly rectangular (or assuming Java arrays can mix types) reflects common misconceptions this question is designed to test.",
            commonMistake: "Assuming all 2D array-like structures in Java must have uniform, rectangular dimensions (every row the same length), rather than recognizing that jagged arrays specifically allow and are named for their non-uniform, varying row lengths.",
            apTip: "College-level insight: jagged arrays are useful for representing naturally non-rectangular data (like a triangular number pattern, or a list of students each with a different, varying number of grades) — declare them as type[][] name = new type[numRows][]; (note: no column size specified initially), then individually initialize EACH row separately with its own specific length: name[0] = new type[3]; name[1] = new type[5]; etc."
          }
        }
      ]
    },
    {
      id: 9,
      name: 'Unit 9: Inheritance',
      questions: [
        {
          id: 'csa-9-1', difficulty: 1, type: 'mcq', topic: 'Inheritance Basics',
          prompt: "In Java, if class Dog extends class Animal, which best describes this relationship?",
          choices: ['Dog and Animal are completely unrelated classes', 'Dog is a subclass (child class) that inherits fields and methods from Animal, its superclass (parent class)', 'Animal is a subclass of Dog', 'This syntax is invalid in Java'],
          correct: 1,
          explanation: {
            correct: "The 'extends' keyword establishes inheritance: Dog becomes the SUBCLASS (child class), inheriting accessible fields and methods from Animal, which becomes the SUPERCLASS (parent class) — Dog can use Animal's inherited members and typically adds its own additional, more specific fields/methods.",
            wrong: { 0: "This establishes a direct, specific inheritance RELATIONSHIP between the two classes; they are definitely related through this 'extends' connection, not unrelated.", 2: "This reverses the relationship — Dog extends Animal means Dog is the SUBCLASS (child), and Animal is the SUPERCLASS (parent), not the other way around.", 3: "'class Dog extends Animal' is completely valid, standard Java inheritance syntax." },
            tempting: "Choice C is tempting for students who might reverse which class is the 'parent' and which is the 'child' in the inheritance relationship, especially since English word order can sometimes create ambiguity for newer programmers.",
            commonMistake: "Reversing which class is the superclass (parent) and which is the subclass (child) — remember, the class name immediately AFTER 'extends' is always the superclass/parent being inherited FROM.",
            apTip: "Remember the exact syntax pattern: 'class Subclass extends Superclass' — the class doing the extending (before 'extends') is the child/subclass, and the class named after 'extends' is the parent/superclass being inherited from."
          }
        },
        {
          id: 'csa-9-2', difficulty: 2, type: 'mcq', topic: 'Method Overriding',
          prompt: "A superclass Animal has a method makeSound() that prints \"Some generic sound\". A subclass Dog overrides this method to print \"Woof\". If you create a Dog object and call makeSound() on it, what is printed?",
          choices: ['\"Some generic sound\", since the superclass version always takes priority', '\"Woof\", since the subclass\'s OVERRIDDEN version replaces the inherited superclass version when called on a Dog object', 'Both \"Some generic sound\" AND \"Woof\" are printed', 'Neither is printed, since overriding causes a compilation error'],
          correct: 1,
          explanation: {
            correct: "When a subclass overrides a method (same name, same parameters as the superclass version), calling that method on a subclass object executes the SUBCLASS's overridden version, not the original superclass version — so calling makeSound() on a Dog object prints \"Woof\".",
            wrong: { 0: "This reverses the actual behavior — the SUBCLASS's overridden version takes priority when called on a subclass object, not the original superclass version.", 2: "Only the subclass's OVERRIDDEN version executes when called on a Dog object; the original superclass version is not also separately executed unless explicitly called (e.g., using super.makeSound()).", 3: "Method overriding (correctly matching name and parameters) is completely valid, standard Java syntax and does not cause any compilation error — it's a core feature of inheritance." },
            tempting: "None of the distractors reflect correct overriding behavior if the concept is understood precisely, but assuming the superclass version somehow persists or takes priority reflects a common misunderstanding of how overriding actually works.",
            commonMistake: "Not understanding that a subclass's overridden method completely REPLACES the inherited behavior when called on a subclass object, rather than somehow combining with or being overridden BY the original superclass version.",
            apTip: "Remember: when a subclass overrides a method, calling that method on a SUBCLASS object always uses the subclass's version; to explicitly access the original SUPERCLASS version from within the subclass, you must use the keyword super (e.g., super.makeSound())."
          }
        },
        {
          id: 'csa-9-3', difficulty: 2, type: 'mcq', topic: 'The super Keyword',
          prompt: "Inside a subclass's constructor, what does calling super(args) typically do?",
          choices: ['Creates a completely new, separate object of the superclass type', 'Calls the superclass\'s constructor, allowing the subclass to initialize inherited fields defined in the superclass', 'Deletes the superclass entirely', 'super() can only be used inside methods, never inside constructors'],
          correct: 1,
          explanation: {
            correct: "Calling super(args) inside a subclass constructor invokes the SUPERCLASS's constructor (passing the given arguments), allowing the superclass portion of the object to be properly initialized (setting up any fields defined in the superclass) before the subclass constructor continues with its own additional initialization.",
            wrong: { 0: "This doesn't create a separate object; it initializes the SUPERCLASS PORTION of the SAME single object currently being constructed (the subclass instance), not a distinct additional object.", 2: "This doesn't delete anything; it's a constructor CALL that initializes inherited superclass fields, unrelated to any deletion operation.", 3: "super() is specifically and primarily used INSIDE a subclass's CONSTRUCTOR (typically as the very first statement) to call the superclass's constructor; this is one of its most common and important uses, not a prohibited context." },
            tempting: "None of the distractors accurately describe super()'s constructor-calling purpose if this concept is understood specifically, but not knowing this specific, common use could lead to confusion about what super(args) actually accomplishes.",
            commonMistake: "Not recognizing super(args) as a call to the superclass's CONSTRUCTOR (when used as the first statement in a subclass constructor), rather than confusing it with an unrelated operation.",
            apTip: "Remember: super(args) as the FIRST line of a subclass constructor calls the superclass's constructor with the given arguments, ensuring proper initialization of inherited fields — if you don't explicitly call super(args), Java automatically inserts an implicit no-argument super() call first anyway, so the superclass is always initialized in some way before the subclass's own constructor body runs."
          }
        },
        {
          id: 'csa-9-4', difficulty: 3, type: 'mcq', topic: 'Polymorphism',
          prompt: "An array of type Animal[] contains a mix of Dog and Cat objects (both subclasses of Animal), each overriding a makeSound() method differently. When looping through the array and calling makeSound() on each element, what happens?",
          choices: ['A compilation error occurs, since the array is declared as Animal[] but contains Dog and Cat objects', 'Each object correctly calls ITS OWN overridden version of makeSound() (Dog objects bark, Cat objects meow), demonstrating polymorphism — the actual object type at runtime determines which overridden method executes', 'All objects incorrectly call Animal\'s original makeSound() method, regardless of their actual specific type', 'Only the first element in the array will have its makeSound() method called'],
          correct: 1,
          explanation: {
            correct: "This demonstrates polymorphism: even though the array is declared with the general type Animal[], each element still retains its actual specific object type (Dog or Cat) at runtime, so calling makeSound() correctly invokes EACH object's own specific overridden version — Dog objects execute Dog's makeSound(), Cat objects execute Cat's makeSound(), determined by the actual object type, not the declared array/reference type.",
            wrong: { 0: "This is completely valid, standard Java syntax — storing subclass objects (Dog, Cat) in an array declared with their common superclass type (Animal[]) is a normal, expected use of inheritance and polymorphism, not an error.", 2: "This is the OPPOSITE of actual polymorphic behavior — each object correctly calls its OWN specific overridden version, not the original generic superclass version, precisely because of how method overriding and polymorphism work together in Java.", 3: "The loop processes EVERY element in the array in turn, each correctly calling its own specific overridden method; there's no limitation restricting this behavior to only the first element." },
            tempting: "Choice C reflects a common misunderstanding of polymorphism — assuming that because the array/reference TYPE is the general superclass (Animal), the method calls must also default to the superclass's generic version, when actually the ACTUAL OBJECT TYPE at runtime determines which overridden version executes.",
            commonMistake: "Confusing the DECLARED type of a reference/array (Animal) with the ACTUAL object type at runtime (Dog or Cat) — method overriding/polymorphism specifically uses the actual runtime object type to determine which overridden method version executes, not the declared reference type.",
            apTip: "This is THE core example of polymorphism in AP CSA — memorize the principle explicitly: 'the actual object's type (determined at runtime), not the declared reference type, determines which overridden method executes' — this is often summarized as 'dynamic method binding' or 'runtime polymorphism,' a frequently tested concept."
          }
        },
        {
          id: 'csa-9-5', difficulty: 4, type: 'mcq', topic: 'Abstract Classes',
          prompt: "An abstract class Shape has an abstract method calculateArea() with no method body. What does this mean for any concrete (non-abstract) subclass of Shape?",
          choices: ['The subclass may optionally choose whether or not to implement calculateArea()', 'The subclass MUST provide its own concrete implementation (method body) for calculateArea(), or else the subclass must also be declared abstract', 'Abstract methods can never be inherited by any subclass', 'The subclass automatically inherits a working, default implementation of calculateArea() from Shape'],
          correct: 1,
          explanation: {
            correct: "An abstract method declares a method signature with NO implementation (no body) in the abstract class, essentially serving as a required 'contract'; any CONCRETE (non-abstract) subclass MUST provide its own complete implementation (method body) for this method, or else that subclass must itself also be declared abstract (deferring the implementation requirement further down the inheritance chain).",
            wrong: { 0: "Implementation is NOT optional for a concrete subclass — it's a REQUIRED obligation; failing to implement an inherited abstract method means the subclass must itself remain abstract (cannot be instantiated) until some subclass eventually does provide the implementation.", 2: "Abstract methods ARE specifically designed to be inherited (as a required obligation) by subclasses; that's their entire purpose — establishing a method that subclasses must implement.", 3: "Since the abstract method has NO body/implementation in the abstract superclass, there's no 'default' working implementation to inherit — each concrete subclass must provide its OWN specific implementation." },
            tempting: "Choice D can tempt students who assume all inherited methods automatically come with some kind of working default behavior, without recognizing that ABSTRACT methods specifically have NO implementation at all in the superclass, by definition.",
            commonMistake: "Assuming abstract methods provide some kind of default/inherited working behavior, rather than correctly understanding they establish a required implementation OBLIGATION with no actual code to inherit.",
            apTip: "Remember the core purpose of abstract methods/classes: they establish a common 'contract' (method signatures) that all concrete subclasses MUST fulfill with their own specific implementations, while the abstract class itself cannot be directly instantiated (you can't create a Shape object directly, only objects of concrete subclasses like Circle or Rectangle that provide their own calculateArea() implementations)."
          }
        },
        {
          id: 'csa-9-6', difficulty: 5, type: 'mcq', topic: 'Inheritance & the equals/toString Contract',
          prompt: "A subclass Square extends Rectangle, inheriting Rectangle\'s overridden equals() method (which compares width and height fields). If Square doesn\'t override equals() itself, and two Square objects have identical width and height values, what happens when comparing them with .equals()?",
          choices: ['A compilation error occurs, since Square doesn\'t have its own equals() method', 'The inherited Rectangle equals() method executes, comparing width and height fields, correctly returning true for two Squares with matching dimensions (assuming Rectangle\'s equals() properly checks these fields)', 'equals() always returns false for any subclass that doesn\'t explicitly override it', 'Square objects can never be compared using equals() under any circumstances'],
          correct: 1,
          explanation: {
            correct: "Since Square doesn't override equals() itself, it INHERITS Rectangle's overridden version; calling .equals() on Square objects executes this inherited method, comparing the width and height fields (as Rectangle's version is designed to do) — if two Square objects have matching width/height values, this inherited method correctly returns true, since Square objects also possess these same inherited fields.",
            wrong: { 0: "Subclasses aren't required to override every method; if a method isn't overridden, the subclass simply INHERITS and uses the superclass's version — this doesn't cause a compilation error.", 2: "The subclass doesn't automatically default to false; it uses whatever equals() implementation is currently in effect for it, which here is the INHERITED Rectangle version (which can definitely return true when appropriate).", 3: "Square objects absolutely CAN be compared using equals(), using the inherited Rectangle implementation, since Square doesn't provide its own override — there's no prohibition on this." },
            tempting: "None of the distractors correctly describe standard Java inheritance behavior for unoverridden methods if this is understood precisely, but assuming a subclass MUST have its own explicit version of every method (rather than correctly inheriting unoverridden ones) is a common misconception.",
            commonMistake: "Assuming every method must be explicitly redefined in each subclass, rather than correctly understanding that methods NOT overridden are simply INHERITED as-is from the superclass and used directly.",
            apTip: "College-level insight: this scenario illustrates an important, sometimes subtle inheritance design consideration — inheriting equals() (and similar methods) from a superclass works fine as long as the inherited logic remains VALID and appropriate for the subclass; more complex inheritance hierarchies sometimes require care to ensure inherited method behavior (like equals() or toString()) still makes correct semantic sense for the specific subclass, which is why some inheritance designs choose to override these methods again in subclasses even when a technically valid inherited version already exists."
          }
        }
      ]
    },
    {
      id: 10,
      name: 'Unit 10: Recursion',
      questions: [
        {
          id: 'csa-10-1', difficulty: 1, type: 'mcq', topic: 'Recursion Basics',
          prompt: "What is a required component of any correctly-written recursive method?",
          choices: ['It must call a completely different, unrelated method', 'A base case, which stops the recursion, and a recursive case, where the method calls itself with a simpler/smaller version of the problem', 'It must run in an infinite loop with no stopping condition', 'It cannot have any parameters'],
          correct: 1,
          explanation: {
            correct: "Every correctly-written recursive method needs a BASE CASE (a condition that stops the recursion, returning a value directly without further recursive calls) and a RECURSIVE CASE (where the method calls ITSELF, but with a simpler or smaller version of the original problem, moving progressively toward the base case).",
            wrong: { 0: "A recursive method specifically calls ITSELF (the same method), not a different, unrelated method — calling a different method entirely wouldn't be recursion.", 2: "A correctly-written recursive method should NOT run infinitely — the base case specifically exists to STOP the recursion; an infinite loop (without a proper base case being reached) indicates a bug (infinite recursion, typically causing a StackOverflowError).", 3: "Recursive methods commonly and frequently DO have parameters — parameters are often essential for tracking the changing, shrinking version of the problem passed in each recursive call." },
            tempting: "None of the distractors describe required recursive method components if the concept is understood specifically, but not clearly separating the TWO required parts (base case AND recursive case) could lead to an incomplete understanding.",
            commonMistake: "Forgetting one of the two essential components of recursion — either omitting a base case entirely (causing infinite recursion) or not correctly ensuring the recursive case actually progresses toward that base case.",
            apTip: "Always identify and explicitly write BOTH parts when designing a recursive method: the BASE CASE (simplest possible input, directly returns an answer with no further recursive calls) and the RECURSIVE CASE (calls itself with an input that's closer to the base case, ensuring eventual termination) — missing either part is the most common source of recursive method bugs."
          }
        },
        {
          id: 'csa-10-2', difficulty: 2, type: 'mcq', topic: 'Tracing Simple Recursion',
          prompt: "What does the following recursive method return when called as factorial(4)?\n\npublic static int factorial(int n) {\n    if (n <= 1) return 1;\n    return n * factorial(n - 1);\n}",
          choices: ['4', '10', '24, since 4 × 3 × 2 × 1 = 24', '16'],
          correct: 2,
          explanation: {
            correct: "factorial(4) = 4 × factorial(3) = 4 × (3 × factorial(2)) = 4 × (3 × (2 × factorial(1))) = 4 × (3 × (2 × 1)) = 4 × 3 × 2 × 1 = 24.",
            wrong: { 0: "4 is just the original input value, not the computed factorial result.", 1: "10 doesn't match the correct factorial calculation (4×3×2×1=24); this may result from an incorrect operation like addition instead of multiplication.", 3: "16 doesn't match the correct calculation either; this might result from a different computational error, such as 4² instead of 4!." },
            tempting: "Choice B is tempting for students who might add the numbers (4+3+2+1=10) instead of correctly multiplying them as the factorial definition requires.",
            commonMistake: "Confusing the multiplicative factorial operation with an additive summation, or making an error while tracing through the recursive calls and their eventual combination.",
            apTip: "For tracing recursive methods, write out EACH recursive call explicitly as you 'unwind' the recursion, from the base case back up to the original call — for factorial(4): factorial(1)=1, factorial(2)=2×1=2, factorial(3)=3×2=6, factorial(4)=4×6=24 — building up from the base case this way helps avoid calculation errors."
          }
        },
        {
          id: 'csa-10-3', difficulty: 2, type: 'mcq', topic: 'Recursion vs. Iteration',
          prompt: "Which statement accurately describes the relationship between recursion and iteration (loops)?",
          choices: ['Recursion and iteration can never accomplish the same task', 'Many problems that can be solved with recursion can also be solved with an equivalent iterative (loop-based) approach, and vice versa — they are often two alternative techniques for the same underlying problem', 'Recursion is always faster and more memory-efficient than iteration', 'Iteration always requires fewer lines of code than any recursive solution'],
          correct: 1,
          explanation: {
            correct: "Recursion and iteration are often two alternative, interchangeable techniques for solving the same class of problems (like calculating factorials, traversing structures, or searching) — many recursive solutions have an equivalent iterative version, and vice versa, with the choice between them often coming down to code clarity, problem structure, or specific performance considerations.",
            wrong: { 0: "Many well-known problems (factorial, Fibonacci, tree/array traversal, various search algorithms) CAN be solved using either approach, contradicting a claim that they can never accomplish the same task.", 2: "Recursion is NOT always faster or more memory-efficient — in fact, recursion often uses MORE memory (due to the call stack building up with each recursive call) and can sometimes be slower than an equivalent iterative solution, depending on the specific problem and implementation.", 3: "Code length comparison varies by specific problem — some recursive solutions are actually MORE concise than their iterative equivalents (especially for naturally recursive problems like tree traversal), so this isn't a universal rule favoring iteration." },
            tempting: "Choice C is tempting because recursion can feel like a more 'advanced' or sophisticated technique, but this doesn't translate to inherent performance superiority — the reality is more nuanced, and recursion often has additional memory overhead from the call stack.",
            commonMistake: "Assuming recursion is inherently 'better' (faster, less memory) than iteration, rather than recognizing they're alternative techniques with different tradeoffs depending on the specific problem and implementation.",
            apTip: "For any recursive solution you write, practice thinking through how you MIGHT alternatively solve the same problem iteratively (with a loop) — this comparison deepens understanding of both techniques and helps you recognize when recursion's more natural fit (like naturally hierarchical/nested problems) makes it the clearer choice, versus when iteration might be simpler or more efficient."
          }
        },
        {
          id: 'csa-10-4', difficulty: 3, type: 'mcq', topic: 'Recursive Array/String Processing',
          prompt: "What does the following recursive method return when called as sumArray(arr, 0) for arr = {2, 4, 6}?\n\npublic static int sumArray(int[] arr, int index) {\n    if (index == arr.length) return 0;\n    return arr[index] + sumArray(arr, index + 1);\n}",
          choices: ['0', '6', '12, since 2+4+6=12, computed by recursively summing from index 0 to the end of the array', '2'],
          correct: 2,
          explanation: {
            correct: "sumArray(arr,0) = arr[0] + sumArray(arr,1) = 2 + (arr[1] + sumArray(arr,2)) = 2 + (4 + (arr[2] + sumArray(arr,3))) = 2 + 4 + (6 + 0) = 2+4+6 = 12, since sumArray(arr,3) hits the base case (index==arr.length==3) and returns 0.",
            wrong: { 0: "0 is only the BASE CASE's return value (when index reaches the array's length), not the final accumulated sum of all elements.", 1: "6 is only the LAST element's value (arr[2]), not the cumulative sum of all three elements.", 3: "2 is only the FIRST element's value (arr[0]), not the cumulative sum of all three elements." },
            tempting: "None of the distractors reflect the fully correct, complete recursive summation if the trace is done carefully, but stopping the trace early (at the base case, or at just one element) rather than following the full 'unwinding' back to the original call is a common tracing error.",
            commonMistake: "Not fully tracing the recursive calls all the way back to the base case AND then correctly summing all the returned values as the recursion 'unwinds' back up to the original call.",
            apTip: "For recursive array/string processing, trace through each recursive call explicitly, writing out the full chain (e.g., sumArray(arr,0) = arr[0] + sumArray(arr,1), then further expanding sumArray(arr,1), etc.) until reaching the base case, THEN work backwards, substituting the base case's return value and building up the final answer step by step — don't try to shortcut this tracing process."
          }
        },
        {
          id: 'csa-10-5', difficulty: 4, type: 'mcq', topic: 'Recursive Binary Search',
          prompt: "A recursive binary search method searches for a target value in a sorted array. Which describes the correct recursive structure?",
          choices: ['The method should search the ENTIRE array again on every recursive call, without narrowing the search range', 'The method should compare the target to the middle element, and recursively search only the appropriate HALF of the remaining range (left half if target is smaller, right half if target is larger), progressively narrowing the search range each call', 'The method should check every single element one at a time, moving forward by exactly one index each recursive call', 'Binary search cannot be implemented recursively, only iteratively'],
          correct: 1,
          explanation: {
            correct: "Recursive binary search compares the target value to the middle element of the CURRENT search range; if the target is smaller, it recursively searches only the LEFT half of the remaining range, if larger, only the RIGHT half — this progressively narrows the search range by half with each recursive call, until the target is found or the range becomes empty (base case).",
            wrong: { 0: "Searching the ENTIRE array again each time would not narrow the search range at all, defeating binary search's core efficiency advantage (which comes specifically from repeatedly halving the search space).", 2: "This describes LINEAR search's approach (checking elements one at a time, moving by one index), not binary search's approach, which specifically jumps to the middle and eliminates half the remaining range each time.", 3: "Binary search absolutely CAN be (and very commonly is) implemented recursively — the recursive version naturally mirrors the 'divide and conquer' structure of repeatedly narrowing the search range, making it a very natural fit for recursion." },
            tempting: "Choice C is tempting because it describes a plausible-sounding search process, but it's actually describing LINEAR search's one-at-a-time approach, not binary search's specific halving strategy.",
            commonMistake: "Confusing binary search's specific 'divide and conquer' halving strategy with linear search's simpler one-element-at-a-time approach, especially when both are being implemented recursively.",
            apTip: "Recursive binary search is a classic, frequently tested 'divide and conquer' recursion example — memorize its core structure: base case = target found OR search range becomes empty (return -1 or not found); recursive case = compare target to middle element, then recursively call on ONLY the correct half (left or right) of the remaining range, never both halves and never the whole original range again."
          }
        },
        {
          id: 'csa-10-6', difficulty: 5, type: 'mcq', topic: 'Recursive Call Stack & Efficiency',
          prompt: "A recursive method for calculating Fibonacci numbers (fib(n) = fib(n-1) + fib(n-2)) makes TWO recursive calls at each step, without storing/reusing previously calculated values. What is a significant efficiency concern with this specific implementation?",
          choices: ['This implementation has no efficiency concerns whatsoever', 'This implementation recalculates the same Fibonacci values repeatedly and exponentially many times (since each call branches into two more calls), leading to extremely inefficient exponential time complexity for larger n, despite the algorithm being conceptually simple', 'This implementation is always the fastest possible way to calculate any Fibonacci number', 'Recursive Fibonacci calculations never encounter any repeated/redundant computations'],
          correct: 1,
          explanation: {
            correct: "This naive recursive Fibonacci implementation suffers from severe inefficiency because it repeatedly recalculates the SAME Fibonacci values many times over — since each call to fib(n) branches into fib(n-1) AND fib(n-2), which themselves each branch further, the same smaller Fibonacci values get recomputed exponentially many times, leading to exponential time complexity (roughly O(2ⁿ)) that becomes impractically slow for even moderately large n, despite the code itself looking deceptively simple and elegant.",
            wrong: { 0: "This naive implementation has a SIGNIFICANT, well-documented efficiency concern (exponential redundant recalculation), definitely not 'no concerns whatsoever.'", 2: "This is far from the fastest approach — more efficient alternatives exist, such as an iterative approach, or a recursive approach enhanced with MEMOIZATION (storing/reusing previously calculated values) to avoid redundant recalculation, both of which achieve much better (linear, O(n)) time complexity.", 3: "This naive recursive implementation specifically DOES encounter massive redundant computation — for example, calculating fib(5) recalculates fib(3) multiple separate times across different branches of the recursive call tree, rather than reusing a single computed value." },
            tempting: "Choice C can tempt students who associate recursion generally with elegant, 'clever' solutions, without recognizing that this SPECIFIC naive implementation has a serious, well-documented practical performance problem due to massive redundant recalculation.",
            commonMistake: "Not recognizing that naive recursive solutions (particularly for problems like Fibonacci with overlapping subproblems) can have hidden, severe inefficiencies from redundant recalculation, even when the code itself looks simple and elegant.",
            apTip: "College-level insight: this naive Fibonacci recursion is THE classic example used to introduce the concept of 'memoization' (caching/storing previously computed results to avoid redundant recalculation) and dynamic programming — while implementing memoization itself is somewhat beyond the core AP CSA curriculum, being aware that naive recursive solutions CAN have serious hidden inefficiencies (and that overlapping subproblems are the specific cause here) reflects a deeper, more sophisticated understanding of recursion's real-world tradeoffs."
          }
        }
      ]
    }
  ],
  frqs: [
    {
      id: 'csa-frq-1', difficulty: 4, unit: 4,
      prompt: "Write a method named countVowels that takes a String parameter and returns the number of vowels (a, e, i, o, u — case-insensitive) it contains.\n\npublic static int countVowels(String str) {\n    // your code here\n}\n\nWrite the complete method body. Then, trace through countVowels(\"Hello World\") and state what it returns.",
      rubricPoints: [
        "Correctly initializes a counter variable to 0 before the loop (1 pt)",
        "Correctly iterates through every character of the string (using a for loop with str.length() and str.charAt(i), or equivalent) (1 pt)",
        "Correctly checks each character against vowels in a case-insensitive way (e.g., converting to lowercase first, or checking both cases explicitly) (1 pt)",
        "Correctly increments the counter when a vowel is found and returns the counter after the loop completes (1 pt)",
        "Correctly traces countVowels(\"Hello World\") to return 3 (e, o, o are the vowels) (1 pt)"
      ],
      sampleResponse: "public static int countVowels(String str) {\n    int count = 0;\n    String lower = str.toLowerCase();\n    for (int i = 0; i < lower.length(); i++) {\n        char c = lower.charAt(i);\n        if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') {\n            count++;\n        }\n    }\n    return count;\n}\n\nTrace of countVowels(\"Hello World\"): converting to lowercase gives \"hello world\". Checking each character: h(no), e(yes, count=1), l(no), l(no), o(yes, count=2), (space, no), w(no), o(yes, count=3), r(no), l(no), d(no). The method returns 3."
    },
    {
      id: 'csa-frq-2', difficulty: 3, unit: 1,
      prompt: "Write a method named isEven that takes an int parameter and returns true if it is even, false otherwise.\n\npublic static boolean isEven(int num) {\n    // your code here\n}\n\nThen, write a method named countEvens that takes an array of ints and returns the count of even numbers in the array, using isEven as a helper method.",
      rubricPoints: [
        "isEven correctly uses the modulo operator to check divisibility by 2 (1 pt)",
        "isEven correctly returns a boolean value (1 pt)",
        "countEvens correctly iterates through the entire array (1 pt)",
        "countEvens correctly calls isEven as a helper and increments a counter appropriately, returning the correct final count (1 pt)"
      ],
      sampleResponse: "public static boolean isEven(int num) {\n    return num % 2 == 0;\n}\n\npublic static int countEvens(int[] arr) {\n    int count = 0;\n    for (int i = 0; i < arr.length; i++) {\n        if (isEven(arr[i])) {\n            count++;\n        }\n    }\n    return count;\n}"
    },
    {
      id: 'csa-frq-3', difficulty: 3, unit: 2,
      prompt: "Write a method named initials that takes a full name String (first and last name separated by a single space) and returns a String containing the first letter of each name, capitalized, separated by a period (e.g., \"John Smith\" returns \"J.S.\").\n\npublic static String initials(String fullName) {\n    // your code here\n}",
      rubricPoints: [
        "Correctly finds the space separating first and last name (e.g., using indexOf) (1 pt)",
        "Correctly extracts the first character of the first name using charAt or substring (1 pt)",
        "Correctly extracts the first character of the last name (the character right after the space) (1 pt)",
        "Correctly assembles and returns the final formatted String with periods (1 pt)"
      ],
      sampleResponse: "public static String initials(String fullName) {\n    int spaceIndex = fullName.indexOf(\" \");\n    char firstInitial = fullName.charAt(0);\n    char lastInitial = fullName.charAt(spaceIndex + 1);\n    return firstInitial + \".\" + lastInitial + \".\";\n}"
    },
    {
      id: 'csa-frq-4', difficulty: 4, unit: 3,
      prompt: "Write a method named classify that takes an int score (0-100) and returns a String letter grade according to: 90+ = \"A\", 80-89 = \"B\", 70-79 = \"C\", 60-69 = \"D\", below 60 = \"F\". Use an if-else if chain.\n\npublic static String classify(int score) {\n    // your code here\n}",
      rubricPoints: [
        "Correctly structures the if-else if chain in DESCENDING order (checking 90+ first, not ascending) (1 pt)",
        "Correctly uses >= comparisons for each threshold (1 pt)",
        "Correctly includes a final else clause for scores below 60, returning \"F\" (1 pt)",
        "Method correctly compiles and would return the correct grade for boundary values (e.g., exactly 90 returns \"A\") (1 pt)"
      ],
      sampleResponse: "public static String classify(int score) {\n    if (score >= 90) {\n        return \"A\";\n    } else if (score >= 80) {\n        return \"B\";\n    } else if (score >= 70) {\n        return \"C\";\n    } else if (score >= 60) {\n        return \"D\";\n    } else {\n        return \"F\";\n    }\n}"
    },
    {
      id: 'csa-frq-5', difficulty: 4, unit: 5,
      prompt: "Design a class named Rectangle with private instance variables width and height (both doubles). Include a constructor that takes both dimensions, a method getArea() that returns the area, and a method getPerimeter() that returns the perimeter.\n\npublic class Rectangle {\n    // your code here\n}",
      rubricPoints: [
        "Correctly declares private instance variables width and height (1 pt)",
        "Correctly writes a constructor that takes two parameters and assigns them to the instance variables (using this. to distinguish from parameters) (1 pt)",
        "getArea() correctly returns width * height (1 pt)",
        "getPerimeter() correctly returns 2*(width+height) (1 pt)"
      ],
      sampleResponse: "public class Rectangle {\n    private double width;\n    private double height;\n\n    public Rectangle(double width, double height) {\n        this.width = width;\n        this.height = height;\n    }\n\n    public double getArea() {\n        return width * height;\n    }\n\n    public double getPerimeter() {\n        return 2 * (width + height);\n    }\n}"
    },
    {
      id: 'csa-frq-6', difficulty: 4, unit: 6,
      prompt: "Write a method named reverseArray that takes an int array and returns a NEW array containing the same elements in reverse order (without modifying the original array).\n\npublic static int[] reverseArray(int[] arr) {\n    // your code here\n}",
      rubricPoints: [
        "Correctly creates a new array of the same length as the input (1 pt)",
        "Correctly maps each element from the original array to the appropriate reversed position in the new array (1 pt)",
        "Does not modify the original input array (1 pt)",
        "Correctly returns the new reversed array (1 pt)"
      ],
      sampleResponse: "public static int[] reverseArray(int[] arr) {\n    int[] result = new int[arr.length];\n    for (int i = 0; i < arr.length; i++) {\n        result[i] = arr[arr.length - 1 - i];\n    }\n    return result;\n}"
    },
    {
      id: 'csa-frq-7', difficulty: 4, unit: 7,
      prompt: "Write a method named removeDuplicates that takes an ArrayList<Integer> and removes all duplicate values, keeping only the first occurrence of each value (modify the list in place).\n\npublic static void removeDuplicates(ArrayList<Integer> list) {\n    // your code here\n}",
      rubricPoints: [
        "Correctly iterates through the list (backwards, or using an appropriate safe technique to allow removal during traversal) (1 pt)",
        "Correctly checks whether each element's value appears earlier in the list (e.g., using indexOf and comparing to the current index) (1 pt)",
        "Correctly removes the element if it is a duplicate (not the first occurrence) (1 pt)",
        "Avoids skipping elements or causing errors due to shifting indices during removal (1 pt)"
      ],
      sampleResponse: "public static void removeDuplicates(ArrayList<Integer> list) {\n    for (int i = list.size() - 1; i >= 0; i--) {\n        int value = list.get(i);\n        if (list.indexOf(value) != i) {\n            list.remove(i);\n        }\n    }\n}"
    },
    {
      id: 'csa-frq-8', difficulty: 4, unit: 8,
      prompt: "Write a method named rowSums that takes a 2D int array (rows × columns) and returns a 1D int array where each element is the sum of the corresponding row in the 2D array.\n\npublic static int[] rowSums(int[][] grid) {\n    // your code here\n}",
      rubricPoints: [
        "Correctly creates a result array with length equal to the number of rows (1 pt)",
        "Correctly uses nested loops: outer loop for rows, inner loop for columns within each row (1 pt)",
        "Correctly accumulates the sum for each row before moving to the next (1 pt)",
        "Correctly stores each row's sum in the appropriate position of the result array and returns it (1 pt)"
      ],
      sampleResponse: "public static int[] rowSums(int[][] grid) {\n    int[] result = new int[grid.length];\n    for (int i = 0; i < grid.length; i++) {\n        int sum = 0;\n        for (int j = 0; j < grid[i].length; j++) {\n            sum += grid[i][j];\n        }\n        result[i] = sum;\n    }\n    return result;\n}"
    },
    {
      id: 'csa-frq-9', difficulty: 4, unit: 9,
      prompt: "A superclass Employee has a method calculatePay() that returns a base salary. Write a subclass Manager that extends Employee, adding a bonus field, and overrides calculatePay() to return the base salary (via super) plus the bonus.\n\npublic class Manager extends Employee {\n    // your code here, assuming Employee has a protected double baseSalary field and a constructor Employee(double baseSalary)\n}",
      rubricPoints: [
        "Correctly declares the additional bonus instance variable (1 pt)",
        "Correctly writes a constructor that calls super(baseSalary) and initializes bonus (1 pt)",
        "Correctly overrides calculatePay() with matching method signature (1 pt)",
        "Correctly uses super.calculatePay() (or otherwise correctly references the base salary) plus bonus in the overridden method (1 pt)"
      ],
      sampleResponse: "public class Manager extends Employee {\n    private double bonus;\n\n    public Manager(double baseSalary, double bonus) {\n        super(baseSalary);\n        this.bonus = bonus;\n    }\n\n    public double calculatePay() {\n        return super.calculatePay() + bonus;\n    }\n}"
    },
    {
      id: 'csa-frq-10', difficulty: 5, unit: 10,
      prompt: "Write a recursive method named power that calculates base raised to exponent (both non-negative integers) WITHOUT using Math.pow or any loop — using only recursion.\n\npublic static int power(int base, int exponent) {\n    // your code here\n}",
      rubricPoints: [
        "Correctly identifies and implements the base case: exponent == 0 returns 1 (1 pt)",
        "Correctly implements the recursive case: base * power(base, exponent - 1) (1 pt)",
        "The recursive call correctly progresses toward the base case (decrementing exponent) (1 pt)",
        "No loops are used; the method relies entirely on recursion (1 pt)"
      ],
      sampleResponse: "public static int power(int base, int exponent) {\n    if (exponent == 0) {\n        return 1;\n    }\n    return base * power(base, exponent - 1);\n}"
    },
    {
      id: 'csa-frq-11', difficulty: 3, unit: 1,
      prompt: "Write a method named celsiusToFahrenheit that takes a double representing a Celsius temperature and returns the equivalent Fahrenheit temperature, using the formula F = C × 9/5 + 32.\n\npublic static double celsiusToFahrenheit(double celsius) {\n    // your code here\n}",
      rubricPoints: [
        "Correctly applies the formula with proper order of operations (1 pt)",
        "Uses double arithmetic correctly (avoiding accidental integer division, e.g., using 9.0/5 or 9/5.0, not 9/5 which would truncate to 1 with ints — though here celsius is already a double so 9/5 as ints would still truncate unless written carefully) (1 pt)",
        "Correctly returns the calculated Fahrenheit value (1 pt)"
      ],
      sampleResponse: "public static double celsiusToFahrenheit(double celsius) {\n    return celsius * 9.0 / 5.0 + 32;\n}"
    },
    {
      id: 'csa-frq-12', difficulty: 3, unit: 2,
      prompt: "Write a method named isPalindrome that takes a String and returns true if it reads the same forwards and backwards, false otherwise (assume no need to handle case or spaces).\n\npublic static boolean isPalindrome(String str) {\n    // your code here\n}",
      rubricPoints: [
        "Correctly constructs or accesses the reverse of the string (e.g., using a loop, or StringBuilder's reverse() method) (1 pt)",
        "Correctly compares the original string to its reverse using .equals() (not ==) (1 pt)",
        "Correctly returns the boolean result of this comparison (1 pt)"
      ],
      sampleResponse: "public static boolean isPalindrome(String str) {\n    String reversed = new StringBuilder(str).reverse().toString();\n    return str.equals(reversed);\n}"
    },
    {
      id: 'csa-frq-13', difficulty: 4, unit: 3,
      prompt: "Write a method named isValidTriangle that takes three double side lengths and returns true if they could form a valid triangle (the sum of any two sides must exceed the third side), false otherwise.\n\npublic static boolean isValidTriangle(double a, double b, double c) {\n    // your code here\n}",
      rubricPoints: [
        "Correctly checks all three required triangle inequality conditions (a+b>c, a+c>b, b+c>a) (1 pt)",
        "Correctly combines all three conditions with && (all must hold true) (1 pt)",
        "Correctly returns the boolean result (1 pt)"
      ],
      sampleResponse: "public static boolean isValidTriangle(double a, double b, double c) {\n    return (a + b > c) && (a + c > b) && (b + c > a);\n}"
    },
    {
      id: 'csa-frq-14', difficulty: 4, unit: 5,
      prompt: "Design a class named Circle with a private instance variable radius (double). Include a constructor, a getArea() method (area = π × r²), and an overridden toString() method that returns a String like \"Circle with radius 5.0\".\n\npublic class Circle {\n    // your code here\n}",
      rubricPoints: [
        "Correctly declares private radius instance variable (1 pt)",
        "Correctly writes a constructor initializing radius using this.radius (1 pt)",
        "getArea() correctly returns Math.PI * radius * radius (1 pt)",
        "toString() correctly overrides and returns a properly formatted String including the radius value (1 pt)"
      ],
      sampleResponse: "public class Circle {\n    private double radius;\n\n    public Circle(double radius) {\n        this.radius = radius;\n    }\n\n    public double getArea() {\n        return Math.PI * radius * radius;\n    }\n\n    public String toString() {\n        return \"Circle with radius \" + radius;\n    }\n}"
    },
    {
      id: 'csa-frq-15', difficulty: 4, unit: 6,
      prompt: "Write a method named countNegatives that takes an int array and returns the count of negative numbers in the array.\n\npublic static int countNegatives(int[] arr) {\n    // your code here\n}",
      rubricPoints: [
        "Correctly initializes a counter to 0 (1 pt)",
        "Correctly iterates through every element of the array (1 pt)",
        "Correctly checks whether each element is negative and increments the counter accordingly (1 pt)",
        "Correctly returns the final count (1 pt)"
      ],
      sampleResponse: "public static int countNegatives(int[] arr) {\n    int count = 0;\n    for (int i = 0; i < arr.length; i++) {\n        if (arr[i] < 0) {\n            count++;\n        }\n    }\n    return count;\n}"
    },
    {
      id: 'csa-frq-16', difficulty: 4, unit: 7,
      prompt: "Write a method named average that takes an ArrayList<Double> and returns the average of all values (return 0.0 if the list is empty).\n\npublic static double average(ArrayList<Double> list) {\n    // your code here\n}",
      rubricPoints: [
        "Correctly handles the empty list edge case, returning 0.0 (1 pt)",
        "Correctly iterates through the list, summing all values (1 pt)",
        "Correctly divides the sum by the list's size (using double division, not integer division) (1 pt)",
        "Correctly returns the calculated average (1 pt)"
      ],
      sampleResponse: "public static double average(ArrayList<Double> list) {\n    if (list.size() == 0) {\n        return 0.0;\n    }\n    double sum = 0;\n    for (double val : list) {\n        sum += val;\n    }\n    return sum / list.size();\n}"
    },
    {
      id: 'csa-frq-17', difficulty: 4, unit: 8,
      prompt: "Write a method named countOccurrences that takes a 2D int array and a target value, returning the total number of times the target value appears anywhere in the 2D array.\n\npublic static int countOccurrences(int[][] grid, int target) {\n    // your code here\n}",
      rubricPoints: [
        "Correctly uses nested loops to traverse every element of the 2D array (1 pt)",
        "Correctly compares each element to the target value (1 pt)",
        "Correctly increments a counter for each match found (1 pt)",
        "Correctly returns the final total count (1 pt)"
      ],
      sampleResponse: "public static int countOccurrences(int[][] grid, int target) {\n    int count = 0;\n    for (int i = 0; i < grid.length; i++) {\n        for (int j = 0; j < grid[i].length; j++) {\n            if (grid[i][j] == target) {\n                count++;\n            }\n        }\n    }\n    return count;\n}"
    },
    {
      id: 'csa-frq-18', difficulty: 4, unit: 9,
      prompt: "An abstract class Shape has an abstract method getArea(). Write a concrete subclass Triangle that extends Shape, with instance variables base and height, a constructor, and an implementation of getArea() (area = 0.5 × base × height).\n\npublic class Triangle extends Shape {\n    // your code here\n}",
      rubricPoints: [
        "Correctly declares base and height instance variables (1 pt)",
        "Correctly writes a constructor initializing both fields (1 pt)",
        "Correctly implements (overrides) the inherited abstract getArea() method with the correct formula (1 pt)",
        "Method signature for getArea() correctly matches the abstract method it implements (1 pt)"
      ],
      sampleResponse: "public class Triangle extends Shape {\n    private double base;\n    private double height;\n\n    public Triangle(double base, double height) {\n        this.base = base;\n        this.height = height;\n    }\n\n    public double getArea() {\n        return 0.5 * base * height;\n    }\n}"
    },
    {
      id: 'csa-frq-19', difficulty: 5, unit: 10,
      prompt: "Write a recursive method named sumDigits that takes a non-negative int and returns the sum of its digits (e.g., sumDigits(1234) returns 1+2+3+4=10).\n\npublic static int sumDigits(int n) {\n    // your code here\n}",
      rubricPoints: [
        "Correctly identifies the base case: n < 10 (a single digit) returns n itself (1 pt)",
        "Correctly implements the recursive case: (n % 10) + sumDigits(n / 10), extracting the last digit and recursing on the remaining digits (1 pt)",
        "The recursive call correctly progresses toward the base case (n/10 shrinks toward a single digit) (1 pt)"
      ],
      sampleResponse: "public static int sumDigits(int n) {\n    if (n < 10) {\n        return n;\n    }\n    return (n % 10) + sumDigits(n / 10);\n}"
    },
    {
      id: 'csa-frq-20', difficulty: 4, unit: 4,
      prompt: "Write a method named countInRange that takes an int array, a low bound, and a high bound (inclusive), and returns the count of elements in the array that fall within that range.\n\npublic static int countInRange(int[] arr, int low, int high) {\n    // your code here\n}",
      rubricPoints: [
        "Correctly initializes a counter to 0 before the loop (1 pt)",
        "Correctly iterates through every element of the array using a for loop (1 pt)",
        "Correctly checks whether each element is >= low AND <= high (inclusive bounds) (1 pt)",
        "Correctly increments the counter for matching elements and returns the final count (1 pt)"
      ],
      sampleResponse: "public static int countInRange(int[] arr, int low, int high) {\n    int count = 0;\n    for (int i = 0; i < arr.length; i++) {\n        if (arr[i] >= low && arr[i] <= high) {\n            count++;\n        }\n    }\n    return count;\n}"
    }
  ]
}
