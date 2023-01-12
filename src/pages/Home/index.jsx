import React, { useContext } from "react";
import { postData } from "../../utils/httpRequest";
import { serviceHookbin } from "../../services";
import { AuthContext } from "../../context/authContext";
// query
import { useQuery } from "@apollo/client";
import { GET_ALL_USER } from '../../graphql/user'
const Home = () => {
  // uji coba query // success
  const { data, loading, error } = useQuery(GET_ALL_USER);

  const { user } = useContext(AuthContext);
  console.log(user);
  const credentials = {
    name: "ivan2",
  };
  const handleSubmit = async () => {
    await postData(serviceHookbin, "postData", credentials);
  };
  console.log(data)
  return (
    <div className="App">
      <button onClick={handleSubmit}>Kirim MockAPI</button>
    </div>
  );
};

export default Home;
