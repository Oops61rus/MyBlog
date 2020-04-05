class Logout {
  constructor() {
    this.init = () => {
      this.logOutBtn = document.querySelector(".logOut");
      this.logOutBtn.addEventListener("click", () => {
        this.clearCookies();
        window.location = "/";
      });
    };
  }

  clearCookies() {
    Cookies.remove("accessToken");
    Cookies.remove("refreshToken");
    Cookies.remove("name");
    Cookies.remove("id");
  }
}

const logOut = new Logout();
logOut.init();
