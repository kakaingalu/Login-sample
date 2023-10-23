import React, { useState } from 'react';

function SignUp() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setphoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [requiredField, setRequiredField] = useState("Business Institution");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
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
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={fullName}
          onChange={(event) => setFullName(event.target.value)}
          required
        />
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
            name="licenseNumber"
            placeholder="License Number"
            value={phoneNumber}
            onChange={(event) => setphoneNumber(event.target.value)}
            required
          />
        )}
        {requiredField === "Judiciary" && (
          <input
            type="text"
            name="employeeId"
            placeholder="Employee ID"
            value={phoneNumber}
            onChange={(event) => setphoneNumber(event.target.value)}
            required
          />
        )}
        {requiredField === "Business Institution" && (
          <input
            type="text"
            name="registrationNumber"
            placeholder="Registration Number"
            value={phoneNumber}
            onChange={(event) => setphoneNumber(event.target.value)}
            required
          />
        )}
        {requiredField === "Student" && (
          <input
            type="text"
            name="studentId"
            placeholder="Student ID"
            value={phoneNumber}
            onChange={(event) => setphoneNumber(event.target.value)}
            required
          />
        )}
        {requiredField === "School and Learning Institutions" && (
          <input
            type="text"
            name="isoNumber"
            placeholder="ISO Number"
            value={phoneNumber}
            onChange={(event) => setphoneNumber(event.target.value)}
            required
          />
        )}
        {requiredField === "Law Firm" && (
          <input
            type="text"
            name="firmRegistrationNumber"
            placeholder="Firm Registration Number"
            value={phoneNumber}
            onChange={(event) => setphoneNumber(event.target.value)}
            required
          />
        )}
        <input
          type="text"
          name="phoneNumber"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(event) => setphoneNumber(event.target.value)}
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={phoneNumber}
          onChange={(event) => setphoneNumber(event.target.value)}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
