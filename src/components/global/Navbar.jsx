import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { MdLocationPin } from "react-icons/md";
import { SiChatbot } from "react-icons/si";
function SearchLocation() {
  return (
    <>
      <div className="form-group flex items-center relative w-full">
        <input
          type="text"
          placeholder="Cari lokasi . . . "
          className="border py-2 px-3 rounded-[10px] w-full outline-none focus:border-orange-500"
        />
        <button className="absolute z-10 right-3 border-l border-slate-500 pl-2">
          <BiSearchAlt fill="#888888" />
        </button>
      </div>
    </>
  );
}

const Navbar = ({ state, setState }) => {
  function handleChat(e) {
    e.preventDefault();
    setState(!state);
  }
  return (
    <>
      <nav className="max-w-sm md:max-w-lg px-5 bg-green-500 fixed left-0 right-0 mx-auto top-5 z-10">
        <div className={`flex ${state ? "md:flex" : "md:block"}`}>
          <div className="bg-white py-2 px-4 rounded-[10px]">
            <form className="flex gap-2">
              {state ? "" : <SearchLocation />}
              <button className="bg-white p-[12px] rounded-[10px] border">
                <MdLocationPin fill="#888888" />
              </button>
              <button
                className="bg-white p-[12px] rounded-[10px] border"
                onClick={(e) => handleChat(e)}
              >
                {state ? (
                  <BiSearchAlt fill="#888888" />
                ) : (
                  <SiChatbot fill="#888888" />
                )}
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
