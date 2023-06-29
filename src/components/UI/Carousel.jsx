import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

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

const Carousel = (props) => {
  let { productData, letDots } = props;

  const responsive = {
    0: { items: 1, itemsFit: "cover" },
    568: { items: 2, itemsFit: "cover" },
    1024: { items: 3, itemsFit: "cover" },
  };

  const products = productData.map((item) => {
    return (
      <figure
        key={item.id || item.version}
        className={`flex flex-col justify-center items-center text-center pt-9`}
      >
        <img src={item.image} className="object-contain" alt={item.title} />
        <Link
          to={`/product/productdetails/${item.id || item.version}`}
          className={`flex flex-col justify-center items-center text-center `}
        >
          <h5 className="w-4/6 text-body text-xl pt-1">{item.title}</h5>
          <p className="text-primary text-2xl">&#x24;{item.price}</p>
        </Link>
      </figure>
    );
  });

  return (
    <div>
      <AliceCarousel
        mouseTracking
        items={products}
        renderDotsItem={letDots ? SemiDiamond : ""}
        responsive={responsive}
        infinite
        disableButtonsControls
        controlsStrategy="alternate"
      />
    </div>
  );
};

SemiDiamond.propTypes = {
  isActive: PropTypes.string,
};

Carousel.propTypes = {
  productData: PropTypes.array.isRequired,
  letDots: PropTypes.bool,
};

export default Carousel;
