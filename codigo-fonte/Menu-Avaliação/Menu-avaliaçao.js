document.addEventListener("DOMContentLoaded", () => {
  const toggleButtons = document.querySelectorAll(".js-avaliacao-toggle");

  toggleButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();

      const container = button.closest(".retangulo-avaliacao-texto");
      if (!container) return;

      // Pega a COLUNA individual do card clicado
      const coluna = button.closest(".retangulo-avaliacao-coluna");
      
      // Pega a section externa para redimensionar o fundo
      const section = button.closest(".retangulo-avaliacao");

      const expanded = container.classList.toggle("is-expanded");

      // Expande apenas a coluna clicada, não todas
      if (coluna) {
        coluna.classList.toggle("is-expanded", expanded);
      }

      // Verifica se ALGUMA coluna ainda está expandida antes de encolher o fundo
      const algumExpandido = section
        ? section.querySelector(".retangulo-avaliacao-coluna.is-expanded")
        : null;

      if (section) {
        section.classList.toggle("is-expanded", !!algumExpandido);
      }

      button.textContent = expanded ? "Ver Menos" : "Ver Mais";
      button.setAttribute("aria-expanded", String(expanded));
    });
  });
});