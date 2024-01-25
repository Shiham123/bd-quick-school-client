import { Navigate, useLocation } from "react-router-dom";
import useAuth from './../Hooks/useAuth/useAuth';


const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth()
    const location = useLocation()

    if (loading) {
        return <p className="text-center"><span className="loading loading-spinner loading-lg"></span></p>
    }

    if (user) {
        return children
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateRoute;