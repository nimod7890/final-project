const activities = [
  {
    id: 1,
    subtitle: "Club / 2023.12 - 2024.2",
    title: "Client Developer - React Native",
    description: "Central Makeus Challenge(CMC) - Profitable App Development Club",
    achievements: [
      "Developed a mobile application prototype using React Native",
      "Collaborated with a team of 5 to implement features",
      "Presented the project at the final competition and won the 2nd place",
    ],
    technologies: "React Native, JavaScript, Firebase",
    team: "5 members",
    links: [
      { name: "GitHub Repository", url: "https://github.com/example/repo" },
      { name: "Presentation Slides", url: "https://slides.com/example" },
    ],
    lessons: "Improved my skills in mobile development and team collaboration",
  },
  {
    id: 2,
    subtitle: "Club / 2022.3 - 2022.9",
    title: "Server Developer - Nest.js",
    description: "SKKUDING - Online Code Judge Project Team",
    achievements: [
      "Built a scalable backend service using Nest.js",
      "Implemented RESTful APIs for the code judge platform",
      "Integrated CI/CD pipeline for automatic deployment",
    ],
    technologies: "Nest.js, TypeScript, Docker",
    team: "4 members",
    links: [
      { name: "Project Repository", url: "https://github.com/example/nestjs" },
      { name: "API Documentation", url: "https://docs.example.com" },
    ],
    lessons: "Learned about backend development and containerization with Docker",
  },
];

const script = document.createElement("script");
script.src = "/components/card/card.js";
document.body.appendChild(script);

script.onload = function () {
  loadCards(activities, "activity-area");
};
