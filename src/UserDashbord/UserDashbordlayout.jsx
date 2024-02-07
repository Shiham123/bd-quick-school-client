import { Outlet } from 'react-router-dom';

import UserNavbar from './UserNavbar';
import Footer from '../Pages/Shared/Footer/Footer';

const UserDashbordlayout = () => {
  return (
    <>
      <UserNavbar></UserNavbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default UserDashbordlayout;
