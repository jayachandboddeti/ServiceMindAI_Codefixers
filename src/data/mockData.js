export const TRANSLATIONS = {
  English: {
    heroTag: "Next-Gen Adaptive Learning Engine",
    heroTitle: "Every student learns differently.",
    heroTitleHighlight: "Our AI learns how to teach them.",
    heroDesc: "A personalized AI tutor that continuously analyzes student performance, diagnoses hidden learning gaps, checks confidence vs understanding, and adapts difficulty in real-time.",
    startDemoBtn: "Launch Interactive Demo",
    viewArchitectureBtn: "Explore AI Architecture",
    classTag: "Class 3 Mathematics: Fractions Prototype",
    pizzaAnalogy: "Imagine a pizza cut into 2 equal slices. If you eat 1 slice, you've eaten 1/2 of the whole pizza!",
    fractionDef: "A denominator tells us how many equal parts the whole is divided into.",
    fractionNumeratorDef: "The numerator tells us how many of those equal parts we have or are considering."
  },
  Hindi: {
    heroTag: "नेक्स्ट-जेन अनुकूली शिक्षण प्रणाली (Adaptive AI)",
    heroTitle: "हर छात्र अलग गति से सीखता है।",
    heroTitleHighlight: "हमारा AI सीखता है कि उन्हें कैसे सिखाया जाए।",
    heroDesc: "एक व्यक्तिगत AI शिक्षक जो वास्तविक समय में छात्र की क्षमता को समझता है, कमियों को पहचानता है और सीखने की शैली के अनुसार बदलता है।",
    startDemoBtn: "इंटरैक्टिव डेमो शुरू करें",
    viewArchitectureBtn: "AI आर्किटेक्चर देखें",
    classTag: "कक्षा 3 गणित: भिन्न (Fractions) प्रोटोटाइप",
    pizzaAnalogy: "एक पिज्जा की कल्पना करें जिसे 2 बराबर टुकड़ों में काटा गया है। यदि आप 1 टुकड़ा खाते हैं, तो आपने 1/2 पिज्जा खाया है!",
    fractionDef: "हर (Denominator) हमें बताता है कि पूरी वस्तु को कितने बराबर भागों में विभाजित किया गया है।",
    fractionNumeratorDef: "अंश (Numerator) बताता है कि हमारे पास उन बराबर भागों में से कितने भाग हैं।"
  },
  Telugu: {
    heroTag: "నెక్స్ట్-జెన్ అడాప్టివ్ లెర్నింగ్ ఇంజిన్",
    heroTitle: "ప్రతి విద్యార్థి విభిన్నంగా నేర్చుకుంటారు.",
    heroTitleHighlight: "మా AI వారికి ఎలా నేర్పించాలో నేర్చుకుంటుంది.",
    heroDesc: "విద్యార్థి యొక్క వాస్తవ అభ్యాస స్థాయిని అర్థం చేసుకుని, లోపాలను గుర్తించి, వారి అవసరాలకు అనుగుణంగా పాఠాలను మార్చే ఇంటెలిజెంట్ AI ట్యూటర్.",
    startDemoBtn: "డెమో ప్రారంభించండి",
    viewArchitectureBtn: "AI ఆర్కిటెక్చర్ చూడండి",
    classTag: "3వ తరగతి గణితం: భిన్నాలు (Fractions) ప్రోటోటైప్",
    pizzaAnalogy: "ఒక పిజ్జాను 2 సమాన భాగాలుగా విభజించారని ఊహించుకోండి. మీరు 1 భాగం తింటే, మీరు మొత్తం పిజ్జాలో 1/2 తిన్నారు!",
    fractionDef: "హారం (Denominator) మొత్తం ఎన్ని సమాన భాగాలుగా విభజించబడిందో చెబుతుంది.",
    fractionNumeratorDef: "లవం (Numerator) ఆ సమాన భాగాలలో మనం ఎన్ని తీసుకున్నామో చెబుతుంది."
  },
  Spanish: {
    heroTag: "Motor de Aprendizaje Adaptativo de Nueva Generación",
    heroTitle: "Cada estudiante aprende de manera diferente.",
    heroTitleHighlight: "Nuestra IA aprende cómo enseñarles.",
    heroDesc: "Un tutor inteligente con IA que comprende el nivel real del estudiante, detecta vacíos de conocimiento y adapta la dificultad en tiempo real.",
    startDemoBtn: "Iniciar Demostración",
    viewArchitectureBtn: "Explorar Arquitectura IA",
    classTag: "Matemáticas de 3er Grado: Prototipo de Fracciones",
    pizzaAnalogy: "¡Imagina una pizza dividida en 2 porciones iguales. Si comes 1 porción, has comido 1/2 de toda la pizza!",
    fractionDef: "El denominador nos indica en cuántas partes iguales se divide el todo.",
    fractionNumeratorDef: "El numerador nos dice cuántas de esas partes iguales tenemos."
  }
};

