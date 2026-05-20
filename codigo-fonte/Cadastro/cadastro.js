// MOSTRAR / OCULTAR SENHA
document.querySelectorAll(".toggle").forEach(icon => {

  icon.addEventListener("click", () => {

    const input = icon.previousElementSibling;

    if (input.type === "password") {

      input.type = "text";

      icon.classList.replace("fa-eye", "fa-eye-slash");

    } else {

      input.type = "password";

      icon.classList.replace("fa-eye-slash", "fa-eye");

    }

  });

});


// CADASTRO
document.getElementById("form").addEventListener("submit", function(e) {

  e.preventDefault();

  // PEGAR DADOS
  const nome = document.getElementById("nome").value;
  const sobrenome = document.getElementById("sobrenome").value;
  const email = document.getElementById("email").value;
  const telefone = document.getElementById("telefone").value;
  const senha = document.getElementById("senha").value;
  const confirmar = document.getElementById("confirmar").value;

  // VALIDAÇÕES
  if (senha.length < 8) {

    alert("A senha precisa ter pelo menos 8 caracteres");
    return;

  }

  if (senha !== confirmar) {

    alert("As senhas não coincidem");
    return;

  }

  // PEGAR USUÁRIOS
  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  // VERIFICAR EMAIL REPETIDO
  const emailExiste = usuarios.find(user => user.email === email);

  if (emailExiste) {

    alert("Este e-mail já está cadastrado");
    return;

  }

  // NOVO USUÁRIO
  const novoUsuario = {
    nome,
    sobrenome,
    email,
    telefone,
    senha
  };

  // SALVAR
  usuarios.push(novoUsuario);

  localStorage.setItem(
    "usuarios",
    JSON.stringify(usuarios)
  );

  alert("Conta criada com sucesso!");

  // REDIRECIONAR
  window.location.href =
    "/codigo-fonte/Pagina-Login/Login.html";

});