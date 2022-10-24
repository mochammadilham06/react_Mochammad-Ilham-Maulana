import axiosInstance from "../../config/AxiosInstance";

const APIUser = {
  async getAllUser() {
    try {
      const response = await axiosInstance.get("/user");
      return response;
    } catch (error) {
      console.log(error);
    }
  },
};

export default APIUser;
