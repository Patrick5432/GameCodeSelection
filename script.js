// const combination = ['', '', '']
// const selectionCombination = ['', '', '']
// let checkCode = false

// for (let i = 0; i < combination.length; i++) {
//     result = Math.floor(Math.random() * 10)
    
//     if (result === 0) {
//         combination[i] = result + 1
//     } 

//     else {
//         combination[i] = result
//     }
// }


function creatCombination() {
    const combination = ['', '', '']
    let result = 0

    for (let i = 0; i < combination.length; i++) {
        result = Math.floor(Math.random() * 10)

        if (result === 0) {
            combination[i] = result + 1
        }

        else {
            combination[i] = result
        }
    }
    return combination
}

console.log(creatCombination())


function printCombination(selectionCombination) {

    selectionCombination = ['', '', '']
    for (let j = 0; j < selectionCombination.length; j++) {
        selectionCombination[j] = prompt('Введите число')
    }

    

    return selectionCombination
}

printCombination()