const titulo = document.querySelector('title');
console.log(titulo.innerHTML);

let dt = document.querySelectorAll('dt');
//0 Primera lista(1er integrante), // [4] Segunda lista // [8] Tercera Lista 
let arrayName = [];
let arraySurname = [];

const mostrarIntegrante = (pos) =>{
    let ant = null;
    let actNodo = dt[pos];
    let integrante = ``;
    for (let i = 0; i < 8; i++) {
        if (i === 0){
            // let h2Actual = (dt[pos].parentElement).previousElementSibling.innerHTML;
            // console.log('H2ACTUAL:', h2Actual)
        } else if (i !== 0){
            ant = (actNodo.previousElementSibling).innerHTML;
            if (ant == 'Primer nombre' || ant == 'Segundo nombre'){ //Preguntamos si es un nombre
                if (actNodo.innerHTML !== ''){
                    arrayName.push(actNodo.innerHTML);
                    integrante = integrante + ` ` + actNodo.innerHTML;
                }
            }
            if (((ant === 'Primer apellido') && (actNodo.innerHTML !== null)) || ((ant == 'Segundo apellido') && (actNodo.innerHTML !== null)) ){
                if (actNodo.innerHTML !== ''){
                    arraySurname.push(actNodo.innerHTML);
                    integrante = integrante + ` ` + (actNodo.innerHTML).toUpperCase();
                }
            }
        }
        actNodo = actNodo.nextElementSibling;
    }
    return integrante.trim(); //Quito espacios sin contenido.
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

function buscarCoincidencias(arrayBuscar){
    let arrayCoincidencias = [];
    for (let j = 0; j < arrayBuscar.length; j++) {
        for (let i = j+1; i < arrayBuscar.length; i++) {
            // console.log(`BuscarJ es: ${arrayBuscar[j]}, \n BuscarI es: ${arrayBuscar[i]}`)
            if (arrayBuscar[j] === arrayBuscar[i]){
                arrayCoincidencias.push(arrayBuscar[j]);//Insertamos nombre repetido.
                // console.log(`Entre condicion con: ${arrayBuscar[j]}`)
            }
        }
    }    
    return arrayCoincidencias;
}

function avisarCoincidencias(array, tipo){
    if (array != null ){
        let auxVar = '';
        array.forEach(coinci => {
            console.log(`Hubo coincidencias\nCoincidencia fue en: ${coinci}, del tipo ${tipo}`);
            setTimeout(()=>{
                auxVar = prompt(`Hubo coincidencias en ${coinci}, escriba un color a continuacion para resaltarlas:`)
                resaltarCoincidencias(coinci, auxVar);
            },50)//TimeOut para que haya tiempo en la asignacion de auxVar de cada prompt
        });
    }
    if(array.length == 0)
        console.log(`NO HUBO COINCIDENCIAS DE ${tipo}`)
}

console.log(`----- \nIntegrante 1: "${mostrarIntegrante(0)}"\nIntegrante 2: "${mostrarIntegrante(4)}"\nIntegrante 3: "${mostrarIntegrante(8)}"\n----- `)

let coincidenciasNombres = buscarCoincidencias(arrayName);

avisarCoincidencias(coincidenciasNombres, 'NOMBRES');

setTimeout(()=>{
    valor = window.confirm('Desea buscar coincidencias en apellidos?');
    if (valor){
        let coincidenciasApellidos = buscarCoincidencias(arraySurname);
        avisarCoincidencias(coincidenciasApellidos, 'APELLIDOS');
    }
}, 300)