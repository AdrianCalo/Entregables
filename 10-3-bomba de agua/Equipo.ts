//import * as fs from "fs";
import { Bomba } from "./Bomba";
import { Kit_Mangueras } from "./Kit_mangueras";
import { M_combustible } from "./M_combustible";
import { M_electrico } from "./M_electrico";
import { Motor } from "./Motor";


export class Equipo {
    protected id:string;
    private descripcion:string;
    private fechaFabricacion:Date;
    private fechaInstalacion:Date;
    private bomba:Bomba;
    private manguera:Kit_Mangueras;
    private motor:(M_combustible|M_electrico)

    constructor (id:string,descripcion:string,fechaFabricacion:Date,fechaInstalacion:Date,bomba:Bomba,manguera:Kit_Mangueras,motor:(M_combustible|M_electrico)){
        this.id=id;
        this.descripcion=descripcion;
        this.fechaFabricacion=fechaFabricacion;
        this.fechaInstalacion=fechaInstalacion;
        this.bomba=bomba;
        this.manguera=manguera;
        this.motor=motor;
    }

    //operaciones crud
    agregar_equipo(array:Equipo[],) {
        array.push(this)
            console.log(`un nuevo equipo a sido aderido`)
        }
        
    

    leer_equipo(){
        console.log(`
        ID: ${this.id},
        Descripcion:${this.descripcion},
        Fecha de fabricaciion:${this.fechaFabricacion},
        Fecha de instalacion: ${this.fechaInstalacion},
        Bomba:${this.bomba},
        kit de mangueras:${this.manguera},
        Motor: ${this.motor}
        `)       
    }

    eliminar_equipo(id:string,equipo:Equipo[]){
        let index:number= equipo.length;
        let borraEquipo:number;
        if(index){
            borraEquipo=equipo.findIndex(elemento=>elemento.id===id)
            if(borraEquipo>=0){
                equipo.splice(borraEquipo,1);
                console.log(`el equipo con n° ID ${id} a sido eliminado`)
            }
            index--;
        }

    }
    
    editar_equipo(id:string,descripcion:string,Fabricacion:Date,instalacion:Date,bomba:Bomba,manguera:Kit_Mangueras,motor:(M_combustible|M_electrico)){
        this.id=id;
        this.descripcion=descripcion;
        this.fechaFabricacion=Fabricacion;
        this.fechaInstalacion=instalacion;
        this.bomba=bomba;
        this.manguera=manguera;
        this.motor=motor;
    }

}