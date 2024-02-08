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
import MainQuiz from '../quiz/MainQuiz';
import PrivateRoute from './PrivateRoute';
import AdmissionTest from '../Pages/Courses/AdmissionTest';
import JobPreparation from '../Pages/Courses/JobPreparation';

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
          fetch(`https://bd-quick-school-server.vercel.app/api/v1/useremail/${params.email}`),
      },
      {
        path: '/admissionTest',
        element: <AdmissionTest />,
      },
      {
        path: '/jobPreparation',
        element: <JobPreparation />,
      },
      {
        path: '/ServiceDetails/:id',
        element: <ServiceDetails />,
      },
      { path: '/serviceDetails/payment/form', element: <PayDataFrom /> },
      { path: '/payment/succsess/:tranID', element: <PaymentSuccses /> },
      { path: '/payment/fail/:tranID', element: <PaymentFailed /> },
      {
        path: '/quiz',
        element: <MainQuiz />,
      },
    ],
  },
]);

export default Router;
