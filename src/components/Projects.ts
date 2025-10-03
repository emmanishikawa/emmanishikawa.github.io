export interface Project {
  slug: string;
  project_title: string;
  description: string;
  tools: string;
  github_url: string;
  link_url: string;
  case_study: {
    title: string;
    timeline: string;
    content_1?: any[];
    content_2?: any[];
    content_3?: any[]
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
      timeline: "july - august 2025",
      content_1: [{type: "subheader", text: "inspiration"}, { type: "paragraph", text: "page in progress. read github for more information" }],
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
      timeline: "june 2025 - present",
      content_1: [{ type: "paragraph", text: "page in progress" }],
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
      timeline: "march - may 2025",
      content_1: [{ type: "paragraph", text: "page in progress. view finished website using link above!" }],
    },
  },
];

export default projects;
