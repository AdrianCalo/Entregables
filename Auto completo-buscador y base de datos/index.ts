import * as fs from 'fs'
import { Car } from './Car'
import { RegistroAutomotor }  from './RegistroAutomotor'

let agencia:[]= []; 

try{
    const data= fs.readFileSync("./BaseDatosAuto.json", "utf8");
    const jsonFile= JSON.parse(data);//.parse() convierte texto a objeto
    agencia=jsonFile.map((item:any)=>item);
}catch (error){
    let mensError= "no se ha podido acceder al Archivo"
    fs.writeFileSync("./error.txt",mensError,"utf8")
}
let ford=new Car('ford','falcon','3.6 nafta','1978')
let camioneta=new Car('Ford','renger','2.2 turbo disel',"2018");

const registro= new RegistroAutomotor;
//registro.consultar("falcon",agencia);
//registro.DarDeAlta(ford,agencia)
//registro.actualizar(agencia);
//borrar funciona( se le puede ingresar por modelo,marca,año, o motor)
//registro.borrar('renger',agencia)
//registro.borrar('renger',agencia)
//registro.borrar('renger',agencia)

//registro.Modifica('3.6 nafta',agencia,'3.2 nafta')
//funciona mal-me toma todo el objeto que contiene el parametro a cambiar y me lo modifiica por el dato ingresado
//en el caso de arriba me cambio tdo el objeto que contenia '3.6 nafta' y me lo cambio solo por
//'3.2 nafta'


//registro.DarDeAlta(ford,agencia);
registro.stock(agencia);


