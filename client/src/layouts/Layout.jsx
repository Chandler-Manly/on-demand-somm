import React from 'react';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import { Link } from 'react-router-dom';


export default function Layout(props) {
  const { currentUser, handleLogout } = props;
  return (
    <div>
        <Nav/>
        {
          currentUser ?
            <>
              <p>Welcome, {currentUser.username}!</p>
              <button onClick={handleLogout}>Logout</button>
            </>
            :
            <Link to='/login'>Login/Register</Link>
        }
      {currentUser && (
        <>
          <Link to='/wines'>Wines</Link>
          <Link to='/tastings'>Tastings</Link>
        </>
      )}

      {props.children}
      <Footer />
    </div>
  )
}