const resposta = await fetch("http://localhost:3000/github/repos");
const dados = await resposta.json();
console.log(dados);
