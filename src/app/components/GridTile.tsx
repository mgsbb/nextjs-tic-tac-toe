import React from 'react';

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
	return (
		<button
			onClick={onClick}
			disabled={gameState[indexValue] !== '' || isGameOver}
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
