import authSelectors from "./auth/auth-selectors";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export function PublicRoute ({children, restricted=false }) {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    
    return (
        <>
            {isLoggedIn && restricted ? <Navigate to='/contacts' /> : children }
        </>
    )
}