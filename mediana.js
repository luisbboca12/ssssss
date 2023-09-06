
function moda(lista) {
    const  object={}
    for (let i = 0; i < lista.length; i++) {
        const element = lista[i];
        
        if (object[element]) {
            object[element]++
            
        } else {
            object[element]=1
            
        }
    }
    
    let arrayAcomodar = Object.entries(object)
    let listaOrdenada = ordenarLista(arrayAcomodar,1)
    console.log({object,arrayAcomodar,listaOrdenada})
}
function ordenarLista(arrayAcomodar,i) {
    function ordenarListaSort(a,b) {
        return a[i]-b[i]
        
    }
    let lista = arrayAcomodar.sort(ordenarListaSort)
    return lista
}


moda([10,20,30,30,10,30])
a)
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
calcularMediana([80,54,90,65,47,98])


