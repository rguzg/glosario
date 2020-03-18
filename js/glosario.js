sessionStorage.setItem('userType', 'moderador');
// Movimiento entre templates, quitar el folder glosario/templates cuando esté en producción :)

$('#definicionCompleta').click(() => { 
    
    window.location.href = '/glosario/templates/palabra.html';
    
});

//Agregar las opciones, según el tipo de usuario a la sidebar
$(() => {
    
    let tipoUsuario = sessionStorage.getItem("userType");
    let contenedorBotones = document.querySelector('#sidebarButtons');

    contenedorBotones.appendChild(nuevoBotonSidebar(texto = 'Inicio', htmlTarget = 'glosario.html', icono = 'fa-home'));

    if (tipoUsuario == 'moderador') {
    
        contenedorBotones.appendChild(nuevoBotonSidebar(texto = 'Agregar palabras', htmlTarget = 'agregarPalabra.html'));
        contenedorBotones.appendChild(nuevoBotonSidebar(texto = 'Palabras por aprobar', htmlTarget = '#'));
        contenedorBotones.appendChild(nuevoBotonSidebar(texto = 'Palabras reportadas', htmlTarget = 'reportadas.html'));
        contenedorBotones.appendChild(nuevoBotonSidebar(texto = 'Fotos por aprobar', htmlTarget = '#'));
        contenedorBotones.appendChild(nuevoBotonSidebar(texto = 'Fotos reportadas', htmlTarget = '#'));
        

    } else {

        contenedorBotones.appendChild(nuevoBotonSidebar(texto = 'Información', htmlTarget = '#'));

    }

});

//Función para generar los botones de la sidebar
function nuevoBotonSidebar(texto, htmlTarget, icono = "fa-info-circle", ){

    let nuevoBoton = document.createElement('button');
    let clasesBoton = ["btn", "navbarButton", "mb-2"];
    let clasesIcono = ["fas", icono, "mr-2"];

    let contenedorIcono = document.createElement('i');
    let textoBoton = document.createElement('span');

    //Verificación de si este botón tendrá la clase selected
    if (document.body.getAttribute('data-opcionMenu') == texto) {
       
        clasesBoton.push('selected');

    }

    // Agregar clases al botón y al contenedor del Icono:
    nuevoBoton.classList.add(...clasesBoton);
    contenedorIcono.classList.add(...clasesIcono);
    
    nuevoBoton.appendChild(contenedorIcono);

    // Agregar texto del botón
    textoBoton.innerHTML = texto;
    nuevoBoton.appendChild(textoBoton);

    //Agregar evento onclick al boton
    nuevoBoton.addEventListener('click', () =>{

        window.location.href = `${htmlTarget}`;

    });

    return nuevoBoton;
}