// // - Знайти та вивести довижину настипних стрінгових значень
// // 'hello world', 'lorem ipsum', 'javascript is cool'
//
// const stringLength = (str) => console.log(str.length)
// stringLength('hello world')
// stringLength('lorem ipsum')
// stringLength('javascript is cool')
//
// // - Перевести до великого регістру наступні стрінгові значення
// // 'hello world', 'lorem ipsum', 'javascript is cool'
//
// const toUpperStr = (str) => str.toUpperCase()
// const a = toUpperStr('hello world')
// const b = toUpperStr('lorem ipsum')
// const c = toUpperStr('javascript is cool')
//
// // - Перевести до нижнього регістру настипні стрінгові значення
// // 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
//
// const toLowerStr = (str) => console.log(str.toLowerCase())
// toLowerStr(a)
// toLowerStr(b)
// toLowerStr(c)
//
// // - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//
// let str = ' dirty string   '
// console.log(str.trim());
//
// // - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let str_ = 'Ревуть воли як ясла повні';
// // let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
//
// const stringToarray = (str) => str.split(' ')
// console.log(stringToarray(str_));
//
// // - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
//
// const arrNumber = [10, 8, -7, 55, 987, -1011, 0, 1050, 0]
// console.log(arrNumber.map(value => value + ""));
//
// // - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// // або навпаки в залежності від значення аргументу direction.
// const nums = [11, 21, 3];
// // sortNums(nums,'ascending') // [3,11,21]
// // sortNums(nums,'descending') // [21,11,3]
//
// const sortNums = (nums, direction) => direction === 'ascending' ? nums.sort((a, b) => a - b) : nums.sort((a, b) => b - a)
// console.log(sortNums(nums, 'ascending')); // [3,11,21]
// console.log(sortNums(nums, 'descending')); // [21,11,3]
//
// // - є масив
// const coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// // -- відсортувати його за спаданням за monthDuration
// // -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//
// const result = coursesAndDurationArray.sort((a, b) =>
//     b['monthDuration'] - a['monthDuration'])
//     .filter(value => value['monthDuration'] > 5)
// console.log(result);
//
// // описати колоду карт
// // {
// //     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
// //         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
// //     color:'', // 'red','black'
// // }
//
// const card = []
// const index = [0]
// const createCard = (cardSuid, color) => {
//
//     const qwe = ['ace', 'jack', 'queen', 'king']
//     for (let i = 6; i <= 14; i++) {
//         i <= 10 ? card.push({cardSuid: cardSuid, color: color, value: `${i}`}) :
//             card.push({cardSuid: cardSuid, color: color, value: qwe[i - 11]})
//     }
//     index[0]++
//     if (index[0] === 1) {
//         card.push({value: 'joker', color: 'red'})
//         createCard('heart', 'red')
//     } else if (index[0] === 2) {
//         card.push({value: 'joker', color: 'black'})
//         createCard('spade', 'black')
//     } else if (index[0] === 3) {
//         createCard('clubs', 'black')
//     }
// }
// createCard('diamond', 'red')
//
//
// // - знайти піковий туз
// console.log(card.find(value => value['value'] === 'ace' && value['cardSuid'] === 'spade'));
// // - всі шістки
// console.log(card.filter(value => +value['value'] === 6));
// // - всі червоні карти
// console.log(card.filter(value => value['color'] === 'red'));
// // - всі буби
// console.log(card.filter(value => value['cardSuid'] === 'diamond'));
// // - всі трефи від 9 та більше
// console.log(card.filter(value => value['value'].length >= 2 || value['value'] === '9')
//     .filter(value => value['cardSuid'] === 'clubs'));
//
// // Додатково по reduce
// // Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// // {
// //     spades:[],
// //         diamonds:[],
// //     hearts:[],
// //     clubs:[]
// // }
//
// const obj = card.reduce((accumulator, card) => {
//
//     if (card['cardSuid'] === 'clubs') {
//         accumulator['clubs'].push(card)
//
//     } else if (card['cardSuid'] === 'diamond') {
//         accumulator['diamonds'].push(card)
//
//     } else if (card['cardSuid'] === 'spade') {
//         accumulator['spades'].push(card)
//
//     } else if (card['cardSuid'] === 'heart') {
//         accumulator['hearts'].push(card)
//     }
//
//     return accumulator
// }, {
//     spades: [],
//     diamonds: [],
//     hearts: [],
//     clubs: []
// })
// console.log(obj)
//
// //==============================================ADD_Task================================================================
//
// // - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// // document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
//
// const cutString = (str, n) => {
//
//     const cutArr = []
//     for (let i = 0; i <= str.length; i += n) {
//
//         cutArr.push(str.slice(i, n + i))
//     }
//     return cutArr
// }
// console.log(cutString('наслаждение', 3));
//
// // - Напишіть функцію delete_characters(str, length), яка повертає підрядок,
// // що складається із зазначеної кількості символів.
// // document.writeln(delete_characters(str, 7)); // Каждый
// let str_add = 'каждый охотник желает знать';
//
// const delete_characters = (str, length) => str.slice(0, length)
// console.log(delete_characters(str_add, 7));
//
// // - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.
// // При цьому всі символи рядка необхідно перевести у верхній регістр.
// let str_insert = "HTML JavaScript PHP";
// // document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
//
// const insert_dash = (str) => str.replaceAll(' ', '-').toUpperCase()
// console.log(insert_dash(str_insert));
//
// // - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру
// // у верхній.
// const uper = (str) => str.slice(0, 1).toUpperCase() + str.slice(1, str.length)
// console.log(uper(str_add));
//
// // - Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// // Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// // let n1 = 'Harry Potter'
// // let n2 = 'Ron Whisley'
// // let n3 = 'Hermione Granger'
//
// const normalayzString = (str) => str.replaceAll(/[-_.]/g, ' ').split(' ').filter(value => value).join(' ')
// console.log(normalayzString(n1));
//
// //- створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
//
// const genArrNum = () => {
//     const arrNum = []
//     for (let i = 0; i < 100; i++) {
//         arrNum.push(Math.floor(Math.random() * 100))
//     }
//     return arrNum
// }
// const arrNum = genArrNum()
//
// // - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// // Відсортувати його за допомоги sort
//
// console.log(arrNum.sort((a1, b1) => a1 - b1))
//
// // - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// // відфільтрувати  його за допомоги filter, залишивши тільки парні числа (без 0!)
//
// console.log(arrNum.filter(value => value % 2 === 0 && value % 10 !== 0))
//
// // - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
//
// const capitalize = (str) => str.split(' ').map(value => value.slice(0, 1).toUpperCase() + value.slice(1, value.length)).join(' ')
// console.log(capitalize('для адрес електронної пошти'));
//
// // - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@),
// // наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру
// // (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// // Протестувати на значеннях
// // someemail@gmail.com
// // someeMAIL@gmail.com
// // someeMAIL@i.ua
// // some.email@gmail.com
//
// const checkingMail = (mail) => {
//     if (mail.indexOf('@') > 2 && mail.includes('@') &&
//         mail.indexOf('@') + 2 < mail.lastIndexOf('.')) {
//         console.log(true)
//     } else {
//         console.log(false)
//     }
// }
// checkingMail('some.email@gmail.com')
// checkingMail('someeMAIL@i.ua')
//
// // відсортувати його в спадаючому порядку за кількістю елементів в полі modules
// const coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
//
// console.log(coursesArray.sort((a, b) => b['modules'].length - a['modules'].length));
//
// // - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
// // document.writeln(count(str, symb)) // 5
// let symb = "о"
// let str_2 = "Астрономия это наука о небесных объектах";
//
// const count = (str, stringsearch) => str.length - str.replaceAll(stringsearch, '').length
// console.log(count(str_2, symb));
//
// // - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
// let str_3 = "Сила тяжести приложена к центру масс тела";
// // document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'
//
// const cuttString = (str, n) => str.split(' ').slice(0, n).join(' ')
// console.log(cuttString(str_3, 5));
//
// //=================================================== ADD_Pagination====================================================
// const page = []
// const createPages = ( pages, pagesCount, currentPage) => {
//     if(pagesCount > 10) {
//         if(currentPage > 5) {
//             for (let i = currentPage-4; i <= currentPage+5; i++) {
//                 pages.push(i)
//                 if(i === pagesCount) break
//             }
//         }
//         else {
//             for (let i = 1; i <= 10; i++) {
//                 pages.push(i)
//                 if(i === pagesCount) break
//             }
//         }
//     }  else {
//         for (let i = 1; i <= pagesCount; i++) {
//             pages.push(i)
//         }
//     }
// }
// //currentPage - поточна Page
// //pagesCount - кількість Page
// createPages( page,1150, 15)
// console.log(page)
//
// let str_4 = "Аййстиироййииомия эййтиио наииукййа о неиибййесных обййййииъййектййииах";
//
// const wasd = (str,symbol)=> str.length - str.replaceAll(symbol,`'`).length
//
//     console.log(wasd(str_4, 'ии'));

