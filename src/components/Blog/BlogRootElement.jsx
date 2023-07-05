import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";

const BlogRootElement = () => {
  return (
    <React.Fragment>
      <Outlet />
      <Footer />
    </React.Fragment>
  );
};

export default BlogRootElement;
