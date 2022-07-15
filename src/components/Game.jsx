import React, { useState } from "react";
import game from "../utils/ticTacToe";
import GameHeader from "./GameHeader";
import GameBoard from "./GameBoard";
import GameTurn from "./GameTurn";
import GameFooter from "./GameFooter";
import Result from "./Result";

const Game = ({ settings, setShowGame, replay }) => {
  const [board, setBoard] = useState(game.generateBoard());
  const [results, setResults] = useState({ x: 0, o: 0, draws: 0 });
  const [turn, setTurn] = useState("x");
  const [gameStarter, setGameStarter] = useState("o");
  const [showResult, setShowResult] = useState(false);

  const newGame = () => {
    const newBoard = game.generateBoard();
    setBoard(newBoard);
    setTurn(gameStarter);

    const newGameStarter = game.nextTurn(gameStarter);
    setGameStarter(newGameStarter);
  };

  const checkResults = () => {
    const winner = game.checkForWin(board);
    const draw = game.checkForDraw(board);
    const newResults = results;

    if (winner || draw) {
      if (winner) {
        newResults[winner] += 1;
      } else if (draw) {
        newResults.draws += 1;
      }
      // Check for game end
      setResults(newResults);
      for (const item in results) {
        if (results[item].toString() === settings.gameScore.selectedOption) {
          setShowResult(true);
          return true;
        }
      }
      newGame();
      return true;
    }
  };

  const handleClick = (i) => {
    // do turn
    const newBoard = game.doTurn(board, i, turn);
    if (!newBoard) return;
    setBoard(newBoard);

    // Check for win or draw
    if (checkResults()) return;

    // Set next turn
    setTurn(game.nextTurn(turn));
  };

  return (
    <div className="container">
      <GameHeader results={results} />
      <GameBoard board={board} onClick={handleClick} />
      <GameTurn turn={turn} />
      <GameFooter
        onePlayer={settings.onePlayer}
        setShowGame={setShowGame}
        replay={replay}
      />
      {showResult && (
        <Result results={results} setShowGame={setShowGame} replay={replay} />
      )}
    </div>
  );
};

export default Game;
