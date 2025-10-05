import React from "react";

export default function TransactionHistory({ transactions, onViewReceipt }) {
  if (!transactions.length) return <p>No transactions yet.</p>;
  return (
    <div>
      <h3>Transaction History</h3>
      <table style={{width: "100%", borderCollapse: "collapse"}}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Wallet</th>
            <th>Address</th>
            <th>Status</th>
            <th>Date/Time</th>
            <th>Receipt</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(tx => (
            <tr key={tx.id}>
              <td>{tx.type === "fund" ? "Add Fund" : "Send"}</td>
              <td>${tx.amount}</td>
              <td>{tx.walletType || "-"}</td>
              <td>{tx.address || "-"}</td>
              <td>{tx.status}</td>
              <td>{tx.date}</td>
              <td>
                <button onClick={() => onViewReceipt(tx)}>View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}