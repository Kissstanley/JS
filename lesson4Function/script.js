// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function listPrint(someContent){
    document.write('<ul>')
    document.write(`<li>${someContent}</li><li>${someContent}</li><li>${someContent}</li>`)

}
listPrint('Hi Okten UA')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
    function printList(content, lenght) {
        document.write('</ul>')
            for (let i = 0; i < lenght; i++) {
                document.write(`<li>${content}</li>`);
            }
        document.write('</ul>')
        }

printList('fdsfsdfsdfdsf',5)




// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let ibrahim= [34,53,false, 'OK']
let array =  [12,34,53,'array',true]
function buildList(array){
    for (const argument of array) {
        document.write(`</ul><li>${argument}</li></ul>`);
    }
    return array;

}

buildList(ibrahim)
buildList(array)



