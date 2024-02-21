import Banner from '../../Components/Banner/Banner';
import ChatBoat from '../ChatBoat/ChatBoat';
import Courses from '../Courses/Courses';
import Faq from '../Faq/Faq';
import OurTeam from '../OurTeam/OurTeam';
import Review from '../Review/Review';
import Counter from '../Counter/Counter';
// import ChangeBackground from '../../Components/ChangeBackground/ChangeBackground';

import './hover.css';
import Work from '../How It Works/Work';
import ChooseUs from '../Why Choose Us/ChooseUs';
import CoursesType from '../Courses_Type/CoursesType';
import ReviewForm from '../Review/ReviewForm';





const Home = () => {
  return (
    <div>
      <Banner />
    
    <Counter></Counter>
      <Courses />
      <Work />
      <ChooseUs />
      <CoursesType />
      <OurTeam />
      <Faq />
      <Counter />
      <Review />
      <ReviewForm></ReviewForm>
      {/* <ChangeBackground /> */}

      <ChatBoat />
    </div>
  );
};

export default Home;
