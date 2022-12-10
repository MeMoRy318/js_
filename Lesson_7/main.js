// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
function User(id, name, surname , email, phone) {
        this.id = id
        this.name = name
        this.surname = surname
        this.email = email
        this.phone = phone
}

// створити пустий масив, наповнити його 10 об'єктами new User(....)

const users = [
    new User(1,'Vasya','Pupkin','asd@asd.com',Math.ceil(Math.random()*10000000)),
    new User(2,'Petya','Pupkin','awsd@asd.com',Math.ceil(Math.random()*10000000)),
    new User(3,'Max','Antropov','sdsawsd@asd.com',Math.ceil(Math.random()*10000000)),
    new User(4,'Stepan','Ivanov','sawsfssd@asd.com',Math.ceil(Math.random()*10000000)),
    new User(5,'Ivan','Ivanov','zxcfssd@asd.com',Math.ceil(Math.random()*10000000)),
    new User(6,'Taras','Ivanov','rtyfssd@asd.com',Math.ceil(Math.random()*10000000)),
    new User(7,'Viktor','Ivanov','hffghfd@asd.com',Math.ceil(Math.random()*10000000)),
    new User(8,'Andriy','Ivanov','hjkhfd@asd.com',Math.ceil(Math.random()*10000000)),
    new User(9,'Andriy','Ivanov','hjkhfd@asd.com',Math.ceil(Math.random()*10000000)),
    new User(10,'Andriy','Ivanov','hjkhfd@asd.com',Math.ceil(Math.random()*10000000)),
]

console.log(users);
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
console.log(users.filter(value => value['id'] % 2 === 0));
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
console.log(users.sort((a, b) => b['id'] - a['id']));
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client {

    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }

}
// створити пустий масив, наповнити його 10 об'єктами Client
const clients = [
    new Client(1,'Vasya','Pupkin','asd@asd.com',Math.ceil(Math.random()*10000000),['tv','phone','moto']),
    new Client(2,'Petya','Pupkin','awsd@asd.com',Math.ceil(Math.random()*10000000),['tv','moto']),
    new Client(3,'Max','Antropov','sdsawsd@asd.com',Math.ceil(Math.random()*10000000),['tv','phone','moto','tuner']),
    new Client(4,'Stepan','Ivanov','sawsfssd@asd.com',Math.ceil(Math.random()*10000000),['tuner']),
    new Client(5,'Ivan','Ivanov','zxcfssd@asd.com',Math.ceil(Math.random()*10000000),['tv','phone']),
    new Client(6,'Taras','Ivanov','rtyfssd@asd.com',Math.ceil(Math.random()*10000000),['moto']),
    new Client(7,'Viktor','Ivanov','hffghfd@asd.com',Math.ceil(Math.random()*10000000),['tv','phone','moto','tuner']),
    new Client(8,'Andriy','Ivanov','hjkhfd@asd.com',Math.ceil(Math.random()*10000000),['tv','phone','moto','tuner']),
    new Client(9,'Andriy','Ivanov','hjkhfd@asd.com',Math.ceil(Math.random()*10000000),['tv','phone','moto','tuner']),
    new Client(10,'Andriy','Ivanov','hjkhfd@asd.com',Math.ceil(Math.random()*10000000),['tv','phone','moto','tuner']),
]
console.log(clients);
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
console.log(clients.sort((a, b) => a["order"].length - b["order"].length));

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник,
// рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
function Сar(model,year,max_speed,engine_capacity) {
        this.model = model,
        this.year = year,
        this.max_speed = max_speed,
        this.engine_capacity = engine_capacity
        this.drive = function () {

            console.log(`їдемо зі швидкістю ${this.max_speed} на годину`)
        }
        this.info = function () {
            console.log(this.model,this.year,this.max_speed,this.engine_capacity,this.driver)
        }
        this.increaseMaxSpeed = function (newSpeed) {
            this.max_speed += newSpeed
        }
        this.changeYear = function (newValue) {
            this.year = newValue
        }
        this.addDriver = function (driver) {
            this.driver = driver
        }
}
const car = new Сar('Tesla', 2014,210,'elektro')
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
car.drive()
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
car.info()
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
car.increaseMaxSpeed(180)
// -- changeYear (newValue) - змінює рік випуску на значення newValue
car.changeYear(2012)
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
car.addDriver('Vasya')
car.info()
//
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:

class Car_class {

    constructor(model, year, max_speed, engine_capacity) {
        this.model = model;
        this.year = year;
        this.max_speed = max_speed;
        this.engine_capacity = engine_capacity;
    }
    drive (){
        console.log(`їдемо зі швидкістю ${this.max_speed} на годину`)
    }
    info (){
        console.log(this.model,this.year,this.max_speed,this.engine_capacity)
    }
    increaseMaxSpeed (newSpeed){
     this.max_speed += newSpeed
    }
    changeYear (newValue){
        this.year = newValue
    }
    addDriver (driver){
        this.driver = driver
    }
}
const car_class = new Car_class('tesla',2021,210,'elektro')
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
car_class.drive()
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
car_class.info()
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
car_class.increaseMaxSpeed(10)
// -- changeYear (newValue) - змінює рік випуску на значення newValue
car.changeYear(2019)
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
car.addDriver({name:'Vasya',age:19})
console.log(car);



// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
class Princess {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }

}
const princess = [
    new Princess('Alina',21,32),
    new Princess('Dasha',21,31),
    new Princess('Sveta',23,33),
    new Princess('Olena',22,32),
    new Princess('Natasha',24,34),
    new Princess('Vika',22,33),
    new Princess('Yulya',19,34),
    new Princess('Yulya',20,32),
    new Princess('Ira',19,33),
    new Princess('Sveta',19,31),
]
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince {


    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}
const prince = new Prince('Igor' ,34,32)
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
console.log(princess.filter(value => prince["footSize"] === value["footSize"]));
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
console.log(princess.find(value => value['footSize'] === prince['footSize']));



//==============================================================ADD=====================================================

function UserCard(number) {
        const stamp = Date.now()
        const time = new Date(stamp)

        this.balance = 100
        this.transactionLimit = 100
        this.historyLog = []
        this.key = number

        this.getCardOptions = function () {
            return {
                balance:this.balance,
                historyLog:this.historyLog,
                transactionLimit:this.transactionLimit,
                key:this.key
            };
        }
        this.putCredits = function (credits) {
            this.balance += credits
            this.historyLog.push({operationType: 'Received credits',credits:credits, operationTime:time})
        }
        this.takeCredits = function (credits) {
            if (this.balance >= credits && this.transactionLimit >= credits){
                this.balance -= credits
                this.historyLog.push({operationType: 'Withdrawal of credits',credits:credits, operationTime:time})

            }
        }
        this.setTransactionLimit = function (transaction_limit) {
            this.transactionLimit = transaction_limit
            this.historyLog.push({operationType: 'Transaction Limit change',credits:transaction_limit, operationTime:time})

        }
        this.transferCredits = function (card,credits) {
            if (this.balance >= credits && this.transactionLimit >= credits){
                card['balance'] += credits
                this.balance -= credits + credits * 0.5 / 100

            }
        }


}
const card = new UserCard(1)
const card_1 = new UserCard(3)
card.setTransactionLimit(400)
card.putCredits(100)
card.takeCredits(10)
card.transferCredits(card_1,100)

console.log(card_1.getCardOptions());
console.log(card.getCardOptions());
console.log(card)