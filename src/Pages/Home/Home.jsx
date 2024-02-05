import Banner from '../../Components/Banner/Banner';
import ChatBoat from '../ChatBoat/ChatBoat';
import Courses from '../Courses/Courses';
import Faq from '../Faq/Faq';
import OurTeam from '../OurTeam/OurTeam';
import Review from '../Review/Review';
import Counter from '../Counter/Counter';
import ChangeBackground from '../../Components/ChangeBackground/ChangeBackground';

import './hover.css';
import Work from '../How It Works/Work';

const Home = () => {
  return (
    <div>
      <Banner />
      <Courses />
      <Work />
      <OurTeam />
      <Faq />
      <Counter />
      <Review />
      <ChangeBackground />

      <ChatBoat />
    </div>
  );
};

export default Home;
