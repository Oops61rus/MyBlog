class Logout {
  constructor() {
    this.storage = window.localStorage;
    this.cookie = document.cookie;

    this.init = () => {
      this.logOutBtn = document.querySelector(".logOut");
      this.logOutBtn.addEventListener("click", () => {
        this.clearStorage();
        this.clearCookies();
        window.location = "/";
      });
    };
  }

  clearStorage() {
    this.storage.removeItem("accessToken");
    this.storage.removeItem("refreshToken");
  }

  clearCookies() {
    Cookies.remove("accessToken");
    Cookies.remove("refreshToken");
  }
}

const logOut = new Logout();
logOut.init();
