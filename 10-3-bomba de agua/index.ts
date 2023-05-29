import { Eficiencia, Motor } from "./Motor";
import { Equipo } from "./equipo";
import { Material, Kit_Mangueras } from "./Kit_mangueras";
import { Combustible, M_combustible } from "./M_combustible";
import { M_electrico } from "./M_electrico";
import { Bomba } from "./Bomba";


//se crean los array de cada dependencia 
const datos_equipo:Equipo[]=[]
const datos_motores:Motor[]=[]
const datos_MCombustion:M_combustible[]=[];
const datos_MElectrico:M_electrico[]=[];
const datos_kitMangueras:Kit_Mangueras[]=[];
const datos_bomba:Bomba[]=[];

//fechas de fabricacion e instalacion
let fechFabricacion:Date=new Date (2000,2,27);
let fechIns:Date=new Date (2023,3,15)

//creamos bomba,manguera y motor
let bomba01:Bomba=new Bomba("bomba1",200,350,'Motomel'); 
let bomba02:Bomba=new Bomba("bomba2",150,150,'zanella');

let manguera01:Kit_Mangueras=new Kit_Mangueras('mangera01',5,12.5,Material.aluminio);
let manguera02:Kit_Mangueras=new Kit_Mangueras('manguera02',3,1,Material.plastico)

let nuevoMotorC:M_combustible = new M_combustible('motor01',25,Eficiencia.A,"ford",4,Combustible.gasoil)
let nuevoMotorE:M_electrico=new M_electrico('motor02',13,Eficiencia.A,'philip',"220",150,true)



//en el ultimo parametro solo se puede seleccionar el tipo de motor(electrico o combustion, en este caso se uso combustion) 
let nuevoEquipo:Equipo= new Equipo("01",'apto para barcos',fechFabricacion,fechIns,bomba01,manguera01,nuevoMotorC);
let segundoequipo:Equipo=new Equipo('02','para piletas',fechFabricacion,fechIns,bomba02,manguera02,nuevoMotorE)

//agregamos equipos al array datosEquipo
 nuevoEquipo.agregar_equipo(datos_equipo);
 segundoequipo.agregar_equipo(datos_equipo);
 nuevoEquipo.agregar_equipo(datos_equipo);
//probamos eliminar un equipo del array
 nuevoEquipo.eliminar_equipo('01',datos_equipo);
//mostramos el array
 console.log(datos_equipo);
//probamos editar
 nuevoEquipo.editar_equipo('01','tanque sisterna',fechFabricacion,fechIns,bomba02,manguera02,nuevoMotorE)
//mostramos por pantalla el cambio
console.log(datos_equipo)
