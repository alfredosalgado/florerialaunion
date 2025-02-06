// main.js
document.querySelector('.whatsapp-btn').addEventListener('click', function() {
  const phone = '56920700893'; // Número de teléfono
  const message = 'Hola, estoy interesado en más información.'; // Mensaje predefinido
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
});


// main.js o directamente en el archivo <script> de tu HTML

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
    description: "",
    price: "$12.000",
    image: "./assets/img/arreglos/5.jpeg"
  },
  {
    title: "Arreglo floral de lujo",
    description: "Combina la belleza etérea de tres rosas blancas con el aroma revitalizante del eucalipto, ideal para ocasiones especiales.",
    price: "$15.000",
    image: "./assets/img/arreglos/6.jpeg"
  }
];

// Función para generar las cards
function generateCards() {
  const container = document.getElementById('product-container');

  products.forEach(product => {
    // Creamos la estructura de la card
    const card = `
      <div class="col-12 col-md-6 col-lg-4">
        <div class="card">
          <img src="${product.image}" class="card-img-top" alt="${product.title}">
          <div class="card-body">
            <h5 class="card-title titulocard">${product.title}</h5>
            <p class="card-text txt-gris mb-0">${product.description}</p>
            <hr>
            <div class="d-flex justify-content-end">
              <p class="card-text ps-3 roboto-medium">${product.price}</p>
            </div>
          </div>
        </div>
      </div>
    `;
    // Insertamos la card en el contenedor
    container.innerHTML += card;
  });
}

// Ejecutamos la función al cargar la página
document.addEventListener('DOMContentLoaded', generateCards);

// Número de WhatsApp al que llegarán los mensajes
const whatsappNumber = "56920700893";  // Cambia este número por el tuyo, sin el + y sin ceros iniciales

// Función para generar las cards
function generateCards() {
  const container = document.getElementById('product-container');

  products.forEach(product => {
    // Generar el mensaje para WhatsApp
    const whatsappMessage = `Me gustaría comprar el ${product.title} que tiene un valor de ${product.price}. Aquí está el arreglo: ${window.location.origin}/${product.image}`;

    
    // Codificar el mensaje para que sea válido en la URL
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // URL de WhatsApp con mensaje prellenado
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Estructura de la card con el botón de WhatsApp
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

    // Insertamos la card en el contenedor
    container.innerHTML += card;
  });
}

// Ejecutamos la función al cargar la página
document.addEventListener('DOMContentLoaded', generateCards);

