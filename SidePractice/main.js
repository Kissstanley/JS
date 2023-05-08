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

let x = +prompt('Enter a number')

switch (x) {
    case 1:{
        document.write('You won an iPad')
    }
    break

    case 2:{
        document.write('You won a phone')
    }
    break

    case 3:{
        document.write('You won a horse')
    }
    break

    case 4:{
        document.write('You won a strawberry')
    }
    break

    case 5:{
        document.write('You won a bicycle')
    }
    break

    default: {
        document.write('Incorrect number')
    }
}
