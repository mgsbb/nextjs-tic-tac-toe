import React from "react";

// =================================================================================================
// Types
// =================================================================================================

type Props = {
  indexValue: number;
  onClick: () => void;
  gameState: string[];
  isGameOver: boolean;
};

// =================================================================================================
// Component
// =================================================================================================

const GridTile = ({ indexValue, onClick, gameState, isGameOver }: Props) => {
  function isTileDisabled() {
    if (gameState[indexValue] !== "" || isGameOver) return true;
  }

  return (
    <button
      onClick={onClick}
      disabled={isTileDisabled()}
      className={`${
        !isTileDisabled() && "hover:bg-fuchsia-900/90"
      } rounded-md bg-fuchsia-900/60 px-8 py-4  md:px-12 md:py-6 lg:px-16 lg:py-8`}
    >
      <p
        className={`${
          gameState[indexValue] === "" && "invisible"
        } text-3xl font-bold text-orange-500`}
      >
        {gameState[indexValue] !== "" ? gameState[indexValue] : "a"}
      </p>
    </button>
  );
};

export default GridTile;
