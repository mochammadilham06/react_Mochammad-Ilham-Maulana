import axios from "axios";
import { CONST } from "../../utils";

const config = {
  baseURL: CONST.BASE_URL,
  headers: {
    "x-hasura-admin-secret": CONST.REACT_APP_KEY_ID,
  },
};

export const axiosInstance = axios.create(config);
