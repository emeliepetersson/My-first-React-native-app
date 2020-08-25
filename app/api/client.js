import { create } from "apisauce";
import cache from "../utility/cache";
import authStorage from "../auth/storage";

const apiClient = create({
  baseURL: "http://192.168.0.12:9000/api",
});

//This is how we can call protected API endpoints (my listings)
apiClient.addAsyncRequestTransform(async (request) => {
  const authToken = await authStorage.getToken();
  if (!authToken) return;
  request.headers["x-auth-token"] = authToken;
});

const get = apiClient.get;
apiClient.get = async (url, params, axiosConfig) => {
  const response = await get(url, params, axiosConfig);

  if (response.ok) {
    cache.store(url, response.data);
    return response;
  }

  const data = await cache.get(url);
  //if the data exists we should return an object that looks like a successfull response
  // otherwise we want to return the original response object, because it contains info about why the call to the server failed.
  return data ? { ok: true, data } : response;
};

export default apiClient;
