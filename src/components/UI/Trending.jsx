import { flexCenter } from "../../style";
import { PropTypes } from "prop-types";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const Trending = (props) => {
  let { tagList, tagsTitle, hash } = props;

  const responsive = {
    0: { items: 2, itemsFit: "contain" },
    568: { items: 4, itemsFit: "contain" },
    1024: { items: 6, itemsFit: "contain" },
  };

  let tag_list = tagList.map((tag, index) => {
    return (
      <p
        key={tag || index}
        className="bg-inputbg rounded-full mx-auto w-fit text-title text-xl"
      >
        {hash ? "#" + tag : tag}
      </p>
    );
  });

  return (
    <section className={`${flexCenter} flex-col gap-5 py-12 px-6 `}>
      <h2 className="text-2xl uppercase">{tagsTitle}</h2>
      <AliceCarousel
        mouseTracking
        items={tag_list}
        disableDotsControls
        responsive={responsive}
        disableButtonsControls
        controlsStrategy="alternate"
      />
    </section>
  );
};

Trending.propTypes = {
  tagList: PropTypes.func.required,
  tagsTitle: PropTypes.string,
  hash: PropTypes.string,
};

export default Trending;
