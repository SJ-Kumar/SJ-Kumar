import React from 'react';

const headingStyle = {
	fontSize: '20pt',
	color: 'black',
	textAlign: 'center',
	paddingTop: '100px',
	paddingBottom: '50px',
};

export function Heading(props){
	return(
		<h2 style={headingStyle}> {props.content}</h2>
	);
}
