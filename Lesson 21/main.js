const students = [
    { name: 'alex', age: 20 },
    { name: 'mike', age: 24 },
    { name: 'masha', age: 20 },
    { name: 'stas', age: 18 },
];



function groupStudents(students) {
    const answer = {}
    for(const student of students) {
        if(!(student.age in answer)) {
            answer[student.age] = []
        }
        answer[student.age].push(student)
    }
    return answer
}


console.log(groupStudents(students))

const ask = (question, yes, no) => {
    if(confirm(question)) yes()
    else no()
}

// ask('Вы согласны', () => alert('Вы согласились'), () => alert('Вы отказались'))

const names = ['Max', 'Alex', 'Peter']

names.forEach((value) => console.log(value[0]))

const namesUpper = names.map((value) => value.toLocaleUpperCase())

console.log(namesUpper)

const namesWithLetterA = names.filter((value) => value.includes('a') || value.includes('A'))

console.log(namesWithLetterA)

const commonString = names.reduce((accum, value) => accum + value, '')

console.log(commonString)

const totalNumberOfSymbols = names.reduce((accum, value) => accum + value.length, 0)

console.log(totalNumberOfSymbols)

////////////////////////////////////////////////////////////////////////////////////

//IIFE - Immediately Invoked Functional Expression

;(() => console.log(12345))() //обязательно ставить ; перед самовызывающейся функции для отделения от предыдущего кода

////////////////////////////////////////////////////////////////////////////////////

//функции-конструкторы

const person1 = {
    name: 'Bob',
    has2Hands: true
}

const person2 = {
    name: 'Kevin',
    has2Hands: true
}

function Person(name) {      //обязательно через function()
    //this = {}               //под капотом

    this.name = name
    this.has2Hands = true

    //return this            //это тоже
}

const person3 = new Person('Daemon')

function Car(brand, model) {
    this.brand = brand
    this.model = model
    this.showCarInfo = function() {
        console.log(`Brand: ${this.brand}, Model: ${this.model}`)
    }
    this.changeModel = function(newModel) {
        this.model = newModel
    }
}

const firstCar = new Car('BMW', 'm5')

const secondCar = new Car('Audi', 'R8')

firstCar.showCarInfo()

firstCar.changeModel('X6')

firstCar.showCarInfo()


//tasks

const getRandomNumbers = (amount) => {
    const result = new Array()
    for (let i = 0; i < amount; i++) {
        result.push(Math.trunc(Math.random() * 10))
    }
    return result
}

const secondGreatestLowest = (array) => {
    array.sort()
    console.log(array)
    let lowest
    let i = 0

    while(array[i] === array[++i] && i < array.length);

    if(i === array.length) lowest = undefined
    else lowest = array[i]

    i = array.length - 1

    while(array[i] === array[--i]);

    if(i === -1) greatest = undefined
    else greatest = array[i]

    return [lowest, greatest]
}


console.log(secondGreatestLowest(getRandomNumbers(10)))