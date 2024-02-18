// fetch("https://jsonplaceholder.typicode.com/comments")
// .then(response => response.json())
// .then(result => result.splice(0, 10).forEach(item => {createComment(item.body)}))

// const createComment = (text) => {
//     const root = document.querySelector('#root')
//     const elem = document.createElement('div')
//     elem.innerText = text
//     root.append(elem)
// }

const generateCard = (data) => {
    const root = document.querySelector('#root')
    root.style = 'display: flex'

    const container = document.createElement('div')
    container.id = data.id
    container.style = 'display: flex; flex-direction: column;'
    

    const image = document.createElement('img')
    image.src = data.picture + '?random=' + Math.random()
    image.style = 'max-width: 200px'

    const desc = document.createElement('span')
    desc.innerText = data.name.substring(0, 15)

    container.append(image, desc)
    root.append(container)
    
}


fetch("https://65ca55da3b05d29307e02aa1.mockapi.io/Cards")
.then(response => response.json())
.then(result => {
    result.forEach((card) => generateCard(card))
})

const