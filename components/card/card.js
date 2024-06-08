/**
 *
 * @param {Array<{}>} cards
 * @param {string} elementId
 */

const bounceAnimation = ["bounce-in-top", "bounce-in-left", "bounce-bottom", "bounce-right "];

function loadCards(cards, elementId) {
  var container = document.getElementById(elementId);

  if (!container) {
    console.error("Cards area not found.");
    return;
  }

  cards.forEach((card) => {
    const cardItem = document.createElement("div");
    cardItem.className = `card-item ${bounceAnimation[card.id % 4]}`;

    cardItem.addEventListener("click", () => {
      if (card.link) {
        window.open(card.link, "_blank");
      } else {
        window.location.href = `./details/details.html?id=${card.id}`;
      }
    });

    const subtitle = document.createElement("div");
    subtitle.classList.add("card-subtitle");
    subtitle.textContent = card.subtitle;

    const title = document.createElement("div");
    title.classList.add("card-title");
    title.textContent = card.title;

    const description = document.createElement("div");
    description.classList.add("card-description");
    description.textContent = card.description;

    cardItem.appendChild(subtitle);
    cardItem.appendChild(title);
    cardItem.appendChild(description);

    container.appendChild(cardItem);
  });
}
