var questions = [];

async function fetchData() {
  try {
    let url =
      "https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple";
    let response = await fetch(url);
    let data = await response.json();
    questions = data.results;
  } catch (err) {
    alert(err);
    window.location.href = "index.html";
  }

  getQuestion();
  container.classList.remove("invisible");
}

function addBreak() {
  let br = document.createElement("br");
  return br;
}

let container = document.createElement("div");
container.setAttribute("class", "container text-center invisible");

let progressRow = document.createElement("div");
progressRow.setAttribute("class", "row");

let progressText = document.createElement("div");
progressText.innerHTML = "Question 1/3";
progressText.setAttribute("class", "col-4");
progressText.setAttribute("id", "progressText");

let emptyDiv = document.createElement("div");
emptyDiv.setAttribute("class", "col-6");

let scoreText = document.createElement("div");
scoreText.setAttribute("class", "col-2");
scoreText.innerHTML = "Score";

progressRow.append(progressText, emptyDiv, scoreText);
container.append(progressRow);

let progressRow2 = document.createElement("div");
progressRow2.setAttribute("class", "row");

let col4 = document.createElement("div");
col4.setAttribute("class", "col-6");
let progressBar = document.createElement("div");
progressBar.setAttribute("class", "progress m-1");
progressValue = document.createElement("div");
progressValue.setAttribute("class", "progress-bar");
progressValue.setAttribute("role", "progressbar");
progressValue.style = "width:100%";
progressValue.setAttribute("id", "progressValue");
progressValue.setAttribute("aria-valuenow", "100");
progressValue.setAttribute("aria-valuemin", "0");
progressValue.setAttribute("aria-valuemax", "100");
progressBar.append(progressValue);

col4.append(progressBar);

emptyDiv = document.createElement("div");
emptyDiv.setAttribute("class", "col-4");

let scoreDiv = document.createElement("div");
scoreDiv.setAttribute("class", "col-2");
scoreDiv.setAttribute("id", "score");
scoreDiv.innerHTML = "10";

progressRow2.append(col4, emptyDiv, scoreDiv);
container.append(progressRow2);

let questionRow = document.createElement("div");
questionRow.setAttribute("class", "row");
questionText = document.createElement("div");
questionText.setAttribute("class", "col-12");
questionText.setAttribute("id", "questiontext");
questionText.innerText = "Question comes here?";
questionRow.append(questionText);
container.append(questionText);

for (let i = 0; i < 4; i++) {
  let optionRow = document.createElement("div");
  optionRow.setAttribute(
    "class",
    "row p-0 m-3 border border-primary choice-text"
  );
  optionRow.setAttribute("onclick", "selectOption(this)");
  let option1 = document.createElement("div");
  option1.setAttribute("class", "col-1 bg-primary text-white  p-3");
  option1.innerText = String.fromCharCode(65 + i);
  option1Value = document.createElement("div");
  option1Value.setAttribute("class", "col-11  p-3 ");
  option1Value.innerText = "Option " + i;
  optionRow.append(option1, option1Value);
  container.append(optionRow);
}

document.body.append(container);

function selectOption(element) {
  let selectedAnswer = element.childNodes[1].innerText;
  let correctAnswer = questions[questionNo - 1]["correct_answer"];
  if (selectedAnswer === correctAnswer) {
    score += 10;
    element.classList.add("correct");
    document.getElementById("score").innerText = score;
    setTimeout(() => {
      element.classList.remove("correct");
      getQuestion();
    }, 1000);
  } else {
    element.classList.add("wrong");
    setTimeout(() => {
      element.classList.remove("wrong");
      getQuestion();
    }, 1000);
  }
}
let questionNo = 0;
let score = 0;
let choices = document.getElementsByClassName("choice-text");
choices = Array.from(choices);

function getQuestion() {
  if (questionNo < 10) {
    let curQuestion = questions[questionNo];
    document.getElementById("questiontext").innerText = curQuestion["question"];
    document.getElementById("progressText").innerText =
      "Question " + (questionNo + 1) + "/10";
    document.getElementById("progressValue").style.width =
      ((questionNo + 1) * 100) / 10 + "%";
    document.getElementById("score").innerText = score;
    let randIndex = Math.floor(Math.random() * 3);
    let Options = curQuestion.incorrect_answers;
    Options.splice(randIndex, 0, curQuestion.correct_answer);
    choiceNo = 0;
    choices.forEach((element) => {
      element.childNodes[1].innerText = Options[choiceNo];
      choiceNo++;
    });

    questionNo++;
  } else {
    localStorage.setItem("mostRecentScore", score);
    window.location.href = "end.html";
  }
}
fetchData();
