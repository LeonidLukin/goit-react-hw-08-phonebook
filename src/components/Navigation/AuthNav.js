import { NavLink } from "react-router-dom";
import css from './Navigation.module.css'

export default function AuthNav() {
    return (
        <div className={css.wrapper}>
            <NavLink className={css.navItem} color="white" to="/register">SignUp</NavLink>
            <NavLink className={css.navItem} to="/login">Login</NavLink>
        </div>
    )
}