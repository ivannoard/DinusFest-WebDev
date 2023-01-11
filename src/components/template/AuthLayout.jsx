import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <>
      <div className="grid grid-cols-12 min-h-screen w-full">
        <div className="col-span-8 bg-green-500">qwe</div>
        <div className="col-span-4 bg-red-500 flex justify-center items-center px-10">
          <div className="card bg-white w-full rounded-[10px] p-3">
            <h1 className="text-center font-semibold text-[24px]">Memolife</h1>
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthLayout;
