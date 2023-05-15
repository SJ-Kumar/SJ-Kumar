import React from 'react';

import tile1 from './pics/tile1.jpg';
import tile2 from './pics/tile2.jpg';
import tile3 from './pics/tile3.jpg';
import tile4 from './pics/tile4.jpg';
import tile5 from './pics/tile5.jpg';
import tile6 from './pics/tile6.jpg';

const divStyle = {
	textAlign: 'center',
};

const tileStyle = {
	margin: '25px',
	boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
};

function Tile(props){
	return(
		<img src={props.source} style={tileStyle}/>
	);
}

export default class ImageTiles extends React.Component{
	render(){
		return(
			<div style={divStyle}>
				<Tile source={tile1}/>
				<Tile source={tile2}/>
				<Tile source={tile3}/>
				<Tile source={tile4}/>
				<Tile source={tile5}/>
				<Tile source={tile6}/>
			</div>
		);
	}
}
