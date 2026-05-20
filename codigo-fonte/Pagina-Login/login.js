// MOSTRAR / OCULTAR SENHA
document.querySelectorAll(".eye").forEach(icon => {

  icon.addEventListener("click", () => {

    const input = icon.previousElementSibling;

    if (input.type === "password") {

      input.type = "text";
      icon.textContent = "🙈";

    } else {

      input.type = "password";
      icon.textContent = "👁";

    }

  });

});


// LOGIN
document.getElementById("loginForm").addEventListener("submit", function(e) {

  e.preventDefault();

  // PEGAR DADOS
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  // PEGAR USUÁRIOS
  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  // VERIFICAR LOGIN
  const usuarioEncontrado = usuarios.find(user => {

    return user.email === email && user.senha === senha;

  });

  // LOGIN CORRETO
  if (usuarioEncontrado) {

    alert("Login realizado com sucesso!");

    // SALVAR USUÁRIO LOGADO
    localStorage.setItem(
      "usuarioLogado",
      JSON.stringify(usuarioEncontrado)
    );

    // REDIRECIONAR
    window.location.href =
      "/codigo-fonte/Inicio-Logado/inicio-logado.html";

  } else {

    alert("E-mail ou senha incorretos");

  }

});