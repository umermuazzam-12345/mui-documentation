import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Timeless aesthetics",
    Svg: require("@site/static/img/img1.svg").default,
    description: (
      <>
        Build beautiful UIs with ease. Start with Google's Material Design, or
        create your own sophisticated theme. Build beautiful UIs with ease.
        Start with Google's Material Design, or create your own sophisticated
        theme. Build beautiful UIs with ease.
      </>
    ),
  },
  {
    title: "Intuitive customization",
    Svg: require("@site/static/img/img2.svg").default,
    description: (
      <>
        Our components are as flexible as they are powerful. You always have
        full control over how they look and behave. Build beautiful UIs with
        ease. Start with Google's Material Design, or create your own
        sophisticated theme. Our components are as flexible
      </>
    ),
  },
  {
    title: "Unrivaled documentation",
    Svg: require("@site/static/img/img3.svg").default,
    description: (
      <>
        The answer to your problem can be found in our documentation. How can we
        be so sure? Because our docs boast over 2,000 contributors. Build
        beautiful UIs with ease. Start with Google's Material Design, or create
        your own sophisticated theme.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
