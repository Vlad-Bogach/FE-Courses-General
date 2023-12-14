const x = 456

const res = x + Number((Boolean(x)))

console.log(res)


const color = 'gray'

if(color === 'blue')
    console.log('blue')
else if(color === 'green')
     console.log('green')
else if(color === 'red')
    console.log('red')
else if(color === 'yellow')
    console.log('yellow')
else if(color === 'gray')
    console.log('gray')


switch(color) {
    case 'red':
        console.log('red')
        break;
    case 'gray':
        console.log('gray')
        break;
    default:
        console.log('none of above')

}

// for (let i = 1; i <= 10; i++){
//     console.log(i)
// }

const name = 'VasilyPupkin'
let i = 0
    
do{
    console.log(name[i])
}while(++i < name.length)

const text = '23412894hewf908h38921hr02'

for (let i = 0; i < text.length; i++) {
    if(Number(text[i]))
        console.log(text[i])
}