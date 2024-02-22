import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/actions/authActions";
import { useNavigate } from "react-router-dom";
import LoadingPage from "./LoadingPage";
import Input from "../components/Input";

function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isLoading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [firstNameError, setFirstNameError] = useState("");

  const handleUsernameChange = (e) => {
    if (e.target.value.includes(" ")) {
      return;
    }
    setUsername(e.target.value);
    setUsernameError("");
  };
  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
    setFirstNameError("");
  };
  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!username || !firstName || firstName.trim() === "") {
      if (!username) {
        setUsernameError("Username is required");
      }
      if (!firstName || firstName.trim() === "") {
        setFirstNameError("First Name is required");
      }
      return;
    }
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      dispatch(login(username, firstName, lastName));
      navigate("/");
    }, 1000);
  };

  return isLoading ? (
    <LoadingPage />
  ) : (
    <>
      <div className="login-container">
        <h1>Login to your Account</h1>
        <br />
        <form className="login-form">
          {/* type, id, name, placeholder, value, onChange, error */}
          <Input
            type="text"
            id={"username"}
            name={"username"}
            placeholder={"Username"}
            value={username}
            onChange={handleUsernameChange}
            error={usernameError}
          />

          <Input
            type="text"
            id={"firstName"}
            name={"firstName"}
            placeholder={"First Name"}
            value={firstName}
            onChange={handleFirstNameChange}
            error={firstNameError}
          />
          <Input
            type="text"
            id={"lastName"}
            name={"lastName"}
            placeholder={"Last Name"}
            value={lastName}
            onChange={handleLastNameChange}
          />
          <button onClick={handleLogin}>Login</button>
        </form>
      </div>
    </>
  );
}

export default LoginPage;
