import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import style from "./header.module.css";

const NavItem = ({ label, href, children }) => {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpen(false);
    }, 300);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  if (children) {
    return (
      <li
      className={`nav__item ${style["nav__item--has-sub"]} ${open ? "open" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      >
        <button
          type="button"
          className={`nav__link ${style["nav__link--button"]} text-[13px] md:text-[14px] lg:text-[16px] uppercase w-full text-left hover:text-amber-200 transition-colors py-2`}
          aria-haspopup="true"
          onClick={() => setOpen(!open)}
        >
          {label}
          <i className={open ? "fa-solid fa-chevron-up ml-1" : "fa-solid fa-chevron-down ml-1"}></i>
        </button>
        <div
          className={`nav__submenu md:absolute md:top-full md:px-4 md:py-4 md:bg-dark-sliver px-3 py-2 bg-black/80 rounded-md mt-2 md:mt-0 transition-all duration-300 ${open ? "block" : "hidden"}`}
        >
          {children}
        </div>
      </li>
    );
  }

  return (
    <li className="nav__item w-auto">
      <NavLink 
        to={href} 
        className={({ isActive }) => 
          `nav__link block text-[13px] md:text-[14px] lg:text-[16px] uppercase text-left md:text-center py-2 md:py-0 hover:text-amber-200 transition-colors ${isActive ? 'text-amber-300 font-semibold' : 'text-white'}`
        }
      >
        {label}
      </NavLink>
    </li>
  );
};

export default NavItem;