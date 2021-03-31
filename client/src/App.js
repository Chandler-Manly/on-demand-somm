// package imports
import { Switch, Route } from 'react-router-dom';
import { useState } from 'react';

// import styling
import './App.css';

// component imports
import Layout from './layouts/Layout'
import Login from './screens/Login'

// function imports 
import {loginUser} from './services/auth'

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  const handleLogin = async (formData) => {
    const userData = await loginUser(formData);
    setCurrentUser(userData)
  }
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path='/login'>
            <Login
              handleLogin={handleLogin}/>
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
