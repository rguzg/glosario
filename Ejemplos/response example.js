axios.defaults.baseURL = 'http://localhost';
axios.defaults.headers.common['Token'] = sessionStorage.getItem('Token');

let response = {
    "success": true,
    "results": [
        {
            "idUser": 1,
            "paisOrigen": 1,
            "nombreCompleto": "Juan",
            "email": "juan1@gmail.com",
            "password": "$2b$10$JlH64Jsmn9pY0KgP9jlqC.CxLG16fY57dxHfP1sWNNen1pAMoWdBK",
            "userType": "moderador",
            "fechaNac": "0000-00-00",
            "telefono": "4421133858",
            "sexo": "Hombre",
            "peticionesAceptadas": 0,
            "peticionesRechazadas": 0,
            "is_active": 1,
            "last_login": null
        }
    ],
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoxLCJub21icmVDb21wbGV0byI6Ikp1YW4iLCJlbWFpbCI6Imp1YW4xQGdtYWlsLmNvbSIsInVzZXJUeXBlIjoibW9kZXJhZG9yIiwicGFpc09yaWdlbiI6MX0sImlhdCI6MTU4MzUyMTE4MiwiZXhwIjoxNTgzNjkzOTgyfQ.BKQWmYA_UApmCq4-qMPPpLjUpGfPVxABSHBe0aI9khk"
};


function saveToken(tokenResponse){
    
    let {token} = response;
    token = "Token " + token;
    
    sessionStorage.setItem('Token', token);

}

const peticion = axios.create({
    timeout: 1000,
});

peticion.post('/',{
    
    'usuario': 'usuario',
    'password': 'password'
    
}).then((response) => {

    console.log(response);

});

peticion.get('/').then((response) => {

    console.log(response);

});