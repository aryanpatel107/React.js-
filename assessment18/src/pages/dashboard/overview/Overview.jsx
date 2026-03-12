import { useAuth } from "../../../context/AuthContext";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts";

const salesData = [
  { month: "Jan", sales: 400 },
  { month: "Feb", sales: 600 },
  { month: "Mar", sales: 300 },
  { month: "Apr", sales: 700 },
  { month: "May", sales: 500 },
  { month: "Jun", sales: 900 }
];

export default function Overview() {
  const { user } = useAuth();

  return (
    <div>

      {/* Title */}
      <h2 style={{ marginBottom: "10px" }}>Dashboard Overview</h2>

      <p style={{ marginBottom: "30px", color: "#6b7280" }}>
        Welcome back, <strong>{user?.name}</strong> 👋
      </p>

      {/* KPI Cards */}
      <div style={cardGrid}>
        <Card title="Total Orders" value="124" color="#6366f1" />
        <Card title="Revenue" value="$8,420" color="#10b981" />
        <Card title="New Users" value="32" color="#f59e0b" />
      </div>

      {/* Chart Section */}
      <div style={chartContainer}>
        <h3 style={{ marginBottom: "15px" }}>Sales Overview</h3>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={salesData}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="month" />
            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="sales"
              stroke="#6366f1"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}

function Card({ title, value, color }) {
  return (
    <div
      style={{
        background: color,
        color: "white",
        padding: "25px",
        borderRadius: "12px",
        boxShadow: "0 6px 15px rgba(0,0,0,0.1)"
      }}
    >
      <h4 style={{ marginBottom: "10px" }}>{title}</h4>
      <h2>{value}</h2>
    </div>
  );
}

const cardGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
  gap: "20px",
  marginBottom: "40px"
};

const chartContainer = {
  background: "var(--card)",
  padding: "25px",
  borderRadius: "12px",
  boxShadow: "0 5px 15px rgba(0,0,0,0.05)"
};