import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Hooks/useAuth/useAuth';
import { ThreeCircles } from 'react-loader-spinner';
import VerifyAdmin from '../Hooks/useAdmin/useAdmin';

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isAdmin, isAdminLoading] = VerifyAdmin();
  const location = useLocation();

  if (loading || isAdminLoading) {
    return (
      <h2 className="flex justify-center items-center min-h-[60vh]">
        <ThreeCircles
          height="100"
          width="100"
          color="#4fa94d"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="three-circles-rotating"
          outerCircleColor=""
          innerCircleColor=""
          middleCircleColor=""
        />
      </h2>
    );
  }

  if (user && isAdmin) {
    return children;
  }
  return <Navigate state={location.pathname} to="/" />;
};

export default AdminRoute;
