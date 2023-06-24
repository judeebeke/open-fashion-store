import PropTypes from "prop-types";
import { flexCenter } from "../../style";

const SectionTitle = (props) => {
  let { titletext, titleElement } = props;
  return (
    <div className={`${flexCenter} flex-col gap-y-1 px-6`}>
      <h2 className="text-2xl uppercase">{titletext}</h2>
      {titleElement}
      <div className="title-icon">
        <div className="line"></div>
        <div className="diamond bg-offwhite"></div>
      </div>
    </div>
  );
};

SectionTitle.propTypes = {
  titletext: PropTypes.string,
  titleElement: PropTypes.node,
};

export default SectionTitle;
