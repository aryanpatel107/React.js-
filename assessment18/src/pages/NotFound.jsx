import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        background: "#f5f6fa",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ fontSize: "80px", margin: "0", color: "#e74c3c" }}>
        404
      </h1>

      <h2>Page Not Found</h2>

      <p style={{ color: "#555", marginBottom: "20px" }}>
        The page you are looking for does not exist.
      </p>

      <button
        onClick={() => navigate("/dashboard")}
        style={{
          padding: "10px 20px",
          border: "none",
          borderRadius: "6px",
          background: "#3498db",
          color: "white",
          cursor: "pointer",
        }}
      >
        Go to Dashboard
      </button>
    </div>
  );
}

export default NotFound;