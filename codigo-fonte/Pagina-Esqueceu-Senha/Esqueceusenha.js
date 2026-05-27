// MOSTRAR / OCULTAR SENHA
function toggleSenha(id, elemento) {

  const input = document.getElementById(id);

  if (input.type === "password") {

    input.type = "text";
    elemento.textContent = "🙈";

  } else {

    input.type = "password";
    elemento.textContent = "👁";

  }
}

// RECUPERAR SENHA
function recuperarSenha() {

  const senha = document.getElementById("novaSenha").value.trim();
  const confirmar = document.getElementById("confirmarSenha").value.trim();

  const mensagem = document.getElementById("mensagem");

  // CAMPOS VAZIOS
  if (senha === "" || confirmar === "") {

    mensagem.textContent = "Preencha todos os campos.";
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

  // SUCESSO
  mensagem.textContent = "Senha alterada com sucesso!";
  mensagem.className = "sucesso";

  // LIMPAR CAMPOS
  document.getElementById("novaSenha").value = "";
  document.getElementById("confirmarSenha").value = "";

}