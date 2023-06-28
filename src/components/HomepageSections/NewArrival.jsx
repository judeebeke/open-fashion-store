import { AiOutlineArrowRight } from "react-icons/ai";

import SectionTitle from "../UI/SectionTitle";
import { flexCenter } from "./../../style";
import { newArrival } from "../../store/localdata";
import Button from "../UI/Button";
import { PropTypes } from "prop-types";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
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

SemiDiamond.propTypes = {
  isActive: PropTypes.string,
};

const NewArrival = () => {
  let newProduct = newArrival.map((item) => {
    return (
      <figure key={item.id} className="w-56 mx-auto text-center">
        <Link to={`/product/productdetails/${item.version}`}>
          <img
            src={item.image}
            className="w-full object-contain"
            alt={item.title}
          />
          <h5 className="text-body text-lg">{item.title}</h5>
          <p className="text-primary text-xl">&#x24;{item.price}</p>
        </Link>
      </figure>
    );
  });

  const responsive = {
    0: { items: 1, itemsFit: "contain" },
    568: { items: 2, itemsFit: "contain" },
    1024: { items: 3, itemsFit: "contain" },
  };

  return (
    <section className={`${flexCenter} flex-col gap-y-9 py-12`}>
      <SectionTitle titletext="New Arrival" />
      <div className="flex self-start flex-col justify-between items-center px-14 md:px-20">
        <h2>APP</h2>
        <div className="semi-diamond bg-secondary"></div>
      </div>
      <AliceCarousel
        mouseTracking
        items={newProduct}
        renderDotsItem={SemiDiamond}
        responsive={responsive}
        infinite
        disableButtonsControls
        controlsStrategy="alternate"
      />
      <Button
        btnstyle={`${flexCenter} h-auto gap-x-4 rounded-full px-10 text-xl text-title py-3 hover:bg-label hover:text-offwhite transition-all duration-500 ease-in-out`}
        to="/"
      >
        Explore More
        <AiOutlineArrowRight />
      </Button>
    </section>
  );
};

export default NewArrival;
