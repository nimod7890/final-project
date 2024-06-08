const education = [
  {
    id: 1,
    subtitle: "Bachelor of Science / 2020 - Present",
    title: "Computer Education",
    description: "Sungkyunkwan University, Seoul, South Korea",
  },
  {
    id: 2,
    subtitle: "High School / 2017 - 2020",
    title: "General Education",
    description: "Daejeon Girls' High School, Daejeon, South Korea",
  },
];

function loadCardList(data, containerId) {
  const container = document.getElementById(containerId);

  const firstItemClone = createCarouselItem(data[data.length - 1]);
  container.appendChild(firstItemClone);

  data.forEach((edu) => {
    const item = createCarouselItem(edu);
    container.appendChild(item);
  });

  const lastItemClone = createCarouselItem(data[0]);
  container.appendChild(lastItemClone);
}

function createCarouselItem(edu) {
  const item = document.createElement("div");
  item.className = "carousel-item";
  item.innerHTML = `<h2 class="title">${edu.title}</h2><p class="subtitle">${edu.subtitle}</p>`;
  item.onclick = () => {
    window.location.href = `./details/details.html?id=${edu.id}`;
  };
  return item;
}

function startAutoSlide(containerId, interval = 2500) {
  const container = document.getElementById(containerId);
  let currentIndex = 1; // 시작 인덱스는 첫 번째 원래 아이템 (복제된 첫 아이템이 0)
  container.scrollLeft = container.clientWidth; // 초기 위치 설정

  setInterval(() => {
    if (currentIndex >= education.length + 1) {
      // 마지막 슬라이드를 넘어서면
      container.style.transition = "none"; // 애니메이션 없이 리셋
      container.scrollLeft = 0; // 스크롤 위치를 0으로 설정
      currentIndex = 1; // 다시 시작
    } else {
      container.style.transition = "transform 0.5s ease"; // 스크롤 애니메이션 활성화
    }

    container.scrollLeft += container.clientWidth; // 다음 슬라이드로 이동
    currentIndex++; // 인덱스 증가
  }, interval);
}

window.onload = () => {
  loadCardList(education, "education-area");
  startAutoSlide("education-area");
};
