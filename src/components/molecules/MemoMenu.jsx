import React from "react";
import { memoMenus } from "../../utils/dummyMemoMenu";

const MemoMenu = ({ setMenuState, setToggleMenu }) => {
  function handleChangeMenu(e, name) {
    e.preventDefault();
    setMenuState(name);
    setToggleMenu(false);
  }
  return (
    <>
      <div className="fixed w-[300px] min-h-screen  border-r bg-white z-10">
        <div className="menus flex flex-col gap-3 p-3">
          {memoMenus.map((item) => (
            <div key={item.id} className="menu rounded-[10px] bg-blue-500 p-2">
              <p onClick={(e) => handleChangeMenu(e, item.name)}>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="fixed w-[400px] min-h-screen rounded-br-[10px] bg-black bg-opacity-70 z-[9]"></div>
    </>
  );
};

export default MemoMenu;
