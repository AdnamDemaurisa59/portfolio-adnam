"use strict";

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



// Fonction pour ouvrir l'application mail sur l'ordinateur, et récupérer les informations du formulaire

function afficherEmail(nom, prenom, num, email, sujet, message) {
    let contact = "adnam.kouddemaurisa@outlook.fr";
    
    // Corps du mail avec mise en forme verticale
    let body = `
Bonjour,

Nom : ${nom}

Prénom : ${prenom}

Numéro de téléphone : ${num}

Adresse e-mail : ${email}

Votre message ci-dessous :

${message}

Bien cordialement,
${nom} ${prenom}
    `.trim();

    // Remplacement des sauts de ligne par %0A pour mailto
    let formattedBody = body.replace(/\n/g, "%0A");

    // Construction du lien mailto avec le sujet choisi par l'utilisateur
    let mailto = `mailto:${contact}?subject=${encodeURIComponent(sujet)}&body=${formattedBody}`;

   window.location.href = mailto;

   setTimeout(() => {
    window.location.href = "confirmation.html";
}, 1000);
}

// Script pour gérer l'envoi via le formulaire
function script() {
    document.getElementById("btnEnvoyerMail").addEventListener("click", (event) => {
        event.preventDefault();
        
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

        afficherEmail(nom, prenom, num, email, sujet, message);
    });
}

script();



//Code pour valider le formulaire de contact
document.addEventListener('DOMContentLoaded', () => {
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



// ----------------------------Code pour laisser un commentaire et noter le portfolio--------------------------------------------------------
 document.addEventListener('DOMContentLoaded', function() {
    const stars = document.querySelectorAll('.comment-form .stars .star');

    // Lorsque l'étoile est cliquée
    stars.forEach(star => {
        star.addEventListener('click', function() {
            const ratingValue = this.dataset.value;
            const starsContainer = this.parentNode;
            starsContainer.dataset.rating = ratingValue;
            updateRatingValue(starsContainer);
            activateStars(starsContainer, ratingValue);
        });
    });

    // Fonction pour mettre à jour la valeur de notation
    function updateRatingValue(container) {
        const rating = container.dataset.rating;
        const ratingValueElement = container.nextElementSibling;
        ratingValueElement.textContent = `${rating} / 5`;
    }

    // Fonction pour activer les étoiles
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



// Code pour valider l'envoie du formulaire de commentaire & notation du portfolio
function afficherNotation(ratingNotation, commentaire) {
    let contactNotation = "adnam.kouddemaurisa@outlook.fr";
    let subjectNotation = "Notation du portfolio";

    // Corps du mail avec mise en forme verticale
    let bodyNotation = `
Bonjour,

La note du portfolio est de : ${ratingNotation} / 5

Votre commentaire ci-dessous : 
    
${commentaire}

Bien cordialement,
    `.trim();

    // Remplacement des sauts de ligne par %0A pour mailto
    let formattedBodyNotation = bodyNotation.replace(/\n/g, "%0A");

      // Construction du lien mailto
      let mailtoNotation = `mailto:${contactNotation}?subject=${encodeURIComponent(subjectNotation)}&body=${formattedBodyNotation}`;
      
      window.location.href = mailtoNotation;

   setTimeout(() => {
    window.location.href = "../html/notation.html";
}, 1000);
}

// Script pour gérer l'envoi du formulaire de commentaire & notation
function scriptNotation() {
    document.getElementById("btnEnvoyerNotation").addEventListener("click", (event) => {
        event.preventDefault();
        
        // Permet de récupérer la valeur du commentaire
        let commentaire = document.getElementById("commentaire").value.trim();
        
        // Permet de récupérer la valeur de la notation
        let ratingValueNotation = document.querySelector('.comment-form #stars').dataset.rating;

        // Vérifie que le commentaire ou la notation du portfolio soit rempli
        if (!ratingValueNotation || !commentaire) {
            alert("Veuillez donnez votre avis pour mon portfolio(mettre un commentaire, ou laisser une note) ! Votre avis est important pour moi. 😁");
            return;
        }

        afficherNotation(ratingValueNotation, commentaire);
    });
}

scriptNotation();
