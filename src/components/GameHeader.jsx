import React from "react";
import PN from "persian-number";

const GameHeader = ({ results }) => {
  const { x, o, draws } = results;

  return (
    <div className="game_header">
      <div className="game_header_item color-x">
        <i className="game_header_item_icon fas fa-x"></i>
        <p className="game_header_item_text">{PN.convertEnToPe(x)} برد</p>
      </div>
      <div className="game_header_item color-o">
        <i className="game_header_item_icon fas fa-o"></i>
        <p className="game_header_item_text">{PN.convertEnToPe(o)} برد</p>
      </div>
      <div className="game_header_item color-gray">
        <i className="game_header_item_icon fas fa-scale-balanced"></i>
        <p className="game_header_item_text">{PN.convertEnToPe(draws)} مساوی</p>
      </div>
    </div>
  );
};

export default GameHeader;
