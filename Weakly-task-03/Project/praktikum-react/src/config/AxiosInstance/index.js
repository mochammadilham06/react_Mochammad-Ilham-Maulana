import CONST from "../../utils/constant";
import axios from "axios";

const config = {
  baseURL: CONST.BASE_URL,
  headers: {
    "x-hasura-admin-secret": CONST.BASE_KEY,
  },
};

const axiosInstance = axios.create(config);

export default axiosInstance;
