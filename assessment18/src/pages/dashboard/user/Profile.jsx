import { useAuth } from "../../../context/AuthContext";

export default function Profile() {
  const { user } = useAuth();

  return (
    <div style={{ padding: "20px" }}>
      <h2>My Profile</h2>

      <div
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "10px",
          maxWidth: "400px",
        }}
      >
        <p><b>Name:</b> {user?.name}</p>
        <p><b>Email:</b> {user?.email}</p>
        <p><b>Role:</b> {user?.role}</p>
      </div>
    </div>
  );
}