
import React from 'react';
import HomeSlider from "../Components/Home/HomeSlider/HomeSlider/HomeSlider";
import NaturalSolution from '../Components/Home/NaturalSolution/NaturalSolution';
import WhoWeAre from '../Components/Home/AboutSection/WhoWeAre';
import FeatureProducts from '../Components/Home/FeatureProducts/FeatureProducts';
import NewsLetter from '../Components/Home/NewsLetter/NewsLetter';
import NewArrivals from '../Components/Home/NewArrivals/NewArrivals';
import BestDoctors from '../Components/Home/BestDoctors/BestDoctors';
import Contact from '../Components/Home/Contact/Contact';

const Home = () => {
    return (
        <div>
           <HomeSlider/>
            <NaturalSolution/>
            <WhoWeAre/>
            <FeatureProducts/>
            <NewsLetter/>
            <NewArrivals/>
            <BestDoctors/>
            <Contact/>
        </div>
    );
};

export default Home;