// const checkingBrackets = (str)=>{
//     const stack = []
//
//     for (let i = 0; i < str.length; i++) {
//
//         if (str[i] === '['){
//
//             stack.push(str[i])
//
//         }else if (str[i]===']' && stack.length ){
//
//             stack.pop()
//
//         }else {
//             return false
//         }
//     }
//     if (stack.length === 0){
//
//     return true
//
// }    else {
//
//     return false
//     }}
// console.log(checkingBrackets('[[][[][]]]')); // => true
// console.log(checkingBrackets('[[][[][]]]]]]]'));// => false
//
// //Нам потрібна функція приймає масив чисел та повертає масив з чисел які не повторяються та числа які повторяються 3 рази
// const arr = [1,1,1,2,2,3,4,4,5,5,6,6,7,7,8,8,8,9];
// const withoutRepeat = (arr) => {
//
//     const obj = {}
//
//     const arrElement = []
//
//     for (let i = 0; i < arr.length; i++) {
//
//         obj[arr[i]] ? obj[arr[i]] += 1 : obj[arr[i]] = 1
//     }
//
//     for (const key in obj) {
//
//         if (obj[key] === 1 || obj[key] === 3){
//
//             for (let i = 0; i < obj[key]; i++) {
//
//                 arrElement.push(key)
//
//             }
//         }
//     }
//     return arrElement
// }
// console.log(withoutRepeat(arr)); // => ['1', '1', '1', '3', '8', '8', '8', '9']


