import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL || "http://127.0.0.1:8000/api";

const axiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 5000, 
});

const api = {
  get: async (url) => {
    try {
      const response = await axiosInstance.get(url);
      return response.data;
    } catch (error) {
      throw new Error("Error in GET request: " + error.message);
    }
  },

  post: async (url, data) => {
    try {
      const response = await axiosInstance.post(url, data);
      return response.data;
    } catch (error) {
      throw new Error("Error in POST request: " + error.message);
    }
  },

};

export default api;
