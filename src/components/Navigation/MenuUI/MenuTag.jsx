import { PropTypes } from "prop-types";
import { MenuNavTag } from "../../../store/localdata";
import MenuActive from "./MenuActive";

const MenuTag = (props) => {
  const { onChangeMenuFunc, currentTag } = props;

  return (
    <ul className={`flex justify-start gap-x-4 text-base uppercase`}>
      {MenuNavTag.map((menu) => {
        return (
          <li
            key={menu.id}
            className={`cursor-pointer flex flex-col mr-4 items-center justify-center ${
              currentTag === menu.id ? "text-title" : "text-label"
            }
            }`}
            onClick={() => {
              onChangeMenuFunc(menu.id);
            }}
          >
            {menu.menu}
            {currentTag === menu.id && <MenuActive />}
          </li>
        );
      })}
    </ul>
  );
};

MenuTag.propTypes = {
  onChangeMenuFunc: PropTypes.func.isRequired,
  currentTag: PropTypes.string,
};

export default MenuTag;
