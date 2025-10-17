import React, { useEffect, useState } from 'react';

const Users = () => {
  const [users, setUsers] = useState([]);
  const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/users/`;

  useEffect(() => {
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        console.log('Users API endpoint:', endpoint);
        console.log('Fetched users:', data);
        setUsers(data.results || data);
      })
      .catch(err => console.error('Error fetching users:', err));
  }, [endpoint]);

  return (
    <div className="mb-4">
      <h2 className="mb-3 text-warning">Users</h2>
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead className="table-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Details</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => (
              <tr key={user.id || idx}>
                <th scope="row">{user.id || idx + 1}</th>
                <td>{user.name || '-'}</td>
                <td>{user.email || '-'}</td>
                <td>{user.details || JSON.stringify(user)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button className="btn btn-warning mt-2" onClick={() => window.location.reload()}>Refresh</button>
    </div>
  );
};

export default Users;
