//Esto se reemplazará con un axios en el futuro
$(function () {
    
    nuevoResultadoImagenModerador(1, 'aprobar', 'Palabra', "http://placekitten.com/200/110");
    nuevoResultadoImagenModerador(1, 'aprobar', 'Palabra', "http://placekitten.com/200/110");
    nuevoResultadoImagenModerador(1, 'aprobar', 'Palabra', "http://placekitten.com/200/110");

});

//Función para generar los resultados de un moderador
function nuevoResultadoImagenModerador(id, tipoResultado, palabra, pais){

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

// function mostrarPanelLateral(){

//     let cambiarAnchura = () => {

//         let resultados = document.querySelector('#contenedorResultados');
//         if(resultados.dataset.panellateral == "false"){

//             resultados.classList.replace('col-12','col-8');
//             resultados.dataset.panelLateral = "true";

//         }

//     };

//     cambiarAnchura();

//     let panelLateral = document.querySelector('.panelLateral');
//     panelLateral.classList.add('activo');

//     //Eventualmente aquí iran los AXIOS para traer los datos que van a ir en el panel lateral


// }