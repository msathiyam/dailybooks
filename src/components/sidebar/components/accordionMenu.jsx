import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function AccordionMenu({ items }) {
  const location = useLocation();
  const current_path = location.pathname;
  const [activeIndex, setActiveIndex] = useState(0);
  
  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <div>
      {items.map((menu, index) => (
        <div key={menu.name} className="py-2 pl-5 cursor-pointer">
          <div onClick={() => handleClick(index)} className="uppercase pl-2 text-[12px] font-medium text-[#6E78AC] hover:text-[#3761EE]" >
            {menu.name}
          </div>
          {index === activeIndex && (
            <div>
              {menu.subMenu.map((subMenu, i) => {
                return (
                  <div
                    class={`p-2 flex flex-row items-center text-[12px] ${
                      current_path.includes(subMenu.path)
                        ? "border-r-4  border-primary w-25"
                        : ""
                    }`}
                  >
                    <Link class="flex" to={subMenu?.path}>
                      <img
                        src={subMenu?.image}
                        alt="sideMenu.image 0"
                        className="w-4"
                      />
                      <span className="ml-3 uppercase">{subMenu?.name}</span>
                    </Link>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default AccordionMenu;
