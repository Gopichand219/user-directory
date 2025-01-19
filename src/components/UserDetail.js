import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Loader from './Loader';

const UserDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to fetch user details.');
        setLoading(false);
      });
  }, [id]);

  if (loading) return <Loader />;
  if (error) return <p className="container">{error}</p>;

  return (
    <div className="user-detail-page">
      <button className="go-back-btn" onClick={() => navigate('/')}>
        Go Back
      </button>
      {user && (
        <div className="user-detail">
          <h1>{user.name}</h1>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <p>Company: {user.company.name}</p>
          <p>Website: {user.website}</p>
        </div>
      )}
    </div>
  );
};

export default UserDetail;
