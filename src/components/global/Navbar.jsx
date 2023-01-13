import React, { useEffect, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { MdLocationPin } from "react-icons/md";
import { SiChatbot } from "react-icons/si";
import { useNavigate } from "react-router-dom";
import { useMap } from "react-leaflet";
import L from "leaflet";
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

const Navbar = ({ state, setState, setStateProfile }) => {
  const map = useMap();
  console.log(map);
  const [toggle, setToggle] = useState(false);
  const getUser = localStorage.getItem("user");
  const navigate = useNavigate();
  function handleChat(e) {
    e.preventDefault();
    setState(!state);
  }

  return (
    <>
      <div
        className={`z-[402] fixed top-0 w-full transition ${
          !toggle ? "" : "bg-white shadow-md"
        }  py-2 px-5 flex justify-end`}
        onMouseEnter={() => setToggle(true)}
        onMouseLeave={() => setToggle(false)}
      >
        {getUser ? (
          <p
            className="underline cursor-pointer"
            onClick={() => setStateProfile(true)}
          >
            Menu
          </p>
        ) : (
          <p
            className="underline cursor-pointer"
            onClick={() => navigate("login")}
          >
            Masuk
          </p>
        )}
      </div>
      <nav
        id="navbar"
        className="max-w-sm md:max-w-lg px-5 fixed left-0 right-0 mx-auto top-12 z-[400]"
      >
        <div
          className={`flex ${state ? "md:flex justify-center" : "md:block"}`}
        >
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
