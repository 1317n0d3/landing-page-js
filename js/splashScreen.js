function splashScreen() {
    const splashScreen = document.getElementById('splash-screen');
    const body = document.querySelector('body');

    let date = new Date();
    let login = localStorage.getItem('login');
    splashScreen.innerHTML = `
        <div class="splash-screen-data" id="splash-screen-data">
            ${login}<br>
            Date: ${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}
        </div>`;

    body.classList.add('hidden-overflow');
    splashScreen.classList.remove('hidden');
}

function disableSplashScreen(){
    const splashScreen = document.getElementById('splash-screen');
    const body = document.querySelector('body');
    body.classList.remove('hidden-overflow');
    splashScreen.classList.add('hidden');
}