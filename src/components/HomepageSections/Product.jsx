import SectionTitle from "../UI/SectionTitle";

import { productsForYou } from "../../store/localdata";

import "react-alice-carousel/lib/alice-carousel.css";
import Carousel from "../UI/Carousel";

const Product = () => {
  return (
    <section>
      <SectionTitle titletext="JUST FOR YOU" />
      <Carousel productData={productsForYou} letDots={true} />
    </section>
  );
};

export default Product;
