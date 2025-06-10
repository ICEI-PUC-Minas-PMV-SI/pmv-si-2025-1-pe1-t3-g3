// Base de usuários simulada (como se fosse um JSON do backend)
const usuarios = [
  {
    id: 1,
    nome: "João Silva",
    email: "joao@email.com",
    senha: "123456"
  },
  {
    id: 2,
    nome: "Maria Oliveira",
    email: "maria@email.com",
    senha: "senha123"
  }
];

// Função de login
function fazerLogin(event) {
  event.preventDefault();

  const email = document.getElementById("email").value.trim();
  const senha = document.getElementById("senha").value.trim();
  const erro = document.getElementById("mensagemErro");

  const usuario = usuarios.find(
    (u) => u.email === email && u.senha === senha
  );

  if (usuario) {
    //erro.textContent = "";
    alert(`Bem-vindo, ${usuario.nome}!`);
     // redirecionar para outra página
    window.location.href = "docs/Ecolink/Tela Inicial/index.html";
  } else {
    erro.textContent = "E-mail ou senha incorretos.";
  }
}