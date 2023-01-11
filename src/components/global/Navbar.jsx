import React, { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { MdLocationPin } from "react-icons/md";
import { SiChatbot } from "react-icons/si";
import { Tooltip } from "react-tooltip";

function SearchLocation() {
  return (
    <>
      <div className="form-group flex items-center relative">
        <input
          type="text"
          placeholder="Cari lokasi . . . "
          className="border py-2 px-3 rounded-[10px] w-[350px] outline-none focus:border-orange-500"
        />
        <button className="absolute z-10 right-3 border-l border-slate-500 pl-2">
          <BiSearchAlt fill="#888888" />
        </button>
      </div>
    </>
  );
}
function ChatToBot() {
  return (
    <>
      <div className="form-group flex items-center relative">
        <input
          type="text"
          placeholder="Kamu mau cari apa?"
          className="border py-2 px-3 rounded-[10px] w-[350px] outline-none focus:border-orange-500"
        />
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
      <nav className="pt-10">
        <div className="max-w-lg mx-auto flex justify-center">
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
