import { RiBookmarkLine } from "react-icons/ri";
import { PropTypes } from "prop-types";

const Bookmark = (props) => {
  const { active } = props;
  return (
    <i
      className={`text-2xl cursor-pointer text-offwhite ${
        active && "text-primary"
      }`}
    >
      <RiBookmarkLine />
    </i>
  );
};

Bookmark.propTypes = {
  active: PropTypes.string,
};

export default Bookmark;
