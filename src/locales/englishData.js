const englishData = [
  {
    contact: [
      {
        form: [
          {
            id: "1",
            label: "Name",
            label2: "Email",
            label3: "Message",
            submit: "Submit",
          },
        ],
        hero: [
          {
            id: "1",
            title:
              "Thanks for taking the time to reach out. How can I help you today?",
          },
        ],
      },
    ],

    submit: [
      {
        contact: [
          {
            id: "1",
            title: "Thank you for contacting me!",
            title2: "Somenthing went wrong!",
            text: "I will reach out to you as soon as possible.",
            text2: "Please try again latter.",
          },
        ],

        footer: [
          {
            id: "1",
            title: "Handcrafted by",
            title2: "Leonardo Tricotti",
            text: "Made with",
          },
        ],
      },
    ],

    home: [
      {
        personalInfo: [
          {
            id: "1",
            title: "Hello, nice to meet you.",
            text: "Since beginning my journey as a frontend developer over 4 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.",
          },
        ],

        nav: [
          {
            id: "1",
            text: "Welcome...",
            link: "Say Hello",
            cv: require("../assets/data/CV-EN.pdf"),
            cvText: "Get my CV",
            text2: "Languages",
          },
        ],

        myWork: [
          {
            id: "1",
            title: "My Recent Work",
            subTitle:
              "Here are a few past design projects I've worked on. Want to know me?",
          },
        ],

        hero: [
          {
            id: "1",
            title: "Frontend Developer, Designer & Artist",
            subtitle:
              "I design and code beautifully simple things, and I love what I do.",
          },
        ],

        footer: [
          {
            id: "1",
            title: "Living, learning, & leveling up ",
            title2: "one day at a time.",
            text: "Handcrafted by",
            text2: "Leonardo Tricotti",
            text3: "Made with",
          },
        ],
      },
    ],

    skils: [
      {
        id: "1",
        icon: require("../assets/img/icons/developer.webp"),
        title: "Frontend Developer",
        desc: "I like to code things from scratch, and enjoy bringing ideas to life in the browser.",
        hability: "Languages I speak:",
        habilityList: "HTML, CSS, Sass, Git, JavaScript, React",
        tools: "Dev Tools:",
        toolsList: [
          "JavaScript",
          "React",
          "Redux",
          "Redux-Toolkit",
          "Next",
          "Express",
          "JQuery",
          "TypeScript",
          "Node",
          "HTML",
          "CSS",
          "Sass",
          "Git",
          "GitLab",
          "Styled-Components",
          " Material-UI",
          "Bootstrap",
          "Tailwind",
        ],
      },
      {
        id: "2",
        icon: require("../assets/img/icons/designer.webp"),
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
        icon: require("../assets/img/icons/artist.webp"),
        title: "Artist",
        desc: "I genuinely care about people, and love helping fellow artist to work on their art.",
        hability: "Experiences I draw from:",
        habilityList: "Music, Art, Design",
        tools: "Teaching Experience:",
        toolsList: ["12 years experience", "2.000+ students", "All levels"],
      },
    ],
  },
];

export default englishData;
