export default function setupAxios(axios, store) {
  //Axios Request
  axios.interceptors.request.use(
    (config) => {
      config.headers.Authorization = `Bearer`;

      return config;
    },
    (err) => Promise.reject(err)
  );

  // Axios Response
  axios.interceptors.response.use(
    (response) => {
      return {
        ...response.data,
        apiStatus: response.status,
      };
    },
    function (error: object) {
      return Promise.reject(error);
    }
  );
}
