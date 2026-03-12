import React, { useEffect, useState } from "react";
import { fetchUsers } from "../services/api";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadUsers() {
      try {
        const data = await fetchUsers();
        setUsers(data);
      } catch (err) {
        console.error("Failed to load users:", err);
      } finally {
        setLoading(false);
      }
    }

    loadUsers();
  }, []);

  if (loading) return <p>Loading users...</p>;
  if (!users.length) return <p>No users found.</p>;

  return (
    <div className="grid-container">
      {users.map((u) => (
        <div key={u.id} className="card">
          <h3>{u.name}</h3>
          <p>Email: {u.email}</p>
        </div>
      ))}
    </div>
  );
}