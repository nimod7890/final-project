const career = [
  {
    id: 1,
    subtitle: "Internship / 2023.2 - 2024.2",
    title: "Front-end Engineer",
    description: "Forspacelab, Seoul, South Korea",
    responsibilities: [
      "Developed and maintained the management system 'DataPuree', implementing comprehensive store management functions including transfer of ownership, delivery accounts, and brand management.",
      "Utilized component reuse and data structuring techniques.",
      "Implemented a chat feature between headquarters and store managers using Sendbird.",
      "Developed the ChannelTalk feature.",
      "Maintained the delivery data-based analysis system 'ReportPuree'.",
      "Migrated existing projects from Next.js to React.",
      "Implemented Tableau embedding API v3 dashboards.",
      "Developed an internal design system and deployed it to a private npm repository using a monorepo approach.",
      "Participated in a project to improve the management of restaurant businesses using delivery app data, organized by the Korea Agro-Fisheries & Food Trade Corporation.",
      "Implemented integrated delivery app data analysis reports.",
    ],
    technologies:
      "React 18, Typescript, Material-UI, React-query, Zod, Recoil, Chart.js, Vite, Bun",
    teamSize: "20 members",
    links: [{ name: "Forspacelab", url: "https://www.forspacelab.com/" }],
    achievements: [
      "Gained experience with the Agile process.",
      "Developed a comprehensive store management system.",
      "Implemented communication features between headquarters and stores.",
      "Maintained and migrated projects to improve performance.",
      "Developed and deployed an internal design system.",
    ],
    learnings:
      "Gained deeper understanding of Agile processes, React hooks, context API, and monorepo structure.",
  },
  {
    id: 2,
    subtitle: "Internship / 2022.3 - 2022.6",
    title: "Computer Vision Researcher",
    description: "Korea Institute of Science and Technology(KIST), Seoul, South Korea",
    responsibilities: [
      "Conducted research on image recognition algorithms.",
      "Published findings in a peer-reviewed journal.",
      "Collaborated with international research teams.",
    ],
    technologies: "Python, OpenCV, Pytorch",
    teamSize: "7 members",
    links: [{ name: "Project Code", url: "https://github.com/example/code" }],
    achievements: [
      "Developed a novel image segmentation algorithm.",
      "Received a best paper award at a conference.",
    ],
    learnings: "Learned advanced techniques in machine learning and computer vision.",
  },
];

const script = document.createElement("script");
script.src = "/components/card/card.js";
document.body.appendChild(script);

script.onload = function () {
  loadCareerCardList(career, "career-area");
};

function loadCareerCardList(cards, elementId) {
  const container = document.getElementById(elementId);

  if (!container) {
    console.error("Cards area not found.");
    return;
  }

  cards.forEach((card, index) => {
    const cardItem = document.createElement("div");
    cardItem.classList.add("career-card");
    cardItem.style.animation = `float${index} 10s linear infinite`;

    // Randomize initial position within bounds
    const initialTop = Math.random() * 80;
    const initialLeft = Math.random() * 80;
    cardItem.style.top = initialTop + "vh";
    cardItem.style.left = initialLeft + "vw";

    cardItem.addEventListener("click", () => {
      window.location.href = `./details/details.html?id=${card.id}`;
    });

    const subtitle = document.createElement("div");
    subtitle.classList.add("career-card-subtitle");
    subtitle.textContent = card.subtitle;

    const title = document.createElement("div");
    title.classList.add("career-card-title");
    title.textContent = card.title;

    const description = document.createElement("div");
    description.classList.add("career-card-description");
    description.textContent = card.description;

    cardItem.appendChild(subtitle);
    cardItem.appendChild(title);
    cardItem.appendChild(description);

    container.appendChild(cardItem);
    createKeyframes(index, initialTop, initialLeft);
  });
}

function createKeyframes(index, initialTop, initialLeft) {
  const style = document.createElement("style");
  style.type = "text/css";

  const keyframes = `
    @keyframes float${index} {
      0% { transform: translate(0, 0); }
      25% { transform: translate(${randomOffset(initialLeft)}vw, ${randomOffset(initialTop)}vh); }
      50% { transform: translate(${randomOffset(initialLeft)}vw, ${randomOffset(initialTop)}vh); }
      75% { transform: translate(${randomOffset(initialLeft)}vw, ${randomOffset(initialTop)}vh); }
      100% { transform: translate(0, 0); }
    }
  `;

  style.innerHTML = keyframes;
  document.getElementsByTagName("head")[0].appendChild(style);
}

function randomOffset(initial) {
  const offset = Math.random() * 200 - 100; // Random value between -100 and 100
  const newValue = initial + offset;
  // Ensure the value stays within bounds [0, 100]
  return Math.max(0, Math.min(100, newValue));
}
