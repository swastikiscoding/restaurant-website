const password = document.getElementById('password');
const confpassword = document.getElementById('confpassword');

const passbtn = document.getElementById('passbtn');
const confpassbtn = document.getElementById('confpassbtn');


passbtn.addEventListener('click', () => {
    if (password.type === 'password') {
        password.type = 'text';
    } else {
        password.type = 'password';
    }
});

confpassbtn.addEventListener('click', () => {
    if (confpassword.type === 'password') {
        confpassword.type = 'text';
    } else {
        confpassword.type = 'password';
    }
});
