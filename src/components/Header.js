import React from 'react';
import {  Link, useNavigate } from 'react-router-dom';
import './Header.css';
import { useAuth } from '../context/Auth';

const Header = () => {
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
 // const userRoles = JSON.stringify(auth.userRoles);
  // const handleLogout = async () => {
  //   setAuth({
  //     ...auth,
  //     userDetails: null,
  //     token: '',
  //     userRoles: null,
  //   });
  //   localStorage.removeItem('auth');
  //   setTimeout(() => {
  //     navigate('/');
  //   }, 4000);
  // };
  return (
    <nav className="navbar navbar-expand-lg header--div">
      <div className="container">
        {
          !auth.userDetails ? (<> 
          <Link className="navbar-brand" to="/">
            <h1 className='text-light'>Credify</h1>
          </Link>
          <div className="d-flex align-items-center gap-5">
          <Link className="nav-link header-nav-link" to="/register">Register</Link>
              <Link className="nav-link header-nav-link" to="/login">Login</Link>
            <Link className="nav-link header-nav-link" to="/admin-login">Admin Login</Link>
          </div></>) : (<> 
          <button className="btn btn-danger">Logout</button></>)
        }
       
      </div>
    </nav>
  );
};

export default Header;
