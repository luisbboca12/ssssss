
function esPar(array) {
    let arrayCantidadElementos = array.length
    if ((arrayCantidadElementos % 2)===0) {
        return true
        
    } else {
        return false
        
    }
    
}

function calcularMediana(array) {
    let esLaListaPar = esPar(array)
    if (esLaListaPar) {
        let index1Mediana = Math.floor(array.length/2)-1
        let index2Mediana = Math.floor(array.length/2)
        let primerMediana= array[index1Mediana]
        let segundaMediana= array[index2Mediana]
        let medianaPar = (primerMediana+ segundaMediana)/2
        console.log(medianaPar)
        return medianaPar
        
    } else {
        let indexMedianaImpar = Math.floor(array.length/2)
        let medianaImpar = array[indexMedianaImpar]
        console.log(medianaImpar)
        return medianaImpar
        
    }
    
}
calcularMediana([12,6,4,4])
