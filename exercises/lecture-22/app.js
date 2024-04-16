// #1
const h1Tag = document.getElementsByTagName('h1');

console.log("Type of Object:", typeof h1Tag);
console.log("Length of Object:", h1Tag.length);


for (i=0; i<h1Tag.length; i++) {
    console.log("Separate Element:", h1Tag[i]);
}


// #2
const paragraph1 =  document.querySelector('#p1');
paragraph1.style.backgroundColor = "gold";



// #3
const paragraph2 =  document.querySelector('#p2');
paragraph2.style.cssText = "background-color:gold; color: blue; font-size: 2rem";


// #4
const paragraph3 =  document.querySelector('#p3');
paragraph3.classList.add('Third');



// #5
const paragraph4 =  document.querySelector('#p4');
paragraph4.classList.add("fourth", "border");

// #6
const  containerClass = document.querySelectorAll('.container');


for (i=0; i<containerClass.length; i++) {
    const firstChild = containerClass[i].firstElementChild;
    console.log(firstChild);
}



// #7 
for (i=0; i<containerClass.length; i++) {
    const firstChildCont = containerClass[i].firstElementChild.textContent;
    console.log(firstChildCont);
}



// #8
const classes = ['first', 'second', 'third', 'fourth'];

const headers = document.querySelectorAll(".container header");



for (let i = 0; i < headers.length; i++) {
  const id = headers[i].id;
  const classList = headers[i].classList;
  
  // ???
  const newHeader = document.createElement(`h${i+1}`);
  newHeader.textContent = headers[i].textContent;

  if (id) newHeader.id = id;
  classList.forEach(className => newHeader.classList.add(className));

  headers[i].parentNode.replaceChild (newHeader, headers[i]);
  }


  for (let i = 0; i < headers.length; i++) {
  headers[i].classList.add(classes[i]);
  
}