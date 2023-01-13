import React from "react";

const CardMemo = () => {
  return (
    <div className="card-memo my-4 py-2 px-6">
      <div className="card-memo-header flex items-center gap-3 mb-3">
        <div className="bg-slate-300 rounded-full w-[40px] h-[40px]"></div>
        <div>
          <h5 className="font-semibold text-sm">ini._.ivan</h5>
          <p className="text-sm text-slate-500">Semarang, Indonesia</p>
        </div>
      </div>
      <div className="bg-slate-600 w-full h-[300px] mt-2">asd</div>
      <div className="card-memo-caption mt-2">
        <h5 className="font-semibold text-sm">ini._.ivan</h5>
        <p className="text-sm text-slate-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          amet consequatur praesentium ratione est eligendi itaque cumque at
          labore molestias nisi quia illum laudantium facilis tempora ea,
          temporibus ullam aliquam!
        </p>
      </div>
    </div>
  );
};

export default CardMemo;
