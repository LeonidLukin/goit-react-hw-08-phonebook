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
// import Logo from './AppBar/Logo/Logo';
// import AppBar from './AppBar'


export default function App() {
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

  return (
    <div className={css.container}>
      {/* <AppBar /> */}
      <Navigation />

      <Routes >
          <Route path="/goit-react-hw-08-phonebook" element={<HomePage />}></Route>
          <Route path="/goit-react-hw-08-phonebook/login" element={<LoginPage />}></Route>
          <Route path="/goit-react-hw-08-phonebook/register" element={<RegisterPage />}></Route>
          <Route path="/goit-react-hw-08-phonebook/contacts" element={<ContactsPage />}></Route>
      </Routes>

      {/* <h1 className={css.title}>
        Phone<span className={css.title__color}>book</span>
      </h1>
      <button className={css.button} type="button" onClick={toggleModal}>
        <span className={css.button__text}>Add new contact</span>{' '}
        <BsFillPersonPlusFill size={20} />
      </button>
      {showModal && (
        <Modal onClose={toggleModal} title="add contact">
          <ContactForm onClose={toggleModal}/>
        </Modal>
      )}

      <h2 className={css.subtitle}>Contacts {isLoading && <Loader />}</h2>
      <Filter />
      {items.length > 0 ? (
        <ContactList />
      ) : (
        <Message text="So sad, you have no any contacts yet." />
      )} */}
    </div>
    )
  
}
