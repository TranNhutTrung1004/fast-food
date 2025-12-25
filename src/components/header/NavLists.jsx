const NavList = ({ children, isSubMenu = true }) => {
  return (
    <ul
      className={`nav__list text-[14px] md:text-[16px] h-full ${
        isSubMenu
          ? "flex flex-col justify-start items-start md:flex-row md:justify-between md:items-center gap-2 md:gap-4 py-4"
          : "w-full grid grid-cols-3 gap-2 text-[12px] md:text-[14px]"
      }`}
    >
      {children}
    </ul>
  );
};

export default NavList;
