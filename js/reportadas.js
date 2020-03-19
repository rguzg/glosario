//Esto se reemplazará con un axios en el futuro
$(function () {
    
    nuevoResultadoModerador(1, 'reporte', 'Palabra', "It's hot, it's mean, summer, to me Green grass, won't last, sky blue, me too Helicopter flying over shark bait, shark bite", "Mexico");

});

//Función para generar los resultados de un moderador
function nuevoResultadoModerador(id, tipoResultado, palabra, descripcion, pais){

    let contenedorResultados = document.querySelector('#resultados');

    //Creación del contenedor de resultados
    let resultadoModerador = document.createElement('div');

    resultadoModerador.classList.add(...['resultadoModerador', 'borde']);
    resultadoModerador.dataset.id = id;

    //Creación de la barra lateral
    let barraLateral = document.createElement('div');
    barraLateral.classList.add(...['h-100', tipoResultado == 'reporte' ? 'reporte': 'aprobar']);
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
    contenedorImagen.classList.add(...['h-100','pt-2','ml-2']);

    let imagen = document.createElement('img');
    imagen.setAttribute('src', pais);

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


}