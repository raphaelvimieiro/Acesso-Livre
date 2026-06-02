
### Página de Avaliação
<img width="1900" height="907" alt="image" src="https://github.com/user-attachments/assets/ec089961-943f-4050-a00a-7cb9d51f1ca5" />


#### Requisito atendido

RF-01: A aplicação deve oferecer funcionalidade como avaliação por estrelas e uso de tags, permitindo que o usuário classifique o local de forma positiva ou negativa quanto à acessibilidade ou relate eventuais problemas.

#### Artefatos da funcionalidade

- pagina-avaliação.css

- pagina-avaliação.html

- pagina-avaliação.js

- db.js

#### Estrutura de Dados



```
const availableLocations = [
  { name: "Restaurante La Tavola", state: "SP", keywords: "sao paulo massa italiano" },
  { name: "Restaurante La Tavola", state: "RJ", keywords: "rio de janeiro praia" },
  { name: "Restaurante La Tavola", state: "MG", keywords: "minas gerais bh belo horizonte" },
  { name: "Shopping DiamondMall", state: "MG", keywords: "belo horizonte shopping lourdes" },
  { name: "Parque Ibirapuera", state: "SP", keywords: "sao paulo lazer parque" },
  { name: "Copacabana Palace", state: "RJ", keywords: "rio hotel copacabana" }
];
```
#### Instruções de acesso

- Acesse a página inicial
- Clique em "Entrar/Criar conta"
- Preencha e-mail e senha
- Clique no botão "Entrar"
- Acesse a pagina de avaliação localizada na navbar
- Preencha todos campos necessários
- Clique no botão para submeter a avaliação

#### Responsável

- Wellington Ranniery Parreiras Leite

### Pesquisa
<img width="1895" height="911" alt="image" src="https://github.com/user-attachments/assets/6ca5a624-a9a7-4239-aff5-dde8eef40d4d" />


#### Requisito atendido

RF-03	A aplicação deve possibilitar pesquisa para que o usuário possa buscar os locais mais bem avaliados por categoria.


#### Artefatos da funcionalidade

- searchL.css
- searchL.html
- searchL.js
- db.js


#### Estrutura de Dados

```
const availableLocations = [
  { name: "Restaurante La Tavola", state: "SP", keywords: "sao paulo massa italiano" },
  { name: "Restaurante La Tavola", state: "RJ", keywords: "rio de janeiro praia" },
  { name: "Restaurante La Tavola", state: "MG", keywords: "minas gerais bh belo horizonte" },
  { name: "Shopping DiamondMall", state: "MG", keywords: "belo horizonte shopping lourdes" },
  { name: "Parque Ibirapuera", state: "SP", keywords: "sao paulo lazer parque" },
  { name: "Copacabana Palace", state: "RJ", keywords: "rio hotel copacabana" }
];

const defaultReviews = [
  {
    id: 1,
    name: "Restaurante La Tavola",
    state: "SP",
    author: "Wellington Ranniery",
    avatar: "/codigo-fonte/Imagens/Fotopessoa1.png",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/51/77/a2/intro-restaurant-plaza.jpg?w=900&h=500&s=1",
    comment: "Comentário exemplo"
  };
```

#### Instruções de acesso

- Acesse a página inicial
- Clique em "Entrar/Criar conta"
- Preencha e-mail e senha
- Clique no botão "Entrar"
- Clique na pagina barra de pesquisa na navbar
- Pesquise por nome ou estado

*********************


#### Responsável

- Wellington Ranniery Parreiras Leite




## Notícias (Deslogado)

<img width="1908" height="1077" alt="image" src="https://github.com/user-attachments/assets/b90883cf-b893-466f-a66d-2feecb649d2e" />


**Requisito atendido**

RF-04: o sistema deve ter uma aba de notícias onde estão dispostas informações 
como últimas notícias e anúncios de eventos alertas contendo as informações de acessibilidade.

**Artefatos da funcionalidade**

- noticias.html
- noticias.css

**Estrutura de Dados**

Não se aplica.

**Instruções de acesso**

