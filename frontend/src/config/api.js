const normalizeBaseUrl = (value) => {
  if (!value) return "";
  return value.trim().replace(/\/$/, "");
};

const envBaseUrl = normalizeBaseUrl(import.meta.env.VITE_BE_URL);
const fallbackBaseUrl = import.meta.env.DEV ? "http://localhost:4040" : "";

export const API_BASE_URL = envBaseUrl || fallbackBaseUrl;

export const getApiUrl = (path = "") => {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;

  if (!API_BASE_URL) {
    return cleanPath;
  }

  return `${API_BASE_URL}${cleanPath}`;
};
