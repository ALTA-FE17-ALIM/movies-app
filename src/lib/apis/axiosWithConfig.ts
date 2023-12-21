/* eslint-disable prefer-const */
import axios from "axios";

let token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZjI5NjVhMTMyZGY4ZmZkOGJmYjIyODZmNDIzYjUxMiIsInN1YiI6IjY1NjVmMjRhYzJiOWRmMDBjNjlkYTllYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.R_Fz7PU5ZbAHDkFfZe9XgkKkprNQsl_NIFqaX9cVrks";

const axiosWithConfig = axios.create();


axiosWithConfig.interceptors.request.use((axiosConfig) => {
  axiosConfig.baseURL = "https://api.themoviedb.org/3/";
  axiosConfig.headers['Authorization'] = "Bearer " + token
  axiosConfig.params = {
    ...axiosConfig.params,
    language: "en-US",
  };

  return axiosConfig;
});

export default axiosWithConfig;
