const colors = ['blue', 'green', 'white'];

//#1

function iter(item){
    console.log(item);
}

colors.forEach(iter);


//#2

function iter1(item, index){
    console.log(`${item} has index ${index}`);
}

colors.forEach(iter1);


function iter2(item, index, array){
    console.log(item);
    if (index === array.length - 1 ){
        console.log('The last iteration!');
    }
}

colors.forEach(iter2);


//#3
const letters = ['a', 'b', 'c'];

function iterate3 (letter){
    console.log(this.letter == window ? "true" : ' ');
}
letters.forEach(iterate3);


//#4

const Numbers = [22, 3, 4, 10];

let allEven1 = true;

Numbers.forEach(function (number){
    if (number % 2 === 1) {
        allEeven1 = false;

    }
});

console.log(allEven1);



//#5
const numbers = [22, 3, 4, 10];

const allEven2 = numbers.every(function(number){
    return number % 2 === 0;
});

console.log(allEven2);


//#6

const fruits = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"];
const index = fruits.findIndex(fruit => fruit === 'blueberries');

console.log(index);
console.log(fruits[index]);


//#7

const arr = [7, 33, 47, 99, 2, 103, 79];
const found = arr.find(element => element>10);

console.log(found);


//#8

const array = [1, 2, 3, 4, 5];
const even = (element) => element % 2===0;

console.log(array.some(even));

//#9

const numbersOthers = [1, 30, 4, 21, 100000];

numbersOthers.sort(function(a,b){
    return a - b;
});

console.log(numbersOthers);