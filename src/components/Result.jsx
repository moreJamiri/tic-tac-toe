import React from "react";
import PN from "persian-number";

const Result = ({ results, replay, setShowGame }) => {
  return (
    <div className="result_container">
      <div className="result">
        <Winner results={results} />
        <Table results={results} />
        <button className="result_button bg-x color-white" onClick={replay}>
          بازی دوباره
        </button>
        <button className="result_button" onClick={() => setShowGame(false)}>
          بازی جدید
        </button>
      </div>
    </div>
  );
};

const Table = ({ results }) => {
  const { x, o, draws } = results;
  return (
    <table className="result_table">
      <thead>
        <th>
          <i className="fa fa-x color-x"></i>
        </th>
        <th>
          <i className="fa fa-o color-o"></i>
        </th>
        <th>
          <i className="fa fa-scale-balanced color-gray"></i>
        </th>
      </thead>
      <tbody>
        <tr>
          <td>{PN.convertEnToPe(x)}</td>
          <td>{PN.convertEnToPe(o)}</td>
          <td>{PN.convertEnToPe(draws)}</td>
        </tr>
      </tbody>
    </table>
  );
};

const Winner = ({ results }) => {
  const { x, o, draws } = results;
  const winner = () => {
    if (x > o && x > draws) return "x";
    if (o > x && o > draws) return "o";
    return false;
  };
  return (
    <h2 className="result_winner">
      {winner() ? (
        <>
          ایول <i className={`fa fa-${winner()} color-${winner()}`}></i> برنده
          شدی!
        </>
      ) : (
        <>
          <i className="fa fa-scale-balanced color-gray"></i> مساوی شد!
        </>
      )}
    </h2>
  );
};
export default Result;
