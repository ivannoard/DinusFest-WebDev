import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthLayout } from "../../components/template";

const Register = () => {
  const [fields, setFields] = useState();
  const navigate = useNavigate();
  const [alert, setAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  function handleChange(e) {
    setFields({
      ...fields,
      [e.target.name]: e.target.value,
    });
  }
  async function handleRegister(e) {
    e.preventDefault();
    setAlert(true);
    setAlertMessage("Belum disetting");
    // await axios
    //   .post("url", fields, { headers: { "content-type": "application/json" } })
    //   .then((response) => {
    //     navigate("/login");
    //   });
  }
  useEffect(() => {
    setTimeout(() => {
      if (alert) setAlert(false);
    }, 2000);
  }, [alert]);
  return (
    <>
      <main>
        <AuthLayout>
          <form onSubmit={handleRegister} className="mt-3 relative">
            {alert && (
              <div className="absolute bg-red-500 w-full py-2 text-center text-white font-semibold rounded-[10px]">
                {alertMessage}
              </div>
            )}
            <div className="form-group">
              <label
                htmlFor="nama"
                className="text-sm font-semibold text-slate-500"
              >
                Nama
              </label>
              <input
                type="text"
                name="nama"
                id="nama"
                required
                className="text-sm bg-white px-3 py-2 block border w-full rounded-[10px] outline-none mt-2"
                placeholder="Masukkan Nama Anda"
                onChange={handleChange}
              />
            </div>
            <div className="form-group mt-3">
              <label
                htmlFor="telepon"
                className="text-sm font-semibold text-slate-500"
              >
                No. Telepon
              </label>
              <input
                type="text"
                name="telepon"
                id="telepon"
                required
                className="text-sm bg-white px-3 py-2 block border w-full rounded-[10px] outline-none mt-2"
                placeholder="Masukkan Nomor Telepon Anda"
                onChange={handleChange}
              />
            </div>
            <div className="form-group mt-3">
              <label
                htmlFor="email"
                className="text-sm font-semibold text-slate-500"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="text-sm bg-white px-3 py-2 block border w-full rounded-[10px] outline-none mt-2"
                placeholder="Masukkan Email Anda"
                onChange={handleChange}
              />
            </div>
            <div className="form-group mt-3">
              <label
                htmlFor="password"
                className="text-sm font-semibold text-slate-500"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                required
                className="text-sm bg-white px-3 py-1 block border w-full rounded-[10px] outline-none mt-2"
                placeholder="* * * * "
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="bg-slate-900 text-white font-semibold mt-5 w-full py-2 rounded-[10px]"
            >
              Daftar
            </button>
          </form>
          <p className="text-sm text-center mt-3">
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
