import { Link } from "react-router-dom";
import Collapsible from "react-collapsible";

import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import { PropTypes } from "prop-types";

const CategoryMenu = (props) => {
  const { currentMenu } = props;
  return currentMenu.map((item) => {
    return (
      <Collapsible
        key={item.subtitle}
        trigger={
          <span className="w-full flex justify-between pr-4 mb-5">
            <h4>{item.subtitle}</h4>
            <AiOutlineCaretDown />
          </span>
        }
        triggerWhenOpen={
          <span className="w-full flex justify-between pr-4 mb-5">
            <h4>{item.subtitle}</h4>
            <AiOutlineCaretUp />
          </span>
        }
      >
        <ul className="flex flex-col justify-start gap-y-2 transition-all duration-300 ease-in-out">
          {item.submenu.map((link) => {
            return (
              <Link
                to={`/product/${link.navLinksRef}`}
                key={link.navLinksRef}
                className="pl-4 hover:bg-primary hover:text-bgcolortwo py-2 ransition-all duration-300 ease-in-out"
              >
                {link.navLinkText}
              </Link>
            );
          })}
        </ul>
      </Collapsible>
    );
  });
};

CategoryMenu.propTypes = {
  onNavClick: PropTypes.func,
};

export default CategoryMenu;
