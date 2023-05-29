//Importacion de la interfas Personas.
import Personas from "./interfacePersonas";
//Creacion de la Clase Alumnos de la cual se implementa la interfas Personas.
export default class Alumnos implements Personas {
    nombre: string;
    apellido: string;
    dni: number;
    fechaNacimiento: string;
    matricula: number;
    modalidad: string;   
    materias: {};
    promedio: number;
    profesores: {};

    constructor(nombre: string, apellido: string, dni: number, fechaNacimiento: string, matricula: number, modalidad: string, materias: {}, promedio: number, profesores: {}) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.fechaNacimiento = fechaNacimiento;
        this.matricula = matricula;
        this.modalidad = modalidad;
        this.materias = materias;
        this.promedio = promedio;
        this.profesores = profesores;
    }   
}

