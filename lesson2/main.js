// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let arr=[true, 3,43,34,53,'ok','hi','wou','dfgds',false];
console.log(arr)

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book1 = {
    title: 'Чайка Джонатан Лівінгстоун',
    pageCount: 120,
    genre: 'драма'
};
let book2 = {
    title: 'Термінатор',
    pageCount: 250,
    genre: 'фантастика'
};
let book3 = {
    title: 'Дон Кіхот',
    pageCount: 156,
    genre: 'роман'
};

console.log(book1)
console.log(book2)
console.log(book3)


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

let book11 = {
    title: 'Чайка Джонатан Лівінгстоун',
    pageCount: 120,
    genre: 'драма',
    authors: [
        {
        name: "Річард Бах",
        age: 86
        }
    ]
};
let book22 = {
    title: 'Термінатор',
    pageCount: 250,
    genre: 'фантастика',
    authors: [
        {
            name: "Шон Хатсон",
            age: 65
        }
    ]
};
let book33 = {
    title: 'Дон Кіхот',
    pageCount: 156,
    genre: 'роман',
    authors: [
        {
            name: "Мігель де Сервантес",
            age: 79
        }
    ]
};

console.log(book11)
console.log(book22)
console.log(book33)

// Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users = [
    {
        name: 'Kolya',
        username: 'kalian',
        password:'pashtet'
    },
    {
        name: 'olya',
        username: 'alian',
        password:'estet'
    },
    {
        name: 'Julia',
        username: 'Julian',
        password:'hope123'
    },
    {
        name: 'Bob',
        username: 'biba',
        password:'tyubick'
    },
    {
        name: 'Billy',
        username: 'Herington',
        password:'Spank'
    },
    {
        name: 'Bomj',
        username: 'albert',
        password:'samogon'
    },
    {
        name: 'Oleg',
        username: 'karapuz',
        password:'souvenir'
    },
    {
        name: 'Black',
        username: 'Betty',
        password:'poko'
    },
    {
        name: 'Ostap',
        username: 'pyaniy_goblin',
        password:'espander'
    },
    {
        name: 'Milan',
        username: 'Kalzone',
        password:'zhowtiy shahrai'
    }
];

users.forEach(user => console.log(user.password));