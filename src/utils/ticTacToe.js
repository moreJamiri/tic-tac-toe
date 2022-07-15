function generateBoard() {
  return Array(9).fill("");
}

function nextTurn(turn) {
  return turn === "x" ? "o" : "x";
}

function doTurn(board, index, who) {
  if (board[index] !== "") return;

  const newBoard = board;
  newBoard[index] = who;
  return newBoard;
}

function emptyBlocks(board) {
  return board
    .map((value, i) => {
      if (value === "") return i;
      return "";
    })
    .filter((v) => v !== "");
}

function checkForDraw(board) {
  return emptyBlocks(board).length === 0 ? true : false;
}

function checkForWin(board) {
  const patterns = [
    // horizontal
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // vertical
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // diagonal
    [0, 4, 8],
    [2, 4, 6],
  ];

  let winner = null;

  patterns.forEach((pattern) => {
    const [a, b, c] = pattern;
    const [first, second, third] = [board[a], board[b], board[c]];
    if (first && first === second && first === third) {
      winner = first;
      return;
    }
  });

  return winner;
}

const Game = {
  generateBoard,
  nextTurn,
  doTurn,
  checkForDraw,
  checkForWin,
};

export default Game;
