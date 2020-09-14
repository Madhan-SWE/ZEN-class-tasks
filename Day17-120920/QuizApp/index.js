let container = document.createElement("div");
container.setAttribute("class", "container text-center");

let quizHeader = document.createElement("div");
let h1 = document.createElement("h2");
h1.innerText = "Quick Quiz";
quizHeader.append(h1);
quizHeader.setAttribute("class", "text-center font-weight-bold p-2 mb-2");
container.append(quizHeader);

let quizButton = document.createElement("button");
quizButton.setAttribute("class", "btn btn-primary p-2 mb-2");
quizButton.id = "play";
quizButton.onclick = () => (window.location.href = "game.html");
quizButton.innerText = "Play";

container.append(quizButton);

let br = document.createElement("br");
container.append(br);

let highScoresButton = document.createElement("button");
highScoresButton.setAttribute("class", "btn btn-primary p-2 mb-2");
highScoresButton.innerText = "High Scores";
highScoresButton.id = "highScores";
highScoresButton.onclick = () => (window.location.href = "highScores.html");
container.append(highScoresButton);

document.body.append(container);
