class Animal {

    constructor(name, speed) {
        this.speed = speed;
        this.name = name;
    }

    run(speed = 0) {
        this.speed += speed;
        alert(`${this.name} бежит со скоростью ${this.speed}.`);
    }

    static compare(animalA, animalB) {
        return animalA.speed - animalB.speed;
    }

}

// Наследует от Animal
class Rabbit extends Animal {
    hide() {
        alert(`${this.name} прячется!`);
    }
}

let rabbits = [
    new Rabbit("Белый кролик", 10),
    new Rabbit("Чёрный кролик", 5)
];

rabbits.sort(Rabbit.compare);

rabbits[0].run(); // Чёрный кролик бежит со скоростью 5.



// БАЗОВЫЙ СИНТАКСИС КЛАССОВ
// class MyClass {
//     prop = value; // свойство
//     constructor(...) { // конструктор
//         // ...
//     }
//     method(...) {} // метод
//     get something(...) {} // геттер
//     set something(...) {} // сеттер
//     [Symbol.iterator]() {} // метод с вычисляемым именем (здесь - символом)
//     // ...
// }


// class Animal {
//     static [Symbol.hasInstance](obj) {
//         if (obj.canEat) return true;
//     }
// }
//
// let obj = { canEat: true };
// alert(obj instanceof Animal); // true: вызван Animal[Symbol.hasInstance](obj)


class PowerArray extends Array {
    isEmpty() {
        return this.length === 0;
    }

    // встроенные методы массива будут использовать этот метод как конструктор
    static get [Symbol.species]() {
        return Array;
    }
}

let arr = new PowerArray(1, 2, 5, 10, 50);
alert(arr.isEmpty()); // false

// filter создаст новый массив, используя arr.constructor[Symbol.species] как конструктор
let filteredArr = arr.filter(item => item >= 10);

// filteredArr не является PowerArray, это Array
alert(filteredArr.isEmpty()); // Error: filteredArr.isEmpty is not a function


// Можно использовать {}.toString.call вместо instanceof для встроенных объектов,
//     когда мы хотим получить тип в виде строки, а не просто сделать проверку. !!!!!!!!!