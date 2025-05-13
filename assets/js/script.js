let currentImageIndex = 0;
const images = [
  "assets/images/01.png",
  "assets/images/02.png",
  "assets/images/03.png",
  "assets/images/04.png",
  "assets/images/05.png",
  "assets/images/06.png",
  "assets/images/07.png"
];

// Funções de modal do jogo
document.addEventListener('DOMContentLoaded', function () {
  const botao = document.getElementById('hamburguer');
  const menuMobile = document.getElementById('menu-mobile');

  if (botao && menuMobile) {
    botao.addEventListener('click', function () {
      menuMobile.classList.toggle('hidden');
    });
  }

  const abrirModal = document.getElementById('abrirModal');
  const fecharModal = document.getElementById('fecharModal');
  const modal = document.getElementById('modalJogo');

  if (abrirModal && fecharModal && modal) {
    abrirModal.addEventListener('click', () => {
      modal.style.display = 'block';
    });

    fecharModal.addEventListener('click', () => {
      modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  }

  // GALERIA 
  const thumbs = document.querySelectorAll(".thumb");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  let currentIndex = 0;

  function showImage() {
    if (lightboxImg && thumbs.length) {
      lightboxImg.src = thumbs[currentIndex].src;
    }
  }

  function openLightbox(index) {
    if (lightbox) {
      currentIndex = index;
      lightbox.style.display = "block";
      showImage();
    }
  }

  function closeLightbox() {
    if (lightbox) {
      lightbox.style.display = "none";
    }
  }

  function changeImage(n) {
    if (thumbs.length) {
      currentIndex = (currentIndex + n + thumbs.length) % thumbs.length;
      showImage();
    }
  }

  if (lightbox) {
    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });
  }

  
  thumbs.forEach((thumb, index) => {
    thumb.addEventListener('click', () => openLightbox(index));
  });

  // Exporta as funções para poderem ser chamadas inline (se necessário)
  window.openLightbox = openLightbox;
  window.closeLightbox = closeLightbox;
  window.changeImage = changeImage;
});
