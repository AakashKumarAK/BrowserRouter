import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function LandingPage() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  function login(event) {
    event.preventDefault();
    if (name === 'Aakash' && password === 'kumar') {
      alert('login successful');
      navigate('/UserLogin');
    } else {
      alert('login unsuccessful');
    }
  }

  return (
    <>
      <h2>Login</h2>
      <form onSubmit={login}>
        <label>
          UserName:
          <input
            type="text"
            required
            placeholder="Enter a Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            required
            placeholder="Enter a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <Link to="/forgot-password">
          <h5>Forgot Password?</h5>
        </Link>
        <Link to="/sign-up">
          <h5>Sign up</h5>
        </Link>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
