import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import MobileNav from "./MobileNav";

const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navHandler = () => {
    setIsNavOpen((prev) => !prev);
  };
  return (
    <nav>
      <span className="text-body" onClick={navHandler}>
        <RxHamburgerMenu />
      </span>
      {isNavOpen && <MobileNav onNavClick={navHandler} />}
    </nav>
  );
};

export default Nav;
