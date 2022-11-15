// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

const maxNumber = (a,b,c) => {
  if (a > b && a > c){
      console.log(a)
  }else if (b > a && b > c){
      console.log(b)
  }else {
      console.log(c)
  }
}

maxNumber(1,2,3)

// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

const minNumber = (a,b,c) => {
    if (a < b && a < c){
        console.log(a)
    }else if (b < a && b < c){
        console.log(b)
    }else {
        console.log(c)
    }
}

minNumber(1,2,3)


// - створити функцію яка повертає найбільше число з масиву

const maxNumberArr = (arr) => {

    let maxNumber = arr[0]

    for (let i = 0; i < arr.length; i++) {

        maxNumber < arr[i] ? maxNumber = arr[i] : maxNumber

    }

    return maxNumber;

}

console.log(maxNumberArr([1, 2, 3]));

// - створити функцію яка повертає найменьше число з масиву

const minNumberArr = (arr) => {

    let maxNumber = arr[0]

    for (let i = 0; i < arr.length; i++) {

        maxNumber > arr[i] ? maxNumber = arr[i] : maxNumber

    }

    return maxNumber;

}

console.log(minNumberArr([1, 2, 3]));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

const contcat = (arr) => {

    let result = 0;

    for (const element of arr) {

        result += element

    }

    return result;
}

console.log(contcat([1, 2, 3]));

// - Дано натуральное число n. Выведите все числа от 1 до n.

const foo = ( n )=> {

    for (let i = 1; i <= n; i++) {

        console.log(i)

    }
}

foo(5)

// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.

const fooBar = ( a,b )=>{

    if ( a > b || a === b ){
        for (let i = b; i <= a; i++) {

           console.log(i)
        }
    }else if (a < b ){

        for (let i = b; i >= a; i--) {

            console.log(i)
        }
    }
}

fooBar(1,5)

// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

const reversForIndex = (arr,i) => {

    let index_1 = arr[i]
    let index_2 = arr[i+1]

    arr[i + 1] = index_1
    arr[i] = index_2

    return arr;
}

console.log(reversForIndex([9, 8, 0, 4], 1));

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

 const sort = (arr) =>{

     const arey = [];

     for (let i = 0; i < arr.length; i++) {

         if ( arr[i] !== 0 ){

             arey[arey.length] = arr[i]
         }

     }

     for (let i = 0; i < arr.length; i++) {

         if ( arr[i] === 0 ){

             arey[arey.length] = arr[i]
         }

     }

     return arey
 }

console.log(sort([1, 0, 6, 0, 3]));