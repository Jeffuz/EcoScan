import React, { useEffect, useState } from 'react';

const ResultPage = () => {
  const [result, setResult] = useState('');

  useEffect(() => {
    fetch('http://127.0.0.1:5000/?searchInput=example') 
      .then(response => response.json())
      .then(data => {
        console.log('Response from Flask:', data);
        setResult(data); 
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []); 

  return (
    <div>
      <div>{result}</div>
    </div>
  )
}

export default ResultPage;
