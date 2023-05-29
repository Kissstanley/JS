// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

let div=document.createElement("div")
div.classList.add('wrap', 'collapse', 'alpha', 'beta')
div.innerText='hi there';
div.style.color='gold';
div.style.fontSize='20px';
div.style.height='100px';
div.style.width='100px';
div.style.backgroundColor='green';
div.style.marginBottom='30px'
document.body.appendChild(div)
document.body.appendChild(div.cloneNode(true))




// - Є масив:
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
let someArray=     ['Main','Products','About us','Contacts']
let ul=     document.createElement("ul")
document.body.appendChild(ul)
for (const element of someArray) {
    let li=document.createElement("li")
    li.innerText=`${element}`
    ul.appendChild(li)
}


// - Є масив
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (const item of coursesAndDurationArray) {
    let div=document.createElement("div");
    for (const itemKey in item) {
        div.innerText=`${item.title}-${item.monthDuration}`
    }
    div.style.backgroundColor='blue';
    div.style.marginBottom='30px';
    document.body.appendChild(div)
}
