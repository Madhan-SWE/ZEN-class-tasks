function validateUserName(value) {
  if (!value) {
    document.getElementById("saveScoreBtn").disabled = true;
  } else {
    document.getElementById("saveScoreBtn").disabled = false;
  }
}
let highScores = JSON.parse(localStorage.getItem("highScores")) || [];
function saveScores() {
  let scoreItem = {
    username: document.getElementById("username").value,
    score: localStorage.getItem("mostRecentScore"),
  };
  highScores.push(scoreItem);
  highScores.sort((a, b) => b.score - a.score);
  highScores.splice(5);
  localStorage.setItem("highScores", JSON.stringify(highScores));
  window.location.href = "index.html";
}

let container = document.createElement("div");
container.setAttribute("class", "container text-center");

let row = document.createElement("div");
row.setAttribute("class", "row m-3");

let col1 = document.createElement("div");
col1.setAttribute("class", "col-4");
let col2 = document.createElement("div");
col2.setAttribute("class", "col-4");
let col3 = document.createElement("div");
col3.setAttribute("class", "col-4");

let scoreText = document.createElement("h2");
scoreText.classList.add("text-center");
scoreText.innerText = localStorage.getItem("mostRecentScore");
col2.append(scoreText);
let formGrp = document.createElement("div");
formGrp.classList.add("form-group", "text-center");
let userName = document.createElement("input");
userName.classList.add("p-2", "mb-2", "addWidth");
userName.id = "username";
userName.placeholder = "User Name";
userName.type = "text";
userName.setAttribute("onkeyup", "validateUserName(this.value)");
col2.append(userName);
let br = document.createElement("br");
col2.append(br);

let saveButton = document.createElement("button");
saveButton.setAttribute("class", "btn btn-primary p-2 mb-2");
saveButton.id = "saveScoreBtn";
saveButton.disabled = true;
saveButton.onclick = () => saveScores();
saveButton.innerText = "Save";

col2.append(saveButton);

br = document.createElement("br");
col2.append(br);

let playAgainButton = document.createElement("button");
playAgainButton.setAttribute("class", "btn btn-primary p-2 mb-2");
playAgainButton.id = "playAgain";
playAgainButton.onclick = () => (window.location.href = "game.html");
playAgainButton.innerText = "Play Again";

col2.append(playAgainButton);

br = document.createElement("br");
col2.append(br);

let goHomeButton = document.createElement("button");
goHomeButton.setAttribute("class", "btn btn-primary p-2 mb-2");
goHomeButton.id = "goHome";
goHomeButton.onclick = () => (window.location.href = "index.html");
goHomeButton.innerText = "Go Home";

col2.append(goHomeButton);

br = document.createElement("br");
col2.append(br);

row.append(col1, col2, col3);
container.append(row);
document.body.append(container);
