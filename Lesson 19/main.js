const getObj = () => {
    return this
}


const city1 = {
    name: 'Gomel',
    population: 500000,
    label: 'Lynx',
    getName: function () {
        return this.name
    },
    exportString: function() {
        for(let prop in this) {
            if(typeof this[prop] !== 'function')
                console.log(prop + '=' + this[prop])
        }
    },
    getCity: getObj
}

const city2 = {...city1}
city1.name = 'Minsk'

console.log(city1.getName(), city2.getName())
city1.exportString()

const figure = {
    height: 45,
    width: 56,
    calcArea: function () {
        return this.height * this.width
    }   
}

console.log(figure.calcArea())

figure.changeProps = function (key, value) {
    if(key in this) {
        this[key] = value
    }
}

figure.changeProps('width', 10)

console.log(figure.calcArea())

console.log(city1.getCity)





