import { JuegosDeCasino } from "./JuegosDeCasino";

export class BlackJack extends JuegosDeCasino{
    private TiposDeCartas:string;

    constructor(nombre:string,IsTipoCarta:boolean,descripcion:string,ApuestaMin$:number,Crupier:boolean,CantDeJugadores:number,TiposDeCartas:string){
        super(nombre,IsTipoCarta,descripcion,ApuestaMin$,Crupier,CantDeJugadores)
        this.TiposDeCartas=TiposDeCartas;
    }

    getInfo():BlackJack{
        return this;
    }
}