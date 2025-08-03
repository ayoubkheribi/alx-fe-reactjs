import axios from "axios";

export const fetchAdvancedUsers = async (query) => {
  const res = await axios.get(`https://api.github.com/search/users?q=${query}`);
  return res.data.items; // list of users
};

export const fetchUserDetails = async (username) => {
  const res = await axios.get(`https://api.github.com/users/${username}`);
  return res.data;
};
