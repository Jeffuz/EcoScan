// SearchBar.js
import React, { useState } from 'react';

const SearchBar = ({ onClose }) => {
  const [searchInput, setSearchInput] = useState('');

  const handleSearch = () => {
    // Make an HTTP request to your Flask server
    fetch(`http://127.0.0.1:5000/?searchInput=${searchInput}`)
      .then(response => response.json())
      .then(data => {
        // Handle the response data from Flask (optional)
        console.log('Response from Flask:', data);
      })
      .catch(error => {
        console.error('Error:', error);
      });

    // Clear the input after searching (optional)
    setSearchInput('');
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">Search Bar</h2>
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="border border-gray-300 p-2 mb-4 w-full rounded"
          placeholder="Enter your link..."
        />
        <button onClick={handleSearch} className="bg-blue-500 text-white px-4 py-2 rounded-full">Search</button>
        <button onClick={onClose} className="text-blue-500 ml-4">Close</button>
      </div>
    </div>
  );
};

export default SearchBar;

