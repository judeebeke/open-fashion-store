import SectionTitle from "../UI/SectionTitle";

import { productsForYou } from "../../store/localdata";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { PropTypes } from "prop-types";

const SemiDiamond = ({ isActive }) => (
  <span
    className={`semi-diamond ${isActive ? "bg-secondary" : "bg-bgcolor"} ${
      isActive ? "active" : ""
    }`}
    style={{
      width: "8px",
      height: "8px",
      transform: "rotate(45deg)",
      display: "inline-block",
      margin: "0 5px",
    }}
  />
);

const Product = () => {
  const responsive = {
    0: { items: 1, itemsFit: "contain" },
    568: { items: 2, itemsFit: "contain" },
    1024: { items: 3, itemsFit: "contain" },
  };

  const products = productsForYou.map((item) => {
    return (
      <figure
        key={item.id}
        className={`flex flex-col justify-center items-center text-center pt-9`}
      >
        <img src={item.image} className="object-contain" alt={item.title} />
        <h5 className="w-4/6 text-body text-xl pt-1">{item.title}</h5>
        <p className="text-primary text-2xl">&#x24;{item.price}</p>
      </figure>
    );
  });

  return (
    <section>
      <SectionTitle titletext="JUST FOR YOU" />
      <AliceCarousel
        mouseTracking
        items={products}
        renderDotsItem={SemiDiamond}
        responsive={responsive}
        infinite
        disableButtonsControls
        controlsStrategy="alternate"
      />
    </section>
  );
};

SemiDiamond.propTypes = {
  isActive: PropTypes.string,
};

export default Product;
