import { makeAutoObservable } from "mobx";
import { makePersistable } from "mobx-persist-store";

class AuthStore {

  isAuth = false;

  userData = {
    id: "",
    name: "",
    email: "",
  };

  newData = []
  
  userId = []

  has_permission = []


  constructor() {
    makeAutoObservable(this);
    makePersistable(this, {
      name: "auth",
      storage: window.localStorage,
      properties: ["isAuth", "userData", "has_permission", "newData", "userId"]
    });
  }

  createUsersId(data) {
    this.userId.push(data)
  }

  
  hasPermission(id) {
    this.has_permission.push(id)
  }

  updateUserData(data) {
    this.userData = data
  }

  login() {
    this.isAuth = true;
  }

  hasNewData(data) {
    this.newData = data
  }

  logout() {
    this.isAuth = false;
  }
};


export const authStore = new AuthStore();

