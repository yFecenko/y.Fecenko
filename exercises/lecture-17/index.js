"use strict"

// Task #3
const number = 3;
const guess = prompt("Write a number");
    if(guess == number) {
        alert("Congratulations, you did it!");
    } else if (guess < number) {
        alert("The number is too short");
    } else {
        alert("The number is too long");
    }

// Task #4.1
let day = prompt("Write the day of the week");
theDay=theDay.toLowerCase();
if(day == "monday" || day == "понеділок") {
    console.log("Start of the work week!");
} else if (day == "friday" || day == "а'ятниця") {
    console.log("End of the work week!");
} else {
    console.log("A regular day");
}


// Task #4.2

let theDay = prompt("Write the day of the week");
theDay=theDay.toLowerCase();
switch (theDay) {
    case "понеділок" || "monday":
        console.log("Start of the work week!");
        break;
    case "п'ятниця" || "friday":
        console.log("End of the work week!");
        break;
    default:
        console.log("A regular day");
}

// Task #5,1
const score = prompt("Write your score");
if (score < 50){
    alert('F')
} else if (score < 70) {
    alert('D')
} else if (score < 80) {
    alert('C')
} else if (score < 90) {
    alert('B')
} else {
    alert('A')
}

// Task #5,2
const studScore = prompt("Write your score");
let result = (studScore<=49) ? "F" :
    (studScore>50) ? "D":
    (studScore>70) ? "C":
    (studScore>80) ? "B": "A";

alert(result);

// Task #6

let firstName = null;
let lastName = undefined;
let username = firstName || lastName || "Guest";
// let username = (firstName || lastName) ?? "Guest";


console.log(username); // "Guest"