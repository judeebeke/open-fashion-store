import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import MobileNav from "./MobileNav";
import { hoverLinkTransition } from "../../style";

const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const navHandler = () => {
    setIsNavOpen((prev) => !prev);
  };

  return (
    <nav>
      <span
        className={`text-body cursor-pointer hover:text-secondary ${hoverLinkTransition}`}
        onClick={navHandler}
      >
        <RxHamburgerMenu />
      </span>
      <MobileNav onNavClick={navHandler} isNavOpen={isNavOpen} />
    </nav>
  );
};

export default Nav;
