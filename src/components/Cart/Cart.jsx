import { Fragment } from "react";
import ReactDOM from "react-dom";

import SectionTitle from "../UI/SectionTitle";
import {
  AiOutlineClose,
  AiOutlineShopping,
  AiOutlineMinus,
  AiOutlinePlus,
} from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { cartActions } from "../../store/cart-slice";
import { uiActions } from "../../store/ui-slice";

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

  const cartActiveHandler = () => {
    dispatch(uiActions.cartActiveHandle());
  };

  const removeCartItemHandler = (itemId, itemQuantity) => {
    dispatch(
      cartActions.removeFromCart({ id: itemId, quantity: itemQuantity })
    );
  };

  const addCartItemHandler = (itemId) => {
    dispatch(cartActions.addedToCart({ id: itemId }));
  };

  return (
    <>
      <section className="pt-10 px-6 cart_overlay">
        {" "}
        <button
          onClick={cartActiveHandler}
          className="text-4xl absolute top-10 left-4 cursor-pointer text-title p-2"
        >
          <AiOutlineClose />
        </button>
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
                    <p className="text-xl flex justify-start items-center gap-x-4">
                      <button
                        className="p-2"
                        onClick={() => {
                          removeCartItemHandler(item.id, item.quantity);
                        }}
                      >
                        <AiOutlineMinus />
                      </button>
                      {item.quantity}
                      <button
                        className="p-2"
                        onClick={() => {
                          addCartItemHandler(item.id, item.quantity);
                        }}
                      >
                        <AiOutlinePlus />
                      </button>
                    </p>
                    <p className="text-lg text-secondary">{item.price}</p>
                  </div>
                </div>
              );
            })}
            <div className="pb-20 flex justify-between items-center py-4 px-6 tracking-widest">
              <span>EST. TOTAL:</span>
              <span>${cartTotalPrice.toFixed(2)}</span>
            </div>
          </>
        ) : (
          <div className="flex justify-center items-center mt-28">
            <h1>No ITEM IN CART</h1>
            <Link
              to="/product"
              className="absolute bottom-0 left-0 w-screen h-auto flex justify-center items-center text-center gap-x-4 py-4 px-6 tracking-widest bg-title text-offwhite hover:opacity-90 transition-all duration-300 ease-in-out"
              onClick={cartActiveHandler}
            >
              <AiOutlineShopping
                className="
            text-2xl"
              />
              CONTINUE SHOPPING
            </Link>
          </div>
        )}
      </section>
      {isCart && (
        <Link
          to={"/checkout"}
          className="fixed bottom-0 left-0 w-full h-auto mt-5 text-center flex justify-center items-center gap-x-4 p-4 bg-title text-offwhite hover:opacity-90 transition-all duration-300 ease-in-out fixedBtn"
          onClick={cartActiveHandler}
        >
          <AiOutlineShopping className="text-2xl" />
          GO TO CHECKOUT
        </Link>
      )}
    </>
  );
};

const portalElement = document.getElementById("cart_overlay");

const CartModal = () => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Fragment>
          <Cart />
        </Fragment>,
        portalElement
      )}
    </Fragment>
  );
};

export default CartModal;
