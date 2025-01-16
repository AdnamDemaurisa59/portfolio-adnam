"use strict";

// Fonction pour créer et ouvrir le mail
function afficherEmail(nom, prenom, num, email, sujet, message) {
    let contact = "adnam.kouddemaurisa@outlook.fr";
    
    // Corps du mail avec mise en forme verticale
    let body = `
Bonjour,

Nom : ${nom}
Prénom : ${prenom}
Numéro de téléphone : ${num}
Adresse e-mail : ${email}

Message :
${message}

Bien cordialement,
${nom} ${prenom}
    `.trim();

    // Remplacement des sauts de ligne par %0A pour mailto
    let formattedBody = body.replace(/\n/g, "%0A");

    // Construction du lien mailto avec le sujet choisi par l'utilisateur
    let mailto = `mailto:${contact}?subject=${encodeURIComponent(sujet)}&body=${formattedBody}`;
   // Ouvre le client de messagerie
   window.location.href = mailto;

   // Redirection vers la page de confirmation après un court délai
   setTimeout(() => {
    window.location.href = "confirmation.html";
}, 1000); // Délai d'une seconde pour s'assurer que le mailto est déclenché
}

// Script pour gérer l'envoi via le formulaire
function script() {
    document.getElementById("btnEnvoyerMail").addEventListener("click", (event) => {
        event.preventDefault(); // Empêche le rechargement de la page
        
        // Récupération des valeurs du formulaire
        let nom = document.getElementById("nom").value.trim();
        let prenom = document.getElementById("prenom").value.trim();
        let num = document.getElementById("num").value.trim();
        let email = document.getElementById("email").value.trim();
        let sujet = document.getElementById("sujet").value.trim();
        let message = document.getElementById("message").value.trim();

        // Vérification que tous les champs sont remplis
        if (!nom || !prenom || !num || !email || !sujet || !message) {
            alert("Tous les champs doivent être remplis !");
            return;
        }

        // Appel de la fonction pour envoyer l'email
        afficherEmail(nom, prenom, num, email, sujet, message);
    });
}

// Initialisation
script();



//Code pour valider le formulaire de contact
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.contact-form');
    const nameInput = document.querySelector('input[name="name"]');
    const prenomInput = document.querySelector('input[name="prenom"]');
    const telInput = document.querySelector('input[name="tel"]');
    const emailInput = document.querySelector('input[name="email"]');
    const messageTextarea = document.querySelector('textarea[name="message"]');
    const emailPattern = /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const submitButton = document.querySelector('.contact-form button[type="submit"]');
    
    submitButton.addEventListener('submit', (e) => {
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