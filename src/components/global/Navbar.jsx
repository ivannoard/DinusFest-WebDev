import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { MdLocationPin } from "react-icons/md";
import { SiChatbot } from "react-icons/si";
import { useNavigate } from "react-router-dom";
function SearchLocation() {
  return (
    <>
      <div className="form-group flex items-center relative w-full">
        <input
          type="text"
          placeholder="Cari lokasi . . . "
          className="border py-2 px-3 rounded-[10px] w-full outline-none focus:border-sky-500"
        />
        <button className="absolute z-10 right-3 border-l border-slate-500 pl-2">
          <BiSearchAlt fill="#888888" />
        </button>
      </div>
    </>
  );
}

const Navbar = ({ state, setState, setStateProfile, setIdLocation, setMenuState }) => {
  const getUser = localStorage.getItem("user");
  const navigate = useNavigate();
  function handleChat(e) {
    e.preventDefault();
    setState(!state);
  }
  const handleAccount = () => {
    setIdLocation('')
    setStateProfile(true)
    setMenuState('Profile')
  }

  return (
    <>
      <div className="z-[402] fixed top-0 w-full transition py-2 px-5 flex justify-end">
        {getUser ? (
          <div
            className="w-[40px] h-[40px] rounded-full bg-blue-600"
            onClick={() => handleAccount()}
          >

          </div>
        ) : (
          <button
            className="bg-blue-600 text-white font-semibold px-4 py-2"
            onClick={() => navigate("login")}
          >
            Masuk
          </button>
        )}
      </div>
      <nav
        id="navbar"
        className="max-w-sm md:max-w-lg px-5 fixed left-0 right-0 mx-auto top-24 md:top-12 z-[400]"
      >
        <div
          className={`flex ${state ? "md:flex justify-center" : "md:block"}`}
        >
          <div className="bg-white py-2 px-4 rounded-[10px]">
            <form className="flex flex-wrap md:flex-nowrap gap-2 justify-center">
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
