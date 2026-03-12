import { useState } from "react";

function Orders() {
  const [orders] = useState([
    { id: 101, product: "Laptop", status: "Delivered" },
    { id: 102, product: "Phone", status: "Processing" },
    { id: 103, product: "Headphones", status: "Shipped" },
  ]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>My Orders</h2>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginTop: "20px",
        }}
      >
        <thead>
          <tr style={{ background: "#f4f4f4" }}>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Order ID</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Product</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Status</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                {order.id}
              </td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                {order.product}
              </td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                {order.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Orders;