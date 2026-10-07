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
  resumeUrl:
    "https://drive.google.com/file/d/1Iy21f8SgFow1BJd072kYyjVtAKlYwN96/view?usp=sharing",
  portfolioYear: new Date().getFullYear().toString(),
};

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/rayankzi" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/rayan-kazi-dev/" },
  { label: "Email", href: `mailto:${personalInfo.email}` },
];

export const skills = [
  "Next JS",
  "Tailwind CSS",
  "Python",
  "TypeScript",
  "Databases",
];

export interface WorkExperience {
  /** Year and month the role started, formatted as YYYY-MM */
  start: string;
  /** Year and month the role ended (YYYY-MM); omit for current roles */
  end?: string;
  role: string;
  company: string;
  longBullets: string[];
}

export const workExperience: WorkExperience[] = [
  {
    start: "2026-08",
    role: "Technology Consultant",
    company: "ASU Enterprise Technology",
    longBullets: [
      "Advised 20+ students and faculty members on software installation, technology selection, and best practices based on their individual needs",
      "Maintained an 80% satisfaction rate by providing effective troubleshooting of software and connectivity issues",
      "Reduced average response time by 20% by triaging requests and sending customers to consultants with relevant experience",
    ],
  },
  {
    start: "2026-08",
    role: "UGLA – FSE 100",
    company: "Ira A Fulton Schools of Engineering",
    longBullets: [
      "Supported foundational development of over 40+ first-year engineering students through personalized mentorship and technical guidance",
      "Assisted students with hands-on Arduino projects and helped them troubleshoot hardware and software issues",
      "Improved course delivery across 2 class sections by coordinating instruction with professor and other UGTAs",
    ],
  },
  {
    start: "2026-04",
    role: "Undergraduate Research Assistant",
    company: "DaRL Group",
    longBullets: [
      "Expanded AI-generated presentation Python workflow by integrating 20+ new styles from widely used Claude Code Skills",
      "Increased engagement by 30% through MathTex equation formatting in STEM-focused presentations",
      "Improved visual consistency across 100% of AI-generated videos by introducing new unified style framework",
      "Collaborated with 3 PhD students to elevate code quality and ensure seamless integration into published research",
    ],
  },
  {
    start: "2025-05",
    role: "Mathematics Tutor",
    company: "Mathnasium",
    longBullets: [
      "Delivered personalized instruction to 30+ students spanning pre-algebra to advanced calculus",
      "Designed and continuously refined individualized learning plans, catering to students' learning styles and ensuring progress throughout curriculum",
      "Drove a 65% average improvement in student assessment scores and standardized assessments",
    ],
  },
  {
    start: "2026-01",
    end: "2026-05",
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
    start: "2024-08",
    end: "2025-05",
    role: "Independent Researcher",
    company: "Grand Canyon University",
    longBullets: [
      "Investigated how humans detect AI-generated phishing emails and whether detection rate depends on the LLM used; tested models were GPT, Claude, or Gemini",
      "Found that human detection rate of AI emails to be 60%; also discovered insignificant relationship between LLM used to generate email and human detection rate",
      "Presented findings in 5000 word research paper and 20 minute presentation given to multiple crowds",
    ],
  },
  {
    start: "2024-06",
    end: "2024-12",
    role: "Software Engineering Intern",
    company: "We Care Act NYC",
    longBullets: [
      "Maintain EcoAccess website used by 500+ students and donors with Next JS and Tailwind",
      "Implemented over 5 key features in new CRM for college consulting subsidiary of organization",
      "Led development of organization internal tool to track 50+ donation and student computer requests daily",
    ],
  },
  {
    start: "2023-06",
    end: "2023-08",
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
    year: "May 2028",
    degree: "Bachelor of Science, Computer Science",
    university: "Arizona State University",
    highlighted: {
      text: "Honors",
      description: "Barrett, the Honors College",
    },
    description: [
      "Concentration: Artificial Intelligence",
      "Relevant Coursework: Data Structures and Algorithms, Cybersecurity, Engineering Statistics and Probability, Applied Linear Algebra",
    ],
  },
];

export interface Project {
  title: string;
  description: string;
  year: string;
  tech: string[];
  links: { label: string; href: string }[];
}

export const projects: Project[] = [
  {
    title: "Immerse",
    description: "A Chrome extension that minimizes distractions for students.",
    year: "2024",
    tech: [],
    links: [],
  },
  {
    title: "Taskmaster",
    description:
      "An all-in-one task manager with batch task uploads, built for the Appwrite x Hashnode hackathon.",
    year: "2023",
    tech: ["Next.js", "Tailwind CSS", "Appwrite", "NextAuth"],
    links: [
      { label: "Live", href: "https://taskmaster-smoky.vercel.app/" },
      { label: "Code", href: "https://github.com/rocketburst/taskmaster" },
    ],
  },
];
