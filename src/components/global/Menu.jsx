import React, { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { MdAddPhotoAlternate, MdOutlineClose } from "react-icons/md";
import { CardMemo, Profile, PostPhoto, SettingView } from "../molecules";
import { useNavigate } from "react-router-dom";

// query
import { useQuery, useSubscription } from "@apollo/client";
import { GET_USER_BY_ID } from '../../graphql/user'
import { ALL_FEED_DATA_BY_LOCATION } from '../../graphql/feed'

const Menu = ({ setStateProfile, menuState, setMenuState, locationId }) => {

  const navigate = useNavigate();

  const [toggleMenu, setToggleMenu] = useState(false);
  const [currentView, setCurrentView] = useState();
  const [user, setUser] = useState();
  const { data: dataUser } = useSubscription(GET_USER_BY_ID, {
    fetchPolicy: 'network-only',
    variables: { user_id: user?.user_id }
  });
  const { data, loading: isLoading } = useQuery(ALL_FEED_DATA_BY_LOCATION, {
    fetchPolicy: 'network-only',
    variables: { location_id: locationId }
  });
  const handleMenu = (state) => {
    setMenuState(state)
    setToggleMenu(!toggleMenu)
  }

  const logOut = () => {
    localStorage.removeItem('user');
    setToggleMenu(!toggleMenu)
    setStateProfile(false)
    navigate('/')
  }

  useEffect(() => {
    switch (menuState) {
      case "Profile":
        return setCurrentView(<Profile setMenuState={setMenuState} />);
      case "PostPhoto":
        return setCurrentView(<PostPhoto setMenuState={setMenuState} />);
      case "Setting":
        return setCurrentView(<SettingView setMenuState={setMenuState} />);
      default:
        return setCurrentView(
          <div className="memo-media h-full">
            {
              isLoading ?
                <div className="flex justify-center h-full items-center">
                  <div role="status">
                    <svg aria-hidden="true" className="w-20 h-20 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                    </svg>
                  </div>
                </div>
                :
                <CardMemo setMenuState={setMenuState} type="menu" data={data?.memolive_feed} />
            }
          </div>
        );
    }
  }, [menuState, data, isLoading, setMenuState]);
  useEffect(() => {
    if (localStorage.getItem('user')) {
      const user = JSON.parse(localStorage.getItem('user'))
      setUser(user)
    }
  }, [])
  return (
    <>
      <div className="profile w-full md:w-[400px] h-full fixed top-0 right-0 bg-white  z-[9998]">
        <div className="profile-header p-3 items-center py-4 shadow-md">
          <div className="flex items-center gap-3">
            <MdOutlineClose
              className="cursor-pointer self-center"
              size={26}
              onClick={() => setStateProfile(false)}
            />
            {
              menuState === 'Profile' &&
              <MdAddPhotoAlternate
                className="cursor-pointer self-center"
                onClick={() => setMenuState('PostPhoto')}
                size={26}
              />
            }
            <div
              onClick={() => setToggleMenu(!toggleMenu)}
              className="flex ml-auto">
              <div>
                {
                  dataUser.memolive_user[0].foto ?
                    <img className="rounded-full w-[40px] h-[40px] mr-3 object-cover" src={dataUser?.memolive_user[0].foto} alt="" />
                    :
                    <div className="rounded-full w-[40px] h-[40px] mr-3 bg-slate-500" />

                }
              </div>
              <div className="flex flex-row">
                <div>
                  <h5 className="font-semibold text-sm">{user?.username}</h5>
                  <p className="text-sm text-slate-500">{user?.nama}</p>
                </div>
                <IoIosArrowDown
                  className="mt-1 ml-3"
                  size={18}
                />
              </div>
            </div>
            <div id="dropdown" className={`${toggleMenu ? 'absolute top-[80px] right-[20px]' : 'hidden'} z-[9999] bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700`}>
              <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                <li>
                  <span onClick={() => handleMenu('Profile')} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Profile</span>
                  <span onClick={() => handleMenu('Setting')} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Setting</span>
                  <span onClick={() => logOut()} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Log Out</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
        <div
          className={`h-[92%] mb-8 overflow-x-hidden ${toggleMenu ? "overflow-hidden" : "overflow-scroll"
            } relative`}
        >
          {currentView}
        </div>
      </div>
    </>
  );
};

export default Menu;
