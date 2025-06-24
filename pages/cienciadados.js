const content = document.querySelector(".content");

function carregarGrade() {
  const datas = {
    data1: {
      texto: "Análise de Dados e Machine Learning com Python",
      img: "../assets/uninter2.png",
      path: "../pages/uninter.html",
    },
    data2: {
      texto: "Estatística Aplicada para Cientistas de Dados",
      img: "../assets/maria.png",
    },
    data3: {
      texto: "Big Data e Análise Avançada: Conceitos e Práticas",
      img: "../assets/alura.png",
    },
    data4: {
      texto: "Modelagem Preditiva e Algoritmos de Machine Learning",
      img: "../assets/ada.png",
    },
    data5: {
      texto: "Introdução à Ciência de Dados: Fundamentos e Aplicações",
      img: "../assets/ebac.png",
    },
  };

  for (const key in datas) {
    const item = datas[key];

    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img class='card__img' src='${item.img}' />
      <p>${item.texto}</p>
    `;

    if (item.path) {
      card.style.cursor = "pointer";
      card.addEventListener("click", () => {
        window.location.href = item.path;
      });
    }

    content.appendChild(card);
  }
}

carregarGrade();
