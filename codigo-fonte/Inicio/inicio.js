// Faz o botão "Ver mais" expandir/retrair o texto do card.
document.addEventListener("DOMContentLoaded", () => {
  const toggleButtons = document.querySelectorAll(".js-toggle-card");

  toggleButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();

      const card = button.closest(".card");
      if (!card) return;

      const expanded = card.classList.toggle("is-expanded");
      button.textContent = expanded ? "Ver menos" : "Ver mais";
      button.setAttribute("aria-expanded", String(expanded));
    });
  });
});
