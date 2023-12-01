export function getInitialState() {
	const initialState = Array(9).join(',').split(',');
	return initialState;
}

export function isGameCompleted(gameState: string[]) {
	return gameState.every((v) => v !== '');
}

export function isGameWon(gameState: string[], lastMoveBy: string) {
	return false;
}
