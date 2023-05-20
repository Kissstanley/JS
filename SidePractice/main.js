// Нам дано масив друзів let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"]; Потрібно зробити перевірку якщо
// кількість елементів у масиві більше або дорівнює 3, то виводиться повідомлення про те, що це великий масив, в якому  3 і більше елементи.
//     Інакше слід вивести на екран повідомлення про те, що це маленький масив, в якому менше 3-х елементів.

// let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"]
// if (friends.length >= 3) {
//     document.write('Великий масив(3 і більше елементів)')
// } else {
//     document.write('Масив невелекий(менше 3 елементів)')
// }

// _________________________________________________________________________________________________


// - Маємо 3 числа і між ним  нам потрібно знайти те що посередині.
// Знайти, яке з них є середнім (більше одного, але менше за інше). Перевірити, чи знаходиться перше число між двома іншими.

// let x = +prompt('Enter first number');
// let y = +prompt('Enter second number');
// let z = +prompt('Enter third number');
//
// if (z<x && x<y || y<x && x<z) {
//     document.write(x)
// }
// else if (z<y && y<x || x<y && y<z) {
//     document.write(y)
// }
// else if (x<z && z<y || y<z && z<x) {
//     document.write(y)
// } else {
//     document.write('Фігню пишеш')
// }

// _______________________________________________________________________




// - Перепишіть конструкцію if з використанням умовного оператора '?':
// let a =+prompt('Enter number first time');
// let b =+prompt('Enter number second time');
// if (a + b < 4) {
//     document.write('Мало');
// } else {
//     document.write('Багато');
// }


// ___________________________________________________________________________________________________









// - Маємо будь яке число від -100 , 0 , +100 потрібно перевірити яким є число: позитивним, негативним або нулем
// напишіть це тернарним оператором

//
// let x = +prompt('Enter a number');
//
// if (x>=-100 && x<0) {
//     document.write('Negative number')
// }
// else if (x<=100 && x>0) {
//     document.write('Positive number')
// }
// else if (x===0) {
//     document.write('You  entered zero')
// }
// else{
//     document.write('Incorrect number')
// }



// ___________________________________________________________




//
// - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
//     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.

// let x = +prompt('Enter flat number')
//
// if (x>=1 && x<=20) {
//     document.write('first entrance')
// }
//  else if (x>=21 && x<=48) {
//     document.write('second entrance')
// }
//  else if (x>=49 && x<=90) {
//     document.write('third entrance')
// }
//  else {
//     document.write('Incorrect entrance')
// }






// _________________________________________________________________________________________

//
// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
//     числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .
//
//
// let x = +prompt('Enter a number')
//
// switch (x) {
//     case 1:{
//         document.write('You won an iPad')
//     }
//     break
//
//     case 2:{
//         document.write('You won a phone')
//     }
//     break
//
//     case 3:{
//         document.write('You won a horse')
//     }
//     break
//
//     case 4:{
//         document.write('You won a strawberry')
//     }
//     break
//
//     case 5:{
//         document.write('You won a bicycle')
//     }
//     break
//
//     default: {
//         document.write('Incorrect number')
//     }
// }



// створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)


