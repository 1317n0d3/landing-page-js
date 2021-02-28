function Stopwatch(elem){
    let time = 0;
    let interval;
    let offset;

    function update() {
        if(this.isOn){
            time += delta();
        }
        let formatedTime = timeFormatter(time);
        elem.textContent = formatedTime;
    };
    function delta() {
        let now = Date.now();
        let timePassed = now - offset;
        offset = now;
        return timePassed;
    };
    function timeFormatter(timeInMillisecond) {
        let time = new Date(timeInMillisecond);
        let minutes = time.getMinutes().toString();
        let seconds = time.getSeconds().toString();
        let milliseconds = time.getMilliseconds().toString();

        if (minutes.length < 2) {
            minutes = "0" + minutes;
        }
        if (seconds.length < 2) {
            seconds = "0" + seconds;
        }
        while(milliseconds.length < 3) {
            milliseconds = "0" + milliseconds
        }
        return minutes + ":" + seconds;
    }

    this.isOn = false;
    this.start = function() {
        if (!this.isOn){
            interval = setInterval(update.bind(this),10);
            offset = Date.now();
            this.isOn = true;
        }
    };
    this.stop = function() {
        if (this.isOn){
            clearInterval(interval);
            interval = null;
            this.isOn = false;
        }
    }
    this.reset = function()  {
        if(!this.isOn){
            time = 0;
            update();
        }
    }
}