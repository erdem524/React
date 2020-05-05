import React from 'react';

function DogPhoto({ dogPhoto }) {
	return <img src={dogPhoto} alt="dog" style={{ margin: '20px', border: '1px solid black', width: '100px' }} />;
}

export default DogPhoto;
