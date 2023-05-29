import { Eficiencia, Motor } from "./Motor";

export enum Combustible{
    nafta="nafta",gasoil="diesel"
}


export class M_combustible extends Motor{
    //id:string no deberia ponerse ya que hereda el ID directo del motor que se fabrico. aca solo se le coloca sus propiedades
    private cilindros:number;
    private tipoCombustible:Combustible

    constructor(id:string,potenciaHP:number,eficiencia:Eficiencia,fabricante:string,cilindros:number,tipoCombustible:Combustible){
        super(id,potenciaHP,eficiencia,fabricante)
        this.cilindros=cilindros;
        this.tipoCombustible=tipoCombustible
    }

    agregar_motorC(array:M_combustible[]){
        array.push(this)
    }

    leer_motorC(){
        console.log(`
        cantidad de cilindros:${this.cilindros}
        tipo de combitible:${this.tipoCombustible}
        `)
    }

    eliminar_motorC(array:M_combustible[]){
        let deleteMotorC:number=array.findIndex(Element=>Element===this);
        if(deleteMotorC){
            array.splice(deleteMotorC,1)
            console.log(`el motor de combustion ${this.id} se ah eliminado de la base de dato`)
        }else{
            console.log("no se a podidio eliminar el motor a combustion")
        }
    }

    editar_motorC(cilindros:number,tipoCombustible:Combustible){
        this.cilindros=cilindros;
        this.tipoCombustible=tipoCombustible;
    }

}