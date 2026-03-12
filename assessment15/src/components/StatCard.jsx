import React from "react";

const StatCard = React.memo(function StatCard({
  title,
  value,
  growth,
  tone = "purple",
}) {
  return (
    <div style={styles.card}>
      <h4>{title}</h4>
      <h2>{value}</h2>
      <p>Growth: {growth}</p>
    </div>
  );
});

const styles = {
  card: {
    background: "#ffffff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
  },
};

export default StatCard;