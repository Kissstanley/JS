// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
//     6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.




const userId=new URL(location.href).searchParams.get('userId')
fetch(`https://jsonplaceholder.typicode.com/users?${userId}`)
    .then(response=>response.json())
    .then(users=>{
        const field=document.getElementsByClassName('box')[0]
        for (const user of users) {
            const container=document.createElement('div')
            field.appendChild(container)
            if (user.id==userId){
                container.innerHTML=` <div>Id:  ${user.id}</div> <div>Name: ${user.name}</div> <div>Username: ${user.username}</div> <div>Email: ${user.email}</div> <b>Address{</b> <div>Street:${user.address.street} </div> <div>Suite: ${user.address.suite}</div> <div>City: ${user.address.city}</div> <div>Zipcode: ${user.address.zipcode}</div> <b>Geo</b>{<div>Lat: ${user.address.geo.lat}</div> <div>Lng: ${user.address.geo.lng}}</div>} <div>Phone: ${user.phone}</div> <div>Website: ${user.website}</div> <b>Company<b>{<div>Name: ${user.company.name}</div> <div>Catch phrase: ${user.company.catchPhrase}</div> <div>bs: ${user.company.bs}</div>`
            }
        }
        const btn=document.createElement("button")
        btn.innerText='posts of current user'
        field.appendChild(btn)

    });

