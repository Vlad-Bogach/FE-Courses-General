"use strict"

const LOCAL_STORAGE_KEY = 'Data'

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

const input3 = document.createElement('input')

input3.setAttribute('type', 'button')
input3.setAttribute('value', 'Загрузить')

document.querySelector('form').append(input1, input2, input3)

const infoDiv = document.createElement('div')

infoDiv.classList.add('info')

document.querySelector('.wrapper').append(infoDiv)

function generateCard(data) {
    const card = document.createElement('div')
    card.className = 'card'

    card.innerText = data.text + ' ' + data.date

    return card
}

const storage = []

input2.addEventListener('click', () => {

    if (!input1.value) return

    const cardInfo = {
        text: input1.value,
        date: new Date().toString()
    }

    const card = generateCard(cardInfo)

    infoDiv.append(card)

    storage.push(cardInfo)

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(storage))
})

window.addEventListener('DOMContentLoaded', () => {
    const data = localStorage.getItem(LOCAL_STORAGE_KEY)

    const cards = JSON.parse(data) || []

    storage.push(...cards)

    cards.forEach(data => {
        const element = generateCard(data)
        infoDiv.append(element)
    })
})

input3.addEventListener('click', () => {
    const data = localStorage.getItem(LOCAL_STORAGE_KEY)

    const cards = JSON.parse(data) || []

    storage.push(...cards)

    cards.forEach(data => {
        const element = generateCard(data)
        infoDiv.append(element)
    })
})

window.addEventListener('unload', storeData)

