import React from "react";
import Card from "./Card.jsx";

export default function CardGrid() {
  return (
    <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <Card title="Total Users" value="1,245" />
      <Card title="Orders" value="560" />
      <Card title="Revenue" value="$18,420" />
    </section>
  );
}