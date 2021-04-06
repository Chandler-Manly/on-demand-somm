import { useState } from "react";
import "../assets/Register.css";
import { registerUser, loginUser } from "../services/auth";
import { useHistory } from "react-router-dom";

const Register = (props) => {
  const history = useHistory();
  const [errorMessage, setErrorMessage] = useState(null);

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    isError: false,
    errorMsg: "",
  });

  const checkForErrors = () => {
    if (password !== passwordConfirmation) {
      setErrorMessage("Sorry, passwords do not match!");
      return true;
    }
    setErrorMessage(null);
    return false;
  };

  const handleChange = (event) =>
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });

  const onRegister = (event) => {
    event.preventDefault();
    const { setCurrentUser } = props;

    const hasError = checkForErrors();

    if (!hasError) {
      registerUser(form)
        .then(() => loginUser(form))
        .then((currentUser) => setCurrentUser(currentUser))
        .then(() => history.push("/"))
        .catch((error) => {
          console.error(error);
          setForm({
            email: "",
            password: "",
            passwordConfirmation: "",
            isError: true,
            errorMsg: "should be good to go to refresh and login",
          });
        });
    }
  };

  const renderError = () => {
    const toggleForm = form.isError ? "danger" : "";
    if (form.isError) {
      return (
        <button type="submit" className={toggleForm}>
          {form.errorMsg}
        </button>
      );
    } else {
      return (
        <div>
          {errorMessage && <p id="error-message">{errorMessage}</p>}
          <button type="submit" className="register-btn">
            SIGN UP
          </button>
        </div>
      );
    }
  };

  const { email, username, password, passwordConfirmation } = form;

  return (
      <div className="form-container-register">
        <div className="register-head-section">
          <h3 className="register-header">Create Account</h3>
        </div>
        <div className="register-fields">
          <form onSubmit={onRegister}>
            <div className="register-input-container">
              <input
                className="individual-register-input"
                required
                type="email"
                name="email"
                value={email}
                placeholder="Email Address"
                onChange={handleChange}
              />
            </div>

            <div className="register-input-container">
              <input
                className="individual-register-input"
                required
                type="text"
                name="username"
                value={username}
                placeholder="Create Username"
                onChange={handleChange}
              />
            </div>

            <div className="register-input-container">
              <input
                className="individual-register-input"
                required
                name="password"
                value={password}
                type="password"
                placeholder="Create Password"
                onChange={handleChange}
              />
            </div>

            <div className="register-input-container">
              <input
                className="individual-register-input"
                required
                name="passwordConfirmation"
                value={passwordConfirmation}
                type="password"
                placeholder="Confirm Password"
                onChange={handleChange}
              />
            </div>
            {renderError()}
          </form>
        </div>
      </div>
  );
};

export default Register;
