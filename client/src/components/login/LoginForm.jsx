import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";


const LoginForm = () => {
    const redirect = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [generalError, setGeneralError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    let isValid = true;

    if (!email) {
      setEmailError('Please enter your email.');
      isValid = false;
    } else if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address.');
      isValid = false;
    } else {
      setEmailError('');
    }

    if (!password) {
      setPasswordError('Please enter your password.');
      isValid = false;
    } else {
      setPasswordError('');
    }

    if (!isValid) {
      setGeneralError('Please correct the errors above.');
    } else {
      setGeneralError('');
      console.log('Form submitted:', { email, password });
      // Proceed with form submission (e.g., send data to API)
      // Redirect to another page
      redirect('/'); // Redirect to the homepage
    }
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <br />
        <input
          type="email"
          name="email"
          id="email"
          className={`w-11/12 h-10 border-2 rounded-lg ${emailError ? 'border-red-500' : 'border-slate-400 p-2'}`}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
      </div>
      <br />
      <div>
        <label htmlFor="password">Password</label>
        <div>
            <input
              type="password"
              name="password"
              id="password"
              className={`w-11/12 h-10 border-2 rounded-lg ${passwordError ? 'border-red-500' : 'border-slate-400'} p-2`}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}
        </div>
      </div>
      <br />
      {generalError && <p style={{ color: 'red' }}>{generalError}</p>}
      <button type="submit" className="w-11/12 h-10 rounded-lg bg-slate-400">
        Sign in
      </button>
    </form>
  );
};

export default LoginForm;