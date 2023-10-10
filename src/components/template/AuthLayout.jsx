import React from "react";
import { APKLogo } from "../../assets/images";
// import { SponsorLogo } from "../../assets/images";

const AuthLayout = ({ children }) => {
  return (
    <>
      <div className="min-h-screen min-w-screen flex justify-center items-center">
        <div className="md:w-1/4">
          <div className="card bg-white w-full rounded-[10px] px-6 md:px-10 py-10 border shadow-md">
            <img src={APKLogo} alt="" className="w-[200px] block mx-auto" />
            {/* <h1 className="text-center font-semibold text-[24px]">Memolife</h1> */}
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthLayout;
