import React from "react";
import { Outlet } from "react-router-dom";

const BlogRootElement = () => {
  return (
    <React.Fragment>
      <Outlet />
    </React.Fragment>
  );
};

export default BlogRootElement;
