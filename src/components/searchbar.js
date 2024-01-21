import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = ({ onClose }) => {
  const [searchInput, setSearchInput] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const Navigate = useNavigate();


  const isValidURL = (url) => {
    const domain = new RegExp("amazon.com");
    const http = new RegExp("https://www.");
    const https = "https://www.";
    const defaultPage = "amazon.com";
    const defaultPageLong = "https://www.amazon.com/";

    if (!domain.test(url) || url === defaultPage || url === defaultPageLong) {
      return false;
    }

    let fixedURL = url;

    if (!http.test(fixedURL)) {
      fixedURL = `${https}${fixedURL}`;
    }

    return http.test(fixedURL);
  };

  const handleSearch = () => {
    if (isValidURL(searchInput)) {
      setIsLoading(true);
      fetch(`http://127.0.0.1:5000/?searchInput=${searchInput}`)
        .then(response => response.json())
        .catch(error => {
          console.error('Error:', error);
        })
        .finally(() => {
          setSearchInput('');
          setErrorMessage('');
          setIsLoading(false);
          Navigate('/result');
        });
    } else {
      setErrorMessage('Please enter a valid Amazon link.');
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-80 z-50">
      <div className=" p-8 rounded-lg bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-100">
        <h2 className="text-2xl font-bold mb-4 text-white">Enter your link below...</h2>
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="border border-gray-300 p-2 mb-4 w-full rounded"
          placeholder="https://amazon.com/..."
        />
        <button onClick={handleSearch} className="bg-[#a5b3c4] text-white px-4 py-2 rounded-full">
          {isLoading ? 'Loading...' : 'Search'}
        </button>
        <button onClick={onClose} className="text-[#a5b3c4] ml-4">Close</button>
        {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
      </div>
    </div>
  );
};

export default SearchBar;
