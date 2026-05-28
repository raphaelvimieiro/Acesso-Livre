// db.js - Banco de dados centralizado do AcessoLivre

/**
 * 1. LISTA DE LOCAIS DISPONÍVEIS
 * Insira aqui os locais que devem aparecer como opção no Dropdown / Autocomplete.
 * Basta copiar uma linha e alterar os dados para cadastrar novos locais manualmente.
 */
const availableLocations = [
  { name: "Restaurante La Tavola", state: "SP", keywords: "sao paulo massa italiano" },
  { name: "Restaurante La Tavola", state: "RJ", keywords: "rio de janeiro praia" },
  { name: "Restaurante La Tavola", state: "MG", keywords: "minas gerais bh belo horizonte" },
  { name: "Shopping DiamondMall", state: "MG", keywords: "belo horizonte shopping lourdes" },
  { name: "Parque Ibirapuera", state: "SP", keywords: "sao paulo lazer parque" },
  { name: "Copacabana Palace", state: "RJ", keywords: "rio hotel copacabana" }
];

/**
 * 2. AVALIAÇÕES PADRÃO (ESTÁTICAS)
 * Estas são as avaliações que já nascem carregadas na tela de pesquisa.
 */
const defaultReviews = [
  {
    id: 1,
    name: "Restaurante La Tavola",
    state: "SP",
    author: "Wellington Ranniery",
    avatar: "/codigo-fonte/Imagens/Fotopessoa1.png",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/51/77/a2/intro-restaurant-plaza.jpg?w=900&h=500&s=1",
    comment: "Tive o prazer de jantar no Restaurante La Tavola na última terça-feira e confesso que superou todas as minhas expectativas. Desde o momento em que entramos, fomos recebidos com muita cordialidade pela equipe, que nos conduziu prontamente a uma mesa aconchegante.",
    keywords: "restaurante la tavola welington ranniery sao paulo"
  },
  {
    id: 2,
    name: "Restaurante La Tavola",
    state: "RJ",
    author: "Wellington Ranniery",
    avatar: "/codigo-fonte/Imagens/Fotopessoa2.png",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/51/77/a2/intro-restaurant-plaza.jpg?w=900&h=500&s=1",
    comment: "Tive o prazer de jantar no Restaurante La Tavola na última terça-feira e confesso que superou todas as minhas expectativas. Desde o momento em que entramos, fomos recebidos com muita cordialidade pela equipe, que nos conduziu prontamente a uma mesa aconchegante.",
    keywords: "restaurante la tavola welington ranniery rio de janeiro"
  },
  {
    id: 3,
    name: "Restaurante La Tavola",
    state: "MG",
    author: "Wellington Ranniery",
    avatar: "/codigo-fonte/Imagens/Fotopessoa3.png",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/51/77/a2/intro-restaurant-plaza.jpg?w=900&h=500&s=1",
    comment: "Tive o prazer de jantar no Restaurante La Tavola na última terça-feira e confesso que superou todas as minhas expectativas. Desde o momento em que entramos, fomos recebidos com muita cordialidade pela equipe, que nos conduziu prontamente a uma mesa aconchegante.",
    keywords: "restaurante la tavola welington ranniery minas gerais"
  }
];

// Exporta as duas listas para o escopo global do navegador
window.AcessoLivreLocais = availableLocations;
window.AcessoLivreDB = defaultReviews;