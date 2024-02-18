const setLayout = () => {
    const buttonLoad = document.createElement('button')
    buttonLoad.innerText = 'Загрузить'
    const root = document.getElementById('root')
    root.append(buttonLoad)

    return buttonLoad
}

const but = setLayout()

but.addEventListener('click', async () => {
    const respAlbs = await fetch('https://mockside.vercel.app/api/images/albums')
    const albums = await respAlbs.json()

    const respImgs = await fetch('https://mockside.vercel.app/api/images')
    const images = await respImgs.json()

    console.log('Content Loaded')

    // const cards = []

    // albums.items.forEach(elem => {
    //     const imgs = []
    //     images.items.forEach(el => {
    //         if (elem.id === el.albumId)
    //             imgs.push(el.title)
    //     })
    //     const data = {}
    //     data.title = elem.title
    //     data.images = [...imgs]
    //     cards.push(generateCard(data))
        
    // })

    const cards =  albums.items.map(elem => {
        const imgs = images.items.filter(el => {
            if (elem.id === el.albumId)
                imgs.push(el.title)
        })
        const data = {}
        data.title = elem.title
        data.images = [...imgs]
        cards.push(generateCard(data))
        
    })


    
    cards.forEach(element => {
        const root = document.getElementById('root')
        root.appendChild(element)
    })

})

function generateCard(data) {
    const card = document.createElement('div')

    const title = document.createElement('span')
    title.style = "font-weight: bold"
    title.innerText = data.title

    const container = document.createElement('span')

    data.images.forEach(element => {
        container.innerHTML += '<br>' + element
    });

    card.append(title, container)

    card.style = 'border: 3px solid black'

    return card
}
