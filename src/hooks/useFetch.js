import { useState, useEffect } from "react";

const useFetch = (requestServiceAPI, requestEndpoint, requestId) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [success, setSuccess] = useState();

  const getData = async (serviceAPI, endpoint, config, id = "") => {
    try {
      const response = await serviceAPI.get(`/${endpoint}/${id}`, config);
      // console.log(response);
      if (response) {
        const data = await response;
        setData(data);
        setIsLoading(false);
        setSuccess(data);
      } else {
        const data = await response;
        setIsLoading(false);
        setError(data);
      }
    } catch (e) {
      setIsLoading(false);
      setError(e);
    }
  };
  useEffect(() => {
    const requestConfig = {
      headers: {
        "content-type": "application/json",
      },
    };
    if (requestEndpoint)
      getData(requestServiceAPI, requestEndpoint, requestConfig, requestId);
  }, [requestEndpoint, requestId, requestServiceAPI]);
  return { data, isLoading, error, success };
};
export default useFetch;
