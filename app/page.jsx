"use client";

import { useState } from "react";

const modes = [
  ["Full Campaign", "Complete sales system"],
  ["Product Analyzer", "Find the strongest angle"],
  ["WhatsApp Closer", "Replies and follow-ups"],
  ["Content Machine", "Hooks, posts and CTAs"]
];

export default function Home() {
  const [mode, setMode] = useState("Full Campaign");
  const [product, setProduct] = useState("");
  const [audience, setAudience] = useState("");
  const [price, setPrice] = useState("");
  const [goal, setGoal] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function generate() {
    if (!product.trim()) {
      setError("Please enter your product information.");
      return;
    }

    setLoading(true);
    setError("");
    setResult("");

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          mode,
          product,
          audience,
          price,
          goal
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Generation failed.");
      }

      setResult(data.output);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  async function copyResult() {
    await navigator.clipboard.writeText(result);
  }

  return (
    <main className="app">
      <header className="topbar">
        <div className="brand">
          <span>GE</span>
          GEESTABLISH
        </div>

        <div className="logo">
          SNAPSELL™
        </div>
      </header>

      <section className="hero">
        <p className="eyebrow">
          BY GEESTABLISH · AI SALES COMMAND CENTER
        </p>

        <h1>
          Turn a product into
          <br />
          <em>a sales system.</em>
        </h1>

        <p className="subtitle">
          Snap. Analyze. Position. Create. Converse. Close. Improve.
        </p>
      </section>

      <section className="workspace">

        <div className="panel">

          <div className="panelHeader">
            <div>
              <p className="eyebrow">01 · INPUT</p>
              <h2>Feed the engine.</h2>
            </div>

            <span className="status">
              ● READY
            </span>
          </div>

          <label>ENGINE MODE</label>

          <div className="modes">

            {modes.map(([name, description]) => (
              <button
                key={name}
                className={
                  mode === name
                    ? "mode active"
                    : "mode"
                }
                onClick={() => setMode(name)}
              >
                <strong>{name}</strong>
                <small>{description}</small>
              </button>
            ))}

          </div>

          <label>
            PRODUCT INFORMATION *
          </label>

          <textarea
            value={product}
            onChange={(e) =>
              setProduct(e.target.value)
            }
            placeholder="Describe what you are selling. Include features, benefits, price, delivery, bonuses, proof and anything else customers should know."
          />

          <div className="grid">

            <div>
              <label>
                TARGET CUSTOMER
              </label>

              <input
                value={audience}
                onChange={(e) =>
                  setAudience(e.target.value)
                }
                placeholder="Who is this for?"
              />
            </div>

            <div>
              <label>
                PRICE
              </label>

              <input
                value={price}
                onChange={(e) =>
                  setPrice(e.target.value)
                }
                placeholder="e.g. $19.99"
              />
            </div>

          </div>

          <label>
            PRIMARY GOAL
          </label>

          <input
            value={goal}
            onChange={(e) =>
              setGoal(e.target.value)
            }
            placeholder="e.g. Get my first 20 sales"
          />

          {error && (
            <div className="error">
              {error}
            </div>
          )}

          <button
            className="generate"
            onClick={generate}
            disabled={loading}
          >
            {loading
              ? "BUILDING YOUR SALES SYSTEM..."
              : "GENERATE SALES SYSTEM →"}
          </button>

        </div>

        <div className="panel output">

          <div className="panelHeader">

            <div>
              <p className="eyebrow">
                02 · OUTPUT
              </p>

              <h2>
                Sales intelligence.
              </h2>
            </div>

            {result && (
              <button
                className="copy"
                onClick={copyResult}
              >
                COPY
              </button>
            )}

          </div>

          {!result && !loading && (
            <div className="empty">

              <div className="mark">
                SS
              </div>

              <h3>
                Your campaign appears here.
              </h3>

              <p>
                Give SnapSell the product.
                The engine builds the strategy
                and execution.
              </p>

            </div>
          )}

          {loading && (
            <div className="empty">

              <div className="loader"></div>

              <h3>
                SnapSell is thinking.
              </h3>

              <p>
                Analyzing your offer and
                building your sales system.
              </p>

            </div>
          )}

          {result && (
            <pre className="result">
              {result}
            </pre>
          )}

        </div>

      </section>

      <footer>
        SNAPSELL™ · BY GEESTABLISH
      </footer>

    </main>
  );
                }
