document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchBar");
  const citySelect = document.getElementById("cidade");
  const cards = Array.from(document.querySelectorAll(".container-cards > div"));
  const storageKey = "pesquisaLogado";

  if (!searchInput || !citySelect || cards.length === 0) {
    return;
  }

  const savedState = JSON.parse(localStorage.getItem(storageKey)) || {};
  const legacyStateMap = {
    city1: "SP",
    city2: "RJ",
    city3: "MG",
    city4: "PR",
    city5: "RS",
  };
  const savedCity = legacyStateMap[savedState.city] || savedState.city;

  if (typeof savedState.search === "string") {
    searchInput.value = savedState.search;
  }

  if (typeof savedCity === "string") {
    citySelect.value = savedCity;
  }
  // local storage para manter o estado da pesquisa e do filtro de cidade mesmo após recarregar a página
  const normalizeText = (value) =>
    value
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .trim();

  const applyFilters = () => {
    const keyword = normalizeText(searchInput.value);
    const selectedState = citySelect.value;

    cards.forEach((card) => {
      const cardState = card.dataset.state || "";
      const cardText = normalizeText(
        `${card.dataset.keywords || ""} ${card.textContent || ""}`,
      );

      const matchesKeyword = !keyword || cardText.includes(keyword);
      const matchesState = !selectedState || cardState === selectedState;

      card.style.display = matchesKeyword && matchesState ? "" : "none";
    });
  };

  const saveState = () => {
    localStorage.setItem(
      storageKey,
      JSON.stringify({
        search: searchInput.value,
        city: citySelect.value,
      }),
    );
  };

  searchInput.addEventListener("input", () => {
    saveState();
    applyFilters();
  });

  citySelect.addEventListener("change", () => {
    saveState();
    applyFilters();
  });

  applyFilters();
});
