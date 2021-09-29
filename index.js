let readLineSync = require("readline-sync");
const chalk = require('chalk');

let score = 0;
let flag = 0;

const userName = readLineSync.question(chalk.blue("May I have your name? "));
console.log("Welcome "+userName+ " to DO YOU KNOW ME quiz!")
var highScores = [
  {
    name: "Aditi",
    score: "2"
  },
  {
    name: "Ananya",
    score: "1"
  }
]
// questions list of objects
const questions = [
  {
    question: chalk.magenta("Whats my full name? "),
    answer: "Bhargavi Sunkireddy"
  },
  {
    question: chalk.magenta("Where do I live? "),
    answer: "Hyderabad"
  },
  {
    question: chalk.magenta("Did I watch Game of Thrones"),
    answer: "Yes"
  },
  {
    question: chalk.magenta("Where is my Engineering College? "),
    answer: "Hyderabad"
  },
  {
    question: chalk.magenta("What is my favorite color? "),
    answer: "Red"
  }
]
// main game function
function play(question, answer) {
  const userAnswer = readLineSync.question(question);
  if (userAnswer.toLowerCase() === answer.toLowerCase()) {
    console.log(chalk.bgGreen("You are correct!"));
    score += 1;
  }
  else {
    console.log(chalk.bgRed("Sorry, You are wrong!"));
    score -= 1;
  }
}

for (let i = 0; i < questions.length; i++) {
  play(questions[i].question, questions[i].answer);
}
console.log(chalk.bgBlue("Your final score is: ", score));
