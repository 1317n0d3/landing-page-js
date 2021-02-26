function compareStrings(){
    let str1 = this.string1.value;
    let str2 = this.string2.value;
    if(str1.length == 0 ||str2.length == 0)
        document.getElementById('task-string-answer').textContent = 'Ошибка! Строки не должны быть пустыми.';
    else
        document.getElementById('task-string-answer').textContent = 'Ответ: ' + (str1.length == str2.length);
}