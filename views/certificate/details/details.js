/**
 *
 * @param {Array<{id: string, subtitle: string, title: string, description: string}>} cards
 */
document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const cardId = Number(params.get("id"));

  const card = career.find(({ id }) => id === cardId);

  if (card) {
    document.getElementById("product-title").innerText = card.title;
    document.getElementById("product-description").innerText = card.description;
  } else {
    document.getElementById("product-title").textContent = "Product not found";
    document.getElementById("product-description").textContent = "";
  }
});
