import React, { useState } from "react";
import LogoImg from "../assets/images/logo-black.png";
import { LinkData } from "../assets/data/dummydata";
import { NavLink } from "react-router-dom";
import { HiOutlineMenuAlt1 } from "react-icons/hi";

export const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-white py-4 text-black sticky z-50 shadow-md top-0 left-0 w-full">
      <div className="container flex justify-between items-center">
        <img src={LogoImg} alt="logo" className="logo flex justify-start h-5" />
        <div className="flex items-center gap-5">
          <nav className={open ? "mobile-view" : "desktop-view"}>
            <ul className="flex items-center gap-6">
              {LinkData.map((link) => (
                <li key={link.id} onClick={() => setOpen(null)}>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "text-primary text-sm" : "text-[15px]"
                    }
                    to={link.url}
                  >
                    {link.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <button className="open-menu" onClick={() => setOpen(!open)}>
            <HiOutlineMenuAlt1 size={25} />
          </button>
        </div>
      </div>
    </header>
  );
};
