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

  X: 1, //Rock
  Y: 2, //Paper
  Z: 3, //Scissors
  win: 6,
  draw: 3,
};

let you = 0;
let opponent = 0;

const lines = input.trim().split("\n");

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

  0;
});

console.log("ِYour score is: " + you);
console.log("Opponent score is: " + opponent);
