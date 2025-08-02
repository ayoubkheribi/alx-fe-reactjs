import React from 'react'
import { useState } from 'react';
import fetchUserData from '../services/githubService';

const Search = () => {

  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmite = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setError(null);
    setUserData(null);

    try {
      const data = await fetchUserData(username);
      setUserData(data);
    } catch (err) {
      setError('Looks like we cant find the user');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmite}>
        <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Search for GitHub users' />

        <button type='submit'>Search</button>
      </form>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {userData && (
      <div>
        <img src={userData.avatar_url} alt="Avatar" width="100" />
        <h2>{userData.name ? userData.name : userData.login}</h2>
        <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
          View GitHub Profile
        </a>
      </div>
)}

    </>
  )
}

export default Search;