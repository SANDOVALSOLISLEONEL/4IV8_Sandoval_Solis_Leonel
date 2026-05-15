//primero necesitamos crear un servidor para la aplicacion y ahi mismo crear nuestra base de datos
/*
//este es el modulo nativo para cualquier servidor
const http = require('http');
//modulo para leer los archivos del sistema
const fs = require('fs');
//el modulo para la ruta aidentificar el archivos
const path = require('path');
//el modulo nativo para extraer parametros
const url = require('url');
//este modulo lo tenemos que descargar con el comando
const mysql = require('mysql2');
const { error } = require('console');
//configurar el servidor
const port = process.env.port || 3000;
//vamos a conectarnos a la base de datos
const pool = mysql.createPool({
    hostname: 'localhost',
    user: 'SandovalSolisLeonel',
    password: 'lss070909',
    database: 'pnt_practica1',
    waitforconnections: true,
    connectionlimit: 10,
    queuelimit: 0
});
//debemos configurar los tipos de archivos que seran aceptados
const MIME_TYPES = {
    'html' : 'text/html; charset=utf-8',
    'css' : 'text/css; charset=utf-8',
    'js' : 'application/javascript; charset=utf-8',
    'json' : ' application/json; charset=utf-8',
    'png' : 'image/png',
    'jpg' : 'image/jpeg',
    'icon' : 'image/x-icon'
}
//esta funcion se encargara de leer los archivos en la carpeta public y los envia al navegador

function servirArchivoEstatico(req, res){
//si la url es '/' servimos a index.html
let filePath = req.url === '/'?'/index.html':req.url;
const fullPath = path.join(__dirname, 'public', filePath);
const ext = path.extname(fullPath);
const mimeType = MIME_TYPES[ext];
if(!mimeType){
    res.writehead(404, {'content-type' : 'text/plain:charset=utf-8'});
    res.end('archivo no encontrado');
    return;
}
//leemos el archivo cuando si existe
fs.readFile(fullPath, (error, contenido)=>{
    if(error){
        res.writehead(404, {'content-type' : 'text/plain:charset=utf-8'});
    res.end('archivo no encontrado');
    
    }else{
        res.writehead(200, {'content-type' : mimeType});
        res.end(contenido);
    }
});
}

//debo crear una promesa de coneccion
const db = pool.promise();
//esto nos permite escibir codigo asincrono que tendra un tiempo de espera para conectarse procesarse y dar una respuesta

//debemos de atender cada unsa de las peticiones que vengan por parte de la carpeta de public
function leerbody(req){
    return new Promise((resolve, reject) => {
        let body = '';
        //nosotros vamos a tener un evento que se dispara cada vez que llega un pedaso de los datos
        req.on('data', (chunk) => {
            body += chunk.toString();
            if(body.length > 1e6){
                req.destroy();
                reject(new Error('body demasiado grande'));
            }
        });
        //el evento end se dispara cunado todos los datos han llegado
        req.on('end', ()=>{
            try{
                resolve(JSON.parse(body));
            }catch(e){
                reject(new Error ('json invalido'))
            }
        });
        req.on('error', reject);
    });
}

//este elemento nos sirve para dar respuestas
function enviarJSON(res, statusCode, data) {
    res.writeHead(statusCode, {'Content-Type': 'application/json; charset=utf-8'});
    res.end(JSON.stringify(data));
}

//recibir toas las peticiones por parte del servidor get post put delete
const server = http.createServer(async (req, res) => {
//tenemos que pasear la url
    const parseUrl = url.parse(req.url, true );
    const pathname = parse.url.pathname;
    const method = req.method;

    //imprimir en eol log cada peticion
    console.log('[${new Date().toLocatetimeString()}] ${method}$ {pathname}');

    //aqui tenemod que progar cada peticion que se vaya a realizar por parte del usuario
    //si la url no coincide con ninguna de las rutas de la api intentar servir un archivo estatico
    servirArchivoEstatico(req, res);
});

//inicializamos el servidor
server.listen(port, () => {
    console.log('servidor inicializado en el puerto:' + port);
    console.log('para salir preciona crtl + c');
})

*/

const express = require('express');
const mysql = require('mysql2/promise');
const path = require('path');

const app = express(), PORT = process.env.PORT || 3000;

const db = mysql.createPool({
    host: 'localhost',
    user: 'SandovalSolisLeonel',
    password: 'lss070909',
    database: 'pnt_practica1'
});

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () =>
    console.log(`Servidor iniciado en http://localhost:${PORT}`));