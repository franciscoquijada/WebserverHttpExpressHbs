const express = require('express');
const app = express();

//Sirviendo una pagina estatica con express
app.use(express.static(__dirname + '/public'));
 
/*app.get('/', function (req, res) {
    const salida = {
        nombre: 'francisco',
        apellido: 'quijada',
        url: req.url
    };
    res.send(salida);
});*/
 
app.listen(8002, ()=>{
    console.log("Escuchando en el puerto 8002");
});