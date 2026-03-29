import React, { useState } from "react";
import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";
import Review from "./components/Review";
import Login from "./Login";

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogout = () => {
    setUser(null);
  };

  if (!user) {
    return <Login onLoginSuccess={(u) => setUser(u)} />;
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header />

      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        gap: "12px",
        padding: "10px 24px",
        backgroundColor: "hsl(190, 18%, 13%)",
        borderBottom: "1px solid rgba(255,255,255,0.08)"
      }}>
        <span style={{ color: "#fff", fontSize: "14px" }}>
          👋 {user.email}
        </span>
        <button
          onClick={handleLogout}
          style={{
            padding: "6px 16px",
            backgroundColor: "transparent",
            color: "#fff",
            border: "1px solid rgba(255,255,255,0.4)",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "13px",
          }}
        >
          Logout
        </button>
      </div>

      <Main />
      <Review />
      <Footer />
    </div>
  );
};

export default App;