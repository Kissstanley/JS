// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function area (a,b){
    return (a*b);
}
let a1=area (23,15)
console.log('S =',a1)
// - створити функцію яка обчислює та повертає площу кола з радіусом r
function radik (r) {
    return (Math.PI*r**2)
}

let r = radik (8)
console.log('S =',r)
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// 2πRH

function stick (h,r){
    return (2*Math.PI*r*h)
}

let c= stick(11,12)
console.log('S ', c)

// - створити функцію яка приймає масив та виводить кожен його елемент

let array =  [12,34,53,'array',true]

let Ibrahim= [34,53,false, user={ name: 'vasya', age: 43}]
function printArray(array){
    for (let arrayElement of array) {
    }
return array
}

printArray(array)
console.log(array)

printArray(Ibrahim)
console.log(Ibrahim)

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function printText(text){
    document.write('<div>')
    document.write(`<h1>${text}</h1>`)
    document.write('</div>')
    return text
}

printText('Hello')
printText('My name is Ibrahim and today we are learning c++ and even trying to create own array and will push some items into him')
printText('korn and kiss')


