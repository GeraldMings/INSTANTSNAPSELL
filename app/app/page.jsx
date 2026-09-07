"use client";

import { useState } from "react";

const modes = [
  "Full Campaign",
  "Product Analyzer",
  "WhatsApp Closer",
  "Content Machine",
];

export default function SnapSellApp() {
  const [mode, setMode] = useState("Full Campaign");
  const [product, setProduct] = useState("");
  const [audience, setAudience] = useState("");
  const [price, setPrice] = useState("");
  const [goal, setGoal] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function generate() {
    if (!product.trim()) {
      setError("Please describe your product first.");
      return;
    }

    setLoading(true);
    setError("");
    setOutput("");

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          mode,
          product,
          audience,
          price,
          goal,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setOutput(data.output);
    } catch (err) {
      setError(err.message || "SnapSell could not generate the result.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main style={styles.page}>
      <header style={styles.header}>
        <a href="/" style={styles.brand}>
          GEESTABLISH
        </a>

        <a href="/" style={styles.back}>
          ← Sales Page
        </a>
      </header>

      <section style={styles.container}>
        <div style={styles.label}>SNAPSELL™ BY GEESTABLISH</div>

        <h1 style={styles.title}>AI Sales Command Center.</h1>

        <p style={styles.subtitle}>
          Put your product into SnapSell™ and turn it into a practical
          sales system.
        </p>

        <div style={styles.card}>
          <label style={styles.inputLabel}>SALES MODE</label>

          <select
            value={mode}
            onChange={(e) => setMode(e.target.value)}
            style={styles.input}
          >
            {modes.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>

          <label style={styles.inputLabel}>YOUR PRODUCT *</label>

          <textarea
            value={product}
            onChange={(e) => setProduct(e.target.value)}
            placeholder="Describe your product, what it does, who it helps, and why someone would want it..."
            style={styles.textarea}
          />

          <label style={styles.inputLabel}>TARGET CUSTOMER</label>

          <input
            value={audience}
            onChange={(e) => setAudience(e.target.value)}
            placeholder="Who is this product for?"
            style={styles.input}
          />

          <label style={styles.inputLabel}>PRICE</label>

          <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Example: $19.99"
            style={styles.input}
          />

          <label style={styles.inputLabel}>PRIMARY GOAL</label>

          <input
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            placeholder="Example: Get more WhatsApp orders"
            style={styles.input}
          />

          {error && <p style={styles.error}>{error}</p>}

          <button
            onClick={generate}
            disabled={loading}
            style={styles.button}
          >
            {loading ? "BUILDING YOUR SALES SYSTEM..." : "GENERATE SALES SYSTEM →"}
          </button>
        </div>

        {output && (
          <div style={styles.outputCard}>
            <div style={styles.outputTop}>
              <div style={styles.label}>YOUR SNAPSELL™ SYSTEM</div>

              <button
                onClick={() => navigator.clipboard.writeText(output)}
                style={styles.copy}
              >
                COPY
              </button>
            </div>

            <pre style={styles.output}>{output}</pre>
          </div>
        )}
      </section>

      <footer style={styles.footer}>
        SNAPSELL™ — AI Sales Command Center — Created by Geestablish
      </footer>
    </main>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#050505",
    color: "#f5f5f5",
    fontFamily: "Arial, Helvetica, sans-serif",
  },

  header: {
    padding: "22px 6%",
    borderBottom: "1px solid #222",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "sticky",
    top: 0,
    background: "rgba(5,5,5,.95)",
    zIndex: 10,
  },

  brand: {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "700",
    letterSpacing: "5px",
    fontSize: "13px",
  },

  back: {
    color: "#999",
    textDecoration: "none",
    fontSize: "13px",
  },

  container: {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "80px 6%",
  },

  label: {
    fontSize: "11px",
    letterSpacing: "4px",
    fontWeight: "700",
    color: "#888",
    marginBottom: "20px",
  },

  title: {
    fontFamily: 'Georgia, "Times New Roman", serif',
    fontSize: "clamp(45px, 8vw, 80px)",
    lineHeight: "1",
    letterSpacing: "-3px",
    margin: "0",
  },

  subtitle: {
    color: "#999",
    fontSize: "18px",
    lineHeight: "1.7",
    maxWidth: "650px",
    marginTop: "25px",
    marginBottom: "45px",
  },

  card: {
    border: "1px solid #292929",
    padding: "30px",
    background: "#0b0b0b",
  },

  inputLabel: {
    display: "block",
    fontSize: "11px",
    letterSpacing: "3px",
    fontWeight: "700",
    color: "#888",
    marginBottom: "10px",
    marginTop: "24px",
  },

  input: {
    width: "100%",
    padding: "16px",
    background: "#050505",
    color: "#fff",
    border: "1px solid #333",
    outline: "none",
    fontSize: "15px",
  },

  textarea: {
    width: "100%",
    minHeight: "150px",
    padding: "16px",
    background: "#050505",
    color: "#fff",
    border: "1px solid #333",
    outline: "none",
    fontSize: "15px",
    lineHeight: "1.6",
    resize: "vertical",
  },

  button: {
    width: "100%",
    marginTop: "30px",
    padding: "18px",
    background: "#f5f5f5",
    color: "#050505",
    border: "none",
    fontWeight: "700",
    letterSpacing: "1px",
    cursor: "pointer",
  },

  error: {
    color: "#ff7777",
    marginTop: "20px",
  },

  outputCard: {
    marginTop: "35px",
    border: "1px solid #292929",
    background: "#0b0b0b",
    padding: "30px",
  },

  outputTop: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "20px",
    borderBottom: "1px solid #292929",
    paddingBottom: "20px",
  },

  copy: {
    background: "transparent",
    color: "#fff",
    border: "1px solid #555",
    padding: "9px 14px",
    cursor: "pointer",
    fontSize: "11px",
    letterSpacing: "2px",
  },

  output: {
    whiteSpace: "pre-wrap",
    fontFamily: "Arial, Helvetica, sans-serif",
    color: "#ccc",
    lineHeight: "1.7",
    fontSize: "15px",
    margin: "25px 0 0",
  },

  footer: {
    borderTop: "1px solid #222",
    padding: "35px 6%",
    color: "#666",
    fontSize: "12px",
    textAlign: "center",
  },
};
