import React from 'react';
import {  Link } from 'react-router-dom';
import './Header.css';
import { useAuth } from '../context/Auth';

const Header = () => {
  const [auth] = useAuth();
 const userRoles = JSON.stringify(auth.userRoles);
 
  return (
    <nav className="navbar navbar-expand-lg header--div">
      <div className="container">
        
      <Link className="navbar-brand" to="/">
            <h1 className='text-light'>Credify</h1>
          </Link>
        {
          !auth.userDetails ? (<> 
          
          <div className="d-flex align-items-center gap-5">
          <Link className="nav-link header-nav-link" to="/register">Register</Link>
              <Link className="nav-link header-nav-link" to="/login">Login</Link>
            <Link className="nav-link header-nav-link" to="/admin-login">Admin Login</Link>
          </div></>) : (<> 
            {userRoles?.includes('user') && <><Link className="nav-link header-nav-link" to="/user-dashboard">User Dashboard</Link></>}
            {userRoles?.includes('admin') && <><Link className="nav-link header-nav-link" to="/admin-dashboard">Admin Dashboard</Link></>}
            <Link className="nav-link header-nav-link" to="/logout"> <button className="btn btn-danger">Logout</button></Link>
         </>)
        }
      </div>
    </nav>
  );
};

export default Header;