// function minimal(arr){
//     let res= arr[0]
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i]<res){
//             res=arr[i];
//         }
//
//     }
//     console.log(res)
//     return res
// }
//
// minimal(set)
//
//
// // - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// function max(x,y,z){
//     if (x>y && x>z){
//         console.log(x)
//     }
//     else if (y>x && y>z){
//         console.log(y)
//     }
//     else if (z>x && z>y){
//         console.log(z)
//     }
// }
//
// max(32,45,69)
//
//
//
// // - створити функцію яка повертає найбільше число з масиву
//
// function maximum(arr){
//     let res= arr[0]
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i]>res){
//             res=arr[i];
//         }
//
//     }
//     console.log(res)
//     return res
// }
//
// maximum(set)

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.


// function mid(array){
//  let sum=0
//     for (let i = 0; i < array.length; i++) {
//         sum += array[i];
//     }
//     let average= sum/array.length
//     console.log(average)
//     return average
// }
//
// mid(middle)
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// function higherPrint(array){
//     let high=array[0]
//     for (let i = 0; i < array.length; i++) {
//         if (array[i]>high){
//             high=array[i]
//         }
//
//     }
//     console.log(high)
//     return high
// }
//
// higherPrint(middle)
// higherPrint(set)


// mid(set)
// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// function pushArray(array){
//     for (let i = 0; i < 10; i++) {
//             array.push(Math.random()*100)
//     }
//     console.log(array)
//     return array
// }
//
// pushArray(set)
// pushArray(middle)
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// function pusherArray(array,limit){
//     for (let i = 0; i < 10; i++) {
//             array.push(Math.random()*limit)
//     }
//     console.log(array)
//     return array
// }
//
// pusherArray(set,100)
// pusherArray(arr,40)


// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// function reversedArray(array){

//     for (let i = 0; i < array.length; i++) {
//         array.reverse()
//     }
//     console.log(array);
//     return array;
// }
//
// reversedArray(set)
// reversedArray(middle)


// створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
//
// function split(x,y){

//     if (arguments.length === 1) {
//         console.log(arguments[0]);
//     } else if (arguments.length === 2) {
//         let result = arguments[0] + arguments[1];
//         console.log(result);
//     }
// }
//
// split(36,45)

//
let arr=[]
let set=[34,54,13]
let middle = [23,563,213]
// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]

// function complicationArrays(array,arr){
//     let result=[];
//     for (let i = 0; i < result.length; i++) {
//         for (let i = 0; i < array.length; i++) {
//             result.push(array)
//         }
//
//         for (let j = 0; j < arr.length; j++) {
//             result.push(arr)
//         }
//         let sum = array[i]+arr[j];
//         result.push(sum)
//     }
//     console.log(result)
//     return result;
// }
// function sumArrays(array1, array2) {
//     let result = [];
//     let minLength = array1.length < array2.length ? array1.length : array2.length;
//
//     for (let i = 0; i < minLength; i++) {
//         let sum = array1[i] + array2[i];
//         result.push(sum);
//     }
//     console.log(result)
//     return result;
// }
//
//
//
//  sumArrays(set,middle)

let users=[
    {id:0, name: 'vasya', age: 31},
    {id:1, name: 'petya', age: 30},
    {id:2, name: 'kolya', age: 29},
    {id:3, name: 'olya', age: 28},
    {id:4, name: 'max', age: 30},
]

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
// function keyPrint(array){
//     let keys = [];
//
//     for (let i = 0; i < array.length; i++) {
//         let objectKeys = Object.keys(array[i]);
//         for (let j = 0; j < objectKeys.length; j++) {
//             keys.push(objectKeys[j]);
//         }
//     }
//     console.log(keys)
//     return keys;
// }
//
// keyPrint(users)
//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
// function keyValuePrint(array) {
//     let values = [];
//
//     for (let i = 0; i < array.length; i++) {
//         let object = array[i];
//         for (let key in object) {
//             if (object.hasOwnProperty(key)) {
//                 values.push(object[key]);
//             }
//         }
//     }
//     console.log(values)
//     return values;
// }
// keyValuePrint(users)


// створити функцію яка повертає найбільше число з масиву
// let max = (arr)=>{
//     let maximum=arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i]>maximum){
//             maximum=arr[i]
//         }
//
//     }
//     console.log(maximum)
// }
// max(middle)
// max(set)
//
//
// - створити функцію яка повертає найменьше число з масиву
//
// let min = (arr)=>{
//     let minimum=arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i]<minimum){
//             minimum=arr[i]
//         }
//
//     }
//     console.log(minimum)
// }
// min(middle)
// min(set)



// - Дано натуральное число n. Выведите все числа от 1 до n.
// let queue=(n)=>{
//     for (let i = 1; i < n; i++) {
//         console.log(i)
//     }
// }
//
// queue(6)

// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.

// let incOrDecrease=(a,b)=>{
//     if (a<b){
//         for (let i = a; i  < b;  i++){
//             console.log(i)
//         }
//     }
//     else if (a> b){
//         for (let  i = a; i >b; i-- ){
//             console.log(i)
//         }
//     } else if (a===b){
//         console.error('FALSE')
//     }
//
// }
//
//
// incOrDecrease(11,11)
//


//     - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
let asd='Great job Mark'
// let cutString=(str, n)=> {
//     if (typeof str !== 'string' || typeof n !== 'number' || n < 0) {
//         console.log('неправильне значення');
//     }
//
//     let result = [];
//
//     for (let i = 0; i < str.length; i +=n) {
//         result.push(str.slice(i, i + n));
//     }
//
//     console.log(result);
// }
// cutString(asd,3)
// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writel
//n(delete_characters(str, 7)); // Каждый
//
let delete_characters=(str,n)=>str.substring(0,n);
console.log(delete_characters(asd,6))

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
//
let str = "HTML JavaScript PHP"
let qwe='okey'
let grey='hello'
let insert_dash=(str)=>str.toUpperCase().replaceAll(' ','-');

console.log(insert_dash(str))
// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
let re=(str)=>str[0].toUpperCase().concat(str).replace(str[0],'');
console.log(re(qwe))
console.log(re(grey));
// - Дано список імен.
let n1 = 'Harry..Potter'
let n2 = 'Ron---Whisley'
let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
let normal=(str)=>{
    let newStr=str;
    console.log(newStr
        .replace('.', ' ')
        .replace('-', ' ')
        .replace('_', ' ')
        .replaceAll('.', '')
        .replaceAll('-', '')
        .replaceAll('_', ''));
    return newStr
}

normal(n1)
normal(n2)
normal(n3)

//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
// - створити (або згенерувати, за допомог,и попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа (без 0!)
//
// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com
