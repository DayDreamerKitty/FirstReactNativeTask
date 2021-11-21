import { instance } from "./instance";
import { makeAutoObservable } from "mobx";
import decode from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";

class AuthStore {
  user = null;

  constructor() {
    makeAutoObservable(this);
  }
  setUser = async (token) => {
    await AsyncStorage.setItem("myToken", token);
    // localStorage.setItem("myToken", token);
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    this.user = decode(token);
  };

  Signup = async (userData, navigation) => {
    try {
      const response = await instance.post("/signup", userData);
      this.setUser(response.data.token);
      navigation.replace("Home");
    } catch (error) {
      console.log(error);
    }
  };
  Signin = async (userData, navigation) => {
    try {
      const res = await instance.post("/signin", userData);
      this.setUser(res.data.token);
      navigation.replace("Home");
    } catch (error) {}
  };
  logout = async () => {
    delete instance.defaults.headers.common.Authorization;
    // localStorage.removeItem("myToken");
    await AsyncStorage.removeItem("myToken");
    this.user = null;
    console.log("logout");
  };
  checkForToken = async () => {
    const token = await AsyncStorage.getItem("myToken");
    if (token) {
      const currenTime = Date.now();
      let tempUser = decode(token);
      if (tempUser.exp >= currenTime) {
        this.setUser(token);
      } else {
        this.logout();
      }
    }
  };
}

const authStore = new AuthStore();
export default authStore;
