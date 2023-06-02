// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//
// {
//     id: 1,
//         name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//     street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//         lat: '-37.3159',
//             lng: '81.1496'
//     }
// },
//     phone: '1-770-736-8031 x56442',
//         website: 'hildegard.org',
//     company: {
//     name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
// }

// class User{
//
//     constructor(id, name, username, email,addressStreet,addressSuit,addressZipcode,geoLat,geoLng,phone,website,companyName,companyCatchPhrase,companyBs) {
//         this.id = id;
//         this.name = name;
//         this.username = username;
//         this.email = email;
//         this.address = {
//             street:addressStreet,
//             suite:addressSuit,
//             zipcode:addressZipcode,
//             geo:{
//                 lat:geoLat,
//                 lng:geoLng
//             }
//         };
//         this.phone=phone;
//         this.website=website;
//         this.company={
//             name:companyName,
//             catchPhrase:companyCatchPhrase,
//             bs:companyBs
//         }
//
//     }
// }
//
// let user1=new User(1,'Kolya','kalyan','kalik@gmail.com','Moskwa tse Ukraina','Apt. 556','97234-2937','-24.9327','93.4127','1-432-532-2364','cleanThisWorld.ork','putinDodik','wash all russians away!','poperednim wse skazano')
// console.log(user1);
// In this kata you will create a function that takes a list of non-negative integers
// and strings and returns a new list with the strings filtered out.
let user1={
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'gerjlf@gmail.com',
address: {
    street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '92998-3874',
        geo: {
        lat: '-37.3159',
            lng: '81.1496'
        }
}
}
for (const user1Key in user1) {
    console.log(user1Key);
}
let modulesList=coursesArray.map(value => value.modules);
console.log(modulesList);
for (const part of coursesArray) {
    let div=document.createElement("div");
    div.classList.add('box')
    div.style.border='solid green 10px'
    div.style.width='500px'
    div.style.height='500px'
    div.style.background='purple'
    div.style.marginBottom='20px'
    document.body.appendChild(div)
    let h1 =document.createElement("h1")
    h1.innerText=`${part.title}`
    h1.style.marginLeft='25%'
    div.appendChild(h1)
    let divSecond=document.createElement("div");
    divSecond.style.display='flex'
    divSecond.style.justifyContent='center'

    div.appendChild(divSecond)
    let h2 =document.createElement("h2")
    h2.innerText=`monthDuration:${part.monthDuration}`
    h2.style.marginRight='60px'
    divSecond.appendChild(h2)
    let h4=document.createElement("h4")
    h4.innerText=`hourDuration:${part.hourDuration}`
    divSecond.appendChild(h4)
    let ul = document.createElement("ul")
    for (const element of part.modules) {
        let li=document.createElement("li")
        li.innerText=`${element}`
        ul.appendChild(li)
        div.appendChild(ul)
    }

}