const quizData = [
{
    question: "Which of the following stadiums has the highest capacity?",
    a: "Camp Nou, Spain",
    b: "San Siro, Italy",
    c: "Wembley Stadium, England",
    d: "Rose Bowl, USA",
    correct: "a",
},
{
    question: "Which of the following is located in Germany?",
    a: "Anfield Stadium",
    b: "Allianz Arena",
    c: "Stadio Olimpico",
    d: "FNB Stadium",
    correct: "b",
},
{
    question: "Which of the following is the biggest stadium in the world?",
    a: "Camp Nou, Spain",
    b: "Rose Bowl, USA",
    c: "Signal Iduna Park, Germany",
    d: "Rungrando 1st of May Stadium, North Korea",
    correct: "d",
},
{
    question: "Which of the following hosted the 2014 UCL Final?",
    a: "Estadio Da Luz, Portugal",
    b: "Estadio Santiago Bernabeu, Spain",
    c: "Wembley Stadium, England",
    d: "Signal Iduna Park, Germany",
    correct: "a",
},
];
const quiz = document.getElementById("quiz");
const answerElements = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitButton = document.getElementById("submit");
let currentQuiz = 0;
let score = 0;
const deselectAnswers = () => {
    answerElements.forEach((answer) => (answer.check = false));
};
const getSelected = () => {
    let answer;
    answerElements.forEach((answerElements) => {
        if (answerElements.checked) answer = answerElements.id;

    })
    return answer;
};
const loadQuiz = () => {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
};
loadQuiz();
submitButton.addEventListener("click", () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) score++;
        currentQuiz++;
        if (currentQuiz < quizData.length) loadQuiz();
        else {
            quiz.innerHTML = `
            <h2>You answered ${score}/${quizData.length} questions correctly.</h2>
            <button onclick = "history.go(0)">Play Again</button>
            `
    }
    }
});

