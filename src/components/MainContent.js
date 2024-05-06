import React from "react";

const MainContent = () => {
  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
      <div>
        <h1
          style={{
            maxWidth: "600px",
            margin: "3rem auto",
            fontSize: "3rem ",
            color: "#5468ff",
          }}
        >
          Move faster with intuitive React UI tools
        </h1>
        <div style={{ maxWidth: "900px" }}>
          MUI offers a comprehensive suite of free UI tools to help you ship new
          features faster. Start with Material UI, our fully-loaded component
          library, or bring your own design system to our production-ready
          components. MUI offers a comprehensive suite of free UI tools to help
          you ship new features faster. Start with Material UI, our fully-loaded
          component library, or bring your own design system to our
          production-ready components.
        </div>
        <button
          style={{
            maxWidth: "20rem",
            padding: "1rem 2rem",
            fontSize: "1.2rem",
            backgroundColor: "#5468ff",
            borderRadius: "8px",
            border: "none",
            color: "white",
            marginTop: "3rem",
            boxShadow: "3px 5px 11px #bbced5",
            border: "1px solid #ccccd6",
            cursor: "pointer",
            "&:hover": {
              background: "#efefef !important",
            },
          }}
        >
          Explore More
        </button>
      </div>
    </div>
  );
};

export default MainContent;
