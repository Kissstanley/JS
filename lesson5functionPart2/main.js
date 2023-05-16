// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б


let area= (x,y)=>x*y;
console.log(area(45, 34));
// - створити функцію яка обчислює та повертає площу кола з радіусом r

let circle= (r)=>Math.PI*r**2;
console.log(circle(10));
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let cdr = (h,r)=>2*Math.PI*r*h;
console.log(cdr(13, 11));
// - створити функцію яка приймає масив та виводить кожен його елемент

let asd=[24,45,235,true,'fgdsg']
let gerArray = (arr)=> {
    for (const element of arr) {
        console.log(element)
    }
}
gerArray(asd);



// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
let print = (text) =>document.write(`<div><p>${text}</p></div>`);
print('hello');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let list = (txt)=> document.write(`<ul><li>${txt}</li><li>${txt}</li><li>${txt}</li></ul>`);
list('let`s go')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let cleverList = (any,limit)=>{
    document.write(`<div>`)
    for (let i = 0; i <=limit; i++) {
        document.write(`<li>${any}</li>`)
    }
    document.write(`</div>`)
}

cleverList('Done',7)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

document.write('_______________')
let listArray=(arr)=>{
    document.write(`</ul>`)
    for (let item of arr) {
        document.write(`<li>${item}</li>`)
    }
    document.write(`<ul>`)
}
listArray(asd)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let users=[
    {id:0, name: 'vasya', age: 31},
    {id:1, name: 'petya', age: 30},
    {id:2, name: 'kolya', age: 29},
    {id:3, name: 'olya', age: 28},
    {id:4, name: 'max', age: 30},
]
let object=(arr)=>{
    for (let i = 0; i < arr.length; i++) {
        document.write(`<ul>`)
        document.write(`<li>${arr[i].id}</li>`)
        document.write(`${arr[i].name}`)
        document.write(`<li>${arr[i].age}</li>`)
        document.write('_____')
        document.write(`</ul>`)
    }
}

object(users)

// - створити функцію яка повертає найменьше число з масиву
let sth= [34,53,32,23,23,64,12,32]
let min = (arr)=>{
    let minimal = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]<minimal){
            minimal=arr[i]
        }

    }
    console.log(minimal)
}

min(sth);

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
let sum = (array)=>{
    let summa=0;
    for (let i = 0; i < array.length; i++) {
        summa +=array[i];
    }
    console.log(summa);
}

sum(sth)

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
let swap=(arr, num1,num2)=>{
    let tmp=arr[num1];
    arr[num1]=arr[num2];
    arr[num2]=tmp;
}

swap(sth,3,6)
console.log(sth)


// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

let exchange = (sumUAH, currencyValues, exchangeCurrency) =>{
    let end=0;
    for (let i = 0; i < currencyValues.length; i++) {
        if (currencyValues[i].currency === exchangeCurrency) {
            end = sumUAH / currencyValues[i].value;
        }
    }
    console.log(end)
}

exchange(223144,[{currency:'USD',value:36},{currency:'EUR',value:38}],'USD');

