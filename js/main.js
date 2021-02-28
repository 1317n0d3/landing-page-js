function setLogin(){
    let login = localStorage.getItem('login');
    if(login != undefined)
        document.getElementById('sign-up').textContent = login;
}

function logOut(){
    localStorage.removeItem('login');
    document.getElementById('sign-up').textContent = 'Sign-up';
}

document.addEventListener("DOMContentLoaded", setLogin());

let stopwatch = document.getElementById('stopwatch');
let toggleBtn = document.getElementById('toggle');
let resetBtn = document.getElementById('reset');

let watch = new Stopwatch(stopwatch);

toggleBtn.addEventListener('click', function(){
    if (watch.isOn){
        watch.stop();
        toggleBtn.textContent = "Start";
    }else{
        watch.start();
        toggleBtn.textContent = "Stop";
    }
});

resetBtn.addEventListener('click', function(){
    watch.reset();
});