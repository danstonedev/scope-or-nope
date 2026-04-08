
export const CASE_BANK = [
  {
    id: "NUTR-001", category: "nutrition", difficulty: 1, setting: "Outpatient",
    bg_gradient: "linear-gradient(135deg, #a5f3fc, #3b82f6)",
    dating_profile: {
      username: "Brenda_Knees58",
      age: 58, sex: "F",
      tagline: "Ready to get back in the game 💃",
      bio: "Newly single (and ready to mingle!). Trying to shed some lbs to save these knees, but the kitchen overwhelms me.",
      looking_for: "Less knee pain & simple recipes",
      baggage: ["Knee OA", "HTN", "Lisinopril"],
      icf_tags: ["b28016 Pain in joints", "d450 Walking", "d570 Looking after health"]
    },
    // Refined Evidence-Based Content
    level1_question: "Any tips on what I should be eating to help my knees?",
    correct_swipe: "RIGHT_PT",
    reveal: {
      best_answer_rationale: "Guidelines recommend weight management as a first-line intervention for Knee OA. PTs can provide general nutrition education to support this without prescribing specific meal plans.",
      key_red_flags: ["None"],
      scope_boundary: "Education vs Prescription"
    },
    scaffolding: {
      level2: {
        question: "Can you just write me a 1500 calorie meal plan? I need structure. 📝",
        options: [
          { text: "Sure! Let me put something together for you.", correct: false, feedback: "Ah, that's actually outside what we can do. Prescribing specific calorie counts and meal plans is for a Registered Dietitian." },
          { text: "You should cut out all carbs to lose weight faster.", correct: false, feedback: "Careful! Specific elimination diets and 'crash' advice isn't evidence-based or within our scope." },
          { text: "Just download MyFitnessPal and track everything.", correct: false, feedback: "Tracking is a okay tool, but just telling her to download an app doesn't really provide the structure or education she's asking for." },
          { text: "I can't write a specific plan, but let's talk about how eating smaller portions can help your knees feel better.", correct: true, feedback: "Nice. You kept it 'in your lane' (scope) while directly tying nutrition to her functional goal (knee pain)." }
        ]
      },
      level3: {
        update: "Honestly? I just eat whatever's cheapest. There's no good grocery stores near me. 😞",
        time_label: "1 Week Later",
        options: [
          { text: "I'll refer you to a dietitian.", correct: false, feedback: "A referral alone won't fix this. She can't afford or access food—that's a social determinant of health barrier." },
          { text: "You need to prioritize healthy food even if it costs more.", correct: false, feedback: "Oof. That's tone-deaf. If she can't afford it, guilt-tripping her won't help." },
          { text: "That's really tough. Let's just focus on exercises for now.", correct: false, feedback: "Improving her comprehensive health includes addressing these barriers. Don't ignore it." },
          { text: "Let me look up some local food banks so we can find budget-friendly options that help your knees.", correct: true, feedback: "Perfect. You addressed the actual barrier (access/cost) and offered tangible help." }
        ]
      }
    }
  },
  {
    id: "NUTR-002", category: "nutrition", difficulty: 1, setting: "Outpatient",
    bg_gradient: "linear-gradient(135deg, #6ee7b7, #059669)",
    dating_profile: {
      username: "GymBro_ACL",
      age: 32, sex: "M",
      tagline: "Quad gains only 🦵",
      bio: "Just had ACL surgery 6 weeks ago. My muscles feel like jelly and I need to bounce back fast.",
      looking_for: "Hypertrophy & Return to Sport",
      baggage: ["ACL Repair (6wks)", "NSAIDs"],
      icf_tags: ["b730 Muscle power functions", "s750 Structure of lower extremity"]
    },
    level1_question: "Do I need to chug protein shakes to fix this leg?",
    correct_swipe: "RIGHT_PT",
    reveal: {
      best_answer_rationale: "Muscle hypertrophy requires adequate protein (1.6-2.2g/kg). PTs can discuss protein timing and general food sources to support the strength goals of rehabilitation.",
      key_red_flags: ["None"],
      scope_boundary: "Nutrient timing vs Dosage prescription"
    },
    scaffolding: {
      level2: {
        question: "My gym buddy says I need 300g of protein a day. Should I take creatine too? 🏋️",
        options: [
          { text: "Creatine is solid! Take about 5g a day.", correct: false, feedback: "Hold up—prescribing specific supplements and dosages isn't really our thing. That's for an RD or sports doc." },
          { text: "300g protein sounds about right for muscle building.", correct: false, feedback: "Whoa, that's likely excessive and could stress his kidneys. We shouldn't validate extreme intakes." },
          { text: "Supplements are a waste of money, skip them all.", correct: false, feedback: "That's a bit dismissive. Some supplements have evidence; we just shouldn't be the ones prescribing them." },
          { text: "Let's focus on getting quality protein from food first. That'll do more for your quad than any powder.", correct: true, feedback: "Exactly. A 'food first' approach is always the safest and most effective starting point for PTs." }
        ]
      },
      level3: {
        update: "Weird question... my pee has been super dark and my back kinda hurts. Is that normal? 🤔",
        time_label: "2 Weeks Later",
        options: [
          { text: "Try drinking more water and check back with me.", correct: false, feedback: "NO. Dark tea-colored urine + back pain + heavy lifting/supplements? That's classic Rhabdomyolysis. It's an emergency." },
          { text: "Dark urine happens when you take creatine, it's fine.", correct: false, feedback: "Incorrect and dangerous. While B-vitamins encourage yellow urine, dark/brown urine is a sign of myoglobin causing kidney damage." },
          { text: "Cut back on the protein shakes but keep exercising.", correct: false, feedback: "He needs medical attention, not dietary tweaks. If his kidneys are failing, 'keep exercising' is bad advice." },
          { text: "That's not normal. You need to see your doctor ASAP and get some bloodwork done.", correct: true, feedback: "Good call. You recognized the signs of potential kidney stress/Rhabdo. You might have saved his kidneys." }
        ]
      }
    }
  },
  {
    id: "NUTR-003", category: "nutrition", difficulty: 2, setting: "Outpatient",
    bg_gradient: "linear-gradient(135deg, #ddd6fe, #8b5cf6)",
    dating_profile: {
      username: "HeartHealthy_Harold",
      age: 71, sex: "M",
      tagline: "Trying to stay safe ❤️",
      bio: "I'm on Warfarin for AFib. My doctor said 'watch the Vitamin K' but didn't explain much.",
      looking_for: "No falls & stable INR",
      baggage: ["AFib", "Warfarin", "Fall Risk"],
      icf_tags: ["b410 Heart functions", "d450 Walking", "e110 Products or substances"]
    },
    level1_question: "I'm confused about this Warfarin diet. Can you write me a list of safe vegetables?",
    correct_swipe: "LEFT_REFER",
    reveal: {
      best_answer_rationale: "Managing Vitamin K intake for INR stability is complex and high-risk. Specific dietary counseling for Warfarin patients requires a Dietitian or Pharmacist.",
      key_red_flags: ["Bleeding risk"],
      scope_boundary: "Drug-Nutrient Interactions"
    },
    // Sorting removed as per user request
    sorting_items: [],
    scaffolding: {
      level2: {
        question: "I just bought a huge bag of kale for smoothies. Should I toss it? 🥬",
        options: [
          { text: "Yeah, kale is dangerous when you're on Warfarin.", correct: false, feedback: "Actually, that's a myth. It's about consistency, not elimination. Telling him to avoid it completely is outdated." },
          { text: "You can eat whatever you want, it doesn't matter.", correct: false, feedback: "It absolutely matters! Inconsistent Vitamin K intake can make his INR swing wildly." },
          { text: "I'll write you a list of foods to completely avoid.", correct: false, feedback: "Out of scope! Plus, elimination isn't the goal. Consistency is." },
          { text: "Don't toss it yet. The key is consistency—keep eating similar amounts daily. Let's check with your doctor before making big changes.", correct: true, feedback: "Smart. Keeping his diet stable is what protects him. Sudden changes in Vitamin K are the real risk." }
        ]
      },
      level3: {
        update: "I woke up with this huge bruise on my leg. Does it look bad? 😟",
        time_label: "2 Days Later",
        media: { type: "image", url: "/bruise.png" },
        options: [
          { text: "Let's keep an eye on it and check again next session.", correct: false, feedback: "No way. That's a massive spontaneous bruise on a blood thinner. Waiting could be fatal." },
          { text: "That's probably just from bumping into something.", correct: false, feedback: "You can't assume that. Spontaneous bruising on Warfarin often signals an overdose/high INR." },
          { text: "Stop taking your Warfarin until your next doctor visit.", correct: false, feedback: "Never tell a patient to stop a prescribed medication! That's practicing medicine without a license." },
          { text: "I need to call your doctor about this right now. Stay on the phone with me.", correct: true, feedback: "Exactly. That kind of bruising could mean his INR is dangerously high. Immediate medical contact is required." }
        ]
      }
    }
  },
  {
    id: "NUTR-004", category: "nutrition", difficulty: 4, setting: "Acute Care",
    bg_gradient: "linear-gradient(135deg, #fbbf24, #d97706)",
    dating_profile: {
      username: "PostOp_Gary",
      age: 63, sex: "M",
      tagline: "Feeling kinda funny... 😵",
      bio: "I just finished my breathing treatments. Feeling super weird... shaky, sweaty, and confused.",
      looking_for: "My lunch tray",
      baggage: ["T2DM", "Insulin", "HR: 112"],
      icf_tags: ["b110 Consciousness", "b540 General metabolic functions", "d240 Handling stress"]
    },
    level1_question: "Did I take my insulin today? I can't remember... (Shaky/Sweaty)",
    correct_swipe: "LEFT_911",
    reveal: {
      best_answer_rationale: "Neuroglycopenia (confusion) + diaphoresis indicates acute hypoglycemia. This is an immediate safety event requiring medical response (Glucose/EMS), not dietary advice.",
      key_red_flags: ["Altered Mental Status", "Diaphoresis"],
      scope_boundary: "Emergency Response"
    },
    scaffolding: {
      level2: {
        question: "I think I just need to sleep it off... 😴",
        options: [
          { text: "Okay, rest for 10 minutes and we'll get back to exercises.", correct: false, feedback: "Absolutely not. If his sugar is low and he falls asleep (losses consciousness), he might not wake up." },
          { text: "Drink some water and walk around, you'll feel better.", correct: false, feedback: "Walking burns glucose, which will make him CRASH faster. Dangerous advice!" },
          { text: "Let me call your family to pick you up.", correct: false, feedback: "This is a medical emergency happening NOW. He needs sugar, not a ride." },
          { text: "No sleeping! Stay with me. I'm checking your blood sugar right now.", correct: true, feedback: "Good instincts. You recognized the immediate danger. Safety first, always." }
        ]
      },
      level3: {
        update: "[You check the glucometer: 38 mg/dL. He's conscious but barely responding.]",
        time_label: "5 Minutes Later",
        options: [
          { text: "Call 911 right now.", correct: false, feedback: "Wait—he's conscious and can swallow. You can treat this faster than EMS can arrive. Don't wait." },
          { text: "Let's wait 15 minutes and recheck before doing anything.", correct: false, feedback: "At 38 mg/dL, he has minutes before seizure/coma. Waiting is negligent." },
          { text: "You should have eaten breakfast. Try to be more careful next time.", correct: false, feedback: "Lecturing him while he's crashing? Not helpful. Treat the patient!" },
          { text: "Grab some juice or glucose tabs. Get sugar in him NOW while he can still swallow.", correct: true, feedback: "Yes. The 'Rule of 15'. Fast-acting sugar while he's still conscious is the gold standard interventions." }
        ]
      }
    }
  },
  {
    id: "NUTR-005", category: "nutrition", difficulty: 5, setting: "Outpatient",
    bg_gradient: "linear-gradient(135deg, #c4b5fd, #5b21b6)",
    dating_profile: {
      username: "Runner_Girl_24",
      age: 24, sex: "F",
      tagline: "Running away from fats 🏃‍♀️",
      bio: "I've lost 25 lbs in 6 weeks! I run twice a day to burn everything off.",
      looking_for: "Validation & PRs",
      baggage: ["High Exercise", "Rapid Weight Loss"],
      icf_tags: ["b530 Weight maintenance", "d570 Looking after one's health", "b455 Exercise tolerance functions"]
    },
    level1_question: "Fat makes you slow, right? I'm terrified of eating it.",
    correct_swipe: "LEFT_REFER",
    reveal: {
      best_answer_rationale: "'Food fear' combined with rapid weight loss is a red flag for Disordered Eating (RED-S). This requires multidisciplinary management (Psych/RD/MD), beyond PT scope.",
      key_red_flags: ["Rapid loss", "Food fear"],
      scope_boundary: "Psych/Behavioral Health"
    },
    sorting_items: [],
    scaffolding: {
      level2: {
        question: "You're the health expert. Tell me I look healthy. 😅",
        options: [
          { text: "You look fit! Maybe just slow down a little.", correct: false, feedback: "That validates the behavior. Saying 'you look fit' reinforces the disordered thinking." },
          { text: "That's impressive weight loss! What's your secret?", correct: false, feedback: "Dangerous! Complimenting rapid weight loss fuels the eating disorder pathology." },
          { text: "You should eat more protein to build muscle.", correct: false, feedback: "Focusing on nutrients misses the bigger behavioral health picture here." },
          { text: "I'm actually a little worried about how much fuel your body is losing compared to how hard you're working it.", correct: true, feedback: "Good. You stayed objective and health-focused without judging her or validating the weight loss." }
        ]
      },
      level3: {
        update: "I feel super dizzy every time I stand up. Like the room is spinning. Is that normal? 😵‍💫",
        time_label: "During Session",
        options: [
          { text: "That can happen. I'll get you connected with a therapist who can help.", correct: false, feedback: "That's not just anxiety. Dizziness on standing (orthostasis) + low weight = Cardiac Risk. She needs a doctor." },
          { text: "Just stand up more slowly, it's normal.", correct: false, feedback: "It is NOT normal. It's a sign of hemodynamic instability." },
          { text: "Let's reduce exercise intensity and see if that helps.", correct: false, feedback: "She is medically unstable. Modifying exercise isn't enough; she needs clearance to be here." },
          { text: "That's actually concerning. I want you to see a doctor before we continue PT. Your heart needs to be checked out first.", correct: true, feedback: "Right call. Orthostatic hypotension is a red flag for medical instability. Safety first." }
        ]
      }
    }
  },
  {
    id: "NUTR-006", category: "nutrition", difficulty: 2, setting: "Outpatient",
    bg_gradient: "linear-gradient(135deg, #fcd34d, #f59e0b)",
    dating_profile: {
      username: "JointsJammed62",
      age: 62, sex: "M",
      tagline: "Quick fix hunter 💊",
      bio: "My knees are killing me. I saw these 'Joint Juice' pills at Costco. Glucosamine something?",
      looking_for: "No more knee pain",
      baggage: ["OA", "Costco Member"],
      icf_tags: ["b28016 Pain in joints", "e1101 Drugs", "d570 Looking after health"]
    },
    level1_question: "Should I buy 'Joint Juice'? Does it actually work?",
    correct_swipe: "RIGHT_PT",
    reveal: {
      best_answer_rationale: "PTs can provide evidence-based summaries on supplements (e.g., 'Research is mixed for Glucosamine') without endorsing specific brands or prescribing dosages.",
      key_red_flags: ["None"],
      scope_boundary: "Education vs Endorsement"
    },
    scaffolding: {
      level2: {
        question: "So, do they work? Yes or no?",
        options: [
          { text: "Yes, definitely buy them. Take 2 a day.", correct: false, feedback: "Prescribing dosage and endorsing a purchase is out of scope. Plus, evidence is mixed." },
          { text: "It's snake oil. Don't waste your money.", correct: false, feedback: "Too dismissive. Some patients report relief, and placebo is powerful. Present facts, not opinions." },
          { text: "The research is mixed. Some people find relief, but it doesn't regrow cartilage. It's safe to try if you want.", correct: true, feedback: "Perfect. Balanced, evidence-based education without prescribing." },
          { text: "I can't talk about pills. Ask your pharmacist.", correct: false, feedback: "You're dodging. We CAN discuss common supplements related to musculoskeletal health." }
        ]
      },
      level3: {
        update: "I bought them! The bottle says 'Chondroitin'. Is that the same thing?",
        time_label: "Next Session",
        options: [
          { text: "Yep, exact same thing.", correct: false, feedback: "Factually incorrect. They are different compounds often sold together." },
          { text: "They are often paired. Just make sure to check with your doctor since they can interact with blood thinners.", correct: true, feedback: "Crucial safety catch! Glucosamine/Chondroitin can interact with Warfarin." },
          { text: "Stop taking them immediately before asking your doctor.", correct: false, feedback: "Alarmist. Unless he's on specific meds, he doesn't need to stop immediately." },
          { text: "It helps with lubrication. Take it with food.", correct: false, feedback: "Still prescribing usage instructions. Avoid 'Take it with food'." }
        ]
      }
    }
  },
  {
    id: "NUTR-007", category: "nutrition", difficulty: 4, setting: "Home Health",
    bg_gradient: "linear-gradient(135deg, #60a5fa, #2563eb)",
    dating_profile: {
      username: "DizzyDoris",
      age: 84, sex: "F",
      tagline: "Thirsty but safe? 🌵",
      bio: "I'm so dizzy today. I didn't want to get up to pee all night so I just stopped drinking water yesterday.",
      looking_for: "Sleeping through the night",
      baggage: ["Incontinence", "Falls", "Oxybutynin"],
      icf_tags: ["b620 Urination functions", "b2401 Dizziness", "d410 Changing body position"]
    },
    level1_question: "Do I have to start drinking water again? I hate the leaking.",
    correct_swipe: "RIGHT_PT",
    reveal: {
      best_answer_rationale: "Fluid restriction worsens incontinence by irritating the bladder (concentrated urine). Education on hydration is a core component of pelvic health and fall prevention.",
      key_red_flags: ["Hypotension risk"],
      scope_boundary: "Basic Physiological Education"
    },
    scaffolding: {
      level2: {
        question: "But if I drink, I leak. I'd rather be dry and dizzy.",
        options: [
          { text: "You have to drink 8 glasses a day. No exceptions.", correct: false, feedback: "Rigid rules don't help her reality. She needs a strategy, not a mandate." },
          { text: "That makes sense. Falls are worse than leaks though.", correct: false, feedback: "True, but invalidating her fear of incontinence will ruin your rapport." },
          { text: "What if we sip water early in the day and stop at 6pm? We need to fix the dizziness to stop the falls.", correct: true, feedback: "Excellent negotiation. Front-loading fluids addresses the dehydration without ignoring the incontinence fear." },
          { text: "I'll put you on a fluid restriction plan.", correct: false, feedback: "Absolutely not. Only MDs can order fluid restrictions." }
        ]
      },
      level3: {
        update: "My mouth is so dry though. Is coffee okay? It's liquid.",
        time_label: "5 Minutes Later",
        options: [
          { text: "Coffee counts as water! Drink up.", correct: false, feedback: "Coffee is a bladder irritant. It will make her incontinence WORSE." },
          { text: "No coffee allowed. Water only.", correct: false, feedback: "Too strict. She's 84, let her have joy. Just educate on the effects." },
          { text: "Coffee can actually irritate your bladder and make you go more. Maybe switch to decaf or water for now?", correct: true, feedback: "Spot on. Educating on bladder irritants is a key part of pelvic/geriatric PT." },
          { text: "Tea is better than coffee.", correct: false, feedback: "Tea (caffeine) is also a bladder irritant. This isn't a helpful distinction." }
        ]
      }
    }
  },
  {
    id: "NUTR-008", category: "nutrition", difficulty: 3, setting: "Outpatient",
    bg_gradient: "linear-gradient(135deg, #f87171, #ef4444)",
    dating_profile: {
      username: "TechBro_Biohacker",
      age: 35, sex: "M",
      tagline: "Optimizing my biology 🔋",
      bio: "I'm doing 'Keto' and Intermittent Fasting. I only eat between 4pm and 6pm. I feel weak during our 9am sessions.",
      looking_for: "Back pain cure & Productivity",
      baggage: ["LBP", "Tech Worker", "Fasting"],
      icf_tags: ["b130 Energy and drive functions", "d240 Handling stress", "d845 Acquiring/keeping a job"]
    },
    level1_question: "Should I keep fixing my diet or is this hurting my rehab?",
    correct_swipe: "RIGHT_PT",
    reveal: {
      best_answer_rationale: "Fasting >12hrs can deplete glycogen, affecting rehab performance. PTs can discuss meal timing to ensure 'energy availability' for safety during exercise sessions.",
      key_red_flags: ["Hypoglycemia risk during exercise"],
      scope_boundary: "Performance Fueling"
    },
    scaffolding: {
      level2: {
        question: "Should I stop the fasting? My friend says it cures back pain.",
        options: [
          { text: "Yes, fasting is stupid. Eat breakfast.", correct: false, feedback: "Judgmental. We need to respect his autonomy even if we disagree." },
          { text: "Fasting cures inflammation! Keep going.", correct: false, feedback: "Pseudoscience. We can't validate unproven claims." },
          { text: "I can't tell you what to eat, but if you have no fuel at 9am, your muscles can't protect your back during rehab.", correct: true, feedback: "Great linkage. You connected his diet choice directly to his functional performance (Scope)." },
          { text: "Change your eating window to 8am-10am.", correct: false, feedback: "Prescribing specific eating windows is getting too close to RD territory." }
        ]
      },
      level3: {
        update: "Okay, I'll eat before coming. What's the best thing to eat for energy?",
        time_label: "Next Session",
        options: [
          { text: "A banana or toast is usually easy energy. Something with carbs.", correct: true, feedback: "General advice on pre-workout carbs is appropriate for PTs (energy availability)." },
          { text: "You need 50g of maltodextrin powder.", correct: false, feedback: "Way too specific. That's sports nutrition prescription." },
          { text: "Steak and eggs.", correct: false, feedback: "Heavy protein/fat digestion might make him sluggish for exercise." },
          { text: "Consult a dietitian for a meal plan.", correct: false, feedback: "A bit of a cop-out. You can give general 'pre-workout snack' ideas without an RD referral." }
        ]
      }
    }
  },
  {
    id: "NUTR-009", category: "nutrition", difficulty: 5, setting: "Inpatient Rehab",
    bg_gradient: "linear-gradient(135deg, #818cf8, #4f46e5)",
    dating_profile: {
      username: "Hospital_Hilda",
      age: 55, sex: "F",
      tagline: "Sweating the small stuff 😰",
      bio: "My nurse just gave me my insulin, but my lunch tray hasn't arrived. I'm starting to sweat.",
      looking_for: "Food ASAP",
      baggage: ["T1DM", "Stroke", "Insulin"],
      icf_tags: ["b5401 Carbohydrate metabolism", "d570 Looking after one's health", "e580 Health services"]
    },
    level1_question: "Can I just wait or do I need help?",
    correct_swipe: "LEFT_911",
    reveal: {
      best_answer_rationale: "✅ Correct (Urgent). Rapid-acting insulin without food leads to severe hypoglycemia. This is an inpatient safety event requiring immediate notification of nursing.",
      key_red_flags: ["Diaphoresis", "T1DM Timing"],
      scope_boundary: "Inpatient Patient Safety"
    },
    sorting_items: [],
    scaffolding: {
      level2: {
        question: "Can we just finish these leg lifts while I wait?",
        options: [
          { text: "Sure, let's hurry.", correct: false, feedback: "Exercise lowers blood sugar further. This will accelerate the crash." },
          { text: "No. Taking insulin without food is dangerous. We need to find your nurse or some juice immediately.", correct: true, feedback: "Correct. Safety stop. Explain the 'Why' (insulin/food mismatch)." },
          { text: "I'll go check the kitchen.", correct: false, feedback: "Don't leave the patient alone! Call for help." },
          { text: "Just breathe through it.", correct: false, feedback: "Sweating isn't anxiety, it's hypoglycemia. Breathing won't fix low sugar." }
        ]
      },
      level3: {
        update: "I'm starting to see spots...",
        time_label: "30 Seconds Later",
        options: [
          { text: "I'm calling the Rapid Response Team.", correct: true, feedback: "Yes. Symptomatic hypoglycemia in outcomes (T1DM/Stroke) is a medical emergency." },
          { text: "Here, drink some water.", correct: false, feedback: "Water has no sugar. Useless." },
          { text: "Let's lay down and wait.", correct: false, feedback: "Waiting = Coma." },
          { text: "Do you have any candy in your bag?", correct: false, feedback: "Good thought, but calling for medical help (Nurse/RRT) is priority in a hospital." }
        ]
      }
    }
  },
  {
    id: "NUTR-010", category: "nutrition", difficulty: 3, setting: "Outpatient",
    bg_gradient: "linear-gradient(135deg, #fca5a5, #dc2626)",
    dating_profile: {
      username: "Tomato_Fear",
      age: 65, sex: "F",
      tagline: "Missing my pasta 🍝",
      bio: "My neighbor says tomatoes are poison for my Arthritis. I love pasta sauce though.",
      looking_for: "Truth about pain",
      baggage: ["RA", "Methotrexate"],
      icf_tags: ["b28014 Pain in upper limb", "e3 Culture/Beliefs", "d240 Handling stress"]
    },
    level1_question: "Should I stop eating tomatoes to help my RA pain?",
    correct_swipe: "RIGHT_PT",
    reveal: {
      best_answer_rationale: "No strong evidence supports nightshade elimination for RA. PTs can educate on adding evidence-based anti-inflammatory foods (like Mediterranean diet) rather than validating restrictive myths.",
      key_red_flags: ["Fear avoidance"],
      scope_boundary: "Dietary Patterns vs Elimination"
    },
    scaffolding: {
      level2: {
        question: "But she swore it cured her. Are you saying she's lying?",
        options: [
          { text: "Yes, that's nonsense.", correct: false, feedback: "Dismissive. Placebo and individual variances are real." },
          { text: "If it worked for her, you should definitely do it.", correct: false, feedback: "Not evidence-based. We can't endorse unproven elimination diets." },
          { text: "Research is mixed on 'nightshades'. But we DO know that adding berries and fish helps. Let's focus on what to ADD.", correct: true, feedback: "Perfect. Pivot from 'Fear/Restriction' to 'Abundance/Evidence'." },
          { text: "I'll write you a full anti-inflammatory meal plan.", correct: false, feedback: "Meal plans are mostly for RDs. Stick to education." }
        ]
      },
      level3: {
        update: "I love pasta sauce though. If I can't have tomatoes, I'm miserable.",
        time_label: "Mid-Session",
        options: [
          { text: "Then eat them! Joy is important too. Let's track your pain and see if it actually flares.", correct: true, feedback: "Excellent. N=1 experiment. Empower the patient to test the theory without fear." },
          { text: "You must sacrifice for your health.", correct: false, feedback: "Terrible therapeutic alliance." },
          { text: "Switch to alfredo sauce.", correct: false, feedback: "High saturated fat might be worse for general inflammation/heart health." },
          { text: "Ask your rheumatologist.", correct: false, feedback: "Valid, but you can handle this level of basic dietary counseling." }
        ]
      }
    }
  },
  {
    id: "NUTR-011", category: "nutrition", difficulty: 2, setting: "Outpatient",
    bg_gradient: "linear-gradient(135deg, #e9d5ff, #9333ea)",
    dating_profile: {
      username: "Bone_Density_Betty",
      age: 70, sex: "F",
      tagline: "Staying strong 🦴",
      bio: "I bought these 1200mg Calcium pills for my bones.",
      looking_for: "No fractures",
      baggage: ["Osteopenia", "Alendronate"],
      icf_tags: ["s710 Structure of head and neck", "b710 Mobility of joint functions", "d570 Looking after health"]
    },
    level1_question: "How many of these calcium pills should I take to fix my bones?",
    correct_swipe: "LEFT_REFER",
    reveal: {
      best_answer_rationale: "While PTs encourage bone-healthy nutrition, recommending specific supplement dosages involves medical risk assessment (e.g., kidney stones, heart calcification) and is MD/RD scope.",
      key_red_flags: ["Calcification risk"],
      scope_boundary: "Dosage Prescription"
    },
    scaffolding: {
      level2: {
        question: "I heard calcium from pills ends up in your heart arteries.",
        options: [
          { text: "That's why you should take 3000mg.", correct: false, feedback: "Dangerous advice." },
          { text: "It can. That's why we prefer you get calcium from yogurt, greens, and fortified foods first.", correct: true, feedback: "Correct. 'Food First' is the safest scope-compliant advice." },
          { text: "Don't worry about it.", correct: false, feedback: "Dismissing valid medical concerns is poor practice." },
          { text: "Stop taking them immediately.", correct: false, feedback: "Don't discontinue meds without MD consult unless imminent harm." }
        ]
      },
      level3: {
        update: "I hate dairy. What else can I eat?",
        time_label: "Wrap Up",
        options: [
          { text: "Leafy greens, almonds, fortified almond milk, sardines.", correct: true, feedback: "Great general nutrition knowledge. Helpful and safe." },
          { text: "You have to eat dairy.", correct: false, feedback: "False." },
          { text: "Just take the pills then.", correct: false, feedback: "Missed opportunity for education." },
          { text: "Eat chalk.", correct: false, feedback: "No." }
        ]
      }
    }
  },
  {
    id: "NUTR-012", category: "nutrition", difficulty: 3, setting: "Home Health",
    bg_gradient: "linear-gradient(135deg, #cbd5e1, #475569)",
    dating_profile: {
      username: "NoAppetite_Arthur",
      age: 82, sex: "M",
      tagline: "Just want some tea ☕",
      bio: "I'm just not hungry after surgery. Toast and tea is all I want.",
      looking_for: "Healing & Nap time",
      baggage: ["TKA (2 weeks)", "Tramadol"],
      icf_tags: ["b820 Repair functions of skin", "b130 Energy and drive functions", "s810 Structure of areas of skin"]
    },
    level1_question: "Is that okay? Or do I have to eat?",
    correct_swipe: "RIGHT_PT",
    reveal: {
      best_answer_rationale: "Post-surgical wound healing requires adequate protein. PTs must educate on the physiological necessity of 'fueling' the healing process to prevent dehiscence.",
      key_red_flags: ["Dehiscence risk"],
      scope_boundary: "Physiology of Healing"
    },
    scaffolding: {
      level2: {
        question: "My wife tries to force me to eat steak. I can't chew it.",
        options: [
          { text: "Listen to your wife.", correct: false, feedback: "Siding against the patient creates friction." },
          { text: "Steak is the only good protein.", correct: false, feedback: "False." },
          { text: "Toast provides energy, but your wound needs 'building blocks'. Can we try soft proteins like eggs or yogurt?", correct: true, feedback: "Great metaphor (Fuel vs Building Blocks) and offered a texture-appropriate solution." },
          { text: "You need a feeding tube.", correct: false, feedback: "Extreme escalation." }
        ]
      },
      level3: {
        update: "I'll try an egg. But does it really matter?",
        time_label: "Next Visit",
        options: [
          { text: "Without protein, your incision literally cannot glue itself back together. It might reopen.", correct: true, feedback: "Direct, factual, and motivating without being overly scary. It connects diet to the physical therapy outcome (Wound closure)." },
          { text: "Yes it matters.", correct: false, feedback: "Too vague." },
          { text: "Do whatever you want.", correct: false, feedback: "Apathetic." },
          { text: "Protein makes muscles huge.", correct: false, feedback: "He's 82 and post-op; he cares about healing, not bodybuilding." }
        ]
      }
    }
  },

  // ============================================
  // DIRECT ACCESS / PRIMARY CARE CASES
  // ============================================
  {
    id: "DA-001", category: "direct_access", difficulty: 1, setting: "Outpatient",
    bg_gradient: "linear-gradient(135deg, #c4b5fd, #7c3aed)",
    dating_profile: {
      username: "RunnerKnee_Mike34",
      age: 34, sex: "M",
      tagline: "Just wanna run again 🏃",
      bio: "Knee started hurting 2 weeks ago after ramping up my marathon training. No trauma, no locking, no giving way.",
      looking_for: "Get back to running ASAP",
      baggage: ["Anterior knee pain", "No meds"],
      icf_tags: ["b28016 Pain in joints", "d4552 Running", "b710 Mobility of joint functions"]
    },
    level1_question: "Do I really need to see my doctor first, or can you just fix my knee?",
    correct_swipe: "RIGHT_PT",
    reveal: {
      best_answer_rationale: "Atraumatic anterior knee pain in a young active adult with no red flags is classic musculoskeletal. Direct access allows PTs to evaluate and treat without physician referral in most states.",
      key_red_flags: ["None"],
      scope_boundary: "Appropriate Direct Access"
    },
    scaffolding: {
      level2: {
        question: "My buddy tore his ACL running though. How do you know mine isn't torn? 🤔",
        options: [
          { text: "I can't know. You should get an MRI first.", correct: false, feedback: "PTs are trained in differential diagnosis. Clinical tests like Lachman's and Pivot Shift can rule this in/out without imaging." },
          { text: "ACL tears don't happen from running—you're fine.", correct: false, feedback: "While rare from running alone, dismissing patient concerns isn't best practice." },
          { text: "Great question. Let me do some specific ligament tests on your knee right now to rule that out.", correct: true, feedback: "Perfect. You demonstrated clinical reasoning and reassured the patient with evidence-based examination." },
          { text: "If it was torn, you'd know. It's really painful.", correct: false, feedback: "Not always true. Some ACL tears present with minimal pain. Clinical testing is the answer." }
        ]
      },
      level3: {
        update: "Okay, tests were negative. But now I'm getting some sharp pain going DOWN stairs. Worse than before. 😬",
        time_label: "2 Weeks Later",
        options: [
          { text: "That's patellofemoral syndrome. Let's add quad strengthening and modify your training load.", correct: true, feedback: "Spot on. Worsening with stairs + negative ligament tests = classic PFP. Load management and strengthening are first-line." },
          { text: "You need to stop running completely until this resolves.", correct: false, feedback: "Complete rest is rarely indicated for PFP and can actually delay recovery. Relative rest + graded loading is preferred." },
          { text: "This is getting worse—I'm referring you to ortho.", correct: false, feedback: "Worsening stair pain alone doesn't warrant referral. This is within PT scope to manage conservatively." },
          { text: "Try icing it after every run.", correct: false, feedback: "Ice alone doesn't address the biomechanical cause. He needs structured rehab." }
        ]
      }
    }
  },
  {
    id: "DA-002", category: "direct_access", difficulty: 1, setting: "Outpatient",
    bg_gradient: "linear-gradient(135deg, #fde68a, #f59e0b)",
    dating_profile: {
      username: "DeskNeck_Sarah",
      age: 42, sex: "F",
      tagline: "My neck is killing me 💻",
      bio: "Work from home, 10+ hours at the computer daily. Neck has been stiff and achy for 3 weeks. No numbness, no headaches.",
      looking_for: "Pain relief & ergonomic help",
      baggage: ["Cervical stiffness", "Sedentary job"],
      icf_tags: ["b28010 Pain in head and neck", "b710 Mobility of joint functions", "d845 Acquiring, keeping and terminating a job"]
    },
    level1_question: "I didn't get a referral from my doctor. Can you still see me?",
    correct_swipe: "RIGHT_PT",
    reveal: {
      best_answer_rationale: "Mechanical neck pain from postural strain with no neurological symptoms is a textbook direct access case. PTs can evaluate and treat without referral.",
      key_red_flags: ["None"],
      scope_boundary: "Appropriate Direct Access"
    },
    scaffolding: {
      level2: {
        question: "My coworker said neck pain can be a sign of meningitis. Should I be worried? 😰",
        options: [
          { text: "No, meningitis is really rare. Don't worry about it.", correct: false, feedback: "While rare, dismissing concerns without screening isn't appropriate. Ask about fever, photophobia, and rash." },
          { text: "Let me ask you a few screening questions—any fever, sensitivity to light, or rash recently?", correct: true, feedback: "Excellent clinical reasoning. Screening for red flags before reassuring is best practice in direct access." },
          { text: "You should go to the ER to rule that out.", correct: false, feedback: "Without any red flags present, sending to ER is an overreaction. Screen first, then decide." },
          { text: "Meningitis causes a stiff neck, not a sore neck. Totally different.", correct: false, feedback: "While there is a difference, this is oversimplified and could miss a serious condition. Always screen." }
        ]
      },
      level3: {
        update: "Headaches have started this week. They wrap around from the back of my head to my forehead. 🤕",
        time_label: "1 Week Later",
        options: [
          { text: "That pattern is cervicogenic headache. Let's treat the upper cervical spine and adjust your workstation.", correct: true, feedback: "Classic cervicogenic headache pattern (occipital → frontal). Manual therapy to C1-2 + ergonomic correction is evidence-based." },
          { text: "Headaches are outside PT scope. I'm referring you to neurology.", correct: false, feedback: "Cervicogenic headaches are absolutely within PT scope. The referral pattern clearly points to cervical origin." },
          { text: "Take some ibuprofen before our sessions.", correct: false, feedback: "Masking symptoms with medication doesn't address the cause and isn't PT's role to recommend dosing." },
          { text: "We need to get a CT scan of your head.", correct: false, feedback: "The headache pattern is consistent with cervical origin, not intracranial pathology. Imaging isn't indicated here." }
        ]
      }
    }
  },
  {
    id: "DA-003", category: "direct_access", difficulty: 2, setting: "Outpatient",
    bg_gradient: "linear-gradient(135deg, #fca5a5, #ef4444)",
    dating_profile: {
      username: "ChestPain_Tom55",
      age: 55, sex: "M",
      tagline: "Something doesn't feel right 😟",
      bio: "Walked in saying he has 'chest tightness' that started this morning. Also feels short of breath. Hasn't seen a doctor.",
      looking_for: "Figured PT could check it out",
      baggage: ["HTN", "Smoker (30yrs)", "Metoprolol"],
      icf_tags: ["b4150 Functions of arteries", "b440 Respiration functions", "b455 Exercise tolerance functions"]
    },
    level1_question: "I've got this tightness in my chest since this morning. Can you take a look?",
    correct_swipe: "LEFT_REFER",
    reveal: {
      best_answer_rationale: "New-onset chest tightness with SOB in a 55yo male smoker with HTN is a cardiovascular red flag. This patient needs emergency medical screening, NOT physical therapy. Direct access requires recognizing when NOT to treat.",
      key_red_flags: ["New chest tightness", "SOB", "HTN", "Smoking history", "Age > 50"],
      scope_boundary: "Medical Emergency Screening"
    },
    scaffolding: {
      level2: {
        question: "C'mon, I probably just pulled something. Can't you just work on it? 💪",
        options: [
          { text: "You're right, it's probably muscular. Let me take a look.", correct: false, feedback: "DANGEROUS. With his risk factors (age, HTN, smoking), assuming musculoskeletal origin could be fatal." },
          { text: "I understand, but your symptoms combined with your health history mean we need to rule out something more serious first. I'm calling 911.", correct: true, feedback: "Correct. Patient safety always comes first. Direct access means knowing when to NOT be the provider." },
          { text: "Let me check your blood pressure and heart rate first.", correct: false, feedback: "While vitals are useful, this is delaying action on a potential cardiac emergency. Call 911 first." },
          { text: "I'll refer you back to your PCP for a checkup.", correct: false, feedback: "Too slow. A PCP visit next week doesn't address a potential MI happening NOW." }
        ]
      },
      level3: {
        update: "His tightness seems to be radiating to his left arm now. He's sweating. 🚨",
        time_label: "5 Minutes Later",
        options: [
          { text: "Call 911 immediately. Have him sit down, loosen clothing, and stay with him until EMS arrives.", correct: true, feedback: "Textbook response. Left arm radiation + diaphoresis = classic MI presentation. You're saving a life." },
          { text: "Give him aspirin and drive him to the hospital yourself.", correct: false, feedback: "While aspirin is appropriate first aid, driving him yourself delays advanced cardiac care. EMS can start treatment en route." },
          { text: "Help him lie down on the treatment table and monitor his symptoms.", correct: false, feedback: "Lying flat can worsen cardiac symptoms. Sitting upright is preferred. And monitoring isn't enough—he needs EMS." },
          { text: "Check if anyone in the clinic has nitroglycerin.", correct: false, feedback: "PT clinics don't stock cardiac meds, and administering prescription medication isn't in PT scope. Call 911." }
        ]
      }
    }
  },
  {
    id: "DA-004", category: "direct_access", difficulty: 2, setting: "Outpatient",
    bg_gradient: "linear-gradient(135deg, #a7f3d0, #10b981)",
    dating_profile: {
      username: "BackPain_Linda48",
      age: 48, sex: "F",
      tagline: "Threw out my back AGAIN 😤",
      bio: "Recurrent low back pain flare-ups. Last episode was 6 months ago. Bending to pick up groceries triggered it yesterday. No leg symptoms.",
      looking_for: "Quick fix for my back",
      baggage: ["Recurrent LBP", "No imaging", "Ibuprofen PRN"],
      icf_tags: ["b28013 Pain in back", "b710 Mobility of joint functions", "d430 Lifting and carrying objects"]
    },
    level1_question: "My back went out again. I just came straight here—should I have gone to my doctor first?",
    correct_swipe: "RIGHT_PT",
    reveal: {
      best_answer_rationale: "Recurrent mechanical low back pain without radiculopathy or red flags is ideal for direct access PT. Evidence strongly supports PT as first-line care for LBP, reducing imaging and opioid use.",
      key_red_flags: ["None"],
      scope_boundary: "Appropriate Direct Access"
    },
    scaffolding: {
      level2: {
        question: "Don't I need an X-ray or MRI first? My friend said I probably have a herniated disc. 🩻",
        options: [
          { text: "Imaging isn't recommended for non-specific LBP without red flags. Let me examine you and we'll know more.", correct: true, feedback: "Evidence-based. Clinical practice guidelines advise against routine imaging for acute LBP without red flags." },
          { text: "You should get an MRI to be safe.", correct: false, feedback: "Unnecessary imaging leads to incidental findings, anxiety, and often more invasive (and unnecessary) treatment." },
          { text: "An X-ray would be helpful to see what's going on.", correct: false, feedback: "X-rays don't show disc herniations and expose patients to radiation unnecessarily. Clinical exam first." },
          { text: "Your friend might be right. Let me refer you for imaging.", correct: false, feedback: "Validating an unqualified diagnosis and ordering unnecessary imaging goes against best practice." }
        ]
      },
      level3: {
        update: "It's better, but now I'm getting some tingling down my left leg to my foot. First time that's happened. 😨",
        time_label: "1 Week Later",
        options: [
          { text: "New radiculopathy changes things. Let me do a neurological screen. If reflexes or strength are affected, we may need imaging now.", correct: true, feedback: "Exactly right. New neuro symptoms warrant further workup. You adapted your plan based on changing presentation." },
          { text: "That's normal with back pain. Keep doing your exercises.", correct: false, feedback: "New radicular symptoms are NOT 'normal.' This could indicate nerve root compression requiring different management." },
          { text: "We need to stop all treatment and get you to a spine surgeon.", correct: false, feedback: "Jumping to surgery consultation skips the diagnostic workup. Neurological screening first, then decide." },
          { text: "It's probably just sciatica. Stretch your piriformis.", correct: false, feedback: "Oversimplification. New leg tingling with LBP needs proper neurological examination, not a generic stretch." }
        ]
      }
    }
  },
  {
    id: "DA-005", category: "direct_access", difficulty: 3, setting: "Outpatient",
    bg_gradient: "linear-gradient(135deg, #fdba74, #ea580c)",
    dating_profile: {
      username: "ShoulderGuy_Ray62",
      age: 62, sex: "M",
      tagline: "Can't reach the top shelf anymore 🤷",
      bio: "Gradual onset right shoulder pain over 3 months. Worse overhead. Also noticed unexplained 10lb weight loss in the past month.",
      looking_for: "Get my shoulder moving again",
      baggage: ["R shoulder pain", "Weight loss (unexplained)", "No meds"],
      icf_tags: ["b28014 Pain in upper limb", "b710 Mobility of joint functions", "b530 Weight maintenance functions"]
    },
    level1_question: "My shoulder has been bugging me for months. I figure PT is the right move?",
    correct_swipe: "LEFT_REFER",
    reveal: {
      best_answer_rationale: "While the shoulder pain alone could be direct access appropriate, unexplained weight loss is a systemic red flag. This patient needs medical screening for potential malignancy or other systemic disease before PT intervention.",
      key_red_flags: ["Unexplained weight loss (10lb/1month)", "Age > 50", "Insidious onset"],
      scope_boundary: "Red Flag Screening"
    },
    scaffolding: {
      level2: {
        question: "I'm sure the weight loss is just stress. Can we focus on the shoulder? 🙏",
        options: [
          { text: "Sure, let's focus on what brought you in.", correct: false, feedback: "Never ignore a systemic red flag because the patient minimizes it. Unexplained weight loss + insidious pain = screen first." },
          { text: "I hear you, but 10 pounds in a month without trying is something your doctor needs to check. I'd feel better treating your shoulder after we rule out other causes.", correct: true, feedback: "Professional, empathetic, and safe. You validated his concern while prioritizing the red flag." },
          { text: "Weight loss is outside my scope. Not my problem.", correct: false, feedback: "Red flag screening IS your scope in direct access. Recognizing systemic signs is essential." },
          { text: "Let me check your shoulder today and if it doesn't improve we'll refer.", correct: false, feedback: "Delaying referral when red flags are present is dangerous. Screen first, then treat." }
        ]
      },
      level3: {
        update: "I went to my doctor. They found a mass on my lung. They're running more tests. Thanks for catching that. 😔",
        time_label: "2 Weeks Later",
        options: [
          { text: "I'm glad we caught it. Once your medical team clears you, I'm here to help with your shoulder.", correct: true, feedback: "Compassionate and appropriate. You saved this man's life by recognizing a red flag. This is why screening matters." },
          { text: "See? That's why I can't just treat shoulders without knowing the full picture.", correct: false, feedback: "While true, this comes across as self-congratulatory. Show empathy first." },
          { text: "Let's start shoulder rehab anyway to keep you moving.", correct: false, feedback: "Without medical clearance and knowing the diagnosis, starting rehab could be contraindicated." },
          { text: "You should have gone to the doctor sooner.", correct: false, feedback: "Blaming the patient is never appropriate. He came to you and you caught it—that's the system working." }
        ]
      }
    }
  },
  {
    id: "DA-006", category: "direct_access", difficulty: 1, setting: "Outpatient",
    bg_gradient: "linear-gradient(135deg, #93c5fd, #2563eb)",
    dating_profile: {
      username: "AnkleTwist_Jess22",
      age: 22, sex: "F",
      tagline: "Rolled it at volleyball 🏐",
      bio: "Lateral ankle sprain at rec league last night. Swollen, bruised, can bear weight but it hurts. No previous ankle injuries.",
      looking_for: "Get back on the court fast",
      baggage: ["Acute lateral ankle sprain", "No meds"],
      icf_tags: ["b28015 Pain in lower limb", "b715 Stability of joint functions", "d9201 Sports"]
    },
    level1_question: "I rolled my ankle last night. Can I just come see you or do I need X-rays first?",
    correct_swipe: "RIGHT_PT",
    reveal: {
      best_answer_rationale: "PTs can apply the Ottawa Ankle Rules to determine if imaging is needed. She's weight-bearing and the mechanism is typical for a lateral sprain. Direct access PT is appropriate here.",
      key_red_flags: ["None"],
      scope_boundary: "Appropriate Direct Access + Clinical Screening"
    },
    scaffolding: {
      level2: {
        question: "But what if it's broken? How would you even know without an X-ray? 🦴",
        options: [
          { text: "If it was broken you wouldn't be able to walk on it.", correct: false, feedback: "That's a common myth. Some fractures are weight-bearing. Use Ottawa Ankle Rules for proper screening." },
          { text: "There are specific clinical tests called the Ottawa Ankle Rules that help us decide if you need an X-ray. Let me check.", correct: true, feedback: "Excellent. The Ottawa Ankle Rules have near 100% sensitivity for fractures and PTs are trained to apply them." },
          { text: "You're right, let me send you for X-rays first.", correct: false, feedback: "Unnecessary if clinical screening is negative. This adds cost and delay for the patient." },
          { text: "It's just a sprain. You don't need X-rays.", correct: false, feedback: "You can't determine that without a proper screening exam. Don't skip the clinical reasoning." }
        ]
      },
      level3: {
        update: "It's been 3 weeks. The swelling is gone but my ankle keeps 'giving out' when I try to run. 😩",
        time_label: "3 Weeks Later",
        options: [
          { text: "That's functional instability. Let's progress to proprioception training and sport-specific agility work.", correct: true, feedback: "Correct management. Post-sprain functional instability responds to progressive balance and neuromuscular training." },
          { text: "You might need a brace permanently.", correct: false, feedback: "Bracing is a short-term adjunct, not a long-term solution. Neuromuscular rehab is the evidence-based approach." },
          { text: "Your ligament might be torn. Let me refer you for an MRI.", correct: false, feedback: "Functional instability after an ankle sprain is common and treatable with rehab. MRI isn't indicated for typical recovery." },
          { text: "Just keep doing the ice and elevation.", correct: false, feedback: "At 3 weeks post-sprain, RICE is no longer the focus. She needs progressive loading and neuromuscular training." }
        ]
      }
    }
  },
  {
    id: "DA-007", category: "direct_access", difficulty: 4, setting: "Outpatient",
    bg_gradient: "linear-gradient(135deg, #d8b4fe, #9333ea)",
    dating_profile: {
      username: "HeadacheHank_45",
      age: 45, sex: "M",
      tagline: "Worst headache of my life ⚡",
      bio: "Walked in complaining of sudden-onset severe headache that started 1 hour ago. Says it's the worst headache he's ever had. No prior headache history.",
      looking_for: "Something to stop this headache",
      baggage: ["Sudden severe headache", "No significant PMH"],
      icf_tags: ["b28010 Pain in head and neck", "b1400 Sustaining attention"]
    },
    level1_question: "I've got the worst headache of my life. Can you do anything for this?",
    correct_swipe: "LEFT_911",
    reveal: {
      best_answer_rationale: "'Worst headache of my life' with sudden onset is a classic thunderclap headache presentation—a red flag for subarachnoid hemorrhage until proven otherwise. This is a 911 call, not a PT visit.",
      key_red_flags: ["Thunderclap headache", "Sudden onset", "Worst ever", "No prior history"],
      scope_boundary: "Medical Emergency"
    },
    scaffolding: {
      level2: {
        question: "I don't want to go to the ER. Can't you just do some neck work? It's probably tension. 😣",
        options: [
          { text: "Let me try some gentle cervical mobilizations and see if it helps.", correct: false, feedback: "ABSOLUTELY NOT. Manual therapy on a potential SAH could be catastrophic. This is an emergency." },
          { text: "I understand you don't want to go, but a sudden 'worst headache ever' can be a sign of bleeding in the brain. I need to call 911 right now.", correct: true, feedback: "Correct. Be direct and call 911. Patient reluctance doesn't change the clinical urgency." },
          { text: "Take some Tylenol and if it doesn't improve in an hour, go to the ER.", correct: false, feedback: "An hour delay with a potential SAH could mean death or permanent disability. Don't wait." },
          { text: "Let me check your neck range of motion first.", correct: false, feedback: "Stop assessing and start acting. This isn't a differential diagnosis moment—it's a 'call 911' moment." }
        ]
      },
      level3: {
        update: "He's now complaining of neck stiffness and his speech is getting slurred. 🚑",
        time_label: "10 Minutes Later",
        options: [
          { text: "Call 911 NOW if you haven't already. Keep him still, monitor consciousness, and prepare to report symptoms to EMS.", correct: true, feedback: "These are classic signs of SAH progression. Every second counts. You are potentially saving his life." },
          { text: "Help him lie down and put ice on his neck.", correct: false, feedback: "Ice won't help intracranial bleeding. He needs neurosurgical intervention." },
          { text: "Drive him to the nearest hospital yourself.", correct: false, feedback: "If he deteriorates en route, you can't provide the emergency care EMS can. Call 911." },
          { text: "Maybe it's just a bad migraine with aura.", correct: false, feedback: "Neck stiffness + slurred speech + thunderclap headache = SAH until proven otherwise. Stop rationalizing and act." }
        ]
      }
    }
  },
  {
    id: "DA-008", category: "direct_access", difficulty: 3, setting: "Outpatient",
    bg_gradient: "linear-gradient(135deg, #fcd34d, #b45309)",
    dating_profile: {
      username: "HipPain_Grandma72",
      age: 72, sex: "F",
      tagline: "Getting old isn't for the weak 👵",
      bio: "Progressive right hip and groin pain over 4 months. Worse with weight bearing. Takes calcium and vitamin D. Recent fall 2 weeks ago but 'caught herself.'",
      looking_for: "Help with walking and hip pain",
      baggage: ["R hip/groin pain", "Osteoporosis", "Fall risk", "Calcium + Vit D"],
      icf_tags: ["b28016 Pain in joints", "b710 Mobility of joint functions", "d450 Walking"]
    },
    level1_question: "My hip has been hurting for months and I almost fell last week. Can PT help?",
    correct_swipe: "LEFT_REFER",
    reveal: {
      best_answer_rationale: "Progressive hip/groin pain in a 72yo with osteoporosis and a recent near-fall raises concern for occult hip fracture or avascular necrosis. Medical imaging is needed before PT intervention to rule out fracture.",
      key_red_flags: ["Osteoporosis", "Age 72", "Progressive weight-bearing pain", "Recent fall", "Groin pain"],
      scope_boundary: "Red Flag Screening - Possible Occult Fracture"
    },
    scaffolding: {
      level2: {
        question: "I caught myself though—I didn't actually fall. Can't we just start some exercises? 🙄",
        options: [
          { text: "Sure, since you didn't fall completely, let's start with some gentle hip strengthening.", correct: false, feedback: "Dangerous. Even a near-fall with osteoporosis can cause insufficiency fractures. Groin pain + weight-bearing pain = image first." },
          { text: "Even catching yourself can stress osteoporotic bone. I want your doctor to get an X-ray of your hip before we start, just to be safe.", correct: true, feedback: "Smart clinical reasoning. Protecting the patient while explaining WHY builds trust and demonstrates competence." },
          { text: "At your age, some hip pain is normal. Let's work on balance.", correct: false, feedback: "Ageist and dismissive. Progressive hip pain with these risk factors deserves proper workup." },
          { text: "I'll have you do a single-leg stand test to check your balance.", correct: false, feedback: "If she has an occult fracture, loading that hip could displace it. Image first, test later." }
        ]
      },
      level3: {
        update: "X-ray was negative but her doctor ordered an MRI. It showed a stress fracture. She's been cleared for gentle PT after 4 weeks. 🦴",
        time_label: "6 Weeks Later",
        options: [
          { text: "Great—now that we know what we're dealing with, let's start with non-weight-bearing hip mobility and progress based on pain and imaging.", correct: true, feedback: "Evidence-based progression. You protected the patient, got the right workup, and can now treat confidently." },
          { text: "See, I should have just started treating her originally.", correct: false, feedback: "No! If you had loaded that hip with a stress fracture, you could have caused a displaced fracture requiring surgery." },
          { text: "Let's jump right into weight-bearing exercises since she's been cleared.", correct: false, feedback: "She was cleared for 'gentle PT.' Progress gradually—the bone is healed but may not be fully remodeled." },
          { text: "Start with aggressive stretching to regain her range of motion.", correct: false, feedback: "Post-stress-fracture rehab should prioritize gradual loading, not aggressive stretching." }
        ]
      }
    }
  },
  {
    id: "DA-009", category: "direct_access", difficulty: 2, setting: "Outpatient",
    bg_gradient: "linear-gradient(135deg, #86efac, #16a34a)",
    dating_profile: {
      username: "TMJ_Teacher29",
      age: 29, sex: "F",
      tagline: "My jaw clicks and it's driving me crazy 😬",
      bio: "Jaw clicking and pain started 2 months ago. Worse with eating and yawning. Clenches teeth at night. No locking.",
      looking_for: "Make the clicking stop",
      baggage: ["TMJ pain", "Bruxism", "No meds"],
      icf_tags: ["b28010 Pain in head and neck", "b710 Mobility of joint functions", "d550 Eating"]
    },
    level1_question: "My jaw has been clicking and hurting. Do I need to see a dentist first or can you help?",
    correct_swipe: "RIGHT_PT",
    reveal: {
      best_answer_rationale: "TMJ dysfunction with clicking and pain from bruxism is within PT scope of practice. PTs trained in TMJ can provide manual therapy, exercise, and behavioral modifications. No dental referral needed first for this presentation.",
      key_red_flags: ["None"],
      scope_boundary: "Appropriate Direct Access"
    },
    scaffolding: {
      level2: {
        question: "My dentist told me I need a $2000 mouth guard. Do I really need one before starting PT? 💸",
        options: [
          { text: "Yes, a night guard is essential. You should get one first.", correct: false, feedback: "While night guards can help, they're not prerequisite to PT. Many patients improve with PT alone." },
          { text: "Night guards are useless. Save your money.", correct: false, feedback: "Night guards have evidence for bruxism management. Don't dismiss other providers' recommendations entirely." },
          { text: "A night guard can help, but let's start PT now. We can address jaw mechanics and habits while you decide on the guard.", correct: true, feedback: "Collaborative approach. You respected the dentist's recommendation while not delaying treatment." },
          { text: "That's between you and your dentist. I only do PT stuff.", correct: false, feedback: "TMJ care is inherently interdisciplinary. Collaborative communication is part of good direct access practice." }
        ]
      },
      level3: {
        update: "The clicking stopped! But now I'm getting ringing in my ears. Is that related? 🔔",
        time_label: "3 Weeks Later",
        options: [
          { text: "Tinnitus can be associated with TMJ dysfunction due to the proximity of the TMJ to the ear. Let's address your lateral pterygoid and cervical spine.", correct: true, feedback: "Correct. TMJ-related tinnitus is well-documented. Continued TMJ treatment addressing muscular tension is appropriate." },
          { text: "That's an ear problem. See an ENT.", correct: false, feedback: "While ENT referral may eventually be appropriate, TMJ-related tinnitus should be addressed in PT first given the clinical context." },
          { text: "Ringing in the ears is outside PT scope.", correct: false, feedback: "When tinnitus is secondary to TMJ dysfunction you're already treating, addressing the cause IS your scope." },
          { text: "That's probably just stress. Don't worry about it.", correct: false, feedback: "New symptoms deserve investigation, not dismissal. Clinical reasoning should connect this to her existing TMJ presentation." }
        ]
      }
    }
  },
  {
    id: "DA-010", category: "direct_access", difficulty: 4, setting: "Outpatient",
    bg_gradient: "linear-gradient(135deg, #f9a8d4, #db2777)",
    dating_profile: {
      username: "LegSwelling_Dan50",
      age: 50, sex: "M",
      tagline: "My calf is really swollen 🦵",
      bio: "Flew back from a 12-hour international flight 3 days ago. Right calf is swollen, warm to touch, and painful. No trauma.",
      looking_for: "Just want the swelling to go down",
      baggage: ["Unilateral calf swelling", "Recent long-haul flight", "Sedentary"],
      icf_tags: ["b28015 Pain in lower limb", "b4152 Functions of veins", "b435 Immunological system functions"]
    },
    level1_question: "My calf has been swollen since my flight. Figured I should come see PT for some massage or compression.",
    correct_swipe: "LEFT_REFER",
    reveal: {
      best_answer_rationale: "Unilateral calf swelling + warmth + pain + recent long-haul flight = DVT until proven otherwise. Massage or compression on a DVT can dislodge the clot causing a pulmonary embolism. Refer for urgent medical evaluation.",
      key_red_flags: ["Unilateral swelling", "Warmth", "Recent prolonged immobility", "Calf pain"],
      scope_boundary: "Medical Emergency Screening - Possible DVT"
    },
    scaffolding: {
      level2: {
        question: "I think it's just from sitting too long. Can't you just massage it out? 💆",
        options: [
          { text: "Sure, deep tissue massage should help move the fluid.", correct: false, feedback: "NEVER massage a suspected DVT. You could dislodge a clot and cause a pulmonary embolism. This could kill him." },
          { text: "Let me apply some compression and elevate the leg.", correct: false, feedback: "Compression on a DVT can also dislodge a clot. Do not treat—refer." },
          { text: "With the swelling, warmth, and your recent flight, I need you to see a doctor TODAY to rule out a blood clot. This is not safe for me to treat until we know.", correct: true, feedback: "Exactly right. Clear, urgent communication. Direct access means knowing when to send patients OUT." },
          { text: "Try some calf stretches and come back if it doesn't improve.", correct: false, feedback: "Stretching a leg with a potential DVT is dangerous. This patient needs medical evaluation immediately." }
        ]
      },
      level3: {
        update: "He went to urgent care. They confirmed a DVT with ultrasound. He's on blood thinners now and was told PT can help later. 💊",
        time_label: "3 Weeks Later",
        options: [
          { text: "Now that he's anticoagulated, we can start gentle exercise. Walking programs and gradual return to activity with monitoring for PE symptoms.", correct: true, feedback: "Current evidence supports early mobilization with anticoagulation. Monitor for SOB, chest pain, or hemoptysis." },
          { text: "He should avoid all exercise until the clot fully resolves.", correct: false, feedback: "Prolonged immobility actually increases DVT risk. Early mobilization with anticoagulation is evidence-based." },
          { text: "Start with deep tissue massage now that he's on blood thinners.", correct: false, feedback: "Deep tissue work on a recent DVT site is still risky, even with anticoagulation. Gentle activity, not aggressive manual therapy." },
          { text: "Let's do aggressive calf strengthening to prevent another clot.", correct: false, feedback: "Gradual progression is key. Aggressive loading on a recently affected limb isn't appropriate yet." }
        ]
      }
    }
  }
];

export const SCORING = {
  "NUTR-001": 40, "NUTR-002": 45, "NUTR-003": 75, "NUTR-004": 80,
  "NUTR-005": 60, "NUTR-006": 40, "NUTR-007": 50, "NUTR-008": 45,
  "NUTR-009": 80, "NUTR-010": 55, "NUTR-011": 50, "NUTR-012": 60,
  "DA-001": 40, "DA-002": 40, "DA-003": 75, "DA-004": 45,
  "DA-005": 70, "DA-006": 40, "DA-007": 80, "DA-008": 65,
  "DA-009": 50, "DA-010": 75
};

export const LEVELS = [
  { level: 1, name: "Triage Mode", description: "Identify if nutrition is in Scope or requires Referral." },
  { level: 2, name: "Patient Dialogue", description: "Handle tough patient questions without overstepping." },
  { level: 3, name: "Clinical Mgmt", description: "Manage evolving symptoms and complex scenarios." }
];

export const GAME_MODES = [
  { id: "nutrition", name: "Nutrition Scope", description: "Is this nutrition advice in PT scope or time to refer?", icon: "🥗" },
  { id: "direct_access", name: "Direct Access", description: "Can you treat this patient directly or do they need a physician first?", icon: "🚪" }
];
