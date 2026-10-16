export interface CloneData {
  topBadge: string;
  hero: {
    headingPart1: string;
    scriptWord: string;
    headingPart2: string;
    subheading: string;
    ctaText: string;
    imageLeft: string;
    imageRight: string;
  };
  intro: {
    title: string;
    subtitle: string;
    paragraph1: string;
    paragraph2: string;
    image: string;
  };
  whoWeHelp: {
    heading: string;
    scriptWord: string;
    cards: Array<{
      title: string;
      description: string;
      image: string;
      link: string;
    }>;
  };
  quote: {
    text: string;
    highlight: string;
    bgImage: string;
  };
  expertise: {
    heading: string;
    scriptWord: string;
    columnA: Array<{ label: string; href?: string }>;
    columnB: Array<{ label: string; href?: string }>;
  };
  howWeWork: {
    tagline: string;
    heading: string;
    lead: string;
    body1: string;
    body2: string;
    ctaText: string;
    image: string;
  };
  divider: {
    headingPart1: string;
    scriptAmp: string;
    headingPart2: string;
    image: string;
  };
  specialties: {
    heading: string;
    scriptWord: string;
    items: Array<{
      title: string;
      description: string;
      linkText: string;
      linkHref: string;
    }>;
  };
  bookingCta: {
    tagline: string;
    headingPart1: string;
    scriptWord: string;
    headingPart2: string;
    body1: string;
    body2: string;
    ctaText: string;
    imageLeft: string;
    imageRight: string;
  };
  footer: {
    intro: string;
    logo: string;
    addressLines: string[];
    email: string;
    phone: string;
    serviceAreas: string;
    navLinks: Array<{ label: string; href: string }>;
    teamMembers: string[];
  };
}

