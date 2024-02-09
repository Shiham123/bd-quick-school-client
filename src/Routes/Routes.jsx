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
import PaymentFailed from '../Pages/Services/PaymentFailed';
import PayDataFrom from '../Pages/Services/PayDataFrom';
import DashBoardLayout from '../DashBoard/DashBoard Layout/DashBoardLayout';
import AdminProfile from '../DashBoard/Admin Profile/AdminProfile';
import MainQuiz from '../quiz/MainQuiz';
import PrivateRoute from './PrivateRoute';
import AddServices from '../Components/AddServicesForm/AddServices';
import AdminRoute from './AdminRoute';
import UserDashbordlayout from '../UserDashbord/UserDashbordlayout';
import ImportantNotice from '../UserDashbord/ImportantNotice';
import UserHome from '../UserDashbord/UserHome';
import UserSupport from '../UserDashbord/UserSupport';
import Support from '../UserDashbord/Support';
import SupportSteap from '../UserDashbord/SupportSteap';
import Video from '../Pages/Services/VideoStreming';
import Outline from '../UserDashbord/Outline';

import UploadContent from '../DashBoard/Upload Content/UploadContent';
import SoldCourses from '../DashBoard/Sold Courses/SoldCourses';
import ManagePayment from '../DashBoard/Manage Payment/ManagePayment';
import ManageUsers from '../DashBoard/Manage Users/ManageUsers';
import ManageReviews from '../DashBoard/Manage Reviews/ManageReviews';
import DashBoardCharts from '../DashBoard/DashBoard Charts/DashBoardCharts';
import UserCOurse from '../UserDashbord/UserCOurse';


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
      { path: 'myprofile', element: <MyProfile /> },
      { path: '/ServiceDetails/:id', element: <ServiceDetails /> },
      { path: '/serviceDetails/payment/form', element: <PayDataFrom /> },
      { path: '/MyCourses', element: <UserCOurse/> },
      { path: '/payment/fail/:tranID', element: <PaymentFailed /> },
      { path: '/quiz', element: <MainQuiz /> },
    ],
  },
  {
    path: '/MyCourses',
    element: <UserDashbordlayout />,
    children: [
      {
        index: true,
        element: <UserHome />,
      },
      {
        path: 'next-step',
        element: <ImportantNotice />,
      },
      {
        path: 'support',
        element: <UserSupport />,
      },
      {
        path: 'room/:roomId',
        element: <Support />,
      },
      {
        path: 'supportSteap',
        element: <SupportSteap />,
      },
      {
        path: 'Video',
        element: <Video />,
      },
      {
        path: 'outline',
        element: <Outline />,
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
      { path: 'charts', element: <DashBoardCharts /> },
      { path: 'adminprofile', element: <AdminProfile /> },
      { path: 'add/services', element: <AddServices /> },
      { path: 'uploadcontent', element: <UploadContent /> },
      { path: 'soldcourses', element: <SoldCourses /> },
      { path: 'managepayment', element: <ManagePayment /> },
      { path: 'manageusers', element: <ManageUsers /> },
      { path: 'managereviews', element: <ManageReviews /> },
    ],
  },
]);

export default Router;
