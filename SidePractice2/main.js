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
let arr1=[1,2,'a','b']
let arr2=[1,'a','b',0,15]
let arr3=[1,2,'aasf','1','123',123]

function arrayFilter(value){
    return typeof value!=='string'
}
let filtered=(arr)=>arr.filter(arrayFilter)
console.log(filtered(arr1));
console.log(filtered(arr2));
console.log(filtered(arr3));