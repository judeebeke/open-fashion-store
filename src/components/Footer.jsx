import { socialIcons, footerLinks } from "./../store/localdata";
import { Link } from "react-router-dom";
import SectionTitle from "./UI/SectionTitle";

const Footer = () => {
  return (
    <footer className="text-center py-12  flex flex-col justify-center items-center">
      <div className="flex gap-x-8 pb-6">
        {socialIcons.map((item) => {
          return (
            <i key={item.id} className="text-3xl">
              {item.icon}
            </i>
          );
        })}
      </div>
      <SectionTitle />
      <p className="text-center py-6">
        support@openui.design
        <br />
        +60 825 876
        <br />
        08:00 - 22:00 - Everyday
      </p>
      <SectionTitle />

      <ul className="flex gap-x-5 py-6">
        {footerLinks.map((link) => {
          return (
            <li key={link.id} className="uppercase hover:text-secondary">
              <Link to={`/${link.link}`}>{link.link}</Link>
            </li>
          );
        })}
      </ul>

      <p>Copyright© OpenUI All Rights Reserved.</p>
      <p>
        Developed by{" "}
        <a href="https://github.com/judeebeke" className="hover:text-secondary">
          Dev. Jude
        </a>
      </p>
    </footer>
  );
};

export default Footer;
