import Banner from '../../Components/Banner/Banner';
import ChatBoat from '../ChatBoat/ChatBoat';
import Courses from '../Courses/Courses';
import Faq from '../Faq/Faq';
import OurTeam from '../OurTeam/OurTeam';
import Review from '../Review/Review';
import Counter from "../Counter/Counter";

import './hover.css';
import Work from '../How It Works/Work';
import ChooseUs from '../Why Choose Us/ChooseUs';

const Home = () => {
  return (
    <div>
      <Banner />
      <Courses />
      <Work />
      <ChooseUs />
      <OurTeam />
      <Faq />
      <Counter />
      <Review />

      <ChatBoat />
    </div>
  );
};

export default Home;
