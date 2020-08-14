import { create } from "apisauce";
import cache from "../utility/cache";

const apiClient = create({
  baseURL: "http://192.168.0.12:9000/api",
});

const get = apiClient.get;
apiClient.get = async (url, params, axiosConfig) => {
  const response = await get(url, params, axiosConfig);

  if (response.ok) {
    cache.store(url, response.data);
    return response;
  }

  const data = await cache.get(url);
  //if the data exists we should return an object that looks lika a successfull response
  // otherwise we want to return the original response object, because it contains info about why the call to the server failed.
  return data ? { ok: true, data } : response;
};

export default apiClient;
