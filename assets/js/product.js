// Archivo: product.js
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

// Número de WhatsApp para pedidos
const whatsappNumber = "56920700893";

// Array de productos
const products = [
  {
    title: "1.- Ramo de mano de lujo",
    description: "Diseñado con tres rosas rojas de alta calidad y un girasol impresionante, complementado con un toque de elegancia de Gibson.",
    price: "$18.000",
    image: "./assets/img/arreglos/1.jpeg"
  },
  {
    title: "2.- Ramo de mano sublime",
    description: "Compuesto por 2 rosas rojas de intensa pasión y un girasol radiante, complementado con un toque astral que evoca la belleza del universo.",
    price: "$15.000",
    image: "./assets/img/arreglos/2.jpeg"
  },
  {
    title: "3.- Ramo de mano en escalera",
    description: "Hermoso ramo de mano hecho en escalera con 5 rosas rojas más astromelia y Aster.",
    price: "$20.000",
    image: "./assets/img/arreglos/3.jpeg"
  },
  {
    title: "4.- Ramo de mano sorpresa",
    description: "Ramo de mano hecho con una rosa roja más un girasol y Aster, lindo detalle para sorprender un ser querido.",
    price: "$12.000",
    image: "./assets/img/arreglos/4.jpeg"
  },
  {
    title: "5.- Ramo de mano con 2 girasoles y Gibson",
    description: "Ramo alegre y vibrante ideal para alegrar cualquier día.",
    price: "$12.000",
    image: "./assets/img/arreglos/5.jpeg"
  },
  {
    title: "6.- Arreglo floral de lujo",
    description: "Combina la belleza etérea de tres rosas blancas con el aroma revitalizante del eucalipto, ideal para ocasiones especiales.",
    price: "$15.000",
    image: "./assets/img/arreglos/6.jpeg"
  },
  {
    title: "7.- Ramo 3 rosas rojas + tallos Maule y Aster",
    description: "Ramo de manos con 3 rosas rojas más 3 tallos de Maule y Aster de follaje con un toque de sofisticación.",
    price: "$15.000",
    image: "./assets/img/arreglos/7.jpeg"
  },
  {
    title: "8.- Ramo 4 Rosas Ross y Maule",
    description: "Ramo de mano con 4 rosas Ross y maule.",
    price: "$20.000",
    image: "./assets/img/arreglos/8.jpeg"
  },
  {
    title: "9.- Ramo 5 rosas rojas + lisianthus",
    description: "Ramo de mano con 5 rosas rojas más lisianthus.",
    price: "$25.000",
    image: "./assets/img/arreglos/9.jpeg"
  },
  {
    title: "10.- Arreglo Floral 7 rosas + girasoles",
    description: "Hermoso arreglo floral, 7 Rosas acompañado de un girasol expresa tu amor con éste lindo detalle.",
    price: "$30.000",
    image: "./assets/img/arreglos/10.jpeg"
  },
  {
    title: "11.- Arreglo floral Girasoles + Rosas + Aster",
    description: "Arreglo floral con 7 Girasoles 11 hermosas rosas y Aster amarillo.",
    price: "$55.000",
    image: "./assets/img/arreglos/11.jpeg"
  },
  {
    title: "12.- Arreglo floral Rosas + Girasoles + Gibson",
    description: "",
    price: "$48.000",
    image: "./assets/img/arreglos/12.jpeg"
  },
  {
    title: "13.- Arreglo floral 12 Rosas + Girasol + Eucaplito + Aster",
    description: "Arreglo floral con 12 Rosas acompañado de un girasol, eucalipto y Aster amarillo.",
    price: "$45.000",
    image: "./assets/img/arreglos/13.jpeg"
  },
  {
    title: "14.- Ramo 4 Rosas + Girasol + Aster",
    description: "Ramo con 4 Rosas y un girasol acompañado de Aster amarillo.",
    price: "$26.000",
    image: "./assets/img/arreglos/14.jpeg"
  },
  {
    title: "15.- Arreglo floral 7 Girasoles + 4 Rosas + Gibson",
    description: "Arreglo floral con 7 Girasoles acompañado de 4 Rosas y Gibson hermoso ramo regalo ideal.",
    price: "$45.000",
    image: "./assets/img/arreglos/15.jpeg"
  },
  {
    title: "16.- Ramo de Rosas + Gibson",
    description: "Ramo de rosas y Gibson sofisticación y elegancia.",
    price: "$66.000",
    image: "./assets/img/arreglos/16.jpeg"
  },
  {
    title: "17.- Rosas rosadas + Eucalipto",
    description: "Rosas rosadas, y  eucalipto un toque ternura y delicadeza.",
    price: "$66.000",
    image: "./assets/img/arreglos/17.jpeg"
  },
  {
    title: "18.- Docena Rosas rojas + Gibson",
    description: "Docena de rosas rojas con Gibson  hermoso regalo de cumpleaños.",
    price: "$47.000",
    image: "./assets/img/arreglos/18.jpeg"
  },
  {
    title: "19.- Ramo de rosas",
    description: "Hermoso ramo de Rosas.",
    price: "$46.000",
    image: "./assets/img/arreglos/19.jpeg"
  },
  {
    title: "20.- Ramo Rosas blancas + Rosa rosadas + Eucalipto",
    description: "Una  perfecta combinación de rosa blanca y Rosa  con eucalipto.",
    price: "$60.000",
    image: "./assets/img/arreglos/20.jpeg"
  },
  {
    title: "21.- Rosas azules + Gibson",
    description: "Rosas azules regalo perfecto para hombres acompañado de Gibson",
    price: "$50.000",
    image: "./assets/img/arreglos/21.jpeg"
  },
  {
    title: "22.- Ramo exclusivo de Amor y Pasión",
    description: "Descubre la belleza y el significado de este exclusivo ramo de rosas blancas y rojas. Las blancas simbolizan pureza y elegancia; las rojas, pasión y amor.",
    price: "$77.000",
    image: "./assets/img/arreglos/22.jpeg"
  },
  {
    title: "23.- Ramo de Rosas blancas",
    description: "Ramos de rosas blancas, 25 unidades ideal para bodas y aniversarios decoracion de oficinas y espacios.",
    price: "$70.000",
    image: "./assets/img/arreglos/23.jpeg"
  },
  {
    title: "24.- Rosas + Gibson",
    description: "Rosas y Gibson  14  unidades para bodas y  aniversario.",
    price: "$50.000",
    image: "./assets/img/arreglos/24.jpeg"
  },
  {
    title: "25.- Ramos para bodas",
    description: "",
    price: "$45.000",
    image: "./assets/img/arreglos/25.jpeg"
  },
  {
    title: "26.- Rosas rosadas + blancas + Eucalipto + Gibson",
    description: "",
    price: "$55.000",
    image: "./assets/img/arreglos/26.jpeg"
  },
  {
    title: "27.- Rosas blancas + rosadas + Gibson",
    description: "",
    price: "$60.000",
    image: "./assets/img/arreglos/27.jpeg"
  },
  {
    title: "28.- Rosas blancas + rosadas + Gibson",
    description: "",
    price: "$40.000",
    image: "./assets/img/arreglos/28.jpeg"
  },
  {
    title: "29.- Rosas blancas + Gibson rosadas",
    description: "Rosas blancas acompañas de Gibson rosadas.",
    price: "$70.000",
    image: "./assets/img/arreglos/29.jpeg"
  },
  {
    title: "30.- Ramo buchón Rosas blancas + rojas + chocolates Ferrero R.",
    description: "Ramo buchón con Rosas blancas y Rojas, chocolates Ferrero Roche. ideal para regalo de cumpleaños san Valentín fecha especial aniversario.",
    price: "$130.000",
    image: "./assets/img/arreglos/30.jpeg"
  },
  {
    title: "31.- Ramo buchón",
    description: "Ramo buchón con Rosas blancas y Rojas, chocolates Ferrero Roche. ideal para regalo de cumpleaños san Valentín fecha especial aniversario.",
    price: "$300.000",
    image: "./assets/img/arreglos/31.jpeg"
  },
  {
    title: "32.- Caja de Corazón 25 Rosas azules + Chocolates Ferrero R.",
    description: "Caja de corazón con 25 rosas azules frescas  de alta calidad  y chocolates Ferrero Rocher ideal para hombres.",
    price: "$185.000",
    image: "./assets/img/arreglos/32.jpeg"
  },
  {
    title: "33.- Arreglo",
    description: "",
    price: "$45.000",
    image: "./assets/img/arreglos/33.jpeg"
  },
  {
    title: "34.- Arreglo",
    description: "",
    price: "Desde $19.000",
    image: "./assets/img/arreglos/34.jpeg"
  },
  {
    title: "34.- Arreglo",
    description: "",
    price: "Desde $19.000",
    image: "./assets/img/arreglos/34.jpeg"
  },
  // Agrega más productos aquí hasta completar los 20 productos
];

// Funcíon para generar las cards
function generateCards() {
  const container = document.getElementById('product-container');

  products.forEach(product => {
    const paymentLink = `pago.html?title=${encodeURIComponent(product.title)}&price=${encodeURIComponent(product.price)}&image=${encodeURIComponent(product.image)}`;

    const card = `
      <div class="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
        <div class="card he">
          <img src="${product.image}" class="card-img-top im" alt="${product.title}">
          <div class="card-body">
            <h5 class="card-title titulocard tituloc">${product.title}</h5>
            <p class="card-text txt-gris mb-0 ctext">${product.description}</p>
            <hr>
            <div class="d-flex justify-content-between align-items-center hprice">
              <p class="card-text ps-3 roboto-medium">${product.price}</p>
              <a href="${paymentLink}" class="btn btn-whatsapp">
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
