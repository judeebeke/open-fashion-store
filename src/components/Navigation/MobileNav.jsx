import { useState } from "react";
import { PropTypes } from "prop-types";

import { AiOutlineClose } from "react-icons/ai";
import { MdOutlineGpsFixed } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
// import { Link } from "react-router-dom";

import {
  kidsNavLinks,
  menNavLinks,
  womenNavLinks,
  socialIcons,
} from "../../store/localdata";

// import { flexCenter, hoverLinkTransition } from "../../style";
import CategoryMenu from "./MenuUI/CategoryMenu";
import MenuTag from "./MenuUI/MenuTag";
import SectionTitle from "../UI/SectionTitle";

const MobileNav = (props) => {
  let { onNavClick } = props;
  const [activeMenu, setActiveMenu] = useState("women-menu");

  let content;

  if (activeMenu === "women-menu") {
    content = womenNavLinks;
  }
  if (activeMenu === "men-menu") {
    content = menNavLinks;
  }
  if (activeMenu === "kids-menu") {
    content = kidsNavLinks;
  }

  return (
    <nav className="absolute top-0 left-0 w-screen h-screen flex flex-col gap-y-4 justify-start py-20 px-4 bg-offwhite z-50 transition-opacity duration-300 overflow-auto">
      <span
        className="text-4xl absolute top-4 left-4 cursor-pointer text-primary"
        onClick={onNavClick}
      >
        <AiOutlineClose />
      </span>
      <div className="mb-2">
        <MenuTag onChangeMenuFunc={setActiveMenu} currentTag={activeMenu} />
      </div>
      <span className="text-base capitalize w-full">
        <CategoryMenu currentMenu={content} onOpen={open} />
      </span>
      <div className="text-base relative place-self-start flex-col justify-start mb-4">
        <span className="flex justify-center items-center">
          <BsTelephone /> <p className="ps-3">+234-9023176236</p>
        </span>
        <span className="flex justify-center items-center">
          <MdOutlineGpsFixed /> <p className="ps-3">Store Location</p>
        </span>
      </div>
      <SectionTitle />
      <div className="flex pb-6">
        <ul className="mx-auto flex justify-center gap-x-8 mt-5">
          {socialIcons.map((item) => {
            return (
              <i key={item.id} className="text-3xl">
                {item.icon}
              </i>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

MobileNav.propTypes = {
  onNavClick: PropTypes.func.isRequired,
};

export default MobileNav;