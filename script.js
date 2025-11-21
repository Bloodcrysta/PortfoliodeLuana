// Datos de ejemplo: puedes personalizar cada texto según tu obra
const textosTrabajos = {
    "Isla del tesoro.jpg": {
        titulo: "Isla del Tesoro",
        texto: "Este proyecto explora el concepto de aventura y misterio. El proceso incluyó bocetos a mano, vectorización y una paleta dorada inspirada en mapas antiguos."
    },
    "Italiano.jpg": {
        titulo: "Italiano",
        texto: "Diseño inspirado en la cultura italiana. Se trabajó con tonos cálidos, composición tipográfica y elementos que evocan la tradición mediterránea."
    },
    "Mascara.jpg": {
        titulo: "Máscara",
        texto: "Ilustración digital que combina elementos teatrales y simbología onírica. Se usó mezcla de pinceles texturizados y luz ambiental dramática."
    }
};
/* ============================
      CARRUSEL PRINCIPAL
============================ */


const track = document.querySelector('.mockup-track');
const slides = Array.from(document.querySelectorAll('.mockup-slide'));
let currentIndex = 0;


const prevBtn = document.querySelector('.mockup-prev');
const nextBtn = document.querySelector('.mockup-next');


/* Mover carrusel */
function updateCarousel() {
  track.style.transform = `translateX(-${currentIndex * 100}%)`;
}


prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
  updateCarousel();
});


nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
  updateCarousel();
});




/* ============================
          MODAL MOCKUPS
============================ */


const modal = document.getElementById('mockup-modal');
const modalImg = document.querySelector('.mockup-modal-img');
const modalPrev = document.querySelector('.mockup-prev-modal');
const modalNext = document.querySelector('.mockup-next-modal');
const modalClose = document.querySelector('.mockup-close');
const modalBg = document.querySelector('.mockup-modal-bg');


/* Abrir modal al hacer clic en imagen */
slides.forEach((slide, index) => {
  slide.addEventListener('click', () => {
    modal.style.display = "flex";
    currentIndex = index;
    modalImg.src = slide.querySelector('img').src;
  });
});


/* Navegar dentro del modal */
function updateModal() {
  modalImg.src = slides[currentIndex].querySelector('img').src;
}


modalPrev.addEventListener('click', () => {
  currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
  updateModal();
});


modalNext.addEventListener('click', () => {
  currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
  updateModal();
});


/* Cerrar modal */
modalClose.addEventListener('click', () => {
  modal.style.display = "none";
});


modalBg.addEventListener('click', () => {
  modal.style.display = "none";
});




/* ============================
        MODAL TROQUEL
============================ */


const troquelModal = document.getElementById('troquel-modal');
const troquelImg = document.querySelector('.troquel-modal-img');
const troquelPrev = document.querySelector('.troquel-prev');
const troquelNext = document.querySelector('.troquel-next');
const troquelClose = document.querySelector('.troquel-close');
const troquelBg = document.querySelector('.troquel-modal-bg');


/* Para abrir el modal troquel (si vos usás botones o imágenes específicas)
   Debés agregar algo como:


document.querySelector('#imagen-troquel').addEventListener('click', () => {
  troquelModal.style.display = "flex";
  troquelImg.src = "ruta_de_tu_troquel.png";
});


*/




troquelPrev.addEventListener('click', () => {
  // lógica propia si tenés más imágenes de troquel
});


troquelNext.addEventListener('click', () => {
  // lógica propia si tenés más imágenes de troquel
});


troquelClose.addEventListener('click', () => {
  troquelModal.style.display = "none";
});


troquelBg.addEventListener('click', () => {
  troquelModal.style.display = "none";
});

/* ============================
    CARRUSEL SOBRE MI
============================ */

const aboutTrack = document.querySelector('.about-track');
const aboutSlides = Array.from(document.querySelectorAll('.about-slide'));

let aboutIndex = 0;

const aboutPrev = document.querySelector('.about-prev');
const aboutNext = document.querySelector('.about-next');

function updateAbout() {
  aboutTrack.style.transform = `translateX(-${aboutIndex * 100}%)`;
}

aboutPrev.addEventListener('click', () => {
  aboutIndex = (aboutIndex === 0) ? aboutSlides.length - 1 : aboutIndex - 1;
  updateAbout();
});

aboutNext.addEventListener('click', () => {
  aboutIndex = (aboutIndex === aboutSlides.length - 1) ? 0 : aboutIndex + 1;
  updateAbout();
});
