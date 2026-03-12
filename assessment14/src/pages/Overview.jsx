import React, { useEffect, useState } from "react";
import { fetchOverview } from "../services/api";

export default function Overview() {
  const [overview, setOverview] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadOverview() {
      try {
        const data = await fetchOverview();
        setOverview(data);
      } catch (err) {
        console.error("Failed to load overview:", err);
      } finally {
        setLoading(false);
      }
    }

    loadOverview();
  }, []);

  if (loading) return <p>Loading overview...</p>;
  if (!overview) return <p>No data found.</p>;

  return (
    <div className="overview-cards">
      <div className="card">Total Users: {overview.totalUsers}</div>
      <div className="card">Total Products: {overview.totalProducts}</div>
      <div className="card">Revenue: {overview.revenue}</div>
    </div>
  );
}