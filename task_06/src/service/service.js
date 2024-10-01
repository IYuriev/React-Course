import axios from "axios";
import { API } from "../constants/constants";

const service = {
  get: () =>
    axios(API)
      .then(({ data }) => data)
      .catch((error) => console.error(error)),
};

export { service };
