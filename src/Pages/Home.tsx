import DreamDestination from "../Sections/Home/DreamDestination";
import HeroSection from "../Sections/Home/HeroSection";
import MakingMemories from "../Sections/Home/makingMemories";
import Adventure from "../Sections/Home/Adenture";
import UrbanEscape from "../Sections/Home/UrbanEscape";
import Tapestry from "../Sections/Home/Tapestry";
import Unknown from "../Sections/Home/Unknown";
import BelowUnknown from "../Sections/Home/BelowUnknown";
import Unforgetable from "../Sections/Home/Unforgetable";
import Journeys from "../Sections/Home/Journeys";


const Home = () => {
  return (
    <div className="bg-bgGreen pt-4">
      <div className="">
        <HeroSection />
      </div>
      <div>
        <DreamDestination />
      </div>
      <div>
        <MakingMemories />
      </div>
      <div>
        <Adventure />
      </div>
      <div>
        <UrbanEscape />
      </div>
      <div>
        <Tapestry />
      </div>
      <div>
        <Unknown />
      </div>
      <div>
        <BelowUnknown />
      </div>
      <div>
        <Unforgetable />
      </div>
      <div>
        <Journeys />
      </div>
    </div>
  );
};

export default Home;
