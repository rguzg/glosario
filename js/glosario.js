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
    contenedorBotones.appendChild(nuevoBotonSidebar(texto = 'Sugerir palabra', htmlTarget = 'sugerirPalabra.html'));

    if (tipoUsuario == 'moderador') {
    
        contenedorBotones.appendChild(nuevoBotonSidebar(texto = 'Inicio Moderador', htmlTarget = 'inicio moderador.html', icono = 'fa-home'));
        contenedorBotones.appendChild(nuevoBotonSidebar(texto = 'Agregar palabras', htmlTarget = 'agregarPalabra.html'));
        contenedorBotones.appendChild(nuevoBotonSidebar(texto = 'Palabras por aprobar', htmlTarget = 'porAprobar.html'));
        contenedorBotones.appendChild(nuevoBotonSidebar(texto = 'Palabras reportadas', htmlTarget = 'reportadas.html'));
        contenedorBotones.appendChild(nuevoBotonSidebar(texto = 'Fotos por aprobar', htmlTarget = 'fotosPorAprobar.html'));
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

        window.location.href = htmlTarget;

    });

    return nuevoBoton;
}


//Función para generar los resultados de un moderador
function nuevoResultadoModerador(id, tipoResultado, palabra, descripcion, pais){

    let contenedorResultados = document.querySelector('#resultados');

    //Creación del contenedor de resultados
    let resultadoModerador = document.createElement('div');

    resultadoModerador.classList.add(...['resultadoModerador', 'borde']);
    resultadoModerador.dataset.id = id;

    //Creación de la barra lateral
    let barraLateral = document.createElement('div');
    barraLateral.classList.add(...['h-100', tipoResultado]);
    resultadoModerador.appendChild(barraLateral);

    //Creación del contenedor de la definición
    let contenido = document.createElement('div');
    contenido.classList.add('w-75');
    
    let titulo = document.createElement('h5');
    titulo.innerHTML = palabra;

    let definicion = document.createElement('span');
    definicion.classList.add('overflowThreeLines');
    definicion.innerHTML = descripcion;

    contenido.appendChild(titulo);
    contenido.appendChild(definicion);

    resultadoModerador.appendChild(contenido);

    //Creación del contenedor de la imagen del país
    let contenedorImagen = document.createElement('div');
    contenedorImagen.classList.add(...['h-100','pt-2']);

    let imagen = document.createElement('img');
    imagen.classList.add('bandera');
    imagen.setAttribute('src', `../banderas/${pais}.jpg`);

    contenedorImagen.appendChild(imagen);

    resultadoModerador.appendChild(contenedorImagen);

    //Añadir evento para hacer que aparezca el panel lateral
    resultadoModerador.addEventListener('click', () =>{

        mostrarPanelLateral();

    });

    contenedorResultados.appendChild(resultadoModerador);
    
}

function mostrarPanelLateral(){

    let cambiarAnchura = () => {

        let resultados = document.querySelector('#contenedorResultados');
        if(resultados.dataset.panellateral == "false"){

            resultados.classList.replace('col-12','col-8');
            resultados.dataset.panelLateral = "true";

        }

    };

    cambiarAnchura();

    let panelLateral = document.querySelector('.panelLateral');
    panelLateral.classList.add('activo');

    //Eventualmente aquí iran los AXIOS para traer los datos que van a ir en el panel lateral


}

//Función para generar los resultados de un moderador
function nuevaImagenModerador(id, tipoResultado, palabra, pais){

    let contenedorResultados = document.querySelector('#resultados');

    //Creación del contenedor de resultados
    let resultadoModerador = document.createElement('div');

    resultadoModerador.classList.add(...['resultadoModerador', 'borde']);
    resultadoModerador.dataset.id = id;

    //Creación de la barra lateral
    let barraLateral = document.createElement('div');
    barraLateral.classList.add(...['h-100', tipoResultado == 'reporte' ? 'reporte': 'aprobar']);
    resultadoModerador.appendChild(barraLateral);

    //Creación del contenedor de la imagen del país
    let contenedorImagen = document.createElement('div');
    contenedorImagen.classList.add(...['ml-2', 'mr-3','borde']);

    let imagen = document.createElement('img');
    imagen.setAttribute('src', pais);
    imagen.setAttribute('id', 'fotoPalabra');

    contenedorImagen.appendChild(imagen);

    resultadoModerador.appendChild(contenedorImagen);

    //Creación del contenedor de la definición
    let contenido = document.createElement('div');
    contenido.classList.add(...['w-75', 'mt-2']);
    
    let titulo = document.createElement('h5');
    titulo.innerHTML = palabra;

    let definicion = document.createElement('span');

    contenido.appendChild(titulo);

    resultadoModerador.appendChild(contenido);

    //Añadir evento para hacer que aparezca el panel lateral
    // resultadoModerador.addEventListener('click', () =>{

    //     mostrarPanelLateral();

    // });

    contenedorResultados.appendChild(resultadoModerador);
    
}
