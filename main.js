// STRING METHODS

//const s='technologies,computers';
//console.log(s.split(', '));

// – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – –

// ARRAYS 

//Array constructor
const numbers = new Array(1,2,3,4,5);

// console.log(numbers);

//another way
const fruits = ['apples','oranges'];
fruits[3] = 'grapes';
//fruits= [] can't be done, because that's a reassign, and it is not allowed for const 

fruits.push('mangos'); //Add a new element at the end 
fruits.unshift('strawberries'); //Adds a new element to the beginning
//console.log(fruits[0]);
// console.log(fruits);

// console.log(Array.isArray(fruits));

// console.log(fruits.indexOf('oranges'));

// – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – –
// OBJECT LITERALS

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30, 
    hobbies: ['music','movies'],
    address: { //Object
        street: '50 main st',
        city: 'Boston',
    }
}

//console.log(person.address.city);

//Destructuring
const {firstName, lastName, address: {city}} = person;

//console.log(city);

//Adding properties
person.email = 'johndoe@gmail.com';

//console.log(person);

const todos = [ //Array of objects, similar to JSON format
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false
    }
]

//console.log(todos[1].text)

//JSON FORMAT 

const todoJSON = JSON.stringify(todos);
//console.log(todoJSON)

// – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – –

// LOOPS

// – – – FOR LOOPS

//Not the best way
// for(let i = 0; i <todos.length; i++){
//     console.log(todo[i].text)
// }

//Another way
// for (let todo of todos){
//     console.log(todo.text);
// }

// – – – WHILE LOOPS
// let i = 0;
// while(i<10){
//     console.log(`While Loop Number: ${i}`)
//     i++;
// }

// – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – –

// HIGH ORDER ARRAY METHODS

//forEach (loops through array), 
//map (creates a new array from an array, returns an array),
// filter (creates a new array based on the condition)

// – – – FOREACH
//function(variable as each item){}

todos.forEach(function(todo){
    console.log(todo.text)
})

// – – – MAP
const todoText = todos.map(function(todo){
    return todo.text;
})

//console.log(todoText);

// – – – FILTER

const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted === true ;
}).map(function(todo){
    return todo.text;
})

//console.log(todoCompleted);

// – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – –

// CONDITIONALS

// const x = '10';

// if(x === 10){ // == will not match the data type, === must match data type
//     console.log('x is 10');
// } else if (x>10){
//     console.log('x is greather than 10');

// }
// else {
//     console.log('x is NOT 10');
// }

// – – – OR
// if(x>5 || y > 10 )   alt + 1 in mac keyboard

// – – – Ternary operator (? -> then, : -> else), to assign variables based on a codition

// const x = 10;

// const color = x >10 ? 'red' : 'blue';

//console.log(color);

// – – – SWITCH

// switch(color){
//     case 'red':
//         console.log('color is red');
//         break;
//     case 'blue':
//         console.log('color is blue');
//         break;
//     default:
//         console.log('color is NOT red or blue');
//         break;
// }

// – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – –

// FUNCTIONS

// function addNums(num1 =1,num2=2) {
//     console.log(num1+num2)
// }

// addNums(5,5);

// – – –  Arrow Function

const arrowaddNums = (num1 =1,num2=2) => {
    return num1+num2
}

// console.log(arrowaddNums(5,5));

// – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – –

// OBJECT ORIENTED PROGRAMMING

// – – – constructor function
function PersonOOP(firstName,lastName,dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob=new Date(dob);
    // this.getBirthYear = function() {
    //     return this.dob.getFullYear()
    // }
    this.getFullName = function (){
        return `${this.firstName} ${this.lastName}`
    }
}

// Instantiate object
const person1 = new PersonOOP('John','Doe','4-3-1990');
// console.log(person1.getFullName())

// – – – PROTOTYPE, to attach methods and properties, and to not have the functions in every object instance

PersonOOP.prototype.getBirthYear = function(){
    return this.dob.getFullYear()
}

console.log(person1)

// – – – CLASS
// constructor, method is a function inside of a class
// To not deal with prototypes
class PersonClass{
    constructor(firstName,lastName,dob){ //method constructor
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob=new Date(dob);
    }
    getBirthYear(){ //method
        return this.dob.getFullYear()
    }
    getFullName(){ //method
        return `${this.firstName} ${this.lastName}`
    }
}

const person1Class = new PersonClass('John','Doe','4-3-1990');
console.log(person1Class)