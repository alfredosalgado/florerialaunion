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
    title: "Caja de Corazon Ocasión Especial",
    description: "",
    price: "$75.000",
    image: "./assets/img/arreglos/37.jpeg"
  },
  {
    title: "Caja de corazones con 7 Girasoles y 20 rosas rojas",
    description: "",
    price: "$90.000",
    image: "./assets/img/arreglos/36.jpeg"
  },
  {
    title: "Caja de corazón llena de detalles de amor",
    description: "",
    price: "$60.000",
    image: "./assets/img/arreglos/35.jpeg"
  },
  {
    title: "Caja floral de rosas rojas",
    description: "",
    price: "$75.000",
    image: "./assets/img/arreglos/38.jpeg"
  },
  {
    title: "Caja de Corazón 25 Rosas azules + Chocolates Ferrero R.",
    description: "Caja de corazón con 25 rosas azules frescas  de alta calidad  y chocolates Ferrero Rocher ideal para hombres.",
    price: "$185.000",
    image: "./assets/img/arreglos/32.jpeg"
  },
  {
    title: "Ramo buchón Rosas blancas + rojas + chocolates Ferrero R.",
    description: "Ramo buchón con Rosas blancas y Rojas, chocolates Ferrero Roche. ideal para regalo de cumpleaños san Valentín fecha especial aniversario.",
    price: "$130.000",
    image: "./assets/img/arreglos/30.jpeg"
  },
  {
    title: "Ramo de Rosas + Gibson",
    description: "Ramo de rosas y Gibson sofisticación y elegancia.",
    price: "$66.000",
    image: "./assets/img/arreglos/16.jpeg"
  },
  {
    title: "Ramo de 50 Girasoles",
    description: "",
    price: "$150.000",
    image: "./assets/img/arreglos/97.jpeg"
  },
  {
    title: "Arreglo de Rosas Blancas y Rojas",
    description: "",
    price: "$65.000",
    image: "./assets/img/arreglos/98.jpeg"
  },
  {
    title: "Arreglo de Rosas rojas y Chocolates",
    description: "",
    price: "$55.000",
    image: "./assets/img/arreglos/99.jpeg"
  },
  {
    title: "Arreglo con 13 Girasoles y Chocolates",
    description: "",
    price: "$50.000",
    image: "./assets/img/arreglos/100.jpeg"
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


