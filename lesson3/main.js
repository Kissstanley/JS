// За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for (let i = 1; i <= 10; i++) {
    document.write(`<div>lorem ipsum</div>`);
}

document.write('_____________ ')
// За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

for (let i = 1; i <= 10; i++) {
    document.write(`<div>lorem ipsum ${i}</div>`);
}

document.write('_____________ ')
// За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let i = 0
while (i <=20) {
    document.write(`<div><h1>Item</h1></div>`);
    i++;
}

document.write('_____________ ')
// За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

let j = 0
while (j <=20) {
    document.write(`<div><h1>Item ${j}</h1></div>`);
    j++;
}

