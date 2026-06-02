function recuperarSenha() {

  const email = document.getElementById("email").value.trim();
  const senha = document.getElementById("novaSenha").value.trim();
  const confirmar = document.getElementById("confirmarSenha").value.trim();

  const mensagem = document.getElementById("mensagem");

  // CAMPOS VAZIOS
  if (email === "" || senha === "" || confirmar === "") {

    mensagem.textContent = "Preencha todos os campos.";
    mensagem.className = "erro";
    return;

  }

  // VALIDAR E-MAIL
  if (!email.includes("@")) {

    mensagem.textContent = "Digite um e-mail válido.";
    mensagem.className = "erro";
    return;

  }

  // SENHA PEQUENA
  if (senha.length < 6) {

    mensagem.textContent = "A senha deve ter no mínimo 6 caracteres.";
    mensagem.className = "erro";
    return;

  }

  // SENHAS DIFERENTES
  if (senha !== confirmar) {

    mensagem.textContent = "As senhas não coincidem.";
    mensagem.className = "erro";
    return;

  }

  // BUSCAR USUÁRIOS
  const usuarios =
    JSON.parse(localStorage.getItem("usuarios")) || [];

  // ENCONTRAR USUÁRIO PELO EMAIL
  const usuario = usuarios.find(
    user => user.email === email
  );

  if (!usuario) {

    mensagem.textContent = "E-mail não encontrado.";
    mensagem.className = "erro";
    return;

  }

  // ALTERAR SENHA
  usuario.senha = senha;

  // SALVAR NOVAMENTE
  localStorage.setItem(
    "usuarios",
    JSON.stringify(usuarios)
  );

  mensagem.textContent =
    "Senha alterada com sucesso!";

  mensagem.className = "sucesso";

  // LIMPAR CAMPOS
  document.getElementById("email").value = "";
  document.getElementById("novaSenha").value = "";
  document.getElementById("confirmarSenha").value = "";

  // REDIRECIONAR PARA LOGIN
  setTimeout(() => {

    window.location.href =
      "../Pagina-Login/Login.html";

  }, 1500);

}