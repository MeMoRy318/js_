const id = new URL(location.href).searchParams.get('id');

fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
.then(value => value.json())
.then(value => {

    const comments__row = document.querySelector('.comments__row');

    for (const {name,email,body} of value) {

        const comment = document.createElement('div');
        comment.classList.add('comment');

        const comment__item = document.createElement('div');
        comment__item.classList.add('comment__item');

        const comment__title = document.createElement('div');
        comment__title.classList.add('comment__title');
        comment__title.innerText = name;

        const comment__email = document.createElement('div');
        comment__email.classList.add('comment__text','comment__text_auto');
        comment__email.innerText = email;

        const comment__body = document.createElement('div');
        comment__body.classList.add('comment__text');
        comment__body.innerText = body;

        comment.appendChild(comment__item);

        comment__item.append(comment__title,comment__email,comment__body);

        comments__row.appendChild(comment);

    }
    console.log(value)
})