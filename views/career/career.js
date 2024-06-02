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
