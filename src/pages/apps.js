import React from "react";
import { Link } from "gatsby";

import Navbar from "../components/navbar";
import Layout from "../components/layout";
import ProfileImage from '../images/profile.jpg';

const Apps = () => {
  return (
    <Layout>
      <Navbar className="has-background-light" />
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-6 is-offset-3">
              <h1 className="title has-text-centered">Apps and other work</h1>
              <div className="blog-content">
                <p className="content">
                  I like to create things from time to time, usually to solve some kind of problem I’m having at the time. Here’s some things 
                  I’ve been working on.
                </p>

                <h2 className="subtitle">Raffler</h2>
                <p className="content">
                  My wife <span className="is-strikethrough">is a</span> used to be a consultant for Pampered Chef and she needed a good way 
                  of simulating raffles. Rather than buying a billion rolls of tickets and going through the motions of drawing them out of a 
                  hat, I built a tool for her instead. <Link to="/apps/raffler">Check it out.</Link>
                </p>

                <h2 className="subtitle">Kick-Ass Student Loan Obliterator (KASLO)</h2>
                <p className="content">
                  When it comes to personal finance, I suck. <a href="http://iwillteachyoutoberich.com/" target="_blank" rel="noopener noreferrer">Ramit’s course</a> 
                  &nbsp;on it really got me thinking about how I can (and should) change my ways. One morning, I decided to get my student loans in 
                  order and figure out a plan to pay them off ASAP. Googling for a student loan calculator turns up a bunch of tools that didn’t 
                  really do the job I was looking for. So as any nerd would do, <Link to="/apps/kaslo/">I built my own.</Link>
                </p>
              </div>
              <div className="blog-footer has-text-centered">
                <figure class="image is-96x96 is-inline-block">
                  <img src={ProfileImage} alt="Nathan Englert" />
                </figure>
                <p className="blog-author has-text-weight-bold has-text-grey">Nathan Englert</p>
                <p className="blog-date has-text-weight-bold has-text-grey">
                  <time dateTime="April 28, 2019">April 28, 2019</time>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Apps;
