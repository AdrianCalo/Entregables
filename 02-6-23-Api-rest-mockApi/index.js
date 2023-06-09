//Manejo del DOM
//formulario
const form = document.getElementById("form");
form.addEventListener("submit", handleSubmit);
function handleSubmit() {
  const user = new FormData(form);
  console.log(user.get("fullName"));
}
const openModal = document.getElementById("btn-open-modal");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("close-modal");
closeModal.addEventListener("click", () => {
  modal.close();
});
openModal.addEventListener("click", () => {
  modal.showModal();
});
// ******************************************

//capturo el 'p' donde se escribira la respuesta
const respuesta=document.getElementById('respuesta');
//boton busqueda muestra un solo usuario
const btn_search=document.getElementById('btn-search');
btn_search.addEventListener('click', ()=>{
const searchInput=document.getElementById('search-input');
const itemSearched=searchInput.value;
getOne(itemSearched);
})
// ***********************************
//boton Agrega Usuario (upDate) 

//capturo los input
const fullName=document.getElementById('fullName');
const address=document.getElementById('address');
const email=document.getElementById('email');
const phone=document.getElementById('phone');

const upDate=document.getElementById('upDate');//capturo el boton submit
upDate.addEventListener('click',()=>{
    let newUSer={//usuario de prueba
        name:`${fullName.value}`,
        phone:`${phone.value}`,
        addres:`${address.value}`,
        email:`${email.value}`,
    };
    addOne(newUSer)
})

// ***********************************************
//boton mostrar Todos los datos
const all=document.getElementById('All_data');
all.addEventListener('click',()=>{
    getAll(url);
})

//***********************************************
//boton borra user
const del=document.getElementById('delete');
del.addEventListener('click',()=>{
    let deleteUser=prompt('Que numero de usuario desea eliminar')
    deleteOne(deleteUser);
})
// **********************************************
//boton que modifica
    const edit= document.getElementById('edit');
    edit.addEventListener('click',()=>{
    const solicitud=document.getElementById('solicitud')
    if(solicitud.style.display==='none'){//si el div no esta visible
      solicitud.style.display= 'block';//mostramos el div
    }else{
        solicitud.style.display='none';//ocultamos el div
    }});

    //boton ACEPTAR metodo MODIFICAR
    const btnActualiza=document.getElementById('btnActualiza');
    btnActualiza.addEventListener('click',()=>{
        const IdUser =document.getElementById('IdUser');
        const modUser =document.getElementById('modUser');
        const modAddress=document.getElementById('modAddress');
        const modEmail=document.getElementById('modEmail');
        const modPhone=document.getElementById('modPhone');
        
        let modifiUser={//datos nuevos
            name:`${modUser.value}`,
            phone:`${modPhone.value}`,
            addres:`${modAddress.value}`,
            email:`${modEmail.value}`,
        };
        modifySomething(IdUser.value,modifiUser)
    });

    //boton CANCELAR metodo Modificar
    const btnCancel= document.getElementById('btnCancel');
    const solicitud=document.getElementById('solicitud');
    btnCancel.addEventListener('click',()=>{
        solicitud.style.display='none';
    });

//anda pero queda feo
  function getOne(id){//lo correcto seria pasar el id o url +id
      fetch(url+'/'+`${id}`)
      .then(res=>res.json())
      .then(data=>{   
       respuesta.textContent=
       ('Name: '+data.name+' '+'Address: '+data.addres+' '+'E-mail: '+data.email+' '+'Phone: '+data.phone)})
      console.log(data);
       //capturar el error y mostrarlo en pantalla
  }
// *************************************************
// funcionalidades
//**************************************************
const url="https://647f9093c246f166da90eece.mockapi.io/Users"

