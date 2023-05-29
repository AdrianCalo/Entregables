//Importacion de las clases.
//import { Console } from "console";
import Alumnos from "./claseAlumnos";
import Profesor from "./claseProfesores";

//Requirimiento del Modulo fileSystem y readLineSync
const fs = require('fs');
const readlineSync = require('readline-sync')

//Creacion de la clase RegistroColegio y su correspondiente exportacion por default.
export default class RegistroColegio {        
    //Constructor y metodo condicional que lee y crea (de ser necesario) el archivo JSON. Si no mantiene el existente.
    constructor() {
        if (fs.existsSync("./alumnos.json")) {
            } else {
            fs.writeFileSync("./alumnos.json", "utf-8");
        }
        if (fs.existsSync("./profesores.json")) {
            } else {
            fs.writeFileSync("./profesores.json", "utf-8")
        }    
    }

    //Lectura y conversion de archivo Json a Objeto de JavaScript, del archivo alumnos.
    read() { return fs.readlineSync('./alumnos.json') };
    data() { return JSON.parse(fs.readFileSync('./alumnos.json')) };

    //Lectura y conversion de archivo Json a Objeto de JavaScript, del archivo profesores.
    read2() { return fs.readlineSync('./profesores.json') };
    data2() { return JSON.parse(fs.readFileSync('./profesores.json')) };     
    
    //Menu de opciones de la consola que va preguntando los datos del alumno.
añadeAlumno() {
    const nombre = readlineSync.question('Ingrese nombre del alumno: ');
    const apellido = readlineSync.question('Ingrese apellido del alumno: ');
    const dni = readlineSync.question('Ingrese dni del alumno: ');
    const fechaNacimiento = readlineSync.question('Ingrese fecha de nacimiento del alumno, formato DD/MM/AAAA: ');
    const matricula = Number(this.generadorMat());
    const modalidad = String(this.eligeModalidadAlumno());
    const materias = Object(añadeMaterias());
    const promedioFinal = this.promedio(materias);
    const profesores = añadeListadoProfesores();

    //Metodo que añade las materias al alumno segun la modalidad elegida. Donde tambien podremas cargar las notas obtenidas por alumno.
    function añadeMaterias(): any {
        if (modalidad === 'Naturales') {
            const notaBiologia: number = Number(readlineSync.question('Ingrese nota de Biologia: '));
            const notaFisica: number = Number(readlineSync.question('Ingrese nota de Fisica: '));
            const notaQuimica: number = Number(readlineSync.question('Ingrese nota de Quimica: '));
            const notaAnatomia: number = Number(readlineSync.question('Ingrese nota de Anatomia: '));
            return { biologia: notaBiologia, fisica: notaFisica, quimica: notaQuimica, anatomia: notaAnatomia }
        };
        if (modalidad === 'Sociales') {
            const notaSociales: number = Number(readlineSync.question('Ingrese nota de Sociales: '));
            const notaCivica: number = Number(readlineSync.question('Ingrese nota de Civica: '));
            const notaPolitica: number = Number(readlineSync.question('Ingrese nota de Politica: '));
            const notaSociologia: number = Number(readlineSync.question('Ingrese nota de Sociologia: '));
            return { sociales: notaSociales, civica: notaCivica, politica: notaPolitica, sociologia: notaSociologia }
        };
    }

    //Metodo que añade un listado, previamente cargados, de profesores segun la modalidad elegida por el alumno.
    function añadeListadoProfesores(): any {
        if (modalidad === 'Naturales') return { biologia: 'Manuel Barraza', fisica: 'Marcela Rojas', quimica: 'Marcela Rojas', anatomia: 'Claudia Morales' };
        if (modalidad === 'Sociales') return { sociales: 'Carlos Benitez', civica: 'Carlos Benitez', politica: 'Roberto Mandraccio', sociologia: 'Cristina Del Curto' };
    }

    //Creacion de la instancia del alumno, perteneciente a la clase Alumno.
    const alumno = new Alumnos(nombre, apellido, dni, fechaNacimiento, matricula, modalidad, materias, promedioFinal, profesores);

    //Se añade la nueva instancia al arreglo de alumnos.
    let alumnos = [...this.data(), alumno];
        
    //Carga del nuevo archivos que contiene el nuevo listado de alumnos al archivo JSON (Previa conversion con stringify).
    fs.writeFileSync('./alumnos.json', JSON.stringify(alumnos, null, 1));
    console.log(`Alumno añadido con Exito.`, alumno);
    this.menu();
}

/*CRUD de Alumnos---------------------------------------------------- */
//Metodo que nos da la posibilidad de buscar a un alumno por su dni o por su apellido.
buscaAlumno() {
    console.log('Seleccione el Tipo de dato que desea buscar: ');
    const datosDeBusqueda: Array<string> = ['Apellido', 'Dni'];
    const seleccionDeDatos = readlineSync.keyInSelect(datosDeBusqueda);
    if (datosDeBusqueda[seleccionDeDatos] === datosDeBusqueda[0])
    return this.buscaAlumnoXapellido();
    if (datosDeBusqueda[seleccionDeDatos] === datosDeBusqueda[1]) return this.buscaAlumnoXdni();    
}

//Metodo que permite busqueda de alumno por su apellido.
buscaAlumnoXapellido (this: any) {
    const apellido = readlineSync.question('Escriba el apellido del alumno que desea buscar: ');        
    let nombreEncontrado = this.data().filter((element: { apellido: string }) => element.apellido === apellido);
    console.log(`Alumno encontrado:`, nombreEncontrado);
    this.menu();
}

//Metodo que permite busqueda de alumno por su dni.
buscaAlumnoXdni(this: any) {
    const dni = readlineSync.question('Escriba el dni del alumno que desea buscar: ');
    let dniEncontrado = this.data().filter((element: { dni: number }) => element.dni === dni);
    console.log(`Alumno encontrado:`, dniEncontrado);
    this.menu();
}

//Metodo que permite eliminar un alumno por su dni.
eliminaAlumno(this: any) {
    const dni: number = readlineSync.question('Escriba el dni del alumno que desea eliminar: ');
        let dniEncontrado: number = this.data().filter((element: { dni: number }) => element.dni != dni);
        console.log('El alumno fue eliminado con exitosamente', dniEncontrado);
        const nuevosArchivos = JSON.stringify(dniEncontrado);
        fs.writeFile('./alumnos.json', nuevosArchivos, (error: any) => {
            if (error) throw error;
            console.log('Info Cargada Correctamente.'); 
            this.menu();           
        });      
    }

