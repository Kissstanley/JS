// На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)



//ПОЧАТКОВА СТОРІНКА users-Set




const postId=new URL(location.href).searchParams.get('post.id')
const back=document.getElementsByClassName('back')[0]

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(posts=>{
        const options=document.getElementsByClassName('options')[0]
        for (const post of posts) {
            if (post.id===+(postId)){
                const parameter=document.createElement('div')
                options.appendChild(parameter)
                parameter.innerHTML=`<div>User Id: ${post.userId}</div>
                                    <div>Post id: ${post.id}</div>
                                    <div>Title: ${post.title}</div>
                                    <div>Content: ${post.body}</div>`
                back.onclick=()=>{
                    location.href = `../user-Info/index.html?userId=${post.userId}`
                }
            }
        }
    })

fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res=>res.json())
    .then(comments=>{
        const feedback=document.getElementsByClassName('feedback')[0]
        const showMe=document.createElement('button')
        document.body.appendChild(showMe)
        showMe.innerText='Show comments'
        showMe.classList.add("back")
        showMe.style.background='rebeccapurple'
        showMe.onclick=()=>{
            showMe.innerText='comments'
            showMe.style.background='midnightblue'
            showMe.setAttribute("disabled", "disabled")
            for (const comment of comments) {
                if (comment.postId===+(postId)){
                    const answer=document.createElement('div')
                    answer.classList.add('answer')
                    feedback.appendChild(answer)
                    answer.innerHTML=`<div>№${comment.id}</div><div>Name:${comment.name}</div><div>Email:${comment.email}</div><div>Content:${comment.body}</div><br>`
                }
        }
    }})