function getAll(url){
    fetch(url)
    .then(res=>{
        if(!res.ok){
            throw new Error('Error en la solicitud de la Api')
        }return res.json()})
        .then(data=>{
        const tabla= document.getElementById('tabla');
            //iteramos sobre los datos obtenidos
        data.forEach(item => {
            //celda ID
            let fila= document.createElement('tr');//creamos la fila
            let celda_id=document.createElement('td')
            celda_id.textContent=`${item.id}`
            fila.appendChild(celda_id);
            //clase celda ID
            celda_id.className='celda_id'

            //celda nombre
            let celda_nombre=document.createElement('td')//creamos la celda nombre
            celda_nombre.textContent=`${item.name}`//agregamos el dato en la casilla
            fila.appendChild(celda_nombre);//ingresamos la celda_nombre en la fila
            //clase celda nombre
            celda_nombre.className='celda_nombre'

            //celda domicilio
            let celda_domicilio= document.createElement('td');
            celda_domicilio.textContent=`${item.addres}`;
            fila.appendChild(celda_domicilio);
            //clase celda domicilio
            celda_domicilio.className='celda_domicio'

            //celda e-mail
            let celda_email= document.createElement('td');
            celda_email.textContent=`${item.email}`;
            fila.appendChild(celda_email);
            //clase celda email
            celda_email.className='celda_email'

            //celda phone
            let celda_phone= document.createElement('td');
            celda_phone.textContent= `${item.phone}`
            fila.appendChild(celda_phone);
            //clase celda phone
            celda_phone.className='celda_phone'

            tabla.appendChild(fila);//agregamos la fila a la tabla
        })
    }).catch(error=>{
        console.log(error);
        const elementoError=document.getElementById('error');
        elementoError.textContent= 'se prudujo un error al acceder a los datos'  
    })
    //capturar el error y mostrarlo en pantalla
}

//getOne anda mal
// function getOne(id){//lo correcto seria pasar el id o url +id
//     fetch(url+'/'+`${id}`)
//     .then(res=>res.json())
//     .then(data=>{   
//         const tabla= document.getElementById('tabla')
//         data.forEach(item=>{
//             let fila=document.createElement('tr');
//             let celda_id=document.createElement('td');
//             celda_id.textContent=`${item.id}`
//             fila.appendChild(celda_id);

//             let celda_name=document.createElement('td');
//             celda_name.textContent=`${item.name}`;
//             fila.appendChild(celda_name);

//             let celda_address=document.createElement('td');
//             celda_address.textContent=`${item.addres}`;
//             fila.appendChild(celda_address);
            
//             let celda_phone=document.createElement('td');
//             celda_phone.textContent=`${item.phone}`;
//             fila.appendChild(celda_phone);

//             tabla.appendChild(fila);
//         })       
//      //capturar el error y mostrarlo en pantalla
// });
// }

function deleteOne(id){
    fetch(url+'/'+`${id}`,{method:"DELETE",})
    .then(res=>res.json())
    .then(data=>console.log(data))
    .catch(error=> {
        console.log(error);
        const elementoError=document.getElementById('error');
        elementoError.textContent= 'se prudujo un error al eliminar!!'
    })
}

//add new resource
// const newUSer={//usuario de prueba
//     name:'Adrian Calo',
//     phone:'2281-572898',
//     addres:'Argentina',
//     email:'agy_calo@hotmail.com',
// };

function addOne(user){
    fetch(url,{method: "POST",
        headers:{"Content-type":"application/json"},
    body:JSON.stringify(user),
}).then(res=>res.json())
.then(data=>console.log(data))
//capturar el error y mostrarlo en pantalla
}

//usuario modificado para probar
// const usuarioModificado={
//     name:'Adrian Calo',
//     phone:'2281-572898',
//     addres:'Argentina,BS.AS,Benito Juarez',
//     email:'agy_calo@hotmail.com',
// }


function modifySomething(id,modifiUser){
    fetch(url+'/'+`${id}`,{
        method: "PUT",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify(modifiUser),        
    })
    .then(res=>res.json())
    .then(data=>console.log(data))
    //capturar el error y mostrarlo en pantalla
}
































//*******pruebas *//
//export{ url,getAll,getOne,deleteOne,addOne,modifySomething}
//llamado a funciones
//getAll(url);
//getOne(82);//hacer una funcion para que me pida por id y que lo ingrese por variable

//deleteOne(83)//**//comentada porque borro el 3 y si sigo llamando me devuelve error
//addOne(newUSer)//andubo
//modifySomething(82,usuarioModificado)



