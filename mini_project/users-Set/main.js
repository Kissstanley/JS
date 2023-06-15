// В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html, котра має детальну інфорацію про об'єкт на який клікнули
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(users=>{
            const field=document.getElementsByClassName('box')[0]
            for (const user of users) {
                const block=document.createElement('div')
                block.innerHTML=`<div>№${user.id} ${user.name}</div>`
                block.classList.add("user")
                block.style.width='50%'
                field.appendChild(block)

                const a=document.createElement('a')
                a.innerText=`Show info about ${user.name}`
                block.appendChild(a)

                a.onclick=()=>{
                    location.href=`../user-Info/index.html?userId=${user.id}`
                }
            }
        })
