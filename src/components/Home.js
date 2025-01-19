import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Loader from './Loader';
import Pagination from './Pagination';

const Home = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to fetch users.');
        setLoading(false);
      });
  }, []);

  const handleSearch = (e) => setSearchTerm(e.target.value);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
  const displayedUsers = filteredUsers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  if (loading) return <Loader />;
  if (error) return <p className="container">{error}</p>;

  return (
    <div className="container">
      <h1>User Directory</h1>
      <input
        type="text"
        placeholder="Search users by name"
        value={searchTerm}
        onChange={handleSearch}
      />
      <div className="user-list">
        {displayedUsers.map((user) => (
          <div
            key={user.id}
            className="user-card"
            onClick={() => navigate(`/user/${user.id}`)}
          >
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <p>{user.address.city}</p>
          </div>
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default Home;
