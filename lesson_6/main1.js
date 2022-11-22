// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

const stringLength = (str) => console.log(str.length)
stringLength('hello world')
stringLength('lorem ipsum')
stringLength('javascript is cool')

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

const toUpperStr = (str) => str.toUpperCase()
const a = toUpperStr('hello world')
const b = toUpperStr('lorem ipsum')
const c = toUpperStr('javascript is cool')

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

const toLowerStr = (str) => console.log(str.toLowerCase())
toLowerStr(a)
toLowerStr(b)
toLowerStr(c)

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str = ' dirty string   '
console.log(str.trim());

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
let str_ = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

const stringToarray = (str) => str.split(' ')
console.log(stringToarray(str_));

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

const arrNumber = [10, 8, -7, 55, 987, -1011, 0, 1050, 0]
console.log(arrNumber.map(value => value + ""));

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
const nums = [11, 21, 3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

const sortNums = (nums, direction) => direction === 'ascending' ? nums.sort((a, b) => a - b) : nums.sort((a, b) => b - a)
console.log(sortNums(nums, 'ascending')); // [3,11,21]
console.log(sortNums(nums, 'descending')); // [21,11,3]

// - є масив
const coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

const result = coursesAndDurationArray.sort((a, b) =>
    b['monthDuration'] - a['monthDuration'])
    .filter(value => value['monthDuration'] > 5)
console.log(result);

// описати колоду карт
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

const card = []
const index = [0]
const createCard = (cardSuid, color) => {

    const qwe = ['ace', 'jack', 'queen', 'king']
    for (let i = 6; i <= 14; i++) {
        i <= 10 ? card.push({cardSuid: cardSuid, color: color, value: `${i}`}) :
            card.push({cardSuid: cardSuid, color: color, value: qwe[i - 11]})
    }
    index[0]++
    if (index[0] === 1) {
        card.push({value: 'joker', color: 'red'})
        createCard('heart', 'red')
    } else if (index[0] === 2) {
        card.push({value: 'joker', color: 'black'})
        createCard('spade', 'black')
    } else if (index[0] === 3) {
        createCard('clubs', 'black')
    }
}
createCard('diamond', 'red')


// - знайти піковий туз
console.log(card.find(value => value['value'] === 'ace' && value['cardSuid'] === 'spade'));
// - всі шістки
console.log(card.filter(value => +value['value'] === 6));
// - всі червоні карти
console.log(card.filter(value => value['color'] === 'red'));
// - всі буби
console.log(card.filter(value => value['cardSuid'] === 'diamond'));
// - всі трефи від 9 та більше
console.log(card.filter(value => value['value'].length >= 2 || value['value'] === '9')
    .filter(value => value['cardSuid'] === 'clubs'));

// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }

const obj = card.reduce((accumulator, card) => {

    if (card['cardSuid'] === 'clubs') {
        accumulator['clubs'].push(card)

    } else if (card['cardSuid'] === 'diamond') {
        accumulator['diamonds'].push(card)

    } else if (card['cardSuid'] === 'spade') {
        accumulator['spades'].push(card)

    } else if (card['cardSuid'] === 'heart') {
        accumulator['hearts'].push(card)
    }

    return accumulator
}, {
    spades: [],
    diamonds: [],
    hearts: [],
    clubs: []
})
console.log(obj)

//==============================================ADD_Task================================================================

// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

const cutString = (str, n) => {

    const cutArr = []
    for (let i = 0; i <= str.length; i += n) {

        cutArr.push(str.slice(i, n + i))
    }
    return cutArr
}
console.log(cutString('наслаждение', 3));

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок,
// що складається із зазначеної кількості символів.
// document.writeln(delete_characters(str, 7)); // Каждый
let str_add = 'каждый охотник желает знать';

const delete_characters = (str, length) => str.slice(0, length)
console.log(delete_characters(str_add, 7));

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.
// При цьому всі символи рядка необхідно перевести у верхній регістр.
let str_insert = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

const insert_dash = (str) => str.replaceAll(' ', '-').toUpperCase()
console.log(insert_dash(str_insert));

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру
// у верхній.
const uper = (str) => str.slice(0, 1).toUpperCase() + str.slice(1, str.length)
console.log(uper(str_add));

// - Дано список імен.
let n1 = 'Harry..Potter'
let n2 = 'Ron---Whisley'
let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

const normalayzString = (str) => str.replaceAll(/[-_.]/g, ' ').split(' ').filter(value => value).join(' ')
console.log(normalayzString(n1));

//- створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

const genArrNum = () => {
    const arrNum = []
    for (let i = 0; i < 100; i++) {
        arrNum.push(Math.floor(Math.random() * 100))
    }
    return arrNum
}
const arrNum = genArrNum()

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// Відсортувати його за допомоги sort

console.log(arrNum.sort((a1, b1) => a1 - b1))

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// відфільтрувати  його за допомоги filter, залишивши тільки парні числа (без 0!)

console.log(arrNum.filter(value => value % 2 === 0 && value % 10 !== 0))

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

const capitalize = (str) => str.split(' ').map(value => value.slice(0, 1).toUpperCase() + value.slice(1, value.length)).join(' ')
console.log(capitalize('для адрес електронної пошти'));

// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@),
// наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру
// (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com

const checkingMail = (mail) => {
    if (mail.indexOf('@') > 2 && mail.includes('@') &&
        mail.indexOf('@') + 2 < mail.lastIndexOf('.')) {
        console.log(true)
    } else {
        console.log(false)
    }
}
checkingMail('some.email@gmail.com')
checkingMail('someeMAIL@i.ua')

// відсортувати його в спадаючому порядку за кількістю елементів в полі modules
const coursesArray = [
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

console.log(coursesArray.sort((a, b) => b['modules'].length - a['modules'].length));

// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
// document.writeln(count(str, symb)) // 5
let symb = "о"
let str_2 = "Астрономия это наука о небесных объектах";

const count = (str, stringsearch) => str.length - str.replaceAll(stringsearch, '').length
console.log(count(str_2, symb));

// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
let str_3 = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'

const cuttString = (str, n) => str.split(' ').slice(0, n).join(' ')
console.log(cuttString(str_3, 5));

//=================================================== ADD_Pagination====================================================
const page = []
const createPages = ( pages, pagesCount, currentPage) => {
    if(pagesCount > 10) {
        if(currentPage > 5) {
            for (let i = currentPage-4; i <= currentPage+5; i++) {
                pages.push(i)
                if(i === pagesCount) break
            }
        }
        else {
            for (let i = 1; i <= 10; i++) {
                pages.push(i)
                if(i === pagesCount) break
            }
        }
    }  else {
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
    }
}
//currentPage - поточна Page
//pagesCount - кількість Page
createPages( page,1150, 15)
console.log(page)