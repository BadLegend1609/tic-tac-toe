/** @format */

import React, { useState } from 'react';

function Box(props) {
	const [move, setMove] = useState('-');
	const [disabled, setDisabled] = useState(false);
	let [id, setId] = useState('');

	const makeMove = () => {
		props.onChange();
		setId(props.id);
		props.player ? setMove('X') : setMove('O');
		setDisabled(true);
		props.squares[props.id] = props.player ? 'X' : 'O';
		props.setSquares([...props.squares]);
		console.log(props.squares);
	};
	return (
		<button
			value={move}
			onClick={makeMove}
			id={id}
			disabled={disabled}
			className='btn'>
			{move}
		</button>
	);
}

export default Box;
