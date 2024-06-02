document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const cardId = Number(params.get("id"));

  const card = career.find(({ id }) => id === cardId);

  if (card) {
    document.getElementById("career-details-title").innerText = card.title;
    document.getElementById("career-details-subtitle").innerText = card.subtitle;
    document.getElementById("career-details-description").innerText = card.description;

    const responsibilitiesList = document.getElementById("product-responsibilities");
    card.responsibilities.forEach((responsibility) => {
      const li = document.createElement("li");
      li.innerText = responsibility;
      responsibilitiesList.appendChild(li);
    });

    document.getElementById("product-technologies").innerText = card.technologies;
    document.getElementById("product-team").innerText = card.teamSize;

    const linksList = document.getElementById("product-links");
    card.links.forEach((link) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = link.url;
      a.target = "_blank";
      a.innerText = link.name;
      li.appendChild(a);
      linksList.appendChild(li);
    });

    const achievementsList = document.getElementById("product-achievements");
    card.achievements.forEach((achievement) => {
      const li = document.createElement("li");
      li.innerText = achievement;
      achievementsList.appendChild(li);
    });

    document.getElementById("product-learnings").innerText = card.learnings;
  } else {
    document.getElementById("product-title").textContent = "Product not found";
  }
});
