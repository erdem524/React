import React from 'react';
import './App.css';
import DogGallery from './week2/dogPhoto/DogGalary';
import Friend from './week2/newFriend/Friend';
import RandomJoke from './week2/joker/RandomJoke';
import WeatherApp from './week2/project/WeatherApp';

function App() {
	return (
		<div className="App">
			<Friend />
			<DogGallery />
			<RandomJoke />
			<WeatherApp />
		</div>
	);
}

export default App;
