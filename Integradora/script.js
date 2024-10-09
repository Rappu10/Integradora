// Asegurarse de que el DOM esté completamente cargado antes de ejecutar el script
document.addEventListener('DOMContentLoaded', function () {

    const menuIcon = document.getElementById('menu-icon');
    const menu = document.getElementById('menu');
    let menuOpen = false; // Variable para controlar si el menú está abierto o cerrado

    // Mostrar el menú al pasar el cursor sobre el icono
    menuIcon.addEventListener('mouseover', function () {
        if (!menuOpen) { // Si el menú no está abierto, lo mostramos
            menu.classList.add('active');
        }
    });

    // Ocultar el menú al quitar el cursor del icono (solo si no está abierto)
    menuIcon.addEventListener('mouseout', function () {
        if (!menuOpen) { // Si el menú no está abierto, lo ocultamos
            menu.classList.remove('active');
        }
    });

    // Alternar el estado del menú (abrir/cerrar) al hacer clic en el icono
    menuIcon.addEventListener('click', function () {
        menuOpen = !menuOpen; // Alternar el valor de `menuOpen`
        if (menuOpen) {
            menu.classList.add('active');
        } else {
            menu.classList.remove('active');
        }
    });

    // Asegurarse de que el menú no se cierre cuando el cursor esté sobre el menú
    menu.addEventListener('mouseover', function () {
        if (!menuOpen) {
            menu.classList.add('active');
        }
    });

    // Ocultar el menú si el cursor sale del área del menú (solo si no está abierto)
    menu.addEventListener('mouseout', function () {
        if (!menuOpen) { // Solo lo cerramos si el menú no está fijado abierto
            menu.classList.remove('active');
        }
    });

    // Validación de formulario de cotización
    document.getElementById('cotizacionForm').addEventListener('submit', function(e) {
        e.preventDefault();

        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const mensaje = document.getElementById('mensaje').value;

        if (nombre && email && mensaje) {
            alert('Gracias, ' + nombre + '. Hemos recibido tu solicitud y nos pondremos en contacto contigo pronto.');
            this.reset(); // Reiniciar el formulario después de enviarlo.
        } else {
            alert('Por favor, completa todos los campos.');
        }
    });

});