export const CONFIDENCE_LEVELS = [
  { id: "very_confident", emoji: "😎", label: "Very Confident", desc: "I am 100% sure of this answer" },
  { id: "confident", emoji: "🙂", label: "Confident", desc: "I believe this is correct" },
  { id: "unsure", emoji: "😐", label: "Unsure", desc: "I had some doubts" },
  { id: "guessing", emoji: "😟", label: "Guessing", desc: "I guessed the answer" }
];

export const MISTAKE_TYPES = [
  {
    id: "conceptual",
    name: "Conceptual Mistake",
    badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/40",
    description: "Misunderstanding the fundamental math principle (e.g., confusing numerator with denominator).",
    aiAction: "Switches to visual diagram + analogy before giving another question."
  },
  {
    id: "calculation",
    name: "Calculation Mistake",
    badgeColor: "bg-blue-500/20 text-blue-300 border-blue-500/40",
    description: "Concept is clear, but arithmetic error occurred during computation (e.g., 2+3=6).",
    aiAction: "Prompts step-by-step arithmetic check without restarting the lesson."
  },
  {
    id: "careless",
    name: "Careless / Rush Mistake",
    badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/40",
    description: "Answered within 1.2s without reviewing all multiple choice options.",
    aiAction: "Gentle speed bump: 'Take your time, let us read together!'"
  },
  {
    id: "misreading",
    name: "Misreading the Question",
    badgeColor: "bg-cyan-500/20 text-cyan-300 border-cyan-500/40",
    description: "Picked the fraction remaining instead of fraction eaten in a word problem.",
    aiAction: "Highlights key question clauses and re-evaluates reasoning."
  },
  {
    id: "guessing",
    name: "Guessing / Luck",
    badgeColor: "bg-rose-500/20 text-rose-300 border-rose-500/40",
    description: "Correct answer marked with 'Guessing' confidence rating.",
    aiAction: "Distinguishes luck from mastery by asking a quick 'Explain why' follow-up."
  },
  {
    id: "prerequisite_missing",
    name: "Prerequisite Gap Missing",
    badgeColor: "bg-red-500/20 text-red-300 border-red-500/40",
    description: "Failing fraction addition because basic division / LCM hasn't been mastered.",
    aiAction: "Pauses current topic, launches 2-minute prerequisite booster, then returns."
  }
];

export const LEARNING_MAP_DATA = [
  {
    id: "numerator",
    name: "1. Numerator Concept",
    status: "strong",
    score: 95,
    icon: "🟢",
    description: "Understands the top number represents parts taken / highlighted."
  },
  {
    id: "denominator",
    name: "2. Denominator Concept",
    status: "strong",
    score: 92,
    icon: "🟢",
    description: "Understands the bottom number represents total equal parts in a whole."
  },
  {
    id: "equivalent",
    name: "3. Equivalent Fractions",
    status: "strong",
    score: 88,
    icon: "🟢",
    description: "Recognizes 1/2 == 2/4 == 4/8 using visual and numerical scaling."
  },
  {
    id: "addition_same",
    name: "4. Like Denominator Addition",
    status: "developing",
    score: 68,
    icon: "🟡",
    description: "Practicing 1/4 + 2/4 = 3/4. Needs occasional reminder not to add denominators."
  },
  {
    id: "word_problems",
    name: "5. Fraction Word Problems",
    status: "needs_attention",
    score: 42,
    icon: "🔴",
    description: "Struggles translating real-world story scenarios into fraction equations."
  }
];

export const TEACHING_STYLES = [
  {
    id: "simple",
    title: "Simple Explanation",
    icon: "📖",
    content: "A fraction represents a part of a whole. For 1/2, the number 1 is the numerator (parts we have), and 2 is the denominator (total parts)."
  },
  {
    id: "visual",
    title: "Visual Diagram (Pizza/Shapes)",
    icon: "📊",
    content: "Look at this pizza circle cut directly in half! One half is green (1/2) and one half is blue (1/2). Both halves together make 1 whole pizza."
  },
  {
    id: "real_world",
    title: "Real-World Analogy",
    icon: "🌍",
    content: "Imagine a chocolate bar with 4 equal blocks. If you share 2 blocks with your best friend, you gave away 2/4, which is the exact same as 1/2 of the bar!"
  },
  {
    id: "interactive",
    title: "Interactive Sandbox",
    icon: "🎮",
    content: "Slide the slice counter to partition the shape dynamically from 2 to 8 slices and watch how the denominator updates in real time!"
  },
  {
    id: "voice",
    title: "Voice AI Companion",
    icon: "🎙️",
    content: "Click 'Play Voice' to hear the AI tutor explain the concept warmly with natural conversational cadence and encouraging pauses."
  },
  {
    id: "story",
    title: "Story-Based Adventure",
    icon: "📚",
    content: "Chef Mia is baking cookies for the school festival. Her recipe needs 3/4 cup of sugar, but her scoop is only 1/4 cup. How many scoops does Mia need?"
  }
];

