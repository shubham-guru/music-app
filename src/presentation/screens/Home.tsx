import React from "react";
import logo from '../assets/images/music-tape-logo.png';

const Home = () => {

  return (
    <div className="text-center mt-5">
      <h2>You need to login to get into the app</h2>
      <img src={logo} alt="logo" width={"30%"} />
    </div>
  );
};

export default Home;
