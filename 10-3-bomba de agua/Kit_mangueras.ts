export enum Material{
    plastico="plastico", hierro="hierro", aluminio="aluminio"
}

export class Kit_Mangueras{
    private id:string;
    private elementos:number;
    private medidaPulgadas:number;
    private roscasMaterial: Material ;

    constructor(id:string,elementos:number,medidaPulgadas:number,roscasMaterial: Material){
        this.id=id;
        this.elementos=elementos;
        this.medidaPulgadas=medidaPulgadas;
        this.roscasMaterial=roscasMaterial;
    }
    agregar_kitM(array:Kit_Mangueras[]){
        array.push(this);
        console.log('el kit mangeras a sido adherido')
    }
    leer_kitM(){    
        console.log(`
        ID mangera:${this.id},
        elemento:${this.elementos},
        medida en pulgadas:${this.medidaPulgadas}
        material de rosca:${this.roscasMaterial}
        `)
    }
    eliminar_kitM(array:Kit_Mangueras[]){
        let deleteKit:number=array.findIndex(element=>element.id===this.id);
        if(deleteKit){
            array.splice(deleteKit,1)
            console.log(`se borro exitosamente el kit ${this.id} de la base de datos`)
        }else{
            console.log("no se encontro objeto a eliminar de la base de datos")
        }
    }

    editar_kitM(id:string,elementos:number,medidaPulgadas:number,roscasMaterial:Material){
        this.id=id;
        this.elementos=elementos;
        this.medidaPulgadas=medidaPulgadas;
        this.roscasMaterial=roscasMaterial;
    }

}