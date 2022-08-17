let btn = document.querySelector('.form-btn');
let aside = document.querySelector('.main-form');
btn.addEventListener('click', () => {
    aside.style.height = '500px';
    
    event.preventDefault();
    firstName();
    lastName();
    email();
    password()
})

function firstName(){
    let fname = document.querySelector('#fname');
    let span = document.querySelector('.spanError');
    if(fname.value === ''){
        fname.focus();
        fname.classList.add('.spanError');
        fname.style.border = '2px hsl(0, 100%, 74%) solid'
        fname.classList.add('invisible');
        fname.classList.add('iconError');
        span.textContent = `First name cannot be empty`;
        span.style.display = 'block';
        console.log(fname.value);
    }
    return;
}

function lastName(){
    let lname = document.querySelector('#lname');
    let span2 = document.querySelector('.spanError2');
    if(lname.value === ''){
        lname.focus();
        lname.classList.add('.spanError2');
        lname.style.border = '2px hsl(0, 100%, 74%) solid'
        lname.classList.add('invisible');
        lname.classList.add('iconError');
        span2.textContent = `Last name cannot be empty`;
        span2.style.display = 'block';
        
    }
    return;
}

function email(){
    let email = document.querySelector('#email');
    let span3 = document.querySelector('.spanError3');
    if(email.value === ''){
        email.focus();
        email.classList.add('.spanError3');
        email.style.border = '2px hsl(0, 100%, 74%) solid'
        email.classList.add('iconError');
        email.placeholder = 'email@example/com';
        email.classList.add('email');
        span3.textContent = `Looks like this is not an email`;
        span3.style.display = 'block';
        
    }
    return;
}

function password(){
    let password = document.querySelector('#password');
    let span4 = document.querySelector('.spanError4');
    if(password.value === ''){
        password.focus();
        password.classList.add('.spanError3');
        password.style.border = '2px hsl(0, 100%, 74%) solid'
        password.classList.add('iconError');
        password.classList.add('invisible');
        span4.textContent = `Password cannot be empty`;
        span4.style.display = 'block';
        
    }
    return;
}