const url = new URL(location.href);
const id = url.searchParams.get('id');

fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
.then(value => value.json())
.then(value => {

    const user = document.createElement('ul');
    user.classList.add('user');
    document.body.appendChild(user);



    const iterObj = (obj) =>{

        for (const key in obj) {

            if (typeof obj[key] === 'object'){

                const user__item = document.createElement('h2');
                user__item.innerText = key;
                user__item.classList.add('user__item');
                user.appendChild(user__item);

                iterObj(obj[key])

            }else {
                const user__item = document.createElement('li');
                user__item.innerText = key + ' - ' + obj[key];
                user__item.classList.add('user__item');
                user.appendChild(user__item);
            }

        }
    }
    iterObj(value);
})