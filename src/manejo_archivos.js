import * as fs from 'fs';

export const escribirArchivo = () => {
    let contenido = 
    `{
        "nombre": "Eduardo",
        "apellido": "Leal",
        "edad": 22,
        "salario": 4000,
        "activo": true
    }`;
    const path = "./data/";
    const nombreArchivo = "Persona.json";
    fs.writeFileSync(path+nombreArchivo, contenido, (error) =>{
        if (error) console.log(error);
        console.log("El archivo " + nombreArchivo + " Se creo correctamente");
     })
}

export const leerArchivo = ()=>{
    const path = "./data/";
    const nombreArchivo = "Persona.json";
    const data = fs.readFileSync(path+nombreArchivo, 'utf-8');
    console.log(data);

}