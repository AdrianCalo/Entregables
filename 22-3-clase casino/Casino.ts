import { JuegosDeCasino } from "./JuegosDeCasino";

export default class Casino {
    private nombre:string;
    private direccion:string;
    private HApertura:string;
    private Hcierre:string;
    private Hotel:boolean;
    private juegos:JuegosDeCasino[];

    constructor(nombre:string,direccion:string,HApertura:string,Hcierre:string,Hotel:boolean){
    
    this.nombre=nombre
    this.direccion=direccion;
    this.HApertura=HApertura;
    this.Hcierre=Hcierre;
    this.Hotel=Hotel
    this.juegos=[];
    }

    getInfo():Casino{
        return this;
    }

    setJuegos(Games:JuegosDeCasino){   
        this.juegos.push(Games);
    }
    
}