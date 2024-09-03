import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../authentication/AuthProvider";

const PrivateRoutes = ({ children }) => {
    const location = useLocation()
    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return (
            <div className="flex justify-center" >
                <span className="loading loading-spinner loading-lg"></span>

            </div>

        )

    }
    if (user) {
        return children
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>

};

export default PrivateRoutes;