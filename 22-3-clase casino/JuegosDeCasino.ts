export class JuegosDeCasino {
    
    private nombre:string;
    private IsTipoCarta:boolean;
    private descripcion:string;
    private ApuestaMin$: number;
    private Crupier:boolean;
    private CantDeJugadores:number;

    constructor(nombre:string,IsTipoCarta:boolean,descripcion:string,ApuestaMin$:number,Crupier:boolean,CantDeJugadores:number){
        this.nombre=nombre;
        this.IsTipoCarta=IsTipoCarta;
        this.descripcion=descripcion;
        this.ApuestaMin$=ApuestaMin$;
        this.Crupier=Crupier;
        this.CantDeJugadores=CantDeJugadores;
    }
}