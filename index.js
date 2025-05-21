const number1 = document.querySelector('.input1')
const number2 = document.querySelector('.input2')
const resultnumber = document.querySelector('.result')

const numberone = document.querySelector('.number1')
const numbers = document.querySelectorAll('.num')

const btns = document.querySelectorAll('.btn')

console.dir(resultnumber)

numbers.forEach((item) => {
    item.addEventListener('click', () => {
        if (number1.value) {
            number2.value = item[0].target.value
        }
        
        number1.value = item.button.target.value
    })
})

class Happen {
    constructor(number1 , nuumber2 , result) {
        this.number1 = number1
        this.number2 = nuumber2
        this.result = result
    }

    multiply = () => {
        this.result = this.number1.value * this.number2.value

        return this.result
    }

    division = () => {
        this.result = this.number1.value / this.number2.value

        return this.result
    }

    plus = () => {
        this.result = this.number1.value + this.number2.value
        return this.result
    }

    minus = () => {
        this.result = this.number1.value - this.number2.value
        return this.result
    }
}

btns[0].addEventListener('click', e => {
    e.preventDefault()

    const multiply = new Happen(number1,number2,resultnumber).multiply()

    resultnumber.value = multiply
})

btns[1].addEventListener('click', e => {
    e.preventDefault()

    const multiply = new Happen(number1,number2,resultnumber).division()

    resultnumber.value = mult
})

btns[2].addEventListener('click', e => {
    e.preventDefault()

    const multiply = new Happen(number1,number2,resultnumber).plus()

    resultnumber.value = multiply
})

btns[3].addEventListener('click', e => {
    e.preventDefault()

    const multiply = new Happen(number1,number2,resultnumber).minus()

    resultnumber.value = multiply
})