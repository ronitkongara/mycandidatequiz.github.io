const startBtn = document.querySelector('.start-btn');
const popupInfo = document.querySelector('.popup-info');
const exitBtn = document.querySelector('.exit-btn');
const main = document.querySelector('.main');
const continueBtn = document.querySelector('.continue-btn');
const quizSection = document.querySelector('.quiz-section');
const quizBox = document.querySelector('.quiz-box');
const resultBox = document.querySelector('.result-box');
const tryAgainBtn = document.querySelector('.tryAgain-btn');
const goHomeBtn = document.querySelector('.goHome-btn');

const optionList = document.querySelector('.option-list')

startBtn.onclick = () => {
    popupInfo.classList.add('active');
    main.classList.add('active');
}

exitBtn.onclick = () => {
    popupInfo.classList.remove('active');
    main.classList.remove('active');
}

continueBtn.onclick = () => {
    quizSection.classList.add('active');
    popupInfo.classList.remove('active');
    main.classList.remove('active');
    quizBox.classList.add('active');

    showQuestions(0);
    questionCounter(0);
}

tryAgainBtn.onclick = () => {
    quizBox.classList.add('active');
    resultBox.classList.remove('active');
    nextBtn.classList.remove('active');

    questionCount = 0;
    questionNumb = 1;
    showQuestions(questionCount);
    questionCounter(questionNumb);

    harrisScore = 0;
    trumpScore = 0;
    kennedyScore = 0;
    westScore = 0;
    steinScore = 0;
    oliverScore = 0;
}

goHomeBtn.onclick = () => {
    quizSection.classList.remove('active');
    resultBox.classList.remove('active');
    nextBtn.classList.remove('active');

    questionCount = 0;
    questionNumb = 1;
    showQuestions(questionCount);
    questionCounter(questionNumb);
}

let questionCount = 0;
let questionNumb = 1;

const nextBtn = document.querySelector('.next-btn')
nextBtn.onclick = () => {
    checkAnswer(finalAnswer);
    console.log(harrisScore);
    console.log(trumpScore);
    console.log(kennedyScore);
    console.log(westScore);
    console.log(steinScore);
    console.log(oliverScore);

    if(questionCount < questions.length - 1){

        questionCount++;
        showQuestions(questionCount);

        questionNumb++;
        questionCounter(questionNumb);

        nextBtn.classList.remove('active');
    }
    else{
        showResultBox();
    }
}

function showQuestions(index){
    const questionText = document.querySelector('.question-text');
    questionText.textContent = `${questions[index].question}`;
    let numAnswers = questions[questionCount].numanswers;
    let optionTag;

    if(numAnswers == 4){
        optionTag = `<div class="option"><span>${questions[index].options[0]}</span></div>
            <div class="option"><span>${questions[index].options[1]}</span></div>
            <div class="option"><span>${questions[index].options[2]}</span></div>
            <div class="option"><span>${questions[index].options[3]}</span></div>`;
    }
    if(numAnswers == 2){
        optionTag = `<div class="option"><span>${questions[index].options[0]}</span></div>
            <div class="option"><span>${questions[index].options[1]}</span></div>`;
    }
    if(numAnswers == 3){
        optionTag = `<div class="option"><span>${questions[index].options[0]}</span></div>
            <div class="option"><span>${questions[index].options[1]}</span></div>
            <div class="option"><span>${questions[index].options[2]}</span></div>`;
    }
    if(numAnswers == 5){
        optionTag = `<div class="option"><span>${questions[index].options[0]}</span></div>
            <div class="option"><span>${questions[index].options[1]}</span></div>
            <div class="option"><span>${questions[index].options[2]}</span></div>
            <div class="option"><span>${questions[index].options[3]}</span></div>
            <div class="option"><span>${questions[index].options[4]}</span></div>`;
    }

    optionList.innerHTML = optionTag;

    const option = document.querySelectorAll('.option');
    for(let i = 0; i < option.length; i++){
        option[i].setAttribute('onclick', 'optionSelected(this)');
    }
} 

let finalAnswer;

function optionSelected(answer){
    let answerText = answer.textContent;

    let allOptions = optionList.children.length;
    for(let i = 0; i < allOptions; i++){
        optionList.children[i].classList.remove('selected');
    }

    answer.classList.add('selected');

    nextBtn.classList.add('active');
    finalAnswer = answerText;
}

let harrisScore = 0;
let trumpScore = 0;
let kennedyScore = 0;
let westScore = 0;
let steinScore = 0;
let oliverScore = 0;
let realQuestionCount = 0;

let strenghtened;
let balanced;

