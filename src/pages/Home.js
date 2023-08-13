import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import FeatureRooms from "../components/FeatureRooms";

function Home() {
  return (
    <>
      <Hero>
        <Banner
          title="Luxurious rooms"
          subtitle="deluxe room starting at #9000"
        >
          <Link to="/rooms" className="btn-primary">
            Our Room
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeatureRooms />
    </>
  );
}

export default Home;
