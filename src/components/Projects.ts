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
      title: "love film",
      timeline: "july - august 2025",
      summary: "love (愛) film is a work-in-progress personal project that lets users take personalized film-strip photos anywhere. Inspired by harufilm, a photobooth studio that uses custom emojis for decoration, I wanted to recreate that experience online, so anyone can capture and decorate cute memories with friends and family from home 📸",
      //images showcasing project
      content_1: [
        {type: "subheader", text: "images coming soon!!"},
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
      title: "portfolio (page still wip)",
      timeline: "june 2025 - present",
      summary: "This is my personal portfolio website, built entirely by me using TypeScript. It showcases my experiences, projects, and the growth of my skills as a designer and developer 💡",
      content_1: [
        {type: "subheader", text: "images coming soon!!"},
        {type: "subheader", text: "planning"},
        {type: "paragraph", text: "My goal was to create a simple, personal site that reflects who I am without overwhelming visitors with visuals. I wanted the focus to stay on my work and abilities rather than flashy aesthetics, while still including a few playful, unique touches."},
        {type: "paragraph", text: "One of those was a custom music player featuring some of my favorite songs. It adds a personal element and makes the site feel more alive and authentic."},
        //image  
      ],  
      content_2: [
        {type: "subheader", text: "programming"},
        {type: "paragraph", text: "I started with the music player, since I’ve always enjoyed making music-related features. I created an array containing song titles, URLs, and artists, styled the player within a div, and added functions to handle play/pause and skip actions."},
        //code snippet music player
        {type: "paragraph", text: "The most challenging part of programming was structuring the projects section. I wanted each “file” (project) to have its own page, where I could share the story and process behind it. Initially, I considered creating a separate file for each project, but I later built a single dynamic page that renders text and images as reusable content blocks. This approach kept the project clean, organized, and easy to scale."},
        //code snippet case study
        ], 
      content_3: [
        {type: "subheader", text: "designing"},
        {type: "paragraph", text: "For the visual direction, I spent a long time looking at others’ portfolio design. I took inspiration from portfolios like nitta.studio, gazijarin.com, and kazukinoda.com. I chose a dark color palette to make highlighted white text stand out, guiding the viewer’s focus toward key details."},
        //inspo images
        {type: "paragraph", text: "I’ve always loved handwritten fonts, so I chose ‘Kodomo Rounded’ for its playful and friendly tone, adding a touch of personality while keeping the site approachable."},
        //font images
        {type: "paragraph", text: "As for the favicon (my logo), I chose a simplified four-leaf clover design. It makes me feel lucky about where I am and what my future could be 🍀"},
        //logo design process image
        ],  
      content_4: [
        {type: "subheader", text: "conclusion & next steps"},
        {type: "paragraph", text: "This website is a diary of my progress and projects. As my experience grows, so will this portfolio. Future plans include creating a custom mouse cursor and implementing more interactive elements and sections!"},
        {type: "paragraph", text: "Thank you for reading :) the code is available on github!"},
        ], 
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
      title: "out the archive (page still wip)",
      timeline: "march - may 2025",
      summary: "",
      content_1: [
        { type: "paragraph", text: "" }
      ],
    },
  },
];

export default projects;
