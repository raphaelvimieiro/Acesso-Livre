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
    name: "Hachiko",
    state: "RJ",
    author: "Wellington Ranniery",
    avatar: "/codigo-fonte/Imagens/Fotopessoa2.png",
    image: "https://letsflyaway.com.br/wp-content/uploads/2020/03/entrada-hachiko-restaurante-japones-centro-rio-de-janeiro.jpg",
    comment: "Que experiência maravilhosa! O ambiente é acolhedor, o atendimento impecável e cada detalhe da refeição foi uma grata surpresa que superou o que eu imaginava.",
    keywords: "restaurante la tavola  rio de janeiro"
  },
  {
    id: 3,
    name: "Restaurante Tamboril",
    state: "MG",
    author: "Raphael Procopio",
    avatar: "/codigo-fonte/Imagens/Fotopessoa3.png",
    image: "https://cafeviagem.com/wp-content/uploads/2016/08/Inhotim-Restaurante-Tamboril-19-1-640x427.jpg",
    comment: "Tive o prazer de jantar na última terça-feira e confesso que superou todas as minhas expectativas. Desde o momento em que entramos, fomos recebidos com muita cordialidade pela equipe, que nos conduziu prontamente a uma mesa aconchegante.",
    keywords: "restaurante tamboril minas gerais"
  }
];

// Exporta as duas listas para o escopo global do navegador
window.AcessoLivreLocais = availableLocations;
window.AcessoLivreDB = defaultReviews;