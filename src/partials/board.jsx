/** @format */

import React, { useState } from 'react';
import Box from './box';

function Board() {
	const [player, setPlayer] = useState(true);

	const togglePlayer = () => {
		setPlayer(!player);
	};
	let boxes = [];
	for (let i = 0; i < 9; i++) {
		boxes.push(<Box player={player} id={i} key={i} onChange={togglePlayer} />);
	}

	return (
		<div>
			<div className='board'>{boxes.map((i) => i)}</div>
			<h3>Player {player ? 1 : 2}'s Turn</h3>
		</div>
	);
}

export default Board;
