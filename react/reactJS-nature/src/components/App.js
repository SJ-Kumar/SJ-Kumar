import React, { Component } from 'react';
import './App.css';

import bannerImage from './pics/banner.png';

import SiteNavbar from './navbar';
import Banner from './banner.js';
import {Heading} from './headings.js';
import ImageTiles from './image_tiles.js';

class App extends Component {
	render() {
		return (
			<div>
				<SiteNavbar/>
				<Banner source={bannerImage} height="700px"/>
				<Heading content="Tiled Images"/>
				<ImageTiles />
			</div>
		);
	}
}

export default App;
