// - є масив
let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту

const simpsons_ = document.createElement('div');
simpsons_.classList.add('simpsons_');
document.body.appendChild(simpsons_);

for (const item of simpsons) {

    const simpsons__card = document.createElement('div');
    simpsons__card.classList.add('simpsons__card','member');

    const simpsons__title = document.createElement('h1');
    simpsons__title.innerText = item['name'];
    simpsons__title.classList.add('simpsons__title');

    const simpsons__sompTitle = document.createElement('h2');
    simpsons__sompTitle.classList.add('simpsons__somp-title');
    simpsons__sompTitle.innerText = item['surname'];

    const simpsons__text = document.createElement('p');
    simpsons__text.classList.add('simpsons__text');
    simpsons__text.innerText = item['info'];

    const simpsons__img = document.createElement('img');
    simpsons__img.classList.add('simpsons__img');
    simpsons__img.src = item['photo'];

    simpsons__card.append(simpsons__title,simpsons__sompTitle,simpsons__img,simpsons__text);
    simpsons_.appendChild(simpsons__card);

}

// Цикл в циклі
// - Є масив
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей,
// для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png
// ------------------
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

const courses = document.createElement('div');
courses.classList.add('courses','simpsons_');
document.body.append(courses);

for (const item of coursesArray) {

    const courses__card = document.createElement('div');
    courses__card.classList.add('courses__card','simpsons__card');

    const courses__title = document.createElement('h1');
    courses__title.classList.add('courses__title');
    courses__title.innerText = item["title"];

    const courses__text = document.createElement('p');
    courses__text.classList.add('courses__text');
    courses__text.innerHTML = `<span>Month ${item["monthDuration"]}</span> <span>Hour ${item["hourDuration"]}</span>`;

    const courses__inner = document.createElement('ul');
    courses__inner.classList.add('courses__inner');

    courses__card.append(courses__title,courses__text,courses__inner);
    courses.appendChild(courses__card);

    for (const item__modules of item["modules"]) {

        const courses__item = document.createElement('li');
        courses__item.classList.add('courses__item');
        courses__item.innerText = item__modules;
        courses__inner.append(courses__item);
    }

}


//     - створити блок,
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
//     - додати йому класи wrap, collapse, alpha, beta

const block_div = document.createElement('div');

block_div.classList.add('wrap', 'collapse', 'alpha', 'beta');

block_div.innerText = 'asd qwe'
block_div.style.background = 'red';
block_div.style.color = 'blue';
block_div.style.fontSize = '32px';

const div = block_div.cloneNode(true);
document.body.append(div,block_div);


// - Є масив:
 const arr = ['Main','Products','About us','Contacts'];
//  Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
//  Завдання робити через цикли.

const menu = document.getElementsByClassName('menu')[0];
for (const item of arr) {
    const menu__item = document.createElement('li');
    menu__item.classList.add('menu__item');
    menu__item.innerText = item;
    menu.appendChild(menu__item);
}


// // - Є масив
// // Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// // Завдання робити через цикли.

const coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

const course = document.createElement('div');
course.classList.add('course','simpsons_');
document.body.appendChild(course);

for (const item of coursesAndDurationArray) {

    const course__card = document.createElement('div');
    course__card.classList.add('course__card','simpsons__card');

    const course__title = document.createElement('h1');
    course__title.classList.add('course__title');
    course__title.innerText = item["title"];

    const course__text = document.createElement('div');
    course__text.innerText = `monthDuration ${item["monthDuration"]}`;
    course__text.classList.add('course__text');

    course__card.append(course__title,course__text);
    course.appendChild(course__card);
}

// - Створити довільний елемент з id = text.  Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".

const ul__element = document.getElementsByClassName('menu')[0];

const button__element = document.getElementById('text');

button__element.onclick = () => ul__element.classList.toggle('off');

//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
//     При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18,
//     та повідомити про це користувача

const form_age = document.forms.age;

form_age.onsubmit = (e) =>{

e.preventDefault();

form_age.age_user.value < 18 ? alert(false) : alert(true);

};
