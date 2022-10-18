import { NavLink } from "react-router-dom";

export default function AuthNav() {
    return (
        <>
            <NavLink to="goit-react-hw-08-phonebook/register" exact>Register</NavLink>
            <NavLink to="goit-react-hw-08-phonebook/login" exact>Login</NavLink>
        </>
    )
}