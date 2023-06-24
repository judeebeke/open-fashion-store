const MenuActive = () => {
  return (
    <div className="menu-active-title-icon w-[60px] transition-all duration-700 ease-in-out">
      <div className="menu-active-line"></div>
      <div className={`menu-active-diamond w-[7px] h-[7px] bg-secondary`}></div>
    </div>
  );
};

export default MenuActive;
