// package imports
import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";

// import styling
import "./App.css";
import MainContainer from "./containers/MainContainer";

// component imports
import Layout from "./layouts/Layout";
import Login from "./screens/Login";
import Register from "./screens/Register";
import BackgroundVideo from "./components/BackgroundVideo";
import BackgroundVideoTwo from "./components/BackgroundVideoTwo";
import CarouselOne from "./components/CarouselOne";
import CarouselTwo from "./components/CarouselTwo";
import CarouselThree from "./components/CarouselThree";



// function imports
import {
  loginUser,
  registerUser,
  removeToken,
  verifyUser,
} from "./services/auth";

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
            <Login handleLogin={handleLogin} />
          </Route>
          <Route path="/blog">
            Coming soon!
          </Route>
          <Route path="/check-out">
            Coming soon!
          </Route>
          <Route path="/register">
            <Register handleRegister={handleRegister} />
          </Route>
          <Route path="/">
            <MainContainer currentUser={currentUser} />
            
            <div className="about-us">ABOUT US<br/>ON-DEMAND-SOMM is a platform for wine novices and aficionados to aggregate their tasting notes. Our team saw an opportunity to simplify and improve this critical part of the wine education process. Moreover, this web-application is a resource to aid wine enthusiasts during their journey.</div>
            <BackgroundVideo />
            <BackgroundVideoTwo />
            <CarouselOne/>
            <CarouselTwo/>
            <CarouselThree/>

          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
