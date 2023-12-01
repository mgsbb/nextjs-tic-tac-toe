import React from 'react';

type Props = {
	indexValue: number;
	onClick: () => void;
	gameState: { [k: number]: string };
	currentPlayer: string;
};

const GridTile = ({ indexValue, onClick, gameState, currentPlayer }: Props) => {
	return (
		<button
			onClick={onClick}
			disabled={gameState[indexValue] !== ''}
			className='p-10 w-full border border-red-600 text-center'
		>
			<p className={`${gameState[indexValue] === '' && 'invisible'}`}>
				{gameState[indexValue] !== ''
					? gameState[indexValue]
					: 'a random value'}
			</p>
		</button>
	);
};

export default GridTile;
