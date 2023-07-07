import { PropTypes } from "prop-types";
import { useNavigate } from "react-router-dom";
const CartBtn = (props) => {
  let { btnTo, btnText, btnIcon } = props;
  const navigate = useNavigate();
  const navigateHandler = (route) => {
    navigate(route);
  };
  return (
    <button
      onClick={() => {
        navigateHandler(btnTo);
      }}
      className="absolute bottom-0 left-0 w-screen h-auto mt-5 text-center flex justify-center items-center gap-x-4 p-4 bg-title text-offwhite hover:opacity-90 transition-all duration-300 ease-in-out"
    >
      {btnIcon}
      {btnText}
    </button>
  );
};

CartBtn.propTypes = {
  btnTo: PropTypes.string,
  btnText: PropTypes.string.isRequired,
  btnIcon: PropTypes.node,
};

export default CartBtn;
