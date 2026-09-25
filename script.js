function mostrarMenu() {

    const menu = document.querySelector(".menu-links");

    menu.classList.toggle("activo");

}


const enlaces = document.querySelectorAll(".menu-links a");


enlaces.forEach(function(enlace) {

    enlace.addEventListener("click", function() {

        document
            .querySelector(".menu-links")
            .classList.remove("activo");

    });

});
