import React, { useEffect, useState } from 'react';
import './JobApp.css';

function JobApp() {
    const [parsedHTML, setParsedHTML] = useState(null);

    const setData = () => {
        // Fetch personal portfolio
        fetch('https://dwd.work/')
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
        setData();
    });

  return (
    <div className="JobApp">
      <header className="JobApp-header">
        <h1>Start Job Application Test</h1>
      </header>
      <main>
        <p>Here's where I render everything!</p>
      </main>
    </div>
  );
}

export default JobApp;