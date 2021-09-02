let sayMixin = {
    say(phrase) {
        alert(phrase);
    }
};

let sayHiMixin = {
    __proto__: sayMixin, // (или мы можем использовать Object.create для задания прототипа)

    sayHi() {
        // вызываем метод родителя
        super.say(`Привет, ${this.name}`); // (*)
    },
    sayBye() {
        super.say(`Пока, ${this.name}`); // (*)
    },
};

class User {
    constructor(name) {
        this.name = name;
    }
}

// копируем методы
Object.assign(User.prototype, sayHiMixin);

// теперь User может сказать Привет
let user1 = new User("Вася"); // Привет, Вася!
user1.sayBye();
// user1.say("phrase") Работать не будеь! т.к. имеем доступ только к методам примеси,
// указанного в прототипе