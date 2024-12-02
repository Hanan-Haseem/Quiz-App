// Quiz questions array
const questions = [
  {
    question: "Which programming language is used for web development?",
      choices: ["Java", "Python", "JavaScript", "C#"],
      correctAnswer: "JavaScript"
  },
  {
    question: "What does HTML stand for? (The Full Form)",
    choices: ["Hyper Text Markup Language", "Hyperlink and Text Markup Language", "Hyper Text Makeup Language", "High-Level Text Markup Language"],
    correctAnswer: "Hyper Text Markup Language"
  },
  {
      question: "What is the purpose of the JavaScript addEventListener method?",
      choices: ["To add comments to the code", "To create variables", "To handle user interactions or events", "To link external JavaScript files"],
      correctAnswer: "4"
  },
  {
    question: "Which tag is used to create a hyperlink in HTML?",
      choices: ["<link>", "<a>", "<href>", "<url>"],
      correctAnswer: "<a>"
  },
  {
    question: "Which of the following is a version control system commonly used in web development?",
      choices: ["SVN", "FTP", "HTTP", "DNS"],
      correctAnswer: "SVN"
  }
];
submitBtn.style.display = "none";
let currentQuestionIndex = 0;
let score = 0;

// Function to display current question and choices
function displayQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  const questionElement = document.getElementById("question");
  const choicesContainer = document.getElementById("choices");
  const optionElement = document.getElementById("option");
  const resultElement = document.getElementById("result");
  const nextPageBtn = document.getElementById("nextPageBtn");

  questionElement.textContent = currentQuestion.question;
  choicesContainer.innerHTML = "";

  currentQuestion.choices.forEach(choice => {
      const choiceButton = document.createElement("button");
      choiceButton.textContent = choice;
      choiceButton.classList.add("choice-btn");
      choiceButton.addEventListener("click", () => chooseAnswer(choice));
      choicesContainer.appendChild(choiceButton);
  });

  optionElement.textContent = "";
  resultElement.textContent = "";
  nextPageBtn.style.display = "none"; 
}

// Function to handle user's answer submission
function chooseAnswer(selectedAnswer) {
  const currentQuestion = questions[currentQuestionIndex];
  const optionElement = document.getElementById("option");
  const scoreElement = document.getElementById("userScore");
  const resultElement = document.getElementById("result");
  const nextPageBtn = document.getElementById("nextPageBtn");

  if (!nextPageBtn.style.display || nextPageBtn.style.display === "none") {
      nextPageBtn.style.display = "block"; 
  }

  if (selectedAnswer === currentQuestion.correctAnswer) {
      score++;
      resultElement.textContent = "Correct!";
  } else {
      resultElement.textContent = "Incorrect!";
  }

  optionElement.textContent = "Your Answer: " + selectedAnswer;
  scoreElement.textContent = "Score: " + score + "/" + questions.length;
}

// Function to move to the next question
function nextPage() {
  const submitBtn = document.getElementById("submitBtn");
  submitBtn.disabled = false; 

  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
      displayQuestion();
  } else {
      endQuiz();
  }
}

// Function to end the quiz and display the final score
function endQuiz() {
  const questionElement = document.getElementById("question");
  const choicesContainer = document.getElementById("choices");
  const resultElement = document.getElementById("result");
  const scoreElement = document.getElementById("userScore");
  const optionElement = document.getElementById("option"); // Add this line

  questionElement.textContent = "Quiz Completed!";
  choicesContainer.innerHTML = "";
  resultElement.textContent = "";
  scoreElement.textContent = "Final Score: " + score + "/" + questions.length;

  if (optionElement) {
      optionElement.style.display = "none";
  }
  nextPageBtn.style.display = "none";
}

// Initial display
displayQuestion();

