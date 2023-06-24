import Collapsible from "react-collapsible";

const WomenMenu = () => {
  return womenNavLinks.map((item) => {
    return (
      <Collapsible
        key={item.subtitle}
        trigger={
          <span className="w-full flex justify-between pr-4">
            <h4>{item.subtitle}</h4>
            <AiOutlineCaretDown />
          </span>
        }
        triggerWhenOpen={
          <span className="w-full flex justify-between pr-4">
            <h4>{item.subtitle}</h4>
            <AiOutlineCaretUp />
          </span>
        }
      >
        {item.submenu.map((link) => {
          return <Link key={link.navLinksRef}>{link.navLinkText}</Link>;
        })}
      </Collapsible>
    );
  });
};

export default MenMenu;
