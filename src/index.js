import { escribirArchivo, leerArchivo } from "./manejo_archivos.js";

const archivoJson = async () => {

    await escribirArchivo();
    await leerArchivo();
}

archivoJson();