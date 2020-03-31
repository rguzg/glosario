$('#relacionarPalabra').click(function (e) { 
    
    $('#modalRelacionarPalabra').modal('show');

});

$('#reportarPalabra').click(function (e) { 
    
    $('#modalReportarPalabra').modal('show');

});

$('#reportarImagen').click(function (e) { 
    
    $('#modalReportarImagen').modal('show');

});

$('#sugerirImagen').click(function (e) { 
    
    $('#modalSugerirImagen').modal('show');

});

$('#editarInformacion').click(function (e) { 
    
    $('#modalEditarInformacion').modal('show');

});

$('#cambiarContraseña').click(function (e) { 
    
    $('#modalCambiarContraseña').modal('show');

});

// Modales React
function reportarPalabraOpenModal() {
    // Abre el modal a través de la variable modalReportarPalabra
    // en el archivo modales.js de public
    window.window.modalReportarPalabra()
}

function relacionarPalabraOpenModal(){
    // Abre el modal a través de la variable modalRelacionarPalabra
    // en el archivo modales.js de public
    window.modalRelacionarPalabra() 
}

var modalRelacionarPalabra = ()=>{
    $(function(){
        $('#modalRelacionarPalabra').modal('show');
    })
}

var modalReportarPalabra = ()=>{
    $(function(){
         $('#modalReportarPalabra').modal('show');
    })
}


// Inicio de nuevas funciones
function reportarImagenOpenModal(){
    // Abre el modal a través de la variable modalReportarImagen
    // en el archivo modales.js de public
    window.modalReportarImagen()

}

function sugerirImagenOpenModal(){
    // Abre el modal a través de la variable modalSugerirImagen
    // en el archivo modales.js de public
    window.modalSugerirImagen()

}

function editarInfomacionOpenModal(){
    // Abre el modal a través de la variable modalEditarInformacion
    // en el archivo modales.js de public
    window.modalEditarInformacion()

}

function cambiarContraseñaOpenModal(){
    // Abre el modal a través de la variable modalCambiarContraseña
    // en el archivo modales.js de public
    window.modalCambiarContraseña()

}

function cerrarCualquierModal(modal_id){

    window.cerrarModal(modal_id);

}

var modalReportarImagen = () => {
    $(function (e) { 
        $('#modalReportarImagen').modal('show');
    })
};

var modalSugerirImagen = () => {
    $(function (e) { 
        $('#modalSugerirImagen').modal('show');
    })
};

var modalEditarInformacion = () => {
    $(function (e) { 
        $('#modalEditarInformacion').modal('show');
    })
};

var modalCambiarContraseña = () => {
    $(function (e) { 
        $('#modalCambiarContraseña').modal('show');
    })
};

var cerrarModal = (modal_id) => {

    $(function (e) { 
        $(`#${modal_id}`).modal('hide');
    })

}