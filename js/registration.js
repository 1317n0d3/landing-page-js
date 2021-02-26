function registration(){
    let login = document.getElementById('login').value;
    if(login.length >= 4 && login.length <= 12){
        localStorage.setItem('login', login);
        document.getElementById('sign-up').textContent = localStorage.getItem('login');
    } else {
        document.getElementById('login').value = '';
        document.getElementById('login').placeholder = 'Логин должен содержать от 4 до 12 символов!';
    }
}