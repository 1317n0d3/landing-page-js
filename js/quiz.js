class Quiz{
    constructor(type, questions, results){
        //Type: 1) с показом правильных ответов, 2) без показа правильных ответов
        this.type = type;
        this.questions = questions;
        this.results = results;
        this.score = 0;
        this.result = 0;
        this.current = 0;
    }
}