const { input } = require("./input.js");

const test = `
A Y
B X
C Z
`;

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

let you = 0;
let opponent = 0;

const lines = input.trim().split("\n");

// partOne();
partTwo();

function partOne() {
  lines.forEach((line) => {
    const choice = line.trim().split(" ");
    let opp = scores[choice[0]];
    let y = scores[choice[1]];

    if (opp - y == 1 || opp - y == -2) {
      // opp wins
      opponent += opp + scores.win;
      you += y;
    } else if (opp - y == -1 || opp - y == 2) {
      // you win
      opponent += opp;
      you += y + scores.win;
    } else {
      //draw
      opponent += opp + scores.draw;
      you += y + scores.draw;
    }
  });

  console.log("ِYour score is: " + you);
  console.log("Opponent score is: " + opponent);
}

function partTwo() {
  lines.forEach((line) => {
    const choice = line.trim().split(" ");

    let oppChoice = choice[0];
    let condition = choice[1];

    let opp = scores[oppChoice];

    if (condition == "Z") {
      let yChoice = winConditions[oppChoice];
      let y = scores[yChoice];
      opponent += opp;
      you += y + scores.win;
    } else if (condition == "X") {
      let yChoice = loseConditions[oppChoice];
      let y = scores[yChoice];
      opponent += opp + scores.win;
      you += y;
    } else {
      opponent += opp + scores.draw;
      you += opp + scores.draw;
    }
  });
  console.log("ِYour score is: " + you);
  console.log("Opponent score is: " + opponent);
}
