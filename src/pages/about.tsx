import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const AboutPage = () => {
  return (
    <Layout>
      <Seo location="/about" />
      <h1 className="text-2xl font-brand leading-12 cyber-h after:bg-accent">
        About
      </h1>
      <div className="space-y-4 mt-4">
        <p>
          Nathan Englert (b. 1989) is an engineer, poet, and author who explores
          near-future worlds through a cyberpunk lens. His work is influenced by
          the visual storytelling of Simon Stålenhag, the artistic brilliance of
          Yoji Shinkawa, and the narrative depth of Hideo Kojima.
        </p>
        <p>
          As an engineer, he is passionate about building technology that
          enhances everyday life. His poetry delves into themes of mental
          health, LGBTQ+ identity, and social justice, using verse to navigate
          personal and collective struggles.
        </p>
        <p>
          Whether through fiction, poetry, or innovation, he is driven by a
          desire to explore the intersection of humanity and technology.
        </p>
      </div>
    </Layout>
  );
};

export default AboutPage;
