"use client";

import { useEffect } from "react";

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error("Global Error:", error);
    // You can also send this to an external logging service
  }, [error]);

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Oops! Something went wrong globally.</h1>
      <p>{error.message}</p>
      <button
        onClick={() => reset()}
        style={{ marginTop: "1rem", padding: "0.5rem 1rem", cursor: "pointer" }}
      >
        Try Again
      </button>
    </div>
  );
}
