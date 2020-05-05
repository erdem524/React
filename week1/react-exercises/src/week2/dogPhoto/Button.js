import React from 'react';

function Button({ onClickFunc }) {
	return (
		<button onClick={onClickFunc} style={{ margin: '20px', border: '1px solid black', width: '100px' }}>
			Get a dog!
		</button>
	);
}

export default Button;
