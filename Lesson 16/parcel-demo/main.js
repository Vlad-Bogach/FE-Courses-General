// "use strict"        //только современные возможности языка

// console.log("test")

// let x = 10
// const y = 20
// var z = 30

// console.log(z)

// const bigNumber = 123456789876543212345n    //n в конце для больших чисел
// console.log(bigNumber)

// //тип данных symbol

// const syVal = Symbol(1234)              //уникальный ключ по значению

// const object = new Object();
// const object2 = {}              //то же самое что и в предыдущей строке
// console.log(typeof object)

// const num = 12
// console.log(typeof num)
// console.log(typeof syVal)
// //type of null is object

// const name = 'vasya'
// const lastName = 'Pupkin'
// const fullName = name + ' ' + lastName
// const fullName2 = `${name} ${lastName}` //шаблонная строка - косые кавычки
// console.log(fullName)
// console.log(fullName2)

// // const ans1 = prompt("Введите число")
// // const ans2 = prompt("Введите булевое значение")

// // alert(ans1 + ans2)

// const inputValue = 'Minsk'

// const ans = +prompt("введите число")
// alert(inputValue[ans])

let a = 7
let b = 20

a = a ^ b
b = a ^ b
a = a ^ b


console.log(a)
console.log(b)