export const STUDENT_JOURNEYS = {
  studentA: {
    name: "Student A (Struggling Path)",
    archetype: "Needs Visuals & Prerequisite Support",
    steps: [
      {
        step: 1,
        question: "What is 1/2?",
        options: ["1 part out of 2 equal parts", "2 parts out of 1", "Just any two numbers"],
        studentChoice: "Just any two numbers",
        confidence: "unsure",
        isCorrect: false,
        aiDiagnosis: "Conceptual misunderstanding detected (Top & Bottom roles unclear).",
        aiResponse: "Let's pause and not worry! Imagine a fresh pizza cut right down the middle into 2 equal slices. If you take 1 slice, you took 1/2. Let's look at the picture together!",
        nextDifficulty: "Simplified (Visual Mode Activated)"
      },
      {
        step: 2,
        question: "Which picture represents 1/2 shaded?",
        options: ["Square divided into 2 equal halves (1 shaded)", "Circle divided into 4 unequal slices", "Triangle with a corner cut off"],
        studentChoice: "Square divided into 2 equal halves (1 shaded)",
        confidence: "confident",
        isCorrect: true,
        aiDiagnosis: "Visual confirmation successful! Student understands equal partitioning.",
        aiResponse: "Awesome job! You nailed it! Since both halves are equal, 1 out of 2 is exactly 1/2.",
        nextDifficulty: "Standard Practice (Gradual Scaling)"
      },
      {
        step: 3,
        question: "If a chocolate bar has 4 equal pieces and you eat 1 piece, what fraction did you eat?",
        options: ["1/4", "4/1", "1/2", "3/4"],
        studentChoice: "1/4",
        confidence: "very_confident",
        isCorrect: true,
        aiDiagnosis: "Concept transferred successfully from 2-parts to 4-parts!",
        aiResponse: "Superstar! You're building genuine mastery step-by-step. Ready for the next challenge!",
        nextDifficulty: "Medium Difficulty Unlocked"
      }
    ]
  },
  studentB: {
    name: "Student B (Advanced / Fast Track)",
    archetype: "Fast Learner - Bypasses Rote Drills",
    steps: [
      {
        step: 1,
        question: "What is 1/2?",
        options: ["1 part out of 2 equal parts", "2 parts out of 1", "Just any two numbers"],
        studentChoice: "1 part out of 2 equal parts",
        confidence: "very_confident",
        isCorrect: true,
        aiDiagnosis: "Strong baseline mastery confirmed in under 3 seconds.",
        aiResponse: "Spot on! Skipping introductory drills and elevating to comparative reasoning.",
        nextDifficulty: "Fast-Tracked to Hard / Analytical"
      },
      {
        step: 2,
        question: "Which is greater: 2/3 or 3/4? And why?",
        options: ["3/4 (because 3/4 is only missing 1/4 of a whole, while 2/3 is missing 1/3)", "2/3 (because 2 and 3 are smaller)", "They are equal"],
        studentChoice: "3/4 (because 3/4 is only missing 1/4 of a whole, while 2/3 is missing 1/3)",
        confidence: "very_confident",
        isCorrect: true,
        aiDiagnosis: "Advanced benchmark comparison reasoning verified.",
        aiResponse: "Brilliant reasoning! You didn't just guess; you analyzed the missing fractional complement.",
        nextDifficulty: "Multi-Step Real World Word Problem"
      },
      {
        step: 3,
        question: "A cake is divided into 8 equal slices. Alex eats 3 slices and Sam eats 2 slices. What fraction of the cake is left?",
        options: ["3/8", "5/8", "1/8", "4/8"],
        studentChoice: "3/8",
        confidence: "very_confident",
        isCorrect: true,
        aiDiagnosis: "Two-step fractional subtraction & conservation mastered!",
        aiResponse: "Incredible speed and accuracy! You've mastered Grade 3 Fractions. Level 4 Algebra & Decimals recommended.",
        nextDifficulty: "Grade 4 Pre-Algebra Pathway Ready"
      }
    ]
  }
};
