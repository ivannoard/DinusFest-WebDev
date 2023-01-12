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
      <div className="w-[400px] fixed top-12 right-3 bg-white rounded-[10px] z-[11]">
        <div className="profile-header p-3 flex justify-between items-center pb-2 shadow-md">
          <div className="flex items-center gap-3">
            <HiOutlineMenuAlt2
              className="cursor-pointer"
              onClick={() => setToggleMenu(!toggleMenu)}
            />
            <h4 className="text-slate-900 font-semibold">MemoLife</h4>
          </div>
          <MdClose
            size={23}
            onClick={() => setStateProfile(false)}
            className="cursor-pointer"
          />
        </div>
        <div
          className={`h-[480px] ${
            toggleMenu ? "overflow-hidden" : "overflow-scroll"
          } relative`}
        >
          {toggleMenu && (
            <MemoMenu
              setMenuState={setMenuState}
              setToggleMenu={setToggleMenu}
            />
          )}
          {currentView}
        </div>
      </div>
    </>
  );
};

export default Menu;
