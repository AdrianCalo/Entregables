// implementamos la clase RegistroAutomotor debe soportar → 

import { Car } from "./Car";
import * as fs from "fs";

//mostrar stock/consultar/borrar/actualziar/DarDeAlta
export class RegistroAutomotor{
    
    //const array:string[]=[];

    stock(array:Car[]){
        console.log(array)
    }
    
    consultar( auto:string,array:Car[]){ 
        let foundCar:Car[]= array.filter(elemento => (elemento['marca']=== auto) || (elemento['model']=== auto) || (elemento['engine']=== auto)||(elemento['año'] === auto));
        if(foundCar.length){
            console.log(`el vehiculo ${auto} ha sido encontrado`);
            console.log(foundCar);
            return foundCar;
        }else{
            console.log("no se encontro el tipo de vehiculo especificado")
        }
    }
    borrar(auto:string, array:Car[]){
        let deleteCar:number;
        let index:number=array.length;
        if(index){
            deleteCar=array.findIndex(elemento => (elemento['marca']=== auto) || (elemento['model']=== auto) || (elemento['engine']=== auto)||(elemento['año'] === auto));
           if(deleteCar>=0){
            array.splice(deleteCar,1)
            console.log(auto,'fue eliminado de la lista')
            console.log(array);
            }
        index--   
       }
    }
   
    Modifica(auto:string, array:Car[],dato:any){
        let modElemt:number;
        let index:number= array.length;
        if(index){
            modElemt=array.findIndex(elemento => (elemento['marca']=== auto) || (elemento['model']=== auto) || (elemento['engine']=== auto)||(elemento['año'] === auto));
           if(modElemt>=0){
            array[modElemt]=dato;
            console.log(`el vehiculo ${auto} a sido modificado por ${dato}`) 
        }else{
            console.log('no se a realizado ninguna modificacion');
        } 
       }
    }
   
    actualizar(array:Car[]){
        let newCar= JSON.stringify(array);// se cra una variable la cual tomara el vaor de los obejtos que estan en el array convirtiendolos a texto 
        fs.writeFileSync("./BaseDatosAuto.json",newCar,"utf8")
    }

    DarDeAlta(auto:Car, array:Car[]){
       if(auto){
        array.push(auto);
        console.log(`el auto ${auto["marca"]}, ${auto["model"]} ha sido agregado a la base de datos`)
       }
    }

}