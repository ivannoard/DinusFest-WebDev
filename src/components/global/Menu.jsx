import React, { useState, useEffect } from "react";
import { MdClose } from "react-icons/md";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { CardMemo, MemoMenu } from "../molecules";
const Menu = ({ setStateProfile }) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [menuState, setMenuState] = useState("Memo Media");
  const [currentView, setCurrentView] = useState();

  useEffect(() => {
    switch (menuState) {
      case "Dashboard":
        return setCurrentView(<p>Dashboard</p>);
      case "Badge Saya":
        return setCurrentView(<p>Badge Saya</p>);
      case "Pengaturan":
        return setCurrentView(<p>Pengaturan</p>);
      default:
        return setCurrentView(
          <div className="memo-media">
            <CardMemo />
            <CardMemo />
            <CardMemo />
          </div>
        );
    }
  }, [menuState]);
  return (
    <>
      <div className="w-[400px] h-full fixed top-0 right-0 bg-white  z-[402]">
        <div className="profile-header p-3 flex justify-between items-center py-4 shadow-md">
          <div className="flex items-center gap-3">
            <HiOutlineMenuAlt2
              className="cursor-pointer"
              onClick={() => setToggleMenu(!toggleMenu)}
              size={18}
            />
            <h4 className="text-slate-900 text-[14px] font-semibold">
              MemoLife
            </h4>
          </div>
          <MdClose
            size={18}
            onClick={() => setStateProfile(false)}
            className="cursor-pointer"
          />
        </div>
        <div
          className={`h-[92%] ${
            toggleMenu ? "overflow-hidden" : "overflow-scroll"
          } relative`}
        >
          {toggleMenu && (
            <div className="overflow-hidden">
              <MemoMenu
                setMenuState={setMenuState}
                setToggleMenu={setToggleMenu}
              />
            </div>
          )}
          {currentView}
        </div>
      </div>
    </>
  );
};

export default Menu;
