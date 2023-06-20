// import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { navLinks } from "../../store/localdata";
import { hoverLinkTransition } from "../../style";
import { PropTypes } from "prop-types";

const MobileNav = (props) => {
  let { onNavClick } = props;

  return (
    <nav className="absolute top-0 left-0 w-screen h-screen flex justify-center bg-bgcolor z-50 transition-opacity duration-300">
      <span
        className="text-4xl absolute top-4 left-4 cursor-pointer text-primary"
        onClick={onNavClick}
      >
        <AiOutlineClose />
      </span>
      <ul>
        {navLinks.map((link) => {
          return (
            <li
              key={link.navLinksRef}
              className={`my-6 mx-auto py-2 px-6 text-offwhite bg-primary hover:bg-offwhite hover:text-body ${hoverLinkTransition}`}
            >
              <Link to={link.navLinksRef}>{link.navLinkText}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

MobileNav.propTypes = {
  onNavClick: PropTypes.func.isRequired,
};

export default MobileNav;
