/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";

const Login = () => {
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserLogin({ ...userLogin, [name]: value });
  };

  const [records, setRecords] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecord = { ...userLogin, id: new Date().getTime().toString };

    console.log(records);
    setRecords([...records, newRecord]);
    console.log(newRecord);

    setUserLogin({ email: "", password: "" });
  };
  return (
    <div className="bg-img">
      <ContentWrapper>
        <div className="loginContainer">
          <h2>Login</h2>
          <form className="loginForm" onSubmit={handleSubmit}>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={userLogin.email}
              placeholder="Email"
              onChange={handleInput}
            />
            <input
              id="password"
              name="password"
              type="password"
              value={userLogin.password}
              placeholder="Password"
              onChange={handleInput}
            />
            <button type="submit">Login</button>
          </form>
          <p style={{ color: "white", marginTop: "10px" }}>
            Don't have an account?{" "}
            <Link
              to="/register"
              style={{ color: "cyan", textDecoration: "none" }}
            >
              Create
            </Link>
          </p>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Login;
