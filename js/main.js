const body = document.querySelector('body');
body.style.backgroundColor = 'grey'

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
                    // console.log(`Inserte el nombre ${actNodo.innerHTML}`)
                }
            }
            if (((ant === 'Primer apellido') && (actNodo.innerHTML !== null)) || ((ant == 'Segundo apellido') && (actNodo.innerHTML !== null)) ){
                console.log('========Apellido/s========', actNodo.innerHTML);
                // let apellidoAux = auxNode.innerHTML;
                // apellidoAux = apellidoAux.toUpperCase();
                // console.log(`apellido aux es: ${apellidoAux}`) 
                // mostrarTXT = mostrarTXT += apellidoAux;
                
            }
        }
        actNodo = actNodo.nextElementSibling;
    }
}

const resaltarIntegrante = (nombreCoinci , valorIngresado ,pos)=>{
    let anterior = null;
    let actNode = dt[pos];
    for (let i = 0; i < 8; i++) {
        if (i !== 0){
            anterior = (actNode.previousElementSibling).innerHTML;
            console.log('entre en condicion if!==0')
            console.log(`Anterior es: ${anterior}`);
            if((anterior == 'Primer nombre' || anterior == 'Segundo nombre' || (anterior === 'Primer apellido' || anterior == 'Segundo apellido') && actNode.innerHTML !== null)){
                if (actNode.innerHTML === nombreCoinci){
                    console.log(`Entre en condicion en: ${actNode.innerHTML}`)
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

console.log(arrayName);
let coincidencias = buscarCoincidencias(arrayName);
console.log('Las coincidencias son:......', coincidencias);

if (coincidencias !== null ){
    let auxVar = '';
    coincidencias.forEach(coinci => {
        console.log(`Hubo coincidencias\nCoincidencia fue en: ${coinci}`);
        setTimeout(()=>{
            auxVar = prompt(`Hubo coincidencias en ${coinci}, escriba un color a continuacion para resaltarlas:`)
            console.log(`El valor de auxVar es: ${auxVar}`);
            resaltarCoincidencias(coinci, auxVar);
        }
        ,200)
        // auxVar = prompt(`Hubo coincidencias en ${coinci}, escriba un color a continuacion para resaltarlas:`);
    });
    
}





// auxText = `-----\n ${mostrarLista(dt[0])} \n ${mostrarLista(dt[4])} \n ${mostrarLista(dt[8])} \n----- ` ;
// console.log(`...`)


    // for (let j = 0; j < arrayBuscar.length; j++) {
    //     for (let i = 0; i < arrayBuscar.length; i++) {
    //         console.log(`BuscarJ es: ${arrayBuscar[j]}, \n BuscarI es: ${arrayBuscar[i]}`)
    //         if (arrayBuscar[j] === arrayBuscar[i]){
    //             arrayCoincidencias.push(arrayBuscar[j]);//Insertamos nombre repetido.
    //             console.log(`Entre condicion con: ${arrayBuscar[j]}`)
    //         }
    //     }
    // }


    



// for (let i = 0; i < 12; i++) {
//     if (i === 0){
//         let nodoActual =  dt;
//     }
//     let aux = document.querySelector(``);
//     console.log();
    
//     arrayListas.push()
// }