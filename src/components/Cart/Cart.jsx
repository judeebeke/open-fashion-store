import SectionTitle from "../UI/SectionTitle";
import { AiOutlineArrowLeft, AiOutlineShopping } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { cartActions } from "../../store/cart-slice";
const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const cartTotalPrice = useSelector((state) => state.cart.totalPrice);

  const dispatch = useDispatch();

  let isCart = true;

  if (cartItems[0] === undefined) {
    isCart = false;
  } else {
    isCart = true;
  }

  const removeCartItemHandler = (itemId, itemQuantity) => {
    dispatch(
      cartActions.removeFromCart({ id: itemId, quantity: itemQuantity })
    );
  };

  const addCartItemHandler = (itemId) => {
    dispatch(cartActions.addedToCart({ id: itemId }));
  };

  return (
    <section className="mt-24 px-6">
      <Link
        className="text-4xl absolute top-24 left-4 cursor-pointer text-primary"
        to={".."}
      >
        <AiOutlineArrowLeft />
      </Link>
      <SectionTitle titletext="YOUR CART" />
      {isCart ? (
        <>
          {cartItems.map((item) => {
            return (
              <div
                key={item.id}
                className="flex flex-row justify-start items-center gap-x-3 mt-5 py-3"
              >
                <img src={item.image} className="w-2/5" alt="Sample Cart" />
                <div className="flex flex-col gap-y-3">
                  <h3 className="text-xl">{item.title}</h3>
                  <p className="text-xs">{item.sampName}</p>
                  <p className="text-lg">
                    <button
                      className="p-2"
                      onClick={() => {
                        removeCartItemHandler(item.id, item.quantity);
                      }}
                    >
                      -
                    </button>
                    {item.quantity}
                    <button
                      className="p-2"
                      onClick={() => {
                        addCartItemHandler(item.id, item.quantity);
                      }}
                    >
                      +
                    </button>
                  </p>
                  <p className="text-lg text-secondary">{item.price}</p>
                </div>
              </div>
            );
          })}
          <div className="flex justify-between items-center border-line border-y-line border border-x-0 my-4 px-6 py-4">
            <p>Delivery</p>
            <i>Free</i>
          </div>
          <div className="pb-20 flex justify-between items-center py-4 px-6 tracking-widest">
            <span>EST. TOTAL:</span>
            <span>${cartTotalPrice.toFixed(2)}</span>
          </div>
          <button className="fixed bottom-0 left-0 w-screen h-auto mt-5 text-center flex justify-center items-center gap-x-4 p-4 bg-title text-offwhite">
            <AiOutlineShopping className="text-2xl" />
            CHECKOUT
          </button>
        </>
      ) : (
        <div className="flex justify-center items-center mt-9">
          <h1>No ITEM IN CART</h1>
          <Link
            to="/product"
            className="absolute bottom-0 left-0 w-screen h-auto flex justify-center items-center text-center py-4 px-6 tracking-widest bg-title text-offwhite"
          >
            CONTINUE SHOPPING
          </Link>
        </div>
      )}
    </section>
  );
};

export default Cart;
