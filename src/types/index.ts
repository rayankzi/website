export interface MenuItem {
  href: string;
  name: string;
}

export interface MDXItem {
  title: string;
  date: string;
  href: string;
}

export interface ProjectItem extends MDXItem {
  description: string;
  image: {
    url: string;
    alt: string;
  };
}
