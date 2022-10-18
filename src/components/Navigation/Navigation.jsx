import { NavLink } from "react-router-dom";
import css from './Navigation.module.css';

const Navigation = () => {
    return (
      <div>
        <nav className={css.navBar}>
          {/* <NavLink to="/goit-react-hw-08-phonebook">Home</NavLink>
          <NavLink to="/goit-react-hw-08-phonebook/login">Login</NavLink>
          <NavLink to="/goit-react-hw-08-phonebook/register">Register</NavLink>
          <NavLink to="/goit-react-hw-08-phonebook/contacts">Contacts</NavLink> */}
        </nav>
      </div>
    );
};

export default Navigation;