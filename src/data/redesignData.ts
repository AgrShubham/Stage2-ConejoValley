export interface RedesignData {
  topBadge: string;
  hero: {
    headingPart1: string;
    highlight: string;
    headingPart2: string;
    subheading: string;
    ctaPrimary: string;
    ctaSecondary: string;
    image: string;
  };
  empathy: {
    title: string;
    subtitle: string;
    paragraph1: string;
    paragraph2: string;
  };
  whoWeHelp: {
    heading: string;
    highlight: string;
    cards: Array<{
      title: string;
      description: string;
      image: string;
      badge: string;
    }>;
  };
  quote: {
    text: string;
    highlight: string;
  };
  expertiseTags: string[];
  bio: {
    tagline: string;
    heading: string;
    lead: string;
    body1: string;
    body2: string;
    body3: string;
    ctaText: string;
    image: string;
    credentials: string[];
  };
  dividerQuote: string;
  services: Array<{
    title: string;
    tagline: string;
    description: string;
    modalities: string[];
    image: string;
    linkText: string;
  }>;
  office: {
    tagline: string;
    heading: string;
    highlight: string;
    description: string;
    details: Array<{
      title: string;
      desc: string;
    }>;
    address: {
      street: string;
      cityStateZip: string;
      note: string;
    };
    images: Array<{
      src: string;
      alt: string;
      caption: string;
    }>;
  };
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  bookingCta: {
    tagline: string;
    heading: string;
    body: string;
    ctaText: string;
    secondaryCta: string;
  };
  footer: {
    intro: string;
    addressLines: string[];
    email: string;
    phone: string;
    telehealthCoverage: string;
    navLinks: Array<{ label: string; href: string }>;
  };
}

