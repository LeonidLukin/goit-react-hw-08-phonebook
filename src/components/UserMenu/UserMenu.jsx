import { useDispatch, useSelector } from "react-redux";
import authOperations from '../../redux/auth/auth-operations';
import authSelectors from '../../redux/auth/auth-selectors';


export default function UserMenu() {
    const dispatch = useDispatch();
    const name = useSelector(authSelectors.getName);

    return (
        <div>
            <span>Welcome {name}</span>
            <button type="button" onClick={()=>dispatch(authOperations.logOut())}>
                Logout
            </button>
        </div>
    )
}