// 4- Generar una clase que maneje el club, 
//GestorClub, que deberá permitirnos la persistencia 
//de nuestros datos. Usaremos filesystem para crear un 
//archivo JSON donde guardaremos nuestros socios.
// Tambien usaremos el paquete readlineSync para 
//pedir por consola los datos que necesitamos de 
//nuestros socios.
// Debemos guardar 10 socios.

//5- Por ultimo implementar en la clase GestorClub, 
//4 funciones que filtren y/o encuentren en nuestro 
//archivo JSON algun dato que buscamos. Por ejemplo 
//buscar socios por nombre, por deporte, documento o 
//telefono.


//invovamos el require y readlineSync para pedir datos 
//por consola y podemos guardarlos en variables.
const fs= require('fs')//se importa libreria 'readline-sync' de node
const readlineSync= require('readline-sync')//funcion que pide datos por consola

import {Deportes, Jugador } from "./Jugador";

export default class GestorClub{

    
    constructor(){
        //con la funcion writeFileSync generamos un archivo,puede ser de varios tipos. 
        // no hace falta poner el formate UTF8 porque en 
        //este caso lo estoy escribiendo, el formato UTF8 lo voy a solicitar cuando lo quiera leer
        fs.writeFileSync('./socios.json','[]')
        //generamos el archivo 'socios'y que dato le vamos a mandar, en este caso un array vacio
    }
    
    //agregamos funciones para leer archivos, en este caso 'Socios'
    // read() {return fs.readFileSync('./socios.json')}
    
    //agregamos funcion que convierte de string a objeto[]
    //pudiendo utilizar todos los metodos de array
    data() {return JSON.parse(fs.readFileSync('./socios.json','utf8'))}
    // Toma el archivo 'socios.json' lo covierte en objeto de JS. Para poder manipularlo como un array.
    
    agregarSocio(){
        let nombre= readlineSync.question('Escriba su nombre de socio: ');
        let apellido= readlineSync.question('Escriba su apellido de socio: ');    
        let fechaDeNacimiento= readlineSync.question('Escriba su fecha de Nacimiento en formato YYYY/MM/DD: ');
        let documento= readlineSync.question('Escriba su documento: ');
        let telefono= readlineSync.question('Escriba su telefono de socio: ');
        //preguntar el deporte se usa KeyInSelect para que el usuario pueda elegir una opcion dada.
        //se crea un array el cual se le mostrara al usuario
        //y una variable en la cual se guarda la seleccion del usuario, la cual sera el subIndice del array +1. 
        let arrayDeporte:string[]= ['futball', 'basket', 'voley', 'tennis', 'handball', 'natacion', 'gym', 'paddle' , 'cuidich']
        let deporte= readlineSync.keyInSelect(arrayDeporte,'Seleccione el deporte que realiza: ');
        
        //creamos un nuevo socio para guardar los datos
        let nuevoSocio:Jugador= new Jugador(nombre,apellido,fechaDeNacimiento,Number(documento),Number(telefono),deporte)
        
        
        //agrego socio existentes y ademas agrego el nuevo
        let socios:Deportes[]=[...this.data(), nuevoSocio]; //socio van a ser todos los socios!!
        //...spread Operator: Muestra el contenido del tipo de datos que le pacemos. En este caso un Array. Se agrega el 'newSocio'.
        //los 3 putnos van para que vea todo lo que hay detro del array(todos los objetos)
        
        fs.writeFileSync('./socios.json', JSON.stringify(socios, null, 2));
        // Pasa los datos a Formato JSON. Parametro (archivo, reemplazo de archivo, espacios en el archivo).
        //con stringify lo paso a string, los parametros que le paso son: 
        //lo que quiero pasar(en este caso los socios del array) o sea el valor,
        //null es porque no quiero remplazar nada, 
        //y el 2 es el espacio entre objeto y objeto(es la unidad mas usada) 
    }

    buscarSocioXNombre() {
        let foundName = readlineSync.question('Escriba Nombre del Socio que desea buscar: ');
        if(foundName){
            let nombre =[...this.data()];
            let found= nombre.filter((socio)=>socio.nombre===foundName)
            console.log(`el nombre ${foundName} fue encontrado: `,found)
        }else{
            console.log(`el nombre ${foundName} NO fue encontrado`)
        }
    }
    
