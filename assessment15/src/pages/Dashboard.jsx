import { useCallback, useState } from "react";
import StatCard from "../components/StatCard"; // ✅ CORRECT PATH

export default function Dashboard() {
  const [count, setCount] = useState(0);

  const handleRefresh = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div>
      <button onClick={handleRefresh}>Refresh</button>

      <div style={{ marginTop: "20px", display: "grid", gap: "20px" }}>
        <StatCard title="Users" value="1200" growth="12%" />
        <StatCard title="Orders" value="560" growth="5%" tone="indigo" />
      </div>
    </div>
  );
}