import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth/useAuth";
import useStudent from "../Hooks/useStudent/useStudent";
import { ThreeCircles } from "react-loader-spinner";


const StudentRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [isStudent, isStudentLoading] = useStudent();
    const location = useLocation();

    if (loading || isStudentLoading) {
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

    if (user && isStudent) {
        return children;
    }
    return <Navigate state={location.pathname} to="/" />;
};

export default StudentRoute;
