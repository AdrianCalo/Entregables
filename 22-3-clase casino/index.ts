import Casino from "./Casino";
//import { JuegosDeCasino } from "./JuegosDeCasino";
import { Ruleta } from "./Ruleta";
import { BlackJack} from "./SubClass-BlackJack";

let casino01= new Casino('The Big Game','AV Falsa 123,Juarez','15:00','08:00',true);
let ruleta01= new Ruleta('La ruleta rusa',false,'Azar',1000,true,8,'15 segundos');
let BlackJack01= new BlackJack('21 blackJack',true,'Azar con cartas',500,true,7,'poker')

console.log(casino01.getInfo());
casino01.setJuegos(ruleta01);
casino01.setJuegos(BlackJack01);
console.log(casino01.getInfo());
