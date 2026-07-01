import axios from "axios";

const api = axios.create({
  baseURL: "http://task-manager-crud-production.up.railway.app/api/tasks",
});

export default api;