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




// Número de WhatsApp para pedidos
const whatsappNumber = "56920700893";

// Array de arreglos fúnebres
const funeralArrangements = [
  {
    title: "Arreglo Fúnebre 1",
    description: "",
    price: "$220.000",
    image: "./assets/img/arreglosfunebres/1.jpeg"
  },
  {
    title: "Arreglo Fúnebre 2",
    description: "",
    price: "$85.000",
    image: "./assets/img/arreglosfunebres/2.jpeg"
  },
  {
    title: "Arreglo Fúnebre 3",
    description: "",
    price: "$96.000",
    image: "./assets/img/arreglosfunebres/3.jpeg"
  },
  {
    title: "Arreglo Fúnebre 4",
    description: "",
    price: "$70.000",
    image: "./assets/img/arreglosfunebres/4.jpeg"
  },
  {
    title: "Arreglo Fúnebre 5",
    description: "",
    price: "$85.000",
    image: "./assets/img/arreglosfunebres/5.jpeg"
  },
  {
    title: "Arreglo Fúnebre 6",
    description: "",
    price: "$90.000",
    image: "./assets/img/arreglosfunebres/6.jpeg"
  },
  {
    title: "Arreglo Fúnebre 7",
    description: "",
    price: "$70.000",
    image: "./assets/img/arreglosfunebres/7.jpeg"
  },
  {
    title: "Arreglo Fúnebre 8",
    description: "",
    price: "$125.000",
    image: "./assets/img/arreglosfunebres/8.jpeg"
  },
  {
    title: "Arreglo Fúnebre 9",
    description: "",
    price: "$96.000",
    image: "./assets/img/arreglosfunebres/9.jpeg"
  },
  {
    title: "Arreglo Fúnebre 10",
    description: "",
    price: "$89.000",
    image: "./assets/img/arreglosfunebres/10.jpeg"
  },
  {
    title: "Arreglo Fúnebre 11",
    description: "",
    price: "$65.000",
    image: "./assets/img/arreglosfunebres/11.jpeg"
  },
  {
    title: "Arreglo Fúnebre 12",
    description: "",
    price: "Desde $88.000",
    image: "./assets/img/arreglosfunebres/12.jpeg"
  },
  {
    title: "Arreglo Fúnebre 13",
    description: "",
    price: "$85.000",
    image: "./assets/img/arreglosfunebres/13.jpeg"
  },
  {
    title: "Arreglo Fúnebre 14",
    description: "",
    price: "$70.000",
    image: "./assets/img/arreglosfunebres/14.jpeg"
  },
  {
    title: "Arreglo Fúnebre 15",
    description: "",
    price: "$92.000",
    image: "./assets/img/arreglosfunebres/15.jpeg"
  },
  {
    title: "Arreglo Fúnebre 16",
    description: "",
    price: "$100.000",
    image: "./assets/img/arreglosfunebres/16.jpeg"
  },
  {
    title: "Arreglo Fúnebre 16",
    description: "",
    price: "$100.000",
    image: "./assets/img/arreglosfunebres/16.jpeg"
  },
  {
    title: "Arreglo Fúnebre 17",
    description: "",
    price: "$90.000",
    image: "./assets/img/arreglosfunebres/17.jpeg"
  },
  {
    title: "Arreglo Fúnebre 18",
    description: "",
    price: "$130.000",
    image: "./assets/img/arreglosfunebres/18.jpeg"
  },
  {
    title: "Arreglo Fúnebre 19",
    description: "",
    price: "$60.000",
    image: "./assets/img/arreglosfunebres/19.jpeg"
  },
  {
    title: "Arreglo Fúnebre 20",
    description: "",
    price: "70.000",
    image: "./assets/img/arreglosfunebres/20.jpeg"
  },
  {
    title: "Arreglo Fúnebre 21",
    description: "",
    price: "$50.000",
    image: "./assets/img/arreglosfunebres/21.jpeg"
  },
  {
    title: "Arreglo Fúnebre 22",
    description: "",
    price: "$90.000",
    image: "./assets/img/arreglosfunebres/22.jpeg"
  },
  {
    title: "Arreglo Fúnebre 23",
    description: "",
    price: "$75.000",
    image: "./assets/img/arreglosfunebres/23.jpeg"
  },
  {
    title: "Arreglo Fúnebre 24",
    description: "",
    price: "$35.000",
    image: "./assets/img/arreglosfunebres/24.jpeg"
  },
  // Puedes agregar más arreglos fúnebres aquí
];

// Funcíon para generar las cards
function generateFuneralCards() {
  const container = document.getElementById('funeral-arrangements-container');

  funeralArrangements.forEach(arrangement => {
    const paymentLink = `pago.html?title=${encodeURIComponent(arrangement.title)}&price=${encodeURIComponent(arrangement.price)}&image=${encodeURIComponent(arrangement.image)}`;

    const card = `
      <div class="col-6 col-md-4 col-lg-2 d-flex justify-content-center">
        <div class="card">
          <img src="${arrangement.image}" class="card-img-top im" alt="${arrangement.title}">
          <div class="card-body">
            <h5 class="card-title tituloc">${arrangement.title}</h5>
            <div class="d-flex justify-content-center align-items-center">
              <p class="card-text roboto-medium">${arrangement.price}</p>
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
// <p class="card-text txt-gris mb-0">${arrangement.description}</p>


// Ejecutamos la función al cargar la página
document.addEventListener('DOMContentLoaded', generateFuneralCards);