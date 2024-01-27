import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/Root/MainLayout';
import ErrorElement from '../Layout/ErrorElement/ErrorElement';
import Home from '../Pages/Home/Home';
import CourseDetails from '../Pages/Courses/CourseDetails';
import Register from '../Pages/Register/Register';
import Login from '../Pages/Login/Login';
import Services from '../Pages/Services/Services';
import ServiceDetails from '../Pages/Services/ServiceDetails';
import PaymentSuccses from '../Pages/Services/PaymentSuccses';
import PaymentFailed from '../Pages/Services/PaymentFailed';

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
      { path: 'services', element: <Services /> },
      { path: '/serviceDetails/:id', element: <ServiceDetails /> },
      { path: '/payment/succsess/:tranID', element: <PaymentSuccses /> },
      { path: '/payment/fail/:tranID', element: <PaymentFailed /> },
    ],
  },
]);

export default Router;
