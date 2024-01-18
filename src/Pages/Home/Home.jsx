import Banner from '../../Components/Banner/Banner';
import Courses from '../Courses/Courses';
import Faq from '../Faq/Faq';
import OurTeam from '../OurTeam/OurTeam';

import './hover.css';

// all section

const Home = () => {
  return (
    <div>
      <Banner />
      <Courses />
      <OurTeam />
      <Faq />
    </div>
  );
};

export default Home;
