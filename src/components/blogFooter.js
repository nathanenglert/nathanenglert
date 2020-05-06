import React from 'react';

import ProfileImage from '../images/profile.jpg';

const BlogFooter = ({ publishDate }) => (
  <div className="blog-footer">
    <figure class="image is-96x96 is-inline-block">
      <img src={ProfileImage} alt="Nathan Englert" />
    </figure>
    Written by <a href="/">Nathan Englert</a> on{' '}
    <time label={publishDate}>{publishDate}</time>
    <p className="content">
      I am a technology evangelist who specializes in API development. In my
      spare time, I like to <a href="/apps">build things</a> and contribute to{' '}
      <a href="https://dev.to/nathanenglert">DEV</a>. You can also find me on{' '}
      <a href="https://twitter.com/nathanenglert">Twitter</a> and{' '}
      <a href="https://www.linkedin.com/in/nathan-englert/">LinkedIn</a>.
    </p>
  </div>
);

export default BlogFooter;
