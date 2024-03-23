// Task #1
const fruits = 'apple banana cantaloupe blueberries grapefruit'.split(',');

// Task #2
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Task #3
let i = 0;
while (i < fruits.length) {
    console.log(fruits[i]);
    i++;
}


// Task #4
let e = 0;
do {
    console.log(fruits[e]);
    e++;
} while (e < fruits.length);




// Task #5
for (const fruit of fruits) {
    console.log(fruit);
}



// Task #6
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 2; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        console.log(numbers[i]);
    }
}


// Task #7
const names = ['Batman'];
names.push('Joker');
console.log(names);



// Task #8
const names2 = ['Batman'];
names2.unshift('Joker');
console.log(names2);

// Task #9
const names3 = ['Batman', 'Joker', 'Bane'];
names3.unshift('Catwoman');
console.log(names3);


// Task #10
let names4 = ['Batman', 'Joker', 'Bane'];
names4 = ['Catwoman', ...names4];
console.log(names4);

// Task #11
const names5 = ['Batman', 'Joker', 'Bane'];
names5[1] = 'Catwoman';
console.log(names5);


// Task #12
const names6 = ['Batman', 'Catwoman', 'Joker', 'Bane'];
names6.splice(1, 2);
// delete names6[1];
console.log(names6);

// Task #13
const names7 = ['Batman', 'Catwoman', 'Joker', 'Bane'];
names7.splice(1, 2, "Afred");
console.log(names7);


// Task #14
const names8 = ['Batman', 'Catwoman', 'Joker', 'Bane'];
if (!names8.includes('Alfred')) {
    names8.push('Alfred');
}
console.log(names8);



// Task #15
const names9 = ['Batman', 'Catwoman', 'Joker', 'Bane'];
const alfie = names9.indexOf('Alfred');
if (alfie !== -1) {
    names9.splice(alfie, alfie);
}
console.log(names9);