    //Metodo que muestra el listado completo de los alumnos.
listadoAlumnos(this: any) {
    console.log(...this.data());
    this.menu()
}

/*CRUD de Profesores---------------------------------------------------- */
//Creacion de instancia profesor y carga al archivo Json.
añadeProfesor(this: any) {
    const nombre: string = readlineSync.question('Ingrese nombre del profesor: ');
    const apellido: string = readlineSync.question('Ingrese apellido del profesor: ');
    const dni: number = readlineSync.question('Ingrese dni del profesor: ');
    const fechaNacimiento = readlineSync.question('Ingrese fecha de nacimiento del alumno, formato DD/MM/AAAA: ');
    const contrato: number = Number(this.generadorMat());
    const modalidad: string = String(this.eligeModalidadProfesor());
    const materias: any = añadeMateriasProf();
    const alumnosAsignadosProfesor: any = this.asignaAlumnosAprofeSociales();
        
    
    //Metodo que permite añadir la cantidad y la materia espesifica a cada profesor.
function añadeMateriasProf(this: any) {
    const materiasProfesor: Array<string> = [];    
    const cantidadMaterias: number = readlineSync.question('Cuantas materias desea agregar: ');
    if(modalidad === 'Naturales') {
        for (let i = 0; i < cantidadMaterias; i++) {
            const eligeMaterias = ['Biologia', 'Fisica', 'Quimica', 'Anatomia'];
                console.log('Seleccione las materias: ');
                let seleccionMaterias = readlineSync.keyInSelect(eligeMaterias);
                if (eligeMaterias[seleccionMaterias] === eligeMaterias[0]) seleccionMaterias = eligeMaterias[0];
                if (eligeMaterias[seleccionMaterias] === eligeMaterias[1]) seleccionMaterias = eligeMaterias[1];
                if (eligeMaterias[seleccionMaterias] === eligeMaterias[2]) seleccionMaterias = eligeMaterias[2];
                if (eligeMaterias[seleccionMaterias] === eligeMaterias[3]) seleccionMaterias = eligeMaterias[3];
                materiasProfesor.push(seleccionMaterias);
            }
            return materiasProfesor;
        };
            
    if(modalidad === 'Sociales') {
        for (let i = 0; i < cantidadMaterias; i++) {
            const eligeMaterias = ['Sociales', 'Civica', 'Politica', 'Sociologia'];
                console.log('Seleccione las materias: ');
                let seleccionMaterias = readlineSync.keyInSelect(eligeMaterias);
                if (eligeMaterias[seleccionMaterias] === eligeMaterias[0]) seleccionMaterias = eligeMaterias[0];
                if (eligeMaterias[seleccionMaterias] === eligeMaterias[1]) seleccionMaterias = eligeMaterias[1];
                if (eligeMaterias[seleccionMaterias] === eligeMaterias[2]) seleccionMaterias = eligeMaterias[2];
                if (eligeMaterias[seleccionMaterias] === eligeMaterias[3]) seleccionMaterias = eligeMaterias[3];
                materiasProfesor.push(seleccionMaterias);
            }            
            return materiasProfesor;
        }        
    } 
    
    const profesor: Profesor = new Profesor(nombre, apellido, dni, fechaNacimiento, contrato, modalidad, materias, alumnosAsignadosProfesor);

    let profesores = [...this.data2(), profesor]
    fs.writeFileSync('./profesores.json', JSON.stringify(profesores, null, 1));
    console.log(`Profesor añadido con Exito.`, profesor);
    this.menu();
}

// alumnosAsignados(this: any) {
//     if(this.modalidad === 'Naturales') return this.asignaAlumnosAprofeNaturales();
//     if(this.modalidad === 'Sociales') return this.asignaAlumnosAprofeSociales();
// }; 

//Metodo que asigna los alumnos al profesor, de la modalidad Naturales.
asignaAlumnosAprofeNaturales(this: any) {
    let i: number;
    const arrayDeNombres: Array<string> = [];
    for (i = 0; i < this.data().length; i++) {
        if (this.data()[i].modalidad === 'Naturales') {
            const nombreAlumno: string = `${this.data()[i].nombre} ${this.data()[i].apellido}`;
            arrayDeNombres.push(nombreAlumno);
        }    
    }
    return arrayDeNombres;
};

//Metodo que asigna los alumnos al profesor, de la modalidad Naturales.
asignaAlumnosAprofeSociales(this: any) {
    let i: number;
    const arrayDeNombres: Array<string> = [];
    for (i = 0; i < this.data().length; i++) {
        if (this.data()[i].modalidad === 'Sociales') {
            const nombreAlumno: string = `${this.data()[i].nombre} ${this.data()[i].apellido}`;
            arrayDeNombres.push(nombreAlumno);
        }    
    }
    return arrayDeNombres;
};
    
buscaProfesor() {
    console.log('Seleccione el Tipo de dato que desea buscar: ');
    const datosDeBusqueda: Array<string> = ['Apellido', 'Dni'];
    const seleccionDeDatos = readlineSync.keyInSelect(datosDeBusqueda);
    if (datosDeBusqueda[seleccionDeDatos] === datosDeBusqueda[0])
    return this.buscaProfesorXApellido();
    if (datosDeBusqueda[seleccionDeDatos] === datosDeBusqueda[1]) return this.buscaProfesorXdni();    
}

//Metodo que busca un profesor mediante un apellido dado por consola.
buscaProfesorXApellido() {
    const apellido = readlineSync.question('Escriba el apellido del profesor que desea buscar: ');        
    let nombreEncontrado = this.data2().filter((element: { apellido: string }) => element.apellido === apellido);
    console.log(`Profesor encontrado:`, nombreEncontrado);
    this.menu();
}

//Metodo qye busca un profesor mediante un dni dado por consola.
buscaProfesorXdni() {
    const dni = readlineSync.question('Escriba el dni del profesor que desea buscar: ');
    let dniEncontrado = this.data2().filter((element: { dni: number }) => element.dni === dni);
    console.log(`Profesor encontrado:`, dniEncontrado);
    this.menu();
}

//Metodo que elimina a un metodo mediante dni elegido.
eliminaProfesor() {
    const dni: number = readlineSync.question('Escriba el dni del profesor que desea eliminar: ');
        let dniProfesorEncontrado: number = this.data().filter((element: { dni: number }) => element.dni != dni);
        console.log('El Profesor fue eliminado exitosamente', dniProfesorEncontrado);
        const nuevosArchivos = JSON.stringify(dniProfesorEncontrado);
        fs.writeFile('./profesores.json', nuevosArchivos, (error: any) => {
            if (error) throw error;
            console.log('Info Cargada Correctamente.'); 
            this.menu();           
        });      
    }

