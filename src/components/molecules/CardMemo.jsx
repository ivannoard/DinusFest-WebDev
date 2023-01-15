import React from "react";
import { MdCameraEnhance } from "react-icons/md";

const CardMemo = ({ data, setMenuState }) => {
  // console.log(data)
  return (
    <>
      {
        data?.length >= 0 ?
          data?.map((item, index) => (
            <div key={index} className="card-memo my-2 py-1 px-6">
              <div className="card-memo-header flex items-center gap-3 mb-3">
                <div className="bg-slate-300 rounded-full w-[40px] h-[40px]"></div>
                <div>
                  <h5 className="font-semibold text-sm">{item?.diposting.nama}</h5>
                  <p className="text-sm text-slate-500">{item?.lokasi_photo.nama_lokasi}, Semarang</p>
                </div>
              </div>
              <img src={item.foto} className="rounded-md max-h-[300px]  min-w-full object-cover" alt="" />
              <div className="card-memo-caption my-2 mt-2">
                <h5 className="font-semibold text-sm">{item.diposting.username}</h5>
                <p className="text-sm text-slate-500">
                  {item.caption}
                </p>
              </div>
              {/* <div>
                {
                  type === 'menu' ? "" :
                    <p className="cursor-pointer">
                      {item?.post_by_location.length} Orang mengunjungi lokasi ini
                    </p>
                }
              </div> */}
            </div>
          ))
          :
          <div div className="flex px-4 justify-center mt-24 flex-col text-center">
            <div className="text-center">
              <MdCameraEnhance
                className="mx-auto"
                size={48}
              />
            </div>
            <h1 className="text-2xl font-semibold my-2">Berbagi Foto</h1>
            <p className="text-md my-2">Tambahkan cerita dan kenangan perjalanan anda</p>
            <p onClick={() => setMenuState('PostPhoto')} className="text-md my-2 underline">Tambahkan Cerita</p>
          </div>
      }
    </>
  );
};

export default CardMemo;
