import { useState, useEffect } from "react";
import { PropTypes } from "prop-types";
import { motion, AnimatePresence } from "framer-motion";

import { AiOutlineClose } from "react-icons/ai";
import { MdOutlineGpsFixed } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";

import {
  kidsNavLinks,
  menNavLinks,
  womenNavLinks,
  socialIcons,
} from "../../store/localdata";

import CategoryMenu from "./MenuUI/CategoryMenu";
import MenuTag from "./MenuUI/MenuTag";
import SectionTitle from "../UI/SectionTitle";
import { hoverLinkTransition } from "../../style";

const MobileNav = (props) => {
  let { onNavClick, isNavOpen } = props;
  const [activeMenu, setActiveMenu] = useState("ladies_all");

  useEffect(() => {
    localStorage.setItem("product-category", activeMenu);
  }, [activeMenu]);

  const animationVariants = {
    initial: { height: 0, width: 0, opacity: 0, borderRadius: "0%" },
    visible: {
      height: ["10vh", "50vh", "100vh"],
      width: ["10vw", "50vw", "100vw"],
      opacity: [0, 0.5, 1],
      borderRadius: ["50%", "20%", "0%"],
    },
    exit: {
      height: ["100vh", "50vh", "0vh"],
      width: ["100vw", "50vw", "0vw"],
      opacity: [1, 0.5, 0],
      borderRadius: ["0%", "20%", "50%"],
    },
  };

  let content;

  if (activeMenu === "ladies_all") {
    content = womenNavLinks;
  }
  if (activeMenu === "men_all") {
    content = menNavLinks;
  }
  if (activeMenu === "kids_all") {
    content = kidsNavLinks;
  }

  return (
    <AnimatePresence>
      {isNavOpen && (
        <motion.nav
          className="absolute nav-scroll top-0 left-0 flex flex-col gap-y-4 justify-start py-20 px-4 bg-offwhite z-50 transition-opacity duration-300 overflow-auto"
          variants={animationVariants}
          initial="initial"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.3 }}
        >
          <motion.span
            className={`text-4xl absolute top-4 left-4 cursor-pointer text-primary hover:text-secondary ${hoverLinkTransition}`}
            exit={{ opacity: 0 }}
            onClick={onNavClick}
          >
            <AiOutlineClose />
          </motion.span>
          <div className="mb-2">
            <MenuTag onChangeMenuFunc={setActiveMenu} currentTag={activeMenu} />
          </div>
          <span className="text-base capitalize w-full">
            <CategoryMenu
              currentMenu={content}
              active={activeMenu}
              onCloseNav={onNavClick}
            />
          </span>
          <div className="text-base relative place-self-start flex-col mb-4">
            <span className="flex items-center mb-3">
              <BsTelephone /> <p className="ps-3">+234-9023176236</p>
            </span>
            <span className="flex items-center">
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
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

MobileNav.propTypes = {
  onNavClick: PropTypes.func.isRequired,
  isNavOpen: PropTypes.bool.isRequired,
};

export default MobileNav;
