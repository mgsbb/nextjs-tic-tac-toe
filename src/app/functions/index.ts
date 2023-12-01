import { WIN_CONDITIONS } from '../constants';

export function getInitialState() {
	const initialState = Array(9).join(',').split(',');
	return initialState;
}

export function isGameCompleted(gameState: string[]) {
	return gameState.every((v) => v !== '');
}

export function isGameWon(gameState: string[], lastMoveBy: string) {
	let isGameWon = false;

	WIN_CONDITIONS.forEach((winCondition) => {
		// console.log(winCondition);
		// console.log(
		// 	gameState[winCondition[0]],
		// 	gameState[winCondition[1]],
		// 	gameState[winCondition[2]]
		// );

		if (
			gameState[winCondition[0]] === lastMoveBy &&
			gameState[winCondition[1]] === lastMoveBy &&
			gameState[winCondition[2]] === lastMoveBy
		) {
			isGameWon = true;
		}
	});

	return isGameWon;
}
