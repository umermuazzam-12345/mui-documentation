import clsx from "clsx";

import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import MainContent from "@site/src/components/MainContent";

import Heading from "@theme/Heading";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header
      style={{ backgroundColor: "none", color: "black" }}
      className={clsx("hero hero--primary", styles.heroBanner)}
    >
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          MUI offers a comprehensive suite of free UI tools to help you ship new
          features faster. Start with Material UI, our fully-loaded component
          library, or bring your own design system to our production-ready
          components. library, or bring your own design system to our
          production-ready components.
        </div>
        <button
          style={{
            maxWidth: "20rem",
            padding: "1rem 2rem",
            fontSize: "1.5rem",
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
          Lets Get Started
        </button>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <MainContent />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
