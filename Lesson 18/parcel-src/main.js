function calc(a, b, c) {
    return a + b - c
}


const x2 = calc(56, 7, 1)
console.log(x2)

function drawPineTree(height) {
    let str = ''
    for(let i = 0; i < height; i++) {
        str += '#'
        console.log(str)
    }
}

drawPineTree(11)

//Function expression - функциональное выражение
const funk2 = function () {

}

//arrow function - стрелочная функция
const funk3 = () => {

}

const maxNum = (a, b, c) => {
    let arr = new Array()
    arr.push(a, b, c)
    arr.sort()
    return arr[2]
}

console.log(maxNum(6, 2, 3))

const sayHello = (name) => {
    console.log(`${name} говорит Hello World!`)
}

sayHello('Vlad')

const sumNumbers = (ceiling) => {
    let result = 0
    for (let i = 1; i <= ceiling; i++) {
        result += i
    }
    return result
}

const limit = 7

console.log(`Я знаю, что сумма чисел от 1 до ${limit} равна ${sumNumbers(limit)}`)

const exponential = (number) => {
    console.log(number**2 + ' ' + number**3)
}

exponential(2)


const sumNum = (string) => {
    let sum = 0
    for(let i = 0; i < string.length; i++) {
        if(+string[i]) {
            sum += +string[i]
        }
    }
    return sum
}


console.log(sumNum('thnt82jc9skl3'))

const checkPassword = (password) => {
    if(password.length < 10) return false
    let numbersCounter = 0
    for (let i = 0; i < password.length; i++) {
        if(+password[i] || +password[i] === 0) {
            numbersCounter++
        }
    }
    if(numbersCounter === 0) return false
    if(!password.match('[!@#$%*]')) return false
    if(!password.match('[A-Z][А-Я]')) return false
    return true
}

console.log(checkPassword('dasfqqqqqqqqqqq123!W@@W'))
