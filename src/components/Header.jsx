import Nav from "./Navigation/Nav";
import { BsSearch } from "react-icons/bs";
import { AiOutlineShopping } from "react-icons/ai";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between items-center py-4 px-6 bg-bgcolortwo text-3xl text-body z-40 fixed top-0 left-0 w-screen">
      <Nav />
      <Link to={"/"}>
        <img src={logo} alt="Open Fashion" />
      </Link>
      <span className="flex justify-between items-center  gap-x-5">
        <Link to={"/"}>
          <i className="text-body">
            <BsSearch />
          </i>
        </Link>
        <Link to={"/"}>
          <i className="text-body relative">
            <p className="absolute -top-3 -right-1 bg-secondary w-5 p-1 rounded-full text-center text-xs">
              3
            </p>
            <AiOutlineShopping />
          </i>
        </Link>
      </span>
    </header>
  );
};

export default Header;
