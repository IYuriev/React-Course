import axios from "axios";

const API = "https://66d7109e006bfbe2e64fadb2.mockapi.io/todos";

const service = {
  get: (id) =>
    axios(id ? API + `/${id}` : API)
      .then(({ data }) => data)
      .catch((error) => console.log(error)),
  delete: (id) =>
    axios
      .delete(API + `/${id}`)
      .then(({ data }) => data)
      .catch((error) => console.log(error)),
  put: (id, item) =>
    axios
      .put(API + `/${id}`, item)
      .then(({ data }) => data)
      .catch((error) => console.log(error)),
  post: (item) =>
    axios
      .post(API, item)
      .then(({ data }) => data)
      .catch((error) => console.log(error)),
};

export default service;
