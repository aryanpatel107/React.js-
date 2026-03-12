import { useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([
    { id: 1, name: "Aryan", email: "aryan@gmail.com", active: true },
    { id: 2, name: "Rahul", email: "rahul@gmail.com", active: false },
    { id: 3, name: "Neha", email: "neha@gmail.com", active: true },
  ]);

  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");

  const toggleStatus = (id) => {
    setUsers(users.map(u => u.id === id ? { ...u, active: !u.active } : u));
  };

  const deleteUser = (id) => {
    setUsers(users.filter(u => u.id !== id));
  };

  const addUser = (e) => {
    e.preventDefault();
    if (newName.trim() === "" || newEmail.trim() === "") return;
    const newUser = {
      id: Date.now(),
      name: newName,
      email: newEmail,
      active: true,
    };
    setUsers([newUser, ...users]);
    setNewName("");
    setNewEmail("");
  };

  return (
    <div className="app-container">
      <div className="content">
        <h1>User List App</h1>

        {/* Add User Form */}
        <form className="add-user-form" onSubmit={addUser}>
          <input
            type="text"
            placeholder="Name"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
          />
          <button type="submit">Add User</button>
        </form>

        {users.length === 0 ? (
          <p className="no-users">No users available</p>
        ) : (
          <div className="user-list">
            {users.map(user => (
              <div
                key={user.id}
                className={`user-card ${user.active ? "active" : "inactive"}`}
              >
                <div className="user-info">
                  <h3>{user.name}</h3>
                  <p>{user.email}</p>
                  <span className={`status-badge ${user.active ? "active" : "inactive"}`}>
                    {user.active ? "Active" : "Inactive"}
                  </span>
                </div>
                <div className="user-actions">
                  <button onClick={() => toggleStatus(user.id)} className="btn-toggle">
                    Toggle
                  </button>
                  <button onClick={() => deleteUser(user.id)} className="btn-delete">
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;