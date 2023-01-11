import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthLayout } from "../../components/template";

const Login = () => {
  const [fields, setFields] = useState();
  const navigate = useNavigate();
  function handleChange(e) {
    setFields({
      ...fields,
      [e.target.name]: e.target.value,
    });
  }
  function handleLogin(e) {
    e.preventDefault();
    navigate("/");
  }
  return (
    <>
      <main>
        <AuthLayout>
          <form onSubmit={handleLogin} className="mt-3">
            <div className="form-group">
              <label htmlFor="email" className="font-semibold text-slate-500">
                Email
              </label>
              <input
                type="text"
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
            Belum punya akun?{" "}
            <span
              className="text-orange-500 font-semibold cursor-pointer"
              onClick={() => navigate("/register")}
            >
              Daftar Sekarang
            </span>
          </p>
        </AuthLayout>
      </main>
    </>
  );
};

export default Login;