export const conejoValleyCloneData: CloneData = {
  topBadge: "ONLINE & IN-PERSON COUNSELING IN NEWBURY PARK & ACROSS CA",
  hero: {
    headingPart1: "Rebuild your foundation on solid ground and finally begin to",
    scriptWord: "thrive",
    headingPart2: ".",
    subheading: "Specialized therapy for adults, couples, teens, and children to reflect, heal, and grow.",
    ctaText: "Book an Appointment",
    imageLeft: "/images/clone/hero-left.jpg",
    imageRight: "/images/clone/hero-right.jpg",
  },
  intro: {
    title: "You're holding onto hope that life can be better than it is right now.",
    subtitle: "At Conejo Valley Family Counseling we want to make that hope a reality.",
    paragraph1:
      "Whether you're an adult seeking personal growth, looking to work through your trauma, a couple working on your relationship, or a parent looking for support for your child, we provide a compassionate and safe space to help you navigate all of life's ups and downs.",
    paragraph2:
      "First and foremost, we believe what you're going through is real, valid, and worthy of support. Our team offers clients in the Newbury Park area and across CA an environment to discover a new life and a deeper sense of self in the midst of their struggles. As we tap into the power of connection and understanding, you can find your footing again and take a transformative path forward.",
    image: "/images/clone/intro-beach.jpg",
  },
  whoWeHelp: {
    heading: "Who we",
    scriptWord: "help",
    cards: [
      {
        title: "Adults",
        description:
          "Feeling stuck or overwhelmed? We help adults find clarity, build resilience, and move forward with confidence by addressing the root causes of anxiety, stress, and emotional pain.",
        image: "/images/clone/who-adults.jpg",
        link: "/adult-therapy",
      },
      {
        title: "Couples",
        description:
          "Relationships require effort, and we're here to help you strengthen yours. We guide couples through challenges like communication breakdowns and trust issues, helping you rebuild intimacy and strengthen your relationship.",
        image: "/images/clone/who-couples.jpg",
        link: "/couples-therapy",
      },
      {
        title: "Children & Teens",
        description:
          "Kids need support, too. We help them process big emotions, cope with challenging family situations, build coping skills, and feel understood, while also working closely with their parents to create a nurturing environment.",
        image: "/images/clone/who-children.jpg",
        link: "/children-and-teens",
      },
    ],
  },
  quote: {
    text: "You deserve a place where your story is heard, valued, and understood.",
    highlight: "Nothing will be too heavy for us to carry together.",
    bgImage: "/images/clone/quote-bg.png",
  },
  expertise: {
    heading: "Our areas of",
    scriptWord: "expertise",
    columnA: [
      { label: "DISSOCIATION", href: "/dissociation" },
      { label: "TRAUMA", href: "/trauma" },
      { label: "FAMILY CONFLICT" },
      { label: "SPECIAL NEEDS PARENTING", href: "/special-needs-parenting" },
      { label: "DEPRESSION", href: "/anxiety-depression" },
      { label: "MARRIAGE", href: "/couples-therapy" },
    ],
    columnB: [
      { label: "ANXIETY", href: "/anxiety-depression" },
      { label: "RELATIONSHIPS" },
      { label: "CHILDREN", href: "/children-and-teens" },
      { label: "TEENS", href: "/children-and-teens" },
      { label: "INTIMACY & CONNECTION", href: "/couples-therapy" },
      { label: "…AND MORE." },
    ],
  },
  howWeWork: {
    tagline: "HOW WE WORK",
    heading: "We're here to make a difference.",
    lead: "The clients we work with are balancing so many things at once, it's often hard for them to put themselves first.",
    body1:
      "Here, your needs are always top priority. Our team takes the time to deeply listen to our clients in order to truly understand their story and their struggles. We recognize that no two people are the same and that personalized therapy means an intentional, tailored approach. (You won't find anything 'one-size-fits-all' here.) If you're ready to do the work, we're ready to help.",
    body2:
      "Sometimes we may gently challenge you to look at things differently and other times we may explore your emotions, all while encouraging you to practice what you've learned in your daily life. We take what we do seriously because we know how important it is for you to heal from what's hurting you, discover a fulfilling life, and build meaningful relationships. Our goal is to walk alongside you in this journey, offering support and guidance as you uncover your strengths and embrace what the future can hold for you.",
    ctaText: "Learn more about us",
    image: "/images/clone/how-we-work.jpg",
  },
  divider: {
    headingPart1: "Honoring where you've been",
    scriptAmp: "&",
    headingPart2: "helping shape where you're headed.",
    image: "/images/clone/honoring-family.jpg",
  },
  specialties: {
    heading: "Our",
    scriptWord: "specialties",
    items: [
      {
        title: "Trauma",
        description:
          "We don't always know when and how we've experienced trauma. In therapy, we'll work together to help you process your past, understand what's causing you to stay 'stuck,' and regain a sense of safety, control, and hope. You don't have to carry your burdens alone.",
        linkText: "Learn more",
        linkHref: "/trauma",
      },
      {
        title: "Dissociation",
        description:
          "The feeling of losing time, hearing conflicting voices, or questioning your sense of self can be overwhelming. In therapy, we'll help you understand these experiences, recognize your own triggers, and create a sense of balance and identity so that you can feel more grounded.",
        linkText: "Learn more",
        linkHref: "/dissociation",
      },
      {
        title: "EMDR",
        description:
          "Eye Movement Desensitization and Reprocessing (EMDR) is a powerful therapeutic technique that helps process and heal trauma by reworking how painful memories are stored in your brain. This allows you to find relief and move toward lasting healing.",
        linkText: "Learn more",
        linkHref: "/emdr",
      },
      {
        title: "Special Needs Parenting",
        description:
          "Parenting a child with special needs presents unique challenges and complex emotions. We provide compassionate support through lived experience and expertise to help you navigate this journey with tools, understanding, and self-care.",
        linkText: "Learn more",
        linkHref: "/special-needs-parenting",
      },
    ],
  },
  bookingCta: {
    tagline: "SCHEDULE AN APPOINTMENT",
    headingPart1: "Find a therapist who is the right fit for",
    scriptWord: "you",
    headingPart2: ".",
    body1:
      "Coming to therapy is a courageous decision, and connecting with the right kind of therapist makes all the difference. We understand that your journey is personal, and we're here to support you with care and understanding every step of the way. Each member of our team brings dedicated expertise and a commitment to support you in your struggles. We want you to feel prioritized, understood, and empowered.",
    body2: "Click the button below to schedule an appointment.",
    ctaText: "Book now",
    imageLeft: "/images/clone/cta-seashells-1.jpg",
    imageRight: "/images/clone/cta-seashells-2.jpg",
  },
  footer: {
    intro:
      "We want to make getting started simple. You're welcome to come into our office in Newbury Park or schedule virtual appointments from anywhere in CA—whatever works best for you.",
    logo: "/images/clone/logo.png",
    addressLines: ["925 Broadbeck Dr", "Suites 200 and 225", "Newbury Park, CA 91320"],
    email: "info@conejovalleycounseling.com",
    phone: "805.242.3120",
    serviceAreas: "Serving Thousand Oaks, Westlake Village, Camarillo, Moorpark, & Simi Valley",
    navLinks: [
      { label: "Home", href: "/clone" },
      { label: "About", href: "/clone" },
      { label: "FAQs", href: "/clone" },
      { label: "Contact", href: "/clone" },
    ],
    teamMembers: [
      "Jennifer Anderson",
      "Heather Williams-Baumgart",
      "Autumn Bodily",
      "Candace Bletscher",
      "Samantha Johnson",
      "Rosa Gomez",
      "Chad Flores",
      "Simran Sidhu",
      "Jessica Jauregui",
    ],
  },
};
