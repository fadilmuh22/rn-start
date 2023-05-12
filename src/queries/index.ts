import axios from "axios";

export const BASE_URL = process.env.BASE_URL;

export const getPing = async () => {
  const response = await axios.get(`${BASE_URL}/ping`);
  return response.data;
};
