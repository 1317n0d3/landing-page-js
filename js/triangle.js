function getArea (){
    let height = this.height.value;
    let base = this.base.value;
    let area = (height * base) / 2;
    document.getElementById('task-triangle-answer').textContent = 'Ответ: ' + area;
}