// 1) Створити масив з 20 чисел та:
// const createArr = (n)=>{
//     const arr = []
//     for (let i = 0; i < n; i++) {
//         arr.push(Math.ceil(Math.random()*100))
//     }
//     return arr
// }
// const arr = createArr(20)
// //     a) відсортувати його від меншого до більшого.
// console.log(arr.sort((a, b) => a - b));
// //     b) відсортувати його від більшого до меншого.
// console.log(arr.sort((a, b) => b - a));
// //     c) Відфілтрувати числа які є кратними 3.
// console.log(arr.filter(value => value % 3 === 0));
// // d) Відфілтрувати числа які є більшими за 10.
// console.log(arr.filter(value => value > 10));
// // e) Проітерувати його forEach та вивести кожеш елмент за допомогою document.write
// arr.forEach(value => document.write(`<div>${value}</div>`))
// // f) За допомогою map збільшити кожен елемент в масиві в три рази.
// console.log(arr.map(value => value * 3));
// //     g) Порахувати загальну суму всіх елментів у масиві (reduce)
//  const result = arr.reduce((acum, value) =>{
//      acum += value
//      return acum
// },0 )
// console.log(result);
// // 2) Створити масив з 20 стрічок та:
// const stringArr = ['vasya','petya','kolya','max','anya','oleg','andrey','masha','olya','max']
// //   a) Відсортувати його в алфавітному порядку
// const resultSortStrArr = stringArr.sort((a, b) => {
//     if (a > b ){
//         return 1
//     }else if (a<b){
//         return - 1
//     }else {
//         return 0
//     }
// })
// b) Відсортувати в зворотньому порядку

