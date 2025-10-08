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
    summary: string;
    content_1?: any[];
    content_2?: any[];
    content_3?: any[];
    content_4?: any[];
    content_5?: any[];
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
      title: "love film (page still wip)",
      timeline: "july - august 2025",
      summary: "love (愛) film is a work-in-progress personal project that lets users take personalized film-strip photos anywhere. Inspired by harufilm, a photobooth studio that uses custom emojis for decoration, I wanted to recreate that experience online, so anyone can capture and decorate cute memories with friends and family from home 📸",
      //images showcasing project
      content_1: [
        {type: "subheader", text: "planning"},
        {type: "paragraph", text: "I began by researching both physical and digital photobooths, then broke down their features into four main components:"},
        {type: "list", items: ["Main Menu", "Frame Selection", "Decoration", "Download"]},
        {type: "paragraph", text: "These became the foundation of my prototype. This was also my first independent coding project outside of class and clubs, and I had just started learning TypeScript and React.js, so everything was very new to me. I had a lot to learn to make this project come to life."},
        {type: "paragraph", text: "To create the prototype, my inital goals were to:"},
        {type: "list", items: ["Build a working camera", 
          "Arrange photos into frames", "Make the final film strip downloadable"]},
        {type: "paragraph", text: "Once those were complete, I could focus on developing the decoration system."}
        ],  
      content_2: [
        {type: "subheader", text: "programming"},
        {type: "paragraph", text: "Most of my time went into debugging and refining the core functions."},
        {type: "paragraph", text: "For the camera, I used React’s webcam library, which allowed me to easily adjust size and constraints to fit the frame."},
        //code snippet cam
        {type: "paragraph", text: "For downloads, I implemented the html-to-image library to capture and export div elements as PNGs."},
        //code snippet download pg
        {type: "paragraph", text: "For decoration, I drew from a concept I used in an earlier project, Out the Archive, by creating an Emoji type that maps emojis to their image files. Getting emojis to appear and interact correctly on the frame was the trickiest part; there are still small bugs to polish, but the feature is functional and fun to use."},
        //image emojis
      ], 
      content_3: [
        {type: "subheader", text: "designing"},
        {type: "paragraph", text: "Visually, I took inspiration from 'harufilm' and 'photoism', aiming for a playful yet calming atmosphere."},
        //image inspo
        {type: "paragraph", text: "The name love (愛) film comes from my Chinese/Japanese name, 愛真. Since 愛 means “love,” I wanted the project to reflect that same fuzzy feeling. It’s also my first major solo project, making it a meaningful milestone."},
        {type: "paragraph", text: "I chose a Japanese handwritten font, 'Makiba', to complement the playful theme and used rounded buttons with a soft blue palette to convey calmness and friendliness."},
        //image fonts
        {type: "paragraph", text: "The emojis are designed to be colorful and expressive, standing out against the film strips while keeping the overall style cohesive."},
        //image emoji
      ],  
      content_4: [
        {type: "subheader", text: "conclusion & next steps"},
        {type: "paragraph", text: "This project has helped me grow more confident with TypeScript, React, and independent problem-solving."},
        {type: "paragraph", text: "It’s still a work-in-progress, and in future updates I plan to:"},
        {type: "list", items: ["Make it mobile-friendly", "Add more frame colors and styles", "Introduce photo filters", "Implement a timer for taking pictures", "Design more emojis"]},
        {type: "paragraph", text: "Thank you for reading :) the code is available on github!"}
      ],      
    },
  }, //{type: "paragraph", text: ""},
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
      summary: "",
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
      summary: "",
      content_1: [
        { type: "paragraph", text: "page in progress. view finished website using link above!" }
      ],
    },
  },
];

export default projects;
