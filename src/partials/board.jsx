/** @format */

import React, { useState } from 'react';
import Box from './box';

function Board() {
	const [player, setPlayer] = useState(true);
	const [squares, setSquares] = useState([
		NaN,
		NaN,
		NaN,
		NaN,
		NaN,
		NaN,
		NaN,
		NaN,
		NaN,
	]);

	const togglePlayer = () => {
		setPlayer(!player);
	};
	return (
		<div>
			<div className='board'>
				{squares.map((a, i) => (
					<Box
						player={player}
						id={i}
						squares={squares}
						setSquares={setSquares}
						key={i}
						onChange={togglePlayer}
					/>
				))}
			</div>
			<h3>Player {player ? 1 : 2}'s Turn</h3>
		</div>
	);
}

export default Board;
