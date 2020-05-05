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
      I am a technology evangelist who specializes in API development.
    </p>
  </div>
);

export default BlogFooter;
