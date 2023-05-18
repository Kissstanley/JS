// Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let sth='hello world'
console.log(sth.length);
let qwe='lorem ipsum'
console.log(qwe.length);
let zxc='javascript is cool'
console.log(zxc.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.log(sth.toUpperCase());
console.log(qwe.toUpperCase());
console.log(zxc.toUpperCase());
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

console.log(sth.toLowerCase());
console.log(qwe.toLowerCase());
console.log(zxc.toLowerCase());
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   '
console.log(str.replaceAll(' ', ''));

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let strr = 'Ревуть воли як ясла повні';
let stringToarray=strr.split(' ')
console.log(stringToarray)
