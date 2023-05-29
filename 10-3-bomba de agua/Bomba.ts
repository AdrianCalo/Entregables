export class Bomba{
    private id:string;
    private caudalEntrada:number;
    private caudalSalida:number;
    private fabricante:string;

    constructor(id:string,caudalEntrada:number,caudalSalida:number,fabricante:string){
        this.id=id;
        this.caudalEntrada=caudalEntrada;
        this.caudalSalida=caudalSalida;
        this.fabricante=fabricante;
    }

    agregar_bomba(array:Bomba[]){
      array.push(this)//palabra reservada this en este caso se usa como parametro para pushear todas "ESAS" las propiedades del constructor dentro del array
        console.log("la bomba a sido adherida a la base de datos")
    }


    leer_bomba(){
        console.log(`
        idBomba:${this.id},
        caudal de entrada:${this.caudalEntrada},
        caudal de salida:${this.caudalSalida},
        fabricante: ${this.fabricante}        
        `);
    }

    eliminar_bomba(array:Bomba[]){
        let deleteBomb:number=array.findIndex(elemento=> elemento.id===this.id);
        array.splice(deleteBomb,1)
    }

    editar_bomba(caudalEntrada:number,caudalSalida:number,fabricante:string){
        this.caudalEntrada=caudalEntrada;
        this.caudalSalida=caudalSalida;
        this.fabricante=fabricante;
    }
}