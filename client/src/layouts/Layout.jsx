import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Nav from '../components/Nav';

export default function Layout(props) {
  const { currentUser, handleLogout } = props;
  return (
    <div>
      <header>
        <Nav/>
        <Link to='/'><h1>ON-DEMAND SOMM</h1></Link>
        {
          currentUser ?
            <>
              <p>Welcome, {currentUser.username}!</p>
              <button onClick={handleLogout}>Logout</button>
            </>
            :
            <Link to='/login'>Login/Register</Link>
        }
      </header>
      <hr />
      {currentUser && (
        <>
          <Link to='/wines'>Wines</Link>
          <Link to='/tastings'>Tastings</Link>
          <hr />
        </>
      )}
      {props.children}
      <Footer />
    </div>
  )
}