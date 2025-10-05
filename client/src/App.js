import React, { useState } from "react";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {
  const [user, setUser] = useState(null);
  const [mode, setMode] = useState("login"); // 'login' | 'signup' | 'dashboard'

  function handleLogin(data) {
    setUser({ ...data.user, balance: 5 }); // Demo balance
    setMode("dashboard");
    localStorage.setItem("token", data.token);
  }
  function handleSignup(data) {
    setUser({ ...data.user, balance: 5 });
    setMode("dashboard");
    localStorage.setItem("token", data.token);
  }

  return (
    <div style={{ maxWidth: 400, margin: "40px auto", padding: 24, border: "1px solid #ccc", borderRadius: 12 }}>
      {!user && mode === "login" && (<><Login onLogin={handleLogin} /><p>or <button onClick={()=>setMode("signup")}>Sign up</button></p></>)}
      {!user && mode === "signup" && (<><Signup onSignup={handleSignup} /><p>or <button onClick={()=>setMode("login")}>Login</button></p></>)}
      {user && <Dashboard user={user} />}
    </div>
  );
}

export default App;