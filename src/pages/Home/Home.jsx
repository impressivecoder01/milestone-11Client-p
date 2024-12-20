import React from "react";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import Banner from "../Banner";
import HotJobs from "../HotJobs";

const Home = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <header>
        <Navbar></Navbar>
      </header>
      <main className="px-2">
        <Banner></Banner>
        <HotJobs></HotJobs>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Home;
