// На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)






const postId=new URL(location.href).searchParams.get('post.id')
const back=document.getElementsByClassName('back')

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(posts=>{
        const options=document.getElementsByClassName('options')[0]

        for (const post of posts) {
            const parameter=document.createElement('div')
            options.appendChild(parameter)
            if (post.id===+(postId)){
                parameter.innerHTML=`<div>User Id: ${post.userId}</div>
                                    <div>Post id: ${post.id}</div>
                                    <div>Title: ${post.title}</div>
                                    <div>Content: ${post.body}</div>`
            }
        }
    })

fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res=>res.json())
    .then(comments=>{
        const feedback=document.getElementsByClassName('feedback')[0]
        const showMe=document.createElement('button')
        feedback.appendChild(showMe)
        showMe.innerText='Show answers'
        showMe.onclick=()=>{
            showMe.setAttribute("disabled", "disabled")
            for (const comment of comments) {
                const answer=document.createElement('div')
                feedback.appendChild(answer)
                if (comment.postId===+(postId)){
                    answer.innerHTML=`<div>№${comment.id}</div><div>Name:${comment.name}</div><div>Email:${comment.email}</div><div>Content:${comment.body}</div><br>`
                }
        }
    }})