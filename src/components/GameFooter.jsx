import React from "react";

const GameFooter = ({ onePlayer, setShowGame, replay }) => {
  const players = onePlayer.selectedOption === "true" ? "یه نفره" : "دو نفره";
  return (
    <div className="game_footer">
      <div className="game_footer_button" onClick={() => setShowGame(false)}>
        <i className="fas fa-cog"></i>
      </div>
      <div className="game_footer_status">{players}</div>
      <div className="game_footer_button" onClick={replay}>
        <i className="fas fa-arrows-rotate"></i>
      </div>
    </div>
  );
};

export default GameFooter;
