// pagina-avaliação.js
document.addEventListener("DOMContentLoaded", () => {
  const localInput = document.getElementById("localInput");
  const suggestionsContainer = document.getElementById("localSuggestions");
  const form = document.getElementById("evaluationForm");
  const staticDatabase = window.AcessoLivreLocais || [];

  const normalizeText = (value) =>
    value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();

  // Função que renderiza sugestões do banco ou mostra opção de manual
  const renderSuggestions = (filterText) => {
    const normalizedFilter = normalizeText(filterText);
    suggestionsContainer.innerHTML = "";

    const filtered = staticDatabase.filter((item) => {
      const searchString = normalizeText(`${item.name} ${item.state}`);
      return searchString.includes(normalizedFilter);
    });

    if (filtered.length === 0) {
      const emptyItem = document.createElement("div");
      emptyItem.className = "suggestion-item";
      emptyItem.textContent = "Nenhum local encontrado. Use o formato: Nome - UF";
      suggestionsContainer.appendChild(emptyItem);
    } else {
      filtered.forEach((item) => {
        const div = document.createElement("div");
        div.className = "suggestion-item";
        div.textContent = `${item.name} - ${item.state}`;
        
        div.addEventListener("click", () => {
          localInput.value = `${item.name} - ${item.state}`;
          suggestionsContainer.classList.add("hidden");
          suggestionsContainer.style.display = "none";
        });
        suggestionsContainer.appendChild(div);
      });
    }
  };

  // Eventos de input
  localInput.addEventListener("input", () => {
    suggestionsContainer.classList.remove("hidden");
    suggestionsContainer.style.display = "block";
    renderSuggestions(localInput.value);
  });

  localInput.addEventListener("focus", () => {
    suggestionsContainer.classList.remove("hidden");
    suggestionsContainer.style.display = "block";
    renderSuggestions(localInput.value);
  });

  // Fecha o dropdown ao clicar fora
  document.addEventListener("click", (event) => {
    if (!event.target.closest(".autocomplete")) {
      suggestionsContainer.classList.add("hidden");
      suggestionsContainer.style.display = "none";
    }
  });

  // SUBMISSÃO DO FORMULÁRIO
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const fullValue = localInput.value.trim();
      const commentText = document.getElementById("comentarioText").value.trim();
      
      // Lógica de separação "Nome - UF"
      const parts = fullValue.split("-");
      const localName = parts[0] ? parts[0].trim() : "";
      const state = parts[1] ? parts[1].trim().toUpperCase() : "";

      // Validação: obrigatório Nome e Estado (sigla de 2 letras)
      if (!localName || state.length !== 2 || !commentText) {
        alert("Por favor, digite no formato: Nome do Local - UF (Ex: Praça Central - SP)");
        return;
      }

      // Recupera ou inicializa o banco
      let dynamicDatabase = JSON.parse(localStorage.getItem("AcessoLivre_Fisico")) || [];

      // Definição da tag "Novo" com estilo
      const tagNovo = ' <i style="color:yellow; font-size: 0.5em; vertical-align: middle;">Novo</i>';

      // Monta o objeto
      const newEvaluation = {
        id: Date.now(),
        name: tagNovo + localName , // Nome concatenado com a tag
        state: state,
        author: "Usuário Logado",
        avatar: "../Imagens/Logadoimagem.png",
        image: "../Imagens/novoLocal.jpg",
        comment: commentText,
        keywords: normalizeText(`${localName} ${state} usuario logado`)
      };

      dynamicDatabase.unshift(newEvaluation);
      localStorage.setItem("AcessoLivre_Fisico", JSON.stringify(dynamicDatabase));

      alert("Avaliação enviada com sucesso!");
      window.location.href = "/codigo-fonte/Inicio-Logado/inicio-logado.html";
    });
  }
});