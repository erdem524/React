import React, { useState, useEffect } from 'react';
import Joke from './Joke';

const RandomJoke = () => {
	const [ hasError, setErrors ] = useState(false);
	const [ joke, setJoke ] = useState({});

	async function fetchData() {
		const res = await fetch('https://official-joke-api.appspot.com/random_joke');
		res.json().then((res) => setJoke(res)).catch((err) => setErrors(err));
	}

	useEffect(() => {
		fetchData();
	}, []);

	return <div>{hasError ? <span>Error </span> : <Joke joke={joke} />} </div>;
};
export default RandomJoke;
