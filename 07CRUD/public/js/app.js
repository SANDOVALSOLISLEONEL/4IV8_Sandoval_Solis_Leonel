//lo primero que necesitamos es obtener cada uno de los parametros del formulario
const formUsuario = document.getElementById('form-usuario');
const inputid = document.getElementById('usuario-id');
const inputmonbre = document.getElementById('nombre');
const inputfecha = document.getElementById('fecha-nacimiento');
const inputnota = document.getElementById('nota');
const inputtitulo = document.getElementById('form-titulo');
const btnguardar = document.getElementById('btn-guardar');
const btncancelar = document.getElementById('btn-guardar');
const tbodyusuarios = document.getElementById('tbody-usuario');
const tablausuarios = document.getElementById('tabla-usuarios');
const mensajecargar = document.getElementById('mensaje-carga');
const mensajevacio = document.getElementById('mensaje-vacio');
const notificacionDiv = document.getElementById('notificacion');
//elemtos para errores
const errornombre = document.getElementById('error-nombre');
const errorfecha = document.getElementById('error-fecha');
const errornota = document.getElementById('error-nota');

//vamos a crear una api para poder atender las peticiones por parte del cliente hacia un servidor

const API_URL = '/api/usuarios';

//por defecto recordemos que el metodo get sirve para obtener los datos de todos los usuarios select * from usuarios

async function cargarusuarios() {
    try(
//vamos a utilizar una funcion llamada fetch la cual realiza una peticion http por defecto d¿mediante el metodo gat, mientras que al ser una funcion asincrona,  espera(await) que la peticion se complete antes de continuar
    )
    const respuesta = await fetch(API_URL);
    //si responde ok el codigo nod da un estado 200 a 299
    if(!respuesta.ok){
        //hay un error
        throw new error ('error al cargar usuarios');
        //tenemos que pintar los datos
        renderizarTabla(usuarios);
    }catch(error){
        console.log('error:' , error);
        mostrarNotificacion('error al cargar los uauarios, ', 'error:');

    }
}