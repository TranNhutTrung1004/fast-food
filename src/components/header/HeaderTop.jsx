import { useState } from "react";

import InforButton from "../button/InforButton";
import SearchBar from "./SearchBar";
import NavLinks from "./NavLinks";
import style from "./header.module.css";
import { getAssetUrl } from "../../utils/assetResolver";

const HeaderTop = () => {
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <div
      className={`${style.headerTop} w-full h-[75px] bg-light-sliver py-2 flex justify-between items-center`}
    >
      {/* Mobile Menu */}
      <div className="block md:hidden h-full">
        <button 
          className="btn-menu cursor-pointer hover:text-amber-500 transition-colors" 
          onClick={() => setIsOpenMenu(true)}
          aria-label="Open menu"
        >
          <i className="text-[30px] fa-solid fa-bars"></i>
        </button>
        
        {/* Backdrop */}
        {isOpenMenu && (
          <div 
            className="fixed inset-0 bg-black/50 z-[999] animate-fadeIn"
            onClick={() => setIsOpenMenu(false)}
          />
        )}
        
        {/* Sidebar Menu */}
        <div className={`fixed top-0 left-0 bottom-0 max-h-full bg-light-sliver w-[280px] px-4 z-[1000] shadow-2xl transition-transform duration-300 overflow-y-auto ${isOpenMenu ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="relative w-full py-4">
            <button 
              className="absolute right-1 top-1 w-10 h-10 flex items-center justify-center rounded-full hover:bg-black/20 transition-colors cursor-pointer text-white" 
              onClick={() => setIsOpenMenu(false)}
              aria-label="Close menu"
            >
              <i className="fa-solid fa-times text-[24px]"></i>
            </button>
            <NavLinks />
          </div>
        </div>
      </div>
      
      {/* Logo */}
      <div className="header-logo h-[100%]">
        <a
          href="/"
          onClick={() => location.reload()}
          className="link-img-logo h-full block"
        >
          <img
            src={getAssetUrl("icons/Logo.png")}
            alt="Logo"
            className="header-img-logo h-full object-contain"
          />
        </a>
      </div>
      
      {/* Desktop Search */}
      <div className="hidden md:block w-[30%]">
        <SearchBar />
      </div>
      
      {/* Mobile Search */}
      <div className="block md:hidden">
        <button 
          className="btn-search cursor-pointer hover:text-amber-500 transition-colors" 
          onClick={() => setIsOpenSearch(prev => !prev)}
          aria-label="Toggle search"
        >
          <i className="text-[20px] fa-solid fa-magnifying-glass"></i>
        </button>
        {isOpenSearch && (
          <div className="absolute top-[80px] left-0 w-full px-4 z-[998] animate-slideDown">
            <SearchBar />
          </div>
        )}
      </div>
      
      {/* User Actions */}
      <div className="hidden md:flex w-fit justify-between items-center gap-5">
        <InforButton
          text="sign in"
          iconClass="fa-solid fa-right-to-bracket"
        />
        <InforButton 
          text="sign up" 
          iconClass="fa-solid fa-users"
        />
        <InforButton
          text="bookmark"
          iconClass="fa-regular fa-bookmark"
        />
      </div>
    </div>
  );
};

export default HeaderTop;
