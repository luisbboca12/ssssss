
function esPar(array) {
    let arrayCantidadElementos = array.length
    if ((arrayCantidadElementos % 2)===0) {
        true
        
    } else {
        return false
        
    }
    
}

function calcularMediana(array) {
    let esLaListaPar = esPar(array)
    if (esLaListaPar) {
        //
        
    } else {
        let indexMedianaImpar = Math.floor(array.length/2)
        let medianaImpar = array[indexMedianaImpar]
        console.log(medianaImpar)
        return medianaImpar
        
    }
    
}
calcularMediana([12,3,4])
