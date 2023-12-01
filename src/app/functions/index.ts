export function getInitialState() {
	const indexArray = Array.from(Array(9).keys());
	const initialState: { [k: number]: string } = Object.fromEntries(
		indexArray.map((v, i) => {
			return [v, ''];
		})
	);
	return initialState;
}

export function isGameCompleted(gameState: { [k: number]: string }) {
	return Object.values(gameState).every((v) => v !== '');
}

export function isGameWon(
	gameState: { [k: number]: string },
	lastMoveBy: string
) {
	console.log(lastMoveBy);
}
