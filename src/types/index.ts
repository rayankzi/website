export interface MenuItem {
  href: string;
  name: string;
}

export interface Post {
  title: string;
  href: string;
  date: string;
}

export interface ProjectItem {
  title: string;
  description: string;
  image: {
    url: string;
    alt: string;
  };
  href: string;
}
