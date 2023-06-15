// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
//     6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.




const userId=new URL(location.href).searchParams.get('userId')
const back=document.getElementsByClassName('back')[0]
back.onclick=()=>{
    location.href = `../users-Set/users.html`
}

fetch(`https://jsonplaceholder.typicode.com/users?${userId}`)
    .then(response=>response.json())
    .then(users=>{
        const field=document.getElementsByClassName('box')[0]
        for (const user of users) {
            // WARNING Тут я використав == так як порівнюю числове значення (user.id) до числового(userId)
            // WARNING2.0 мене бісило це == і я вирішив все-таки вирішив в кінцевому результаті конвертнути значення (userId) в число
            if (user.id===+(userId)){
                const container=document.createElement('div')
                field.appendChild(container)
                container.innerHTML=` <div>Id:  ${user.id}</div> <div>Name: ${user.name}</div> <div>Username: ${user.username}</div> <div>Email: ${user.email}</div> <b>Address{</b> <div>Street:${user.address.street} </div> <div>Suite: ${user.address.suite}</div> <div>City: ${user.address.city}</div> <div>Zipcode: ${user.address.zipcode}</div> <b>Geo</b>{<div>Lat: ${user.address.geo.lat}</div> <div>Lng: ${user.address.geo.lng}}</div>} <div>Phone: ${user.phone}</div> <div>Website: ${user.website}</div> <b>Company<b>{<div>Name: ${user.company.name}</div> <div>Catch phrase: ${user.company.catchPhrase}</div> <div>bs: ${user.company.bs}</div>`
            }
        }
    });

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(posts=>{
        const content=document.getElementsByClassName('content')[0]
        const btn=document.createElement("button")
        btn.innerText='posts of current user'
        btn.style.width='90vw'
        btn.style.marginLeft='5vw'
        btn.classList.add("back")
        document.body.appendChild(btn)
        btn.onclick=()=>{
            btn.style.background='midnightblue'
            btn.setAttribute("disabled", "disabled")
            for (const post of posts) {
                if (post.userId===+(userId)){
                    const title = document.createElement('div');
                    title.classList.add("post")
                    content.appendChild(title)
                    title.innerHTML=`<div>${post.title}</div>`
                    const info=document.createElement('button')
                    info.innerText=`info about post ${post.id}`
                    info.classList.add("btn")
                    title.appendChild(info)
                    info.onclick=()=>{
                        location.href=`../user_post-details/user-post-details.html?post.id=${post.id}`
                    }
                }
            }}})

