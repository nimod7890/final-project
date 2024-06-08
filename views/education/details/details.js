document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const cardId = Number(params.get("id"));

  const card = education.find(({ id }) => id === cardId);
  if (card) {
    document.getElementById("title").textContent = card.title;
    document.getElementById("subtitle").textContent = card.subtitle;
    document.getElementById("description").textContent = card.description;
  } else {
    document.getElementById("title").textContent = "Education not found";
    document.getElementById("subtitle").textContent = "";
    document.getElementById("description").textContent = "";
  }
});
