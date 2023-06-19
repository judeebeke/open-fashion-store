import Nav from "./Navigation/Nav";
import { BsSearch } from "react-icons/bs";
import { AiOutlineShopping } from "react-icons/ai";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between items-center py-4 px-6 bg-bgcolortwo text-3xl text-body z-50 fixed top-0 left-0 w-screen">
      <Nav />
      <Link to={"/"}>
        <img src={logo} alt="Open Fashion" />
      </Link>
      <Link to={"/"}>
        <i className="text-body">
          <BsSearch />
        </i>
      </Link>
      <Link to={"/"}>
        <i className="text-body">
          <AiOutlineShopping />
        </i>
      </Link>
    </header>
  );
};

export default Header;
