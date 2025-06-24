const content = document.querySelector(".content");

function carregarGrade() {
  const datas = {
    data1: {
      texto: "Estágio em Análise de Dados e Machine Learning",
      img: "../assets/uninter2.png",
    },
    data2: {
      texto: "Desenvolvedor Fullstack Júnior - Vaga para mulheres Trans",
      img: "../assets/maria.png",
    },
  };

  for (const key in datas) {
    const item = datas[key];

    const card = document.createElement("div");
    card.classList.add("card");

    // estrutura interna do card
    card.innerHTML = `
      <div class="card__fundo">
        <img class="card__img" src="${item.img}" />
        <p class="card__text">${item.texto}</p>
      </div>
    `;

    content.appendChild(card);
  }
}

carregarGrade();
