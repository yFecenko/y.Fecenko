// Task #1
let str1 = 'I\'m a string!';
let str2 = "I'm a string!";

console.log(str1.length == str2.length); // недбале true
console.log(str1.length === str2.length); // строге true
// Чи мають рядки str1 та str2 однакову довжину. Перевірити на рівність (недбалу та строгу) рядки str1 та str2.

// Task #2
let string5 = 'Hello World';
console.log(string5[0]);
console.log(string5.charAt(0));

// Task #3
// повернути символ J рядка:
// let str3 = "Hello Javascript";
console.log(str3[6]);
console.log(str3.charAt(6));

// Task #4 Використовуючи індекс, отримати доступ до останнього символу рядка двома способами
console.log(str3[str3.length - 1]);
console.log(str3.at(-1));
console.log(str3.slice(-1));

// Task #5 Напишіть три варіанти функції lastChar, що повертає останній символ рядка
let str3 = "Hello Javascript";

function lastCharFirst(str) {
    // return str.charAt(str.length -1);
    return (str[str.length - 1]);
}

function lastCharSec(str) {
    return str.slice(-1);
}

function lastCharThird(str) {
    return str.at(-1);
}
console.log(lastCharFirst(str3));
console.log(lastCharSec(str3));
console.log(lastCharThird(str3));

// Task #6
// let a = 'When candles are out,';
// let b = ' all cats are grey.';
// let result = a.concat(b);
// console.log(result);

// Task #7
let fact = "Fifteen is the same as"
let a = 5;
let b = 10;
console.log(`Fifteen is the same as ${a+b}`);

// Task #8 Напишіть функцію getFullName, що повертає результат: "Tom Cat"
let firstName = "Tom";
let lastName = "Cat";

function getFullName1(firstName, lastName) {
    return `${firstName} ${lastName}`;
}


function getFullName2(firstName, lastName) {
    return firstName + " " + lastName;
}

function getFullName3(firstName, lastName) {
    return firstName.concat(" " + lastName);
}

console.log(getFullName1(firstName, lastName));
console.log(getFullName2(firstName, lastName));
console.log(getFullName3(firstName, lastName));

// Task #9  Напишіть функцію greeting, що використовує виклик функції getFullName та повертає такий результат: Hello, Tom Cat!
function greeting(firstName, lastName) {
    let greet = "Hello, ";
    let fullName = getFullName2(firstName, lastName);
    return greet + fullName + "!";
}
console.log(greeting(firstName, lastName));

// Task #10
let html = (
    "<div>" + "<h1>" + greeting(firstName, lastName) + "</h1>" + "</div>"
);
console.log(html);

// Task #11
let string1 = "  The name of our game  ";

// Потрібно отримати такі результати
// "The name of our game"
// "The name of our game  "
// "  The name of our game"

console.log(string1.trim());
console.log(string1.trimStart());
console.log(string1.trimEnd())


const phoneNumber = '\t  555-123\n ';
// Потрібно отримати такі результати
// => '555-123'
// => '555-123 \n'
console.log(phoneNumber.trim());
console.log(phoneNumber.trimStart());

// Task #12
let sentence = 'Always look on the bright side of life';
// Перевірити, чи містить рядок значення 'look up'
// Перевірити, чи містить рядок значення 'look on'
// Перевірити, чи містить рядок значення 'look on'Б починаючи з 8-ї позиції
console.log(sentence.includes("look up")); //false
console.log(sentence.includes("look on")); //true
console.log(sentence.includes("look on", 8)); //false

//Task #13
// Знайти індекс символу 'l'
// Знайти індекс символу 'l', починаючи з 3-ї позиції
// Знайти індекс символу 'L'
console.log(sentence.indexOf("l")); //1
console.log(sentence.indexOf("l", 3)); //7
console.log(sentence.indexOf("L")); //-1

// Task #14
// Отримати підрядок 'look on the bright side of life'
// Отримати підрядок 'Always'
// Отримати підрядок 'look'

console.log(sentence.substring(7));
console.log(sentence.substring(0, 6));
console.log(sentence.substring(7, 12));

// Task #15 Створити регулярний вираз, який призначений для перевірки імені користувача, що може містити цифри, літери у нижньому регістрі та символи - і _. Довжину імені користувача встановити від 8 до 16 знаків.
function validator(name) {
    const data = /^[a-z0-9_]{8,16}$/;
    let matched = name.match(data);
    if (data.test(name)) {
        console.log("Valid");
        return true;
    } else {
        console.log("Invalid");
        return false;
    }

}
validator('Pgdfw12312');
validator('pasword1234');

// Task #16 Створити регулярний вираз, який призначений для перевірки email на коректність.

function emailValid(email) {
    const data = /^[a-zA-Z0-9_]+@[a-zA-Z]{2,}$/
    let matched = email.match(data);
    if (data.test(email)) {
        console.log("Valid", matched);
        return true;
    } else {
        console.log("Invalid");
        return false;
    }
}
emailValid("somethingForTest@hello.ua");

// Task #17  Маємо наступний код:
let sentence123 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in sapien eu velit eleifend ullamcorper eget vitae nulla. Aenean euismod purus sed neque dictum, nec lobortis ante faucibus.';
// Напишіть функцію truncateText скорочення тексту до 50 символів, використовуючи метод substring
// Напишіть функцію truncateText скорочення тексту до 50 символів, використовуючи метод substr
function cutText1(text) {
    return text.substring(0, 50);
}
console.log(cutText1(sentence123));

function cutText2(text) {
    return text.substr(0, 50);
}
console.log(cutText2(sentence123));