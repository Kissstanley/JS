// є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let num=[10,8,-7,55,987,-1011,0,1050,0]
let map1=num.map(String);
console.log(map1);
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
//
let nums = [11,21,3];
let sortNums=(arr, direction)=> {
    if (direction === 'ascending') {
        arr.sort((a, b)=>a - b);
    } else if (direction === 'descending') {
        arr.sort((a, b)=> b - a);
    } else {
        console.log('Неправильний напрямок сортування. Використовуйте "ascending" або "descending".');
        return;
    }
    return arr;
}

console.log(sortNums(nums, 'descending'));
console.log(sortNums(nums, 'ascending'));
// ==========================
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let sort = coursesAndDurationArray.sort((a,b)=>{
    return b.monthDuration-a.monthDuration;
});
console.log(sort)

let filter = coursesAndDurationArray.filter(value => value.monthDuration>5);
console.log(filter);

console.log(coursesAndDurationArray.map((value, index) => {
    return { id:index+1,...value}
}));


// описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
// =========================
//
let cards = [
    { cardSuit: 'spade', value: '6', color: 'black' },
    { cardSuit: 'diamond', value: '6', color: 'red' },
    { cardSuit: 'heart', value: '6', color: 'red' },
    { cardSuit: 'clubs', value: '6', color: 'black' },
    { cardSuit: 'spade', value: '7', color: 'black' },
    { cardSuit: 'diamond', value: '7', color: 'red' },
    { cardSuit: 'heart', value: '7', color: 'red' },
    { cardSuit: 'clubs', value: '7', color: 'black' },
    { cardSuit: 'spade', value: '8', color: 'black' },
    { cardSuit: 'diamond', value: '8', color: 'red' },
    { cardSuit: 'heart', value: '8', color: 'red' },
    { cardSuit: 'clubs', value: '8', color: 'black' },
    { cardSuit: 'spade', value: '9', color: 'black' },
    { cardSuit: 'diamond', value: '9', color: 'red' },
    { cardSuit: 'heart', value: '9', color: 'red' },
    { cardSuit: 'clubs', value: '9', color: 'black' },
    { cardSuit: 'spade', value: '10', color: 'black' },
    { cardSuit: 'diamond', value: '10', color: 'red' },
    { cardSuit: 'heart', value: '10', color: 'red' },
    { cardSuit: 'clubs', value: '10', color: 'black' },
    { cardSuit: 'spade', value: 'jack'||'11', color: 'black' },
    { cardSuit: 'diamond', value: 'jack'||'11', color: 'red' },
    { cardSuit: 'heart', value: 'jack'||'11', color: 'red' },
    { cardSuit: 'clubs', value: 'jack'||'11', color: 'black' },
    { cardSuit: 'spade', value: 'queen'||'12', color: 'black' },
    { cardSuit: 'diamond', value: 'queen'||'12', color: 'red' },
    { cardSuit: 'heart', value: 'queen'||'12', color: 'red' },
    { cardSuit: 'clubs', value: 'queen'||'12', color: 'black' },
    { cardSuit: 'spade', value: 'king'||'13', color: 'black' },
    { cardSuit: 'diamond', value: 'king'||'13', color: 'red' },
    { cardSuit: 'heart', value: 'king'||'13', color: 'red' },
    { cardSuit: 'clubs', value: 'king'||'13', color: 'black' },
    { cardSuit: 'spade', value: 'ace'||'14', color: 'black' },
    { cardSuit: 'diamond', value: 'ace'||'14', color: 'red' },
    { cardSuit: 'heart', value: 'ace'||'14', color: 'red' },
    { cardSuit: 'clubs', value: 'ace'||'14', color: 'black' },
];

let findAce=cards.find(value => value.cardSuit==='clubs'&&value.value==='ace')
console.log(findAce)
let findSix = cards.filter(value => value.value==='6')
console.log(findSix)

let findRed = cards.filter(value => value.color==='red')
console.log(findRed)

let findDiamonds=cards.filter(value => value.cardSuit==='diamond')
console.log(findDiamonds);

let spadeFilter=cards.filter(value => value.cardSuit==='spade'&&value.value>='9'||value.value==='10'&&value.cardSuit==='spade');
console.log(spadeFilter)
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
console.log(cards.reduce((accumulator, card) => {
    if (card.cardSuit==='spade') {
        accumulator.spades.push(card);
    } else if(card.cardSuit==='diamond'){
        accumulator.diamonds.push(card);
    } else if(card.cardSuit==='heart'){
        accumulator.hearts.push(card);
    } else if(card.clubs==='club'){
        accumulator.clubs.push(card);
    }
    return accumulator;
}, {spades:[], diamonds:[],hearts:[],clubs:[]}));


// взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

let findSaas=coursesArray.filter(value => value.modules.includes('sass'))
console.log(findSaas);
let findDocker=coursesArray.filter(value => value.modules.includes('docker'))
console.log(findDocker);