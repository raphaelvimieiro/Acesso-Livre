// searchL.js
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchBar");
  const citySelect = document.getElementById("cidade");
  const containerCards = document.querySelector(".container-cards");
  const storageKey = "pesquisaLogado";

  if (!searchInput || !citySelect || !containerCards) return;

  // 1. Carrega os dados fixos do db.js
  const staticDatabase = window.AcessoLivreDB || [];

  // 2. Carrega as avaliações criadas dinamicamente pelo formulário
  const dynamicDatabase = JSON.parse(localStorage.getItem("AcessoLivre_Fisico")) || [];

  // 3. Concatena os dois bancos em uma única matriz global de busca
  const database = [...dynamicDatabase, ...staticDatabase];

  const normalizeText = (value) =>
    value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();

  const renderFilteredCards = () => {
    const keyword = normalizeText(searchInput.value);
    const selectedState = citySelect.value;

    containerCards.innerHTML = ""; 

    const filteredData = database.filter((item) => {
      const cardText = normalizeText(`${item.name} ${item.keywords || ""} ${item.state} ${item.comment}`);
      const matchesKeyword = !keyword || cardText.includes(keyword);
      const matchesState = !selectedState || item.state === selectedState;

      return matchesKeyword && matchesState;
    });

    if (filteredData.length === 0) {
      containerCards.innerHTML = `<p style="color: #968c8c; font-style: italic; text-align: center; width: 100%;">Nenhum local encontrado para os termos digitados.</p>`;
      return;
    }

    filteredData.forEach((item) => {
      const card = document.createElement("div");
      card.className = "location1"; 
      card.style.display = "flex";  

      card.innerHTML = `
        <div class="imagem" style="background-image: linear-gradient(to top, rgba(0, 0, 0, 1), transparent), url('${item.image}');">
            <div class="content">
                <img src="../Imagens/Local.png" alt="Ícone de localização" />
                <p class="legend">${item.name} (${item.state})</p>
            </div>
        </div>
        <div class="avaliacao-location">
            <div style="background-image: url('${item.avatar}'); width: 50px; height: 50px; background-position: center; background-size: cover; border-radius: 50%; margin: 0 auto;"></div>
            <div class="name-avalicao">${item.author}</div>
        </div>
        <div class="avaliacao-text">
            <p>${item.comment}</p>
        </div>
      `;
      containerCards.appendChild(card);
    });
  };

  const savedState = JSON.parse(localStorage.getItem(storageKey)) || {};
  if (typeof savedState.search === "string") searchInput.value = savedState.search;
  if (typeof savedState.city === "string") citySelect.value = savedState.city;

  const saveState = () => {
    localStorage.setItem(
      storageKey,
      JSON.stringify({
        search: searchInput.value,
        city: citySelect.value,
      })
    );
  };

  searchInput.addEventListener("input", () => {
    saveState();
    renderFilteredCards();
  });

  citySelect.addEventListener("change", () => {
    saveState();
    renderFilteredCards();
  });

  renderFilteredCards();
});