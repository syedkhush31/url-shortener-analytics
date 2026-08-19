import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const shortenUrl = (url) =>
  API.post("/shorten", {
    original_url: url,
  });

export const getAllUrls = () => API.get("/urls");

export const deleteUrl = (id) => API.delete(`/urls/${id}`);

export default API;
