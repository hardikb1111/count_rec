import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "20px",
          boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
          padding: "40px",
          maxWidth: "400px",
          width: "100%",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            color: "#333",
            marginBottom: "30px",
          }}
        >
          Counter App
        </h1>

        <div style={{ marginBottom: "30px" }}>
          <div
            style={{
              fontSize: "4rem",
              fontWeight: "bold",
              color: "#667eea",
              marginBottom: "10px",
            }}
          >
            {count}
          </div>
          <div
            style={{
              color: "#666",
              fontSize: "14px",
            }}
          >
            Current Count
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: "15px",
            justifyContent: "center",
            marginBottom: "20px",
          }}
        >
          <button
            onClick={decrement}
            style={{
              backgroundColor: "#e74c3c",
              color: "white",
              border: "none",
              padding: "12px 24px",
              borderRadius: "8px",
              fontSize: "16px",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#c0392b")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#e74c3c")}
          >
            - Decrement
          </button>

          <button
            onClick={increment}
            style={{
              backgroundColor: "#27ae60",
              color: "white",
              border: "none",
              padding: "12px 24px",
              borderRadius: "8px",
              fontSize: "16px",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#229954")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#27ae60")}
          >
            + Increment
          </button>
        </div>

        <button
          onClick={reset}
          style={{
            backgroundColor: "#95a5a6",
            color: "white",
            border: "none",
            padding: "12px 32px",
            borderRadius: "8px",
            fontSize: "16px",
            fontWeight: "600",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#7f8c8d")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#95a5a6")}
        >
          🔄 Reset
        </button>

        <div
          style={{
            marginTop: "30px",
            fontSize: "12px",
            color: "#999",
          }}
        >
          Click the buttons to modify the counter value
        </div>
      </div>
    </div>
  );
}

export default App;
