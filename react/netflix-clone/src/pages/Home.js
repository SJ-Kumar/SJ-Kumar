import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Row from '../components/Row';
import Footer from '../components/Footer';
import axios from 'axios';


function Home() {
  useEffect(() => {
    const fetchData = async () => {
      try {
         const response = await axios.get('https://api.example.com/movies');
         const data = response.data;
        // Process the data and set it in the component's state
        console.log(data);
        console.log("Inside Home and in fetchData function..");
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <Banner />
      <Row title="Trending Now" />
      <Row title="Popular Movies" />
      {/* Add more Row components */}
      <Footer />
    </div>
  );
}

export default Home;


