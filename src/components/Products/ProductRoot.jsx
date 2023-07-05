import { Outlet } from "react-router-dom";
import Footer from "../Footer";

const ProductRoot = () => {
  return (
    <main>
      <Outlet />
      <Footer />
    </main>
  );
};

export default ProductRoot;
