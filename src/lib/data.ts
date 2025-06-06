import { MenuItem } from "@/types";

export const siteMetadata = {
  title: "Rayan Kazi",
  description: "University student, software engineer, passionate builder",
  url: "https://rayankazi.dev",
};

export const menuItems: MenuItem[] = [
  {
    href: "/",
    name: "Home",
  },
  {
    href: "/#connect",
    name: "Contact",
  },
  {
    href: "/blog",
    name: "Blog",
  },
  {
    href: "/projects",
    name: "Projects",
  },
  {
    href: "/experience",
    name: "Experience",
  },
];

export const experienceData = [
  {
    time: "Aug 2024 - Current",
    place: "Grand Canyon University",
    position: "Independent Researcher",
    shortDescription:
      "Independent Researcher. Investigating how humans can detect phishing emails generated by commercial LLMs.",
    longBullets: [
      "Looking at the rate at which humans can detect AI-generated phishing emails and whether the detection rate depends on the LLM used",
      "Found that human detection rate of AI emails to be 60; also discovered insignificant relationship between LLM used to generate email and human detection rate",
      "Presented findings in 5000 word research paper and 20 minute presentation given to multiple crowds",
    ],
  },
  {
    time: "Jun 2024 - Dec 2024",
    place: "We Care Act NYC",
    position: "IT Member",
    shortDescription:
      "Developed new CRM for college consulting subsidiary and maintained We Care Act website.",
    longBullets: [
      "Develop and maintain EcoAccess website used by 100s of students and donators with Next JS and Tailwind",
      "Implement over 5 key features in new CRM for college consulting subsidiary",
      "Led development of internal project for tracking 50+ donation and student computer requests",
    ],
  },
  {
    time: "Jun 2023 - Aug 2023",
    place: "SitePoint",
    position: "Guest Author",
    longBullets: [
      "Produced articles on JavaScript, Next JS, and other web development technology read by over 10,000 developers",
      "Integrated SEO best practices on SitePoint blog to promote course platform",
    ],
  },
];
