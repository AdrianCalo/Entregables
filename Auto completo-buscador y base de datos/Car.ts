export class Car{
    
    protected marca:string;
    protected model:string;
    protected engine:string;
    protected año: string;

    constructor(marca:string,model:string,engine:string,año:string){
        this.marca=marca;
        this.model=model;
        this.engine=engine;
        this.año=año;
    }
    }