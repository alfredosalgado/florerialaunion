// Archivo: product.js

// Número de WhatsApp para pedidos
const whatsappNumber = "56920700893";

// Array de productos
const products = [
  {
    title: "Ramo de mano de lujo",
    description: "Diseñado con tres rosas rojas de alta calidad y un girasol impresionante, complementado con un toque de elegancia de Gibson.",
    price: "$18.000",
    image: "./assets/img/arreglos/1.jpeg"
  },
  {
    title: "Ramo de mano sublime",
    description: "Compuesto por 2 rosas rojas de intensa pasión y un girasol radiante, complementado con un toque astral que evoca la belleza del universo.",
    price: "$15.000",
    image: "./assets/img/arreglos/2.jpeg"
  },
  {
    title: "Ramo de mano en escalera",
    description: "Hermoso ramo de mano hecho en escalera con 5 rosas rojas más astromelia y Aster.",
    price: "$20.000",
    image: "./assets/img/arreglos/3.jpeg"
  },
  {
    title: "Ramo de mano sorpresa",
    description: "Ramo de mano hecho con una rosa roja más un girasol y Aster, lindo detalle para sorprender un ser querido.",
    price: "$12.000",
    image: "./assets/img/arreglos/4.jpeg"
  },
  {
    title: "Ramo de mano con 2 girasoles y Gibson",
    description: "Ramo alegre y vibrante ideal para alegrar cualquier día.",
    price: "$12.000",
    image: "./assets/img/arreglos/5.jpeg"
  },
  {
    title: "Arreglo floral de lujo",
    description: "Combina la belleza etérea de tres rosas blancas con el aroma revitalizante del eucalipto, ideal para ocasiones especiales.",
    price: "$15.000",
    image: "./assets/img/arreglos/6.jpeg"
  },
  // Agrega más productos aquí hasta completar los 20 productos
];

// Funcíon para generar las cards
function generateCards() {
  const container = document.getElementById('product-container');

  products.forEach(product => {
    const whatsappMessage = `Me gustaría comprar el ${product.title} que tiene un valor de ${product.price}.`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    const card = `
      <div class="col-12 col-md-6 col-lg-4">
        <div class="card">
          <img src="${product.image}" class="card-img-top" alt="${product.title}">
          <div class="card-body">
            <h5 class="card-title titulocard">${product.title}</h5>
            <p class="card-text txt-gris mb-0">${product.description}</p>
            <hr>
            <div class="d-flex justify-content-between align-items-center">
              <p class="card-text ps-3 roboto-medium">${product.price}</p>
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
document.addEventListener('DOMContentLoaded', generateCards);
