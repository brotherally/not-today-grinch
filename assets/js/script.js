
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

function openLightbox(index) {
  currentImageIndex = index;
  document.getElementById("lightbox").style.display = "block";
  document.getElementById("lightbox-img").src = images[index];
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

function changeImage(direction) {
  currentImageIndex += direction;
  if (currentImageIndex < 0) currentImageIndex = images.length - 1;
  if (currentImageIndex >= images.length) currentImageIndex = 0;
  document.getElementById("lightbox-img").src = images[currentImageIndex];
}
const abrirModal = document.getElementById('abrirModal');
const fecharModal = document.getElementById('fecharModal');
const modal = document.getElementById('modalJogo');

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
