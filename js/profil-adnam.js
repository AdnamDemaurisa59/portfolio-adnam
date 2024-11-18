
"use strict";

gsap.registerPlugin(ScrollTrigger) 

gsap.from( ".skills .box", {
    scrollTrigger : {
        trigger : ".skills .container-skills",
        toggleActions : "play reverse none reset",
        markers: true,
        start : "top 60%",
        end: "bottom 30%",

    },
    y: 100,
    opacity: 0,
    scale: 0,
    ease: "elastic.out(0.4, 0.15)",
    duration: 1,
    stagger: 0.5,

});

// gsap.to(".boxA", {
//     x: 935,
//     rotation: 360,
//     duration: 4,
//     toggleActions : "play reverse none reset",
// });

// gsap.to(".boxC", {
//     x: -935,
//     rotation: 360,
//     duration: 4,
//     toggleActions : "play reverse none reset",
// });

// gsap.to(".boxB", {
//     y: 50,
//     rotation: 360,
//     duration: 4,
//     toggleActions : "play reverse none reset", 
// })


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



// Code pour l'animation de la section de présentation

const firstPresentation = document.querySelector('.presentation');
const secondPresentation = document.querySelector('.presentation2');

// Ajoute un écouteur qui détecte la fin de l'animation de la première section
firstPresentation.addEventListener('animationend', () => {

    firstPresentation.style.transition = 'opacity 6s ease';
    firstPresentation.style.opacity = '0';

    // Attend la fin de la transition pour afficher la deuxième section
    setTimeout(() => {
        firstPresentation.style.display = 'none'; // Masque la première section
        secondPresentation.style.display = 'flex'; // Affiche la deuxième section
        secondPresentation.style.transition = 'opacity 6s ease';
        secondPresentation.style.opacity = '1';
    }, 5200);
});


// Code pour l'animation de la section PROJECTS - SCROLL + INTERSECTION OBSERVER - pour Ecran mobile
const projectCards = document.querySelectorAll(".carousel-inner div");

// Observateur pour la section PROJECTS
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Animation lorsque l'élément entre dans le viewport
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateX(0)';
            // Pour désactiver l'observation après l'animation :
            // observer.unobserve(entry.target);
        } else {
            // Animation inverse lorsque l'élément sort du viewport
            entry.target.style.opacity = '0';
            entry.target.style.transform = 'translateX(-20px)';
        }
    });
}, {
    root: null, 
    threshold: 0.5 
});


// Vérifie si l'écran est un écran mobile
const isMobile = window.matchMedia("(max-width: 750px)");

// Fonction permettant d'ajouter les cartes au gestionnaire d'observation
function handleCardsOnMobile() {
    // const isMobile = window.matchMedia("(max-width: 750px)");
    const projectCards = document.querySelectorAll(".project-card");
    if (isMobile.matches) { // Vérification si on est sur un écran mobile
        projectCards.forEach(card => {
            card.style.transition = "transform 0.5s, opacity 0.5s"; // Assure une transition
            // card.style.transform = 'translateX(20px)'; // Décalage
            observer.observe(card); // Ajoute la carte à l'observateur
        });
    }
    else {
        projectCards.forEach(card => {
            observer.unobserve(card); // Retire la carte de l'observateur
            card.style.opacity = "1"; // Assure qu'elles sont visibles
            card.style.transform = ""; // Supprime les transformations
        });
    }
}

// Appel la fonction au chargement de la page
handleCardsOnMobile();

// Ce code permet de détecter le redimensionnement
window.addEventListener("resize", handleCardsOnMobile);

// Ce code permet de détecter les changements dynamiques
isMobile.addEventListener("change", handleCardsOnMobile);