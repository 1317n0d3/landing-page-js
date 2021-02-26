function compareStrings(){
    let str1 = this.string1.value;
    let str2 = this.string2.value;
    document.getElementById('task-string-answer').textContent = 'Ответ: ' + (str1.length == str2.length);
}