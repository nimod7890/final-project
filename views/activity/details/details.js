document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const cardId = Number(params.get("id"));

  const card = activities.find(({ id }) => id === cardId);
  console.log(card);
  if (card) {
    document.getElementById("product-title").innerText = card.title;
    document.getElementById("product-subtitle").innerText = card.subtitle;

    const achievementsList = document.getElementById("product-achievements");
    card.achievements.forEach((achievement) => {
      const li = document.createElement("li");
      li.innerText = achievement;
      achievementsList.appendChild(li);
    });

    document.getElementById("product-technologies").innerText = card.technologies;
    document.getElementById("product-team").innerText = card.team;

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

    document.getElementById("product-lessons").innerText = card.lessons;
  } else {
    document.getElementById("product-title").textContent = "Product not found";
    document.getElementById("product-description").textContent = "";
  }
});
