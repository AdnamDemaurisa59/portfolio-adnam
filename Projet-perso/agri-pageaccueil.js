
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const images = document.querySelectorAll('.carousel-images img');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let currentIndex = 0;

    // Afficher l'image numéro 1 par défaut
    images[0].classList.add('active');

    // Fonction pour afficher l'image suivante
    function nextImage() {
        images[currentIndex].classList.remove('active');
        currentIndex++;
        if (currentIndex >= images.length) {
            currentIndex = 0;
        }
        images[currentIndex].classList.add('active');
    }

    // Fonction pour afficher l'image précédente
    function prevImage() {
        images[currentIndex].classList.remove('active');
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = images.length - 1;
        }
        images[currentIndex].classList.add('active');
    }

    // Événement de clic sur les boutons de navigation
    nextButton.addEventListener('click', nextImage);
    prevButton.addEventListener('click', prevImage);
});
