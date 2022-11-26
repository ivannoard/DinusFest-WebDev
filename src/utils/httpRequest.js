const config = {
  headers: {
    "content-type": "application/json",
  },
};

export const postData = async (serviceAPI, endpoint, credentials) => {
  let isLoading = true;
  const error = [];
  const success = [];
  const response = await serviceAPI.post(`/${endpoint}`, credentials, config);
  if (response) {
    const data = await response;
    isLoading = false;
    success.push(data);
  } else {
    const data = await response;
    isLoading = false;
    error.push(data);
  }
  return { success, error, isLoading };
};

export const putData = async (serviceAPI, endpoint, credentials, id) => {
  let isLoading = true;
  const error = [];
  const success = [];
  const response = await serviceAPI.put(
    `/${endpoint}/${id}`,
    credentials,
    config
  );
  if (response) {
    const data = await response;
    isLoading = false;
    success.push(data);
  } else {
    const data = await response;
    isLoading = false;
    error.push(data);
  }
  return { success, error, isLoading };
};

export const deleteData = async (serviceAPI, endpoint, credentials, id) => {
  let isLoading = true;
  const error = [];
  const success = [];
  const response = await serviceAPI.delete(
    `/${endpoint}/${id}`,
    credentials,
    config
  );
  if (response) {
    const data = await response;
    isLoading = false;
    success.push(data);
  } else {
    const data = await response;
    isLoading = false;
    error.push(data);
  }
  return { success, error, isLoading };
};
