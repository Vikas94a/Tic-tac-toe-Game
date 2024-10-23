let boxes = document.querySelectorAll(".box");

let player1 = true;
let winner = document.querySelector(".winner");
let reset = document.querySelector("#btn");
let winnerPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

for (let box of boxes) {
  box.addEventListener("click", () => {
    if (box.textContent === "") {
      if (player1) {
        console.log("x print");
        box.textContent = "X";
        box.style.backgroundColor = "#FFEF9F";
        player1 = false;
      } else {
        console.log("O printed");
        box.textContent = "O";
        box.style.backgroundColor = "#14FFF7";
        player1 = true;
      }
    } else {
      console.log("Box is already occupied");
    }
    checkWinner();
  });
}

// This thing dose not work reason that it's not loop through hole array of winnerPattern
// function checkWinner() {
//   const patternFirst = winnerPattern[0];
//   const patternSec = winnerPattern[1];
//   const patternTird = winnerPattern[2];

//   const boxA = boxes[patternFirst].textContent;
//   const boxB = boxes[patternSec].textContent;
//   const boxC = boxes[patternTird].textContent;

//   if (boxA !== "" && boxA === boxB && boxB === boxC) {
//     console.log("winner is here");
//   }
// }
//
function checkWinner() {
  for (let pattern of winnerPattern) {
    const [a, b, c] = pattern; // Get the indices from the pattern
    const boxA = boxes[a].textContent; // Get content of the first box
    const boxB = boxes[b].textContent; // Get content of the second box
    const boxC = boxes[c].textContent; // Get content of the third box

    // Check if all three boxes are the same and not empty
    if (boxA !== "" && boxA === boxB && boxB === boxC) {
      winner.textContent = `Winner: ${boxA}`; // Update the winner display
      disableBoxes();
      return; // Exit the function once a winner is found
    }
  }
}

function resetGame() {
  for (let box of boxes) {
    box.textContent = "";
    box.style.backgroundColor = "#595758";
    winner.textContent = "New Game";
  }
  player1 = true;
}
function disableBoxes() {
  for (let box of boxes) {
    box.onclick = null; // Disable the click event for each box
    box.style.pointerEvents = "none"; // Prevent further mouse interactions
  }
}