// c) Отримати в новому масиві тільки ті слова, довжина яких більша за 4 букви (filter)
// d) Змінити кожне слово в масиві додавши на початок 'Sam says *ваше слово*'
//
// 3) Все робити тільки за допомогою методів масивів!
//     Дано масив :
//     const users = [
//         {name: 'vasya', age: 31, isMarried: false},
//         {name: 'petya', age: 30, isMarried: true},
//         {name: 'kolya', age: 29, isMarried: true},
//         {name: 'olya', age: 28, isMarried: false},
//         {name: 'max', age: 30, isMarried: true},
//         {name: 'anya', age: 31, isMarried: false},
//         {name: 'oleg', age: 28, isMarried: false},
//         {name: 'andrey', age: 29, isMarried: true},
//         {name: 'masha', age: 30, isMarried: true},
//         {name: 'olya', age: 31, isMarried: false},
//         {name: 'max', age: 31, isMarried: true}
//     ];
// a) відсортувати його за  віком (зростання , а потім окремо спадання)
// b) відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// c) пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення),
// та зберегти це в новий масив (первинний масив залишиться без змін)
// d) відсортувати його за індентифікатором
// e) Всі хто одружений мають попасти у новий масив та отрмати квартиру (reduce)
//
// ______________________________________________________________________________________________________________________________________________________
// РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________
//
//
// const cars = [
//     {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400},
//     {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250},
//     {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300},
//     {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140},
//     {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200},
//     {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165},
//     {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120},
//     {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120},
//     {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350},
//     {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180},
//     {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180},
//     {producer:"mercedes",model: "e63",year 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400},
//     {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230}
// ];
//
// Відфільтрувати масив за наступними крітеріями :
//     - двигун більше 3х літрів
// - двигун = 2л
// - виробник мерс
// - двигун більше 3х літрів + виробник мерседес
// - двигун більше 3х літрів + виробник субару
// - сили більше ніж 300
// - сили більше ніж 300 + виробник субару
// - мотор серіі ej
// - сили більше ніж 300 + виробник субару + мотор серіі ej
// - двигун меньше 3х літрів + виробник мерседес
// - двигун більше 2л + сили більше 250
// - сили більше 250  + виробник бмв
//
//
// - взять слдующий массив
// const usersWithAddress = [
//     {id: 9, name: 'vasya', age: 31, isMarried: false, address: {city: 'Kyiv', street: 'Gongadze', number: 16}},
//     {id: 2, name: 'petya', age: 30, isMarried: true, address: {city: 'Rivne', street: 'Zelena', number: 1}},
//     {id: 4, name: 'kolya', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Pasichna', number: 121}},
//     {id: 3, name: 'olya', age: 28, isMarried: false, address: {city: 'Rivne', street: 'Shevchenko', number: 90}},
//     {id: 8, name: 'max', age: 30, isMarried: true, address: {city: 'Lviv', street: 'Kriva Lipa', number: 115}},
//     {id: 6, name: 'anya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
//     {id: 10, name: 'oleg', age: 28, isMarried: false, address: {city: 'Kyiv', street: 'Centralna', number: 22}},
//     {id: 5, name: 'andrey', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Gorodotska', number: 43}},
//     {id: 1, name: 'masha', age: 30, isMarried: true, address: {city: 'Kyiv', street: 'Peremogi', number: 12}},
//     {id: 7, name: 'olya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Naukova', number: 16}},
//     {id: 11, name: 'max', age: 31, isMarried: true, address: {city: 'Rivne', street: 'Ivana Franka', number: 121}}
// ];
//
// -- Відсортувати їх по ID
// -- Відсортувати їх по ID в зворотньому порядку
// -- Відсортувати по віку
// -- Відсортувати по віку в зворотньому порядку
// -- Відсорутвати по імені
// -- Відсорутвати по назві вулиці
// -- Відсорутвати по номеру будинку
// -- Залигити тільки тих, хто молодший ніж 30 (filter)
// -- Залишити тільки одружених
// -- Залишити тільки одружених, які молодні за 30
// -- Залишити лише тих, в кого парні номери будинків.
// -- Порахувати загальний вік всіх людей. (reduce)
// -- Ті, хто одружений і старий за 30 має отримати обєкти child і попасти в новий масив (reduce)
//
//
// ______________________________________________________________________________________________________________________________________________________
// Додатково
// ______________________________________________________________________________________________________________________________________________________
//
// Створити обєкт автомобіля з полями:
//     Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
//     Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
//     Створити не менше 7 та не більше 20 машинок.
//     Для початку вкладіть всі наші створені автомобілі в масив cars.
//     Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
// Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25,
//     то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
//     Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі
//
//
// Задача: дан отсортированный по возрастанию массив целых чисел.
//     Необходимо вернуть наименьший и наибольший индекс заданного элемента.
//     Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
//     Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.
//
// Пример:
//     Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6.

 