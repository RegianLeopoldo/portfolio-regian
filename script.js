const projetos = [
  {
    titulo: "TevCel Story",
    descricao:
      "Landing page interativa com carrossel de produtos e animações tecnológicas.",
    link: "https://regianleopoldo.github.io/tevcel-story/",
  },
  {
    titulo: "Calculadora Moderna",
    descricao: "Calculadora com percentual encadeado, histórico e modo dark.",
    link: "https://regianleopoldo.github.io/calculadora/",
  },
  {
    titulo: "Landing Page Coca-Cola",
    descricao: "Página institucional responsiva com design profissional.",
    link: "https://regianleopoldo.github.io/coca-cola-landing-page/",
  },
  {
    titulo: "Bilhete da Sorte",
    descricao: "Gerador de bilhetes da sorte com design simples e funcional.",
    link: "https://regianleopoldo.github.io/bilhete-da-sorte/",
  },
  {
    titulo: "Urna Digital",
    descricao: "Sistema de votação online seguro e responsivo.",
    link: "https://regianleopoldo.github.io/Urna-Digital/",
  },
  {
    titulo: "Loja Online TecPlus",
    descricao: "E-commerce moderno para produtos de tecnologia.",
    link: "https://regianleopoldo.github.io/tecplus-online/",
  },
  {
    titulo: "Portfólio Responsivo Moderno",
    descricao: "Desenvolvi este projeto de portfólio totalmente responsivo, com atenção a detalhes de design e usabilidade.",
    link: "https://regianleopoldo.github.io/portfolio-aline/",
}
];

const container = document.getElementById("lista-projetos");

projetos.forEach((projeto) => {
  const card = document.createElement("div");

  card.className = "card";

  card.innerHTML = `
<h3>${projeto.titulo}</h3>
<p>${projeto.descricao}</p>
<a href="${projeto.link}" target="_blank">Ver Projeto</a>
`;

  container.appendChild(card);
});
