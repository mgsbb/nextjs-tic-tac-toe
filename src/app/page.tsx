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
    <main className="mx-auto mt-10 flex w-full flex-col items-center gap-10 p-4">
      <h1
        className="w-max bg-gradient-to-r from-pink-600 
      via-purple-600 to-fuchsia-600 bg-clip-text text-3xl font-extrabold text-transparent md:text-5xl lg:text-6xl"
      >
        Tic-Tac-Toe
      </h1>

      <div className="grid grid-cols-3 gap-2">
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

      <button
        onClick={handleNewGame}
        className="rounded-md bg-violet-700 px-4 py-2 hover:bg-purple-600"
      >
        New game
      </button>
      <p className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-2xl font-bold text-transparent md:text-3xl">
        Winner: {winner && winner}
      </p>
    </main>
  );
}

// =================================================================================================
