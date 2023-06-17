/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform registration logic here
    console.log("Registration submitted:", {
      firstName,
      lastName,
      email,
      password,
    });

    // Clear form fields
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="register-container bg-img">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2 style={{ textAlign: "center", marginBottom: "10px" }}>Register</h2>
        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={handleFirstNameChange}
            required
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={handleLastNameChange}
            required
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </label>
        <br />
        <div className="btn">
          <button type="submit">Register</button>
        </div>
        <p style={{ color: "white", marginTop: "10px" }}>
          Don't have an account?{" "}
          <Link to="/login" style={{ color: "cyan", textDecoration: "none" }}>
            Create
          </Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterForm;
