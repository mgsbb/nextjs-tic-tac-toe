"use client";
import { useState } from "react";

export default function StateTest() {
  const [count, setCount] = useState(0);
  const [isCPU, setIsCPU] = useState(true);
  const [player, setPlayer] = useState("X");

  return (
    <button
      onClick={() => {
        setCount((prev) => {
          console.log(prev);
          return prev + 1;
        });
        setCount((prev) => {
          console.log(prev);
          return prev + 1;
        });
      }}
    >
      {" "}
      click me: {player}
    </button>
  );
}
