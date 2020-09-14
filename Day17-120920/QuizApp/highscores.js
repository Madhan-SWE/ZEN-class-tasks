let container = document.createElement("div");
container.setAttribute("class", "container text-center");

let row = document.createElement("div");
row.setAttribute("class", "row m-3");
let col1 = document.createElement("div");
col1.setAttribute("class", "col-3");
let col2 = document.createElement("div");
col2.setAttribute("class", "col-6");
let col3 = document.createElement("div");
col3.setAttribute("class", "col-3");

let HighScoreText = document.createElement("h2");
HighScoreText.classList.add("text-center");
HighScoreText.innerText = "HighScores";
col2.append(HighScoreText);

let highScoreList = JSON.parse(localStorage.getItem("highScores")) || [];
if (highScoreList.length === 0) {
  let scoreText = document.createElement("p");
  scoreText.innerText = "No scores found!";
  scoreText.classList.add("text-center");
  col2.append(scoreText);
}
for (score in highScoreList) {
  let scoreText = document.createElement("p");
  scoreText.innerText =
    highScoreList[score]["username"] + " - " + highScoreList[score]["score"];
  scoreText.classList.add("text-center");
  col2.append(scoreText);
}

let goHomeButton = document.createElement("button");
goHomeButton.setAttribute("class", "btn btn-primary p-2 mb-2");
goHomeButton.id = "goHome";
goHomeButton.onclick = () => (window.location.href = "index.html");
goHomeButton.innerText = "Go Home";

col2.append(goHomeButton);
row.append(col1, col2, col3);
container.append(row);
document.body.append(container);
