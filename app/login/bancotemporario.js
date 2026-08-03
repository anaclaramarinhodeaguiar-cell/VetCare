const usuarios = [
  {
    email: "admin@gmail.com",
    senha: "123456"
  },
  {
    email: "joao@gmail.com",
    senha: "senha123"
  }
];

function fazerLogin(email, senha) {
  return usuarios.some(
    usuario => usuario.email === email && usuario.senha === senha
  );
}

document.getElementById("loginForm").addEventListener("submit", function (event) {
  event.preventDefault(); // impede o recarregamento da página

  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  const loginValido = fazerLogin(email, senha);

  if (loginValido) {
    window.location.href = "../dashboard.html";
  } else {
    alert("E-mail ou senha incorretos.");
  }
});  