export const siteMetadata = {
  title: "Rayan Kazi",
  description: "University student, software engineer, passionate builder",
  url: "https://rayankazi.dev",
};

export const personalInfo = {
  name: {
    first: "Rayan",
    last: "Kazi",
  },
  title: "Software Engineer",
  description: "University student, software engineer, passionate builder.",
  location: "Phoenix, AZ",
  availability: {
    status: "Available for work",
    isAvailable: true,
  },
  email: "rkazi1@asu.edu",
  portfolioYear: new Date().getFullYear().toString(),
};

export const skills = [
  "Next JS",
  "Tailwind CSS",
  "Python",
  "TypeScript",
  "Databases",
];

export const workExperience = [
  {
    year: "April 2026 - Present",
    role: "Undergraduate Researcher",
    company: "Arizona State University",
    longBullets: [
      "Working with Dr. Hua Wei and Dr. Yi Zheng to implement ICAP framework on agentic AI framework for education",
      "More comming soon ✌️",
    ],
  },
  {
    year: "May 2025 - Present",
    role: "Mathematics Tutor",
    company: "Mathnasium",

    longBullets: [
      "Delivered personalized instruction to 30+ students spanning pre-algebra to advanced calculus",
      "Designed and continuously refined individualized learning plans, catering to students' learning styles and ensuring progress throughout curriculum",
      "Drove a 65% average improvement in student assessment scores and standardized assessments",
    ],
  },
  {
    year: "Jan 2026 - May 2026",
    role: "Backend Engineer",
    company: "EPICS — Campus Maps",
    longBullets: [
      "Collaborated on app to help new ASU and visitors navigate the campus more easily",
      "Sped up onboarding timeline by 3 weeks by transitioning corrupted backend system on Docker to Neon DB and Render deployments",
      "Designed end-to-end documentation for the backend built with Python and FastAPI with 100% coverage",
      "Successfully delivered app to ASU mobile app team",
    ],
  },
  {
    year: "Aug 2024 - May 2025",
    role: "Independent Researcher",
    company: "Grand Canyon University",
    longBullets: [
      "Investigated how humans detect AI-generated phishing emails and whether detection rate depends on the LLM used; tested models were GPT, Claude, or Gemini",
      "Found that human detection rate of AI emails to be 60%; also discovered insignificant relationship between LLM used to generate email and human detection rate",
      "Presented findings in 5000 word research paper and 20 minute presentation given to multiple crowds",
    ],
  },
  {
    year: "Jun 2024 - Dec 2024",
    role: "Software Engineering Intern",
    company: "We Care Act NYC",
    longBullets: [
      "Maintain EcoAccess website used by 500+ students and donors with Next JS and Tailwind",
      "Implemented over 5 key features in new CRM for college consulting subsidiary of organization",
      "Led development of organization internal tool to track 50+ donation and student computer requests daily",
    ],
  },
  {
    year: "Jun 2023 - Aug 2023",
    role: "Content Intern",
    company: "SitePoint",
    longBullets: [
      "Pitched, wrote, and published articles related to web development, reaching 10,000+ developers",
      "Generated significant developer engagement, with articles attaining trending status",
      "Collaborated with the SitePoint editorial team to align content with their SEO strategy, contributing to the overall growth of their course platform's visibility",
    ],
  },
];

export const education = [
  {
    year: "2029",
    degree: "Bachelor of Science, Computer Science",
    university: "Arizona State University",
    highlighted: {
      text: "Honors",
      description: "Barrett, the Honors College",
    },
    description: [
      "Concentration: Artificial Intelligence",
      "Relevant Coursework: Object Oriented Programming in Java, Computing in C/C++",
    ],
  },
];

export const projects = [
  {
    title: "Design System Library",
    description:
      "A comprehensive component library built with React and TypeScript, featuring 50+ accessible components.",
    date: "2024",
    thumbnail: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "AI Content Generator",
    description:
      "Machine learning powered tool that generates marketing copy and blog content using GPT-4.",
    date: "2024",
    thumbnail: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "E-commerce Dashboard",
    description:
      "Real-time analytics dashboard for online stores with sales tracking and inventory management.",
    date: "2023",
    thumbnail: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Task Management App",
    description:
      "Collaborative project management tool with drag-and-drop kanban boards and team features.",
    date: "2023",
    thumbnail: "/placeholder.svg?height=400&width=600",
  },
];