function checkAnswer(answer){
    let userAnswer = answer;
    let harrisAnswer = questions[questionCount].harrisanswer;
    let trumpAnswer = questions[questionCount].trumpanswer;
    let kennedyAnswer = questions[questionCount].kennedyanswer;
    let westAnswer = questions[questionCount].westanswer;
    let steinAnswer = questions[questionCount].steinanswer;
    let oliverAnswer = questions[questionCount].oliveranswer;
    let realQuestion = questions[questionCount].realquestion;

    if(realQuestion == "real"){
        realQuestionCount += 1;
    }

    console.log(userAnswer);

    if(userAnswer == harrisAnswer){
        harrisScore += 1;
    }
    if(userAnswer == trumpAnswer){
        trumpScore += 1;
    }
    if(userAnswer == kennedyAnswer){
        kennedyScore += 1;
    }
    if(userAnswer == westAnswer){
        westScore += 1;
    }
    if(userAnswer == steinAnswer){
        steinScore += 1;
    }
    if(userAnswer == oliverAnswer){
        oliverScore += 1;
    }

    if([1,5,8,11,16,19,23,28].includes(questionCount)){
        questionCount++;
    }
    if([4,22].includes(questionCount)){
        questionCount += 2;
    }

    if (questionCount == 0) { 
        if (userAnswer === "Strengthened") {
            questionCount = 0;
        } else if (userAnswer === "Weakened") {
            questionCount = 1; 
        }
    }
    if (questionCount == 3) { 
        if (userAnswer === "State") {
            questionCount = 3;
        } else if (userAnswer === "Balanced") {
            questionCount = 4; 
        } else if (userAnswer === "Federal") {
            questionCount = 5; 
        }
    }
    if (questionCount == 7) { 
        if (userAnswer === "Support Universal Healthcare") {
            questionCount = 7;
        } else if (userAnswer === "Oppose Universal Healthcare") {
            questionCount = 8; 
        }
    }
    if (questionCount == 10) { 
        if (userAnswer === "Support Abortion Laws and Reproductive Rights") {
            questionCount = 10;
        } else if (userAnswer === "Conditionally Opposes Abortion Laws and Reproductive Rights") {
            questionCount = 11; 
        }
    }
    if (questionCount == 13) { 
        if (userAnswer === "Expanded") {
            questionCount = 13;
        } else{
            questionCount = 14;
        }
    }
    if (questionCount == 15) { 
        if (userAnswer === "Support") {
            questionCount = 15;
        } else if (userAnswer === "Oppose") {
            questionCount = 16; 
        }
    }
    if (questionCount == 18) { 
        if (userAnswer === "Israel") {
            questionCount = 18;
        } else if (userAnswer === "Palestine") {
            questionCount = 19; 
        }
    }
    if (questionCount == 21) { 
        if (userAnswer === "Pro-market approach with reduced government intervention") {
            questionCount = 21;
        } else if (userAnswer === "Social and environmental approach") {
            questionCount = 22; 
        } else if (userAnswer === "Balanced government-led approach") {
            questionCount = 23; 
        }
    }
    if (questionCount == 25) { 
        if (userAnswer === "Oppose") {
            questionCount = 25; 
        } else{
            questionCount = 26;
        }
    }
    if (questionCount == 27) { 
        if (userAnswer === "Support") {
            questionCount = 28;
        } else if (userAnswer === "Oppose") {
            questionCount = 27; 
        }
    }
}

let questionTotalNum = 20;

function questionCounter(index){
    const questionTotal = document.querySelector('.question-total');
    if(index == 0){
        index = 1;
    }
    questionTotal.textContent = `${index} of ${questionTotalNum} Questions`;
}

function showResultBox(){
    resultBox.classList.add('active');
    quizBox.classList.remove('active');

    const scoretext = document.querySelector('.score-text');

    let progressEndValue;


    if(harrisScore == Math.max(harrisScore, trumpScore, kennedyScore, westScore, steinScore, oliverScore)){
        scoretext.innerHTML = `Your views match most with:<br>Kamala Harris`;
        progressEndValue = Math.round((harrisScore / realQuestionCount) * 100);
    }
    if(trumpScore == Math.max(harrisScore, trumpScore, kennedyScore, westScore, steinScore, oliverScore)){
        scoretext.innerHTML = `Your views match most with:<br>Donald Trump`;
        progressEndValue = Math.round((trumpScore / realQuestionCount) * 100);
    }
    if(kennedyScore == Math.max(harrisScore, trumpScore, kennedyScore, westScore, steinScore, oliverScore)){
        scoretext.innerHTML = `Your views match most with:<br>Robert F. Kennedy Jr.`;
        progressEndValue = Math.round((kennedyScore / realQuestionCount) * 100);
    }
    if(westScore == Math.max(harrisScore, trumpScore, kennedyScore, westScore, steinScore, oliverScore)){
        scoretext.innerHTML = `Your views match most with:<br>Cornel West`;
        progressEndValue = Math.round((westScore / realQuestionCount) * 100);
    }
    if(steinScore == Math.max(harrisScore, trumpScore, kennedyScore, westScore, steinScore, oliverScore)){
        scoretext.innerHTML = `Your views match most with:<br>Jill Stein`;
        progressEndValue = Math.round((steinScore / realQuestionCount) * 100);
    }
    if(oliverScore == Math.max(harrisScore, trumpScore, kennedyScore, westScore, steinScore, oliverScore)){
        scoretext.innerHTML = `Your views match most with:<br>Chase Oliver`;
        progressEndValue = Math.round((oliverScore / realQuestionCount) * 100);
    }

    const circularProgress = document.querySelector('.circular-progress');
    const progressValue = document.querySelector('.progress-value');
    let progressStartValue = -1;
    let speed = 20;
    
    let progress = setInterval(() => {
        progressStartValue++;

        progressValue.textContent = `${progressStartValue}%`
        circularProgress.style.background = `conic-gradient(#c40094, ${progressStartValue * 3.6}deg, rgba(255, 255, 255, .1) 0deg)`;

        console.log(progressStartValue);
        if(progressStartValue == progressEndValue){
            clearInterval(progress);
        }
        if(progressStartValue == 100){
            clearInterval(progress);
        }
    }, speed);

}
