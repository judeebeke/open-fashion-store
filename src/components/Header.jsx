// import {Porta}
import Nav from "./Navigation/Nav";
import { AiOutlineShopping } from "react-icons/ai";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../store/ui-slice";
import { cartActions } from "../store/cart-slice";
import { motion } from "framer-motion";

const Header = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.totalQuantity);
  const animate = useSelector((state) => state.cart.animateCart);

  const cartActiveHandler = () => {
    dispatch(uiActions.cartActiveHandle());
  };

  const changeAnimateHandler = () => {
    dispatch(cartActions.closeAnimateCart());
  };

  if (animate === true) {
    setTimeout(() => {
      changeAnimateHandler();
    }, 500);
  }

  const iconVariants = {
    initial: { y: 0, scale: 1 },
    idle: {},
    bounce: {
      y: [-10, 5],
      scale: [1.2, 1],
      transition: {
        y: { yoyo: Infinity, duration: 0.3 },
      },
    },
  };

  return (
    <header className="flex justify-between items-center py-4 px-4 bg-bgcolortwo text-3xl text-body z-40 fixed top-0 left-0 w-full">
      <Nav />
      <Link to={"/"}>
        <motion.img
          src={logo}
          alt="Open Fashion"
          initial={{ rotate: 0 }}
          whileHover={{ rotate: [180, 0] }}
          whileTap={{
            scale: 1.2,
          }}
          transition={{
            type: "spring",
            stiffness: 30,
          }}
        />
      </Link>
      <motion.button
        role="button"
        type="button"
        onClick={cartActiveHandler}
        initial="initial"
        animate={animate ? "bounce" : "idle"}
        variants={iconVariants}
      >
        <i className="text-body relative">
          {cart > 0 && (
            <p className="absolute -top-3 -right-1 bg-secondary w-5 p-1 rounded-full text-center text-xs">
              {cart}
            </p>
          )}
          <AiOutlineShopping />
        </i>
      </motion.button>
    </header>
  );
};

export default Header;
