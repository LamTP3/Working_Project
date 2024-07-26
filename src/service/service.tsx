import axios from "axios";
export const getAllProject = async () => {
  const response = await axios.get("http://localhost:9999/Project");
  return response.data;
};
