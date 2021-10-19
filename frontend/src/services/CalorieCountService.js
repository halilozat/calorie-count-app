/** Dependencies */
import axios from "axios";


const fetcher = axios.create({
  baseURL: "http://dev.calorie-count.com:5001/api",
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
    return fetcher.get("/v1/foods/getApiFoods", {
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
