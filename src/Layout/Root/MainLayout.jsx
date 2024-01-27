import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../../Pages/Shared/Footer/Footer';
import Navbar from '../../Pages/Shared/Navbar/Navbar';

const MainLayout = () => {
  const location = useLocation();
  const noHeaderFooter =
    location.pathname.includes('/login') || location.pathname.includes('/register');
  return (
    <div className="overflow-x-hidden">
      {noHeaderFooter || <Navbar />}
      <div className="min-h-screen">
        <Outlet />
      </div>
      {noHeaderFooter || <Footer />}
    </div>
  );
};

export default MainLayout;
