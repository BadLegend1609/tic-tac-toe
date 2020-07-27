/** @format */

import React, { useState } from 'react';

function Box(props) {
	const [move, setMove] = useState('-');
	const [disabled, setDisabled] = useState(false);

	const makeMove = (e) => {
		props.onChange();
		e.target.value = props.value;
		props.player ? setMove('X') : setMove('O');
		setDisabled(true);
	};
	return (
		<button value={move} onClick={makeMove} disabled={disabled} className='btn'>
			{move}
		</button>
	);
}

export default Box;
