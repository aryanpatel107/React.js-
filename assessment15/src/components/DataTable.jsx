export default function DataTable() {
  const rows = [
    { id: "#A102", name: "Dhruv", status: "Paid", amount: "$120" },
    { id: "#A103", name: "Krish", status: "Pending", amount: "$89" },
    { id: "#A104", name: "Patel", status: "Paid", amount: "$240" },
  ];

  return (
    <div className="table-container">
      <h2>Recent Orders</h2>

      <table>
        <thead>
          <tr>
            <th>Order</th>
            <th>Customer</th>
            <th>Status</th>
            <th style={{ textAlign: "right" }}>Amount</th>
          </tr>
        </thead>

        <tbody>
          {rows.map((r) => (
            <tr key={r.id}>
              <td>{r.id}</td>
              <td>{r.name}</td>
              <td
                className={
                  r.status === "Paid"
                    ? "status-paid"
                    : "status-pending"
                }
              >
                {r.status}
              </td>
              <td style={{ textAlign: "right" }}>{r.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}