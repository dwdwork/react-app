import React from "react";

const AlertCard = ({ username, breaches, dismissAlert, changePassword }) => {
  const alertColor = breaches.length > 0 ? "alert-warning" : "";

  return (
    <div className={`card mt-4 ${alertColor}`}>
      <div className="card-header">Alerts</div>
      <div className="card-body">
        {breaches.length > 0 ? (
          <React.Fragment>
            <p>Your email was involved in a breach on the following sites:</p>
            <ul>
              {breaches.map((breach) => (
                <li key={breach.id}>
                  {`${breach.addedDate} - ${breach.name}`}
                </li>
              ))}
            </ul>
            <p>
              Although your information on our site is safe, we recommend you
              change your password in case your AppCo account shares a password
              with any of the sites above.
            </p>
            <div className="btn-group" role="group" aria-label="Actions">
              <button className="btn btn-primary" onClick={changePassword}>
                Change Password
              </button>
              <button className="btn btn-secondary" onClick={dismissAlert}>
                Dismiss
              </button>
            </div>
          </React.Fragment>
        ) : (
          <p>No alerts</p>
        )}
      </div>
    </div>
  );
};

export default AlertCard;
