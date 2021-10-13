/** Dependencies */
import axios from "axios";

const fetcher = axios.create({
  baseURL: process.env.REACT_API_URL,
});

export default class CalorieCountService {
  /** Auth */
  static AuthRegister(payload) {
    return fetcher.post("/v1/auth/register", payload);
  }

  static AuthLogin(payload) {
    return fetcher.post("/v1/auth/login", payload);
  }

  static AuthMe(payload) {
    return fetcher.post("/v1/auth/me", payload);
  }

  static AuthLogout(payload) {
    return fetcher.post("/v1/auth/logout", payload);
  }

  /** Foods */
  static GetFoods(foodTerm) {
    return fetcher.get("/foods", {
      params: {
        query: foodTerm
      }
    });
  }
}
