
export const CASE_BANK = [
  {
    id: "NUTR-001", difficulty: 1, setting: "Outpatient",
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
    id: "NUTR-002", difficulty: 1, setting: "Outpatient",
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
    id: "NUTR-003", difficulty: 2, setting: "Outpatient",
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
    id: "NUTR-004", difficulty: 4, setting: "Acute Care",
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
    id: "NUTR-005", difficulty: 5, setting: "Outpatient",
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
    id: "NUTR-006", difficulty: 2, setting: "Outpatient",
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
    id: "NUTR-007", difficulty: 4, setting: "Home Health",
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
    id: "NUTR-008", difficulty: 3, setting: "Outpatient",
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
    id: "NUTR-009", difficulty: 5, setting: "Inpatient Rehab",
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
    id: "NUTR-010", difficulty: 3, setting: "Outpatient",
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
    id: "NUTR-011", difficulty: 2, setting: "Outpatient",
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
    id: "NUTR-012", difficulty: 3, setting: "Home Health",
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
  }
];

export const SCORING = {
  "NUTR-001": 40, "NUTR-002": 45, "NUTR-003": 75, "NUTR-004": 80,
  "NUTR-005": 60, "NUTR-006": 40, "NUTR-007": 50, "NUTR-008": 45,
  "NUTR-009": 80, "NUTR-010": 55, "NUTR-011": 50, "NUTR-012": 60
};

export const LEVELS = [
  { level: 1, name: "Triage Mode", description: "Identify if nutrition is in Scope or requires Referral." },
  { level: 2, name: "Patient Dialogue", description: "Handle tough patient questions without overstepping." },
  { level: 3, name: "Clinical Mgmt", description: "Manage evolving symptoms and complex scenarios." }
];
