import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000/api",
});

export const insertNote = (payload) => api.post(`/note`, payload);
export const getAllNotes = () => api.get(`/notes`);
export const deleteNoteById = (id) => api.delete(`note/${id}`);

const apis = {
  insertNote,
  getAllNotes,
  deleteNoteById,
};

export default apis;
