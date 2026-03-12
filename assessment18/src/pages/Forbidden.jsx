import { useNavigate } from "react-router-dom";

function Forbidden() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        background: "#f5f6fa"
      }}
    >
      <h1 style={{ fontSize: "72px", margin: "0", color: "#e74c3c" }}>
        403
      </h1>

      <h2 style={{ margin: "10px 0" }}>Access Forbidden</h2>

      <p style={{ color: "#555", maxWidth: "400px" }}>
        You do not have permission to access this page.
        Please contact the administrator or return to dashboard.
      </p>

      <button
        onClick={() => navigate("/dashboard")}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          border: "none",
          background: "#3498db",
          color: "white",
          borderRadius: "6px",
          cursor: "pointer",
          fontSize: "16px"
        }}
      >
        Go to Dashboard
      </button>
    </div>
  );
}

export default Forbidden;