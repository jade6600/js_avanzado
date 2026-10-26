//Importa el módulo nativo http de la biblioteca estándar de Node.js //
const http = require('node:http');


const hostname = '127.0.0.1';
const port = 3000;

/*Crea e inicializa una nueva instancia de servidor HTTP */
const server = http.createServer((req, res) => {
  
  /*Define el código de estado HTTP en 200
   indicando que la solicitud fue procesada con éxito  */
  res.statusCode = 200;
  
  /*Configura la cabecera HTTP de la respuesta
El tipo MIME text/plain le informa al navegador
que el contenido recibido debe interpretarse como texto sin formato*/
  res.setHeader('Content-Type', 'text/plain');
  
  /*Envía el cuerpo del mensaje (Hello, World!\n) 
  al cliente solicitante y cierra formalmente la conexión HTTP*/
  res.end('Hello, World!\n');
});

//Activa el servidor para empezar a escuchar en el host y puerto definidos//
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});