const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    //console.log(nameInput); //Returns element
    //console.log(nameInput.value);
    if (nameInput.value === '' || emailInput.value === ''){
        //alert('Please enter fields');
        msg.classList.add('error');
        msg.innerHTML = 'Please entre all fields';
        
        setTimeout(() => msg.remove(),3000); //Error message dissapears after 3 seconds 
    }
    else{
        //console.log('success');
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
        
        userList.appendChild(li);

        //Clear fields
        nameInput.value = '';
        emailInput.value = '';
    }

}