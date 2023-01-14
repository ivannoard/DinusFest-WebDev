import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <>
      <div className="min-h-screen min-w-screen flex justify-center items-center">
        <div className="w-1/4">
          <div className="card bg-white w-full rounded-[10px] px-10 py-10 border shadow-md">
            <h1 className="text-center">Logo</h1>
            <h1 className="text-center font-semibold text-[24px]">Memolife</h1>
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthLayout;
