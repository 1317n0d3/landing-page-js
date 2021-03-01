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

let timerBtn = document.getElementById('timer-button');
let timerTime = document.getElementById('timer-time');
let timerValue = document.getElementById('timer');
let timer;

timerBtn.addEventListener('click', function(){

    if(timerTime.value === '' && timerBtn.value === 'Start'){
        timerValue.innerHTML = 'Введите нужное количество секунд';
    } else if(timerTime.value < 0) {
        timerValue.innerHTML = 'Некорректное значение';
    } else if(timerBtn.value === 'Start'){
        countdown(timerTime.value);
        timerBtn.value = 'Stop';
        timerTime.value = null;
    } else if(timerBtn.value === 'Stop'){
        clearTimeout(timer);
        timerBtn.value = 'Start';
        timerValue.innerHTML = '00:00';
    }
});