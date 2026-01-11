
import { BackgroundBeams } from "@/Components/ui/background-beams";
import React from "react";
import Banner from "./Banner";
import About from "./About";

const Home = () => {
  return (
    <div>
      <div>
        <Banner></Banner>
        <About></About>
      </div>
      <BackgroundBeams></BackgroundBeams>
     </div>
  );
};

export default Home;
