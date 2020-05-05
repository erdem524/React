import React, { useState } from 'react';
import Button from './Button';
import DogPhoto from './DogPhoto';

function DogGallery() {
	const [ dogPhotos, setDogPhotos ] = useState([]);
	const [ isLoading, setLoading ] = useState(false);
	const [ hasError, setError ] = useState(false);

	const getDogPhoto = () => {
		setLoading(true);
		fetch('https://dog.ceo/api/breeds/image/random')
			.then((res) => res.json())
			.then((data) => {
				setDogPhotos((dogPhotos) => [ ...dogPhotos, data.message ]);
				setLoading(false);
			})
			.catch((err) => {
				console.log(err);
				setError(true);
				setLoading(false);
			});
	};

	return (
		<div>
			<Button onClickFunc={getDogPhoto} />
			{dogPhotos.length !== '0' && <p>{'Get your first dog by clicking the button!'}</p>}
			{isLoading && <p>Loading ....</p>}
			{!hasError && dogPhotos.map((dogPhoto, index) => <DogPhoto key={index} dogPhoto={dogPhoto} />)}
			{hasError && <p>Something went wrong</p>}
		</div>
	);
}

export default DogGallery;
