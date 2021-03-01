function getArea (){
    let height = this.height.value;
    let base = this.base.value;
    if(height < 0 || base < 0){
        document.getElementById('task-triangle-answer').textContent = 'Параметры треугольника не должны быть отрицательными';
    } else {
        let area = (height * base) / 2;
        document.getElementById('task-triangle-answer').textContent = 'Ответ: ' + area;
    }
}