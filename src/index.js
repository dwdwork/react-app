import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './css/index.css';
import './css/bootstrap.min.css';
import Root from "./Root";
// import App from './App';
// import Game from './Game';
// import JobApp from './JobApp';
// import LoginApp from "./components/App";


// const start = ReactDOM.createRoot(document.getElementById('start'));
// start.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


// const game = ReactDOM.createRoot(document.getElementById('game'));
// game.render(
//   <React.StrictMode>
//     <Game />
//   </React.StrictMode>
// );

// const jobApp = ReactDOM.createRoot(document.getElementById('job'));
// jobApp.render(
//   <React.StrictMode>
//     <JobApp />
//   </React.StrictMode>
// );

// const loginApp = ReactDOM.createRoot(document.getElementById('login'));
// loginApp.render(
//   <React.StrictMode>
//     <LoginApp />
//   </React.StrictMode>
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
