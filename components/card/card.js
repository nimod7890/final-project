/**
 *
 * @param {Array<{id:string;subtitle:string;title:string;description:string}>} cards
 * @param {string} elementId
 */

function loadCardList(cards, elementId) {
  var container = document.getElementById(elementId);

  if (!container) {
    console.error("Cards area not found.");
    return;
  }

  cards.forEach((card) => {
    const cardItem = document.createElement("div");
    cardItem.classList.add("card-item");

    cardItem.addEventListener("click", () => {
      console.log(`./details/details.html?id=${card.id}`);
      window.location.href = `./details/details.html?id=${card.id}`;
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
