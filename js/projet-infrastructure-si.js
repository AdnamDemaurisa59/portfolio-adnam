

// Sélection de tous les éléments avec la classe ".circle"
gsap.to(".circle", {
   
    y: 450,

    
    backgroundColor: "",
    
    duration: 1,
    
    stagger: {
        
        each: 0.1,
        
        repeat: 5,
        
        yoyo: "true",
        
    }
});


// Sélection de tous les éléments avec la classe ".circle"
const circles = gsap.utils.toArray('.circle');

// Définition de l'animation principale
gsap.to(circles, {
    duration: 1,
    repeat: 4, // 5 répétitions au total

    physics2D: {
        velocity: 300,
        gravity: 500
    },
    
        onComplete: () => {
        gsap.to([circles[0], circles[1], circles[2], circles[3]], {
            duration: 3,
            x: -600,
            opacity: 0
        });

        gsap.to([circles[6], circles[7], circles[8]], {
            duration: 3,
            x: 600,
            opacity: 0
        });  

        // Affichage des éléments "circle5" et "circle6"
        gsap.to([circles[4], circles[5]], {
            duration: 3,
            y: 250,
            ease: "0.2",
            onStart: () => {
                // Affichage des éléments en CSS
                circles[4].style.display = 'block';
                circles[5].style.display = 'block';
            },
        });
    }
});
