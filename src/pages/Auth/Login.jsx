import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthLayout } from "../../components/template";

// query
import { useLazyQuery } from "@apollo/client";
import { GET_USER_BY_EMAIL } from "../../graphql/user";

const Login = () => {
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

  const [getDataById] = useLazyQuery(GET_USER_BY_EMAIL, {
    onCompleted: (data) => {
      if (data.memolive_user.length === 0) {
        // console.log("data tidak ada");
        setAlert(true);
        setAlertMessage("Ups, pengguna tidak ditemukan");
      } else {
        const loginData = {
          user_id: data?.memolive_user[0]?.user_id,
          nama: data?.memolive_user[0]?.nama,
          username: data?.memolive_user[0]?.username,
        };
        // console.log(data?.memolive_user[0]?.user_id)
        localStorage.setItem("user", JSON.stringify(loginData));
        navigate("/");
      }
    },
    onError: (error) => {
      // console.log('Terjadi error di getDataByID lazyQuery', { error });
      setAlert(true);
      setAlertMessage("Ups, sepertinya email atau password salah");
    },
  });

  async function handleLogin(e) {
    e.preventDefault();
    getDataById({
      variables: {
        email: fields.email,
        password: fields.password,
      },
    });
    // await axios
    //   .post("url", fields, { headers: { "Content-Type": "application/json" } })
    //   .then((response) => {
    //     localStorage.setItem("user", JSON.stringify(fields));
    //     navigate("/");
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
          <form onSubmit={handleLogin} className="mt-3 relative">
            {alert && (
              <div className="absolute bg-red-500 w-full py-2 text-center text-white font-semibold rounded-[10px]">
                {alertMessage}
              </div>
            )}
            <div className="form-group">
              <label
                htmlFor="email"
                className="text-sm font-semibold text-slate-500"
              >
                Email
              </label>
              <input
                type="text"
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
            <button className="bg-slate-900 text-white font-semibold mt-5 w-full py-2 rounded-[10px]">
              Masuk
            </button>
          </form>
          <p className="text-sm text-center mt-3">
            Belum punya akun?{" "}
            <span
              className="text-sm text-orange-500 font-semibold cursor-pointer"
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
