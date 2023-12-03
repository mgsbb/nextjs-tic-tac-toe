"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import GridTile from "@/app/components/GridTile";
import { getInitialState, isGameWon, isGameCompleted } from "@/app/functions";

// =================================================================================================
// Component
// =================================================================================================

export default function Grid({ isCPU }: { isCPU: boolean }) {
  const [gameState, setGameState] = useState(() => getInitialState());
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [isGameOver, setIsGameOver] = useState(false);
  const [winner, setWinner] = useState("");

  useEffect(() => {
    if (isCPU && currentPlayer === "O") {
      setTimeout(() => handleCPUClick(), 300);
    }
  }, [currentPlayer]);

  const handleTileClick = (index: number) => {
    let newGameState = gameState;
    newGameState[index] = currentPlayer;

    if (isGameWon(newGameState, currentPlayer)) {
      setWinner(currentPlayer);
      setIsGameOver(true);
      // alert(`Game won by ${currentPlayer}`);
      return;
    }

    if (isGameCompleted(newGameState)) {
      // alert("Game Over");
      setIsGameOver(true);
      return;
    }
    setGameState(() => newGameState);

    setCurrentPlayer((prev) => (prev === "X" ? "O" : "X"));
  };

  const handleNewGame = () => {
    setGameState(getInitialState());
    setCurrentPlayer("X");
    setIsGameOver(false);
    setWinner("");
  };

  const handleCPUClick = () => {
    // why as number[]?
    const remainingIndexes = gameState
      .map((v, i) => (v === "" ? i : null))
      .filter((v) => v !== null) as number[];

    const randomIndex = Math.floor(Math.random() * remainingIndexes.length);
    const randomValue = remainingIndexes[randomIndex];

    handleTileClick(randomValue);
  };

  const displayText = () => {
    let player = "";
    if (isCPU) {
      player = currentPlayer === "X" ? "User" : "CPU";
    } else player = currentPlayer;

    return isGameOver
      ? winner === ""
        ? "Game over"
        : "Winner: " + player
      : `${player}s turn`;
  };

  // =================================================================================================
  // Render
  // =================================================================================================

  return (
    <>
      <div className="grid grid-cols-3 gap-2">
        {Array.from(Array(9).keys()).map((index) => {
          return (
            <GridTile
              key={index}
              indexValue={index}
              onClick={() => {
                handleTileClick(index);
              }}
              gameState={gameState}
              isGameOver={isGameOver}
              isCPU={isCPU}
              currentPlayer={currentPlayer}
            />
          );
        })}
      </div>

      <button
        onClick={handleNewGame}
        className="rounded-md bg-gradient-to-r from-purple-600 to-fuchsia-600 
        px-4 py-2  hover:bg-gradient-to-r hover:from-orange-600 hover:to-red-600"
      >
        New game
      </button>

      <p className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-2xl font-bold text-transparent md:text-3xl">
        {displayText()}
      </p>

      <Link href="/">
        <button
          className=" bg-gradient-to-r from-purple-600 to-fuchsia-600 
      bg-clip-text px-4 py-2 text-transparent"
        >
          Back home
        </button>
      </Link>
    </>
  );
}

// =================================================================================================
