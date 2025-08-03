import { useState } from "react";
import { fetchAdvancedUsers, fetchUserDetails } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResults([]);

    try {

      let query = "";
      if (username) query += `${username}+`;
      if (location) query += `location:${location}+`;
      if (minRepos) query += `repos:>=${minRepos}`;

      const users = await fetchAdvancedUsers(query);
      const detailedUsers = await Promise.all(
        users.map(async (user) => {
          return await fetchUserDetails(user.login);
        })
      );

      setResults(detailedUsers);
    } catch (err) {
      console.error(err);
      setError("Something went wrong while fetching users.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <form onSubmit={handleSubmit} className="mb-6 space-y-4">
        <input
          type="text"
          placeholder="Username"
          className="w-full p-2 border rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="Location"
          className="w-full p-2 border rounded"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          type="number"
          placeholder="Minimum Repositories"
          className="w-full p-2 border rounded"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-600">{error}</p>}
      {!loading && results.length === 0 && !error && <p>No users found.</p>}

      <div className="space-y-6">
        {results.map((user) => (
          <div
            key={user.id}
            className="border rounded p-4 flex items-start gap-4 shadow"
          >
            <img
              src={user.avatar_url}
              alt="avatar"
              className="w-20 h-20 rounded-full"
            />
            <div>
              <h2 className="text-xl font-bold">{user.name || user.login}</h2>
              <p><strong>Location:</strong> {user.location || "N/A"}</p>
              <p><strong>Company:</strong> {user.company || "N/A"}</p>
              <p><strong>Bio:</strong> {user.bio || "N/A"}</p>
              <p><strong>Repos:</strong> {user.public_repos}</p>
              <p><strong>Followers:</strong> {user.followers} | <strong>Following:</strong> {user.following}</p>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                View GitHub Profile
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
