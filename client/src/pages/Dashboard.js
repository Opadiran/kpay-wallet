import React, { useState } from "react";
import AddFundModal from "../components/AddFundModal";
import SendCryptoModal from "../components/SendCryptoModal";
import TransactionHistory from "../components/TransactionHistory";

export default function Dashboard({ user }) {
  const [balance, setBalance] = useState(user.balance || 5);
  const [showFundModal, setShowFundModal] = useState(false);
  const [showSendModal, setShowSendModal] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const [receiptTx, setReceiptTx] = useState(null);

  function handleAddFund(tx) {
    setBalance(balance + tx.amount);
    setTransactions([...transactions, tx]);
  }

  function handleSend(tx) {
    setBalance(balance - tx.amount);
    setTransactions([...transactions, tx]);
  }

  function handleViewReceipt(tx) {
    setReceiptTx(tx);
    // Implement receipt modal/dialog next
    alert(
      `Receipt:\nType: ${tx.type}\nAmount: $${tx.amount}\nWallet: ${tx.walletType || "-"}\nAddress: ${tx.address || "-"}\nStatus: ${tx.status}\nDate: ${tx.date}`
    );
  }

  return (
    <div>
      <h2>Welcome, {user.fullName} 👋</h2>
      <div style={{
        width: 120, height: 120, border: "2px solid #333", borderRadius: 16,
        display: "flex", alignItems: "center", justifyContent: "center", fontSize: 32, margin: "24px auto"
      }}>${balance}</div>
      <button onClick={() => setShowFundModal(true)}>Add Fund</button>
      <button onClick={() => setShowSendModal(true)}>Send</button>
      <TransactionHistory transactions={transactions} onViewReceipt={handleViewReceipt} />
      <AddFundModal
        isOpen={showFundModal}
        onClose={() => setShowFundModal(false)}
        onAddFund={handleAddFund}
      />
      <SendCryptoModal
        isOpen={showSendModal}
        onClose={() => setShowSendModal(false)}
        onSend={handleSend}
      />
    </div>
  );
}