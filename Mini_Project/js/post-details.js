// На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
//
//
const id = new URL(location.href).searchParams.get('id')

fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
.then(value => value.json())
.then(value => {

    const posts = document.createElement('div');
    posts.classList.add('posts');
    document.body.appendChild(posts);

    for (const {body,email,name,postId} of value) {

       const post = document.createElement('div');
       post.classList.add('post');
       posts.appendChild(post);

       const post__title = document.createElement('h2');
       post__title.classList.add('post__title');
       post__title.innerText = postId + ' ' + name;

       const post__text = document.createElement('p');
       post__text.classList.add('post__text');
       post__text.innerText = email;

        const post_text = document.createElement('p');
        post_text.classList.add('post__text');
        post_text.innerText = body;

        post.append(post__title,post__text,post_text);
    }
})
// Стилизація проєкта -
// index.html - всі блоки з user - по 2 в рядок. кнопки/аосилвння розташувати під інформацією про user.
//     user-details.html - блок з інфою про user зверху сторінки. Кнопка нижчє, на 90% ширини сторінки, по центру.
//     блоки з короткою іфною про post - в ряд по 5 .
//     post-details.html - блок з інфою про пост зверху. Коментарі - по 4 в ряд.
//     Всі елементи котрі характеризують users, posts, comments візуалізувати, так, щоб було видно що це блоки
//     (дати фон. марджини і тд)
