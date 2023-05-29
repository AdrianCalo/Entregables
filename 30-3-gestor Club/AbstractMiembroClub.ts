// 2- Generar una clase abstracta llamada MiembroClub, 
// que implemente la interface persona.
// Agregar a esta clase abstracta la variable: 
// miembroDesde que es de tipo string. Y representa la 
// fecha de alta del socio.
import Persona from "./InterfacePersona";

export default abstract class  MiembroClub implements Persona {
    nombre:string;
    apellido:string;
    fechaDeNacimiento:string;//YYYY/MM/DD
    documento:number;
    telefono:number;
    miembroDesde:string;

    constructor(nombre:string,apellido:string,fechaDeNacimiento:string,documento:number,telefono:number){
        this.nombre=nombre;
        this.apellido=apellido; 
        this.fechaDeNacimiento=new Date(fechaDeNacimiento).toLocaleDateString();
        this.documento=documento;
        this.telefono=telefono;
        //miembroDesde no se coloco en el constructor ya que no le pusimos tipo, 
        //sino directamente le passamos el valor new Date
        this.miembroDesde= new Date().toLocaleDateString();
    }
}