function solve() {

    let answerTextElements = document.querySelectorAll(`.answer-text`);

    for (let currenAnswerText of answerTextElements) {
        currenAnswerText.addEventListener(`click`, captureResult);
    }
}