import { axiosInstance } from "../configs/AxiosInstance";

const APITodo = {
  async getAllTodo() {
    try {
      const response = await axiosInstance.get("/todolist");
      console.log(response);
      return response;
    } catch (err) {
      console.log(err);
    }
  },
  async createTodos(data) {
    try {
      const response = await axiosInstance.post("/todolist", data);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  async updateTodo(data) {
    try {
      const id = data.id;
      const response = await axiosInstance.patch(`/todolist/${id}`, data);
      return response;
    } catch (error) {
      console.log(error);
    }
  },

  async deleteTodoById(id) {
    try {
      const response = await axiosInstance.delete(`/todolist/${id}`);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
};

export default APITodo;
