const body = document.querySelector('body');
body.style.backgroundColor = 'grey'
const titulo = document.querySelector('title');
console.log(titulo.innerHTML);

let dt = document.querySelectorAll('dt');
console.log(dt)
//0 Primera listanobmres, // 4(5to dt) Segunda lista // 8(9no dt) Tercera Lista
let arrayName = [];
let arraySurname = [];

const mostrarLista = (pos) =>{
    let ant = null;
    let actNodo = dt[pos];
    for (let i = 0; i < 8; i++) {
        if (i !== 0){
            ant = (actNodo.previousElementSibling).innerHTML;
            if (ant == 'Primer nombre' || ant == 'Segundo nombre'){ //Preguntamos si es un nombre
                console.log('========Nombre/s========', actNodo.innerHTML);
                if (actNodo.innerHTML !== ''){
                    arrayName.push(actNodo.innerHTML);
                }
            }
            if (((ant === 'Primer apellido') && (actNodo.innerHTML !== null)) || ((ant == 'Segundo apellido') && (actNodo.innerHTML !== null)) ){
                console.log('========Apellido/s========', actNodo.innerHTML);
                if (actNodo.innerHTML !== ''){
                    arraySurname.push(actNodo.innerHTML);
                }
            }
        }
        actNodo = actNodo.nextElementSibling;
    }
}

const resaltarIntegrante = (nombreCoinci ,valorIngresado ,pos)=>{
    let anterior = null;
    let actNode = dt[pos];
    for (let i = 0; i < 8; i++) {
        if (i !== 0){
            anterior = (actNode.previousElementSibling).innerHTML;
            if((anterior == 'Primer nombre' || anterior == 'Segundo nombre' || (anterior === 'Primer apellido' || anterior == 'Segundo apellido') && actNode.innerHTML !== null)){
                if (actNode.innerHTML === nombreCoinci){
                    actNode.style.color = `${valorIngresado}`;
                }
            }
        }
        actNode = actNode.nextElementSibling;
    }
}

function resaltarCoincidencias(nombreCoinci, valorIngresado){
    resaltarIntegrante(nombreCoinci , valorIngresado, 0)
    resaltarIntegrante(nombreCoinci , valorIngresado, 4)
    resaltarIntegrante(nombreCoinci , valorIngresado, 8)
}

function avisarCoincidencias(array, tipo){
    if (array !== null ){
        let auxVar = '';
        array.forEach(coinci => {
            console.log(`Hubo coincidencias\nCoincidencia fue en: ${coinci}`);
            setTimeout(()=>{
                auxVar = prompt(`Hubo coincidencias en ${coinci}, escriba un color a continuacion para resaltarlas:`)
                resaltarCoincidencias(coinci, auxVar);
            },50)//TimeOut para que haya tiempo en la asignacion de auxVar de cada prompt
        });
    }
    else{
        console.log(`NO HUBO COINCIDENCIAS DE ${tipo}`)
    }
}

function buscarCoincidencias(arrayBuscar){
    let arrayCoincidencias = [];
    for (let j = 0; j < arrayBuscar.length; j++) {
        for (let i = j+1; i < arrayBuscar.length; i++) {
            console.log(`BuscarJ es: ${arrayBuscar[j]}, \n BuscarI es: ${arrayBuscar[i]}`)
            if (arrayBuscar[j] === arrayBuscar[i]){
                arrayCoincidencias.push(arrayBuscar[j]);//Insertamos nombre repetido.
                console.log(`Entre condicion con: ${arrayBuscar[j]}`)
            }
        }
    }    
    return arrayCoincidencias;
}

mostrarLista(0);
mostrarLista(4);
mostrarLista(8);

let coincidenciasNombres = buscarCoincidencias(arrayName);
console.log('Las coincidencias son:......', coincidenciasNombres);

// if (coincidenciasNombres !== null ){
//     let auxVar = '';
//     coincidenciasNombres.forEach(coinci => {
//         console.log(`Hubo coincidencias\nCoincidencia fue en: ${coinci}`);
//         setTimeout(()=>{
//             auxVar = prompt(`Hubo coincidencias en ${coinci}, escriba un color a continuacion para resaltarlas:`)
//             resaltarCoincidencias(coinci, auxVar);
//         },100)//TimeOut para que haya tiempo en la asignacion de auxVar de cada prompt
//     });
//     setTimeout(()=>{
//         valor = window.confirm('Desea buscar coincidencias en apellidos?');
//         if (valor){
//             coincidenciasApellidos = buscarCoincidencias(arraySurname);
//             if(coincidenciasApellidos !== null){
//                 coincidenciasApellidos.forEach(coinci => {
                    
//                 });
//             }
//         }
//     }, 300)
// }
// else{
//     console.log('NO HUBO COINCIDENCIAS EN NOMBRES')
//     valor = window.confirm('Desea buscar coincidencias en apellidos?');
// }


avisarCoincidencias(coincidenciasNombres, 'NOMBRES');


// setTimeout(()=>{
//     valor = window.confirm('Desea buscar coincidencias en apellidos?');
// }, 300)


// if (valor){
//     coincidenciasApellidos = buscarCoincidencias(arraySurname);
//     if(coincidenciasApellidos !== null){
//         coincidenciasApellidos.forEach(coinci => {
            
//         });
//     }
// }

