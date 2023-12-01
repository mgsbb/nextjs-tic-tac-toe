'use client';

import { useState } from 'react';
import GridTile from './components/GridTile';
import { getInitialState, isGameWon, isGameCompleted } from './functions';

export default function Home() {
	const [gameState, setGameState] = useState(() => getInitialState());
	const [currentPlayer, setCurrentPlayer] = useState('X');

	const handleClick = (index: number) => {
		let newGameState = gameState;
		newGameState[index] = currentPlayer;

		if (isGameWon(newGameState, currentPlayer)) {
			alert(`Game won by ${currentPlayer}`);
			setGameState(getInitialState());
			setCurrentPlayer('X');
			return;
		}

		if (isGameCompleted(newGameState)) {
			alert('Game Over');
		}
		setGameState(newGameState);
		setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
	};

	return (
		<main className='p-24 w-full mx-auto'>
			<div className='grid grid-cols-3 gap-2 w-1/2 mx-auto'>
				{Array.from(Array(9).keys()).map((index) => {
					return (
						<GridTile
							key={index}
							indexValue={index}
							onClick={() => handleClick(index)}
							gameState={gameState}
							currentPlayer={currentPlayer}
						/>
					);
				})}
			</div>
		</main>
	);
}
