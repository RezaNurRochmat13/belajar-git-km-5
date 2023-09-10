const generateRandomArray = () => {
    const result = []

    for (let index = 0; index < 100; index++) {
        result.push(index)
    }

    return result
}

const separateArrays = (array) => {
    const ganjil = []
    const genap = []
    
    for (let index = 0; index < array.length; index++) {
        if (array[index] % 2 === 0) {
            genap.push(array[index])
        }

        if (array[index] % 2 != 0) {
            ganjil.push(array[index])
        }
    }

    return { genap, ganjil }
}

const calculationStatisticArray = (arrayGenap, arrayGanjil) => {
    const resultMax = []
    const resultMin = []
    const resultAverage = []
    const resultTotal = arrayGenap.length


    return { resultMax, resultMin, resultAverage, resultTotal }

}

const randomArray = generateRandomArray()

const { genap, ganjil } = separateArrays(randomArray)

console.log('Random array :', randomArray);
console.log('Genap :', genap);
console.log('Ganjil :', ganjil);
