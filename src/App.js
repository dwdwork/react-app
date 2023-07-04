import React, { useEffect, useState } from 'react';
import './App.css';
import logo from './logo.svg';
import data from './data.json';

function App() {
  const [parsedHTML, setParsedHTML] = useState(null);

  const getData=() => {
    const webApp = data['web-app'];
    // Log JSON data
    console.log(data);
    console.log(webApp['servlet']);

    // Fetch personal portfolio
    fetch('https://dwd.local/')
      .then(response => response.text()) 
      .then(html => {
        const parser = new DOMParser();
        const parsedDocument = parser.parseFromString(html, 'text/html');
        setParsedHTML(parsedDocument.body);
        console.log(parsedDocument.body);
        
      })
      .catch(error => console.log(error));
  }

  useEffect(() => {
    getData()
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div className="Parse">
          {parsedHTML && (
            <div dangerouslySetInnerHTML={{ __html: parsedHTML.innerHTML }} />
          )}
        </div>
      </header>
    </div>
  );
}

export default App;