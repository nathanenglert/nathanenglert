import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const CreditsPage = () => {
  return (
    <Layout>
      <Seo location="/credits" />
      <h1 className="text-2xl font-brand leading-12 cyber-h after:bg-accent">
        Credits
      </h1>
      <div className="space-y-4 mt-4">
        <p>
          This site is based on the aesthetic of{" "}
          <a
            className="text-secondary hover:underline"
            href="https://alddesign.github.io/cyberpunk-css/demo/"
          >
            cyberpunk.css
          </a>
          , making some adjustments to fit my needs while keeping the original
          design's essence. It's a fantastic theme, and I highly recommend
          checking it out.
        </p>
        <p>
          As for the plumbing, it's built with Gatsby, and hosted on Netlify.
        </p>
      </div>
    </Layout>
  );
};

export default CreditsPage;
