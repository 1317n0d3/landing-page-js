function countdown(time){
    let min;
    let sec;

    if(String(Math.floor(time / 60)).length < 2) min = '0' + Math.floor(time / 60);
    else min = Math.floor(time / 60);

    if(String(time % 60).length < 2) sec = '0' + time % 60;
    else sec = time % 60;

    timerValue.innerHTML = `${min}:${sec}`;
    time--;

    if(time < 0){
        clearTimeout(timer);
        timerBtn.value = 'Start';
    } else {
        timer = setTimeout(countdown, 1000, time);
    }
}