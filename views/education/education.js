const education = [
  {
    id: 1,
    subtitle: "Bachelor of Science / 2020 - Present",
    title: "Computer Education",
    description: "Sungkyunkwan University, Seoul, South Korea",
  },
];

const script = document.createElement("script");
script.src = "/components/card/card.js";
document.body.appendChild(script);

script.onload = function () {
  loadCardList(education, "education-area");
};
