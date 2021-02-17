function registration(){
    let login = document.getElementById('login').value;
    localStorage.setItem('login', login);
    document.getElementById('sign-up').textContent = localStorage.getItem('login');
}