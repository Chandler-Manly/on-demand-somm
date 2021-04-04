// package imports
import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";

// import styling
import "./App.css";
import MainContainer from "./containers/MainContainer";

// component imports
import Layout from "./layouts/Layout";
import Login from "./screens/Login";
// import Register from "./screens/Register";
// import Landing from "./screens/Landing";
// import BackgroundVideo from "./components/BackgroundVideo";

// import CarouselOne from "./components/CarouselOne";
// import CarouselTwo from "./components/CarouselTwo";
// import CarouselThree from "./components/CarouselThree";

// import Chatbotbot from './assets/chatbot/Chatbot';


// function imports
import {
  loginUser,
  registerUser,
  removeToken,
  verifyUser,
} from "./services/auth";
import AboutUs from "./assets/AboutUs";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    };
    handleVerify();
  }, []);

  const handleLogin = async (formData) => {
    const userData = await loginUser(formData);
    setCurrentUser(userData);
    history.push("/");
  };

  const handleRegister = async (formData) => {
    const userData = await registerUser(formData);
    setCurrentUser(userData);
    history.push("/");
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem("authToken");
    removeToken();
  };

  return (
    <div className="App">
      <Layout currentUser={currentUser} handleLogout={handleLogout}>
        <Switch>
          <Route path="/login">
            <Login handleLogin={handleLogin} handleRegister={handleRegister}/>
          </Route>
          <Route path="/about-us">
            <AboutUs/>
          </Route>
          <Route path="/">
            <MainContainer currentUser={currentUser}/>

          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
