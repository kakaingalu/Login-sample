import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [practiceNumber, setpractiseNumber] = useState('');
  const [requiredField, setRequiredField] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    //backend API
  };

  return (
    <div className="login-page">
      <div className="animation">
        <div class="gavel-icon">🔨</div>
        <div class="book-icon">📚</div>
        <div class="scale-icon">⚖️</div>
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
        {requiredField === "Lawyer" && (
        <input
          type="text"
          name="PractiseNumber"
          placeholder="Practise Number"
          value={practiceNumber}
          onChange={(event) => setpractiseNumber(event.target.value)}
          required
        />
        )}
        <button type="submit">Login</button>

        <div>
        Don't have an account? <Link to="/signUp">Sign Up</Link>
      </div>
      </form>
      
    </div>
  );
}

export default Login;
