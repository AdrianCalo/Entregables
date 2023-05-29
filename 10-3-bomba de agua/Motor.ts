//import { Bomba } from "./Bomba";
//import { Kit_Mangueras } from "./Kit_mangueras";
//import { Equipo } from "./equipo";

export enum Eficiencia {//solo se exporta,se crea y se utiliza 
    A="A", B= "B", C= "C", D= "D", E= "E", F= "F"
}

export class Motor //extends Equipo {
    {protected id:string;
    private potenciaHP:number;
    private eficienia:Eficiencia;
    private fabricante:string;
    
    //en el constructor van "parametros de clase padre con sus tipos + "parametros de la sub clase Motor""
    constructor(id:string,potenciaHP:number, eficiencia:Eficiencia,fabricante:string){
           
        this.id=id;
        this.potenciaHP=potenciaHP;
        this.eficienia=eficiencia;
        this.fabricante=fabricante;
    }
    
    muestra_Motores(array:Motor[]){
        console.log(array)
    }

    agregar_motor(newMotor:Motor,array:Motor[]){
        if(array.push(newMotor)){
            console.log(`un nuevo mortor ${newMotor} ah sido agregado a la base de datos`)
        }else{
            console.log(`no se ah podido agregar un mortor a la base de datos`)
        }
    }

    leer_motor(){
        console.log(`
        id: ${this.id}
        Potencia HP: ${this.potenciaHP}
        Eficiencia.${this.eficienia}
        Fabricante: ${this.fabricante}`);
    }

    eliminar_motor(array:Motor[]){
        let motorEliminar:number= array.findIndex(elemento=>elemento===this)
        if(motorEliminar){
            array.splice(motorEliminar,1)
            console.log(`el motor ${this.id} a sido borrado`)
        }else{
            console.log('no se a eliminado ningun motor')
        }
    }

    editar_motor(potenciaHP:number,eficiencia:Eficiencia,fabricante:string){
        this.potenciaHP=potenciaHP;
        this.eficienia=eficiencia;
        this.fabricante=fabricante;
    }
}