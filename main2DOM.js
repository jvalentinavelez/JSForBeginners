// * Uncomment ul tag


//console.log(window);
//window, parent object of the browser
//window.alert(1); 
//alert(1);


// SINGLE ELEMENT SELECTORS 

//Document
const form = document.getElementById('my-form');
//console.log(form);

//Query Selector
//console.log(document.querySelector('.container'));
// console.log(document.querySelector('h1'));


// MULTIPLES ELEMENT SELECTORS

//MORE USED:
//console.log(document.querySelectorAll('.item'))

//console.log(document.getElementsByClassName('item')) //Can't use array methods, it is necessary to convert it to array

//console.log(document.getElementsByTagName('li')) //Can't use array methods, it is necessary to convert it to array

const items = document.querySelectorAll('.item');

//items.forEach((item) => console.log(item));

// – – – More element selectors 

const ul = document.querySelector('.items');
//ul.remove();
//ul.lastElementChild.remove(); //removes item 3
ul.firstElementChild.textContent = 'Hello'; //removes item 3
ul.children[1].innerText = 'Brad';
ul.lastElementChild.innerHTML = '<h4>Hello</h4>';

//const btn = document.querySelector('.btn')
//btn.style.background= 'red';

// – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – –

// EVENTS (click, mouseover, mouseout)

const btn = document.querySelector('.btn')
btn.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log(e.target.className); //Get the attributes of the event when you click
    document.querySelector('#my-form')
    .style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark'); //class from style.css, makes background black and letter white
    document.querySelector('.items').lastElementChild.innerHTML='<h4>Hi</h4>';  //Changes text
});
