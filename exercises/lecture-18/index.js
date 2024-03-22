// Task#1

// - функція checkAge повертає true, якщо параметр age перевищує 18.
// - в іншому випадку запитує підтвердження та повертає результат:

function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        // ...
        return confirm('Did parents allow you?');
    }
}

function checkAge(age) {
    if (age > 18) {
        return true;
    }
    return confirm('Did parents allow you?');
}

// Task  1.2. Чи буде функція працювати інакше, якщо видалити else? - ні
//  Task 1.3. Чи є різниця в поведінці цих двох варіантів і чому? - немає бо вона закінчує на return

// Task #2
function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        return confirm('Did parents allow you?');
    }
}

// Task 2.1
function checkAge(age) {
    return (age > 18) ? true : confirm('Did parents allow you?');
}

// Task 2.2

function checkAge(age) {
    return (age > 18) || confirm('Did parents allow you?');
}

// Task #3 - дужки не обов'язкові

// Task #4,1

function min(a, b) {
    if (a < b) {
        return a;
    } else if (a > b) {
        return b;
    } else {
        return a;
    }
}

// Task #4,2
function min(a, b) {
    return (a < b) ? a : b;
}

min(2, 5) // 2
min(3, -1) // -1
min(1, 1) // 1

// Task #5
// Напишіть функцію pow(x,n), яка повертає x у ступені n. Або, іншими словами, множить x на себе n разів і повертає результат. У цьому завданні функція повинна підтримувати лише натуральні значення n: цілі числа від 1.

// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1
// Створіть сценарій, де спочатку користувачу пропонують ввести x і n, а потім показують результат pow(x,n), або повідомлення про неправильне значення параметра n.

function pow(x, n) {
    return (n == 1) ? x : (x * pow(x, n - 1));
}

let x = parseFloat(prompt("X "));
let n = parseFloat(prompt("N "));

if (n < 1 || !Number.isInteger(n) || x < 1 || !Number.isInteger(x)) {
    alert("You have to write an integer number");
} else {
    alert(pow(x, n));
}

// Task #6
function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
};

ask("do you have a question?", () => console.log('yes'), () => console.log('no'));

// Task #7
function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
};

function yes() {
    alert('yes');
}

function no() {
    alert('no');
}
ask("Do you have a question?", yes, no);

//   Task#8
function A() {
    console.log('A was called');
    return undefined;
}

function B() {
    console.log('B was called');
    return false;
}

function C() {
    console.log('C was called');
    return "foo";
}


// 8.1. Яким чином виконати виклик функцій A() і C(), щоб на консолі отримати такий результат A was called C was called foo
console.log(A() ?? C());
console.log(A() || C());

// 8.2. Яким чином виконати виклик функцій B() і C(), щоб на консолі отримати такий результат B was called C was called foo
console.log(B() || C());
