// src/data/blogs.ts
export interface Blog {
    id: string;
    title: string;
    summary: string;
    content: string;
    image: string;
    date: string;
  }
  
  export const blogs: Blog[] = [
    {
      id: "1",
      title: "Discover the Andamans",
      summary: "A quick guide to the best places in the Andaman Islands.",
      content: "Full blog content here...",
      image: "/images/blogs/andamans.jpg",
      date: "2024-06-01",
    },
  ];