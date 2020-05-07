import React from 'react';
import { Link } from 'gatsby';

import BlogFooter from '../components/blogFooter';
import Layout from '../components/layout';
import NavBar from '../components/navbar';
import SEO from '../components/seo';

const Apps = () => {
  return (
    <Layout>
      <SEO
        title="Apps and other work - Nathan Englert"
        description="A few simple applications that Nathan has built in his spare time."
        location="/apps"
      />
      <NavBar />
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-6 is-offset-3">
              <h1>Apps and other work</h1>
              <div className="blog-content">
                <p className="content">
                  I like to create things from time to time, usually to solve
                  some kind of problem I’m having at the time. Here’s some
                  things I’ve been working on.
                </p>

                <h2>Raffler</h2>
                <p className="content">
                  My wife <span className="is-strikethrough">is a</span> used to
                  be a consultant for Pampered Chef and she needed a good way of
                  simulating raffles. Rather than buying a billion rolls of
                  tickets and going through the motions of drawing them out of a
                  hat, I built a tool for her instead.{' '}
                  <Link to="/apps/raffler">Check it out.</Link>
                </p>

                <h2>Kick-Ass Student Loan Obliterator (KASLO)</h2>
                <p className="content">
                  When it comes to personal finance, I suck.{' '}
                  <a
                    href="http://iwillteachyoutoberich.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ramit’s course
                  </a>
                  &nbsp;on it really got me thinking about how I can (and
                  should) change my ways. One morning, I decided to get my
                  student loans in order and figure out a plan to pay them off
                  ASAP. Googling for a student loan calculator turns up a bunch
                  of tools that didn’t really do the job I was looking for. So
                  as any nerd would do,{' '}
                  <a href="https://nathanenglert.com/apps/kaslo/" title="KASLO">
                    I built my own.
                  </a>
                </p>
              </div>
              <BlogFooter publishDate="2020.05.05" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Apps;
