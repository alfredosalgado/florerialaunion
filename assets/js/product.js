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
    price: "$19.000",
    image: "./assets/img/arreglos/34.jpeg"
  },
  {
    title: "35.- Caja de corazón llena de detalles románticos.",
    description: "",
    price: "$60.000",
    image: "./assets/img/arreglos/35.jpeg"
  },
  {
    title: "36.- Caja de corazones con 7 Girasoles y 20 rosas rojas",
    description: "",
    price: "$90.000",
    image: "./assets/img/arreglos/36.jpeg"
  },
  {
    title: "37.- Caja de Corazon San Valentin",
    description: "",
    price: "$75.000",
    image: "./assets/img/arreglos/37.jpeg"
  },
  {
    title: "38.- Caja floral de rosas rojas",
    description: "",
    price: "$75.000",
    image: "./assets/img/arreglos/38.jpeg"
  },
  {
    title: "39.- Arreglo",
    description: "",
    price: "$88.000",
    image: "./assets/img/arreglos/39.jpeg"
  },
  {
    title: "40.- Ramo de Rosas rosadas + Girasol + Gibson.",
    description: "",
    price: "$64.000",
    image: "./assets/img/arreglos/40.jpeg"
  },
  {
    title: "41.- Arreglo floral de rosas surtidas + Girasoles",
    description: "",
    price: "$64.000",
    image: "./assets/img/arreglos/41.jpeg"
  },
  {
    title: "42.- Ramo de rosas amarillas + Gibson blancas",
    description: "",
    price: "$80.000",
    image: "./assets/img/arreglos/42.jpeg"
  },
  {
    title: "43.- Arreglo",
    description: "",
    price: "$190.000",
    image: "./assets/img/arreglos/43.jpeg"
  },
  {
    title: "44.- Arreglo",
    description: "",
    price: "$40.000",
    image: "./assets/img/arreglos/44.jpeg"
  },
  {
    title: "45.- Arreglo",
    description: "",
    price: "$190.000",
    image: "./assets/img/arreglos/45.jpeg"
  },
  {
    title: "46.- Ramo de Buchón San Valentín",
    description: "",
    price: "$200.000",
    image: "./assets/img/arreglos/46.jpeg"
  },
  {
    title: "47.- Arreglos floral con chocolate",
    description: "",
    price: "$70.000",
    image: "./assets/img/arreglos/47.jpeg"
  },
  {
    title: "48.- Canasto surtido Rosas y Lilium",
    description: "",
    price: "$78.000",
    image: "./assets/img/arreglos/48.jpeg"
  },
  {
    title: "49.- Ramo surtido Rosas Lilium + Claveles",
    description: "",
    price: "$95.000",
    image: "./assets/img/arreglos/49.jpeg"
  },
  {
    title: "50.- Pecera con Hortensias + Maule + Gerberas",
    description: "",
    price: "$80.000",
    image: "./assets/img/arreglos/50.jpeg"
  },
  {
    title: "51.- Flores Amarillas + Gibson",
    description: "",
    price: "$28.000",
    image: "./assets/img/arreglos/51.jpeg"
  },
  {
    title: "52.- Docenas de Rosas amarillas + Gibson",
    description: "",
    price: "$38.000",
    image: "./assets/img/arreglos/52.jpeg"
  },
  {
    title: "53.- Pie de Urna",
    description: "",
    price: "$35.000",
    image: "./assets/img/arreglos/53.jpeg"
  },
  {
    title: "54.- Rosas blancas + Gibson",
    description: "",
    price: "$35.000",
    image: "./assets/img/arreglos/54.jpeg"
  },
  {
    title: "55.- Pie de Urna",
    description: "",
    price: "$35.000",
    image: "./assets/img/arreglos/55.jpeg"
  },
  {
    title: "56.- Rosas amarillas + Girasol + Gibson",
    description: "",
    price: "$38.000",
    image: "./assets/img/arreglos/56.jpeg"
  },
  {
    title: "57.- Hermoso ramo Rosas blancas",
    description: "",
    price: "$240.000",
    image: "./assets/img/arreglos/57.jpeg"
  },
  {
    title: "58.- Hermosa canasta de Flores",
    description: "",
    price: "$55.000",
    image: "./assets/img/arreglos/58.jpeg"
  },
  {
    title: "59.- Arreglo Floral",
    description: "",
    price: "$35.000",
    image: "./assets/img/arreglos/59.jpeg"
  },
  {
    title: "60.- Arreglo Floral de Rosas rosadas y Gibson",
    description: "",
    price: "$45.000",
    image: "./assets/img/arreglos/60.jpeg"
  },
  {
    title: "61.- Arreglo Floral de Rosas balncas y Gibson",
    description: "",
    price: "$19.000",
    image: "./assets/img/arreglos/61.jpeg"
  },
  {
    title: "62.- Arreglo Floral de Luisa morada y Crisantemo blanco",
    description: "",
    price: "$20.000",
    image: "./assets/img/arreglos/62.jpeg"
  },
  {
    title: "63.- Ramo de Girasoles + Gibson + Rosas rojas",
    description: "",
    price: "$30.000",
    image: "./assets/img/arreglos/63.jpeg"
  },
  {
    title: "64.- Rosas blancas y rosadas + Gibson",
    description: "",
    price: "$22.000",
    image: "./assets/img/arreglos/64.jpeg"
  },
  {
    title: "65.- Arreglo Florar de Rosas blancas y rojas",
    description: "",
    price: "$20.000",
    image: "./assets/img/arreglos/65.jpeg"
  },
  {
    title: "66.- Rosas rosadas + Gibson",
    description: "",
    price: "$30.000",
    image: "./assets/img/arreglos/66.jpeg"
  },
  {
    title: "67.- Rosas rojas + Eucalipto",
    description: "",
    price: "$60.000",
    image: "./assets/img/arreglos/67.jpeg"
  },
  {
    title: "68.- Rosas blancas + Gibson",
    description: "",
    price: "$60.000",
    image: "./assets/img/arreglos/68.jpeg"
  },
  {
    title: "69.- Cubre Urna Rosas + Lilium + Eucalipto",
    description: "",
    price: "$90.000",
    image: "./assets/img/arreglos/69.jpeg"
  },
  {
    title: "70.- Hermosa pecera con Tulipanes + Gibson",
    description: "",
    price: "$25.000",
    image: "./assets/img/arreglos/70.jpeg"
  },
  {
    title: "71.- Arreglo Tulipanes amarillos + Gibson y Rosa roja",
    description: "",
    price: "$25.000",
    image: "./assets/img/arreglos/71.jpeg"
  },
  {
    title: "72.- Arreglo Tulipanes amarillos ocasion especial",
    description: "",
    price: "$90.000",
    image: "./assets/img/arreglos/72.jpeg"
  },
  {
    title: "73.- Ramo Flores Amarillas + Gibson",
    description: "",
    price: "$19.000",
    image: "./assets/img/arreglos/73.jpeg"
  },
  {
    title: "74.- Arreglo Florar Manifestación de Amor",
    description: "",
    price: "$45.000",
    image: "./assets/img/arreglos/74.jpeg"
  },
  {
    title: "75.- Ramo de Lirios amarillos + Eucalipto",
    description: "",
    price: "$63.000",
    image: "./assets/img/arreglos/75.jpeg"
  },
  {
    title: "76.- Ramo de Girasoles acompañado de Gibson",
    description: "",
    price: "$17.990",
    image: "./assets/img/arreglos/76.jpeg"
  },
  {
    title: "77.- Tulipanes",
    description: "",
    price: "$45.000",
    image: "./assets/img/arreglos/77.jpeg"
  },
  {
    title: "78.- Tulipanes Amarillos",
    description: "",
    price: "$40.000",
    image: "./assets/img/arreglos/78.jpeg"
  },
  {
    title: "79.- Girasoles + Gibson",
    description: "",
    price: "$20.000",
    image: "./assets/img/arreglos/79.jpeg"
  },
  {
    title: "80.- Girasol principal",
    description: "",
    price: "$15.000",
    image: "./assets/img/arreglos/80.jpeg"
  },
  {
    title: "81.- Tulipanes",
    description: "",
    price: "$38.000",
    image: "./assets/img/arreglos/81.jpeg"
  },
  {
    title: "82.- Hermoso Ramo con 10 Tulipanes",
    description: "",
    price: "$32.000",
    image: "./assets/img/arreglos/82.jpeg"
  },
  {
    title: "83.- Ramo de Mano con Rosas, Lilium y Astromelia",
    description: "",
    price: "$24.000",
    image: "./assets/img/arreglos/83.jpeg"
  },
  {
    title: "84.- Hermoso Ramo con 10 Liciantus",
    description: "",
    price: "$28.000",
    image: "./assets/img/arreglos/84.jpeg"
  },
  {
    title: "85.- Ramo con 12 Rosas + Eucalipto y Statices",
    description: "",
    price: "$36.000",
    image: "./assets/img/arreglos/85.jpeg"
  },
  {
    title: "86.- Ramo con 20 Tulipanes",
    description: "",
    price: "$60.000",
    image: "./assets/img/arreglos/86.jpeg"
  },
  {
    title: "87.- Ramo de Ronusculos + Rosas + Liciantus + Claveles + Litium",
    description: "",
    price: "$45.000",
    image: "./assets/img/arreglos/87.jpeg"
  },
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
  // Agrega más productos aquí hasta completar los 20 productos
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
            <details class="item1">
              <summary class="item  text-center">Descripción:</summary>
              <div>
                <p class="card-text txt-gris mb-0 ctext">${product.description}</p>
              </div>
            </details>
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
