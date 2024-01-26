"use strict"

// window.addEventListener('DOMContentLoaded', () => {
//     document.querySelector('#root').innerText += 'text'
//     '<div></div>'
// })

let cardCounter = 1

const wrapper = document.createElement('div')

document.querySelector('#root').append(wrapper)

wrapper.classList.add('wrapper')

const form = document.createElement('form')

document.querySelector('.wrapper').append(form)

const input1 = document.createElement('input')

input1.setAttribute('type', 'text')
input1.setAttribute('placeholder', 'Введите текст')

const input2 = document.createElement('input')

input2.setAttribute('type', 'button')
input2.setAttribute('value', 'Добавить')

document.querySelector('form').append(input1, input2)

const infoDiv = document.createElement('div')

infoDiv.classList.add('info')

infoDiv.innerText = 'текст'


document.querySelector('.wrapper').append(infoDiv)

// input1.addEventListener('input', (event) => {
//     console.log(event.target.value)
// })

input2.addEventListener('click', () => {
    const card = document.createElement('div')
    card.classList.add('card')
    card.setAttribute('style', 'display: block; border: 1px solid blue; padding: 1em; margin: 1em;')
    card.setAttribute('id', `number${cardCounter}`)
    document.querySelector('.info').append(card)

    const image = document.createElement('img')
    image.setAttribute('src', 'https://netmus.ru/image/data/opticheskaya-mashina-dlya-sortirovki-UNISORT-P1000-R/16.png')
    image.setAttribute('style', 'width: 100px;')
    document.querySelector(`#number${cardCounter}`).append(image)

    const span = document.createElement('span')
    span.innerText = input1.value
    document.querySelector(`#number${cardCounter}`).append(span)

    const input = document.createElement('input')
    input.setAttribute('type', 'button')
    input.setAttribute('value', 'x')
    document.querySelector(`#number${cardCounter}`).append(input)
})