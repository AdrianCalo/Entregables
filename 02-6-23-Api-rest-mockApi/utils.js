const url='pone la url aca'

function getAll(url){
    fetch(url)
    .then(res=> res.json())
    .then(data=>console.log(data))
    //capturar el error y mostrarlo en pantalla
}

function getOne(id){//lo correcto seria pasar el id o url +id
    fetch(url+'/'+`${id}`)
    .then(res=>res.json())
    .then(data=>console.log(data));
     //capturar el error y mostrarlo en pantalla
}

function deleteOne(id){
    fetch(url+'/'+`${id}`,{method:"DELETE",})
    .then(res=>res.json())
    .then(data=>console.log(data))
    //capturar el error y mostrarlo en pantalla
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
const usuarioModificado={
    name:'Adrian Calo',
    phone:'2281-572898',
    addres:'Argentina,BS.AS,Benito Juarez',
    email:'agy_calo@hotmail.com',
}


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
