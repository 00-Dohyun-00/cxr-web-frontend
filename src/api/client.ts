import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000", // FastAPI 서버 주소
});

// 백엔드 헬스체크 호출 함수
export const checkBackendHealth = async () => {
  const res = await api.get("/health");
  return res.data;
};

export default api;
