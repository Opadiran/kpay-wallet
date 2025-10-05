import React from "react";

export default function Dashboard({ user }) {
  return (
    <div>
      <h2>Welcome, {user.fullName} 👋</h2>
      <div style={{
        width: 120, height: 120, border: "2px solid #333", borderRadius: 16,
        display: "flex", alignItems: "center", justifyContent: "center", fontSize: 32, margin: "24px auto"
      }}>${user.balance || 5}</div>
      <button>Add Fund</button>
      <button>Send</button>
      {/* Transaction history coming next */}
    </div>
  );
}