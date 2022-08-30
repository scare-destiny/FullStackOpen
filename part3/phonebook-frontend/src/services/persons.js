import axios from "axios";
const baseUrl = "api/persons";

const getAll = async () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const create = async (newObject) => {
  const request = await axios.post(baseUrl, newObject);
  return await request.data;
};

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject);
  return request.then((response) => response.data);
};

const deleteNote = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`);
  return request.then((response) => response.data);
};

export default {
  getAll,
  create,
  update,
  deleteNote,
};
