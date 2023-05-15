import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';
//import GlobalStyles from './styles/GlobalStyles';

 function App() {
  return (
    <Router>
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/" element={<MovieDetails />} />
    </Routes>
    </Router>
  );
}

export default App;