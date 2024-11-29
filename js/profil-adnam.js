


// Code pour l'envoi de mail
function afficherEmail(nom, prenom, num, email, message) {
    let contact = "adnam.kouddemaurisa@outlook.fr";
    let subject = "1er Contact";
    let body = message;
    let mailto = `mailto:${contact}?subject=${subject}&body=Bonjour,%0A%0A$${encodeURIComponent(body)}%0A%0ABien Cordialement%0A%0A${nom} ${prenom}%0A%0A${num}`;
    window.location.href = mailto;
}


// Code pour le formulaire de contact
// function script() {
//     let contactForm = document.getElementById("contactForm");
//     document.getElementById("btnEnvoyerMail").addEventListener("click", (event) => {
//         event.preventDefault();
//         let nom = document.getElementById("nom").value;
//         let prenom = document.getElementById("prenom").value;
//         let num = document.getElementById("num").value;
//         let email = document.getElementById("email").value;
//         let message = document.getElementById("message").value;
//         afficherEmail(nom, prenom, num, email, message);
//     });
// }

// script();


//Code pour valider le formulaire de contact
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.contact-form');
    const nameInput = form.querySelector('input[name="name"]');
    const prenomInput = form.querySelector('input[name="prenom"]');
    const telInput = form.querySelector('input[name="tel"]');
    const emailInput = form.querySelector('input[name="email"]');
    const messageTextarea = form.querySelector('textarea[name="message"]');
    const emailPattern = /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    
    form.addEventListener('submit', (e) => {
        let isValid = true;
        
        if (nameInput.value.trim() === '') {
            isValid = false;
            alert('Veuillez entrer votre nom.');
        }
        
        if (prenomInput.value.trim() === '') {
            isValid = false;
            alert('Veuillez entrer votre prénom.');
        }
        
        if (telInput.value.trim() === '') {
            isValid = false;
            alert('Veuillez entrer votre numéro de téléphone.');
        }
        
        if (!emailPattern.test(emailInput.value.trim())) {
            isValid = false;
            alert('Veuillez entrer une adresse email valide.');
        }
        
        if (messageTextarea.value.trim() === '') {
            isValid = false;
            alert('Veuillez entrer un message.');
        }
        
        if (!isValid) {
            e.preventDefault();
        }
    });
});


// Code pour le menu mobile
document.addEventListener('DOMContentLoaded', function() {

    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
    const closeNav = document.getElementById('close-nav');

    // Lorsque le bouton du menu est cliqué
    menuToggle.addEventListener('click', function() {
        mobileNav.classList.toggle('open');
        menuToggle.classList.add('hidden');
    });

    // Lorsque le bouton de fermeture est cliqué
    closeNav.addEventListener('click', function() {
        mobileNav.classList.remove('open');
        menuToggle.classList.remove('hidden');
    });

    // Si un clic est fait en dehors du menu ouvert, cela ferme le menu
    document.addEventListener('click', function(event) {
        if (!menuToggle.contains(event.target) && !mobileNav.contains(event.target)) {
            if (mobileNav.classList.contains('open')) {
                mobileNav.classList.remove('open');
                menuToggle.classList.remove('hidden');
            }
        }
    });
});


// ----------------------------Code pour laisser un commentaire et noter le portfolio--------------------------------------------------------
 document.addEventListener('DOMContentLoaded', function() {
    const stars = document.querySelectorAll('.comment-form .stars .star');

    stars.forEach(star => {
        star.addEventListener('click', function() {
            const ratingValue = this.dataset.value;
            const starsContainer = this.parentNode;
            starsContainer.dataset.rating = ratingValue;
            updateRatingValue(starsContainer);
            activateStars(starsContainer, ratingValue);
        });
    });

    function updateRatingValue(container) {
        const rating = container.dataset.rating;
        const ratingValueElement = container.nextElementSibling;
        ratingValueElement.textContent = `${rating} / 5`;
    }

    function activateStars(starsContainer, ratingValue) {
        const stars = starsContainer.querySelectorAll('.star');
        stars.forEach(star => {
            const starValue = star.dataset.value;
            if (starValue <= ratingValue) {
                star.classList.add('active');
            } else {
                star.classList.remove('active');
            }
        });
    }
});