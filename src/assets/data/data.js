import developer from "../img/icons/developer.webp";
import designer from "../img/icons/designer.webp";
import artist from "../img/icons/artist.webp";

const skils = [
  {
    id: "1",
    icon: developer,
    title: "Frontend Developer",
    desc: "I like to code things from scratch, and enjoy bringing ideas to life in the browser.",
    hability: "Languages I speak:",
    habilityList: "HTML, CSS, Sass, Git, JavaScript, React",
    tools: "Dev Tools:",
    toolsList: [
      "Atom ",
      "Bitbucket",
      "Bootstrap",
      "Bulma",
      "Codeki",
      "Githu",
      "Surge",
      "Terminal",
      "Vercel",
    ],
  },
  {
    id: "2",
    icon: designer,
    title: "Designer",
    desc: "I value simple content structure, clean design patterns, and thoughtful interactions.",
    hability: "Things I enjoy designing:",
    habilityList: "UX, UI, Web, Apps, Logos",
    tools: "Design Tools:",
    toolsList: [
      "Affinity Designer",
      "Figma",
      "Font Awesome",
      "Pen & Paper",
      "Sketch",
      "Webflow",
    ],
  },
  {
    id: "3",
    icon: artist,
    title: "Artist",
    desc: "I genuinely care about people, and love helping fellow artist to work on their art.",
    hability: "Experiences I draw from:",
    habilityList: "Music, Art, Design",
    tools: "Teaching Experience:",
    toolsList: ["12 years experience", "2.000+ students", "All levels"],
  },
];

export default skils;