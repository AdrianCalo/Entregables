import { JuegosDeCasino } from "./JuegosDeCasino";

export class Ruleta extends JuegosDeCasino{
    private TiempoApuesta:string;
    constructor(nombre:string,IsTipoCarta:boolean,descripcion:string,ApuestaMin$:number,Crupier:boolean,CantDeJugadores:number,TiempoApuesta:string){
        super(nombre,IsTipoCarta,descripcion,ApuestaMin$,Crupier,CantDeJugadores)
        this.TiempoApuesta=TiempoApuesta;
    }

    
    getInfo():Ruleta{
        return this;
    }
}