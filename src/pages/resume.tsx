import React from "react";

const ResumePage = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="columns">
            <div className="column is-6 is-offset-3">
              <p className="content">
                <strong>Hi, I'm Nathan.</strong>
                &nbsp;I am a technology evangelist who specializes in API
                development. I work at{" "}
                <a href="https://www.lassomd.com/">Lasso MD</a> as a Staff
                Engineer. We're focused on building the next evolution of
                marketing enablement software for dental practices!
              </p>
              <p className="content">
                As a leader, I enjoy building team cultures that support growth,
                inclusivity, and creativity. As an engineer, I love increasing
                operational efficiency through the use of technology and
                automation.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-6 is-offset-3">
              <h2>About</h2>
              <p className="content">
                Throughout my career, I have helped people and companies alike
                use technology to improve their day-to-day lives. It all started
                after pooling my savings and birthday money to buy my first
                computer when I was twelve years old. From there, I taught
                myself how to design websites and learned how to apply
                technology in different ways.
              </p>
              <p className="content">
                In 2008, I started my professional career as a junior software
                engineer and developed a passion for connecting systems and
                automating processes. Over the years, I've carried that passion
                along with me everywhere I've gone. I've worked on teams that
                have built eCommerce platforms for a global scale and others
                that have implemented new ERP systems. One of my proudest
                accomplishments has been developing a service to optimize HVAC
                systems for a major hotel chain. By deploying this service, the
                chain was able to save hundreds of thousands per year in energy
                costs across its properties.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ResumePage;
