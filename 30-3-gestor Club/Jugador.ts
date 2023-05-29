
// 3 - Debemos implementar nuestra clase abstracta, para eso generaremos una clase 
// llamada Jugador, que extiende nuestra clase MiembroClub.
// Lo unico que debemos agregarle a esta nueva clase es un deporte.
// Con enum generaremos un listado de deportes: futbol, basket, zumba, voley, natacion, gym.

export enum Deportes { futball='futboll', basket='basket', voley='voley', tennis='tenns', handball='handball', natacion='natacion', gym='gym', paddle='paddle' , cuidich='cuidich'}

import MiembroClub from "./AbstractMiembroClub";

export class Jugador extends MiembroClub{
    private deporte: Deportes;

    constructor(nombre:string,apellido:string,fechaDeNacimiento:string,documento:number,telefono:number,deporte:Deportes){
        super(nombre,apellido,fechaDeNacimiento,documento,telefono)
        
        this.deporte=deporte;
    }
}

