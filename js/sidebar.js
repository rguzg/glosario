$(document).ready(function () {

    $('#dismiss, .overlay').on('click', function () {

        // Quitar la sidebar y el overlay
        $('#sidebar').addClass('active');
        $('.overlay').removeClass('active');

        // Quitar botón de cerrar
        $('#dismiss').addClass('invisible');
        $('#dismiss').removeClass('visible');
        $('#sidebarCollapse').removeClass('invisible');
        $('#sidebarCollapse').addClass('visible');

    });

    $('#sidebarCollapse').on('click', function () {

        // Mostrar la sidebar y el overlay
        $('#sidebar').removeClass('active');
        $('.overlay').addClass('active');

        // Quitar menu de hamburguesa
        $('#dismiss').removeClass('invisible');
        $('#dismiss').addClass('visible');
        $('#sidebarCollapse').addClass('invisible');
        $('#sidebarCollapse').removeClass('visible');
    });
});