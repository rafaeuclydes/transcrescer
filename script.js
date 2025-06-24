const content = document.querySelector(".content");

function carregarGrade() {
  const studies = {
    study1: {
      nome: "Administração",
      imagem: "../assets/adm.png",
      link: "#",
    },
    study2: {
      nome: "Banho e Tosa",
      imagem: "../assets/pet.png",
      link: "#",
    },
    study3: {
      nome: "Beleza",
      imagem: "../assets/beleza.png",
      link: "#",
    },
    study4: {
      nome: "Ciências de Dados",
      imagem: "../assets/dados.png",
      link: "../pages/cienciadados.html",
    },
    study5: {
      nome: "Confeitaria",
      imagem: "../assets/confeitaria.png",
      link: "#",
    },
    study6: {
      nome: "Fotografia",
      imagem: "../assets/foto.png",
      link: "#",
    },
    study7: {
      nome: "Idiomas",
      imagem: "../assets/liguas.png",
      link: "#",
    },
    study8: {
      nome: "TI",
      imagem: "../assets/ti.png",
      link: "#",
    },
  };

  for (const key in studies) {
    const study = studies[key];

    content.innerHTML += `
      <a href="${study.link}" class="card">
        <div class="card__fundo">
          <img class="card__img" src="${study.imagem}" alt="${study.nome}" />
          <p class="card__text">${study.nome}</p>
        </div>
      </a>
    `;
  }
}

carregarGrade();
