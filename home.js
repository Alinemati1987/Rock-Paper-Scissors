// const { input } = require("./input.js");
const fs = require("fs");

// Main //

function main() {
  const allData = getData();
  const conditions = getConditions();
  partOne(allData, conditions);
  partTwo(allData, conditions);
}

// Functions //

function partOne(allData, conditions) {
  let you = 0;
  let opponent = 0;

  allData.forEach((line) => {
    const choice = line.trim().split(" ");
    let opp = conditions.scores[choice[0]];
    let y = conditions.scores[choice[1]];

    if (opp - y == 1 || opp - y == -2) {
      // opp wins
      opponent += opp + conditions.scores.win;
      you += y;
    } else if (opp - y == -1 || opp - y == 2) {
      // you win
      opponent += opp;
      you += y + conditions.scores.win;
    } else {
      //draw
      opponent += opp + conditions.scores.draw;
      you += y + conditions.scores.draw;
    }
  });

  logResult("part ONE", you, opponent);
}

function partTwo(allData, conditions) {
  let you = 0;
  let opponent = 0;

  allData.forEach((line) => {
    const choice = line.trim().split(" ");

    let oppChoice = choice[0];
    let condition = choice[1];

    let opp = conditions.scores[oppChoice];

    if (condition == "Z") {
      let yChoice = conditions.winConditions[oppChoice];
      let y = conditions.scores[yChoice];
      opponent += opp;
      you += y + conditions.scores.win;
    } else if (condition == "X") {
      let yChoice = conditions.loseConditions[oppChoice];
      let y = conditions.scores[yChoice];
      opponent += opp + conditions.scores.win;
      you += y;
    } else {
      opponent += opp + conditions.scores.draw;
      you += opp + conditions.scores.draw;
    }
  });

  logResult("part TWO", you, opponent);
}

function logResult(part, you, opp) {
  console.log(
    "The resalt for " +
      part +
      " is: \n Your score: " +
      you +
      "\n The opponent's score: " +
      opp
  );
}

function getConditions() {
  const scores = {
    A: 1, //Rock
    B: 2, //Paper
    C: 3, //Scissors

    X: 1, // need to lose //Rock
    Y: 2, // need to draw //Paper
    Z: 3, // need to win //Scissors
    win: 6,
    draw: 3,
  };

  const winConditions = {
    // if it is Z
    A: "Y",
    B: "Z",
    C: "X",
  };

  const loseConditions = {
    // if it is X
    A: "Z",
    B: "X",
    C: "Y",
  };

  const allConditions = {
    scores: scores,
    winConditions: winConditions,
    loseConditions: loseConditions,
  };
  return allConditions;
}

function getData() {
  const lines = fs.readFileSync("./input.txt").toString();
  var seperateLines = lines.trim().split("\n");
  return seperateLines;
}

// Run the script //
main();
