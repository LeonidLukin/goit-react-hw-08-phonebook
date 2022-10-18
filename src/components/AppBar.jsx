import { useSelector } from "react-redux";
import Navigation from "components/Navigation";
import UserMenu from "components/UserMenu";
import AuthNav from "components/Navigation/AuthNav";
import { authSelectors } from '../redux/auth/auth-selectors'


function AppBar() {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  
    return (
        <>
            <heder>
                <Navigation />
                {isLoggedIn ? <UserMenu /> : <AuthNav />}
            </heder>
        </>
    )
}
  
export default AppBar;