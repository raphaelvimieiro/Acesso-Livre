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

  // ÁREA DA MENSAGEM
  const mensagem =
    document.getElementById("mensagem-login");

  // PEGAR USUÁRIOS
  const usuarios =
    JSON.parse(localStorage.getItem("usuarios")) || [];

  // VERIFICAR LOGIN
  const usuarioEncontrado = usuarios.find(user => {

    return user.email === email &&
           user.senha === senha;

  });

  // LOGIN CORRETO
  if (usuarioEncontrado) {

    mensagem.textContent =
      "Login realizado com sucesso!";

    mensagem.className = "sucesso";

    // SALVAR USUÁRIO
    localStorage.setItem(
      "usuarioLogado",
      JSON.stringify(usuarioEncontrado)
    );

    // REDIRECIONAR
    setTimeout(() => {

      window.location.href =
        "../Inicio-Logado/inicio-logado.html";

    }, 1500);

  } else {

    mensagem.textContent =
      "E-mail ou senha incorretos";

    mensagem.className = "erro";

  }

});