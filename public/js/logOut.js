import Cookies from 'js-cookie'

export default class Logout {
  constructor() {
    this.storage = window.localStorage;
    this.cookie = document.cookie;

    this.init = () => {
      this.logOutBtn = document.querySelector(".logout");
      this.logOutBtn.addEventListener("click", () => {
        this.clearStorage();
        this.clearCookies();
        window.location = "/";
      });
    };
  }

  clearStorage() {
    this.storage.removeItem("token");
  }

  clearCookies() {
    Cookies.remove("token");
    Cookies.remove("userName");
  }
}

const logOut = new LogOut();
logOut.init();
