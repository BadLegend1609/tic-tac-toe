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
	let message = '';
	let h = false;
	const togglePlayer = () => {
		setPlayer(!player);
	};
	if (
		(squares[0] === squares[1] && squares[0] === squares[2]) ||
		(squares[3] === squares[4] && squares[3] === squares[5]) ||
		(squares[6] === squares[7] && squares[6] === squares[8]) ||
		(squares[0] === squares[4] && squares[0] === squares[8]) ||
		(squares[2] === squares[4] && squares[2] === squares[6]) ||
		(squares[0] === squares[3] && squares[0] === squares[6]) ||
		(squares[1] === squares[4] && squares[1] === squares[7]) ||
		(squares[2] === squares[5] && squares[2] === squares[8])
	) {
		message = 'Player ' + (player ? 2 : 1) + ' wins! 🥳 🥳 ';
		h = true;
	}
	return (
		<div>
			<center>
				<h1>{message}</h1>
			</center>
			<div className='board' hidden={h}>
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
			<h3 hidden={h}>Player {player ? 1 : 2}'s Turn</h3>
		</div>
	);
}

export default Board;
