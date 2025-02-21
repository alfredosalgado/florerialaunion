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

// Lista de comunas y sus costos de envío
const shippingCosts = {
  "Conchalí": 5000,
  "Independencia": 5000,
  "Recoleta": 5000,
  "Renca": 5000,
  "Santiago": 5000,
  "Cerronavia": 6000,
  "Lo Prado": 6000,
  "Pudahuel Norte": 6000,
  "Quinta Normal": 6000,
  "Estación Central": 7000,
  "Huechuraba": 7000,
  "Macul": 7000,
  "Ñuñoa": 7000,
  "Pedro Aguirre Cerda": 7000,
  "Providencia": 7000,
  "Pudahuel Sur": 7000,
  "Quilicura": 7000,
  "San Joaquín": 7000,
  "San Miguel": 7000,
  "Cerrillos": 10000,
  "Ciudad de los Valles": 10000,
  "El Bosque": 10000,
  "La Cisterna": 10000,
  "La Florida": 10000,
  "La Granja": 10000,
  "La Reina": 10000,
  "Las Condes": 10000,
  "Lo Barnechea": 10000,
  "Lo Espejo": 10000,
  "Noviciado (Pudahuel)": 10000,
  "Peñalolén": 10000,
  "San Ramón": 10000,
  "Vitacura": 10000,
  "La Pintana": 12000,
  "Maipú": 12000,
  "Puente Alto": 12000,
  "San Bernardo": 12000,
  "Lampa": 15000,
  "Colina": 15000,
  "Ciudad Satélite (Maipú)": 15000
};

// Función para obtener los parámetros de la URL
function getQueryParams() {
  const params = new URLSearchParams(window.location.search);
  return {
    title: params.get('title'),
    price: parseFloat(params.get('price').replace('$', '').replace('.', '')),
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
          <p class="card-text roboto-medium">Precio: $${product.price.toLocaleString()}</p>
          <div class="mb-3">
            <label for="comunaSelect" class="form-label">Selecciona tu comuna:</label>
            <select id="comunaSelect" class="form-select">
              <option value="">Selecciona una comuna</option>
              ${Object.keys(shippingCosts).map(comuna => `<option value="${comuna}">${comuna}</option>`).join('')}
            </select>
          </div>
          <p id="shipping-cost" class="mt-2">Costo de envío: $0</p>
          <p id="total-cost" class="fw-bold">Total a transferir: $${product.price.toLocaleString()}</p>
        </div>
      </div>
    </div>
  `;

  container.innerHTML = card;

  // Agregar evento para calcular costo de envío
  document.getElementById('comunaSelect').addEventListener('change', function() {
    const selectedComuna = this.value;
    const shippingCost = shippingCosts[selectedComuna] || 0;
    const totalCost = product.price + shippingCost;

    document.getElementById('shipping-cost').textContent = `Costo de envío: $${shippingCost.toLocaleString()}`;
    document.getElementById('total-cost').textContent = `Total a transferir: $${totalCost.toLocaleString()}`;
  });
}

// Función para enviar el mensaje de confirmación a WhatsApp
function confirmPayment(product) {
  const comuna = document.getElementById('comunaSelect').value;
  const shippingCost = shippingCosts[comuna] || 0;
  const totalCost = product.price + shippingCost;

  const whatsappMessage = `Hola, ya he realizado el pago para el producto: ${product.title} con un valor de $${product.price.toLocaleString()}. Costo de envío: $${shippingCost.toLocaleString()}. Total transferido: $${totalCost.toLocaleString()}. Aquí está la imagen del producto: ${window.location.origin}/${product.image}`;
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