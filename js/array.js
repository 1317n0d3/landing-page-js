function getMaxElem(){
    let arr = [
        this.el1.value,
        this.el2.value,
        this.el3.value,
        this.el4.value,
        this.el5.value
    ];

    document.getElementById('task-array-answer').textContent =
        'Ответ: наибольший элемент равен ' + Math.max.apply(null, arr);
}

function getMinElem(){
    let arr = [
        this.el1.value,
        this.el2.value,
        this.el3.value,
        this.el4.value,
        this.el5.value
    ];

    
    document.getElementById('task-array-answer').textContent =
        'Ответ: наименьший элемент равен ' + Math.min.apply(null, arr);
}