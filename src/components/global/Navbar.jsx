import React, { useEffect, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { MdLocationPin } from "react-icons/md";
import { SiChatbot } from "react-icons/si";
import { useNavigate } from "react-router-dom";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { APKLogo } from "../../assets/images";
function SearchLocation({ handleChangeGetLocation, handleSearchLocation }) {
  return (
    <>
      <div className="form-group flex items-center relative w-full">
        <input
          type="text"
          name="location"
          id="location"
          placeholder="Cari lokasi . . . "
          onChange={handleChangeGetLocation}
          className="border py-2 px-3 rounded-[10px] w-full outline-none focus:border-sky-500"
        />
        <button
          onClick={(e) => handleSearchLocation(e)}
          className="absolute z-10 right-3 border-l border-slate-500 pl-2"
        >
          <BiSearchAlt fill="#888888" />
        </button>
      </div>
    </>
  );
}

const Navbar = ({
  state,
  setState,
  setStateProfile,
  setIdLocation,
  setMenuState,
  dataUser,
  setGetPosition,
  setGetSearchData
}) => {
  const [fields, setFields] = useState();
  const [alert, setAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const getUser = localStorage.getItem("user");
  const navigate = useNavigate();

  // get string from search input
  function handleChangeGetLocation(e) {
    e.preventDefault();
    setFields({
      ...fields,
      [e.target.name]: e.target.value,
    });
  }

  // post data
  function handleSearchLocation(e) {
    e.preventDefault();
    console.log(fields);
    if (!fields) {
      setAlert(true);
      setAlertMessage("Nama lokasi pencarian tidak boleh kosong");
      return;
    } else {
      setGetSearchData(fields)
    }

  }

  // get location user
  function handleGetLocation(e) {
    e.preventDefault();
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setGetPosition([latitude, longitude]);
    });
  }

  // toggle chat
  function handleChat(e) {
    e.preventDefault();
    setState(!state);
  }

  // toggle menu user
  const handleAccount = () => {
    setIdLocation("");
    setStateProfile(true);
    setMenuState("Profile");
  };

  useEffect(() => {
    setTimeout(() => {
      if (alert) setAlert(false);
    }, 2000);
  }, [alert]);

  return (
    <>
      <div className="z-[402] fixed top-0 w-full transition py-2 px-5 flex justify-end">
        {getUser ? (
          <div className="z-[800000]" onClick={() => handleAccount()}>
            {
              dataUser?.memolive_user[0].foto ?
                <img
                  className="w-[40px] h-[40px] rounded-full object-cover"
                  src={dataUser?.memolive_user[0].foto}
                  alt={dataUser?.memolive_user[0].nama}
                />
                :
                <div
                  className="w-[40px] h-[40px] rounded-full bg-white"
                />
            }
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
          className={`flex flex-col md:flex-row relative ${state ? "md:flex justify-center" : "md:block"
            }`}
        >
          <img src={APKLogo} alt="" className="w-[150px]" />
          <div className="bg-white py-2 px-4 rounded-[10px]">
            <form className="flex flex-wrap md:flex-nowrap gap-2 justify-center">
              {state ? (
                ""
              ) : (
                <SearchLocation
                  handleChangeGetLocation={handleChangeGetLocation}
                  handleSearchLocation={handleSearchLocation}
                />
              )}
              <button
                onClick={(e) => handleGetLocation(e)}
                className="bg-white p-[12px] rounded-[10px] border"
              >
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
          {alert && (
            <div className="mt-1 absolute top-28 md:top-24 left-0 right-0 bg-red-500 py-2 px-3 w-3/4 text-center mx-auto rounded-[10px] text-white font-semibold">
              <AiOutlineInfoCircle className="inline mr-1" />
              {alertMessage}
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
