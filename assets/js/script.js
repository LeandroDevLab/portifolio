document.getElementById("menu-toggle").addEventListener("click", function() {
    document.getElementById("nav-menu").classList.toggle("active");
});


document.addEventListener("DOMContentLoaded", function () {
     const elementos = document.querySelectorAll(".texto");

    const observer = new IntersectionObserver((entradas) => {
        entradas.forEach((entrada) => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add("show");
            }
        });
    });
    
    elementos.forEach((elemento) => {
        observer.observe(elemento);
    });
});
