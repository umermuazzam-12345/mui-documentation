import React from "react";

export default function Highlight({ children, color }) {
  return (
    <button
      style={{
        backgroundColor: color,
        borderRadius: "4px",
        border: "1px solid gray",
        color: "#fff",
        padding: "1rem 2rem",
        marginBottom: "2rem",
        fontSize: "1rem",
        marginLeft: "42%",
        marginTop: "4rem",
      }}
    >
      {children}
    </button>
  );
}