    //Metodo que muestra el listado completo de los profesores.
listadoProfesores(this: any) {
    console.log(...this.data2());
    this.menu()
}

//Metodo que genera el promedio de las notas de los alumnos.
promedio(materias: {}) {
    const arrayNotas: Array<number> = Object.values(materias);
    const promedio = arrayNotas.reduce((valorAnterior: number, valorActual: number) => { return valorAnterior + valorActual; }, 0);
    const promedioTotal = promedio / arrayNotas.length;
    return promedioTotal
};

//Metodo que permite la eleccion de modalidad en la carga del alumno.
eligeModalidadAlumno() {
    const modalidad = ['Naturales', 'Sociales'];
    console.log('Seleccione la modalidad: ');
    const seleccionModalidad = readlineSync.keyInSelect(modalidad);
    if (modalidad[seleccionModalidad] === modalidad[0]) return modalidad[0];
    if (modalidad[seleccionModalidad] === modalidad[1]) return modalidad[1];
}

//Metodo de Eleccion de Modalidad en Clase Profesor.
eligeModalidadProfesor() {
    const modalidad = ['Naturales', 'Sociales'];
    console.log('Seleccione la modalidad: ');
    const seleccionModalidad = readlineSync.keyInSelect(modalidad);
    if (modalidad[seleccionModalidad] === modalidad[0]) return modalidad[0];
    if (modalidad[seleccionModalidad] === modalidad[1]) return modalidad[1];
}

//Metodo menu: Que centraliza todos los metodos de las funciones a alegir al correr el programa.
menu(this: any) {
    const items = ['Anadir Alumno', 'Buscar Alumno', 'Eliminar Alumno', 'Listado de Alumnos', 'Anadir Profesor', 'Buscar Profesor', 'Eliminar Profesor', 'Listado de Profesores'];
    const seleccion = readlineSync.keyInSelect(items)

    if (items[seleccion] === items[0]) this.añadeAlumno();
    else if (items[seleccion] === items[1]) this.buscaAlumno();
    else if (items[seleccion] === items[2]) this.eliminaAlumno();
    else if (items[seleccion] === items[3]) this.listadoAlumnos();
    else if (items[seleccion] === items[4]) this.añadeProfesor();
    else if (items[seleccion] === items[5]) this.buscaProfesor();
    else if (items[seleccion] === items[6]) this.eliminaProfesor();
    else if (items[seleccion] === items[7]) this.listadoProfesores();
}
//Metodo que genera un numero aleatorio para matricula identificatoria de Alumno.
generadorMat() {
    const matricula = Math.floor(Math.random() * 10000);
    return matricula
    }    
}