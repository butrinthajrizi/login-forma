import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <form className="form">
        <div className="form-h1">
          <div></div>
          <h1>CRUD OPERATIONS</h1>
        </div>
        <div className="form-h2">
          <h2>SIGN IN</h2>
          <p>Enter your credentials to access your account</p>
        </div>
        <div className="form-inputs">
          <label className="form-input">
            Email
            <input type="text" placeholder="Enter your email..." />
          </label>
          <label className="form-input">
            Password
            <input type="password" placeholder="Enter your password..." />
          </label>
          <button type="submit" className="form-button">Sign In</button>
          <p className="form-forgot__password">
            Forgot your password? <span>Reset Password</span>
          </p>
        </div>
      </form>
    </div>
  );
}

export default App;
