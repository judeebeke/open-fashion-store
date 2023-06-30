import { PropTypes } from "prop-types";

import Carousel from "../UI/Carousel";
import SectionTitle from "../UI/SectionTitle";

const Product = (props) => {
  let { offerData } = props;
  return (
    <section>
      <SectionTitle titletext="JUST FOR YOU" />
      <Carousel productData={offerData} letDots={true} />
    </section>
  );
};

Product.propTypes = {
  offerData: PropTypes.array,
};

export default Product;
