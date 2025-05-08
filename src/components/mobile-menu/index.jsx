import React from "react";
import NavItem from "../nav-item";

const MobileMenu = ({ isOpen = false, onClose }) => {
  const handleScrollTo = (id) => {
    onClose(); 
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      <div
        className={`absolute top-0 left-0 right-0 bg-almost-black opacity-50 z-10 min-h-[150vh] ${
          isOpen ? "flex" : "hidden"
        }`}
        onClick={onClose} 
      />
      
      <div
        className={`absolute right-0 top-0 w-1/2 bg-white justify-center z-20 min-h-[150vh] ${
          isOpen ? "flex" : "hidden"
        }`}
      >
        <nav className="my-20 mx-5 space-y-5 text-xl w-full font-montserrat">
          <NavItem text="Шақырту" onClick={() => handleScrollTo("invite")} />
          <NavItem text="Адрес" onClick={() => handleScrollTo("address")} />
          <NavItem text="Той фотолары" onClick={() => handleScrollTo("photos")} />
        </nav>
      </div>
    </>
  );
};

export default MobileMenu;
