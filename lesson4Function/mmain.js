// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let users=[
    {id:0, name: 'vasya', age: 31},
    {id:1, name: 'petya', age: 30},
    {id:2, name: 'kolya', age: 29},
    {id:3, name: 'olya', age: 28},
    {id:4, name: 'max', age: 30},
]
function object(arr) {
    for (let i = 0; i < arr.length; i++) {
            document.write(`<div>`);
            document.write(`<h2>${arr[i].id}</h2>`);
            document.write(`<h2>${arr[i].name}</h2>`);
            document.write(`<h2>${arr[i].age}</h2>`);
            document.write(`</div>`);
    }
}
object(users)
// - створити функцію яка повертає найменьше число з масиву

let sth= [34,53,32,23,23,64,12,32,7]

function min(array) {
    let minimal = array[0]
    for (let i = 0; i < array.length; i++) {
        if (array[i] < minimal) {
            minimal = array[i];
        }
    }
    return minimal
}
 let minimal = min(sth);
console.log(minimal)

// створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
function sum(array) {
    let summa=0;
    for (let i = 0; i < array.length; i++) {
        summa +=array[i];
    }
    return summa;
}

let summa =sum(sth);
console.log(summa);


// - створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
function swap(arr, index1, index2) {
    if (index1 < 0 || index1 >= arr.length || index2 < 0 || index2 >= arr.length) {
        console.error('Неправильний індекс');
        return arr;
    }

    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

swap(sth,2,4);
console.log(sth);





// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
function exchange(sumUAH, currencyValues, exchangeCurrency) {
    let res = 0;
    for (let i = 0; i < currencyValues.length; i++) {
        if (currencyValues[i].currency === exchangeCurrency) {
            res = sumUAH / currencyValues[i].value;
        }
    }
    console.log(res)
    return res;
}

exchange(324325,[{currency:'USD',value:36},{currency:'EUR',value:38}],'EUR');

