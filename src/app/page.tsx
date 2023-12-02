"use client";

import { useState } from "react";
import GridTile from "./components/GridTile";
import { getInitialState, isGameWon, isGameCompleted } from "./functions";

// =================================================================================================
// Component
// =================================================================================================

export default function Home() {
  const [gameState, setGameState] = useState(() => getInitialState());
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [isGameOver, setIsGameOver] = useState(false);
  const [winner, setWinner] = useState("");

  const handleTileClick = (index: number) => {
    let newGameState = gameState;
    newGameState[index] = currentPlayer;

    if (isGameWon(newGameState, currentPlayer)) {
      setWinner(currentPlayer);
      setIsGameOver(true);
      alert(`Game won by ${currentPlayer}`);
      return;
    }

    if (isGameCompleted(newGameState)) {
      alert("Game Over");
    }
    setGameState(newGameState);
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  };

  const handleNewGame = () => {
    setGameState(getInitialState());
    setCurrentPlayer("X");
    setIsGameOver(false);
    setWinner("");
  };

  // =================================================================================================
  // Render
  // =================================================================================================

  return (
    <main className="mx-auto w-full p-24">
      <h1></h1>
      <div className="mx-auto grid w-1/2 grid-cols-3 gap-2">
        {Array.from(Array(9).keys()).map((index) => {
          return (
            <GridTile
              key={index}
              indexValue={index}
              onClick={() => handleTileClick(index)}
              gameState={gameState}
              isGameOver={isGameOver}
            />
          );
        })}
      </div>

      <button onClick={handleNewGame}>New game</button>

      <p>Winner: {winner && winner}</p>
    </main>
  );
}

// =================================================================================================
