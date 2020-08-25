import { useState } from "react";

export default useApi = (apiFunc) => {
  //Declare a state variable to store the data that we get from the server
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = async (...args) => {
    setLoading(true);
    // beacause we will get data from different APIs we use a prop named apiFunc here
    const response = await apiFunc(...args);
    setLoading(false);

    //if the response is not ok, setError to true, otherwise to false
    setError(!response.ok);
    setData(response.data);
    return response;
  };

  // these are the function and variables our compontents need access to
  return { request, data, error, loading };
};
