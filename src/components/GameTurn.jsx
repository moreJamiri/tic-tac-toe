import React from "react";

const GameTurn = ({ turn }) => {
  return (
    <div className="game_turn">
      <div
        className={`game_turn_item ${turn === "x" ? "color-white" : "color-x"}`}
      >
        <i className="fas fa-x"></i>
      </div>
      <div
        className={`game_turn_item ${turn === "o" ? "color-white" : "color-o"}`}
      >
        <i className="fas fa-o"></i>
      </div>

      <span className={`game_turn_circle turn-${turn}`}></span>
    </div>
  );
};

export default GameTurn;
