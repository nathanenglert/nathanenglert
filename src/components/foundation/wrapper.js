import React from "react";

const Wrapper = ({ className, children }) => (
  <div className={`max-w-xl mx-auto p-8 ${className}`}>{children}</div>
);

export default Wrapper;
