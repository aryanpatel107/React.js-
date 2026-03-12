import { useState } from "react";

function ManageUsers() {
  const [users] = useState([
    { id: 1, name: "Aryan", role: "Admin" },
    { id: 2, name: "Rahul", role: "User" },
    { id: 3, name: "Priya", role: "User" },
  ]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Manage Users</h2>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginTop: "20px",
        }}
      >
        <thead>
          <tr style={{ background: "#f4f4f4" }}>
            <th style={{ border: "1px solid #ddd", padding: "10px" }}>ID</th>
            <th style={{ border: "1px solid #ddd", padding: "10px" }}>Name</th>
            <th style={{ border: "1px solid #ddd", padding: "10px" }}>Role</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td style={{ border: "1px solid #ddd", padding: "10px" }}>
                {user.id}
              </td>
              <td style={{ border: "1px solid #ddd", padding: "10px" }}>
                {user.name}
              </td>
              <td style={{ border: "1px solid #ddd", padding: "10px" }}>
                {user.role}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ManageUsers;