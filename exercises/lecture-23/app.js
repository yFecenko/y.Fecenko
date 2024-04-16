const alert = document.querySelector('.alert');


// # 1
const class1 = document.querySelector('.btn-primary');

class1.onclick = function() {
    alert.classList.add ('alert-primary');
    alert.textContent = 'A simple primary alert--check it out!';
}


//# 2

const class2 = document.querySelector('.btn-secondary');

class2.addEventListener("click", function() {
    alert.classList.add ('alert-primary');
    alert.textContent = 'A simple secondary alert--check it out!';
});


//# 3

const class3 = document.querySelector('.btn-success');

class3.addEventListener("mouseover",function() {
    alert.classList.add ('alert-success');
    alert.textContent = 'A simple success alert--check it out!';
});

classThree.addEventListener("mouseout",function() {
    alert.classList.remove ('alert-success');
    alert.textContent = '';
});


//#4

const class4 = document.querySelector('.btn-danger');

class4.addEventListener("focus",function() {
    alert.classList.add ('alert-danger');
    alert.textContent = 'A simple danger alert--check it out';
});

class4.addEventListener("focusout",function() {
    alert.classList.remove ('alert-danger');
    alert.textContent = '';
});

//#5

const dark = document.querySelector('.btn-dark');
const light = document.querySelector('.btn-light');

light.style.display = 'none';

function toggleMode (){
    document.body.classList.toggle('dark-mode');


    if (document.body.classList.contains('dark-mode')){
        dark.style.display = 'none';
        light.style.display = 'inline-block';
    } else {
        dark.style.display = 'inline-block';
        light.style.dispay = 'none';
    }
}

dark.addEventListener('click', toggleMode);
light.addEventListener('click', toggleMode);

//#6

const class6 = document.querySelector('.btn-info');

class6.addEventListener ('keypress', function(event){
    if (event.key === 'Enter'){
        event.preventDefault();
        alert.classList.add('alert-info');
        alert.textContent = 'A simple info alert--check it out!';
    }
});


//#7

const class7 = document.querySelectorAll('.card');

for (i=0; i<class7.length; i++){
    const cardTitle = class7[i].querySelector('.card-title');
    console.log(cardTitle.textContent);
}

//#8

for (i=0; i<class7.length; i++){
    const btn = class7[i];
    const btnClass = btn.querySelector ('.add-to-cart');
    btnClass.addEventListener('click',function(){
    console.log(btn.querySelector('.card-title').textContent);
    });

}