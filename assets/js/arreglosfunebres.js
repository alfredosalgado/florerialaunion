// Número de WhatsApp para pedidos
const whatsappNumber = "56920700893";

// Array de arreglos fúnebres
const funeralArrangements = [
  {
    title: "Corona Clásica de Rosas Blancas",
    description: "Elegante corona elaborada con rosas blancas y follaje verde para expresar condolencias con respeto y amor.",
    price: "$45.000",
    image: "./assets/img/arreglosfunebres/1.jpeg"
  },
  {
    title: "Arreglo Floral Serenidad",
    description: "Composición floral que transmite paz y serenidad, hecha con lirios blancos y detalles de eucalipto.",
    price: "$38.000",
    image: "./assets/img/arreglosfunebres/2.jpeg"
  },
  {
    title: "Centro de Mesa para Velatorio",
    description: "Centro de mesa discreto y elegante con flores blancas y lilas para acompañar en momentos difíciles.",
    price: "$28.000",
    image: "./assets/img/arreglosfunebres/3.jpeg"
  },
  {
    title: "Cruz Floral con Lirios",
    description: "Cruz elaborada con lirios blancos y detalles en tonos suaves para honrar la memoria de un ser querido.",
    price: "$50.000",
    image: "./assets/img/arreglosfunebres/4.jpeg"
  },
  {
    title: "Corona Fúnebre de Girasoles",
    description: "Un toque de luz y esperanza con esta corona de girasoles y flores blancas, ideal para recordar momentos felices.",
    price: "$42.000",
    image: "./assets/img/arreglosfunebres/5.jpeg"
  },
  {
    title: "Arreglo Fúnebre Personalizado",
    description: "Podemos crear un arreglo fúnebre personalizado según tus preferencias y necesidades.",
    price: "Desde $35.000",
    image: "./assets/img/arreglosfunebres/6.jpeg"
  }
  // Puedes agregar más arreglos fúnebres aquí
];

// Funcíon para generar las cards
function generateFuneralCards() {
  const container = document.getElementById('funeral-arrangements-container');

  funeralArrangements.forEach(arrangement => {
    const whatsappMessage = `Me gustaría comprar el ${arrangement.title} que tiene un valor de ${arrangement.price}.`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    const card = `
      <div class="col-12 col-md-6 col-lg-4">
        <div class="card">
          <img src="${arrangement.image}" class="card-img-top" alt="${arrangement.title}">
          <div class="card-body">
            <h5 class="card-title titulocard">${arrangement.title}</h5>
            <p class="card-text txt-gris mb-0">${arrangement.description}</p>
            <hr>
            <div class="d-flex justify-content-between align-items-center">
              <p class="card-text ps-3 roboto-medium">${arrangement.price}</p>
              <a href="${whatsappLink}" class="btn btn-whatsapp" target="_blank">
                <i class="fab fa-whatsapp"></i> Lo quiero
              </a>
            </div>
          </div>
        </div>
      </div>
    `;

    container.innerHTML += card;
  });
}

// Ejecutamos la función al cargar la página
document.addEventListener('DOMContentLoaded', generateFuneralCards);