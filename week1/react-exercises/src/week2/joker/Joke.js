import React from 'react';

function Joke({ joke }) {
	return (
		<div>
			<p>Q: {joke.setup}</p>
			<p>A: {joke.punchline}</p>
		</div>
	);
}

export default Joke;
