const realQuestion = document.getElementById("question");
const options = Array.from(document.getElementsByClassName("choice_2"));
let currentQuestions = {};
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
let maxQuestions = 5;


const questions = [
  {
    question: "What is the name of the president of Nigeria?",
    choice1: "Muritala Muhammed",
    choice2: "Muhammadu Buahri",
    choice3: "Nnamdi Azikwe",
    choice4: "Goodluck Ebele Jonathan",
    answer: 2,
  },
  {
    question: "How many states are in nigeria?",
    choice1: "36",
    choice2: "31",
    choice3: "33",
    choice4: "32",
    answer: 1,
  },
  {
    question: "Full meaning of PHCN?",
    choice1: "Power holder of nigeria",
    choice2: "People holding company of nigeria",
    choice3: "Power holding company of nigeria",
    choice4: "People holder of nigeria",
    answer: 3,
  },
  {
    question: "Solve: 34 * 9 - 5.",
    choice1: "136",
    choice2: "311",
    choice3: "306",
    choice4: "163",
    answer: 3,
  },
  {
    question: "Solve: 88 - 23 - 99 + 123.",
    choice1: "71",
    choice2: "16",
    choice3: "58",
    choice4: "61",
    answer: 4,
  },
  {
    question: "Who is the founder of microsoft?",
    choice1: "Donald Trump",
    choice2: "Okpugie Kindness",
    choice3: "Bil Gates",
    choice4: "Jeff Bezos",
    answer: 3,
  },
]

const startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  getNewQuestion();
}; 


  //Questions 
const getNewQuestion = () => {
  
  if(questionCounter >= maxQuestions)  {
    localStorage.setItem("mostRecentScore", score);
    return window.location.assign("./end.html");
  }

  questionCounter++;
  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestions = availableQuestions[questionIndex];
  realQuestion.innerText = currentQuestions.question;

  options.forEach((option) => {
    let number = option.dataset["number"];
    option.innerText = currentQuestions["choice" + number];
  });
  availableQuestions.splice(questionIndex, 1);
};


//For each buttons 
options.forEach((option) => {
  option.addEventListener("click", e => {
    const selectedChoice = e.target;   
    const selectedAnswer = selectedChoice.dataset["number"];
    if(selectedAnswer == currentQuestions.answer) score++
    console.log(score);
    getNewQuestion();
  });
});

startGame();

