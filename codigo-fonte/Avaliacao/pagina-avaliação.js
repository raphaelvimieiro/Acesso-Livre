// pagina-avaliação.js
document.addEventListener("DOMContentLoaded", () => {
  const localInput = document.getElementById("localInput");
  const suggestionsContainer = document.getElementById("localSuggestions");
  const form = document.getElementById("evaluationForm");

  if (!localInput || !suggestionsContainer) return;

  // Carrega os dados de locais cadastrados manualmente no db.js
  const staticDatabase = window.AcessoLivreLocais || [];

  const normalizeText = (value) =>
    value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();

  // Função que monta e exibe o dropdown de locais
  const renderSuggestions = (filterText) => {
    const normalizedFilter = normalizeText(filterText);
    suggestionsContainer.innerHTML = "";

    // Filtra unicamente em cima dos locais disponíveis no banco manual
    const filtered = staticDatabase.filter((item) => {
      const searchString = normalizeText(`${item.name} ${item.state} ${item.keywords || ""}`);
      return searchString.includes(normalizedFilter);
    });

    if (filtered.length === 0) {
      const emptyItem = document.createElement("div");
      emptyItem.className = "suggestion-item";
      emptyItem.textContent = "Nenhum local cadastrado";
      suggestionsContainer.appendChild(emptyItem);
      return;
    }

    filtered.forEach((item) => {
      const div = document.createElement("div");
      div.className = "suggestion-item";
      div.textContent = `${item.name} (${item.state})`; 
      
      div.addEventListener("click", () => {
        localInput.value = item.name;
        // Salva temporariamente o estado mapeado para usar no envio do form
        localInput.setAttribute("data-state", item.state);
        suggestionsContainer.classList.add("hidden");
        suggestionsContainer.style.display = "none";
      });
      suggestionsContainer.appendChild(div);
    });
  };

  // Eventos do Dropdown (Foco e Digitação)
  localInput.addEventListener("focus", () => {
    suggestionsContainer.classList.remove("hidden");
    suggestionsContainer.style.display = "block";
    renderSuggestions(localInput.value);
  });

  localInput.addEventListener("input", () => {
    suggestionsContainer.classList.remove("hidden");
    suggestionsContainer.style.display = "block";
    renderSuggestions(localInput.value);
  });

  // Oculta o dropdown se clicar fora da div .autocomplete
  document.addEventListener("click", (event) => {
    if (!event.target.closest(".autocomplete")) {
      suggestionsContainer.classList.add("hidden");
      suggestionsContainer.style.display = "none";
    }
  });

  // INTERCEPTAÇÃO E SALVAMENTO DA AVALIAÇÃO (LOCALSTORAGE)
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault(); // Impede o erro de Cannot GET /submit

      const localName = localInput.value.trim();
      const commentText = document.getElementById("comentarioText").value.trim();
      
      // Captura a nota da estrela marcada (padrão 5 se nenhuma marcada)
      const selectedRating = document.querySelector('input[name="nota"]:checked');
      const ratingValue = selectedRating ? selectedRating.value : "5";

      // Pega o estado associado ao local escolhido no dropdown (padrão SP caso escreva solto)
      const detectedState = localInput.getAttribute("data-state") || "SP";

      if (!localName || !commentText) {
        alert("Por favor, preencha o campo de local e digite um comentário!");
        return;
      }

      // Recupera o histórico do localStorage ou cria um array vazio se for o primeiro
      let dynamicDatabase = JSON.parse(localStorage.getItem("AcessoLivre_Fisico")) || [];

      // Monta o objeto no padrão idêntico do db.js para renderizar o card perfeitamente
      const newEvaluation = {
        id: Date.now(), 
        name: localName,
        state: detectedState,
        author: "Usuário Logado", 
        avatar: "/codigo-fonte/Imagens/Fotopessoa1.png", 
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/51/77/a2/intro-restaurant-plaza.jpg?w=900&h=500&s=1",
        comment: commentText,
        keywords: normalizeText(`${localName} ${detectedState} usuario logado`)
      };

      // Adiciona no início da lista dinâmica
      dynamicDatabase.unshift(newEvaluation);
      localStorage.setItem("AcessoLivre_Fisico", JSON.stringify(dynamicDatabase));

      alert("Avaliação enviada com sucesso!");
      window.location.href = "/codigo-fonte/Inicio-Logado/inicio-logado.html";
    });
  }
});