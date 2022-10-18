import { lazy, Suspense } from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {fetchContacts} from '../redux/contactsOperations'
import { refreshUser } from 'redux/auth/auth-operations';
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
import authSelectors from '../redux/auth/auth-selectors';
import { PrivateRoute } from 'redux/PrivateRoute';
import { PublicRoute } from 'redux/PublicRoute';


export default function App() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}

      <Routes >
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/login" element={<PublicRoute restricted><LoginPage /></PublicRoute>}></Route>
          <Route path="/register" element={<PublicRoute restricted><RegisterPage /></PublicRoute>}></Route>
          <Route path="/contacts" element={<PrivateRoute><ContactsPage/></PrivateRoute>}></Route>
      </Routes>
    </div>
    )
  
}
