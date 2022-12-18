// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
//     6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.

const id = new URL(location.href).searchParams.get('id');
fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(value => value.json())
    .then(value => {

        const user = document.createElement('div');
        user.classList.add('user');
        document.body.appendChild(user);

        const user__card = document.createElement('div');
        user__card.classList.add('user__card');
        user.appendChild(user__card);


        function iterObj(obj) {

            for (const key in obj) {

                if (typeof obj[key] === 'object') {
                    const user__title = document.createElement('h2');
                    user__title.classList.add('user__title');

                    user__title.innerText = key;

                    user__card.appendChild(user__title);

                    iterObj(obj[key]);

                } else {

                    const user__text = document.createElement('p');
                    user__text.classList.add('user__text');
                    user__text.innerText = key + ' ' + obj[key];

                    user__card.appendChild(user__text);
                }
            }
        }

        iterObj(value)

        const user__btn = document.createElement('button');
        user__btn.classList.add('user__btn');
        user__btn.innerText = 'post of current user';

        user__card.appendChild(user__btn);

        user__btn.onclick = ()=>{

            fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
                .then(value1 => value1.json())
                .then(value1 => {
                    console.log(value1)

                    const posts = document.createElement('div');
                    posts.classList.add('posts');
                    user.appendChild(posts);

                    for (const {id,body,title,userId} of value1) {

                        const post__card = document.createElement('div');
                        post__card.classList.add('posts__card');

                        const post__title = document.createElement('h2');
                        post__title.classList.add('post__title');
                        post__title.innerText = id + ' ' + title;

                        const post__text = document.createElement('p');
                        post__text.classList.add('post__text');
                        post__text.innerText = body;

                        const post__btn = document.createElement('button');
                        post__btn.classList.add('post__btn');
                        post__btn.innerText = 'post details'
                        post__btn.onclick = ()=> location.href = `post-details.html?id=${id}`;

                        post__card.append(post__title,post__text,post__btn);
                        posts.appendChild(post__card);

                    }

                })
        }




    })