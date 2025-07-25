import React from 'react';
import config from '../config.json';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <img src={config.home.bannerImage} alt="Banner" className="banner-image" />
      <h1>Welcome to our NGO</h1>
    </div>
  );
};

export default Home;
