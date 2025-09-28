export interface Project {
  slug: string;
  project_title: string;
  description: string;
  tools: string;
  github_url: string;
  link_url: string;
  case_study: {
    title: string;
    content: any[];
  };
}

const projects: Project[] = [
  {
    slug: "lovefilm",
    project_title: "love film",
    description: "a desktop photobooth website featuring customized film strips",
    tools: "React.js, Javascript, HTML/CSS",
    github_url: "https://github.com/emmanishikawa/lovefilm",
    link_url: "https://lovefilm-six.vercel.app/",
    case_study: {
      title: "love film",
      content: [{ type: "paragraph", text: "page in progress" }],
    },
  },
  {
    slug: "portfolio",
    project_title: "portfolio",
    description: "my personal website (this)",
    tools: "React.js, HTML/CSS",
    github_url: "https://github.com/emmanishikawa/emmanishikawa",
    link_url: "https://emmanishikawa.github.io/emmanishikawa/",
    case_study: {
      title: "portfolio",
      content: [{ type: "paragraph", text: "page in progress" }],
    },
  },
];

export default projects;
