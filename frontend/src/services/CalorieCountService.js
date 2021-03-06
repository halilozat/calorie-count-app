/** Dependencies */
import axios from "axios";


const fetcher = axios.create({
  baseURL: "http://dev.calorie-count.com:5001/api",
  withCredentials: true
});

//fetcher.interceptors

export default class CalorieCountService {

  /** Auth */

  static AuthRegister(payload) {
    return fetcher.post("/v1/auth/register", payload);
  }

  static AuthLogin(payload) {
    return fetcher.post("/v1/auth/login", payload);
  }

  static AuthMe() {
    return fetcher.get("/v1/auth/me");
  }

  static AuthLogout() {
    return fetcher.get("/v1/auth/logout");
  }



  /** Foods */

  static GetFoods(query) {
    return axios.post("http://dev.calorie-count.com:5001/api/v1/foods/apiFoods", query);
  }

  static AddFood(payload) {
    return fetcher.post("/v1/foods/addFood", payload)
  }

  static GetUserFoods(userId) {
    return fetcher.get(`/v1/foods/getFoods/${userId}`)
  }

  static getBasketItems(userId) {
    return fetcher.get(`/v1/userFood/${userId}`);
  }

  static removeBasketItems(userId) {
    return fetcher.delete(`/v1/userFood/${userId}`);
  }


  /** Macros */

  static AddMacros(payload) {
    return fetcher.post("/v1/users/addMacros", payload)
  }

  static GetMacros(userId) {
    return fetcher.get(`/v1/users/getMacros/${userId}`)
  }
}