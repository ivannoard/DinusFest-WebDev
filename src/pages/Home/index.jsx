import React from "react";
import { postData } from "../../utils/httpRequest";
import { serviceHookbin } from "../../services";

const Home = () => {
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
