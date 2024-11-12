function afficherEmail(nom, prenom, num, email, message) {
    let contact = "mattheo.raud@ynov.com";
    let subject = "Premier Contact";
    let body = message;
    let mailto = `mailto:${contact}?subject=${subject}&body=Bonjour,%0A%0A$${encodeURIComponent(body)}%0A%0ABien Cordialement%0A%0A${nom} ${prenom}%0A%0A${num}`;
    window.location.href = mailto;
}


function script() {
    let contactForm = document.getElementById("contactForm");
    document.getElementById("btnEnvoyerMail").addEventListener("click", (event) => {
        event.preventDefault();
        let nom = document.getElementById("nom").value;
        let prenom = document.getElementById("prenom").value;
        let num = document.getElementById("num").value;
        let email = document.getElementById("email").value;
        let message = document.getElementById("message").value;
        afficherEmail(nom, prenom, num, email, message);
    });
}

script();
