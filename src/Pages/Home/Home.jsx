import Banner from '../../Components/Banner/Banner';
import ChatBoat from '../ChatBoat/ChatBoat';
import Courses from '../Courses/Courses';
import Faq from '../Faq/Faq';
import OurTeam from '../OurTeam/OurTeam';
import Review from '../Review/Review';
import ReviewCheck from '../Review/ReviewCheck';

import './hover.css';

const Home = () => {
  return (
    <div>
      <Banner />
      <Courses />
      <OurTeam />
      <Faq />
      <Review />
      <ReviewCheck></ReviewCheck>
  
      <ChatBoat/>
    </div>
  );
};

export default Home;
