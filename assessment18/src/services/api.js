import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "https://example.com/api",
  timeout: 8000,
});

api.interceptors.request.use((config) => {
  // optional: attach token if you later connect real backend
  const raw = localStorage.getItem("assessment18_auth");
  if (raw) {
    try {
      const auth = JSON.parse(raw);
      if (auth?.token) config.headers.Authorization = `Bearer ${auth.token}`;
    } catch {}
  }
  return config;
});

export default api;