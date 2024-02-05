import { genId as generateID } from "./genId";

const idArray = Array(0)

for(let i = 0; i < 5; i++) {
    idArray.push(generateID())
}

console.log(idArray)

const person1 = { 
    name: 'Peter', 
    age: 38, 
    gender: 'male' 
}

const {name, age, gender} = person1

console.log(name)

console.log(age)

console.log(gender)

const cars = [{ 
    title: 'audi', 
    model: 'q5' 
   }, { 
    title: 'volkswagen', 
    model: 'passat' 
   }, { 
    title: 'bmw', 
    model: '540' 
   }]

const [, {title}, {model}] = cars

console.log(title, model)

const people = { 
    john: { 
     name: 'John', 
     age: 23 
    }, 
    peter: { 
     name: 'Peter', 
     age: 58 
    }, 
    kenny: { 
     name: 'Kenny', 
     age: 9 
    } 
}

const { john: {name: nameJohn}, peter: {name: namePeter}, kenny: {name: nameKenny}} = people

const arr = [nameJohn, namePeter, nameKenny]

console.log(arr)

let x = 123

let y = 35

;[y, x] = [x, y]
console.log(x, y) 


