const button1 = document.createElement('button')
button1.innerText = "Загрузить"

const button2 = document.createElement('button')
button2.innerText = "Загрузить2"

const endLoading = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Загрузка закончилась')
            resolve()
        }, 2000)
    })
}

const loadContent = () => {
    return new Promise((resolve, reject) => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(result => {
            console.log(result)
            resolve()
        })
    })
}

const startLoading = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Загрузка началась')
            resolve()
        }, 2000)
    })
}

button1.addEventListener('click', () => {
    startLoading()
    .then(() => {
        loadContent()
        .then(() => {
            endLoading()
        })
    })
})

button2.addEventListener('click', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    console.log(await response.json())
})



document.getElementById('root').appendChild(button1)

document.getElementById('root').appendChild(button2)


