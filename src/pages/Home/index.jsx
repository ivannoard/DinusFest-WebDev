import React, { useContext } from "react";
import { postData } from "../../utils/httpRequest";
import { serviceHookbin } from "../../services";
import { AuthContext } from "../../context/authContext";

const Home = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const credentials = {
    name: "ivan2",
  };
  const handleSubmit = async () => {
    await postData(serviceHookbin, "postData", credentials);
  };
  return (
    <div className="App">
      <button onClick={handleSubmit}>Kirim MockAPI</button>
    </div>
  );
};

export default Home;
