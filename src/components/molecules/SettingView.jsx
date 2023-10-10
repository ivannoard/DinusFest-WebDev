import React, { useState } from "react";
import { useEffect } from "react";
import { MdImage } from "react-icons/md";
import { GET_USER_BY_ID, UPDATE_USER_BY_EMAIL } from '../../graphql/user'
import { useMutation, useSubscription } from "@apollo/client";


const SettingView = ({ setMenuState }) => {
  const [userId, setUserId] = useState();

  const { data, loading } = useSubscription(GET_USER_BY_ID, { variables: { user_id: userId } });
  const [updateUser, { loading: loadingPost }] = useMutation(UPDATE_USER_BY_EMAIL, {
    onCompleted(data) {
      console.log(data)
    },
    onError(error) {
      console.log(error)
    }
  })
  const [file, setFile] = useState();
  const [fields, setFields] = useState({
    foto: "",
    nama: "",
    username: "",
    email: "",
    telephone: ""
  });


  function handleFileChange(e) {
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  function handleChange(e) {
    setFields({
      ...fields,
      [e.target.name]: e.target.value,
    });
  }
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  }
  const handleFileUpload = async (e) => {
    // e.preventDefault();
    handleFileChange(e)
    const file = e.target.files[0];
    const base64 = await convertToBase64(file)
    setFields({
      ...fields,
      [e.target.name]: base64,
    });
  }
  const submitUpload = (e) => {
    e.preventDefault();
    updateUser({
      variables: {
        user_id: userId,
        email: fields.email,
        foto: fields.foto,
        nama: fields.nama,
        telephone: fields.telephone,
        username: fields.username
      }
    })
    setMenuState('Profile')
    // console.log('data')
  }
  useEffect(() => {
    if (localStorage.getItem('user')) {
      const data = JSON.parse(localStorage.getItem('user'));
      setUserId(data.user_id)
    }
    if (data) {
      setFields({
        foto: data.memolive_user[0].foto,
        nama: data.memolive_user[0].nama,
        username: data.memolive_user[0].username,
        email: data.memolive_user[0].email,
        telephone: data.memolive_user[0].telephone,
      })
    }
  }, [userId, data])
  console.log(data)
  return (
    <div className="my-4 px-4">
      {
        loading || loadingPost ?
          <div className="flex justify-center h-full items-center">
            <div role="status">
              <svg aria-hidden="true" className="w-20 h-20 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
              </svg>
            </div>
          </div>
          :
          <form onSubmit={submitUpload} className="rounded-lg p-3 border">
            <div className=" flex flex-row">
              {
                file
                  ?
                  <img className="rounded-md h-[120px] w-[120px] object-cover" src={file} alt="Foto" />
                  :
                  <MdImage
                    size={120}
                    className="text-slate-300"
                  />
              }
              <input onChange={handleFileUpload} name="foto" className="rounded-md self-center ml-4" type="file" />
            </div>
            <div>
              <label className="block my-4">
                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                  Nama
                </span>
                <input onChange={handleChange} type="text" value={fields.nama} name="nama" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="" />
              </label>
              <label className="block my-4">
                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                  Username
                </span>
                <input onChange={handleChange} type="text" value={fields.username} name="username" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="" />
              </label>
              <label className="block my-4">
                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                  Email
                </span>
                <input disabled onChange={handleChange} type="email" value={fields.email} name="email" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 disabled:bg-slate-200" placeholder="" />
              </label>
              <label className="block my-4">
                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                  Telephone
                </span>
                <input onChange={handleChange} type="text" value={fields.telephone} name="telephone" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="" />
              </label>
            </div>
            <div className="my-2 mt-6">
              <button type="submit" className="py-3 px-4 bg-sky-600 rounded-md text-[14px] text-white font-semibold">
                Submit
              </button>
            </div>
          </form>
      }
    </div>
  )
}
export default SettingView;