1. Acesse a página inicial
2. Clique em "Notícia" na navbar

**Responsável**

Amanda Gomes Costa Estevam

---

## Notícias (Logado)

<img width="1906" height="1079" alt="image" src="https://github.com/user-attachments/assets/ddda4dd9-5ed1-4cc8-a61f-7030cff7636d" />


**Requisito atendido**

RF-04: o sistema deve ter uma aba de notícias onde estão dispostas informações 
como últimas notícias e anúncios de eventos alertas contendo as informações de acessibilidade.

**Artefatos da funcionalidade**

- noticiasLO.html
- noticiasLO.css

**Estrutura de Dados**

Não se aplica.

**Instruções de acesso**

1. Acesse a página inicial
2. Faça login com e-mail e senha
3. Clique em "Notícia" na navbar

**Responsável**

Amanda Gomes Costa Estevam


## Login

<img width="1880" height="898" alt="image" src="https://github.com/user-attachments/assets/74076c4c-0401-4ddf-9300-72567e809074" />

**Requisito atendido**

RF-05: O sistema deve permitir que o usuário acesse sua conta com e-mail e senha.

**Artefatos da funcionalidade**

- codigo-fonte/Login/login.html
- codigo-fonte/login/login.css
- codigo-fonte/login/login.js

**Estrutura de Dados**

const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

**Instruções de acesso**

1. Acesse a página inicial
2. clique em Login/Criar conta
3. Preencha e-mail e senha
4. Clique no botão "Entrar"

**Responsável**

Vitor Oliveira Souza Avellar

## Cadastre-se

<img width="1877" height="896" alt="image" src="https://github.com/user-attachments/assets/24b52ff9-6a48-4c4f-9f5d-1d91065698f7" />


**Requisito atendido**

RF-05: O sistema deve permitir que o usuário possa se cadastrar.


**Artefatos da funcionalidade**

- codigo-fonte/Cadastro/Cadastro.html
- codigo-fonte/Cadastro/Cadastro.css
- codigo-fonte/Cadastro/Cadastro.js

**Estrutura de Dados**

  const nome = document.getElementById("nome").value;
  const sobrenome = document.getElementById("sobrenome").value;
  const email = document.getElementById("email").value;
  const telefone = document.getElementById("telefone").value;
  const senha = document.getElementById("senha").value;
  const confirmar = document.getElementById("confirmar").value;


  
**Instruções de acesso**

1. Acesse a página inicial
2. clique em Login/Criar conta
3. clique em cadastro
4. Clique no botão "Criar Conta"

**Responsável**

Vitor Oliveira Souza Avellar


## Esqueceu Senha

<img width="1907" height="897" alt="image" src="https://github.com/user-attachments/assets/b45b092e-34a2-41cb-a34d-dfcaf8216d37" />



**Requisito atendido**

RF-05: O sistema deve permitir que o usuário possa recuperar sua conta.


**Artefatos da funcionalidade**

- codigo-fonte/Pagina-Esqueceu-Senha/EsqueceuSenha.html
- codigo-fonte/Pagina-Esqueceu-Senha/EsqueceuSenha.css
- codigo-fonte/Pagina-Esqueceu-Senha/EsqueceuSenha.js

**Estrutura de Dados**

  const senha = document.getElementById("novaSenha").value.trim();
  const confirmar = document.getElementById("confirmarSenha").value.trim();


  
**Instruções de acesso**

1. Acesse a página inicial
2. clique em Login/Criar conta
3. clique em Esqueceu Senha
4. Clique no botão "Recuperar"

**Responsável**

Vitor Oliveira Souza Avellar







> **Links Úteis**:
> - [Trabalhando com HTML5 Local Storage e JSON](https://www.devmedia.com.br/trabalhando-com-html5-local-storage-e-json/29045)
> - [JSON Tutorial](https://www.w3resource.com/JSON)
> - [JSON - Introduction (W3Schools)](https://www.w3schools.com/js/js_json_intro.asp)
> - [JSON Tutorial (TutorialsPoint)](https://www.tutorialspoint.com/json/index.htm)

