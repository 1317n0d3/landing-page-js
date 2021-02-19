Update();

function Update(){
    if(quiz.current < quiz.questions.length){
        headElem.innerHTML = quiz.questions[quiz.current].text;

        buttonsElem.innerHTML = "";

        for(let i = 0; i < quiz.questions[quiz.current].answers.length; i++){
            let btn = document.createElement("button");
            btn.className = "button";

            btn.innerHTML = quiz.questions[quiz.current].answers[i].text;

            btn.setAttribute("index", i);

            buttonsElem.appendChild(btn);
        }

        pagesElem.innerHTML = (quiz.current + 1) + " / " + quiz.questions.length;

        Init();
    } else {
        buttonsElem.innerHTML = "";
        headElem.innerHTML = quiz.results[quiz.result].text;
        pagesElem.innerHTML = "Score: " + quiz.score;
    }
}

function Init(){
    let btns = document.getElementsByClassName("button");
    for(let i = 0; i < btns.length; i++){
        btns[i].addEventListener("click", function(e) { Click(e.target.getAttribute("index")); });
    }
}

function Click(index){
    let correct = quiz.Click(index);

    let btns = document.getElementsByClassName("button");

    for(let i = 0; i < btns.length; i++){
        btns[i].className = "button button-passive";
    }

    if(quiz.type == 1){
        if(correct >= 0){
            btns[correct].className = "button button-correct";
        }

        if(index != correct){
            btns[index].className = "button button-wrong";
        }
    } else {
        btns[index].className = "button button-correct";
    }

    setTimeout(Update, 1000);
}