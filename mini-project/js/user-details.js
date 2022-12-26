const id = new URL(location.href).searchParams.get('id');

fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(value => value.json())
    .then(value => {

        const user__colom = document.querySelector('.user__colom');

        const iterObj = (obj)=>{

            for (const key in obj) {

                if (typeof obj[key] === 'object'){

                    const user__title = document.createElement('div');
                    user__title.classList.add('user__title');
                    user__title.innerText = key;

                    user__colom.appendChild(user__title);

                    iterObj(obj[key])

                }else {

                    const user__text = document.createElement('div');
                    user__text.classList.add('user__text');
                    user__text.innerText = key + ': ' + obj[key];

                    user__colom.appendChild(user__text);

                }
            }
        }
        iterObj(value)

        const user__btn = document.createElement('button');
        user__btn.classList.add('user__btn');
        user__btn.innerText = 'post of current user';
        user__btn.onclick = () =>{

            fetch(`https://jsonplaceholder.typicode.com/users/${value.id}/posts`)
                .then(value1 => value1.json())
                .then(value1 => {

                    const posts__row = document.querySelector('.posts__row');

                    for (const {body,title,id} of value1) {

                        const post = document.createElement('div');
                        post.classList.add('post');

                        const post__colom = document.createElement('div');
                        post__colom.classList.add('post__colom');

                        const post__title = document.createElement('div');
                        post__title.classList.add('post__title');
                        post__title.innerText = title;

                        const post__text = document.createElement('div');
                        post__text.classList.add('post__text');
                        post__text.innerText = body;

                        const post__btn = document.createElement('button');
                        post__btn.classList.add('post__btn');
                        post__btn.innerText = 'post details';

                        post__btn.onclick = () => location.href = `post-details.html?id=${id}`;

                        posts__row.appendChild(post)

                        post.appendChild(post__colom);

                        post__colom.append(post__title,post__text,post__btn);

                    }
                })

        }

        user__colom.appendChild(user__btn);

    })
