document.addEventListener("DOMContentLoaded", function () {
  const projects = [
    {
      id: 1,
      name: "Instagram Clone Coding Web",
      date: "2024.1 - 2024.2",
      description: "유튜브 컴공선배 주관 너디너리 챌린지의 일환. FE 파트 구현",
      technologies: "React 18, Styled-components, React-query, Firebase, Recoil",
    },
    {
      id: 2,
      name: "Open Source Vscode Extension",
      date: "2023.12",
      description: "다국어 지원 git commit message 번역 오픈소스 구현",
      technologies: "Typescript, DeepL translate API",
    },
  ];

  const projectsContainer = document.getElementById("projects-container");

  projects.forEach((project) => {
    const projectCard = document.createElement("div");
    projectCard.className = "project-card";
    projectCard.dataset.projectId = project.id;

    projectCard.innerHTML = `
          <img src="/assets/projects/${project.id}.png" alt="${project.name}">
          <div class="project-card-content">
              <h3>${project.name}</h3>
              <p>${project.date}</p>
          </div>
      `;

    projectCard.addEventListener("click", function () {
      showModal(project);
    });

    projectsContainer.appendChild(projectCard);
  });

  function showModal(project) {
    const modal = document.getElementById("project-modal");
    modal.style.display = "block";
    document.getElementById("modal-project-image").src = `/assets/projects/${project.id}.png`;
    document.getElementById("modal-project-image").alt = project.name;
    document.getElementById("modal-project-name").innerText = project.name;
    document.getElementById("modal-project-date").innerText = project.date;
    document.getElementById("modal-project-description").innerText = project.description;
    document.getElementById(
      "modal-project-technologies"
    ).innerText = `Tech Stack: ${project.technologies}`;

    const closeBtn = document.querySelector(".close");
    closeBtn.onclick = function () {
      modal.style.display = "none";
    };

    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  }
});
