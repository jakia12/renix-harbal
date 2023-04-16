import React from 'react';
import NaturalSolution from '../Components/Home/NaturalSolution/NaturalSolution';
import WhoWeAre from '../Components/Home/AboutSection/WhoWeAre';
import FeatureProducts from '../Components/Home/FeatureProducts/FeatureProducts';
import NewsLetter from '../Components/Home/NewsLetter/NewsLetter';
import NewArrivals from '../Components/Home/NewArrivals/NewArrivals';

const Home = () => {
    return (
        <div>
            <NaturalSolution/>
            <WhoWeAre/>
            <FeatureProducts/>
            <NewsLetter/>
            <NewArrivals/>
        </div>
    );
};

export default Home;