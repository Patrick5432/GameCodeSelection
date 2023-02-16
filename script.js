'use strict';
alert(`Добро пожаловать в игру GameCodeSelection! В этой игре вам предстоит подобрать код от сейфа, который постоянно меняется, после каждого перезапуска страницы!

Удачи!
`)
alert(`
Уточнение:
 -При подборе числа в определённой области, происходит одно из четырёх действий:
    1. "Далеко" - число довольно далеко от правильной комбинации.
    2. "Тепло" - число стоит возле комбинации на расстоянии 2 чисел.
    3. "Горячо" - число стоит возле комбинации на расстоянии 1 числа.
    4. "Щёлк" - число совпало с комбинацией.
`)

function creatCombination() {
    const combination = ['', '', '']
    let result = 0

    for (let i = 0; i < combination.length; i++) {
        combination[i] = String(Math.floor(Math.random() * 10))
    }
    return combination
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

        selectionCombination[j] = prompt(`Введите ${orderNumber} число от 0 до 9`)
        if (selectionCombination[j] > 9 || selectionCombination[j] < 0 || selectionCombination[j] === '-0') {
            alert('Вы вышли за предел!')
            j--
        }

        else if (selectionCombination[j] === '' || selectionCombination[j] === ' ') {
            alert('Не может быть пустых значений')
            j--
        }

        else if (isNaN(+selectionCombination[j]) || selectionCombination[j].slice(0, 1) < 0) {
            alert('Могут стоять только числа!')
            j--
        }

        else if (selectionCombination[j] === null) {
            return alert('Отменено')
        }
    }
    return selectionCombination
}



let combination = creatCombination()

function checkCombination () {
    console.log(combination)
    let question = ''
    let j = 0
    let userCombination = printCombination()
    console.log(userCombination)

    for (let i = 0; i < combination.length; i++) {
        if (+combination[i] + 2 === +userCombination[i] || +combination[i] - 2 === +userCombination[i]) {
            alert(`Замок ${i + 1}: Тепло`)
        }

        else if (+combination[i] + 1 === +userCombination[i] || +combination[i] - 1 === +userCombination[i]) {
            alert(`Замок ${i + 1}: Горячо`)
        }

        else if (+combination[i] + 2 < +userCombination[i] || +combination[i] - 2 > +userCombination[i]) {
            alert(`Замок ${i + 1}: Далеко`)
        }

        else {
            alert(`Замок ${i + 1}: *Щёлк*`)
            j++
        }
    }
    if (j === combination.length) {
       return alert('Вы открыли сейф!').break
    }

    else {
        question = confirm('Попробовать ещё раз?')
        if (question === true) {
            checkCombination()
        }
        return alert('Вы не смогли открыть сейф').break
    }

}
checkCombination()