import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/Root/MainLayout';
import ErrorElement from '../Layout/ErrorElement/ErrorElement';
import Home from '../Pages/Home/Home';
import CourseDetails from '../Pages/Courses/CourseDetails';
import Register from '../Pages/Register/Register';
import Login from '../Pages/Login/Login';
import Services from '../Pages/Services/Services';
import MyProfile from '../Pages/UserProfile/MyProfile/MyProfile';
import ServiceDetails from '../Pages/Services/ServiceDetails';
import PaymentSuccses from '../Pages/Services/PaymentSuccses';
import PaymentFailed from '../Pages/Services/PaymentFailed';
import PayDataFrom from '../Pages/Services/PayDataFrom';
import DashBoardLayout from '../DashBoard/DashBoard Layout/DashBoardLayout';
import AdminProfile from '../DashBoard/Admin Profile/AdminProfile';
import AdminRoute from './AdminRoute';
import MainQuiz from '../quiz/MainQuiz';
import PrivateRoute from './PrivateRoute';
import AddServices from '../Components/AddServicesForm/AddServices';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorElement />,
    children: [
      { index: true, element: <Home /> },
      { path: 'Couredetails', element: <CourseDetails /> },
      { path: 'register', element: <Register /> },
      { path: 'login', element: <Login /> },
      {
        path: 'services',
        element: (
          <PrivateRoute>
            <Services />
          </PrivateRoute>
        ),
      },
      {
        path: 'myprofile/:email',
        element: <MyProfile />,
        loader: ({ params }) =>
          fetch(`https://bd-quick-school-server-plum.vercel.app//api/v1/useremail/${params.email}`),
      },
      { path: '/ServiceDetails/:id', element: <ServiceDetails /> },
      { path: '/serviceDetails/payment/form', element: <PayDataFrom /> },
      { path: '/payment/succsess/:tranID', element: <PaymentSuccses /> },
      { path: '/payment/fail/:tranID', element: <PaymentFailed /> },
      {
        path: '/quiz',
        element: <MainQuiz />,
      },
    ],
  },
  {
    path: '/dashboard',
    element: (
      <AdminRoute>
        <DashBoardLayout />
      </AdminRoute>
    ),
    children: [
      { path: 'adminprofile', element: <AdminProfile /> },
      { path: '/dashboard/add/services', element: <AddServices /> },
    ],
  },
]);

export default Router;
