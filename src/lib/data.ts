import { MenuItem, Post, ProjectItem } from "@/types";

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
