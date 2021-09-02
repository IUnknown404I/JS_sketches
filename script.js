"use strict";

const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// let age = prompt('Сколько тебе лет?', 100);
// alert(`Тебе ${age} лет!`); // Тебе 100 лет!


// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
// }
// function showOk() {
//     alert( "Вы согласны." );
// }
// function showCancel() {
//     alert( "Вы отменили выполнение." );
// }
// ask("Вы согласны?", showOk, showCancel);
//


// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
// }
// ask(
//     "Вы согласны?",
//     function() { alert("Вы согласились."); },
//     function() { alert("Вы отменили выполнение."); }
// );


function pow(num, level) {
    if (level < 0) return NaN;
    if (Math.round(level) != level) return NaN;

    let result = 1;

    for (let i = 0; i < level; i++) {
        result *= num;
    }

    return result;
}

// function User(name) {
//     if (!new.target) { // в случае, если вы вызвали без оператора new
//         return new User(name); // ...добавим оператор new за вас
//     }
//
//     this.name = name;
// }
//
// let vasya = User("Вася"); // переадресовывает вызовы на new User
// alert(vasya.name); // Вася


// ["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
//     alert(`${item} имеет позицию ${index} в ${array}`);
// });


// function compareNumeric(a, b) {
//     if (a > b) return 1;
//     if (a == b) return 0;
//     if (a < b) return -1;
// }
//
// let arr = [ 1, 2, 15 ];
//
// arr.sort(compareNumeric);
// arr.sort( (a, b) => a - b ); // правильный и короткий вариант
//
// alert(arr);  // 1, 2, 15


// делаем обёртку для медленной функцией, где будем кешировать результаты
// function slow(x) {
//     // здесь могут быть ресурсоёмкие вычисления
//     alert(`Called with ${x}`);
//     return x;
// }
// function cachingDecorator(func) {
//     let cache = new Map();
//
//     return function(x) {
//         if (cache.has(x)) {    // если кеш содержит такой x,
//             return cache.get(x); // читаем из него результат
//         }
//
//         let result = func(x); // иначе, вызываем функцию
//
//         cache.set(x, result); // и кешируем (запоминаем) результат
//         return result;
//     };
// }
//
// slow = cachingDecorator(slow);
//
// alert( slow(1) ); // slow(1) кешируем
// alert( "Again: " + slow(1) ); // возвращаем из кеша
//
// alert( slow(2) ); // slow(2) кешируем
// alert( "Again: " + slow(2) ); // возвращаем из кеша