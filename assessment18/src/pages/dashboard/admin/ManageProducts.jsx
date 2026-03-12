import { useState } from "react";

function ManageProducts() {
  const [products, setProducts] = useState([
    { id: 1, name: "Laptop", price: 800 },
    { id: 2, name: "Phone", price: 500 },
  ]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Manage Products</h2>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginTop: "20px",
        }}
      >
        <thead>
          <tr style={{ background: "#f4f4f4" }}>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>ID</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Name</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Price</th>
          </tr>
        </thead>

        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                {p.id}
              </td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                {p.name}
              </td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                ${p.price}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ManageProducts;