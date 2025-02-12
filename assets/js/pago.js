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


// Número de WhatsApp para confirmar el pago
const whatsappNumber = "56920700893";

// Función para obtener los parámetros de la URL
function getQueryParams() {
  const params = new URLSearchParams(window.location.search);
  return {
    title: params.get('title'),
    price: params.get('price'),
    image: params.get('image')
  };
}

// Función para generar la card del producto seleccionado
function generateSelectedProductCard(product) {
  const container = document.getElementById('selected-product-container');

  const card = `
    <div class="col-12 col-md-8 col-lg-6">
      <div class="card">
        <img src="${product.image}" class="card-img-top" alt="${product.title}">
        <div class="card-body">
          <h5 class="card-title titulocard">${product.title}</h5>
          <p class="card-text roboto-medium">${product.price}</p>
        </div>
      </div>
    </div>
  `;

  container.innerHTML = card;
}

// Función para enviar el mensaje de confirmación a WhatsApp
function confirmPayment(product) {
  const whatsappMessage = `Hola, ya he realizado el pago para el producto: ${product.title} con un valor de ${product.price}.`;
  const encodedMessage = encodeURIComponent(whatsappMessage);
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  // Redirigir a WhatsApp
  window.open(whatsappLink, '_blank');
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
  const product = getQueryParams();
  generateSelectedProductCard(product);

  // Agregar el evento al botón de "Ya hice el pago"
  document.getElementById('confirm-payment').addEventListener('click', () => confirmPayment(product));
});
