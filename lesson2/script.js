// Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x=10
if (x !==0 ) {
    document.write('<div>Вірно</div>')
}else {
    document.write('<div>Невірно</div>')

}
// let x=1
// if (x !==0 ) {
//     document.write('<div>Вірно</div>')
// }else {
//     document.write('<div>Невірно</div>')
// }                                                   //виведе Вірно

// let x=0
// if (x !==0 ) {
//     document.write('<div>Вірно</div>')
// }else {
//     document.write('<div>Невірно</div>')
// }                                                    //виведе Невірно

// let x=-3
// if (x !==0 ) {
//     document.write('<div>Вірно</div>')
// }else {
//     document.write('<div>Невірно</div>')
// }                                                     //виведе Вірно


//_______________________________________________________________________________________________________________________________________________________________//


// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = +prompt('Введіть число від 1 до 59')
if (time<15) {
    document.write('<div>Перша чверть</div>')
}else if (time <30) {
    document.write('<div>Друга чверть</div>')
}else if (time <45) {
    document.write('<div>Третя чверть</div>')
}else if (time <60) {
    document.write('<div>Четверта чверть</div>')
}else if (time) {
    document.write('<div>Читай уважніше</div>')
}

// У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = +prompt('Введіть день (від 1 до 31) ')
if (day<11) {
    document.write('<div>Перша декада</div>')
}else if (day <21) {
    document.write('<div>Друга декада</div>')
}else if (day <32) {
    document.write('<div>Третя декада</div>')
}else if (day) {
    document.write('<div>Не підходить</div>')
}

// Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день
let week = prompt('Введіть порядковий номер дня тижня (від 1 до 7)')

switch (week) {

    case '1':
        document.write('<div>Monday</div>')
        break;
    case '2':
        document.write('<div>Thursday</div>')
        break;
    case '3':
        document.write('<div>Wednesday</div>')
        break;
    case '4':
        document.write('<div>Tuesday</div>')
        break;
    case '5':
        document.write('<div>Friday</div>')
        break;
    case '6':
        document.write('<div>Saturday</div>')
        break;
    case '7':
        document.write('<div>Sunday</div>')
        break;
}