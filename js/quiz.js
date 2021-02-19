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

    Click(index){
        let value = this.questions[this.current].Click(index);
        this.score += value;

        let correct = -1;

        if(value >= 1){
            correct = index;
        } else {
            for(let i = 0; i < this.questions[this.current].answers.length; i++){
                if(this.questions[this.current].answers[i].value >= 1){
                    correct = i;
                    break;
                }
            }
        }

        this.Next();

        return correct;
    }

    Next(){
        this.current++;

        if(this.current >= this.questions.length){
            this.End();
        }
    }

    End(){
        for(let i = 0; i < this.results.length; i++){
            if(this.results[i].Check(this.score)){
                this.result = i;
            }
        }
    }
}

class Question{
    constructor(text, answers){
        this.text = text;
        this.answers = answers;
    }

    Click(index){
        return this.answers[index].value;
    }
}

class Answer{
    constructor(text, value){
        this.text = text;
        this.value = value;
    }
}

class Result{
    constructor(text, value){
        this.text = text;
        this.value = value;
    }

    Check(value){
        if(this.value <= value){
            return true;
        } else {
            return false;
        }
    }
}