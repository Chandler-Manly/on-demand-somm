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
          <Link to='/login' className="fa fa-user-circle-o"></Link>
        }
      


      {currentUser && (
        <>
          <Link to='/wines'>Wines</Link>
          <Link to='/tastings'>Tastings</Link><br/>
          <Link to='/blog'>Blog</Link>
        <Link to='/check-out' className="fa fa-shopping-bag"><div className="fa fa-cc-stripe	
">Stripe</div></Link>
        </>
      )}

      {props.children}
      <Footer />
    </div>
  )
}