import { MenuItem, NoteItem, Post, ProjectItem } from "@/types";

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
  {
    href: "/notes",
    name: "Notes",
  },
];

export const postMetadata: Post[] = [
  {
    title: "How to Send Emails with React Using Resend",
    href: "/blog/sending-emails-with-resend",
    date: "08/01/2023",
  },
  {
    title: "Mastering Next.js Error Handling with the App Router",
    href: "/blog/next-error-handling",
    date: "06/08/2023",
  },
  {
    title: "Learn Next JS Server Actions with Books!",
    href: "/blog/next-server-actions",
    date: "05/07/2023",
  },
  {
    title: "A Primer on the Different ERC Standards",
    href: "/blog/erc-standards-primer",
    date: "09/17/2022",
  },
  {
    title: "7 TypeScript Utility Types That Will Make Your Life Easier",
    href: "/blog/7-typescript-utility-types",
    date: "06/30/2022",
  },
  {
    title: "How to build a modal using Tailwind CSS",
    href: "/blog/modal-with-tailwindcss",
    date: "02/28/2022",
  },
  {
    title: "Fetching APIs Using Axios",
    href: "/blog/fetch-api-axios",
    date: "02/23/2022",
  },
  {
    title: "Minting NFTS with Next JS and Thirdweb",
    href: "/blog/minting-nfts-next-js-thirdweb",
    date: "03/11/2022",
  },
  {
    title: "Creating your own Crypto with Thirdweb + Next JS",
    href: "/blog/crypto-next-js-thirdweb",
    date: "02/06/2022",
  },
  {
    title: "Type Checking your Next JS App",
    href: "/blog/type-check-next-app",
    date: "01/22/2022",
  },
  {
    title: "Authentication using Metamask Wallets in Next JS",
    href: "/blog/next-thirdweb-metamask-auth",
    date: "01/18/2022",
  },
];

export const projectsData: ProjectItem[] = [
  {
    title: "Immerse",
    description: "A chrome extension for minimizing student distractions",
    image: {
      url: "/images/projects/immerse-preview.png",
      alt: "An screenshot of Immerse app",
    },
    href: "/projects/immerse",
  },
  {
    title: "Taskmaster",
    description: "An all-in-one task management tool. For everyone",
    image: {
      url: "/images/projects/taskmaster-preview.png",
      alt: "An screenshot of Taskmaster app",
    },
    href: "/projects/taskmaster",
  },
];

export const experienceData = [
  {
    time: "Mar 2025 - Current",
    place: "Career Chats",
    position: "National Officer",
    shortDescription:
      "National Officer. Conducting interviews with CS professionals and developing guides for high schoolers interested in AI.",
    longBullets: [
      "Conducting interviews with CS professionals to gain career insights",
      "Developed 20 page field guide on how high schoolers can get started with AI/ML",
    ],
  },
  {
    time: "Aug 2024 - Current",
    place: "Grand Canyon University",
    position: "Independent Researcher",
    shortDescription:
      "Independent Researcher. Investigating how different commercial LLMs generate phishing emails.",
    longBullets: [
      "Investigated how different commercial LLMs like ChatGPT, Claude, and Gemini generate phishing emails",
      // TODO: add stuff about findings of research
      "Presented findings in 5000 word research paper and 20 minute presentation given to multiple crowds",
    ],
  },
  {
    time: "Jun 2024 - Current",
    place: "We Care Act NYC",
    position: "IT Member",
    shortDescription:
      "Developed new CRM for college consulting subsidiary and maintaining current We Care Act website.",
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

export const notesMetadata: NoteItem[] = [
  {
    title: "Test Note",
    href: "/notes/test-note",
    date: "04/01/2025",
  },
];
