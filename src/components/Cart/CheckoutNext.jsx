import SectionTitle from "../UI/SectionTitle";
import { AiOutlineArrowLeft, AiOutlinePlus } from "react-icons/ai";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { PropTypes } from "prop-types";

const CheckoutFirst = (props) => {
  let { onCheckNext } = props;
  const cartTotalPrice = useSelector((state) => state.cart.totalPrice);
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <section className="mt-24 px-6">
      <button
        className="text-2xl absolute top-28 left-4 cursor-pointer text-title bg-line p-2"
        onClick={handleGoBack}
      >
        <AiOutlineArrowLeft />
      </button>
      <SectionTitle titletext="YOUR CART" />
      <div className="flex flex-col justify-start items-start border-line border-y-line border border-x-0 mb-4 mt-8 px-6 py-4">
        <h3 className="text-xl">Iris Watson</h3>
        <p>606-3727 Ullamcorper. Street Roseville NH 11523</p>
        <em>(786) 713-8616</em>
      </div>
      <div className="flex justify-between items-center border-line border-y-line border border-x-0 my-4 px-6 py-4">
        <p>Add Shipping Adress</p>
        <AiOutlinePlus className="cursor-pointer" />
      </div>
      <div className="pb-20 flex justify-between items-center py-4 px-6 tracking-widest">
        <span>EST. TOTAL:</span>
        <span>${cartTotalPrice.toFixed(2)}</span>
      </div>
      <Link
        to={"/"}
        className="absolute bottom-0 left-0 w-screen h-auto mt-5 text-center flex justify-center items-center gap-x-4 p-4 bg-title text-offwhite hover:opacity-90 transition-all duration-300 ease-in-out"
        onClick={onCheckNext}
      >
        PLACE ORDER
      </Link>
    </section>
  );
};

CheckoutFirst.propTypes = {
  onCheckNext: PropTypes.func,
};

export default CheckoutFirst;
