const car = {
    brand: 'audi',
    model: 'a8',
    changeParameters: function(key, newValue) {
        if(key in this) {
            this[key] = newValue
        }
        
    }
}

console.log(car)

car.changeParameters('brand', 'BMW')

console.log(car)

//----------------------------//

const numbers = [1, 2, 3, 4, 5]

// numbers[5] = 6
// numbers[6] = 7

// for (const num of numbers) {
//     console.log(num)
// }

numbers[numbers.length] = 6
console.log(numbers)

numbers.push(7)

numbers.unshift(0)

numbers.pop()

numbers.shift()

const people = ['Vasya', 'Petya', 'Kolya']



for (let i = 0; i < people.length / 2 - 1; i++) {
    const tmp = people[i]
    people[i] = people[people.length - i - 1]
    people[people.lenght - i - 1] = tmp
}

console.log(people)

////
console.log('////////////////////////////////////////////////////')

const fill = (arraySize, value) => {
    const newArray = new Array()
    for (let i = 0; i < arraySize; i++) {
        newArray.push(value)
    }
    return newArray
}

console.log(fill(4, 6))

const reverse = (array) => {
    const newArray = new Array()
    for (const value of array) {
        newArray.unshift(value)
    }
    return newArray
}

console.log(reverse([1, 2, 3, 4]))

const compact = (array) => {
    const newArray = new Array()
    for(const val of array) {
        if(val) {
            newArray.push(val)
        }
    }
    return newArray
}

console.log(compact([1, 0, '', undefined, 7, 'good', null]))

const fromPairs = (array) => {
    const object = {}
    for (const subarray of array) {
        object[subarray[0]] = subarray[1]
    }
    return object
}

console.log(fromPairs([['a', 4], ['b', 7], ['c', 'third']]))

const unique = (array) => {
    const newArray = new Array()
    for (const val of array) {
        if(!newArray.includes(val)) {
            newArray.push(val)
        }
    }
    return newArray
}

console.log(unique([0, 0, 0, 0, 1, 1, 1, 1]))

const union = (array1, array2) => {
    const newArray = new Array()
    newArray.entries
    for (const val of array1) {
        if(!array2.includes(val)) {
            newArray.push(val)
        }
    }
    return newArray
}

console.log(union([1, 2, 'a'], [1, 2, 'b', 'c']))

const frequent = (array) => {

}




