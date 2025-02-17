// main.js
document.querySelector('.whatsapp-btn').addEventListener('click', function() {
  const phone = '56920700893'; // Número de teléfono
  const message = 'Hola, estoy interesado en más información.'; // Mensaje predefinido
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
});


// Obtén el botón de "Subir"
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Cuando el usuario haga scroll hacia abajo, muestra el botón
window.onscroll = function () {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    scrollToTopBtn.style.display = "flex"; // Muestra el botón
  } else {
    scrollToTopBtn.style.display = "none"; // Oculta el botón
  }
};

// Cuando el usuario haga clic en el botón, realiza el desplazamiento suave
scrollToTopBtn.addEventListener("click", function (event) {
  event.preventDefault(); // Evita la acción predeterminada de ancla

  // Desplazamiento suave hasta la parte superior
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Añade la transición suave
  });
});



// Array de productos
const products = [
  {
    title: "Caja de corazón llena de detalles románticos.",
    description: "Un ramo de 8 rosas rojas frescas y una selección de 14 deliciosos bombones Ferrero Rocher.",
    price: "$60.000",
    image: "./assets/img/arreglos/35.jpeg"
  },
  {
    title: "Caja de corazones con 7 Girasoles y 20 rosas rojas",
    description: "Hermosa caja de corazones con 7 Girasoles y 20 rosas rojas frescas y seleccionadas de la mejor calidad regalo especial para expresar tu amor a ese ser amado.",
    price: "$90.000",
    image: "./assets/img/arreglos/36.jpeg"
  },
  {
    title: "Caja de Corazon San Valentin",
    description: "Esta caja de corazón es el regalo perfecto para San Valentín, contiene  14 Girasoles frascos y 14 hermosas rosas.",
    price: "$75.000",
    image: "./assets/img/arreglos/37.jpeg"
  },
  {
    title: "Caja floral de rosas rojas",
    description: "Hermosa caja floral de rosas rojas acompañas de gibson y una hermosa cinta roja que evoca elegancia.",
    price: "$75.000",
    image: "./assets/img/arreglos/38.jpeg"
  },
  {
    title: "Ramo de Rosas rosadas + Girasol + Gibson.",
    description: "Hermoso ramo de Rosas rosadas un girasol y Gibson.",
    price: "$64.000",
    image: "./assets/img/arreglos/40.jpeg"
  },
  {
    title: "Arreglo floral de rosas surtidas + Girasoles",
    description: "Arreglo floral de rosas surtidas en rojo y naranja acompañas de girasoles y follaje Verde.",
    price: "$64.000",
    image: "./assets/img/arreglos/41.jpeg"
  },
  {
    title: "Ramo de rosas amarillas + Gibson blancas",
    description: "Ramo de rosas amarillas elegancia y sofisticación acompañas de Gibson blancas.",
    price: "$80.000",
    image: "./assets/img/arreglos/42.jpeg"
  },
  {
    title: "Ramo de Buchón San Valentín",
    description: "Este ramo de buchón es el regalo perfecto para San Valentín, aniversarios o cualquier ocasión en la que desees expresar tu amor y cariño.",
    price: "$200.000",
    image: "./assets/img/arreglos/46.jpeg"
  },
  {
    title: "Arreglos floral con chocolate",
    description: "Arreglos floral con chocolate 🍫 Ferrero Rocher san Valentín",
    price: "$70.000",
    image: "./assets/img/arreglos/47.jpeg"
  },
];

// Funcíon para generar las cards
function generateCards() {
  const container = document.getElementById('product-container');

  products.forEach(product => {
    const paymentLink = `pago.html?title=${encodeURIComponent(product.title)}&price=${encodeURIComponent(product.price)}&image=${encodeURIComponent(product.image)}`;

    const card = `
      <div class="col-6 col-md-4 col-lg-2 d-flex justify-content-center">
        <div class="card">
          <img src="${product.image}" class="card-img-top im" alt="${product.title}">
          <div class="card-body">
            <h5 class="card-title tituloc">${product.title}</h5>
        
            <div class="d-flex justify-content-center align-items-center">
              <p class="card-text roboto-medium">${product.price}</p>
            </div>
            <div class="d-flex justify-content-center align-items-center pt-2">
            <a href="${paymentLink}" class="btn btn-whatsapp">
                Lo quiero
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


