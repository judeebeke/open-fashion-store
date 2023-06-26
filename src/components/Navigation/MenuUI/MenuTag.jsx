import { PropTypes } from "prop-types";

import { MenuNavTag } from "../../../store/localdata";
import MenuActive from "./MenuActive";

const MenuTag = (props) => {
  const { onChangeMenuFunc, currentTag } = props;

  return (
    <span className={`flex justify-start gap-x-6 `}>
      {MenuNavTag.map((menu) => {
        return (
          <button
            role="button"
            key={menu.id}
            className={`cursor-pointer flex flex-col mr-4 items-center justify-center text-base uppercase ${
              currentTag === menu.id ? "text-title" : "text-label"
            }
            }`}
            onClick={() => {
              onChangeMenuFunc(menu.id);
            }}
          >
            <span className="pb-1">{menu.menu}</span>
            {currentTag === menu.id && <MenuActive />}
          </button>
        );
      })}
    </span>
  );
};

MenuTag.propTypes = {
  onChangeMenuFunc: PropTypes.func.isRequired,
  currentTag: PropTypes.string,
};

export default MenuTag;