export const mayaReynoldsData: RedesignData = {
  topBadge: "IN-PERSON IN SANTA MONICA & SECURE TELEHEALTH ACROSS CALIFORNIA",
  hero: {
    headingPart1: "Find grounded calm beyond anxiety, trauma, and",
    highlight: "burnout",
    headingPart2: "in a space built for deep restoration.",
    subheading:
      "Dr. Maya Reynolds, PsyD provides evidence-based, collaborative therapy for high-achieving adults, creatives, and professionals ready to reconnect with themselves.",
    ctaPrimary: "Schedule a Consultation",
    ctaSecondary: "Explore the Office",
    image: "/images/maya/office-2.jpg",
  },
  empathy: {
    title: "High-achieving on the outside, but quietly exhausted within?",
    subtitle: "You don't have to carry the weight of constant overthinking alone.",
    paragraph1:
      "Many of the people who seek my practice are thoughtful, self-aware, and highly capable—yet behind closed doors, they feel internally strained, emotionally on edge, or stuck bracing for something to go wrong. Whether it's constant worry, sleeplessness, physical tension, or lingering echoes from past experiences, functioning well outwardly shouldn't come at the cost of your inner peace.",
    paragraph2:
      "Therapy is not about fixing what is broken; it is about creating a safe, paced sanctuary where you can slow down, understand what your body and mind are signaling, and cultivate lasting resilience. Together, we combine deep clinical insight with actionable tools to help you step off the treadmill of stress and build a more grounded, vibrant life.",
  },
  whoWeHelp: {
    heading: "Who I",
    highlight: "support",
    cards: [
      {
        title: "High-Achievers & Professionals",
        description:
          "Entrepreneurs, leaders, and creatives who feel disconnected after years of pushing through relentless pressure, perfectionism, and impostor fears.",
        image: "/images/clone/who-adults.jpg",
        badge: "Burnout & Perfectionism",
      },
      {
        title: "Individuals Navigating Trauma",
        description:
          "Adults working through single-incident events or complex relational patterns stemming from earlier life experiences, seeking safety, pacing, and somatic closure.",
        image: "/images/clone/spec-trauma.jpg",
        badge: "EMDR & Somatic Healing",
      },
      {
        title: "Overthinking & Panic Sufferers",
        description:
          "Clients seeking relief from intrusive thoughts, physical panic attacks, social anxiety, and nervous system hypervigilance using evidence-backed CBT and mindfulness.",
        image: "/images/clone/spec-dissociation.jpg",
        badge: "Anxiety & Panic Recovery",
      },
    ],
  },
  quote: {
    text: "Therapy works best when you feel deeply respected, heard, and actively involved.",
    highlight: "My goal is not just symptom relief, but a genuine, grounded relationship with yourself.",
  },
  expertiseTags: [
    "Anxiety & Panic",
    "EMDR Therapy",
    "Trauma Stabilization",
    "Executive Burnout",
    "Perfectionism",
    "Mindfulness & CBT",
    "Somatic Techniques",
    "High-Achiever Stress",
    "Nervous System Regulation",
    "Relational Patterns",
    "Santa Monica Therapy",
    "California Telehealth",
  ],
  bio: {
    tagline: "MEET YOUR PSYCHOLOGIST",
    heading: "A warm, grounded, and collaborative approach to clinical psychology.",
    lead: "I believe that meaningful therapeutic transformation requires both structure and depth.",
    body1:
      "I'm Dr. Maya Reynolds, a licensed clinical psychologist based in Santa Monica, California. Sessions in my practice are intentionally structured to feel supportive and clarifying, while always preserving space for thoughtful reflection, self-compassion, and emotional depth.",
    body2:
      "Rather than relying on one-size-fits-all modalities, I seamlessly integrate evidence-based approaches including Cognitive-Behavioral Therapy (CBT), Eye Movement Desensitization and Reprocessing (EMDR), mindfulness-based practices, and body-oriented somatic techniques. This helps us address both the cognitive patterns in your thoughts and the physiological signals stored in your nervous system.",
    body3:
      "Whether meeting in my private Santa Monica office or virtually across California, my commitment is to walk alongside you with warmth, clinical rigor, and total transparency as you uncover enduring strength and authentic clarity.",
    ctaText: "Learn More About My Clinical Approach",
    image: "/images/maya/dr-maya-reynolds.png",
    credentials: [
      "PsyD in Clinical Psychology",
      "California Licensed Psychologist",
      "Certified EMDR Practitioner",
      "Advanced Training in CBT & Somatic Integration",
    ],
  },
  dividerQuote: "Bridging evidence-based science with compassionate, depth-oriented care.",
  services: [
    {
      title: "Anxiety & Panic Recovery",
      tagline: "CALMING THE NERVOUS SYSTEM",
      description:
        "Break free from the exhausting cycle of chronic worry, intrusive thoughts, and physiological panic. Using tailored CBT and mindfulness techniques, we unmask underlying triggers, quiet catastrophic thinking, and retrain your nervous system to rest in safety.",
      modalities: ["Cognitive Behavioral Therapy (CBT)", "Mindfulness Regulation", "Exposure Response"],
      image: "/images/clone/hero.jpg",
      linkText: "Explore Anxiety Therapy",
    },
    {
      title: "Trauma & EMDR Therapy",
      tagline: "PROCESSING WHAT REMAINS",
      description:
        "Whether you are processing a single acute trauma or long-standing relational and developmental wounds, our work is paced with paramount safety. EMDR helps rework how painful memories are stored in the brain, untangling past distress from present awareness.",
      modalities: ["EMDR Protocol", "Attachment Repair", "Somatic Stabilization"],
      image: "/images/clone/spec-emdr.jpg",
      linkText: "Learn About EMDR",
    },
    {
      title: "Burnout & Perfectionism",
      tagline: "SUSTAINABLE LIVING FOR HIGH-ACHIEVERS",
      description:
        "Designed specifically for entrepreneurs, creatives, and driven professionals who feel drained by relentless internal expectations. Together, we deconstruct perfectionism, establish healthy boundaries, and restore genuine fulfillment.",
      modalities: ["Values Realignment", "Compassion-Focused Work", "Stress De-escalation"],
      image: "/images/clone/who-couples.jpg",
      linkText: "Overcome Professional Burnout",
    },
  ],
  office: {
    tagline: "OUR PRACTICE SPACE",
    heading: "A Calm, Grounding Sanctuary for Healing",
    highlight: "in Santa Monica",
    description:
      "Healing begins the moment you step through the door. Located on 123th Street in Santa Monica, California, my office is a private, sunlit space intentionally curated with warm natural textures, air-purifying botanicals, and zero clutter to help your nervous system immediately downshift into ease.",
    details: [
      {
        title: "Abundant Natural Light",
        desc: "Large windows bathe the room in gentle coastal sunlight, creating an uplifting and unhurried therapeutic environment.",
      },
      {
        title: "Complete Sound Privacy & Comfort",
        desc: "Acoustically insulated walls and cozy seating ensure complete confidential safety for open, vulnerable reflection.",
      },
      {
        title: "Hybrid Flexibility",
        desc: "Enjoy in-person appointments at our Santa Monica sanctuary, or seamlessly transition to HIPAA-compliant telehealth anywhere in CA.",
      },
    ],
    address: {
      street: "123th Street 45 W",
      cityStateZip: "Santa Monica, CA 90401",
      note: "Dedicated client parking & elevator access available",
    },
    images: [
      {
        src: "/images/maya/office-1.jpg",
        alt: "Dr. Maya Reynolds Santa Monica therapy room with comfortable seating and natural lighting",
        caption: "A quiet, private consultation space designed for emotional ease and reflection.",
      },
      {
        src: "/images/maya/office-2.jpg",
        alt: "Therapy office interior with peaceful coastal aesthetics and natural botanicals",
        caption: "Uncluttered, comfortable environment featuring calming textures and sunlight.",
      },
    ],
  },
  faqs: [
    {
      question: "What is your approach to therapy?",
      answer:
        "I take an integrative, collaborative approach that pairs structured evidence-based methodologies (CBT, EMDR, and Somatic techniques) with empathetic depth-oriented exploration. Sessions are tailored to your unique goals, paced for safety, and designed to produce real-world physiological and emotional relief.",
    },
    {
      question: "Do you offer in-person or online sessions?",
      answer:
        "I offer both! In-person therapy takes place at my Santa Monica office (123th Street 45 W), while telehealth sessions are conducted through a secure, encrypted HIPAA-compliant video portal for any resident in California.",
    },
    {
      question: "How does EMDR therapy work for trauma and anxiety?",
      answer:
        "EMDR (Eye Movement Desensitization and Reprocessing) utilizes bilateral stimulation to assist the brain in reprocessing traumatic memories or deeply ingrained anxiety triggers. This reduces the emotional and physical intensity of distressing memories so they no longer disrupt your present daily life.",
    },
    {
      question: "Who do you typically work with?",
      answer:
        "My practice primarily supports adults, professionals, creatives, and entrepreneurs who are outwardly capable and successful, but inwardly navigating high anxiety, panic, perfectionism, chronic burnout, or unresolved past trauma.",
    },
    {
      question: "How do we get started?",
      answer:
        "You can begin by requesting an initial 15-minute consultation. We'll discuss what you're experiencing, answer any questions about my clinical approach, and ensure we're the right therapeutic fit before scheduling your first complete intake session.",
    },
  ],
  bookingCta: {
    tagline: "BEGIN YOUR HEALING JOURNEY",
    heading: "Take the first step toward a more grounded, balanced life.",
    body: "Reaching out for therapeutic support is an act of courage and self-advocacy. Whether you are seeking relief from overwhelming anxiety, navigating trauma, or yearning for relief from perfectionist burnout, I am here to provide a safe, expert space for your journey.",
    ctaText: "Schedule Initial Consultation",
    secondaryCta: "Contact Via Email",
  },
  footer: {
    intro:
      "Dedicated to providing compassionate, evidence-based psychotherapy for adults seeking clarity, resilience, and nervous system regulation throughout California.",
    addressLines: ["123th Street 45 W", "Santa Monica, CA 90401"],
    email: "contact@drmayareynolds.com",
    phone: "(310) 555-0198",
    telehealthCoverage: "Licensed to serve clients throughout the state of California via secure telehealth.",
    navLinks: [
      { label: "Home", href: "/" },
      { label: "About Maya", href: "#about" },
      { label: "Specialties", href: "#specialties" },
      { label: "Our Office", href: "#office" },
      { label: "FAQs", href: "#faqs" },
      { label: "Book Consultation", href: "#contact" },
      { label: "Original Clone View", href: "/clone" },
    ],
  },
};
