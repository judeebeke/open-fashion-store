import SectionTitle from "../UI/SectionTitle";
import { AiOutlineArrowLeft, AiOutlinePlus } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PropTypes } from "prop-types";
import { ToastContainer, toast } from "react-toastify";
import { cartActions } from "../../store/cart-slice";
import { sendCart } from "../../store/cart-actions";

const CheckoutFirst = (props) => {
  let { onCheckNext } = props;
  const cartTotalPrice = useSelector((state) => state.cart.totalPrice) || 0.0;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleGoBack = () => {
    navigate(-1);
  };

  const orderHandler = () => {
    onCheckNext();
    dispatch(
      cartActions.replaceCart({
        items: [],
        totalPrice: "",
        totalQuantity: "",
        isChangedData: true,
      })
    );
    dispatch(
      sendCart({
        items: [],
        totalPrice: "",
        totalQuantity: "",
      })
    );
  };

  const handleClick = () => {
    toast("Successfully Placed an Order!", {
      onOpen: () => {
        orderHandler();
      },
      onClose: () => {
        navigate("/product");
      },
    });
  };

  return (
    <>
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
        <button
          className="absolute bottom-0 left-0 w-screen h-auto mt-5 text-center flex flex-col justify-center items-center gap-x-4 bg-title p-4 text-offwhite hover:opacity-90 transition-all duration-300 ease-in-out"
          onClick={handleClick}
        >
          PLACE ORDER
        </button>
      </section>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        rtl={false}
        draggable={false}
        pauseOnHover
        theme="light"
      />
    </>
  );
};

CheckoutFirst.propTypes = {
  onCheckNext: PropTypes.func,
};

export default CheckoutFirst;
