const projectModal = document.getElementById("projectModal");

fetch("/components/modal/modal.html")
  .then((response) => response.text())
  .then((data) => {
    projectModal.innerHTML = data;
    loadModal();
  })
  .catch((error) => console.error("Error loading the modal:", error));

function loadModal() {
  const script = document.createElement("script");
  script.src = "/components/modal/modal.js";
  document.body.appendChild(script);

  script.onload = function () {
    initializeModal();
  };

  var cards = document.querySelectorAll(".project-item");

  cards.forEach((card) => {
    card.onclick = function () {
      var title = this.getAttribute("data-title");
      var description = this.getAttribute("data-description");
      showModal(title, description);
    };
  });
}
