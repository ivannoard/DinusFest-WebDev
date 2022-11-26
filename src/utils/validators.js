/* 
  isEmpty mengambil parameter objek
  setiap values dari object akan diambil dan akan dimasukkan array
  dari array yang didapatkan akan dilakukan looping untuk mengetahui nilainya
*/
const isEmpty = (obj) => {
  if (Object.values(obj).every((x) => x === null || x === "")) return true;
  return false;
};

// err == useState
export const validateLogin = (values, err) => {
  let temp = {};
  temp.email = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(values.email)
    ? ""
    : "Email is not valid";
  temp.password = /^[\W\w]{6,}$/.test(values.password)
    ? ""
    : "Min 6 characters";
  err({ ...temp });

  if (isEmpty(temp)) return true;
  return false;
};

export const validateRegister = (values, err) => {
  let temp = {};
  temp.fullname = /^[a-zA-Z][a-zA-Z ]+$/.test(values.fullname)
    ? ""
    : "Name is not valid";
  temp.email = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(values.email)
    ? ""
    : "Email is not valid";
  temp.password = /^[\W\w]{6,}$/.test(values.password)
    ? ""
    : "Min 6 characters";
  err({ ...temp });

  if (isEmpty(temp)) return true;
  return false;
};
