const paragraph = document.createElement('p')

paragraph.id = 'container'

const image = document.createElement('img')

image.src = 'https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp'
image.alt = 'Колесо обозрения'
image.classList.add('pict')

paragraph.append(image)

document.querySelector('#root').append(paragraph)

const generateInputs = (value) => {
    const input = document.createElement('input')
    input.type = 'button'
    input.value = value
    return input
}

paragraph.append(generateInputs('Delete All'), generateInputs('Add'))


