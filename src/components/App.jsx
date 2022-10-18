import { lazy, Suspense } from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {fetchContacts} from '../redux/contactsOperations'
import { BsFillPersonPlusFill } from 'react-icons/bs';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter/Filter';
import Message from './Message';
import Modal from './Modal'
import css from './App.module.css';
// import { Loader } from './ContactList/Loader.styled';
import { Routes, Route } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage';
import ContactsPage from 'pages/ContactsPage';
import Navigation from './Navigation/Navigation';
import UserMenu from "./UserMenu";
import AuthNav from "./Navigation/AuthNav";
import authSelectors from '../redux/auth/auth-selectors'



export default function App() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  const dispatch = useDispatch();
  // const [showModal, setShowModal] = useState(false)
  // const { items } = useSelector(state => state.root.contacts)
  // const { isLoading } = useSelector(state => state.root.contacts);
  
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  // const toggleModal = () => {
  //   setShowModal(prevShowModal => !prevShowModal);
  // };

  console.log(isLoggedIn);
  return (
    <div className={css.container}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}

      <Routes >
          <Route path="/goit-react-hw-08-phonebook" element={<HomePage />}></Route>
          <Route path="/goit-react-hw-08-phonebook/login" element={<LoginPage />}></Route>
          <Route path="/goit-react-hw-08-phonebook/register" element={<RegisterPage />}></Route>
          <Route path="/goit-react-hw-08-phonebook/contacts" element={<ContactsPage />}></Route>
      </Routes>
    </div>
    )
  
}
