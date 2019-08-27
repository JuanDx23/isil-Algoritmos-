//hallar el minimo/maximo de los valores
// procesados del arreglo

let a = [4, 8, 1, 5, 10, 3]
let average = getAverage(a)

console.log(getMinValue(a))

function getAverage(a){
    let suma = 0

    for(let i =0; i <a.length; i++){
        suma = suma + a[i]
    }
    return suma/a.length
}

function getMinValue(a) {
    if(a.length ==0) return -1
    let min = a[0]
    let minIndex

    for (let i = 0; i < a.length; i++) {
        if (distancetoAverage(a[i]) < min){ min = distancetoAverage(a[i])
        minIndex = i
    }
    }
    return minIndex
}

function getAverage(a){
    let sum =0
    for (let i = 0; i < a.length; i++) 
    sum = sum + a[i]
    return sum/a.length
}

function distanceToAverage(n){
    return Math.abs(n-average)
}

