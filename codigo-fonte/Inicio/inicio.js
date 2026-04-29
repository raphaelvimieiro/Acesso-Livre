// Faz o botão "Ver mais" expandir/retrair o texto do card.
document.addEventListener("DOMContentLoaded", () => {
  const cards = Array.from(document.querySelectorAll(".card"));
  const toggleButtons = document.querySelectorAll(".js-toggle-card");
  let collapsedHeight = 0;

  const syncCardHeights = () => {
    cards.forEach((card) => {
      card.style.height = "auto";
    });

    collapsedHeight = Math.max(...cards.map((card) => card.offsetHeight));

    cards.forEach((card) => {
      if (!card.classList.contains("is-expanded")) {
        card.style.height = `${collapsedHeight}px`;
      }
    });
  };

  window.addEventListener("load", syncCardHeights);
  window.addEventListener("resize", () => {
    if (!cards.some((card) => card.classList.contains("is-expanded"))) {
      syncCardHeights();
    }
  });

  toggleButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();

      const card = button.closest(".card");
      if (!card) return;

      const expanded = card.classList.toggle("is-expanded");
      button.textContent = expanded ? "Ver menos" : "Ver mais";
      button.setAttribute("aria-expanded", String(expanded));
      card.style.height = expanded
        ? "auto"
        : `${collapsedHeight || card.offsetHeight}px`;
    });
  });
});
