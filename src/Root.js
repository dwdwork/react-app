import React, { useState } from "react";
import logo from './logo.svg';
import './css/Root.css';
import { Login } from "./components/Login";
import { Register } from "./components/Register";

function Root() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="Root">
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
    </div>
  );
}

export default Root;