import { Eficiencia, Motor } from "./Motor"; 

export class M_electrico extends Motor {
    //id:string;string no deberia ponerse ya que hereda el ID directo del motor que se fabrico. aca solo se le coloca sus propiedades
    private voltaje:string;
    private consumoKwH:number;
    private isBajoConsumo: boolean;

    constructor(id:string,potenciaHP:number,eficiencia:Eficiencia,fabricante:string,voltaje:string,consumoKwH:number,isBajoConsumo:boolean){
        //constructor con parametros de la clase padre Motor y de la clase M_electrico
        super(id,potenciaHP,eficiencia,fabricante)//"parametros de la clase padre Motor"
        this.voltaje=voltaje;
        this.consumoKwH=consumoKwH;
        this.isBajoConsumo=isBajoConsumo;
    }

        agregar_motorE(array:M_electrico[]){
            array.push(this)
        }
    
        leer_motorE(){
            console.log(`
            volteje: ${this.voltaje},
            consumo en Kw/H: ${this.consumoKwH}
            tipo de consumo: ${this.isBajoConsumo}
            `)
        }
    
        eliminar_motorE(array:M_electrico[]){
            let deleteMElectric:number= array.findIndex(element=> element===this)
            if(deleteMElectric){
                array.splice(deleteMElectric,1)
                console.log(`eñ motor electrico ${this.id} se ah eliminado`)
            }else{
                console.log("no se pudo eliminar motor electrico")
            }    
        }
    
        editar_motorE(voltaje:string,consumokw:number,ahorroEnergia:boolean){
            this.voltaje=voltaje;
            this.consumoKwH=consumokw;
            this.isBajoConsumo=ahorroEnergia;
        }


}