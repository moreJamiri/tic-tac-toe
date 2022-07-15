import { useState } from "react";
import Game from "./components/Game";
import Settings from "./components/Settings";
import "./styles/main.css";

function App() {
  const [showGame, setShowGame] = useState(false);
  const [gameScore, setGameScore] = useState({
    name: "score",
    label: "چند امتیازی؟",
    options: [
      { value: "5", label: "۵ امتیازی" },
      { value: "10", label: "۱۰ امتیازی" },
      { value: "20", label: "۲۰ امتیازی" },
    ],
    selectedOption: "5",
  });
  const [onePlayer, setOnePlayer] = useState({
    name: "onePlayer",
    label: "چند نفره؟",
    options: [
      { value: "true", label: "یه نفره" },
      { value: "false", label: "دو نفره" },
    ],
    selectedOption: "false",
  });
  const [gameLevel, setGameLevel] = useState({
    name: "level",
    label: "سطح بازی؟",
    showBy: "onePlayer",
    showIf: "true",
    options: [
      { value: "easy", label: "آسون" },
      { value: "hard", label: "سخت" },
    ],
    selectedOption: "easy",
  });

  const replay = () => {
    setShowGame(false);
    setTimeout(() => {
      setShowGame(true);
    }, 0.00000001);
  };

  return (
    <>
      {showGame ? (
        <Game
          settings={{ gameScore, onePlayer, gameLevel }}
          replay={replay}
          setShowGame={setShowGame}
        />
      ) : (
        <Settings
          settings={[
            [gameScore, setGameScore],
            [onePlayer, setOnePlayer],
            [gameLevel, setGameLevel],
          ]}
          setShowGame={setShowGame}
        />
      )}
    </>
  );
}

export default App;

