import React, { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [error, setError] = useState(null);

  const fetchUsers = () => {
    fetch("http://localhost:5000/users")
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => setError(err.message));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const addUser = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name })
    })
      .then(res => res.json())
      .then(() => {
        setName("");
        fetchUsers();
      })
      .catch(err => setError(err.message));
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif", maxWidth: 600, margin: "0 auto" }}>
      <h1>3-Tier App: User Management</h1>
      {error && <p style={{ color: "crimson" }}>Error: {error}</p>}

      <form onSubmit={addUser} style={{ marginBottom: "1rem" }}>
        <input
          type="text"
          value={name}
          placeholder="Enter user name"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <button type="submit" style={{ marginLeft: "0.5rem" }}>Add User</button>
      </form>

      <h2>User List</h2>
      {users.length === 0 ? (
        <p>No users yet.</p>
      ) : (
        <ul>
          {users.map((u) => (
            <li key={u.id}>{u.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
