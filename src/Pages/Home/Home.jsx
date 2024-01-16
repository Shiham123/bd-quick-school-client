import Banner from '../../Components/Banner/Banner';
import Courses from '../Courses/Courses';
import Faq from '../Faq/Faq';
import './hover.css';

const Home = () => {
  return (
    <div>
      <Banner />
      <Courses />
      <Faq />
    </div>
  );
};

export default Home;
