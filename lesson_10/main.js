// зробити файл users.html

// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
//     вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
// отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)

const users = document.createElement('div');
users.classList.add('users');

const users__list = document.createElement('ol');
users__list.classList.add('users__list');

users.appendChild(users__list);
document.body.appendChild(users);

fetch('http://jsonplaceholder.typicode.com/users')
.then(value => value.json())
.then(value => {
    for (const {id,name} of value) {
        const users__item = document.createElement('li');
        users__item.classList.add('users__item');

        const users__linck = document.createElement('a');
        users__linck.classList.add('users__linck');

        users__linck.innerText = id + '' + name;
        users__linck.href = `user-details.html?id=${id}`;

        users__item.appendChild(users__linck);
        users__list.appendChild(users__item);
    }

})