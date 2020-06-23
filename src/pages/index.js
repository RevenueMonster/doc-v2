import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import Footer from "./Footer/index.js";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    title: <h3 style={{ textAlign: "center" }}>Unified Payment</h3>,
    imageUrl: "img/unified-payment.png",
    description: (
      <p style={{ textAlign: "center" }}>
        Empower your business with easy access to all mobile payment channels.
      </p>
    ),
  },
  {
    title: <h3 style={{ textAlign: "center" }}>Loyalty 2.0 (Social Media)</h3>,
    imageUrl: "img/loyalty.png",
    description: (
      <p style={{ textAlign: "center" }}>
        One platform for all your loyalty program and social media needs. Wechat
        Official Account and Facebook Messenger ready.
      </p>
    ),
  },
  {
    title: <h3 style={{ textAlign: "center" }}>Financial Cloud</h3>,
    imageUrl: "img/financial-cloud.png",
    description: (
      <p style={{ textAlign: "center" }}>
        Secure and accelerate your Fintech innovation with our expertise in
        Alibaba Cloud.
      </p>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <header className={classnames("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                "button button--outline button--secondary button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("docs/introduction/overview")}
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </Layout>
  );
}

export default Home;
