
gsap.to(".dot" , {
    y : -60,

    stagger : {
        each: 0.2,
        repeat: -1,
        yoyo: true,

    }

})


gsap.to(".shadow" , {
    y : 60,
    stagger : {
        each: 0.2,
        repeat: -1,
        yoyo: true,
    },
    opacity : 0.1,

}) 


// Simulation d'un faux temps de chargement de 5 secondes
setTimeout(function() {
    
    window.location.href = "profil-adnam.html";
}, 3000); 
