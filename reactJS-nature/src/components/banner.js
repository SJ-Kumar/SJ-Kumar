import React from 'react';

const imgStyle = {
	width: '100%',
};

export default function Banner(props){
	return(
		<img src={props.source} style={ {width: '100%', height: props.height} } />
	);
}
