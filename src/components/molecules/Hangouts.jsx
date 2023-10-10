// import { useEffect } from "react";

const Hangouts = ({ data }) => {
  // useEffect(() => {
  //   data.map((item) => {
  //     console.log(item)
  //   })
  // }, [])
  return (
    <>
      <div className="card-memo my-4 py-2 px-6">
        <div className="flex flex-row flex-wrap gap-4">
          <div className="basis-[1/3]">
            <div className="min-h-[100px] min-w-[100px] bg-slate-50 border rounded"></div>
            <p className="py-2 text-center font-semibold">
              Tugu Muda
            </p>
          </div>
          <div className="basis-[1/3]">
            <div className="min-h-[100px] min-w-[100px] bg-slate-50 border rounded"></div>
            <p className="py-2 text-center font-semibold">
              Simpang Lima
            </p>
          </div>
          <div className="basis-[1/3]">
            <div className="min-h-[100px] min-w-[100px] bg-slate-50 border rounded"></div>
            <p className="py-2 text-center font-semibold">
              Kota Lama
            </p>
          </div>
          <div className="basis-[1/3]">
            <div className="min-h-[100px] min-w-[100px] bg-slate-50 border rounded"></div>
            <p className="py-2 text-center font-semibold">
              Pleburan
            </p>
          </div>
          <div className="basis-[1/3]">
            <div className="min-h-[100px] min-w-[100px] bg-slate-50 border rounded"></div>
            <p className="py-2 text-center font-semibold">
              Dkost
            </p>
          </div>
          <div className="basis-[1/3]">
            <div className="min-h-[100px] min-w-[100px] bg-slate-50 border rounded"></div>
            <p className="py-2 text-center font-semibold">
              Brumbungan
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
export default Hangouts;