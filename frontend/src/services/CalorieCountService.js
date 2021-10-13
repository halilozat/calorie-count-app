/** Dependencies */
import axios from "axios";


const fetcher = axios.create({
  baseURL: process.env.REACT_BASE_ENDPOINT,
});

console.log("api: " + process.env.REACT_BASE_ENDPOINT)

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
    return fetcher.get("/v1/foods", {
      params: {
        query: foodTerm
      }
    });
  }

  static getBasketItems(userId) {
    return fetcher.get(`/v1/userFood/${userId}`);
  }

  static removeBasketItems(userId) {
    return fetcher.delete(`/v1/userFood/${userId}`);
  }


}
