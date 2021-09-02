let num = +prompt("Введите положительное целое число?", 35)

let diff, result;

function fib(n) {
    if (n < 0 || Math.trunc(n) != n) {
        throw new Error("Должно быть целое неотрицательное число");
    }
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

let start = Date.now();

try {
    result = fib(num);
} catch (e) {
    result = 0;
} finally {
    diff = Date.now() - start;
}

alert(result || "возникла ошибка");

alert( `Выполнение заняло ${diff}ms` );


//////////////// new error class example ///////////
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

// Использование
function readUser(json) {
    let user = JSON.parse(json);

    if (!user.age) {
        throw new ValidationError("Нет поля: age");
    }
    if (!user.name) {
        throw new ValidationError("Нет поля: name");
    }

    return user;
}

// Рабочий пример с try..catch

try {
    let user = readUser('{ "age": 25 }');
} catch (err) {
    if (err instanceof ValidationError) {
        alert("Некорректные данные: " + err.message); // Некорректные данные: Нет поля: name
    } else if (err instanceof SyntaxError) { // (*)
        alert("JSON Ошибка Синтаксиса: " + err.message);
    } else {
        throw err; // неизвестная ошибка, пробросить исключение (**)
    }
}


///////// наследование пользовательских ошибок, именование идёт через имя конструктора,
///////// поэтому избавились от строк this.name = "..." !!
class MyError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    }
}

class ValidationError extends MyError { }

class PropertyRequiredError extends ValidationError {
    constructor(property) {
        super("Нет свойства: " + property);
        this.property = property;
    }
}

// name корректное
alert( new PropertyRequiredError("field").name ); // PropertyRequiredError



/////// Здесь я оборачиваю ошибки в одну общую - Ошибку Чтения
/////// То есть пробрасываться внутри исполняемого кода будут всё те же частные ошибки, а
/////// они уже будут ловиться при вызове методов и оборачиваться в Ошибку Чтения, которую и проброшу после
/////// в случае левой ошибки - эта ошибка пробрасывается наверх в чистом виде
class ReadError extends Error {
    constructor(message, cause) {
        super(message);
        this.cause = cause;
        this.name = 'ReadError';
    }
}

class ValidationError extends Error { /*...*/ }
class PropertyRequiredError extends ValidationError { /* ... */ }

function validateUser(user) {
    if (!user.age) {
        throw new PropertyRequiredError("age");
    }

    if (!user.name) {
        throw new PropertyRequiredError("name");
    }
}

function readUser(json) {
    let user;

    try {
        user = JSON.parse(json);
    } catch (err) {
        if (err instanceof SyntaxError) {
            throw new ReadError("Синтаксическая ошибка", err);
        } else {
            throw err;
        }
    }

    try {
        validateUser(user);
    } catch (err) {
        if (err instanceof ValidationError) {
            throw new ReadError("Ошибка валидации", err);
        } else {
            throw err;
        }
    }

}

try {
    readUser('{bad json}');
} catch (e) {
    if (e instanceof ReadError) {
        alert(e);
        // Исходная ошибка: SyntaxError:Unexpected token b in JSON at position 1
        alert("Исходная ошибка: " + e.cause);
    } else {
        throw e;
    }
}