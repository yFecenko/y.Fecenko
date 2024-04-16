//#1
const list = ['html', 'css', 'javascript', 'react.js'];

let newList1 = document.createElement('ul');
list.forEach(item => {
    let li = document.createElement('li');
    li.textContent = item;
    newList1.appendChild(li);
});

document.body.appendChild(newList1);



//#2
const listWithHref = [
  {'html': "https://developer.mozilla.org/en-US/docs/Web/HTML"}, 
  {'css': "https://developer.mozilla.org/en-US/docs/Web/CSS"}, 
  {'javascript': "https://developer.mozilla.org/en-US/docs/Web/JavaScript"}, 
  {'react.js': "https://react.dev"}
];


let aNewList = document.createElement('ol');

listWithHref.forEach(item => {

  let liItem = document.createElement('li');
  let linkItem = document.createElement('a');

  const key = Object.keys(item)[0];
  const value = item[key];

  linkItem.href = value;
  linkItem.textContent = key;

  liItem.appendChild(linkItem);
  aNewList.appendChild(liItem);

});

document.body.appendChild(aNewList);


//#3

const students = [
  {'firstName': 'Tom', 'lastName': 'Cat', 'degree': 230},
  {'firstName': 'Nary', 'lastName': 'Ann', 'degree': 336},
  {'firstName': 'John', 'lastName': 'Doe', 'degree': 400},
  {'firstName': 'James', 'lastName': 'Bond', 'degree': 700},
]

const table = document.createElement('table');
table.innerHTML = `<tr style="background-color: blue; color: azure;">
                      <th>firstName</th>
                      <th>lastName</th>
                      <th>degree</th>
                    </tr>`

students.forEach(student => {

  table.innerHTML +=`<tr>
                        <td>${student.firstName}</td>
                        <td>${student.lastName}</td>
                        <td>${student.degree}</td>
                      </tr>`
});

document.body.appendChild(table);