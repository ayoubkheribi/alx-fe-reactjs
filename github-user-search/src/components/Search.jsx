import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

function Search() {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username.trim() && !location.trim() && !minRepos) {
      setError('Please enter at least one search criteria.');
      return;
    }

    setLoading(true);
    setError(null);
    setUsers([]);

    try {
      const data = await fetchUserData(username.trim(), location.trim(), minRepos);
      if (data.total_count === 0) {
        setError('Looks like we cant find the user');
      } else {
        setUsers(data.items);
      }
    } catch (err) {
      setError('Looks like we cant find the user');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md my-6">
      <h1 className="text-2xl font-semibold mb-6 text-center">GitHub Advanced User Search</h1>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          type="text"
          placeholder="Username (optional)"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-2 border border-gray-400 rounded"
        />
        <input
          type="text"
          placeholder="Location (optional)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="p-2 border border-gray-400 rounded"
        />
        <input
          type="number"
          min="0"
          placeholder="Minimum Public Repos (optional)"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="p-2 border border-gray-400 rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded transition"
        >
          Search
        </button>
      </form>

      {loading && <p className="mt-4 text-center">Loading...</p>}
      {error && <p className="mt-4 text-center text-red-600">{error}</p>}

      <div className="mt-6 space-y-4">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

function UserCard({ user }) {
  return (
    <div className="bg-white p-4 rounded shadow flex items-center space-x-4">
      <img
        src={user.avatar_url}
        alt={user.login}
        className="w-16 h-16 rounded-full"
      />
      <div>
        <h2 className="text-lg font-semibold">{user.login}</h2>
        <a
          href={user.html_url}
          target="_blank"
          rel="noreferrer"
          className="text-blue-500 underline"
        >
          View Profile
        </a>
      </div>
    </div>
  );
}

export default Search;