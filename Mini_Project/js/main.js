// В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html, котра має детальну інфорацію про об'єкт на який клікнули

fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(value => {
 console.log(value)

        const users = document.createElement('div');
        users.classList.add('users');

        document.body.appendChild(users);

        for (const item of value) {

            const user__block = document.createElement('div');
            user__block.classList.add('user__block');

            const user__title = document.createElement('h2');
            user__title.classList.add('user__title');
            user__title.innerText = item.id + ' ' + item.name;

            const user__btn = document.createElement('button');
            user__btn.classList.add('user__btn');
            user__btn.innerText = 'Send'
            user__btn.onclick = () =>{
                location.href = `user-details.html?id=${item.id}`
            }

            users.appendChild(user__block)
            user__block.append(user__title,user__btn)
        }


    })

//