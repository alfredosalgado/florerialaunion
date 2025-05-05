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
    title: "88.- Hermoso Ramo con 100 Rosas",
    description: "",
    price: "$250.000",
    image: "./assets/img/arreglos/88.jpeg"
  },
  {
    title: "89.- Ramo con 10 Rosas 6 Girasoles y 2 Hortensias",
    description: "",
    price: "$48.000",
    image: "./assets/img/arreglos/89.jpeg"
  },
  {
    title: "90.- Hermoso Ramo con 100 Rosas",
    description: "",
    price: "$250.000",
    image: "./assets/img/arreglos/90.jpeg"
  },
  {
    title: "91.- Hermoso arreglo de Tulipanes",
    description: "",
    price: "$45.000",
    image: "./assets/img/arreglos/91.jpeg"
  },
  {
    title: "92.- Hermoso Ramo de 20 Tulipanes",
    description: "",
    price: "$60.000",
    image: "./assets/img/arreglos/92.jpeg"
  },
  {
    title: "93.- Hermoso Cilindro con Rosas y Lilium",
    description: "",
    price: "$55.000",
    image: "./assets/img/arreglos/93.jpeg"
  },
  {
    title: "94.- Ramo con Rosas, Girasoles y Lilium y Chocolate",
    description: "",
    price: "$45.000",
    image: "./assets/img/arreglos/94.jpeg"
  },
  {
    title: "95.- Ramo con 5 Ross un Girasol y Margaritas",
    description: "",
    price: "$18.000",
    image: "./assets/img/arreglos/95.jpeg"
  },
  {
    title: "96.- Hermoso y Elegante Arreglo Floral de Rosas Rojas",
    description: "",
    price: "$320.000",
    image: "./assets/img/arreglos/96.jpeg"
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


