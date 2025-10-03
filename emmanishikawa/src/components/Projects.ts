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
    link_url: "https://love-film.vercel.app/",
    case_study: {
      title: "love film",
      content: [{ type: "paragraph", text: "page in progress. read github for more information" }],
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
  {
    slug: "ota",
    project_title: "out the archive",
    description: "development of full-stack website",
    tools: "React.js, Figma",
    github_url: "",
    link_url: "https://www.outthearchive.xyz/",
    case_study: {
      title: "out the archive",
      content: [{ type: "paragraph", text: "page in progress. view finished website using link above!" }],
    },
  },
];

export default projects;
