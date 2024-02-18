import { createBrowserRouter } from 'react-router-dom';
import AddServices from '../Components/AddServicesForm/AddServices';
import AdminProfile from '../DashBoard/Admin Profile/AdminProfile';
import DashBoardLayout from '../DashBoard/DashBoard Layout/DashBoardLayout';
import ErrorElement from '../Layout/ErrorElement/ErrorElement';
import MainLayout from '../Layout/Root/MainLayout';
import CourseDetails from '../Pages/Courses/CourseDetails';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import PayDataFrom from '../Pages/Services/PayDataFrom';
import PaymentFailed from '../Pages/Services/PaymentFailed';
import ServiceDetails from '../Pages/Services/ServiceDetails';
import Services from '../Pages/Services/Services';
import Video from '../Pages/Services/VideoStreming';
import MyProfile from '../Pages/UserProfile/MyProfile/MyProfile';
import ImportantNotice from '../UserDashbord/ImportantNotice';
import Outline from '../UserDashbord/Outline';
import Support from '../UserDashbord/Support';
import SupportSteap from '../UserDashbord/SupportSteap';
import UserDashbordlayout from '../UserDashbord/UserDashbordlayout';
import UserHome from '../UserDashbord/UserHome';
import UserSupport from '../UserDashbord/UserSupport';
import MainQuiz from '../quiz/MainQuiz';
import AdminRoute from './AdminRoute';
import PrivateRoute from './PrivateRoute';

import AddAnnouncement from '../DashBoard/Add Announcement/AddAnnouncement';
import AdveriseReviews from '../DashBoard/Advertise Reviews/AdveriseReviews';
import DashBoardCharts from '../DashBoard/DashBoard Charts/DashBoardCharts';
import ManagePayment from '../DashBoard/Manage Payment/ManagePayment';
import ManageReviews from '../DashBoard/Manage Reviews/ManageReviews';
import ManageUsers from '../DashBoard/Manage Users/ManageUsers';
import ManageAnnouncements from '../DashBoard/ManageAnnouncements/ManageAnnouncements';
import ManageCourses from '../DashBoard/ManageCourses/ManageCourses';
import UpdateCourses from '../DashBoard/ManageCourses/UpdateCourses';
import ManageQuizeUser from '../DashBoard/ManageReviewUser/ManageReviewUser';
import SoldCourses from '../DashBoard/Sold Courses/SoldCourses';
import UpdateAnnouncement from '../DashBoard/UpdateAnnouncement/UpdateAnnouncement';
import UploadContent from '../DashBoard/Upload Content/UploadContent';
import Announcements from '../Pages/Announcements/Announcements';
import AdmissionTest from '../Pages/Courses/AdmissionTest';
import JobPreparation from '../Pages/Courses/JobPreparation';
import ChatAsistant from '../UserDashbord/ChatAsistant';
import HelpDask from '../UserDashbord/HelpDask';
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
      { path: 'addmissionTest', element: <AdmissionTest /> },
      { path: 'jobPreparation', element: <JobPreparation /> },
      {
        path: 'services',
        element: (
          <PrivateRoute>
            <Services />
          </PrivateRoute>
        ),
      },
      { path: 'myprofile', element: <MyProfile /> },
      { path: 'announcements', element: <Announcements /> },
      { path: '/ServiceDetails/:id', element: <ServiceDetails /> },
      { path: '/serviceDetails/payment/form', element: <PayDataFrom /> },
      { path: '/MyCourses', element: <UserCOurse /> },
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
        path: 'chat',
        element: <ChatAsistant />,
      },
      {
        path: 'helpdask',
        element: <HelpDask />,
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
      { path: 'manage/courses', element: <ManageCourses /> },
      { path: 'add/services', element: <AddServices /> },
      { path: 'update/courses', element: <UpdateCourses /> },
      { path: 'uploadcontent', element: <UploadContent /> },
      { path: 'soldcourses', element: <SoldCourses /> },
      { path: 'managepayment', element: <ManagePayment /> },
      { path: 'manageusers', element: <ManageUsers /> },
      { path: 'managereviews', element: <ManageReviews /> },
      { path: 'advertisereviews', element: <AdveriseReviews /> },
      { path: '/dashboard/manage/quize/users', element: <ManageQuizeUser /> },
      { path: 'addannouncements', element: <AddAnnouncement /> },
      { path: 'manageannouncements', element: <ManageAnnouncements /> },
      {
        path: 'manageannouncements/updateannouncements/:id',
        element: <UpdateAnnouncement />,
        loader: ({ params }) => fetch(`http://localhost:5000/api/v1/admin/announcements/${params.id}`),
      },
    ],
  },
]);

export default Router;
