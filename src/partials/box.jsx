/** @format */

import React, { useState } from 'react';

function Box(props) {
	const [move, setMove] = useState('-');
	const [disabled, setDisabled] = useState(false);
	let [id, setId] = useState('');
	const squares = {
		0: NaN,
		1: NaN,
		2: NaN,
		3: NaN,
		4: NaN,
		5: NaN,
		6: NaN,
		7: NaN,
		8: NaN,
	};

	const makeMove = () => {
		props.onChange();
		setId(props.id);
		props.player ? setMove('X') : setMove('O');
		setDisabled(true);
		const button = document.querySelectorAll('button');
		button.forEach((item) => {
			console.log(item.id, item.value);
			squares[item.id] = item.value;
		});
		console.log(squares);
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
