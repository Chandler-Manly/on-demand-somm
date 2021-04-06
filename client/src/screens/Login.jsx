import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/Login.css';


export default function Login(props) {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })
  const { username, password } = formData;
  const { handleLogin } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <div className="login-form">
        <h3>Login</h3>
      <div>
    <form onSubmit={(e)=>{
      e.preventDefault();
      handleLogin(formData);
    }}>
      <label>
        Username:
        <input
          type='text'
          name='username'
          value={username}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
        />
      </label>
          <br />
          <br/>
      Not signed up yet?<br />
      <Link to='/register'>Register.</Link>
      <button>Submit</button>
        </form>
        </div>
      </div>
  )
}