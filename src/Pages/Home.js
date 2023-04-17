

import HealthCareProducts from "../Components/Home/HealthCareProducts/HealthCareProducts/HealthCareProducts";
import LocationMap from "../Components/Home/LocationMap/LocationMap";
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
            <HealthCareProducts/>
            <NaturalSolution/>
            <WhoWeAre/>
            <FeatureProducts/>
            <NewsLetter/>
            <NewArrivals/>
            <BestDoctors/>
            <Contact/>
            <LocationMap/>
        </div>
    );
};

export default Home;
