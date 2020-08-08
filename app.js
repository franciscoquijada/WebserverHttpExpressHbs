const http = require('http');

http.createServer((req, res) => {
    //Defino que la respuesta sera un json
    res.writeHead(200, {'Content-type': 'application/json'});
    const salida = {
        nombre: 'francisco',
        apellido: 'quijada',
        url: req.url
    }
    res.write(JSON.stringify(salida));
    res.end();
}).listen(8002);

console.log('Escuchando puerto 8002');