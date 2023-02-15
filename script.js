'use strict';

function creatCombination() {
    const combination = ['', '', '']
    let result = 0

    for (let i = 0; i < combination.length; i++) {
        result = (Math.floor(Math.random() * 10))

        if (result === 0) {
            combination[i] = result + 1
        }

        else {
            combination[i] = result
        }
    }
    return console.log(combination)
}



function printCombination() {
    let orderNumber = ''
    const selectionCombination = ['', '', '']
    for (let j = 0; j < selectionCombination.length; j++) {
        if (j === 0) {
            orderNumber = 'первое'
        }

        else if (j === 1) {
            orderNumber = 'второе'
        }

        else {
            orderNumber = 'третье'
        }

        selectionCombination[j] = +prompt(`Введите ${orderNumber} однозначное число`)
        if (selectionCombination[j] > 9) {
            alert('Вы ввели не однозначное число!')
            j = j - 1
        }

        else if (selectionCombination[j] === 0) {
            return alert('Отменено')
        }
    }
    return console.log(selectionCombination)
}