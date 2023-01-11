import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthLayout } from "../../components/template";

const Register = () => {
  const [fields, setFields] = useState();
  const navigate = useNavigate();
  function handleChange(e) {
    setFields({
      ...fields,
      [e.target.name]: e.target.value,
    });
  }
  function handleRegister(e) {
    e.preventDefault();
  }
  return (
    <>
      <main>
        <AuthLayout>
          <form onSubmit={handleRegister} className="mt-3">
            <div className="form-group">
              <label htmlFor="nama" className="font-semibold text-slate-500">
                Nama
              </label>
              <input
                type="text"
                name="nama"
                id="nama"
                className="bg-white px-3 py-2 block border w-full rounded-[10px] outline-none mt-2"
                placeholder="Masukkan Email Anda . . ."
                onChange={handleChange}
              />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="telepon" className="font-semibold text-slate-500">
                No. Telepon
              </label>
              <input
                type="text"
                name="telepon"
                id="telepon"
                className="bg-white px-3 py-2 block border w-full rounded-[10px] outline-none mt-2"
                placeholder="Masukkan Nomor Telepon Anda . . ."
                onChange={handleChange}
              />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="email" className="font-semibold text-slate-500">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-white px-3 py-2 block border w-full rounded-[10px] outline-none mt-2"
                placeholder="Masukkan Email Anda . . ."
                onChange={handleChange}
              />
            </div>
            <div className="form-group mt-3">
              <label
                htmlFor="password"
                className="font-semibold text-slate-500"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="bg-white px-3 py-1 block border w-full rounded-[10px] outline-none mt-2"
                placeholder="* * * * "
                onChange={handleChange}
              />
            </div>
            <button className="bg-slate-900 text-white font-semibold mt-5 w-full py-3 px-5 rounded-[10px]">
              Masuk
            </button>
          </form>
          <p className="text-center mt-3">
            Sudah punya akun?{" "}
            <span
              className="text-orange-500 font-semibold cursor-pointer"
              onClick={() => navigate("/login")}
            >
              Masuk Sekarang
            </span>
          </p>
        </AuthLayout>
      </main>
    </>
  );
};

export default Register;
