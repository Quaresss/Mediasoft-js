// 1)Основы JS
// Задание 1
function getType(input) {
    return typeof input;
  }

// Задание 2
// Выведет сначала a, потому что в условие будет истина т.к. есть в переменной функции и выполняется функция a.
// Потом выведет undefined, потому что после выполнение функции a console.log вернёт undefined
const a = () => console.log("a");
const b = () => console.log("b");
const c = a || b ? a() : b();
console.log(c);


// 2)Функции
// Задание 1
function sumNumbers() {
    let sum = 0;
    
    for (let i = 0; i < arguments.length; i++) {
      if (typeof arguments[i] === 'number') {
        sum += arguments[i];
      }
    }
    
    return sum;
  }
console.log(sumNumbers(1, 2, 3, 4, 5));  
console.log(sumNumbers(10, 'test', 20, null, 30));


// 3)Объекты и массивы
// Задание 1 
const convertArrToObj = (arr) => {
    const result = {};
    for(let i = 0; i < arr.length; i++) {
        result[i] = arr[i];
    }
    return result;
}
console.log(convertArrToObj([1, null, 'test', undefined]));

// Задание 2
const countFromArr = (arr) => {
    const result = {};
    arr.forEach(item => 
        result[item] === undefined
            ? result[item] = 1 
            : result[item]++
    );
    return result;
}

console.log(countFromArr([1, 1, 1, 'test', 'test']));

// Задание 3
const groupByField = (arr, key) => {
    const result = {};

    arr.forEach(item => 
        result[item[key]] === undefined
            ? result[item[key]] = [item]
            : result[item[key]].push(item)
    );

    return result;
}

const arr = [{test: 1}, {test: 2}, {test: 3}, {test: 1}, {test: 1}];

console.log(groupByField(arr, 'test'));


// 4)Прототипы, наследование
// Задание 1
Number.prototype.plus = function(num) {
    return this + num;
}

console.log((1).plus(2));


// 5)Асинхронная работа в JS
// Задание 1
// start
// promise constructor
// final
// p2
// p4
// p4
// timeout

// Результат выполнений
// #1.1: boolean
// #2.1:  18 4
// #3.1:  { '0': '123', '1': 1, '2': 'Hello', '3': true }
// #3.2:  { '1': 3, test: 2 }
// #3.3:  {
//  '1': [ { test: 1 }, { test: 1 }, { test: 1 } ],
//  '2': [ { test: 2 } ],
//  '3': [ { test: 3 } ]
// }
// #4.1: 3