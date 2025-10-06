import axios from "axios";

// URL do seu back-end publicado na Vercel
const API_URL = "https://atv-express-postgre-d3sv.vercel.app/api";

const api = axios.create({
  baseURL: API_URL,
});

export const getTasks = () => api.get("/tarefas");
export const createTask = (task) => api.post("/tarefas", task);
export const updateTask = (id, task) => api.put(`/tarefas/${id}`, task);
export const deleteTask = (id) => api.delete(`/tarefas/${id}`);

export default api;