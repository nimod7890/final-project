const certificates = [
  {
    id: 1,
    subtitle: "취득일: 2022.9.23 (유효 기간 없음)",
    title: "ADsP : Advanced Data Analytics Semi-Professional",
    description: "제 34회 데이터분석 준전문가",
    link: "https://www.dataq.or.kr/www/sub/a_06.do",
  },
  {
    id: 2,
    subtitle: "취득일: 2021.6.15 (유효 기간 없음)",
    title: "SQLD : SQL Developer",
    description: "제 27회 SQL 개발자",
    link: "https://www.sql.or.kr",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  loadCertificateList(certificates, "certificate-area");

  const cards = document.querySelectorAll(".certificate-card");
  let currentIndex = 0;

  const nextButton = document.getElementById("next");
  const prevButton = document.getElementById("prev");

  function updateButtons() {
    prevButton.disabled = currentIndex === 0;
    nextButton.disabled = currentIndex === cards.length - 1;
  }

  nextButton.addEventListener("click", () => {
    cards[currentIndex].classList.remove("active");
    cards[currentIndex].classList.add("prev");
    currentIndex = (currentIndex + 1) % cards.length;
    cards[currentIndex].classList.remove("next");
    cards[currentIndex].classList.add("active");
    updateButtons();
  });

  prevButton.addEventListener("click", () => {
    cards[currentIndex].classList.remove("active");
    cards[currentIndex].classList.add("next");
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    cards[currentIndex].classList.remove("prev");
    cards[currentIndex].classList.add("active");
    updateButtons();
  });

  updateButtons();
});

function loadCertificateList(cards, elementId) {
  const container = document.getElementById(elementId);

  if (!container) {
    console.error("Cards area not found.");
    return;
  }

  cards.forEach((card, index) => {
    const cardItem = document.createElement("div");
    cardItem.classList.add("certificate-card");
    if (index === 0) cardItem.classList.add("active");

    const title = document.createElement("h3");
    title.textContent = card.title;

    const subtitle = document.createElement("p");
    subtitle.textContent = card.subtitle;

    const description = document.createElement("p");
    description.textContent = card.description;

    const link = document.createElement("a");
    link.href = card.link;
    link.target = "_blank";
    link.textContent = "Learn more";

    cardItem.appendChild(title);
    cardItem.appendChild(subtitle);
    cardItem.appendChild(description);
    cardItem.appendChild(link);

    container.appendChild(cardItem);
  });
}
