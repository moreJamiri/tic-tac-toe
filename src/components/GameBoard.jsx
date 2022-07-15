import React from "react";

const GameBoard = ({ board, onClick }) => {
  return (
    <div className="square">
      <div className="game_board">
        {board.map((item, i) => {
          return <GameItem key={i} item={item} index={i} onClick={onClick} />;
        })}
      </div>
    </div>
  );
};

const GameItem = ({ item, index, onClick }) => {
  const renderItem = (item) => {
    if (!item) return;

    const classes = `fas fa-${item === "x" ? "x" : "o"}`;
    return <i className={classes}></i>;
  };

  const itemClasses = `game_board_item color-${
    item && item === "x" ? "x" : "o"
  }`;

  return (
    <div className={itemClasses} onClick={() => onClick(index)}>
      {renderItem(item)}
    </div>
  );
};

export default GameBoard;
