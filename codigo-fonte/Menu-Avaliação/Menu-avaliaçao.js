document.addEventListener("DOMContentLoaded", () => {
  const toggleButtons = document.querySelectorAll(".js-avaliacao-toggle");

  toggleButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();

      const container = button.closest(".retangulo-avaliacao-texto");
      if (!container) return;

      const section = button.closest(".retangulo-avaliacao");

      const expanded = container.classList.toggle("is-expanded");
      if (section) {
        section.classList.toggle("is-expanded", expanded);
      }

      button.textContent = expanded ? "Ver Menos" : "Ver Mais";
      button.setAttribute("aria-expanded", String(expanded));
    });
  });
});
