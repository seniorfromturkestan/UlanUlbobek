import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import MobileMenu from "../mobile-menu";
import toiga from "../../images/Тойғашақыру.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="fixed top-0 left-0  w-full bg-white bg-opacity-70 z-50">
      <header className="flex items-center py-2 pr-2">
        <nav>
          <img src={toiga} alt="" className="w-52 ml-3"/>
        


        </nav>
        
        <div
          onClick={toggleMenu}
          className="flex cursor-pointer z-30 ml-auto"
        >
          {isMobileMenuOpen ? (
            <div>
                <AiOutlineClose className="text-3xl" />
            </div>
          
          ) : (
            <div>
            <AiOutlineMenu className="text-3xl mr-2" />
            <p className="text-[10px] font-montserrat">Меню</p>
            </div>

            
          )}
        </div>

        <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMenu} />
      </header>
    </div>
  );
};

export default Header;
