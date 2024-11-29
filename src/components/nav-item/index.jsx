import React from 'react'



const NavItem = ({ text, onClick }) => {
  return (
    <div 
      onClick={onClick} 
      className="cursor-pointer hover:underline"
    >
      {text}
    </div>
  );
};
export default NavItem;


