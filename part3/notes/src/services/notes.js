import axios from "axios";
const baseUrl = "/api/notes";

const getAll = () => {
  const request = axios.get(baseUrl);

  return request.then((response) => response.data);
};

const create = async (newObject) => {
  try {
    const request = axios.post(baseUrl, newObject);
    return request.then((response) => response.data);
  } catch (error) {
    console.log(`error is ${error};`);
    console.log(`error request is ${error.request};`);
  }
};

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject);
  return request.then((response) => response.data);
};

export default { getAll, create, update };
