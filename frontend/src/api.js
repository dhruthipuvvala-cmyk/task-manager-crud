import axios from "axios";

const api = axios.create({
  baseURL: "http://task-manager-crud.railway.internal/api/tasks",
});

export default api;