import { useLoginContext } from "../store/LoginContentApi";
import { Navigate } from "react-router-dom";

const RouteGuard = ({ children }) => {
    const { loggedIn } = useLoginContext();
    if (loggedIn) return children;
    else return <Navigate to="/" />
}

export default RouteGuard;

