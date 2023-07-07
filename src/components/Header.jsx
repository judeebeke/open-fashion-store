// import {Porta}
import Nav from "./Navigation/Nav";
import { BsSearch } from "react-icons/bs";
import { AiOutlineShopping } from "react-icons/ai";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../store/ui-slice";

const Header = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.totalQuantity);

  const cartActiveHandler = () => {
    dispatch(uiActions.cartActiveHandle());
  };

  return (
    <header className="flex justify-between items-center py-4 px-4 bg-bgcolortwo text-3xl text-body z-40 fixed top-0 left-0 w-full">
      <Nav />
      <Link to={"/"}>
        <img src={logo} alt="Open Fashion" />
      </Link>
      <span className="flex justify-between items-center  gap-x-5">
        <button
          role="button"
          className="cursor-not-allowed"
          disabled={true}
          aria-disabled
        >
          <i className="text-body cursor-not-allowed">
            <BsSearch />
          </i>
        </button>
        <button role="button" onClick={cartActiveHandler}>
          <i className="text-body relative">
            {cart > 0 && (
              <p className="absolute -top-3 -right-1 bg-secondary w-5 p-1 rounded-full text-center text-xs">
                {cart}
              </p>
            )}
            <AiOutlineShopping />
          </i>
        </button>
      </span>
    </header>
  );
};

export default Header;
