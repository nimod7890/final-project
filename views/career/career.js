const career = [
  {
    id: 1,
    subtitle: "Internship / 2023.2 - 2024.2",
    title: "Front-end Engineer",
    description: "Forspacelab, Seoul, South Korea",
  },
  {
    id: 2,
    subtitle: "Internship / 2022.3 - 2022.6",
    title: "Computer Vision Researcher",
    description: "Korea Institute of Science and Technology(KIST), Seoul, South Korea",
  },
];

const script = document.createElement("script");
script.src = "/components/card/card.js";
document.body.appendChild(script);

script.onload = function () {
  loadCardList(career, "career-area");
};
