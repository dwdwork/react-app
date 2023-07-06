import React, { useState } from "react";

import LoginForm from "./LoginForm";
import Dashboard from "./Dashboard";
import { sampleUsers, sampleBreaches } from "../data/sample-data";
import AlertCard from "./cards/AlertCard"; // Import the AlertCard component

export default function App() {
  const [auth, setAuth] = useState({
    token: "",
    user: {},
    meta: {}
  });

  const onLoginSuccess = (auth) => {
    setAuth(auth);
  };

  const onLogOut = (e) => {
    setAuth({
      token: "",
      user: {},
      meta: {}
    });
  };

  const hasBreaches = () => {
    const userEmail = auth.user?.email;
    const userDomain = userEmail.split("@")[1]; // Extract the email domain
  
    // Check if the user's email domain is involved in any breaches
    const breaches = sampleBreaches.filter(
      (breach) => breach.domain === userDomain
    );
  
    return breaches.length > 0;
  };

  const currentPage = () => {
    return auth.token ? (
      <div>
        {/* Render the AlertCard component if there are breaches */}
        {hasBreaches() ? (
          <AlertCard breaches={sampleBreaches} />
        ) : (
          <AlertCard breaches={0} />
        )}
        <Dashboard />
      </div>
    ) : (
      <LoginForm onLoginSuccess={onLoginSuccess} />
    );
  };

  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-info">
        <a className="navbar-brand mr-auto" href="#">
          AppCo
        </a>

        {auth.token && (
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Tasks
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={onLogOut}>
                Log out
              </a>
            </li>
          </ul>
        )}
      </nav>
      <div className="container">{currentPage()}</div>
    </div>
  );
}