    buscarSocioXApellido() {
        let foundLastName: string  = readlineSync.question('Escriba el apellido del Socio que desea buscar: ');
        if(foundLastName){
            const apellidoEncontrado= [...this.data()].filter((socio) => socio.apellido === foundLastName);
            console.log(`El apellido '${foundLastName}' se encuentra en la base de datos: `,apellidoEncontrado);
        }else{
            console.log(`El apellido '${foundLastName}' NO se encontro en la base de datos`)
        }
    }
    
    buscaDocumento(){
        let FoundDNI:number= Number(readlineSync.question('Escriba el DNI del socio a buscar: '))
        if(FoundDNI){
            const DniEncontrado = [...this.data()].find((socio)=>socio.documento === FoundDNI)
            console.log(`el DNI '${FoundDNI}' se encuentra en la base de datos: `,DniEncontrado)   
        }else{
            console.log(`el DNI '${FoundDNI}' NO se encontro en la base de datos`)
        }
    }
    
    buscaTelefono(){
        let foundTEL:number= Number(readlineSync.question('Escriba el N° de telefono del socio: '))
        if(foundTEL){
            const TelEncontrado = [...this.data()].find((socio)=>socio.telefono===foundTEL)   
            console.log(`el telefono ${foundTEL} se encuentra en la base de datos: `,TelEncontrado)
        }else{
            console.log(`el telefono ${foundTEL} NO se encontro en la base de datos`)
        }
    }
    buscarXDeporte(){
        let foundDeporte= readlineSync.question('ingrese el deporte a buscar: ');
        if(foundDeporte){
            if(Deportes.futball===foundDeporte){
                const searchDeport= [...this.data()].filter((socio)=>socio.deporte=== 0);
                console.log(`los socios que practican '${foundDeporte}' son: `,searchDeport)
            }
            if(Deportes.basket===foundDeporte){
                const searchDeport= [...this.data()].filter((socio)=>socio.deporte=== 1);
                console.log(`los socios que practican '${foundDeporte}' son: `,searchDeport)
            }
            if(Deportes.voley===foundDeporte){
                const searchDeport= [...this.data()].filter((socio)=>socio.deporte=== 2);
                console.log(`los socios que practican '${foundDeporte}' son: `,searchDeport);
            }
            if(Deportes.tennis===foundDeporte){
                const searchDeport= [...this.data()].filter((socio)=>socio.deporte=== 3);
                console.log(`los socios que practican '${foundDeporte}' son: `,searchDeport)
            }
            if(Deportes.handball===foundDeporte){
                const searchDeport= [...this.data()].filter((socio)=>socio.deporte=== 4);
                console.log(`los socios que practican '${foundDeporte}' son: `,searchDeport)
            }
            if(Deportes.natacion===foundDeporte){
                const searchDeport= [...this.data()].filter((socio)=>socio.deporte=== 5);
                console.log(`los socios que practican '${foundDeporte}' son: `,searchDeport)
            }
            if(Deportes.gym===foundDeporte){
                const searchDeport= [...this.data()].filter((socio)=>socio.deporte=== 6);
                console.log(`los socios que practican '${foundDeporte}' son: `,searchDeport)
            }
            if(Deportes.paddle===foundDeporte){
                const searchDeport= [...this.data()].filter((socio)=>socio.deporte=== 7);
                console.log(`los socios que practican '${foundDeporte}' son: `,searchDeport)
            }
            if(Deportes.cuidich===foundDeporte){
                const searchDeport= [...this.data()].filter((socio)=>socio.deporte=== 8);
                console.log(`los socios que practican '${foundDeporte}' son: `,searchDeport)
            }
        }

    }
    deleteSocio(){
        let FoundDNI:number= Number(readlineSync.question('Ingrese el DNI del socio a ELIMINAR: '))
        let index:number=this.data().length;
        if(index){
            const deleteSocio = [...this.data()].indexOf((socio: { documento: number; })=>socio.documento === FoundDNI)
            if(deleteSocio>=0)
            this.data().splice(deleteSocio,1)
            console.log(`el DNI '${FoundDNI}' se borro de la  base de datos: `)   
        }else{
            console.log(`el DNI '${FoundDNI}' NO se encontro en la base de datos`)
        }
        index--
    }       

    


};